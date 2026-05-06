import { SurgicalPlace } from '../../../type-definition';

export const les_3_bornes: SurgicalPlace = {
    id: "poi-les-3-bornes",
    name: "Les 3 Bornés",
    slug: "les-3-bornes",
    category: "restaurant",
    subcategory: ['bouillon'],
    location: {
        address: "71 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8674934,
        lng: 2.3763685,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJNQvnfXRt5kcR0hNFCUQpGHM"
    },
    moods: {
        chill: 70,
        festif: 10,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: 19:00–22:00\nmardi: 19:00–22:00\nmercredi: 19:00–22:00\njeudi: 19:00–22:00\nvendredi: 19:00–22:00\nsamedi: 12:00–14:30, 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://les3bornes.com/fr",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 24, // MANUAL: Plats à la carte de 20€ à 31€. Médiane sur (20, 21, 22, 23, 25, 27, 28, 31).
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Entrées",
                items: [
                    // VERIFIED: Mises à jour récentes d'hiver (2025/2026)
                    { name: "Carpaccio tiède de tête de veau caramélisée, gribiche", price_cents: 1100 },
                    { name: "Tarama fumé maison, œufs de truite", price_cents: 1200 },
                    { name: "Raviole de langoustines, condiments wasabi", price_cents: 1600 },
                    { name: "Velouté de butternut, œuf parfait", price_cents: 1200 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: Plats 20-31€
                    { name: "Pastilla de volaille tandoori, patate douce", price_cents: 2100 },
                    { name: "Confit de canette des Dombes, jus miel", price_cents: 2300 },
                    { name: "Lotte rôtie & risotto aux épinards", price_cents: 2700 },
                    { name: "Poitrine de cochon, oca du Pérou, patate douce", price_cents: 2500 },
                    { name: "Feuille à feuille de faux-filet, shiitake", price_cents: 3100 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Fromages",
                items: [
                    { name: "Soufflé poire et chocolat", price_cents: 1100 },
                    { name: "Pavlova mangue passion", price_cents: 1100 },
                    { name: "Assiette de fromages, confiture, salade aux noix", price_cents: 1300 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-3-bornes/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-3-bornes/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-3-bornes/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-3-bornes/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-3-bornes/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-3-bornes/gallery_4.jpg"
    ]
  },
    instagram_handle: "les3bornes_paris",
    verified: true,
    google_rating: 4.7,
    description: "La pépite intimiste et rassurante de la bouillonnante rue Jean-Pierre Timbaud. Aux 3 Bornés, le chef Kévin Borel orchestre une bistronomie d’auteur élégante et canaille : tête de veau caramélisée redoutable, canette confite et vrais jus de viande corsés. La carte, ultra-courte, se renouvelle en permanence selon le marché du matin.",
    insider_tip: "• Attention à l’amplitude d’ouverture resserrée : restaurant du soir uniquement en semaine, avec un seul service dej le samedi.\n• Le menu entrée-plat revient autour de 35-40€, ce qui est extrêmement compétitif pour le niveau d’exécution technique du chef.\n• Allez-y les yeux fermés sur leurs sauces et jus : réductions intenses garanties. Ne passez pas à côté des abats quand il y en a.",
    expert_catchline: "Une grande bistronomie parisienne cachée rue Jean-Pierre Timbaud, où les jus et cuissons frôlent l’étoile.",
    specials: {
        cuisine: ["Bouillon"],
        drinks: ["Sélection pointue de vignerons indépendants"],
        must_eat: "Cuisine française traditionnelle. L’entrée signature : le carpaccio de tête de veau, tiède et croustillant, piqué au vif par une sauce gribiche de haute volée.",
        must_drink: "Laissez la salle s’amuser avec des accords inattendus sur un Chenin de Loire ou un Côtes-du-Rhône friand."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française traditionnelle. L’entrée signature : le carpaccio de tête de veau, tiède et croustillant, piqué au vif par une sauce gribiche de haute volée.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
