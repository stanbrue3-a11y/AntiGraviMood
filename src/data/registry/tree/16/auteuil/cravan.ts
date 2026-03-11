import { SurgicalPlace } from '../../../type-definition';

export const cravan: SurgicalPlace = {
    id: "poi-cravan",
    name: "Cravan",
    slug: "cravan",
    category: "bar",
    subcategory: ["cocktails", "architectural", "pepite", "historique", "chill"],
    location: {
        address: "17 Rue Jean de la Fontaine, 75016 Paris",
        arrondissement: 16,
        lat: 48.8516467, // EXACT GPS
        lng: 2.2737768,  // EXACT GPS
        nearest_metro: "Jasmin / Ranelagh",
        metro_lines: [9],
        google_id: "ChIJb7E-xzdv5kcRk4Xj0fS_L7w"
    },
    moods: {
        chill: 85,
        festif: 15,
        culturel: 40 // Hector Guimard architecture
    },
    practical: {
        // VERIFIED: Google Maps API
        opening_hours_raw: "Lundi: Fermé | Mardi: Fermé | Mercredi: 18:00–01:00 | Jeudi: 18:00–01:00 | Vendredi: 18:00–01:00 | Samedi: 18:00–01:00 | Dimanche: 18:00–01:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: false,
        wifi: false
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: undefined, // Bar à cocktails pur
        cocktail_price: 15.00, // MÉDIAN des Cocktails
        wine_glass: 9.00,
        dish_price: 18.00, // Petits plats / Sandwich
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Les Cocktails (Mixologie Pure)",
                items: [
                    { name: "Mina Loy (Gin, absinthe, citron)", price: "15.00€" },
                    { name: "Yellow Cocktail (Gentiane, gin, citron)", price: "14.00€" },
                    { name: "Old Fashioned Parfait", price: "16.00€" },
                    { name: "Dry Martini Extrême", price: "15.00€" }
                ]
            },
            {
                category: "Pour Éponger (Petits Plats & Tapas)",
                items: [
                    { name: "Le Croque-Madame signature", price: "18.00€" },
                    { name: "Saucisson artisanal", price: "11.00€" },
                    { name: "Gougères au fromage", price: "9.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWZj-GxgoZleiqIx-FHKH-WMFeOSMPqNc-0vK1CCe8z7LW9fhbVT6dB80avM8x2S_QfgH79wkHgoEDcg3Ck1yMQxVCGkUaXiz3BTLp63kKDUm74urSS93u9Fm3CVzrD9HoLu0QfKDd9nH6v1uj6eucxAC05c7YRz5XvEY71TVCOltgdjljqqlQ0M7lo4WTfo6tKZkQkN3cS1lYgoVkD5DeoKs_SY0QYLf2_7cjc8uVqITIndnjCHELo0vYcU-6s8yVA3wVun2eYhml34doqDHPrHeSHkj_QNy3NcCNzY47oz9zjwDLUx3sAkhhaYYO6x_wTc1j7X0WJ0PzJcST9EY7AAe5fV2empitbKFCLqwqptOpYGCy5WyRXYpVt7IMpmr1W9o4mXBcNXT5F8IsnajFLaCO_nfQtN7_SsjS4_tvOD-ZVcLbVjXd668IFOYbTPp9GsYn427V-eu7KgScRl69HWk0OfV0VMrA5lIte841TD0gLsyG_TkgU52Vwb41r_2sVwY9HPCzneGJLnupQpyb70ebd8uwLuX3p2PCfR8EK_V2CY6QWXYoJtw8Llckhj-jeul_P&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV0DNxfRkhqW4ytqXpbXu1QLo1w_LIQC3LttUCqhhk9rcq_OscmhhFyWC0BdfwhUca3-jvGo1jLYGFGU3cFnYSguw8EATUwT7bSK4Fmxcz394rgZpwOAzcYdkLx6CvxigbuafjsvOSF5xwKCKa_UqFMpRCPnoXGFGll6Ed2sgObNjp2y2SaQmH6DEWIA56kCdcMqkS9Ul_YhnbokIjzS3iJRhwUp075szf0VGfsCrW_7_JKQydioX3rqarQM9DRl8_TmHbi1rI5j9wsjucIQ3bbfcCHwh8pvs2bZqW4o0snbfJY_G_LRZ1lnfuanOj2XGA89wFizIhFETHWuo59cIcFgUV0EqcpHw8YyfGAVaICn8zm9XSTkuoXgB1JKR7-IEOuyWArMqxsAMvTN7aIYgzzYMqocP1fCF84n0INAWLEibQE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWF4J4-ZfsFuYUhPucUXErrdomQ2lw8nhQ1cWY5Xvb2AO8mKuQjrJI4Rj9_CRo2aWeu7b7i5uURDZ6GH0D6Xvnwrz_D6bJSJlHzoH42HhCu9P9LlKy6SdBoMwxRHifk5lw3zNHynadUo7DjteXoBREQ8ORzifxcmAPo_d4g1a2a1pkHP1fHsFS21pTg_Goub51m-o1GCDH3qoJa6z6NnAFl-tutqqDYggeCZN5que9Pd27B8Owj43E9ScqsSZz4jizU9UporkhoFD5dpB_2ezuq96xW8ln3WgXiotYDX8Ap9N99OD-BJ0OhPqaPG4CVyulgHXih5clMogEH-LW4vS5CygL8r1R8pbuzCMsXDtOYUSm7bDVlZ7wDmFt7eN1S3ZmCjJXxWQnxHubC5Z5l_SjCWpWkCRqIe8NZB8nxGxo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "cravanparis",
    verified: true,
    google_rating: 4.6,
    description: "Niché dans le très bourgeois village d'Auteuil, Cravan est une anomalie sublime. Ce minuscule café-bar est classé monument historique pour son incroyable façade et son comptoir Art Nouveau signés Hector Guimard (l'architecte des bouches de métro parisiennes). Repris par le génial Franck Audoux (ex-Chateaubriand), l'endroit sert désormais des cocktails d'une précision diabolique dans des verres cristallins, accompagnés d'un croque-madame devenu culte. L'anti-bling absolu, pour esthètes et puristes.",
    insider_tip: "• C'est minuscule : venez tôt à l'ouverture (18h) pour réussir à vous asseoir.\n• Oubliez la bière, ici on est dans la haute couture du cocktail sec. Laissez-vous guider par les barmans en tablier blanc.\n• L'architecture à elle seule vaut le détour, le comptoir en bois courbé est une merveille.\n• Le croque-madame est une légende urbaine de l'Ouest parisien, à commander absolument avec un Dry Martini.",
    expert_catchline: "Cocktails haute couture dans un chef-d'œuvre de l'Art Nouveau signé Guimard.",
    specials: {
        cuisine: ["Croque-Madame", "Saucisson", "Tapas affinés"],
        drinks: ["Dry Martini", "Mina Loy", "Cocktails Secs", "Old Fashioned"],
        must_eat: "Le mythique Croque-Madame.",
        must_drink: "Le Mina Loy (absinthe et gin) ou un véritable Dry Martini."
    }
};
