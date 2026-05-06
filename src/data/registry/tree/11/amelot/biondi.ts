import { SurgicalPlace } from '../../../type-definition';

export const biondi: SurgicalPlace = {
    id: "poi-biondi",
    name: "Biondi",
    slug: "biondi",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "118 Rue Amelot",
        arrondissement: 11,
        lat: 48.8638315,
        lng: 2.3671144,
        nearest_metro: "Filles du Calvaire",
        metro_lines: [8],
        google_id: "ChIJsRa6hQdu5kcRjccVObllC1Q"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–23:00\nmardi: 12:00–14:30, 19:00–23:00\nmercredi: 12:00–14:30, 19:00–23:00\njeudi: 12:00–14:30, 19:00–23:00\nvendredi: 12:00–14:30, 19:00–23:00\nsamedi: 12:00–14:30, 19:00–23:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.biondi-restaurant.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.00,
        dish_price: 40, // Median Plats+Viandes: 28-44€ plats, 32-45€ viandes individuelles
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Formule Déjeuner (Semaine)", price_cents: 2350, description: "Entrée, plat et dessert." },
                    { name: "Formule Déjeuner (Samedi)", price_cents: 2750, description: "Menu du samedi midi." }
                ]
            },
            {
                category_type: "starter",
                display_label: "Les Entrées à Partager",
                items: [
                    { name: "Croquetas de jambon Iberico, mayo aïoli", price_cents: 1400 },
                    { name: "Empanadas de Lomo, pousses de salade, jus de viande", price_cents: 1400 },
                    { name: "Ceviche de maigre de ligne, avocat, maïs toasté", price_cents: 1700 },
                    { name: "Jambon de bœuf mature Holstein, crème agrumes", price_cents: 1800 },
                    { name: "Poulpe à la braise, chou fleur, mayo kalamata, citron vert", price_cents: 1800 },
                    { name: "Empanadas de fromage Beaufort, épinards", price_cents: 1800 },
                    { name: "Asperges blanches, œuf mollet, mousse de chorizo", price_cents: 2000 },
                    { name: "Empanadas de carne (bœuf), agua de tomate", price_cents: 2000 },
                    { name: "Carpaccio de Wagyu, mousse parmesan, câpres frits", price_cents: 2000 },
                    { name: "Ris de veau à la braise, girolles, truffe", price_cents: 2000 },
                    { name: "Os à moelle, viande confite, brioche", price_cents: 2300 },
                    { name: "Ceviche de thon rouge, crème avocat, grenade", price_cents: 2500 },
                    { name: "Jambon ibérique bellota bellota", price_cents: 2800 },
                    { name: "Foie gras mi-cuit, coulis de betterave, figues, fruits rouges", price_cents: 3600 },
                    { name: "Caviar Osciètre 50gr (Kaviari), blinis, crème crue", price_cents: 9500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats & Suggestions du Chef",
                items: [
                    { name: "Maigre à la plancha, chou kale, émulsion raifort", price_cents: 2800 },
                    { name: "Volaille croustillante, déclinaison de céleri, foie gras", price_cents: 2800 },
                    { name: "Bar à la plancha, pak choi, girolles, émulsion d’ail", price_cents: 3000 },
                    { name: "Milanesa de filet bœuf Angus, mayo chipotle", price_cents: 4000 },
                    { name: "Volaille croustillante, grenailles, champignons de bois, vin jaune", price_cents: 4000 },
                    { name: "Turbot à la plancha, crème champagne et caviar", price_cents: 4400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Viandes d’Exception à la Braise (Argentine)",
                items: [
                    { name: "Hampe de bœuf (Angus)", price_cents: 3200 },
                    { name: "Churrasco de las Pampas (Entrecôte)", price_cents: 3300 },
                    { name: "Faux filet (Angus)", price_cents: 3600 },
                    { name: "Churrasco de las Pampas (Entrecôte Angus Premium)", price_cents: 3900 },
                    { name: "Bife de lomo (Filet bœuf Angus)", price_cents: 4500 },
                    { name: "Double entrecôte (Holstein) à partager", price_cents: 7500 },
                    { name: "Côte de bœuf à la braise maturée 4 sem. (Pour 2)", price_cents: 9500 },
                    { name: "Côte de bœuf complète sélection (Holstein) maturée 4 sem.", price_cents: 12500 },
                    { name: "Côte de bœuf (Kød) maturée 5 semaines", price_cents: 13500 },
                    { name: "Côte de bœuf Galice maturée 8 semaines", price_cents: 15500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Les Desserts & Fromages",
                items: [
                    { name: "Choco cacao, crumble", price_cents: 800 },
                    { name: "Déclinaison de dulce de leche, tuile à l’orange", price_cents: 900 },
                    { name: "Sélection de fromages fermiers de Cyril Hardouin", price_cents: 1500 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/biondi/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/biondi/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/biondi/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/biondi/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/biondi/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/biondi/gallery_4.jpg"
    ]
  },
    instagram_handle: "biondi_paris",
    verified: true,
    google_rating: 4.4,
    description: "Le temple parisien de l’Asado argentin. Au Biondi, le chef Fernando de Tomaso maîtrise le feu comme personne, cuisant à la braise des pièces de bœuf d'exception rigoureusement sourcées et maturées, de la Galice au Holstein, dans une salle brute aux allures de hacienda chaleureuse.",
    insider_tip: "• C’est le rendez-vous des très gros viandards : venez à plusieurs pour faire honneur aux Côtes de Bœuf maturées 8 semaines à partager.\n• L’expérience du midi est redoutable financièrement (Menu à 23,50€ pour Entrée/Plat/Dessert) et permet de goûter la qualité d’exécution à bas coût.\n• L'odeur de feu de bois embaume la salle, une vraie marque de fabrique.",
    expert_catchline: "Haute couture viandarde et maîtrise absolue du feu argentin. Le paradis carnivore.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Malbecs pulpeux d’Argentine"],
        must_eat: "Cuisine française. L’Empanada de carne en entrée obligatoire, pour s’échauffer avant d’attaquer les fantastiques pièces de viande à la braise.",
        must_drink: "Un Malbec argentin tannique et épicé, la seule règle valable pour affronter la côte de bœuf de Galice."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. L’Empanada de carne en entrée obligatoire, pour s’échauffer avant d’attaquer les fantastiques pièces de viande à la braise.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
