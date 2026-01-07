/**
 * MoodMap Paris - Design Tokens: Typography
 * 
 * Pairing "Bon Vivant" :
 * - Titres : Playfair Display (Serif élégante, culturelle)
 * - Corps : Inter (Sans-Serif moderne, lisible)
 */

export const fontFamilies = {
    // Display - Serif élégante pour les titres (Bon Vivant)
    display: 'PlayfairDisplay',
    displayBold: 'PlayfairDisplay-Bold',
    displayItalic: 'PlayfairDisplay-Italic',

    // Body - Sans-Serif moderne pour le corps
    body: 'Inter',
    bodyMedium: 'Inter-Medium',
    bodySemiBold: 'Inter-SemiBold',
    bodyBold: 'Inter-Bold',

    // Monospace pour les stats
    mono: 'JetBrainsMono',

    // Fallbacks système (pour MVP avant chargement fonts)
    system: {
        serif: 'Georgia',  // Fallback Serif
        sans: 'System',    // Fallback Sans
    },
} as const;

// Échelle de tailles (modular scale ratio: 1.25)
export const fontSizes = {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
    '4xl': 48,
    '5xl': 60,
} as const;

// Line heights
export const lineHeights = {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
} as const;

// Letter spacing
export const letterSpacing = {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.5,
    wider: 1,
    widest: 2,
} as const;

// Presets typographiques - Style "Bon Vivant"
export const typography = {
    // ======================
    // DISPLAY (Serif - Playfair)
    // ======================

    // Hero headlines
    displayXl: {
        fontFamily: fontFamilies.displayBold,
        fontSize: fontSizes['5xl'],
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.tight,
    },
    displayLg: {
        fontFamily: fontFamilies.displayBold,
        fontSize: fontSizes['4xl'],
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.tight,
    },

    // Section titles
    h1: {
        fontFamily: fontFamilies.displayBold,
        fontSize: fontSizes['3xl'],
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.tight,
    },
    h2: {
        fontFamily: fontFamilies.display,
        fontSize: fontSizes['2xl'],
        lineHeight: lineHeights.snug,
        letterSpacing: letterSpacing.normal,
    },
    h3: {
        fontFamily: fontFamilies.display,
        fontSize: fontSizes.xl,
        lineHeight: lineHeights.snug,
        letterSpacing: letterSpacing.normal,
    },

    // Place names, elegant labels
    placeName: {
        fontFamily: fontFamilies.displayBold,
        fontSize: fontSizes.xl,
        lineHeight: lineHeights.snug,
        letterSpacing: letterSpacing.tight,
    },

    // ======================
    // BODY (Sans-Serif - Inter)
    // ======================

    // Subtitles
    subtitle: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: fontSizes.lg,
        lineHeight: lineHeights.snug,
    },

    // Body text
    bodyLarge: {
        fontFamily: fontFamilies.body,
        fontSize: fontSizes.lg,
        lineHeight: lineHeights.relaxed,
    },
    body: {
        fontFamily: fontFamilies.body,
        fontSize: fontSizes.base,
        lineHeight: lineHeights.normal,
    },
    bodySmall: {
        fontFamily: fontFamilies.body,
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.normal,
    },

    // Labels & UI
    label: {
        fontFamily: fontFamilies.bodyMedium,
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.wide,
    },
    labelSmall: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.wider,
        textTransform: 'uppercase' as const,
    },
    caption: {
        fontFamily: fontFamilies.body,
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.normal,
    },

    // Interactive elements
    button: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: fontSizes.base,
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.wide,
    },
    buttonSmall: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.tight,
    },

    // Stats & Numbers
    stat: {
        fontFamily: fontFamilies.bodyBold,
        fontSize: fontSizes.xl,
        lineHeight: lineHeights.tight,
    },
    statLabel: {
        fontFamily: fontFamilies.body,
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.normal,
        letterSpacing: letterSpacing.wide,
    },

    // Badges & Tags
    badge: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.wide,
    },
    tag: {
        fontFamily: fontFamilies.bodyMedium,
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.tight,
    },
} as const;

export type TypographyVariant = keyof typeof typography;
