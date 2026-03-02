import { SurgicalPlace } from '../../../../type-definition';

export const bibimbap_paris: SurgicalPlace = {
    id: "poi-bibimbap-paris",
    name: "BibimBAP Paris",
    slug: "bibimbap-paris",
    category: "restaurant",
    subcategory: ["coreen", "bibimbap", "barbecue", "fried-chicken", "street-food"],
    verified: true,
    google_rating: 4.4,
    instagram_handle: "bibimbap_paris",
    location: {
        address: "32 Bd de l'Hôpital",
        arrondissement: 5,
        lat: 48.8408282,
        lng: 2.362043,
        nearest_metro: "Saint-Marcel",
        metro_lines: ["5"],
        google_id: "ChIJCxRTnfZx5kcRmfbrPcYFBEM"
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: true,
        opening_hours_raw: "Lundi au Dimanche: 12:00–14:30, 18:30–22:30",
        main_action: {
            type: "site",
            url: "https://bibimbap-paris5.eatbu.com/",
            label: "SITE WEB"
        },
        cuisine_type: "Coréenne Moderne",
        terrace: false
    },
    pricing: {
        avg_budget: 18,
        is_free: false,
        dish_price: 20,
        smart_tip: "Ne ratez pas leur Bibimbap 'Délicieux Poulet' (19.80€) ou leurs tapas coréennes (Anjus) à partager. Le poulet popcorn coréen est redoutable.",
        menu_items: [
            {
                category: "Les Bibimbaps Signatures",
                items: [
                    { name: "Bibimbap Bulgogi Bœuf", price: "20.80€", description: "Le grand classique au bœuf mariné" },
                    { name: "Bibimbap Délicieux Poulet", price: "19.80€", description: "Poulet croustillant et légumes frais" },
                    { name: "Bibimbap Vitalité Porc Jeyuk", price: "19.80€", description: "Porc épicé savoureux" },
                    { name: "Bibimbap Saumon", price: "20.80€" },
                    { name: "Bibimbap Encornets", price: "19.80€" },
                    { name: "Bibimbap Dubu Tofu (Végé)", price: "17€" },
                    { name: "Bibimbap Dalgyal Œuf", price: "17€" }
                ]
            },
            {
                category: "Anjus & Street Food (Tapas)",
                items: [
                    { name: "Yangnyum Dak Poulet (Popcorn Chicken)", price: "14€", description: "Poulet frit caramélisé" },
                    { name: "Mandu Grillés (6 pièces)", price: "11€", description: "Raviolis grillés maison" },
                    { name: "Kimchi Jeon (Galette Kimchi)", price: "14€" },
                    { name: "Galette Pomme de Terre Coréenne", price: "6.80€" },
                    { name: "Tempura Crevettes", price: "10.50€" },
                    { name: "Kimchi Maison", price: "6€" }
                ]
            },
            {
                category: "Barbecue Coréen",
                items: [
                    { name: "Barbecue Bœuf Mariné (Bulgogi)", price: "19.80€" },
                    { name: "Barbecue Poitrine de Porc", price: "19.80€" },
                    { name: "Entrecôte Barbecue (200g)", price: "22.80€" }
                ]
            },
            {
                category: "Soupes & Ragoûts",
                items: [
                    { name: "Sundubu (Soupe Tofu Soyeux)", price: "20€" },
                    { name: "Tukbulgogi (Soupe Bœuf & Vermicelles)", price: "20€" },
                    { name: "Ragoût de Kimchi", price: "16€" },
                    { name: "Ragoût de Pâte de Soja", price: "16.20€" }
                ]
            },
            {
                category: "Menus Forfaits",
                items: [
                    { name: "Menu Entrée + Plat", price: "19.50€" },
                    { name: "Menu Plat + Dessert", price: "19.50€" },
                    { name: "Menu Complet (E+P+D)", price: "23.50€" }
                ]
            },
            {
                category: "Boissons & Traditions",
                items: [
                    { name: "Bière Coréenne Cass (33cl)", price: "5.50€" },
                    { name: "Soju Original (36cl)", price: "13€" },
                    { name: "Thé au Ginseng", price: "4.50€" },
                    { name: "Jus d'Aloe Vera", price: "4€" }
                ]
            }
        ]
    },
    moods: { chill: 70, festif: 50, culturel: 60 },
    description: "BibimBAP Paris est une escale coréenne incontournable le long du Jardin des Plantes. Spécialisé dans le plat national dont il tire son nom, le restaurant décline le mélange riz-légumes-viande avec brio. L'ambiance y est moderne et épurée, idéale pour découvrir les saveurs de Séoul, du poulet popcorn ultra-croustillant aux barbecues savoureux.",
    expert_catchline: "La maîtrise absolue du Bibimbap et du poulet frit coréen sur le Boulevard de l'Hôpital.",
    insider_tip: "Leur poulet frit (Yangnyum Dak) est l'un des plus addictifs du quartier, parfait à partager en entrée. Les bibimbaps sont très équilibrés, le 'Poulet Délicieux' est leur best-seller incontesté.",
    specials: {
        cuisine: ["Coréenne", "Bibimbap", "BBQ", "Fried Chicken"],
        drinks: ["Soju", "Bière Cass", "Thé au Ginseng"],
        must_eat: "Le Bibimbap Bulgogi Bœuf ou le Popcorn Chicken caramélisé.",
        expert_catchline: "Cuisine coréenne authentique et créative, spécialités Bibimbap et Tapas (Anjus)."
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUxYY4-n41lwAtzPIqNrv-IibLTmcIchRLGgP03tgniRHHpFIzaIS_s1RzlZZH5dhJ_s-j6Ty0niRNzfiGyQC7cZDcquulfpBheJJzvHF7hMSSim2dzEpHyeipYOJbfj4vVdDPZnkB-AXkx8W_dYCopBnPJZoz4YQgCJ3NmsQQ445kW4LDrLZZB-tOiyKOOoKMJx-Y1JCOGOg0nnkFuQJ4EsDm8fiycI47lQ25UVK0dj1HLrN4wVEjo0d0_qqT5a6VgGNVPzgMFo0AXipPQh_lYrOCE1Re4VR-Ya2eWTyFErw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVIh8XysuaRm1q1nuQOih69fqtv0Nuvin05F5eiy1EkKLnDlLFY_qYzDN3u6oyhC4m8xCaI6qYzGlFYHjO_kPmgfNORaYR_dW-h1UhjCpI9LP43yBqRoIQWU5j01loqMj4wgk-WIxbC8P0mLUqLiseQ9vHdFP-KcDOV4OTJ2OAEZxG6QbErEwaTmG3PHFOtgjO0vejXL9vrcuPVbe9d2GyILGaekD_V_KBNviEYQqTtlPcgXyTcu0B4fUMl6mHeuS9w005Vj-zuynk_9cmUS2Ng9qK-UWa5fQuRcfvr_Ph2Tg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVDdLGK-efLAXy9aXJlxeQOOG1XBysgOF0BIBpZA4_LPE_N_ulP4MahFfD4nPAmSOGKBxzPPJhOdLneB207kuGO8JKORdsa2MEw2o4a94YVOJhTHAX236bM0TJi65sAeUg6lIj00bKEGloGmgT86Dm4ITN0lM9yfdg1yAYngMeaCgNYRuHiUmYcM6es4EHXFCvup5Csk2aZSCAY24JOUR53LWN-lkbQg0u_rtN1ZVDPkGFsMHdi9GW7r4F2yXFv8_rYblyhsrZwbI5aGwU9elW_4Q4nW5SSN1TF1Ny28Sny7WNkhlOQ1trInVBStM92aiIuaQR4_olL1Tw128MJA9VetnOr77eW3fIxwD-oUt1VCKcyFoH58Z06b9Ok8hjXdZdYhmtByzRM2Z80JPG5fd0lLJROleS_oWun96dY_JRT3MDVqfmB7R0VFuvOMA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    source: "research_ai"
};
