import { SurgicalPlace } from "../../../type-definition";

export const geoelia: SurgicalPlace = {
  id: "poi-geoelia",
  slug: "geoelia",
  name: "Geoélia",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "125 Rue de la Tour, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.863265,
    lng: 2.2744685,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJI15J0wVl5kcRJ15AKiwqxfM"
  },
  moods: {
    chill: 90,
    festif: 0,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 13:30, 19:00 – 21:00 | mardi: 12:00 – 13:30, 19:00 – 21:00 | mercredi: 12:00 – 13:30, 19:00 – 21:00 | jeudi: 12:00 – 13:30, 19:00 – 21:00 | vendredi: 12:00 – 13:30, 19:00 – 21:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://geoelia.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 150,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Les Menus Immersion",
        items: [
          { name: "Menu en 7 Temps", price: "160€", description: "L'expression totale du terroir par Camille Saint-M'leux", highlight: true },
          { name: "Menu en 5 Temps", price: "125€" },
          { name: "Menu Déjeuner (3 Temps)", price: "65€", description: "Uniquement servi le midi en semaine" }
        ]
      },
      {
        category: "Les Étapes du Terroir",
        items: [
          { name: "Poireau de Sables", price: "0€", description: "Cuit au charbon, condiment praliné noisette" },
          { name: "Betterave Crapaudine", price: "0€", description: "En croûte de sel, jus de réglisse", highlight: true },
          { name: "Omble Chevalier", price: "0€", description: "Vapeur douce, émulsion de foin" },
          { name: "Volaille de la Cour d'Armoise", price: "0€", description: "Le suprême rôti, la cuisse en civet" },
          { name: "Agneau de Lait des Pyrénées", price: "0€", description: "L'épaule confite, ail des ours" },
          { name: "Champignon de Paris", price: "0€", description: "En textures, du cru au torréfié" }
        ]
      },
      {
        category: "Finales & Échos",
        items: [
          { name: "Chèvre Frais & Herbes Folles", price: "18€" },
          { name: "Rhubarbe & Sureau", price: "0€", description: "Sorbet maraîcher, meringue légère" },
          { name: "Chocolat & Sarrasin", price: "0€", description: "Ganache fumée, croustillant breton" },
          { name: "Mignardises de Saison", price: "0€" }
        ]
      },
      {
        category: "La Sommelerie",
        items: [
          { name: "Accord Mets & Vins 'Empreinte'", price: "85€" },
          { name: "Accord Sans Alcool 'Botannique'", price: "65€" },
          { name: "Verre de Muscadet Sèvre-et-Maine", price: "14€" },
          { name: "Bouteille de Morgon (Vignes de 80 ans)", price: "75€" },
          { name: "Thé Vert Genmaicha", price: "12€" },
          { name: "Eau de Source Filtrée", price: "7€" }
        ]
      }
    ]
  },
  description: `Geoélia est la révélation gastronomique de Camille Saint-M'leux dans le 16ème. Fraîchement étoilé en 2026, ce restaurant prône une cuisine de terroir ultra-précise, où le végétal prend souvent la tête d'affiche sans jamais oublier la gourmandise. Dans un cadre zen et élégant, chaque plat raconte une histoire de producteur, sublimée par une technique moderne et audacieuse.`,
  expert_catchline: `Le nouveau visage du terroir parisien : végétal, technique et étoilé.`,
  insider_tip: `• **Le Pouvoir du Végétal** : Laissez-vous surprendre par les plats à base de légumes (comme la Betterave), ils sont souvent plus impressionnants que les viandes.
  • **Le Midi** : Le menu à 65€ est l'un des meilleurs rapports qualité/prix étoilés de l'arrondissement.
  • **La Table Face à la Fenêtre** : Idéale pour profiter de la lumière naturelle de la rue de la Pompe.`,
  specials: {
    cuisine: ["Gastronomique", "Français moderniste"],
    drinks: ["Vins Nature/Bio", "Infusions Maison"],
    must_eat: "La Betterave Crapaudine en croûte de sel. Une leçon de goût.",
  },
  images: {
    hero: "AU_ZVEFPzX6zpCurEhvFZ1NpH-kxL68EdG84oviFX7AXmLoEVuEsGjWGFhVJDs1r628XIow6Xogteyx9blbhNswVcQiOiyzJgysSVPwnAR0_oMQ5hx8iakF9QboFroutQEBZKxsHrVef6mD1u91f0FTWiFSYL-eWU4fb2p2YXsPbqGpKDivkGf-dOp2jfwccZV_XWEs6wWZCg5oJ57ds16r_ZC2AiPshGWw4tOUGa46pn30m6CQgXasz6bdJnOQfK4IDJlKZn7_95ce6S9NzjzYLwWmvHs6cT0psLJzi2H2ZSPIm0jC2x_PJZuyu_QGIBWnHcsn430erHVQQkcLVjOrJCNtvU1K5EyAZjIkOl0RGqBfnVV1pOwjPQM8AvEZTs9OrydkjxYuGDn0myB_gn6LAORZL4u9Q7aIkeQhYuJzhjGvvSNsiyKURupjlvmMxDy10",
    gallery: ["AU_ZVEHtKml0NBzQNcD0dezEM0ul13hZij_Bt0oKAb2A3OvmyeCCxACzfYzlfiACWaNO5OPP8wTxxdkfdF1xgFnxPgJ22_0RNX0JsySdtIzVbw4HSZKz5MfTM-9hDITrZ-zaYPQJioibtlDMOG0-beF6uoaUeUv-wUknw18P-99ZKILwsfBPN_O4UXPNXaQkbJqSvz7QrliCpRnj8SjcbiqsYfmfuPBwdPv_R0_jOvFmPwow_Fy1ySglHyHIExMp5pZq1iibk2phtestQlTNgbRtKPB_LgNxzn4i0DjIdfmMRlCy3g","AU_ZVEHM2iXICWXkni8RfeIPAeWD_ndy7Ny8OqpKhOMO8Y0R3ICk62anhrmmbOQlbX4k_93Shrn5m5aptqFHXovWxtYjpqrJvOMwrN6XOqs54QD4ra4wYOlY41qYSf0O6vqtp4moYRQzDHAd-3JjXOiKmdjFkQJi9dUAZl4IYj7CJJyA6gQViEcb78Q-WmWneL3JQd2Ssr0J_iY72uJtiLHqglqF34Kdbs3IYW4seNXsfSoJJvwuDVsM9P05T1KfKn4YrA9lADQMkLfyti-DdvcO9RDkCHT2TZPHXX474U0o2OMdmmOcjpQnMzuSxGfqKWrtffGCbNCj46sKqYjO5UedMBKFiEHcm9sbqwG9URaJWGN8XzabptZxb29Q43iPEZSizfaIrJAAYWDKagk_8wx-uFmRTDWtTrYsn5SIYwObAzfyZK7hYBnKWyt023YQgA"]
  },
  verified: true,
  google_rating: 5,
  michelin_stars: 1,
  real_talk: {
    text: "Geoélia, c'est calme, c'est beau et c'est surtout très bon. Camille Saint-M'leux est un technicien hors pair qui ne cherche pas à épater la galerie mais à servir le produit. Une adresse qui va monter très haut.",
    must_eat: "Betterave Crapaudine",
    le_secret: "Demandez à goûter leurs infusions maison en fin de repas, elles sont réalisées avec des herbes fraîches sourcées chez les mêmes maraîchers que les plats.",
    le_son: "Une acoustique hyper travaillée, parfait pour un dîner confidentiel.",
    le_must: "L'intelligence du menu en 5 temps qui est parfaitement équilibré sans lourdeur."
  }
};

export default geoelia;
