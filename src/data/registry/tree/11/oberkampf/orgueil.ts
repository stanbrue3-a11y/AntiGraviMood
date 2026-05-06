import { SurgicalPlace } from '../../../type-definition';

export const orgueil: SurgicalPlace = {
    id: "poi-orgueil",
    name: "Orgueil",
    slug: "orgueil",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "6 Rue Popincourt",
        arrondissement: 11,
        lat: 48.8571038,
        lng: 2.3777207,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJUV-8mTht5kcRUPNTaT6O-O4"
    },
    moods: {
        chill: 50,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–00:00\nmardi: 12:00–14:30, 19:00–00:00\nmercredi: 12:00–14:30, 19:00–00:00\njeudi: 12:00–14:30, 19:00–00:00\nvendredi: 12:00–14:30, 19:00–00:30\nsamedi: 12:00–14:30, 19:00–00:30\ndimanche: 12:00–14:30, 19:00–00:00",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://bonaloi.com/fr/orgueil/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 10.00,
        coffee_price: 0,
        dish_price: 22, // MANUAL: Menu Formule Déjeuner: 22€-27€. (Speakeasy 55€/74€). A la carte sharing plates (11€-16€).
        menu_type: 'fixed',
        last_updated: "2026-03-06",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "other",
                display_label: "Bistro - Les Produits & Le Végétal",
                items: [
                    { name: "Pâté en croûte de saison", price_cents: 1300, description: "Veau, porc et fruits secs" },
                    { name: "Terrine du moment", price_cents: 1200, description: "Accompagnée de pickles" },
                    { name: "Poireaux brûlés", price_cents: 1100, description: "Sauce gribiche et noisettes" },
                    { name: "Betteraves fumées au bois", price_cents: 1200, description: "Crème de raifort et aneth" },
                    { name: "Gnocchis à la parisienne", price_cents: 1400, description: "Beurre de sauge et parmesan" }
                ]
            },
            {
                category_type: "other",
                display_label: "Bistro - Mer & Terre",
                items: [
                    { name: "Seiche à la plancha", price_cents: 1400, description: "Teriyaki, purée de pommes de terre au citron Beldi" },
                    { name: "Croquetas de porc", price_cents: 1100, description: "Sésame, cream cheese et sauce pimentée" },
                    { name: "Agneau confit de 12h", price_cents: 1600, description: "Salicorne, darphins à la noisette" },
                    { name: "Côte de boeuf (pour 2)", price_cents: 8500, description: "Sélectionnée par le boucher, frites maison" },
                    { name: "Poisson du marché au barbecue", price_cents: 2400, description: "Légumes de saison rôtis" }
                ]
            },
            {
                category_type: "other",
                display_label: "Speakeasy (Table gastronomique)",
                items: [
                    { name: "Menu Dégustation (5 temps)", price_cents: 5500, description: "Cuisine libre et instinctive du Chef Spinnler (Midi J-D / Soir L-M)" },
                    { name: "Menu Dégustation (7 temps)", price_cents: 7400, description: "Le voyage complet en immersion totale (Soir M-S)" },
                    { name: "Accord Mets & Vins (5 verres)", price_cents: 4500 },
                    { name: "Accord Mets & Spiritueux", price_cents: 5000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Gourmandises",
                items: [
                    { name: "Brownie au chocolat", price_cents: 1000, description: "Citron vert, chocolat pétillant" },
                    { name: "Tarte Tatin signature", price_cents: 1000, description: "Glace au romarin" },
                    { name: "Brioche perdue au labneh", price_cents: 900, description: "Caramel beurre salé" }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/orgueil/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/orgueil/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/orgueil/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/orgueil/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/orgueil/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/orgueil/gallery_4.jpg"
    ]
  },
    instagram_handle: "orgueil.paris",
    verified: true,
    google_rating: 4.7,
    description: "Orgueil (du groupe Bonaloi par le chef Eloi Spinnler) est un restaurant gastronomique hybride : à l’avant, une salle de ’bistro’ proposant une carte audacieuse de petites assiettes à partager. À l’arrière, dissimulé derrière les cuisines, un ’speakeasy' ultra-confidentiel proposant un menu dégustation aveugle de (très) haut vol. Un lieu double face avec une philosophie anti-gaspi radicale.",
    insider_tip: "• Réservez le ’Speakeasy’ (74€ en 7 temps) pour une soirée inoubliable caché derrière la cuisine.\n• Côté Bistro : le déjeuner à 22€/27€ est l’une des meilleures affaires du quartier.\n• L'expérience repose sur le zéro déchet : tout est recyclé, fermenté ou twisté dans les recettes.\n• Le menu change tous les trois mois pour coller au plus près des saisons.",
    expert_catchline: "Bistro zéro déchet à l’avant, speakeasy gastronomique caché à l’arrière : le double jeu d’Orgueil.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins natures", "Cocktails création", "Boissons fermentées maison"],
        must_eat: "Cuisine française. L’option Speakeasy est fascinante (dégustation surprise). En bistro, les gnocchis et les viandes confites sont travaillés avec des cuissons millimétrées.",
        must_drink: "Faites confiance à la carte des vins et aux accords sans alcool (kombuchas, jus) du chef."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. L’option Speakeasy est fascinante (dégustation surprise). En bistro, les gnocchis et les viandes confites sont travaillés avec des cuissons millimétrées.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
