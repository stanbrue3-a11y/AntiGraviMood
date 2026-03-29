import { SurgicalPlace } from "../../../type-definition";

export const mosugo: SurgicalPlace = {
    id: "poi-mosugo",
    name: "MOSUGO",
    slug: "mosugo-mory-sacko-14",
    category: "restaurant",
    subcategory: ["street food", "afro-fusion", "poulet frit", "mory sacko", "restaurant"],
    location: {
        address: "22 Rue Raymond Losserand, 75014 Paris",
        arrondissement: 14,
        lat: 48.8357541,
        lng: 2.321251,
        nearest_metro: "Gaîté",
        metro_lines: [13],
        google_id: "ChIJ3YTrLT1x5kcRTTzu1sGsJq8"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Lundi: Fermé | Mardi: 12:00–14:30, 18:30–22:00 | Mercredi: 12:00–14:30, 18:30–22:00 | Jeudi: 12:00–14:30, 18:30–22:00 | Vendredi: 12:00–14:30, 18:30–22:00 | Samedi: 12:00–15:30, 18:30–23:00 | Dimanche: 12:00–14:30, 18:30–22:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.mosugo.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 20,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 14.90, // UNITÉ DE SATIÉTÉ (Menu Fried Découverte)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Poulet Frit & Signature",
                items: [
                    { name: "Poulet Frit Signature (Panko, sauce Bulldog)", price_cents: 1050, description: "Le fameux poulet frit de Mory Sacko." },
                    { name: "Fried Plantain (Banane plantain frite au panko)", price_cents: 1050 },
                    { name: "Chicken & Waffle", price_cents: 1350, description: "Gaufres maison, poulet frit, sirop d'érable." },
                    { name: "Plantain & Waffle (Version végétarienne)", price_cents: 1350 },
                    { name: "Mosugo Chicken Burger (Pretzel bun, miso mayo)", price_cents: 1350 },
                    { name: "Mosugo Veggie Burger (Butternut frite)", price_cents: 1350 },
                    { name: "Burger Teriyaki (Bun Mamiche, poulet frit)", price_cents: 1300 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Menus (Unités de Satiété)",
                items: [
                    { name: "Menu Fried Découverte (Poulet frit + Accompagnement)", price_cents: 1490 },
                    { name: "Menu Slim (Burger + Accompagnement + Boisson)", price_cents: 2150 },
                    { name: "Menu Big (Burger + Fried + Accompagnement + Boisson)", price_cents: 3150 }
                ]
            },
            {
                category_type: "other",
                display_label: "Accompagnements (Sides)",
                items: [
                    { name: "Alocco (Bananes plantains frites)", price_cents: 550 },
                    { name: "Frites de Patate Douce & sauce Cajun", price_cents: 500 },
                    { name: "Sucrine grillée, vinaigrette abricot-harissa", price_cents: 550 },
                    { name: "Pommes de Terre Grenailles aux épices cajun", price_cents: 550 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Douceurs Maison",
                items: [
                    { name: "Mobroockie (Chocolat Tanzanie & Miso caramel)", price_cents: 550 },
                    { name: "Pavlova de Saison (Kiwi & Yaourt grec)", price_cents: 600 },
                    { name: "Jus de Bissap Maison", price_cents: 450 },
                    { name: "Jus de Gingembre Maison", price_cents: 450 },
                    { name: "Bière artisanale Mosugo", price_cents: 650 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXbD2v4bmV1k6_Aj4Z32j92nhRupZmpZkbJ3B6qVAmtws2LEBvfQqbE3t5txdysk5orbfl4A5K75HhaFzE2Bq9Hbk4Dyierheyris3-T2D3_fDW5K5cVzNuW8zRGmuHa0Awn7VzsOebk5E9XKiRppCi9w5_rX7HWeoYQyvDpj6cpGE0DhIGVBRK684zltaRmWqauZcpRbxUhzW9R7GhVUndNibfF2iYY7Yw6gdMokZajW8IonoLpU2lLIemC532NWL3tuuTResYcDnqDc6dLjtMQ_g3RUrC8M5KSkeSvbq6aQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUg2HIhV0-d_EJF9fiMOLyk6C2uv_WQQlkQH53YGALMx7IA_fxrV-6IQaGZNIN7h69OD2ieYG5OCNxIb5zYmsmPOIkst4cNfu73tx6srva4PpgIe3t7GulZwgFK4_d-IXBw8k9UAylf25IrWXelJcoo_wyJG1iOm99MHBH8QRLOvaWEP5bnnXx_Umybgv_Yjucr8imfwCEFgZsJ6Tg1CUe0n4sxTC7iG-0ILz6r-zKGTene8J_3OyNWi9CUBHY_wzc_-dZQWfd9OJNdhxDRkpEqJsxes-wVBZi3xtgdpFnojA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXifWR_xs9oZD7j5E7FR_rBQ3_L7MO7fwUWX-pLxJai4i3oTxSb7n7IGLHmu0XVdzO_obYwfn7VVeP_y4M0MjnMJ6X953RokOTMJh2DUNVOvlIZFRrU8-Iuxf63WTK2O4Nq7qPf9lDnXfk7alZI22d9qVFEUJOSflA8sxwuCMZl-yl5aEHO_QYudtXqsn0p3YvG-MyL4WP5GotSPmXDh7-4w5d1gvaTLIJDs2ELZWuBnSH7xnPOZADFD_tzNiJxx8lmPDIDZdwg3e8WEgx2eUfnch_ZSTPwxDxUC5du0nfM687cPxGWfY6RKBJ-gsET3Bg2vmsgpNDLgE_fLENcB9b6xJ40hlzq8IkjPpSmntsFaJ1xj61DP1SDwNb9m5mXcUfDZIpdQXM-i6-TTAtE-6RG1Ih05BlGwSQrzPzgMyVoPbSsQ1kQwQSllzhaxwSz&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Avec Mosugo, le chef étoilé Mory Sacko démocratise son univers afro-fusion à travers la street-food. Concentré sur le poulet frit (incroyablement croustillant et épicé), ce spot du 14ème propose des burgers au pain bretzel et des accompagnements qui font voyager, comme les l'alocco (bananes plantains). C'est une immersion rapide et savoureuse dans la signature culinaire de l'un des chefs les plus créatifs de sa génération.",
    insider_tip: "Prenez absolument les Alocco (bananes plantains) en accompagnement, elles sont parfaitement caramélisées. Si vous avez une grosse faim, le Menu Burger and Fried est une expérience totale du concept.",
    expert_catchline: "Le poulet frit version haute couture : l'afro-fusion signée Mory Sacko accessible à tous.",
    specials: {
        cuisine: ["Street Food Afro-Fusion", "Poulet Frit", "Mory Sacko signature"],
        drinks: ["Bissap maison", "Eaux détox"],
        must_eat: "Le Mosugo Chicken Burger et les Alocco.",
        must_drink: "Un grand verre de Bissap bien frais."
    }
};
