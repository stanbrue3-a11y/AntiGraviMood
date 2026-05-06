import { SurgicalPlace } from "../../../type-definition";

export const seoul_mama_luxembourg: SurgicalPlace = {
  "id": "poi-seoul-mama-luxembourg",
  slug: "seoul-mama-luxembourg",
  "name": "Seoul Mama Luxembourg",
  category: "restaurant",
  subcategory: ['coréen'],
  location: {
    address: "33 Rue de l'Abbé de l'Épée, 75005 Paris",
    arrondissement: 5,
    lng: 2.341258,
    nearest_metro: "Luxembourg",
    metro_lines: [4],
    google_id: "ChIJb_I5S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 80,
    festif: 20,
    culturel: 30
  },
  practical: {
    opening_hours_raw: "lundi-samedi: 12:00–14:30, 19:00–22:30",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://seoulmama.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    dish_price: 18,
    menu_items: [
      {
        category_type: "main",
        display_label: "Plats Signature",
        items: [
          { "name": "Kimchi Fried Rice", price_cents: 1600 },
          { "name": "Bulgogi", price_cents: 1900 }
        ]
      }
    ]
  },
  description: "Seoul Mama Luxembourg est l'ambassade rive gauche de la cuisine coréenne moderne. Le cadre est clair, épuré et chaleureux. La cuisine revisite les classiques avec finesse, offrant une expérience authentique dans un écrin contemporain.",
  expert_catchline: "Le néo-coréen chic et savoureux à deux pas du Jardin du Luxembourg.",
  insider_tip: "Leur Kimchi Fried Rice est un incontournable de la maison. Idéal pour un déjeuner calme ou un dîner entre amis dans le 5ème.",
  specials: {
    cuisine: ["Coréen"],
    must_eat: "Cuisine Coréenne. Kimchi Fried Rice & Bulgogi.",
  },
  real_talk: {
    text: "Une adresse coréenne moderne et chaleureuse.",
    must_eat: "Cuisine Coréenne. Kimchi Fried Rice & Bulgogi.",
    le_secret: "La carte des cocktails infusés aux saveurs coréennes.",
    le_son: "Calme et apaisant.",
    le_must: "L'accueil attentif."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/seoul-mama-luxembourg/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/seoul-mama-luxembourg/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/seoul-mama-luxembourg/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/seoul-mama-luxembourg/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/seoul-mama-luxembourg/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/seoul-mama-luxembourg/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default seoul_mama_luxembourg;
