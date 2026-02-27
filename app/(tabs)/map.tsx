import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';

// Stores & Logic
import { usePlacesStore } from '../../src/stores/placesStore';
import { useSearchStore } from '../../src/stores/searchStore';
import { useUIStore } from '../../src/stores/uiStore';
import { MoodEngine } from '../../src/lib/MoodEngine';
import { useShallow } from 'zustand/react/shallow';
import { useTheme } from '../../src/design';
import { Place } from '../../src/types/model';

// Components
import { FilterSheet } from '../../src/components/feed/FilterSheet';
import { NativeMapPro } from '../../src/components/map/NativeMapPro';
import { DiscoverHeader } from '../../src/components/discover/DiscoverHeader';
import { FloatingMapSliders } from '../../src/components/map/FloatingMapSliders';
import { getHeroImage } from '../../src/lib/placeUtils'; // Added for accurate prefetch

// Config
import { Image } from 'expo-image';
const MAPBOX_TOKEN = process.env.EXPO_PUBLIC_MAPBOX_TOKEN || '';
Mapbox.setAccessToken(MAPBOX_TOKEN);

export default function MapScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { theme, isDark } = useTheme();

  // Refs
  const mapRef = useRef<Mapbox.MapView>(null);
  const cameraRef = useRef<Mapbox.Camera>(null);
  // --- SV-REFACTOR: DOMAIN STORES ---

  // 1. Data Store (Places)
  const placesMap = usePlacesStore((state) => state.placesMap);
  const likedPlaceIds = usePlacesStore((state) => state.likedPlaceIds);

  // 2. Search Store (Filtered Data)
  const {
    filteredIds,
    performSearch,
    searchQuery,
    selectedCategories,
    selectedMoods,
    selectedDistricts,
    maxPrice,
    pintLimit,
    dishLimit,
    coffeeLimit,
  } = useSearchStore(
    useShallow((state) => ({
      filteredIds: state.filteredIds,
      performSearch: state.performSearch,
      searchQuery: state.searchQuery,
      selectedCategories: state.selectedCategories,
      selectedMoods: state.selectedMoods,
      selectedDistricts: state.selectedDistricts,
      maxPrice: state.maxPrice,
      pintLimit: state.pintLimit,
      dishLimit: state.dishLimit,
      coffeeLimit: state.coffeeLimit,
    })),
  );

  // Derived: Map IDs to Skeletons for the GPU
  const places = useMemo(() => {
    return filteredIds.map((id) => placesMap[id]).filter((p) => !!p);
  }, [filteredIds, placesMap]);

  // Global Init: Sync SQL results on mount if empty
  useEffect(() => {
    if (filteredIds.length === 0) {
      performSearch();
    }
  }, []);

  // 3. UI Store (Interactions)
  const { setMapCameraRequest, mapCameraRequest } = useUIStore(
    useShallow((state) => ({
      setMapCameraRequest: state.setMapCameraRequest,
      mapCameraRequest: state.mapCameraRequest,
    })),
  );

  // Derived Moods for Map
  const effectiveMoods = useMemo(() => {
    return selectedMoods.length > 0 ? selectedMoods : ['chill', 'festif', 'culturel'];
  }, [selectedMoods]);

  // Local State
  const [isFilterSheetVisible, setFilterSheetVisible] = useState(false);
  const [userLocation, setUserLocation] = useState<Mapbox.Location | null>(null);
  const [mapMode, setMapMode] = useState<'global' | 'likes'>('global');
  const [styleLoaded, setStyleLoaded] = useState(false);
  const [internalHighlightId, setInternalHighlightId] = useState<string | null>(null);

  // Deep Link / Navigation Param Logic
  const params = useLocalSearchParams();
  const navigatedPlaceId = params.placeId as string;
  const lastNavigatedId = useRef<string | null>(null);

  // --- SV-REFACTOR: UNIFIED NAVIGATION BRIDGE 🌉 ---
  // Listen for incoming deep-link params and convert them to UIStore intents
  React.useEffect(() => {
    if (navigatedPlaceId && Object.keys(placesMap).length > 0) {
      const place = placesMap[navigatedPlaceId];
      if (place) {
        // 1. Open place detail as native modal
        router.push({ pathname: '/place/[id]', params: { id: place.id } });

        // 2. Request Camera Move (This triggers the flyTo effect below)
        setMapCameraRequest([place.location.coordinates.lng, place.location.coordinates.lat], 15.5);

        // 3. Clean URL immediately
        router.setParams({ placeId: undefined });
      }
    }
  }, [navigatedPlaceId, Object.keys(placesMap).length]);

  // MAP CAMERA REQUEST LISTENER (Unified Fly-To & Highlight) 🎥
  const lastRequestTimestamp = useRef<number>(0);

  React.useEffect(() => {
    if (mapCameraRequest && mapCameraRequest.timestamp > lastRequestTimestamp.current) {
      lastRequestTimestamp.current = mapCameraRequest.timestamp;

      // 1. Cinematic Fly-To
      cameraRef.current?.setCamera({
        centerCoordinate: mapCameraRequest.center,
        zoomLevel: mapCameraRequest.zoom || 15.5,
        animationDuration: 1200,
        animationMode: 'flyTo',
        padding: { paddingBottom: 150, paddingLeft: 0, paddingRight: 0, paddingTop: 0 },
      });

      // 2. Highlight POP (Visual confirmation of arrival)
      // We find the place ID by coordinates (or we could pass ID in the request if we wanted to be even more precise)
      // For now, if there's a selectedPlaceId, we treat it as the target.
      const targetId = useUIStore.getState().selectedPlaceId;
      if (targetId) {
        setTimeout(() => {
          setInternalHighlightId(targetId);
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          setTimeout(() => setInternalHighlightId(null), 1000);
        }, 1000); // Trigger near arrival
      }
    }
  }, [mapCameraRequest]);

  // --- HANDLERS ---
  // C3 FIX: Synchronous — no more blocking `await getZoom()` bridge call.
  const handlePlacePress = useCallback(
    (placeId: string, coordinates: [number, number]) => {
      Haptics.selectionAsync();

      // 🚀 PREFETCH HERO IMAGE FOR MEMORY CACHE
      const place = usePlacesStore.getState().placesMap[placeId];
      if (place) {
        const heroUrl = getHeroImage(place);
        if (typeof heroUrl === 'string' && heroUrl.startsWith('http')) {
          Image.prefetch(heroUrl, 'memory-disk');
        }
      }

      router.push({ pathname: '/place/[id]', params: { id: placeId } });

      // CINEMATIC FLY-TO 🎥 (uses fixed zoom, avoids async native bridge call)
      cameraRef.current?.setCamera({
        centerCoordinate: coordinates,
        zoomLevel: 14.5,
        animationDuration: 1000,
        animationMode: 'flyTo',
        padding: { paddingBottom: 450, paddingLeft: 0, paddingRight: 0, paddingTop: 0 },
      });
    },
    [router],
  );

  // Removed local handleMoodToggle in favor of global toggleMood

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Mapbox.MapView
        ref={mapRef}
        style={styles.map}
        styleURL={
          isDark
            ? 'mapbox://styles/stanthemans/cmkn3jdva007y01qzaryxax7k'
            : 'mapbox://styles/stanthemans/cml3tpi82009c01r4c18r83yz'
        }
        scrollEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        attributionEnabled={false}
        scaleBarEnabled={false}
        logoEnabled={false}
        // @ts-ignore
        decelerationRate={0.2}
        onDidFinishLoadingStyle={() => {
          setStyleLoaded(true);
        }}
      >
        <Mapbox.Camera
          ref={cameraRef}
          defaultSettings={{ centerCoordinate: [2.3522, 48.8566], zoomLevel: 12 }}
          minZoomLevel={10}
          maxZoomLevel={20}
          maxBounds={{ ne: [2.55, 49.2], sw: [2.15, 48.6] }}
        />

        <Mapbox.UserLocation
          visible={true}
          showsUserHeadingIndicator={true}
          onUpdate={(loc) => setUserLocation(loc)}
        />

        <NativeMapPro
          places={places}
          onPlacePress={handlePlacePress}
          cameraRef={cameraRef}
          highlightedPlaceId={internalHighlightId}
          styleLoaded={styleLoaded}
        />
      </Mapbox.MapView>

      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <DiscoverHeader
          setFilterVisible={() => {
            Haptics.selectionAsync();
            setFilterSheetVisible(true);
          }}
          insetsTop={insets.top}
          transparent={true}
          showLeftButton={true}
        />
      </View>

      <View style={{ position: 'absolute', top: insets.top + 60, left: 16, zIndex: 90 }}>
        <BlurView intensity={90} tint="light" style={styles.modeToggle}>
          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setMapMode('global');
            }}
            style={[styles.modeBtn, mapMode === 'global' && styles.activeModeBtn]}
          >
            <Ionicons
              name={mapMode === 'global' ? 'earth' : 'earth-outline'}
              size={20}
              color={mapMode === 'global' ? '#fff' : '#000'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setMapMode('likes');
            }}
            style={[styles.modeBtn, mapMode === 'likes' && styles.activeModeBtn]}
          >
            <Ionicons
              name={mapMode === 'likes' ? 'heart' : 'heart-outline'}
              size={20}
              color={mapMode === 'likes' ? '#fff' : '#000'}
            />
          </TouchableOpacity>
        </BlurView>
      </View>

      <FloatingMapSliders />

      {/* Geolocation FAB */}
      <TouchableOpacity
        style={styles.geoFab}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          if (userLocation) {
            cameraRef.current?.setCamera({
              centerCoordinate: [userLocation.coords.longitude, userLocation.coords.latitude],
              zoomLevel: 15,
              animationDuration: 1000,
              animationMode: 'flyTo',
            });
          }
        }}
      >
        <Ionicons name="locate" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addFab}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          router.push('/post/create');
        }}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      {isFilterSheetVisible && (
        <View style={styles.filterSheetLayer} pointerEvents="box-none">
          <FilterSheet visible={true} onClose={() => setFilterSheetVisible(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  map: { flex: 1 },
  modeToggle: {
    width: 48,
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 6,
    gap: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  modeBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeModeBtn: {
    backgroundColor: '#1c1c1e',
  },
  geoFab: {
    position: 'absolute',
    bottom: 120,
    left: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4e55f0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 90,
  },
  addFab: {
    position: 'absolute',
    bottom: 120,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4e55f0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 90,
  },
  bottomSheetLayer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10000, // Top priority
  },
  filterSheetLayer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10001,
  },
});
