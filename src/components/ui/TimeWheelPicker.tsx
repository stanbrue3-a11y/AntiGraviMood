import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';

// Constants
const ITEM_HEIGHT = 44; // Standard touch height
const VISIBLE_ITEMS = 5; // How many items visible at once
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

interface WheelPickerProps {
    value: number;
    items: number[]; // Array of hours [0...23]
    onChange: (val: number) => void;
    suffix?: string;
    formatLabel?: (val: number) => string;
}

export const TimeWheelPicker = React.memo(({ value, items, onChange, suffix = 'h', formatLabel }: WheelPickerProps) => {
    const scrollRef = useRef<ScrollView>(null);

    // Initial Scroll
    useEffect(() => {
        // Wait for layout? Or just timeout briefly to safe scroll
        setTimeout(() => {
            const index = items.indexOf(value);
            if (index !== -1 && scrollRef.current) {
                scrollRef.current.scrollTo({
                    y: index * ITEM_HEIGHT,
                    animated: false
                });
            }
        }, 100);
    }, []);

    const [activeIndex, setActiveIndex] = React.useState(items.indexOf(value));
    const lastHapticIndex = useRef<number>(items.indexOf(value));

    // Sync external value changes if they come from parent (e.g. init)
    useEffect(() => {
        const idx = items.indexOf(value);
        if (idx !== -1 && idx !== activeIndex) {
            setActiveIndex(idx);
            lastHapticIndex.current = idx;
        }
    }, [value]);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        const clampedIndex = Math.max(0, Math.min(index, items.length - 1));

        if (clampedIndex !== lastHapticIndex.current) {
            Haptics.selectionAsync(); // Micro vibration
            lastHapticIndex.current = clampedIndex;
            setActiveIndex(clampedIndex); // Update visual bold instantly
        }
    };

    const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        const clampedIndex = Math.max(0, Math.min(index, items.length - 1));

        const newValue = items[clampedIndex];
        if (newValue !== value) {
            // Final vibration optional or different? Let's keep it simple.
            onChange(newValue);
        }
    };

    // Pad the list so the first and last item can reach the center
    const paddingVertical = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2;

    return (
        <View style={styles.container}>
            {/* Center Highlight "Lens" */}
            <View style={styles.lens} pointerEvents="none" />

            {/* Gradients for fade effect */}
            <LinearGradient
                colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
                style={styles.gradientTop}
                pointerEvents="none"
            />
            <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                style={styles.gradientBottom}
                pointerEvents="none"
            />

            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                nestedScrollEnabled={true}
                contentContainerStyle={{ paddingVertical: paddingVertical }}
                onScroll={handleScroll}
                scrollEventThrottle={16} // 60fps
                onMomentumScrollEnd={handleMomentumScrollEnd}
                onScrollEndDrag={handleMomentumScrollEnd}
            >
                {items.map((item, index) => {
                    const isSelected = index === activeIndex;
                    return (
                        <View key={item} style={styles.itemContainer}>
                            <Text style={[
                                styles.itemText,
                                isSelected ? styles.itemTextActive : styles.itemTextInactive
                            ]}>
                                {formatLabel ? formatLabel(item) : `${item}${suffix}`}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        height: CONTAINER_HEIGHT,
        width: 80, // Fixed width column
        overflow: 'hidden',
        position: 'relative',
    },
    itemContainer: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        fontSize: 20,
    },
    itemTextActive: {
        color: '#111827',
        fontWeight: 'bold',
        fontSize: 22, // Slight magnification
    },
    itemTextInactive: {
        color: '#D1D5DB', // Very light grey
        fontWeight: '400',
    },
    lens: {
        position: 'absolute',
        top: (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2,
        left: 0,
        right: 0,
        height: ITEM_HEIGHT,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#F3F4F6', // Subtle lens border
        backgroundColor: 'rgba(249, 250, 251, 0.5)', // Slight highlight bg
        borderRadius: 8,
        zIndex: -1,
    },
    gradientTop: {
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: ITEM_HEIGHT * 1.5,
        zIndex: 10,
    },
    gradientBottom: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: ITEM_HEIGHT * 1.5,
        zIndex: 10,
    }
});
