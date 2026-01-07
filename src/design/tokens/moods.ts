
export const MOODS = {
    chill: {
        label: 'Chill',
        emoji: 'CHILL', // Text label for Magazine look
        icon: 'leaf',
        color: '#5AC8FA', // Serenity Blue
    },
    festif: {
        label: 'Festif',
        emoji: 'FESTIF',
        icon: 'flash',
        color: '#ffab60', // Orange (Restored)
    },
    culturel: {
        label: 'Culturel',
        emoji: 'CULTUREL',
        icon: 'color-palette',
        color: '#AF52DE', // Deep Purple
    },
} as const;

export type MoodKey = keyof typeof MOODS;
