/**
 * BUDGET FILTER SLIDER
 * Final "Sniper" & "ADN" Design Refinement
 * - Mood-based colors (Chill -> Culturel -> Festif)
 * - "Magnets" Haptics & Snapping (at -50%, 0%, 30%)
 * - Humorous "Blagueur" terminology
 */

import React, { useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedReaction,
    runOnJS,
    useDerivedValue,
    interpolateColor
} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import Svg, { Path } from 'react-native-svg';
import { CrabIcon } from './PriceIcons';
import { getPinceLabel } from '../../data/parisPriceReference';

const { width } = Dimensions.get('window');
const SLIDER_WIDTH = width - 48;
const TRACK_WIDTH = SLIDER_WIDTH - 24;

const MOOD_COLORS = {
    chill: '#8ccaf7',
    culturel: '#c499ff',
    festif: '#ffab60',
    grey: '#F3F4F6',
    track: '#E8EAED',
    marker: '#C9CDD3'
};

// Magnetic Points (in Progress 0-1)
const MAGNETS = [0.25, 0.5, 0.65]; // Corresponds to -50%, 0%, 30%
const MAGNET_SNAP = 0.03; // Radius of magnetic pull

const DiamondIcon = ({ size = 18, color = '#000', strokeWidth = 1.8 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M6 3L3 8L12 21L21 8L18 3H6Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path d="M3 8H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21L8 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21L16 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

interface PinceSliderProps {
    value: number;
    onChange: (value: number) => void;
}

export const PinceSlider: React.FC<PinceSliderProps> = ({
    value,
    onChange,
}) => {
    const MIN = -100;
    const MAX = 100;

    const safeValue = Math.max(MIN, Math.min(MAX, value));
    const score = Math.max(0, Math.min(100, 50 - safeValue));

    const progress = useSharedValue((safeValue - MIN) / (MAX - MIN));
    const isPressed = useSharedValue(false);

    // Derived Color from Chill (Cheap) to Festif (Chic)
    const animColor = useDerivedValue(() => {
        return interpolateColor(
            progress.value,
            [0, 0.45, 0.55, 1],
            [MOOD_COLORS.chill, MOOD_COLORS.culturel, MOOD_COLORS.culturel, MOOD_COLORS.festif]
        );
    });

    useEffect(() => {
        const newProgress = (safeValue - MIN) / (MAX - MIN);
        progress.value = withSpring(Math.max(0, Math.min(1, newProgress)), { damping: 22, stiffness: 150 });
    }, [safeValue]);

    // Haptics & Feedback
    useAnimatedReaction(
        () => Math.round(progress.value * (MAX - MIN) + MIN),
        (current, previous) => {
            if (current !== previous && isPressed.value) {
                // Stronger haptic on magnets
                const p = progress.value;
                const hitMagnet = MAGNETS.some(m => Math.abs(p - m) < 0.01);

                if (hitMagnet) {
                    runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
                } else if (Math.abs(current - (previous ?? 0)) >= 5) {
                    runOnJS(Haptics.selectionAsync)();
                }
            }
        }
    );

    useAnimatedReaction(
        () => Math.round(progress.value * (MAX - MIN) + MIN),
        (current, previous) => {
            if (current !== previous) {
                runOnJS(onChange)(current);
            }
        }
    );

    const pan = Gesture.Pan()
        .onBegin(() => {
            isPressed.value = true;
            runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
        })
        .onChange((e) => {
            const rawDelta = e.changeX / TRACK_WIDTH;
            progress.value = Math.max(0, Math.min(1, progress.value + rawDelta));
        })
        .onFinalize(() => {
            isPressed.value = false;
        });

    const containerStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: progress.value * TRACK_WIDTH }],
    }));

    const cursorStyle = useAnimatedStyle(() => ({
        transform: [{ scale: withSpring(isPressed.value ? 1.1 : 1, { damping: 20, stiffness: 200 }) }],
        borderColor: animColor.value,
    }));

    const fillStyle = useAnimatedStyle(() => ({
        width: progress.value * TRACK_WIDTH,
        backgroundColor: animColor.value,
    }));

    // Humorous Phrases Logic - Back to the Roots
    const phrase = useMemo(() => {
        if (safeValue >= 100) return "BRÛLE LA CARTE ! 🔥";
        return getPinceLabel(score);
    }, [score, safeValue]);

    const displayPercent = safeValue >= 100 ? "Max" : (safeValue > 0 ? `+${safeValue}%` : `${safeValue}%`);
    const zeroPosition = ((0 - MIN) / (MAX - MIN)) * TRACK_WIDTH;

    // Dynamic Accent
    const dynamicAccent = useMemo(() => {
        if (safeValue <= -20) return MOOD_COLORS.chill;
        if (safeValue >= 40) return MOOD_COLORS.festif;
        return MOOD_COLORS.culturel;
    }, [safeValue]);

    return (
        <GestureHandlerRootView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={[styles.phraseText, { color: dynamicAccent }]}>{phrase}</Text>
                    <Text style={styles.contextText}>par rapport à la moyenne des lieux</Text>
                </View>
                <View style={[styles.badge, { backgroundColor: dynamicAccent + '15' }]}>
                    <Text style={[styles.badgeText, { color: dynamicAccent }]}>{displayPercent}</Text>
                </View>
            </View>

            {/* BAR */}
            <View style={styles.gaugeContainer}>
                {/* Magnetic Visuals markers (Dots or Lines) */}
                {MAGNETS.map((m, i) => (
                    <View key={i} style={[styles.magnetDot, { left: m * TRACK_WIDTH + 12 }]} />
                ))}

                <View style={[styles.moyenneMarker, { left: zeroPosition + 12 }]}>
                    <View style={styles.moyenneLine} />
                    <View style={styles.moyenneLabelWrapper}>
                        <Text style={styles.moyenneLabel}>Moyenne</Text>
                    </View>
                </View>

                <View style={styles.outerTrack}>
                    <View style={styles.innerTrack}>
                        <Animated.View style={[styles.fill, fillStyle]} />
                    </View>
                </View>

                <GestureDetector gesture={pan}>
                    <Animated.View style={[styles.thumbContainer, containerStyle]}>
                        <Animated.View style={[styles.thumb, cursorStyle]}>
                            <Animated.View style={[styles.thumbDot, { backgroundColor: animColor.value }]} />
                        </Animated.View>
                    </Animated.View>
                </GestureDetector>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.footerIconBox}>
                    <CrabIcon size={18} color={safeValue < -10 ? MOOD_COLORS.chill : '#9CA3AF'} strokeWidth={1.8} />
                    <Text style={[styles.footerText, safeValue < -10 && { color: MOOD_COLORS.chill }]}>Pinces</Text>
                </View>
                <View style={[styles.footerIconBox, { alignItems: 'flex-end' }]}>
                    <Text style={[styles.footerText, safeValue > 10 && { color: MOOD_COLORS.festif }]}>Chère</Text>
                    <DiamondIcon size={18} color={safeValue > 10 ? MOOD_COLORS.festif : '#9CA3AF'} strokeWidth={1.8} />
                </View>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    phraseText: {
        fontSize: 13,
        fontWeight: '800',
        letterSpacing: 0.8,
        textTransform: 'uppercase',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    contextText: {
        fontSize: 10,
        color: '#9CA3AF',
        marginTop: 2,
        fontStyle: 'italic',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
        minWidth: 40,
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 11,
        fontWeight: '800',
    },
    gaugeContainer: {
        height: 64,
        justifyContent: 'center',
        position: 'relative',
    },
    outerTrack: {
        height: 32,
        backgroundColor: MOOD_COLORS.grey,
        borderRadius: 16,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    innerTrack: {
        flex: 1,
        backgroundColor: MOOD_COLORS.track,
        borderRadius: 12,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        borderRadius: 12,
    },
    magnetDot: {
        position: 'absolute',
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#D1D5DB',
        top: '50%',
        marginTop: -2,
        zIndex: 2,
    },
    moyenneMarker: {
        position: 'absolute',
        top: -6,
        bottom: 0,
        zIndex: 1,
    },
    moyenneLabelWrapper: {
        width: 100,
        alignItems: 'center',
        marginLeft: -50,
    },
    moyenneLine: {
        width: 1.5,
        height: 48,
        backgroundColor: MOOD_COLORS.marker,
        borderRadius: 1,
    },
    moyenneLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: '#9CA3AF',
        marginTop: 6,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    thumbContainer: {
        position: 'absolute',
        top: '50%',
        marginTop: -18,
        left: -6,
        width: 36,
        height: 36,
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumb: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        borderWidth: 3, // Thicker colored border
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        paddingHorizontal: 4,
    },
    footerIconBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    footerText: {
        fontSize: 11,
        fontWeight: '800',
        color: '#9CA3AF',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});

export default PinceSlider;
