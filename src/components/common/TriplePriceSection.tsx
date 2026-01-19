import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolateColor, useDerivedValue, runOnJS } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';

interface PriceSliderProps {
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    min: number;
    max: number;
    value: number | null;
    onChange: (val: number | null) => void;
    color: string;
    unit?: string;
    distribution?: number[];
}

const PriceSlider: React.FC<PriceSliderProps> = ({ label, icon, min, max, value, onChange, color, unit = '€', distribution = [] }) => {
    const isEnabled = value !== null;
    const initialProgress = value !== null ? (value - min) / (max - min) : 1;
    const progress = useSharedValue(initialProgress);
    const isPressed = useSharedValue(false);

    const trackWidth = 220; // Fixed width for sliders in the sheet

    const toggle = () => {
        Haptics.selectionAsync();
        if (isEnabled) {
            onChange(null);
        } else {
            onChange(max);
            progress.value = withSpring(1);
        }
    };

    const pan = Gesture.Pan()
        .enabled(isEnabled)
        .onBegin(() => {
            isPressed.value = true;
            runOnJS(Haptics.selectionAsync)();
        })
        .onChange((e) => {
            const delta = e.changeX / trackWidth;
            progress.value = Math.max(0, Math.min(1, progress.value + delta));

            const newVal = Math.round((min + progress.value * (max - min)) * 2) / 2;
            runOnJS(onChange)(newVal);
        })
        .onFinalize(() => {
            isPressed.value = false;
        });

    // FIX: Sync shared value when external prop changes (crucial for "un-freezing")
    React.useEffect(() => {
        if (value !== null) {
            const newProgress = (max === min) ? 1 : (value - min) / (max - min);
            if (Math.abs(progress.value - newProgress) > 0.01) {
                progress.value = withSpring(newProgress, { damping: 20 });
            }
        }
    }, [value, min, max]);

    const thumbStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: progress.value * trackWidth },
            { scale: withSpring(isPressed.value ? 1.2 : 1) }
        ],
        backgroundColor: isEnabled ? color : '#E5E7EB',
    }));

    const fillStyle = useAnimatedStyle(() => ({
        width: progress.value * trackWidth,
        backgroundColor: isEnabled ? color : '#F3F4F6',
    }));

    return (
        <View style={styles.sliderRow}>
            <Pressable
                onPress={toggle}
                style={({ pressed }) => [
                    styles.sliderIconBox,
                    !isEnabled && { opacity: 0.6 },
                    pressed && { opacity: 0.4 }
                ]}
            >
                <View style={[
                    styles.toggleIndicator,
                    isEnabled ? { backgroundColor: color, borderColor: color } : { borderColor: '#D1D5DB' }
                ]}>
                    {isEnabled ? (
                        <Ionicons name="checkmark" size={12} color="white" />
                    ) : (
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#F3F4F6' }} />
                    )}
                </View>

                <View style={[styles.iconCircle, isEnabled && { backgroundColor: color + '15' }]}>
                    <Ionicons name={icon} size={20} color={isEnabled ? color : '#9CA3AF'} />
                </View>

                <View style={{ flex: 1, marginLeft: 4 }}>
                    <Text style={[styles.sliderLabel, !isEnabled && { color: '#9CA3AF' }]}>{label}</Text>
                    <Text style={[styles.sliderValue, isEnabled && { color: color, fontWeight: '800' }]}>
                        {isEnabled ? `${value}${unit}` : 'Illimité'}
                    </Text>
                </View>
            </Pressable>

            <View style={{ alignItems: 'center' }}>
                {isEnabled && (
                    <PriceHistogram
                        data={distribution}
                        min={min}
                        max={max}
                        activeLimit={value}
                        activeColor={color}
                    />
                )}
                <GestureDetector gesture={pan}>
                    <View style={[styles.trackContainer, !isEnabled && { opacity: 0.3 }]}>
                        <View style={styles.trackBase}>
                            <Animated.View style={[styles.trackFill, fillStyle]} />
                        </View>
                        <Animated.View style={[styles.thumb, thumbStyle]} />
                        <View style={[styles.limitLabel, { left: 0 }]}><Text style={styles.limitText}>{min}{unit}</Text></View>
                        <View style={[styles.limitLabel, { right: 0 }]}><Text style={styles.limitText}>{max}{unit}</Text></View>
                    </View>
                </GestureDetector>
            </View>
        </View>
    );
};

import PriceHistogram from './PriceHistogram';

export const TriplePriceSection = ({
    pintLimit,
    setPintLimit,
    dishLimit,
    setDishLimit,
    coffeeLimit,
    setCoffeeLimit,
    distributions
}: any) => {
    return (
        <View style={styles.container}>
            <PriceSlider
                label="Pinte"
                icon="beer"
                min={3}
                max={12}
                value={pintLimit}
                onChange={setPintLimit}
                color="#ffab60" // Festif
                distribution={distributions?.pints}
            />
            <View style={styles.miniDivider} />
            <PriceSlider
                label="Plat"
                icon="restaurant"
                min={8}
                max={40}
                value={dishLimit}
                onChange={setDishLimit}
                color="#c499ff" // Culturel (Special vibe)
                distribution={distributions?.dishes}
            />
            <View style={styles.miniDivider} />
            <PriceSlider
                label="Café"
                icon="cafe"
                min={1}
                max={6}
                value={coffeeLimit}
                onChange={setCoffeeLimit}
                color="#8ccaf7" // Chill
                distribution={distributions?.coffees}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    sliderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    sliderIconBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        width: 140, // Increased for toggle indicator
    },
    toggleIndicator: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: '#D1D5DB',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4,
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111827',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    sliderValue: {
        fontSize: 12,
        color: '#6B7280',
        fontWeight: '600',
    },
    trackContainer: {
        width: 220,
        height: 40,
        justifyContent: 'center',
        position: 'relative',
    },
    trackBase: {
        height: 6,
        backgroundColor: '#F3F4F6',
        borderRadius: 3,
        overflow: 'hidden',
    },
    trackFill: {
        height: '100%',
        borderRadius: 3,
    },
    thumb: {
        position: 'absolute',
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        marginLeft: -12,
    },
    miniDivider: {
        height: 1,
        backgroundColor: '#F9FAFB',
        marginVertical: 4,
    },
    limitLabel: {
        position: 'absolute',
        bottom: -2,
    },
    limitText: {
        fontSize: 9,
        color: '#D1D5DB',
        fontWeight: '700',
    }
});
