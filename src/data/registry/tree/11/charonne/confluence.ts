import { SurgicalPlace } from '../../../type-definition';

export const confluence: SurgicalPlace = {
    id: "poi-confluence",
    name: "Confluence",
    slug: "confluence",
    category: "restaurant",
    subcategory: ['bistronomie', 'français'],
    location: {
        address: "79 Rue de Charonne",
        arrondissement: 11,
        lat: 48.853243,
        lng: 2.381254,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJ-8eXUxtz5kcR8qhr1b31dXk"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–22:30 (Fermé Dim-Lun)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://confluence-restaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 8, // Estimé craft
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 24, // MANUAL: Median des plats (Tom Cakod/Scallops)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Confluence 2025 Standard (French-Asian Fusion)
            {
                category_type: "starter",
                display_label: "Entrées (Small Plates / Starters)",
                items: [
                    { name: "Crème de pois chiches & coco", price_cents: 1200, description: "Poitrine de porc croustillante, salade d’agrumes, pickles." },
                    { name: "Nems de Saucisse Moto", price_cents: 1400, description: "Crème au bleu, salade croquante, pickles maison." },
                    { name: "Ceviche de bar au calamansi", price_cents: 1600 },
                    { name: "Carpaccio de bœuf façon Shabu-Shabu", price_cents: 1500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Signatures (Main Courses)",
                items: [
                    { name: "Cabillaud Tom Cakod", price_cents: 2400, description: "Lait de coco, galanga, riz gluant, emulsion coco." },
                    { name: "Noix de Saint-Jacques au beurre pistache", price_cents: 2800, description: "Emulsion légumes, tempura de chou-fleur." },
                    { name: "Côte d’Agneau Shashu", price_cents: 3200, description: "Croûte pistache/herbes, purée patate douce violette." },
                    { name: "Risotto d’épeautre aux champignons Shiitaké", price_cents: 2200 },
                    { name: "Plat du jour (Midi)", price_cents: 1900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Créatifs",
                items: [
                    { name: "Poire pochée Citronnelle", price_cents: 1000, description: "Servie avec crumble croquant." },
                    { name: "Riz Gluant Coco & Ananas rôtis", price_cents: 1200 },
                    { name: "Gâteau Chocolat & Gingembre confit", price_cents: 1100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/confluence/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/confluence/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/confluence/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/confluence/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/confluence/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/confluence/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.9,
    description: "Une prouesse de fusion par le chef Hung Luan Nguyen. Confluence mêle la finesse de la gastronomie française aux saveurs vibrantes de l’Asie (Vietnam, Thaïlande). Le dressage est aussi précis que les goûts sont justes.",
    insider_tip: "Le Cabillaud Tom Cakod est le plat qui définit le lieu : un équilibre parfait entre l’onctuosité de la coco et le peps du galanga. Réservez une table près de la cuisine pour voir le ballet du chef.",
    expert_catchline: "L’Asie et la France en parfaite harmonie rue de Charonne.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Sélection de vins nature", "Thés asiatiques premium"],
        must_eat: "Cuisine française. Le Cabillaud Tom Cakod à l’émulsion de coco.",
        must_drink: "Un vin blanc minéral de la Loire pour accompagner les Saint-Jacques."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Cabillaud Tom Cakod à l’émulsion de coco.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
