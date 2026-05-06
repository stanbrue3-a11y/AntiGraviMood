import { SurgicalPlace } from '../../../type-definition';

export const track_119: SurgicalPlace = {
    id: "poi-track-119",
    name: "Track 119 (Deb’s Street Food)",
    slug: "track-119",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "119 Rue du Chemin Vert",
        arrondissement: 11,
        lat: 48.8618157,
        lng: 2.3830859,
        nearest_metro: "Père Lachaise",
        metro_lines: [2, 3],
        google_id: "ChIJp-noTExt5kcRo3SqnLu8UFg"
    },
    moods: {
        chill: 90,
        festif: 50,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Mar-Dim: 12:00–23:00 (Fermé Lun)",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://track119.com/",
            label: "DÉCOUVRIR"
        }
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        pint_price: 6,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 14.50, // Street Food Satiety Unit
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Deb's Street Food @ Track 119 (Indian/Pakistani)
            {
                category_type: "sharing",
                display_label: "Street Food Snacks",
                items: [
                    { name: "Pani Puri (x6)", price_cents: 750, description: "Billes croustillantes à l’eau épicée." },
                    { name: "Samosas Pomme de Terre/Pois", price_cents: 600 },
                    { name: "Pakoras Légumes", price_cents: 650 }
                ]
            },
            {
                category_type: "other",
                display_label: "Indian Mains (Curries & Bowls)",
                items: [
                    { name: "Chicken Keema", price_cents: 1300, description: "Poulet haché épicé, herbes fraîches." },
                    { name: "Dal Makhani", price_cents: 1150 },
                    { name: "Butter Chicken", price_cents: 1450 },
                    { name: "Biryani Agneau", price_cents: 1500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Creative Naans (L’Audace)",
                items: [
                    { name: "Naan Camembert", price_cents: 700, description: "Fusion franco-indienne ultime." },
                    { name: "Naan Gorgonzola/Miel", price_cents: 750 },
                    { name: "Naan Garlic & Herbs", price_cents: 450 },
                    { name: "Naan Nature", price_cents: 350 }
                ]
            },
            {
                category_type: "other",
                display_label: "Sweet Treats & Lassi",
                items: [
                    { name: "Mango Lassi", price_cents: 550 },
                    { name: "Gulab Jamun (x2)", price_cents: 500 },
                    { name: "Kulfi Maison", price_cents: 600 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/track-119/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/track-119/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/track-119/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/track-119/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/track-119/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/track-119/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.8,
    description: "Niché dans le hub artistique de Track 119, Deb’s Street Food est une explosion de saveurs indo-pakistanaises. Le lieu respire la culture, mêlant street-art, musique et gastronomie sans complexes. Le clou du spectacle ? Des naans revisités avec des fromages français comme le camembert.",
    insider_tip: "Osez le Naan Gorgonzola/Miel, c’est une hérésie culinaire mais un pur délice gustatif. Accompagnez le tout d'un Mango Lassi bien onctueux pour calmer les épices du Keema.",
    expert_catchline: "La street-food indienne qui bouscule les codes rue du Chemin Vert.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Lassis Maison", "Bières Indiennes"],
        must_eat: "Cuisine française. Le Naan Camembert (l’insolite MOELLE).",
        must_drink: "Un Chai Latte épicé."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Naan Camembert (l’insolite MOELLE).",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
