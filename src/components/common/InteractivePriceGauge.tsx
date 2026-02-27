import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { CrabIcon, SafeIcon } from './PriceIcons';
import { useTheme } from '../../design';
import { LinearGradient as ViewGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { logger } from '../../lib/logger';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.92;

import type { Place, Pricing, PricingView } from '../../types/model';

export interface InteractivePriceGaugeProps {
  pricingView?: PricingView;
  activeColor?: string;
  smartTip?: string;
  triggerComponent?: React.ReactNode;
}

export const PriceMiniBadge = ({ view }: { view?: PricingView }) => {
  const { color, barFillPercent } = usePricePresentation(view);
  if (!view) return null;

  const displayValue = view.card_display.price.replace('€', '');

  return (
    <View style={miniBadgeStyles.badge}>
      <View style={miniBadgeStyles.track}>
        <View
          style={[miniBadgeStyles.fill, { width: `${barFillPercent}%`, backgroundColor: color }]}
        />
      </View>
      <View style={miniBadgeStyles.textRow}>
        <Text style={miniBadgeStyles.amount}>{displayValue}</Text>
        <Text style={miniBadgeStyles.currency}>€</Text>
      </View>
    </View>
  );
};

const miniBadgeStyles = StyleSheet.create({
  badge: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    gap: 4,
    minWidth: 44,
  },
  track: {
    width: 34,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 2,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amount: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: '900',
    fontFamily: 'Inter_900Black',
  },
  currency: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.6)',
    marginLeft: 1,
    fontWeight: '700',
  },
  levelLabel: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-black',
    letterSpacing: 0.5,
  },
});

import { usePricePresentation } from '../../hooks/usePricePresentation';

