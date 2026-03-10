import { SurgicalPlace } from '../../../type-definition';

export const impactKebap: SurgicalPlace = {
    id: "poi-impact-kebap",
    name: "Impact Berliner Kebap",
    slug: "impact-kebap",
    category: "restaurant",
    subcategory: ["street-food", "berliner kebap", "turkish", "gourmet"],
    location: {
        address: "119 Rue du Chemin Vert",
        arrondissement: 11,
        lat: 48.8617852,
        lng: 2.3828718,
        nearest_metro: "Père Lachaise",
        metro_lines: [2, 3],
        google_id: "ChIJYdb214lt5kcRfewr8U8Iiss"
    },
    moods: {
        chill: 90,
        festif: 40,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Lun-Sam: 11:00–00:00 (Ven-Sam jusqu'à 01:00); Fermé Dim",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.impact-kebap.fr",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 14,
        is_free: false,
        pint_price: 6.50,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 14.50, // Berliner Kebap Menu + drink
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Impact Berliner Kebap 2025 Standard
            {
                category: "Les Kebaps (Pains ou Wraps)",
                items: [
                    { name: "Le Berliner Döner", price: "8.00€", description: "Poulet mariné, légumes grillés, feta, jus de citron." },
                    { name: "Le Berliner Dürüm", price: "8.50€", description: "Version wrap galette, plus léger." },
                    { name: "Le Classic Döner", price: "7.00€", description: "Simple, efficace, sans légumes grillés." },
                    { name: "Le Vegan Kebap (Seitan)", price: "9.00€", description: "Seitan mariné maison, feta vegan." }
                ]
            },
            {
                category: "Formules (Frites + Boisson)",
                items: [
                    { name: "Menu Döner", price: "13.00€" },
                    { name: "Menu Dürüm", price: "13.50€" },
                    { name: "Menu Vegan", price: "14.50€" }
                ]
            },
            {
                category: "Sides & Extra",
                items: [
                    { name: "Frites Maison (Double cuisson)", price: "4.00€" },
                    { name: "Suppléments Légumes Grillés", price: "1.50€" },
                    { name: "Extra Feta / Halloumi", price: "2.00€" }
                ]
            },
            {
                category: "Boissons",
                items: [
                    { name: "Bière Turque (Efes)", price: "5.00€" },
                    { name: "Ayran frais", price: "3.50€" },
                    { name: "Softs", price: "3.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUcnSA8BbmzGC4cixRLu42AbJ-a0FjZ7P_NUrtiyPM5DHpPXbnIGozBXaTeT8CnW8T1Xu-skudAHCuKrAH7YTim4Y08goTVlo_GE20SvcaSwFJX0RgnyhsDMqVZ_sLNk8iS4cIozHSp_9Xxrg_cgbJt27jjl8OqIqJOrW8rzCTQjJP5zpsiCRUQSmvSOh8AlQNjR3T-v0o0SbBOT1is0aa4Dws3aFxW5kl--xYsEE1LMSTnyjB7Q9-M3hvxKBtSgO1m7DEzw463V3WzoIjPwYJpGs2Hv7Lg4bb3b4wy8a0jhdd3Tl516gX4gg3tkWhVe8AlJit32A_hy5AR4xmLHHxQqwE1f3y3-pqgPAWJh1ZekTKfZWaa0kG4A24h19dg7-t35nwE3v9Pgj77rGm_8Zuke1bPC3SPpDch1gUKxQxAxA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXMARxZzZ54jFuUzQcTiWeajiqfR-5T6TAWSd-zoU7V3nWDJ93HF4-67TnwKDv1s3agVn8aCd7O3YPRtU2Ldll5J-Q3ZitHCA25jEIo7WiAMLCcGXhhd0x7lU8WXBxrfPEEdRBfZWbzxQKP-w3F_jVuOFi_Qc_MFWDt94mWZy8-AWRxJObl3tQNNkSNvBrQCbflcQQ654UT3gn0moJYetJsXOrLzU6vr3QftI-DijVeLCNXtWOEt-i-JgVuP2TZcST8Ok5P3U54meu503W4wJNWS9QKPmcGa8P_gBs1n_l_KQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.8,
    description: "L'un des meilleurs Berliner Kebaps de la capitale. Impact ne fait pas de compromis : pain artisanal livré chaque matin, poulet mariné en direct de Rungis et légumes grillés à point. La touche spéciale ? Le mélange de feta, herbes fraîches et jus de citron qui vient 'impacter' la gourmandise du döner classique. Une institution street-food de la rue du Chemin Vert.",
    insider_tip: "Demandez la sauce Chimichurri maison, elle apporte une acidité herbacée qui sublime la viande. Attention, l'endroit est minuscule, privilégiez le take-away aux heures de pointe.",
    expert_catchline: "Le Berliner Döner qui a redéfini le kebab dans le 11ème.",
    specials: {
        cuisine: ["Berliner Döner", "Seitan Mariné", "Légumes Grillés"],
        drinks: ["Bière Efes", "Ayran Maison"],
        must_eat: "Le Berliner Döner Classique avec extra Halloumi.",
        must_drink: "Un Ayran bien frais pour le contraste thermique."
    }
};
