import { SurgicalPlace } from "../../../type-definition";

export const moulin_de_la_vierge: SurgicalPlace = {
    id: "poi-moulin-de-la-vierge",
    name: "Le Moulin de la Vierge",
    slug: "le-moulin-de-la-vierge",
    category: "café",
    subcategory: ['français'],
    location: {
        address: "105 Rue Vercingétorix, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.834488,
        lng: 2.3140092,
        nearest_metro: "Pernety",
        metro_lines: [13],
        google_id: "ChIJB11gg0lw5kcRpQv3OvcM23M"
    },
    moods: {
        chill: 80,
        festif: 0,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Monday: 7:30 AM – 8:00 PM | Tuesday: 7:30 AM – 8:00 PM | Wednesday: 7:30 AM – 8:00 PM | Thursday: Closed | Friday: 7:30 AM – 8:00 PM | Saturday: 7:30 AM – 8:00 PM | Sunday: 7:30 AM – 8:00 PM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lemoulindelavierge.com/",
            label: "PLUS D’INFOS"
        }
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 2.20,
        dish_price: 12.00,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Pains d’Antan (Cuits au feu de bois)",
                items: [
                    { name: "Pain de Campagne Bio (le kg)", price_cents: 550 },
                    { name: "Baguette de tradition", price_cents: 135 },
                    { name: "Pain aux céréales anciennes", price_cents: 480 },
                    { name: "Pain de seigle pur", price_cents: 520 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Viennoiseries (Douceurs)",
                items: [
                    { name: "Croissant pur beurre", price_cents: 130 },
                    { name: "Pain au chocolat", price_cents: 140 },
                    { name: "Chausson aux pommes maison", price_cents: 240 },
                    { name: "Brioche à tête", price_cents: 210 },
                    { name: "Pain aux raisins", price_cents: 220 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pâtisseries & Salon de Thé",
                items: [
                    { name: "Millefeuille à l’ancienne", price_cents: 580 },
                    { name: "Éclair au chocolat noir", price_cents: 450 },
                    { name: "Tartelette aux fraises Gariguette", price_cents: 620 },
                    { name: "Paris-Brest individuel", price_cents: 590 },
                    { name: "Flan pâtissier onctueux", price_cents: 400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Salé & Lunch (Plats)",
                items: [
                    { name: "Formule Déjeuner (Sandwich+Boisson+Dessert)", price_cents: 1250 },
                    { name: "Menu Quiche (Quiche+Boisson+Dessert)", price_cents: 1200 },
                    { name: "Sandwich jambon-beurre artisanal", price_cents: 550 },
                    { name: "Quiche Lorraine individuelle", price_cents: 520 },
                    { name: "Salade de saison", price_cents: 850 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-moulin-de-la-vierge/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-moulin-de-la-vierge/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-moulin-de-la-vierge/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-moulin-de-la-vierge/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-moulin-de-la-vierge/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-moulin-de-la-vierge/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.1,
    description: "Installé dans une magnifique boutique classée monument historique sur la rue Vercingétorix, Le Moulin de la Vierge est un voyage dans le temps. Avec son décor Art Nouveau et ses plafonds peints, c’est l’un des plus beaux écrins de boulangerie à Paris. On y vient pour les pains de campagne bio cuits au feu de bois selon des méthodes ancestrales, et l’on reste pour le charme suranné de son petit salon de thé où le temps semble s'être arrêté au début du siècle.",
    insider_tip: "Ne manquez pas leur pain de campagne, un véritable monument de goût qui se conserve plusieurs jours. En été, la petite terrasse sur la zone piétonne de la rue de l’Ouest est un havre de paix absolu pour un café-croissant matinal.",
    expert_catchline: "Le pain de tradition dans un écrin de monument historique.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Café torréfié", "Thés de sélection"],
        must_eat: "Cuisine française. Le pain de campagne au feu de bois et le millefeuille.",
        must_drink: "Un chocolat chaud à l’ancienne sous les plafonds peints."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le pain de campagne au feu de bois et le millefeuille.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
