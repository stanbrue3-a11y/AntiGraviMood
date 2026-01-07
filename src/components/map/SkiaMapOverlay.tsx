import React, { useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import { useSharedValue, withSpring, useDerivedValue } from 'react-native-reanimated';

// Mercator Projection Constants
const TILE_SIZE = 512;
const WORLD_SIZE = TILE_SIZE * Math.pow(2, 0); // At zoom 0

// Helper Worklet: LatLng -> World Pixel Coordinates (Zoom 0)
const project = (lat: number, lng: number) => {
    'worklet';
    const siny = Math.sin((lat * Math.PI) / 180);
    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    const sinyClamped = Math.min(Math.max(siny, -0.9999), 0.9999);

    return {
        x: TILE_SIZE * (0.5 + lng / 360),
        y: TILE_SIZE * (0.5 - Math.log((1 + sinyClamped) / (1 - sinyClamped)) / (4 * Math.PI))
    };
};

type SkiaMapOverlayProps = {
    places: any[];
    // Direct SharedValues for 60fps sync ⚡️
    mapZoom: any;      // SharedValue<number>
    mapCenter: any;    // SharedValue<[number, number]> (or separate lat/lng)
    selectedMoods: string[];
    selectedPlaceId?: string | null;
    onPressMarker: (id: string, coords: [number, number]) => void;
};

export const SkiaMapOverlay = ({ places, mapZoom, mapCenter, selectedMoods, selectedPlaceId, onPressMarker }: SkiaMapOverlayProps) => {
    const { width, height } = Dimensions.get('window');

    // Derived individual values for cleaner access in children
    // mapCenter is expected to be [lng, lat] from Mapbox
    const centerLngSv = useDerivedValue(() => mapCenter.value[0]);
    const centerLatSv = useDerivedValue(() => mapCenter.value[1]);

    if (!places) return null;

    return (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
            {places?.length > 0 && places.map((place, index) => {
                if (!place || !place.location || !place.location.coordinates) return null;
                const projected = project(place.location.coordinates.lat, place.location.coordinates.lng);

                // MOOD DETECTION LOGIC 🎨
                let color = "#8ccaf7"; // Default Chill

                // 1. Check mood_scores
                if (place.mood_scores) {
                    const chill = place.mood_scores.chill?.overall || 0;
                    const festif = place.mood_scores.festif?.overall || 0;
                    const culturel = place.mood_scores.culturel?.overall || 0;
                    const max = Math.max(chill, festif, culturel);

                    if (max > 0) {
                        if (max === festif) color = "#ffab60";      // Festif
                        else if (max === culturel) color = "#c499ff"; // Culturel
                        else color = "#8ccaf7";                     // Chill
                    }
                }

                // 2. Fallback to category if no score (Simplified)
                if (!place.mood_scores && place.category) {
                    const cat = place.category.toLowerCase();
                    if (['bar', 'club', 'pub'].some(c => cat.includes(c))) color = "#ffab60";
                    else if (['museum', 'art', 'theatre'].some(c => cat.includes(c))) color = "#c499ff";
                }

                // Check visibility based on mood filter
                let isVisible = true;
                // Determine place mood for filtering
                let placeMood = 'chill';
                if (color === "#ffab60") placeMood = 'festif';
                if (color === "#c499ff") placeMood = 'culturel';

                if (selectedMoods.length > 0 && !selectedMoods.includes(placeMood)) {
                    isVisible = false;
                }


                return (
                    <MapMarker
                        key={place.id}
                        place={projected}
                        zoom={mapZoom}
                        centerLng={centerLngSv}
                        centerLat={centerLatSv}
                        screenWidth={width}
                        screenHeight={height}
                        color={color}
                        isSelected={place.id === selectedPlaceId}
                        isVisible={isVisible}
                    />
                );
            })}
        </Canvas>
    );
};


// Individual Marker Component (Optimized)
type MapMarkerProps = {
    place: { x: number; y: number };
    zoom: any; // SharedValue<number>
    centerLng: any; // SharedValue<number>
    centerLat: any; // SharedValue<number>
    screenWidth: number;
    screenHeight: number;
    color: string;
    isSelected: boolean;
    isVisible: boolean;
};

const MapMarker = ({ place, zoom, centerLng, centerLat, screenWidth, screenHeight, color, isSelected, isVisible }: MapMarkerProps) => {

    // Derived Scale
    const scale = useDerivedValue(() => Math.pow(2, zoom.value));

    // Derived Screen Position X
    const cx = useDerivedValue(() => {
        const centerProj = project(centerLat.value, centerLng.value);
        return (place.x - centerProj.x) * scale.value + screenWidth / 2;
    });

    // Derived Screen Position Y
    const cy = useDerivedValue(() => {
        const centerProj = project(centerLat.value, centerLng.value);
        return (place.y - centerProj.y) * scale.value + screenHeight / 2;
    });

    // Animation: Visibility & Selection
    const baseRadius = 14;
    const selectedRadius = 20;

    const targetRadius = isVisible ? (isSelected ? selectedRadius : baseRadius) : 0;

    const r = useSharedValue(targetRadius);
    useEffect(() => {
        r.value = withSpring(targetRadius, { mass: 0.5, stiffness: 150 });
    }, [targetRadius]);

    return (
        <Group>
            {/* Shadow / Glow (Simulated with semi-transparent black circle for perf) */}
            {isVisible && (
                <Circle cx={cx} cy={cy} r={r.value + 3} color="rgba(0,0,0,0.2)" />
            )}

            {/* White Stroke Background (Border) */}
            <Circle cx={cx} cy={cy} r={r} color="white" />

            {/* Inner Colored Circle */}
            <Circle cx={cx} cy={cy} r={Math.max(0, r.value - 3)} color={color} />
        </Group >
    );
};
