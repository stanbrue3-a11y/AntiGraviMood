import { SurgicalPlace } from '../../../type-definition';

export const maison_sota: SurgicalPlace = {
    id: "poi-maison-sota",
    name: "Maison Sota Atsumi",
    slug: "maison-sota",
    category: "restaurant",
    subcategory: ['japonais'],
    location: {
        address: "3 Rue Saint-Hubert",
        arrondissement: 11,
        lat: 48.8637982,
        lng: 2.3791662,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJwc06-rBt5kcRWNPRltJQcd0"
    },
    moods: {
        chill: 50,
        festif: 10,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 19:30–21:00\njeudi: 12:30–13:30, 19:30–21:00\nvendredi: 12:30–13:30, 19:30–21:00\nsamedi: 12:30–13:30, 19:30–21:00\ndimanche: 12:30–13:30",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.maison-sota.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 165,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Vins au verre annoncés sur TheFork & Le Fooding (2024)
        wine_glass: 12.00,
        coffee_price: 5.00,
        // Estimation dish_price pour la jauge : Menu Déjeuner 65€ / 4 temps ≈ 16€, Menu 85€ / 5 ≈ 17€ → ~20€ (pondéré vers le haut pour le prestige)
        dish_price: 65.00, // VERIFIED 2025: Lunch Tasting Menu (Entry Satiety)
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menus Dégustation Gourmands",
                items: [
                    { name: "Menu Maison (Dîner 6 étapes)", price_cents: 14000 },
                    { name: "Menu Maison (Dîner 7 étapes - Mer-Sam)", price_cents: 16500 },
                    { name: "Menu Déjeuner (4 étapes)", price_cents: 6500 },
                    { name: "Menu Déjeuner (5 étapes - Jeu-Sam)", price_cents: 8500 },
                    { name: "Menu Dimanche (7 étapes)", price_cents: 16500 },
                    { name: "Accord Mets & Vins - Dîner", price_cents: 11000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Signature Sota Atsumi (Extraits)",
                items: [
                    { name: "Makis de veau, huîtres & condiment algues", price_cents: 0 },
                    { name: "Asperges blanches cuites au bois, beurre d’agrumes", price_cents: 0 },
                    { name: "Saint-Jacques de plongée, mousseline de céleri", price_cents: 0 },
                    { name: "Pigeon de Vendée, betteraves au feu de bois", price_cents: 0 },
                    { name: "Poire rôtie, glace au foin & caramel beurre salé", price_cents: 0 },
                    { name: "Tartelette au yuzu & meringue italienne", price_cents: 0 },
                    { name: "Homard bleu de casier au Bincho-tan", price_cents: 0 },
                    { name: "Oursin & sabayon au Vin Jaune", price_cents: 0 },
                    { name: "Turbot sauvage, émulsion d’arêtes perlé", price_cents: 0 },
                    { name: "Pain maison au feu de bois & Beurre fermier", price_cents: 0 },
                    { name: "Mignardises de la Maison Sota", price_cents: 0 },
                    { name: "Eau micro-filtrée", price_cents: 600 },
                    { name: "Sélection de Cafés par Sota", price_cents: 500 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-sota/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-sota/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-sota/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-sota/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-sota/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-sota/gallery_4.jpg"
    ]
  },
    instagram_handle: "maisonsota",
    verified: true,
    google_rating: 4.7,
    description: "Installé dans un loft sublimement réhabilité avec ses hauts plafonds et ses briques apparentes, Maison est le temple parisien du chef Sota Atsumi (ancien du Clown Bar). L’expérience s’articule autour d’un imposant four à bois spectaculaire placé au centre de la cuisine ouverte. La brigade y exécute une partition millimétrée, mêlant la rigueur japonaise aux plus beaux produits des terroirs français.",
    insider_tip: "• C’est la table pour célébrer un anniversaire où le budget n’est pas un problème. Le cadre est incroyablement esthétique et romantique.\n• Demandez une table avec vue sur la cuisine ouverte, l’organisation de la brigade est un spectacle hypnotisant en soi.\n• Le menu Déjeuner (Jeudi au Samedi) à 65€ ou 85€ reste l'option la plus stratégique pour découvrir cette étoile Michelin sans forcément débourser 200€ par tête.",
    expert_catchline: "Haute gastronomie nippone-française enflammée dans un loft d’exception : un sommet parisien.",
    specials: {
        cuisine: ["Japonais"],
        drinks: ["Cave stratosphérique", "Accords pointus (110€)"],
        must_eat: "Cuisine japonaise. Laissez-vous totalement guider par le Menu Maison (165€). Le pigeon et les pièces maîtresses rôtissent lentement au feu de bois devant vos yeux, tandis que le homard et l’oursin font des apparitions remarquables au rythme des saisons.",
        must_drink: "L’accord Mets & Vins avec ses 7 verres (110€) est loué par les experts pour sa précision d'orfèvre."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Laissez-vous totalement guider par le Menu Maison (165€). Le pigeon et les pièces maîtresses rôtissent lentement au feu de bois devant vos yeux, tandis que le homard et l’oursin font des apparitions remarquables au rythme des saisons.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
