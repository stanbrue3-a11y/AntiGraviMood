import { SurgicalPlace } from "../../../type-definition";

export const creperie_de_pont_aven: SurgicalPlace = {
    id: "poi-creperie-de-pont-aven",
    name: "Crêperie de Pont-Aven",
    slug: "creperie-de-pont-aven",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "54 Rue du Montparnasse, 75014 Paris",
        arrondissement: 14,
        lat: 48.8421557,
        lng: 2.325469,
        nearest_metro: "Edgar Quinet",
        metro_lines: [6],
        google_id: "ChIJqT2_Ecxx5kcRew-rJ9ZyNLI"
    },
    moods: {
        chill: 90,
        festif: 10,
        culturel: 5
    },
    practical: {
        opening_hours_raw: "Lundi: 11:30–23:00 | Mardi: 11:30–23:00 | Mercredi: 11:30–23:00 | Jeudi: 11:30–23:00 | Vendredi: 11:30–23:00 | Samedi: 11:30–23:00 | Dimanche: 11:30–23:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://creperiedepontaven.fr/",
            label: "MENU"
        }
    },
    pricing: {
        avg_budget: 18,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 2.20,
        dish_price: 13.80, // FORMULE SATIÉTÉ MIDI (Galette + Crêpe + Bolée)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Galettes de Sarrasin BIO (Simples & Végé)",
                items: [
                    { name: "Beurre 1/2 sel BIO", price_cents: 650 },
                    { name: "Oeuf BIO", price_cents: 700 },
                    { name: "Jambon & Fromage", price_cents: 800 },
                    { name: "Galette Gast (Fromage, champignons, oignons)", price_cents: 950 },
                    { name: "Galette Vegi (Légumes de saison, fromage)", price_cents: 1000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Galettes Spéciales (Signatures)",
                items: [
                    { name: "Pont-Aven (Saumon, épinards, crème, citron)", price_cents: 1150 },
                    { name: "Gwazenn (Noix de St-Jacques, champignons, crème)", price_cents: 1250 },
                    { name: "Korkidu (Camembert, pommes poêlées, Andouille de Guémené)", price_cents: 1100 },
                    { name: "Roué (Foie gras, miel, confit d’oignon, noix)", price_cents: 1350 },
                    { name: "Galette Kloug (Poulet curry, champignons, crème)", price_cents: 970 },
                    { name: "Galette Bergère (Chèvre, miel, noix, salade)", price_cents: 1050 },
                    { name: "Galette Scandinave (Saumon fumé, crème ciboulette)", price_cents: 1200 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules Satiété (Le Dogme)",
                items: [
                    { name: "Formule Midi (Galette + Crêpe + Bolée de Cidre)", price_cents: 1380, description: "L’unité de satiété standard MOELLE 2026." },
                    { name: "Formule Express", price_cents: 1100 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Crêpes Froment BIO (Sucrées)",
                items: [
                    { name: "Caramel au beurre salé maison", price_cents: 550 },
                    { name: "Crêpe Charly (Spéculoos, glace vanille, chantilly)", price_cents: 750 },
                    { name: "Beurre & Sucre Cassonade", price_cents: 350 },
                    { name: "Crème de Citron maison", price_cents: 500 },
                    { name: "Crème d’Orange maison", price_cents: 500 },
                    { name: "Chocolat maison", price_cents: 500 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/creperie-de-pont-aven/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/creperie-de-pont-aven/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/creperie-de-pont-aven/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/creperie-de-pont-aven/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/creperie-de-pont-aven/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/creperie-de-pont-aven/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "Installée dans la célèbre ’rue des crêperies’ de Montparnasse, la Crêperie de Pont-Aven se distingue par son utilisation de farines de sarrasin et de froment biologiques. L’accueil y est chaleureux et les recettes sont executées dans la plus pure tradition bretonne. C’est l’un des meilleurs rapports qualité-prix du quartier pour un repas complet et sans fioritures.",
    insider_tip: "Ne vous laissez pas tromper par la longue file d’attente, le service est d'une rapidité redoutable. La Galette Korkidu avec son Andouille de Guémené est une merveille de caractère breton.",
    expert_catchline: "La tradition bretonne bio au cœur de Montparnasse : efficace, généreux et authentique.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Large choix de cidres bretons et normands", "Bolées à l’ancienne"],
        must_eat: "Cuisine française. La Galette Pont-Aven et la Crêpe au Caramel Beurre Salé maison.",
        must_drink: "Une bolée de cidre brut artisanal de la maison."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. La Galette Pont-Aven et la Crêpe au Caramel Beurre Salé maison.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