export const InteractivePriceGauge = ({
  pricingView,
  activeColor = '#FF2D55',
  smartTip,
  triggerComponent,
}: InteractivePriceGaugeProps) => {
  const { isDark } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);

  // 2026 Hook-Based Logic ⚡️
  const {
    color: cursorColor,
    label: defaultLevelLabel,
    barFillPercent,
    isFree,
  } = usePricePresentation(pricingView);

  // UNWRAP VIEW MODEL 🎁
  const view = {
    avg_price: pricingView?.avg_price ?? 0,
    level: pricingView?.level ?? 2,
    card_display: pricingView?.card_display || {
      label: 'Prix',
      price: '-',
      value: 0,
      highlight: false,
      badge: undefined,
    },
    menu: pricingView?.menu || [],
    confidence: pricingView?.confidence,
  };

  const { label, price, highlight, badge } = view.card_display;
  const menu = view.menu || [];
  const pinceLabel = pricingView?.pince_label || defaultLevelLabel;

  // Animations
  const animatedWidth = useSharedValue(0);

  useEffect(() => {
    if (modalVisible) {
      animatedWidth.value = withTiming(barFillPercent, { duration: 600 });
    } else {
      animatedWidth.value = 0;
    }
  }, [modalVisible, barFillPercent]);

  const animatedBarStyle = useAnimatedStyle(() => ({
    width: `${animatedWidth.value}%`,
  }));

  const handleOpen = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    logger.trackEvent('price_gauge_opened', { level: view.level, label });
    setShowFullMenu(false);
    setModalVisible(true);
  };

  const handleClose = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setModalVisible(false);
  };

  return (
    <>
      <Pressable onPress={handleOpen}>
        {triggerComponent ? (
          triggerComponent
        ) : (
          <View style={[styles.miniTrigger, { backgroundColor: activeColor + '10' }]}>
            <CrabIcon size={18} color={activeColor} />
            <Text style={[styles.miniTitle, { color: activeColor }]}>{pinceLabel}</Text>
            <View style={[styles.miniBarTrack, { backgroundColor: cursorColor + '18' }]}>
              <View
                style={[
                  styles.miniBarFill,
                  { width: `${barFillPercent}%`, backgroundColor: cursorColor },
                ]}
              />
            </View>
            {price !== '-' && (
              <Text style={{ fontSize: 15, fontWeight: '800', color: activeColor, marginLeft: 6 }}>
                {price}
              </Text>
            )}
            <Ionicons name="chevron-forward" size={16} color={activeColor + '80'} />
          </View>
        )}
      </Pressable>

      <Modal transparent visible={modalVisible} animationType="fade" onRequestClose={handleClose}>
        <View style={styles.modalOverlay}>
          <Pressable style={StyleSheet.absoluteFill} onPress={handleClose}>
            <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill} />
          </Pressable>

          <Animated.View entering={FadeIn.duration(200)} style={styles.cardWrapper}>
            <View style={[styles.card, isDark && { backgroundColor: '#1C1C1E' }]}>
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
              >
                {showFullMenu ? (
                  <>
                    <Pressable onPress={() => setShowFullMenu(false)} style={styles.backButtonRow}>
                      <Ionicons name="arrow-back" size={20} color={activeColor} />
                      <Text style={[styles.backButtonText, { color: activeColor }]}>Retour</Text>
                    </Pressable>

                    <View style={styles.headerSection}>
                      <Text style={[styles.headerTitle, { color: activeColor }]}>MENU COMPLET</Text>
                    </View>

                    <View style={styles.categoriesSection}>
                      {menu.map(
                        (
                          cat: { category: string; items: { name: string; price: string }[] },
                          idx: number,
                        ) => (
                          <View key={idx} style={styles.categoryBlock}>
                            <View style={styles.categoryHeader}>
                              <Ionicons name="restaurant-outline" size={16} color={activeColor} />
                              <Text style={styles.categoryTitle}>{cat.category}</Text>
                            </View>
                            {cat.items?.map((item: { name: string; price: string }, i: number) => (
                              <View key={i} style={styles.itemRow}>
                                <Text style={styles.itemName} numberOfLines={1}>
                                  {item.name}
                                </Text>
                                <View style={styles.dotLine}>
                                  <View style={styles.dotLineInner} />
                                </View>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                              </View>
                            ))}
                          </View>
                        ),
                      )}
                      {menu.length === 0 && (
                        <Text
                          style={{ color: '#9CA3AF', fontStyle: 'italic', textAlign: 'center' }}
                        >
                          Aucun menu disponible.
                        </Text>
                      )}
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.headerSection}>
                      <View style={styles.headerTitleRow}>
                        <Text style={[styles.headerTitle, { color: activeColor }]}>
                          LA BARRE DES PINCES
                        </Text>
                        {view.confidence && (
                          <View
                            style={[
                              styles.confidenceBadge,
                              { backgroundColor: view.confidence.color + '15' },
                            ]}
                          >
                            <View
                              style={[
                                styles.confidenceDot,
                                { backgroundColor: view.confidence.color },
                              ]}
                            />
                            <Text style={[styles.confidenceText, { color: view.confidence.color }]}>
                              {view.confidence.label}
                            </Text>
                          </View>
                        )}
                      </View>
                      <Text style={styles.headerSubtitle}>Est-ce que c'est un bon plan ?</Text>
                    </View>

                    {/* GAUGE */}
                    <View style={styles.barContainer}>
                      <View style={styles.barTrackOuter}>
                        <View style={styles.barTrack}>
                          <View style={styles.benchmarkLine}>
                            <View style={styles.benchmarkPointer} />
                            <Text style={styles.benchmarkLabel}>STANDARD</Text>
                          </View>
                          <Animated.View
                            style={[styles.barFill, animatedBarStyle, { overflow: 'hidden' }]}
                          >
                            <ViewGradient
                              colors={[cursorColor + 'BF', cursorColor]}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={{ flex: 1 }}
                            />
                          </Animated.View>
                        </View>
                      </View>
                      <View style={styles.barLabels}>
                        <View style={styles.barLabelGroup}>
                          <CrabIcon size={14} color={activeColor} />
                          <Text style={[styles.barLabelText, { color: activeColor }]}>CHEAP</Text>
                        </View>
                        <View style={styles.barLabelGroup}>
                          <Text style={styles.barLabelText}>CHER</Text>
                          <SafeIcon size={14} color="#9CA3AF" />
                        </View>
                      </View>
                    </View>

                    {/* RESTORED: "Pince" Details */}
                    <View style={styles.metricsRow}>
                      <View>
                        <Text style={[styles.levelLabel, { color: cursorColor }]}>
                          {pricingView?.pince_label || pinceLabel}
                        </Text>
                        <Text style={styles.benchmarkText}>
                          {pricingView?.benchmark_label || 'vs benchmark Paris'}
                        </Text>
                      </View>
                      <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.deviationText}>
                          {pricingView?.deviation_text || `${view.avg_price}€`}
                        </Text>
                        <Text style={styles.contextText}>
                          {pricingView?.price_context || 'pour un lieu à Paris'}
                        </Text>
                      </View>
                    </View>

                    {/* BIG NUMBER Display */}
                    <View style={styles.anchorBox}>
                      <View style={styles.anchorLeft}>
                        <Text style={styles.anchorPrice}>{price}</Text>
                        <Text style={styles.anchorLabel}>
                          {pricingView?.card_display.description || label}
                        </Text>
                      </View>
                      <View style={styles.anchorRight}>
                        <Ionicons
                          name="information-circle-outline"
                          size={20}
                          color="rgba(255,255,255,0.4)"
                        />
                      </View>
                    </View>

                    {smartTip && (
                      <View style={styles.tipBox}>
                        <Ionicons name="bulb-outline" size={18} color={activeColor} />
                        <Text style={styles.tipText} numberOfLines={2}>
                          {smartTip}
                        </Text>
                      </View>
                    )}

                    {/* PREVIEW MENU (First 3 items of first category) */}
                    {menu.length > 0 && menu[0].items && (
                      <View style={styles.categoriesSection}>
                        <View style={styles.categoryBlock}>
                          <View style={styles.categoryHeader}>
                            <Ionicons name="star-outline" size={16} color={activeColor} />
                            <Text style={styles.categoryTitle}>{menu[0].category}</Text>
                          </View>
                          {menu[0].items
                            .slice(0, 3)
                            .map((item: { name: string; price: string }, i: number) => (
                              <View key={i} style={styles.itemRow}>
                                <Text style={styles.itemName} numberOfLines={1}>
                                  {item.name}
                                </Text>
                                <View style={styles.dotLine}>
                                  <View style={styles.dotLineInner} />
                                </View>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                              </View>
                            ))}
                        </View>
                      </View>
                    )}

                    <Pressable
                      onPress={() => setShowFullMenu(true)}
                      style={({ pressed }) => [
                        styles.fullMenuBtn,
                        {
                          backgroundColor: activeColor + '15',
                          opacity: pressed ? 0.7 : 1,
                          borderColor: activeColor + '30',
                        },
                      ]}
                    >
                      <Text style={[styles.fullMenuBtnText, { color: activeColor }]}>
                        VOIR TOUT LE MENU
                      </Text>
                      <Ionicons name="arrow-forward" size={16} color={activeColor} />
                    </Pressable>
                  </>
                )}
              </ScrollView>
            </View>

            <Pressable style={styles.closeBtn} onPress={handleClose}>
              <Ionicons name="close" size={24} color="rgba(255,255,255,0.8)" />
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

