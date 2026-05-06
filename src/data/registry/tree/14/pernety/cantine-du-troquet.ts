import { SurgicalPlace } from "../../../type-definition";

export const cantine_du_troquet: SurgicalPlace = {
    id: "poi-cantine-troquet-pernety-75014",
    name: "La Cantine du Troquet Pernety",
    slug: "la-cantine-du-troquet-pernety-paris-14",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "101 Rue de l’Ouest, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8341222,
        lng: 2.3159177,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJzYpmNUpw5kcR9shuTwHBx-4"
    },
    moods: {
        chill: 60,
        festif: 70,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Wednesday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Thursday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Friday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Saturday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Sunday: Closed",
        reservation_policy: "sans_resa", 
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lacantinedutroquet.com/#pernety",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 24, // MÉDIAN des plats à la carte (Couteau/Cochon/Thon/Boudin/Entrecote/Tartare/Merlu/Veau)        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Plats du Sud-Ouest",
                items: [
                    { name: "Couteaux à la Plancha, Ail et Persil", price_cents: 1800 },
                    { name: "Cochon de Lait Croustillant de chez Ospital", price_cents: 2800 },
                    { name: "Pavé de Thon Snacké, Pimientos de Padron", price_cents: 2700 },
                    { name: "Boudin Noir de Christian Parra, Purée", price_cents: 2400 },
                    { name: "Entrecôte Maturée, Frites Maison", price_cents: 3400 },
                    { name: "Tartare de Boeuf au Piment d’Espelette", price_cents: 2500 },
                    { name: "Épaule d’Agneau Confite (pour 2)", price_cents: 7200 },
                    { name: "Merlu de Ligne à l’Espagnole", price_cents: 2600 },
                    { name: "Poitrine de Veau rôtie au Romarin", price_cents: 2900 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées Canailles",
                items: [
                    { name: "Oeuf Cocotte au Jambon Ibaïama", price_cents: 1400 },
                    { name: "Terrine de Campagne Maison", price_cents: 1100 },
                    { name: "Os à Moelle à la Fleur de Sel", price_cents: 1300 },
                    { name: "Salade de Lentilles et Gésiers", price_cents: 1250 },
                    { name: "Croquettes de Cochon Maison", price_cents: 1500 },
                    { name: "Encornets sautés au Chorizo", price_cents: 1700 },
                    { name: "Asperges des Landes (en saison)", price_cents: 1600 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats de Fromages & Douceurs",
                items: [
                    { name: "Ossau-Iraty et sa Confiture de Cerises noires", price_cents: 1200 },
                    { name: "Gâteau Basque à la Crème de Christian", price_cents: 1000 },
                    { name: "Riz au Lait Onctueux au Caramel", price_cents: 950 },
                    { name: "Mousse au Chocolat pour les Gourmands", price_cents: 1100 },
                    { name: "Baba au Rhum Artisanal", price_cents: 1200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-du-troquet-pernety-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-du-troquet-pernety-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-du-troquet-pernety-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-du-troquet-pernety-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-du-troquet-pernety-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-du-troquet-pernety-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "La Cantine du Troquet Pernety est le navire amiral de Christian Etchebest dans le 14ème. C’est un lieu vibrant, bruyant, vivant, où l’on cultive l’art du bien-manger sans manières. La cuisine est celle du Sud-Ouest : franche, généreuse et techniquement impeccable. Les produits sont sourcés chez les meilleurs artisans (Ospital, Parra). On s’y installe sur de grandes tablées dans une ambiance de bistrot moderne très dynamique. C’est l'endroit rêvé pour une soirée conviviale où le partage et la bonne humeur sont les maîtres-mots.",
    insider_tip: "Ici, on ne réserve pas, donc venez tôt ou profitez de l’ambiance au bar en attendant votre table. Les couteaux à la plancha sont absolument divins, une commande obligatoire dès votre arrivée.",
    expert_catchline: "La bistronomie vibrante aux accents du Sud-Ouest.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Pauilhac", "Vins de Pays Basque", "Sélection d’Armagnacs"],
        must_eat: "Cuisine de bistrot. Le Cochon de Lait croustillant.",
        must_drink: "Un vin rouge du Pays Basque."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Le Cochon de Lait croustillant.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
