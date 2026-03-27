import { SurgicalPlace } from "../../../type-definition";

export const chakaiseki_akiyoshi: SurgicalPlace = {
  id: "poi-chakaiseki-akiyoshi",
  slug: "chakaiseki-akiyoshi",
  name: "Chakaiseki Akiyoshi",
  category: "restaurant",
  subcategory: ["japonais", "kaiseki", "etoile", "the", "gastronomique"],
  location: {
    address: "59 Rue Letellier, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8470136,
    lng: 2.2989248,
    nearest_metro: "La Motte-Picquet Grenelle",
    metro_lines: [6, 8, 10],
    google_id: "ChIJXZOfs6Zx5kcRLQByGMVUS1A"
  },
  moods: {
    chill: 90,
    festif: 20,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "mercredi-dimanche: 12:00–14:30, 20:00–23:00; Fermé lundi-mardi",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://chakaiseki-akiyoshi.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 250,
    is_free: false,
    dish_price: 200, // Prix du premier menu déjeuner
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Préludes au Thé (Entrées)",
        items: [
          { name: "Kumidashi (Eau chaude purifiée de bienvenue)", price: "0.00€", highlight: true },
          { name: "Sakizuke (Légumes de saison marinés au vinaigre de riz)", price: "0.00€", highlight: true },
          { name: "Mukozuke (Fine découpe de Daurade Royale)", price: "0.00€", highlight: true },
          { name: "Bouillon de Langoustine & Écorces de Yuzu", price: "0.00€" },
          { name: "Carpaccio de Poisson blanc au Ponzu artisanal", price: "0.00€" },
          { name: "Tempura d'Asperges vertes & Fleur de sel", price: "0.00€" },
          { name: "Salade de 14 Légumes au Kumquat & Wasabi", price: "0.00€" },
          { name: "Tataki de Thon Rouge fumé minute", price: "0.00€" }
        ]
      },
      {
        category: "Séquences Kaiseki & Traditions (Plats)",
        items: [
          { name: "Poisson du jour grillé au charbon Binchotan", price: "0.00€", highlight: true },
          { name: "Truite de nos rivières au sel, grillade lente", price: "0.00€", highlight: true },
          { name: "Daurade Japonaise cuite à la vapeur de Saké", price: "0.00€" },
          { name: "Sushi de Maquereau grillé (Aburi Saba)", price: "0.00€", highlight: true },
          { name: "Filet de Bœuf Wagyu A5 grillé (Supplément)", price: "45.00€" },
          { name: "Riz Niigata cuit au charbon de bois", price: "0.00€", highlight: true },
          { name: "Petit pot de Légumes d'hiver braisés au Dashi", price: "0.00€" },
          { name: "Soupe Miso blanc de Kyoto (Saikyo Miso)", price: "0.00€" }
        ]
      },
      {
        category: "Accords & Accompagnements (Plats)",
        items: [
          { name: "Pickles Tsukemono faits maison", price: "0.00€", highlight: true },
          { name: "Algues Nori croustillantes de haute qualité", price: "0.00€" },
          { name: "Wasabi frais du Japon râpé minute", price: "0.00€" },
          { name: "Sauce Ponzu artisanale du Chef", price: "0.00€" },
          { name: "Garniture au gingembre Myoga", price: "0.00€" }
        ]
      },
      {
        category: "Douceurs de la Maison de Thé (Desserts)",
        items: [
          { name: "Daifuku à la Fraise fraîche & haricot rouge", price: "0.00€", highlight: true },
          { name: "Omogashi (Douceur traditionnelle raffinée)", price: "0.00€", highlight: true },
          { name: "Sakura Mochi en feuille de cerisier glacée", price: "0.00€" },
          { name: "Sorbet au Gingembre frais & Citron vert", price: "0.00€" },
          { name: "Gelée de fruits exotiques au Shiso pourpre", price: "0.00€" },
          { name: "Financier au Thé Vert Matcha du Piémont", price: "0.00€" }
        ]
      },
      {
        category: "L'Art du Matcha & Sakés (Boissons)",
        items: [
          { name: "Matcha de cérémonie Uji (Kyoto) préparé minute", price: "12.00€", highlight: true },
          { name: "Thé Genmaicha (Vert & Riz grillé)", price: "8.50€" },
          { name: "Thé Sobacha (Sarrasin grillé)", price: "7.50€" },
          { name: "Verre de Saké Junmai Daiginjo 'Kokuu'", price: "18.00€", highlight: true },
          { name: "Saké Pétillant Shichiken", price: "22.00€" },
          { name: "Verre de Meursault (Accord Vins)", price: "24.00€" },
          { name: "Eau micro-filtrée Akiyoshi", price: "5.50€" }
        ]
      }
    ]
  },
  description: "Chakaiseki Akiyoshi est une enclave de sérénité absolue, premier restaurant hors du Japon entièrement dédié à l'art du Cha-kaiseki (repas précédant la cérémonie du thé). Étoilé au Guide Michelin, le chef propose une expérience méditative où chaque geste, de la cuisson du riz au charbon de bois à la préparation du matcha, est un rituel. Le décor Sukiya minimaliste et les saveurs d'une pureté rare transportent convives directement à Kyoto.",
  insider_tip: "• **Le Comptoir** : Réservez au comptoir de la cérémonie du thé pour observer la précision millimétrée du chef.\n• **Le Rythme** : Prévoyez du temps. Le Cha-kaiseki est une expérience lente, rythmée par le calme et la contemplation.\n• **L'Accord Thé** : L'accord thés est magistral et offre une perspective différente de l'accord saké classique.",
  specials: {
    cuisine: ["Cha-kaiseki traditionnel", "Cérémonie du thé", "Cuisson au charbon de bois"],
    drinks: ["Matcha de cérémonie", "Sakés Junmai Daiginjo", "Thés rares de Kyoto"],
    must_eat: "Le Riz Niigata cuit au charbon de bois : la base sacrée du repas, d'une texture et d'un goût inoubliables.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEEoMMewCT-EK70qQP_WYrLQKVMw3Fm56jXC6z0OWjZuOv-JxwcLnwpLjnvTLcGO8qjxZ8FcSXo-l8En_eWxdf4khdbVQRbJq61OB2UnDCn4XCpGtw6ONXtupm5P75eHM_K2pJj3QinVhBUxpyR-1QOhH8RHlcBRQt_IweVWQgLSdeuxCoEX6DaDqXJAsP8XSrBBq4TUZiX5bvPPQBEOXY7bOcXpWPP89n0Ngvoz9Hhm2sTd1diBe9ulVT-Rf6-n8SOXgU3g1uw5TsYUhT-vxUswQgCdlkB1TQFdWdnIS1LPaoNbmDon9N0aQLMVsyu0KAoSliIsx7nfbNVFvH5ZBRjVenH9fR8gbZ1wttL_CmdpmbiR0i0Jc1M8idcXgW9049-0PXpiCdWfGRKJkLdqtidQqAVhWiS7w8JYCXTICuFmnVvprmvC2GccFXKSUg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEG09OOXNXIn56Zd4ICauNfnTtZkXujQlTmajUvEQF3XLxieWNDikqdTFPrD3lAuqx32J2H3r0N3Kn6MqKhbGhJ6IwwX3DmkgReYBqLtwrb8obkvHcC_lUEWpucQ4peYJCb6GIT3qgKMHWBa5LohhHJd17iGsmeKsr6EuaSMOWPRSZJuPLQZOTiVMET3Y8-mJ5LPyJkovZ_t4yPOG-xJuTlVzvlSYMtbiBOYYHwj6w14x5eTdz8oWZ0mXVvpDAf8dQuLVnzOpsa153DFQgqXAvvnNuxZEyyrrcwhHKn8StDA5w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGYEiunMaSBcCoY7OXz0lk6Bngz9V0ZqnlKx3i1HRKlWN1FpnpABVoLwyZ0YDk3E-tfWi5IPBCx--gWOckM9OtsTuJaHSTefqO0QomrtaEw5CPkf5eMMChcf_3E8vpAh92i4bKEh7ebPoy7yD3y3C-ie-RmKIbWpUwoJE3zOv-H3CvfMqln00s-m2Xi40jEPp6LGxorFIS8wJyNW1YDeOvaEx19rkMXS7y0DujwPxaITOGPhTbcKAYQg-wbOqS71-mbxR3WQNl48t2ds2TYkZIl9rp58faSaDUqn6naepKIGYe3Nj0dnpXATpy989aXBfzK2wrVBE9dQFNeje_toswyF6tDoqXG4ZGVVNYXFeSbhxm3Ps0HNoCTynJWWduhUaQmpbPntPdlVwZpL-tr89SkfcvRvF9tw700QsvDFLEIIgerL4S3zwerMyfuxWZa&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.8
};

export default chakaiseki_akiyoshi;
