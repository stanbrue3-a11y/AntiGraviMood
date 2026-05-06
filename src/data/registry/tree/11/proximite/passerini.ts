import { SurgicalPlace } from '../../../type-definition';

export const passerini: SurgicalPlace = {
    id: "poi-passerini",
    name: "Passerini",
    slug: "passerini",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "65 Rue de Charenton",
        arrondissement: 11,
        lat: 48.8504043,
        lng: 2.3739797,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJ_U67bYtt5kcRdYt9_U67bYt"
    },
    moods: {
        chill: 50,
        festif: 40,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Mer-Ven: 12:00–14:15, 19:30–22:15; Mar & Sam: 19:30–22:15; Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.passerini.paris",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 4.00,
        dish_price: 30.00, // MANUAL: Median for Pasta/Plats
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Passerini 2024-2025 (Michelin Guide)
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner (Semaine)",
                items: [
                    { name: "Entrée + Pasta", price_cents: 3400 },
                    { name: "Entrée + Pasta + Dessert", price_cents: 4200 },
                    { name: "Entrée + Main Course", price_cents: 3700 },
                    { name: "Entrée + Main Course + Dessert", price_cents: 4500 },
                    { name: "Menu Complet (E+P+M+D)", price_cents: 5200 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Antipasti (Entrées)",
                items: [
                    { name: "Trippa alla Romana", price_cents: 2200, description: "Tripes à la romaine, menthe et pecorino." },
                    { name: "Carpaccio de poisson de ligne", price_cents: 2400 },
                    { name: "Artichauts frits & crème de parmesan", price_cents: 2000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Primi (Pâtes Maison)",
                items: [
                    { name: "Tagliatelle au ragoût de canard", price_cents: 2800 },
                    { name: "Ravioli del giorno", price_cents: 3100, description: "Fait main chaque matin." },
                    { name: "Gnudi ricotta & épinards, beurre de sauge", price_cents: 2700 }
                ]
            },
            {
                category_type: "main",
                display_label: "Secondi (Plats)",
                items: [
                    { name: "Pigeon entier rôti & abats", price_cents: 3800 },
                    { name: "Poisson de roche grillé, sauce aux herbes", price_cents: 3400 },
                    { name: "Epaule d’agneau de lait (à partager)", price_cents: 8000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci",
                items: [
                    { name: "Tiramisu Passerini", price_cents: 1200 },
                    { name: "Gelato artisanal minute", price_cents: 1000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/passerini/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/passerini/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/passerini/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/passerini/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/passerini/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/passerini/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Giovanni Passerini est le maître incontesté de la cuisine italienne à Paris. Dans son restaurant épuré et lumineux du 11ème, il sublime le produit brut avec une technique de haute volée. Ses pâtes fraîches, réalisées avec précision, sont devenues une référence absolue pour les amateurs. Pas de folklore ici, juste l’Italie dans ce qu'elle a de plus élégant, moderne et sincère.",
    insider_tip: "Si les réservations au restaurant sont complètes, essayez ’Passerini & Figli’ juste à côté : c’est sa boutique de pâtes fraîches où l’on peut aussi manger sur le pouce (même si le restaurant reste l’expérience ultime).",
    expert_catchline: "Le temple de la pasta et l’élégance italienne par le maestro Giovanni Passerini.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Sélection pointue de vins italiens", "Grappa de collection"],
        must_eat: "Cuisine italienne. Les raviolis du jour, une démonstration technique et gustative.",
        must_drink: "Un Barolo ou un vin nature de Sicile."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Les raviolis du jour, une démonstration technique et gustative.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
