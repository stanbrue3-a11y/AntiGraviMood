import { SurgicalPlace } from '../../../type-definition';

export const goguette: SurgicalPlace = {
    id: "poi-goguette",
    name: "Goguette",
    slug: "goguette",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "108 Rue Amelot",
        arrondissement: 11,
        lat: 48.8630374,
        lng: 2.3672992,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJq3ABcfNt5kcRKH-67O0Z06k"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 19:30–23:00\nmardi: 19:30–23:00\nmercredi: 19:30–23:00\njeudi: 19:30–23:00\nvendredi: 19:30–23:00\nsamedi: 19:30–23:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.goguetteparis.fr/", // Assuming standard format
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 18, // MANUAL: Petites assiettes très travaillées (bistrot/bar à vins) de 14 à 24€ le soir
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "tasting_menu",
                display_label: "Menu Goguette (Formule Midi)",
                items: [
                    // VERIFIED: Musiam-Paris + lacarte.menu (2024-2025)
                    { name: "Menu Goguette (Plat + Dessert + Boisson fraîche)", price_cents: 2150, description: "Formule complète avec choix de plat." }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Soupes",
                items: [
                    { name: "Soupe du moment", price_cents: 650 },
                    { name: "Tarte courgette, tomate et chèvre", price_cents: 900 },
                    { name: "Salade pâtes Risoni", price_cents: 800 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    { name: "Filet de daurade, ratatouille et sauce vierge", price_cents: 1700 },
                    { name: "Suprême de volaille, pommes grenailles, jus au romarin", price_cents: 1700 },
                    { name: "Goguette Burger, sauce pickles, frites", price_cents: 1700 },
                    { name: "Poulet façon basquaise, riz pilaf", price_cents: 1700 },
                    { name: "Tortiglioni, tomate, basilic et Grana Padano", price_cents: 1500 },
                    { name: "Tarte méditerranéenne, salade verte", price_cents: 1400 }
                ]
            },
            {
                category_type: "other",
                display_label: "Accompagnements",
                items: [
                    { name: "Poêlée de légumes", price_cents: 600 },
                    { name: "Pommes frites", price_cents: 600 },
                    { name: "Petit pain nature Solène (70g)", price_cents: 80 }
                ]
            },
            {
                category_type: "other",
                display_label: "Assiettes du Soir (selon le chef)",
                items: [
                    { name: "Petites assiettes à partager (prix moyen)", price_cents: 1800, description: "Brouillades, poissons crûs, légumes de saison selon l’humeur du chef." },
                    { name: "Assiette de charcuteries et fromages", price_cents: 1600 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins Natures",
                items: [
                    { name: "Verre de vin nature (à partir de)", price_cents: 900 },
                    { name: "Bouteille de vin nature (à partir de)", price_cents: 3000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/goguette/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/goguette/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/goguette/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/goguette/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/goguette/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/goguette/gallery_4.jpg"
    ]
  },
    instagram_handle: "goguette_paris",
    verified: true,
    google_rating: 4.4,
    description: "Derrière sa discrète devanture de la rue Amelot, Goguette (mené par le chef Gianmarco Gorni, vu dans Top Chef) envoie une bistronomie délurée et percutante. Le soir, on y partage des assiettes canailles et créatives (souvent très riches en umami) au comptoir ou sur les tables hautes, en éclusant des quilles de vin nature.",
    insider_tip: "• Merveilleuse cave à vins natures, n’hésitez pas à demander conseil à l’équipe, experte en ’jus vivants’.\n• L’ambiance monte d'un cran au fil de la soirée, avec une bande-son souvent très cool (hip-hop/soul), parfait pour les petits groupes.\n• Le menu change extrêmement souvent, ne vous fiez jamais à ce que vous lisez sur internet la veille.",
    expert_catchline: "Néo-bistrot canaille et vins natures par le très créatif chef Gianmarco Gorni.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Sélection pointue de vins natures et biodynamiques"],
        must_eat: "Cuisine française. Faites confiance à l’inspiration du jour : Gianmarco Gorni a une maîtrise folle des assaisonnements et des jus corsés.",
        must_drink: "Laissez-les vous faire goûter à l’aveugle un vin orange un peu fou."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Faites confiance à l’inspiration du jour : Gianmarco Gorni a une maîtrise folle des assaisonnements et des jus corsés.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
