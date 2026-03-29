import { SurgicalPlace } from "../../../type-definition";

export const cravan: SurgicalPlace = {
  id: "poi-cravan-16",
  name: "CRAVAN",
  slug: "cravan-paris-16e",
  category: "restaurant",
  subcategory: ["cocktail-bar", "élégant", "historique", "guimard"],
  location: {
    address: "17 Rue Jean de la Fontaine, 75016 Paris",
    arrondissement: 16,
    lat: 48.8516434,
    lng: 2.273866,
    nearest_metro: "Ranelagh / Jasmin",
    metro_lines: [9],
    google_id: "ChIJy6Q5-Xt75kcRBwOzxoT5aNo"
  },
  moods: {
    chill: 95,
    festif: 30,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "Mer-Sam: 18h-23h | Dim-Mar: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.cravanparis.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "drink",
        display_label: "L'Art du Cocktail (Signatures)",
        items: [
          { name: "Cravan Cocktail", price_cents: 1600, description: "Gin, vermouth sec, zeste de citron", is_highlight: true },
          { name: "Yellow Cocktail", price_cents: 1700, description: "Gin, Suze, Chartreuse jaune" },
          { name: "Red Cocktail", price_cents: 1700, description: "Campari, vermouth rouge, touche de mezcal" },
          { name: "Martini de la Maison", price_cents: 1600, description: "Service glacé, olive de luxe" },
          { name: "Negroni Vieilli", price_cents: 1800, description: "Amertume équilibrée et suave" },
          { name: "Mocktail 'La Fontaine'", price_cents: 1200, description: "Herbes fraîches, agrumes et eau pétillante" }
        ]
      },
      {
        category_type: "starter",
        display_label: "Petites Assiettes (Entrées)",
        items: [
          { name: "Lobster Roll Cravan", price_cents: 3200, description: "Homard breton, brioche beurrée et ciboulette", is_highlight: true },
          { name: "Croque-Madame à la Truffe", price_cents: 2400, description: "Pain au levain, comté affiné et truffe noire" },
          { name: "Huîtres N°3 (x6)", price_cents: 2100, description: "Fraîcheur absolue de l'Atlantique" },
          { name: "Tartare de Bœuf au Couteau", price_cents: 2200, description: "Préparé minute, servi avec pain noir" },
          { name: "Caviar Beluga (30g)", price_cents: 12000, description: "Servi avec blinis et crème aigre" },
          { name: "Radis au Beurre Demi-Sel", price_cents: 900, description: "Beurre de baratte et sel de mer" },
          { name: "Terrine Maison de Campagne", price_cents: 1400 },
          { name: "Céviche de Bar Sauvage", price_cents: 1900, description: "Agrumes et piment doux" },
          { name: "Burrata Crémeuse", price_cents: 1500, description: "Huile d'olive d'exception" }
        ]
      },
      {
        category_type: "main",
        display_label: "Choses Sérieuses (Plats)",
        items: [
          { name: "Salade de Homard Bleu", price_cents: 3600, description: "Avocat et pamplemousse rose" },
          { name: "Frites Maison au Romarin", price_cents: 800, description: "Coupées au couteau, croustillantes" },
          { name: "Planche de Charcuterie", price_cents: 1900, description: "Sélection de petits producteurs" },
          { name: "Fromages Affinés (x3)", price_cents: 1600, description: "Comté 24 mois, chèvre et bleu" },
          { name: "Tempura de Légumes", price_cents: 1400, description: "Sauce soja gingembre" },
          { name: "Club Sandwich Poulet", price_cents: 2100 },
          { name: "Saucisson Brioché", price_cents: 1500, description: "Servi chaud avec moutarde forte" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Finales (Desserts)",
        items: [
          { name: "Tarte Tatin de la Maison", price_cents: 1200, description: "Pommes caramélisées, crème épaisse", is_highlight: true },
          { name: "Chocolate Cake Dense", price_cents: 1100, description: "Chocolat noir 70%, fleur de sel" },
          { name: "Madeleines Chaudes (x4)", price_cents: 900, description: "Sortant du four" },
          { name: "Sorbet Citron & Vodka", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Sélection de Cave",
        items: [
          { name: "Coupe de Champagne Bollinger", price_cents: 2200 },
          { name: "Vin Nature (Blanc/Rouge)", price_cents: 1200, description: "Sélection vivante du moment" },
          { name: "Expresso Pur Arabica", price_cents: 400 },
          { name: "Thé Vert du Japon", price_cents: 800 },
          { name: "Limonade Artisanale", price_cents: 700 }
        ]
      }
    ]
  },
  description: "CRAVAN est un joyau architectural et gustatif niché dans un édifice classé d'Hector Guimard. Ce bar-restaurant hors du temps célèbre l'art de la mixologie précise et d'une cuisine de comptoir élégante. Avec son décor Art Nouveau d'origine (1911), ses boiseries et ses céramiques somptueuses, CRAVAN offre une immersion rare dans le Paris de la Belle Époque. C'est le rendez-vous secret des esthètes du 16ème, où l'on déguste un Lobster Roll d'exception accompagné d'un cocktail millimétré.",
  expert_catchline: "La perfection de la mixologie dans un écrin Guimard classé.",
  insider_tip: `• **Le Décor** : Ne manquez pas de contempler les détails Art Nouveau du bar, classé Monument Historique.
  • **Le Must-Eat** : Le Lobster Roll est considéré comme l'un des meilleurs de Paris, un passage obligé.
  • **Sans Résa** : Le lieu ne prend pas de réservations, venez dès l'ouverture à 18h pour sécuriser une table.`,
  specials: {
    cuisine: ["Cuisine de Comptoir", "Élégant"],
    drinks: ["Cocktails Signatures", "Champagnes de Vignerons"],
    must_eat: "Cuisine de Comptoir. Lobster Roll & Croque-Madame à la Truffe.",
    must_drink: "Cravan Cocktail"
  },
  images: {
    hero: "AU_ZVEEA4QVzG7DqCLOatKghTO0wICh-Fok1BG04raVVLc8TIqYFOHjPOPxSPryBm1MqRuqqsixopbnBLxqXFkrKHD7TfavdKZmfEOHJCEgeRi6VmAtbq2_8uNUPpntf83xvPXmkeeZyncVKb-qsDLZJiH2GnOwmxPRKXf6v9xKB9v2Kg-9DspPQywYi-AAZg3yEVHzs_i-AahWeklhXLKXrNWBgdXqYAvsrOpdGZwI2vFHN4M5jcY-VRuHPHTvNk7K_9kjOPrccBtYcn7QF35rFNf3DHfkRk86GQzCqmywcwOgueqYcR87ngJw34yjUMN-WUZ6Kzb9ewubh0sjWHhYBVBbZPYOxhalFv0Yoto4QnE2wOcT8zmmss3vGw1uH9Fl_0gvCLANevjEXGe7c-q8KBSJ3_s974lxbuZCRrviMDjccijvI",
    gallery: [
      "AU_ZVEFb9HceyHFmus4gqSg22_AwpZ56RGTBDWpH-5eXAlxYsuIYCKjeYNceBIaNZ4J_2SX9cX91M5RDNzkCw4LnkPBWiQcSXB_UJQsIR_w6scmkaigtxiZn9yJ6e_pExEzUnFV_r065jby18mtFqZQCe2y2d72YjXgrSyr0-KdsUxMqM_ha00gOUcD8F7CvLrKPk7hRsEencw0EjS8J-1lJyCjfnuMwuWfUZ7fE-s2_XQ04u7ut5Ge4Jw7JB-gPwa1g9H9GAad_9gARychbDspopUmlXWNJsVUeapRqbcWq8Vxc5-1omD0-S1KQ2EYxBAoarLRKAQHOfyJ3F2BIstIXmnSjjWQFM354zaHXZlv6jal1YiprzFrtu-A2FiR4CKdzZFPfgyQnKQnLzNi81jkMfZorbaurtIyVaoxdXkoYJXo",
      "AU_ZVEFyceqab9SjdewLNNLfMrdtdrehnG9cAurKemrb98SBHPfgRtlV2Td_t57QDYNPm62XHhXFWyMSVYVJ9iF_Slmt_lz_y_EwNcUcXihR5JsdKODXnn6fuMCNO-KJ6bk24h8Dy97CdC-t4XsQt-Pi5GcDNxT30qNn1pXRWBJyNHQ-wIx153Wu3H908ZGpjoFVAWkLciXzruGEw7Cdf3dYz13s_k2cqMBTAQckT2-_qTP5spymxdCwKrW-8U0GfWllxUKpzM_P3ISARn1OEus0ITiMjJ07i17c-vaXpx4x41eHPUeB9YyEFc5MZRd9M_K66xM-h78XorXelssNwFYjxNFfFs6an5ksNijvTNiKcNWhGJvO786AGfaGO3u0uOLBfyxlG3IVBJhM0NvSHatc-WvcMpMZ-GPXZQMnRaZBgjYe7g"
    ]
  },
  verified: true,
  google_rating: 4.6,
  instagram_handle: "cravanparis",
  real_talk: {
    text: "Un saut dans le passé sans aucune poussière. Le décor Guimard est à couper le souffle, et le niveau des cocktails est stratosphérique. C'est l'élégance absolue, sans en faire trop.",
    must_eat: "Cuisine de Comptoir. Lobster Roll.",
    le_secret: "La petite terrasse sur la rue étroite est parfaite pour un cocktail incognito au coucher du soleil.",
    le_son: "Jazz feutré et brouhaha feutré, très sélect.",
    le_must: "S'asseoir au comptoir pour observer la précision chirurgicale de la préparation des cocktails."
  }
};

export default cravan;
