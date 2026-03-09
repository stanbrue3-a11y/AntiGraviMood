import { SurgicalPlace } from '../../../type-definition';

export const bambino: SurgicalPlace = {
    id: "poi-bambino",
    name: "Bambino",
    slug: "bambino",
    category: "bar",
    subcategory: ["author-bar", "pizzeria", "middle-eastern-fusion", "jazz-bar"],
    location: {
        address: "25 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8631185,
        lng: 2.3708453,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJl6yY_Vdt5kcR8O-N6V_X78g"
    },
    moods: {
        chill: 60,
        festif: 100,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 19:00–02:00; Dim: 12:00–16:00 (Brunch); Fermé Lun",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.bambino-paris.com",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 7.50,
        coffee_price: 3.50,
        dish_price: 13.00, // MANUAL: Median of shared plates
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Bambino 2024-2025 (Shared Plates & Pizza)
            {
                category: "Petites Assiettes (Sharing)",
                items: [
                    { name: "Houmous, huile de piment, pain pita", price: "9.00€" },
                    { name: "Labneh, za'atar, grenade", price: "8.50€" },
                    { name: "Halloumi grillé, miel & origan", price: "11.00€" },
                    { name: "Tartare de thon, citron vert, gingembre", price: "14.50€" },
                    { name: "Arancini au safran (x3)", price: "12.00€" },
                    { name: "Focaccia maison, sel de Maldon", price: "5.50€" }
                ]
            },
            {
                category: "Pizzas au Feu de Bois",
                items: [
                    { name: "Margherita (Tomate, Mozza, Basilic)", price: "13.00€" },
                    { name: "Bambinita (Burrata, N'duja, Miel)", price: "19.00€" },
                    { name: "Diavola (Salami piquant)", price: "16.50€" },
                    { name: "Verdura (Légumes de saison)", price: "15.50€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Tiramisu Signature", price: "9.00€" },
                    { name: "Mousse Chocolat & Huile d'Olive", price: "8.50€" }
                ]
            },
            {
                category: "Vins & Cocktails",
                items: [
                    { name: "Negroni", price: "12.00€" },
                    { name: "Vin Naturel (Verre)", price: "7.50€" },
                    { name: "Bière Artisanale (Pinte)", price: "8.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVqLYejImDyULcEHVlHKUKAsvN9bQi7vWMtr7PLNr48JCB46b9Wmu-Fr943sPaCozYIiPi2opxqwyuamYqhtZMWlsgXL-QLitAYndUL8J-BajllqgwbdzsXKSub3wTrTESsdiMWhCGfIvS8itD6BH-inhmBtZzp42jgjAweXzT5wrStwUz33HAeQAU70Hd0VOEq28j5t5LZk2C6wUhN7u_-rBaMrZKO2P7Cn0vw_aqRElniHEfBrbaChObxjw9MWpupQG0S5aHa9memR4WhxGsy3xQFpuqsuqG3uwu3AxQ2XA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.4,
    description: "Inspiré par les bars à vin de Tel Aviv et les jazz kissa japonais, Bambino est un lieu hybride unique. Entre mur de vinyles, système son audiophile et cuisine ouverte au feu de bois, l'ambiance y est électrique. On y déguste des pizzas d'une finesse folle et des petites assiettes aux influences levantines dans un nuage de funk et de jazz.",
    insider_tip: "Ne manquez pas le brunch du dimanche, plus calme mais tout aussi savoureux. Pour le soir, arrivez à l'ouverture (19h) car l'endroit ne prend pas de réservations et se remplit en 15 minutes.",
    expert_catchline: "Vinyles, vin nature et pizzas au feu de bois dans un temple audiophile.",
    specials: {
        cuisine: ["Pizzas artisanales", "Levantine tapas", "Audiophile experience"],
        drinks: ["Natural wines", "Craft cocktails", "Premium audio system"],
        must_eat: "La pizza Bambinita avec sa burrata crémeuse.",
        must_drink: "Un Negroni en écoutant un pressage original de Fela Kuti."
    }
};
