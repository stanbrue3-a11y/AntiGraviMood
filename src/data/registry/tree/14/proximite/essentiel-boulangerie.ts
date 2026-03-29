import { SurgicalPlace } from "../../../type-definition";

export const essentiel_boulangerie: SurgicalPlace = {
    id: "poi-lessentiel-boulangerie-14",
    name: "Boulangerie L'Essentiel",
    slug: "boulangerie-l-essentiel-paris-14",
    category: "café",
    subcategory: ["boulangerie", "patisserie", "artisanal", "bio", "sandwicherie", "petit-dejeuner"],
    location: {
        address: "Rue de l'Ouest / Rue d'Alésia, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.831512,
        lng: 2.321456,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJvW_a_ktw5kcR-H-c9tgHuGQ"
    },
    moods: {
        chill: 90,
        festif: 0,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 8:00 PM | Tuesday: 7:00 AM – 8:00 PM | Wednesday: 7:00 AM – 8:00 PM | Thursday: 7:00 AM – 8:00 PM | Friday: 7:00 AM – 8:00 PM | Saturday: 7:00 AM – 8:00 PM | Sunday: Closed",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://boulangerie-lessentiel.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 12,
        is_free: false,
        coffee_price: 2.60,
        dish_price: 10.50,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner",
                items: [
                    { name: "Menu complet (Sandwich + Boisson + Dessert)", price_cents: 1050 },
                    { name: "Menu Salade (Salade + Boisson + Dessert)", price_cents: 1230 },
                    { name: "Menu Duo (Sandwich + Dessert)", price_cents: 880 },
                    { name: "Menu Salade Duo (Salade + Boisson)", price_cents: 980 },
                    { name: "Menu Expresso (Café + Croissant/Pain Choco)", price_cents: 260 }
                ]
            },
            {
                category_type: "other",
                display_label: "Le Salé Artisanal",
                items: [
                    { name: "Le Parigot (Jambon Beurre Tradition)", price_cents: 490 },
                    { name: "Sandwich Signature l'Essentiel", price_cents: 600 },
                    { name: "Salade La Gauloise généreuse", price_cents: 780 },
                    { name: "Quiche Lorraine à l'ancienne", price_cents: 420 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pâtisseries & Boulangerie",
                items: [
                    { name: "L'Essentiel (Pâtisserie Signature)", price_cents: 500 },
                    { name: "Flan à la Vanille de Madagascar", price_cents: 410 },
                    { name: "Tarte Citron Meringuée", price_cents: 450 },
                    { name: "Paris-Brest de Champion", price_cents: 550 },
                    { name: "Croissant au Beurre AOP", price_cents: 120 },
                    { name: "Tourte de Meule Bio (600g)", price_cents: 480 },
                    { name: "Le Versot (Pain Signature 1kg)", price_cents: 650 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVJ2UwDQgKY6RY_c_9L4jVlL09SUZ_RCkOYUsCDHHkN4LG02-nfdjfP2KrDo_-fb18FpwU9oMYkMB7CzQFOe4xpw5zZxEOUfE7vU3u2lxaLz4DmN6Zr68kCxWK666371N3D-2klfmxwYT3Hpal3DAk_dtDpkI-Y7C1XEiIfqBxrsXwacH4YJ5BlBdlpvxJgK693eo-Ml1IttBBPgMCjWJZekCmo0iCR76GBNlteMiclt2zoulpTzIFByQZx2nBKEizO2dUIEqyKWfX30We0M-NMUGZIEVcQteVHCqs8C6u2gsNR80lvKdxDab1lsIFTEKgdFgf-lKrNb5exifcEOmmRs9L2hKJs4r3VPIfNPsYr3YL9u6M-Hn3qBXbnmKQubspcvXUfRrtf5NwD9yCFCb8eYCGO2wgm6pQNFwbhd_cpZyKIaT8TKtPLxVkKcp7n&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXtHWJ8G-W2d8RRUmAnZD4PB3ByTR55GE8N_XYodFqT3jC6uhANZFAkqhDEs6IAINrMt_D5AYzUm2Gu5sHLCybRSjg1yWqdp9PMJy7mHze9-ChhL4RcbcaoY1KDXOuHVF9_itAkPfBb1w93CXYzndE3ahFwjFf7eZUlBodjsRydc7hY9bUCd4BXuV8TaPsyMgFc6UPr1r7QS7Yc8cCVLut4JAriGdzgciU3YJPmEm9uks1CJeQutsSIQAXqKLVnOKXMLYj9yA40r9JorjiLSv3eEcHL5DcfsnAre_vcUgTsRA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Élue meilleure boulangerie d'Île-de-France en 2022, l'Essentiel porte bien son nom. Ici, on revient aux fondamentaux de la boulangerie française : levain naturel, farines bio et savoir-faire artisanal sans concession. Que ce soit pour leur pain Versot à la croûte généreuse, leurs viennoiseries pur beurre ou leurs pâtisseries fines, la qualité est constante et l'éthique de production irréprochable. C'est l'escale gourmande par excellence pour un petit-déjeuner vrai ou un déjeuner sur le pouce qui ne sacrifie jamais le goût à la rapidité.",
    insider_tip: "Ne manquez pas leur flan à la vanille de Madagascar, d'une onctuosité rare. Le pain 'Versot' se conserve admirablement bien plusieurs jours, n'hésitez pas à en prendre une miche entière.",
    expert_catchline: "L'excellence artisanale primée, au service du goût l'état pur.",
    specials: {
        cuisine: ["Boulangerie Artisanale", "Pâtisserie Fine"],
        drinks: ["Café de Qualité", "Jus de Fruits Bio"],
        must_eat: "Le Flan à la Vanille et le Pain Versot.",
        must_drink: "Un café Expresso avec un croissant au beurre."
    },
    source: "expert_human"
};
