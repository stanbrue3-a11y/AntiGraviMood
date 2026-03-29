import { SurgicalPlace } from "../../../type-definition";

export const bouillon_pigalle: SurgicalPlace = {
  id: "poi-bouillon-pigalle",
  slug: "bouillon-pigalle",
  name: "Bouillon Pigalle",
  category: "restaurant",
  subcategory: ["français", "bouillon", "traditionnel", "populaire", "brasserie"],
  location: {
    address: "22 Bd de Clichy, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8826242,
    lng: 2.3374171,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJVb7Sx0Vu5kcR5gDcYjssPWw"
  },
  moods: {
    chill: 30,
    festif: 85,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 00:00 | mardi: 12:00 – 00:00 | mercredi: 12:00 – 00:00 | jeudi: 12:00 – 00:00 | vendredi: 12:00 – 00:00 | samedi: 12:00 – 00:00 | dimanche: 12:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://bouillonlesite.com/bouillon-pigalle",
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
      {
        category_type: "starter",
        display_label: "Entrées Populaire",
        items: [
        { name: "Œuf Mayonnaise (Champion du Monde)", price_cents: 250, description: "L'incontournable classique parfaitement exécuté" },
        { name: "Poireaux Vinaigrette & Noisettes", price_cents: 340 },
        { name: "Os à Moelle Grillé", price_cents: 450, description: "Gros sel et pain de campagne" },
        { name: "Céleri Rémoulade Muscadet", price_cents: 280 },
        { name: "Sardines à l'Huile & Beurre", price_cents: 480 },
        { name: "Terrine de Campagne Maison", price_cents: 420 },
        { name: "Bulots et Mayonnaise Maison", price_cents: 650 },
        { name: "Soupe à l'Oignon Gratinée", price_cents: 390 }
      ]},
      {
        category_type: "main",
        display_label: "Plats de Tradition",
        items: [
        { name: "Saucisse au Couteau & Purée", price_cents: 960, description: "Véritable purée maison au beurre, jus de viande" },
        { name: "Petit-salé aux Lentilles", price_cents: 1180 },
        { name: "Blanquette de Veau à l'Ancienne", price_cents: 1250 },
        { name: "Confit de Canard & Pommes Sarladaises", price_cents: 1350 },
        { name: "Steak Frites Sauce Poivre", price_cents: 1280 },
        { name: "Brandade de Morue Gratinée", price_cents: 1050 },
        { name: "Gratin de Macaronis au Jambon", price_cents: 900 },
        { name: "Pot-au-Feu Traditionnel", price_cents: 1150 }
      ]},
      {
        category_type: "dessert",
        display_label: "Desserts Maison",
        items: [
        { name: "Riz au lait au Caramel Beurre Salé", price_cents: 350 },
        { name: "Mousse au Chocolat (Pot de 100g)", price_cents: 450 },
        { name: "Île Flottante à la Praline Rose", price_cents: 380 },
        { name: "Éclair Géant au Chocolat", price_cents: 450 },
        { name: "Baba au Rhum Ambré", price_cents: 550 },
        { name: "Profiterole au Chocolat Chaud", price_cents: 520 }
      ]}
    ]
  },
  description: "Le renouveau du bouillon parisien à Pigalle. Une immense brasserie démocratique où l'on savoure les classiques de la cuisine bourgeoise (œuf mayo, saucisse-purée, profiterole) à des prix imbattables. Un lieu vibrant, bruyant et convivial qui capture l'énergie du quartier.",
  insider_tip: "• **Stratégie d'Attente** : Le lieu ne prend pas de résa et la file peut impressionner. Venez à 11h45 ou vers 14h30 pour un passage quasi immédiat.\n• **Expérience Terrasse** : Demandez impérativement l'étage pour profiter de la terrasse chauffée qui surplombe le boulevard de Clichy.\n• **Combo Satiété** : L’œuf mayo à 2.50€ est obligatoire. Enchaînez avec la saucisse-purée (légendaire) pour l'unité de mesure 'Moelle' ultime.",
  specials: {
    cuisine: ["Française", "Bouillon", "Populaire"],
    drinks: ["Vins au pichet", "Bières à la pression"],
    must_eat: "Cuisine française. L'œuf mayo champion du monde & Saucisse au couteau purée",
  },
  images: {
    hero: "AU_ZVEGe9bDqiNtjwcAquWAZV0kCqJrPJCMavbVwcJeVvMnJjWl24QVC6rnVyb3uqtPu-CZ0M4saWgD71YvztXemkbcxveUguzzpSZCYgeh2exritetm-10fLjNki-FiXpy-dNWheL7p-zDS7oz61eZXq34ohlkHfqurPfzQsh9_GbcU2B-k12cP8i8bipWnJqBH--hrYTFzSQfuosBnUkuvDVX0IB-YRvgXwuSNYhoMvtG7vf_r5CkAU8RgaKlJbRQEdEAPzhqyZ0F77gzhiOHZLPHkCz5c6Bj6wz17itb4puNr9w",
    gallery: ["AU_ZVEGSNkLL9x9M4m1vL5sgvs1bM81UjVHcfe4e8GJ-UF5liOioQxapcyOvo_rZxoodA-oeDpS6zQ_4iid69B13gEj_SG93flBR4GetWTaZKDCVxe0pMMFmypaxqySNERjRtJ-WD61vAzhcYrWZM9wQ63pA5SOIACnhyDr8CC9XOR9rhJsdNFIOhTR2U6-Pyczn7Rmg7Vd0hrn8jDaOTbAczRNOlD3sWZXYykNPtUVO3WVDIaV5thu2OoMmfnBAkAuiVrBdskI3q6PYV8tzEmnjun1wmROJ4SK_lfJAh6wee7qSglzUFL5AV0ch-S5rkH_WRMN-8QIySnNnwiv2aoSy7rk258vOTPZzJN-UjXoauOnomXO6Mf3PDmf9UQkAOYfB7QznVI2Upw_Kyv4yvwEs8fqpy1_S0bffZASUSrgZgbJBnFmfE4w70wuJCbgKYjvb","AU_ZVEGSoBL8EdpAVLXxL5lawZR2vicRRfHz5R7fA3d92X5Xw7Fwh_y81lTsIhmQy2hSVkKi7JMjGADUoULbHtmbGJU6B40v7EBAN4SOg_GclCJIhI5Vd-RvC5IukVcEM_tCT3gcJw3-KNfCh0uV3IDx88OoGkqh8uWgGtxH-5j2qrKIcZFSeJOerUCfgEO_LnsQZHCqk7-VhB0UqHOEK8eiVwhooTvaMTi24YsOkmEPrtlDHEZUS6hi43z9KvGedqW7GKnGzrkFCitXsnshj5sb5sJLD5H1fasZYoKEkxRgCHczcPMRuTNepVZs3lVufW-f0dfZ1Ty8Y2JkExL9L5B82lisEhu0PeLaGBmgtTVAooXQkutMWMplVuIdED_CsWOXfq5cJR4sYzhGM28-5V8kjT_ulMZCeUHxffRp1X5oHKS6zCE"]
  },
  verified: false,
  google_rating: 4.6
};

export default bouillon_pigalle;
