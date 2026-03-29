import { SurgicalPlace } from "../../../type-definition";

export const centre_broca_fcps_irest_universite_paris_1_pantheon_sorbonne: SurgicalPlace = {
  id: "poi-centre-broca-fcps-irest-universite-paris-1-pantheon-sorbonne",
  slug: "centre-broca-fcps-irest-universite-paris-1-pantheon-sorbonne",
  name: "Centre Broca (FCPS & IREST) - Université Paris 1 Panthéon-Sorbonne",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "21 Rue Broca, 75005 Paris, France",
    arrondissement: 5,
    lat: 48.8383549,
    lng: 2.3485984,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJPwsAf-tx5kcRBlJcBCeGSvs"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 07:30 – 20:00 | mardi: 07:30 – 20:00 | mercredi: 07:30 – 20:00 | jeudi: 07:30 – 20:00 | vendredi: 07:30 – 20:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.pantheonsorbonne.fr/universite/campus/detail-campus/brc/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      // TODO: MOELLE INDUSTRIELLE - Saisir le menu complet ici
    ]
  },
  description: "TODO: Description riche (3 phrases minimum).",
  insider_tip: `• **Timing Stratégique** : TODO
  • **Combo Moelle** : TODO
  • **Expérience Culturelle** : TODO`,
  specials: {
    cuisine: [],
    drinks: [],
    must_eat: "Cuisine [Type]. TODO",
  },
  images: {
    hero: "REF_MISSING",
    gallery: []
  },
  verified: false,
  google_rating: 3.5
};

export default centre_broca_fcps_irest_universite_paris_1_pantheon_sorbonne;
