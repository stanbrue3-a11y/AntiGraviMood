import { SurgicalPlace } from '../../../type-definition';

export const dilia: SurgicalPlace = {
    id: "poi-dilia",
    name: "Dilia",
    slug: "dilia",
    category: "restaurant",
    subcategory: ["bistronomie", "italien", "restaurant"],
    location: {
        // Technically just inside the 20th but hyper-proximate to 11th vibe
        address: "1 Rue d'Eupatoria",
        arrondissement: 20,
        lat: 48.8686439,
        lng: 2.3862279,
        nearest_metro: "Ménilmontant",
        metro_lines: [2],
        google_id: "ChIJ2xMOOOxt5kcRmDNZv-pydrg"
    },
    moods: {
        chill: 80,
        festif: 0,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: 19:30–22:30\nmardi: Fermé\nmercredi: Fermé\njeudi: 12:30–14:00, 19:30–22:30\nvendredi: 12:30–14:00, 19:30–22:30\nsamedi: 12:30–14:00, 19:30–22:30\ndimanche: 12:30–14:00, 19:30–22:30",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: false,
        main_action: {
            type: "site",
            url: "http://www.dilia.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 70,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 65, // MANUAL: Menu dégustation du soir obligatoire (65€ minimum).
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "other",
                display_label: "Le Déjeuner (Jeudi - Dimanche)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Formule Déjeuner (Entrée-Plat-Dessert)", price_cents: 2800, description: "Exceptionnel rapport qualité/prix de quartier." },
                    { name: "La Carte Blanche Midi (Menu Dégustation 5 Passages)", price_cents: 5500 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Les Menus Dégustation (Soir)",
                items: [
                    { name: "Carte Blanche (Menu 6 Passages)", price_cents: 6500, description: "L'expérience Dilia en 6 temps. (Accord Vins +42€)." },
                    { name: "Carte Blanche (Menu 8 Passages)", price_cents: 8600 },
                    { name: "Carte Blanche (Menu 9 Passages)", price_cents: 9800, description: "Le grand jeu italo-parisien. (Accord Vins +63€)." }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Exemple de Reconstitution Parfaite (Menu 6 Passages)",
                items: [
                    { name: "1er temps : Bulot, asperge blanche et herbe fraîche", price_cents: 0, description: "Inclus dans le menu." },
                    { name: "2ème temps : Sardine marinée, petit pois, lard colonnata", price_cents: 0, description: "Inclus dans le menu." },
                    { name: "3ème temps : Tortellini d'artichauts, brodo limpide", price_cents: 0, description: "Inclus dans le menu." },
                    { name: "4ème temps : Lieu jaune, fève, oignon nouveau, beurre blanc safran", price_cents: 0, description: "Inclus dans le menu." },
                    { name: "5ème temps : Pigeon de nid rôti, crème d'algue, betterave, cime di rapa", price_cents: 0, description: "Inclus dans le menu." },
                    { name: "6ème temps : Dacquoise amande, bergamote, câpre, marjolaine", price_cents: 0, description: "Inclus dans le menu." }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons",
                items: [
                    { name: "Verre de vin (Sélection Nature & Biodynamie)", price_cents: 600 },
                    { name: "Bouteille de vin (À partir de)", price_cents: 2900 },
                    { name: "Coupe de Champagne", price_cents: 1200 },
                    { name: "Bouteille d'eau minérale", price_cents: 600 },
                    { name: "Café d'excellence", price_cents: 300 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVGwlFFUuFtBdW0FSGswM5H5aeVsX_S2Vmp5eKJ6Rj2WRRR6x1alGrlrxoWp_9XrHJel5BKKeImfbJY0phiu_y23ry04yXYXsFeqEC3Oqib2XALBlG7dIItk-fTLarlSy83f_1Q2LGWzDRPCZYAJRFnRlGxGRK6nyIfil7Hau1hRH2n_ZXvnWy5kHO-tkaQw5aLeEwOjAwOYSGwrwF_0uI3nXftJqyZ-KRJ728vW1vmYGeACpjfXXfyq6lM2ktnep2R86splmXXJMBmfVcXa-_M8edr_3E3a7z_EOy1mbirEH_1ATsWJixJDX2CnxIAjj08d4CQ2hzZotlIOcNDMjsDbLuRjpgo2syeg1kv67O9A7xCa11nWjNOVHUaPNSQELxbgm3cPidZjOBDBZJZyuXgSAM99x-dK6q9wdfhqEKf2GhO&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVAG1DKDuOxBg0Sg4Sc3591JH8Mgbop3R9rb3EvwpobNbxfTnyRJPNI8hWWQDuZlwEdscVMsYTtXADxeCY0C47xUfdxz7Uj_OHJzOL3HA4b6dTulFKICrU6oSdlcYng8bxOr6RBm2yvWN7D5Yls0YENEuYgCyWmkUchVYvkL9pPO_5ykrD6btthth9R_vp8mOlLeCzqyXur5s3rAKCO9q-I78pl-U6W3n84ztpqvcLdyjQF82FbQvZISqIpWOCirsOyBlkb_Ix8A1FuSIefW4hYUO0-2lIA64xCUteWM0aVQWHfcL0wORo2YHZj4KcPjB5qLnkwtvzLIJ7NZ07_TYzszA3ySO8Q545MYD7pxeYflHq7uhke98a85CoWlBXnYOYMML3aMkCb1YAixD7QhapHG0pk8pN9U723D0Q8gVE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWiqdVBKKmj41qw-LDpw_l2xhzk7F6Lf7yFZN4hq9V3AmYhWuMecxAWjpR3Y3-O8qk3hRdoTj3C_xqF-f7WDFGiyLRTll5CJyR14BFyoFtC04Ql0pzfgJh0q8mwFeYq5VkE7CtYPnlTzyhOSd5sQyUpapgtBi-zwP9XKJQsVmFn28wKMUcC8MlXGPmvy-GYtyzv_z8fqXvNw6DciJ9f-9GJpVkwVE6I7gv7dTnvWHeQ6qIK-_1AGCPt6qkVuVjH5g4HpWRvqyA-qjDx4ygaGDD9AjazAWwezPBy8x6wk1OpjvsvdN2UXAc70j5W4fVv3thUpK-7Q--uOQwsb2XHXkjuXwY3n4ShFQwGdqvqRFWDOyVeOa7FcXk_wONInt5Rugbm2gZ2ja6YGlxmG7FaXxRy8WZLH1koPtdveynHhObSN5cQTulCHI3JleOEH8DO&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "dilia_paris",
    verified: true,
    google_rating: 4.6,
    description: "Derrière les murs d'un vieux rade de quartier sur les hauteurs de Ménilmontant se cache une des gastronomies franco-italiennes les plus pointues de l'Est parisien. Le soir, tout s'efface au profit d'un majestueux menu dégustation.",
    insider_tip: "• Si le menu dégustation du soir à 65€ est exceptionnel, le déjeuner à 28€ est une aubaine inouïe. \n• En été, la petite place de l'église d'Eupatoria offre une terrasse digne d'un village du sud de l'Italie.\n• Pensez absolument à réserver, l'adresse est farouchement gardée par les locaux.",
    expert_catchline: "Haute couture culinaire italo-française cachée dans l'ancien rade le plus charmant de Ménilmontant.",
    specials: {
        cuisine: ["Pâtes farcies maison", "Pigeon"],
        drinks: ["Barolo et grands crus italiens"],
        must_eat: "Laissez-vous guider par la 'Carte Blanche 6 Passages', avec une tendresse particulière pour les incroyables Tortellinis maison servis dans un bouillon (Brodo) limpide.",
        must_drink: "Rien d'autre que l'accord Mets/Vins (42€) tricoté par le sommelier à dominance nature."
    }
};
