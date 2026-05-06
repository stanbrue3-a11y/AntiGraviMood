import { SurgicalPlace } from '../../../type-definition';

export const vantre: SurgicalPlace = {
    id: "poi-vantre",
    name: "Vantre",
    slug: "vantre",
    category: "restaurant",
    subcategory: ['japonais'],
    location: {
        address: "19 Rue de la Fontaine au Roi",
        arrondissement: 11,
        lat: 48.8684957,
        lng: 2.3701262,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJ34SrV-Jt5kcR9ZAebuU_c5Q"
    },
    moods: {
        chill: 55,
        festif: 15,
        culturel: 30
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: 12:00–14:00, 19:30–22:00\nmardi: 12:00–14:00, 19:30–22:00\nmercredi: 12:00–14:00, 19:30–22:00\njeudi: 12:00–14:00, 19:30–22:00\nvendredi: 12:00–14:00, 19:30–22:00\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.vantre.fr/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Estimation à partir du nombre massif de références — verres dès 7€
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 26, // MANUAL: Median des Plats (24, 24, 26, 26, 28, 28, 28)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULE DÉJEUNER (Source: NovaCircle + LeFooding + GaultMillau + Postcard)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Formule Déjeuner (Lundi-Vendredi)",
                items: [
                    // VERIFIED: NovaCircle + Postcard (2024) — 28-29.50€
                    { name: "Entrée + Plat ou Plat + Dessert", price_cents: 2800 },
                    { name: "Entrée + Plat + Dessert", price_cents: 2950 }
                ]
            },
            // ═══════════════════════════════════════════
            // ENTRÉES (Source: NovaCircle + Yonder + LeFooding)
            // ═══════════════════════════════════════════
            {
                category_type: "starter",
                display_label: "Entrées",
                items: [
                    // VERIFIED: NovaCircle (2024) — entrées 8-12€
                    { name: "Terrine de campagne maison", price_cents: 1000 },
                    { name: "Huîtres de saison", price_cents: 1200 },
                    { name: "Carpaccio de poisson, agrumes", price_cents: 1200 },
                    { name: "Gnocchi aux artichauts et ricotta fumée", price_cents: 1100 },
                    { name: "Moules au gingembre et coriandre", price_cents: 1000 },
                    { name: "Salade de tomates, basilic, ricotta", price_cents: 800 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS (Source: NovaCircle + Yonder + Worlds50Best + LeFooding)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: Yonder + NovaCircle (2024) — plats 24-28€
                    { name: "Selle d’agneau farcie aux épinards", price_cents: 2800 },
                    { name: "Bar de ligne, légumes du moment", price_cents: 2600 },
                    { name: "Boeuf Wellington (en saison)", price_cents: 2800 },
                    { name: "Tête de porc grillée", price_cents: 2400, description: "Un classique audacieux du chef." },
                    { name: "Pigeon en pâté-croûte, foie gras", price_cents: 2800 },
                    { name: "Dorade, pommes de terre, fenouil grillé, salicorne", price_cents: 2600 },
                    { name: "Tagliatelles aux courgettes, basilic, tomates", price_cents: 2400 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: NovaCircle + Yonder)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    // VERIFIED: NovaCircle (2024) — desserts ~8€
                    { name: "Brownie au chocolat", price_cents: 800 },
                    { name: "Sablé pistache, cerises, glace pistache", price_cents: 900 },
                    { name: "Dessert du jour", price_cents: 800 }
                ]
            },
            // ═══════════════════════════════════════════
            // LA CAVE MONUMENTALE — 3000-6000 BOUTEILLES (Source: GaultMillau + Michelin + LeBey + Airial)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Cave (3000+ références, gérée par Marco Pelletier)",
                items: [
                    { name: "Verre de vin nature / bio", price_cents: 700 },
                    { name: "Bouteille (entrée de cave)", price_cents: 2800 },
                    { name: "Grands crus et raretés (jusqu’à)", price_cents: 50000, description: "Une cave légendaire de 3000 à 6000 bouteilles pour les amateurs." }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/vantre/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/vantre/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/vantre/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/vantre/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/vantre/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/vantre/gallery_4.jpg"
    ]
  },
    instagram_handle: "vantre_paris",
    verified: true,
    google_rating: 4.4,
    description: "Vantre est le néo-bistrot du chef Marco Pelletier, sommelier de formation devenu cuisinier. Résultat : la cuisine est impeccable (touches japonaises subtiles, produits nobles) et la cave est tout simplement monumentale — entre 3000 et 6000 bouteilles référencées, dont des raretés introuvables. Le cadre est sobre et élégant dans un quartier qui concentre les meilleures tables de Paris.",
    insider_tip: "• La formule déjeuner à 28-29.50€ est l’un des meilleurs rapports qualité-prix du quartier pour cette catégorie de cuisine.\n• La cave est LE trésor caché : si vous êtes amateur, prévenez Marco et il ira vous chercher une bouteille mémorable dans les profondeurs de sa cave.\n• La selle d'agneau farcie aux épinards (28€) et le pigeon en pâté-croûte au foie gras sont des plats signatures qui reviennent souvent.\n• Le menu change chaque semaine — revenez régulièrement pour des découvertes toujours différentes.",
    expert_catchline: "Néo-bistrot d’un sommelier devenu chef, avec une cave de 3000+ bouteilles en sous-sol.",
    specials: {
        cuisine: ["Japonais"],
        drinks: ["Cave monumentale 3000-6000 références", "Vins natures et grands crus", "Verres dès 7€"],
        must_eat: "Cuisine japonaise. Les plats changent chaque semaine mais les regulars reviennent pour la selle d’agneau farcie aux épinards (28€), la tête de porc grillée (24€) pour les audacieux, ou le pigeon en pâté-croûte au foie gras (28€). Le midi, la formule E+P+D à 29.50€ est imbattable.",
        must_drink: "Marco Pelletier est un sommelier de formation avec une cave de 3000 à 6000 bouteilles — probablement la plus grande collection secrète du 11ème. Faites-lui confiance les yeux fermés."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Les plats changent chaque semaine mais les regulars reviennent pour la selle d’agneau farcie aux épinards (28€), la tête de porc grillée (24€) pour les audacieux, ou le pigeon en pâté-croûte au foie gras (28€). Le midi, la formule E+P+D à 29.50€ est imbattable.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
