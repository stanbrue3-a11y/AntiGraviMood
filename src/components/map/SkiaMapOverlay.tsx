import React, { useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import { useSharedValue, withSpring, useDerivedValue } from 'react-native-reanimated';
import { getDominantMood } from '../../lib/moodUtils';
import { moodColors, type MoodType } from '../../design/tokens/colors';

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

                // MOOD DETECTION LOGIC 🎨 - UNIFIED
                const placeMood = (place.dominant_mood || getDominantMood(place)) as MoodType;
                const color = moodColors[placeMood].primary;

                let isVisible = true;
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
