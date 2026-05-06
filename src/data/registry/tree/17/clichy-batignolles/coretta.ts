import { SurgicalPlace } from "../../../type-definition";

export const coretta: SurgicalPlace = {
  id: "poi-coretta",
  slug: "coretta",
  name: "Coretta",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "151 bis Rue Cardinet, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.89058,
    lng: 2.316977,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJieM35q5v5kcRSsWWTlMpbA0"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:00, 19:30 – 22:00 | mercredi: 12:00 – 14:00, 19:30 – 22:00 | jeudi: 12:00 – 14:00, 19:30 – 22:00 | vendredi: 12:00 – 14:00, 19:30 – 22:00 | samedi: 12:00 – 14:00, 19:30 – 22:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.restaurantcoretta.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & À Partager",
        items: [
          { name: "Yellowtail crudo, tomates anciennes, framboises", price_cents: 1600 },
          { name: "Moules de Bouchot, toast brioché, poireaux fondants", price_cents: 1400 },
          { name: "Tempura d’Asperges, Calamars grillés, sauce wasabi", price_cents: 1500 },
          { name: "Bruschetta de pain de campagne, Stracciatella", price_cents: 1400 },
          { name: "Gazpacho de tomates Ananas Zebra, crevettes marinées", price_cents: 1300 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Lotte rôtie à la Soubressade, risotto safrané", price_cents: 3200 },
          { name: "Ris de veau crousti-fondants, caviar de courgettes", price_cents: 3400 },
          { name: "Carré de Porc Ibérique, haricots verts", price_cents: 3200 },
          { name: "Truite grillée, chou-fleur multicolore", price_cents: 2900 },
          { name: "Poulpe tendrissime, condiments sud-américains", price_cents: 3100 },
          { name: "Poisson du Jour selon arrivage", price_cents: 2800 },
          { name: "Poitrine de Porc confite lentement", price_cents: 2700 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Douceurs",
        items: [
          { name: "Brioche à la Cannelle culte, caramel beurre salé", price_cents: 1300 },
          { name: "Framboises Tulameen, ganache chocolat Guanaja", price_cents: 1200 },
          { name: "Rhubarbe confite, fraises des Landes, sorbet sureau", price_cents: 1300 },
          { name: "Forêt Noire déstructurée, sorbet cerise, glace maïs", price_cents: 1200 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de Rosé Côtes de Provence", price_cents: 800 },
          { name: "Bouteille d’Eau Minérale (75cl)", price_cents: 600 },
          { name: "Sélection de Vins au flacon", price_cents: 3000 }
        ]
      }
    ]
  },
  expert_catchline: "Une bistronomie de haute volée face au parc, où la brioche à la cannelle est devenue une véritable religion.",
  description: "Coretta est une pépite bistronomique face au parc Martin Luther King, orchestrée par la cheffe Beatriz Gonzalez.",
  insider_tip: "• **Lumière** : Demandez une table à l’étage près des vitres pour la vue imprenable sur le parc.\n• **Culte** : La brioche à la cannelle est le dessert obligatoire, ne partez pas sans.\n• **Sourcing** : Le menu déjeuner à 32€ est l'une des meilleures affaires du quartier.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Vin", "Cocktail"],
    must_eat: "Cuisine Français.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/coretta/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/coretta/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/coretta/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/coretta/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/coretta/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/coretta/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Français.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default coretta;
