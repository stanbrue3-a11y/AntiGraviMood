/**
 * mediaUtils.ts 🖼️⚡️
 * Utility to surgically optimize media URLs for the PDCI Pipeline.
 * Standard Industriel 2026.
 */

export const MEDIA_RESOLUTIONS = {
    THUMB: 400,
    PREVIEW: 800,
    HERO: 1200,
    FULL: 1600,
} as const;

export type MediaResolution = keyof typeof MEDIA_RESOLUTIONS;

/**
 * Optimizes a Google Maps Place Photo URL by injecting the correct maxwidth.
 * This acts as our "Client-Side Proxy" to reduce bandwidth and memory usage.
 */
/**
 * Injects the API Key into a Google Maps Photo URL if it's missing.
 * Essential for the PDCI Pipeline to work with raw registry URLs.
 */
export const injectApiKey = (url: string, apiKey: string): string => {
    if (!url || !url.includes('maps.googleapis.com/maps/api/place/photo')) return url;
    if (url.includes('key=')) return url;

    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}key=${apiKey}`;
};

export const optimiseMapsUrl = (url: string | undefined | null, resolution: MediaResolution = 'PREVIEW'): string => {
    if (!url) return '';

    const width = MEDIA_RESOLUTIONS[resolution];

    // If it's a Google Maps API URL
    if (url.includes('maps.googleapis.com/maps/api/place/photo')) {
        // 🚨 IMPORTANT: Remove any hardcoded keys from old data format
        let optimizedUrl = url.replace(/&key=[^&]+/, '');
        optimizedUrl = optimizedUrl.replace(/\?key=[^&]+&/, '?');
        optimizedUrl = optimizedUrl.replace(/\?key=[^&]+$/, '');

        // Replace existing maxwidth or maxheight with our optimized width
        optimizedUrl = optimizedUrl.replace(/maxwidth=\d+/, `maxwidth=${width}`);
        optimizedUrl = optimizedUrl.replace(/maxheight=\d+/, `maxwidth=${width}`); // Prefer width for scaling

        // If no maxwidth was present, add it
        if (!optimizedUrl.includes('maxwidth=')) {
            const separator = optimizedUrl.includes('?') ? '&' : '?';
            optimizedUrl += `${separator}maxwidth=${width}`;
        }

        return optimizedUrl;
    }

    return url;
};
