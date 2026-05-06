import { SurgicalPlace } from "../../../type-definition";

export const grappoli: SurgicalPlace = {
    id: "poi-grappoli",
    name: "I Grappoli",
    slug: "i-grappoli",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "22 Pl. Denfert-Rochereau",
        arrondissement: 14,
        lat: 48.8338697,
        lng: 2.3308772,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6, "B"],
        google_id: "ChIJu3t9ZLVx5kcRxSvcyGOmQm0"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 PM – 12:00 AM | Tuesday: 12:00 PM – 12:00 AM | Wednesday: 12:00 PM – 12:00 AM | Thursday: 12:00 PM – 12:00 AM | Friday: 12:00 PM – 12:00 AM | Saturday: 12:00 PM – 12:00 AM | Sunday: 12:00 PM – 12:00 AM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.igrappoli.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 7.00,
        coffee_price: 2.50,
        dish_price: 18.00, // MÉDIAN des pizzas & pasta
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Antipasti (Le partage à l’italienne)",
                items: [
                    { name: "Burrata des Pouilles & Tomates cerises", price_cents: 1350 },
                    { name: "Vitello Tonnato traditionnel", price_cents: 1600 },
                    { name: "Beignets de Mozzarella (Fritters)", price_cents: 1150 },
                    { name: "Planche de charcuterie transalpine", price_cents: 1900 },
                    { name: "Focaccia romarin & fleur de sel", price_cents: 600 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pizze au feu de bois",
                items: [
                    { name: "Pizze Grappoli (Parme, Roquette, Tomate, Mozza)", price_cents: 1850 },
                    { name: "Margherita di Buffala Classica", price_cents: 1450 },
                    { name: "Diavola (Salami piquant, N’duja)", price_cents: 1650 },
                    { name: "Tartufo (Crème de truffe, Champignons)", price_cents: 1950 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pasta Fresca & Secondi",
                items: [
                    { name: "Linguine à la Vongole (Palourdes)", price_cents: 2100 },
                    { name: "Spaghetti alla Carbonara (Guanciale)", price_cents: 1750 },
                    { name: "Penne alla Norma (Aubergines, Ricotta)", price_cents: 1600 },
                    { name: "Escalope de Veau Milanaise", price_cents: 2250 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci",
                items: [
                    { name: "Tiramisu della Nonna", price_cents: 850 },
                    { name: "Panna Cotta aux fruits rouges", price_cents: 750 },
                    { name: "Profiterole Géante au chocolat chaud", price_cents: 1000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/i-grappoli/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/i-grappoli/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/i-grappoli/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/i-grappoli/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/i-grappoli/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/i-grappoli/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "I Grappoli est l’adresse transalpine qui réchauffe la Place Denfert-Rochereau. Cette véritable trattoria de quartier brille par sa simplicité authentique et sa générosité. Avec sa grande terrasse ensoleillée, c’est le lieu idéal pour une immersion italienne, entre pizzas cuites au feu de bois et pâtes fraîches maison. L’ambiance y est vibrante, rappelant les déjeuners dominicaux en famille sous le soleil de Toscane.",
    insider_tip: "Leur terrasse est un véritable aimant à soleil, arrivez tôt aux beaux jours. Ne manquez pas les beignets de mozzarella en entrée, un plaisir régressif parfait avec un Spritz.",
    expert_catchline: "La trattoria ensoleillée et sa terrasse mythique à Denfert.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Vins de Toscane", "Spritz Classique"],
        must_eat: "Cuisine italienne. La pizza Tripletta (homonyme piquant) ou les linguine alla Vongole.",
        must_drink: "Un verre de Chianti sélectionné dans leur belle cave transalpine."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. La pizza Tripletta (homonyme piquant) ou les linguine alla Vongole.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
