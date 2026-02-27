import { Place, PlaceSkeleton } from '../types/model';
import { PLACE_IMAGES_CAROUSEL, DEFAULT_IMAGES_CAROUSEL } from '../data/registry/media-config';
import Constants from 'expo-constants';

import { localImages, getPlaceImagesArray } from '../data/imagesMap';

import { ImageSourcePropType } from 'react-native';

// Fallback function: Prioritize LOCAL images first, then JSON hero_image, then Category fallback
export const getPlaceImages = (p: Place | PlaceSkeleton) => {
  const images: (ImageSourcePropType | string)[] = []; // Can be require() numbers or string URLs
  const GOOGLE_API_KEY = Constants.expoConfig?.extra?.googleMapsApiKey || '';

  // 0. LOCAL Images (Zero Quota / High Speed)
  const locals = getPlaceImagesArray(p.slug);
  if (locals.length > 0) {
    images.push(...locals);
  }

  // 1. JSON Hero Image (User provided)
  if (p.media?.hero_image && p.media.hero_image.startsWith('http')) {
    if (!images.includes(p.media.hero_image)) {
      images.push(p.media.hero_image);
    }
  }

  // 2. Google Places API (Only for full Places, skeletons stick to hero/local)
  const googlePhotos = (p.media as Record<string, unknown>)?.google_photos as string[] | undefined;
  if (images.length < 5 && googlePhotos && googlePhotos.length > 0) {
    const localCount = locals.length;
    const remainingPhotos = googlePhotos.slice(localCount, localCount + (5 - images.length));

    remainingPhotos.forEach((photoRef: string) => {
      const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoRef}&key=${GOOGLE_API_KEY}`;
      images.push(url);
    });
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

export const getHeroImage = (p: Place | PlaceSkeleton): ImageSourcePropType | string | null => {
  const images = getPlaceImages(p);
  return images.length > 0 ? images[0] : null;
};
