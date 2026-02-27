/**
 * Place Detail — Native Modal Route (Phase 13 - Industrial)
 *
 * presentation: 'modal' + animation: 'slide_from_bottom'
 * Content renders immediately — visible during the slide-up transition.
 * Swipe down to dismiss via gestureDirection: 'vertical'.
 */
import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
  Platform,
  Share,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../../src/design';
import { usePlacesStore } from '../../src/stores/placesStore';
import { useDetailsStore } from '../../src/stores/detailsStore';
import { useSearchStore } from '../../src/stores/searchStore';
import { mapPlaceToDetailViewModel } from '../../src/viewmodels/PlaceDetailViewModel';
import { PlaceDetailProvider } from '../../src/contexts/PlaceDetailContext';
import { PlaceSection, SectionType } from '../../src/components/place/PlaceDetailSections';
import { Place } from '../../src/types/model';
import { moodColors, type MoodType } from '../../src/design';

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { theme, isDark } = useTheme();

  // --- DATA (V2: Lazy Load from SQLite via detailsStore) ---
  const hydratePlace = useDetailsStore((state) => state.hydratePlace);
  const toggleLike = usePlacesStore((state) => state.toggleLike);

  // V2: Place comes ONLY from detailsStore (full Place from SQLite, not skeleton)
  const place = useDetailsStore(
    useCallback(
      (state: { detailsCache: Record<string, Place> }) => {
        if (!id) return null;
        return state.detailsCache[id] ?? null;
      },
      [id],
    ),
  );

  const activeCategories = useSearchStore((state) => state.selectedCategories);
  const viewModel = useMemo(() => (place ? mapPlaceToDetailViewModel(place, activeCategories) : null), [place, activeCategories]);

  // Background hydration
  useEffect(() => {
    if (id) hydratePlace(id);
  }, [id, hydratePlace]);

  // --- ACTIONS ---
  const handleClose = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  }, [router]);

  const handleNavigate = useCallback(() => {
    if (!place) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    const { lat, lng } = place.location.coordinates;
    const label = encodeURIComponent(place.name);
    const url = Platform.select({
      ios: `maps:0,0?q=${label}@${lat},${lng}`,
      android: `geo:0,0?q=${lat},${lng}(${label})`,
    });
    if (url) Linking.openURL(url);
  }, [place]);

  const handleShare = useCallback(async () => {
    if (!place) return;
    await Haptics.selectionAsync();
    const message = `✨ Découvre ${place.name} sur AntiGraviMood !`;
    await Share.share({ message });
  }, [place]);

  const handleLike = useCallback(() => {
    if (!place) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    toggleLike(place.id);
  }, [place, toggleLike]);


  const handleVibeCheck = useCallback(async () => {
    if (place?.media?.instagram_handle) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      const handle = place.media.instagram_handle.replace('@', '');
      const igUrl = `instagram://user?username=${handle}`;
      const webUrl = `https://instagram.com/${handle}`;

      try {
        const supported = await Linking.canOpenURL(igUrl);
        if (supported) {
          await Linking.openURL(igUrl);
        } else {
          await Linking.openURL(webUrl);
        }
      } catch (err) {
        await Linking.openURL(webUrl);
      }
    }
  }, [place]);

  const handleBooking = useCallback(() => {
    const url = place?.practical_info?.main_action?.url;
    if (!url) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Linking.openURL(url);
  }, [place]);

  // --- RENDER ---
  const sections = viewModel?.sections ?? [];
  const mood = (place?.dominant_mood || 'chill') as MoodType;
  const primaryColor = moodColors[mood]?.primary || '#000000';

  if (__DEV__ && viewModel) {
    console.log(`[Diagnostic] Sections for ${place?.name}:`, sections);
  }

  if (!viewModel) {
    return (
      <View style={[styles.container, { backgroundColor: isDark ? '#000' : theme.background }]}>
        <View style={styles.loadingContainer}>
          <Text style={{ color: theme.text.muted }}>Chargement...</Text>
        </View>
      </View>
    );
  }

  return (
    <PlaceDetailProvider
      viewModel={viewModel}
      dominantMoodStr={place?.dominant_mood || 'chill'}
      onClose={handleClose}
      onNavigate={handleNavigate}
      onShare={handleShare}
      onLike={handleLike}
      onVibeCheck={handleVibeCheck}
      onBooking={handleBooking}
    >
      <View style={[styles.container, { backgroundColor: isDark ? '#000' : theme.background }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}
        >
          {sections.map((section) => (
            <PlaceSection key={section} type={section} />
          ))}
        </ScrollView>

        {/* Sticky CTA Footer */}
        <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
          <Pressable
            onPress={() => {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              handleNavigate();
            }}
            style={({ pressed }) => [
              styles.ctaBubble,
              {
                backgroundColor: primaryColor,
                opacity: pressed ? 0.85 : 1,
                transform: [{ scale: pressed ? 0.95 : 1 }],
              },
            ]}
          >
            <Ionicons name="map-outline" size={22} color="#FFF" style={{ marginRight: 10 }} />
            <Text style={styles.ctaText}>Y ALLER</Text>
          </Pressable>
        </View>
      </View>
    </PlaceDetailProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 12,
  },
  ctaBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  ctaText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});
