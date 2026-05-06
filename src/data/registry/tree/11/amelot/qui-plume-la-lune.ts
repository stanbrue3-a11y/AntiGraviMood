import { SurgicalPlace } from '../../../type-definition';

export const qui_plume_la_lune: SurgicalPlace = {
    id: "poi-qui-plume-la-lune",
    name: "Qui Plume la Lune",
    slug: "qui-plume-la-lune",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "50 Rue Amelot",
        arrondissement: 11,
        lat: 48.8590381,
        lng: 2.3684167,
        nearest_metro: "Chemin Vert",
        metro_lines: [8],
        google_id: "ChIJp4qdOP5t5kcRBK5zybICJt8"
    },
    moods: {
        chill: 60,
        festif: 5,
        culturel: 35
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:00, 19:00–21:30\nmercredi: 12:00–14:00, 19:00–21:30\njeudi: 12:00–14:00, 19:00–21:30\nvendredi: 12:00–14:00, 19:00–21:30\nsamedi: 12:00–14:00, 19:00–21:30\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "book",
            url: "http://www.quiplumelalune.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 110,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Site officiel (2024) — accords vins 3 verres 45€ → ~15€/verre
        wine_glass: 15.00,
        coffee_price: 0,
        dish_price: 45, // Plat Médian: Prix du Menu Déjeuner (Satiety Unit)
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            // ═══════════════════════════════════════════
            // MENUS DÉJEUNER (Source: site officiel + TheFork + ParisSecret)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Menu Déjeuner",
                items: [
                    // VERIFIED: Site officiel + TheFork (2024)
                    { name: "Menu Théodore (amuse-bouche + entrée-plat ou plat-dessert + mignardise)", price_cents: 4500, description: "Le menu midi accessible." }
                ]
            },
            // ═══════════════════════════════════════════
            // MENUS DÉGUSTATION (Source: site officiel quiplumelalune.fr)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Menus Dégustation (Soir)",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Menu 3 temps", price_cents: 7000, description: "Entrée, Plat, Dessert." },
                    { name: "Menu Angèle (4 plats + desserts)", price_cents: 11000, description: "Le voyage gastronomique autour du produit." },
                    { name: "Menu Lucie (5 plats + desserts)", price_cents: 15000, description: "L’expérience complète saisonnière." },
                    { name: "Menu Claude M. (produits d’exception)", price_cents: 25000, description: "Homard, truffe, caviar et pièces nobles." }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Signatures de Saison (Incluses dans les menus)",
                items: [
                    { name: "Lotte nacrée, pimiento de Piquillo & combawa", price_cents: 0 },
                    { name: "Boeuf de Charolles maturé, artichaut & jus corsé", price_cents: 0 },
                    { name: "Foie gras de canard poêlé, porto & cassis marinés", price_cents: 0 },
                    { name: "Saint-Jacques, bouillon d’herbes & cresson", price_cents: 0 },
                    { name: "Mousse chocolat sauvage & herbes folles", price_cents: 0 }
                ]
            },

            // ═══════════════════════════════════════════
            // FROMAGES & DESSERTS (Source: site officiel + TheFork)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Fromages & Desserts",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Assiette de fromages (supplément)", price_cents: 3000 },
                    { name: "Farandole de desserts (incluse dans le menu)", price_cents: 0 }
                ]
            },
            // ═══════════════════════════════════════════
            // ACCORDS METS & VINS (Source: site officiel + TheFork)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Accords Mets & Vins",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Accord 3 verres", price_cents: 4500 },
                    { name: "Accord Garance (5 verres)", price_cents: 7500 },
                    { name: "Accord Léopoldine (6 verres)", price_cents: 9000 }
                ]
            },
            // ═══════════════════════════════════════════
            // MENU ENFANT
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Menu Enfant",
                items: [
                    { name: "Menu Enfant (moins de 10 ans)", price_cents: 3500 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/qui-plume-la-lune/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/qui-plume-la-lune/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/qui-plume-la-lune/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/qui-plume-la-lune/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/qui-plume-la-lune/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/qui-plume-la-lune/gallery_4.jpg"
    ]
  },
    instagram_handle: "quiplumelalune",
    michelin_stars: 1,
    verified: true,
    google_rating: 4.6,
    description: "Qui Plume la Lune est un restaurant étoilé au Guide Michelin niché dans une rue discrète du 11ème. Le chef compose des menus surprises autour de produits d’exception — Saint-Jacques, homard breton, cerf, agneau de lait des Pyrénées — dans un cadre intime et feutré. Pas de carte : on se laisse porter par les menus dégustation, du midi accessible (45€) au somptueux Menu Claude M. (250€).",
    insider_tip: "• Le Menu Théodore à 45€ le midi est le prix d’entrée le plus accessible pour un étoilé Michelin dans le 11ème — c’est un deal rare.\n• Il n’y a PAS de carte à la carte : tous les menus sont des parcours surprise du chef.\n• L’accord mets et vins en 3 verres (45€) est recommandé — le sommelier est excellent.\n• Le Menu Claude M. à 250€ est réservé aux grandes occasions — uniquement des produits d’exception (homard, truffe, etc.).\n• La réservation est OBLIGATOIRE, surtout le week-end.",
    expert_catchline: "L’étoilé Michelin secret du 11ème : menus surprise du chef et produits d'exception dès 45€.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Accords mets-vins 3 à 6 verres", "Sommelière experte", "Cave classique raffinée"],
        must_eat: "Cuisine française. Pas de choix : on se laisse porter. Le Menu Angèle (90€, 4 temps) est le sweet spot entre ambition culinaire et budget. Le Menu Théodore (45€) est parfait pour un premier essai au déjeuner.",
        must_drink: "L’accord Garance en 5 verres (75€) est la meilleure façon de profiter du repas — la sommelière ajuste les accords à chaque plat surprise."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Pas de choix : on se laisse porter. Le Menu Angèle (90€, 4 temps) est le sweet spot entre ambition culinaire et budget. Le Menu Théodore (45€) est parfait pour un premier essai au déjeuner.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
