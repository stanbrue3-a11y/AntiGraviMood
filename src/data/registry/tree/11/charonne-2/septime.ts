import { SurgicalPlace } from '../../../type-definition';

export const septime: SurgicalPlace = {
    id: "poi-septime",
    name: "Septime",
    slug: "septime",
    category: "restaurant",
    subcategory: ['gastronomique'],
    location: {
        address: "80 Rue de Charonne",
        arrondissement: 11,
        lat: 48.8535723,
        lng: 2.3809333,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJE6kCUghy5kcRmWSg3RUHIwM"
    },
    moods: {
        chill: 75,
        festif: 5,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: 12:15–14:00, 19:30–23:00\nmardi: 12:15–14:00, 19:30–23:00\nmercredi: 12:15–14:00, 19:30–23:00\njeudi: 12:15–14:00, 19:30–23:00\nvendredi: 12:15–14:00, 19:30–23:00\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.septime-charonne.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 150,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 4.00,
        dish_price: 85.00, // VERIFIED 2025: Lunch Tasting Menu (Entry Satiety)
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2024-03-08",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Menus Dégustation (Carte Blanche)",
        items: [
          { name: "Menu Dîner (7 étapes)", price_cents: 13500, description: "Progression créative et saisonnière.", is_highlight: true },
          { name: "Menu Déjeuner (5 étapes)", price_cents: 8500, description: "Uniquement au déjeuner.", is_highlight: true },
          { name: "Accord Mets & Vins - Dîner (5 verres)", price_cents: 7500 },
          { name: "Accord Mets & Vins - Déjeuner (3 verres)", price_cents: 6000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Séquences du Moment (Exemples Plats)",
        items: [
          { name: "Asperges blanches, ail des ours & jaune d’œuf", price_cents: 0, is_highlight: true },
          { name: "Lieu jaune de ligne, beurre blanc foin", price_cents: 0, is_highlight: true },
          { name: "Canette rôtie au BBQ, betteraves", price_cents: 0 },
          { name: "Pigeon de chez M. Trouillet, oseille", price_cents: 0 },
          { name: "Trou Normand revisité (Pomme/Céleri)", price_cents: 0 },
          { name: "Mousse au chocolat fumé & sel de Maldon", price_cents: 0 },
          { name: "Tartelette fraises des bois, sureau", price_cents: 0 },
          { name: "Sélection de fromages affinés (Supplément)", price_cents: 1500 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave Nature (Boissons)",
        items: [
          { name: "Verre de Vin Nature du jour", price_cents: 1200, is_highlight: true },
          { name: "Pet’Nat ’Bulles de Vie’ (Verre)", price_cents: 1400 },
          { name: "Champagne Jacques Lassalle (Verre)", price_cents: 2200 },
          { name: "Cidre de Glace (Verre)", price_cents: 1100 },
          { name: "Bouteille Septime ’Cuvée Maison'", price_cents: 4500 },
          { name: "Grand Cru Bourgogne (Bouteille)", price_cents: 12000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Caféterie & Infusions (Boissons)",
        items: [
          { name: "Café de Spécialité (Torréfié maison)", price_cents: 400, is_highlight: true },
          { name: "Infusion de plantes du jardin", price_cents: 400 },
          { name: "Thé Vert Genmaicha", price_cents: 600 },
          { name: "Double Espresso", price_cents: 600 },
          { name: "Décaféiné à l’eau", price_cents: 450 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Eaux & Softs (Boissons)",
        items: [
          { name: "Eau micro-filtrée Septime (75cl)", price_cents: 450 },
          { name: "Jus de fruits frais (Sourcing direct)", price_cents: 800 },
          { name: "Kombucha Maison ’Verveine'", price_cents: 900, is_highlight: true },
          { name: "Limonade Artisanale", price_cents: 700 },
          { name: "Badoit (75cl)", price_cents: 650 }
        ]
      }
    ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/septime/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/septime/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/septime/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/septime/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/septime/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/septime/gallery_4.jpg"
    ]
  },
    instagram_handle: "septimeparis",
    michelin_stars: 1,

    verified: true,
    google_rating: 4.4,
    description: "La pierre angulaire de la gastronomie moderne parisienne. Couronné d’une étoile Michelin et constamment classé parmi les meilleurs restaurants du monde (World’s 50 Best), le chef Bertrand Grébaut y sert une cuisine d’une justesse fulgurante, épurée à l’extrême (souvent trois ingrédients par assiette), axée sur le végétal et le sourcing d’exception.",
    insider_tip: "• Obtenir une table est l’un des plus grands défis de Paris. Les réservations ouvrent exactement 3 semaines à l’avance à 10h00 pétantes : soyez prêt à rafraîchir la page.\n• L’accord mets & vins (axé nature / biodynamie) est indispensable pour comprendre l'œuvre complète (supplément de 75€ le soir).\n• Le restaurant est fermé les week-ends.",
    expert_catchline: "Une légende vivante de la bistronomie étoilée. Le boss final de la rue de Charonne.",
    specials: {
        cuisine: ["Français"],
        drinks: ["L’une des plus belles caves de vins natures au monde"],
        must_eat: "Haute gastronomie. Il n’y a pas de carte mais une suite d’assiettes improvisées chaque matin selon l’arrivage de micro-producteurs d’Île-de-France.",
        must_drink: "L’accord Mets & Vins est magistralement pensé pour ne jamais écraser la finesse de la cuisine de Bertrand Grébaut."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Haute gastronomie. Il n’y a pas de carte mais une suite d’assiettes improvisées chaque matin selon l’arrivage de micro-producteurs d’Île-de-France.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
