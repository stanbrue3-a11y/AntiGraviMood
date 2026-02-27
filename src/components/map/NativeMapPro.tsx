import React, { useMemo, useRef, useCallback, useEffect } from 'react';
import Mapbox from '@rnmapbox/maps';
import { PlaceSkeleton, MoodType, Place } from '../../types/model';
import { moodColors } from '../../design/tokens/colors';
import { IconService } from '../../services/IconService';
import { getHeroImage } from '../../lib/placeUtils'; // Added for accurate prefetch
import { ClusterImages, ClusterLayers } from './layers/ClusterResources';
import { PinImages, PinLayers } from './layers/PinResources';
import { Image } from 'expo-image'; // Added for prefetch
import { useSearchStore } from '../../stores/searchStore';
import { ContextualEngine } from '../../services/ContextualEngine';

type Props = {
  places: PlaceSkeleton[];
  onPlacePress: (placeId: string, coordinates: [number, number]) => void;
  cameraRef?: React.RefObject<Mapbox.Camera | null>;
  highlightedPlaceId?: string | null;
  styleLoaded?: boolean;
};

// --- COLORS (Synced with Design Tokens) ---
const MOOD_COLORS: Record<MoodType, string> = {
  chill: moodColors.chill.primary,
  festif: moodColors.festif.primary,
  culturel: moodColors.culturel.primary,
};

const hashCode = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

const clusterProperties = {
  point_count: ['+', 1],
  chill_count: ['+', ['case', ['==', ['get', 'mood'], 'chill'], 1, 0]],
  festif_count: ['+', ['case', ['==', ['get', 'mood'], 'festif'], 1, 0]],
  culturel_count: ['+', ['case', ['==', ['get', 'mood'], 'culturel'], 1, 0]],
};

