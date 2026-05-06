import { SurgicalPlace } from '../../../type-definition';

export const au_passage: SurgicalPlace = {
    id: "poi-au-passage",
    name: "Au Passage",
    slug: "au-passage",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "1 bis Passage Saint-Sébastien",
        arrondissement: 11,
        lat: 48.8616849,
        lng: 2.3691189,
        nearest_metro: "Saint-Sébastien – Froissart",
        metro_lines: [8],
        google_id: "ChIJ2_f-6P1t5kcR2Q_cUoAudcs"
    },
    moods: {
        chill: 50,
        festif: 35,
        culturel: 15
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: Fermé\nmardi: 19:00–01:00\nmercredi: 19:00–01:00\njeudi: 19:00–01:00\nvendredi: 19:00–01:00\nsamedi: 19:00–01:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.restaurant-aupassage.fr/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        // VERIFIED: LeFooding + ParisFrivole (2024) — vins au verre dès 6€
        wine_glass: 6.00,
        coffee_price: 0,
        dish_price: 21, // MANUAL: Median des Plats Principaux (18, 24) — Tapas exclues (partage), Côte 80€/kg exclue (partage)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULE MIDI (Source: RestoAParis + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Formule Déjeuner",
                items: [
                    // VERIFIED: RestoAparis (2024) — 19.50€
                    { name: "Plat du jour", price_cents: 1950, description: "Formule midi simple et directe." }
                ]
            },
            // ═══════════════════════════════════════════
            // TAPAS DU MARCHÉ (Source: LeFooding + ParisBouge + ParisFrivole)
            // ═══════════════════════════════════════════
            {
                category_type: "sharing",
                display_label: "Tapas du Marché (Le Soir)",
                items: [
                    // VERIFIED: ParisBouge (2024) — tapas 7-14€
                    { name: "Saucisson tranché et cornichons", price_cents: 700 },
                    { name: "Rillettes maison", price_cents: 800 },
                    { name: "Anchois marinés", price_cents: 700 },
                    { name: "Tartare de thon, agrumes", price_cents: 1400 },
                    { name: "Carpaccio de rouget, chou-rave", price_cents: 1300 },
                    { name: "Poulpe à la plancha", price_cents: 1400 },
                    { name: "Parfait de foie de volaille", price_cents: 1000 },
                    { name: "Crabe, poireaux fumés", price_cents: 1400 },
                    { name: "Lotte, fenouil et pêche", price_cents: 1400 },
                    { name: "Légumes grillés de saison", price_cents: 900 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS PRINCIPAUX (Source: LeFooding + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats Principaux",
                items: [
                    // VERIFIED: LeFooding (2024) — plats plus conséquents 18-24€
                    { name: "Épaule d’agneau confite (à partager)", price_cents: 2400 },
                    { name: "Côte de bœuf (au kg, certains soirs)", price_cents: 8000, description: "Par kilo, à partager en tablée." },
                    { name: "Poisson du jour grillé", price_cents: 1800 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: RestoAParis)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Dessert du jour", price_cents: 800 },
                    { name: "Assiette de fromages affinés", price_cents: 1000 }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS D'AUTEURS — 250 RÉFÉRENCES (Source: LeFooding + Raisin + ParisFrivole)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Vins d’Auteurs (250 références)",
                items: [
                    // VERIFIED: Plusieurs sources — verres dès 6€
                    { name: "Verre de vin nature (sélection du soir)", price_cents: 600 },
                    { name: "Verre premium / cuvée rare", price_cents: 1200 },
                    { name: "Bouteille nature (à partir de)", price_cents: 2500 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-passage/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-passage/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-passage/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-passage/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-passage/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-passage/gallery_4.jpg"
    ]
  },
    instagram_handle: "aupassage_paris",
    verified: true,
    google_rating: 4.5,
    description: "Au Passage est le bar à vins et tapas culte du 11ème arrondissement, niché dans un passage piéton intime près de Saint-Sébastien. Le principe est simple : on commande des petites assiettes (tapas du marché ultra-créatives), on partage, et Jessica gère une cave de 250 vins d’auteurs natures et bio. L'ambiance est électrique le soir avec une clientèle de connaisseurs et de foodistas.",
    insider_tip: "• Pas de réservation le soir : venez tôt (dès 19h) pour avoir une place au comptoir ou une table dans le passage.\n• Commandez 3 à 4 tapas par personne pour un repas complet — les portions sont généreuses.\n• Le poulpe à la plancha (14€) et le tartare de thon (14€) sont les valeurs sûres.\n• Si vous êtes un groupe, demandez la côte de boeuf au kg (80€) qui est servie certains soirs seulement — un coup de fil en avance est conseillé.\n• Les verres de vin nature démarrent à 6€, un prix d’appel rare pour cette qualité dans le quartier.",
    expert_catchline: "Le QG nocturne du vin nature et des tapas du marché dans un passage secret du 11ème.",
    specials: {
        cuisine: ["Français"],
        drinks: ["250 vins d’auteurs natures", "Verres dès 6€", "Sélection bio et biodynamique"],
        must_eat: "Cuisine française. Les tapas changent chaque soir selon le marché. Les classiques qui reviennent souvent : le poulpe à la plancha (14€), le carpaccio de rouget au chou-rave (13€), et le parfait de foie de volaille (10€). En groupe, la côte de boeuf au kilo (80€) est un must.",
        must_drink: "La cave de 250 références natures est le nerf de guerre. Les verres du soir démarrent à 6€ — un rapport qualité-prix honnête et rare dans le 11ème."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Les tapas changent chaque soir selon le marché. Les classiques qui reviennent souvent : le poulpe à la plancha (14€), le carpaccio de rouget au chou-rave (13€), et le parfait de foie de volaille (10€). En groupe, la côte de boeuf au kilo (80€) est un must.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
