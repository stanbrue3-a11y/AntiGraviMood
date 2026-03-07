import { SurgicalPlace } from '../../../type-definition';

export const le_chateaubriand: SurgicalPlace = {
    id: "poi-le-chateaubriand",
    name: "Le Chateaubriand",
    slug: "le-chateaubriand",
    category: "restaurant",
    subcategory: ["bistronomique", "gastronomique", "vins natures", "institution", "restaurant"],
    location: {
        address: "129 Ave Parmentier",
        arrondissement: 11,
        lat: 48.8693317,
        lng: 2.3713093,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJIfiOtuNt5kcRuMiQz0CoNA4"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 19:00–22:30\njeudi: 19:00–22:30\nvendredi: 19:00–22:30\nsamedi: 12:00–14:00, 19:00–22:30\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.lechateaubriand.net/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 95,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Average price for a glass of natural wine (TheFork / Raisin 2024)
        wine_glass: 12.00,
        coffee_price: 4.00,
        // Estimation dish_price pour la jauge : Menu Déjeuner 65€ / 3 temps ≈ 22€, Menu Dîner 95€ / 5 temps ≈ 19€ → ~22€
        dish_price: 22,
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Le Menu Unique (Dîner)",
                items: [
                    { name: "Menu Dégustation (5 amuse-bouches, 5 services)", price: "95.00€", description: "Le célèbre menu carte blanche d'Iñaki Aizpitarte, changeant chaque soir selon les arrivages." },
                    { name: "Menu avec Accords Mets & Vins", price: "135.00€", description: "Le menu complet accompagné par 8 verres de vins naturels sélectionnés par le sommelier." }
                ]
            },
            {
                category: "Le Menu Unique (Déjeuner - Samedi)",
                items: [
                    { name: "Menu Déjeuner", price: "65.00€", description: "Version raccourcie de l'expérience Chateaubriand, servie uniquement le samedi midi." }
                ]
            },

            {
                category: "Vins Vraiment Naturels",
                items: [
                    { name: "Verre de Vin Naturel (Blanc/Rouge/Orange)", price: "12.00€" },
                    { name: "Bouteille - Sélection pointue du sommelier", price: "55.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUiiV2KEeYZlLKAVxjqLFj88BHAbvcC4oHVtmVdWO95gI9oEOVX31dC6eNLIgihYz_pQ2BVXMXy7hXOSucgKjMBRK2SEeWyd5E1M3ft7hAfZUi71yn94t6QhHcIG-dQsrKCOM85XN2k2FwWXnRVOOWRyPA_bKbaDf15UU7p353xgwN2ZLAJ0xWUry6TpV4RWDPdxOdk_OVDTQDR8UXF8_mxOprD8tA5vGjAI9JLceE_EhKBMMoZvPHn93kcrlQwX-hr3HoJE7GrJMvXhn-sGsw5tEqJq-_cQH6Sxy6MfjgNBVkr4yMjJcaF17cu5Qng7uTxc7MC5HCYYeSNXIOL7bcGkQ7tMEdkTfzRIAxun4zRm7Da_IA4GXkLOrb3ssh1gVZbbooNt9FZRdKjdsMsNNnMM_7ADjKomShtkZSWdLMDSA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWkhWNRYENoROurYK9e28W4non7IaoveDuBK8aXNNxdSnqwe4voed6umsURrSgKrSxDLCyciLnhBQ1YbJ0d6ahC1rFawItnqbECAFF52vYyE1tXaQyOHyVpQVpmBViAMYwi8UFGTVMINbL6cy1dry3oI4v8CGV8ORm_q1NDXj6FJhfzixnA4QfP6oOPXtehrtKWBRv743aOEu_8m-_X8hj2O3P4kEG51UaC6uC_m7hisoJ7DV3LBiNSBOOY8GjMgIAV3zC63bBy9T-CKYB3SsVdOKG-vqoSIjEhbEth3JjUGIKmTKPHWAolTK-MPfk2LrLZdpWhGCmtzjfs3XHUhtOA1-acbmBtS34S3nBiSe63h9lEowyjZB7x5UBtmZhlE3hl-JoKUhZNHuKx-OGtYZFUmFn3llExfXzN5P-02g5d4cw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUS1pDJheuAZtOuRv-yg9ixLz3G1nG5wuRdSFZucA7ZNlBj5xq2mOo83O0jg7NWIGORS1cdeqvqaZo2XTwAEE6uHpRIrkV06X3pJzi-PqCj_f1Ah-tvnXNryU_t2xdVEO4a6TVOOasuU526MnEfy1I8aeQbcMZbJt5tbtSNPTb2MEfjzTiva-JeQ_INuqUtZi0QqNpU-5mklk7kYt3bLaGGrKB9XgPTH8rS8FWZ9nAoPz4IaxdFDKEUdgnczoCYdy7VS0wRRZpiMh3T6xOUtmaeWVM6b3etBIUHNxNg7KaAqc_qfEEJF0Qa1f78WxmJCyPgKXzLFunS56ObcgEacy-a_hQ1ChpMYfQy3Vlo9lpqVV64F8woLYc0TqivIzka1XKwRVO-f9jxspolZ5ishGA7okEdjHpzqhEt3wX5cQJlk_hnfp3R79Pm6P7p9UyK&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "lechateaubriand_",
    verified: true,
    google_rating: 4.3,
    description: "Le pionnier absolu de la « bistronomie » parisienne. Piloté depuis plus de quinze ans par le fantasque chef basque Iñaki Aizpitarte, le Chateaubriand maintient son statut d'institution mondiale (régulièrement classé dans les 50 Best). Le décor est intemporel (boiseries sombres, miroirs, chaises de bistrot), le service décontracté mais affûté, et l’assiette joue les équilibristes sans jamais de filet de sécurité.",
    insider_tip: "• Uniquement un Menu Dégustation aveugle le soir (pas de carte classique). \n• Réservation absolument indispensable des semaines à l'avance pour le premier service (19h).\n• Le deuxième service (à partir de 21h30) est parfois accessible aux walk-ins spontanés pour patienter avec un verre au bar, bien que ce soit risqué ! \n• Demandez toujours l'accord Mets & Vins pour découvrir l'une des caves nature les plus mythiques de Paris.",
    expert_catchline: "L'institution mondiale de la bistronomie : menu aveugle disruptif et flacons nature légendaires.",
    specials: {
        cuisine: ["Pigeon rôti au jus", "Lotte au BBQ", "Jaune d'Oeuf Confit en dessert"],
        drinks: ["Vins Naturels au verre", "Vins oranges", "Grands crus de Bourgogne "],
        must_eat: "Une expérience \"Carte Blanche\" (95€). Préparez-vous à au moins 5 temps autour de la fulgurance des matières premières : viandes d'exception saisies au barbecue, bouillon capiteux et desserts iconiques (comme ce jaune d'oeuf ultra-confit lové dans un caramel).",
        must_drink: "Laissez le sommelier vous guider dans la bible des vins nature. Les accords (40€ de supplément) sont brillants."
    }
};
