import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
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
    isReady: boolean;
}

export const PlaceHero = React.memo(({ place, onClose, onShare, onLike, isLiked, primaryColor, isReady }: PlaceHeroProps) => {
    const images = getPlaceImages(place);
    const firstImage = images[0];

    return (
        <View style={styles.heroContainer}>
            {/* 🎞️ ATOMIC HERO HANDOFF: Backdrop is CONSTANT, Carousel is OVERLAID when settled */}
            {/* 🎞️ ATOMIC HERO HANDOFF: Pixel-perfect overlay */}
            <View style={{ width: '100%', height: 320, backgroundColor: '#1C1C1E' }}>
                {firstImage ? (
                    <Image
                        source={firstImage}
                        style={StyleSheet.absoluteFill}
                        contentFit="cover"
                        transition={null}
                    />
                ) : (
                    <View style={[StyleSheet.absoluteFill, { backgroundColor: '#1C1C1E' }]} />
                )}

                {isReady && images.length > 0 && (
                    <Animated.View
                        entering={FadeIn.duration(400)}
                        style={StyleSheet.absoluteFill}
                    >
                        <ImageCarousel images={images} height={320} />
                    </Animated.View>
                )}
            </View>

            {/* Bottom Content Gradient */}

            {/* Bottom Content Gradient */}
            <LinearGradient
                colors={['transparent', 'rgba(18,18,18,0.2)', '#121212']}
                locations={[0, 0.8, 1]}
                style={styles.bottomGradient}
                pointerEvents="none"
            />

            {/* Top Actions */}
            <View style={styles.topActions}>
                <TouchableOpacity
                    style={styles.iconCircle}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        onClose();
                    }}
                >
                    <Ionicons name="chevron-down" size={24} color="#FFF" />
                </TouchableOpacity>

                <View style={styles.rightActions}>
                    <TouchableOpacity
                        style={styles.iconCircle}
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            onShare();
                        }}
                    >
                        <Ionicons name="share-outline" size={22} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconCircle}
                        onPress={() => {
                            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                            onLike();
                        }}
                    >
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
        top: 20, // Lowered slightly
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
        backgroundColor: 'rgba(0,0,0,0.2)', // Slightly darker for visibility without bar
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

