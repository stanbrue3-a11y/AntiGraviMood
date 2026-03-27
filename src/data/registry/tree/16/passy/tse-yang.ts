import { SurgicalPlace } from "../../../type-definition";

export const tse_yang: SurgicalPlace = {
  id: "poi-tse-yang",
  slug: "tse-yang",
  name: "Tse Yang",
  category: "restaurant",
  subcategory: ["chinois", "gastronomique"],
  location: {
    address: "25 Av. Pierre 1er de Serbie, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.866586,
    lng: 2.298274,
    nearest_metro: "Iéna",
    metro_lines: ["9"],
    google_id: "ChIJy_VA0edv5kcRYF_AiI8Qnpc"
  },
  moods: {
    chill: 90,
    festif: 0,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:30 – 23:00 | mardi: 12:00 – 14:30, 19:30 – 23:00 | mercredi: 12:00 – 14:30, 19:30 – 23:00 | jeudi: 12:00 – 14:30, 19:30 – 23:00 | vendredi: 12:00 – 14:30, 19:30 – 23:00 | samedi: 12:00 – 14:30, 19:30 – 23:00 | dimanche: 12:00 – 14:30, 19:30 – 23:00",
    reservation_policy: "resa_conseillee",
    wifi: true,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://tse-yang.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 95,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "L'Art des Vapeurs (Dim Sum)",
        items: [
          { name: "Ha Kao (Crevettes)", price: "14€", description: "Pâte de riz translucide, 4 pièces" },
          { name: "Siu Mai (Porc & Crevettes)", price: "12€", description: "4 pièces traditionnelles" },
          { name: "Bouchées aux Saint-Jacques", price: "18€", highlight: true },
          { name: "Xiaolongbao (Soupe à l'intérieur)", price: "16€", description: "Spécialité de Shanghai" }
        ]
      },
      {
        category: "Grands Classiques Tse Yang",
        items: [
          { name: "Le Canard Laqué à la Pékinoise", price: "55€", description: "Présenté en deux services", highlight: true },
          { name: "Homard Bleu au Gingembre", price: "72€", description: "Sauté au wok, oignons nouveaux" },
          { name: "Boeuf aux Oignons & Sésame", price: "32€" },
          { name: "Sole Saisie au Sel & Poivre", price: "48€" },
          { name: "Poulet Kung Pao (Epicé)", price: "28€" }
        ]
      },
      {
        category: "Riz & Nouilles",
        items: [
          { name: "Riz Cantonais Imperial", price: "18€", description: "Poulet, porc laqué, crevettes" },
          { name: "Nouilles Sautées aux Légumes", price: "16€" },
          { name: "Vermicelles de Riz à la Singapourienne", price: "22€" }
        ]
      },
      {
        category: "Final & Douceurs",
        items: [
          { name: "Perles de Coco Vapeur", price: "10€" },
          { name: "Nems au Chocolat & Glace", price: "12€", highlight: true },
          { name: "Thé Vert Jasmin Supérieur", price: "9€" },
          { name: "Saké Shochu (Shot)", price: "14€" },
          { name: "Expresso", price: "6€" }
        ]
      }
    ]
  },
  description: `Tse Yang est le sanctuaire de la haute gastronomie chinoise à Paris depuis 1980. Situé à deux pas de l'avenue Raymond Poincaré, ce restaurant offre un cadre d'un raffinement extrême : boiseries laquées, porcelaines fines et éclairage tamisé. Ici, la cuisine cantonaise et pékinoise est traitée avec les égards d'un grand cru, portée par des chefs dont la maîtrise du canard laqué et des vapeurs est légendaire dans tout le 16ème.`,
  expert_catchline: `Le temple historique du canard laqué et du luxe cantonais.`,
  insider_tip: `• **Le Canard Laqué** : C'est la signature absolue de la maison. Il est préparé dans les règles de l'art et servi en plusieurs étapes, dont la peau croustillante dans des crêpes fines.
  • **Business Lunch** : Le midi, le restaurant propose un menu plus abordable qui permet de découvrir la qualité Tse Yang sans la facture d'un dîner gala.
  • **Le Service** : D'une discrétion et d'une efficacité rares, digne des plus grands hôtels de Hong Kong.`,
  specials: {
    cuisine: ["Chinois Gastronomique", "Cantonais", "Pékinois"],
    drinks: ["Grands crus classés", "Thés rares"],
    must_eat: "Cuisine Chinoise. Le Canard Laqué à la Pékinoise.",
  },
  images: {
    hero: "AU_ZVEHgY_VA0edv5kcRYF_AiI8Qnpc",
    gallery: ["AU_ZVEFf3zAu-OT7X1nNPmJfB7_a1FjH_ErsYarAGoiLPRCtqK7QXBh7vHGry_C4cIgZuujj7IFGdEEs0mNmaWio8p_Vy-8cdubkYaSCrxSgShy5_w44ZL6473IcU0CYnxKj-p_2QxIjm3CN6xsJ0xPeO7WdKVLy-ulDC97fluKrsl2HREqsH1sh3IPeqzHRKaT18e5F21DOukEOsnSZ7QTygImWqd5gLZvG-BarjN75VCR3eBDvrTJL0MD2qGrbmP2xGy0073FKbR1Zzn2Y9ebrQmtuIc9c9sx-1MSf5_XaBRB6lB7GoO0Mv0NzlfnhXRiUgGLK9ZZ4OxfmFFMY5tMSegHJy2BVikzyOW_IO73Oj0rz4ez9Yt2vIoxUB-nIcPSvY5DtfrH00iFNNlsFKGNzIQiWH85wetj8VOOz_kEhkeTRxs3xkn6Vn_0yURUyNe4D","AU_ZVEHd9Q-erhb0510jKqrmnzG4S-SGuz8v7xMLeRzZYK-sKOhBv6n4BNQSvz-9dRw_Gatp9wMcnbphv0IEHCU2Cp_vfCaVtY-qiW1T_E8ZZZd6GgOv_BzbOr5hY6mKopPhZ1uNsA_SMJCcCNOwpCQytSMF6_w3YlQV0Y4drCIvURo2xtBdiiC5fXk-BxpWTL3Wj8pfcPJ57c8YkohzRTexAu66wlAEFLMlkvJx7j-qreAieKVbJNhB48cvCCP-OQ3Wh2qtyO21ZrPctGbDFJ1l5zYqZXoBQuhyvPt60XKZD57alw"]
  },
  verified: true,
  google_rating: 4.2,
  real_talk: {
    text: "Tse Yang, c'est la Chine impériale au cœur de Passy. Pas de chichis branchés ici, juste de la rigueur, des produits d'exception et une atmosphère feutrée qui invite à la confidence. Le canard est phénoménal, probablement l'un des meilleurs de Paris devant beaucoup d'étoilés.",
    must_eat: "Canard Laqué",
    le_secret: "La carte des thés recèle des trésors, certains Pu-erh sont âgés de plusieurs décennies.",
    le_son: "Un silence élégant, seulement troublé par le crépitement des flammes au wok au loin.",
    le_must: "Un déjeuner d'affaires calme ou un dîner familial solennel."
  }
};

export default tse_yang;
