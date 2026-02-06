import { Place } from '../types/model';
import { PLACE_IMAGES_CAROUSEL, DEFAULT_IMAGES_CAROUSEL } from '../data/registry/media-config';
import Constants from 'expo-constants';

import { localImages, getPlaceImagesArray } from '../data/imagesMap';

// Fallback function: Prioritize LOCAL images first, then JSON hero_image, then Category fallback
export const getPlaceImages = (p: Place) => {
    const images: any[] = []; // Can be require() numbers or string URLs
    const GOOGLE_API_KEY = Constants.expoConfig?.extra?.googleMapsApiKey || 'AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM';

    // 0. LOCAL Images (Zero Quota / High Speed)
    // Now we get up to 3 photos locally
    const locals = getPlaceImagesArray(p.slug);
    if (locals.length > 0) {
        images.push(...locals);
    }

    // 1. Google Places API (Only as fallback or to fill carousel further)
    if (images.length < 5 && p.media?.google_photos && p.media.google_photos.length > 0) {
        // Skip the first N photos from Google API if we already have N local photos (assuming they are the same ones)
        const localCount = locals.length;
        const remainingPhotos = p.media.google_photos.slice(localCount, localCount + (5 - images.length));

        remainingPhotos.forEach((photoRef: string) => {
            const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoRef}&key=${GOOGLE_API_KEY}`;
            images.push(url);
        });
    }

    // 1. JSON Hero Image (User provided) - Add if we need more images
    if (images.length < 5 && p.media?.hero_image && p.media.hero_image.startsWith('http')) {
        if (!images.includes(p.media.hero_image)) {
            images.push(p.media.hero_image);
        }
    } else if (images.length < 5 && p.media?.hero_image && p.media.hero_image.startsWith('/')) {
        // Handle local paths if needed
    }

    // 2. Hardcoded specific overrides - Add if we need more images
    if (images.length < 5 && PLACE_IMAGES_CAROUSEL[p.slug]) {
        const overrides = PLACE_IMAGES_CAROUSEL[p.slug];
        for (const img of overrides) {
            if (images.length >= 5) break;
            if (!images.includes(img)) {
                images.push(img);
            }
        }
    }

    // 3. Category Fallback - Force fill to 5 images
    if (images.length < 5) {
        const fallbacks = DEFAULT_IMAGES_CAROUSEL[p.category] || DEFAULT_IMAGES_CAROUSEL['bar'];
        for (const img of fallbacks) {
            if (images.length >= 5) break;
            if (!images.includes(img)) {
                images.push(img);
            }
        }
    }

    return images;
};
