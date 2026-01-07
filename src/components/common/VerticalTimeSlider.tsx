import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Dimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

interface VerticalTimeSliderProps {
    selectedHour: number | null;
    onHourChange: (hour: number | null) => void;
}

const HOURS = [18, 20, 22, 0, 2, 4]; // Nightlife focus
// Mapping linear progress 0-1 to Hour
const getLabelForProgress = (p: number) => {
    // p goes 0 (top) to 1 (bottom)
    // Let's map 0->17h, 1->06h (next day)
    // Range = 17 to 30 (06+24)
    const startH = 17;
    const totalHours = 13; // 17h to 6h = 13h span
    let h = startH + (p * totalHours);
    if (h >= 24) h -= 24;
    return Math.floor(h);
};

export const VerticalTimeSlider = ({ selectedHour, onHourChange }: VerticalTimeSliderProps) => {
    const [containerHeight, setContainerHeight] = useState(0);

    const handleTouch = (evt: any) => {
        if (!containerHeight) return;
        const ly = evt.nativeEvent.locationY;
        const p = Math.max(0, Math.min(1, ly / containerHeight));

        const hour = getLabelForProgress(p);

        if (selectedHour !== hour) {
            Haptics.selectionAsync();
            onHourChange(hour);
        }
    };

    // Calculate position % for thumb based on selectedHour
    let thumbTop = -100; // hidden by default
    if (selectedHour !== null) {
        // Reverse map logic
        // If hour < 17, assume it's next day (add 24)
        let normalizedH = selectedHour;
        if (selectedHour < 12) normalizedH += 24;

        // Range 17 -> 30
        const startH = 17;
        const total = 13;
        const p = (normalizedH - startH) / total;

        if (containerHeight) {
            thumbTop = p * containerHeight;
        }
    }

    return (
        <View style={styles.wrapper}>
            {/* Labels Column */}
            <View style={styles.labelsCol}>
                {HOURS.map((h, i) => (
                    <Text key={h} style={styles.labelText}>
                        {h}h
                    </Text>
                ))}
            </View>

            {/* The Bar */}
            <Pressable
                style={styles.barContainer}
                onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
                onPressIn={handleTouch}
                onTouchMove={handleTouch} // Drag behavior simple
            >
                <LinearGradient
                    colors={['#FFAA00', '#FF4500', '#800080', '#191970']} // Sunset to Midnight
                    style={styles.gradientBar}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />

                {/* Thumb / Indicator */}
                {selectedHour !== null && (
                    <View style={[styles.thumb, { top: thumbTop - 12 }]}>
                        <View style={styles.thumbDot} />
                        <View style={styles.thumbLabelBubble}>
                            <Text style={styles.thumbLabelText}>{selectedHour}h</Text>
                        </View>
                    </View>
                )}
            </Pressable>

            {/* Clear Button (if selected) */}
            {selectedHour !== null && (
                <Pressable style={styles.clearBtn} onPress={() => onHourChange(null)}>
                    <Text style={styles.clearText}>Effacer</Text>
                </Pressable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        height: 200, // Fixed height for slider area
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
        paddingLeft: 20
    },
    labelsCol: {
        justifyContent: 'space-between',
        height: '100%',
        paddingVertical: 10,
        marginRight: 16
    },
    labelText: {
        fontSize: 12,
        fontFamily: 'Inter_600SemiBold',
        color: '#9CA3AF'
    },
    barContainer: {
        width: 40,
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#F3F4F6', // container bg
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    gradientBar: {
        width: 8, // thin bar inside the touch area
        height: '90%',
        borderRadius: 4,
    },
    thumb: {
        position: 'absolute',
        left: -4, // Centered regarding the 40px container? 
        // Container is 40px wide. Gradient is 8px wide centered.
        // We want thumb to be centered on container.
        width: 48,
        height: 24,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // Trick: The thumb dot is on the bar, the label is to the right
        pointerEvents: 'none'
    },
    thumbDot: {
        width: 20, height: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 4,
        borderColor: '#1F2937',
        marginLeft: 10, // Center in 40px container
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3
    },
    thumbLabelBubble: {
        backgroundColor: '#1F2937',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginLeft: 8
    },
    thumbLabelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    },
    clearBtn: {
        position: 'absolute',
        bottom: -30,
        right: 0
    },
    clearText: {
        color: '#EF4444',
        fontSize: 12,
        fontWeight: '600'
    }
});
