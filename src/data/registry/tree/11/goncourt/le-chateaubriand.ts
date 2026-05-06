import { SurgicalPlace } from '../../../type-definition';

export const le_chateaubriand: SurgicalPlace = {
    id: "poi-le-chateaubriand",
    name: "Le Chateaubriand",
    slug: "le-chateaubriand",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "129 Ave Parmentier",
        arrondissement: 11,
        lat: 48.8693317,
        lng: 2.3713093,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJIfiOtuNt5kcRuMiQz0CoNA4"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 19:00–22:30\njeudi: 19:00–22:30\nvendredi: 19:00–22:30\nsamedi: 12:00–14:00, 19:00–22:30\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.lechateaubriand.net/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 95,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Average price for a glass of natural wine (TheFork / Raisin 2024)
        wine_glass: 12.00,
        coffee_price: 4.00,
        // Estimation dish_price pour la jauge : Menu Déjeuner 65€ / 3 temps ≈ 22€, Menu Dîner 95€ / 5 temps ≈ 19€ → ~22€
        dish_price: 65.00, // VERIFIED 2025: Lunch Tasting Menu (Saturday)
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
    menu_items: [
      {
        category_type: "main",
        display_label: "Plats (Menus Dégustation)",
        items: [
          { name: "Menu Dîner (Tous les soirs)", price_cents: 9500, description: "Le menu culte d’Inaki Aizpitarte, changeant chaque jour.", is_highlight: true },
          { name: "Menu Déjeuner (Samedi uniquement)", price_cents: 6500, is_highlight: true }
        ]
      },
      {
        category_type: "starter",
        display_label: "Inspirations Historiques (Entrées)",
        items: [
          { name: "Ceviche de mulet, lait de tigre & herbes", price_cents: 0 },
          { name: "Asperges, sabayon au beurre noisette", price_cents: 0 },
          { name: "Bouillon de seiche, encre & coriandre", price_cents: 0 },
          { name: "Maquereau mariné, concombre & aneth", price_cents: 0 },
          { name: "Huitres de pleine mer (Sélection du moment)", price_cents: 0 },
          { name: "Saint-Jacques à la flamme, agrumes", price_cents: 0 },
          { name: "Carpaccio de bœuf, parmesan & roquette", price_cents: 0 },
          { name: "Fleurs de courgette farcies, ricotta", price_cents: 0 }
        ]
      },
      {
        category_type: "main",
        display_label: "Pièces de Résistance (Plats)",
        items: [
          { name: "Cabillaud, émulsion de crustacés & algues", price_cents: 0 },
          { name: "Pigeon rôti, condiment framboise & radicchio", price_cents: 0 },
          { name: "Ris de veau aux girolles & cerises", price_cents: 0 },
          { name: "Lotte fumée, émulsion de pomme de terre", price_cents: 0 },
          { name: "Agneau de lait de Castille, jus corsé", price_cents: 0 },
          { name: "Caille rôtie au feu de bois, miel", price_cents: 0 },
          { name: "Soupe de poissons de roche, rouille", price_cents: 0 },
          { name: "Sauté de champignons sauvages & œuf parfait", price_cents: 0 },
          { name: "Pain de campagne artisanal & Beurre de baratte", price_cents: 0 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Pâtisseries (Desserts)",
        items: [
          { name: "Tocino de Cielo (Dessert iconique)", price_cents: 0, is_highlight: true },
          { name: "Glace à l’estragon & fraises fraîches", price_cents: 0 },
          { name: "Sorbet citron-basilic & meringue", price_cents: 0 },
          { name: "Ganache chocolat amer & fleur de sel", price_cents: 0 },
          { name: "Glace au sarrasin grillé & huile de noisette", price_cents: 0 },
          { name: "Tartelette aux noix de Grenoble", price_cents: 0 },
          { name: "Mignardises de la Cave (Financiers)", price_cents: 0 },
          { name: "Fromages affinés de chez Beillevaire", price_cents: 0 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave Nature & Softs (Boissons)",
        items: [
          { name: "Accord Mets & Vins (Supplément)", price_cents: 4000, is_highlight: true },
          { name: "Verre de Vin Nature (Sélection)", price_cents: 1200 },
          { name: "Eau micro-filtrée (75cl)", price_cents: 500 },
          { name: "Café de spécialité torréfié maison", price_cents: 400 },
          { name: "Sélection d’infusions biologiques", price_cents: 400 }
        ]
      }
    ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chateaubriand/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chateaubriand/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chateaubriand/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chateaubriand/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chateaubriand/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-chateaubriand/gallery_4.jpg"
    ]
  },
    instagram_handle: "lechateaubriand_",
    verified: true,
    google_rating: 4.3,
    description: "Le pionnier absolu de la « bistronomie » parisienne. Piloté depuis plus de quinze ans par le fantasque chef basque Iñaki Aizpitarte, le Chateaubriand maintient son statut d’institution mondiale (régulièrement classé dans les 50 Best). Le décor est intemporel (boiseries sombres, miroirs, chaises de bistrot), le service décontracté mais affûté, et l’assiette joue les équilibristes sans jamais de filet de sécurité.",
    insider_tip: "• Uniquement un Menu Dégustation aveugle le soir (pas de carte classique). \n• Réservation absolument indispensable des semaines à l’avance pour le premier service (19h).\n• Le deuxième service (à partir de 21h30) est parfois accessible aux walk-ins spontanés pour patienter avec un verre au bar, bien que ce soit risqué ! \n• Demandez toujours l’accord Mets & Vins pour découvrir l’une des caves nature les plus mythiques de Paris.",
    expert_catchline: "L’institution mondiale de la bistronomie : menu aveugle disruptif et flacons nature légendaires.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins Naturels au verre", "Vins oranges", "Grands crus de Bourgogne "],
        must_eat: "Cuisine française. Une expérience \’Carte Blanche\’ (95€). Préparez-vous à au moins 5 temps autour de la fulgurance des matières premières : viandes d’exception saisies au barbecue, bouillon capiteux et desserts iconiques (comme ce jaune d'oeuf ultra-confit lové dans un caramel).",
        must_drink: "Laissez le sommelier vous guider dans la bible des vins nature. Les accords (40€ de supplément) sont brillants."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Une expérience Carte Blanche (95€). Menu aveugle culte et fulgurances gastronomiques.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
