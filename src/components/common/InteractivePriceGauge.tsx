import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, TouchableWithoutFeedback, Dimensions, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CrabIcon, SafeIcon } from './PriceIcons';
import { useTheme } from '../../design';
import { fontFamilies } from '../../design/tokens/typography';
import Animated, { useAnimatedProps, withTiming, useSharedValue, FadeIn, useAnimatedStyle } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';



const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.88;
const RING_PADDING = 16;
const RING_SIZE = CARD_WIDTH + RING_PADDING * 2;
const STROKE_WIDTH = 6;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;



interface PriceCategory {
    icon: string;
    title: string;
    items: { name: string; price: string }[];
}

interface Props {
    placeType: 'bar' | 'restaurant' | 'cafe' | 'club' | 'hotel' | 'culture' | 'park' | 'other';
    averagePrice: number;
    currency?: string;
    percentageVsAverage?: number;
    categories?: PriceCategory[];
    triggerComponent?: React.ReactNode;
    isHappyHourActive?: boolean;
    activeColor?: string;
    tip?: string;
}

export const InteractivePriceGauge = ({
    placeType,
    averagePrice,
    currency = '€',
    percentageVsAverage,
    categories = [],
    triggerComponent,
    isHappyHourActive = false,
    activeColor = '#000',
    tip
}: Props) => {
    const { theme } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);

    // LOGIQUE "PINCE" (Inversée):
    // Deviation = (Prix - Reference) / Reference * 100
    // Negative deviation (-50%) => Prix bas => C'est une "Pince" => Score élevé (100%)
    // Positive deviation (+50%) => Prix haut => Pas une pince => Score bas (0%)
    // 0% deviation => Score moyen (50%)

    // Formula: Score = 50 - deviation
    // e.g. -50 => 100 (Full Pince)
    // e.g. +50 => 0 (Pigeon)
    const deviation = percentageVsAverage || 0;
    const pinceScore = Math.min(100, Math.max(0, 50 - deviation));

    const priceSubtitle = useMemo(() => {
        if (placeType === 'restaurant') return 'Repas complet avec boisson';
        if (placeType === 'bar') return 'Pinte 50cl / Cocktail';
        if (placeType === 'cafe') return 'Café + viennoiserie';
        if (placeType === 'hotel') return 'Cocktail / Verre de vin';
        if (placeType === 'culture') return 'Ticket Entrée';
        if (placeType === 'park') return 'Accès (souvent gratuit)';
        return 'Prix moyen';
    }, [placeType]);

    const priceContextLabel = useMemo(() => {
        switch (placeType) {
            case 'bar': return 'des bars à Paris';
            case 'cafe': return 'des cafés à Paris'; // Normalized "cafe" string
            case 'club': return 'des clubs à Paris';
            case 'hotel': return 'des hôtels à Paris';
            case 'culture': return 'des sorties culture';
            case 'park': return 'des parcs parisiens';
            case 'restaurant': return 'des restos à Paris';
            default: return 'à Paris';
        }
    }, [placeType]);

    const handleOpen = () => {
        Haptics.selectionAsync();
        setModalVisible(true);
    };

    const handleClose = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setModalVisible(false);
    };

    // Label dynamique avec jeux de mots "Pince"
    const pinceLabel = useMemo(() => {
        if (pinceScore >= 85) return "PINCE-M'EN UNE !"; // Excellent deal
        if (pinceScore >= 65) return "SUPER PINCE";      // Good deal
        if (pinceScore >= 45) return "PINCE STANDARD";   // Average
        if (pinceScore >= 25) return "ÇA PINCE UN PEU";  // Bit expensive
        return "AÏE, ÇA PINCE !";                        // Very expensive
    }, [pinceScore]);


    // Animation de la barre
    const animatedWidth = useSharedValue(0);

    useEffect(() => {
        if (modalVisible) {
            animatedWidth.value = withTiming(pinceScore, { duration: 1000 });
        } else {
            animatedWidth.value = 0;
        }
    }, [modalVisible, pinceScore]);

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${animatedWidth.value}%`
    }));

    return (
        <>
            <Pressable onPress={handleOpen}>
                {triggerComponent ? triggerComponent : (
                    <View style={styles.miniBarContainer}>
                        <Text>Price</Text>
                    </View>
                )}
            </Pressable>

            <Modal transparent visible={modalVisible} animationType="fade" onRequestClose={handleClose}>
                <View style={styles.modalOverlay}>
                    {/* Backdrop */}
                    <Pressable style={StyleSheet.absoluteFill} onPress={handleClose}>
                        <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />
                    </Pressable>

                    {/* Card */}
                    <Animated.View entering={FadeIn.duration(200)} style={styles.cardWrapper}>
                        <View style={styles.card}>
                            <ScrollView
                                contentContainerStyle={styles.scrollContent}
                                showsVerticalScrollIndicator={true}
                            >

                                {/* HEADER: BARRE DES PINCES */}
                                <View style={styles.headerSection}>
                                    <Text style={[styles.mainTitle, { color: activeColor }]}>LA BARRE DES PINCES</Text>
                                    <Text style={styles.subTitle}>Est-ce que c'est un bon plan ?</Text>
                                </View>

                                {/* THE BAR - Premium */}
                                <View style={styles.barContainer}>
                                    {/* Thicker Bar with Shadow */}
                                    <View style={styles.barTrackOuter}>
                                        <View style={styles.barTrack}>
                                            <Animated.View style={[styles.barFill, { backgroundColor: activeColor }, animatedStyle]} />
                                        </View>
                                    </View>

                                    {/* Custom SVG Pictograms */}
                                    <View style={styles.barLabels}>
                                        <View style={styles.barLabelGroup}>
                                            <SafeIcon size={20} color="#9CA3AF" />
                                            <Text style={styles.barLabelText}>Cher</Text>
                                        </View>
                                        <View style={styles.barLabelGroup}>
                                            <Text style={[styles.barLabelText, { color: activeColor, fontWeight: '600' }]}>Bon plan</Text>
                                            <CrabIcon size={22} color={activeColor} />
                                        </View>
                                    </View>
                                </View>

                                {/* DYNAMIC SCORE TEXT */}
                                <View style={styles.scoreContainer}>
                                    <Text style={[styles.scoreText, { color: activeColor }]}>{pinceLabel.toUpperCase()}</Text>
                                    <Text style={styles.contextText}>pour {priceContextLabel}</Text>
                                </View>

                                {/* PRICE INFO */}
                                <View style={[styles.priceInfoBlock, { backgroundColor: activeColor + '10' }]}>
                                    <View style={styles.priceRow}>
                                        <Text style={styles.priceCurrency}>≈</Text>
                                        <Text style={styles.priceAmount}>{averagePrice}</Text>
                                        <Text style={styles.priceCurrency}>€</Text>
                                    </View>
                                    <Text style={styles.priceDesc}>{priceSubtitle}</Text>
                                </View>


                                {/* Tip Box */}
                                {tip && (
                                    <View style={[styles.tipBox, { borderColor: activeColor + '40', backgroundColor: activeColor + '05' }]}>
                                        <Ionicons name="bulb" size={16} color={activeColor} />
                                        <Text style={[styles.tipText, { color: '#333' }]}>{tip}</Text>
                                    </View>
                                )}

                                {/* Categories */}
                                {(categories || []).map((cat, idx) => (
                                    <View key={idx} style={styles.categorySection}>
                                        <View style={styles.categoryHeader}>
                                            <Ionicons name={cat.icon as any} size={18} color="#9CA3AF" />
                                            <Text style={styles.categoryTitle}>{cat.title}</Text>
                                        </View>
                                        {cat.items.map((item, i) => (
                                            <View key={i} style={styles.itemRow}>
                                                <Text style={styles.itemName}>{item.name}</Text>
                                                <View style={styles.dotLine} />
                                                <Text style={styles.itemPrice}>{item.price}</Text>
                                            </View>
                                        ))}
                                    </View>
                                ))}

                                <Text style={styles.disclaimer}>Tarifs indicatifs • Janvier 2025</Text>

                            </ScrollView>
                        </View>

                        {/* Close Button */}
                        <Pressable style={styles.closeBtn} onPress={handleClose}>
                            <Ionicons name="close" size={24} color="rgba(255,255,255,0.7)" />
                        </Pressable>

                    </Animated.View>
                </View>
            </Modal>
        </>
    );
};

// Styles "Barre des Pinces" (Clean & Solid)// Styles "Barre des Pinces" (SEXY & PRO)
const styles = StyleSheet.create({
    miniBarContainer: { padding: 4 },

    modalOverlay: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
    cardWrapper: { alignItems: 'center', width: '100%' },
    card: {
        width: CARD_WIDTH,
        maxHeight: height * 0.8,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.18,
        shadowRadius: 28,
        elevation: 18,
    },
    scrollContent: {
        padding: 24,
        paddingBottom: 36,
    },

    // Header (Minimal Serif)
    headerSection: { alignItems: 'center', marginBottom: 20 },
    mainTitle: {
        fontSize: 12,
        fontFamily: 'Georgia',
        fontWeight: '600',
        letterSpacing: 2,
        marginBottom: 4,
        textTransform: 'uppercase',
        color: '#111'
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: '#9CA3AF',
    },

    // The Bar (Premium)
    barContainer: { marginBottom: 28 },
    barTrackOuter: {
        padding: 3,
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    barTrack: {
        height: 16,
        backgroundColor: '#E8EAED',
        borderRadius: 9,
        overflow: 'hidden',
        width: '100%',
    },
    barFill: {
        height: '100%',
        borderRadius: 9,
    },
    barLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        paddingHorizontal: 2,
    },
    barLabelGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    barEmoji: {
        fontSize: 18,
    },
    barLabelText: {
        fontSize: 11,
        fontWeight: '500',
        color: '#9CA3AF',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    // Score Text (Premium with Emoji)
    scoreContainer: { alignItems: 'center', marginBottom: 28 },
    scoreEmoji: {
        fontSize: 32,
        marginBottom: 8,
    },
    scoreText: {
        fontSize: 26,
        fontFamily: 'Georgia',
        fontWeight: '700',
        letterSpacing: -0.5,
        textAlign: 'center',
        marginBottom: 6,
    },
    contextText: {
        fontSize: 13,
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        fontWeight: '400',
        color: '#6B7280',
    },

    // Price Block (Clean & Minimal)
    priceInfoBlock: {
        alignItems: 'center',
        paddingVertical: 16,
        marginBottom: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#E5E7EB',
        width: '100%',
    },
    priceRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 4 },
    priceCurrency: {
        fontSize: 16,
        fontWeight: '300',
        color: '#C9CDD3',
    },
    priceAmount: {
        fontSize: 36,
        fontFamily: 'Georgia',
        fontWeight: '600',
        color: '#111',
        marginHorizontal: 4,
        letterSpacing: -1,
    },
    priceDesc: {
        fontSize: 12,
        fontWeight: '400',
        color: '#9CA3AF',
    },

    // Tip Box
    tipBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#F9FAFB',
        padding: 16,
        borderRadius: 12,
        marginBottom: 24,
        gap: 12,
    },
    tipText: {
        flex: 1,
        fontSize: 13,
        fontFamily: 'Georgia',
        fontWeight: '400',
        fontStyle: 'italic',
        lineHeight: 20,
        color: '#374151'
    },

    // Categories
    categorySection: { marginBottom: 16 },
    categoryHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 },
    categoryTitle: {
        fontSize: 11,
        fontFamily: 'Georgia',
        fontWeight: '600',
        color: '#6B7280',
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    itemRow: { flexDirection: 'row', alignItems: 'baseline', paddingVertical: 6 },
    itemName: {
        fontSize: 14,
        fontFamily: 'Georgia',
        color: '#1F2937',
        fontWeight: '400'
    },
    dotLine: { flex: 1, borderBottomWidth: 1, borderColor: '#E5E7EB', marginHorizontal: 10, marginBottom: 4 },
    itemPrice: {
        fontSize: 14,
        fontFamily: 'Georgia',
        fontWeight: '600',
        color: '#111'
    },

    disclaimer: {
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        color: '#C9CDD3',
        marginTop: 16,
        fontWeight: '400',
        letterSpacing: 0.3
    },

    // Close Button
    closeBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});

export default InteractivePriceGauge;
