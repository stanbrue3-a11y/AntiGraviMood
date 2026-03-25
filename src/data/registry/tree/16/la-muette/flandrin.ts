export const flandrin = {
    id: "poi-le-flandrin-paris-16",
    name: "Le Flandrin",
    slug: "le-flandrin-paris-16",
    description: "L'institution mondaine incontournable de la bourgeoisie du 16ème arrondissement. Une brasserie parisienne très élégante avec une somptueuse terrasse ensoleillée sur une place calme, idéale pour voir et être vu.",
    category: "restaurant",
    subcategory: ["Institution", "Brasserie Chic", "Terrasse"],
    target_audience: "Habitués du quartier, familles chics, déjeuners d'affaires",
    location: {
        address: "4 Place Jean Lorrain, 75116 Paris",
        arrondissement: 16,
        lat: 48.8642091, // EXACT GPS
        lng: 2.2721514, // EXACT GPS
        nearest_metro: "La Muette",
        metro_lines: [9],
        google_id: "ChIJfTHIxVZl5kcRWsoSezOFKAg"
    },
    moods: {
        chill: 60,
        festif: 5,
        culturel: 25 // Institution du quartier
    },
    specials: {
        is_rooftop: false,
        is_hidden: false,
        is_institution: true,
        has_view: false
    },
    verified: true,
    practical: {
        // VERIFIED: Google Maps API
        opening_hours_raw: "Lundi: 08:00–23:30 | Mardi: 08:00–23:30 | Mercredi: 08:00–23:30 | Jeudi: 08:00–23:30 | Vendredi: 08:00–23:30 | Samedi: 08:00–23:30 | Dimanche: 08:00–23:30",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://leflandrin.com/reservation/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 90,
        is_free: false,
        pint_price: undefined,
        wine_glass: 16.00,
        coffee_price: 6.50,
        dish_price: 44.00, // MÉDIAN Plats (Tartare 38, Sole 62, Suprême 36)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Pour Commencer (Entrées de Brasserie)",
                items: [
                    { name: "Coeur de saumon fumé d'Écosse", price: "32.00€" },
                    { name: "Avocat vinaigrette à l'ancienne", price: "24.00€" },
                    { name: "Escargots de Bourgogne (les 6)", price: "22.00€" },
                    { name: "Carpaccio de bœuf, parmesan et basilic", price: "28.00€" },
                    { name: "Salade de haricots verts frais truffée", price: "34.00€" }
                ]
            },
            {
                category: "Les Les Plats (Classiques parisiens)",
                items: [
                    { name: "Le fameux Tartare de Bœuf Flandrin, frites", price: "38.00€" },
                    { name: "Sole Meunière ou Grillée (500g)", price: "62.00€" },
                    { name: "Suprême de volaille aux morilles", price: "46.00€" },
                    { name: "Filet de bœuf au poivre, pommes grenaille", price: "52.00€" },
                    { name: "Cabillaud rôti, purée onctueuse", price: "42.00€" }
                ]
            },
            {
                category: "Les Douceurs",
                items: [
                    { name: "Millefeuille traditionnel à la vanille bourbon", price: "16.00€" },
                    { name: "Baba au rhum ambré", price: "18.00€" },
                    { name: "Assiette de fruits rouges de saison", price: "22.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWWKzeeUean6WjNy7daLG02ktS3osnjyCmUaYHqar2Fto4yYDUeugvX5uIxenzphlMct2Q-cS-4p1O_HqqqymtjTkBRLx6LyIRF-0EJZTMi0uNC3wO3s3umjqp5MMJerTSSkCI_2UhKZv40MqAB8B8DY1cev35bwtaU7E3_pUV8G4tNF4r0_d0j78E-LVT6CcQs9luk_TuPuW9CaQYYYsg2n2l4uS5afYgBdFf75dtS7Y9V6G2E7P-vDm3LVuwtFWJ17U15s29oxbCqoUxeTP4dEzLqLPimDr_8_CRN0neuBw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWu7EoNGCT8ojh6qnzS8zEPukmXD1Y67AIhlO9yizFAva-jq8Ek6vmDSpwrVOI6TvWyz6ybWtldZKWj7mQ81nZyMtrvNx5T1xnZYo1VhP14uPrH511XjWLskZ8cHkx6JHN9F-1hEzDJGhWi9ZIfPdY_cusJJDVzqI0n4KjC9CiAgRkGPWlOQTKcEYm3KBUgNK0CcWHOUm9DMfEBHSJM7fKnK4U3gwDO_r5OXi1V8W1e7kJ081vhbBmalbp3MgbP1Sc_s2DxSwmZcXiaj2bYWP4SqmCRftdXf4o3EAkvSr_ChOPpYCuBEJYNT69F5OAOhQ2N1ksE3_Y7t_k-sxcQyl30an-YTXMf8qBeUUF7pCso2T9dj_KyLwn3pbyegRsLkB4t4ops6_Q9FmQFGToii7QVJTMN0HtsVssBiNMZySkX2UFFSfsy8vEENskxCzeo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWr8XLDLX5aMZp1K1MwV0rezsPXKqMsn6okXz3vTQ5KUpMNKeT_KR1kDoQbNFfasV86bpFG5A_XNK5vTG82nSGNRh7-7PunU8aACu3xRxD25Nr_hLgSGLb5ZWLxCrTyRDRe424TZODqBvw-fFt9aLIDmKDJp9MJC1G0-OAJDQLRufNY_C1T0WcFiSNFBpmkH_VZAx_whnNGBFRkkjFkLkJzypTb3IpnQgQaM3g--cTPv7q7woWfCaSgJVyroNWz6iPk28cP65ZBpRxzllO0XVhmBXpPngDeSdgpDUvOMurTag&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "leflandrin",
    website: "https://leflandrin.com/",
    tags: [
        { id: "chic", label: "Chic" },
        { id: "institution", label: "Institution" },
        { id: "brasserie", label: "Brasserie Parisienne" },
        { id: "terrasse", label: "Superbe Terrasse" }
    ],
    reviews: {
        google: { rating: 4.2, count: 1800 }
    }
};
