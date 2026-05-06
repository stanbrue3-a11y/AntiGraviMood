import { SurgicalPlace } from '../../../type-definition';

export const les_deserteurs: SurgicalPlace = {
    id: "poi-les-deserteurs",
    name: "Les Déserteurs",
    slug: "les-deserteurs",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "46 Rue Trousseau",
        arrondissement: 11,
        lat: 48.85238589999999,
        lng: 2.379208,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJ6x6Zkghy5kcRfCmlxVg5reg"
    },
    moods: {
        chill: 80,
        festif: 0,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:15–14:00, 19:30–22:00\nmercredi: 12:15–14:00, 19:30–22:00\njeudi: 12:15–14:00, 19:30–22:00\nvendredi: 12:15–14:00, 19:30–22:00\nsamedi: 12:15–14:00, 19:30–22:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "tel:+33148069585",
            label: "APPELER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 28.00, // Menu Déjeuner (Entry Satiety)
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Les Menus Uniques (À l’aveugle)",
                items: [
                    { name: "Menu Déjeuner 3 temps (Entrée-Plat-Dessert)", price_cents: 3500 },
                    { name: "Menu Déjeuner 2 temps (Entrée-Plat ou Plat-Dessert)", price_cents: 2800 },
                    { name: "Menu Dégustation 4 temps (Soir)", price_cents: 4500 },
                    { name: "Menu Dégustation 6 temps (Soir)", price_cents: 6000, description: "L’expérience complète du chef Daniel Baratier à l'aveugle." },
                    { name: "Plateau de fromages affinés (Supplément)", price_cents: 1200 },
                    { name: "Accord Mets & Vins (4 verres)", price_cents: 3000 },
                    { name: "Accord Mets & Vins (6 verres)", price_cents: 4500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Inspirations (Saveurs Déserteurs)",
                items: [
                    { name: "Betterave aigre-doux, estragon du Mexique", price_cents: 0 },
                    { name: "Ravioles d’oignons de paille, amandes de Noto", price_cents: 0 },
                    { name: "Thon blanc basque snacké, purée potiron-miso", price_cents: 0 },
                    { name: "Rouget barbet, mousseline de chou-fleur & rouille", price_cents: 0 },
                    { name: "Asperges, anchoïade & pimprenelle", price_cents: 0 },
                    { name: "Pigeonneau de Barbarie, carotte & oseille", price_cents: 0 },
                    { name: "Paris-Brest déstructuré, noisettes & shiso", price_cents: 0 },
                    { name: "Le dessert ’Triple C' (Caramel, Cacahuète, Chocolat)", price_cents: 0 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-deserteurs/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-deserteurs/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-deserteurs/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-deserteurs/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-deserteurs/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-deserteurs/gallery_4.jpg"
    ]
  },
    instagram_handle: "lesdeserteurs_paris",
    verified: true,
    google_rating: 4.6,
    description: "Le duo choc d’anciens de l’institution ’Le Sergent Recruteur’ signe ici une table minimaliste (sans fioriture de décoration) où seule l’assiette prime. Cuisine hyper-inventive, rythmée par l’Asie et la Bretagne, rythmée par un menu unique à l’aveugle.",
    insider_tip: "• C’est un concept exclusif de \"Menu Dégustation à l’aveugle\". Si vous détestez les surprises ou avez trop de restrictions, fuyez.\n• Le menu Déjeuner (35€ pour 3 temps) est un hold-up qualitatif rare dans Paris.\n• Réservation obligatoire par téléphone, le site n’a pas de module de résa direct.",
    expert_catchline: "Haute gastronomie cachée et minimaliste. L’accord mets/vins à l'aveugle est de très haut niveau.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Accord Mets / Vins inattendu"],
        must_eat: "Cuisine française. Laissez-vous glisser dans le menu en 6 temps, c’est la seule façon de comprendre la narration du chef.",
        must_drink: "L’accord mets et vins orchestré au cordeau par le sommelier, on y découvre des petites pépites du Jura et de Bourgogne."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Laissez-vous glisser dans le menu en 6 temps, c’est la seule façon de comprendre la narration du chef.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
