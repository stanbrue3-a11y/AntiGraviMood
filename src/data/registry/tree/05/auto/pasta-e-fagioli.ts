import { SurgicalPlace } from "../../../type-definition";

export const pasta_e_fagioli: SurgicalPlace = {
  "id": "poi-pasta-e-fagioli",
  slug: "pasta-e-fagioli",
  "name": "Pasta e Fagioli",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "82 Rue Claude Bernard, 75005 Paris",
    arrondissement: 5,
    lng: 2.3448764,
    nearest_metro: "Censier-Daubenton",
    metro_lines: [7],
    google_id: "ChIJO6aGH-px5kcRswGP6rvY6jA"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–15:00, 19:00–23:00",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://pasta-e-fagioli.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    dish_price: 15,
    menu_items: [
      {
        category_type: "main",
        display_label: "Primi Piatti",
        items: [
          { "name": "Pâtes fraîches maison", price_cents: 1400 },
          { "name": "Pizza fine", price_cents: 1300 }
        ]
      }
    ]
  },
  description: "Pasta e Fagioli est une adresse italienne sincère et généreuse située dans le bas de la rue Claude Bernard. Fidèle à son nom, le restaurant célèbre la tradition culinaire italienne avec une attention particulière portée aux pâtes fraîches. L'accueil est typiquement méditerranéen, chaleureux et efficace.",
  expert_catchline: "Le repaire des amoureux de pâtes fraîches authentiques dans le 5ème.",
  insider_tip: "Leur crème de truffe est particulièrement réussie, n'hésitez pas à choisir les raviolis qui la mettent en vedette. La terrasse est très agréable pour un Spritz en fin de journée.",
  specials: {
    cuisine: ["Italien"],
    must_eat: "Cuisine italienne. Pasta e Fagioli & Crème de Truffe.",
  },
  real_talk: {
    text: "Une adresse italienne sincère et généreuse.",
    must_eat: "Cuisine italienne. Pasta e Fagioli & Crème de Truffe.",
    le_secret: "Une sélection de vins italiens de petits producteurs.",
    le_son: "Brouhaha convivial de quartier.",
    le_must: "Le café gourmand servi avec des petites douceurs."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pasta-e-fagioli/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pasta-e-fagioli/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pasta-e-fagioli/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pasta-e-fagioli/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pasta-e-fagioli/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pasta-e-fagioli/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default pasta_e_fagioli;
