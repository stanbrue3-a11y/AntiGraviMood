import { SurgicalPlace } from '../../../type-definition';

export const martin: SurgicalPlace = {
    id: "poi-martin",
    name: "Martin (Boire et Manger)",
    slug: "martin-boire-manger",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "24 Bd du Temple",
        arrondissement: 11,
        lat: 48.8655, // Approx
        lng: 2.3653,
        nearest_metro: "Filles du Calvaire",
        metro_lines: [8],
        google_id: "ChIJjxJBwQdu5kcRq6Qu598M5Gk"
    },
    moods: {
        chill: 50,
        festif: 80,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 16:00–02:00 (Fermé Dim-Lun)",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.luckymiam.com/martin-boire-et-manger/", // Best available link
            label: "INFOS"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 7.50,
        coffee_price: 0,
        dish_price: 22.00, // Satiety Unit: Standard Tapas Bar (3 plates)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Martin Boire et Manger 2024-2025 (Petites assiettes & Vins)
            {
                category_type: "sharing",
                display_label: "Grignotages & Charcuteries",
                items: [
                    { name: "Olives de Kalamata", price_cents: 500 },
                    { name: "Saucisson de la Maison Montalet", price_cents: 900 },
                    { name: "Pain & Beurre demi-sel", price_cents: 400 },
                    { name: "Terrine Maison", price_cents: 1100 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Assiettes à Partager (Selon Saison)",
                items: [
                    { name: "Huîtres n°3 (x6)", price_cents: 1800 },
                    { name: "Burrata, huile de basilic, tomates cerises", price_cents: 1400 },
                    { name: "Croquettes de morue & aïoli", price_cents: 1200 },
                    { name: "Poireaux vinaigrette & noisettes torréfiées", price_cents: 1000 },
                    { name: "Gambas snackées au piment d’Espelette", price_cents: 1600 },
                    { name: "Abats du jour (Cœur de canard ou Ris de veau)", price_cents: 1500 },
                    { name: "Tataki de bœuf, sauce soja & sésame", price_cents: 1700 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs",
                items: [
                    { name: "Mousse au chocolat & fleur de sel", price_cents: 800 },
                    { name: "Plateau de fromages affinés", price_cents: 1400 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/martin-boire-manger/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/martin-boire-manger/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/martin-boire-manger/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/martin-boire-manger/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/martin-boire-manger/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/martin-boire-manger/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.6,
    description: "Martin est le repaire par excellence des amateurs de bons vivants au Boulevard du Temple. Dans un décor de bistrot parisien authentique avec son comptoir zinc et ses ardoises manuscrites, on y sert une cuisine de partage vibrante : produits de terroir, abats parfaitement cuisinés et assiettes créatives. L’ambiance y est électrique, portée par une sélection de vins naturels qui ne déçoit jamais.",
    insider_tip: "• Venir tôt (avant 19h30) pour s’assurer une place au comptoir, l’endroit est souvent pris d’assaut.\n• Les abats (cœurs de volaille, pieds de cochon) sont ici d'une finesse exemplaire, même pour les non-initiés.\n• Ne manquez pas leur célèbre terrine maison.",
    expert_catchline: "L’âme festive et gourmande du bistrot parisien moderne, entre petites assiettes et vins vivants.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Large sélection de vins naturels", "Bières artisanales au fût"],
        must_eat: "Cuisine de bistrot. Les croquettes de morue à l’aïoli, croustillantes et généreuses.",
        must_drink: "Un vin orange macéré pour accompagner les assiettes de légumes ou les fromages."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Les croquettes de morue à l’aïoli, croustillantes et généreuses.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
