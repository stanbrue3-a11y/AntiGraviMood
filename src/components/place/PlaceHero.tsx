import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageCarousel } from '../common/ImageCarousel';
import { Place } from '../../stores';
import { getPlaceImages } from '../../lib/placeUtils';

interface PlaceHeroProps {
    place: Place;
}

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });

const getCategoryLabel = (place: Place) => {
    const cats = place.categories || [place.category];

    // Smart Brasserie Detection
    const hasBar = cats.includes('bar');
    const hasResto = cats.includes('restaurant');
    const hasCafe = cats.includes('café');

    let displayCats = cats.map(c => {
        if (c === 'museum') return 'MUSÉE';
        if (c === 'restaurant') return 'RESTO';
        return c.toUpperCase();
    });

    if (hasBar && hasResto && hasCafe) {
        return `BRASSERIE • BAR • RESTO`;
    }

    return displayCats.join(' • ');
};

export const PlaceHero = ({ place }: PlaceHeroProps) => {
    return (
        <View style={styles.heroContainer}>
            <ImageCarousel images={getPlaceImages(place)} height={320} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.6)', 'black']}
                locations={[0, 0.7, 1]}
                style={styles.heroOverlay}
                pointerEvents="none"
            />

            <View style={styles.heroContent} pointerEvents="none">
                <Text style={styles.heroTitle} numberOfLines={2}>{place.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heroContainer: {
        height: 320,
        width: '100%',
        position: 'relative',
        backgroundColor: '#f0f0f0'
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    heroContent: {
        position: 'absolute',
        bottom: 12,
        left: 24,
        right: 24,
        zIndex: 2,
    },
    categoryRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 2,
    },
    heroCategory: {
        fontSize: 12,
        fontWeight: '900',
        color: 'rgba(255,255,255,0.7)',
        letterSpacing: 1.2,
    },
    heroTitle: {
        fontSize: 34,
        fontFamily: SERIF_FONT,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 2,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
    heroAddress: {
        fontSize: 13,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.5)',
    },
});

