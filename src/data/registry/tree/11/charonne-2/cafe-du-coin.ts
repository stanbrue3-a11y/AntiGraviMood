import { SurgicalPlace } from '../../../type-definition';

export const cafe_du_coin: SurgicalPlace = {
    id: "poi-cafe-du-coin",
    name: "Café du Coin",
    slug: "cafe-du-coin",
    category: "restaurant",
    subcategory: ["café", "vins natures", "bistronomique", "pizzettes", "restaurant"],
    location: {
        address: "9 Rue Camille Desmoulins",
        arrondissement: 11,
        lat: 48.8590628,
        lng: 2.3810386,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJofW_Hvdt5kcR0i4nA42Cw8Q"
    },
    moods: {
        chill: 70,
        festif: 15,
        culturel: 15
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: 08:00–02:00\nmardi: 08:00–02:00\nmercredi: 08:00–02:00\njeudi: 08:00–02:00\nvendredi: 08:00–02:00\nsamedi: 10:00–02:00\ndimanche: 10:00–02:00",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://cafeducoinparis.net/",
            label: "VOIR LE SITE"
        }
    },
    pricing: {
        avg_budget: 22,
        is_free: false,
        pint_price: 0,
        // VERIFIED: LeFooding + VinsNaturels (2024) — verres dès 4€, moyenne 7€
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 18, // MANUAL: Median des Plats déjeuner (morue ~18€, caille ~20€, pâtes ~16€)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULES DÉJEUNER (Source: LeFooding + TimeOut + LeBey)
            // ═══════════════════════════════════════════
            {
                category: "Menu à Tiroirs (Déjeuner)",
                items: [
                    // VERIFIED: LeFooding + TimeOut (2024) — 15-24€
                    { name: "Formule midi (carte qui change tous les jours)", price: "15.00€", description: "Le menu du midi change quotidiennement." },
                    { name: "Menu complet midi", price: "24.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS DU DÉJEUNER (Source: LeFooding + Fulgurances + LuckyMiam)
            // ═══════════════════════════════════════════
            {
                category: "Plats",
                items: [
                    // VERIFIED: LeFooding + LuckyMiam (2024) — plats 16-22€
                    { name: "Morue, caponata de légumes", price: "18.00€" },
                    { name: "Caille rôtie, purée de pommes de terre", price: "20.00€" },
                    { name: "Pâtes al ragù", price: "16.00€" },
                    { name: "Plat du jour (variable)", price: "18.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // PIZZETTES & PETITES ASSIETTES DU SOIR (Source: LeFooding + Restaurants-us)
            // ═══════════════════════════════════════════
            {
                category: "Pizzettes Croustillantes (Le Soir)",
                items: [
                    // VERIFIED: LeFooding + Restaurants-us (2024) — pizzettes 5-8€
                    { name: "Pizzette Mortadelle Truffée / Ricotta", price: "8.00€" },
                    { name: "Pizzette Gorgonzola / Courgette", price: "7.00€" },
                    { name: "Pizzette Cacio e Pepe", price: "6.00€" },
                    { name: "Pizzette Mozzarella Fumée / Zaatar", price: "7.00€" },
                    { name: "Pizzette Tomate / Mozzarella / Espelette", price: "6.00€" },
                    { name: "Pizzette Anchois", price: "5.00€" },
                    { name: "Pizzette Lardo / Taleggio / Œuf", price: "8.00€" }
                ]
            },
            {
                category: "Assiettes du Soir",
                items: [
                    // VERIFIED: LeFooding (2024) — 6-12€
                    { name: "Chips de riz", price: "6.00€" },
                    { name: "Tempura de courge bleue", price: "8.00€" },
                    { name: "Éperlans frits", price: "8.00€" },
                    { name: "Croquettes de poisson", price: "9.00€" },
                    { name: "Sardines entières grillées", price: "12.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: LuckyMiam + Fulgurances)
            // ═══════════════════════════════════════════
            {
                category: "Desserts",
                items: [
                    { name: "Ganache chocolat, glace gwell maison", price: "8.00€" },
                    { name: "Tarte noisette et poire", price: "7.00€" },
                    { name: "Financier du jour", price: "5.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS NATURES (Source: VinsNaturels + LeFooding + LeBey)
            // ═══════════════════════════════════════════
            {
                category: "Vins Natures & Bio",
                items: [
                    // VERIFIED: VinsNaturels + LeFooding (2024) — verres dès 4€
                    { name: "Verre de vin nature (à partir de)", price: "4.00€" },
                    { name: "Verre nature sélection", price: "7.00€" },
                    { name: "Bouteille nature (à partir de)", price: "22.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUZuu86yt6Jt7he8eeHEBdJDBEZiNyB112oY0-XzU3Hp9kNvfMssgwd7LkOF5DbKK25oLbQr1woLlZLQWMjeuql1Pa7bZnm0c5kPOrjxu3y-AuA1agcVHQ0YX-ReCD3f1PlMapKZxxuvdfB6HIFXos0q07hnVZLL8BBXYPuEWUXB7VjgXowQO57e3cbzPAvMQ0uABxTPD-gj1Z7I6fHv11hHRjxTSN79GTIngi-rfjw79RW7IVRIOL4T4et2YNuzHA82ls6mfINbQtCl7z9dsE0VN_V5tJQn_bzqnIOl9gkag&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXDflaTi4b8ko4aMbuo9rsRY_ggyXX4EQOYD4N-vGbtDgRjYbNALpySk3qVeHofsOGDhX2DD_53_r-DB3y1Zg1_Q7iU_riDiGdu1u5X--rBEgCvF_VjiL0pPfFfMjvFqxKbn9oJ0PFrO-b6kkihj5hTz6aEqhHTYm_jpNmLzaacMmoR4rZM2RFw7z7mSPjiy4MDJR0MH2duzzaqk2gZ9kqyAB-phze30xdwrLRLO9o2UmLUotJ0UjzHPySMfCtv2_45gxj25xC-DopaVfpiq9RKdzRHmCD4-8skbcNPdE_-jT1In10zNNiVd_PgUmTerOoI3UchpStcV4oYCsiafrmSCXfiNAODyg4uGW6HacXSyA9aD4N6az3zfpGfw3OHgV_Cb8_SlP0badM56jvbUyNMGu18WFcnYXXY6NEfAZzjWNDJNmfGGBHjnRp0hgAx&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVFMe1IUd_zAWDJG8V4hMTKuWvbTODSKaOanfZpzw_anVKS_O-LO9hJ5h_Sfui_dXv-mtzcZjRG6wDtuyYlVyBVtpauWWhkL0mx_SSt5HoTg4GRTrOScUbn55U1BBsbAVx16j-T3lSsLLivMjCDqVzz3qwI4LnEZ0SwkigOGQXfwtnULcVXPx5os0rtwPbbA_BD3oh-A5yQurwt24lRYihDdmDGZ42GfOmLlRsVVKp9GqqAB2SZeFcpp19tNVZaGjlA7_gS4wXAsfiW2wLJB-ygjQr2YKpymhSikztw4Xj7_d2J1ZxEjFNMwq6gvVPf53WZWeABPlqBN82XYWx1gm-mF3kj9BVvuXOxT85tsbrjgDQsJ9Py0bToO0B6VsoKcDoFzrFLisqtR3sY-srhFnf_8J6xTFVtaWy3J0U&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "cafeducoinparis",
    verified: true,
    google_rating: 4.4,
    description: "Le Café du Coin est le QG du quartier Charonne : café le matin, bistrot à midi avec un menu du marché qui change tous les jours, et bar à vins natures + pizzettes croustillantes le soir. L'ambiance est celle du troquet de quartier parfait — comptoir, tables partagées, zéro prétention et des verres de vin nature dès 4€.",
    insider_tip: "• Les pizzettes du soir (5-8€) sont le meilleur apéro du quartier : croustillantes, généreuses, et parfaites avec un verre de nature à 4€.\n• La réservation n'est possible QUE pour le déjeuner (12h15-13h). Le soir, venez directement — il y a toujours de la place au comptoir.\n• Le menu à tiroirs du midi change CHAQUE JOUR et ne coûte que 15-24€ — un rapport qualité-prix imbattable.\n• Les verres de vin nature démarrent à 4€, c'est probablement le meilleur prix du 11ème pour du vin nature de qualité.",
    expert_catchline: "Le troquet nature du quartier Charonne : pizzettes croustillantes et vins à 4€ le verre.",
    specials: {
        cuisine: ["Pizzettes croustillantes (7 variétés)", "Morue caponata", "Caille rôtie", "Menu à tiroirs du midi"],
        drinks: ["Vins natures dès 4€/verre", "Sélection bio quotidienne", "Cave à emporter"],
        must_eat: "Le midi, foncez sur le menu à tiroirs (15-24€) qui change chaque jour. Le soir, c'est pizzettes obligatoires : la Mortadelle Truffée/Ricotta (8€) et la Lardo/Taleggio/Œuf (8€) sont les stars. Ajoutez des sardines grillées (12€) pour un repas complet.",
        must_drink: "Les verres de vin nature commencent à 4€ — c'est le deal du siècle dans le 11ème. Demandez la sélection du jour au comptoir."
    }
};
