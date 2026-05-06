import { SurgicalPlace } from '../../../type-definition';

export const brutos: SurgicalPlace = {
    id: "poi-brutos",
    name: "Brutos",
    slug: "brutos",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "5 Rue du Général Renault",
        arrondissement: 11,
        lat: 48.8615021,
        lng: 2.3781765,
        nearest_metro: "Saint-Ambroise", // Or Voltaire
        metro_lines: [9],
        google_id: "ChIJq6qeDvpt5kcRPPxnMCpRZdQ"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 19:00–23:00\njeudi: 19:00–23:00\nvendredi: 19:00–23:00\nsamedi: 19:00–23:00\ndimanche: 12:30–15:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.brutosparis.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 29, // Median des Plats: Asado 29€, Cochon 28€, Lieu 32€, Poulet 28€
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "starter",
                display_label: "Brésil & Asado (Entrées & Tapas)",
                items: [
                    { name: "Dés de Tapioca frits, sauce goyave piment doux", price_cents: 900 },
                    { name: "Caviar d’aubergine fumée en toast, grenade, noix du Brésil", price_cents: 700 },
                    { name: "Asperges vertes à la braise, sauce Gribiche", price_cents: 1100 },
                    { name: "Os à moelle braisé, noisettes concassées", price_cents: 1200 },
                    { name: "Morcilla maison et piments guindilla", price_cents: 1000 },
                    { name: "Pasteis au potimarron et épices", price_cents: 1000 },
                    { name: "Croquettes de boeuf fumé, sauce pimentée", price_cents: 1100 },
                    { name: "Betteraves braisées au feu de bois", price_cents: 900 }
                ]
            },
            {
                category_type: "main",
                display_label: "Au feu de bois (Plats)",
                items: [
                    { name: "Asado de tira Black Angus, chimichurri, frites maison", price_cents: 2900, description: "La spécialité de la maison." },
                    { name: "Côte de Cochon de lait de Clavisy, abricots grillés", price_cents: 2800 },
                    { name: "Lieu jaune, beurre blanc aux crustacés", price_cents: 3200 },
                    { name: "Poulet fermier rôti du Dimanche, shallots, frites à l’ail", price_cents: 2800, description: "Uniquement le dimanche midi." },
                    { name: "Ris de veau à la braise, sauce chimichurri", price_cents: 3400 },
                    { name: "Echine de cochon noir de Bigorre", price_cents: 3000 },
                    { name: "Picanha de boeuf Angus (pour 2)", price_cents: 6800, description: "La pièce emblématique du Brésil." }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Banane croustillante, dulce de leche, crème crue, coco fraîche", price_cents: 800 },
                    { name: "Pudim (crème caramel brésilienne)", price_cents: 900 },
                    { name: "Gâteau chocolat du Brésil, clémentines", price_cents: 1100 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cocktails & Vins",
                items: [
                    { name: "Caïpirinha classique (le totem)", price_cents: 1200 },
                    { name: "Negroni au mezcal signature", price_cents: 1200 },
                    { name: "Verre de vin nature (rouge Ardèche)", price_cents: 650 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brutos/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brutos/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brutos/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brutos/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brutos/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brutos/gallery_4.jpg"
    ]
  },
    instagram_handle: "brutosparis",
    verified: true,
    google_rating: 4.3,
    description: "Le temple parisien de la viande cuite à la flamme et de l’Asado argentin/brésilien. Chez Brutos, le feu de bois est le maître absolu. On y déguste des viandes d’exception (Black Angus, cochon de Clavisy) caramélisées à l’extérieur et fondantes à l'intérieur, sourcées chez les meilleurs producteurs, le tout arrosé de vins natures pointus et de caïpirinhas redoutables.",
    insider_tip: "• Les frites qui accompagnent les viandes sont cuites dans la graisse de bœuf (façon belge), un délice absolu.\n• Ne manquez surtout pas les ’Dès de Tapioca’ en entrée, la texture est addictive.\n• Le dimanche, l’ambiance change : le restaurant est ouvert uniquement le midi pour un poulet rôti dominical monumental.\n• Couvrez-vous d’un pull qui ne craint rien, l’odeur de fumée et de viande grillée vous imprégnera.",
    expert_catchline: "L’Asado le plus hype de l’Est parisien. Viandes d’exception au feu de bois et jus de viande affolants.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Caïpirinhas parfaites", "Quilles natures racées"],
        must_eat: "Cuisine française. L’Asado de tira de Black Angus : la découpe transversale des côtes selon la tradition sud-américaine assure un gras hyper croustillant.",
        must_drink: "Débutez impérativement par leur Caïpirinha, peu sucrée et parfaitement équilibrée, avant de passer au rouge nature sur la viande."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. L’Asado de tira de Black Angus : la découpe transversale des côtes selon la tradition sud-américaine assure un gras hyper croustillant.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
