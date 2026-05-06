import { SurgicalPlace } from "../../../type-definition";

export const le_cafe_du_commerce: SurgicalPlace = {
  id: "poi-le-cafe-du-commerce",
  slug: "le-cafe-du-commerce",
  name: "Le Café du Commerce",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "51 Rue du Commerce, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8464167,
    lng: 2.2954806,
    nearest_metro: "Commerce",
    metro_lines: ["8"],
    google_id: "ChIJRQaWcBdw5kcRGyBbSZDLhk8"
  },
  moods: {
    chill: 50,
    festif: 60,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 11:30 – 23:00 | mardi: 11:30 – 23:00 | mercredi: 11:30 – 23:00 | jeudi: 11:30 – 23:00 | vendredi: 11:30 – 23:00 | samedi: 11:30 – 23:00 | dimanche: 11:30 – 23:00",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lecafeducommerce.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Nos Formules",
        items: [
          { name: "Menu du Marché (Entrée + Plat + Dessert)", price_cents: 2250, description: "Servi au déjeuner du lundi au vendredi.", is_highlight: true },
          { name: "La Formule Pitchoun (Enfant)", price_cents: 1250, description: "Plat et dessert au choix." }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées de Brasserie",
        items: [
          { name: "6 Escargots de Bourgogne", price_cents: 1200, description: "Label Rouge, servis dans leur coquille" },
          { name: "Œufs Mayonnaise ’Championnat de France'", price_cents: 650, description: "Un classique indémodable", is_highlight: true },
          { name: "Soupe à l’Oignon Gratinée", price_cents: 950, description: "Croutons maison et Comté" },
          { name: "Saumon Gravelax Maison", price_cents: 1350, description: "Crème d’aneth et blinis chauds" },
          { name: "Foie Gras de Canard Maison", price_cents: 1550, description: "Chutney de saison, pain brioché" },
          { name: "Poireaux Vinaigrette", price_cents: 750, description: "Éclats de noisettes torréfiées" },
          { name: "Salade de Lentilles du Puy", price_cents: 800, description: "Échalotes et vinaigrette gourmande" },
          { name: "Planche du Commerce (à partager)", price_cents: 1850, description: "Charcuteries et fromages sélectionnés" }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Tradition",
        items: [
          { name: "Confit de Canard du Sud-Ouest", price_cents: 1950, description: "Pommes sautées à la sarladaise", is_highlight: true },
          { name: "Tartare de Bœuf Classique", price_cents: 1800, description: "Charolais haché minute, frites maison" },
          { name: "Fish & Chips à la Française", price_cents: 1750, description: "Sauce tartare maison et frites" },
          { name: "Véritable Blanquette de Veau", price_cents: 2100, description: "Riz pilaf aux petits légumes" },
          { name: "Onglet de Bœuf aux Échalotes", price_cents: 2200, description: "Frites maison et salade verte" },
          { name: "Souris d’Agneau de 7 Heures", price_cents: 2450, description: "Purée de pommes de terre à la fourchette" },
          { name: "Le Burger du Commerce", price_cents: 1850, description: "Steak frais, Cantal jeune, oignons rouges" },
          { name: "Filet de Bar Rôti", price_cents: 2350, description: "Écrasé de pommes de terre à l’huile d’olive" }
        ]
      },
      {
        category_type: "sharing",
        display_label: "Coin du Boucher (Pièces de Bœuf)",
        items: [
          { name: "Côte de Bœuf pour deux (1kg)", price_cents: 7400, description: "Origine France, sauce béarnaise et frites" },
          { name: "Entrecôte Charolaise (300g)", price_cents: 2800, description: "Beurre maître d’hôtel" },
          { name: "Rumsteck Grillé", price_cents: 2300, description: "Sauce au poivre vert" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs de l’Atrium",
        items: [
          { name: "Vacherin de la Brasserie", price_cents: 1050, description: "Glace vanille, marron, chantilly", is_highlight: true },
          { name: "Baba au Rhum", price_cents: 950, description: "Bocal de rhum à discrétion" },
          { name: "Profiteroles au Chocolat Chaud", price_cents: 1000, description: "Choux maison et glace vanille" },
          { name: "Mousse au Chocolat à la louche", price_cents: 850, description: "Comme à la maison" },
          { name: "Île Flottante au Caramel", price_cents: 800, description: "Crème anglaise onctueuse" },
          { name: "Tarte Fine aux Pommes", price_cents: 900, description: "Servie tiède avec sa boule vanille" }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave du Commerce",
        items: [
          { name: "Verre de Brouilly", price_cents: 650 },
          { name: "Demi-Pichet de Vin (25cl)", price_cents: 950 },
          { name: "Bouteille de Chablis", price_cents: 3800 },
          { name: "Bière Pression Demi", price_cents: 480 },
          { name: "Double Café Expresso", price_cents: 420 },
          { name: "Eau Minérale (1L)", price_cents: 600 }
        ]
      }
    ]
  },
  description: `Véritable institution du 15ème arrondissement nichée au cœur de la vibrante rue du Commerce, cette brasserie des années 20 est un joyau architectural sur trois étages. Organisée autour d’un atrium monumental sous une verrière lumineuse, elle offre un cadre spectaculaire où le temps semble s’être arrêté. On y déguste une cuisine de tradition française, honnête et généreuse, servie avec le ballet élégant des garçons de café. C’est l’essence même du Paris populaire et bourgeois réuni dans un lieu d'exception.`,
  expert_catchline: `Le tourbillon d'une brasserie mythique sous une verrière classée.`,
  insider_tip: `• **Le Choix des Étages** : Pour profiter pleinement de la vue sur l’atrium, demandez une table au premier étage, c'est l'angle de vue le plus impressionnant.
  • **Le Duo Incontournable** : Commencez par les œufs mayo (réputés parmi les meilleurs de Paris) et enchaînez sur le confit de canard, une valeur sûre ici.
  • **Casting Idéal** : C’est le lieu parfait pour impressionner des amis de passage à Paris sans se ruiner, le cadre par rapport au prix est imbattable.`,
  specials: {
    cuisine: ["Brasserie Parisienne Classique"],
    must_eat: `Cuisine de brasserie authentique. Confit de canard & Vacherin du Commerce.`
  },
  images: {
    hero: "AU_ZVEFlaNpqZ6q6H_9gRTZjNNU0UN8zOxDAgz-pAOfExJqE2wmWv1WvOj_Ft5ClxV4aVGJG7bXb2-oPaPQxl5w2U0EuuIWpWLx1VsE8dTZOYK_OJjHhxAU5CCE-mE6NhnBikw2xPwU8Al85YMT6EQxLlK2SBMeMv5JH4RxEIKViM40aNFgddhSrjd3Z1i1MqIueqzdugvSWeSABO2PmgVth3H_wAMemHGeRDbI0c6aeei7HvZgBTBijF8T_d1vYC9pIFJ8XV5mc3DHBwIo-Ph9rhsl6Ymd2oSOIDojsgoedSwTFMw",
    gallery: ["AU_ZVEE2Y_yLqJTVtxH7qrEj0obTSEGP4anrnYYoGYzE3w4YObw5Y_6_TSMTnklOkMpcd8iWFEZVPxN0o4fogvMJZ_q2fmXa8X9ywCRyO5iCb1eHuQuzXOGi6mphhIxnSsHC-kegvmrGlMcKtDoGxfSR7mubpEoLKTIRD6tkL5MQCaq71OyXeHCFC3G2GNQyreNAMVIYeC7a46MHyuubHG8y3fhpoeiUCojx8s1UJwHuAMgtjb-33DGVNMgo5P8kQlN5RlXQPFQzkeoTR0pWAu9XUhIku6ZW5XEN8wpZ9BD_qTVqXv6Jr4IBUqmjgX1_PBVe0VfqNShjMQZ2cYPTRsEu8oq0Ve6dUf7nUI4adNCCL4DQ_WmSqCI6dzWTnyS45eVLZTAUNGWTt0YbYp1wq-pQRWo1ZJEbpdjUcjVSuacxMs_DuU152efuzYdWnuBxzCeo","AU_ZVEHIhztWvD3YuQiNBPwtnIZ43fTv4crtOl4Qs2HWiAlA6aUulYF-1XQb7UnkC5zHeZHmGfSYIT-QzPwDO6voxKpplx-pbyYGIkiRmbrRYoq9y39dwKdsWf-7hShPP4pMyc_eaSMWRSNKr1qZpuRFYbOH14dkc3cfaTq6v9n551qIj3CCQjYOZEZ5mEBJvI8nvzsOro_QpyoknL7HD6lkg1WKDlTYfQI5vkHz548dklp_eIwdY5kKUtlOd8MYUJ5qNZ41-AJ2Q9uWswS0lE-quSEUMNNURqTT1j1TvcuAYprAjg"]
  },
  verified: true,
  google_rating: 4.4
};

export default le_cafe_du_commerce;
