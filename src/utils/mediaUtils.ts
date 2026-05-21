/**
 * mediaUtils.ts 🖼️⚡️
 * Utility to surgically optimize media URLs for the PDCI Pipeline.
 * Standard Industriel 2026.
 */

// 🗝️ HARDCODED FALLBACK KEY (Essential for build reliability)
const MASTER_GOOGLE_KEY = 'AIzaSyA1j0Ebdao_4hGkmhtGPZBAwxnGeWEeLf8';

export const MEDIA_RESOLUTIONS = {
  THUMB: 400,
  PREVIEW: 800,
  HERO: 1200,
  FULL: 1600,
} as const;

export type MediaResolution = keyof typeof MEDIA_RESOLUTIONS;

/**
 * Injects the API Key into a Google Maps Photo URL if it's missing.
 */
export const injectApiKey = (url: string, apiKey: string): string => {
  if (!url || !url.includes('maps.googleapis.com/maps/api/place/photo')) return url;
  if (url.includes('key=')) return url;

  const keyToUse = apiKey || MASTER_GOOGLE_KEY;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}key=${keyToUse}`;
};

/**
 * Optimizes a Google Maps Place Photo URL by injecting the correct maxwidth.
 * Reconstructs the URL if a raw Google Photo ID is provided.
 */
export const optimiseMapsUrl = (
  source: string | undefined | null,
  resolution: MediaResolution = 'PREVIEW',
): string => {
  if (!source) return '';

  const width = MEDIA_RESOLUTIONS[resolution];
  let url = source;

  // 1. Detect Raw Google Photo IDs (ATCDNf... or AU_ZVEH...)
  // If it doesn't look like an URL, it's a raw ID
  if (!source.startsWith('http')) {
    url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&photo_reference=${source}`;
  }

  // 2. If it's a Google Maps API URL (reconstructed or original)
  if (url.includes('maps.googleapis.com/maps/api/place/photo')) {
    // Remove any hardcoded keys from old data format to avoid duplicates
    let optimizedUrl = url.replace(/&key=[^&]+/, '');
    optimizedUrl = optimizedUrl.replace(/\?key=[^&]+&/, '?');
    optimizedUrl = optimizedUrl.replace(/\?key=[^&]+$/, '');

    // Replace existing maxwidth or maxheight with our optimized width
    optimizedUrl = optimizedUrl.replace(/maxwidth=\d+/, `maxwidth=${width}`);
    optimizedUrl = optimizedUrl.replace(/maxheight=\d+/, `maxwidth=${width}`);

    // If no maxwidth was present, add it
    if (!optimizedUrl.includes('maxwidth=')) {
      const separator = optimizedUrl.includes('?') ? '&' : '?';
      optimizedUrl += `${separator}maxwidth=${width}`;
    }

    // 3. FINAL SECURITY: Ensure API Key is present
    return injectApiKey(optimizedUrl, MASTER_GOOGLE_KEY);
  }

  return url;
};
