import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated as RNAnimated } from 'react-native';
import * as Haptics from 'expo-haptics';

interface InteractivePriceGaugeProps {
    selectedPrice: number | null;
    onPriceChange: (price: number | null) => void;
}

const PRICE_LABELS = ['Bons plans', 'Abordable', 'Plaisir', 'Folie'];

// Individual Bar
const Bar = ({ isActive }: { isActive: boolean }) => {
    const anim = useRef(new RNAnimated.Value(isActive ? 1 : 0)).current;

    React.useEffect(() => {
        RNAnimated.timing(anim, {
            toValue: isActive ? 1 : 0,
            duration: 200,
            useNativeDriver: false, // color
        }).start();
    }, [isActive]);

    const backgroundColor = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E5E7EB', '#1F2937']
    });

    const scaleY = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.25]
    });

    return (
        <RNAnimated.View
            style={[
                styles.bar,
                {
                    backgroundColor,
                    transform: [{ scaleY }]
                }
            ]}
        />
    );
};

export const InteractivePriceGauge = ({ selectedPrice, onPriceChange }: InteractivePriceGaugeProps) => {
    const [width, setWidth] = useState(0);

    const [localPrice, setLocalPrice] = useState<number | null>(selectedPrice);

    // Sync local state when prop changes from outside (e.g. clear filters)
    React.useEffect(() => {
        setLocalPrice(selectedPrice);
    }, [selectedPrice]);

    const handleTouch = (x: number) => {
        if (!width) return;
        // Clamp
        const p = Math.max(0.01, Math.min(0.99, x / width));
        const level = Math.ceil(p * 4);

        if (localPrice !== level) {
            Haptics.selectionAsync();
            setLocalPrice(level); // Instant update
            onPriceChange(level);
        }
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (evt) => handleTouch(evt.nativeEvent.locationX),
            onPanResponderMove: (evt) => handleTouch(evt.nativeEvent.locationX),
        })
    ).current;

    return (
        <View style={styles.wrapper}>
            <View style={styles.icon}>
                <Text style={styles.iconHashtag}>€</Text>
            </View>

            <View
                style={styles.gaugeContainer}
                onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
            >
                {/* Visuals */}
                <View style={styles.barsRow}>
                    {[1, 2, 3, 4].map((level) => {
                        const isActive = localPrice !== null && level <= localPrice;
                        return (
                            <Bar key={level} isActive={isActive} />
                        );
                    })}
                </View>

                {/* Touch Overlay */}
                <View
                    style={styles.touchOverlay}
                    {...panResponder.panHandlers}
                />
            </View>

            <Text style={styles.label}>
                {localPrice ? PRICE_LABELS[localPrice - 1] : 'Tous'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F9FAFB',
        borderRadius: 20,
        gap: 16,
        marginBottom: 24,
    },
    icon: {
        width: 40, height: 40,
        borderRadius: 20,
        backgroundColor: '#1F2937',
        alignItems: 'center', justifyContent: 'center'
    },
    iconHashtag: {
        color: '#fff', fontSize: 18, fontWeight: '700', fontFamily: 'Georgia'
    },
    gaugeContainer: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        position: 'relative',
    },
    barsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        height: 12,
        paddingHorizontal: 0,
    },
    bar: {
        flex: 1,
        height: 12,
        borderRadius: 6,
    },
    touchOverlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 100,
        backgroundColor: 'transparent',
    },
    label: {
        width: 80,
        textAlign: 'right',
        fontSize: 13,
        fontFamily: 'Inter_600SemiBold',
        color: '#4B5563'
    }
});
