import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

import { Place } from '../../types/model';
import { moodColors, MoodType } from '../../design/tokens/colors';
import { getDominantMood } from '../../lib/moodUtils';
import { getPlaceImages } from '../../lib/placeUtils';
import { PriceMiniBadge } from '../common/InteractivePriceGauge';

interface LikedPlaceCardProps {
    place: Place;
    onPress: (place: Place) => void;
    style?: any;
}

export const LikedPlaceCard = ({ place, onPress, style }: LikedPlaceCardProps) => {
    // Determine mood
    const dominantMood = getDominantMood(place) as MoodType;
    const color = moodColors[dominantMood]?.primary || '#444';

    // Safely access image
    const images = getPlaceImages(place);
    const imageUri = images[0];

    return (
        <Pressable
            style={[styles.container, style]}
            onPress={() => {
                Haptics.selectionAsync();
                onPress(place);
            }}
        >
            <Image
                source={imageUri}
                style={styles.image}
                contentFit="cover"
                transition={200}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.6)']}
                style={styles.gradient}
            />

            <View style={styles.badge}>
                <View style={[styles.dot, { backgroundColor: color }]} />
                <Text style={[styles.category, { color }]}>{dominantMood.toUpperCase()}</Text>
            </View>

            <View style={styles.priceContainer}>
                <PriceMiniBadge pricing={place.pricing} />
            </View>

            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={2}>{place.name}</Text>
                <Text style={styles.address} numberOfLines={1}>{place.subcategory || place.category}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', // Flexible
        height: 220, // Taller for Pinterest feel
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#f3f4f6',
        position: 'relative',
        marginBottom: 12, // Spacing
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
    },
    badge: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        gap: 4,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    category: {
        fontSize: 10,
        fontWeight: '700',
    },
    priceContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    info: {
        position: 'absolute',
        bottom: 12,
        left: 12,
        right: 12,
        // Ensure text doesn't touch edges
        paddingRight: 8,
    },
    name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Georgia', // Serif font for premium feel
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    address: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 12,
        marginTop: 2,
        textTransform: 'capitalize',
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
});
