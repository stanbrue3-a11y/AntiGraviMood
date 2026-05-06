import { SurgicalPlace } from '../../../type-definition';

export const folderol: SurgicalPlace = {
    id: "poi-folderol",
    name: "Folderol",
    slug: "folderol",
    category: "restaurant", // Category 'restaurant' used for the gauge system even if cave/ice-cream
    subcategory: ['français'],
    location: {
        address: "10 Rue du Grand Prieuré",
        arrondissement: 11,
        lat: 48.8654, // Approx, will be refined if needed
        lng: 2.3668,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJ70bFoN9t5kcROrR-uLoEoOY"
    },
    moods: {
        chill: 90,
        festif: 30,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Mer-Dim: 16:00–23:00 (Fermé Lun-Mar)",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.folderol.fr/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 15, // MANUAL: Basé sur 2-3 boules + 1 verre de vin
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Folderol 2025 Standard (Glaces Artisanales & Vins Natures)
            {
                category_type: "other",
                display_label: "Glaces & Sorbets (Parfums Ephémères)",
                items: [
                    { name: "Boule Simple (To Go)", price_cents: 450, description: "L’unité." },
                    { name: "Boule Simple (Sur Place)", price_cents: 650, description: "Inclut le service en salle." },
                    { name: "Deux Boules (To Go)", price_cents: 800 },
                    { name: "Deux Boules (Sur Place)", price_cents: 1000 },
                    { name: "Demi-Litre à emporter", price_cents: 1600 },
                    { name: "Glace Maison Nature (Unité)", price_cents: 450 },
                    { name: "Topping Signature (Praliné, Sauce Chocolat)", price_cents: 250 }
                ]
            },
            {
                category_type: "other",
                display_label: "Cakes Glacés (Sur Commande)",
                items: [
                    { name: "Petit Gâteau Glacé (2-4 pers)", price_cents: 3800 },
                    { name: "Moyen Gâteau Glacé (5-7 pers)", price_cents: 5600 },
                    { name: "Grand Gâteau Glacé (8-10 pers)", price_cents: 7500 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins & Caves",
                items: [
                    { name: "Sélection de Vins Natures au verre", price_cents: 900, description: "Vins de vignerons indépendants, sélection tournante." },
                    { name: "Bouteille de vin au comptoir (à partir de)", price_cents: 2200 },
                    { name: "Droit de bouchon (To stay)", price_cents: 1000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/folderol/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/folderol/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/folderol/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/folderol/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/folderol/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/folderol/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.7,
    description: "Folderol est le fruit de l’union improbable mais géniale entre un glacier haut de gamme et un bar à vins naturels. Dans ce lieu épuré du 11ème, on vient autant pour une boule de glace aux parfums audacieux (huile d’olive, sésame grillé, sorbet sangria) que pour une bouteille de vin vivant dénichée par des passionnés. Un spot lifestyle incontournable où la gourmandise rencontre l’exigence du sourcing.",
    insider_tip: "• Les queues peuvent être longues le weekend, venez dès l’ouverture à 16h.\n• Testez absolument les parfums ’savonneux’ ou herbacés (Lavande, Basilic) qui sont la signature de la maison.\n• Possibilité d'acheter des gâteaux glacés entiers sur commande.",
    expert_catchline: "L’alliance parfaite entre glaces artisanales d'exception et vins naturels pointus.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Large sélection de vins vivants", "Cidres artisanaux"],
        must_eat: "Cuisine française. Le sorbet orange sanguine et jasmin, d’une élégance rare.",
        must_drink: "Un blanc de pays nantais ou un pétillant naturel pour contraster avec le sucre de la glace."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le sorbet orange sanguine et jasmin, d’une élégance rare.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
