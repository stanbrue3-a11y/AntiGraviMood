import { SurgicalPlace } from '../../../type-definition';

export const korus: SurgicalPlace = {
    id: "poi-korus",
    name: "Korus",
    slug: "korus",
    category: "restaurant",
    subcategory: ["bistronomique", "francais", "restaurant"],
    location: {
        address: "73 Rue Amelot",
        arrondissement: 11,
        lat: 48.857879,
        lng: 2.366843,
        nearest_metro: "Saint-Sébastien - Froissart",
        metro_lines: [8],
        google_id: "ChIJAeeF7H5t5kcREGhR5f1HdtI" // Note: Shared Google ID placeholder
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: Closed\nTuesday: Closed\nWednesday: 7:30–11:00 PM\nThursday: 7:00–11:00 PM\nFriday: 7:00–11:00 PM\nSaturday: 12:00–2:30 PM, 7:00–11:00 PM\nSunday: 12:00–2:30 PM, 7:00–11:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://restaurantkorus.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 10.00,
        coffee_price: 3.50,
        dish_price: 34, // MANUAL: Median des plats "à la carte" ou représentatif par assiette (Lunch 45€ / Dinner 79€)
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "tasting_menu",
                display_label: "Menus Dégustation",
                items: [
                    { name: "Menu TEMPO (Déjeuner)", price_cents: 4500, description: "Menu découverte en 4 temps servi le midi." },
                    { name: "Menu OPUS (Dîner)", price_cents: 7900, description: "Menu dégustation en 6 temps, l'expérience signature." },
                    { name: "Menu CHORUS (Dîner)", price_cents: 9700, description: "Le grand voyage en 8 temps pour l'ensemble de la table." },
                    { name: "Accord Mets & Vins (Tempo)", price_cents: 3000, description: "3 verres en accord avec le menu déjeuner." },
                    { name: "Accord Mets & Vins (Opus/Chorus)", price_cents: 5500, description: "Sélection pointue du sommelier pour le dîner." }
                ]
            },
            {
                category_type: "other",
                display_label: "Exemples de Créations du Chef (Selon arrivage)",
                items: [
                    { name: "Tartare de Haddock", price_cents: 1800, description: "Radis croquants, herbes fraîches, émulsion légère" },
                    { name: "Thon Cru mariné", price_cents: 2100, description: "Condiments de saison, huile de sésame torréfié" },
                    { name: "Crabe effiloché", price_cents: 2200, description: "Gelée de pomme verte, céleri branche" },
                    { name: "Coeur de Canard snacké", price_cents: 2500, description: "Jus réduit corsé, purée soyeuse" },
                    { name: "Raie au beurre noisette", price_cents: 3200, description: "Câpres, citron confit, tombée d'épinards" },
                    { name: "Paleron de Boeuf", price_cents: 3600, description: "Cuisson basse température, sauce cacao, légumes racines" },
                    { name: "Bavette Angus", price_cents: 3400, description: "Échalotes confites, pommes grenailles rôties" }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Fromages",
                items: [
                    { name: "Assiette de fromages affinés", price_cents: 1200, description: "Sélection du fromager, chutney maison" },
                    { name: "Déclinaison autour de la poire", price_cents: 1400, description: "Poire rôtie, glace vanille, tuile croustillante" },
                    { name: "Chocolat grand cru", price_cents: 1500, description: "Crémeux chocolat, praliné noisette, glace au grué" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXuF-Z8SIP2X8hwZE9Dzn4Q5WOpXeDS0SOJfxgvlJC8mly2KHiSumsoHDEPf0qz8eMr7G0ggY_rVHVvQ_7KuLP5geMqwpkQQZltZkmtP6gKlSo5BioUzBJT65v2gBK6At-cBc3eKBiDvROSWnW54uTAKVlvbm6AKyswBuIptp0EK7MN2Qe8ilMJsQa4MJiJRv1udy6roxYjDfv7untPQH_0KPYHBNbnvOcD0eloewuFrszHUwl3zxsQdeEhp_3IWkWEiaW39QfH4RV67-I85b8jmWKLrYb0ArEfxtdHaT0sOA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUFa4PXOmR6iSsqSDsxNkUKoHXiVO5r0uYxqoiYa3Bq877qbLh85U4gsXbktOHUZBZuhgH7OhRqQH6hvABEx8SvCFBEFkCf6EAZE6Ha6OnYZR55eXwI11E_OwIYK-lVjLFi60xyfDtJZLqplca0Dmql7yjn1MJjkf2rXspINLLDRA83G8OvSWPYndY-0vNMxYITWi4OEyFLSreHEKdbm7G4I0DQH5blUeC74bg4j9C6vBKG5DZRMI2zp828Dxwn2W_M1kBKcuNZmtWUXzuvuUoJBYrMsWhJb6HHzTMw382_iBcJLCxUT1RR7_iddJyKV3vQ_P-MO3jorG8jf3qVT7xheUsiNJaqoH6qT4PzRBt3dIxcNveW3xQ6BMnwzeY4rcfbHwc51tjbLxAxiKp-jSPllNhv48btUgymHI5IwpspFqSmHvxb1Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV29wZ249fdOe9E6VuYYqZIvOhJYFPYbNFc0lUMlZdCoCEgqQpsK1Jc1tx2MgNtt-NAcM-gFU1Kz6zR8dfAifpVlHf2Lx2ywjYjIUpl9yGTfZJezUCyXZTcTTu-1djxC8FF36zpFWb7NuvYVwqmUbjnjbncsmApD5bu0bAxb8ThH1_C_kFN-agCoA5Ua02cLphXdhrLze5SmWjXZzaUcGM5o4tacO06AzvRf_FL0Bae3dS7KbRUqmyJ9Dnz_syUUIHb582Q2abl7GuufhXAHq102aA6yColezCm28tiQW696wU6G7b3ge2oNwQltI4kne4l5-1eB1R5ZkKv9-0J9VC_4fcbLSOFcwauEbrPe_BzlAxK9GX2WcNFTjpilOjahkn3zERpeEVWMGMjHa0TOteZYjUYmMwdDrRoIiYduMV5foCWwWhXUAK0KjD3mQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.7,
    description: "Recommandé par le Guide Michelin, Korus est l'incarnation parfaite du néo-bistrot du 11ème arrondissement. Dans une salle intimiste aux murs grattés et au mobilier vintage, on y déguste une cuisine d'auteur vive et moderne, articulée autour de trois menus dégustation (Tempo, Opus, Chorus). Le sourcing des produits est irréprochable et la cave fait la part belle aux vins naturels de vignerons pointus.",
    insider_tip: "• Excellent spot pour un dîner romantique ou entre amateurs de grande gastronomie décontractée.\n• Le menu Opus en 6 temps (79€) est le compromis idéal pour saisir l'univers du chef.\n• Demandez l'accord mets & vins, réputé pour ses découvertes parfois hors des sentiers battus (cidres millésimés, vins macérés).",
    expert_catchline: "Haute volée néo-bistronomique et vins natures dans un décor intimiste et brut.",
    specials: {
        cuisine: ["Menus Dégustation (Tempo, Opus, Chorus)", "Paleron de bœuf sauce cacao", "Tartare de haddock", "Plats très graphiques et sourcés"],
        drinks: ["Forte sélection de vins vivants / natures", "Petits rendements et vignerons rares"],
        must_eat: "L'audacieux paleron de bœuf relevé par une étonnante sauce au cacao, signature de la maison.",
        must_drink: "Laissez le sommelier vous dénicher un vin orange ou un rouge léger de Loire en totale adéquation avec le plat."
    }
};
