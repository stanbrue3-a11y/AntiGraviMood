import { SurgicalPlace } from "../../../type-definition";

export const le_vieux_chalet: SurgicalPlace = {
  id: "poi-le-vieux-chalet",
  slug: "le-vieux-chalet",
  name: "Le Vieux Chalet",
  category: "restaurant",
  subcategory: ["français", "traditionnel", "historique", "terrasse", "montmartre"],
  location: {
    address: "14 bis Rue Norvins, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8869736,
    lng: 2.3402793,
    nearest_metro: "Abbesses",
    metro_lines: [12],
    google_id: "ChIJGz8iSVtu5kcRpfomTl1YfWA"
  },
  moods: {
    chill: 95,
    festif: 25,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: Fermé | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: 12:30 – 14:30, 19:30 – 21:30",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maps.google.com/?cid=6952810557496294053",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées de Tradition",
        items: [
        { name: "Soupe à l'Oignon Maison Gratinée", price_cents: 950 },
        { name: "Escargots de Bourgogne (x6)", price_cents: 1250, description: "Beurre persillé et ail" },
        { name: "Terrine du Chef & Cornichons", price_cents: 850 },
        { name: "Salade de Chèvre chaud sur Toast", price_cents: 1100 },
        { name: "Méli-mélo de Tomates Mozzarella", price_cents: 1050 },
        { name: "Os à Moelle à la Fleur de Sel", price_cents: 950 }
      ]},
      {
        category_type: "main",
        display_label: "Les Plats Gourmands",
        items: [
        { name: "Bœuf Bourguignon à l'Ancienne", price_cents: 1850 },
        { name: "Confit de Canard du Sud-Ouest", price_cents: 1950 },
        { name: "Sole Meunière Citronnée", price_cents: 2800 },
        { name: "Magret de Canard au Miel & Épices", price_cents: 2100 },
        { name: "Blanquette de Veau au Riz Pilaf", price_cents: 1750 },
        { name: "Faux-filet Grillé (250g)", price_cents: 2250 },
        { name: "Truite Meunière aux Amandes", price_cents: 1800 },
        { name: "Plateau de Fromages de Nos Régions", price_cents: 1450 }
      ]},
      {
        category_type: "dessert",
        display_label: "Les Douceurs Maison",
        items: [
        { name: "Tatin Maison & Crème Fraîche", price_cents: 850 },
        { name: "Crème Brûlée à la Cassonade", price_cents: 750 },
        { name: "Mousse au Chocolat Noir 70%", price_cents: 650 },
        { name: "Profiteroles au Chocolat chaud", price_cents: 950 },
        { name: "Café très Gourmand", price_cents: 1000 }
      ]}
    ]
  },
  description: "Un secret bien gardé de la rue Norvins. Ce restaurant rustique cache l'un des plus beaux jardins-terrasses de la Butte. On y déguste une cuisine française familiale et sans prétention, à l'ombre des arbres, loin de l'agitation de la place du Tertre voisine.",
  insider_tip: "• **Timing Stratégique** : En été, demandez impérativement une table dans le jardin intérieur, loin de la rumeur de la rue Norvins.\n• **Combo Moelle** : Le Confit de Canard est ici une référence, particulièrement avec les pommes de terre à la lyonnaise.\n• **Expérience Culturelle** : Prenez le temps d'observer les photos d'époque aux murs ; elles racontent le Montmartre des peintres et des poètes.",
  specials: {
    cuisine: ["Française Traditionnelle", "Bourgeoise"],
    drinks: ["Grands Vins", "Liqueurs Artisanales"],
    must_eat: "Cuisine française traditionnelle. Confit de canard & Tarte Tatin maison",
  },
  images: {
    hero: "AU_ZVEFT1s6n1BD1XttMF3dc13AjHlU7UitqE3BbiDTsv9voO6Eo7RrG87_tpwfkOSc32sSVPX0yz3RfI_3pnrv481SW-OnQDuJk7xLEWI-eCqKZGvVKy4ngZj76aF_DecEytg8lmLNWso3L-UsL1Wu9bsKblWwe-V4H610Hip9snoCiqKv0BC_D1sixUrKi1l_aDu0QgXn4qpc_RGPYK3UcRrx54LBbJpDLM8wAZezJtoogygtVjA-FSFMU1tJLXdv8PC4KFjBzA8yXuFz0xfZ-KdjyNbGlaDeEkc-cEuueLQXz-zhsT8B4OpqF8dYmHRhXFhh7AGcUcDaL9t0swyULuqqaY_YCxRscEvi3hMLkhyuSgxPeXArxUTGoxmjL4WV5FjPOyy9jjJuQIM1ruUvCrXSsr02jk359CAgDCbZzsXNnEg",
    gallery: ["AU_ZVEHk3o_cYLiTuNeUCgzrQ6HqYF7eaj3uepvp5mBaymMritM6RtvoKLC9xh3lH4CpGUHvBBJGoqkirkFpCwrPmAwIkx9pDv0ImRxry3mxOXuchOXhPvz2-fhEadQCRubEdlfxJRBFEh3yw1Ua0R4Foq11ppngMIdbM_lnuycka3S5eYX8Um9Dql0nGawdaqtlKW5gZ0NrPq-ok_HnVnKJ2fmHpf3gqVXR7NxfGdXmHAOwD_whzItKtSRxV1AG92gn6aWzNUBYHrmQordjaD5pfkCqV59tMpprPv625Ijo9LOK86iLxotRnS5oS7Gg5TezwHRA6udHfgGY1glMvL3xz7Nyju0gZmPzqxWQgjLN1KDYAyD8_5Q7-VRRt5SM1AgH2Ld47LwaeeDGY3QKAl5of203dC-GNrbZaA_ePvR1i18","AU_ZVEFaC7vfdGqI6LK33upHP2buo4VimZvmZyVHNkVh2z8AQSX7MBX0k0XGBwDFLrZlMysGfapykrEGiwlGjpsGO-ut3zoUQy0_gLcPrMx21tc6oYeqJMM0q13FrKMrkTiW1X7AVPFKpg9Slo-bE0b602Fa65f4Zy4dHMRWjApn3P-BqFbtZ6-d26xb_vkUy0fx_yJ21-BhLgYBt4ps4d2TxjvdunwYiY8XIQ-aPXIZh0ZKjtLL6IZQiWW3LDLQ5dK9Bply_NEgAqOLQw-VsgtFRyVmrxZBBGTtu2FuUf18BJJwrx8r-3Yz6Us_Eh2i29OdCn3YSgOe86cIT_BnuMiRQ09EiqW6JneWJrMSIkP73l_1gXAA5PLHQtW4pY8AGtDJcBQ_fPdzE08n0YV2BPcIGzsud8gHL3XeZ6HxA1_fISdmUA"]
  },
  verified: true,
  google_rating: 4.3
};

export default le_vieux_chalet;
