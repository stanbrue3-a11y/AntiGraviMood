import { SurgicalPlace } from "../../../type-definition";

export const double_dragon: SurgicalPlace = {
  id: "poi-double-dragon",
  slug: "double-dragon",
  name: "Double Dragon",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "52 Rue Saint-Maur, 75011 Paris, France",
    arrondissement: 11,
    lat: 48.8626015,
    lng: 2.3798916,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ53_L_qpt5kcRxyLNzsOYfg0"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 19:30 – 22:30 | mercredi: 12:00 – 14:00, 19:30 – 22:30 | jeudi: 12:00 – 14:00, 19:30 – 22:30 | vendredi: 12:00 – 14:00, 19:30 – 22:30 | samedi: 12:00 – 14:00, 19:30 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.doubledragonparis.com/",
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
  description: "Un établissement authentique qui incarne l'art de vivre parisien avec sincérité.",
  insider_tip: `• **Timing Stratégique** : Le lieu est très prisé, venez dès l’ouverture pour éviter l'attente.
  • **Combo Moelle** : Le riz Double Dragon est l'accompagnement indispensable pour leurs plats épicés.
  • **Expérience Culturelle** : Une immersion dans la cuisine chinoise moderne par l’équipe du Servan.`,
  specials: {
    cuisine: ["Français"],
    drinks: [],
    must_eat: "Cuisine de quartier. Le Comté frit au piment et le Poulet frit.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/double-dragon/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/double-dragon/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/double-dragon/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/double-dragon/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/double-dragon/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/double-dragon/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.2,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. Le Comté frit au piment et le Poulet frit.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default double_dragon;
