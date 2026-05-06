import { SurgicalPlace } from "../../../type-definition";

export const ordonnance: SurgicalPlace = {
    id: "poi-ordonnance-75014",
    name: "L’Ordonnance",
    slug: "l-ordonnance-paris-14",
    category: "restaurant",
    subcategory: ['bistronomie', 'français'],
    location: {
        address: "51 Rue des Plantes, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8299519,
        lng: 2.3311141,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJZRqAdbpx5kcRnEoHtO5qUnI"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Monday-Friday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Saturday: 7:30 – 10:30 PM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/lordonnanceparis/", // Pas de site web officiel direct parfois pour ces petits bistros
            label: "FACEBOOK OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 25, // MÉDIAN des plats de résistance
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Les Plats",
                items: [
                    { name: "Dos de Cabillaud de Ligne, Risotto au Safran", price_cents: 2600 },
                    { name: "Pseudo-Bourguignon de Joue de Boeuf Confite", price_cents: 2400 },
                    { name: "Poitrine de Veau Croustillante, Purée Maison", price_cents: 2700 },
                    { name: "Suprême de Volaille Jaune aux Champignons", price_cents: 2300 },
                    { name: "Daurade Royale à la Plancha, Légumes du Moment", price_cents: 2500 },
                    { name: "Tagliatelles Fraîches à la Crème de Truffe", price_cents: 2200 },
                    { name: "Suggestion de l’Ardoise (Selon Marché)", price_cents: 2450 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées Créatives",
                items: [
                    { name: "Oeuf Parfait à 64°, Velouté de Saison", price_cents: 1200 },
                    { name: "Ceviche de Maquereau au Citron Vert", price_cents: 1400 },
                    { name: "Tartare de Betterave et Chèvre Frais", price_cents: 1100 },
                    { name: "Escalope de Foie Gras Poêlée", price_cents: 1800 },
                    { name: "Terrine de Campagne de l’Ordonnance", price_cents: 1000 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Le Coin des Douceurs",
                items: [
                    { name: "Moelleux au Chocolat, Sorbet Framboise", price_cents: 950 },
                    { name: "Tarte Tatin Maison, Crème Fraîche", price_cents: 1000 },
                    { name: "Crème Brûlée à la Pistache de Sicile", price_cents: 900 },
                    { name: "Sabayon aux Fruits Frais", price_cents: 1100 },
                    { name: "Assiette de Trois Fromages Affinés", price_cents: 1200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ordonnance-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ordonnance-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ordonnance-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ordonnance-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ordonnance-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ordonnance-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "L’Ordonnance est un joyau bistronomique niché discrètement rue des Plantes. Ici, la cuisine est une affaire de précision et de respect absolue du produit. Le chef propose une carte courte qui change au gré des saisons et des arrivages du marché, garantissant une fraîcheur irréprochable. Le cadre est élégant sans être guindé, avec une atmosphère calme et intimiste qui se prête merveilleusement aux conversations. C’est l’adresse de quartier par excellence pour les amateurs de gastronomie française moderne et raffinée.",
    insider_tip: "Le menu déjeuner est un secret de quartier d’un rapport qualité-prix bluffant. Ne passez pas à côté de l'oeuf parfait, une signature de la maison exécutée avec une maîtrise parfaite.",
    expert_catchline: "La bistronomie d’une précision chirurgicale au cœur du 14ème.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Sélection de Vins de Propriété", "Digestifs Artisanaux"],
        must_eat: "Cuisine française. L’Oeuf Parfait et la Joue de Boeuf confite.",
        must_drink: "Un vin blanc sec de Loire pour accompagner le poisson."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. L’Oeuf Parfait et la Joue de Boeuf confite.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
