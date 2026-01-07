import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Platform, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
    useDerivedValue,
    interpolateColor,
    interpolate,
    SharedValue
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

interface PriceSliderProps {
    value: number | null; // 1 | 2 | 3 | 4 or null
    onChange: (value: number | null) => void;
}

const BAR_COUNT = 4;
const MAX_BAR_HEIGHT = 60;
const SLIDER_WIDTH = 240;
const THUMB_SIZE = 24;

export const PriceSlider = ({ value, onChange }: PriceSliderProps) => {
    // Current drag position (0 to SLIDER_WIDTH)
    // Initial position based on value
    const initialPos = value ? ((value / BAR_COUNT) * SLIDER_WIDTH) : 0;
    const translateX = useSharedValue(initialPos);
    const activeLevel = useDerivedValue(() => {
        const percent = translateX.value / SLIDER_WIDTH;
        // Map 0..1 to 0..4
        const rawLevel = Math.ceil(percent * BAR_COUNT);
        return Math.max(0, Math.min(BAR_COUNT, rawLevel));
    });

    // Track previous level for haptics
    const prevLevel = useSharedValue(value || 0);

    const handleHaptic = (newLevel: number) => {
        if (newLevel !== prevLevel.value) {
            prevLevel.value = newLevel;
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onChange(newLevel === 0 ? null : newLevel);
        }
    };

    const pan = Gesture.Pan()
        .onUpdate((e: any) => {
            let newX = e.x;
            // Clamp
            newX = Math.max(0, Math.min(SLIDER_WIDTH, newX));
            translateX.value = newX;
            runOnJS(handleHaptic)(Math.ceil((newX / SLIDER_WIDTH) * BAR_COUNT) || 0);
        })
        .onEnd(() => {
            // Magnetic Snap
            const level = Math.round((translateX.value / SLIDER_WIDTH) * BAR_COUNT);
            const snappedX = (level / BAR_COUNT) * SLIDER_WIDTH;
            translateX.value = withSpring(snappedX, { damping: 15, stiffness: 200 });
            // Ensure final value is set
            runOnJS(handleHaptic)(level);
        });

    const tap = Gesture.Tap()
        .onEnd((e) => {
            const level = Math.ceil((e.x / SLIDER_WIDTH) * BAR_COUNT);
            const snappedX = (level / BAR_COUNT) * SLIDER_WIDTH;
            translateX.value = withSpring(snappedX);
            runOnJS(handleHaptic)(level);
        });

    const gesture = Gesture.Race(pan, tap);

    // Update internal state if external props change (e.g. reset)
    useEffect(() => {
        const targetX = value ? ((value / BAR_COUNT) * SLIDER_WIDTH) : 0;
        translateX.value = withSpring(targetX);
        prevLevel.value = value || 0;
    }, [value]);

    const thumbStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value - (THUMB_SIZE / 2) }]
    }));

    const trackFillStyle = useAnimatedStyle(() => ({
        width: translateX.value
    }));

    return (
        <View style={styles.container}>
            {/* Bars Visualization */}
            <View style={styles.barsContainer}>
                {Array.from({ length: BAR_COUNT }).map((_, i) => {
                    return (
                        <PriceBar
                            key={i}
                            index={i}
                            activeLevel={activeLevel}
                        />
                    );
                })}
            </View>

            {/* Slider Interaction Area */}
            <GestureDetector gesture={gesture}>
                <View style={styles.sliderTrackContainer}>
                    {/* Track Background */}
                    <View style={styles.trackBg} />

                    {/* Active Track Fill (Gradient) */}
                    <Animated.View style={[styles.trackFill, trackFillStyle]}>
                        <LinearGradient
                            colors={['#8B5CF6', '#3B82F6']} // Violet to Electric Blue
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ flex: 1 }}
                        />
                    </Animated.View>

                    {/* Thumb */}
                    <Animated.View style={[styles.thumb, thumbStyle]}>
                        <View style={styles.thumbInner} />
                    </Animated.View>
                </View>
            </GestureDetector>

            <Text style={styles.label}>
                {value ? `${Array(value).fill('€').join('')}` : 'Tout budget'}
            </Text>
        </View>
    );
};

const PriceBar = ({ index, activeLevel }: { index: number, activeLevel: SharedValue<number> }) => {
    // Determine target height
    // Index 0: 25%, Index 3: 100%
    const height = (index + 1) * (MAX_BAR_HEIGHT / BAR_COUNT); // Linear scale for simpler visual

    const animatedStyle = useAnimatedStyle(() => {
        const isActive = activeLevel.value >= (index + 1);
        return {
            opacity: withSpring(isActive ? 1 : 0.3),
            transform: [{ scaleY: withSpring(isActive ? 1 : 0.9) }] // Subtle pop
        };
    });

    return (
        <View style={[styles.barWrapper, { height: MAX_BAR_HEIGHT }]}>
            {/* Background Grey Bar */}
            <View style={[styles.barBase, { height }]} />

            {/* Overlay Gradient Bar masked by height and opacity */}
            <Animated.View style={[styles.barActive, { height }, animatedStyle]}>
                <LinearGradient
                    colors={['#8B5CF6', '#3B82F6']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={{ flex: 1, borderRadius: 4 }}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
        gap: 16
    },
    barsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: SLIDER_WIDTH,
        height: MAX_BAR_HEIGHT,
        marginBottom: 8
    },
    barWrapper: {
        width: 30, // Fixed width bars
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    barBase: {
        width: '100%',
        backgroundColor: '#374151',
        borderRadius: 4,
        position: 'absolute',
        bottom: 0,
    },
    barActive: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderRadius: 4,
        overflow: 'hidden',
    },

    // Slider
    sliderTrackContainer: {
        width: SLIDER_WIDTH,
        height: 30, // Hit slop
        justifyContent: 'center',
    },
    trackBg: {
        width: '100%',
        height: 4,
        backgroundColor: '#374151',
        borderRadius: 2,
        position: 'absolute',
    },
    trackFill: {
        height: 4,
        borderRadius: 2,
        position: 'absolute',
        left: 0,
        overflow: 'hidden'
    },
    thumb: {
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        borderRadius: THUMB_SIZE / 2,
        backgroundColor: '#fff',
        position: 'absolute',
        shadowColor: '#8B5CF6',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        top: (30 - THUMB_SIZE) / 2
    },
    thumbInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#8B5CF6'
    },
    label: {
        color: '#9CA3AF',
        fontWeight: '600',
        fontSize: 14,
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    }
});
