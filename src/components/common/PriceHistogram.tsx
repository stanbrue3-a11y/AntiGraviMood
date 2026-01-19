import React, { useMemo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface PriceHistogramProps {
    data: number[]; // Array of prices
    min: number;
    max: number;
    activeLimit: number | null;
    activeColor: string;
    height?: number;
    barWidth?: number;
    width?: number;
}

const PriceHistogram: React.FC<PriceHistogramProps> = ({
    data, min, max, activeLimit, activeColor,
    height = 24, barWidth, width = SCREEN_WIDTH - 96
}) => {
    const buckets = useMemo(() => {
        const bucketCount = 20;
        const result = new Array(bucketCount).fill(0);
        const step = (max - min) / bucketCount;

        data.forEach(price => {
            if (price >= min && price <= max) {
                const bucketIndex = Math.min(bucketCount - 1, Math.floor((price - min) / step));
                result[bucketIndex]++;
            }
        });

        // Normalize to height (max bucket = 1)
        const maxBucket = Math.max(...result);
        return result.map(count => (maxBucket > 0 ? count / maxBucket : 0));
    }, [data, min, max]);

    const activeIndex = activeLimit !== null
        ? Math.floor(((activeLimit - min) / (max - min)) * buckets.length)
        : buckets.length;

    return (
        <View style={[styles.container, { width, height: height + 6 }]}>
            {buckets.map((h, i) => (
                <View
                    key={i}
                    style={[
                        styles.bar,
                        {
                            height: Math.max(2, h * height),
                            backgroundColor: i < activeIndex ? activeColor : '#E5E7EB',
                            opacity: i < activeIndex ? 1 : 0.4,
                            ...(barWidth ? { width: barWidth, flex: 0 } : {})
                        }
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: -10, // overlap with slider track
        zIndex: 1,
    },
    bar: {
        flex: 1,
        marginHorizontal: 1,
        borderRadius: 2,
    },
});

export default PriceHistogram;
