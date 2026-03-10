import { SurgicalPlace } from "../../../type-definition";

export const umami_burger: SurgicalPlace = {
    id: "poi-umami-burger",
    name: "Umami Burger",
    slug: "umami-burger-montparnasse",
    category: "restaurant",
    subcategory: ["burger", "américain", "fusion", "californien", "restaurant"],
    location: {
        address: "19 Rue du Commandant René Mouchotte, 75014 Paris",
        arrondissement: 14,
        lat: 48.8385266,
        lng: 2.3203818,
        nearest_metro: "Gaîté",
        metro_lines: [13],
        google_id: "ChIJxc2qquBx5kcRZpCuzLFtVd4"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–22:30 | Mardi: 12:00–22:30 | Mercredi: 12:00–22:30 | Jeudi: 12:00–22:30 | Vendredi: 12:00–22:30 | Samedi: 12:00–22:30 | Dimanche: 12:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://umamiburgerparis.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 8.50,
        wine_glass: 7.00,
        coffee_price: 2.50,
        dish_price: 16.00, // PRIX du burger signature Umami Burger
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Umami Burgers (Signatures)",
                items: [
                    { name: "Umami Burger (Steak de bœuf, oignons caramélisés, cheddar, ketchup Umami)", price: "16.00€" },
                    { name: "Umami Patty Melt (Smashed bread, provolone, oignons caramélisés)", price: "12.00€" },
                    { name: "Green Bird (Poulet frit bio, avocat, fromage vert, sauce goddess)", price: "16.00€" },
                    { name: "Breaded Cod Burger (Filet de cabillaud pané, tartare citron vert)", price: "14.00€" },
                    { name: "The Truffle Burger (Truffle aioli, truffle oil)", price: "18.00€" },
                    { name: "Sunny Side Burger (Oeuf au plat, bacon, sauce Umami)", price: "17.00€" }
                ]
            },
            {
                category: "Accompagnements (Sides & Starters)",
                items: [
                    { name: "Thin Fries (Frites fines)", price: "3.50€" },
                    { name: "Sweet Potato Fries (Patates douces)", price: "4.50€" },
                    { name: "Onion Rings (Beignets d'oignons)", price: "5.50€" },
                    { name: "Manly Fries (Bacon bits, cheddar fondu, oignons frits)", price: "6.00€" },
                    { name: "Truffle Fries (Frites à la truffe)", price: "7.00€" },
                    { name: "Chicken Wings (x6)", price: "10.00€" }
                ]
            },
            {
                category: "Desserts & Shakes",
                items: [
                    { name: "Vanilla Shake (Milkshake vanille Bourbon)", price: "8.00€" },
                    { name: "Chocolate Shake", price: "8.00€" },
                    { name: "Cookie Dough Sandwich", price: "7.00€" },
                    { name: "New York Cheesecake", price: "9.00€" }
                ]
            },
            {
                category: "Saturday & Sunday Brunch",
                items: [
                    { name: "Saturday Brunch (Buffet à volonté + Burger)", price: "35.00€" },
                    { name: "Sunday Brunch (Le Grand Buffet Umami)", price: "42.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX4oPMTdZBvIprONSVbw6fuyxKDgRMNv_7luc5hS6PEjSvglAqntzcCW95vquO7G_x4rUzxl4kmF8DpBdrMJUAGIfvvQWvUsW387ceSQXMeqysuggAdUTAm_MqN3bbVdhO_eEdlsCJKsPKiMKEZmodtAShT4zlBT3yJewbpz1A8mmQvy5uNcsofwCDJuFWj6kYLt5CaTDknS32EUEYBtTiXRGhthv15eeaflMYtjq0rcKT0ox2P6z8y6g24odx2DuP7-YmJGDvuWD6QoypF3Vvg-3fLVk0Sfe-TV_u1JAUtVg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVpnkPVXu_1rphx90MtQhKFM7LjUhgjGCn6ikSQ95KmKcSetZiR6ULn-FOuMfrKv4-UL_JWM2_sikNs96IWc56QZ2VkINX0zc6B7gkPnnNaMAZt4jwNqBQJkDVM201oIIYDS4CVbcLjWrKBcEqiO8XndjKiVjtyvQw4fGPS4b0R3pXrogc1xkhvyaRlHaMC8rfetMIHcJhieAWbuAKtcbrvyPWou2cPiewXFmdQDOphUzXFwngi9rIzlNUA35x7xmxlE64YqpcHxcNn5hzX1FYiuJ61deoxhJTLWDNs4aYC6w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWrYPdRtbcRivNqjJaAvVQtiLGL341MXj7kUcUdphc7m0w_hlljbSprJWsyFYEULvyiNbL3nY6rV_Rdc9KMy1p8SbCw4YOtUXQAYhc0X7rP-wPweRTrK3M7-oa9z0myygVrpu7eaaxXGdSUikXzd7AbzQXQfPaihvqovLkTL2qjhgZPmNwmQApElw3IbTh-mcQiUZXXzjug9YWAurCDYjk18JScyKB_-mv4Zs9-TXohSfw8F5Lpxe6qieeDfHAPiU9CLOtJ6KsBhYMIwsOBCudOjNxL6c5KpCfvN6vKohzmbStTc6ZfrMHNvk4C8y5S6M4c7OA7XuNDi1W7nGsL9qJO_s7-YNIbxRb_8cZMiHYzFuDy54mQcs8QoGg_hkPplxZHdvvsHoYGTYy1GT0zBqA8dXTAOFbZSlsLHvEhonwx1Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Première implantation européenne de la célèbre chaîne californienne, Umami Burger Paris apporte la science de la 'cinquième saveur' au cœur de Montparnasse. Installé dans le cadre grandiose de l'Hôtel Pullman, ce spot propose des burgers sophistiqués où chaque ingrédient est choisi pour booster l'Umami. Le décor est moderne, l'ambiance californienne et les recettes repoussent les limites du burger classique.",
    insider_tip: "Si vous avez une faim de loup le week-end, les brunchs du samedi (35€) et dimanche (42€) sont imbattables avec leurs buffets et burgers à volonté. N'oubliez pas de tester les 'Manly Fries' pour une expérience calorique totale.",
    expert_catchline: "La science de l'Umami venue de Californie : des burgers fusion sophistiqués dans un cadre monumental.",
    specials: {
        cuisine: ["Burger Gourmet", "Fusion Nippo-Américaine", "Umami flavor"],
        drinks: ["Milkshakes artisanaux", "Cocktails création"],
        must_eat: "L'Umami Burger original et les Manly Fries.",
        must_drink: "Un milkshake vanille-bourbon pour le contraste sucré-salé."
    }
};
