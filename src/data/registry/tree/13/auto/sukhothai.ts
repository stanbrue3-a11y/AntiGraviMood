import { SurgicalPlace } from "../../../type-definition";

export const sukhothai: SurgicalPlace = {
  id: "poi-sukhothai",
  slug: "sukhothai",
  name: "SukhoThaï",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "12 Rue du Père Guérin, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8303761,
    lng: 2.35398,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJhTseBY5x5kcRGCF5WZ7atvU"
  },
  moods: {
    chill: 80,
    festif: 35,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 11:45 – 14:30, 18:45 – 22:30 | mardi: 11:45 – 14:30, 18:45 – 22:30 | mercredi: 11:45 – 14:30, 18:45 – 22:30 | jeudi: 11:45 – 14:30, 18:45 – 22:30 | vendredi: 11:45 – 14:30, 18:45 – 22:30 | samedi: 11:45 – 14:30, 18:45 – 22:30 | dimanche: 11:45 – 14:30, 18:45 – 22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://suko-thai.eatbu.com/?lang=fr",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 20,
    dish_price: 15.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Curry & Wok",
        items: [
          { name: "Curry vert au lait de coco", price_cents: 1290 },
          { name: "Poulet au Curry Massaman", price_cents: 1590 },
          { name: "Pad Thaï aux crevettes", price_cents: 1600 },
          { name: "Bœuf grillé sauce épicée", price_cents: 1800 },
          { name: "Poulet sauté au basilic", price_cents: 1450 },
          { name: "Canard au curry rouge", price_cents: 1400 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Salades & Fritures",
        items: [
          { name: "Salade de papaye verte", price_cents: 1100 },
          { name: "Nems thaï végétariens", price_cents: 900 },
          { name: "Salade de bœuf épicé (Laab)", price_cents: 1300 },
          { name: "Brochettes de poulet Satay", price_cents: 1290 },
          { name: "Soupe de Crevettes Lemon-grass", price_cents: 990 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Thaï Desserts",
        items: [
          { name: "Riz gluant à la mangue fraiche", price_cents: 950 },
          { name: "Flan thaï au lait de coco", price_cents: 650 },
          { name: "Perles de coco à la vapeur", price_cents: 600 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Bière Singha (33cl)", price_cents: 600 },
          { name: "Thé glacé thaï maison", price_cents: 500 },
          { name: "Jus de coco frais", price_cents: 550 },
          { name: "Infusion citronnelle", price_cents: 450 }
        ]
      }
    ]
  },
  description: "SukhoThaï est une escale thaïlandaise authentique située près du Parc Montsouris. Réputé pour la justesse de ses épices et la fraîcheur de ses produits, le restaurant propose les grands classiques du Siam dans un cadre épuré et zen. Une adresse de confiance pour un voyage culinaire précis et parfumé.",
  insider_tip: "• **Choix du Maître** : Le Curry Massaman est particulièrement réussi, avec une sauce onctueuse et une viande fondante.\n• **Expérience Culturelle** : La décoration intérieure transporte immédiatement en Thaïlande, calme et reposante.\n• **Commande Signature** : Le riz gluant à la mangue est le final parfait pour apaiser le feu des épices.",
  specials: {
    cuisine: ["Thaïlandaise", "Asiatique"],
    drinks: ["Bière Singha", "Thé glacé thaï"],
    must_eat: "Cuisine thaïlandaise. Curry Massaman & Pad Thaï",
  },
  images: {
    hero: "AU_ZVEEcafA1Y5rPKZytr6G087O0O651xsEQKhzy4RQEEJQORJR8qna9I_wL9AuT7nCYPaZfsZka8AD65zV10R2zd8t0eZmQi7u03WoYmZr6a9q8Y8NEUwk1OrxdoeuyLkAyIlNfh2J5mNpW7Dc144mcplXqdAugc88LKVyTEDoKS5afYvVTHgc5vt0SgtMkNm1Dcd3VaHl8WU5X3j0d7yC8gtDg7uoosPSKsK7ZnP6mEDoVBQY-oXIFoz0fOMmCzjWdFNLt_79w3wt22rKFYy6DnUklARYmGuGAjGq5SmyONrvjvZB2bg3fRDhmtCEZj-5pcZMInODte2FNZT6aausYX1mX8EZR5dtfqVsBVn5kTJMHX64hZG-Z-EW7TM0oDH1wKNyvMbMuS-As6XcrPYJKWHBNYRn1FEhuu-DvKK5iuJ2QlQ",
    gallery: ["AU_ZVEGcni5kR5b_Be3XtZ-lLIhmEugAWtYonu-DxPh3IsDUH140MiRsh4fWmZnuHk39oazuqg5J1yTRch05Tf3USr51Lc4hQC1vvkKIo0fq_FYt4KGwo7AfIaPWrrSeiBYs7azYzumITknahCYnr63xgR4gLbVoMtLN8kCvFRIg6MTPYpWAPZshYIZo0NedbJtpNfF0jMXqQVR8OCCyMqgzpa_o6Kx41iZsQCAkwv7rSshwqBb3-kZgxpQHA1X5S1kPLqLUKAExUG0-LkWMbpiChn0hwRDlOQftrthLHv1Ue4rX39OF1Ycf-WRKutV-A5xy_FaxT-ui4HhHKFzh5Eap_nsWEVl1GPmxoKDbLEVQsyKFDvesVzGt3pnjMvTfo2Az_YNVtUNsKUQpBfWpKwxFA7-zNZyJVhHaes1MCWNImr4GG8A","AU_ZVEEKVYUnV6qzTir4sFqc2nfTiviSFCZw7DlGDZMAnjVrBmH0M6WOO9yCPuM2-qjuKq6aajV2UTTerJQcwQ9DYCJKMkIkvVE-TMPnnlCrT9kU7pZXGryBUTYeZNrxFlmp1NEXxNc6mtnaXv0IsZ6kx1_u1Ix_rlqHkxCN5NflKW880fcWdDj-H9F1wSrL_KxQ2bSgoKe9DVcVaSJOBMzlbccUUmkw7cFGpRFFdGLKMQOKU2RrqqjY12Jt-KhrpOlEAMU_G2kCuME1-nPp1rpSWX5CAMCpJr23hCzVLGtZKhxPXuBDCSysYGnPGAVVTKNC94WI_kOpAzNE9UiJ0kGzk0CpNrHEAc4_Xrn1DMMIBXjqJONu4vwDX03nEO1DVmRBCk4Kl1WMkt3UpxVx0_IuHI4EJnP8XDLfdZin61j-TLDMfy5w-v-TsHFA_Ls3nQ"]
  },
  verified: false,
  google_rating: 4.4
};

export default sukhothai;
