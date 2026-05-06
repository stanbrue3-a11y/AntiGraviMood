import { SurgicalPlace } from "../../../type-definition";

export const chez_gino_pizza_feu_de_bois: SurgicalPlace = {
  id: "poi-chez-gino-pizza-feu-de-bois",
  slug: "chez-gino-pizza-feu-de-bois",
  name: "Chez Gino Pizza Feu de Bois",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "80 Rue Dunois, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8337441,
    lng: 2.3656552,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJPfLXeSBy5kcRXkQALp3YOds"
  },
  moods: {
    chill: 80,
    festif: 45,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 10:30 – 15:00, 18:00 – 23:00 | mardi: 10:30 – 15:00, 18:00 – 23:00 | mercredi: 10:30 – 15:00, 18:00 – 23:00 | jeudi: 10:30 – 15:00, 18:00 – 23:00 | vendredi: 10:30 – 15:00, 18:00 – 23:00 | samedi: 10:30 – 15:00, 18:00 – 23:00 | dimanche: 10:30 – 15:00, 18:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.chezgino.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 14,
    dish_price: 13.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Pizzas au Feu de Bois",
        items: [
          { name: "Pizza Margherita (Tomate, Mozza)", price_cents: 990 },
          { name: "Pizza Regina (Jambon, Champignons)", price_cents: 1390 },
          { name: "Pizza Calzone (Chaussons farci)", price_cents: 1290 },
          { name: "Pizza Quattro Formaggi", price_cents: 1490 },
          { name: "Pizza Tartufo (Extra Truffe)", price_cents: 1690 },
          { name: "Pizza Pesto e Bufala", price_cents: 1390 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats : Pasta & Lasagnes",
        items: [
          { name: "Linguini Carbonara (Guanciale)", price_cents: 1290 },
          { name: "Rigatoni Caruso (Crème, Jambon)", price_cents: 1290 },
          { name: "Lasagnes Al Forno (Maison)", price_cents: 1350 },
          { name: "Penne All’Arrabbiata", price_cents: 1150 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Desserts Maison",
        items: [
          { name: "Tiramisu traditionnel", price_cents: 750 },
          { name: "Panna Cotta aux fruits rouges", price_cents: 650 },
          { name: "Pizza au Nutella (À partager)", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Verre de Chianti", price_cents: 550 },
          { name: "Bière Peroni (33cl)", price_cents: 600 },
          { name: "San Pellegrino (50cl)", price_cents: 450 },
          { name: "Coca Cola / Zero (33cl)", price_cents: 400 }
        ]
      }
    ]
  },
  description: "Chez Gino est une adresse de référence pour les amoureux de la pizza authentique dans le 13ème arrondissement. Installé depuis des années rue Dunois, l’établissement mise sur une cuisson parfaite au feu de bois et des produits importés directement d'Italie. Une ambiance de quartier chaleureuse et sans superflu.",
  insider_tip: "• **Combo Moelle** : La Pizza Regina au feu de bois est la valeur la plus sûre, avec une pâte fine et croustillante.\n• **Détail Authentique** : Les lasagnes sont faites maison chaque matin, un délice fondant souvent en rupture dès 13h.\n• **Expérience Culturelle** : Idéal pour une soirée pizza décontractée entre amis avant une balade vers la Place d’Italie.",
  specials: {
    cuisine: ["Italien"],
    drinks: ["Vin italien", "Bière Peroni"],
    must_eat: "Cuisine italienne. Pizza Regina au feu de bois",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gino-pizza-feu-de-bois/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gino-pizza-feu-de-bois/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gino-pizza-feu-de-bois/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gino-pizza-feu-de-bois/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gino-pizza-feu-de-bois/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gino-pizza-feu-de-bois/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Pizza Regina au feu de bois",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default chez_gino_pizza_feu_de_bois;
