/**
 * MoodMap Paris - Design Tokens: Colors
 * 
 * Palette centralisée avec couleurs mood dynamiques
 * (Updated)
 */

// Couleurs de base
export const palette = {
    // Neutrals (Dark mode first)
    black: '#000000',
    dark: {
        900: '#0a0a0f',
        800: '#12121a',
        700: '#1a1a2e',
        600: '#252538',
        500: '#3a3a4d',
    },
    light: {
        100: '#ffffff',
        200: '#fafafa',
        300: '#f5f5f7',
        400: '#e8e8ed',
        500: '#d1d1d6',
    },

    // Brand
    primary: '#6366f1',    // Indigo vibrant
    secondary: '#ec4899',  // Pink accent

    // Semantic
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
} as const;

// Couleurs des Moods
export const moodColors = {
    chill: {
        primary: '#8ccaf7',      // Bleu Map (Reference)
        secondary: '#b3e0ff',    // Bleu très clair
        gradient: ['#8ccaf7', '#b3e0ff', '#e6f5ff'],
        background: 'rgba(140, 202, 247, 0.15)',
        text: '#8ccaf7',
    },
    festif: {
        primary: '#ffab60',      // Orange Map (Reference)
        secondary: '#ffcf9e',    // Orange clair
        gradient: ['#ffab60', '#ffcf9e', '#fff0da'],
        background: 'rgba(255, 171, 96, 0.15)',
        text: '#ffab60',
    },
    culturel: {
        primary: '#c499ff',      // Violet Map (Reference)
        secondary: '#e2ccff',    // Violet clair
        gradient: ['#c499ff', '#e2ccff', '#f3ebff'],
        background: 'rgba(196, 153, 255, 0.15)',
        text: '#c499ff',
    },
} as const;

// Thème sombre (par défaut)
export const darkTheme = {
    primary: palette.primary, // Add primary
    background: palette.dark[800],
    surface: palette.dark[700],
    surfaceElevated: palette.dark[600],
    text: {
        primary: palette.light[100],
        secondary: palette.light[500],
        muted: palette.dark[500],
        placeholder: palette.dark[500], // Add placeholder
    },
    border: palette.dark[500],
    tabBar: {
        background: palette.dark[900],
        active: palette.primary,
        inactive: palette.light[500],
    },
};

// Thème clair
export const lightTheme = {
    primary: palette.primary, // Add primary
    background: palette.light[200],
    surface: palette.light[100],
    surfaceElevated: palette.light[100],
    text: {
        primary: palette.dark[800],
        secondary: palette.dark[500],
        muted: palette.light[500],
        placeholder: palette.light[500], // Add placeholder
    },
    border: palette.light[400],
    tabBar: {
        background: palette.light[100],
        active: palette.primary,
        inactive: palette.dark[500],
    },
};

export type MoodType = keyof typeof moodColors;

// Theme type with flexible string types
export interface Theme {
    primary: string;
    background: string;
    surface: string;
    surfaceElevated: string;
    text: {
        primary: string;
        secondary: string;
        muted: string;
        placeholder: string;
    };
    border: string;
    tabBar: {
        background: string;
        active: string;
        inactive: string;
    };
}
