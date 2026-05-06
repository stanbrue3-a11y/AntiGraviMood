import { SurgicalPlace } from '../../../type-definition';

export const osteria_ferrara: SurgicalPlace = {
    id: "poi-osteria-ferrara",
    name: "Osteria Ferrara",
    slug: "osteria-ferrara",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "7 Rue du Dahomey",
        arrondissement: 11,
        lat: 48.8512483,
        lng: 2.3832944,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJP4_7zAhy5kcRbb5uWi2ie1M"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 12:15–14:00, 19:30–22:00\nmardi: 12:15–14:00, 19:30–22:00\nmercredi: 12:15–14:00, 19:30–22:00\njeudi: 12:15–14:00, 19:30–22:00\nvendredi: 12:15–14:00, 19:30–22:00\nsamedi: 12:15–14:00, 19:30–22:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: false,
        main_action: {
            type: "site",
            url: "http://www.osteriaferrara.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 25.00, // VERIFIED 2025: Median of main pasta/meat courses (22€ to 28€)
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "other",
                display_label: "Antipasti",
                items: [
                    { name: "Burrata des Pouilles, haricots verts, amandes", price_cents: 1500 },
                    { name: "Tarte à la tomate, ricotta salata, fleurs de courgette", price_cents: 1600 },
                    { name: "Vitello tonnato classique", price_cents: 1800 },
                    { name: "Jambon de Parme affiné 24 mois", price_cents: 1450 },
                    { name: "Focaccia maison à l’origan et sel noir", price_cents: 600 },
                    { name: "Carpaccio de thon rouge, câpres et citron", price_cents: 1900 }
                ]
            },
            {
                category_type: "main",
                display_label: "Primi & Secondi (Plats)",
                items: [
                    { name: "Mezzi paccheri aux langoustines crues", price_cents: 2400 },
                    { name: "Ris d’agneau, fenouil rôti, jus citron/thym", price_cents: 2400 },
                    { name: "Calamarata ragoût de saucisse au vin rouge", price_cents: 2200 },
                    { name: "Pêche du jour, légumes croquants", price_cents: 2800 },
                    { name: "Raviolis del plin à la piémontaise", price_cents: 2600 },
                    { name: "Linguine alle vongole", price_cents: 2500 },
                    { name: "Tagliatelle au ragoût de canard et cacao", price_cents: 2400 },
                    { name: "Caille rôtie farcie à la pancetta", price_cents: 2700 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci",
                items: [
                    { name: "Tiramisu de la maison", price_cents: 1000 },
                    { name: "Cannolo sicilien, ricotta et granité pastèque", price_cents: 1000 },
                    { name: "Soupe de pêches plates, glace verveine", price_cents: 1000 },
                    { name: "Panna cotta au coulis de fruits de saison", price_cents: 950 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-ferrara/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-ferrara/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-ferrara/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-ferrara/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-ferrara/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-ferrara/gallery_4.jpg"
    ]
  },
    instagram_handle: "osteriaferrara",
    verified: true,
    google_rating: 4.4,
    description: "Derrière sa devanture boisée, l’Osteria Ferrara cache la quintessence de la trattoria chic. Le chef Fabrizio Ferrara y dépoussière la gastronomie italienne avec un amour pur du produit brut. Loin du vacarme festif d'autres trattorias parisiennes, on vient ici se murmurer des secrets devant une Calamarata incandescente et un verre de vin pointu.",
    insider_tip: "• Une institution discrète parfaite pour un très bon date avec l’Italie dans l’assiette.\n• Réservez au moins deux semaines à l’avance, la salle complète à chaque service.\n• Ne partez pas sans tester le Cannolo sicilien ultra croustillant.",
    expert_catchline: "Trattoria bourgeoise de très haute volée, pour manger les meilleures pâtes de Paris dans le calme absolu.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Barolo", "Vins naturels italiens"],
        must_eat: "Cuisine italienne. La précision est la de mise. Les pâtes sont al dente et baignent dans des justes parfaits, à l’image des Mezzi paccheri aux langoustines crues. Du brutal chic.",
        must_drink: "Magnifique cave italienne, beaucoup de belles quilles nord-italiennes."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. La précision est la de mise. Les pâtes sont al dente et baignent dans des justes parfaits, à l’image des Mezzi paccheri aux langoustines crues. Du brutal chic.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
