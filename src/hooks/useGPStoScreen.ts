import { useEffect, useState, useCallback } from 'react';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * Web Mercator projection (used by Mapbox)
 * Converts GPS coordinates (lng, lat) to screen pixel positions
 */

// Longitude to X (simple linear mapping)
function lngToX(lng: number, mapWidth: number, centerLng: number, zoom: number): number {
    const scale = (mapWidth / 360) * Math.pow(2, zoom);
    return (lng - centerLng) * scale + mapWidth / 2;
}

// Latitude to Y (Web Mercator projection)
function latToY(lat: number, mapHeight: number, centerLat: number, zoom: number): number {
    const scale = (mapHeight / 360) * Math.pow(2, zoom);

    // Web Mercator formula
    const latRad = (lat * Math.PI) / 180;
    const centerLatRad = (centerLat * Math.PI) / 180;

    const y = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const centerY = Math.log(Math.tan(Math.PI / 4 + centerLatRad / 2));

    return mapHeight / 2 - (y - centerY) * scale * (180 / Math.PI);
}

export interface ScreenPosition {
    x: number;
    y: number;
    visible: boolean;
}

export interface MapState {
    centerLng: number;
    centerLat: number;
    zoom: number;
}

/**
 * Hook to convert GPS coordinates to screen positions
 * Uses Web Mercator projection (same as Mapbox)
 */
export function useGPStoScreenProjection(
    gpsCoords: Array<[number, number]>, // [lng, lat]
    mapState: MapState
): ScreenPosition[] {
    const [screenPositions, setScreenPositions] = useState<ScreenPosition[]>([]);

    useEffect(() => {
        const { centerLng, centerLat, zoom } = mapState;

        const positions = gpsCoords.map(([lng, lat]) => {
            const x = lngToX(lng, SCREEN_WIDTH, centerLng, zoom);
            const y = latToY(lat, SCREEN_HEIGHT, centerLat, zoom);

            // Check if visible on screen (with margin)
            const margin = 100;
            const visible = (
                x >= -margin &&
                x <= SCREEN_WIDTH + margin &&
                y >= -margin &&
                y <= SCREEN_HEIGHT + margin
            );

            return { x, y, visible };
        });

        setScreenPositions(positions);
    }, [gpsCoords, mapState]);

    return screenPositions;
}
