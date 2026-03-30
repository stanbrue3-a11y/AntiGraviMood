import { SurgicalPlace } from "../../../type-definition";

export const rue_forest: SurgicalPlace = {
  id: "poi-rue-forest",
  slug: "rue-forest",
  name: "Rue Forest",
  category: "restaurant",
  subcategory: ["cuisin"],
  location: {
    address: "Rue Forest, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8852989,
    lng: 2.3293072,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJDSit3E1u5kcRlpUHENymf4c"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maps.google.com/?cid=9763705981254473110",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
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
    must_eat: "Cuisine [Type]. TODO",
  },
  images: {
    hero: "AU_ZVEGdSijDRPJejHywRv4pHVPwjsfj_daX9ZQBKUvn4GsYL7Vd89eW_DqFIwcWuERvnONEa71yegNkSvMOchMF2cbxyIa-O8KfmZes4ffsEAk3UNrS6VOHvuIS_ivgvznbWdRTt0xxyO4b8-hEJrEt8dJasrCxyOl8I72ZnI1qKul8GKA7LPPZIFL0iego0R1V8GxIIMLuZQq9gcwz1klB35iIwdR7cR29OfhB_yGY42xsIt5d_QeyzoIX91cFL6JulZebZ0FhSr-Ys6CycdUjKFQJcgC18mmThoz4O36OcYCcnZenT8VlUv98pFu_3I5oJRUW8ePvmMiU9BvL42zB1I3W4pBwaV39tKD9Spgs-HY-wTETtBLeMdfDypG7qpRjisU3QUqzYW0DdB6g96EMf6dXMHcKud4GgK6p_AK3Z1Gfm6qs",
    gallery: []
  },
  verified: false,
  google_rating: 0
};

export default rue_forest;
