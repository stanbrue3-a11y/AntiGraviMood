import { SurgicalPlace } from '../../../type-definition';

export const petit_nuage: SurgicalPlace = {
    id: "poi-petit-nuage",
    name: "Petit Nuage",
    slug: "petit-nuage",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "51 Rue Basfroi",
        arrondissement: 11,
        lat: 48.854109,
        lng: 2.381388,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJI_Q8rWNt5kcRrB0WvXFfQU"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Monday: Closed\nTuesday: 12:00–2:30 PM, 7:00–11:00 PM\nWednesday: 12:00–2:30 PM, 7:00–11:00 PM\nThursday: 12:00–2:30 PM, 7:00–11:00 PM\nFriday: 12:00–2:30 PM, 7:00–11:00 PM\nSaturday: 12:00–2:30 PM, 7:00–11:00 PM\nSunday: 12:00–2:30 PM, 7:00–11:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://petitnuageparis.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 2.50,
        dish_price: 21, // Average of the larger plates/carpaccio
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner (Contenu variable)",
                items: [
                    { name: "Formule E + P (ou P + D)", price_cents: 2400 },
                    { name: "Formule Complète (E + P + D)", price_cents: 2900 },
                    { name: "Entrée seule", price_cents: 900 },
                    { name: "Plat seul", price_cents: 1900 },
                    { name: "Dessert seul", price_cents: 900 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Tapassiettes du Soir (Salé)",
                items: [
                    { name: "Cheese Naan truffé", price_cents: 900, description: "Le best-seller du soir." },
                    { name: "Gyozas de bœuf braisé", price_cents: 1500 },
                    { name: "Gnocchis de patates douces", price_cents: 1500 },
                    { name: "Carpaccio de Dorade (selon arrivage)", price_cents: 2100 },
                    { name: "Ballotine de pintade farcie", price_cents: 1900 },
                    { name: "Faux-filet de bœuf Normand", price_cents: 2400 },
                    { name: "Celerisotto", price_cents: 1500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs Fin de Repas",
                items: [
                    { name: "Fontainebleau aux fruits de saison", price_cents: 1100 },
                    { name: "Tarte Tatin maison", price_cents: 1100 },
                    { name: "Mousse au chocolat noir 72%", price_cents: 1100 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cocktails Signatures",
                items: [
                    { name: "Petit Nuage (Gin Hendrick’s)", price_cents: 1300 },
                    { name: "Mayday (Rhum Sailor Jerry)", price_cents: 1200 },
                    { name: "Jamaican Mule", price_cents: 1100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-nuage/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-nuage/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-nuage/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-nuage/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-nuage/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-nuage/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.9,
    description: "Petit Nuage est un néobistrot vibrant de la rue Basfroi qui mixe avec brio les codes de la gastronomie française et des touches asiatiques audacieuses. Le midi, on y trouve des formules fraîches et accessibles ; le soir, le lieu se transforme en spot à tapassiettes (comme le célèbre cheese naan truffé) dans une ambiance tamisée et conviviale. Une cuisine inventive, lisible et portée par un sourcing de haute volée.",
    insider_tip: "• Les cheese naans (truffés ou butter chicken) sont l’incontournable absolu pour démarrer la soirée.\n• La salle est souvent comble dès le milieu de semaine, réservez en ligne.\n• Belle sélection de cocktails signatures qui change des classiques habituels.\n• Les gyozas de bœuf maison sont d'une finesse rare.",
    expert_catchline: "Néobistrot de quartier aux accents fusion : créativité, cheese naans de luxe et ambiance cool.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Cocktails à base de Gin Hendrick’s", "Sélection de vins nature"],
        must_eat: "Cuisine française. Le Cheese Naan truffé : un mariage terre-mer déroutant mais addictif qui résume l’esprit fusion du lieu.",
        must_drink: "Le cocktail ’Petit Nuage’ (Gin Hendrick’s) pour rester dans le thème aérien du restaurant."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Cheese Naan truffé : un mariage terre-mer déroutant mais addictif qui résume l’esprit fusion du lieu.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
