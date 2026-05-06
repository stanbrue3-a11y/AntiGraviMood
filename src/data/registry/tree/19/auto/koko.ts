import { SurgicalPlace } from "../../../type-definition";

export const koko: SurgicalPlace = {
  "id": "poi-koko",
  slug: "koko",
  "name": "Koko",
  category: "restaurant",
  subcategory: ['japonais'],
  location: {
    address: "14 Quai de la Loire, 75019 Paris",
    arrondissement: 19,
    lng: 2.371258,
    nearest_metro: "Jaurès",
    metro_lines: [2, 5, 7],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 100,
    festif: 50,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–14:30, 19:00–22:30",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.kokoparis.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 35,
    is_free: false,
    dish_price: 22,
    menu_items: [
      {
        category_type: "main",
        display_label: "Bistronomie Japonaise",
        items: [
          { "name": "Bento du jour", price_cents: 1800 },
          { "name": "Sélection de sushis frais", price_cents: 2200 }
        ]
      }
    ]
  },
  description: "Koko est une escale japonaise moderne et d'une grande sincérité située quai de la Loire. Ce bistrot nippon propose une cuisine créative et généreuse, fusionnant avec talent les classiques japonais et l'esprit parisien. Dans un cadre accueillant, contemporain et d'une belle énergie, avec sa terrasse au bord de l'eau, on y déguste des plats aux saveurs justes et à la fraîcheur irréprochable. Une adresse de quartier d'une grande fiabilité pour un moment de gourmandise serein face au canal.",
  expert_catchline: "La bistronomie japonaise moderne, la terrasse au bord de l'eau et la convivialité du canal.",
  insider_tip: "Une adresse parfaite pour un déjeuner calme face au bassin de la Villette. Leurs bentos sont d'une belle variété et d'une grande justesse. L'ambiance y est cosmopolite, dynamique et d'une belle clarté. Profitez de la terrasse aux beaux jours pour savourer le cadre unique du 19ème. L'accueil y est toujours d'une grande douceur.",
  specials: {
    cuisine: ["Japonais"],
    must_eat: "Cuisine japonaise. Bentos Créatifs & Sushis Frais.",
  },
  real_talk: {
    text: "Une expérience gourmande conviviale, authentique et d'une grande poésie urbaine.",
    must_eat: "Cuisine japonaise. Bentos Créatifs & Sushis Frais.",
    le_secret: "L'équipe apporte une attention particulière au sourcing des poissons et à la préparation du riz, signature d'un savoir-faire artisanal respectueux des traditions nippones.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "La vue sur le canal."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/koko/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/koko/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/koko/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/koko/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/koko/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/koko/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default koko;
