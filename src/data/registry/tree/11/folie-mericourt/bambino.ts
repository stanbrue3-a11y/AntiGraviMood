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
                category_type: "other",
                display_label: "Petites Assiettes (Sharing)",
                items: [
                    { name: "Houmous, huile de piment, pain pita", price_cents: 900 },
                    { name: "Labneh, za'atar, grenade", price_cents: 850 },
                    { name: "Halloumi grillé, miel & origan", price_cents: 1100 },
                    { name: "Tartare de thon, citron vert, gingembre", price_cents: 1450 },
                    { name: "Arancini au safran (x3)", price_cents: 1200 },
                    { name: "Focaccia maison, sel de Maldon", price_cents: 550 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas au Feu de Bois",
                items: [
                    { name: "Margherita (Tomate, Mozza, Basilic)", price_cents: 1300 },
                    { name: "Bambinita (Burrata, N'duja, Miel)", price_cents: 1900 },
                    { name: "Diavola (Salami piquant)", price_cents: 1650 },
                    { name: "Verdura (Légumes de saison)", price_cents: 1550 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Tiramisu Signature", price_cents: 900 },
                    { name: "Mousse Chocolat & Huile d'Olive", price_cents: 850 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins & Cocktails",
                items: [
                    { name: "Negroni", price_cents: 1200 },
                    { name: "Vin Naturel (Verre)", price_cents: 750 },
                    { name: "Bière Artisanale (Pinte)", price_cents: 800 }
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
