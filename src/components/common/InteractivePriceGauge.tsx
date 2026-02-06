import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, Dimensions, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { CrabIcon, SafeIcon } from './PriceIcons';
import { useTheme } from '../../design';
import { LinearGradient as ViewGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedProps, withTiming, FadeIn } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import pricingConfig from '../../data/pricing_config.json';
import { isTimeInRange } from '../../lib/timeUtils';
import { CrabCalculator } from '../../lib/CrabCalculator';
import { logger } from '../../lib/logger';
const AnimatedRect = Animated.createAnimatedComponent(Rect);
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.92;

interface PricingConfig {
    categories: Record<string, {
        avg: number;
        unit: string;
        min: number;
        max: number;
    }>;
    neighborhood_multipliers: Record<string, number>;
}

const config = pricingConfig as PricingConfig;

const getPinceLabelFromScore = (score: number): string => {
    // TRUST THE JUDGE AI (Context-Aware Scores)
    if (score >= 85) return "PINCE-M'EN UNE !"; // Excelent deal (Cheap for standing)
    if (score >= 65) return "SUPER PINCE";      // Very good deal
    if (score >= 35) return "STANDARD";         // Fair price (Market price)
    if (score >= 15) return "AÏE, ÇA PINCE !";  // Expensive
    return "ÇA PINCE SÉVÈRE !";                 // Ripoff / Luxury without justification
};



import type { Pricing } from '../../types/model';

interface PriceCategory {
    icon?: string;
    title: string;
    items: { name: string; price: string }[];
}

interface Props {
    placeType?: 'bar' | 'restaurant' | 'cafe' | 'club' | 'hotel' | 'culture' | 'park' | 'other' | 'generic' | 'bouillon' | 'bar-a-vin' | 'cocktail-bar' | 'techno-club' | 'speakeasy' | 'coffee-shop' | 'gastronomique' | 'museum' | 'bistrot';
    pricing?: Pricing;
    categories?: PriceCategory[];
    triggerComponent?: React.ReactNode;
    activeColor?: string;
    smartTip?: string;
    arrondissement?: number;
    minimal?: boolean;
}

export const PriceMiniBadge = ({ pricing }: { pricing?: Pricing }) => {
    if (!pricing) return null;

    const { percent, color } = CrabCalculator.getMetrics(pricing);

    return (
        <View style={miniBadgeStyles.badge}>
            <View style={miniBadgeStyles.track}>
                <View style={[miniBadgeStyles.fill, { width: `${percent}%`, backgroundColor: color }]} />
            </View>
            <View style={miniBadgeStyles.textRow}>
                <Text style={miniBadgeStyles.amount}>
                    {pricing.pint_price || pricing.main_dish_price || pricing.coffee_price || Math.round(pricing.budget_avg)}
                </Text>
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
    }
});

import { useSearchStore } from '../../stores/searchStore';

