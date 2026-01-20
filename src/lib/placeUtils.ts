
import { Place } from '../types/model';

// MAPPING IMAGES CAROUSEL (Photos 100% Réelles / Documentaires)
export const PLACE_IMAGES_CAROUSEL: Record<string, string[]> = {
    'comptoir-general': [
        'https://upload.wikimedia.org/wikipedia/commons/e/e6/Le_Comptoir_G%C3%A9n%C3%A9ral%2C_80_Quai_de_Jemmapes%2C_75010_Paris_2014.jpg',
    ],
    'anticafe-louvre': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Anticaf%C3%A9_Beaubourg_03.jpg/1280px-Anticaf%C3%A9_Beaubourg_03.jpg',
    ],
    'concrete': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Paris_75012_Port_de_la_Rap%C3%A9e_Concrete_20160718.jpg/1280px-Paris_75012_Port_de_la_Rap%C3%A9e_Concrete_20160718.jpg'
    ],
    'perchoir-marais': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Le_Perchoir_de_l%27Est_%28Paris%29.jpg/1280px-Le_Perchoir_de_l%27Est_%28Paris%29.jpg'
    ],
    'cafe-de-flore': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Caf%C3%A9_de_Flore_front.jpg/1200px-Caf%C3%A9_de_Flore_front.jpg',
    ],
    'ground-control': [
        'https://upload.wikimedia.org/wikipedia/commons/d/dd/Paris_-_Ground_Control_%2840215098833%29.jpg',
    ],
    'baron-rouge': [
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Le_Baron_Rouge%2C_1_Rue_Theophile_Roussel.jpg'
    ],
    'wanderlust': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cit%C3%A9_de_la_Mode_et_du_Design_Quai_d%27Austerlitz_Paris.jpg/1280px-Cit%C3%A9_de_la_Mode_et_du_Design_Quai_d%27Austerlitz_Paris.jpg'
    ],
    'bouillon-chartier': [], // Removed to use Google API
    // Authentic Real Photos (Wikimedia Commons)
    'la-bellevilloise': [
        'https://upload.wikimedia.org/wikipedia/commons/2/23/La_Bellevilloise.jpg',
    ],
    'shakespeare-company': [
        'https://upload.wikimedia.org/wikipedia/commons/e/e4/Shakespeare_and_Company%2C_Paris.jpg',
    ],
    'rosa-bonheur-buttes': [
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Rosa_Bonheur%2C_Buttes_Chaumont.jpg'
    ],
    'palais-de-tokyo': [
        'https://upload.wikimedia.org/wikipedia/commons/e/ee/Palais_de_Tokyo.jpg'
    ],
    'le-104': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Le_Cent_Quatre_%C3%A0_Paris%2C_juin_2012.jpg/1280px-Le_Cent_Quatre_%C3%A0_Paris%2C_juin_2012.jpg'
    ],
    'point-ephemere': [
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Point_Eph%C3%A9m%C3%A8re_2009.jpg'
    ],
    'la-recyclerie': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/L%27ancienne_gare_Ornano%2C_la_Recyclerie_%2819601628304%29.jpg/1280px-L%27ancienne_gare_Ornano%2C_la_Recyclerie_%2819601628304%29.jpg'
    ],
    'hotel-grands-boulevards': [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800' // Keeping this as fallback for now
    ]
};

export const DEFAULT_IMAGES_CAROUSEL: Record<string, string[]> = {
    'bar': [ // Focus: Interior, Counter, Atmosphere
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000',
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000', // Mood lighting
        'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=1000' // Bar counter
    ],
    'café': [ // Focus: Coffee Shop, Seating, Light
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000',
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000', // Cozy corner
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000' // Shop front
    ],
    'restaurant': [ // Focus: Tables, Dining Room, Plating
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000', // Service/Vibe
        'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000'  // Brasserie style
    ],
    'club': [ // Focus: Lights, DJ, Crowd
        'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000',
        'https://images.unsplash.com/photo-1574391884720-2bbc37e3ae8f?q=80&w=1000',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000', // Nightlife
        'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1000' // Stage/Lights
    ],
    'parc': [ // Focus: Greenery, Paths, Benches
        'https://images.unsplash.com/photo-1490750967868-58cb75069faf?q=80&w=1000',
        'https://images.unsplash.com/photo-1519331379826-fcb5c14514e9?q=80&w=1000',
        'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=1000', // Urban park
        'https://images.unsplash.com/photo-1565036502284-88aa5cb4481c?q=80&w=1000' // Sunny day
    ],
    'museum': [ // Focus: Halls, Art, Architecture
        'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1000',
        'https://images.unsplash.com/photo-1518998053901-5348d3969105?q=80&w=1000',
        'https://images.unsplash.com/photo-1545300306-0370d02462c1?q=80&w=1000', // Art display
        'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1000' // Gallery
    ],
    'espace-culturel': [ // Focus: Creative spaces, Exhibitions
        'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=1000',
        'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000',
        'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000', // Modern art
        'https://images.unsplash.com/photo-1515169273894-7e876dcf13da?q=80&w=1000' // Install
    ],
    'troquet': ['https://images.unsplash.com/photo-1595856108127-14fa88d90be7?q=80&w=1000'],
};

import { localImages, getPlaceImagesArray } from '../data/imagesMap';

// Fallback function: Prioritize LOCAL images first, then JSON hero_image, then Category fallback
export const getPlaceImages = (p: Place) => {
    const images: any[] = []; // Can be require() numbers or string URLs
    const GOOGLE_API_KEY = 'AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM';

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
