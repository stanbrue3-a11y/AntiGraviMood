import { SurgicalPlace } from "../../../type-definition";

export const severo: SurgicalPlace = {
    id: "poi-severo-75014",
    name: "Le Severo",
    slug: "le-severo-paris-14",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "8 Rue des Plantes, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8319919,
        lng: 2.3245706,
        nearest_metro: "Mouton-Duvernet",
        metro_lines: ["4"],
        google_id: "ChIJE0DvDbRx5kcROcHfBaPw1CE"
    },
    moods: {
        chill: 60,
        festif: 50,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Tuesday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Wednesday: 7:30 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Saturday: Closed | Sunday: Closed",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.lesevero.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        dish_price: 36, // MÉDIAN des viandes à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "L’Art de la Viande (Maturée sur place)",
                items: [
                    { name: "Faux-Filet de Boeuf (300g)", price_cents: 3800, description: "Maturé 60 jours, servi avec frites maison." },
                    { name: "Pavé de Coeur de Filet", price_cents: 4200 },
                    { name: "Entrecôte Maturée (pour 2, ~800g)", price_cents: 11000 },
                    { name: "Bavette d’Aloyau, échalotes confites", price_cents: 2800 },
                    { name: "Steak Tartare au couteau de William", price_cents: 2600 },
                    { name: "Côte de Boeuf d’Exception (prix au kg)", price_cents: 12000 },
                    { name: "Pièce du Boucher selon arrivage", price_cents: 3200 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées de Caractère",
                items: [
                    { name: "Jambon Cru Noir de Bigorre", price_cents: 1800 },
                    { name: "Pâté de Campagne de William Bernet", price_cents: 1200 },
                    { name: "Os à Moelle Grillé", price_cents: 1450 },
                    { name: "Lard de Colonnata", price_cents: 1200 },
                    { name: "Boudin Noir Artisanal", price_cents: 1600 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Accompagnements & Desserts",
                items: [
                    { name: "Frites Maison (cuites à la graisse de boeuf)", price_cents: 0, description: "Inclus avec la viande." },
                    { name: "Mousse au Chocolat Noir intense", price_cents: 950 },
                    { name: "Pruneaux à l’Armagnac", price_cents: 1100 },
                    { name: "Saint-Marcellin de la Mère Richard", price_cents: 1200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-severo-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-severo-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-severo-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-severo-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-severo-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-severo-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 3.9,
    description: "Le Severo est le temple sacré de la viande maturée à Paris. Tenue par William Bernet, ancien boucher lui-même, cette institution de la rue des Plantes ne plaisante pas avec le produit. Ici, la nappe à carreaux rouges et les murs encombrés de bouteilles de vin de vignerons annoncent la couleur : c’est un bistrot de puristes. Les viandes, de race limousine ou salers, sont maturées avec une précision chirurgicale et cuites à la perfection. Le service est direct, sincère, et s’accorde parfaitement avec des flacons d’exception souvent issus du monde naturel.",
    insider_tip: "Demandez le tartare, il est préparé par William lui-même et est considéré par beaucoup comme le meilleur de Paris. La carte des vins recèle des pépites naturelles introuvables ailleurs, n’hésitez pas à demander conseil pour un accord puissant avec les viandes maturées.",
    expert_catchline: "Le temple de la viande maturée servie sans artifice.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins Naturels d’Exception", "Grands Crus de la Vallée du Rhône"],
        must_eat: "Cuisine française. Le Faux-Filet mâturé et les frites à la graisse de boeuf.",
        must_drink: "Un vin rouge puissant sélectionné par William."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Faux-Filet mâturé et les frites à la graisse de boeuf.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
