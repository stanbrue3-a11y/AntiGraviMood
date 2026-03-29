import { SurgicalPlace } from "../../../type-definition";

export const pont_cardinet: SurgicalPlace = {
  id: "poi-pont-cardinet",
  slug: "pont-cardinet",
  name: "Pont Cardinet",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "Rue Cardinet, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.887858,
    lng: 2.3130191,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJJw61Iv5x5kcRYWQAy29vqJk_FIXED"
  },
  moods: {
    chill: 100,
    festif: 0,
    culturel: 0
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maps.google.com/?cid=7962778015210757114",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: true,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      // TODO: MOELLE INDUSTRIELLE - Saisir le menu complet ici
    ]
  },
  description: `TODO: Description riche (3 phrases minimum).`,
  insider_tip: `• **Timing Stratégique** : TODO
  • **Combo Moelle** : TODO
  • **Expérience Culturelle** : TODO`,
  specials: {
    cuisine: [],
    drinks: [],
    must_eat: `Cuisine [Type]. TODO`,
  },
  images: {
    hero: "AU_ZVEH7I7rXoQZ9y3bosq9SD0k9mjN4cA27cShbqi9uf3K5OGU6NIgBVPO1rvQVQfGCUvKzcNLgw4bfWD6Ck8UiUcqWZypAZEPyqGmXcGSgrAR6dSmToE4or0rxXeGtzNP9s66YOtD5p9i7wZQTtS9WcVR-1d7Z20OEXALBRymHJgucZ5YiU5D6qtrNOTdsM_KB6nXmJtgj0oOCM2RkccC6YLwQC_V4SHqv0gKFX7uZK0qGJu4a0RF7D9SG_wj_jCM6MsRNfcDsOGyxBxIKWJwPtSxN_ePYhvBdqBAjz2l8vPEg",
    gallery: []
  },
  verified: false,
  google_rating: 4.5
};

export default pont_cardinet;
