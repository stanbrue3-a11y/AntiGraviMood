export const maisonRusse = {
    id: "poi-maison-revka-paris-16",
    name: "Maison Revka",
    slug: "maison-revka-paris-16",
    description: "Anciennement Maison Russe, ce lieu spectaculaire signé Paris Society offre une plongée dans une atmosphère slave opulente et envoûtante. Décors majestueux, jardin d'hiver luxuriant et gastronomie de haute volée au rendez-vous.",
    category: "restaurant",
    subcategory: ["Gastronomique", "Chic", "Slave", "Jardin"],
    target_audience: "Épicuriens, clientèle internationale, dîners d'affaires chics",
    location: {
        address: "59 Avenue Raymond Poincaré, 75116 Paris",
        arrondissement: 16,
        lat: 48.8674347, // EXACT GPS
        lng: 2.285733, // EXACT GPS
        nearest_metro: "Victor Hugo",
        metro_lines: [2],
        google_id: "ChIJj5j2zzVv5kcR7B_8Fvb4_Sk"
    },
    moods: {
        chill: 20,
        festif: 30, // Piano bar / Ambiance feutrée
        culturel: 15
    },
    specials: {
        is_rooftop: false,
        is_hidden: false,
        is_institution: true, // Devenu un incontournable très vite
        has_view: false
    },
    verified: true,
    practical: {
        // VERIFIED: Google Maps API
        opening_hours_raw: "Lundi: 12:00–15:00, 19:00–02:00 | Mardi: 12:00–15:00, 19:00–02:00 | Mercredi: 12:00–15:00, 19:00–02:00 | Jeudi: 12:00–15:00, 19:00–02:00 | Vendredi: 12:00–15:00, 19:00–02:00 | Samedi: 12:00–15:00, 19:00–02:00 | Dimanche: 12:00–16:00, 19:00–02:00",
        reservation_policy: "resa_obligatoire",
        terrace: true, // Très beau jardin intérieur
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://maisonrevka.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 120,
        is_free: false,
        pint_price: undefined,
        wine_glass: 18.00,
        coffee_price: 6.00,
        dish_price: 49.00, // MÉDIAN Caviar excluded (Saumon 42, Bœuf 65, Poulet 46) 
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "L'Or Noir (Caviar & Cœurs de Saumon)",
                items: [
                    { name: "Caviar Baeri (50g) & Blinis tièdes", price: "95.00€" },
                    { name: "Coeur de saumon fumé impérial", price: "34.00€" },
                    { name: "Tarama à la truffe", price: "22.00€" },
                    { name: "Crabe royal, avocat, pamplemousse", price: "42.00€" },
                    { name: "Oeuf parfait, crème de caviar", price: "38.00€" }
                ]
            },
            {
                category: "Les Plats Signatures (Terroir Slave revisité)",
                items: [
                    { name: "Coulibiac de saumon, beurre blanc", price: "48.00€" },
                    { name: "Pavlova salée au tourteau", price: "42.00€" },
                    { name: "Bœuf Strogonoff, purée truffée", price: "58.00€" },
                    { name: "Poulet à la Kiev, beurre aux herbes", price: "46.00€" },
                    { name: "Linguine au homard et estragon", price: "65.00€" }
                ]
            },
            {
                category: "Les Douceurs",
                items: [
                    { name: "Pavlova incontournable (Fruits rouges)", price: "22.00€" },
                    { name: "Chouquetterie (Prix par pièce)", price: "4.00€" },
                    { name: "Millefeuille framboise, crème légère", price: "19.00€" }
                ]
            },
            {
                category: "Bar (Vodkas & Cocktails)",
                items: [
                    { name: "Dégustation de 3 Vodkas Beluga", price: "45.00€" },
                    { name: "Cocktail 'Romanov' (Vodka, framboise, champagne)", price: "24.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWBfMMpEaDOELP2Tlt-oaVd6gh3MpHR9TA0RRCQoTdaeYAGpseBx1fVO03Q-Wy-i_XyPANWvp05dH8KFc7ZEtm_Z_i1BUebS_feEmLBSoukzYh0j5oMXImuscO1ejO94pz7zRtcYhSToOXqgf3XXk6uLKztEL5Gvm0MeW3LnDh9GacEWyUVI42btCB3FO2SyyLScRYkAd49URg-sgD67gX70vo7ljPGDbN0mzFQ0B-PRHDUCakHWfzq3UNBXkxi-MbGvh3UsX_2XXWi0EsNmXhDbxsAW_GXxFLlQlmFF9QlyQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXdWK-bkZQrQv10LUDGF7nWppw6yog3kefVQtdp3zGytxY76-A_sf64Q0jj-LqkB0b2XVZhfgmW0Uapj_8k2CKmRjb3wwopfHy0dr-pltKtG4VRqvkLgaIKEf7bY_4TxmkoOpe2fiTgtXUwlnoU6-j4Wp6TApJx4fxvK118fPW3KrkHJ-L5vvu2d11eRvE4oPHWPRp1nln4nSmHn096oDfx6ZkFssj5dbD4JW-WE3-0fCymNvpFyfOp75ecxnHimKeoZxC1P8_ZihZkfj5WdtvVOT-wXjk1o0lTAxgSJfyK4rg1G70N7DaBWOXfaucXicKn-Iygb4eLQw9VRbAlaaI212xzchzB2hORTFXdby_Q8HQHbJVovhdbFQ7lr3dHxeUV3uD9You98YlmkEO1bJ68g6Q4XKS7KRaXbvG6DZnwYX4XpDWco75qRvCjTA6o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUV3oOo-PVNOL8j126FwDUQnENDavAmsa72regHRFIIbvtd9hCEz6YxPO1fqnSAZBVmaqfnZUs0WU_EfYhB2mdkMojmKEGOQOuQMp46ipaQNeOWG8Dp7WtQnk0WXK-u7iSdIKz3or-2U3o0bHkj7jitRmWXpt9TzmjZ7NNWJNKvnfZkq9TnBUeTqZFxwlmQOIwumi08p_4mEmVOslNar4Qd0ZoEmoXljl0ZjgVLrPhfJ4nFzMtFlIvSXxGQs54Jgb9YrkhcKnqF97GPh0SRMaoXlU3R76kpxHcib8E0vab7eS1QenYsGEtJrHoAPdohbh9G_aCTNZczi8UqD462rTZRhYHaERfl-7VxYYEXXklmkJp4wboVb_kXmbEv0-lf53hkTJk3NKBn2vU3HNN6z4bkkjj0naljazTX4Iaauf_Gd8ZbnfFJwzE3bpjrlp6K&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "maisonrevka",
    website: "https://maisonrevka.com/",
    tags: [
        { id: "chic", label: "Très Chic" },
        { id: "gastronomique", label: "Gastronomique" },
        { id: "slave", label: "Slave" },
        { id: "decor", label: "Décor spectaculaire" }
    ],
    reviews: {
        google: { rating: 4.1, count: 856 }
    }
};
