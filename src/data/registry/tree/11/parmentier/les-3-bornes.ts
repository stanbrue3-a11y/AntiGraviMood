import { SurgicalPlace } from '../../../type-definition';

export const les_3_bornes: SurgicalPlace = {
    id: "poi-les-3-bornes",
    name: "Les 3 Bornés",
    slug: "les-3-bornes",
    category: "restaurant",
    subcategory: ["bistronomique", "marché", "français", "restaurant"],
    location: {
        address: "71 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8674934,
        lng: 2.3763685,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJNQvnfXRt5kcR0hNFCUQpGHM"
    },
    moods: {
        chill: 70,
        festif: 10,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: 19:00–22:00\nmardi: 19:00–22:00\nmercredi: 19:00–22:00\njeudi: 19:00–22:00\nvendredi: 19:00–22:00\nsamedi: 12:00–14:30, 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://les3bornes.com/fr",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 24, // MANUAL: Plats à la carte de 20€ à 31€. Médiane sur (20, 21, 22, 23, 25, 27, 28, 31).
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Entrées",
                items: [
                    // VERIFIED: Mises à jour récentes d'hiver (2025/2026)
                    { name: "Carpaccio tiède de tête de veau caramélisée, gribiche", price: "11.00€" },
                    { name: "Tarama fumé maison, œufs de truite", price: "12.00€" },
                    { name: "Raviole de langoustines, condiments wasabi", price: "16.00€" },
                    { name: "Velouté de butternut, œuf parfait", price: "12.00€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    // VERIFIED: Plats 20-31€
                    { name: "Pastilla de volaille tandoori, patate douce", price: "21.00€" },
                    { name: "Confit de canette des Dombes, jus miel", price: "23.00€" },
                    { name: "Lotte rôtie & risotto aux épinards", price: "27.00€" },
                    { name: "Poitrine de cochon, oca du Pérou, patate douce", price: "25.00€" },
                    { name: "Feuille à feuille de faux-filet, shiitake", price: "31.00€" }
                ]
            },
            {
                category: "Desserts & Fromages",
                items: [
                    { name: "Soufflé poire et chocolat", price: "11.00€" },
                    { name: "Pavlova mangue passion", price: "11.00€" },
                    { name: "Assiette de fromages, confiture, salade aux noix", price: "13.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXsYTy5MTr2XksYP5yajZ493TIa7m0kZQGVFeToYvZBZADZuAEu1-cGCIx_jK9QIMowkHE4Y20e0yK0oBG7kYdiFYNWG3a4YlSBWm7Pc7Eo3iCTZSupiY0QdJ3vVIEScnla0VAemFVenuRIzu6zo4HuBCB9qW-bYZQdqPFpK0Sja1F_She1Q7hNTFDao6xtZfKPBnalPr1gttHTwHqE-aFocJbu4MRSg08CAmQWNOfbIQ_ZpAGJDjwf3Br4nkoKhpu2azxAbkQCMclsh2j7m_gT20gQ2Uz1r9OmVXXrVgpbGA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWoA-NBXU4lSkJ9AjctKwvL0jlo7x-O8OycpjYJroPWjBVZhyLGmwj0AuRCGoZwFFlIdU47dkPgTiVMSXnnqijpZrghq49B8en5gfXAb5IZUHtdcp_SYKVplNdG0N_RgZK6h8bzBuhu-xixstkONykAWIgvYpFZ5RtzYf58_VIzkfxp1rDU-GMXwYy-ciIVWCV6svqHXckvEaxPG_4uMJWjn9sGIYHLabC4sSuCQcD_sJrr9KurUDhMDV6vOj6MnpwVHg91pzNqIl2-kEyGfIsAn5gaDbjHSZq05mEUfVoONQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVfKnpC0aip4GDYecbkVnp1hR37m2g4-eZ_RZDkLoX81PzYkB6sQqz9NDbw7ZvtZtWi5DmSXEAE7wpuCxtMA2dmJU7tyjc6_uwwl2ehe2kz6a7dkRK5lwmz_VPQF0J2gLfnY1Z4LPqZheq0Ch0xU37x7hWKvoGEgeyt9h-Ky0xY-T8uD63xQPgpQbaEKexc8ZYU4V-BCyAQTwOP5KwQFgUO7wtnfQ1xPQeErVkSltI_PCAIBcjurN94-A9dp1eYVQJw5L6TY5i96xutXJyGieBcazwfzsW0xiBs60K64GuMiBBKpSEKGg5Ryu6_7o23pVDqboQ2XTNFXeqU6yBGpd3hIMOFFTjmkfwGAe7aZktqO1TD1egKIiAiAAmiQOict2AQFLgDJqQ8oVvikxNIxeyH-0SPvPO7-zVBg_bP9ugsnUKJSkGzJfDFxQUkp041&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "les3bornes_paris",
    verified: true,
    google_rating: 4.7,
    description: "La pépite intimiste et rassurante de la bouillonnante rue Jean-Pierre Timbaud. Aux 3 Bornés, le chef Kévin Borel orchestre une bistronomie d'auteur élégante et canaille : tête de veau caramélisée redoutable, canette confite et vrais jus de viande corsés. La carte, ultra-courte, se renouvelle en permanence selon le marché du matin.",
    insider_tip: "• Attention à l'amplitude d'ouverture resserrée : restaurant du soir uniquement en semaine, avec un seul service dej le samedi.\n• Le menu entrée-plat revient autour de 35-40€, ce qui est extrêmement compétitif pour le niveau d'exécution technique du chef.\n• Allez-y les yeux fermés sur leurs sauces et jus : réductions intenses garanties. Ne passez pas à côté des abats quand il y en a.",
    expert_catchline: "Une grande bistronomie parisienne cachée rue Jean-Pierre Timbaud, où les jus et cuissons frôlent l'étoile.",
    specials: {
        cuisine: ["Tête de veau caramélisée", "Ravioles de langoustines", "Pâté en croûte de joue de bœuf", "Soufflé poire-chocolat"],
        drinks: ["Sélection pointue de vignerons indépendants"],
        must_eat: "L'entrée signature : le carpaccio de tête de veau, tiède et croustillant, piqué au vif par une sauce gribiche de haute volée.",
        must_drink: "Laissez la salle s'amuser avec des accords inattendus sur un Chenin de Loire ou un Côtes-du-Rhône friand."
    }
};
