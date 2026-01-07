/**
 * MoodMap Paris - PriceGauge Component
 * 
 * VERSION VISUELLE & COLORÉE
 * - Logo € explicite
 * - Barres colorées selon le mood
 */

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../../design';

interface PriceGaugeProps {
    /** Niveau de prix de 1 à 4 */
    level: 1 | 2 | 3 | 4;
    /** Taille du composant */
    size?: 'sm' | 'md' | 'lg';
    /** Couleur active (Mood color !) */
    activeColor?: string;
    /** Animation */
    animated?: boolean;
}

const SIZES = {
    sm: { barWidth: 10, barHeight: 6, gap: 3, fontSize: 12 },
    md: { barWidth: 20, barHeight: 8, gap: 5, fontSize: 16 }, // Plus épais et large
    lg: { barWidth: 28, barHeight: 10, gap: 6, fontSize: 20 },
};

export function PriceGauge({
    level,
    size = 'md',
    activeColor,
    animated = true,
}: PriceGaugeProps) {
    const { theme } = useTheme();
    const { barWidth, barHeight, gap, fontSize } = SIZES[size];

    const defaultActiveColor = activeColor || theme.text.primary;
    // Touche de couleur subtile pour les barres inactives (30% d'opacité)
    const inactiveColor = defaultActiveColor + '40';

    return (
        <View style={styles.wrapper}>
            {/* Logo € explicite et typographique */}
            <View style={[styles.iconContainer, { backgroundColor: defaultActiveColor + '15' }]}>
                <Text style={[styles.currencySymbol, { color: defaultActiveColor, fontSize }]}>€</Text>
            </View>

            <View style={[styles.container, { gap }]}>
                {[1, 2, 3, 4].map((barLevel) => {
                    const isActive = barLevel <= level;

                    return (
                        <AnimatedBar
                            key={barLevel}
                            isActive={isActive}
                            activeColor={defaultActiveColor}
                            inactiveColor={inactiveColor}
                            width={barWidth}
                            height={barHeight}
                            delay={barLevel * 100}
                            shouldAnimate={animated}
                        />
                    );
                })}
            </View>
        </View>
    );
}

interface AnimatedBarProps {
    isActive: boolean;
    activeColor: string;
    inactiveColor: string;
    width: number;
    height: number;
    delay: number;
    shouldAnimate: boolean;
}

function AnimatedBar({
    isActive,
    activeColor,
    inactiveColor,
    width,
    height,
    delay,
    shouldAnimate,
}: AnimatedBarProps) {
    const scaleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (shouldAnimate && isActive) {
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 6,
                tension: 40,
                delay: delay,
                useNativeDriver: true,
            }).start();
        } else {
            scaleAnim.setValue(1);
        }
    }, [isActive, shouldAnimate, delay]);

    return (
        <Animated.View
            style={[
                styles.bar,
                {
                    width,
                    height,
                    backgroundColor: isActive ? activeColor : inactiveColor,
                    transform: [{ scaleY: isActive ? scaleAnim : 1 }],
                }
            ]}
        />
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    bar: {
        borderRadius: 4,
    },
    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    currencySymbol: {
        fontFamily: 'Georgia',
        fontWeight: '700',
    }
});

export default PriceGauge;