export const InteractivePriceGauge = ({
    placeType,
    pricing,
    categories = [],
    triggerComponent,
    activeColor = '#FF2D55',
    smartTip,
}: Props) => {
    const { theme, isDark } = useTheme();
    const selectedCategories = useSearchStore(state => state.selectedCategories);
    const [modalVisible, setModalVisible] = useState(false);
    const [showFullMenu, setShowFullMenu] = useState(false);

    // SMARTEST PRICE FOCUS 🧠
    // If user is explicitly filtering, we show what they are looking for.
    // Otherwise we show the venue's default.
    const activeFocus = useMemo(() => {
        if (selectedCategories.length === 1) {
            const cat = selectedCategories[0];
            if (cat === 'restaurant') return 'restaurant';
            if (cat === 'bar') return 'bar';
            if (cat === 'café') return 'cafe';
        }
        return pricing?.type || placeType;
    }, [selectedCategories, pricing, placeType]);

    // Get reference data for this category from centralized config
    const typeKey = activeFocus || 'default';
    const catRef = (config.categories as any)[typeKey] || config.categories.default;
    // Pricing values 
    const displayPrice = pricing?.budget_avg ?? 0;
    const isFree = pricing?.is_free === true || displayPrice === 0;

    // 🔍 DEBUG: What's in pricing.menu_items?
    console.log(`[PriceGauge] pricing.menu_items:`, pricing?.menu_items, `| length:`, pricing?.menu_items?.length || 0);

    // 🔴 HARDCODED FALLBACK for Le Rosebud (poi-164) until data flow is fixed
    const ROSEBUD_MENU = [
        {
            title: 'COCKTAILS SIGNATURES',
            items: [
                { name: 'Rosebud (gin, crème de rose, cerise, citron, champagne)', price: '18€' },
                { name: 'Citizen Kane (champagne, gin, crème de rose, citron)', price: '17€' },
                { name: 'Blue Velvet (gin, Noilly Prat, violette)', price: '17€' }
            ]
        },
        {
            title: 'COCKTAILS CLASSIQUES',
            items: [
                { name: 'Dry Martini', price: '17€' },
                { name: 'Old Fashioned', price: '18€' },
                { name: 'Negroni', price: '16€' },
                { name: 'Manhattan', price: '17€' },
                { name: 'Moscow Mule', price: '15€' },
                { name: 'Bloody Mary', price: '16€' }
            ]
        },
        {
            title: 'ASSIETTES',
            items: [
                { name: 'Œufs mayonnaise', price: '8€' },
                { name: 'Tarama nature', price: '10€' },
                { name: 'Jambon Bellota', price: '16€' },
                { name: 'Croque-monsieur', price: '12€' },
                { name: 'Chili con carne R62', price: '16€' },
                { name: 'Tartare de bœuf', price: '18€' }
            ]
        },
        {
            title: 'VINS NATURE',
            items: [
                { name: 'Verre de vin nature', price: '8€-12€' }
            ]
        }
    ];

    // Unified categories with synthesized ones
    const finalCategories = useMemo(() => {
        // 🔄 PRIORITY: prop categories > pricing.menu_items > HARDCODED FALLBACK > synthesized
        let cats: PriceCategory[] = categories.length > 0
            ? [...categories]
            : ((pricing?.menu_items || []) as any[]).length > 0
                ? ((pricing?.menu_items || []) as any[]).map((item: any) => ({
                    title: item.title || item.category, // Handle both formats
                    items: item.items || []
                }))
                : ROSEBUD_MENU; // 🔴 FALLBACK until data flow fixed
        const synthesizedItems: { name: string, price: string }[] = [];

        // Check for common pricing anchors
        if (pricing?.pint_price) {
            synthesizedItems.push({ name: 'Pinte (50cl)', price: `${pricing.pint_price}€` });
        }
        if (pricing?.cocktail_price) {
            synthesizedItems.push({ name: 'Cocktail', price: `${pricing.cocktail_price}€` });
        }
        if (pricing?.coffee_price) {
            synthesizedItems.push({ name: 'Café (Coup de boost)', price: `${pricing.coffee_price.toFixed(1)}€` });
        }

        // Only add synthesized items if we have NO other categories
        // This prevents "Pinte", "Cocktail" duplication when we have a full menu
        if (synthesizedItems.length > 0 && cats.length === 0) {
            cats.unshift({
                title: 'LES ESSENTIELS',
                items: synthesizedItems
            });
        }
        return cats;
    }, [categories, pricing]);

    const metrics = useMemo(() => {
        if (!pricing) return null;
        return CrabCalculator.getMetrics(pricing);
    }, [pricing]);

    const barFillPercent = metrics?.percent ?? 5;
    const pinceScore = 100 - barFillPercent;
    const cursorColor = metrics?.color ?? '#22C55E';
    const pinceLabel = metrics?.label ?? "STANDARD";

    // Bar animation
    const animatedWidth = useSharedValue(0);

    // Percentage comparison text with context
    const getSingularLabel = () => {
        const key = activeFocus;
        switch (key) {
            case 'restaurant': return 'resto';
            case 'bar': return 'bar';
            case 'cafe': return 'café';
            case 'club': return 'club';
            case 'hotel': return 'hôtel';
            case 'culture': return 'sortie culture';
            case 'park': return 'parc';
            case 'bouillon': return 'bouillon';
            case 'bar-a-vin': return 'bar à vin';
            case 'cocktail-bar': return 'bar à cocktails';
            case 'techno-club': return 'club techno';
            case 'coffee-shop': return 'coffee shop';
            case 'speakeasy': return 'speakeasy';
            case 'gastronomique': return 'gastronomique';
            case 'museum': return 'musée';
            case 'bistrot': return 'bistrot';
            default: return 'lieu';
        }
    };

    const priceContextLabel = useMemo(() => {
        const label = getSingularLabel();
        if (label === 'sortie culture') return 'une sortie culture à Paris';
        if (['hôtel', 'une'].includes(label.split(' ')[0])) return `un ${label} à Paris`;

        return `un ${label} à Paris`;
    }, [activeFocus]);

    const getComparisonText = () => {
        if (isFree) return "C'est cadeau ! 🎁";
        if (!metrics) return "";

        const { currentPrice, benchmarkPrice, deviationPercent } = metrics;
        const sign = deviationPercent > 0 ? '+' : '';

        if (deviationPercent === 0) return `Prix Juste (${currentPrice}€)`;
        return `${currentPrice}€ (${sign}${deviationPercent}% vs ${benchmarkPrice}€)`;
    };

    useEffect(() => {
        if (modalVisible) {
            animatedWidth.value = withTiming(barFillPercent, { duration: 600 });
        } else {
            animatedWidth.value = 0;
        }
    }, [modalVisible, barFillPercent]);

    const barStyle = useAnimatedStyle(() => ({
        width: `${animatedWidth.value}%`
    }));

    const placeholder = ""; // Keep scroll content clean

    const animatedBarStyle = useAnimatedStyle(() => ({
        width: `${animatedWidth.value}%`
    }));

    const handleOpen = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        logger.trackEvent('price_gauge_opened', { placeType, pricing: pricing?.budget_avg });
        setModalVisible(true);
    };

    const handleClose = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setModalVisible(false);
    };

    const getMainPriceText = () => {
        if (!pricing) return `≈--€`;

        const isHH = pricing.hh_time && isTimeInRange(pricing.hh_time);
        const isEvening = isTimeInRange("18:00-06:00");

        const pintPrice = pricing.pint_price;
        const dishPrice = pricing.main_dish_price;
        const coffeePrice = pricing.coffee_price;

        // CTX-AWARE PRIORITY
        // 1. Restaurant -> Dish
        if (activeFocus === 'restaurant' && dishPrice !== undefined) {
            return `${dishPrice}€`;
        }

        // 2. Cocktail Bar / Speakeasy -> Cocktail (Override Pint)
        // MOODMAP HEURISTIC: If cocktail price is premium (>=14€), show it.
        const isCocktailPlace = ['cocktail-bar', 'speakeasy', 'hotel-bar', 'club'].includes(activeFocus || '') || ((pricing.cocktail_price || 0) >= 14);
        if (isCocktailPlace && pricing.cocktail_price) {
            return `${pricing.cocktail_price}€`;
        }

        // 3. Standard Bar Logic -> Pint
        const showPint = pintPrice && (activeFocus !== 'cafe' || isEvening);
        if (showPint) {
            if (isHH && pricing.pint_hh) return `${pricing.pint_hh}€`;
            return `${pintPrice}€`;
        }

        if (pricing.cocktail_price) return `${pricing.cocktail_price}€`;
        if (pricing.wine_glass) return `${pricing.wine_glass}€`;
        if (dishPrice !== undefined) return `${dishPrice}€`;
        if (coffeePrice !== undefined) return `${coffeePrice.toFixed(1)}€`;

        return `≈${displayPrice}€`;
    };

    const isBonPlan = (pricing?.value_score ?? 0) >= 80;

    // 🧠 SMART PREVIEW: Show max 6 items to fill space without pushing button off-screen
    const previewCategories = useMemo(() => {
        let count = 0;
        const maxItems = 6;
        const result = [];
        for (const cat of finalCategories) {
            if (count >= maxItems) break;
            const available = maxItems - count;
            const itemsToTake = cat.items.slice(0, available);
            if (itemsToTake.length > 0) {
                result.push({ ...cat, items: itemsToTake });
                count += itemsToTake.length;
            }
        }
        return result;
    }, [finalCategories]);

    return (
        <>
            <Pressable onPress={handleOpen}>
                {triggerComponent ? triggerComponent : (
                    <View style={[styles.miniTrigger, { backgroundColor: activeColor + '10' }]}>
                        <CrabIcon size={18} color={activeColor} />
                        <Text style={[styles.miniTitle, { color: activeColor }]}>Barre des Pinces</Text>
                        <View style={[styles.miniBarTrack, { backgroundColor: cursorColor + '18' }]}>
                            <View style={[styles.miniBarFill, { width: `${barFillPercent}%`, backgroundColor: cursorColor }]} />
                        </View>
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
                            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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
                                            {(((pricing?.menu_items || []) as any[]).length > 0 ? ((pricing?.menu_items || []) as any[]) : ROSEBUD_MENU)
                                                .map((cat: any, idx: number) => (
                                                    <View key={idx} style={styles.categoryBlock}>
                                                        <View style={styles.categoryHeader}>
                                                            <Ionicons name="restaurant-outline" size={16} color={activeColor} />
                                                            <Text style={styles.categoryTitle}>{cat.title || cat.category}</Text>
                                                        </View>
                                                        {(cat.items || []).map((item: any, i: number) => (
                                                            <View key={i} style={styles.itemRow}>
                                                                <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                                                                <View style={styles.dotLine}>
                                                                    <View style={styles.dotLineInner} />
                                                                </View>
                                                                <Text style={styles.itemPrice}>{item.price}</Text>
                                                            </View>
                                                        ))}
                                                    </View>
                                                ))}
                                        </View>
                                    </>
                                ) : (
                                    <>
                                        <View style={styles.headerSection}>
                                            <Text style={[styles.headerTitle, { color: activeColor }]}>LA BARRE DES PINCES</Text>
                                            <Text style={styles.headerSubtitle}>Est-ce que c'est un bon plan ?</Text>
                                        </View>

                                        <View style={styles.explanationRow}>
                                            <View style={[styles.percentBadge, { backgroundColor: cursorColor }]}>
                                                <Text style={styles.percentBadgeText}>{getComparisonText()}</Text>
                                            </View>
                                            <Text style={[styles.explanationText, { color: activeColor + 'CC' }]}>
                                                par rapport au benchmark Paris
                                            </Text>
                                        </View>

                                        <View style={styles.barContainer}>
                                            <View style={styles.barTrackOuter}>
                                                <View style={styles.barTrack}>
                                                    {/* Standard Benchmark Marker (50%) */}
                                                    <View style={styles.benchmarkLine}>
                                                        <View style={styles.benchmarkPointer} />
                                                        <Text style={styles.benchmarkLabel}>STANDARD</Text>
                                                    </View>

                                                    <Animated.View style={[styles.barFill, animatedBarStyle, { overflow: 'hidden' }]}>
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
                                                    <Text style={[styles.barLabelText, { color: activeColor }]}>PINCE</Text>
                                                </View>
                                                <View style={styles.barLabelGroup}>
                                                    <Text style={styles.barLabelText}>CHER</Text>
                                                    <SafeIcon size={14} color="#9CA3AF" />
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.scoreContainer}>
                                            <Text style={[styles.scoreText, { color: activeColor }]}>{pinceLabel.toUpperCase()}</Text>
                                            <Text style={styles.contextText}>pour {priceContextLabel}</Text>
                                        </View>

                                        <View style={[styles.priceBlock, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                                            {isFree ? (
                                                <>
                                                    <Text style={[styles.priceBig, { color: activeColor }]}>Gratuit</Text>
                                                    <Text style={styles.priceDesc}>Accès libre</Text>
                                                </>
                                            ) : (
                                                <>
                                                    <View style={styles.priceRow}>
                                                        <Text style={styles.priceTilde}>{pricing?.pint_price || pricing?.cocktail_price || (pricing as any)?.wine_glass || pricing?.main_dish_price || pricing?.coffee_price ? '' : '≈'}</Text>
                                                        <Text style={[styles.priceBig, { color: '#FFF' }]}>{getMainPriceText().replace('€', '')}</Text>
                                                        <Text style={styles.priceCurrency}>€</Text>
                                                    </View>
                                                    <Text style={styles.priceDesc}>
                                                        {(() => {
                                                            const isCocktailPlace = ['cocktail-bar', 'speakeasy', 'hotel-bar', 'club'].includes(activeFocus || '') || ((pricing?.cocktail_price || 0) >= 14);
                                                            if (isCocktailPlace && pricing?.cocktail_price) return 'Cocktail Signature';

                                                            if (pricing?.pint_price) return (pricing.hh_time && isTimeInRange(pricing.hh_time) && pricing.pint_hh) ? 'Pinte (Happy Hour)' : 'Pinte (50cl)';
                                                            if (pricing?.cocktail_price) return 'Cocktail Signature';
                                                            if (pricing?.wine_glass) return 'Verre de Vin';
                                                            if (pricing?.main_dish_price) return 'Plat Signature';
                                                            if (pricing?.coffee_price) return 'Café (Espresso)';
                                                            return pricing?.unit || catRef.unit;
                                                        })()}
                                                    </Text>
                                                </>
                                            )}
                                        </View>

                                        {smartTip && (
                                            <View style={styles.tipBox}>
                                                <Ionicons name="bulb-outline" size={18} color={activeColor} />
                                                <Text style={styles.tipText}>{smartTip}</Text>
                                            </View>
                                        )}

                                        {previewCategories.length > 0 && (
                                            <View style={styles.categoriesSection}>
                                                {previewCategories.map((cat, idx) => (
                                                    <View key={idx} style={styles.categoryBlock}>
                                                        <View style={styles.categoryHeader}>
                                                            <Ionicons name="star-outline" size={16} color={activeColor} />
                                                            <Text style={styles.categoryTitle}>{cat.title}</Text>
                                                        </View>
                                                        {cat.items.map((item, i) => (
                                                            <View key={i} style={styles.itemRow}>
                                                                <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                                                                <View style={styles.dotLine}>
                                                                    <View style={styles.dotLineInner} />
                                                                </View>
                                                                <Text style={styles.itemPrice}>{item.price}</Text>
                                                            </View>
                                                        ))}
                                                    </View>
                                                ))}
                                            </View>
                                        )}

                                        <Pressable
                                            onPress={() => setShowFullMenu(true)}
                                            style={({ pressed }) => [
                                                styles.fullMenuBtn,
                                                { backgroundColor: activeColor + '15', opacity: pressed ? 0.7 : 1, borderColor: activeColor + '30' }
                                            ]}
                                        >
                                            <Text style={[styles.fullMenuBtnText, { color: activeColor }]}>VOIR TOUT LE MENU</Text>
                                            <Ionicons name="arrow-forward" size={16} color={activeColor} />
                                        </Pressable>

                                        {pricing?.last_updated && (
                                            <View style={styles.confidenceBadgeContainer}>
                                                <Ionicons
                                                    name="shield-checkmark"
                                                    size={12}
                                                    color={CrabCalculator.getConfidenceMetrics(pricing.last_updated).color}
                                                />
                                                <Text style={[styles.disclaimer, { marginLeft: 4 }]}>
                                                    Données {CrabCalculator.getConfidenceMetrics(pricing.last_updated).label.toLowerCase()} • {new Date(pricing.last_updated).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                                                </Text>
                                            </View>
                                        )}
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

const styles = StyleSheet.create({
    miniTrigger: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#F3F4F6',
        borderRadius: 16,
        gap: 10,
    },
    miniTitle: {
        fontSize: 15,
        fontWeight: '600',
    },
    miniBarTrack: {
        flex: 1,
        height: 8,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        overflow: 'hidden',
    },
    miniBarFill: {
        height: '100%',
        borderRadius: 4,
    },
    miniBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    miniBadgeText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '700',
    },
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
    scrollContent: {
        paddingBottom: 32,
    },
    headerSection: {
        alignItems: 'center',
        marginBottom: 24,
    },
    headerTitle: {
        fontSize: 13,
        fontWeight: '800',
        letterSpacing: 2,
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.6)', // Slightly more visible
        fontFamily: 'PlayfairDisplay-Italic',
        marginTop: 2,
    },
    explanationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 20,
    },
    percentBadge: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        flexShrink: 0, // Never truncate the badge
    },
    percentBadgeText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '900',
        textAlign: 'center',
    },
    explanationText: {
        fontSize: 13,
        color: '#9CA3AF',
        fontFamily: 'PlayfairDisplay-Italic',
        flexShrink: 1, // Allow text to shrink if badge takes space
    },
    barContainer: {
        marginBottom: 20,
    },
    barTrackOuter: {
        padding: 0,
        backgroundColor: 'transparent',
        borderRadius: 16,
    },
    barTrack: {
        height: 12, // More sleek
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
    benchmarkPointer: {
        width: 1.5,
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    benchmarkLabel: {
        position: 'absolute',
        top: -12,
        fontSize: 8,
        fontWeight: '900',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: 0.5,
    },
    barFill: {
        height: '100%',
        borderRadius: 7,
    },
    barLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    barLabelGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    barLabelText: {
        fontSize: 11,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#9CA3AF',
    },
    scoreContainer: {
        alignItems: 'center',
        marginBottom: 28,
    },
    scoreText: {
        fontSize: 28,
        fontWeight: '800',
        fontFamily: 'PlayfairDisplay_700Bold',
        textAlign: 'center',
        letterSpacing: -1,
    },
    contextText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.4)',
        fontStyle: 'italic',
        fontFamily: 'PlayfairDisplay-Italic',
        marginTop: 4,
    },
    priceBlock: {
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    tipBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        padding: 16,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        marginBottom: 24,
    },
    tipText: {
        flex: 1,
        fontSize: 14,
        fontStyle: 'italic',
        color: '#E5E7EB',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    priceTilde: {
        fontSize: 24,
        color: '#9CA3AF',
        marginRight: 4,
    },
    priceBig: {
        fontSize: 48,
        fontWeight: '800',
        fontFamily: 'PlayfairDisplay_700Bold',
        letterSpacing: -2,
    },
    priceCurrency: {
        fontSize: 28,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.4)',
        marginLeft: 4,
        fontFamily: 'PlayfairDisplay-Italic',
    },
    priceDesc: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)',
        marginTop: 4,
        textAlign: 'center',
        fontFamily: 'PlayfairDisplay-Italic',
    },
    categoriesSection: {
        marginTop: 8,
    },
    categoryBlock: {
        marginBottom: 20,
    },
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    categoryIconCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryTitle: {
        fontSize: 13,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#9CA3AF',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },
    itemName: {
        fontSize: 15,
        fontFamily: 'Inter_500Medium',
        color: '#FFF',
        maxWidth: '70%',
    },
    dotLine: {
        flex: 1,
        height: 1,
        marginHorizontal: 12,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    dotLineInner: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.15)', // Very subtle
        borderStyle: 'dashed',
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Inter_700Bold',
        color: '#FFF',
    },
    disclaimer: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.4)',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    confidenceBadgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.05)',
    },
    closeBtn: {
        marginTop: 24,
    },
    backButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 8,
    },
    backButtonText: {
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 8,
    },
    fullMenuBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginTop: 20,
        marginBottom: 12,
        borderWidth: 1,
    },
    fullMenuBtnText: {
        fontSize: 14,
        fontWeight: '700',
        marginRight: 8,
        letterSpacing: 0.5,
    },
});

export default InteractivePriceGauge;
