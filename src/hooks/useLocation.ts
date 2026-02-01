/**
 * MoodMap Paris - Hook Location
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import * as Location from 'expo-location';

interface LocationState {
    latitude: number;
    longitude: number;
}

export function useLocation() {
    const [location, setLocation] = useState<LocationState | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const watcherRef = useRef<Location.LocationSubscription | null>(null);

    const startWatching = useCallback(async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission de localisation refusée');
                setLoading(false);
                return;
            }

            // Clean up existing watcher if any
            if (watcherRef.current) {
                watcherRef.current.remove();
            }

            // Haussmannian Throttling: 10 meters AND 5 seconds minimum
            watcherRef.current = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.Balanced,
                    distanceInterval: 10,
                    timeInterval: 5000,
                },
                (currentLocation) => {
                    setLocation({
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude,
                    });
                    setLoading(false);
                }
            );
        } catch (err) {
            setError('Erreur lors de la récupération de la position');
            setLoading(false);
        }
    }, []);

    const stopWatching = useCallback(() => {
        if (watcherRef.current) {
            watcherRef.current.remove();
            watcherRef.current = null;
        }
    }, []);

    useEffect(() => {
        startWatching();

        // AppState Management - Stop GPS in Background!
        const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
            if (nextAppState === 'active') {
                startWatching();
            } else {
                stopWatching();
            }
        });

        return () => {
            stopWatching();
            subscription.remove();
        };
    }, [startWatching, stopWatching]);

    return { location, error, loading, refresh: startWatching };
}

export default useLocation;