export const NativeMapPro = React.memo(
  ({ places, onPlacePress, cameraRef, highlightedPlaceId, styleLoaded }: Props) => {
    const shapeSourceRef = useRef<Mapbox.ShapeSource>(null);
    const [activePin, setActivePin] = React.useState<number | null>(null);
    const [isBouncing, setIsBouncing] = React.useState(false);

    // UI Context for intelligence
    const activeCategories = useSearchStore(s => s.selectedCategories);

    // External highlight effect
    useEffect(() => {
      if (highlightedPlaceId) {
        const numericId = hashCode(highlightedPlaceId);
        setActivePin(numericId);
        setIsBouncing(true);
        const timer = setTimeout(() => setIsBouncing(false), 500);
        return () => clearTimeout(timer);
      }
    }, [highlightedPlaceId]);

    // ⚡️ SMART PREFETCHING: Disabled for performance (Slider Lag)
    // Aggressively caching images on every prop change causes severe stutter during filtering.
    /*
    useEffect(() => {
        if (!places || places.length === 0) return;

        // Prioritize: 
        // 1. High mood score? (Maybe later)
        // 2. Just the first 20 in the list (which are usually the ones returned by the search/filter)
        const candidates = places.slice(0, 20);

        candidates.forEach(place => {
            const heroUrl = getHeroImage(place);
            if (typeof heroUrl === 'string' && heroUrl.startsWith('http')) {
                // Only prefetch remote URLs. Local (require) are instant.
                Image.prefetch(heroUrl, 'memory-disk');
            }
        });
    }, [places]);
    */

    const placesGeoJSON = useMemo(() => {
      const features = places.map((place) => {
        const numericId = hashCode(place.id);
        const mood = ContextualEngine.resolveMood(place, activeCategories);
        const moodColor = moodColors[mood]?.primary || '#9CA3AF';
        const iconCategory = ContextualEngine.resolveIconCategory(place, activeCategories);
        const iconName = `icon-${iconCategory}-${mood}`;
        const categoryLabel = place.subcategories?.[0] || place.category;
        const displayCategory = categoryLabel
          ? categoryLabel.charAt(0).toUpperCase() + categoryLabel.slice(1).replace('_', ' ')
          : place.category;
        const subtitle = `${displayCategory} • ${place.location.arrondissement}e`;

        return {
          type: 'Feature',
          id: numericId,
          geometry: {
            type: 'Point',
            coordinates: [place.location.coordinates.lng, place.location.coordinates.lat],
          },
          properties: {
            id: place.id,
            numeric_id: numericId,
            mood: mood, // Used for clustering logic filters
            mood_color: moodColor,
            rating: place.google_rating ? place.google_rating.toFixed(1) : '',
            badge_image: `badge-${mood}`, // Keep for now if used by layers
            icon_category: iconCategory,
            icon_image: iconName,
            name: place.name,
            category: subtitle,
            arrondissement: place.location.arrondissement,
          },
        };
      });

      return { type: 'FeatureCollection', features };
    }, [places, activeCategories]);

    const handlePress = useCallback(
      async (
        e: Parameters<NonNullable<React.ComponentProps<typeof Mapbox.ShapeSource>['onPress']>>[0],
      ) => {
        if (!e.features?.length) return;
        const feature = e.features[0] as unknown as import('geojson').Feature<
          import('geojson').Point
        > & {
          properties: { cluster?: boolean; cluster_id?: number; numeric_id?: number; id?: string };
        };
        if (feature.properties.cluster) {
          if (shapeSourceRef.current && cameraRef?.current) {
            try {
              const expansionZoom = await shapeSourceRef.current.getClusterExpansionZoom(feature);
              cameraRef.current.setCamera({
                centerCoordinate: feature.geometry.coordinates as [number, number],
                zoomLevel: expansionZoom,
                animationDuration: 600,
                animationMode: 'flyTo',
              });
            } catch (err) { }
          }
        } else {
          const numericId = feature.properties?.numeric_id;
          setActivePin(numericId ?? null);
          setIsBouncing(true);
          setTimeout(() => setIsBouncing(false), 150);
          onPlacePress(
            feature.properties?.id ?? '',
            feature.geometry.coordinates as [number, number],
          );
        }
      },
      [cameraRef, onPlacePress],
    );

    return (
      <>
        <Mapbox.Images>
          <ClusterImages />
          <PinImages />
        </Mapbox.Images>

        {styleLoaded && (
          <Mapbox.ShapeSource
            id="placesSource"
            ref={shapeSourceRef}
            shape={placesGeoJSON as React.ComponentProps<typeof Mapbox.ShapeSource>['shape']}
            onPress={handlePress}
            cluster={true}
            clusterRadius={35}
            clusterMaxZoomLevel={14}
            clusterProperties={clusterProperties}
            hitbox={{ width: 30, height: 30 }}
          >
            <ClusterLayers />
            <PinLayers activePin={activePin} isBouncing={isBouncing} />
          </Mapbox.ShapeSource>
        )}
      </>
    );
  },
  (prev, next) => {
    // 🛡️ SURGICAL RE-RENDER GUARD
    // Only update map if:
    // 1. Highlight changed (User tapped pin or card)
    // 2. Mapbox style availability changed
    // 3. The SET of places changed (Filtering)

    if (prev.highlightedPlaceId !== next.highlightedPlaceId) return false;
    if (prev.styleLoaded !== next.styleLoaded) return false;
    if (prev.places.length !== next.places.length) return false;

    // Deep check: We hash the visual dependencies of a marker (id, mood, rating)
    // This allows the map to update instantly if a place's note or mood changes,
    // while ignoring heavy object reference changes caused by Hydration (description/pricing).
    const prevHash = prev.places
      .map((p) => `${p.id}:${p.dominant_mood}:${p.google_rating}`)
      .join('|');
    const nextHash = next.places
      .map((p) => `${p.id}:${p.dominant_mood}:${p.google_rating}`)
      .join('|');

    return prevHash === nextHash;
  },
);
