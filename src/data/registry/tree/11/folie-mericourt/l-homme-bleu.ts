import { SurgicalPlace } from '../../../type-definition';

export const l_homme_bleu: SurgicalPlace = {
    id: "poi-l-homme-bleu",
    name: "L’Homme Bleu",
    slug: "l-homme-bleu",
    category: "restaurant",
    subcategory: ['marocain'],
    location: {
        address: "55 Bis Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8669735,
        lng: 2.3743172,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJIcUaluRt5kcRnPRcQYyvTQ0"
    },
    moods: {
        chill: 50,
        festif: 10,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "lundi: 10:00–15:00, 18:00–00:00\nmardi: 10:00–15:00, 18:00–00:00\nmercredi: 10:00–15:00, 18:00–00:00\njeudi: 10:00–15:00, 18:00–00:00\nvendredi: 10:00–15:00, 18:00–00:00\nsamedi: 10:00–15:00, 18:00–00:00\ndimanche: 16:00–00:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.restaurantlhommebleu.fr/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.00,
        coffee_price: 0,
        dish_price: 21, // MANUAL: Median de couscous/tajines (17.50, 19.50, 20.00, 21.00, 21.50, 22.00, 24.00)
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "other",
                display_label: "Tajines Maison",
                items: [
                    // VERIFIED: Site officiel (2024-2025)
                    { name: "Tajine S’Ixudra (Végétarien)", price_cents: 1800, description: "Petits légumes de saison avec un œuf poché." },
                    { name: "Tajine S’Uyazid (Poulet, légumes, citron confit)", price_cents: 2100 },
                    { name: "Tajine Mtewem (Boulettes, poulet, pois chiches)", price_cents: 2150 },
                    { name: "Tajine S’Uxarfi (Agneau, légumes, citron confit)", price_cents: 2150 },
                    { name: "Tajine Lham Lahlou (Agneau, pruneaux, amandes)", price_cents: 2200 },
                    { name: "Tajine S’Ihut (Poissons sauvages du moment)", price_cents: 2200 }
                ]
            },
            {
                category_type: "other",
                display_label: "Couscous Maison (Seksu)",
                items: [
                    // VERIFIED: Mises à jour récentes (2024-2025)
                    { name: "Seksu S’ixudra (Couscous Végétarien)", price_cents: 1750 },
                    { name: "Seksu Merguez", price_cents: 1950 },
                    { name: "Seksu S’uyazid (Poulet et merguez)", price_cents: 2000 },
                    { name: "Seksu S’iberdien n’izimer (Côtelettes d’agneau)", price_cents: 2250 },
                    { name: "Seksu Homme Bleu (Couscous Royal : brochette, boulette, côtelette, merguez)", price_cents: 2300 },
                    { name: "Seksu Tfaya (Agneau ou Poulet, raisins, miel)", price_cents: 2400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Pâtisseries & Desserts",
                items: [
                    { name: "Thé à la menthe", price_cents: 350 },
                    { name: "Assortiment de pâtisseries marocaines", price_cents: 900 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-homme-bleu/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-homme-bleu/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-homme-bleu/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-homme-bleu/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-homme-bleu/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-homme-bleu/gallery_4.jpg"
    ]
  },
    instagram_handle: "restaurant.lhommebleu",
    verified: true,
    google_rating: 4.6,
    description: "L’institution de la rue Jean-Pierre Timbaud. L'Homme Bleu réalise parmi les meilleurs couscous et tajines de tout Paris dans un décor pur jus oriental chaleureux. Des bouillons ultra-parfumés, des semoules fines comme du sable, des viandes parfaitement cuites. Le spot idéal pour un dîner réconfortant ou un repas dominical.",
    insider_tip: "• Le Couscous ’Homme Bleu’ (Royal à 23€) est la valeur sûre pour les très grosses faims.\n• Le Tajine Lham Lahlou (agneau, pruneaux, 22€) ravira les fans de sucré-salé.\n• La salle est grande mais se remplit vite l’hiver — réservation quasiment obligatoire le week-end.\n• Très bon rapport qualité/prix/quantité, on repart souvent avec un doggy-bag.",
    expert_catchline: "Couscous et tajines exceptionnels dans une ambiance chaleureuse. Une institution parisienne.",
    specials: {
        cuisine: ["Berbère"],
        drinks: ["Thé à la menthe", "Vins du Maghreb"],
        must_eat: "Cuisine berbère. Le Couscous Royal rassemble tout ce qu’on aime, et les boulettes de viande sont fondantes à souhait.",
        must_drink: "Le rituel du thé à la menthe (3.50€) pour clôturer le repas est non négociable."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine berbère. Le Couscous Royal rassemble tout ce qu’on aime, et les boulettes de viande sont fondantes à souhait.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
