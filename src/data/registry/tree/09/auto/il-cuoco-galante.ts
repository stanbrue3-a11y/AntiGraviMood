import { SurgicalPlace } from "../../../type-definition";

export const il_cuoco_galante: SurgicalPlace = {
  id: "poi-il-cuoco-galante",
  slug: "il-cuoco-galante",
  name: "Il Cuoco Galante",
  category: "restaurant",
  subcategory: ["italien", "gastronomique", "pates-fraiches", "raffine"],
  location: {
    address: "36 Rue Condorcet, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8800117,
    lng: 2.3451315,
    nearest_metro: "Anvers",
    metro_lines: [2],
    google_id: "ChIJ56tnwEFu5kcRfWMeHsjARF4"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:30–22:30; Fermé dimanche-lundi",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.ilcuocogalante.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 24, // Prix médian des pâtes fraîches
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Antipasti & Créations (Entrées)",
        items: [
          { name: "Vitello Tonnato, Carotte & Câpres rôtis", price: "14.00€", highlight: true },
          { name: "Burrata di Puglia, Petits pois & Menthe", price: "12.00€", highlight: true },
          { name: "Supion poêlé au Pesto de Menthe & Roquette", price: "14.00€" },
          { name: "Croquettes au Parmesan & Crème de Citron", price: "11.00€" },
          { name: "Asperges Blanches alla Parmigiana & Sarrasin", price: "14.00€", highlight: true },
          { name: "Carpaccio de Bœuf au Sel d'Agrumes", price: "15.50€" },
          { name: "Polpette della Nonna à la Tomate San Marzano", price: "12.50€" },
          { name: "Velouté de Saison & Foccacia Maison", price: "10.00€" }
        ]
      },
      {
        category: "Pâtes Fraîches Maison (Primi)",
        items: [
          { name: "Bottoni à la Joue de Bœuf confite & Parmesan", price: "24.00€", highlight: true },
          { name: "Spaghetti à l'Encre & Bisque de Langoustine", price: "24.00€", highlight: true },
          { name: "Pappardelle alla Vaccinara (Queue de Bœuf 48h)", price: "26.00€", highlight: true },
          { name: "Spaghetti au Pesto de Roquette & Ail des Ours", price: "21.00€" },
          { name: "Ravioli à la Ricotta, Épinards & Truffe Noire", price: "28.00€" },
          { name: "Gnocchi Maison au Beurre d'Estragon", price: "22.50€" }
        ]
      },
      {
        category: "Piatti della Casa (Plats)",
        items: [
          { name: "Tagliata d'Onglet de Veau & Pommes de terre rôties", price: "26.00€", highlight: true },
          { name: "Bar rôti Acqua Pazza & Mousseline de fèves", price: "26.00€", highlight: true },
          { name: "Poulpe croustillant & Crème de fèves de luxe", price: "27.50€" },
          { name: "Filet de Bœuf au Poivre Vert & Réduction de Gavi", price: "32.00€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Pommes de Terre rôties au Romarin & Ail", price: "7.00€" },
          { name: "Caponata Sicilienne Traditionnelle Maison", price: "8.50€", highlight: true },
          { name: "Salade de Jeunes Pousses & Vinaigrette Balsamique", price: "6.00€" },
          { name: "Légumes du Marché grillés au four à bois", price: "7.50€" }
        ]
      },
      {
        category: "Dolci & Formaggi (Desserts)",
        items: [
          { name: "Le Tiramisu 'Minute' de la Casa", price: "11.00€", highlight: true },
          { name: "Panna Cotta à la Fraise (Sans Gélatine)", price: "10.00€", highlight: true },
          { name: "Bruto ma Buono: Limoncello & Amande", price: "10.00€" },
          { name: "Assiette de Fromages Italiens Affinés (Sélection)", price: "14.50€" },
          { name: "Sorbet Citron de Sicile & Zestes", price: "9.00€" }
        ]
      },
      {
        category: "La Cantina del Cuoco (Boissons)",
        items: [
          { name: "Verre de Catarratto 'Tule' (Bio)", price: "7.00€", highlight: true },
          { name: "Verre de Nero d'Avola 'Principe' (Bio)", price: "7.50€" },
          { name: "Bouteille de Barolo DOCG (Sélection)", price: "68.00€", highlight: true },
          { name: "Cocktail Spritz Artisanal au Select", price: "11.00€" },
          { name: "Eau micro-filtrée Cuoco (75cl)", price: "4.50€" },
          { name: "Café Espresso Italien Torréfaction Brune", price: "3.50€" },
          { name: "Digestif Limoncello Maison", price: "7.00€" }
        ]
      }
    ]
  },
  description: "Il Cuoco Galante est une destination de choix pour les amateurs de haute gastronomie italienne dans le 9ème. Ce 'cuisinier galant' propose une partition raffinée où les classiques transalpins sont réinterprétés avec une élégance moderne. La star incontestée reste la pâte fraîche, confectionnée chaque jour à la main avec une technicité remarquable. Dans un cadre feutré et chaleureux avec cuisine ouverte, chaque assiette raconte une histoire de terroir et de passion, faisant de cette adresse l'une des plus belles expressions de l'Italie à Paris.",
  insider_tip: "• **Les Pâtes** : Le travail sur les pâtes fraîches est exceptionnel. Ne passez pas à côté des Bottoni ou des Pappardelle alla vaccinara.\n• **Le Tiramisu** : Il est monté à la commande, ce qui lui confère une légèreté et une fraîcheur incomparables.\n• **Le Menu Carte Blanche** : Pour 46€, le chef vous propose une immersion totale en 4 séquences, un rapport qualité-prix rare pour ce niveau de cuisine.",
  specials: {
    cuisine: ["Pâtes fraîches artisanales", "Gastronomie italienne", "Techniques modernes"],
    drinks: ["Vins italiens bio & nature", "Meilleurs crus de la Botte", "Digestifs artisanaux"],
    must_eat: "Les Bottoni à la joue de bœuf confite : un concentré de gourmandise et de finesse dans une pâte d'une finesse absolue.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEEnXfL8h-zB-E2O9zG0kZ0W-K5L7zY7rJ7e5W9J8_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHReRKh0dSWhMKdS3iF1ALRwdp6sT005Ke-HMxgYag-yTYaYH90ZNFg8ukcO6pTaPxllOW9V9AM_HBry6v_8Me65ie1Qqf7NjWDxGWIDzM5hV55kad3EOoIMVF0z0A5QbbqV2QFmUFMQpcyYue5p1n7OUtI6RWinSU-LTLScL0gximL5mSCVq5BC-COT5ApK1CWAdzCCFyHBIXp3qcEJjJM8EtLRNkqIOIKPlb5c9I&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGf5fjECvVn5ayKSPn7t4rZIgY0Tk6cOyGTcbuvHL2Ik_7DHt9p1lHKk5A5g9GaTieSjOJ53If7Uk7xnP-PRzf22gnAkO-YwC8a4TRoZrp683ouQb21yrj2cF32LEJvJ0Kn4-JM6xUcX5NwxtQYhhVDIJOo-z3HqXEuJs2fn1q9gQAQ6jlHmGclLmcTWAGO7HLdgdCxLCgvqTdZOAjV25E481beelulf-Ewzy5bZ7To1EbxFsajpc4lOMc3JD17fmBHRITQsWnDzY_ZglWkGYIXIg7hnBmXK0cCXly3Eur5AD6thzbwV2b9nW7gJCYmLXuAHkT8-Iqrt5KZcyDqh1J5hYsxlwdjdurKKm445-JnA-5BqfoL-9zni3oiHwNbhw69IjuEgRxOCKnYTS5VanOUR19ha-r7ZPsWLHGtNfS5BxxqLT1sbBDNx8HWKQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default il_cuoco_galante;
