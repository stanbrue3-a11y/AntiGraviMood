import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { moodColors } from '../../design';
import { Place } from '../../types/model';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.85;
const CARD_HEIGHT = CARD_WIDTH * (16 / 9);

interface ShareCardProps {
    place: Place;
}

import { localImages } from '../../data/imagesMap';

/**
 * Premium Share Card - The "Sticker" for Snapchat/Instagram
 * Designed to be captured as an image.
 */
export const ShareCard: React.FC<ShareCardProps> = ({ place }) => {
    const dominantMood = place.mood_scores?.festif?.overall && place.mood_scores?.chill?.overall
        ? (place.mood_scores.festif.overall >= place.mood_scores.chill.overall ? 'festif' : 'chill')
        : 'chill';

    // Explicit color mapping
    const primaryColor = moodColors[dominantMood as keyof typeof moodColors].primary;

    const imageSource = localImages[place.slug] || { uri: place.media.hero_image };

    return (
        <View style={styles.cardContainer}>
            {/* 1. Background Image */}
            <Image
                source={imageSource}
                style={StyleSheet.absoluteFill}
                contentFit="cover"
            />

            {/* 2. Premium Overlays */}
            <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.8)', '#000']}
                locations={[0, 0.4, 0.7, 1]}
                style={StyleSheet.absoluteFill}
            />

            <View style={styles.content}>
                {/* Header: App Brand */}
                <View style={styles.brandRow}>
                    <Ionicons name="flash" size={24} color={primaryColor} />
                    <Text style={styles.brandText}>ANTIGRAVIMOOD</Text>
                </View>

                {/* Center: Main Info */}
                <View style={styles.mainInfo}>
                    <View style={[styles.categoryBadge, { backgroundColor: primaryColor }]}>
                        <Text style={styles.categoryText}>
                            {place.category?.toUpperCase() || 'LIEU'}
                        </Text>
                    </View>
                    <Text style={styles.placeName}>{place.name}</Text>
                    <Text style={styles.arrondissement}>{place.location.arrondissement}e ARRONDISSEMENT</Text>
                </View>

                {/* Bottom: The "Surgical" Details */}
                <View style={styles.footer}>
                    <View style={styles.detailCard}>
                        <View style={styles.detailItem}>
                            <Ionicons name="sparkles" size={18} color={primaryColor} />
                            <Text style={styles.detailText}>Le Secret : {place.real_talk?.le_secret || 'Pépite cachée'}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="musical-notes" size={18} color={primaryColor} />
                            <Text style={styles.detailText}>Le Son : {place.real_talk?.le_son || 'Vibe unique'}</Text>
                        </View>
                    </View>

                    <View style={styles.qrPlaceholder}>
                        <Text style={styles.qrText}>DÉCOUVRE SUR L'APP</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#000',
    },
    content: {
        flex: 1,
        padding: 32,
        justifyContent: 'space-between',
    },
    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    brandText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
        letterSpacing: 2,
    },
    mainInfo: {
        alignItems: 'center',
    },
    categoryBadge: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 14,
        marginBottom: 20,
    },
    categoryText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '900',
        letterSpacing: 1.5,
    },
    placeName: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '900',
        textAlign: 'center',
        lineHeight: 52,
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10,
    },
    arrondissement: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: '800',
        marginTop: 12,
        letterSpacing: 2,
    },
    footer: {
        gap: 20,
    },
    detailCard: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 20,
        borderRadius: 24,
        gap: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.15)',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    detailText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        flex: 1,
    },
    qrPlaceholder: {
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
    },
    qrText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '900',
        letterSpacing: 3,
    },
});
