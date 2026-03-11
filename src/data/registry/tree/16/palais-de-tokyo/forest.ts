export const forest = {
    id: "poi-forest-paris-16",
    name: "Forest",
    slug: "forest-paris-16",
    description: "Le restaurant spectaculaire du Musée d'Art Moderne, signé Moma Group et Julien Sebbag. Une ode à la nature avec une décoration brute, végétale et minérale. L'ambiance monte d'un cran le soir avec une ambiance festive chic.",
    category: "restaurant",
    subcategory: ["Fusion", "Festif", "Terrasse", "Musée"],
    target_audience: "Foodies, faune de la mode, dîneurs branchés",
    location: {
        address: "11 Avenue du Président Wilson, 75116 Paris",
        arrondissement: 16,
        lat: 48.86434209999999, // EXACT GPS
        lng: 2.2978208, // EXACT GPS
        nearest_metro: "Iéna",
        metro_lines: [9],
        google_id: "ChIJr3SOmOdv5kcRJUwZDs3C3mA"
    },
    moods: {
        chill: 20,
        festif: 85,
        culturel: 50 // Musée d'Art Moderne
    },
    specials: {
        is_rooftop: false,
        is_hidden: false,
        is_institution: false,
        has_view: true // Vue Tour Eiffel depuis la terrasse
    },
    verified: true,
    practical: {
        // VERIFIED: Google Maps API
        opening_hours_raw: "Lundi: 12:00–14:30, 19:00–02:00 | Mardi: 12:00–14:30, 19:00–02:00 | Mercredi: 12:00–14:30, 19:00–02:00 | Jeudi: 12:00–14:30, 19:00–02:00 | Vendredi: 12:00–14:30, 19:00–02:00 | Samedi: 12:00–15:00, 19:00–02:00 | Dimanche: 12:00–15:00, 19:00–02:00",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://restaurants-forest.com/paris/reservation/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 70,
        is_free: false,
        pint_price: undefined,
        wine_glass: 14.00,
        coffee_price: 5.00,
        dish_price: 28.00, // MÉDIAN des Plats/Poissons/Viandes (Pita 22, Poisson 34, Viande 28)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Pour Commencer (Végétal & Partage)",
                items: [
                    { name: "Pain Hallah à partager, tahini", price: "8.00€" },
                    { name: "Carpaccio de courgettes, stracciatella, pistaches", price: "18.00€" },
                    { name: "Chou-fleur rôti entier, sauce sésame", price: "22.00€" },
                    { name: "Crudo de bar, agrumes et piment", price: "24.00€" },
                    { name: "Houmous maison de compétition", price: "14.00€" }
                ]
            },
            {
                category: "Les Plats de Résistance",
                items: [
                    { name: "Arayes d'agneau (Pita farcie grillée)", price: "26.00€" },
                    { name: "Kebab de poisson aux épices douces", price: "32.00€" },
                    { name: "Poulet rôti au zaatar, labneh", price: "28.00€" },
                    { name: "Aubergine brûlée, tahini noir", price: "24.00€" },
                    { name: "Tagliata de boeuf, chimichurri", price: "36.00€" }
                ]
            },
            {
                category: "Les Douceurs",
                items: [
                    { name: "Fondant au chocolat pimenté", price: "14.00€" },
                    { name: "Babka perdue, glace à la fleur d'oranger", price: "16.00€" },
                    { name: "Carpaccio d'ananas mariné", price: "12.00€" }
                ]
            },
            {
                category: "Bar (Cocktails Créations)",
                items: [
                    { name: "Cocktail 'Canopée' (Gin, basilic, citron, matcha)", price: "18.00€" },
                    { name: "Cocktail 'Racines' (Mezcal, betterave, sumac)", price: "19.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWAIQQxMN13YKJN2wba6HscNA4C9nc94ietI16eJd3vUzH4Na_o2zYRYMLsYb9dYiY6JAf0_vtjumnfIkVTNh9DOuopcjlDwDa--ziGmXRarjdFkV2bHtmW5wOahkqMES6uOqECJKghJnY9V94ZmYwqbiVMC2feIkgDesVtghw_JBlkPXNFbzp0EjxmJXm1Fc_U0ctdH6YfYhTAUH0PllXymNlcx5AHngEBbpo060F2Z3SZIcW7nwa4_PKcNkAVVnIHLVYARUeCDK4S5PvuNkzkzaKOFDP2xMptA3WKBCPPaxwcv8REWKbyn3LHKJ64g1652Y4RR-alFdHiJA2VshRhiFlE1eGu8T8fPqMbwCHfpD86Kk0Psoc8J0XzefqLPp3aEpReMeE30IdYFzdhpMTtEaolmQs6vH3GZD-vfxxjfA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUZfx-HZX1jihcSX0oQndCXmMnmzjqTuK0bppqcDnFDki7Tdt3v396GDMuRqlSGM7r1dbesDjvfX26mcGvgn8m3Tu_1OWZgKu72O-8osTmUHnerJ4rFHyCHCeJhfXNda8gshCGr9udqoWl1ITn1XA9iOr88f3YhkhohVkPGtZVIcUNdhv-vftTThDMIfpPbPQxbU5OAmL7O9txXLoGVJwX-jOP7NhwLTXlBaHBYpPECeLV-b7ofJiNL5bxJ-yWoAtXTGq6DrsAJcAd0Vjqwqjo5eE7NEeIgmptwHb-Z0GIPn4RBmlf7J8kybaQeUX_xbEjGXOiBgnlWTDr_Wkb3_-6vhpgd-5ReyNaEiOuwKVyEGSDRpmh6z1iJ4wAU0JvQ0JGKA1CUs-rxV95L9AtSV7u20-i7y2au4uiK9VMzwbdjT0d4&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXToD7dvubZb6A-L9d0fj4wgou7g99rhwHnqISHOy-YeGms_kaGymSv5m9dTRQ73nPPJIkHN9TwRGwD_v9YvNlE4TxqlvTMYhHf90waKrbnWpyC-9wxXf-_4X_Hb9fgZq1V-e38cbnzwfbswMuJ9loyLVyiI-x4c3Z7vWKxWtvTgjNEnTHcAu-Ngd8D_o0jX9-6fVRVFsNR4dHih30bp2PRvrLEDhFijXlzc6NBsXGPgBwIC7ecz2r6xWd2pKp9tuXmsF2P8pwV_7D64Oxb6tNwaYnS6R6__5uHNVH6StDX12Dxwfz8s6AInOM1IRpT8jfdfFG15-tjAYAE8bsrZjAw2JxdCCi-0Dh1x4JOHNiE-ts7OiDgugn0Fdw_gZI_-4iVkjIbZUhkgYobwdpMLYRaydDb80CXOTiFLEvO-D4&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "forest.paris",
    website: "https://restaurants-forest.com/paris",
    tags: [
        { id: "fusion", label: "Cuisine Fusion" },
        { id: "festif", label: "Festif" },
        { id: "vegetal", label: "Végétal" },
        { id: "mode", label: "Branché" }
    ],
    reviews: {
        google: { rating: 4.1, count: 1200 }
    }
};
