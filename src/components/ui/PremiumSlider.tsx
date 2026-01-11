import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import * as Haptics from 'expo-haptics';

interface PremiumSliderProps {
    value: number | number[]; // Single number or array [start, end]
    onValueChange: (val: number | number[]) => void;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    // Visual Props
    trackStyle?: any;
    thumbStyle?: any;
    startLabel?: string;
    endLabel?: string;
    renderThumbComponent?: () => React.ReactNode;
}

const ACTIVE_COLOR = '#ffab60'; // Festif Orange (Primary Action Color)
const TRACK_COLOR = '#F3F4F6';
const THUMB_SIZE = 28;

export const PremiumSlider = ({
    value,
    onValueChange,
    minimumValue = 0,
    maximumValue = 100,
    step = 1,
    startLabel,
    endLabel,
    renderThumbComponent
}: PremiumSliderProps) => {

    const handleValueChange = (val: number | number[]) => {
        // Optional: Throttle Haptics if needed, but 'selection' is subtle enough
        // Haptics.selectionAsync(); 
        // Note: continuously triggering haptics on drag can be overwhelming.
        // Better to trigger on 'onSlidingComplete' or throttle.
        onValueChange(val);
    };

    const handleSlidingComplete = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    return (
        <View style={styles.container}>
            {/* Context Labels (Optional) */}
            {(startLabel || endLabel) && (
                <View style={styles.labelRow}>
                    <Text style={styles.labelText}>{startLabel}</Text>
                    <Text style={styles.labelText}>{endLabel}</Text>
                </View>
            )}

            <Slider
                value={value}
                onValueChange={handleValueChange}
                onSlidingComplete={handleSlidingComplete}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                step={step}
                animateTransitions
                animationType="spring"

                // Track Styles
                trackStyle={styles.track}
                minimumTrackTintColor={ACTIVE_COLOR} // Active part
                maximumTrackTintColor={TRACK_COLOR} // Inactive part

                // Thumb Styles
                thumbStyle={styles.thumb}
                thumbTouchSize={{ width: 60, height: 60 }} // Generous hit slop

                // Custom Thumb (Optional)
                renderThumbComponent={renderThumbComponent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 10,
        position: 'relative' // Important for absolute ticks
    },
    ticksContainer: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: THUMB_SIZE / 2, // Align ticks with thumb centers
        height: '100%',
        zIndex: -1
    },
    tick: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#E5E7EB', // Subtle dot
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    labelText: {
        fontSize: 13,
        color: '#9CA3AF',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        fontWeight: '500',
    },
    track: {
        height: 4,
        borderRadius: 2,
        backgroundColor: TRACK_COLOR,
    },
    thumb: {
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        borderRadius: THUMB_SIZE / 2,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,
        elevation: 9,
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.1)'
    }
});
