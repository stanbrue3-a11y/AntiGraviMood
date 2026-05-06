import { SurgicalPlace } from '../../../type-definition';

export const jip: SurgicalPlace = {
    id: "poi-jip",
    name: "Jip",
    slug: "jip",
    category: "restaurant",
    subcategory: ['français', 'bistronomie'],
    location: {
        address: "112 Rue de la Roquette",
        arrondissement: 11,
        lat: 48.857088,
        lng: 2.378502,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJoZf9DwBt5kcRsbcd1zLP4L4"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:30–14:30, 19:30–22:30 (Fermé Dim-Lun)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://jip.paris/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7, // Estimé Craft/K-Beer
        wine_glass: 0,
        coffee_price: 3.00,
        dish_price: 35, // MANUAL: Menu unique 3 temps
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Jip 2025 Standard (Franco-Korean Tasting)
            {
                category_type: "tasting_menu",
                display_label: "Formule Unique (Weekly Rotation)",
                items: [
                    { name: "Menu Jip (3 temps)", price_cents: 3500, description: "Entrée, Plat, Dessert (Finition Franco-Coréenne)." },
                    { name: "Option Dessert supplémentaire", price_cents: 800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Exemples de Saveurs (Chef Esu Lee)",
                items: [
                    { name: "Bibimbap revisité (Saison)", price_cents: 0, description: "Technique française, ingrédients coréens." },
                    { name: "Bouillon de seiche & Kimchi blanc", price_cents: 0 },
                    { name: "Porc Kurobuta snacké au feu", price_cents: 0 },
                    { name: "Sashimi de poisson blanc, Gochujang & prune", price_cents: 0 },
                    { name: "Mandu (raviolis) Champignon & patate douce", price_cents: 0 },
                    { name: "Noodles style Tteokbokki, crème Parmesan", price_cents: 0 },
                    { name: "Champignons Eryngii, piment Jalapeño & béarnaise", price_cents: 0 },
                    { name: "Ragoût de poulpe & sabayon oignon nouveau", price_cents: 0 },
                    { name: "Pâtes Jjajangmyeon au bœuf & épinards", price_cents: 0 },
                    { name: "Ganache Sésame Noir & Miso", price_cents: 0 },
                    { name: "Sorbet Mandarine & perles de Tapioca", price_cents: 0 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jip/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jip/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jip/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jip/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jip/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jip/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.8,
    description: "Le nouveau terrain de jeu du chef Esu Lee (ex-Septime, ex-Cameleon). Jip est une ode à la fusion délicate, où les racines coréennes du chef dansent avec la rigueur des produits français. Une expérience épurée, minimaliste et techniquement bluffante.",
    insider_tip: "Le menu à 35€ est une affaire incroyable pour ce niveau de technicité. Ne manquez pas les accords avec les thés coréens ou les vins naturels sélectionnés avec soin.",
    expert_catchline: "Bib Gourmand 2026. La poésie d’Esu Lee entre Séoul et Paris.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Selection de vins au verre", "Thés coréens"],
        must_eat: "Cuisine française. Le menu 3 temps signature.",
        must_drink: "Un thé au gingembre maison pour finir."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le menu 3 temps signature.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
