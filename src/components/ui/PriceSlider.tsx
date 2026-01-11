import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Platform, Pressable } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
    useDerivedValue,
    interpolateColor,
    SharedValue
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { CrabIcon } from '../common/PriceIcons'; // Adjust import path if needed

interface PriceSliderProps {
    value: number | null; // 1 | 2 | 3 | 4 or null
    onChange: (value: number | null) => void;
}

const BAR_COUNT = 4;
const SPACING = 12;
const ICON_SIZE = 42;
// Total width approx: 4 * 42 + 3 * 12 = 168 + 36 = 204
const TOTAL_WIDTH = (ICON_SIZE * BAR_COUNT) + (SPACING * (BAR_COUNT - 1));

export const PriceSlider = ({ value, onChange }: PriceSliderProps) => {
    // Shared value for the current "fill" position (raw x)
    // Map value 1..4 to position
    // Map value 1..4 to position
    const getPosFromValue = (v: number | null) => {
        'worklet';
        if (!v) return 0;
        // Center of the v-th icon
        return (v * (ICON_SIZE + SPACING)) - (SPACING / 2);
    };

    const x = useSharedValue(getPosFromValue(value));

    useEffect(() => {
        x.value = withSpring(getPosFromValue(value), { damping: 15 });
    }, [value]);

    const activeIndex = useDerivedValue(() => {
        // Calculate which index (0..3) we are currently hovering
        const raw = x.value / (ICON_SIZE + SPACING);
        return Math.max(0, Math.min(BAR_COUNT, Math.ceil(raw)));
    });

    const handleRelease = () => {
        const index = Math.max(0, Math.min(BAR_COUNT, Math.ceil(x.value / (ICON_SIZE + SPACING))));
        let finalVal = index;
        if (x.value < 10) finalVal = 0;
        x.value = withSpring(getPosFromValue(finalVal));
        runOnJS(onChange)(finalVal === 0 ? null : finalVal);
        runOnJS(Haptics.notificationAsync)(Haptics.NotificationFeedbackType.Success);
    };

    // Fix Lag: Only activate pan if moved horizontally > 10px
    const pan = Gesture.Pan()
        .activeOffsetX([-10, 10])
        .onUpdate((e) => {
            x.value = Math.max(0, Math.min(TOTAL_WIDTH, e.x));
        })
        .onEnd(handleRelease);

    const tap = Gesture.Tap()
        .onEnd((e) => {
            x.value = e.x;
            handleRelease();
        });

    const gesture = Gesture.Race(pan, tap);

    const labels = ["Pas cher", "Abordable", "Coûteux", "Luxe"];

    // Mood Colors mapping: 1=Blue(Chill), 2=Purple(Culture), 3=Orange(Festif), 4=OrangeRed
    const MOOD_COLORS = ['#8ccaf7', '#c499ff', '#ffab60', '#FF8B60'];

    return (
        <View style={styles.container}>
            <GestureDetector gesture={gesture}>
                <View style={styles.trackContainer}>
                    {/* Background Layer (Grey Crabs) */}
                    <View style={styles.iconRow}>
                        {Array.from({ length: BAR_COUNT }).map((_, i) => (
                            <View key={i} style={styles.iconWrapper}>
                                <CrabIcon size={ICON_SIZE} color="#F3F4F6" />
                            </View>
                        ))}
                    </View>

                    {/* Active Layer with Dynamic Colors */}
                    <View style={[styles.iconRow, StyleSheet.absoluteFillObject]} pointerEvents="none">
                        {Array.from({ length: BAR_COUNT }).map((_, i) => (
                            <ActiveCrab
                                key={i}
                                index={i}
                                progress={activeIndex}
                                color={MOOD_COLORS[i]} // Pass specific color
                            />
                        ))}
                    </View>
                </View>
            </GestureDetector>

            <View style={styles.textContainer}>
                <Text style={styles.label}>
                    {value ? labels[value - 1] : 'Tous les prix'}
                </Text>
            </View>
        </View>
    );
};

// Sub-component for individual active crab animation
const ActiveCrab = ({ index, progress, color }: { index: number, progress: SharedValue<number>, color: string }) => {
    const style = useAnimatedStyle(() => {
        const isActive = progress.value >= (index + 1);
        return {
            opacity: withSpring(isActive ? 1 : 0),
            transform: [{ scale: withSpring(isActive ? 1.1 : 0.8) }]
        };
    });

    return (
        <Animated.View style={[styles.iconWrapper, style]}>
            <CrabIcon size={ICON_SIZE} color={color} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 12,
    },
    trackContainer: {
        width: TOTAL_WIDTH,
        height: ICON_SIZE,
        justifyContent: 'center',
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    iconWrapper: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        height: 24, // Fix height to prevent jump
        justifyContent: 'center'
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#4B5563',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    }
});
