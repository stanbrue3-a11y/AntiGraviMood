import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Platform, LayoutChangeEvent } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
    useDerivedValue,
    SharedValue
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

interface TimeRangeSliderProps {
    startHour: number; // 0-23
    endHour: number;   // 0-23
    onChange: (start: number, end: number) => void;
}

const TOTAL_HOURS = 24;
const SLIDER_WIDTH = 300; // Fixed width for simplicity in modal
const THUMB_SIZE = 28;

export const TimeRangeSlider = ({ startHour, endHour, onChange }: TimeRangeSliderProps) => {
    // 0 to SLIDER_WIDTH mapping
    const startX = useSharedValue((startHour / TOTAL_HOURS) * SLIDER_WIDTH);
    const endX = useSharedValue((endHour / TOTAL_HOURS) * SLIDER_WIDTH);

    // Display values
    const startDisplay = useDerivedValue(() => {
        const h = Math.round((startX.value / SLIDER_WIDTH) * TOTAL_HOURS);
        return `${h}h`;
    });

    const endDisplay = useDerivedValue(() => {
        const h = Math.round((endX.value / SLIDER_WIDTH) * TOTAL_HOURS);
        return `${h}h`; // Could handle > 24 for "next day" but simpler is 0-23
    });

    // Update derived values on prop change
    useEffect(() => {
        startX.value = withSpring((startHour / TOTAL_HOURS) * SLIDER_WIDTH);
        endX.value = withSpring((endHour / TOTAL_HOURS) * SLIDER_WIDTH);
    }, [startHour, endHour]);

    const handleHaptic = () => {
        Haptics.selectionAsync();
    };

    const updateChange = (sX: number, eX: number) => {
        const s = Math.round((sX / SLIDER_WIDTH) * TOTAL_HOURS);
        const e = Math.round((eX / SLIDER_WIDTH) * TOTAL_HOURS);
        onChange(s, e);
    };

    // --- Start Handle Gesture ---
    const startPan = Gesture.Pan()
        .onUpdate((e: any) => {
            let newX = startX.value + e.changeX;
            // Constraint: 0 <= newX < endX - margin
            newX = Math.max(0, Math.min(newX, endX.value - THUMB_SIZE));
            startX.value = newX;
            runOnJS(handleHaptic)();
            runOnJS(updateChange)(newX, endX.value);
        });

    // --- End Handle Gesture ---
    const endPan = Gesture.Pan()
        .onUpdate((e: any) => {
            let newX = endX.value + e.changeX;
            // Constraint: startX + margin < newX <= WIDTH
            newX = Math.max(startX.value + THUMB_SIZE, Math.min(newX, SLIDER_WIDTH));
            endX.value = newX;
            runOnJS(handleHaptic)();
            runOnJS(updateChange)(startX.value, newX);
        });

    // Styles
    const startThumbStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: startX.value - (THUMB_SIZE / 2) }]
    }));

    const endThumbStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: endX.value - (THUMB_SIZE / 2) }]
    }));

    const rangeStyle = useAnimatedStyle(() => ({
        left: startX.value,
        width: endX.value - startX.value,
    }));

    return (
        <View style={styles.container}>
            {/* Time Labels Container */}
            <View style={styles.labelContainer}>
                <AnimatedText text={startDisplay} style={styles.timeLabel} />
                <View style={{ flex: 1 }} />
                <AnimatedText text={endDisplay} style={styles.timeLabel} />
            </View>

            <View style={styles.trackContainer}>
                {/* Background Track */}
                <View style={styles.trackBg} />

                {/* Neon Range Glow */}
                <Animated.View style={[styles.rangeFill, rangeStyle]}>
                    <LinearGradient
                        colors={['#8B5CF6', '#3B82F6', '#2DD4BF']} // Neon Gradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ flex: 1 }}
                    />
                </Animated.View>

                {/* Start Handle */}
                <GestureDetector gesture={startPan}>
                    <Animated.View style={[styles.thumb, startThumbStyle]}>
                        <View style={styles.thumbDot} />
                    </Animated.View>
                </GestureDetector>

                {/* End Handle */}
                <GestureDetector gesture={endPan}>
                    <Animated.View style={[styles.thumb, endThumbStyle]}>
                        <View style={styles.thumbDot} />
                    </Animated.View>
                </GestureDetector>
            </View>
        </View>
    );
};

// Simple Reanimated Text wrapper
const AnimatedText = ({ text, style }: { text: SharedValue<string>, style: any }) => {
    // For simplicity, we just use a simplified re-render or useAnimatedProps with TextInput
    // But standard Text doesn't support animated Props easily without Reanimated.Text
    // Let's us a simple Reanimated TextInput set to editable=false

    const AnimatedTextInput = Animated.createAnimatedComponent(Platform.OS === 'web' ? Text : require('react-native').TextInput);

    const animatedProps = useDerivedValue(() => {
        return { text: text.value } as any; // text prop for TextInput behaves like value on some versions, or use value
    });

    // Using state for simplicity in this specific "time string" case to avoid TextInput complexity
    const [display, setDisplay] = React.useState(text.value);

    useDerivedValue(() => {
        runOnJS(setDisplay)(text.value);
    });

    return <Text style={style}>{display}</Text>;
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
        width: 320,
    },
    labelContainer: {
        flexDirection: 'row',
        width: SLIDER_WIDTH + 20,
        marginBottom: 12,
        justifyContent: 'space-between',
        paddingHorizontal: 0
    },
    timeLabel: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
        fontFamily: Platform.select({ ios: 'Courier', android: 'monospace' }),
        backgroundColor: '#1F2937',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        overflow: 'hidden'
    },
    trackContainer: {
        width: SLIDER_WIDTH,
        height: 6,
        justifyContent: 'center',
    },
    trackBg: {
        width: '100%',
        height: 6,
        backgroundColor: '#374151',
        borderRadius: 3,
        position: 'absolute',
    },
    rangeFill: {
        height: 6,
        borderRadius: 3,
        position: 'absolute',
        // Shadow for Glow effect
        shadowColor: '#2DD4BF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 6
    },
    thumb: {
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        borderRadius: THUMB_SIZE / 2,
        backgroundColor: '#fff',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4
        // top is handled by center alignment in parent potentially or absolute
    },
    thumbDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#1F2937'
    }
});
