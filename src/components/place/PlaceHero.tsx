import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ImageCarousel } from '../common/ImageCarousel';
import { Place } from '../../types/model';
import { getPlaceImages } from '../../lib/placeUtils';
import { useTokens } from '../../design';
import { LinearGradient } from 'expo-linear-gradient';

interface PlaceHeroProps {
    place: Place;
    onClose: () => void;
    onShare: () => void;
    onLike: () => void;
    isLiked: boolean;
    primaryColor: string;
}

export const PlaceHero = React.memo(({ place, onClose, onShare, onLike, isLiked, primaryColor }: PlaceHeroProps) => {
    return (
        <View style={styles.heroContainer}>
            <ImageCarousel images={getPlaceImages(place)} height={320} />

            {/* Top Action Gradient */}
            <LinearGradient
                colors={['rgba(0,0,0,0.5)', 'transparent']}
                style={styles.topGradient}
                pointerEvents="none"
            />

            {/* Bottom Content Gradient */}
            <LinearGradient
                colors={['transparent', 'rgba(18,18,18,0.2)', '#121212']}
                locations={[0, 0.8, 1]}
                style={styles.bottomGradient}
                pointerEvents="none"
            />

            {/* Top Actions */}
            <View style={styles.topActions}>
                <TouchableOpacity style={styles.iconCircle} onPress={onClose}>
                    <Ionicons name="chevron-down" size={24} color="#FFF" />
                </TouchableOpacity>

                <View style={styles.rightActions}>
                    <TouchableOpacity style={styles.iconCircle} onPress={onShare}>
                        <Ionicons name="share-outline" size={22} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCircle} onPress={onLike}>
                        <Ionicons name={isLiked ? "heart" : "heart-outline"} size={22} color={isLiked ? primaryColor : "#FFF"} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bottom Title */}
            <View style={styles.heroContent} pointerEvents="none">
                <Text style={styles.heroTitle}>
                    {place.name}
                </Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    heroContainer: {
        height: 320,
        width: '100%',
        position: 'relative',
        backgroundColor: '#121212',
    },
    topGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        zIndex: 1,
    },
    bottomGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    topActions: {
        position: 'absolute',
        top: 16,
        left: 16,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 10,
    },
    rightActions: {
        flexDirection: 'row',
        gap: 12,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.15)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroContent: {
        position: 'absolute',
        bottom: 12,
        left: 20,
        maxWidth: '70%',
        zIndex: 2,
    },
    heroTitle: {
        color: '#fff',
        fontSize: 26,
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: '900',
        letterSpacing: -0.5,
        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 10,
    },
});

