import { SurgicalPlace } from '../../../type-definition';

export const mokonuts: SurgicalPlace = {
    id: "poi-mokonuts",
    name: "Mokonuts",
    slug: "mokonuts",
    category: "restaurant",
    subcategory: ['fusion'],
    location: {
        address: "5 Rue Saint-Bernard",
        arrondissement: 11,
        lat: 48.8507906,
        lng: 2.3813834,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJlSThMQly5kcR1fXHGctIH88"
    },
    moods: {
        chill: 90,
        festif: 0,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30\nmardi: 12:00–14:30\nmercredi: 12:00–14:30\njeudi: 12:00–14:30\nvendredi: 12:00–14:30\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.mokonuts.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 6.50,
        wine_glass: 13.00,
        coffee_price: 3.50,
        dish_price: 27.50, // MÉDIAN des Plats (24€ - 32€)
        last_updated: "2026-03-07",
    menu_items: [
      {
        category_type: "dessert",
        display_label: "Pâtisseries & Cookies Cultes (Desserts)",
        items: [
          { name: "Cookie Sésame noir & Chocolat", price_cents: 400, description: "Le best-seller iconique de Moko.", is_highlight: true },
          { name: "Cookie Avoine, miso & sésame noir", price_cents: 400 },
          { name: "Cookie Chocolat blanc & olive noire", price_cents: 400 },
          { name: "Cookie Chocolat au lait & Noisettes", price_cents: 400 },
          { name: "Cookie Tahini & Chocolat noir", price_cents: 400 },
          { name: "Cookie Peanut Butter & Sea Salt", price_cents: 400 },
          { name: "Cookie Rye (Seigle) & Coquelicot", price_cents: 400 },
          { name: "Tarte Fraise & Basilic", price_cents: 1100, is_highlight: true },
          { name: "Tarte au Citron Meyer & Meringue", price_cents: 1000 },
          { name: "Ricotta & Blood Orange Cake", price_cents: 900 },
          { name: "Fig Tart with Black Sesame", price_cents: 1000 },
          { name: "Apple Plum Chiffon Cake", price_cents: 850 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Saison (Midi) (Plats)",
        items: [
          { name: "Labneh maison, za’atar & pain pita", price_cents: 1000, is_highlight: true },
          { name: "Thon blanc saisis & aubergine fumée", price_cents: 1600, is_highlight: true },
          { name: "Œuf mollet, chanterelles & haricots", price_cents: 1500 },
          { name: "Orecchiette au homard breton & bisque", price_cents: 3200 },
          { name: "Filet mignon de porc & asperges", price_cents: 2800 },
          { name: "Quasi de veau rôti, borlotti & sauge", price_cents: 3000 },
          { name: "Lieu jaune de ligne, fenouil & olives", price_cents: 2700 },
          { name: "Caille grillée & légumes racines", price_cents: 2600 },
          { name: "Risotto d’épeautre aux herbes", price_cents: 2400 },
          { name: "Mackerel Crudo, green sauce & radish", price_cents: 1400 },
          { name: "Seared Hake, pil-pil sauce & endive", price_cents: 2100 },
          { name: "Fried Egg, asparagus & bitter lettuces", price_cents: 1200 },
          { name: "Coques (Clams), garlic-herb butter", price_cents: 1200 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons Artisanales & Café (Boissons)",
        items: [
          { name: "Limonade maison à la fleur d’oranger", price_cents: 550, is_highlight: true },
          { name: "Verre de Vin Nature (Sélection)", price_cents: 1300, is_highlight: true },
          { name: "Kéfir de fruits maison", price_cents: 600 },
          { name: "Thé Sobacha (Sarrasin grillé)", price_cents: 500 },
          { name: "Café Filtre (Specialty Coffee)", price_cents: 450 },
          { name: "Café Espresso Lomi", price_cents: 250 },
          { name: "Chocolat Chaud (Valrhona)", price_cents: 600 }
        ]
      }
    ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mokonuts/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mokonuts/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mokonuts/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mokonuts/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mokonuts/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mokonuts/gallery_4.jpg"
    ]
  },
    instagram_handle: "mokonutsbakery",
    verified: true,
    google_rating: 4.7,
    description: "Une échoppe hybride mythique tenue par le couple surdoué Moko (pour la pâtisserie japonaise-américaine) et Omar (pour la finesse levantine). Ouvert uniquement la semaine le midi : on y arrache des cookies divins ou on y déjeune des mets ultra-saisonnier.",
    insider_tip: "• Attention : ouverture UNIQUEMENT la semaine et juste le midi. C’est l’un des déjeuners les plus convoités du 11e, réservez des semaines en avance !\n• Les légendaires Cookies de Moko sont cuits tout au long de la journée, réclamez-en un tiède à la sortie du four.\n• Le labneh au Za’atar est l’un des meilleurs que vous trouverez à l’ouest du Bosphore.",
    expert_catchline: "Cuisine levantine de haute précision et, sans doute, les meilleurs cookies de Tout-Paris.",
    specials: {
        cuisine: ["Cuisine Fusion"],
        drinks: ["Limonade Fleur d’oranger"],
        must_eat: "Cuisine fusion. L’obligation absolue d’engloutir en dessert le Cookie Miso / Sésame noir, reconnu internationalement comme l’extase absolue.",
        must_drink: "Une très pointue citronnade maison fouettée à la fleur d’oranger."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine fusion. L’obligation absolue d’engloutir en dessert le Cookie Miso / Sésame noir, reconnu internationalement comme l’extase absolue.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
