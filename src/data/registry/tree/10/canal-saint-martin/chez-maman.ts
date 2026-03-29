import { SurgicalPlace } from '../../../type-definition';

export const chez_maman: SurgicalPlace = {
    id: "poi-chez-maman",
    name: "Chez Maman",
    slug: "chez-maman",
    category: "restaurant",
    subcategory: ["brasserie", "bar"],
    location: {
        address: "34 Av. de Laumière",
        arrondissement: 19,
        lat: 48.8850425,
        lng: 2.3797178,
        nearest_metro: "Laumière",
        metro_lines: [5],
        google_id: "ChIJYwcxFgBt5kcRVnUOA55YmQ8"
    },
    moods: {
        chill: 18,
        festif: 26,
        culturel: 5
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 06:00–02:00\nmardi: 06:00–02:00\nmercredi: 06:00–02:00\njeudi: 06:00–02:00\nvendredi: 06:00–02:00\nsamedi: 06:00–02:00\ndimanche: 06:00–02:00",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: false,
        main_action: {
            type: "site",
            url: "https://chezmamanparis.fr/"
        }
    },
    pricing: {
        avg_budget: 20,
        is_free: false,
        // VERIFIED: MisterGoodBeer & Site Officiel (March 2026) -> Paris Blonde Pression
        pint_price: 6.10,
        // VERIFIED: MisterGoodBeer (March 2026) -> 17h-00h (7 heures > 3h, donc actif)
        hh_pint: 3.00,
        hh_time: "17h-00h",
        // NOT FOUND: Pas de prix explicite pour les cocktails de création
        cocktail_price: 0,
        hh_cocktail: 0,
        // VERIFIED: Site Officiel (March 2026) -> Espresso
        coffee_price: 2.30,
        // VERIFIED: Site Officiel (March 2026) -> Verre Bordeaux Supérieur 14cl
        wine_glass: 4.90,
        hh_wine: 0,
        // NOT FOUND: Laissé à 0 pour actionner le calcul automatique de la "Barre des pinces" (médiane) via `compile_registry.ts`
        dish_price: 0,
        last_updated: "2026-03-05",
        menu_items: [
            {
                category_type: "main",
                display_label: "Plats et Viandes",
                items: [
                    { name: "Entrecôte XL - 300g", price_cents: 2490 },
                    { name: "Esclope de veau à la crème", price_cents: 1990 },
                    { name: "Bavette d’aloyau", price_cents: 1690 },
                    { name: "Steak de bœuf", price_cents: 1520 },
                    { name: "Poulet rôti", price_cents: 1490 },
                    { name: "Véritable andouillette 5A", price_cents: 1940 },
                    { name: "Magret de canard", price_cents: 1890 },
                    { name: "Confit de canard", price_cents: 1890 },
                    { name: "Pavé saumon", price_cents: 1890 }
                ]
            },
            {
                category_type: "main",
                display_label: "Burgers et Tartares",
                items: [
                    { name: "Burger Maman (Bœuf charolais, lard, fromage)", price_cents: 1850 },
                    { name: "Le dindo burger (Escalope panée)", price_cents: 1790 },
                    { name: "Burger végétarien", price_cents: 1690 },
                    { name: "Tartare de boeuf charolais", price_cents: 1820 },
                    { name: "Tartare de canard", price_cents: 1820 },
                    { name: "Tartare de saumon", price_cents: 1820 },
                    { name: "Croque-Monsieur frites", price_cents: 1220 },
                    { name: "Croque-madame frites", price_cents: 1340 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées et Planches",
                items: [
                    { name: "Planche mixte (Charcuterie et fromage)", price_cents: 1980 },
                    { name: "Planche de charcuterie", price_cents: 1790 },
                    { name: "Planche de fromage", price_cents: 1590 },
                    { name: "Foie gras entier et figue séchée - 25g", price_cents: 990 },
                    { name: "Œuf poché au bleu", price_cents: 990 },
                    { name: "Filets de harengs", price_cents: 870 },
                    { name: "Pâté", price_cents: 580 },
                    { name: "Rillettes", price_cents: 570 },
                    { name: "Salade de gésiers", price_cents: 1220 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Bières et Vins (hors HH)",
                items: [
                    { name: "Pinte Paris Blonde 50cl", price_cents: 610 },
                    { name: "Pinte Couvente Abbaye 50cl", price_cents: 710 },
                    { name: "Pinte Blanche Moulin d'ascq Bio 50cl", price_cents: 790 },
                    { name: "Pinte IPA Légennaire 50cl", price_cents: 860 },
                    { name: "Verre Bordeaux Superieur 14cl", price_cents: 490 },
                    { name: "Verre Brouilly AOP 14cl", price_cents: 550 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons Chaudes",
                items: [
                    { name: "Café expresso", price_cents: 230 },
                    { name: "Café allongé", price_cents: 250 },
                    { name: "Cappuccino", price_cents: 500 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWiw4zv3fVYIYPd6Suo3EHE00XPSYw5qzWYgPccAnBTNUAa1XM1YuGGKDKGgkpqRYRFS8Vfz3Sg8t97nSv6viEsYWZaGx-GTT5f-7vasuPqd2Tb3SV07jnwdE4wVHo8dZuxwFz4ICvRWvyFeLlWWyGkYPwiW0jusjEEEtb4Lzu-4-N7IJXB8vlZeD_1qK-J7CBC7p6CDqxFgfwPsh0paBxBGYaWOKod6TaTQyxqmeF1YzVe9DIkybtS8UHfmX2KHqhAtuvvjwbmuGvapb7Hz_e9s9f3xN5SPV7VC43cJIryLMorzXw&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "chezmamanparis",
    verified: true,
    google_rating: 4.5,
    description: "Située idéalement sur l'avenue de Laumière, cette brasserie traditionnelle offre un cadre hybride parfait entre le restaurant convivial et le bistrot de quartier. La décoration originale et colorée donne un vrai cachet au lieu, tandis que la grande terrasse permet de profiter des rayons du soleil. La carte généreuse navigue entre grands classiques de la cuisine bourgeoise et burgers gourmands, le tout servi par une équipe souriante et chaleureuse.",
    insider_tip: "• La très grande terrasse idéalement exposée offre un ensoleillement optimal l'après-midi, parfait pour les fins de journée d'été.\n• Le service est souvent cité parmi les meilleurs du quartier pour sa bonne humeur authentique.\n• Il est particulièrement agréable de venir boire sa pinte blonde à 3€ pendant les 7 d'Happy Hour XXL",
    expert_catchline: "Une brasserie colorée à l'accueil généreux et à la belle terrasse ensoleillée.",
    specials: {
        cuisine: ["Bœuf bourguignon", "Dindo burger", "Tartare de bœuf", "Entrecôte XL"],
        drinks: ["Pinte (6.10€, HH 3.00€)", "Verre de vin (4.90€)"],
        must_eat: "Brasserie traditionnelle. Foncez sur le Dindo Burger ou le classique bœuf bourguignon avec sa purée régressive.",
        must_drink: "Remarquable Happy Hour XXL (17h-00h) avec la pinte de blonde à 3€. Misez aussi sur les bouteilles de vin abordables."
    }
};
