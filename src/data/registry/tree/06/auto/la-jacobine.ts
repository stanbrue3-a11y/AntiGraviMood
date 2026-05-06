import { SurgicalPlace } from "../../../type-definition";

export const la_jacobine: SurgicalPlace = {
  "id": "poi-la-jacobine",
  slug: "la-jacobine",
  "name": "La Jacobine",
  category: "restaurant",
  subcategory: ["français", "salon de thé"],
  location: {
    address: "59-61 Rue Saint-André des Arts, 75006 Paris",
    arrondissement: 6,
    lng: 2.338965,
    nearest_metro: "Odéon",
    metro_lines: [4, 10],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 80,
    festif: 20,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "mardi-dimanche: 12:00–23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: false,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/LaJacobine/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 30,
    is_free: false,
    dish_price: 22,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine Traditionnelle",
        items: [
          { "name": "Coq au Vin", price_cents: 2100 },
          { "name": "Chocolat Chaud Maison", price_cents: 800 }
        ]
      }
    ]
  },
  description: "Nichée dans le passage des Jacobins, cette adresse est une véritable institution du quartier latin. On y vient pour sa cuisine française généreuse et son chocolat chaud légendaire. Un cadre historique et chaleureux qui semble figé dans le temps.",
  expert_catchline: "Le charme historique et la gourmandise française au cœur d'un passage secret.",
  insider_tip: "Leur tarte Tatin et leur chocolat chaud sont parmi les meilleurs de Paris. L'attente en vaut la peine.",
  specials: {
    cuisine: ["Français"],
    must_eat: "Cuisine Française. Coq au Vin & Chocolat Chaud.",
  },
  real_talk: {
    text: "Une institution chaleureuse et historique.",
    must_eat: "Cuisine Française. Coq au Vin & Chocolat Chaud.",
    le_secret: "La recette du chocolat chaud est jalousement gardée.",
    le_son: "Ambiance de salon de thé animée.",
    le_must: "Le cadre du passage."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-jacobine/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-jacobine/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-jacobine/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-jacobine/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-jacobine/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-jacobine/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default la_jacobine;
