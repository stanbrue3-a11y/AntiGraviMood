import { SurgicalPlace } from "../../../type-definition";

export const entrepot: SurgicalPlace = {
    id: "poi-entrepot",
    name: "L’Entrepôt",
    slug: "l-entrepot",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "7 Rue Francis de Pressensé",
        arrondissement: 14,
        lat: 48.8339708,
        lng: 2.3166648,
        nearest_metro: "Pernety",
        metro_lines: [13],
        google_id: "ChIJIwFfsktw5kcR7QCCSLLlDwY"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:30, 20:00–22:30 | Mardi: 12:00–14:30, 20:00–22:30 | Mercredi: 12:00–14:30, 20:00–22:30 | Jeudi: 12:00–14:30, 20:00–22:30 | Vendredi: 12:00–14:30, 20:00–22:45 | Samedi: 12:00–16:00, 20:00–22:45 | Dimanche: 12:00–16:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lentrepot.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 6.50,
        coffee_price: 2.50,
        dish_price: 21.00, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de Saison",
                items: [
                    { name: "Pavé de saumon rôti, purée de panais", price_cents: 2400 },
                    { name: "Risotto aux champignons & truffe", price_cents: 2000 },
                    { name: "Suprême de volaille fermière", price_cents: 2250 },
                    { name: "Burger de L’Entrepôt", price_cents: 1950 },
                    { name: "Tataki de bœuf au sésame", price_cents: 2300 },
                    { name: "Pennes à l’arrabbiata & burrata", price_cents: 1850 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Tapas",
                items: [
                    { name: "Os à moelle au sel de Guérande", price_cents: 1200 },
                    { name: "Salade d’écrevisses au pesto", price_cents: 1450 },
                    { name: "Burrata crémeuse", price_cents: 1400 },
                    { name: "Accras de morue (les 6 pièces)", price_cents: 1000 },
                    { name: "Planche de charcuterie ibérique", price_cents: 1800 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Brunch",
                items: [
                    { name: "Tiramisu Nutella-Spéculoos", price_cents: 950 },
                    { name: "Mousse au chocolat noir 70%", price_cents: 900 },
                    { name: "Brunch Complet (Dimanche)", price_cents: 3200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entrepot/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entrepot/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entrepot/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entrepot/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entrepot/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entrepot/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.2,
    description: "Fondé en 1975 par Frédéric Mitterrand dans une ancienne imprimerie, L’Entrepôt est une véritable ’biosphère’ culturelle. Ce lieu hybride unique à Paris réunit trois salles de cinéma Art et Essai, une galerie d’exposition, une salle de concert jazz et un restaurant niché sous une vaste verrière. Un havre de paix artistique où l’on vient aussi bien pour un film indépendant que pour une cuisine de saison dégustée dans son jardin secret, loin du tumulte urbain.",
    insider_tip: "Ne manquez pas les séances ’Ciné-Bébé’ pour les parents ou les concerts Lindy-Hop. La terrasse chauffée, sous serres en hiver, est un pur moment de magie toute l’année.",
    expert_catchline: "L’institution hybride du 14ème : cinéma, jazz et jardin d'hiver.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins naturels", "Cocktails classiques"],
        must_eat: "Cuisine française. L’os à moelle au sel de Guérande et le Tiramisu Nutella-Spéculoos.",
        must_drink: "Un verre de vin rouge naturel sélectionné par Marie-Sophie Séba."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. L’os à moelle au sel de Guérande et le Tiramisu Nutella-Spéculoos.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
