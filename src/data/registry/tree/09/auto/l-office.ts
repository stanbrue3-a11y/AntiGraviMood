import { SurgicalPlace } from "../../../type-definition";

export const l_office: SurgicalPlace = {
  id: "poi-l-office",
  slug: "l-office",
  name: "L'Office",
  category: "restaurant",
  subcategory: ["bistrot", "bistronomie", "chic", "terroir"],
  location: {
    address: "3 Rue Richer, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8739656,
    lng: 2.3473865,
    nearest_metro: "Grands Boulevards",
    metro_lines: [8, 9],
    google_id: "ChIJNx8QCxVu5kcRsvXJ_CQNDvY"
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi-vendredi: 12:00–14:30, 19:30–22:30; Fermé samedi-dimanche",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.office-resto.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 28, // Prix médian des plats hors Wellington
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Préludes de la Rue Richer (Entrées)",
        items: [
          { name: "Mini Tacos de Boeuf de Salers & Chimichurri", price: "13.00€", highlight: true },
          { name: "Coppa artisanale & Citron vert", price: "12.00€" },
          { name: "Daurade marinée au Ponzu & Crème citronnée", price: "15.00€", highlight: true },
          { name: "Crème de Chou-fleur & Vanille (Végétarien)", price: "13.00€" },
          { name: "Petits Baos au Bœuf, Mayo Citron Vert", price: "13.00€" },
          { name: "Gaspacho Tomate Orange & Ricotta", price: "11.00€" },
          { name: "Keftas de Boeuf de Salers / Ketchup Poivron", price: "13.00€" },
          { name: "Ravioles Brousse de brebis (Petite portion)", price: "14.00€" }
        ]
      },
      {
        category: "Pièces de Conviction (Plats)",
        items: [
          { name: "Filet de Bœuf Wellington (Plat Signature)", price: "39.00€", highlight: true },
          { name: "Quasi de Veau & Beurre Café de Paris", price: "28.00€", highlight: true },
          { name: "Pêche du jour & Mousseline de Vitelottes", price: "29.00€" },
          { name: "Ravioles Brousse de brebis, Citron confit (Plat)", price: "24.00€", highlight: true },
          { name: "Bœuf Bourguignon Traditionnel L'Office", price: "26.00€" },
          { name: "Ris de Veau dorés & Jus de viande corsé", price: "36.00€", highlight: true },
          { name: "Parmentier de Canard aux Épices douces", price: "25.00€" },
          { name: "Risotto de saison aux Champignons des bois", price: "23.00€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pomme de terre Ratte de pays", price: "7.00€", highlight: true },
          { name: "Légumes Racines rôtis au Four", price: "7.50€" },
          { name: "Épinards frais saisis au beurre Noisette", price: "6.50€" },
          { name: "Salade de Jeunes Pousses & Vinaigrette Maison", price: "6.00€" },
          { name: "Frites Maison double cuisson", price: "6.50€" }
        ]
      },
      {
        category: "Desserts de Tradition (Desserts)",
        items: [
          { name: "Cheesecake Mandarine brûlée", price: "13.00€", highlight: true },
          { name: "Tarte soufflée au Chocolat & Tonka", price: "14.00€", highlight: true },
          { name: "Ganache Chocolat Blanc & Cèpes (Signature)", price: "13.00€", highlight: true },
          { name: "Pastilla aux Pistaches d'Iran & Rose", price: "13.00€" },
          { name: "Assortiment de Trois Fromages affinés", price: "13.00€" },
          { name: "Pavlova aux Fruits Exotiques & Shiso", price: "12.50€" },
          { name: "Mousse au Chocolat Noir 70%", price: "10.00€" }
        ]
      },
      {
        category: "La Cave de l'Office (Boissons)",
        items: [
          { name: "Verre de Vin Nature Sélection Benjamin", price: "9.50€", highlight: true },
          { name: "Bouteille de Grand Cru Rare (Sélection Cave)", price: "95.00€" },
          { name: "Cocktail Negroni Office", price: "12.00€", highlight: true },
          { name: "Thé Vert à la fève Tonka préparé minute", price: "6.50€" },
          { name: "Café Espresso de spécialité Lomi", price: "3.50€" },
          { name: "Eau micro-filtrée Office (75cl)", price: "4.50€" },
          { name: "Spritz Maison (Aperol/Prosecco/Secret)", price: "10.00€" }
        ]
      }
    ]
  },
  description: "L'Office est l'un des pionniers de la néo-bistronomie dans le 9ème. Situé au cœur de la vibrante rue Richer, cet établissement allie un décor élégant et boisé à une cuisine d'une précision remarquable. Le chef y sublime les classiques bourgeois — comme le légendaire Bœuf Wellington — avec une touche contemporaine et des produits d'une fraîcheur irréprochable. L'atmosphère y est feutrée le soir, idéale pour une immersion dans le Paris gourmand et sophistiqué.",
  insider_tip: "• **Le Wellington** : C'est le passage obligé. La croûte est parfaite et la viande fondante. Réservez-le à l'avance si possible.\n• **Le Midi** : La formule déjeuner à 25€ (E+P) est probablement l'un des meilleurs deals du quartier.\n• **La Cave** : Benjamin Pelatan a constitué une cave de plus de 150 références, laissez-vous guider, il y a de vraies pépites naturelles.",
  specials: {
    cuisine: ["Bœuf Wellington d'exception", "Bistronomie de précision", "Produits de saison"],
    drinks: ["Plus de 150 références de vins", "Vins natures & biodynamiques", "Cocktails Maison"],
    must_eat: "Le Filet de Bœuf Wellington (39€) : une croûte dorée croustillante abritant une viande d'une tendreté absolue, escorté de sa purée Ratte.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEH-i-6j-5I_R89kL-P-N1V--_u9fUMlZOfPu_xU40_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHReRKh0dSWhMKdS3iF1ALRwdp6sT005Ke-HMxgYag-yTYaYH90ZNFg8ukcO6pTaPxllOW9V9AM_HBry6v_8Me65ie1Qqf7NjWDxGWIDzM5hV55kad3EOoIMVF0z0A5QbbqV2QFmUFMQpcyYue5p1n7OUtI6RWinSU-LTLScL0gximL5mSCVq5BC-COT5ApK1CWAdzCCFyHBIXp3qcEJjJM8EtLRNkqIOIKPlb5c9I&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGf5fjECvVn5ayKSPn7t4rZIgY0Tk6cOyGTcbuvHL2Ik_7DHt9p1lHKk5A5g9GaTieSjOJ53If7Uk7xnP-PRzf22gnAkO-YwC8a4TRoZrp683ouQb21yrj2cF32LEJvJ0Kn4-JM6xUcX5NwxtQYhhVDIJOo-z3HqXEuJs2fn1q9gQAQ6jlHmGclLmcTWAGO7HLdgdCxLCgvqTdZOAjV25E481beelulf-Ewzy5bZ7To1EbxFsajpc4lOMc3JD17fmBHRITQsWnDzY_ZglWkGYIXIg7hnBmXK0cCXly3Eur5AD6thzbwV2b9nW7gJCYmLXuAHkT8-Iqrt5KZcyDqh1J5hYsxlwdjdurKKm445-JnA-5BqfoL-9zni3oiHwNbhw69IjuEgRxOCKnYTS5VanOUR19ha-r7ZPsWLHGtNfS5BxxqLT1sbBDNx8HWKQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default l_office;
