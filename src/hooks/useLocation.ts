/**
 * MoodMap Paris - Hook Location
 */

import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface LocationState {
    latitude: number;
    longitude: number;
}

export function useLocation() {
    const [location, setLocation] = useState<LocationState | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function getLocation() {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    if (isMounted) {
                        setError('Permission de localisation refusée');
                        setLoading(false);
                    }
                    return;
                }

                const currentLocation = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.Balanced,
                });

                if (isMounted) {
                    setLocation({
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude,
                    });
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError('Erreur lors de la récupération de la position');
                    setLoading(false);
                }
            }
        }

        getLocation();

        return () => {
            isMounted = false;
        };
    }, []);

    return { location, error, loading };
}

export default useLocation;
