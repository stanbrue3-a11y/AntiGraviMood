import { SurgicalPlace } from '../../../type-definition';

export const picotte: SurgicalPlace = {
    id: "poi-picotte",
    name: "Picotte",
    slug: "picotte",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "42 Rue de Malte",
        arrondissement: 11,
        lat: 48.8662365,
        lng: 2.3675038,
        nearest_metro: "République",
        metro_lines: [3, 5, 8, 9, 11],
        google_id: "ChIJgQhmfqZv5kcR1G6PhtJwf40"
    },
    moods: {
        chill: 65,
        festif: 10,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 19:00–22:00\nmercredi: 12:00–14:00, 19:00–22:00\njeudi: 12:00–14:00, 19:00–22:00\nvendredi: 12:00–14:00, 19:00–22:00\nsamedi: 12:15–14:30, 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.picotte.fr/accueil",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 28, // MANUAL: Plats à la carte généralement entre 25€ et 30€.
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus",
                items: [
                    // VERIFIED: Source TheFork (2024-2025)
                    { name: "Menu Déjeuner", price_cents: 2700, description: "La carte blanche du déjeuner (change chaque semaine)" },
                    { name: "MENU PICOTTE (E+P+D, Soir)", price_cents: 4900, description: "Menu 3 temps le soir." }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées (Tour de France)",
                items: [
                    // VERIFIED: Mises à jour récentes (2024-2025)
                    { name: "Carpaccio de Saint Jacques, chou fleur, vinaigrette capucine", price_cents: 1500 },
                    { name: "Œuf Bio Parfait, hollandaise pistache, oca du Pérou", price_cents: 1400 },
                    { name: "Endive braisée, jambon blanc maison, béchamel pain d’épice", price_cents: 1300 },
                    { name: "Toast de Morbier, beurre sapin, condiment ail noir", price_cents: 1400 },
                    { name: "Tartiflette revisitée (disque de pomme de terre, siphon reblochon)", price_cents: 1400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats (Tour de France)",
                items: [
                    // VERIFIED: Plats 25-33€
                    { name: "Longe de Porc Duroc grillée, toffailles, mousseline patate douce", price_cents: 2800 },
                    { name: "Pêche du jour rôtie (sauce vin rouge, anguille fumée, épinards)", price_cents: 2900 },
                    { name: "Cannelloni de Poireau farci aux lentilles et noix", price_cents: 2500, description: "Plat végétarien." },
                    { name: "La Bouillabaisse de Picotte (poissons rôtis, rouille, pommes de terre)", price_cents: 3300 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Flan Antillais, crème coco et goyave", price_cents: 1100 },
                    { name: "Chichi frégi, ganache chocolat noir, espuma banane", price_cents: 1200 },
                    { name: "Nonnettes de Reims", price_cents: 1100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/picotte/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/picotte/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/picotte/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/picotte/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/picotte/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/picotte/gallery_4.jpg"
    ]
  },
    instagram_handle: "picotte.paris",
    verified: true,
    google_rating: 4.7,
    description: "Un fantastique Tour de France culinaire à l’esprit bistronomique. Picotte ressuscite les grandes recettes régionales (tartiflette, bouillabaisse, pimentade antillaise, nonnettes) en leur appliquant les codes et le raffinement de la gastronomie moderne. La cheffe Marta Biagianti réussit le pari de faire de la cuisine de terroir un art subtil et contemporain.",
    insider_tip: "• La carte change très régulièrement (le midi chaque semaine, le soir 4 fois par an) selon les vraies saisons.\n• La bouillabaisse revisitée de Picotte (33€) est magistrale et ultra-digeste.\n• Le menu compet du soir (E+P+D) à 49€ offre l’expérience parfaite.\n• Il y a toujours d'excellentes options végétariennes, sans gluten ou véganes (ex: le cannelloni de poireau).",
    expert_catchline: "Le patrimoine culinaire régional français élevé au rang de bistronomie pointue et légère.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins de vignerons locaux", "Petites appellations régionales"],
        must_eat: "Cuisine française. Laissez-vous surprendre par leurs revisites de plats ultra-classiques (comme l’œuf parfait ou le toast au Morbier) : c’est là que la technique moderne de la cheffe brille le plus.",
        must_drink: "Restez dans le thème du terroir avec un verre de Vin Jaune du Jura ou un rouge de Touraine."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Laissez-vous surprendre par leurs revisites de plats ultra-classiques (comme l’œuf parfait ou le toast au Morbier) : c",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
