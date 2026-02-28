import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePlaceDetail } from '../../contexts/PlaceDetailContext';

import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { ImageCarousel, ImageCarouselRef } from '../common/ImageCarousel';

import { useTheme } from '../../design';
import { LinearGradient } from 'expo-linear-gradient';

export const PlaceHero = React.memo(() => {
  const { viewModel, onClose, onShare, onLike, isLiked, primaryColor } = usePlaceDetail();

  const { theme, isDark } = useTheme();
  const insets = useSafeAreaInsets();
  const images = viewModel?.hero.images || [];
  const firstImage = images[0];
  const carouselRef = React.useRef<ImageCarouselRef>(null);

  // 🔄 FORCE RESET CAROUSEL ON PLACE CHANGE
  // When opening a new place, we want to start at index 0, not where the previous place left off
  React.useEffect(() => {
    if (viewModel?.id) {
      carouselRef.current?.reset();
    }
  }, [viewModel?.id]);

  if (!viewModel) return null;

  return (
    <View style={styles.heroContainer}>
      {/* 🎞️ ATOMIC HERO HANDOFF: Backdrop is CONSTANT, Carousel is OVERLAID when settled */}
      {/* 🎞️ ATOMIC HERO HANDOFF: Pixel-perfect overlay */}
      <View style={{ width: '100%', height: 320, backgroundColor: '#1C1C1E', overflow: 'hidden' }}>
        {images.length > 0 ? (
          <ImageCarousel ref={carouselRef} images={images} height={320} />
        ) : firstImage ? (
          <Image
            source={firstImage}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            transition={null}
            cachePolicy="disk"
            priority="high"
          />
        ) : (
          <View style={[StyleSheet.absoluteFill, { backgroundColor: '#1C1C1E' }]} />
        )}
      </View>

      {/* Bottom Content Gradient */}
      <LinearGradient
        colors={['transparent', 'rgba(18,18,18,0.3)', 'rgba(18,18,18,0.7)', '#121212']}
        locations={[0, 0.5, 0.8, 1]}
        style={styles.bottomGradient}
        pointerEvents="none"
      />

      {/* Top Actions */}
      <View style={[styles.topActions, { top: insets.top + 12 }]}>
        <Pressable
          style={({ pressed }) => [
            styles.iconCircle,
            pressed && { transform: [{ scale: 0.9 }], opacity: 0.7 },
          ]}
          onPress={onClose}
        >
          <Ionicons name="chevron-down" size={24} color="#FFF" />
        </Pressable>

        <View style={styles.rightActions}>
          <Pressable
            style={({ pressed }) => [
              styles.iconCircle,
              pressed && { transform: [{ scale: 0.9 }], opacity: 0.7 },
            ]}
            onPress={() => {
              Haptics.selectionAsync();
              onShare();
            }}
          >
            <Ionicons name="share-outline" size={22} color="#FFF" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.iconCircle,
              pressed && { transform: [{ scale: 0.9 }], opacity: 0.7 },
            ]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              onLike();
            }}
          >
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={22}
              color={isLiked ? primaryColor : '#FFF'}
            />
          </Pressable>
        </View>
      </View>

      {/* Bottom Title */}
      <View style={styles.heroContent} pointerEvents="none">
        <Text style={styles.heroTitle}>{viewModel.hero.title}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  heroContainer: {
    height: 320,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
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
    top: 20, // Fallback, overridden by inline style with safe area
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
    bottom: 24,
    left: 20,
    maxWidth: '80%',
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
