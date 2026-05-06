import { SurgicalPlace } from "../../../type-definition";

export const le_relais_gascon: SurgicalPlace = {
  id: "poi-le-relais-gascon",
  slug: "le-relais-gascon",
  name: "Le Relais Gascon",
  category: "restaurant",
  subcategory: ["français", "gascon", "sud-ouest", "salades-geantes", "montmartre"],
  location: {
    address: "6 Rue des Abbesses, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8840242,
    lng: 2.3391513,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJpW4VWERu5kcRpFwpIfrfC5c"
  },
  moods: {
    chill: 40,
    festif: 85,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 11:00 – 00:00 | mardi: 11:00 – 00:00 | mercredi: 11:00 – 00:00 | jeudi: 11:00 – 00:00 | vendredi: 11:00 – 00:00 | samedi: 11:00 – 00:00 | dimanche: 11:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.lerelaisgascon.fr/",
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
        display_label: "Salades Géantes (Plats)",
        items: [
        { name: "Salade Gascon", price_cents: 1850, description: "Magrets fumés, bloc de foie gras, pommes de terre sautées à l'ail" },
        { name: "Salade du Chef", price_cents: 1590, description: "Blancs de volaille, emmental, pommes de terre ail" },
        { name: "Salade du Sud-Ouest", price_cents: 1690, description: "Gésiers confits, lardons, croutons, pommes de terre ail" },
        { name: "Salade Montmartre", price_cents: 1860, description: "Jambon de pays, burrata, avocat, maïs, pommes de terre ail" },
        { name: "Salade Océane", price_cents: 1850, description: "Saumon fumé, crevettes, avocat, pommes de terre ail" },
        { name: "Salade du Béarnais", price_cents: 1650, description: "Chèvre chaud, lardons, croutons, pommes de terre ail" },
        { name: "Salade Fraîcheur", price_cents: 1690, description: "Œuf frit, jambon cru, lardons, pommes de terre ail" },
        { name: "Salade Végétarienne", price_cents: 1590, description: "Maïs, betteraves, carottes, olives, pommes de terre ail" },
        { name: "Salade Gourmande", price_cents: 1690, description: "Thon, œuf dur, haricots verts, poivrons, pommes de terre" }
      ]},
      {
        category_type: "main",
        display_label: "Plats & Tradition",
        items: [
        { name: "Confit de Canard Moelleux", price_cents: 1850, description: "Servi avec pommes à l'ail et haricots verts" },
        { name: "Magret de Canard au Miel", price_cents: 2050 },
        { name: "Cassoulet Gascon Maison", price_cents: 1900 },
        { name: "Bœuf Bourguignon Tradition", price_cents: 1700 },
        { name: "Tartiflette au Reblochon", price_cents: 1650 },
        { name: "Entrecôte Grillée (250g)", price_cents: 2250 }
      ]},
      {
        category_type: "dessert",
        display_label: "Desserts Maison",
        items: [
        { name: "Profiteroles Maison", price_cents: 850 },
        { name: "Tatin Gasconne", price_cents: 750 },
        { name: "Mousse au Chocolat", price_cents: 650 }
      ]}
    ]
  },
  description: "Une institution montmartroise célèbre pour ses salades XXL servies dans des bols géants, accompagnées de pommes de terre sautées à l'ail. L'ambiance y est conviviale, rustique et chaleureuse, typique des bistrots de quartier où l'on vient pour la générosité des portions et l'accueil sans chichis.",
  insider_tip: "• **Timing Stratégique** : Le soir, la file s'allonge vite sur le trottoir des Abbesses. Misez sur une arrivée à 19h15 pour éviter l'attente.\n• **Combo Moelle** : La Salade Gascon (avec foie gras) est l'expérience ultime du lieu. Attention : une salade suffit largement pour deux petits appétits.\n• **Vibe** : Si vous cherchez le calme, passez votre chemin. Ici, l'effervescence est la règle, surtout en terrasse les soirs d'été.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Vins du Sud-Ouest", "Bières"],
    must_eat: "Cuisine généreuse du Sud-Ouest. Salade Gascon & Confit de Canard",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-gascon/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-gascon/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-gascon/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-gascon/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-gascon/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-gascon/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine généreuse du Sud-Ouest. Salade Gascon & Confit de Canard",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_relais_gascon;
