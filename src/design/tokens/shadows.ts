/**
 * MoodMap Paris - Design Tokens: Shadows
 * 
 * Système d'élévation pour iOS et Android
 */

import { Platform } from 'react-native';

// Shadows pour iOS
const iosShadows = {
    none: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    sm: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    },
    md: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.22,
        shadowRadius: 4.0,
    },
    lg: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 8.0,
    },
    xl: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.30,
        shadowRadius: 14.0,
    },
    '2xl': {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.35,
        shadowRadius: 24.0,
    },
};

// Elevation pour Android
const androidElevations = {
    none: { elevation: 0 },
    sm: { elevation: 2 },
    md: { elevation: 4 },
    lg: { elevation: 8 },
    xl: { elevation: 12 },
    '2xl': { elevation: 24 },
};

// Export shadows directly (iOS shadows work on both platforms via RN style system)
export const shadows = iosShadows;

// Glassmorphism (pour overlay cards)
export const glass = {
    light: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
    },
    dark: {
        backgroundColor: 'rgba(26, 26, 46, 0.8)',
        backdropFilter: 'blur(20px)',
    },
} as const;

export type ShadowKey = keyof typeof iosShadows;
