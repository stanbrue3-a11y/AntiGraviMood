import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../design';
import { StarRating } from '../common/StarRating';
import { Place } from '../../types/model';
import { MoodType } from '../../design';

interface PlaceMetaHeaderProps {
    place: Place;
    primaryColor: string;
    dominantMood: MoodType;
}

/**
 * PlaceMetaHeader - Mood & Rating Summary 🏛️⭐
 * Reusable component for the top info row.
 */
export const PlaceMetaHeader = React.memo(({ place, primaryColor, dominantMood }: PlaceMetaHeaderProps) => {
    const { theme } = useTheme();
    return (
        <View style={styles.metaRow}>
            <View style={[styles.moodBadge, { backgroundColor: theme.surface }]}>
                <Text style={[styles.moodText, { color: primaryColor }]}>{dominantMood.toUpperCase()}</Text>
            </View>

            <Text
                style={[styles.categoryPath, { color: theme.text.primary }]}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.8}
            >
                {place.category} • {place.location.arrondissement}e
            </Text>

            <View style={styles.ratingBox}>
                <StarRating
                    rating={place.google_rating || 0}
                    size={15}
                    color={primaryColor}
                    ratingsCount={place.google_user_ratings_total}
                />
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        gap: 6,
    },
    moodBadge: {
        flexShrink: 0,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    moodText: {
        fontSize: 12,
        fontWeight: '900',
        letterSpacing: 1.2,
    },
    categoryPath: {
        flexShrink: 1,
        fontSize: 17,
        fontWeight: '700',
        fontFamily: 'Inter_700Bold',
        marginRight: 6,
    },
    ratingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        flexShrink: 0,
    },
});
