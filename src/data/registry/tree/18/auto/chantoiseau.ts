import { SurgicalPlace } from "../../../type-definition";

export const chantoiseau: SurgicalPlace = {
  id: "poi-chantoiseau",
  slug: "chantoiseau",
  name: "Chantoiseau",
  category: "restaurant",
  subcategory: ["français", "bistronomique", "moderne", "michelin", "montmartre"],
  location: {
    address: "63 Rue Lepic, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8877673,
    lng: 2.3347259,
    nearest_metro: "Lamarck - Caulaincourt",
    metro_lines: [12],
    google_id: "ChIJF_F9KShv5kcRK4C7yvLdvxY"
  },
  moods: {
    chill: 85,
    festif: 35,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: 19:00 – 21:30 | mardi: 12:00 – 13:30, 19:00 – 21:30 | mercredi: 12:00 – 13:30, 19:00 – 21:30 | jeudi: 12:00 – 13:30, 19:00 – 21:30 | vendredi: 12:00 – 13:30, 19:00 – 21:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.chantoiseau-paris.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
        { name: "Crème de Châtaigne & Mandarine", price_cents: 1400, description: "Jus de mandarine, crème crue fumée" },
        { name: "Tourteau Frais Décortiqué", price_cents: 1900, description: "Mayonnaise pamplemousse, radis noir" },
        { name: "Carpaccio de Saint-Jacques", price_cents: 1800, description: "Huile de basilic, agrumes" },
        { name: "Asperges Vertes Grillées", price_cents: 1500 },
        { name: "Os à Moelle & Herbes", price_cents: 1200 },
        { name: "Terrine de Campagne Maison", price_cents: 1100 }
      ]},
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
        { name: "Longe de Porc Rôtie", price_cents: 2600, description: "Gnocchi maison, asperges, jus vert" },
        { name: "Bar Confit aux Algues", price_cents: 3500, description: "Heliantis, épinards citronnés" },
        { name: "Blanquette de Veau Tradition", price_cents: 2800, description: "Version légère et moderne" },
        { name: "Risotto au Safran & Coquillages", price_cents: 3200 },
        { name: "Canette de Challans", price_cents: 3400, description: "Légumes racines, jus corsé" },
        { name: "Pavé de Lieu Jaune", price_cents: 2700 },
        { name: "Agneau de Lait des Pyrénées", price_cents: 3600 },
        { name: "Plat Végétarien du Moment", price_cents: 2200 }
      ]},
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
        { name: "Tartelette Citron & Citronnelle", price_cents: 1100, description: "Panacotta vanille" },
        { name: "Savarin Verveine & Citron", price_cents: 1100, description: "Chantilly chocolat blanc" },
        { name: "Mousse Chocolat Grand Cru", price_cents: 1000 },
        { name: "Brioche Perdue & Caramel", price_cents: 1200 },
        { name: "Sorbet Maison Saisonnier", price_cents: 900 },
        { name: "Sélection de Fromages Affinés", price_cents: 1400 }
      ]}
    ]
  },
  description: "Une pépite bistronomique perchée sur la Butte. Chantoiseau propose une cuisine d'auteur, précise et saisonnière, dans un cadre épuré et chaleureux. Le chef magnifie des produits d'exception avec des associations audacieuses, faisant de cette adresse l'une des plus excitantes du 18e.",
  insider_tip: "• **Menu Déjeuner** : À 23-34€, c'est l'un des meilleurs rapports qualité-prix de la ville pour ce niveau de technicité.\n• **Place de choix** : Les tables près de la vitrine offrent une lumière magnifique le midi.\n• **Accord Mets-Vins** : Laissez-vous guider, la sélection de vins nature et bio est pointue et surprenante.",
  specials: {
    cuisine: ["Française Moderne", "Bistronomique"],
    drinks: ["Vins Nature", "Bio"],
    must_eat: "Cuisine de saison. Crème de châtaigne & Blanquette moderne",
  },
  images: {
    hero: "AU_ZVEFWuhzeFwA2XthMYlJKxx8ueFdwrtR2UFJyTEods6ycml_K6rWJgUt0O2jLsAtFyKTFZUi2yQB8r6hpLpqlXlpJ6tnWMtPSFYhxXdAQ2GcbvTdrWcCes2MUfqFUko4yHd3x1nYfjh_DdFbXcWLT92vDzdUvnWif1ZVEO7NR4W33Ff3POgHHixpWlhLCTh8tRdaSYyJwCG9wqPe9F73OKmtiDuHjaBDiHzS1JkfWH7Hf-rD3d5yWa_8_IAkRhDYgtuXRXbOxqVV1V8PusTitMqwxbhP7Ox4efAD7043JGvQMuA",
    gallery: ["AU_ZVEH_ziLnyLhXqTidugGy-KwoZi2m3t5VnJxUuzs4V7MAo18mCRIftjHjd8hCCEwaEZbZlXQcmeaK6Jyz7Gi-n70ZS7arKbVJAHWImqosroxe6l1RLUbAHggzfZqyCrZGFVV_jGbqePS3vyr4zM8ZYpA6OKm9uVKGy4VD8H2CSgWeyDbUc1r5y-WPPJT74rYHrcKjkyoIOodusaUZm7WcdStyXVxEcq4LZ-kd4NMPtF7ebsw4izuPLotHsmi4VIpFcJwnU-4ixqljGmkfTVRFtxmEgcGdtOSKkuyePCk1ftfDCw","AU_ZVEEdMtNtOSKcl1Gfn6gCwdJvVBk9be83pJYXliNiwwKHaga3Kfm9_489yhhO0YPm-SPBkO0HI2LBu0vQdoOoYYLFWZ1Z-tk3qd33TPd4leGMppe0LvL2a6CefkRA-nI81ohVlSavH5R_Uf2zL9agps3vr6lf9KB6MzlPOrGv1j1XXpEm7uKZH1363rQZ0WF5sBCyTw77EbbQ0iaL-eDWPZInqA1Xr_tACfMt8ZQjSm0Lw977XtcjUjo7J5TW7jA9WWIPt-mTGoWZBziqOxJUhXtMDqabMMmW-emyGnYWLVUcLw"]
  },
  verified: true,
  google_rating: 4.8
};

export default chantoiseau;
