import { SurgicalPlace } from '../../../type-definition';

export const repaire_cartouche: SurgicalPlace = {
    id: "poi-repaire-cartouche",
    name: "Le Repaire de Cartouche",
    slug: "repaire-cartouche",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "8 Boulevard des Filles du Calvaire",
        arrondissement: 11,
        lat: 48.8617835,
        lng: 2.3662283,
        nearest_metro: "Saint-Sébastien - Froissart",
        metro_lines: [8],
        google_id: "ChIJ8_B8vHtt5kcRAmD0_bO6uS4"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:00, 19:30–22:00\nmercredi: 12:00–14:00, 19:30–22:00\njeudi: 12:00–14:00, 19:30–22:00\nvendredi: 12:00–14:00, 19:30–22:00\nsamedi: 19:30–22:00\ndimanche: 12:00–15:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/lerepairedecartouche",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 35, // Median des plats (28€ Parmentier, 35€ Veau, 45€ Lièvre)
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus",
                items: [
                    // VERIFIED: Sites & Articles 2024-2025
                    { name: "Menu Déjeuner (semaine)", price_cents: 3000 },
                    { name: "Brunch du Dimanche", price_cents: 5400, description: "Le fameux poulet rôti frites du dimanche." }
                ]
            },
            {
                category_type: "starter",
                display_label: "Spécialités de la maison (Entrées)",
                items: [
                    { name: "Pâté en croûte de Rodolphe Paquin", price_cents: 1800, description: "La légende de la maison." },
                    { name: "Terrine de boudin noir", price_cents: 1600 },
                    { name: "Terrine de lièvre (Saison)", price_cents: 1700 },
                    { name: "Pâté de campagne maison", price_cents: 1200 },
                    { name: "Salade d’oreilles de cochon", price_cents: 1500 },
                    { name: "Huîtres N°3 (les 6)", price_cents: 1800 }
                ]
            },
            {
                category_type: "main",
                display_label: "Gibiers & Viandes (Plats)",
                items: [
                    { name: "Lièvre à la Royale (en saison)", price_cents: 4500 },
                    { name: "Côte de veau de Normandie au cidre", price_cents: 3500 },
                    { name: "Parmentier de sanglier", price_cents: 2800 },
                    { name: "Gigot d’agneau rôti à l'ail en chemise", price_cents: 3200 },
                    { name: "Sole meunière poêlée au beurre", price_cents: 4200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Fromages & Desserts",
                items: [
                    { name: "Assiette de fromages affinés", price_cents: 1200 },
                    { name: "Clafoutis aux pommes", price_cents: 1000 },
                    { name: "Mousse au chocolat noir et gingembre", price_cents: 1100 },
                    { name: "Tarte Tatin maison", price_cents: 1100 },
                    { name: "Eau micro-filtrée (75cl)", price_cents: 450 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/repaire-cartouche/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/repaire-cartouche/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/repaire-cartouche/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/repaire-cartouche/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/repaire-cartouche/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/repaire-cartouche/gallery_4.jpg"
    ]
  },
    instagram_handle: "lerepairedecartouche",
    verified: true,
    google_rating: 4.3,
    description: "Une institution viandarde et giboyeuse incontournable tenue par Rodolphe Paquin. Le Repaire de Cartouche est le temple du pâté en croûte à Paris et le QG des amateurs de classicisme français ultra-généreux. Un décor de bistrot de toujours, des terrines monumentales, et des sauces au vin rouge qui collent aux lèvres.",
    insider_tip: "• Ne venez pas ici si vous n’aimez pas la viande : c’est le paradis du gibier (lièvre à la royale, grouse, biche en saison d’hiver).\n• Le pâté en croûte de Rodolphe Paquin est mythique, il DOIT figurer sur votre commande.\n• Le dimanche midi, c'est poulet rôti frites familial pour tout le monde (54€ avec le reste du menu).\n• Les portions sont homériques, prévoyez une balade digestive.",
    expert_catchline: "Le QG viandard incontesté du chef Rodolphe Paquin, temple parisien du pâté en croûte et du grand gibier.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Côte-Rôtie", "Châteauneuf-du-Pape", "Vieux millésimes de Bordeaux"],
        must_eat: "Cuisine française. La trilogie hivernale absolue : terrine en entrée, lièvre à la royale au milieu, et plateau de fromages pour terminer.",
        must_drink: "Laissez-vous faire sur un grand vin rouge classique de la vallée du Rhône pour affronter ces plats puissants."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. La trilogie hivernale absolue : terrine en entrée, lièvre à la royale au milieu, et plateau de fromages pour terminer.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
