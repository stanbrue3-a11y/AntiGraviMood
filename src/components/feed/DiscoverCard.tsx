import React from 'react'; // Refreshed logic
import { View, Text, StyleSheet, Pressable, Platform, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withSequence, FadeInDown } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';


// ... (imports remain)

// ...


import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { MOODS } from '../../design/tokens/moods';
import { usePlacesStore } from '../../stores/usePlacesStore';
import { Place } from '../../types/model';
import { getPlaceImages } from '../../lib/placeUtils';
import { useTheme, moodColors } from '../../design';
// PriceGauge removed

import { getDominantMood } from '../../lib/moodUtils';
import { Skeleton } from '../common/Skeleton';

interface DiscoverCardProps {
    place: Place;
    onPress: () => void;
    index?: number;
    style?: any;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

// Memoize to prevent re-renders in FlashList
export const DiscoverCard = React.memo(({ place, onPress, index = 0, style }: DiscoverCardProps) => {
    const { toggleLike, likedPlaceIds } = usePlacesStore();
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const mood = getDominantMood(place);
    const accentColor = moodColors[mood].primary;
    const images = getPlaceImages(place);
    const imageUri = images[0];

    // DEBUG: Check why images aren't showing


    // Helper to check if liked without triggering full re-render on all store changes
    // Actually, selectPlace triggers store changes so we need to be careful.
    // Ideally usePlacesStore should be selected. But here we access the whole slice.
    // For now, simple memo is better than nothing.
    const isLiked = likedPlaceIds.includes(place.id);

    // Calcul de la hauteur basé sur le ratio d'aspect (Pinterest style)
    // Ratios: 1.25 (4:5), 1.33 (3:4), 1.5 (2:3)
    // New Spacing Strategy: 16px Uniform Gap (More Airy).
    // List Padding: 8px.
    // Card Margin: 8px.
    // Edge/Gap: 8+8=16px.
    // Card Width Calculation:
    // Available = Screen - 16 (List Pad).
    // Col Width = (Screen - 16) / 2.
    // Card Vis Width = Col Width - 16 (Card Margin).
    // Manual Masonry Spacing Calculation
    // Screen Width = window.width
    // List Padding = 8
    // Container Margin = 8
    // We want 16px gap everywhere.
    // In manual columns:
    // Container Padding: 8
    // Column 1 | Column 2
    // Inside Column: Item has margin: 8
    // Total Width needed = (Screen - Pad(8)*2)
    // Col Width = (Screen - 16)/2
    // Item Width = ColWidth - Margin(8)*2
    // Item Width = (Screen - 16)/2 - 16
    const screenWidth = Dimensions.get('window').width;
    const cardWidth = ((screenWidth - 16) / 2) - 16;

    // Pinterest Style Ratios (Curated for "Pro" look)
    // 1.25 (4:5) - Standard Portrait
    // 1.5 (2:3) - Tall Portrait
    // We alternate based on ID to create a stable but asymmetric rhythm
    const ratios = [1.25, 1.5, 1.25, 1.6];
    const ratioIndex = place.id.charCodeAt(place.id.length - 1) % 4;
    // Accurate column width: (Screen - 16(pad) - 16(gap)) / 2
    const accurateCardWidth = (screenWidth - 32) / 2;
    const cardHeight = accurateCardWidth * ratios[ratioIndex];

    // Animation Scale
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    const onPressIn = () => {
        scale.value = withSpring(0.95, { damping: 15, stiffness: 300 });
    };

    const onPressOut = () => {
        scale.value = withSpring(1, { damping: 15, stiffness: 300 });
    };

    // Heart Pop Animation
    const heartScale = useSharedValue(1);
    const heartAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: heartScale.value }]
    }));

    const handleLike = () => {
        // Discreet Haptic
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        toggleLike(place.id);

        // Discreet Pop effect (1.2 instead of 1.5)
        heartScale.value = withSequence(
            withSpring(1.2, { damping: 10, stiffness: 300 }), // Snappier but smaller
            withSpring(1, { damping: 12, stiffness: 300 })
        );
    };

    return (
        <Animated.View
            // Layout animation moves here to avoid conflict with Pressable transform
            entering={FadeInDown.duration(400).springify()}
            style={[
                styles.container,
                style // External margins/width
            ]}
        >
            <AnimatedPressable
                onPress={() => {
                    Haptics.selectionAsync();
                    onPress(); // Trigger the passed logic (selectPlace -> BottomSheet)
                }}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={[
                    // Styles that affect the visual card itself (shadow, bg, scale)
                    animatedStyle,
                    {
                        // "Propagate in interstices" -> Glow/Shadow Effect
                        shadowColor: accentColor,
                        shadowOffset: { width: 0, height: 0 }, // Center glow
                        shadowOpacity: 0.6,
                        shadowRadius: 12,
                        elevation: 8, // For Android
                        backgroundColor: 'transparent'
                    }
                ]}
            >
                <View style={[
                    styles.imageContainer,
                    { height: cardHeight }
                ]}>
                    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
                        <Image
                            source={{ uri: imageUri }}
                            style={[styles.image, { opacity: imageLoaded ? 1 : 0 }]}
                            contentFit="cover"
                            transition={300}
                            recyclingKey={place.id}
                            onLoad={() => setImageLoaded(true)}
                        />
                        {!imageLoaded && (
                            <View style={StyleSheet.absoluteFill}>
                                <Skeleton width="100%" height="100%" borderRadius={0} />
                            </View>
                        )}
                    </View>

                    {/* Gradient Overlay for Text Readability */}
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.5)']}
                        style={styles.gradient}
                    />

                    {/* Top Left: Heart Button (Glassmorphism & Accessible) */}
                    <Pressable
                        style={styles.topBtnLeft}
                        hitSlop={12}
                        onPress={handleLike}
                    >
                        <Animated.View style={[styles.glassBtn, heartAnimatedStyle, { backgroundColor: 'transparent' }]}>
                            <Ionicons
                                name={isLiked ? "heart" : "heart-outline"}
                                size={24} // Keep it readable
                                color={isLiked ? accentColor : "#fff"}
                            />
                        </Animated.View>
                    </Pressable>

                    {/* Top Right: Mood Badge */}
                    <View style={styles.topBtnRight}>
                        <View style={[styles.moodBadgeWrapper, { borderColor: accentColor + '40' }]}>
                            <BlurView
                                intensity={80}
                                tint="dark"
                                style={[styles.moodBadgeBlur, { backgroundColor: 'rgba(0,0,0,0.4)' }]}
                            >
                                <Text style={[styles.moodText, { color: accentColor }]}>
                                    {MOODS[mood].emoji}
                                </Text>
                            </BlurView>
                        </View>
                    </View>

                    {/* Bottom Text Overlay */}
                    <View style={styles.textOverlay}>
                        <Text style={styles.name} numberOfLines={2}>
                            {place.name}
                        </Text>
                        <View style={styles.metaRow}>
                            <Text style={styles.subtitle} numberOfLines={1}>
                                {place.category.charAt(0).toUpperCase() + place.category.slice(1)}
                            </Text>
                            <Text style={styles.dot}>•</Text>
                            <Text style={styles.subtitle}>
                                {place.location.arrondissement}e
                            </Text>
                        </View>
                    </View>
                </View>
            </AnimatedPressable>
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container: {
        marginBottom: 16, // Vertical spacing only
        width: '100%',
    },
    imageContainer: {
        borderRadius: 20, // Softer, more modern radius
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#1A1A1A', // Dark fallback for loading images
        marginBottom: 8,
        position: 'relative',
        // Border handled dynamically
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
        zIndex: 1,
    },
    // Top Left Heart
    topBtnLeft: {
        position: 'absolute',
        top: 12, // Restored to standard
        left: 12,
        zIndex: 10,
        borderRadius: 20,
        // Shadow for better contrast
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    glassBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        // Removed background/blur
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    // Top Right Price
    topBtnRight: {
        position: 'absolute',
        top: 22, // Center alignment: 12(pad) + 20(half-heart) - 8.5(half-badge) ≈ 23.5. Using 22 for visual balance.
        right: 12,
        zIndex: 10,
    },
    // Bottom Text
    textOverlay: {
        position: 'absolute',
        bottom: 12,
        left: 12,
        right: 12,
        zIndex: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        textShadowColor: 'rgba(0,0,0,0.3)', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 3,
        marginBottom: 0,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 4,
        fontSize: 12,
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.9)',
        fontWeight: '500',
        textTransform: 'capitalize',
        flexShrink: 1,
    },

    // Mood Badge Styles (Copied from MomentItem)
    moodBadgeWrapper: {
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
    },
    moodBadgeBlur: {
        paddingHorizontal: 7,
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moodText: {
        fontSize: 9,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    }
});
