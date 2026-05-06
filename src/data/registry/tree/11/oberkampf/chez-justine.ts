import { SurgicalPlace } from '../../../type-definition';

export const chez_justine: SurgicalPlace = {
    id: "poi-chez-justine",
    name: "Chez Justine",
    slug: "chez-justine",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "96 Rue Oberkampf",
        arrondissement: 11,
        lat: 48.8656532,
        lng: 2.3778495,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJ2al2S-Vt5kcRcfurdLIB4DA"
    },
    moods: {
        chill: 50,
        festif: 50,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 10:00–23:30\nmardi: 10:00–23:30\nmercredi: 10:00–23:30\njeudi: 10:00–23:30\nvendredi: 10:00–01:00\nsamedi: 10:00–01:00\ndimanche: 10:00–23:30",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://justineparis.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 7.00,
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 16, // MANUAL: Average price of their signature Pizzas (15-18€)
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner (En semaine)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Formule Midi (Entrée/Plat ou Plat/Dessert)", price_cents: 1600, description: "Formule abordable évoluant selon l’humeur du chef." },
                    { name: "La Formule Brunch Animé (Week-end seul)", price_cents: 2500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Grandes Salades & Burgers (Le Midi)",
                items: [
                    { name: "Burger Maison (Classique ou Végétarien), frites", price_cents: 1600 },
                    { name: "Cheeseburger Double Smash", price_cents: 1900 },
                    { name: "Salades / Bowls Fraîcheurs du moment", price_cents: 1500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Viandes au Pur Brasero",
                items: [
                    { name: "Planche de Charcuteries Artisanales", price_cents: 1100 },
                    { name: "Poulpe grillé au feu de bois", price_cents: 2400 },
                    { name: "Magret de Canard fumé", price_cents: 1800 },
                    { name: "Côte de bœuf cuite à la braise (Pour 2)", price_cents: 7500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Pizzas au Feu de Bois",
                items: [
                    { name: "Marinara (Sauce tomate, ail, origan, basilic)", price_cents: 1100 },
                    { name: "Margherita D.O.P", price_cents: 1300 },
                    { name: "Napoli (Anchois, tomates, mozzarella)", price_cents: 1500 },
                    { name: "Tonnara (Thon, oignons rouges)", price_cents: 1500 },
                    { name: "Brooklyn (Pepperoni)", price_cents: 1600 },
                    { name: "Prosciutto et Funghi", price_cents: 1600 },
                    { name: "Vegetariana", price_cents: 1600 },
                    { name: "Tripletta (Piquante & Charcuterie)", price_cents: 1700 },
                    { name: "Justine (Signature Maison)", price_cents: 1700 },
                    { name: "Tartufo Carciofi (Truffe et Artichaut)", price_cents: 1800 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Boissons",
                items: [
                    { name: "Dessert signature du moment", price_cents: 800 },
                    { name: "Cocktail Happy Hour", price_cents: 700 },
                    { name: "Pinte de Bière Pression", price_cents: 700 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-justine/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-justine/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-justine/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-justine/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-justine/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-justine/gallery_4.jpg"
    ]
  },
    instagram_handle: "chezjustineparis",
    verified: true,
    google_rating: 4.4,
    description: "La pierre angulaire de la rue Oberkampf. À la fois néo-brasserie de quartier avec ses grandes tablées et ses viandes rôties au feu de bois, bar festif en fin de soirée, et surtout, redoutable pizzeria napolitaine à demeure.",
    insider_tip: "• Les vendredis et samedis soir, c’est blindé et l’ambiance bascule en mode Before festif (jusqu’à 1h du matin).\n• Le midi, leur formule dej' à 16€ est une des affaires les plus solides du quartier Oberkampf.\n• Visez une pizza, elles sont étonnamment excellentes pour une brasserie généraliste, cuites dans un grand four à bois apparent.",
    expert_catchline: "Néo-brasserie au mix audacieux : viandes à la braise, DJ sets en fin de semaine et gigantesques pizzas napolitaines.",
    specials: {
        cuisine: ["Pizzeria"],
        drinks: ["Pinte de bière artisanale", "Spritz"],
        must_eat: "Cuisine italienne (Pizzeria). Une honnête Pizza Brooklyn (Pepperoni, fior di latte) ou, si vous êtes nombreux, réclamez la côte de bœuf saisie à la flamme.",
        must_drink: "Pinte de blonde au coude-à-coude sur les grandes tablées en bois brut."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne (Pizzeria). Une honnête Pizza Brooklyn (Pepperoni, fior di latte) ou, si vous êtes nombreux, réclamez la côte de bœuf saisie à la flamme.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
