import { SurgicalPlace } from '../../../type-definition';

export const carette: SurgicalPlace = {
    id: "poi-carette",
    name: "Carette",
    slug: "carette",
    category: "restaurant",
    subcategory: ["salon de the", "patisserie", "institution", "chic", "chill", "historique"],
    location: {
        address: "4 Place du Trocadéro et du 11 Novembre, 75016 Paris",
        arrondissement: 16,
        lat: 48.863665,  // EXACT GPS
        lng: 2.2872101,  // EXACT GPS
        nearest_metro: "Trocadéro",
        metro_lines: [6, 9],
        google_id: "ChIJXQvlQftv5kcROZUkVMlEAdo"
    },
    moods: {
        chill: 40,
        festif: 5,
        culturel: 50 // Institution parisienne
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-11)
        opening_hours_raw: "Monday: 7:30 AM – 11:30 PM | Tuesday: 7:30 AM – 11:30 PM | Wednesday: 7:30 AM – 11:30 PM | Thursday: 7:30 AM – 11:30 PM | Friday: 7:30 AM – 11:30 PM | Saturday: 7:30 AM – 11:30 PM | Sunday: 7:30 AM – 11:30 PM",
        reservation_policy: "sans_resa", // Grosse file d'attente souvent
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.carette-paris.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: undefined, // Pas la vibe
        wine_glass: 12.00,
        coffee_price: 6.50, // Le mythique chocolat chaud est à 12€/14€
        dish_price: 24.00, // MÉDIAN du Salé (Croque 22, Salade 26, Omelette 20)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Les Incontournables (Pâtisseries & Goûter)",
                items: [
                    { name: "Chocolat chaud onctueux Carette", price: "12.00€", description: "La spécialité maison, servi en pichet avec crème chantilly." },
                    { name: "Saint-Honoré", price: "11.50€" },
                    { name: "Millefeuille vanille", price: "11.00€" },
                    { name: "Éclair au chocolat", price: "9.50€" },
                    { name: "Assortiment de 5 macarons", price: "16.00€" }
                ]
            },
            {
                category: "Le Salé (Déjeuner & Sur le Pouce)",
                items: [
                    { name: "Croque-Monsieur traditionnel, salade mêlée", price: "22.00€" },
                    { name: "Omelette fines herbes", price: "20.00€" },
                    { name: "Salade Niçoise au thon poêlé", price: "26.00€" },
                    { name: "Club Sandwich Poulet Bacon", price: "24.00€" },
                    { name: "Quiche Lorraine maison", price: "18.00€" }
                ]
            },
            {
                category: "Petit-Déjeuner",
                items: [
                    { name: "Formule Petit-Déjeuner Parisien (Viennoiserie, boisson chaude, jus)", price: "22.00€" },
                    { name: "Tartine beurrée et confiture", price: "8.50€" },
                    { name: "Croissant au beurre", price: "3.50€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUItCwFiQLTbr53_Q8zd3SKSY3b7-3SxCND4Ed_9sHiMDIblVagmxYOLI5IMGfb7tsvlP32ng7hCxpym-Co_g80_OJWfPgi4V-SpIoDvSa28LdmdmK6xhh4fF417NaOOHbqv_6jotgRLvecO3Kw6EORqvuWMmQoWK265ecy9Gk7KjzncJkLW87Hyjg717uw2xEKleMzOU6BxjfoliQnphZK1c6aqA7m4x1JaSUl6km_NCdglAUT_N-8mGRzlg3xIr9i0yMzs9mtEfpq4whA_95jDnmzorHlvbKin4rIclxeXIrvQKG6kmthyLYIRrkr9lR3d5_9iHQBawVjbp8j7KWMD6qadJONMCyUxlUdy9NatpzvBryOMEvORuSaw9TJDi2eaPCYGDalNdxaYhavdo6dPxcGbRKESJ6o8wpguExheVzD-giyruQq-bEIB-2Wwo5b355vLOr7qC3r4vxn1MXYDyBRMIXuUNZCcv5GD-ToQuc6TdQrLHOHghXPWeJz7GGPhEZrepDEJpoaaGytokyfuonHUud0E_3oAc331crzTY6ACpKYs5YB5NZVbapWMbaaDc3XOuqm22opflWILhqHj4U&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUUgBCI8zQPJ2uglPgWKpsZ_kBqitzu5aoH2SFW4-1fFdopF2qVcLxlgm98StbWEYbaoywTwOd12v2hLUcfkbV_4FH0-9Ha53Sxx-Jfa3o51m2yEu3XiwLOUhyf02shBLcKsdLqXVTe6y3IxI5tO1Hrk5SrDgmGlzjoInMDHbvEdj9pjtk4LnyTLeDbPurCh87BYalA11DtyZngaKI-d0PCy4VnUwhkwPT07lBy2e53QxJjvSpmYbxDfIsDwEbS62mNkUq7vijwKLR766f2q0ppZ7jfsLnQf8w4eZgu7dJt94MokoKNxEvUoqThsMCg6NpsRM1g10bEdb-ZMz4cHq3PTrfh93O6h00V_8fIaP9Rw8P-XmSXqQjKsP1dUNTg9oGgaOyGO4w1-SWevR3gdGxCtRC0Lx_fX48z55mH-a6shmmFQNSn1PMBWWxPoX3v&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUIbe-xs0fRv1xAelzmmKA6asIlTBpiAVwpP7C311v4D2IYmhcm9aTnxm2qRsBt89jROgNQSedykhf-BmTMh4MMI8Nmwqo1-ClfzLG8fu9NVT2NvSvMI-BwbrxVsLWGKo19vgrurF96mQwj2MCEJFCi7DuZ3Sml6bHnMLkb61BZqmoGKXKmXDOjLxCEXhZ6ojJtT9_CeqhRGwoXYdwQ1K9yyk4G8qyk6C1O1grKCcqdsSyj7OPol1SL-HSd4n4bH3Zc50YkRxfet7EtO7d09MLvC-aOfd2vOOBSD2yQgRn9GPj7xPvVQSOF3GRt8OCJT_s2Gt5jJsVYJ-Qzo9BRhIVCsiIz7NosadFIpDsJEuEwygy22wNdOorWrTEOtOF-9cAtD3Ghe8HRt0JJq_2mZdcMo1FF_HgNiZCJmgEElkQtLfadCbI17lkPhYL5vR9z&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "caretteofficiel",
    verified: true,
    google_rating: 4.3,
    description: "Installé sur la place du Trocadéro depuis 1927, le salon de thé Carette est une légende vivante du 16ème arrondissement. Sous ses arcades iconiques, dans un décor raffiné teinté de rose poudré et de dorures, se presse le Tout-Paris chic pour déguster les pâtisseries historiques de la maison. C'est le paradis absolu du « tea-time » à la française. Si les prix sont ceux de la Rive Droite mondaine, la qualité des produits justifie le déplacement. Un grand classique indéboulonnable.",
    insider_tip: "• C'est la queue le week-end, préférez y aller le matin en semaine ou le soir (ça ferme tard, c'est idéal pour un dessert post-dîner !).\n• Leur chocolat chaud à l'ancienne est épais et incroyablement régressif, c'est l'un des meilleurs de la capitale (et cher !).\n• Les mini-sandwichs viennois salés sont une madeleine de Proust pour beaucoup de Parisiens.\n• Assyez-vous en terrasse sous les arcades pour observer le balai incessant de la Place du Trocadéro.",
    expert_catchline: "Une institution parisienne mythique réputée pour son chocolat chaud et son Paris-Carette.",
    specials: {
        cuisine: ["Pâtisseries Françaises", "Paris-Carette", "Chocolat Chaud", "Club Sandwich"],
        drinks: ["Chocolat Chaud Épais", "Thés raffinés", "Café Crème"],
        must_eat: "Le Paris-Carette ou les fameux petits sandwichs ronds.",
        must_drink: "Le Chocolat Chaud à l'ancienne."
    }
};
