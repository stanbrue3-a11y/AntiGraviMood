import { SurgicalPlace } from "../../../type-definition";

export const guillaume_grasso: SurgicalPlace = {
  id: "poi-guillaume-grasso",
  slug: "guillaume-grasso",
  name: "Guillaume Grasso",
  category: "restaurant",
  subcategory: ["pizza", "italien", "napolitain", "authentique"],
  location: {
    address: "45 Rue Brancion, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8335903,
    lng: 2.3044725,
    nearest_metro: "Brancion",
    metro_lines: [13],
    google_id: "ChIJV8Gmw0Zw5kcRtmbK7k0gZeY"
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.guillaume-grasso.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 25,
    is_free: false,
    dish_price: 15,
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Antipasti & Fritti (Entrées)",
        items: [
          { name: "Montanara (Pizza frite, tomate, parmesan)", price: "9.00€", highlight: true },
          { name: "Frittatina di Pasta (Béchamel, jambon, petits pois)", price: "7.50€", highlight: true },
          { name: "Arancino Rosso (Riz, tomates, mozzarella)", price: "7.00€" },
          { name: "Crocché di Patate (Pomme de terre, provola)", price: "6.50€" },
          { name: "Tagliere di Salumi Napoletani", price: "16.00€" },
          { name: "Burrata Pugliese (125g) & Roquette", price: "12.00€" },
          { name: "Bruschetta Classica al Pomodoro", price: "8.50€" },
          { name: "Insalata Caprese (Mozzarella di Bufala)", price: "14.50€" }
        ]
      },
      {
        category: "Pizze Classiche (Plats)",
        items: [
          { name: "Margherita (Tomate, Mozzarella, Basilic)", price: "11.00€", highlight: true },
          { name: "Marinara (Tomate, Ail, Origan)", price: "8.50€", highlight: true },
          { name: "Cosacca (Tomate, Pecorino Romano)", price: "9.50€" },
          { name: "Napoletana (Tomate, Anchois, Câpres, Olives)", price: "13.50€" },
          { name: "Provola e Pepe (Tomate, Provola fumée, Poivre)", price: "13.00€", highlight: true },
          { name: "Diavola (Tomate, Salami piquant, Mozzarella)", price: "14.00€" },
          { name: "Capricciosa (Artichauts, Champignons, Jambon)", price: "15.50€" },
          { name: "Quattro Formaggi (Sélection de fromages italiens)", price: "15.00€" },
          { name: "Prosciutto e Funghi (Jambon Blanc, Champignons)", price: "14.50€" },
          { name: "Siciliana (Aubergines frites, Tomate, Provola)", price: "15.00€" }
        ]
      },
      {
        category: "Pizze Speciali & Stagione (Plats)",
        items: [
          { name: "Vesuvio (Tomates cerises, Bufala, Nduja)", price: "17.00€", highlight: true },
          { name: "Parma (Mozzarella, Jambon de Parme 24 mois)", price: "18.50€", highlight: true },
          { name: "Bresaola (Mozzarella, Bresaola punta d'anca, Roquette)", price: "19.00€" },
          { name: "Végétarienne (Légumes grillés de saison)", price: "15.50€" },
          { name: "Ripieno / Calzone (Ricotta, Salami, Mozzarella)", price: "14.00€" },
          { name: "Emilia Romagna (Mortadelle, Pistache, Stracciatella)", price: "19.50€", highlight: true },
          { name: "Provola e Bresaola (Base blanche, Provola, Citron)", price: "18.00€" },
          { name: "Bianca al Tartufo (Crème de truffe, Champignons)", price: "21.00€" },
          { name: "Pistacchiosa (Crème de pistache, Speck, Mozzarella)", price: "20.00€" },
          { name: "Pesto di Basilico (Pesto maison, Pignons, Roquette)", price: "17.50€" }
        ]
      },
      {
        category: "Dolci Artigianali (Desserts)",
        items: [
          { name: "Tiramisù Classico (Recette secrète)", price: "7.50€", highlight: true },
          { name: "Panna Cotta à la Vanille de Madagascar", price: "6.50€" },
          { name: "Babà al Rum (Tradition napolitaine)", price: "8.00€", highlight: true },
          { name: "Cannolo Siciliano alla Ricotta", price: "7.00€" },
          { name: "Affogato al Caffè (Vanille & Espresso)", price: "7.50€" },
          { name: "Coppe di Gelato (3 boules artisanales)", price: "8.50€" },
          { name: "Cheesecake au Limoncello de Sorrente", price: "9.00€" }
        ]
      },
      {
        category: "La Cave Italienne (Boissons)",
        items: [
          { name: "Verre de Gragnano 'Ottouve' (Rouge pétillant)", price: "8.00€", highlight: true },
          { name: "Verre de Falanghina (Blanc de Campanie)", price: "7.50€" },
          { name: "Bouteille Lacryma Christi del Vesuvio", price: "38.00€" },
          { name: "Bière Moretti alla Spina (50cl)", price: "9.50€" },
          { name: "Chinotto Lurisia (33cl)", price: "6.00€" },
          { name: "Spritz Veneziano (Aperol/Prosecco)", price: "9.00€", highlight: true },
          { name: "Negroni Gin del Professore", price: "11.00€" }
        ]
      }
    ]
  },
  description: "Guillaume Grasso est le gardien du temple de la pizza napolitaine à Paris. Descendant de la famille fondatrice de l'Antica Pizzeria Da Michele à Naples, il pratique un art certifié par l'AVPN (Associazione Verace Pizza Napoletana). Ici, pas de croûte extravagante, mais une pâte fondante, une tomate San Marzano DOP et une cuisson éclair au four à bois. C'est l'expérience napolitaine la plus pure et la plus technique de la capitale.",
  insider_tip: "• **La Marinara** : Si vous voulez tester la qualité technique absolue, prenez la Marinara. Sans fromage, tout repose sur l'équilibre pâte/tomate/origan. Magnifique.\n• **Fritti** : Ne sautez pas les entrées frites (Montanara ou Frittatina), elles sont faites dans les règles de l'art napolitain.\n• **Le Vin** : Accompagnez votre pizza d'un Gragnano bien frais, le vin rouge pétillant de la baie de Naples, c'est l'accord local parfait.",
  specials: {
    cuisine: ["Vera Pizza Napoletana AVPN", "Frittatina di Pasta", "Pâte fondante"],
    drinks: ["Vins de Campanie (Gragnano)", "Chinotto Lurisia", "Spritz Authentique"],
    must_eat: "La Margherita di Bufala (12€) : la quintessence de Naples, une harmonie parfaite de saveurs et de textures.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEH-7GbHSv0iAq2Di_NsBbpv_9wfUMlZOfPu_xU40_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHReRKh0dSWhMKdS3iF1ALRwdp6sT005Ke-HMxgYag-yTYaYH90ZNFg8ukcO6pTaPxllOW9V9AM_HBry6v_8Me65ie1Qqf7NjWDxGWIDzM5hV55kad3EOoIMVF0z0A5QbbqV2QFmUFMQpcyYue5p1n7OUtI6RWinSU-LTLScL0gximL5mSCVq5BC-COT5ApK1CWAdzCCFyHBIXp3qcEJjJM8EtLRNkqIOIKPlb5c9Izue5p1n7OUtI6RWinSU-LTLScL0gximL5mSCVq5BC-COT5ApK1CWAdzCCFyHBIXp3qcEJjJM8EtLRNkqIOIKPlb5c9I&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGf5fjECvVn5ayKSPn7t4rZIgY0Tk6cOyGTcbuvHL2Ik_7DHt9p1lHKk5A5g9GaTieSjOJ53If7Uk7xnP-PRzf22gnAkO-YwC8a4TRoZrp683ouQb21yrj2cF32LEJvJ0Kn4-JM6xUcX5NwxtQYhhVDIJOo-z3HqXEuJs2fn1q9gQAQ6jlHmGclLmcTWAGO7HLdgdCxLCgvqTdZOAjV25E481beelulf-Ewzy5bZ7To1EbxFsajpc4lOMc3JD17fmBHRITQsWnDzY_ZglWkGYIXIg7hnBmXK0cCXly3Eur5AD6thzbwV2b9nW7gJCYmLXuAHkT8-Iqrt5KZcyDqh1J5hYsxlwdjdurKKm445-JnA-5BqfoL-9zni3oiHwNbhw69IjuEgRxOCKnYTS5VanOUR19ha-r7ZPsWLHGtNfS5BxxqLT1sbBDNx8HWKQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default guillaume_grasso;
