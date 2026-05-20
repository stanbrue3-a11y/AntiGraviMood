import { SurgicalPlace } from "../../../type-definition";

export const hutong_paris: SurgicalPlace = {
  "id": "poi-hutong-paris",
  slug: "hutong-paris",
  "name": "Hutong Paris",
  category: "restaurant",
  subcategory: ['chinois'],
  location: {
    address: "147 Boulevard Saint-Michel, 75005 Paris, France",
    arrondissement: 5,
    lat: 48.8409454,
        lng: 2.3376612,
    nearest_metro: "Port-Royal",
    metro_lines: [],
    google_id: "ChIJIePag-tx5kcREVcnf5vU_IY"},
  moods: {
    chill: 70,
    festif: 20,
    culturel: 30
  },
  practical: {
    opening_hours_raw: "11:30 – 21:00 | mardi: 11:30 – 21:00 | mercredi:  | ",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://hutong.fr/",
      label: "VOIR LE SITE"}
  },
  pricing: {
    certification: "silver",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Raviolis Signature",
        items: [
          { "name": "Raviolis grillés maison au bœuf ou poulet-crevettes"},
          { "name": "Raviolis vapeur farcis au bouillon" }
        ]
      }
    ]
  },
  description: "Hutong Paris est une ambassade de la cuisine authentique du nord de la Chine, située à la lisière du Jardin du Luxembourg. Ce restaurant familial se spécialise dans l'artisanat du blé, proposant des raviolis maison (Guoties et Xiao Long Bao) d'une finesse remarquable. L'ambiance y est chaleureuse et décontractée, avec une cuisine ouverte qui laisse entrevoir le tour de main des chefs.",
  expert_catchline: "Le temple du ravioli grillé artisanal face au Jardin du Luxembourg.",
  insider_tip: "• Ne passez pas à côté des Guoties, ils sont préparés minute et offrent un croquant incomparable.\n• Le restaurant propose un service continu, idéal pour un déjeuner tardif après une balade au parc.\n• Accompagnez vos raviolis d'une Bubble Waffle pour une touche sucrée originale en fin de repas.",
  specials: {
    cuisine: ["Chinois"],
    drinks: [],
    must_eat: "Cuisine Chinoise. Guoties & Soupe de Nouilles.",
  },
  real_talk: {
    text: "Hutong Paris est une ambassade de la cuisine authentique du nord de la Chine, située à la lisière du Jardin du Luxembourg. Ce restaurant familial se spécialise dans l'artisanat du blé, proposant des raviolis maison (Guoties et Xiao Long Bao) d'une finesse remarquable. L'ambiance y est chaleureuse et décontractée, avec une cuisine ouverte qui laisse entrevoir le tour de main des chefs.",
    must_eat: "Cuisine Chinoise. Guoties & Soupe de Nouilles.",
    le_secret: "La pâte des raviolis est pétrie et étirée à la main chaque jour, une rareté à ce niveau de prix.",
    le_son: "Bruit de brasserie joyeuse, mélange d'étudiants et de familles du quartier.",
    le_must: "installer en terrasse aux beaux jours avec un panier de raviolis vapeur."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hutong-paris/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hutong-paris/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hutong-paris/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hutong-paris/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hutong-paris/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hutong-paris/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.8,
  google_reviews_count: 850
};

export default hutong_paris;
