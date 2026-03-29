import { SurgicalPlace } from "../../../type-definition";

export const radioeat: SurgicalPlace = {
  id: "poi-radioeat",
  slug: "radioeat",
  name: "Radioeat",
  category: "restaurant",
  subcategory: ["contemporain", "maison-de-la-radio", "vue-tour-eiffel", "passy"],
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
        category: "Premières Ondes (Entrées)",
        items: [
          { name: "Burrata Crémeuse", price: "14.50€", description: "Betteraves rôties et huile de noisette", highlight: true },
          { name: "Céviche de Daurade Royale", price: "16€", description: "Lait de coco, citron vert et piment" },
          { name: "Velouté de Saison", price: "11€", description: "Légumes du marché et éclats de châtaignes" },
          { name: "Tataki de Bœuf", price: "15.50€", description: "Sauce ponzu et herbes thaï" },
          { name: "Œuf Parfait 64°", price: "12.50€", description: "Crème de champignons et noisettes grillées" },
          { name: "Gyozas Maison (x5)", price: "13€", description: "Porc et gingembre, sauce soja sucrée" },
          { name: "Salade de Lentilles Beluga", price: "11.50€" },
          { name: "Carpaccio de Saint-Jacques", price: "17€" }
        ]
      },
      {
        category: "Le Grand Direct (Plats)",
        items: [
          { name: "Filet de Cabillaud Vapeur", price: "26€", description: "Riz noir vénéré et émulsion citronnelle", highlight: true },
          { name: "Entrecôte Simmental (300g)", price: "34€", description: "Frites maison et sauce béarnaise" },
          { name: "Risotto Impérial aux Gambas", price: "28.50€", description: "Bisque de crustacés et cerfeuil" },
          { name: "Burger Radioeat Original", price: "22.50€", description: "Pain brioché, bœuf 180g, cheddar affiné" },
          { name: "Suprême de Volaille Jaune", price: "24€", description: "Purée fondante et jus corsé" },
          { name: "Linguine à la Truffe d'Automne", price: "29€", description: "Crème de parmesan 24 mois" },
          { name: "Tataki de Thon Rouge", price: "27€", description: "Mousseline d'avocat et wakamé" },
          { name: "Aubergine Miso Rôtie", price: "19.50€", description: "Végétarien, riz basmati et graines de courge" },
          { name: "Tartare de Bœuf au Couteau", price: "21€", description: "Préparé selon l'humeur du chef" },
          { name: "Sèche à la Plancha", price: "25€" },
          { name: "Pavé de Saumon Label Rouge", price: "26.50€" },
          { name: "Brochettes de Poulet Yakitori", price: "22€" }
        ]
      },
      {
        category: "Finales Culturelles (Desserts)",
        items: [
          { name: "Mousse au Chocolat 70%", price: "9.50€", description: "Éclats de fleur de sel", highlight: true },
          { name: "Pavlova aux Fruits de Saison", price: "10.50€", description: "Meringue craquante et sorbet maison" },
          { name: "Cheesecake Citron Vert", price: "11€", description: "Croustillant spéculoos" },
          { name: "Pain Perdu Minute", price: "12€", description: "Caramel beurre salé et glace vanille" },
          { name: "Assortiment de Sorbets", price: "9€" },
          { name: "Café Gourmand Radioeat", price: "11.50€" },
          { name: "Tartelette Citron Meringuée", price: "10€" }
        ]
      },
      {
        category: "La Radio (Boissons & Cave)",
        items: [
          { name: "Cocktail Studio 104", price: "14.50€", description: "Gin, St-Germain, concombre, soda", highlight: true },
          { name: "Coupe de Champagne Brut", price: "14€" },
          { name: "Verre de Sancerre Blanc", price: "11€" },
          { name: "Pinte de Bière Artisanale", price: "9.50€" },
          { name: "Expresso Pur Arabica", price: "3.50€" },
          { name: "Thé Mariage Frères", price: "7€" },
          { name: "Jus de Fruits Frais", price: "8€" },
          { name: "Limonade Maison au Gingembre", price: "7.50€" },
          { name: "Double Expresso", price: "5.50€" }
        ]
      }
    ]
  },
  description: "Niché au premier étage de la Maison de la Radio et de la Musique, Radioeat est une brasserie contemporaine qui vibre au rythme de la création. Son design épuré, signé par l'architecte Stéphane Maupin, offre un cadre lumineux avec une vue imprenable sur la Seine et la Tour Eiffel. On y déguste une cuisine saine, créative et de saison, orchestrée par le chef Eric Wapler. C'est l'adresse idéale pour un déjeuner baigné de lumière ou un dîner avant un concert prestigieux, dans une ambiance culturelle et décontractée.",
  expert_catchline: "La brasserie contemporaine et lumineuse de la Maison de la Radio.",
  insider_tip: "• **Vue Privilégiée** : Demandez une table près des baies vitrées pour admirer la Tour Eiffel tout en déjeunant.\n  • **Combo Concert** : Le restaurant est parfait pour une immersion totale avant ou après une émission publique ou un concert au Studio 104.\n  • **Brunch du Dimanche** : Très couru par les familles du 16ème, pensez à réserver tôt.",
  specials: {
    cuisine: ["Contemporaine", "Française"],
    drinks: ["Cocktails Radio", "Vins de Vignerons"],
    must_eat: "Cuisine Contemporaine. Burrata & Betteraves & Cabillaud Vapeur.",
    must_drink: "Cocktail Studio 104"
  },
  images: {
    hero: "AU_ZVEFLwRBhd55D-Guqz0pvhF9OnOdLK1VD_VoJ2R3x3ArFnQbMAM3TrxoQj0lCKLlXcMJyAKWSxwH-E3_ddDWjeZoi5ItCEfnkUTP5vXg5FevmpzxrlD6XXm7gVGwYKuJaAtWcAL-p0wJ1codI9r7NmvDDyzlTXd3UAzNRvtOnWJKoGxwojJ5OjzZ0jxKW0Lmk88RqHFQFWnIkR10LuE-YWDsm_ToqbBGOLU8kVWNeYZfMBNXEEArU0CfnqVsha_awtUuJbijbZ5cmdgLbiNUmYqlnvL1x1L5laTSFYZVxv-EAog",
    gallery: [
      "AU_ZVEH9HfhJTafbaqTFvEq5a_3j-4E0thpTF5abcwH85aVZIu3uQvF1tOFgshcolajhMXZIBTXrLr2i-fhdBU854xx8IITLdlwmqmeQCkDmBEXiTTLD0JhZ85Rz_ZsX-7wqSOScujZTOkNdP1SR_unBnBkEVn-r4g1PjanUDWmk4o0t4Bz1l7lTlvSkz78vCWhvvMeUzRFwo6Zbs2ZR2-Hv-pzuU5crBORftUAJh8qF6-ZukycHhTCX1rAOHGg9ZBOTk2JuQSukCZ6f4MQyIqQvtcgHvWTSYMg6FoBbOXaQu2V7Wg",
      "AU_ZVEFDBlGPpznQXj5GBQ7vkaybsjFKnh9WbLFjN5hbWZFoGUWn69ITbou_w3c0IYH6oUu3cU4OLziZrHto824ku9UtZUx7tsWTsdxLkDk9rf2hXZq-10a5FDX9WLooBaEFSx70QjQExmRa2uSy1sHxZwK6l8yBPH7YoIg66vdgtEnHyYr2dzTvyiGvPptQ6A8wNcEE5Ro-XCmJ5NJHivXyH2k8_lPCzc4JcwoPBpruUXJDqinRDlnBCK0TYXOYTJBVl7GN64EGEOpKm93E64NWbi8y9_jhu51ymshRrBoiGs3H1pp25ukIQu7MRTozIO9qbIxuAkwlL1Jkl_WqjV8bbQZOnIeY4n3KHgIzXumWkk3p4W864AdFl2QqLB-hUV5vVGdOLAtL6HZUFVTsbSNfVgsSfR9GtiS1daSUu6T85uLCHWjY"
    ]
  },
  verified: true,
  google_rating: 4.1,
  instagram_handle: "radioeatparis",
  real_talk: {
    text: "Une institution musicale et gourmande. La lumière y est magique au coucher du soleil, et l'assiette est d'une grande finesse pour une brasserie de cette taille. C'est le carrefour des ondes et du goût.",
    must_eat: "Cuisine Contemporaine. Burrata.",
    le_secret: "La table près de la baie vitrée offre la meilleure vue sur la tour Eiffel scintillante.",
    le_son: "Un mélange de jazz, d'électro soft et de bribes de musique classique s'échappant des studios.",
    le_must: "Dîner juste avant un concert de l'Orchestre National de France."
  }
};

export default radioeat;
