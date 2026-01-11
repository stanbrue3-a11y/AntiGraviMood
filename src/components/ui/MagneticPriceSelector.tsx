import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, LayoutChangeEvent, Platform } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
    useDerivedValue
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { CrabIcon, SafeIcon } from '../common/PriceIcons';

interface MagneticPriceSelectorProps {
    value: number | null; // 0 to 3, or null
    onChange: (val: number) => void;
}

const LABELS = [
    { text: "PINCE-M'EN UNE !", color: '#8ccaf7' }, // Cheap = Pince (Blue/Chill)
    { text: "SUPER PINCE", color: '#ffab60' }, // Affordable = Good Deal (Orange/Festif)
    { text: "ÇA PINCE UN PEU", color: '#c499ff' }, // Expensive = Start of Pain (Purple/Culture)
    { text: "AÏE, ÇA PINCE !", color: '#111827' }, // Luxe = Ouch (Black)
];

const KNOB_SIZE = 52;

export const MagneticPriceSelector = ({ value, onChange }: MagneticPriceSelectorProps) => {
    // Current value from props
    const activeIndex = value !== null ? value : 0;

    // Layout
    const trackWidth = useSharedValue(0);

    // Animation State
    const translateX = useSharedValue(0);
    const contextX = useSharedValue(0);
    const isDragging = useSharedValue(false);

    // Sync external value change (if not dragging)
    useEffect(() => {
        if (trackWidth.value > 0 && !isDragging.value) {
            const availableSpace = trackWidth.value - KNOB_SIZE;
            const step = availableSpace / 3;
            // Ensure we spring to the correct position
            translateX.value = withSpring(activeIndex * step, {
                mass: 0.8,
                damping: 15,
                stiffness: 150
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex]);

    const handleLayout = (e: LayoutChangeEvent) => {
        const width = e.nativeEvent.layout.width;
        trackWidth.value = width;
        const availableSpace = width - KNOB_SIZE;
        const step = availableSpace / 3;
        // Immediate update on layout to prevent jumping
        translateX.value = (value || 0) * step;
    };

    const snapTo = (index: number) => {
        'worklet';
        const safeIndex = Math.max(0, Math.min(3, index));
        const availableSpace = trackWidth.value - KNOB_SIZE;
        const step = availableSpace / 3;
        const targetX = safeIndex * step;

        translateX.value = withSpring(targetX, {
            mass: 0.5,
            damping: 12,
            stiffness: 100,
            overshootClamping: false
        });

        runOnJS(onChange)(safeIndex);
        runOnJS(Haptics.selectionAsync)();
    };

    // Robust Pan Gesture
    const pan = Gesture.Pan()
        .activeOffsetX([-20, 20]) // Only activate if moved strictly horizontally
        .onStart(() => {
            contextX.value = translateX.value;
            isDragging.value = true;
        })
        .onUpdate((e) => {
            const availableSpace = trackWidth.value - KNOB_SIZE;
            let newPos = contextX.value + e.translationX;

            // Rubber banding or clamping
            if (newPos < 0) newPos = 0;
            if (newPos > availableSpace) newPos = availableSpace;

            translateX.value = newPos;
        })
        .onEnd((e) => {
            isDragging.value = false;
            const availableSpace = trackWidth.value - KNOB_SIZE;
            if (availableSpace <= 0) return;

            const step = availableSpace / 3;

            // Predict end position based on velocity for "flinging"
            const projectedPosition = translateX.value + (e.velocityX * 0.1);

            const rawIndex = projectedPosition / step;
            const roundedIndex = Math.round(rawIndex);
            snapTo(roundedIndex);
        });

    const tap = Gesture.Tap()
        .onEnd((e) => {
            const width = trackWidth.value;
            if (width <= 0) return;
            // Simple tap logic
            const step = width / 4;
            const index = Math.floor(e.x / step);
            snapTo(index);
        });

    // Tap and Pan separate
    const composed = Gesture.Race(pan, tap);

    const animatedKnobStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }]
    }));

    // Safe fallback for label
    const safeIndex = Math.max(0, Math.min(3, activeIndex));
    const activeLabel = LABELS[safeIndex] || LABELS[0];

    return (
        <View style={styles.container}>
            {/* Dynamic Header */}
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText, { color: activeLabel.color }]}>
                    {activeLabel.text}
                </Text>
            </View>

            {/* The Track Input Area */}
            <GestureDetector gesture={composed}>
                <View
                    style={styles.trackContainer}
                    onLayout={handleLayout}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    {/* Background Track Line */}
                    <View style={styles.trackBar} />

                    {/* Anchors (Visual) */}
                    <View style={styles.anchorsContainer} pointerEvents="none">
                        <CrabIcon size={24} color={activeIndex === 0 ? activeLabel.color : '#9CA3AF'} />
                        <SafeIcon size={24} color={activeIndex === 3 ? activeLabel.color : '#9CA3AF'} />
                    </View>

                    {/* Sliding Knob */}
                    <Animated.View style={[styles.knob, animatedKnobStyle]}>
                        <View style={[styles.knobDot, { backgroundColor: activeLabel.color }]} />
                    </Animated.View>
                </View>
            </GestureDetector>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 16,
        paddingVertical: 5 // Extra buffer
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
    },
    headerText: {
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    trackContainer: {
        height: 64,
        backgroundColor: '#F9FAFB',
        borderRadius: 32,
        justifyContent: 'center',
        paddingHorizontal: 6, // Inset for knob
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    trackBar: {
        position: 'absolute',
        left: 30,
        right: 30,
        height: 6,
        backgroundColor: '#E5E7EB',
        borderRadius: 3,
        zIndex: 0,
    },
    anchorsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        zIndex: 1,
        position: 'absolute',
        left: 0, right: 0, top: 0, bottom: 0,
    },
    knob: {
        width: KNOB_SIZE,
        height: KNOB_SIZE,
        backgroundColor: '#FFFFFF',
        borderRadius: KNOB_SIZE / 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        // Premium shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    knobDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
    }
});
