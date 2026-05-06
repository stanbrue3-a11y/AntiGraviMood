import { SurgicalPlace } from "../../../type-definition";

export const il_cuoco_galante: SurgicalPlace = {
  id: "poi-il-cuoco-galante",
  slug: "il-cuoco-galante",
  name: "Il Cuoco Galante",
  category: "restaurant",
  subcategory: ['italien'],
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
        category_type: "starter",
        display_label: "Antipasti & Créations (Entrées)",
        items: [
          { name: "Vitello Tonnato, Carotte & Câpres rôtis", price_cents: 1400, is_highlight: true },
          { name: "Burrata di Puglia, Petits pois & Menthe", price_cents: 1200, is_highlight: true },
          { name: "Supion poêlé au Pesto de Menthe & Roquette", price_cents: 1400 },
          { name: "Croquettes au Parmesan & Crème de Citron", price_cents: 1100 },
          { name: "Asperges Blanches alla Parmigiana & Sarrasin", price_cents: 1400, is_highlight: true },
          { name: "Carpaccio de Bœuf au Sel d’Agrumes", price_cents: 1550 },
          { name: "Polpette della Nonna à la Tomate San Marzano", price_cents: 1250 },
          { name: "Velouté de Saison & Foccacia Maison", price_cents: 1000 }
        ]
      },
      {
        category_type: "other",
        display_label: "Pâtes Fraîches Maison (Primi)",
        items: [
          { name: "Bottoni à la Joue de Bœuf confite & Parmesan", price_cents: 2400, is_highlight: true },
          { name: "Spaghetti à l’Encre & Bisque de Langoustine", price_cents: 2400, is_highlight: true },
          { name: "Pappardelle alla Vaccinara (Queue de Bœuf 48h)", price_cents: 2600, is_highlight: true },
          { name: "Spaghetti au Pesto de Roquette & Ail des Ours", price_cents: 2100 },
          { name: "Ravioli à la Ricotta, Épinards & Truffe Noire", price_cents: 2800 },
          { name: "Gnocchi Maison au Beurre d’Estragon", price_cents: 2250 }
        ]
      },
      {
        category_type: "main",
        display_label: "Piatti della Casa (Plats)",
        items: [
          { name: "Tagliata d’Onglet de Veau & Pommes de terre rôties", price_cents: 2600, is_highlight: true },
          { name: "Bar rôti Acqua Pazza & Mousseline de fèves", price_cents: 2600, is_highlight: true },
          { name: "Poulpe croustillant & Crème de fèves de luxe", price_cents: 2750 },
          { name: "Filet de Bœuf au Poivre Vert & Réduction de Gavi", price_cents: 3200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Pommes de Terre rôties au Romarin & Ail", price_cents: 700 },
          { name: "Caponata Sicilienne Traditionnelle Maison", price_cents: 850, is_highlight: true },
          { name: "Salade de Jeunes Pousses & Vinaigrette Balsamique", price_cents: 600 },
          { name: "Légumes du Marché grillés au four à bois", price_cents: 750 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Dolci & Formaggi (Desserts)",
        items: [
          { name: "Le Tiramisu ’Minute' de la Casa", price_cents: 1100, is_highlight: true },
          { name: "Panna Cotta à la Fraise (Sans Gélatine)", price_cents: 1000, is_highlight: true },
          { name: "Bruto ma Buono: Limoncello & Amande", price_cents: 1000 },
          { name: "Assiette de Fromages Italiens Affinés (Sélection)", price_cents: 1450 },
          { name: "Sorbet Citron de Sicile & Zestes", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cantina del Cuoco (Boissons)",
        items: [
          { name: "Verre de Catarratto ’Tule' (Bio)", price_cents: 700, is_highlight: true },
          { name: "Verre de Nero d’Avola ’Principe’ (Bio)", price_cents: 750 },
          { name: "Bouteille de Barolo DOCG (Sélection)", price_cents: 6800, is_highlight: true },
          { name: "Cocktail Spritz Artisanal au Select", price_cents: 1100 },
          { name: "Eau micro-filtrée Cuoco (75cl)", price_cents: 450 },
          { name: "Café Espresso Italien Torréfaction Brune", price_cents: 350 },
          { name: "Digestif Limoncello Maison", price_cents: 700 }
        ]
      }
    ]
  },
  description: "Il Cuoco Galante est une destination de choix pour les amateurs de haute gastronomie italienne dans le 9ème. Ce ’cuisinier galant’ propose une partition raffinée où les classiques transalpins sont réinterprétés avec une élégance moderne. La star incontestée reste la pâte fraîche, confectionnée chaque jour à la main avec une technicité remarquable. Dans un cadre feutré et chaleureux avec cuisine ouverte, chaque assiette raconte une histoire de terroir et de passion, faisant de cette adresse l’une des plus belles expressions de l'Italie à Paris.",
  insider_tip: "• **Les Pâtes** : Le travail sur les pâtes fraîches est exceptionnel. Ne passez pas à côté des Bottoni ou des Pappardelle alla vaccinara.\n• **Le Tiramisu** : Il est monté à la commande, ce qui lui confère une légèreté et une fraîcheur incomparables.\n• **Le Menu Carte Blanche** : Pour 46€, le chef vous propose une immersion totale en 4 séquences, un rapport qualité-prix rare pour ce niveau de cuisine.",
  specials: {
    cuisine: ["Italien"],
    drinks: ["Vins italiens bio & nature", "Meilleurs crus de la Botte", "Digestifs artisanaux"],
    must_eat: "Cuisine italienne. Les Bottoni à la joue de bœuf confite : un concentré de gourmandise et de finesse dans une pâte d’une finesse absolue.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/il-cuoco-galante/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/il-cuoco-galante/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/il-cuoco-galante/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/il-cuoco-galante/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/il-cuoco-galante/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/il-cuoco-galante/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Les Bottoni à la joue de bœuf confite : un concentré de gourmandise et de finesse dans une pâte d’une finesse absolue.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default il_cuoco_galante;
