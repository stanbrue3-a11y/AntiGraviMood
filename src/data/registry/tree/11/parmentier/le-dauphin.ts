import { SurgicalPlace } from '../../../type-definition';

export const le_dauphin: SurgicalPlace = {
    id: "poi-le-dauphin",
    name: "Le Dauphin",
    slug: "le-dauphin",
    category: "restaurant",
    subcategory: ['tapas'],
    location: {
        address: "131 Avenue Parmentier",
        arrondissement: 11,
        lat: 48.8710,
        lng: 2.3698,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJW0-v__tt5kcRrW0-v__tt5k" // Placeholder
    },
    moods: {
        chill: 50,
        festif: 60,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Mar-Ven: 12:00–14:00, 19:00–23:00; Sam: 19:00–23:00; Fermé Dim-Lun",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/ledauphinparis/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.50,
        coffee_price: 3.50,
        dish_price: 18.00, // MANUAL: Median for individual tapas plates
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Le Dauphin Paris 2024-2025
            {
                category_type: "sharing",
                display_label: "Tapassiettes (Sélection du Chef)",
                items: [
                    { name: "Sashimi de bonite, sauce soja fumée", price_cents: 1800 },
                    { name: "Croquettes de jambon ibérique", price_cents: 1400 },
                    { name: "Tartare de thon & radis", price_cents: 1900 },
                    { name: "Poulpe grillé, purée de pois chiches", price_cents: 2200 },
                    { name: "Carpaccio de bœuf au parmesan", price_cents: 1700 },
                    { name: "Joue de bœuf braisée au vin rouge", price_cents: 2400 },
                    { name: "Asperges vertes grillées, sabayon agrumes", price_cents: 1500 },
                    { name: "Tartine de moelle, herbes fraîches", price_cents: 1200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs",
                items: [
                    { name: "Ganache chocolat & huile d’olive", price_cents: 900 },
                    { name: "Panna cotta aux agrumes", price_cents: 850 },
                    { name: "Glace maison au lait d’amande", price_cents: 700 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-dauphin/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-dauphin/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-dauphin/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-dauphin/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-dauphin/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-dauphin/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Le Dauphin est le petit frère surdoué du Chateaubriand. Dans un décor spectaculaire tout de marbre vêtu, conçu par l’architecte Rem Koolhaas, on y déguste le concept de ’Tapassiettes’. Ici, la haute cuisine se décline en petites portions à partager, avec une sélection de produits d’une qualité folle. C’est à la fois un bar à vin exigeant et une table de design où le chic parisien rencontre l'excellence culinaire.",
    insider_tip: "Même s’il y a des tables, manger au grand bar central en marbre est l’expérience ultime ici. Laissez le sommelier choisir vos vins natures, leur cave est l’une des plus pointues de Paris.",
    expert_catchline: "Le design rencontre la haute gastronomie en format partage.",
    specials: {
        cuisine: ["Tapas d'auteur"],
        drinks: ["Vins naturels rares", "Sélection pointue du Chateaubriand"],
        must_eat: "Cuisine de partage. Les croquettes de jambon ibérique et les sashimis de saison.",
        must_drink: "Un vin nature blanc de Loire ou du Jura."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de partage. Les croquettes de jambon ibérique et les sashimis de saison.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
