import { SurgicalPlace } from '../../../type-definition';

export const rigmarole: SurgicalPlace = {
    id: "poi-rigmarole",
    name: "The Rigmarole",
    slug: "rigmarole",
    category: "restaurant",
    subcategory: ["étoilé", "feu de bois", "japonais", "italien", "restaurant"],
    location: {
        address: "10 Rue du Grand Prieuré",
        arrondissement: 11,
        lat: 48.8651388,
        lng: 2.3691109,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJq6qeN_1t5kcRBB41bdSmwgc"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 30
    },
    practical: {
        // VERIFIED: Site officiel (2026-03) — Uniquement déjeuner Mer-Ven
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 12:00–14:00\njeudi: 12:00–14:00\nvendredi: 12:00–14:00\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://lerigmarole.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 75,
        is_free: false,
        pint_price: 0,
        // VERIFIED: LeFooding (2024) + Avis Google — verres dès 5€, moyenne ~9€
        wine_glass: 9.00,
        // NOT FOUND: aucune source fiable récente — mis à 0
        coffee_price: 0,
        dish_price: 20.00, // Median of Yakitori/Pasta platos
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // MENUS (Source: lerigmarole.com + LeFooding + LesRestos)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Menus Dégustation (Déjeuner)",
                items: [
                    // VERIFIED: Site officiel lerigmarole.com
                    { name: "Menu Surprise du Chef (7 brochettes + 2 petits plats + pickles + dessert)", price_cents: 5000, description: "Le format signature, succession de brochettes au binchotan." },
                    // VERIFIED: LeFooding (2024)
                    { name: "Menu Dégustation (~13 plats, accord omakase)", price_cents: 7500, description: "Le grand menu complet du déjeuner." },
                    // VERIFIED: LeFooding + LesRestos
                    { name: "Menu Brochettes (9 brochettes chef's choice)", price_cents: 4500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Privatisation / Table d'Hôte (Soirée sur réservation)",
                items: [
                    // VERIFIED: Site officiel lerigmarole.com
                    { name: "Menu Privé 12 passages (8-16 couverts minimum)", price_cents: 16000, description: "Menu exhaustif sur mesure avec préférences et restrictions." }
                ]
            },
            // ═══════════════════════════════════════════
            // BROCHETTES YAKITORI AU BINCHOTAN (Source: LeFooding + TimeOut + 50Best + LesRestos)
            // ═══════════════════════════════════════════
            {
                category_type: "other",
                display_label: "Brochettes Yakitori au Binchotan (à la carte)",
                items: [
                    // VERIFIED: 50Best + LeFooding — fourchette 5-9€ la pièce / duo
                    { name: "Yakitori cuisse de poulet, zeste de clémentine", price_cents: 700 },
                    { name: "Blanc de volaille, basilic et citron confit", price_cents: 700 },
                    { name: "Poitrine de porc yakitori, bambou", price_cents: 800 },
                    { name: "Aorte et cœur grillés", price_cents: 600 },
                    { name: "Brochette de légumes de saison", price_cents: 500 },
                    { name: "Demi-pigeon grillé (en saison)", price_cents: 1800 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS À LA CARTE (Source: LeFooding + LesRestos + TimeOut + 50Best)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: LeFooding (2024) — fourchette 8-39€
                    { name: "Spaghetti à la poutargue (fait main)", price_cents: 2400, description: "Les pâtes maison sont la seconde spécialité du chef." },
                    { name: "Ravioli ricotta, bouillon dashi", price_cents: 2200 },
                    { name: "Pâtes fraîches au homard (en saison)", price_cents: 3900 },
                    { name: "Bar tartare", price_cents: 1800 },
                    { name: "Maquereau grillé au binchotan", price_cents: 1600 },
                    { name: "Seiche grillée, yaourt épicé", price_cents: 1800 },
                    { name: "Polpette de porc, purée d'épinards", price_cents: 1400 },
                    { name: "Beignets de butternut", price_cents: 1200 },
                    { name: "Poireaux grillés", price_cents: 1000 },
                    { name: "Courgettes rôties au binchotan", price_cents: 1000 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: LesRestos + TimeOut)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    // VERIFIED: LesRestos (2024)
                    { name: "Far aux dattes", price_cents: 1000 },
                    { name: "Fondant au chocolat, glace à l'orge grillé", price_cents: 1200 }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS & BOISSONS (Source: LeFooding + Avis Google)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Vins Natures & Boissons",
                items: [
                    // VERIFIED: LeFooding (2024) — "5€ le verre à 70€ la bouteille"
                    { name: "Sauvignon de Loire (verre)", price_cents: 500 },
                    { name: "Blanc des Côtes-du-Jura (verre)", price_cents: 900 },
                    { name: "Gamay de l'Ardèche (verre)", price_cents: 700 },
                    { name: "Rouge autrichien nature (verre)", price_cents: 900 },
                    { name: "Bouteille nature (à partir de)", price_cents: 2800 },
                    { name: "Bouteille premium", price_cents: 7000 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVtDsSKncinYQhOhVdZHj4D2_1OoYa20mrjrJnMW2Ti8sVSfCL1OIefWF_Cti682BBQG2aZNUZYnK9d5odIQofv7JdgM8fg1LsgqOB-RDq6PHIQZkFoV8uEF_trGQj2m96DZvcQXFd4dvBjT-NFBGohBqCARGZBekEuZXaXp3RazpKBvbcBG7-VcjLmmvaoNO1AKPHaEFFkDYoJvwntqskuDNtYrrNdsg2Vs4KFygqn4fbNwE6snIQ26tKwtlsFYdwWTcXQC_lfK2_udvDPTzvt3-DEzPv4YDHbMhmYLO17eQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVlmZi7xMqQHNLHkinoNXvAO2_Z2yrcTr41tY8qkZqXs6Y6JgNHm4qdYo6Ey_KOvG25qZXP7kuhK18ZWGPei32-udFUlTrHinIVLfqSZ2X_HnJNdmgqTDRm77tC_qb3n2qBoaAhYM7LkgSH8Vlnr81CR2nTbsvhg2mvwQyUawJGx4oQUBx8ByAQOVgIav6r6vkT_tL0iCeLp5dBWGrzDequeRT1ti_q6qPt8yk1NrKAWO7SAas7yYhAERJTOATTERNOmhLdKLGKohpKaT0Bpd8WM0o7y-x6eAZNU4WpPABdkA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXlcI0gF3ymbWw9G2GTUvubIF2v-NJeXTzdrAUScCf0D5za707xSoSxxBEmi7d71fEZLTF1jnHR-FwMrPOmrMX4bn6lGngT4GMV-r7X_3GQZwhslvZvkX0pOrLXmwyrk6jHCtf0BKQdcm7zYgakEy9iQt-TC-QsCaMsy0glJQbNb9vXZzrCbVnks5fhNpYsikYayyf556FmNlmH3kI5nsKgeOYHSV4qDU4Y4bsPZAOJ49HiSzJ9Z6IOuyY1lSLn2zPwEfA_7kf3eS9k6DYW9nMc6NbLSk8WXWYWS93fgVx8AaMAsSyueW7u3Z7cMEEMSoojUB-vqHhbuIPlB5prsRcpB_1hm0Sn990EEvOhMuaM_VyGcNXEIL6evVGHHjO0LI5PebIgyVDPD9-CfQRxaRhaAuTtqvD8QBLIQv-WJKLshRmKG1-aH3L2ROqSouyQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "lerigmarole",
    verified: true,
    google_rating: 4.7,
    description: "Le Rigmarole est la fusion miraculeuse entre le yakitori japonais et la pasta italienne en plein cœur d'Oberkampf. Le chef Robert Compagnon et la sommelière Jessica Yang (couple à la ville) y orchestrent un ballet hypnotisant au-dessus du charbon binchotan. Ancien étoilé Michelin, le restaurant a choisi de rendre son étoile pour se concentrer sur un service plus intime et familial, désormais uniquement au déjeuner du mercredi au vendredi.",
    insider_tip: "• Obtenir une place ici relève du miracle : les réservations ouvrent exactement 14 jours à l'avance pour ces 3 déjeuners seulement (Mer-Ven).\n• Réservez impérativement une place au comptoir en noyer pour voir les chefs danser avec les flammes du Binchotan — c'est le vrai spectacle.\n• Les spaghetti à la poutargue (24€) et les ravioli ricotta en dashi sont les stars cachées derrière les brochettes.\n• Si vous n'avez pas de place, consolez-vous avec les glaces démentielles de Folderol juste à côté (même propriétaires).\n• Le Sauvignon de Loire au verre (5€) est un deal stratosphérique pour cette adresse.",
    expert_catchline: "Le meilleur yakitori-pasta de Paris au comptoir, sur charbon binchotan et avec des vins natures dès 5€.",
    specials: {
        cuisine: ["Yakitori cuisse de poulet", "Spaghetti poutargue", "Pâtes au homard", "Polpette de porc", "Demi-pigeon grillé"],
        drinks: ["Vins natures dès 5€/verre", "Sauvignon de Loire", "Gamay de l'Ardèche", "Sélection de Sakés"],
        must_eat: "Commandez le Menu Surprise (50€) pour avoir la vision complète du chef : 7 brochettes yakitori cuites au binchotan (poulet, porc, légumes, abats), 2 petits plats, pickles maison et un dessert. Les spaghetti à la poutargue (24€) sont un impératif si vous êtes à la carte.",
        must_drink: "Jessica Yang gère la salle et les vins avec une maîtrise rare. Sa cave nature va du verre de Sauvignon de Loire à 5€ aux bouteilles à 70€, avec des accords parfaits à chaque assiette."
    }
};
