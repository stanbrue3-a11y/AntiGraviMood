import { SurgicalPlace } from '../../../type-definition';

export const chez_justine: SurgicalPlace = {
    id: "poi-chez-justine",
    name: "Chez Justine",
    slug: "chez-justine",
    category: "restaurant",
    subcategory: ["pizzeria", "brasserie", "restaurant"],
    location: {
        address: "96 Rue Oberkampf",
        arrondissement: 11,
        lat: 48.8656532,
        lng: 2.3778495,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJ2al2S-Vt5kcRcfurdLIB4DA"
    },
    moods: {
        chill: 50,
        festif: 50,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 10:00–23:30\nmardi: 10:00–23:30\nmercredi: 10:00–23:30\njeudi: 10:00–23:30\nvendredi: 10:00–01:00\nsamedi: 10:00–01:00\ndimanche: 10:00–23:30",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://justineparis.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 7.00,
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 16, // MANUAL: Average price of their signature Pizzas (15-18€)
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Formules Déjeuner (En semaine)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Formule Midi (Entrée/Plat ou Plat/Dessert)", price: "16.00€", description: "Formule abordable évoluant selon l'humeur du chef." },
                    { name: "La Formule Brunch Animé (Week-end seul)", price: "25.00€" }
                ]
            },
            {
                category: "Les Grandes Salades & Burgers (Le Midi)",
                items: [
                    { name: "Burger Maison (Classique ou Végétarien), frites", price: "16.00€" },
                    { name: "Cheeseburger Double Smash", price: "19.00€" },
                    { name: "Salades / Bowls Fraîcheurs du moment", price: "15.00€" }
                ]
            },
            {
                category: "Les Viandes au Pur Brasero",
                items: [
                    { name: "Planche de Charcuteries Artisanales", price: "11.00€" },
                    { name: "Poulpe grillé au feu de bois", price: "24.00€" },
                    { name: "Magret de Canard fumé", price: "18.00€" },
                    { name: "Côte de bœuf cuite à la braise (Pour 2)", price: "75.00€" }
                ]
            },
            {
                category: "Les Pizzas au Feu de Bois",
                items: [
                    { name: "Marinara (Sauce tomate, ail, origan, basilic)", price: "11.00€" },
                    { name: "Margherita D.O.P", price: "13.00€" },
                    { name: "Napoli (Anchois, tomates, mozzarella)", price: "15.00€" },
                    { name: "Tonnara (Thon, oignons rouges)", price: "15.00€" },
                    { name: "Brooklyn (Pepperoni)", price: "16.00€" },
                    { name: "Prosciutto et Funghi", price: "16.00€" },
                    { name: "Vegetariana", price: "16.00€" },
                    { name: "Tripletta (Piquante & Charcuterie)", price: "17.00€" },
                    { name: "Justine (Signature Maison)", price: "17.00€" },
                    { name: "Tartufo Carciofi (Truffe et Artichaut)", price: "18.00€" }
                ]
            },
            {
                category: "Desserts & Boissons",
                items: [
                    { name: "Dessert signature du moment", price: "8.00€" },
                    { name: "Cocktail Happy Hour", price: "7.00€" },
                    { name: "Pinte de Bière Pression", price: "7.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWhJgwzp1GkRJiXjqn4q8CpssL80stzvOYkvGc5lRHRBgTuO9FAdon3_MJikTL0OQitxo8SInKpttJQXqi8qUcmITUlWrNxF3z2HrbyS54TbBM_VO4vHRRtZgPZzc7JLySH0SazjNzTdnBYRGxUkw4LTQ-xXQXqi2G0XiH822qrthh22UXLxuBbojop4gl0_G2jqOHsx_F_GhOidbU4dfXqHWgMnRQ2d5Mijn7R-OdDQayozSHieXmaMbrwL8Jhc_p4ufMaX6-MOLs78XejkNMR2GNHSI47VRbDbTTiqck6Ww&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV3iZgg3qEQFpmf-SKk_waski2fjsJ6GD-OD8bkpbghhFme3OJsI_FEs_45m0Dfd31aSgRF7Gu-HK1riOhEkeUELhERN5rbwU0lETp1dy9LA2utSNQSAaqRqdmFpDzqVrlhY9XLdUIdHrmgwenD9pGUWpTVJuJFbudL45_fJwv6SYGpvGfAOOCcBJnTe4JjZqYRoUkQoml-nPwG8HtOM0TcsL2NZJgnhJ_NOA_mVes9-nZuSAcVFu5blUel3kTOHW6I4IXz3URKdX7hSnlZAQjyK4tIiy8xrh8bvTLuyNSNPg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXqLZddKdRi0pf4ymqTlXEkEEBp_rz5LhTX7YxSWtrDlau6Ec8EfWzAHeWzoLD16pSkZdYq_ETr9YpYU7RIMWp2ZqPCw0lh_GPKQ7oERmqaUKOUpXEScQLVrvN---TF-PwmzuYE5nfvlmq5Y75O8RZfUaMuPI6ccCHGTEYo9iyXJPkCAc7TxTnsfucsVwX7iHpPBE0tmPtfaEhc00bAtLbglTzsx7XX22LR-TIFG8JuNH4aH_iUjlgAFgl2OhOxsTDaeBGBeVr2b2Mpc_lQpaz2Xm_n3WCvQgM0dlCyOcwdiw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "chezjustineparis",
    verified: true,
    google_rating: 4.4,
    description: "La pierre angulaire de la rue Oberkampf. À la fois néo-brasserie de quartier avec ses grandes tablées et ses viandes rôties au feu de bois, bar festif en fin de soirée, et surtout, redoutable pizzeria napolitaine à demeure.",
    insider_tip: "• Les vendredis et samedis soir, c'est blindé et l'ambiance bascule en mode Before festif (jusqu'à 1h du matin).\n• Le midi, leur formule dej' à 16€ est une des affaires les plus solides du quartier Oberkampf.\n• Visez une pizza, elles sont étonnamment excellentes pour une brasserie généraliste, cuites dans un grand four à bois apparent.",
    expert_catchline: "Néo-brasserie au mix audacieux : viandes à la braise, DJ sets en fin de semaine et gigantesques pizzas napolitaines.",
    specials: {
        cuisine: ["Pizza Tripletta", "Côte de Bœuf au feu de bois"],
        drinks: ["Pinte de bière artisanale", "Spritz"],
        must_eat: "Une honnête Pizza Brooklyn (Pepperoni, fior di latte) ou, si vous êtes nombreux, réclamez la côte de bœuf saisie à la flamme.",
        must_drink: "Pinte de blonde au coude-à-coude sur les grandes tablées en bois brut."
    }
};
