import { SurgicalPlace } from "../../../type-definition";

export const la_manifattura: SurgicalPlace = {
    id: "poi-la-manifattura",
    name: "La Manifattura",
    slug: "la-manifattura",
    category: "restaurant",
    subcategory: ["italien", "pizzeria", "napolitain", "vins italiens", "restaurant"],
    location: {
        address: "106 Boulevard du Montparnasse, 75014 Paris",
        arrondissement: 14,
        lat: 48.8421114,
        lng: 2.3285434,
        nearest_metro: "Vavin",
        metro_lines: [4],
        google_id: "ChIJI6zZEPNx5kcRt4SwvVs2WV4"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:30, 19:00–23:00 | Mardi: 12:00–14:30, 19:00–23:00 | Mercredi: 12:00–14:30, 19:00–23:00 | Jeudi: 12:00–14:30, 19:00–23:00 | Vendredi: 12:00–14:30, 19:00–23:00 | Samedi: 12:00–14:30, 19:00–23:00 | Dimanche: 12:00–14:30, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lamanifattura-paris.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 6.50,
        coffee_price: 2.00,
        dish_price: 19.00, // MÉDIAN des Pizzas (12.00€ - 25.00€)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Pizzas Traditionnelles (Napoletana)",
                items: [
                    { name: "Margherita (Tomate, mozzarella di bufala, basilic)", price_cents: 1200 },
                    { name: "Bufala 'La vraie'", price_cents: 1600 },
                    { name: "Regina (Jambon cuit, champignons)", price_cents: 1800 },
                    { name: "Diavola 'piccante'", price_cents: 1800 },
                    { name: "Burratissima (Tomate, burrata fraîche, basilic)", price_cents: 1900 },
                    { name: "La Manifattura (Mozza fior di latte, gorgonzola, noix, miel)", price_cents: 2000 },
                    { name: "Quattro Formaggi (4 Fromages italiens)", price_cents: 1800 },
                    { name: "Calzone Classico", price_cents: 1700 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas Gourmandes (Signatures)",
                items: [
                    { name: "C.P.2019 'Championne de Paris 2019'", price_cents: 2500, description: "La pizza primée, ingrédients d'exception." },
                    { name: "Tartufo & Parma (Crème de truffe, jambon de Parme)", price_cents: 2500 },
                    { name: "Tricolore (Pesto de basilic, di bufala, jambon di Parma, burrata)", price_cents: 2500 },
                    { name: "Guagliò (Bresaola de Wagyu, pecorino, roquette)", price_cents: 2500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Antipasti & Pasta Fresca",
                items: [
                    { name: "Burratina des Pouilles (125g)", price_cents: 1000 },
                    { name: "Stracciatella fumée au bois", price_cents: 1200 },
                    { name: "Linguine Sciue Sciue (Tomates fraîches, ail, basilic)", price_cents: 1200 },
                    { name: "Authentica Carbonara (Guanciale, pecorino, jaune d'oeuf)", price_cents: 1800 },
                    { name: "Gnocchi alla Sorrentina (Four à bois)", price_cents: 1500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci Artigianali",
                items: [
                    { name: "Tiramisu Classico della Casa", price_cents: 900 },
                    { name: "Baba napolitain au Limoncello", price_cents: 900 },
                    { name: "Profiteroles à l'italienne (Chocolat chaud)", price_cents: 900 },
                    { name: "Panna Cotta aux fruits rouges", price_cents: 800 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV6pbJA8qQr0NSKhwI53RJNdgI6Av7xBNvuGvsvinW0QYtDJpa92Fn04IFV39g71m1n70IYPGYaWhCS6H7ok_p9ZQl9frdOEQOlzhE-DUMFI4VO0W7UJ64_c8zY5LzfgEBn_wTxR_HCNwuwZpyGAC8pbnzD115WFqG0b7yVPtTX3pfEIvI_itY235PYeUuZzA54d0A3FTSf3zkL9qjXIeuz7gna1TWScEySa71AzZqeii80gtQKMTxSHCgNjDX8pncaYeZpajdhda1W_acco87AUijBMNnkGtLqA4FPAv87qA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW5atJ4K0VmZSduRGsSvwZCKEYbff-lR68Ue5n8z5K7HDGoPiDeeoaYKR2BfNfrxh5Lhb-o_sXv9BtCbz85fJKBglybaEV3VrAhM-0Dxm02OgETC9pmNKmV_dIkGSV47PQV7-7Gqvh7eQxGscAGu6ChfXeO61wpH-6uzHX_aVoLiTL_lgHLUWSxn3X8dhPP-Swy3XJ7apsuV45mF-18s12_XV6ehTkxTZqmC7Ej3EJDFnXQ8vo8KqxTDEjF4L7paz9PKbVkNqqRJWCkEI4A-Nsau-U0Lu0nqWw0OhspAWkLMw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXfmVNwDS2IJRNow3fvpjWm_fB-1ojLEyOoLtgp7Jy4dXYXeB4D3EnEEDFAqQRQ470nHQ8YSlQPkfhqlzCjLZkjg0WuFW8JYwfiQcJfs211WAGPyQCi9MXEdKERiMqS5KAiOjCYbQchOlcPF6EiIVI6LT9NrNncN1qgpPnhcKQTSvpzqSkICKzSkB1x6XtfzZBaILEXPqYDKergMDmQ6CBsK4G5rc6BE0LsNC6IKP8h7520e48z62O3LrKnI0u6owZL5cLUjuKlOHjUM4sBGy-HEBmnNCor2hLlW2n535UBj8TBGMzm-ZogBL4eac_o_sjhZ4YHFyMvE0Nekj-dRsaeESk_mu_l191rsvPsw7YYuWmowUqVf-sav_fO0q942vXFYbQwYF64aIQqbdZtXMq07H38PZkTOvnuyGAgd3aP8dmHOWB9XuYhH_jA9g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.3,
    description: "Championne de la pizza à Paris, La Manifattura est une escale incontournable sur le boulevard du Montparnasse pour les amateurs de pâte napolitaine d'exception. Le secret réside dans une fermentation longue du pâton et des produits importés directement de petits producteurs italiens. L'ambiance y est vivante, avec le four à bois en vedette et un service qui chante l'Italie.",
    insider_tip: "Demandez la pizza 'C.P.2019', celle qui a remporté le titre de championne de Paris. Pour le dessert, le Baba au Limoncello est une rareté qu'il faut absolument goûter ici.",
    expert_catchline: "L'excellence napolitaine primée : championne de Paris 2019 et sourcing transalpin d'exception.",
    specials: {
        cuisine: ["Pizza Napoletana", "Four à bois", "Sourcing italien"],
        drinks: ["Vins italiens de caractère", "Limoncello artisanal"],
        must_eat: "La Pizza C.P.2019 et le Tiramisu Classico.",
        must_drink: "Un Spritz classique ou un vin rouge des Pouilles."
    }
};
