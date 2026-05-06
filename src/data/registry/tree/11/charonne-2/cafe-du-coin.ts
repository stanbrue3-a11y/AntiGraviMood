import { SurgicalPlace } from '../../../type-definition';

export const cafe_du_coin: SurgicalPlace = {
    id: "poi-cafe-du-coin",
    name: "Café du Coin",
    slug: "cafe-du-coin",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "9 Rue Camille Desmoulins",
        arrondissement: 11,
        lat: 48.8590628,
        lng: 2.3810386,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJofW_Hvdt5kcR0i4nA42Cw8Q"
    },
    moods: {
        chill: 70,
        festif: 15,
        culturel: 15
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: 08:00–02:00\nmardi: 08:00–02:00\nmercredi: 08:00–02:00\njeudi: 08:00–02:00\nvendredi: 08:00–02:00\nsamedi: 10:00–02:00\ndimanche: 10:00–02:00",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://cafeducoinparis.net/",
            label: "VOIR LE SITE"
        }
    },
    pricing: {
        avg_budget: 28,
        is_free: false,
        pint_price: 0,
        // VERIFIED: LeFooding + VinsNaturels (2024) — verres dès 4€, moyenne 7€
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 19.00, // MÉDIAN des Plats (Morue 18€, Caille 20€)
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menu à Tiroirs (Déjeuner - Saison 2025)",
                items: [
                    { name: "Formule midi (E+P ou P+D)", price_cents: 2000, description: "Le menu du midi change quotidiennement selon le marché." },
                    { name: "Menu complet midi (E+P+D)", price_cents: 2400, description: "L’option gourmande et équilibrée." },
                    { name: "Plat du jour seul", price_cents: 1600 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Pizzettes Croustillantes (Tapas du Soir)",
                items: [
                    { name: "Pizzette Mortadelle Truffée / Ricotta", price_cents: 800, description: "La star incontestée, fondante et parfumée." },
                    { name: "Pizzette Gorgonzola / Fleur de courgette / Dukkah", price_cents: 800 },
                    { name: "Pizzette Mozzarella Fumée / Zaatar", price_cents: 700 },
                    { name: "Pizzette Cacio e Pepe", price_cents: 600 },
                    { name: "Pizzette Taleggio / Œuf / Guanciale", price_cents: 800 },
                    { name: "Pizzette Tomate / Morteau / Moutarde / Pickles", price_cents: 700 },
                    { name: "Pizzette Anchois / Olives", price_cents: 500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats (Déjeuner)",
                items: [
                    { name: "Morue, caponata de légumes fondants", price_cents: 1800 },
                    { name: "Caille rôtie, purée de PDT", price_cents: 2000 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Petites Assiettes de Partage (Tapas)",
                items: [
                    { name: "Haricots verts, cerises, basilic & sureau", price_cents: 700 },
                    { name: "Tartare de poisson, raifort, fenouil & épeautre frit", price_cents: 1200 },
                    { name: "Éperlans frits, sauce tartare", price_cents: 800 },
                    { name: "Tarama, radis et sumac", price_cents: 800 },
                    { name: "Anchois de Cantabrie, beurre demi-sel", price_cents: 1000 },
                    { name: "Saucisson artisanal", price_cents: 1000 },
                    { name: "Croquettes de poisson maison", price_cents: 900 },
                    { name: "Sardines entières grillées", price_cents: 1200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Maison",
                items: [
                    { name: "Ganache chocolat, glace gwell maison", price_cents: 800 },
                    { name: "Tarte noisette et poire", price_cents: 700 },
                    { name: "Financier du jour à la pistache", price_cents: 500 },
                    { name: "Panacotta à la fleur d’oranger", price_cents: 700 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins Natures ’Prix Ouvrier'",
                items: [
                    { name: "Verre de vin nature (Sélection du moment)", price_cents: 400, description: "Le meilleur deal du 11ème sur le vin nature." },
                    { name: "Loire Chenin (le verre)", price_cents: 700 },
                    { name: "Verre nature sélection supérieure", price_cents: 750 },
                    { name: "Bouteille nature (à partir de)", price_cents: 2700 },
                    { name: "Magnum nature (selon cave)", price_cents: 5500 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-du-coin/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-du-coin/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-du-coin/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-du-coin/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-du-coin/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-du-coin/gallery_4.jpg"
    ]
  },
    instagram_handle: "cafeducoinparis",
    verified: true,
    google_rating: 4.4,
    description: "Le Café du Coin est le QG du quartier Charonne : café le matin, bistrot à midi avec un menu du marché qui change tous les jours, et bar à vins natures + pizzettes croustillantes le soir. L’ambiance est celle du troquet de quartier parfait — comptoir, tables partagées, zéro prétention et des verres de vin nature dès 4€.",
    insider_tip: "• Les pizzettes du soir (5-8€) sont le meilleur apéro du quartier : croustillantes, généreuses, et parfaites avec un verre de nature à 4€.\n• La réservation n’est possible QUE pour le déjeuner (12h15-13h). Le soir, venez directement — il y a toujours de la place au comptoir.\n• Le menu à tiroirs du midi change CHAQUE JOUR et ne coûte que 15-24€ — un rapport qualité-prix imbattable.\n• Les verres de vin nature démarrent à 4€, c'est probablement le meilleur prix du 11ème pour du vin nature de qualité.",
    expert_catchline: "Le troquet nature du quartier Charonne : pizzettes croustillantes et vins à 4€ le verre.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins natures dès 4€/verre", "Sélection bio quotidienne", "Cave à emporter"],
        must_eat: "Cuisine française. Le midi, foncez sur le menu à tiroirs (15-24€) qui change chaque jour. Le soir, c’est pizzettes obligatoires : la Mortadelle Truffée/Ricotta (8€) et la Lardo/Taleggio/Œuf (8€) sont les stars. Ajoutez des sardines grillées (12€) pour un repas complet.",
        must_drink: "Les verres de vin nature commencent à 4€ — c’est le deal du siècle dans le 11ème. Demandez la sélection du jour au comptoir."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le midi, foncez sur le menu à tiroirs (15-24€) qui change chaque jour. Le soir, c’est pizzettes obligatoires : la Mortadelle Truffée/Ricotta (8€) et la Lardo/Taleggio/Œuf (8€) sont les stars. Ajoutez des sardines grillées (12€) pour un repas complet.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