// Styles (Preserved mostly, cleaned up unused)
const styles = StyleSheet.create({
  miniTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    gap: 10,
    // width: '100%' // flexible
  },
  miniTitle: { fontSize: 15, fontWeight: '600' },
  miniBarTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  miniBarFill: { height: '100%', borderRadius: 4 },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardWrapper: {
    width: CARD_WIDTH,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#1C1C1E',
    borderRadius: 28,
    paddingVertical: 28,
    paddingHorizontal: 20,
    maxHeight: height * 0.85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 10,
  },
  scrollContent: { paddingBottom: 32 },
  headerSection: {
    marginBottom: 24,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  headerSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
    fontWeight: '500',
  },
  confidenceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 6,
  },
  confidenceDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  confidenceText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  barContainer: { marginBottom: 20 },
  barTrackOuter: { padding: 0, backgroundColor: 'transparent', borderRadius: 16 },
  barTrack: {
    height: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  benchmarkLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: 1,
    zIndex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  benchmarkPointer: { width: 1.5, height: '100%', backgroundColor: 'rgba(255,255,255,0.3)' },
  benchmarkLabel: {
    position: 'absolute',
    top: -12,
    fontSize: 8,
    fontWeight: '900',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: 0.5,
  },
  barFill: { height: '100%', borderRadius: 7 },
  barLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  barLabelGroup: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  barLabelText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#9CA3AF',
  },

  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  benchmarkText: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.4)',
    fontWeight: '500',
  },
  deviationText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '700',
  },
  contextText: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.4)',
    textAlign: 'right',
  },
  levelLabel: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'PlayfairDisplay_700Bold',
    letterSpacing: -1,
  },
  anchorBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  anchorLeft: {
    flexDirection: 'column',
  },
  anchorPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF',
  },
  anchorLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '500',
    marginTop: 2,
  },
  anchorRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceBlock: {
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  priceRow: { flexDirection: 'row', alignItems: 'baseline' },
  priceBig: {
    fontSize: 48,
    fontWeight: '800',
    fontFamily: 'PlayfairDisplay_700Bold',
    letterSpacing: -2,
  },
  priceCurrency: { fontSize: 24, fontWeight: '700', marginLeft: 4, color: 'rgba(255,255,255,0.5)' },
  priceDesc: { fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: -4 },

  tipBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 16,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#E5E7EB',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },

  categoriesSection: { width: '100%', marginTop: 8 },
  categoryBlock: { marginBottom: 24 },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingBottom: 8,
  },
  categoryTitle: { fontSize: 14, fontWeight: '700', color: '#FFF', letterSpacing: 1 },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: { fontSize: 15, color: '#E5E7EB', flexShrink: 1, marginRight: 10 },
  itemPrice: { fontSize: 15, fontWeight: '600', color: '#FFF' },
  dotLine: { flex: 1, height: 1, overflow: 'hidden', marginHorizontal: 8 },
  dotLineInner: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)', width: '100%' },

  fullMenuBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    marginTop: 8,
  },
  fullMenuBtnText: { fontSize: 13, fontWeight: '800', letterSpacing: 1 },

  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'flex-start',
    marginLeft: 4,
  },
  backButtonText: { marginLeft: 6, fontWeight: '600', fontSize: 15 },

  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
  },
});

export default InteractivePriceGauge;
