import { SurgicalPlace } from "../../../type-definition";

export const tricotin: SurgicalPlace = {
  id: "poi-tricotin",
  slug: "tricotin",
  name: "Tricotin",
  category: "restaurant",
  subcategory: ["chinois"],
  location: {
    address: "15 Av. de Choisy, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.82090900000001,
    lng: 2.363603,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJU3f8_Sly5kcRX7PdrFjMBGA"
  },
  moods: {
    chill: 80,
    festif: 40,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 10:00 – 23:00 | mardi: 10:00 – 23:00 | mercredi: 10:00 – 23:00 | jeudi: 10:00 – 23:00 | vendredi: 10:00 – 23:00 | samedi: 10:00 – 23:00 | dimanche: 10:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://m.facebook.com/TricotinParis13/?locale2=fr_FR",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Rôtisseries & Soupes",
        items: [
          { name: "Soupe nouilles & porc laqué", price_cents: 1490 },
          { name: "Soupe nouilles & canard laqué", price_cents: 1890 },
          { name: "Canard laqué grillé sec (5 parfums)", price_cents: 930 },
          { name: "Travers de porc sel et poivre", price_cents: 870 },
          { name: "Porc sauté sauce aigre-douce", price_cents: 820 },
          { name: "Bœuf sauté sauce saté", price_cents: 850 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées & Vapeurs",
        items: [
          { name: "Brioches au porc laqué (2 pièces)", price_cents: 470 },
          { name: "Crêpe de riz au rôti de porc", price_cents: 850 },
          { name: "Nems maison (4 pièces)", price_cents: 750 },
          { name: "Raviolis aux crevettes (Ha Kao)", price_cents: 680 },
          { name: "Wontons frits", price_cents: 700 },
          { name: "Salade de méduse", price_cents: 950 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Bière Tsingtao (33cl)", price_cents: 550 },
          { name: "Thé chaud (Théière)", price_cents: 400 },
          { name: "Jus de lychee", price_cents: 450 },
          { name: "Café filtre vietnamien", price_cents: 500 }
        ]
      }
    ]
  },
  description: "Tricotin est l'une des rôtisseries les plus fréquentées de l'avenue de Choisy. Avec ses deux salles et ses canards laqués suspendus en vitrine, c'est l'essence même de la cuisine cantonaise populaire à Paris. Idéal pour un déjeuner rapide ou un festin de viandes laquées entre amis.",
  insider_tip: "• **Choix du Maître** : Le porc laqué est souvent considéré comme l'un des meilleurs du quartier, demandez-le avec du riz blanc.\n• **Expérience Culturelle** : Ne soyez pas surpris par le service ultra-efficace mais parfois tranchant, c'est l'école du 13e.\n• **Le Petit Plus** : Profitez de la vente à emporter en sortant pour ramener de la poitrine croustillante chez vous.",
  specials: {
    cuisine: ["Chinoise", "Cantonaise", "Asiatique"],
    drinks: ["Bière Tsingtao", "Thé au jasmin"],
    must_eat: "Cuisine chinoise. Porc laqué & Canard aux 5 parfums",
  },
  images: {
    hero: "AU_ZVEEXdxSzJUkhBaBH5SfkYWptSL4S-QHGZdMs2xbXPAwtPcw-GRxKWk4CXii3IgDzfDGDJyFcrSxuyHYBXeyTP7bP8HuDp5mKNm1SNjq5zRemASI4TdHXSHxaxXNI26CwmMdoOxzqTb4mgUFRv5Kj7gRNxbfVM5Lh-T1mKCspD3FBWQrs60x-iFIF5b-tmkDJonszfUBcrLvIl30NVjqSDKmkjgg20i4BUhlbs-Sq3wYYGrdCyXVI5XZc1_Eu-5bE8LDfyLC819UqvI5mS2bV0RrSlZTbyzT-kOXWU6d7wSd5eg",
    gallery: ["AU_ZVEHTWNX9xEEx3K3k7gSolAyDByPR45oJtF2_pH1zkpXJJW5Du4QsOBSmUQ-zk_pTOFiPqRacNoYYCDn83Oj38QoKYjnYGXLfrfANnBNqTkq7hWhJ4hw56Xxb_SGHxTR8HR_bBHM1pCTbnHzK7LhxPihJAbeQ6_-iBSPd4CzcOarGEzhnqnzWGg84A5JYNJjBV2ZiQshbZnEFs2U9BVw1RrbsTBvs3nNEeG80myWF1TyLXC7Map1wl8DQ0_oEJ1JzEm4_oIIvkGfSrPxBLfKWjHIWlxtUmBjXTmQOFRxeF8zUpw","AU_ZVEEoYMzMKDZ7z0bRhYY-J-vTZJl1CbKBR6fFgCN5d9M5Vcvf_mxUgvojMbiN6qPb3JRlhOizZD3H_P5g0xDylR4wg5EI3U9PXiFnTqi4ESeeu3kOAjObvTd9thzkFTzbJLu-Ei09Of_leWO2UEYDZb83SLfj2iHBKOzI9Ehg3YDZl-IlXTvXhWrGkNh3CcpAchtfOVRMtPgHby8U4CVeMZiYmRg2VFjsFmqvLM3PwIh5igglKD1XP9h7lT6B2IUH9ZjuMg8uTvcQlw5j4Pn2Eo_--fMTDYongS_25XmKAISpZOrHsQpzPfgtPnP8vv1dpI_vRlJ8RhGeiP6vaqHVY-NnM2ypPz11Nhv6Zym8hHZUGJXc2Tjnk4jsxYJMvxzKMZSXP7ygYwIMRoGxRwPmhGvCQh-tOww8Gf13wVztK86vrpUHWZX_xgvhwo1krhkE"]
  },
  verified: false,
  google_rating: 3.9
};

export default tricotin;
