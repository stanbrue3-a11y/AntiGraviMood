import { SurgicalPlace } from "../../../type-definition";

export const mondol_kiri: SurgicalPlace = {
  id: "poi-mondol-kiri",
  slug: "mondol-kiri",
  name: "Mondol Kiri",
  category: "restaurant",
  subcategory: ["cambodgienn"],
  location: {
    address: "159 Av. de Choisy, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.82807930000001,
    lng: 2.3581294,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJZ1bLJ49x5kcRUbYpGkHhU5g"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:30, 19:00 – 23:00 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 23:00 | vendredi: 12:00 – 14:30, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: 12:00 – 15:00, 19:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.mondolkiri.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    dish_price: 13.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées (Khmères)",
        items: [
          { name: "Salade d'Ananas aux Crevettes", price_cents: 950, is_highlight: true },
          { name: "Raviolis à la vapeur (Knom Krok)", price_cents: 850 },
          { name: "Rouleaux de Printemps Maison", price_cents: 700 },
          { name: "Satay de Bœuf Grillé (x3)", price_cents: 900 },
          { name: "Salade de Papaye Verte (Épicée)", price_cents: 850 },
          { name: "Ailes de Poulet Farcies", price_cents: 1000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Spécialités de la Maison (Plats)",
        items: [
          { name: "Amok de Poisson (Traditionnel)", price_cents: 1450, is_highlight: true },
          { name: "Curry Rouge au Canard & Litchis", price_cents: 1500 },
          { name: "Lok Lak (Bœuf sauté au poivre)", price_cents: 1400 },
          { name: "Mekong Prawns (Sauce Coco)", price_cents: 1650 },
          { name: "Poulet au Curry Jaune & Bambou", price_cents: 1350 },
          { name: "Saumon Grillé à la Khmère", price_cents: 1550 },
          { name: "Tofu sauté aux Légumes Croquants", price_cents: 1250 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules & Menus Découverte",
        items: [
          { name: "Menu Découverte (2 pers.)", price_cents: 4200, is_highlight: true },
          { name: "Formule Midi (E+P)", price_cents: 1400 },
          { name: "Formule Midi (E+P+D)", price_cents: 1750 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs (Desserts)",
        items: [
          { name: "Flan au Lait de Coco & Taro", price_cents: 650 },
          { name: "Mangue Fraîche & Riz Gluant", price_cents: 850 },
          { name: "Banane au Lait de Coco", price_cents: 600 },
          { name: "Gingembre Confis Maison", price_cents: 450 },
          { name: "Perles du Japon aux fruits", price_cents: 650 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave / Boissons",
        items: [
          { name: "Bière Angkor (Cambodge)", price_cents: 650, is_highlight: true },
          { name: "Thé Vert Jasmin Artisanal", price_cents: 450 },
          { name: "Jus de Coco Frais (Entier)", price_cents: 700 },
          { name: "Café à la mode de Phnom Penh", price_cents: 350 },
          { name: "Infusion Gingembre Frais", price_cents: 450 },
          { name: "Verre de Vin Blanc (Viognier)", price_cents: 600 }
        ]
      }
    ]
  },
  description: "Mondol Kiri est l'ambassadeur de la gastronomie cambodgienne dans le 13e arrondissement depuis 2010. Situé sur l'avenue de Choisy, ce restaurant cultive un art de vivre khmer tout en finesse, loin de l'agitation des grands bouillons. La spécialité, l'Amok de poisson cuit à la vapeur dans une feuille de bananier, est un chef-d'œuvre de douceur et d'équilibre. L'accueil y est d'une politesse rare, offrant une parenthèse apaisante et authentique aux amateurs de saveurs d'Asie du Sud-Est.",
  insider_tip: `• **Le Trésor National** : Ne passez pas à côté de l'Amok, c'est le plat national cambodgien et il est ici exécuté selon une recette familiale ancestrale.
  • **Mariage Inattendu** : Le magret de canard aux litchis en curry rouge offre un contraste sucré-salé d'une modernité surprenante.
  • **Sérénité Requise** : Contrairement aux usines à soupe du quartier, on vient ici pour prendre son temps. Réservation conseillée le week-end car la salle est intimiste.`,
  specials: {
    cuisine: ["Cambodgienne"],
    drinks: ["Angkor Beer", "Thé Jasmin", "Jus de Coco"],
    must_eat: "Cuisine Cambodgienne. Amok de Poisson & Salade d'Ananas",
  },
  images: {
    hero: "AU_ZVEHUXNtMg-dXXAHWPBpaqYLqQBTIM7xLuc-13u7tDc64wIb_1ba7H4ZLjBQFjH0pV12voiYfvxfxCKKH95zxBh91gxMmT7p-h1zBRmBy8P8vdifUWnkW0_0Ap9U_a24vP9IiOoSHU62iXsepkF0Xp3jb-TYEViZxozdbY29X14h_cfpucbHaizn4Q1-41nW64BVDsvBxabYcOCekLcYnAJTZ6sxtQDHNcHCLl8XPIEdJXaprDHue2RrpnA-oSHwCqEzB8ukSX_WyfHD5Rn2OSJkbdBPUN8fShg3z7R4ps29-wQ",
    gallery: ["AU_ZVEF9ef43PY3Ni8tgOtTYgheBWM0Dc8CnwgkRzpMRa4lbWFF_3WJIJmTvRcOjfweQmmm6xquLxjTRCJR9zk2Xm_pKXQfpjGVUfF4WZ9kOCP6__iYb-RVHe4zPYqshRMUlGMU8t_j3j_F7DhYfqQEqGlLtv0AT2lC78jiCp2GCUJq8uPW80sSUOIgTtBk_cHuGygUZgIear-OJby4lsVeucRDLw3m-8ZezEFfnvrBMeT4pKuQ8_1RA_i52nY4VnGh65qVFRcNl7s2wrIgIrn2evSMu1lHljoGWRKFP4RELBaIg9Q","AU_ZVEEW07va6VkuI-N0CA19_A6k1W5yJOGo__0HIeEqHeObZ6kOkOgBf1pjD9A7aRi0PpXt3Ocmt4zz-tUm2c8V-kXM5veQa_FL5YxVZ3_h6nsmmwIbG3VOlK5-UOA34wEuCSaFUMeNu15QUn6w9UWtByq9cB3Xaz1QpdSDZ5yBsjD66soJen6cKK6UpQpB9UMCccPAerR2QrmNpQX9pmhUBGCyQTny5d6VPAxVZIvHW9IsFHI1uxSFyZ6YYmn5Jw6_rWJiUFNFZiayNUW3K_s6qCIutBI60tEs6xWf_7cJHMh8MxMYstcTPS9HtznkiqMitAjDcyFXVWbYnPQm-vQc8MO57_dWGNrPqdyjpAuwgTHMsM8-UUTnTfE3W_5cDl87-JBwLRStDAPNR5CnWqDddHthOmu_vNkYPn8SJOwQ3ieOX8ij"]
  },
  verified: false,
  google_rating: 4.6
};

export default mondol_kiri;
