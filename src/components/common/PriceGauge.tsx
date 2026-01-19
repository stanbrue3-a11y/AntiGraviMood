/**
 * MoodMap Paris - PriceGauge 2.0
 * 
 * "Barre des Pinces" - Indicateur de prix intelligent
 * - Jauge continue (pas 4 barres)
 * - Affichage contextuel par catégorie
 * - Affordance cliquable avec chevron simple
 */

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../design';
import type { Pricing } from '../../types/model';

interface PriceGaugeProps {
    /** New pricing object from Place */
    pricing?: Pricing;
    /** Fallback: legacy price_range (1-4) */
    legacyLevel?: 1 | 2 | 3 | 4;
    /** Category for contextual display */
    category?: string;
    /** Mood color for theming */
    moodColor?: string;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Show price text below gauge */
    showPriceText?: boolean;
    /** Animate on mount */
    animated?: boolean;
    /** Show clickable affordance (chevron) */
    interactive?: boolean;
    /** onPress callback */
    onPress?: () => void;
}

const SIZES = {
    sm: { gaugeWidth: 60, gaugeHeight: 4, fontSize: 10, iconSize: 12 },
    md: { gaugeWidth: 80, gaugeHeight: 5, fontSize: 12, iconSize: 14 },
    lg: { gaugeWidth: 100, gaugeHeight: 6, fontSize: 14, iconSize: 16 },
};

// Gradient from green (accessible) to gold (premium)
// Calibrated color logic for standard Paris benchmarks
const getGaugeColor = (percent: number): string => {
    if (percent <= 50) return '#22C55E'; // Green: Good deal or Fair Price
    if (percent <= 75) return '#F59E0B'; // Orange: Slightly expensive
    return '#EF4444'; // Red: Expensive
};

export function PriceGauge({
    pricing,
    legacyLevel,
    category,
    moodColor,
    size = 'md',
    showPriceText = true,
    animated = true,
    interactive = false,
    onPress,
}: PriceGaugeProps) {
    const { theme } = useTheme();
    const { gaugeWidth, gaugeHeight, fontSize, iconSize } = SIZES[size];
    const fillAnim = useRef(new Animated.Value(0)).current;

    // SURGICAL MATH : Benchmark is at 50% mark.
    const getFillPercent = (): number => {
        if (pricing?.is_free) return 5;

        let current = pricing?.budget_avg ?? 0;
        let fair = 15;

        // Surgical Anchors
        if (pricing?.pint_price) {
            current = pricing.pint_price;
            fair = 7;
        } else if (pricing?.main_dish_price) {
            current = pricing.main_dish_price;
            fair = 18;
        } else if (pricing?.coffee_price) {
            current = pricing.coffee_price;
            fair = 2.5;
        } else if (pricing?.fair_price) {
            fair = pricing.fair_price;
        }

        if (fair <= 0) {
            if (legacyLevel) return [15, 40, 65, 90][legacyLevel - 1];
            return 50;
        }

        const deviation = (current - fair) / fair;
        const percent = 50 + (deviation * 100);
        return Math.max(5, Math.min(95, percent));
    };

    const percentile = getFillPercent();
    const gaugeColor = moodColor || getGaugeColor(percentile);
    const valueScore = pricing?.value_score ?? 0;
    const isBonPlan = percentile <= 50; // Standard or better
    const isPremium = percentile >= 75; // Red zone

    // Get contextual price text based on category
    const getPriceText = (): string => {
        if (!pricing) {
            if (legacyLevel) {
                const labels = ['Très accessible', 'Accessible', 'Moyen', 'Premium'];
                return labels[legacyLevel - 1];
            }
            return '';
        }

        if (pricing.is_free) return 'Gratuit';

        if (pricing.pint_price) return `Pinte ${pricing.pint_price}€`;
        if (pricing.main_dish_price) return `Plat ${pricing.main_dish_price}€`;
        if (pricing.coffee_price) return `Café ${pricing.coffee_price.toFixed(1)}€`;

        return `~${Math.round(pricing.budget_avg)}€/pers`;
    };

    useEffect(() => {
        if (animated) {
            Animated.spring(fillAnim, {
                toValue: percentile / 100,
                friction: 8,
                tension: 40,
                useNativeDriver: false,
            }).start();
        } else {
            fillAnim.setValue(percentile / 100);
        }
    }, [percentile, animated]);

    const fillWidth = fillAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, gaugeWidth],
    });

    const content = (
        <View style={styles.container}>
            {/* Euro icon instead of emoji */}
            <View style={[styles.euroContainer, { backgroundColor: gaugeColor + '20' }]}>
                <Text style={[styles.euroSymbol, { color: gaugeColor, fontSize: iconSize }]}>€</Text>
            </View>

            {/* Gauge */}
            <View style={styles.gaugeWrapper}>
                <View style={[styles.gaugeTrack, { width: gaugeWidth, height: gaugeHeight }]}>
                    <Animated.View
                        style={[
                            styles.gaugeFill,
                            {
                                width: fillWidth,
                                height: gaugeHeight,
                                backgroundColor: gaugeColor,
                            }
                        ]}
                    />
                </View>

                {/* Price text */}
                {showPriceText && (
                    <View style={styles.priceRow}>
                        <Text style={[styles.priceText, { fontSize, color: theme.text.secondary }]}>
                            {getPriceText()}
                        </Text>
                        {isBonPlan && (
                            <View style={[styles.badge, { backgroundColor: '#4CAF50' }]}>
                                <Text style={styles.badgeText}>Bon plan</Text>
                            </View>
                        )}
                        {isPremium && !isBonPlan && (
                            <View style={[styles.badge, { backgroundColor: '#DAA520' }]}>
                                <Ionicons name="diamond" size={8} color="#fff" />
                            </View>
                        )}
                    </View>
                )}
            </View>

            {/* Clickable affordance */}
            {interactive && (
                <View style={styles.chevronWrapper}>
                    <Ionicons name="chevron-forward" size={14} color={theme.text.secondary} />
                </View>
            )}
        </View>
    );

    if (interactive && onPress) {
        return (
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.pressable,
                    pressed && styles.pressed
                ]}
            >
                {content}
            </Pressable>
        );
    }

    return content;
}

const styles = StyleSheet.create({
    pressable: {
        borderRadius: 8,
    },
    pressed: {
        opacity: 0.7,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    euroContainer: {
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    euroSymbol: {
        fontFamily: 'Georgia',
        fontWeight: '700',
    },
    gaugeWrapper: {
        flexDirection: 'column',
        gap: 3,
    },
    gaugeTrack: {
        backgroundColor: 'rgba(0,0,0,0.08)',
        borderRadius: 3,
        overflow: 'hidden',
    },
    gaugeFill: {
        borderRadius: 3,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    priceText: {
        fontWeight: '500',
    },
    badge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    badgeText: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '700',
    },
    chevronWrapper: {
        marginLeft: 2,
    },
});

export default PriceGauge;
