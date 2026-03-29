import { SurgicalPlace } from '../../../type-definition';

export const folderol: SurgicalPlace = {
    id: "poi-folderol",
    name: "Folderol",
    slug: "folderol",
    category: "restaurant", // Category 'restaurant' used for the gauge system even if cave/ice-cream
    subcategory: ["cave à manger", "glacier", "vins naturels", "bar à vins"],
    location: {
        address: "10 Rue du Grand Prieuré",
        arrondissement: 11,
        lat: 48.8654, // Approx, will be refined if needed
        lng: 2.3668,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJ70bFoN9t5kcROrR-uLoEoOY"
    },
    moods: {
        chill: 90,
        festif: 30,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Mer-Dim: 16:00–23:00 (Fermé Lun-Mar)",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.folderol.fr/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 15, // MANUAL: Basé sur 2-3 boules + 1 verre de vin
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Folderol 2025 Standard (Glaces Artisanales & Vins Natures)
            {
                category_type: "other",
                display_label: "Glaces & Sorbets (Parfums Ephémères)",
                items: [
                    { name: "Boule Simple (To Go)", price_cents: 450, description: "L'unité." },
                    { name: "Boule Simple (Sur Place)", price_cents: 650, description: "Inclut le service en salle." },
                    { name: "Deux Boules (To Go)", price_cents: 800 },
                    { name: "Deux Boules (Sur Place)", price_cents: 1000 },
                    { name: "Demi-Litre à emporter", price_cents: 1600 },
                    { name: "Glace Maison Nature (Unité)", price_cents: 450 },
                    { name: "Topping Signature (Praliné, Sauce Chocolat)", price_cents: 250 }
                ]
            },
            {
                category_type: "other",
                display_label: "Cakes Glacés (Sur Commande)",
                items: [
                    { name: "Petit Gâteau Glacé (2-4 pers)", price_cents: 3800 },
                    { name: "Moyen Gâteau Glacé (5-7 pers)", price_cents: 5600 },
                    { name: "Grand Gâteau Glacé (8-10 pers)", price_cents: 7500 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins & Caves",
                items: [
                    { name: "Sélection de Vins Natures au verre", price_cents: 900, description: "Vins de vignerons indépendants, sélection tournante." },
                    { name: "Bouteille de vin au comptoir (à partir de)", price_cents: 2200 },
                    { name: "Droit de bouchon (To stay)", price_cents: 1000 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXMYg1U_cP2z4EsKdy7lcvXccEGXQqirtGN7wgXwNZoAs7ze8vqG15Db34JOy15zBbugcJ_QMtBA4GScv5b03Y4j0Wj8SOQD8xa0GL6NNx3C7ENOosmMRIIxjwEqeoiBckCzDDGUEIiKLx-KL3XPmYyA4amNifztUUNzOUK2DbxIHyrzgjxKu09kXhSWnWegebGYz9A_DgfUx6Rum2xAwWx3XbgkaJnbDfh-ooRkM4pyKa6xzFkwSh_lGTZNloxE6xDCb0WTWWORV3ap9-T21N2QZ7a_v5umfamE9HP6Knohm2PFHPMA2J9En5gJff-S8RDrtevBKrUSUN1QpSXBqKX50A1FSgK6ewIIv3te1XIHXFFIaWMjMeZy5JdKE9qGrEwoPD7wdYmTeVMRqzows0msTKff8WdBR_0VivEo1RimNecJGGFpVtKedHZCONI_hIj33J4zGZhswL1L8qPnVUZEMcXyxrS8NFCSoSLsoqYZ27Eth9sfy1FOeru7vvTX9FoV6jQcbE9srQwDYkygeTON_FNBuwZ6PKEA_IanS5jYi_qqYOqahSRqgFwgLqJqEHpRg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.7,
    description: "Folderol est le fruit de l'union improbable mais géniale entre un glacier haut de gamme et un bar à vins naturels. Dans ce lieu épuré du 11ème, on vient autant pour une boule de glace aux parfums audacieux (huile d'olive, sésame grillé, sorbet sangria) que pour une bouteille de vin vivant dénichée par des passionnés. Un spot lifestyle incontournable où la gourmandise rencontre l'exigence du sourcing.",
    insider_tip: "• Les queues peuvent être longues le weekend, venez dès l'ouverture à 16h.\n• Testez absolument les parfums 'savonneux' ou herbacés (Lavande, Basilic) qui sont la signature de la maison.\n• Possibilité d'acheter des gâteaux glacés entiers sur commande.",
    expert_catchline: "L'alliance parfaite entre glaces artisanales d'exception et vins naturels pointus.",
    specials: {
        cuisine: ["Glaces artisanales changeantes", "Sorbet Melon-Basilic", "Glace Huile d'Olive", "Vins Natures"],
        drinks: ["Large sélection de vins vivants", "Cidres artisanaux"],
        must_eat: "Le sorbet orange sanguine et jasmin, d'une élégance rare.",
        must_drink: "Un blanc de pays nantais ou un pétillant naturel pour contraster avec le sucre de la glace."
    }
};
