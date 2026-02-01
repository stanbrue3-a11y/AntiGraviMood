import React, { useMemo, useRef, useCallback, useEffect } from 'react';
import Mapbox from '@rnmapbox/maps';
import { Place, MoodType } from '../../types/model';
import { moodColors } from '../../design/tokens/colors';
import { IconService } from '../../services/IconService';
import { ClusterImages, ClusterLayers } from './layers/ClusterResources';
import { PinImages, PinLayers } from './layers/PinResources';

type Props = {
    places: Place[];
    onPlacePress: (placeId: string, coordinates: [number, number]) => void;
    cameraRef?: any;
    highlightedPlaceId?: string | null;
    styleLoaded?: boolean;
};

// --- COLORS (Synced with Design Tokens) ---
const MOOD_COLORS: Record<MoodType, string> = {
    chill: moodColors.chill.primary,
    festif: moodColors.festif.primary,
    culturel: moodColors.culturel.primary
};

const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
};

export const NativeMapPro = React.memo(({
    places,
    onPlacePress,
    cameraRef,
    highlightedPlaceId,
    styleLoaded
}: Props) => {
    const shapeSourceRef = useRef<Mapbox.ShapeSource>(null);
    const [activePin, setActivePin] = React.useState<number | null>(null);
    const [isBouncing, setIsBouncing] = React.useState(false);

    console.log('[NativeMapPro] Rendering with places:', places.length);

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

    // 1. DATA - Filtered GeoJSON for performance
    const placesGeoJSON = useMemo(() => {
        const features = places.map((place) => {
            const numericId = hashCode(place.id);
            const mood = (place.dominant_mood || 'chill') as MoodType;

            // 3. ICON SELECTION (Unified Logic) 🦎
            const iconCategory = IconService.getIconCategory(place);

            return {
                type: 'Feature',
                id: numericId,
                geometry: {
                    type: 'Point',
                    coordinates: [place.location.coordinates.lng, place.location.coordinates.lat]
                },
                properties: {
                    id: place.id,
                    numeric_id: numericId,
                    mood: mood,
                    mood_color: MOOD_COLORS[mood] || '#ffffff',
                    rating: place.google_rating ? place.google_rating.toFixed(1) : "",
                    badge_image: `badge-${mood}`,
                    icon_category: iconCategory,
                    icon_image: `icon-${iconCategory}-${mood}`,
                    name: place.name,
                    category: place.category,
                    arrondissement: place.location.arrondissement,
                }
            };
        });

        return { type: 'FeatureCollection', features };
    }, [places]);

    const clusterProperties = useMemo(() => ({
        point_count: ['+', 1],
        chill_count: ['+', ['case', ['==', ['get', 'mood'], 'chill'], 1, 0]],
        festif_count: ['+', ['case', ['==', ['get', 'mood'], 'festif'], 1, 0]],
        culturel_count: ['+', ['case', ['==', ['get', 'mood'], 'culturel'], 1, 0]]
    }), []);

    const handlePress = useCallback(async (e: any) => {
        if (!e.features?.length) return;
        const feature = e.features[0];
        if (feature.properties.cluster) {
            if (shapeSourceRef.current && cameraRef?.current) {
                try {
                    const expansionZoom = await shapeSourceRef.current.getClusterExpansionZoom(feature);
                    cameraRef.current.setCamera({
                        centerCoordinate: feature.geometry.coordinates,
                        zoomLevel: expansionZoom,
                        animationDuration: 600,
                        animationMode: 'flyTo'
                    });
                } catch (err) { }
            }
        } else {
            const numericId = feature.properties.numeric_id;
            setActivePin(numericId);
            setIsBouncing(true);
            setTimeout(() => setIsBouncing(false), 200);
            onPlacePress(feature.properties.id, feature.geometry.coordinates);
        }
    }, [cameraRef, onPlacePress]);

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
                    shape={placesGeoJSON as any}
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
});
