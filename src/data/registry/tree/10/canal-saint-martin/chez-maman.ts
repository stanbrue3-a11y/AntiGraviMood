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
        wifi: false,
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
                category: "Plats et Viandes",
                items: [
                    { name: "Entrecôte XL - 300g", price: "24.90€" },
                    { name: "Esclope de veau à la crème", price: "19.90€" },
                    { name: "Bavette d’aloyau", price: "16.90€" },
                    { name: "Steak de bœuf", price: "15.20€" },
                    { name: "Poulet rôti", price: "14.90€" },
                    { name: "Véritable andouillette 5A", price: "19.40€" },
                    { name: "Magret de canard", price: "18.90€" },
                    { name: "Confit de canard", price: "18.90€" },
                    { name: "Pavé saumon", price: "18.90€" }
                ]
            },
            {
                category: "Burgers et Tartares",
                items: [
                    { name: "Burger Maman (Bœuf charolais, lard, fromage)", price: "18.50€" },
                    { name: "Le dindo burger (Escalope panée)", price: "17.90€" },
                    { name: "Burger végétarien", price: "16.90€" },
                    { name: "Tartare de boeuf charolais", price: "18.20€" },
                    { name: "Tartare de canard", price: "18.20€" },
                    { name: "Tartare de saumon", price: "18.20€" },
                    { name: "Croque-Monsieur frites", price: "12.20€" },
                    { name: "Croque-madame frites", price: "13.40€" }
                ]
            },
            {
                category: "Entrées et Planches",
                items: [
                    { name: "Planche mixte (Charcuterie et fromage)", price: "19.80€" },
                    { name: "Planche de charcuterie", price: "17.90€" },
                    { name: "Planche de fromage", price: "15.90€" },
                    { name: "Foie gras entier et figue séchée - 25g", price: "9.90€" },
                    { name: "Œuf poché au bleu", price: "9.90€" },
                    { name: "Filets de harengs", price: "8.70€" },
                    { name: "Pâté", price: "5.80€" },
                    { name: "Rillettes", price: "5.70€" },
                    { name: "Salade de gésiers", price: "12.20€" }
                ]
            },
            {
                category: "Bières et Vins (hors HH)",
                items: [
                    { name: "Pinte Paris Blonde 50cl", price: "6.10€" },
                    { name: "Pinte Couvente Abbaye 50cl", price: "7.10€" },
                    { name: "Pinte Blanche Moulin d'ascq Bio 50cl", price: "7.90€" },
                    { name: "Pinte IPA Légennaire 50cl", price: "8.60€" },
                    { name: "Verre Bordeaux Superieur 14cl", price: "4.90€" },
                    { name: "Verre Brouilly AOP 14cl", price: "5.50€" }
                ]
            },
            {
                category: "Boissons Chaudes",
                items: [
                    { name: "Café expresso", price: "2.30€" },
                    { name: "Café allongé", price: "2.50€" },
                    { name: "Cappuccino", price: "5.00€" }
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
