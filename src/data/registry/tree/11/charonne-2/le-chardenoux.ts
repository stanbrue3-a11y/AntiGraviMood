import { SurgicalPlace } from '../../../type-definition';

export const le_chardenoux: SurgicalPlace = {
    id: "poi-le-chardenoux",
    name: "Le Chardenoux",
    slug: "le-chardenoux",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "1 Rue Jules Vallès",
        arrondissement: 11,
        lat: 48.8527778,
        lng: 2.385,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJL9eeygty5kcRBJgRHblbXkw"
    },
    moods: {
        chill: 65,
        festif: 15,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–23:00\nmardi: 12:00–14:30, 19:00–23:00\nmercredi: 12:00–14:30, 19:00–23:00\njeudi: 12:00–14:30, 19:00–23:00\nvendredi: 12:00–14:30, 19:00–23:00\nsamedi: 12:00–14:30, 19:00–23:00\ndimanche: 12:00–14:30, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.restaurantlechardenoux.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 10.00,
        coffee_price: 0,
        dish_price: 28, // MANUAL: Median des Plats individuels (26, 28, 28, 28, 31, 32, 32) — bar en croûte et entrecôte exclus (partage)
        last_updated: "2026-03-06",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées Marine & Créativité (Entrées)",
        items: [
          { name: "Crispy Sushi Saumon, agrumes & chipotle", price_cents: 1600, is_highlight: true },
          { name: "Crevettes Croustillantes épicées, romaine", price_cents: 1900 },
          { name: "Carpaccio de Daurade Royale au citron", price_cents: 1900 },
          { name: "Beignets d’Encornets, mayo paprika", price_cents: 1700 },
          { name: "Tartare de Thon Ponzu, avocat sésame", price_cents: 2000 },
          { name: "Galette craquante au Tourteau, curry", price_cents: 2500, is_highlight: true },
          { name: "Six Huîtres Utah Beach N°2", price_cents: 2400 },
          { name: "Asperges Vertes caramélisées au miso", price_cents: 2000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Signatures & Partage (Plats)",
        items: [
          { name: "Ravioles de Langoustines, bisque légère", price_cents: 3200, is_highlight: true },
          { name: "Lieu Jaune au miso, petits pois", price_cents: 2800 },
          { name: "Lobster Roll, crevettes & avocat", price_cents: 3200, is_highlight: true },
          { name: "Le Cheeseburger du Chardenoux", price_cents: 2800 },
          { name: "Bavette grillée aux épices Saté", price_cents: 2800 },
          { name: "Épaule d’Agneau confite aux olives", price_cents: 3100 },
          { name: "Bar en croûte de sel (pour 2)", price_cents: 9000 },
          { name: "Côte de Boeuf 500g, Béarnaise (pour 2)", price_cents: 8000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts de Haute Pâtisserie (Desserts)",
        items: [
          { name: "Mille-feuille Vanille, praliné pécan", price_cents: 1200, is_highlight: true },
          { name: "Pain Perdu aux framboises, pistache", price_cents: 1200 },
          { name: "Biscuit coulant au Chocolat Noir", price_cents: 1200 },
          { name: "Baba au Rhum, crème fouettée vanille", price_cents: 1200 },
          { name: "Tarte Tatin artisanale, crème crue", price_cents: 1500 },
          { name: "Profiteroles glacées, sauce chocolat", price_cents: 1400 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Mixologie & Cocktails (Boissons)",
        items: [
          { name: "Cocktail ’Le Chardenoux' (Gin/Hibiscus)", price_cents: 1500, is_highlight: true },
          { name: "Martini Espresso du Chef", price_cents: 1600 },
          { name: "Spicy Margarita (Tequila/Piment)", price_cents: 1500 },
          { name: "Mocktail ’Jardin d’Hiver’", price_cents: 1100 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Flacons & Boissons (Boissons)",
        items: [
          { name: "Verre de Chablis ’Sélection'", price_cents: 1200, is_highlight: true },
          { name: "Verre de Pessac-Léognan", price_cents: 1400 },
          { name: "Eau micro-filtrée (75cl)", price_cents: 500 },
          { name: "Café Espresso Signature", price_cents: 350 },
          { name: "Double Espresso", price_cents: 550 },
          { name: "Thé Mariage Frères", price_cents: 700 }
        ]
      }
    ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chardenoux/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chardenoux/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chardenoux/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chardenoux/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chardenoux/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chardenoux/gallery_4.jpg"
    ]
  },
    instagram_handle: "lechardenoux",
    verified: true,
    google_rating: 4.3,
    description: "Le Chardenoux est le bistrot rétro-chic de Cyril Lignac dans un monument historique classé du 11ème. Plafond Art Nouveau à couper le souffle, cuisine entre terre et mer, et les fameuses ravioles de langoustines qui ont fait la réputation de la maison. L’endroit parfait pour un dîner élégant sans la froideur des palaces.",
    insider_tip: "• Les ravioles de langoustines à la bisque (32€) sont le plat signature — ne les ratez pas.\n• Le décor est classé monument historique : plafond Art Nouveau et boiseries d’époque.\n• Le cheeseburger du Chardenoux (28€) est étonnamment bon dans ce cadre chic.\n• Le bar en croûte de sel pour 2 (45€/pers) est une pièce spectaculaire si vous êtes en couple.\n• Ouvert 7j/7, midi et soir — rare pour ce niveau de qualité.",
    expert_catchline: "Le bistrot Art Nouveau de Cyril Lignac : ravioles de langoustines et monument historique.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Cocktails signatures 15€", "Carte des vins classique", "Sélection accessible"],
        must_eat: "Cuisine de bistrot. Les ravioles de langoustines à la bisque (32€) sont le plat signature. Le lieu jaune au miso (28€) est un best-seller. Le cheeseburger (28€) est un classique régressif. Côté entrées, la galette tourteau curry Madras (25€) est sublime.",
        must_drink: "Les cocktails maison (15€) sont travaillés. La carte des vins est courte mais bien choisie — demandez conseil."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Les ravioles de langoustines à la bisque (32€) sont le plat signature. Le lieu jaune au miso (28€) est un best-seller. Le cheeseburger (28€) est un classique régressif. Côté entrées, la galette tourteau curry Madras (25€) est sublime.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
