import { SurgicalPlace } from "../../../type-definition";

export const bistrot_a_cote: SurgicalPlace = {
    id: "poi-bistrot-a-cote",
    name: "Au Bistrot d’à Côté",
    slug: "au-bistrot-a-cote",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "18 Rue Lalande",
        arrondissement: 14,
        lat: 48.835141,
        lng: 2.330429,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6, "B"],
        google_id: "ChIJndbsU7Zx5kcRT-RfPHpe1Zo"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Lundi-Vendredi: 12:00–14:30, 19:30–22:30 | Samedi-Dimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/AuBistrotdaCoteParis/",
            label: "FACEBOOK"
        }
    },
    pricing: {
        avg_budget: 38,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.50,
        coffee_price: 2.50,
        dish_price: 22.00, // MÉDIAN des plats à l'ardoise
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "L’Ardoise du Jour",
                items: [
                    { name: "Cuisse de canard confite, pommes sautées", price_cents: 2100 },
                    { name: "Filet de bœuf au poivre, frites maison", price_cents: 2600 },
                    { name: "Dos de cabillaud à la plancha", price_cents: 2300 },
                    { name: "Blanquette de veau à l’ancienne", price_cents: 2250 },
                    { name: "Tartare de bœuf préparé, frites", price_cents: 1950 },
                    { name: "Parmentier de Canard aux petits oignons", price_cents: 2150 },
                    { name: "Andouillette AAAAA, sauce moutarde", price_cents: 1950 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées de Saison",
                items: [
                    { name: "Terrine de campagne artisanale", price_cents: 950 },
                    { name: "Oeuf cocotte au foie gras", price_cents: 1100 },
                    { name: "Salade de gésiers confits", price_cents: 1050 },
                    { name: "Velouté de potiron aux éclats de noisettes", price_cents: 950 },
                    { name: "Cassolette d’escargots au beurre aillé", price_cents: 1200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Maison",
                items: [
                    { name: "Tarte Tatin et sa crème fraîche", price_cents: 900 },
                    { name: "Mousse au chocolat noir", price_cents: 800 },
                    { name: "Île flottante à la vanille bourbon", price_cents: 850 },
                    { name: "Baba au Rhum Ambré", price_cents: 1000 },
                    { name: "Crème Brûlée à la Cassonade", price_cents: 850 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-bistrot-a-cote/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-bistrot-a-cote/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-bistrot-a-cote/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-bistrot-a-cote/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-bistrot-a-cote/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/au-bistrot-a-cote/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.6,
    description: "Niché dans la calme rue Lalande, Au Bistrot d’à Côté est le type même du bistrot de charme dont Paris a le secret. Avec sa devanture rouge et son intérieur boisé, c’est une adresse qui cultive l’intimité et la sincérité. Le chef y propose une cuisine de terroir sans artifice, où le goût du produit brut est respecté, le tout servi avec une bienveillance qui fait du bien.",
    insider_tip: "C’est l’endroit parfait pour un dîner romantique ou confidentiel loin de l’agitation de Denfert-Rochereau. La terrine maison est un modèle du genre, généreuse et goûteuse.",
    expert_catchline: "L’intimité du vrai bistrot parisien près de Denfert.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Sélection de Vignerons", "Vins de Pays"],
        must_eat: "Cuisine de bistrot. La cuisse de canard confite et la tarte Tatin.",
        must_drink: "Un verre de vin rouge gouleyant sélectionné par l’équipe."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. La cuisse de canard confite et la tarte Tatin.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
