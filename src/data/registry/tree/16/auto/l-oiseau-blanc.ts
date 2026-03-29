import { SurgicalPlace } from "../../../type-definition";

export const l_oiseau_blanc: SurgicalPlace = {
  id: "poi-l-oiseau-blanc",
  slug: "l-oiseau-blanc",
  name: "L’Oiseau Blanc",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "19 Av. Kléber, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8707437,
    lng: 2.2933137,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJZXST6-5v5kcR2yYcipYCUqA"
  },
  moods: {
    chill: 80,
    festif: 40,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:00 – 22:00 | mardi: 12:00 – 14:00, 19:00 – 22:00 | mercredi: 12:00 – 14:00, 19:00 – 22:00 | jeudi: 12:00 – 14:00, 19:00 – 22:00 | vendredi: 12:00 – 14:00, 19:00 – 22:00 | samedi: 12:00 – 14:00, 19:00 – 22:00 | dimanche: 12:00 – 14:00, 19:00 – 22:00",
    reservation_policy: "resa_obligatoire",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.peninsula.com/fr/paris/hotel-fine-dining/french-rooftop-loiseau-blanc",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 350,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Le Voyage Culinaire (Menus)",
        items: [
          { name: "Menu Dégustation", price_cents: 42500, description: "L'expérience David Bizet en 7 services face à la Tour Eiffel", is_highlight: true },
          { name: "Menu Déjeuner", price_cents: 18500, description: "Entrée, Plat, Dessert (Servi du lundi au vendredi)" },
          { name: "Accord Mets & Vins 'Aventure'", price_cents: 19500 },
          { name: "Accord 'Grande Réserve'", price_cents: 35000 }
        ]
      },
      {
        category_type: "other",
        display_label: "Les Étapes de l'Envol",
        items: [
          { name: "Prélude Gourmand", price_cents: 0, description: "Série d'amuse-bouches autour des céréales" },
          { name: "Tomate de pleine terre", price_cents: 0, description: "En eau glacée, herbes du jardin" },
          { name: "Langoustine Royale", price_cents: 0, description: "Celle du Guilvinec, fumée et nacrée", is_highlight: true },
          { name: "Turbot de ligne", price_cents: 0, description: "Cuit sur l'arête, condiment algues et bergamote" },
          { name: "Bar de Petit Bateau", price_cents: 0, description: "Écailles croustillantes, jus de coquillages" },
          { name: "Poulet de Bresse en deux services", price_cents: 0, description: "La signature du chef, cuit au foin", is_highlight: true },
          { name: "Ris de Veau de Lait", price_cents: 0, description: "Laqué au réglisse, déclinaison de carottes" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Final & Douceurs",
        items: [
          { name: "Fromages Affinés", price_cents: 3500, description: "Sélection de la maison Quatrehomme" },
          { name: "L'Oiseau Blanc au Chocolat", price_cents: 0, description: "Dessert signature rendant hommage à l'aviation", is_highlight: true },
          { name: "Riz au Lait & Caramel", price_cents: 0, description: "Le souvenir d'enfance réinventé" },
          { name: "Mignardises de l'Atelier", price_cents: 0 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cave & Cocktails",
        items: [
          { name: "Coupe de Champagne Peninsula", price_cents: 3200 },
          { name: "Cocktail 'Kléber 1927'", price_cents: 2800 },
          { name: "Bouteille de Puligny-Montrachet", price_cents: 21000 },
          { name: "Eau Minérale (75cl)", price_cents: 1200 },
          { name: "Expresso Pur Origine", price_cents: 1000 }
        ]
      }
    ]
  },
  description: `Perché au 6ème étage de l'hôtel Peninsula, L'Oiseau Blanc rend hommage à l'aviation française avec une réplique du biplan de Nungesser et Coli suspendue dans le vide. Le chef David Bizet y déploie une gastronomie de haute voltige, technique et lisible, récompensée par deux étoiles Michelin. La vue panoramique sur tout Paris et la Tour Eiffel est tout simplement la plus belle de la capitale.`,
  expert_catchline: `Gastronomie de haute voltige et vue panoramique sur l'histoire de l'aviation.`,
  insider_tip: `• **Le Balcon** : En été, la terrasse est un must absolu pour le coucher du soleil.
  • **Le Poulet de Bresse** : C'est le plat de David Bizet qui lui a valu sa réputation mondiale, ne le manquez pas.
  • **Coucher de Soleil** : Réservez 30 minutes avant l'heure dorée pour voir la Tour Eiffel s'allumer pendant votre cocktail.`,
  specials: {
    cuisine: ["Gastronomique", "Français"],
    drinks: ["Vin de collection", "Cocktails Signature"],
    must_eat: "Le Poulet de Bresse en deux services. Un chef-d'œuvre de technique française.",
  },
  images: {
    hero: "AU_ZVEFtw-7Ngx8fLBvrEU7fZQ9_B_tdydHDCA3U5x1NZrmdXdbofYmPDU-j2kCM7icgktGFV4BNSJ8LKzQ8ds_yZfL9vJBM7jfkB9WtHde1hbiMP3daTddiy7-fIZ9EiKgaTAIm3wTUtTL9nB9r1rXGGCAR51oQMJC8EgPi80y8SOxibGdoX8V3tvpdUKSZGhjxCZEyXh4wseM-y35WhNrIXwy3_En7AiG3BxVU3sQhQd-qJ1SYxPS5SHTsnf4-Po_ZNHQBLVS8ZlJxn194dXjAtsVCuhR7SYCKYWgVR6mokpPgag",
    gallery: ["AU_ZVEG7C6NaLcyGufvo8l-IS92mvl55hr1ssOReCoFk_OEUkDAguWyUf2DSsYsyuWFbqbm7RnV3laQntWo7ZfHe5x9BZSahaNbisxGxDsr_rGZsvlA8adun_ucTJus5vUP4dQMypZsd4lBRULCCMFvbue5hXZvaniiPIUM1muIC9ol3azVBXJdAORkOe5bmpssmcWJqpsyPw9RZBb_qsgZMV5TqA0NWdWA1En9lti0PWWPB3k5c3t8ryonlxt8q6XWeEISq0Ab-Zu20UOYAXbeoWm5QRo0BkSN7VJJbnRVdst7_CQ","AU_ZVEGqFMlJubcF6SpehInbfYetqkBzx49mW3hIuQS3a31c45pcbPu6uyTb8foU8A2REjY_WqDdjoBbXV4izOjbzKJvGUHLYsG4vmXBxf-pH6EHRIGDNJOjh4TWLzt2DPfQJb4Vf4SOcbHCCem05OXxFydIAfHhhyiKo1YR7X7zW_b6SSG2vei0396JZOw5Og4BlfFBNy6y9fiyEFwWE7vu3N5uWbR2E1ki2tptATCONKbCgIO5BSNQlnfBtTw1_9fpK3CibKCCqOCgTY_meide-NiXU7qdw2q3CcC8Sn_linrR8A"]
  },
  verified: true,
  google_rating: 4.6,
  michelin_stars: 2,
  real_talk: {
    text: "L'Oiseau Blanc, c'est le luxe ultime. On y vient pour la vue (indiscutable), mais Bizet a réussi l'exploit de rendre l'assiette aussi mémorable que la Tour Eiffel. C'est précis, c'est riche, et le service est digne du Peninsula.",
    must_eat: "L'Oiseau Blanc au Chocolat",
    le_secret: "La table près de la réplique grandeur nature du biplan au-dessus du vide.",
    le_son: "Le vent discret sur le rooftop et le murmure des discussions feutrées.",
    le_must: "Dîner au moment où la Tour Eiffel commence à scintiller."
  }
};

export default l_oiseau_blanc;
