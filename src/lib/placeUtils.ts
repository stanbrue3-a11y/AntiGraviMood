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
  if (p.media?.hero_image) {
    const heroRef = p.media.hero_image as string;
    let heroUrl = heroRef;
    // If it's a raw reference (no http) and looks like a Google token
    if (!heroRef.startsWith('http') && heroRef.length > 20) {
      heroUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${heroRef}&key=${GOOGLE_API_KEY}`;
    }
    if (!images.includes(heroUrl)) {
      images.push(heroUrl);
    }
  }

  // 2. Google Places API (Only for full Places, skeletons stick to hero/local)
  const googlePhotos = (p.media as Record<string, unknown>)?.google_photos as string[] | undefined;
  if (images.length < 5 && googlePhotos && googlePhotos.length > 0) {
    const remaining = 5 - images.length;
    const photosToAdd = googlePhotos.slice(0, remaining);

    photosToAdd.forEach((photo: string) => {
      // If it's already a full URL (from compile), use it directly
      if (photo.startsWith('http')) {
        if (!images.includes(photo)) images.push(photo);
      } else {
        // It's a raw photo_reference, build the URL
        const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo}&key=${GOOGLE_API_KEY}`;
        images.push(url);
      }
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
