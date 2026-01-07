/**
 * MoodMap Paris - Design Tokens: Spacing
 * 
 * Système d'espacement basé sur une grille de 4px
 */

// Base unit: 4px
const BASE = 4;

export const spacing = {
    0: 0,
    px: 1,
    0.5: BASE * 0.5,   // 2
    1: BASE,            // 4
    1.5: BASE * 1.5,    // 6
    2: BASE * 2,        // 8
    2.5: BASE * 2.5,    // 10
    3: BASE * 3,        // 12
    4: BASE * 4,        // 16
    5: BASE * 5,        // 20
    6: BASE * 6,        // 24
    7: BASE * 7,        // 28
    8: BASE * 8,        // 32
    9: BASE * 9,        // 36
    10: BASE * 10,      // 40
    12: BASE * 12,      // 48
    14: BASE * 14,      // 56
    16: BASE * 16,      // 64
    20: BASE * 20,      // 80
    24: BASE * 24,      // 96
    32: BASE * 32,      // 128
} as const;

// Alias sémantiques
export const layout = {
    screenPadding: spacing[4],          // 16
    cardPadding: spacing[4],            // 16
    sectionGap: spacing[6],             // 24
    componentGap: spacing[3],           // 12
    inlineGap: spacing[2],              // 8
    tabBarHeight: spacing[16],          // 64
    headerHeight: spacing[14],          // 56
    bottomSheetHandle: spacing[1],      // 4
} as const;

// Border radius
export const radii = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
} as const;

export type SpacingKey = keyof typeof spacing;
export type RadiiKey = keyof typeof radii;
