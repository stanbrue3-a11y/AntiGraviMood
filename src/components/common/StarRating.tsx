/**
 * StarRating.tsx
 * 
 * Displays a 5-star rating with mood-colored SVG stars.
 * Stars are filled proportionally based on the rating value.
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface StarRatingProps {
    rating: number; // 0-5 scale
    color: string; // Mood color
    size?: number; // Star size (default 16)
    ratingsCount?: number; // Number of reviews
}

// Star path for 5-pointed star
const STAR_PATH = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

// Format large numbers (1234 -> 1.2k)
const formatCount = (count: number): string => {
    if (count >= 1000) {
        return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return count.toString();
};

export const StarRating = ({ rating, color, size = 16, ratingsCount }: StarRatingProps) => {
    const fullStars = Math.floor(rating);
    const partialFill = rating - fullStars;

    const renderStar = (index: number) => {
        const isFull = index < fullStars;
        const isPartial = index === fullStars && partialFill > 0;

        return (
            <View key={index} style={{ marginRight: 1 }}>
                <Svg width={size} height={size} viewBox="0 0 24 24">
                    {/* Border (always visible) */}
                    <Path
                        d={STAR_PATH}
                        fill="none"
                        stroke={color}
                        strokeWidth={1.5}
                        strokeLinejoin="round"
                    />
                    {/* Fill (for full or partial stars) */}
                    {(isFull || isPartial) && (
                        <Path
                            d={STAR_PATH}
                            fill={color}
                            opacity={isFull ? 1 : partialFill}
                        />
                    )}
                </Svg>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.starsRow}>
                {[0, 1, 2, 3, 4].map(renderStar)}
            </View>
            <Text style={[styles.ratingText, { color }]}>{rating.toFixed(1)}</Text>
            {ratingsCount !== undefined && ratingsCount > 0 && (
                <Text style={styles.countText}>({formatCount(ratingsCount)})</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 13,
        fontWeight: '800',
        marginLeft: 6,
    },
    countText: {
        fontSize: 12,
        color: '#9CA3AF',
        marginLeft: 4,
    },
});

export default StarRating;
