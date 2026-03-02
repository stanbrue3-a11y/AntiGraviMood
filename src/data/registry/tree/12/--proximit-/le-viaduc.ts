import { SurgicalPlace } from '../../../../type-definition';

export const le_viaduc: SurgicalPlace = {
    id: "poi-le-viaduc",
    name: "Le Viaduc",
    slug: "le-viaduc",
    category: "restaurant",
    subcategory: ["bar", "terrasse", "cafe", "restaurant", "cocktail-bar", "brasserie"],
    verified: true,
    google_rating: 4.5,
    instagram_handle: "leviaduc_",
    location: {
        address: "43 Avenue Daumesnil",
        arrondissement: 12,
        lat: 48.8475308,
        lng: 2.3753156,
        nearest_metro: "Gare de Lyon",
        metro_lines: [1, 14, "A", "D"],
        google_id: "ChIJAQGzBAVy5kcR-dZpB6KhnhA"
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        opening_hours_raw: "Lundi: 08:00–02:00\nMardi: 08:00–02:00\nMercredi: 08:00–02:00\nJeudi: 08:00–02:00\nVendredi: 08:00–02:00\nSamedi: 08:00–02:00\nDimanche: 08:00–02:00\nService continu 11h30-23h30",
        main_action: {
            type: "site",
            url: "https://leviaducdaumesnil.com/",
            label: "SITE WEB"
        },
        cuisine_type: "Brasserie Française",
        wifi: true,
        terrace: true
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        // SOURCE: MisterGoodBeer + Google Reviews 2024/2025
        pint_price: 7,
        cocktail_price: 10,
        wine_glass: 6,
        coffee_price: 2.5,
        dish_price: 16,
        hh_pint: 3.5,
        hh_cocktail: 6,
        hh_wine: 4,
        hh_time: "16h00-02h00", // SOURCE: Verified daily 16h-2h
        menu_items: [
            {
                category: "Le Bar (Happy Hour 16h-02h)",
                items: [
                    { name: "Pinte de Blonde (50cl)", price: "3.50€", description: "Le prix de référence imbattable du quartier" },
                    { name: "Le Litron de Blonde (1L)", price: "6.50€", description: "Pour les grandes soifs" },
                    { name: "Cocktail Classique HH", price: "6€", description: "Mojito, Spritz, Caïpi" },
                    { name: "Cocktail Signature HH", price: "8€" },
                    { name: "Verre de Vin HH", price: "4€" },
                    { name: "Soft / Jus de fruits HH", price: "3.50€" }
                ]
            },
            {
                category: "Bières & Boissons (Hors HH)",
                items: [
                    { name: "Bière Charles Quint (50cl)", price: "7€" },
                    { name: "Bière Krombacher (50cl)", price: "7€" },
                    { name: "Café artisanal Espresso", price: "2.50€" },
                    { name: "Café Crème", price: "5€" },
                    { name: "Coca-Cola / Perrier", price: "4.50€" },
                    { name: "Sirop à l'eau", price: "3€" }
                ]
            },
            {
                category: "Entrées & Planches",
                items: [
                    { name: "Foie Gras maison sur toast, pâte de coing", price: "15€" },
                    { name: "Planche Mixte (Fromage & Charcuterie)", price: "16€" },
                    { name: "Planche de Fromages Affinés", price: "14€" },
                    { name: "Planche de Charcuteries fines", price: "14€" },
                    { name: "Frites maison (portion)", price: "6€" },
                    { name: "Ardoise de Tapas du moment", price: "12€" }
                ]
            },
            {
                category: "Plats Brasserie & Pizzas",
                items: [
                    { name: "Belle Entrecôte (250g) & frites maison", price: "22€" },
                    { name: "Filet de Bar, purée truffe & oignons frits", price: "18.50€" },
                    { name: "Le Burger du Viaduc (Classic)", price: "16€" },
                    { name: "Tagliatelles Carbonara à l'italienne", price: "13€" },
                    { name: "Salade Chèvre Chaud", price: "14€" },
                    { name: "Tartare de Boeuf ibérique (Queso Manchego)", price: "17€" },
                    { name: "Pizza Margherita", price: "13€" },
                    { name: "Pizza Regina", price: "15€" },
                    { name: "Pizza 4 Fromages", price: "16€" },
                    { name: "Salade César", price: "15€" },
                    { name: "Tartare de Saumon frais", price: "18€" },
                    { name: "Confit de Canard du Sud-Ouest", price: "19€" }
                ]
            },
            {
                category: "Desserts & Douceurs",
                items: [
                    { name: "Fondant au chocolat cœur coulant", price: "8€" },
                    { name: "Tiramisu Maison", price: "7.50€" },
                    { name: "Île Flottante crème anglaise", price: "7€" },
                    { name: "Café Gourmand (3 douceurs)", price: "9€" }
                ]
            }
        ],
        smart_tip: "Pinte à 3.50€ et Litre à 6.50€ absolument TOUS LES JOURS de 16h à 02h du matin. C'est l'un des meilleurs deals de Paris."
    },
    moods: { chill: 80, festif: 60, culturel: 20 },
    description: "Niché sous les majestueuses arcades de briques rouges de la Coulée Verte (Viaduc des Arts), Le Viaduc est une brasserie monumentale qui bat au rythme du quartier. Avec ses volumes impressionnants et sa décoration industrielle soignée, l'établissement offre un cadre unique pour un déjeuner français traditionnel ou un afterwork prolongé sur sa vaste terrasse plein sud.",
    expert_catchline: "Le QG culte de la Coulée Verte : pinte à 3.50€ et terrasse monumentale jusqu'à 2h.",
    insider_tip: "La pinte à 3.50€ (ou le litre à 6.50€) est servie jusqu'à 2h du matin, ce qui est rarissime à Paris. La terrasse est chauffée en hiver. Pour manger, le Tartare de Boeuf au Manchego est une superbe variante du classique.",
    specials: {
        cuisine: ["Française", "Brasserie", "Fait Maison", "Pizzas"],
        drinks: ["Pinte (HH 3.50€)", "Litre de bière (6.50€)", "Cocktails Signature"],
        must_eat: "L'entrecôte frites maison ou le burger Le Viaduc. En dessert, le tiramisu maison est très réussi.",
        expert_catchline: "Terrasse plein sud, prix imbattables et ambiance brasserie sous les voûtes."
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVjDypsoyQc5jY7olpHhiMTCPXANXgkyQj4U2_Qrw9rEbgT28e_qV2IlhlMGtjUcGJVIxl0VeVBXU1TCivS0dNatct5xTsG9lDiMboQz5-i-X4P_7wdrnWCm1AN9C8hR7K9FZQTDLhKI7UBdw4E-Lhg3JMCTKzvtsXfceRDriL7ZUZjup_uokrvxVghz7KwqfGx0SyEbJWQdQ-uF0bJyxqhcsls7Adqfph4IbzU0rd5qU3YZwe4Y3kj67Z05ZFj8RoufDsqRBiiRkwu6jzV7Pp2yFdIicx8eB2oUoWkmx1lJA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWRFiuxBhLXJU3Mwqb2aV77bVflpazFMj4Pua7L3YT-xXZZEiaak-kT50IFDxwUxPa6ECj7gCyKrqHtlIN9KTN1vrc4ELdjsr33Y5veSK6CSO5jVGMcC0aRd0FQ4cwE9V9R-lj5d_5AFljfvFhEsCdCDQFVk03f8y8NoIlBKqxbLHOlOO2uoEhNcRTmnI7nsUVjTII4z3_ASmNj2rUgsNOdupOg9guE8CIdowMzryez7xX7b9TtrIDF2AaID6fClCkWhYViIthHfGmx500qHw5Y2wqgiPPsvyOUnTV243H_rRPB-rYU7P85ek2evMlS1AcYPcEfx-kO-UpCP_9QLzFtX-gu2RP_mYYEuPmUoz9glAazo8Nexmy8AHmq9y45Ou8LUiPGULQokTp8g8-GaXTkmAM4k51xorYSOdUg8A4R8nw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWlqiBG6ZRH1dHM1bNjNnO5hMuEyAosXr_mzrCtN6qY8jmlCspt_b9qUf4y1wYpA5CcsyJ9DAqBxZuA4JVT5NuDCTq4wIQwADNMMO1OuiTzkSccltj97522LVm5bM7XgdF_ZcuxyaEJdCtJGjgCMuSKjE3w0c4pURxGJmKKuzk0ewOO-3xCs_v5m7nQrXue1Eb0mSnFk6v2AARV-DvQ4_U_E7WIkAQqgjqzYlCSiw-Fjxso6bTXRvjj0auV14Ne0O48tQIZnSnZBKgrbi_T6KZVeiZpmOtBQn4uCSKMliYDKlllEC4lsw9temF1gKRXosqmyEP-oUdlGeG9q7QPoyguke-6kq3WwAnaQNh8uFHXkm3H2S2pMmNDKAhqyTk7nMWNAsFLE78G3MFxadzJqttFeW9sUAGxfK79cXO8XXDw7AcA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV_7dIq2svrYDETWwlEJMVeurk9tDi6-KL_hR6y9VQD4xGu6OWS7DswQKI0136l4rRS3Hvm8MYtge9-lH4KllvQ5rby9fopRRHOqemFlcoIRe-mwEPEioSFD-vpbNdvQ5bhhJH3jYig3u1n4lRSljD4A22T_12euRR7xFWpxc0L8KcNU4PpmXg5Fno27hNYpGkJ1qeWHXypMJXhfrhD_ek0mC9LgNq2_32D2MVLlyHRRZkNn7Ty5lTLUDcUXRy2zKJmKzsA6TreJcQWFM1P0ABrJU3kulpgX5VnXKA-6m2H_HxcfS5e5P0kPh0m5C1OUi7tXEWjbSq6YJDY201kQ4YbdbfsBMAwpSMMFUb7Q-E7ei-Jy_Rg3K_eiE7tSFjiq7H_osqFNO0J7GMMoyLDtciHskwDm17ZClZ-EzoYJ2O9otcE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUmRRKNrLZ6rrUOOnvNoX7EZriNeNWljGrLqRHKLlWiD3B-IRVI0IxuGXyoAwJ4LxMrR2o-57T9R2Y1fBnMi1eFLHlqL0gy1qCjX7H33uWMiamp8v1EiS0jZgpBz5-Z8SNBIiHluCjnXVV7AVkU1YeJ7-wnoR1Xz0uLs4gTW9_stU9WSQvMLoH7VcCUj_rSwrKLkKQnX3msd5Epmvxk6LoR3ytbmKFx6FmnXYii2taPzHiGWYLZYkRFlLMU5vspIZFlVEvcSUPwygEKeS3isUcISsZAt9p-phZ7tiaSiKeEhA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVsxs_3QjW_W_iGdu7vja1q18CcX2IeYoDAzsI0EUdw7SnpQBGMSROS56PD9iRHc8_ogoJrWlr0Zb3SNt_nMcV43Wd9tnZbmI7b-DqQZsK8VaI1ZK2zj_iGgB6i4CF52oeJPmo5PA8eh5sPrZaIXB4dWlM65DD1fTOe8hkI4xpdV32YTO3x0xP25vaZpHk2HCMbP7IKQngEUz5JMyU03sc-gLg3wyOrTFclX06i_UruD8sxWbxRWRv45-C5CaBKWCblh9IOFkZM03yuX0LpdLDh_KwGla58UlvJW_VTPZAnfw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    source: "research_ai"
};
