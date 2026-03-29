import { SurgicalPlace } from '../../../type-definition';

export const elComal: SurgicalPlace = {
    id: "poi-el-comal",
    name: "El Comal",
    slug: "el-comal",
    category: "restaurant",
    subcategory: ["mexican", "street-food", "tacos", "authentic"],
    location: {
        address: "55 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8622398,
        lng: 2.3799426,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJ51r69l1t5kcRJKEJFiwqS8g"
    },
    moods: {
        chill: 80,
        festif: 50,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Lun-Sam: 12:00–15:00, 19:00–22:00; Dim: 12:00–16:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/elcomalparis",
            label: "FACEBOOK"
        }
    },
    pricing: {
        avg_budget: 18,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 16.50, // 3 Tacos/Gorditas + buffer
        // Unité de Satiété (3 Tacos)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: El Comal 2025 Standard (Mexican)
            {
                category_type: "other",
                display_label: "Tacos (Maïs maison)",
                items: [
                    { name: "Taco Al Pastor", price_cents: 450, description: "Porc mariné, ananas, oignons, coriandre." },
                    { name: "Taco Carnitas", price_cents: 450, description: "Porc confit, la tradition de Michoacán." },
                    { name: "Taco Tinga de Pollo", price_cents: 450, description: "Poulet effiloché à la tomate et piment chipotle." },
                    { name: "Taco Veggie (Champignons/Fromage)", price_cents: 450 }
                ]
            },
            {
                category_type: "other",
                display_label: "Spécialités El Comal",
                items: [
                    { name: "Queka (Grande Quesadilla)", price_cents: 1300, description: "Tortilla de blé, fromage fondu, garniture au choix." },
                    { name: "Burrito Signature", price_cents: 1250 },
                    { name: "Gringa", price_cents: 1350, description: "Tacos Al Pastor avec fromage fondu dans une tortilla de blé." }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner (Semaine)",
                items: [
                    { name: "Menu 3 Tacos + Boisson", price_cents: 1350 },
                    { name: "Menu Burrito/Queka + Boisson", price_cents: 1450 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons Typiques",
                items: [
                    { name: "Aqua de Jamaica (Hibiscus)", price_cents: 400 },
                    { name: "Jarritos (plusieurs goûts)", price_cents: 450 },
                    { name: "Bière Corona / Modelo", price_cents: 550 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUguplJfBiKHk8LH68KzGrhdD39tTNeMyPNCseXHXWO-fGKp96nSsQr5ZOwJOY20k5Uco99SflcoS-6DB2Bdw0pb9y96PrYnNudhkPyXwPTSOdCdy2uoibBfb9hQRnEza-e4V-O-qI5Xqr1GIASXiNxiGddRyqIKGfwavB38RteVVZyCFvAAxYgegW-hk3G1s9LelyRZaiKT4sYo9U9UWALX6j4Mij_80d2oqOJd3RNSrmnjIW7uB5ewlfySTWF45NiNQId2b_evEgyYq-0fkJog51u9ovKJ1FQfJXMf7yXdA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU1vwdaGiuc0qdUgSAukNSkFkDmsqjk06DSWwCUoaA9F4i1riFvYrgjc8Y3xNlFbYmyhEAl7lj1nBZ83fAxyZHbJ17twfMtfqD4qmTzOukEPZ9QJhQfVyabZCQI4GLeYQ-HMj7yO1-lcz7xQLNhx5FBfZxf8SgDOj1c1rNfn1ouXRPqc6NDn8stgkKz66SUcQx2zl_aOONGPo_lt74M4uysrIIEm-NXGAzZ3fa2ZyTk-oGRtVuk9gQvgPy93uQOMcnpKDhdK9UVgALqNl96dU41OoE_9hqcyMrqo6d6VjE1TA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.8,
    description: "Élu par beaucoup comme le restaurant mexicain le plus authentique du quartier. Chez El Comal, pas de chichis : les tortillas de maïs sont faites maison au fur et à mesure, et les saveurs nous transportent directement à Mexico. Mention spéciale pour la Tinga de Pollo et l'accueil toujours souriant de l'équipe. Un petit bout de Mexique sur la rue Saint-Maur.",
    insider_tip: "Ne passez pas à côté de l'Aqua de Jamaica maison, elle est parfaitement dosée et accompagne divinement les tacos pimentés.",
    expert_catchline: "L'authenticité mexicaine brute et savoureuse rue Saint-Maur.",
    specials: {
        cuisine: ["Tacos artisanaux", "Tortillas de maïs maison", "Spécialités mexicaines"],
        drinks: ["Jarritos", "Hibiscus Water", "Mexican Beers"],
        must_eat: "Les Tacos Al Pastor (ananas/porc marinée).",
        must_drink: "L'Aqua de Jamaica maison."
    }
};
