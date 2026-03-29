import { SurgicalPlace } from "../../../type-definition";

export const entrepot: SurgicalPlace = {
    id: "poi-entrepot",
    name: "L’Entrepôt",
    slug: "l-entrepot",
    category: "restaurant",
    subcategory: ["bistrot", "culturel", "jardin", "cinema"],
    location: {
        address: "7 Rue Francis de Pressensé",
        arrondissement: 14,
        lat: 48.8339708,
        lng: 2.3166648,
        nearest_metro: "Pernety",
        metro_lines: [13],
        google_id: "ChIJIwFfsktw5kcR7QCCSLLlDwY"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:30, 20:00–22:30 | Mardi: 12:00–14:30, 20:00–22:30 | Mercredi: 12:00–14:30, 20:00–22:30 | Jeudi: 12:00–14:30, 20:00–22:30 | Vendredi: 12:00–14:30, 20:00–22:45 | Samedi: 12:00–16:00, 20:00–22:45 | Dimanche: 12:00–16:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.lentrepot.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 6.50,
        coffee_price: 2.50,
        dish_price: 21.00, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de Saison",
                items: [
                    { name: "Pavé de saumon rôti, purée de panais", price_cents: 2400 },
                    { name: "Risotto aux champignons & truffe", price_cents: 2000 },
                    { name: "Suprême de volaille fermière", price_cents: 2250 },
                    { name: "Burger de L'Entrepôt", price_cents: 1950 },
                    { name: "Tataki de bœuf au sésame", price_cents: 2300 },
                    { name: "Pennes à l'arrabbiata & burrata", price_cents: 1850 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Tapas",
                items: [
                    { name: "Os à moelle au sel de Guérande", price_cents: 1200 },
                    { name: "Salade d'écrevisses au pesto", price_cents: 1450 },
                    { name: "Burrata crémeuse", price_cents: 1400 },
                    { name: "Accras de morue (les 6 pièces)", price_cents: 1000 },
                    { name: "Planche de charcuterie ibérique", price_cents: 1800 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Brunch",
                items: [
                    { name: "Tiramisu Nutella-Spéculoos", price_cents: 950 },
                    { name: "Mousse au chocolat noir 70%", price_cents: 900 },
                    { name: "Brunch Complet (Dimanche)", price_cents: 3200 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUbQ2ejPmGC16ejAnEKyO0yzIkqsb73xhYb76QbFEslyf6p0x0QGLWTq2AT8MT8cEeO3yYHsrvyzzZXrN_5z-CgPw7BVzXZXTMlO-PfDL5QFxbtSWfImxvegHaU2-GiySqvdXLz1VEB8_HIlh5acnO_ds7z9RdSE4CQMqsVFxX4B7Dx8hvTMuzj7lw1FLQubXWX0JmvWowFGF4l4-P7TUxxQGPFAtotFVmir-QwX87B6mtJpHbnPAoIiY8Yh8CDQmkhbrfEWJAWt4Uwx8zVlJzp21HUPgIY0aWErdwfDDYMNjfHQCcAV6fK19d7XL0o-BMFb-_tFipmqCx-WNxnkgmeig02IEZwmRbGIPBvPSE8ipNeVIQGH5jR275QRHBjDm7D0AqpCGjQZbhr2Mkxv4iyJKyy0zxI7CG8aEpHgMQkPK9G&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVxN2QaCP2qDRs1a4JMj6jSn1c0jmQ2vEsLj8SGURBDHOwaPAmh91-NXfej2izb9oRHh1CiP4SeEeIgUzIX8Nwzz00-IeqcwOET8I7P_Wbd23Sj8Wid1OcCGU-mnuFC7jyYIypeeblppB04P0JrBMym2CJOqVpxfHhNEuzU6VkKTVpIn0dK10ja1F_483KRlQIjOTUJhGQvWrPmYhZ_Szrki9jn1BCqtzOjF1QaOmlhn2nOhnypGE31dyrgaXGy-FfEFUqCRaSv8QWRpizC77LS2eRhYZbGP94he70CvHA4jseQ6zNaUW015CcQkvyUCNcbc-uF5nSz_T6df1px4K0Cd_UGn2Us4awV58ITSkWQcDZBO0UV1z1bpnEdNcB_UXjIatZ16_9DLMHOEI07pEVmW2g_qJS-egUi3OJEysbTXQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXoXouOmL7sq44bB54J9hQVGFtyO0SXcY5AAu1LARAfUKZXL_yiKbbiPqafVCk0uZO95I-Kf_kxLFuhq9Sq6tFV57SRM8oQKRVOaKNZEYVyWB8PH6rn8QEWtKKMkvusCc7W0nnb_YcuJJCchu14osPWwI6F9hwynQ_g8c49lH1ZW_QMNu7yVGfKBpxl_7tC_SR6GMgnWGxQP9a4UxAO5EjKlbOZL_VntJTftw_odr4TqbFnp1f0bLT5XOrhW73CXJgNqXsfGo0Skcxe7evsfnjf5Sa30FGQPCQ0wJsdLgtOc21f7LhsuU5L3K4a_jDCBMChWStUCtCvjWE0gOSaGCUjxe-bimlFU4aFn1uUB56hIyqLvd0j7l69wkdil2wMVUw0BT1b4pi8tv1MkUzTNEjlf4AeyJWUuCHEC-1PT4w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.2,
    description: "Fondé en 1975 par Frédéric Mitterrand dans une ancienne imprimerie, L'Entrepôt est une véritable 'biosphère' culturelle. Ce lieu hybride unique à Paris réunit trois salles de cinéma Art et Essai, une galerie d'exposition, une salle de concert jazz et un restaurant niché sous une vaste verrière. Un havre de paix artistique où l'on vient aussi bien pour un film indépendant que pour une cuisine de saison dégustée dans son jardin secret, loin du tumulte urbain.",
    insider_tip: "Ne manquez pas les séances 'Ciné-Bébé' pour les parents ou les concerts Lindy-Hop. La terrasse chauffée, sous serres en hiver, est un pur moment de magie toute l'année.",
    expert_catchline: "L'institution hybride du 14ème : cinéma, jazz et jardin d'hiver.",
    specials: {
        cuisine: ["Bistronomie de saison", "Brunch dominical"],
        drinks: ["Vins naturels", "Cocktails classiques"],
        must_eat: "L'os à moelle au sel de Guérande et le Tiramisu Nutella-Spéculoos.",
        must_drink: "Un verre de vin rouge naturel sélectionné par Marie-Sophie Séba."
    }
};
