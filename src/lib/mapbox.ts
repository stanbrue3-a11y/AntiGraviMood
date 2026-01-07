/**
 * MoodMap Paris - Mapbox Configuration
 */

import Mapbox from '@rnmapbox/maps';

// Token Mapbox
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3RhbnRoZW1hbnMiLCJhIjoiY21qYW9rZmJzMDVrejNkc2J6dW9sbmNubCJ9.rio8auCYmW4qWaHP9YxD5A';

// Initialiser Mapbox
Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

// Styles de carte disponibles
export const MAP_STYLES = {
    light: 'mapbox://styles/mapbox/light-v11',
    dark: 'mapbox://styles/mapbox/dark-v11',
    streets: 'mapbox://styles/mapbox/streets-v12',
    satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
} as const;

// Centre de Paris
export const PARIS_CENTER = {
    latitude: 48.8566,
    longitude: 2.3522,
};

// Zoom par défaut
export const DEFAULT_ZOOM = 12;

// Export Mapbox pour utilisation dans les composants
export { Mapbox };
export { MAPBOX_ACCESS_TOKEN };
