import { SurgicalPlace } from '../../../type-definition';

export const pianovins: SurgicalPlace = {
    id: "poi-pianovins",
    name: "Pianovins",
    slug: "pianovins",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "46 Rue Trousseau",
        arrondissement: 11,
        lat: 48.8523649,
        lng: 2.379242,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJp8ypkghy5kcRB-RvBC7_Lp8"
    },
    moods: {
        chill: 70,
        festif: 0,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:30–14:00, 19:30–22:00\nmercredi: 12:30–14:00, 19:30–22:00\njeudi: 12:30–14:00, 19:30–22:00\nvendredi: 12:30–14:00, 19:30–22:00\nsamedi: 12:30–14:00, 19:30–22:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.pianovins.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 90,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 0,
        dish_price: 35.00, // Menu Marché (Déjeuner)
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "drink",
                display_label: "L’Expérience Pianovins (Déjeuner)",
                items: [
                    // VERIFIED: Emmanuel Sudres 2024-2025
                    { name: "Menu Déjeuner ’Le Marché' (3 temps)", price_cents: 3500, description: "Entrée, Plat, Dessert selon l’inspiration du jour et les arrivages du marché." },
                    { name: "Accords Mets & Vins Déjeuner (2 verres)", price_cents: 2200 }
                ]
            },
            {
                category_type: "other",
                display_label: "L’Immersion Gastronomique (Dîner)",
                items: [
                    { name: "Menu ’Pianovins' en 5 services", price_cents: 7500, description: "Menu Dégustation à l’aveugle, l'évolution gastronomique complète." },
                    { name: "Menu ’Grande Balade' en 8 services", price_cents: 9500, description: "Le voyage ultime en 8 étapes (selon disponibilité)." },
                    { name: "Accords Mets & Vins Dîner (5 verres)", price_cents: 4500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Inspirations & Signatures (Exemples 2025)",
                items: [
                    { name: "Soupe de patate douce, huile de café & cardamome", price_cents: 0, description: "Un classique de la douceur pianique." },
                    { name: "Œuf parfait, racine de cerfeuil tubéreux & noisettes", price_cents: 0 },
                    { name: "Carpaccio de Saint-Jacques, émulsion gingembre-citronnelle", price_cents: 0 },
                    { name: "Lieu jaune de ligne, heliantis et salicorne", price_cents: 0 },
                    { name: "Filet de canette, purée de panais, jus corsé au miel", price_cents: 0 },
                    { name: "Carré de porc de montagne, oignon rouge confit", price_cents: 0 },
                    { name: "Saint-Nectaire fermier affiné, confiture de vieux garçon", price_cents: 0 },
                    { name: "Clementine en textures, sorbet thym-citron", price_cents: 0 },
                    { name: "Ganache chocolat grand cru, sarrasin grillé", price_cents: 0 },
                    { name: "Mise en bouche du moment", price_cents: 0 },
                    { name: "Beurre de baratte Jean-Yves Bordier", price_cents: 0 },
                    { name: "Pain artisanal de la boulangerie voisine", price_cents: 0 },
                    { name: "Palette de mignardises", price_cents: 0 },
                    { name: "Eau micro-filtrée (Castalie)", price_cents: 0 }
                ]
            },
            {
                category_type: "drink",
                display_label: "La Sélection Cave Pointue",
                items: [
                    { name: "Verre de vin (Sélection Eric Mancio)", price_cents: 1200 },
                    { name: "Coupe de Champagne (Maison sélectionnée)", price_cents: 1600 },
                    { name: "Verre de vin blanc ’Cuvée d’Exception’", price_cents: 1500 },
                    { name: "Café de spécialité & mignardises", price_cents: 700 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pianovins/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pianovins/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pianovins/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pianovins/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pianovins/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pianovins/gallery_4.jpg"
    ]
  },
    instagram_handle: "pianovinsparis",
    verified: true,
    google_rating: 4.8,
    description: "Une des plus grandes petites tables du quartier, dirigée par Michel Roncière en cuisine et Éric Mancio en salle (deux anciens de l’empire Guy Savoy). À l’écart des grandes artères, le duo exécute un récital gastronomique brillantissime et très technique au sein d’une salle sobre, sans jamais se prendre au sérieux.",
    insider_tip: "• C’est la table parfaite pour une expérience hautement gastronomique (carrément digne de l’étoffe d’un étoilé) sans subir la lourdeur des protocoles mondains.\n• Excellent rapport qualité-prix au déjeuner avec une formule bluffante à 35€.\n• La salle est très contenue, réservation fortement recommandée.",
    expert_catchline: "Haute volée gastronomique discrète par d’anciens cadres de chez Guy Savoy. Dressages bijoux.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Large sélection de vins de propriétaires"],
        must_eat: "Cuisine française. Laissez-vous guider par le Menu à 75€, chaque séquence est un choc de textures souvent très justement dosé.",
        must_drink: "Signalez vos préférences à Éric, l’ancien sommelier de Guy Savoy a le don d'ouvrir les bonnes quilles pour faire chanter les assiettes."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Laissez-vous guider par le Menu à 75€, chaque séquence est un choc de textures souvent très justement dosé.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
