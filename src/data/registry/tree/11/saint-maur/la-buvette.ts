import { SurgicalPlace } from '../../../type-definition';

export const la_buvette: SurgicalPlace = {
    id: "poi-la-buvette",
    name: "La Buvette",
    slug: "la-buvette",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "67 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8628972,
        lng: 2.3792058,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJjYcMh_Bt5kcROjCZiaJiKDQ"
    },
    moods: {
        chill: 80,
        festif: 15,
        culturel: 5
    },
    practical: {
        opening_hours_raw: "lundi: 17:00–22:00\nmardi: 17:00–22:00\nmercredi: 17:00–22:00\njeudi: 17:00–22:00\nvendredi: 17:00–22:00\nsamedi: 17:00–22:00\ndimanche: 17:00–22:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.labuvette.paris/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 22.00, // Satiety Unit: Standard Tapas Bar (3 plates)
        menu_type: 'standard',
        last_updated: "2026-03-08",
        menu_items: [
            {
                category_type: "sharing",
                display_label: "Grignotis (3€ - 8€)",
                items: [
                    { name: "Olives de Kalamata", price_cents: 450 },
                    { name: "Amandes fumées", price_cents: 400 },
                    { name: "Beurre bordier & pain au levain", price_cents: 600 },
                    { name: "Pickled Eggs (Œufs marinés)", price_cents: 450 },
                    { name: "Sardines à l’huile", price_cents: 800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Assiettes Signature (10€ - 18€)",
                items: [
                    // VERIFIED: Source 2024-2025 menus
                    { name: "Haricots blancs, huile d’olive & zeste d'orange", price_cents: 1200, description: "Le plat culte de Camille." },
                    { name: "Burrata des Pouilles, huile de basilic", price_cents: 1600 },
                    { name: "Terrine de foies de volaille maison", price_cents: 1500 },
                    { name: "Andouille au lard de Vire", price_cents: 1400 },
                    { name: "Jambon blanc à l’os", price_cents: 1300 },
                    { name: "Bresaola & roquette", price_cents: 1600 },
                    { name: "Rillettes d’oie", price_cents: 1400 },
                    { name: "Tomme aux orties", price_cents: 1200 },
                    { name: "Comté 24 mois affiné", price_cents: 1400 },
                    { name: "Chèvre frais & miel", price_cents: 1100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-buvette/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-buvette/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-buvette/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-buvette/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-buvette/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-buvette/gallery_4.jpg"
    ]
  },
    instagram_handle: "labuvetteparis",
    verified: true,
    google_rating: 4.4,
    description: "Une des caves à manger les plus iconiques et puristes de Paris. Camille Fourmont a créé dans ce mouchoir de poche le spot idéal pour écluser des vins natures impeccables accompagnés de grignotis faussement simples mais foudroyants : les fameux haricots blancs zestés à l’orange sont un classique de la gastronomie de comptoir parisienne.",
    insider_tip: "• C’est tout petit et ils ne prennent aucune réservation : venez dès l’ouverture à 17h ou préparez-vous à boire debout le temps qu’une table se libère.\n• Ferme tôt (22h00) tous les soirs, c’est l’endroit parfait pour un apéro puissant ou un before.\n• Ouvert 7 jours sur 7, ce qui est très rare pour cette qualité.",
    expert_catchline: "La cave à manger puriste absolue : vins natures impeccables et haricots blancs à l’orange d'anthologie.",
    specials: {
        cuisine: ["Français"],
        drinks: ["100% Vins natures", "Cidres brut"],
        must_eat: "Cuisine française. Vous êtes obligé de commander leur petite assiette star : les gros haricots blancs à l’huile d’olive et zeste d’orange (12€). L’incarnation du ’less is more’.",
        must_drink: "Allez pointer le doigt directement sur une belle quille nature posée sur l’étagère et laissez Camille ou son équipe vous la raconter."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Vous êtes obligé de commander leur petite assiette star : les gros haricots blancs à l’huile d’olive et zeste d’orange (12€). L’incarnation du ’less is more",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
