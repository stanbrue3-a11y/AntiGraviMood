import { SurgicalPlace } from '../../../type-definition';

export const melt_oberkampf: SurgicalPlace = {
    id: "poi-melt-oberkampf",
    name: "Melt Oberkampf",
    slug: "melt-oberkampf",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "74 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8656108,
        lng: 2.3708026,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJ3yn11Pxt5kcRjMyRkVFktAQ"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:00, 19:00–22:00\nmardi: 12:00–14:00, 19:00–22:00\nmercredi: 12:00–14:00, 19:00–22:00\njeudi: 12:00–14:00, 19:00–22:00\nvendredi: 12:00–14:00, 18:30–22:30\nsamedi: 12:00–15:00, 18:00–22:30\ndimanche: 12:00–15:00, 19:00–22:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.meltslowsmokedbarbecue.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 6.00,
        coffee_price: 0,
        dish_price: 18, // MANUAL: Brisket 200g à 20.90€, Burgers à 16.50€
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "main",
                display_label: "Viandes Fumées (Au Poids)",
                items: [
                    // VERIFIED: Uber Eats + Site officiel (2024-2025)
                    { name: "Brisket (200g)", price_cents: 1890, description: "Poitrine de bœuf Black Angus, fumée 15h, fondante." },
                    { name: "Pulled Pork (200g)", price_cents: 1800, description: "Épaule de cochon effilochée." }
                ]
            },
            {
                category_type: "other",
                display_label: "Sandwichs & Buns",
                items: [
                    { name: "Brisket Sandwich", price_cents: 2090, description: "Brisket fumé 15h, bun artisanal, sauce BBQ, pickles maison." },
                    { name: "Beef Cheek Bun", price_cents: 1890, description: "Joue de bœuf fumée 10h et confite 5h." },
                    { name: "Black Angus Burger", price_cents: 1650, description: "Double steak Black Angus, double cheddar, fancy sauce." },
                    { name: "Pulled Pork Sandwich", price_cents: 1400, description: "Sauce BBQ et coleslaw." },
                    { name: "Fried Chicken Sandwich", price_cents: 1300, description: "Poulet frit croustillant." }
                ]
            },
            {
                category_type: "other",
                display_label: "Sides",
                items: [
                    { name: "Brisket chili cheese smash", price_cents: 1050 },
                    { name: "Smash potatoes", price_cents: 550 },
                    { name: "Sweet potato rôtie", price_cents: 650 },
                    { name: "Cornbread", price_cents: 400 },
                    { name: "Coleslaw maison", price_cents: 450 },
                    { name: "Mac & Cheese", price_cents: 700 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Cookie géant chocolat", price_cents: 500 },
                    { name: "Pecan Pie", price_cents: 700 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons",
                items: [
                    { name: "Pinte de bière artisanale (Pale Ale)", price_cents: 800 },
                    { name: "Soft américain (Dr Pepper, Root Beer)", price_cents: 450 },
                    { name: "Verre de vin (à partir de)", price_cents: 600 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/melt-oberkampf/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/melt-oberkampf/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/melt-oberkampf/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/melt-oberkampf/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/melt-oberkampf/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/melt-oberkampf/gallery_4.jpg"
    ]
  },
    instagram_handle: "melt.paris",
    verified: true,
    google_rating: 4.7,
    description: "Le temple du barbecue à la texane au cœur du quartier Oberkampf. Les viandes s’y fument lentement aux bois de chêne (notamment le célèbre Brisket de Black Angus fumé 15h) avant d’être caramélisées à souhait. Le réconfort absolu pour les carnivores pointus avec d’excellents sides.",
    insider_tip: "• Attention aux sold-outs : tout est fumé sur place en continu, la quantité est finie. Arrivez tôt si vous voulez absolument goûter le Brisket du jour.\n• Le niveau de fumage est très américain, préparez-vous pour des goûts intenses.\n• Mention spéciale au chili cheese smash pour accompagner le pulled pork.",
    expert_catchline: "Du vrai BBQ texan fumé lentement au bois de chêne. Régressif, fondant et ultra-goûteux.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Bières artisanales Brooklyn", "Softs américains traditionnels (Dr Pepper)"],
        must_eat: "Cuisine française. Le Brisket Black Angus : d’une tendreté invraisemblable, la viande cède sous le simple poids de la fourchette.",
        must_drink: "Une Pale Ale amérisante pour trancher dans le gras réconfortant du barbecue."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Brisket Black Angus : d’une tendreté invraisemblable, la viande cède sous le simple poids de la fourchette.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
