import { SurgicalPlace } from '../../../type-definition';

export const moonshiner: SurgicalPlace = {
    id: "poi-moonshiner",
    name: "Moonshiner",
    slug: "moonshiner",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "5 Rue Sedaine",
        arrondissement: 11,
        lat: 48.8556969,
        lng: 2.3712084,
        nearest_metro: "Bréguet-Sabin",
        metro_lines: [5],
        google_id: "ChIJdT6AoABy5kcR6p_Abkvrr6I"
    },
    moods: {
        chill: 50,
        festif: 50,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 18:00–02:00\nmardi: 18:00–02:00\nmercredi: 18:00–02:00\njeudi: 18:00–02:00\nvendredi: 18:00–02:30\nsamedi: 18:00–02:30\ndimanche: 18:00–02:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: false,
        main_action: {
            type: "site",
            url: "https://moonshinerbar.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 6.00,
        wine_glass: 0,
        coffee_price: 0,
        dish_price: 14, // MANUAL: Cocktails en moyenne à 13-14€
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "drink",
                display_label: "Les Cocktails Signatures ’Terroirs de France' (Saison 2025)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Menu Itinéraire
                    { name: "Bœuf bourguignon (Cocktail Signature)", price_cents: 1400, description: "Inspiré des terroirs français, étonnant et salin, une balade gourmande." },
                    { name: "Saté (Création épicée)", price_cents: 1400, description: "Notes de cacahuète grillée et de piment léger." },
                    { name: "Cidre & Genièvre", price_cents: 1400, description: "Notes herbacées, fraîches et pétillantes, l’hommage au Nord." },
                    { name: "Truffe & Noisette", price_cents: 1500, description: "Un cocktail opulent et terreux." },
                    { name: "Mirabelle & Sapin", price_cents: 1400, description: "L’itinéraire Lorrain, forestier et fruité." },
                    { name: "Herbiers des Alpes", price_cents: 1400 },
                    { name: "Punch du jour (Saison)", price_cents: 600, description: "L’option la moins chère pour bien démarrer, toujours frais." }
                ]
            },
            {
                category_type: "other",
                display_label: "Les Barrel-Aged & Classiques Modernes",
                items: [
                    { name: "Vieux Carré (Barrel-Aged)", price_cents: 1300, description: "Un grand classique américain de Rye et Cognac, vieilli en fût par nos soins." },
                    { name: "Negroni vieilli en fût de chêne", price_cents: 1300 },
                    { name: "Boulevardier Signature", price_cents: 1200 },
                    { name: "Old Fashioned sur mesure (Bourbon ou Rye)", price_cents: 1200 },
                    { name: "Smokey Island (Islay Whisky based)", price_cents: 1400 },
                    { name: "Moscow Mule Ginger maison", price_cents: 1200 },
                    { name: "Cocktail Classique au choix (Demande au bartender)", price_cents: 1200 }
                ]
            },
            {
                category_type: "other",
                display_label: "L’Univers du Whisky (85+ Références)",
                items: [
                    { name: "Sélection de Bourbons (Verre, à partir de)", price_cents: 1200 },
                    { name: "Sélection de Scotch Single Malt (à partir de)", price_cents: 1400 },
                    { name: "Whiskies Japonais (à partir de)", price_cents: 1600 },
                    { name: "Lagavulin 16 ans", price_cents: 1800 },
                    { name: "Nikka from the Barrel", price_cents: 1500 },
                    { name: "Hibiki Harmony", price_cents: 1900 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Bières, Vins & Snacks Pizzeria",
                items: [
                    { name: "Pinte de Bière Pression Lager", price_cents: 600 },
                    { name: "IPA Artisanale (33cl)", price_cents: 800 },
                    { name: "Verre de vin (Sélection ardoise)", price_cents: 700 },
                    { name: "Cidre Bouteille Artisanal", price_cents: 700 },
                    { name: "Pizza Da Vito (Au restaurant avant d’entrer)", price_cents: 1400, description: "La Margarita classique de Da Vito." },
                    { name: "Planche de charcuterie italienne", price_cents: 1600 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/moonshiner/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/moonshiner/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/moonshiner/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/moonshiner/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/moonshiner/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/moonshiner/gallery_4.jpg"
    ]
  },
    instagram_handle: "moonshiner_paris",
    verified: true,
    google_rating: 4.5,
    description: "Le bar pionnier du phénomène Speakeasy à Paris (il faut traverser la chambre froide de la pizzeria « Da Vito » pour l’atteindre). Mobilier années 20, tapisseries fleuries, lumières tamisées et jazz feutré accompagnent une immense sélection de whiskys.",
    insider_tip: "• Pénétrez dans la pizzeria Da Vito (juste à l’adresse), allez au fond vers la chambre froide et ouvrez la grande lourde porte métallique.\n• Ne vous arrêtez pas aux cocktails simples (14€), ils offrent plus de 85 références de Whisky exceptionnelles.\n• L'endroit propose aussi un coffre-fort caché. Serez-vous le trouver et craquer le digicode ?",
    expert_catchline: "Entrez dans la pizzeria Da Vito, poussez la porte de la chambre froide. C’est ici.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Cocktails Barrel-aged", "Collection de Whiskys (85+)"],
        must_eat: "Cuisine de bistrot. Prenez une pointe de pizza Marguerita juste à l’entrée chez Da Vito avant de plonger dans l’obscurité !",
        must_drink: "Tout cocktail mis en vieillissement en fût de chêne (Barrel-Aged, comme leur majestueux Vieux Carré)."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Prenez une pointe de pizza Marguerita juste à l’entrée chez Da Vito avant de plonger dans l",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
