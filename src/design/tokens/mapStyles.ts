/**
 * MoodMap Paris - Premium Map Styles
 * 
 * Deep Night ("Paris Night Drive")
 * - Background: Deep Navy (#0B0E14)
 * - Roads: Subtle Anthracite/Gold
 * - Water: Glossy Black
 * - Labels: REMOVED (No pollution)
 */

export const mapStyles = {
    deepNight: [
        {
            "elementType": "geometry",
            "stylers": [
                { "color": "#0B0E14" } // Deep Midnight Blue
            ]
        },
        {
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" } // REMOVE ALL TEXT
            ]
        },
        // Exceptions for Neighborhood names if desired (optional, keeping clean for now)
        // ROADS
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                { "color": "#1E293B" }, // Anthracite
                { "lightness": -30 }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                { "color": "#334155" }, // Slightly lighter stroke for depth
                { "weight": 0.5 }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                { "color": "#334155" } // Highways slightly more visible
            ]
        },
        // WATER (La Seine)
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                { "color": "#020617" } // Almost Black
            ]
        },
        // PARKS
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                { "color": "#0F172A" } // Darker than land, subtle
            ]
        },
        // HIDE ALL POIs (Clutter free)
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                { "visibility": "off" }
            ]
        }
    ],
    softLuxury: [] // Placeholder if needed
};
