// NO IMPORTS - PURE LOGIC TEST
const mockRow = {
  id: 'poi-zhao-grands-boulevards',
  name: 'La Taverne de Zhao',
  hero_image:
    'https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/hero.jpg',
  google_photos_json:
    '["https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/hero.jpg","https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/1.jpg","https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/2.jpg","https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/3.jpg","https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/4.jpg"]',
};

function safeJsonParse(json, fallback) {
  if (!json) return fallback;
  try {
    return JSON.parse(json);
  } catch (e) {
    return fallback;
  }
}

// Mimic mapRowToPlace
const place = {
  id: mockRow.id,
  name: mockRow.name,
  media: {
    hero_image: mockRow.hero_image,
    google_photos: safeJsonParse(mockRow.google_photos_json, undefined),
  },
};

console.log('--- Step 1: Simulated Mapping ---');
console.log('Media Google Photos:', place.media.google_photos);

// Mimic getPlaceImages
function getPlaceImages(p) {
  const images = [];

  if (p.media?.hero_image) {
    images.push(p.media.hero_image);
  }

  const googlePhotos = p.media?.google_photos;
  if (images.length < 5 && googlePhotos && googlePhotos.length > 0) {
    const remaining = 5 - images.length;
    const photosToAdd = googlePhotos.slice(0, remaining);

    photosToAdd.forEach((photo) => {
      if (!images.includes(photo)) {
        images.push(photo);
      }
    });
  }

  return images;
}

const finalImages = getPlaceImages(place);
console.log('--- Step 2: Final Images Calculation ---');
console.log('Final Images Array Length:', finalImages.length);
console.log('Final Images Array:', finalImages);
