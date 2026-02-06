/**
 * MoodMap Paris - Theme Provider
 * 
 * Contexte React pour la gestion dark/light mode
 * Smart Mode: Basé sur le rythme solaire parisien.
 */

import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme, moodColors, type Theme, type MoodType } from './tokens/colors';
import { typography } from './tokens/typography';
import { spacing, layout, radii } from './tokens/spacing';
import { shadows } from './tokens/shadows';

// Types
export type ThemeMode = 'light' | 'dark' | 'system' | 'smart';

interface MoodColor {
    primary: string;
    secondary: string;
    gradient: readonly string[];
    background: string;
    text: string;
}

interface ThemeContextValue {
    theme: Theme;
    mode: ThemeMode;
    isDark: boolean;
    setMode: (mode: ThemeMode) => void;
    getMoodColor: (mood: MoodType) => MoodColor;
    tokens: {
        typography: typeof typography;
        spacing: typeof spacing;
        layout: typeof layout;
        radii: typeof radii;
        shadows: typeof shadows;
    };
}

// Context
const ThemeContext = createContext<ThemeContextValue | null>(null);

// HELPER: Check if it's "Night" in Paris (Seasonality approximated)
const getParisIsNight = () => {
    const now = new Date();
    const hours = now.getHours();
    const month = now.getMonth(); // 0 = Jan, 11 = Dec

    // Simple table for Paris Sunset
    // Winter (Nov-Feb): Sunset ~17h-18h
    // Summer (Jun-Aug): Sunset ~22h
    // Shoulder (Mar-May, Sep-Oct): Sunset ~20h

    let sunsetHour = 20; // Average

    if (month >= 10 || month <= 1) sunsetHour = 17; // Winter (Nov, Dec, Jan, Feb)
    if (month >= 4 && month <= 7) sunsetHour = 22; // Summer (May, Jun, Jul, Aug)

    // Night is: After sunset OR Before 7am
    return hours >= sunsetHour || hours < 7;
};

// Provider
interface ThemeProviderProps {
    children: ReactNode;
    initialMode?: ThemeMode;
}

export function ThemeProvider({ children, initialMode = 'dark' }: ThemeProviderProps) {
    const systemColorScheme = useColorScheme();
    const [mode, setMode] = useState<ThemeMode>(initialMode);

    // Calculate effective dark mode state
    const isDark = useMemo(() => {
        if (mode === 'dark') return true;
        if (mode === 'light') return false;
        if (mode === 'smart') return getParisIsNight();
        return systemColorScheme === 'dark';
    }, [mode, systemColorScheme]);

    // SMART REFRESH: If mode is smart, we check periodically (e.g. every 5 mins)
    // to see if we transitioned into night/day without restart.
    const [_, forceUpdate] = useState(0);
    useEffect(() => {
        if (mode !== 'smart') return;
        const interval = setInterval(() => {
            forceUpdate(v => v + 1);
        }, 1000 * 60 * 5); // 5 minutes
        return () => clearInterval(interval);
    }, [mode]);

    const theme = isDark ? darkTheme : lightTheme;

    const getMoodColor = (mood: MoodType): MoodColor => {
        return moodColors[mood] || moodColors.chill;
    };

    const value = {
        theme,
        mode,
        isDark,
        setMode,
        getMoodColor,
        tokens: {
            typography,
            spacing,
            layout,
            radii,
            shadows,
        }
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// Hook
export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

// Hook raccourci pour les couleurs
export function useColors() {
    const { theme, getMoodColor } = useTheme();
    return { ...theme, getMoodColor, moodColors };
}

// Hook raccourci pour les tokens
export function useTokens() {
    const { tokens } = useTheme();
    return tokens;
}
