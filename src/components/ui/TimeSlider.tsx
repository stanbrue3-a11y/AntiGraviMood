import React from 'react';
import { View, StyleSheet, Text, Platform, LayoutChangeEvent } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS, withTiming } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

interface TimeSliderProps {
    openNow: boolean;
    onChange: (openNow: boolean) => void;
    // For now we only toggle Open Now, but visually we can hint at more functionality for future
}

const OPTIONS = ['Anytime', 'Open Now'];

export const TimeSlider = ({ openNow, onChange }: TimeSliderProps) => {
    const translateX = useSharedValue(openNow ? 1 : 0);
    const containerWidth = useSharedValue(0);

    const activeIndex = openNow ? 1 : 0;

    const handleLayout = (e: LayoutChangeEvent) => {
        containerWidth.value = e.nativeEvent.layout.width;
    };

    const updateSelection = (x: number) => {
        const width = containerWidth.value;
        if (width === 0) return;

        const segmentWidth = width / OPTIONS.length;
        const index = Math.floor(x / segmentWidth);
        const clamped = Math.max(0, Math.min(OPTIONS.length - 1, index));

        if (clamped !== (openNow ? 1 : 0)) {
            runOnJS(Haptics.selectionAsync)();
            runOnJS(onChange)(clamped === 1);
        }
    };

    const tap = Gesture.Tap()
        .onEnd((e) => {
            runOnJS(updateSelection)(e.x);
        });

    const pan = Gesture.Pan()
        .onUpdate((e) => {
            runOnJS(updateSelection)(e.x);
        });

    const gesture = Gesture.Race(pan, tap);

    const indicatorStyle = useAnimatedStyle(() => {
        if (containerWidth.value === 0) return {};
        const segmentWidth = containerWidth.value / OPTIONS.length;
        return {
            transform: [
                { translateX: withSpring((openNow ? 1 : 0) * segmentWidth, { damping: 15, stiffness: 150 }) }
            ],
            width: segmentWidth - 8, // Padding compensation
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.track} onLayout={handleLayout}>
                {/* Background Indicator */}
                <Animated.View style={[styles.indicator, indicatorStyle]} />

                {/* Labels */}
                {OPTIONS.map((opt, i) => {
                    const isActive = (openNow ? 1 : 0) === i;
                    return (
                        <View key={i} style={styles.option}>
                            <Text style={[styles.label, { color: isActive ? '#fff' : '#6B7280' }]}>
                                {opt}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    track: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#F3F4F6',
        borderRadius: 25,
        position: 'relative',
        padding: 4,
    },
    indicator: {
        position: 'absolute',
        top: 4,
        left: 4,
        bottom: 4,
        backgroundColor: '#1F2937',
        borderRadius: 21,
        // Width set dynamically
    },
    option: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    }
});
