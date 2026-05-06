import { SurgicalPlace } from "../../../type-definition";

export const la_manifattura: SurgicalPlace = {
    id: "poi-la-manifattura",
    name: "La Manifattura",
    slug: "la-manifattura",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "106 Boulevard du Montparnasse, 75014 Paris",
        arrondissement: 14,
        lat: 48.8421114,
        lng: 2.3285434,
        nearest_metro: "Vavin",
        metro_lines: [4],
        google_id: "ChIJI6zZEPNx5kcRt4SwvVs2WV4"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:30, 19:00–23:00 | Mardi: 12:00–14:30, 19:00–23:00 | Mercredi: 12:00–14:30, 19:00–23:00 | Jeudi: 12:00–14:30, 19:00–23:00 | Vendredi: 12:00–14:30, 19:00–23:00 | Samedi: 12:00–14:30, 19:00–23:00 | Dimanche: 12:00–14:30, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lamanifattura-paris.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 6.50,
        coffee_price: 2.00,
        dish_price: 19.00, // MÉDIAN des Pizzas (12.00€ - 25.00€)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Pizzas Traditionnelles (Napoletana)",
                items: [
                    { name: "Margherita (Tomate, mozzarella di bufala, basilic)", price_cents: 1200 },
                    { name: "Bufala ’La vraie'", price_cents: 1600 },
                    { name: "Regina (Jambon cuit, champignons)", price_cents: 1800 },
                    { name: "Diavola ’piccante'", price_cents: 1800 },
                    { name: "Burratissima (Tomate, burrata fraîche, basilic)", price_cents: 1900 },
                    { name: "La Manifattura (Mozza fior di latte, gorgonzola, noix, miel)", price_cents: 2000 },
                    { name: "Quattro Formaggi (4 Fromages italiens)", price_cents: 1800 },
                    { name: "Calzone Classico", price_cents: 1700 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas Gourmandes (Signatures)",
                items: [
                    { name: "C.P.2019 ’Championne de Paris 2019'", price_cents: 2500, description: "La pizza primée, ingrédients d’exception." },
                    { name: "Tartufo & Parma (Crème de truffe, jambon de Parme)", price_cents: 2500 },
                    { name: "Tricolore (Pesto de basilic, di bufala, jambon di Parma, burrata)", price_cents: 2500 },
                    { name: "Guagliò (Bresaola de Wagyu, pecorino, roquette)", price_cents: 2500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Antipasti & Pasta Fresca",
                items: [
                    { name: "Burratina des Pouilles (125g)", price_cents: 1000 },
                    { name: "Stracciatella fumée au bois", price_cents: 1200 },
                    { name: "Linguine Sciue Sciue (Tomates fraîches, ail, basilic)", price_cents: 1200 },
                    { name: "Authentica Carbonara (Guanciale, pecorino, jaune d’oeuf)", price_cents: 1800 },
                    { name: "Gnocchi alla Sorrentina (Four à bois)", price_cents: 1500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci Artigianali",
                items: [
                    { name: "Tiramisu Classico della Casa", price_cents: 900 },
                    { name: "Baba napolitain au Limoncello", price_cents: 900 },
                    { name: "Profiteroles à l’italienne (Chocolat chaud)", price_cents: 900 },
                    { name: "Panna Cotta aux fruits rouges", price_cents: 800 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-manifattura/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-manifattura/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-manifattura/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-manifattura/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-manifattura/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-manifattura/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.3,
    description: "Championne de la pizza à Paris, La Manifattura est une escale incontournable sur le boulevard du Montparnasse pour les amateurs de pâte napolitaine d’exception. Le secret réside dans une fermentation longue du pâton et des produits importés directement de petits producteurs italiens. L’ambiance y est vivante, avec le four à bois en vedette et un service qui chante l’Italie.",
    insider_tip: "Demandez la pizza ’C.P.2019’, celle qui a remporté le titre de championne de Paris. Pour le dessert, le Baba au Limoncello est une rareté qu’il faut absolument goûter ici.",
    expert_catchline: "L’excellence napolitaine primée : championne de Paris 2019 et sourcing transalpin d'exception.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Vins italiens de caractère", "Limoncello artisanal"],
        must_eat: "Cuisine italienne. La Pizza C.P.2019 et le Tiramisu Classico.",
        must_drink: "Un Spritz classique ou un vin rouge des Pouilles."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. La Pizza C.P.2019 et le Tiramisu Classico.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
