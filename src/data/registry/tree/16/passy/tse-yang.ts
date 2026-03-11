export const tseYang = {
    id: "poi-tse-yang-paris-16",
    name: "Tse Yang",
    slug: "tse-yang-paris-16",
    description: "Véritable institution de la gastronomie pékinoise et shanghaienne à Paris. Un cadre feutré avec boiseries et aquariums, offrant une expérience haut de gamme où le légendaire canard laqué est découpé à la table.",
    category: "restaurant",
    subcategory: ["Gastronomique", "Chinois", "Premium", "Institution"],
    target_audience: "Dîners d'affaires, familles aisées, amateurs de grande cuisine chinoise",
    location: {
        address: "25 Avenue Pierre 1er de Serbie, 75116 Paris",
        arrondissement: 16,
        lat: 48.8669536, // EXACT GPS
        lng: 2.2980077, // EXACT GPS
        nearest_metro: "Iéna",
        metro_lines: [9],
        google_id: "ChIJy_VA0edv5kcRYF_AiI8Qnpc"
    },
    moods: {
        chill: 50, // Très calme, feutré
        festif: 5,
        culturel: 25 // Tradition millénaire
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
        opening_hours_raw: "Lundi: 12:00–14:30, 19:00–22:30 | Mardi: 12:00–14:30, 19:00–22:30 | Mercredi: 12:00–14:30, 19:00–22:30 | Jeudi: 12:00–14:30, 19:00–22:30 | Vendredi: 12:00–14:30, 19:00–22:30 | Samedi: 12:00–14:30, 19:00–22:30 | Dimanche: 12:00–14:30, 19:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "book",
            url: "https://tseyang.thefork.rest/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 150,
        is_free: false,
        pint_price: undefined,
        wine_glass: 18.00,
        coffee_price: 6.00,
        dish_price: 65.00, // MÉDIAN Plats de résistance (Canard 140/2, Boeuf 55, Poisson 78)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Pour Commencer (Dim Sum & Entrées Froides)",
                items: [
                    { name: "Sélection de Dim Sum maison grillés (4 pièces)", price: "24.00€" },
                    { name: "Salade de méduse à l'huile de sésame", price: "28.00€" },
                    { name: "Raviolis aux Saint-Jacques et crevettes", price: "26.00€" },
                    { name: "Consommé aux ailerons de requin (Imitation respectueuse)", price: "45.00€" }
                ]
            },
            {
                category: "L'Incontournable",
                items: [
                    { name: "Authentique Canard Laqué Pékinois entier (en 2 services)", price: "140.00€", description: "Découpé en salle. Peau croustillante avec crêpes, puis chair sautée." }
                ]
            },
            {
                category: "Poissons, Viandes & Plats de Résistance",
                items: [
                    { name: "Bœuf sauté au poivre noir sur plaque chauffante", price: "55.00€" },
                    { name: "Crevettes impériales sautées sauce aigre-douce", price: "52.00€" },
                    { name: "Bar chilien vapeur au gingembre et ciboulette", price: "78.00€" },
                    { name: "Poulet croustillant du Général Tao", price: "48.00€" },
                    { name: "Nouilles sautées à la mode de Shanghai", price: "28.00€" }
                ]
            },
            {
                category: "Douceurs (Desserts)",
                items: [
                    { name: "Perles de coco tièdes (3 pièces)", price: "15.00€" },
                    { name: "Beignets de banane caramélisés, flambés au Mei Kuei Lu", price: "18.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWr9ZhcK-V1Bnc8ZesW9cZsUS88IENwyLIQqhCIyJqS03cmS_iNgOHvlSQp1FJPzrxljwkU6Jbt011kPa8TmB3DJMtc0szhVQAxNhDxIZpPbhnwxPIBE6-x4hxG7hdbRX15lLRMKqlVav43egkDWvETx5hcShTvjHR0v0GJnFf4UVXqKr5srVYt4DOB-64AQRYk-8vMes7gNBsra5hdwKJIR4oXEKV31xWxejF0Vv5h-bhjrxyUmXkMe9TLujpspfVC_alYEBbG-hVHFovI_n9U5-E8_p-1TIGa0ykLIR5CwWFBXhqPiAdimm3OAU95BKLuFbG1pD5Kxuo2uPKW-u8ZbbrYGG0hnFp-nJhyVvwpFdBIPk-RsWh7-qw-JMOmV2vj0ueRB_snjxa9Vge5KNISvPYn2DCqf8qOagv-tr1dAZCo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXuvqgY0wDGLSk6rJ5AqDZ7FTmfh_47pRp1N4vQpjbtbWd8eqR6TJCK0X1zdPgKrApWwI1RVc9F1p6HxnhJsbWA6b50dCip3Hp7OBp0o4abgGK4WTewREdFLeDR59QpDalZXYWTqPvikCtlK8WgZA9LeDaWDDMQCou2o-QxoxUnQqVKS9qFgkaYHn7YomnDUXELed74IzyXj65qUdtGMp_u47DtHhfe7MhJpcpH_xJKBMnEDKe4WxA91x5DDcv82_GQhrRW3iqy5lVKR8Qp6Zyx8Zo5QAmirVJ9goY1ifAl2TTxeI0DQuK89UmNP4ZkTgtJc9eh_TxRSzXAgI5H0bkpXiR66nJvgl4g6FkeMPuGmNr7HUm71EPwT37h0PQTjiL8sd7zrpFGjQmz7yZe8ggxl708ni8TahGMinrpG-3Vp3cV&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWp3HVMdHcnrB1TbrIwpFEaNi7P2rNF1VghtqymqIcoC4kVB_V3eAgklVhsft9wvfUsG9jVWg741BZf5aiIT5FKjGu_hbAciWZIhSFNTADN_Fy2X5ZtK1E9vTdp1xBV7gqNBT2iE-uK_D5bK_OT2_QRfj1Y7Wh8s0WPY9rqNVsUyJ0w9SPKuCvHB0CMEI2aF7RJNw0sTJZMuN5OMu3V7T-T9VuHptjoRgqrfu7vaH6T_gIrHuJXHky5DdENcZgqKweE41-9-tOxXM-QKO_wfWDhuDvXSi29-xseL6xOgRGG8fYsULhnJdQKz2u_M1HkUb3GT8FN1cJmYcGnX68RbXc0QXmLA0fvoh8RlknKHmQ8hyJY4XIUanbRKiqTKOfUvCa6SEurNnKSaFVAk8SSrD782ar4Gp90DUfpoWgi_anqlezqrpY-hDB4bIsX-DeG&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "tseyangparis",
    website: "https://www.tseyang.fr/",
    tags: [
        { id: "chinois", label: "Gastronomie Chinoise" },
        { id: "premium", label: "Premium" },
        { id: "canardlaque", label: "Canard Laqué" },
        { id: "institution", label: "Institution" }
    ],
    reviews: {
        google: { rating: 4.4, count: 650 }
    }
};
