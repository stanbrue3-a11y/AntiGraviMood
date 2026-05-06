import { SurgicalPlace } from "../../../type-definition";

export const les_editeurs: SurgicalPlace = {
  "id": "poi-les-editeurs",
  slug: "les-editeurs",
  "name": "Les Éditeurs",
  category: "restaurant",
  subcategory: ["brasserie", "littéraire"],
  location: {
    address: "4 Carrefour de l'Odéon, 75006 Paris",
    arrondissement: 6,
    lng: 2.338965,
    nearest_metro: "Odéon",
    metro_lines: [4, 10],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 08:00–02:00",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lesediteurs.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 40,
    is_free: false,
    dish_price: 28,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine de Saison",
        items: [
          { "name": "Filet de Bœuf au Poivre", price_cents: 3200 },
          { "name": "Salade des Éditeurs", price_cents: 1800 }
        ]
      }
    ]
  },
  description: "Les Éditeurs est une brasserie littéraire emblématique du Carrefour de l'Odéon. Avec ses murs tapissés de livres et ses banquettes en cuir rouge, le lieu dégage une atmosphère intellectuelle et chaleureuse. On y vient pour lire, discuter ou déguster des plats classiques parfaitement exécutés.",
  expert_catchline: "La brasserie littéraire et feutrée du Carrefour de l'Odéon.",
  insider_tip: "Installez-vous dans l'un des fauteuils club à l'étage pour une lecture au calme. Leurs pâtisseries maison sont excellentes.",
  specials: {
    cuisine: ["Brasserie"],
    must_eat: "Cuisine de brasserie. Filet de Bœuf & Pâtisseries Maison.",
  },
  real_talk: {
    text: "Une brasserie littéraire et chaleureuse.",
    must_eat: "Cuisine de brasserie. Filet de Bœuf & Pâtisseries Maison.",
    le_secret: "La bibliothèque compte plus de 5000 ouvrages.",
    le_son: "Calme et studieux en journée.",
    le_must: "Le cadre tapissé de livres."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-editeurs/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-editeurs/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-editeurs/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-editeurs/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-editeurs/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-editeurs/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default les_editeurs;
