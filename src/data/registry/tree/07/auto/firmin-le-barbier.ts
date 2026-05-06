import { SurgicalPlace } from "../../../type-definition";

export const firmin_le_barbier: SurgicalPlace = {
  "id": "poi-firmin-le-barbier",
  slug: "firmin-le-barbier",
  "name": "Firmin le Barbier",
  category: "restaurant",
  subcategory: ["gastronomique", "français"],
  location: {
    address: "20 Rue de Monttessuy, 75007 Paris",
    arrondissement: 7,
    lng: 2.296589,
    nearest_metro: "Pont de l'Alma",
    metro_lines: [9],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:30–22:30",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.firminlebarbier.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 60,
    is_free: false,
    dish_price: 45,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine de Saison",
        items: [
          { "name": "Filet de Bœuf Rossini", price_cents: 4200 },
          { "name": "Saint-Jacques rôties", price_cents: 3800 }
        ]
      }
    ]
  },
  description: "Firmin le Barbier est une adresse intime et raffinée située au pied de la Tour Eiffel. La cuisine, d'une précision exemplaire, met à l'honneur les produits du terroir avec une touche de modernité. Un lieu calme et élégant pour une parenthèse gastronomique d'exception.",
  expert_catchline: "La gastronomie française raffinée et intime au pied de la Dame de Fer.",
  insider_tip: "Une adresse parfaite pour un dîner romantique. La carte des vins est courte mais extrêmement bien sélectionnée.",
  specials: {
    cuisine: ["Gastronomique"],
    must_eat: "Cuisine Gastronomique. Filet de Bœuf Rossini & Saint-Jacques.",
  },
  real_talk: {
    text: "Une adresse intime et d'une grande précision culinaire.",
    must_eat: "Cuisine Gastronomique. Filet de Bœuf Rossini & Saint-Jacques.",
    le_secret: "La proximité immédiate avec la Tour Eiffel sans le tumulte touristique.",
    le_son: "Calme et feutré.",
    le_must: "L'accueil personnalisé."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/firmin-le-barbier/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/firmin-le-barbier/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/firmin-le-barbier/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/firmin-le-barbier/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/firmin-le-barbier/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/firmin-le-barbier/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default firmin_le_barbier;
