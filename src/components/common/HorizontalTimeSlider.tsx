import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

interface ProTimeSliderProps {
    timeRange: { start: number; end: number } | null;
    onTimeRangeChange: (range: { start: number; end: number } | null) => void;
}

const START_OFFSET = 6;
const TOTAL_HOURS = 24;
const LABELS = [6, 12, 18, 0, 6];

export const HorizontalTimeSlider = ({ timeRange, onTimeRangeChange }: ProTimeSliderProps) => {
    const [width, setWidth] = useState(0);

    // Helpers
    const getProgress = (h: number) => {
        let n = h;
        if (n < START_OFFSET) n += 24;
        return Math.max(0, Math.min(1, (n - START_OFFSET) / TOTAL_HOURS));
    };

    const getHour = (p: number) => {
        let h = START_OFFSET + (p * TOTAL_HOURS);
        if (h >= 24) h -= 24;
        return Math.round(h);
    };

    // Current State (Need refs for PanResponder access without re-render lag)
    const rangeRef = useRef(timeRange || { start: 18, end: 2 });
    useEffect(() => {
        if (timeRange) rangeRef.current = timeRange;
    }, [timeRange]);

    // Animated Values for visual smoothness
    // We update these imperatively on Pan
    const startAnim = useRef(new Animated.Value(0)).current;
    const endAnim = useRef(new Animated.Value(0)).current;

    // Sync Animated Values on Width/Props change
    useEffect(() => {
        if (width > 0) {
            const s = getProgress(rangeRef.current.start);
            const e = getProgress(rangeRef.current.end);

            startAnim.setValue(s * width);
            endAnim.setValue(e * width);
        }
    }, [width, timeRange?.start, timeRange?.end]);

    // PanResponder
    const activeKnob = useRef<'start' | 'end' | null>(null);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (evt, gestureState) => {
                if (width === 0) return;
                const { locationX } = evt.nativeEvent;
                const p = Math.max(0, Math.min(1, locationX / width));

                // Identify closest knob
                const sP = getProgress(rangeRef.current.start);
                const eP = getProgress(rangeRef.current.end);

                const distStart = Math.abs(p - sP);
                const distEnd = Math.abs(p - eP);

                if (distStart < distEnd) {
                    activeKnob.current = 'start';
                    Haptics.selectionAsync();
                    updateStart(p);
                } else {
                    activeKnob.current = 'end';
                    Haptics.selectionAsync();
                    updateEnd(p);
                }
            },

            onPanResponderMove: (evt, gestureState) => {
                if (width === 0 || !activeKnob.current) return;
                const { locationX } = evt.nativeEvent;
                const p = Math.max(0, Math.min(1, locationX / width));

                if (activeKnob.current === 'start') {
                    updateStart(p);
                } else {
                    updateEnd(p);
                }
            },

            onPanResponderRelease: () => {
                activeKnob.current = null;
                // Final sync check if needed
            }
        })
    ).current;

    const updateStart = (p: number) => {
        // Clamp: 0 <= p <= currentEnd - margin
        const currentEndP = getProgress(rangeRef.current.end);
        // Margin of ~30 mins (0.5/24 = 0.02)
        const limit = Math.max(0, currentEndP - 0.04);
        const safeP = Math.min(p, limit);

        startAnim.setValue(safeP * width);

        const newHour = getHour(safeP);
        if (newHour !== rangeRef.current.start) {
            rangeRef.current = { ...rangeRef.current, start: newHour };
            onTimeRangeChange(rangeRef.current);
        }
    };

    const updateEnd = (p: number) => {
        // Clamp: currentStart + margin <= p <= 1
        const currentStartP = getProgress(rangeRef.current.start);
        const limit = Math.min(1, currentStartP + 0.04);
        const safeP = Math.max(p, limit);

        endAnim.setValue(safeP * width);

        const newHour = getHour(safeP);
        if (newHour !== rangeRef.current.end) {
            rangeRef.current = { ...rangeRef.current, end: newHour };
            onTimeRangeChange(rangeRef.current);
        }
    };

    // Derived Animated styles
    // Left: Start
    // Width: End - Start
    const barWidth = Animated.subtract(endAnim, startAnim);
    // Safety: ensure no negative width visually (though clamped logic above should prevent)

    // Labels
    const displayStart = timeRange ? timeRange.start : 18;
    const displayEnd = timeRange ? timeRange.end : 2;

    return (
        <View style={styles.container}>
            <View
                style={styles.trackContainer}
                onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
            >
                {/* Visual Track */}
                <View style={styles.trackBg} />

                <Animated.View
                    style={[
                        styles.trackActiveContainer,
                        { left: startAnim, width: barWidth }
                    ]}
                >
                    <LinearGradient
                        colors={['#8ccaf7', '#ffab60', '#c499ff']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        style={styles.gradient}
                    />
                </Animated.View>

                {/* Start Thumb */}
                <Animated.View style={[styles.thumb, { transform: [{ translateX: Animated.add(startAnim, -20) }] }]}>
                    <View style={styles.labelParams}><Text style={styles.labelText}>{displayStart}h</Text></View>
                    <View style={styles.thumbKnob} />
                </Animated.View>

                {/* End Thumb */}
                <Animated.View style={[styles.thumb, { transform: [{ translateX: Animated.add(endAnim, -20) }] }]}>
                    <View style={styles.labelParams}><Text style={styles.labelText}>{displayEnd}h</Text></View>
                    <View style={styles.thumbKnob} />
                </Animated.View>

                {/* Touch Overlay - High Z-Index to capture all touches safely */}
                <View
                    style={styles.touchOverlay}
                    {...panResponder.panHandlers}
                />
            </View>

            <View style={styles.scale}>
                {LABELS.map((l, i) => (
                    <Text key={`${l}-${i}`} style={styles.scaleText}>{l}h</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', paddingVertical: 12 },
    trackContainer: { height: 50, justifyContent: 'center' },
    trackBg: {
        height: 8, backgroundColor: '#F3F4F6', borderRadius: 4, width: '100%',
        position: 'absolute'
    },
    trackActiveContainer: {
        height: 8, borderRadius: 4, position: 'absolute', overflow: 'hidden'
    },
    gradient: { width: '100%', height: '100%' },

    touchOverlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 100,
        // backgroundColor: 'rgba(255,0,0,0.1)', // Debug
    },

    thumb: {
        position: 'absolute', width: 40, height: 50,
        left: 0,
        justifyContent: 'center', alignItems: 'center',
        zIndex: 10
    },
    thumbKnob: {
        width: 28, height: 28, borderRadius: 14,
        backgroundColor: '#fff',
        borderWidth: 1, borderColor: '#E5E7EB',
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, elevation: 4
    },
    labelParams: {
        position: 'absolute', top: -4,
        backgroundColor: '#1F2937', paddingHorizontal: 6, paddingVertical: 2,
        borderRadius: 6, zIndex: 20
    },
    labelText: { color: '#fff', fontSize: 10, fontWeight: '700', fontFamily: 'Inter_600SemiBold' },

    scale: { flexDirection: 'row', justifyContent: 'space-between', marginTop: -4 },
    scaleText: { fontSize: 12, color: '#9CA3AF', fontFamily: 'Inter_600SemiBold' }
});
