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
                <Text style={styles.heroTitle}>{place.name}</Text>
                <Text style={styles.heroAddress}>{place.location?.address || ''}</Text>
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
        bottom: 24, // Matched Explore (was 20)
        left: 24,   // Matched Explore (was 20)
        right: 24,  // Matched Explore (was 20)
        zIndex: 2,
    },
    heroTitle: {
        fontSize: 32, // Matched Explore (was 28)
        fontFamily: SERIF_FONT,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 4, // Matched Explore (was 8)
        textShadowColor: 'rgba(0,0,0,0.5)', // Matched Explore
        textShadowOffset: { width: 0, height: 2 }, // Matched Explore
        textShadowRadius: 8, // Matched Explore
    },
    heroAddress: {
        fontSize: 15,
        fontFamily: SERIF_FONT,
        fontWeight: '500',
        color: 'rgba(255,255,255,0.95)', // Matched Explore
        marginTop: 4,
    },
});

