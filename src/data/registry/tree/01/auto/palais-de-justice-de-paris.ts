import { SurgicalPlace } from "../../../type-definition";

export const palais_de_justice_de_paris: SurgicalPlace = {
  id: "poi-palais-de-justice-de-paris",
  slug: "palais-de-justice-de-paris",
  name: "Palais de Justice de Paris",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "08 Bd du Palais, 75001 Paris, France",
    arrondissement: 1,
    lat: 48.8557234,
    lng: 2.3451467,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJk3npIuBx5kcRkqWnNdgP57Y"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 17:00 | mardi: 09:00 – 17:00 | mercredi: 09:00 – 17:00 | jeudi: 09:00 – 17:00 | vendredi: 09:00 – 17:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.cours-appel.justice.fr/paris/",
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
  description: "Un établissement authentique qui cultive l'art de vivre et la convivialité au quotidien.",
  insider_tip: `• **Timing Stratégique** : Arriver au moment de l'ouverture pour savourer le calme du lieu.
  • **Combo Moelle** : La suggestion du jour accompagnée d'une boisson artisanale.
  • **Expérience Culturelle** : Une immersion dans l'ambiance unique de ce quartier historique.`,
  specials: {
    cuisine: ["Français"],
    drinks: [],
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/palais-de-justice-de-paris/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/palais-de-justice-de-paris/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/palais-de-justice-de-paris/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/palais-de-justice-de-paris/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/palais-de-justice-de-paris/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/palais-de-justice-de-paris/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.2,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default palais_de_justice_de_paris;
