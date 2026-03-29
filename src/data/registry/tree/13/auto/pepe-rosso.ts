import { SurgicalPlace } from "../../../type-definition";

export const pepe_rosso: SurgicalPlace = {
  id: "poi-pepe-rosso",
  slug: "pepe-rosso",
  name: "Pépé Rosso",
  category: "restaurant",
  subcategory: ["trattoria"],
  location: {
    address: "77 Rue de la Glacière, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.829939,
    lng: 2.34393,
    nearest_metro: "Glacière",
    metro_lines: ["6"],
    google_id: "ChIJfShPapZx5kcRKdNvNJ1o8fg"
  },
  moods: {
    chill: 85,
    festif: 40,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:30 – 22:30 | mardi: 12:00 – 14:30, 19:30 – 22:30 | mercredi: 12:00 – 14:30, 19:30 – 22:30 | jeudi: 12:00 – 14:30, 19:30 – 22:30 | vendredi: 12:00 – 14:30, 19:30 – 22:30 | samedi: 19:30 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/Peperossorestaurantparis/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    dish_price: 14.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Pasta & Secondi",
        items: [
          { name: "Penne All'Arrabbiata (Piquantes)", price_cents: 1300 },
          { name: "Spaghetti Carbonara (Vraie recette)", price_cents: 1450 },
          { name: "Escalope Milanaise (Veau)", price_cents: 1850 },
          { name: "Risotto aux Cèpes parfumés", price_cents: 1600 },
          { name: "Linguine aux palourdes", price_cents: 1750 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats : Pizzas",
        items: [
          { name: "Pizza Margherita Classica", price_cents: 1100 },
          { name: "Pizza Napolitaine (Anchois, Câpres)", price_cents: 1250 },
          { name: "Pizza Orientale (Merguez, Œuf)", price_cents: 1400 },
          { name: "Pizza 4 Saisons (Artichauts, Champignons)", price_cents: 1450 },
          { name: "Pizza Bianca au chèvre miel", price_cents: 1500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Classiques Italiens",
        items: [
          { name: "Tiramisu maison au café", price_cents: 700 },
          { name: "Mousse au chocolat noir", price_cents: 650 },
          { name: "Affogato al caffè", price_cents: 600 },
          { name: "Panna Cotta à la vanille", price_cents: 650 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Verre de Montepulciano", price_cents: 600 },
          { name: "Bière Birra Moretti (33cl)", price_cents: 550 },
          { name: "Limoncello de sorrento", price_cents: 500 },
          { name: "Eau minérale plate ou gaz (50cl)", price_cents: 450 }
        ]
      }
    ]
  },
  description: "Pépé Rosso est une trattoria familiale nichée au cœur du quartier de la Glacière. Reconnue pour sa cuisine italienne généreuse et ses recettes traditionnelles exécutées sans fioritures, c'est l'adresse idéale pour retrouver le goût de l'Italie dans une ambiance intimiste. Les pâtes y sont al dente et l'accueil toujours souriant.",
  insider_tip: "• **Choix du Maître** : Les Spaghetti Carbonara sont réalisées dans les règles de l'art, sans crème, un must pour les puristes.\n• **Détail Authentique** : Ne manquez pas le Tiramisu maison, souvent considéré comme l'un des meilleurs du quartier.\n• **Expérience Culturelle** : Une adresse prisée des habitués du 13e qui cherchent à s'éloigner des grands axes bruyants.",
  specials: {
    cuisine: ["Italienne", "Pizzas"],
    drinks: ["Vin de pays", "Limoncello"],
    must_eat: "Cuisine italienne. Spaghetti Carbonara & Tiramisu",
  },
  images: {
    hero: "AU_ZVEHCEO5wXpwabX2w6UeEh2xX7Lvo9eru24MKZezmj1_ceENdF_9yVxw48Y0x7HqtM5nmxfjz1ZLGvtyxDdLxtqnG1JW8guO7pszBXd59y_Zdhh4EB9sk7epItZ61twbNBtIW5Tw8aDf2OETwA1ldyvqu7JKN12jopW13Is16SrV-F8xytMJk53fdRdP8Q7MrROZQnqBD9Q2yawCJd0MxRWl2JDGU8xu83NBFfdTTX5ut9z2VBOcyHCLpiUhM_4BQWNodgR9i4D3moRNCdCKj51-bSd1pxP5rIy_kAQFh47AMcg",
    gallery: ["AU_ZVEH0jTAQmYuCR_H23AYss_yQQdBZOj5lHy0F4ILAHxtpRqedybFedQNbLKL-yu1XlPHh5WTMHzTHU4IJjCcfAKTti8OI_QhIMM4BFJNWL6VyHL6YCnmaDTn0O1CQqo90ebYMDEJTkddsIH5_viytfmRi-qu4jvlomV8ApH_SO9LheSWFl-PpU1VqPO4LeLXiZpRHkNMrH6QRgZXlbTlr-9XcZgPoL2BFKqyLyU6J0mLzRtpCb3CY_V6Yn63M6tRf-bDLdPTcfQ04e7t2UJGWJaOCxhppvdASdPsXJK4CKW2T5Q","AU_ZVEHU420LDHUP3cFd1CoVYJ0BPGPZgsWHgoI5d5l6AHpJJBlOj5yBOcoaawFlejwhnLOyqj10Qke2DXXf9e0yJ1wrTTe7kFHPHjFS24m3TobiEyeXSM20rT3cCmHzeClPU4bU-zpunRmm978cM7c-Hhzdt9ZG8OH_hILo3MuPd8IQewZVKSCe8kvJkMRx5U-MtpP3Bk-g6s_dx90piwRHlBXN2h6V8TW-LGaPD-NNkskklyM0TMtf8U6H-xGGogXjJ7wPSPZ6iEjvwYPjjyfE3O28f3DrxklvlzVAIo39wZyqN2kgMelXOYwVsCTyqKWbLVKwpJzLT8QqWwyiY85sRoyoI6z5WoPKIyamac7bD4EDlvGqMSeXiFuAkTPuhGKhg9aDcESaMaJISCEwJlxaXNzVR-I4tUHneMpyBe7DPp-pJr_GQFSQ5dQjiuHR80eY"]
  },
  verified: false,
  google_rating: 4.2
};

export default pepe_rosso;
