import { SurgicalPlace } from '../../../type-definition';

export const bouche: SurgicalPlace = {
    id: "poi-bouche",
    name: "Bouche",
    slug: "bouche",
    category: "restaurant",
    subcategory: ['tapas'],
    location: {
        address: "85 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8682045,
        lng: 2.3783885,
        nearest_metro: "Couronnes",
        metro_lines: [2],
        google_id: "ChIJOVTwFt5t5kcRvIpKiXQKGi8"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 19:00–01:30\nmardi: 19:00–01:30\nmercredi: 19:00–01:30\njeudi: 19:00–01:30\nvendredi: 19:00–01:30\nsamedi: 19:00–01:30\ndimanche: 12:00–15:00, 19:00–01:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.boucheparis.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 15, // MANUAL: Concept d'assiettes à partager. Prix allant de 10€ à 20€. Median ~14-15€. (Ex: fromage 12€, lomo 13€, praires 14€, chou 18€).
        last_updated: "2026-03-06",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "sharing",
                display_label: "Tapassiettes - Les Incontournables",
                items: [
                    { name: "Chou frisé au BBQ, dattes, tahini, cacahuètes", price_cents: 1800, description: "Le plat signature, cuit longuement." },
                    { name: "Fromage suisse au nid d’abeille", price_cents: 1200 },
                    { name: "Çiğ köfte (version végétalienne), sucrine et herbes", price_cents: 1300 },
                    { name: "Mousse de foie de volaille, gelée de poire au Timut", price_cents: 1300 },
                    { name: "Chiacciata (pain italien maison)", price_cents: 900 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Tapassiettes - Mer & Terre",
                items: [
                    { name: "Praires au beurre d’ail noir & katsuobushi", price_cents: 1400 },
                    { name: "Lomo ibérique (planche)", price_cents: 1300 },
                    { name: "Moules en escabèche maison", price_cents: 1000 },
                    { name: "Sopressata artisanale", price_cents: 800 },
                    { name: "Gnolottis poireaux & scarmorza, bouillon champignon", price_cents: 1400 },
                    { name: "Pommes de terre tapées, paprika fumé, sauce ranch", price_cents: 700 }
                ]
            },
            {
                category_type: "other",
                display_label: "Gourmandises",
                items: [
                    { name: "Tarte à la clémentine & mousse au chocolat", price_cents: 1000 },
                    { name: "Cheesecake basque, coulis de myrtille sauvage", price_cents: 1100 },
                    { name: "Ice cream sandwich (sésame & cacao)", price_cents: 1000 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cave & Vins Natures",
                items: [
                    { name: "Verre de vin ’sur le fruit' (blanc/rouge)", price_cents: 900 },
                    { name: "Verre de Pet Nat (effervescent naturel)", price_cents: 1100 },
                    { name: "Bouteille nature (sélection du moment)", price_cents: 4000, description: "À partir de 40€" }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouche/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouche/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouche/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouche/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouche/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouche/gallery_4.jpg"
    ]
  },
    instagram_handle: "bouche.paris",
    verified: true,
    google_rating: 4.4,
    description: "Une cave à manger électrique et un néobistrot ultra-tendance brut de décoffrage sur Jean-Pierre Timbaud. Le concept de Bouche repose sur le partage : de petites ’tapassiettes’ (10 à 20€) pointues et vinaigrées signées par le chef Florent Peineau, envoyées à la chaîne. La cave à vins natures est pointue, l’ambiance vibre fort tous les soirs.",
    insider_tip: "• C’est un pur lieu de soir : ouvert 7j/7 le soir (jusqu’à 1h30), mais seulement le dimanche midi pour le déj.\n• Il faut viser 2,5 à 3 assiettes par personne pour être calé (comptez 40-45€ hors boissons).\n• Le chou frisé grillé au BBQ (18€) est LE plat totem de la maison.\n• Le niveau sonore monte très vite en deuxième partie de soirée, c’est bruyant, vivant, on y va pour ça.",
    expert_catchline: "La cave à manger la plus vivante de Jean-Pierre Timbaud, assiettes de partage ultra-incisives et gros son.",
    specials: {
        cuisine: ["Petites assiettes"],
        drinks: ["Vins natures", "Pétillants naturels (Pet Nats)"],
        must_eat: "Cuisine de partage. L’approche est très végétale et acide. Le chou frisé est obligatoire. Accompagnez-le de fromages affinés (suisse au nid d’abeille) et des praires.",
        must_drink: "Laissez-vous faire par la sommellerie : dites ce que vous aimez (tendu, funk, oxydatif) et ils déboucheront la quille parfaite."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de partage. L’approche est très végétale et acide. Le chou frisé est obligatoire. Accompagnez-le de fromages affinés (suisse au nid d",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
