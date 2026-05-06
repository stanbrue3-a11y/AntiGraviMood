import { SurgicalPlace } from "../../../type-definition";

export const radioeat: SurgicalPlace = {
  id: "poi-radioeat",
  slug: "radioeat",
  name: "Radioeat",
  category: "restaurant",
  subcategory: ['fusion'],
  location: {
    address: "116 Av. du Président Kennedy, 75016 Paris",
    arrondissement: 16,
    lat: 48.8520542,
    lng: 2.2790662,
    nearest_metro: "Passy / Ranelagh",
    metro_lines: [6, 9],
    google_id: "ChIJQfF2MAFw5kcRpc1lq1gz1c0"
  },
  moods: {
    chill: 80,
    festif: 40,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "Mar-Sam: 12h-15h, 19h30-23h | Dim: 12h-15h30 | Lun: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.radioeat.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 55,
    is_free: false,
    last_updated: "2026-03-28",
    verified_at: "2026-03-28",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Premières Ondes (Entrées)",
        items: [
          { name: "Burrata Crémeuse", price_cents: 1450, description: "Betteraves rôties et huile de noisette", is_highlight: true },
          { name: "Céviche de Daurade Royale", price_cents: 1600, description: "Lait de coco, citron vert et piment" },
          { name: "Velouté de Saison", price_cents: 1100, description: "Légumes du marché et éclats de châtaignes" },
          { name: "Tataki de Bœuf", price_cents: 1550, description: "Sauce ponzu et herbes thaï" },
          { name: "Œuf Parfait 64°", price_cents: 1250, description: "Crème de champignons et noisettes grillées" },
          { name: "Gyozas Maison (x5)", price_cents: 1300, description: "Porc et gingembre, sauce soja sucrée" },
          { name: "Salade de Lentilles Beluga", price_cents: 1150 },
          { name: "Carpaccio de Saint-Jacques", price_cents: 1700 }
        ]
      },
      {
        category_type: "main",
        display_label: "Le Grand Direct (Plats)",
        items: [
          { name: "Filet de Cabillaud Vapeur", price_cents: 2600, description: "Riz noir vénéré et émulsion citronnelle", is_highlight: true },
          { name: "Entrecôte Simmental (300g)", price_cents: 3400, description: "Frites maison et sauce béarnaise" },
          { name: "Risotto Impérial aux Gambas", price_cents: 2850, description: "Bisque de crustacés et cerfeuil" },
          { name: "Burger Radioeat Original", price_cents: 2250, description: "Pain brioché, bœuf 180g, cheddar affiné" },
          { name: "Suprême de Volaille Jaune", price_cents: 2400, description: "Purée fondante et jus corsé" },
          { name: "Linguine à la Truffe d’Automne", price_cents: 2900, description: "Crème de parmesan 24 mois" },
          { name: "Tataki de Thon Rouge", price_cents: 2700, description: "Mousseline d’avocat et wakamé" },
          { name: "Aubergine Miso Rôtie", price_cents: 1950, description: "Végétarien, riz basmati et graines de courge" },
          { name: "Tartare de Bœuf au Couteau", price_cents: 2100, description: "Préparé selon l’humeur du chef" },
          { name: "Sèche à la Plancha", price_cents: 2500 },
          { name: "Pavé de Saumon Label Rouge", price_cents: 2650 },
          { name: "Brochettes de Poulet Yakitori", price_cents: 2200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Finales Culturelles (Desserts)",
        items: [
          { name: "Mousse au Chocolat 70%", price_cents: 950, description: "Éclats de fleur de sel", is_highlight: true },
          { name: "Pavlova aux Fruits de Saison", price_cents: 1050, description: "Meringue craquante et sorbet maison" },
          { name: "Cheesecake Citron Vert", price_cents: 1100, description: "Croustillant spéculoos" },
          { name: "Pain Perdu Minute", price_cents: 1200, description: "Caramel beurre salé et glace vanille" },
          { name: "Assortiment de Sorbets", price_cents: 900 },
          { name: "Café Gourmand Radioeat", price_cents: 1150 },
          { name: "Tartelette Citron Meringuée", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Radio (Boissons & Cave)",
        items: [
          { name: "Cocktail Studio 104", price_cents: 1450, description: "Gin, St-Germain, concombre, soda", is_highlight: true },
          { name: "Coupe de Champagne Brut", price_cents: 1400 },
          { name: "Verre de Sancerre Blanc", price_cents: 1100 },
          { name: "Pinte de Bière Artisanale", price_cents: 950 },
          { name: "Expresso Pur Arabica", price_cents: 350 },
          { name: "Thé Mariage Frères", price_cents: 700 },
          { name: "Jus de Fruits Frais", price_cents: 800 },
          { name: "Limonade Maison au Gingembre", price_cents: 750 },
          { name: "Double Expresso", price_cents: 550 }
        ]
      }
    ]
  },
  description: "Niché au premier étage de la Maison de la Radio et de la Musique, Radioeat est une brasserie contemporaine qui vibre au rythme de la création. Son design épuré, signé par l’architecte Stéphane Maupin, offre un cadre lumineux avec une vue imprenable sur la Seine et la Tour Eiffel. On y déguste une cuisine saine, créative et de saison, orchestrée par le chef Eric Wapler. C’est l’adresse idéale pour un déjeuner baigné de lumière ou un dîner avant un concert prestigieux, dans une ambiance culturelle et décontractée.",
  expert_catchline: "La brasserie contemporaine et lumineuse de la Maison de la Radio.",
  insider_tip: "• **Vue Privilégiée** : Demandez une table près des baies vitrées pour admirer la Tour Eiffel tout en déjeunant.\n  • **Combo Concert** : Le restaurant est parfait pour une immersion totale avant ou après une émission publique ou un concert au Studio 104.\n  • **Brunch du Dimanche** : Très couru par les familles du 16ème, pensez à réserver tôt.",
  specials: {
    cuisine: ["Cosmopolite"],
    drinks: ["Cocktails Radio", "Vins de Vignerons"],
    must_eat: "Cuisine cosmopolite. Burrata & Betteraves & Cabillaud Vapeur.",
    must_drink: "Cocktail Studio 104"
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/radioeat/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/radioeat/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/radioeat/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/radioeat/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/radioeat/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/radioeat/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.1,
  instagram_handle: "radioeatparis",
  real_talk: {
    text: "Une institution musicale et gourmande. La lumière y est magique au coucher du soleil, et l’assiette est d’une grande finesse pour une brasserie de cette taille. C’est le carrefour des ondes et du goût.",
    must_eat: "Cuisine cosmopolite. Burrata.",
    le_secret: "La table près de la baie vitrée offre la meilleure vue sur la tour Eiffel scintillante.",
    le_son: "Un mélange de jazz, d’électro soft et de bribes de musique classique s'échappant des studios.",
    le_must: "Dîner juste avant un concert de l’Orchestre National de France."
  }
};

export default radioeat;
