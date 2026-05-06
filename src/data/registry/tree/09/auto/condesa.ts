import { SurgicalPlace } from "../../../type-definition";

export const condesa: SurgicalPlace = {
  id: "poi-condesa",
  slug: "condesa",
  name: "La Condesa",
  category: "restaurant",
  subcategory: ['mexicain'],
  location: {
    address: "13 Rue Rodier, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.878263,
    lng: 2.3425556,
    nearest_metro: "Saint-Georges",
    metro_lines: [12],
    google_id: "ChIJz2yx5EBu5kcRTqLAalRfNFU"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 19:30–21:30; jeudi-vendredi: 12:15–13:30; Fermé dimanche-lundi",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lacondesa-paris.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 130,
    is_free: false,
    dish_price: 85, // Prix du premier menu dégustation "Découverte"
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Préludes Indra (Entrées)",
        items: [
          { name: "Cromesquis d’Artichaut & Piment fumé", price_cents: 0, is_highlight: true },
          { name: "Travail autour du Céleri, Tofu & Bonite", price_cents: 0, is_highlight: true },
          { name: "Saint-Jacques à l’émulsion de Café", price_cents: 0 },
          { name: "Agnolotti Maison, Bouillon Fève Tonka & Maïs", price_cents: 0, is_highlight: true },
          { name: "Expérience de Champignons fumés au Bois de Cerisier", price_cents: 0 },
          { name: "Tartare de Bar & Agrumes Mexicains", price_cents: 0 },
          { name: "Mini Tacos de Homard & Vanille (Surprise)", price_cents: 0 },
          { name: "Bouillon d’Algues Kombu & Infusion d'Herbes", price_cents: 0 }
        ]
      },
      {
        category_type: "main",
        display_label: "Expéditions Gastronomiques (Plats)",
        items: [
          { name: "Canette de Kriaxera & Céleri-rave en trois façons", price_cents: 0, is_highlight: true },
          { name: "Veau mariné aux Algues & Salicornes croustillantes", price_cents: 0, is_highlight: true },
          { name: "Dos de Cabillaud de ligne & Grand Mole Blanc", price_cents: 0 },
          { name: "Pigeon de Vendée rôti au Café & Cacao", price_cents: 0, is_highlight: true },
          { name: "Homard Bleu de Bretagne & Beurre de corail", price_cents: 0 },
          { name: "Ris de Veau laqué au Piment Ancho & Jus corsé", price_cents: 0 },
          { name: "Tamal de Maïs frais & Truffe noire de saison", price_cents: 0 },
          { name: "Pêche du jour, Beurre d’Hibiscus & Betterave", price_cents: 0 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords de la Terre (Plats)",
        items: [
          { name: "Purée de Maïs doux onctueuse au sel fumé", price_cents: 0, is_highlight: true },
          { name: "Haricots Verts façon risotto & Parmesan", price_cents: 0 },
          { name: "Légumes du Mexique rôtis au Four à bois", price_cents: 0 },
          { name: "Riz Sauvage croquant au Thé Vert", price_cents: 0 },
          { name: "Salade de Jeunes Pousses & Vinaigrette Mole Vert", price_cents: 0 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Métissage (Desserts)",
        items: [
          { name: "Ganache Chocolat Noir & Piment Pasilla", price_cents: 0, is_highlight: true },
          { name: "Sorbet Goyave rose & Citron vert", price_cents: 0, is_highlight: true },
          { name: "Maïs en dessert : Crème, Glace & Tuile", price_cents: 0, is_highlight: true },
          { name: "Nage d’Ananas frais, Coco & Coriandre", price_cents: 0 },
          { name: "Pastilla croustillante aux Pistaches d’Iran", price_cents: 0 },
          { name: "Fromages affinés & Chutney de mangue au piment", price_cents: 0 },
          { name: "Mignardises signatures du Chef Indra", price_cents: 0 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de La Condesa (Boissons)",
        items: [
          { name: "Mezcal 100% Espadín ’La Palabra' (Shot)", price_cents: 1400, is_highlight: true },
          { name: "Verre de Vin Nature Sélection Sommelier", price_cents: 1200 },
          { name: "Accord Mets & Vins ’Expédition' (5 verres)", price_cents: 6500, is_highlight: true },
          { name: "Thé Vert d’Ombre japonais rare", price_cents: 950 },
          { name: "Café de plantation mexicaine sélectionné", price_cents: 600 },
          { name: "Eau micro-filtrée La Condesa (75cl)", price_cents: 500 },
          { name: "Infusion Hibiscus sauvage (Agua de Jamaica)", price_cents: 700, is_highlight: true }
        ]
      }
    ]
  },
  description: "La Condesa est le laboratoire hautement créatif du chef mexicain Indra Carrillo Perea. Étoilé au Guide Michelin, ce restaurant du 9ème arrondissement propose une immersion sensorielle où les techniques de la haute gastronomie française rencontrent les saveurs vibrantes et les ingrédients du Mexique. Chaque plat est une pièce d’orfèvrerie technique, servie dans un cadre épuré et élégant, faisant de La Condesa l'une des tables les plus passionnantes et précises de la capitale.",
  insider_tip: "• **Le Menu Carte Blanche** : Ne cherchez pas la carte, laissez-vous porter par les menus surprises qui varient selon les arrivages et l’humeur du chef.\n• **L’Accord Mezcal** : Si vous êtes amateur, demandez à découvrir les mezcals de dégustation, l’accord avec certains plats mariniers est bluffant.\n• **La Table** : Le restaurant est petit et très prisé, les réservations se prennent plusieurs semaines à l'avance.",
  specials: {
    cuisine: ["Mexicain"],
    drinks: ["Mezcals d’exception", "Vins natures & biodynamiques", "Accords créatifs"],
    must_eat: "Cuisine mexicaine. L’Agnolotti Maison au bouillon de fève Tonka et Maïs : une fusion magistrale d’influences italiennes et mexicaines.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/condesa/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/condesa/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/condesa/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/condesa/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/condesa/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/condesa/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine mexicaine. L’Agnolotti Maison au bouillon de fève Tonka et Maïs : une fusion magistrale d’influences italiennes et mexicaines.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default condesa;
