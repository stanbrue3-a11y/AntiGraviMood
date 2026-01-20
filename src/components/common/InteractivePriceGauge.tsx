import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, Dimensions, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { CrabIcon, SafeIcon } from './PriceIcons';
import { useTheme } from '../../design';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedProps, withTiming, FadeIn } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import pricingConfig from '../../data/pricing_config.json';
import { isTimeInRange } from '../../lib/timeUtils';

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
    placeType: 'bar' | 'restaurant' | 'cafe' | 'club' | 'hotel' | 'culture' | 'park' | 'other' | 'generic' | 'bouillon' | 'bar-a-vin' | 'cocktail-bar' | 'techno-club' | 'speakeasy' | 'coffee-shop' | 'gastronomique' | 'museum' | 'bistrot';
    pricing?: Pricing;
    categories?: PriceCategory[];
    triggerComponent?: React.ReactNode;
    activeColor?: string;
    smartTip?: string;
    arrondissement?: number;
}

export const PriceMiniBadge = ({ pricing }: { pricing?: Pricing }) => {
    if (!pricing) return null;

    // Use the same Surgical Math as the main gauge
    const getFillPercent = (): number => {
        if (pricing.is_free) return 5;
        let current = pricing.budget_avg ?? 0;
        let fair = 15;

        if (pricing.pint_price) { current = pricing.pint_price; fair = 7; }
        else if (pricing.main_dish_price) { current = pricing.main_dish_price; fair = 18; }
        else if (pricing.coffee_price) { current = pricing.coffee_price; fair = 2.5; }
        else if (pricing.fair_price) { fair = pricing.fair_price; }

        if (fair <= 0) return 50;
        const deviation = (current - fair) / fair;
        const percent = 50 + (deviation * 100);
        return Math.max(5, Math.min(95, percent));
    };

    const percent = getFillPercent();
    const cursorColor = percent <= 50 ? '#22C55E' : (percent <= 75 ? '#F59E0B' : '#EF4444');

    return (
        <View style={miniBadgeStyles.badge}>
            <View style={miniBadgeStyles.track}>
                <View style={[miniBadgeStyles.fill, { width: `${percent}%`, backgroundColor: cursorColor }]} />
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
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    currency: {
        fontSize: 9,
        color: 'rgba(255,255,255,0.6)',
        marginLeft: 1,
        fontWeight: '700',
    }
});

import { usePlacesStore } from '../../stores';

