import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, StyleProp, ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

import { PlaceSkeleton } from '../../types/model';
import { useRouter } from 'expo-router';
import { moodColors, MoodType } from '../../design/tokens/colors';
import { PriceMiniBadge } from '../common/InteractivePriceGauge';

interface LikedPlaceCardProps {
  place: PlaceSkeleton;
  onPress?: (place: PlaceSkeleton) => void;
  style?: StyleProp<ViewStyle>;
}

import { PricingMapper } from '../../services/mappers/PricingMapper';

export const LikedPlaceCard = ({ place, onPress, style }: LikedPlaceCardProps) => {
  const router = useRouter();
  const dominantMood = (place.dominant_mood || 'chill') as MoodType;
  const color = moodColors[dominantMood]?.primary || '#444';

  const imageUri = place.media.hero_image;

  // Decorate with 2026 Pricing View Model 🖼️
  const pricingView = place.pricing
    ? PricingMapper.mapPricingView(place.pricing, {
        category: place.category,
        subcategories: place.subcategories || [],
      })
    : undefined;

  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => {
        Haptics.selectionAsync();
        router.push({ pathname: '/place/[id]', params: { id: place.id } });
      }}
    >
      <Image source={imageUri} style={styles.image} contentFit="cover" transition={200} />
      <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={styles.gradient} />

      <View style={styles.badge}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text style={[styles.category, { color }]}>{dominantMood.toUpperCase()}</Text>
      </View>

      <View style={styles.priceContainer}>
        <PriceMiniBadge view={pricingView} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {place.name}
        </Text>
        <Text style={styles.address} numberOfLines={1}>
          {place.subcategories?.[0] || place.category}
        </Text>
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
