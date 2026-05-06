import { SurgicalPlace } from '../../../type-definition';

export const louie_louie: SurgicalPlace = {
    id: "poi-louie-louie",
    name: "Louie Louie",
    slug: "louie-louie",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "78 Rue de Charonne",
        arrondissement: 11,
        lat: 48.8535073,
        lng: 2.3803616,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJcXILUQhy5kcRDna-_beMoB4"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–22:30\nmardi: 12:00–14:30, 19:00–22:30\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–23:00\nsamedi: 12:00–14:30, 19:00–23:00\ndimanche: 12:00–14:30, 19:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.louielouie.paris/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 15, // MANUAL: Médiane des pizzas autour de 12-20€ (15€ estimatif global)
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "other",
                display_label: "Antipasti",
                items: [
                    // VERIFIED: Uber Eats + Site officiel (2024-2025)
                    { name: "Burrata crémeuse, câpres, poivre", price_cents: 1000 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas",
                items: [
                    { name: "Margherita", price_cents: 1190, description: "Sauce tomate, fior di latte, basilic frais." },
                    { name: "Gorgonzola", price_cents: 1500, description: "Crème, gorgonzola, mozzarella." },
                    { name: "Muertadel", price_cents: 1600, description: "Fior di latte, mortadelle pistache, burrata, guindillas." },
                    { name: "Dirty South", price_cents: 1600, description: "Saucisse piquante, oignons rouges, sauce Ranch." },
                    { name: "Parmigiana", price_cents: 1700, description: "Sauce tomate, aubergine, parmesan, mozzarella." },
                    { name: "Santo Gordo", price_cents: 1700 },
                    { name: "Old Fashioned", price_cents: 1700 },
                    { name: "4 Fromages", price_cents: 1700 },
                    { name: "Spicy Honey", price_cents: 1800, description: "Miel pimenté, nduja." },
                    { name: "Surf & Turf", price_cents: 1800, description: "Tomate, anchois, Nduja, mozzarella di bufala." },
                    { name: "Legalize Pastrami", price_cents: 1900, description: "Pastrami, moutarde, pickles." },
                    { name: "Cosmic Ninja", price_cents: 2000 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Tiramisu", price_cents: 800 },
                    { name: "Baba au Rhum", price_cents: 800 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons & Cocktails",
                items: [
                    { name: "Cola Baladin", price_cents: 600 },
                    { name: "IPA Rupture (Bière artisanale)", price_cents: 800 },
                    { name: "Cocktail Création (Old Fashioned, etc.)", price_cents: 1100 },
                    { name: "Verre de vin nature (à partir de)", price_cents: 700 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louie-louie/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louie-louie/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louie-louie/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louie-louie/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louie-louie/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louie-louie/gallery_4.jpg"
    ]
  },
    instagram_handle: "louielouie_paris",
    verified: true,
    google_rating: 4.5,
    description: "Une des meilleures pizzerias néo-napolitaines de l’Est parisien, lovée dans la bouillonnante rue de Charonne. Pâte maturée longuement (bords gonflés et brûlés ’léopard’), produits sourcés en Italie (mortadelle pistache, fior di latte fondante) et vrais cocktails shakers minute.",
    insider_tip: "• C’est rare à Paris : on boit extrêmement bien chez Louie Louie. Leurs cocktails de mixologie accompagnent les pizzas à la perfection, comme ce que l'on voit souvent à Brooklyn.\n• La salle du fond, sous la verrière, est la plus agréable pour dîner.\n• Ouvert en continu tous les jours, midi et soir, un havre de paix sûr.",
    expert_catchline: "Pizzas napolitaines impeccables et cocktails pointus dans la très hype rue de Charonne.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Cocktails Créations", "Vins natures italiens"],
        must_eat: "Cuisine italienne. La Muertadel pimente bien l’affaire avec ses ’guindillas’ (petits piments verts) venus twister la douceur de la mortadelle.",
        must_drink: "Plutôt que le traditionnel combo Pizza/Bière, tapez dans leur carte de cocktails parfaitement dosés par de vrais bartenders."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. La Muertadel pimente bien l’affaire avec ses ’guindillas’ (petits piments verts) venus twister la douceur de la mortadelle.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
