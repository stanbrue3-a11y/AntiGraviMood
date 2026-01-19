import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    interpolate,
    Extrapolation,
    useAnimatedReaction,
    runOnJS
} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
// Padding container (24) * 2 = 48. Let's make the track take available width.
const TRACK_WIDTH = width - 48 - 32; // -32 for some internal padding

interface MagneticPriceSelectorProps {
    price: number; // e.g., 15 (Bouillon)
    parisAverage: number; // e.g., 28
    currency?: string;
    moodColor: string; // e.g., #FFAB60
    min?: number;
    max?: number;
    onValueChange?: (value: number) => void;
}

export const MagneticPriceSelector = ({
    price,
    parisAverage,
    currency = '€',
    moodColor,
    min = 10,
    max = 50,
    onValueChange
}: MagneticPriceSelectorProps) => {

    // 0-1 scale representing position on track
    const progress = useSharedValue(0);
    const isPressed = useSharedValue(false);

    // Initialize position based on price
    useEffect(() => {
        const initialProgress = (price - min) / (max - min);
        progress.value = withSpring(Math.max(0, Math.min(1, initialProgress)), { damping: 20 });
    }, [price]);

    // Haptics logic
    const activeStep = useSharedValue(0);
    useAnimatedReaction(
        () => Math.round(progress.value * (max - min) + min),
        (current, previous) => {
            if (current !== previous && isPressed.value) {
                runOnJS(Haptics.selectionAsync)();
            }
        }
    );

    const pan = Gesture.Pan()
        .onBegin(() => {
            isPressed.value = true;
            runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
        })
        .onUpdate((e) => {
            // Calculate new progress based on translation
            // We need a stable reference mechanism, simplifying to relative movement for now or clamped
            // Actually absolute positioning on the track is better for a slider.
            // Let's assume start position + delta.
            // Simplified: we rely on the visual X coordinate.
            // Since onUpdate gives translation from start, we need to store initial context.
        })
        .onChange((e) => {
            const delta = e.changeX / TRACK_WIDTH;
            const newProgress = Math.max(0, Math.min(1, progress.value + delta));
            progress.value = newProgress;

            // Trigger JS callback to update the filter
            const newValue = Math.round(newProgress * (max - min) + min);
            if (onValueChange) {
                runOnJS(onValueChange)(newValue);
            }
        })
        .onFinalize(() => {
            isPressed.value = false;
        });

    // Derived values
    const thumbX = useAnimatedStyle(() => ({
        transform: [{ translateX: progress.value * TRACK_WIDTH }]
    }));

    const averageXPos = ((parisAverage - min) / (max - min)) * TRACK_WIDTH;
    const isCheaperThanAvg = price < parisAverage;

    const currentPriceDisplayed = useAnimatedStyle(() => {
        // Not using Reanimated's TextInput adapter for simplicity, just visual feedback
        return {};
    });

    const activeTrackStyle = useAnimatedStyle(() => ({
        width: progress.value * TRACK_WIDTH,
        backgroundColor: moodColor
    }));

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.labelRow}>
                <Text style={styles.title}>INDICE PRIX</Text>
                <View style={[styles.badge, { backgroundColor: isCheaperThanAvg ? '#4CAF50' : '#FFC107' }]}>
                    <Text style={styles.badgeText}>
                        {isCheaperThanAvg ? 'BON PLAN' : 'STANDARD'}
                    </Text>
                </View>
            </View>

            {/* The Track */}
            <View style={styles.trackContainer}>
                {/* Background Rail */}
                <View style={styles.railBackground} />

                {/* Average Marker */}
                <View style={[styles.averageMarker, { left: averageXPos }]}>
                    <View style={styles.averageLine} />
                    <Text style={styles.averageLabel}>Moy. Paris {parisAverage}{currency}</Text>
                </View>

                {/* Active Measure Rail */}
                <Animated.View style={[styles.activeRail, activeTrackStyle]} />

                {/* Drag Area / Gesture Detector */}
                <GestureDetector gesture={pan}>
                    <Animated.View style={[styles.thumbInfoContainer, thumbX]}>
                        {/* The Knob */}
                        <View style={[styles.knob, { borderColor: moodColor, shadowColor: moodColor }]}>
                            <View style={[styles.knobInner, { backgroundColor: moodColor }]} />
                        </View>

                        {/* Floating Price Tooltip */}
                        <View style={styles.tooltip}>
                            <Text style={styles.tooltipText}>
                                {price}{currency}
                            </Text>
                        </View>
                    </Animated.View>
                </GestureDetector>
            </View>

            <View style={styles.legendRow}>
                <Text style={styles.legendText}>{min}{currency}</Text>
                <View style={{ flex: 1 }} />
                <Text style={styles.legendText}>{max}{currency}+</Text>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        paddingHorizontal: 0,
        width: '100%',
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 12,
        fontWeight: '700',
        color: '#9CA3AF',
        letterSpacing: 1,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
    trackContainer: {
        height: 40, // Touch area
        justifyContent: 'center',
        width: TRACK_WIDTH,
    },
    railBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: '#E5E7EB',
        borderRadius: 2,
    },
    activeRail: {
        position: 'absolute',
        left: 0,
        height: 4,
        borderRadius: 2,
    },
    averageMarker: {
        position: 'absolute',
        top: -10,
        bottom: -10, // Extend text area
        alignItems: 'center',
        zIndex: 0,
        opacity: 0.6,
        transform: [{ translateX: -1 /* Center aligns line roughly */ }]
    },
    averageLine: {
        width: 2,
        height: 12, // Tick mark
        backgroundColor: '#6B7280',
        marginBottom: 4, // Spacing to rail
        marginTop: 14 // Align with rail roughly
    },
    averageLabel: {
        position: 'absolute',
        top: -20,
        fontSize: 10,
        color: '#6B7280',
        width: 80,
        textAlign: 'center',
        fontWeight: '600'
    },
    thumbInfoContainer: {
        position: 'absolute',
        left: 0, // Starts at 0, transformed by translateX
        alignItems: 'center',
        zIndex: 10,
        marginLeft: -20, // Center the 40px thumb
        width: 40,
    },
    knob: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    knobInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    tooltip: {
        position: 'absolute',
        top: 34,
        backgroundColor: '#111',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    tooltipText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    legendRow: {
        flexDirection: 'row',
        marginTop: 8,
        opacity: 0.4
    },
    legendText: {
        fontSize: 11,
        color: '#6B7280'
    }
});
