import React from 'react'; // Refreshed logic
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { MoodImage } from '../common/MoodImage';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  FadeInDown,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

// ... (imports remain)

// ...

import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { MOODS } from '../../design/tokens/moods';
import { usePlacesStore } from '../../stores/placesStore';
import { useUIStore } from '../../stores/uiStore';
import { PlaceSkeleton } from '../../types/model';
import { useTheme, moodColors } from '../../design';
import { Skeleton } from '../common/Skeleton';
import { useSearchStore } from '../../stores/searchStore';
import { ContextualEngine } from '../../services/ContextualEngine';

interface DiscoverCardProps {
  place: PlaceSkeleton;
  onPress: () => void;
  index?: number;
  style?: StyleProp<ViewStyle>;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

// Memoize to prevent re-renders in FlashList
export const DiscoverCard = React.memo(
  ({ place, onPress, index = 0, style }: DiscoverCardProps) => {
    const toggleLike = usePlacesStore((state) => state.toggleLike);

    // ⚛️ Atomic Like Subscription: ONLY re-render if THIS place's like status changes.
    const isLiked = usePlacesStore((state) => state.likedPlaceIds.includes(place.id));

    const [imageLoaded, setImageLoaded] = React.useState(false);

    const activeCategories = useSearchStore(state => state.selectedCategories);
    const mood = ContextualEngine.resolveMood(place, activeCategories);
    const contextualCategory = ContextualEngine.resolveContextualCategory(place, activeCategories);
    const accentColor = moodColors[mood].primary;
    const imageUri = place.media.hero_image;

    const screenWidth = Dimensions.get('window').width;

    // Pinterest Style Ratios
    const ratios = [1.25, 1.5, 1.25, 1.6];
    const ratioIndex = place.id.charCodeAt(place.id.length - 1) % 4;
    const accurateCardWidth = (screenWidth - 32) / 2;
    const cardHeight = accurateCardWidth * ratios[ratioIndex];

    // Animation Scale
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
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
      transform: [{ scale: heartScale.value }],
    }));

    const handleLike = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      toggleLike(place.id);
      heartScale.value = withSequence(
        withSpring(1.2, { damping: 10, stiffness: 300 }),
        withSpring(1, { damping: 12, stiffness: 300 }),
      );
    };

    return (
      <Animated.View
        entering={FadeInDown.duration(400)
          .delay(index * 50)
          .springify()}
        style={[styles.container, style]}
      >
        <AnimatedPressable
          onPress={() => {
            Haptics.selectionAsync();
            onPress();
          }}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={[
            animatedStyle,
            {
              // 💎 RESTORED: "Propagate in interstices" -> Glow/Shadow Effect
              shadowColor: accentColor,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.6,
              shadowRadius: 12,
              elevation: 8,
              backgroundColor: 'transparent',
            },
          ]}
        >
          <View style={[styles.imageContainer, { height: cardHeight }]}>
            <View style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
              <MoodImage
                source={imageUri}
                style={[styles.image, { opacity: imageLoaded ? 1 : 0 }]}
                resolution="THUMB"
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <View style={StyleSheet.absoluteFill}>
                  <Skeleton width="100%" height="100%" borderRadius={0} />
                </View>
              )}
            </View>

            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.5)']} // Restored 0.5
              style={styles.gradient}
            />

            {/* Top Left Heart */}
            <Pressable style={styles.topBtnLeft} hitSlop={12} onPress={handleLike}>
              <Animated.View style={[styles.glassBtn, heartAnimatedStyle]}>
                <Ionicons
                  name={isLiked ? 'heart' : 'heart-outline'}
                  size={22}
                  color={isLiked ? accentColor : '#fff'}
                />
              </Animated.View>
            </Pressable>

            {/* Top Right: Mood Badge (RESTORED: BlurView) */}
            <View style={styles.topBtnRight}>
              <View style={[styles.moodBadgeWrapper, { borderColor: accentColor + '40' }]}>
                <BlurView
                  intensity={80}
                  tint="dark"
                  style={[styles.moodBadgeBlur, { backgroundColor: 'rgba(0,0,0,0.4)' }]}
                >
                  <Text style={[styles.moodText, { color: accentColor }]}>{MOODS[mood].emoji}</Text>
                </BlurView>
              </View>
            </View>

            {/* Michelin Badge Overlay */}
            {place.michelin_stars && place.michelin_stars > 0 && (
              <View style={[styles.michelinBadge, { backgroundColor: accentColor, flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={[styles.michelinText, { marginRight: 2 }]}>
                  {place.michelin_stars}
                </Text>
                <Ionicons name="star" size={12} color="#fff" style={{ marginRight: 4 }} />
                <Text style={styles.michelinText}>
                  Michelin
                </Text>
              </View>
            )}

            {/* Bottom Text Overlay */}
            <View style={styles.textOverlay}>
              <Text style={styles.name} numberOfLines={2}>
                {place.name}
              </Text>
              <View style={styles.metaRow}>
                <Text style={styles.subtitle} numberOfLines={1}>
                  {contextualCategory === place.category ? (place.subcategories?.[0] || place.category) : contextualCategory}
                </Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.subtitle}>{place.location.arrondissement}e</Text>
              </View>
            </View>
          </View>
        </AnimatedPressable>
      </Animated.View>
    );
  },
);

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
    shadowColor: '#000',
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
    shadowColor: '#000',
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
    fontFamily: 'PlayfairDisplay-Bold',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
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
  michelinBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  michelinText: {
    color: '#000', // Noir pour lisibilité sur fond mood color (orange/bleu/violet clair)
    fontSize: 12,
    fontWeight: 'bold',
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
  },
});
