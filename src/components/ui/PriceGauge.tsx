import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

interface PriceGaugeProps {
    value: number | null;
    onChange: (value: number | null) => void;
}

const GAP = 12;
const BAR_WIDTH = 40;
const MAX_height = 80;

export const PriceGauge = ({ value, onChange }: PriceGaugeProps) => {
    // Shared value for tracking the gesture position relative to the container
    // However, for discrete steps, we can just track the drag.

    // We'll use a local active state for visual feedback during drag
    const activeIndex = useSharedValue(value ? value - 1 : -1);

    const updateValue = (x: number, width: number) => {
        // Calculate which bar is being touched
        // Total width approx 3 * (BAR_WIDTH + GAP)
        // Simple division
        const index = Math.floor(x / (width / 3));
        const clamped = Math.max(0, Math.min(2, index));

        if (clamped !== activeIndex.value) {
            activeIndex.value = clamped;
            runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
            runOnJS(onChange)(clamped + 1);
        }
    };

    const pan = Gesture.Pan()
        .onBegin((e) => {
            runOnJS(updateValue)(e.x, 3 * (BAR_WIDTH + GAP)); // Approx width
        })
        .onUpdate((e) => {
            runOnJS(updateValue)(e.x, 3 * (BAR_WIDTH + GAP));
        })
        .onFinalize(() => {
            // Optional: Snap back if needed, but here we just leave the value set
        });

    const tap = Gesture.Tap()
        .onEnd((e) => {
            runOnJS(updateValue)(e.x, 3 * (BAR_WIDTH + GAP));
        });

    // Composed gesture
    const gesture = Gesture.Simultaneous(pan, tap);

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.container}>
                {[0, 1, 2].map((i) => (
                    <GaugeBar
                        key={i}
                        index={i}
                        active={value !== null && i < value}
                        level={i + 1}
                    />
                ))}
            </View>
        </GestureDetector>
    );
};

const GaugeBar = ({ index, active, level }: { index: number, active: boolean, level: number }) => {
    // Height progression: 40%, 70%, 100%
    const baseHeight = 30 + (index * 20);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: withSpring(active ? '#1F2937' : '#E5E7EB', { damping: 15 }),
            transform: [{ scale: withSpring(active ? 1.05 : 1) }]
        };
    });

    return (
        <View style={styles.barWrapper}>
            <Animated.View
                style={[
                    styles.bar,
                    { height: baseHeight },
                    animatedStyle
                ]}
            />
            <Text style={[styles.label, { color: active ? '#1F2937' : '#9CA3AF' }]}>
                {Array(level).fill('€').join('')}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 100,
        gap: GAP,
        padding: 10,
        backgroundColor: '#F9FAFB',
        borderRadius: 20,
    },
    barWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 8,
        width: BAR_WIDTH,
    },
    bar: {
        width: '100%',
        borderRadius: 8,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    }
});