export const InteractivePriceGauge = ({
    placeType,
    pricing,
    categories = [],
    triggerComponent,
    activeColor = '#FF2D55',
    smartTip,
    arrondissement,
}: Props) => {
    const { theme, isDark } = useTheme();
    const { selectedCategories } = usePlacesStore();
    const [modalVisible, setModalVisible] = useState(false);

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
    const typeKey = activeFocus;
    const catRef = config.categories[typeKey] || config.categories.default;
    let categoryAverage = catRef.avg;

    // Apply neighborhood multiplier if available
    const neighborhoodMultiplier = (arrondissement && config.neighborhood_multipliers[arrondissement.toString()]) || 1;
    const neighborhoodAverage = categoryAverage * neighborhoodMultiplier;

    // Pricing values 
    const displayPrice = pricing?.budget_avg ?? 0;
    const isFree = pricing?.is_free === true || displayPrice === 0;

    // Unified categories with synthesized ones
    const finalCategories = useMemo(() => {
        let cats = [...categories];
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

        // Only add if we have synthesized items AND they aren't somehow redundant
        if (synthesizedItems.length > 0) {
            const alreadyHasEssentials = cats.some(c =>
                (c.title || '').toUpperCase().includes('ESSENTIELS') ||
                (c.title || '').toUpperCase().includes('BAR') ||
                (c.title || '').toUpperCase().includes('PRIX')
            );

            if (!alreadyHasEssentials) {
                cats.unshift({
                    title: 'LES ESSENTIELS',
                    items: synthesizedItems
                });
            }
        }
        return cats;
    }, [categories, pricing]);

    // BARRE DES PINCES : CRAB CALCULATOR 2025
    // Benchmark is at 50% visual width.
    const barFillPercent = useMemo(() => {
        if (isFree) return 5;

        let current = displayPrice;
        let fair = 15;

        const pintPrice = pricing?.pint_price;
        const dishPrice = pricing?.main_dish_price;
        const coffeePrice = pricing?.coffee_price;

        // CTX-AWARE PRIORITY LOGIC
        if (activeFocus === 'restaurant' && dishPrice !== undefined) {
            current = dishPrice;
            fair = 18;
        } else if ((activeFocus === 'bar' || activeFocus === 'club') && pintPrice !== undefined) {
            current = pintPrice;
            fair = 7;
        } else if (activeFocus === 'cafe' && coffeePrice !== undefined) {
            current = coffeePrice;
            fair = 2.5;
        }
        // Fallback to whatever is available if the preferred focus is missing data
        else if (pintPrice !== undefined) {
            current = pintPrice;
            fair = 7;
        } else if (dishPrice !== undefined) {
            current = dishPrice;
            fair = 18;
        } else if (coffeePrice !== undefined) {
            current = coffeePrice;
            fair = 2.5;
        } else if (pricing?.fair_price) {
            fair = pricing.fair_price;
        } else {
            fair = neighborhoodAverage || categoryAverage || 15;
        }

        if (fair <= 0) return 50;

        // Mathematical Deviation: (Current - Benchmark) / Benchmark
        const deviation = (current - fair) / fair;
        const percent = 50 + (deviation * 100);

        return Math.max(5, Math.min(95, percent));
    }, [pricing, displayPrice, isFree, neighborhoodAverage, categoryAverage, activeFocus]);

    // Score is the inverse of the bar fill (High Score = Short Bar = Cheap)
    const pinceScore = 100 - barFillPercent;

    // Bar animation
    const animatedWidth = useSharedValue(0);

    // Cursor color: CALIBRATED TO STAN STANDARDS
    const cursorColor = barFillPercent <= 50 ? '#22C55E' : (barFillPercent <= 75 ? '#F59E0B' : '#EF4444');

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

        const pintPrice = pricing?.pint_price;
        const cocktailPrice = pricing?.cocktail_price;
        const dishPrice = pricing?.main_dish_price;
        const coffeePrice = pricing?.coffee_price;

        // CTX-AWARE PRIORITY
        if (activeFocus === 'restaurant' && dishPrice !== undefined) {
            const fair = 18;
            const diff = Math.abs(Math.round(((dishPrice - fair) / fair) * 100));
            const sign = dishPrice > fair ? '+' : '-';
            if (dishPrice === fair) return `Plat ${dishPrice}€ (Prix Juste)`;
            return `Plat ${dishPrice}€ (${sign}${diff}% vs ${fair}€)`;
        }

        if (pintPrice !== undefined) {
            const fair = 7;
            const diff = Math.abs(Math.round(((pintPrice - fair) / fair) * 100));
            const sign = pintPrice > fair ? '+' : '-';
            if (pintPrice === fair) return `Pinte ${pintPrice}€ (Prix Juste)`;
            return `Pinte ${pintPrice}€ (${sign}${diff}% vs ${fair}€)`;
        }

        if (cocktailPrice !== undefined) {
            const fair = 12;
            const diff = Math.abs(Math.round(((cocktailPrice - fair) / fair) * 100));
            const sign = cocktailPrice > fair ? '+' : '-';
            if (cocktailPrice === fair) return `Cocktail ${cocktailPrice}€ (Prix Juste)`;
            return `Cocktail ${cocktailPrice}€ (${sign}${diff}% vs ${fair}€)`;
        }

        if (dishPrice !== undefined) {
            const fair = 18;
            const diff = Math.abs(Math.round(((dishPrice - fair) / fair) * 100));
            const sign = dishPrice > fair ? '+' : '-';
            if (dishPrice === fair) return `Plat ${dishPrice}€ (Prix Juste)`;
            return `Plat ${dishPrice}€ (${sign}${diff}% vs ${fair}€)`;
        }

        if (coffeePrice !== undefined) {
            const fair = 2.5;
            const diff = Math.abs(Math.round(((coffeePrice - fair) / fair) * 100));
            const sign = coffeePrice > fair ? '+' : '-';
            if (coffeePrice === fair) return `Café ${coffeePrice}€ (Prix Juste)`;
            return `Café ${coffeePrice}€ (${sign}${diff}% vs ${fair}€)`;
        }

        // Fallback to Unified Anchor (if any)
        if (pricing?.anchor && pricing?.fair_price) {
            const { price, label } = pricing.anchor;
            const fair = pricing.fair_price;
            const diff = Math.abs(Math.round(((price - fair) / fair) * 100));
            const sign = price > fair ? '+' : '-';
            if (price === fair) return `${label} ${price}€ (Prix Juste)`;
            return `${label} ${price}€ (${sign}${diff}% vs ${fair}€)`;
        }

        const fairPrice = pricing?.fair_price;
        const referenceAvg = fairPrice || neighborhoodAverage || categoryAverage;
        if (!referenceAvg) return '';

        const diff = Math.abs(Math.round(((displayPrice - referenceAvg) / referenceAvg) * 100));
        let vsLabel = 'moyenne';
        if (fairPrice) vsLabel = "l'estimation IA";
        else if (arrondissement) vsLabel = 'quartier';

        if (displayPrice < referenceAvg) return `-${diff}% vs ${vsLabel}`;
        else if (displayPrice > referenceAvg) return `+${diff}% vs ${vsLabel}`;
        return `pile ${vsLabel}`;
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

    const priceSubtitle = useMemo(() => {
        return catRef.unit;
    }, [catRef]);

    const pinceLabel = useMemo(() => {
        return getPinceLabelFromScore(pinceScore);
    }, [pinceScore]);

    const animatedProps = useAnimatedProps(() => ({
        width: Number(animatedWidth.value)
    }));

    const handleOpen = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
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
        if (activeFocus === 'restaurant' && dishPrice !== undefined) {
            return `${dishPrice}€`;
        }

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

                                            <Svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
                                                <Defs>
                                                    <LinearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                                                        <Stop offset="0" stopColor={cursorColor} stopOpacity="0.75" />
                                                        <Stop offset="1" stopColor={cursorColor} />
                                                    </LinearGradient>
                                                </Defs>
                                                <AnimatedRect
                                                    x="0"
                                                    y="0"
                                                    height="20"
                                                    animatedProps={animatedProps}
                                                    fill="url(#barGradient)"
                                                    rx={10}
                                                    ry={10}
                                                />
                                            </Svg>
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
                                                {pricing?.pint_price ?
                                                    (pricing.hh_time && isTimeInRange(pricing.hh_time) && pricing.pint_hh)
                                                        ? 'Pinte (Happy Hour)'
                                                        : 'Pinte (50cl)'
                                                    : pricing?.cocktail_price ? 'Cocktail Signature' :
                                                        pricing?.wine_glass ? 'Verre de Vin' :
                                                            pricing?.main_dish_price ? 'Plat Signature' :
                                                                pricing?.coffee_price ? 'Café (Espresso)' :
                                                                    (pricing?.unit || catRef.unit)}
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

                                {finalCategories.length > 0 && (
                                    <View style={styles.categoriesSection}>
                                        {finalCategories.map((cat, idx) => (
                                            <View key={idx} style={styles.categoryBlock}>
                                                <View style={styles.categoryHeader}>
                                                    <Ionicons name="star-outline" size={16} color={activeColor} />
                                                    <Text style={styles.categoryTitle}>{cat.title}</Text>
                                                </View>
                                                {cat.items.map((item, i) => (
                                                    <View key={i} style={styles.itemRow}>
                                                        <Text style={styles.itemName}>{item.name}</Text>
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

                                <Text style={styles.disclaimer}>Tarifs indicatifs • Janvier 2025</Text>
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
        paddingBottom: 20,
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
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        fontStyle: 'italic',
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
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        flexShrink: 1, // Allow text to shrink if badge takes space
    },
    barContainer: {
        marginBottom: 32,
    },
    barTrackOuter: {
        padding: 0,
        backgroundColor: 'transparent',
        borderRadius: 16,
    },
    barTrack: {
        height: 20, // Taller and sexier
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
        fontSize: 34,
        fontWeight: '800',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        textAlign: 'center',
        letterSpacing: -1.5, // Tighter for premium look
    },
    contextText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.4)',
        fontStyle: 'italic',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        marginTop: 4,
    },
    priceBlock: {
        borderRadius: 20,
        paddingVertical: 28,
        paddingHorizontal: 20,
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
        fontSize: 64, // Even bigger for surgical impact
        fontWeight: '800',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        letterSpacing: -2,
    },
    priceCurrency: {
        fontSize: 28,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.4)',
        marginLeft: 4,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    priceDesc: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)',
        marginTop: 4,
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
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
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        color: '#FFF',
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
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        color: '#FFF',
    },
    disclaimer: {
        fontSize: 10,
        color: '#C9CDD3',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    closeBtn: {
        marginTop: 24,
    },
});

export default InteractivePriceGauge;
