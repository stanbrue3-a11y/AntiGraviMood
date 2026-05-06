import { SurgicalPlace } from '../../../type-definition';

export const magma: SurgicalPlace = {
    id: "poi-magma",
    name: "Magma",
    slug: "magma",
    category: "restaurant",
    subcategory: ['bistronomie', 'français'],
    location: {
        address: "9 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.865523,
        lng: 2.368512,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJnx3AVi1v5kcRegkMkjuBFa8"
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–22:30 (Fermé Dim-Lun)",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://restaurantmagma.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 120, // Based on dinner tasting menu
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 4.50,
        dish_price: 80, // MANUAL: Prix du menu dégustation 6 temps
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Magma 2025 Standard (Fixed Tasting Menu)
            {
                category_type: "other",
                display_label: "Lunch Formulas (Midi)",
                items: [
                    { name: "Menu Déjeuner (3 temps) - Semaine", price_cents: 3800, description: "Entrée, Plat, Dessert selon arrivage." },
                    { name: "Menu Déjeuner (3 temps) - Weekend", price_cents: 5000 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Dinner Tasting Menus (Soir)",
                items: [
                    { name: "Menu Dégustation (6 temps)", price_cents: 8000, description: "L’essentiel de la vision de Ryuya Ono." },
                    { name: "Menu Dégustation (9 temps)", price_cents: 12000, description: "L’expérience Magma complète." },
                    { name: "Accords Mets & Vins (9 temps)", price_cents: 9000 },
                    { name: "Accords Mets & Sakés (9 temps)", price_cents: 7000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Inspirations (Séquences Ryuya Ono)",
                items: [
                    { name: "Abalone & Oreille de cochon", price_cents: 0, description: "Fenouil, chanterelles, sauce thé vert (Signature)." },
                    { name: "Truite marinée & champignons de Paris", price_cents: 0 },
                    { name: "Lieu jaune de ligne au Bincho-tan", price_cents: 0 },
                    { name: "Omble chevalier fumé, bouillon dashi", price_cents: 0 },
                    { name: "Quasi de veau de lait, réglisse & blettes", price_cents: 0 },
                    { name: "Pigeon fermier rôti sur le coffre", price_cents: 0 },
                    { name: "Meringue aux tomates cerises & sorbet pêche", price_cents: 0 },
                    { name: "Chocolat Tonka, sablé noisette & glace sésame", price_cents: 0 },
                    { name: "Mont-Blanc crèmeux au goût de courge", price_cents: 0 },
                    { name: "Eau micro-filtrée", price_cents: 0 },
                    { name: "Mignardises de fin de repas", price_cents: 0 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/magma/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/magma/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/magma/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/magma/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/magma/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/magma/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.6,
    description: "Le chef Ryuya Ono livre une partition d’une justesse rare. Magma est un laboratoire où la technique française s'efface devant la pureté japonaise du produit. Une cuisine anti-gaspi, agile et émouvante, servie dans un cadre intimiste.",
    insider_tip: "L’ormeau (abalone) à l’oreille de cochon est le plat signature à ne pas manquer si disponible. L’accord saké est particulièrement bien pensé et apporte une dimension supplémentaire aux plats de mer.",
    expert_catchline: "La rigueur japonaise rencontre le terroir français dans un magma d’émotions.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Sake Pairing", "Vins Vivants"],
        must_eat: "Cuisine française. Le menu 9 temps pour saisir toute la palette du chef.",
        must_drink: "Un accord saké pointu."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le menu 9 temps pour saisir toute la palette du chef.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
