import { SurgicalPlace } from "../../../type-definition";

export const grappoli: SurgicalPlace = {
    id: "poi-grappoli",
    name: "I Grappoli",
    slug: "i-grappoli",
    category: "restaurant",
    subcategory: ["italien", "trattoria", "pizza", "terrasse"],
    location: {
        address: "22 Pl. Denfert-Rochereau",
        arrondissement: 14,
        lat: 48.8338697,
        lng: 2.3308772,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6, "B"],
        google_id: "ChIJu3t9ZLVx5kcRxSvcyGOmQm0"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 PM – 12:00 AM | Tuesday: 12:00 PM – 12:00 AM | Wednesday: 12:00 PM – 12:00 AM | Thursday: 12:00 PM – 12:00 AM | Friday: 12:00 PM – 12:00 AM | Saturday: 12:00 PM – 12:00 AM | Sunday: 12:00 PM – 12:00 AM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.igrappoli.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 7.00,
        coffee_price: 2.50,
        dish_price: 18.00, // MÉDIAN des pizzas & pasta
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Antipasti (Le partage à l'italienne)",
                items: [
                    { name: "Burrata des Pouilles & Tomates cerises", price_cents: 1350 },
                    { name: "Vitello Tonnato traditionnel", price_cents: 1600 },
                    { name: "Beignets de Mozzarella (Fritters)", price_cents: 1150 },
                    { name: "Planche de charcuterie transalpine", price_cents: 1900 },
                    { name: "Focaccia romarin & fleur de sel", price_cents: 600 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pizze au feu de bois",
                items: [
                    { name: "Pizze Grappoli (Parme, Roquette, Tomate, Mozza)", price_cents: 1850 },
                    { name: "Margherita di Buffala Classica", price_cents: 1450 },
                    { name: "Diavola (Salami piquant, N'duja)", price_cents: 1650 },
                    { name: "Tartufo (Crème de truffe, Champignons)", price_cents: 1950 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pasta Fresca & Secondi",
                items: [
                    { name: "Linguine à la Vongole (Palourdes)", price_cents: 2100 },
                    { name: "Spaghetti alla Carbonara (Guanciale)", price_cents: 1750 },
                    { name: "Penne alla Norma (Aubergines, Ricotta)", price_cents: 1600 },
                    { name: "Escalope de Veau Milanaise", price_cents: 2250 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci",
                items: [
                    { name: "Tiramisu della Nonna", price_cents: 850 },
                    { name: "Panna Cotta aux fruits rouges", price_cents: 750 },
                    { name: "Profiterole Géante au chocolat chaud", price_cents: 1000 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVL4z6JE6WLA-IZttdr1pMnjD0y2XIO7sxxKkVCtVRsXXLUiuSp0ao3474yHAsdbONrbj7ndFB2AyqRmgqgzmlzyqAOZwT3Ipt2_5oVdSvz0bkin1_3_umZkhOfN9EV0-nr_Gqc1cNklH58tjZh_J1_S2uPhvoyFpjIXJzcm4m3UIowxfGOb2eZCTZhtyh4LcnqurT22aTrZAa3Z56HpaXPujcMJQvIKZ2tg1Kuv8c4ClJN2EldfYngcKuxZkIsZK2J3jlZwnV1KyyWrDQ80wZXpgyMwFbD9jOgpTXOeBmM5w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUJbrX4Se5a7Rid8E3pcSSRmKzEXZk5zU5V88ySi_D6xRT15xfHjNMi4I_VADYiVFwIeCU0_GYrbTyo0ABJPf9z08kJIwAexhNaLLfpISwsU7WBhXsbpSLhM7iJFl5AyAO5V0Ulbvwn1qFxUIFj7FqSX0l5QmITZaf5RheBWpyYi5VxzJTdkoy64i0DsdwlF8jwUeUfyLw2hlyOBxGkWuvdVRt1CIzqoV-jYVkFlGqagBsIZtfEMCksAaucw415ZGzEF1NUJcntxIkyMWIBNzt8Yuq8FW4kM654jsMfeJsfzHfAOrbbx27BHzsYWqUFZgvOu1h8UUa7svzQJUKmD2pnVOKH3stapgwfDZlmeeyXryYTFEQMym68mR0DtRIpEa84G2cc29-adtEg2o91fzRT_H3S6icgIlSwDAED-dag1o7mCjpGG0dsPwQra6ag&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX8Iawkq_Vd_yhVPW3sYPla6PLOclg77c0k2A_Xed0VTAS3g6-v4R9cAwX-oEWSZOeyhvP3P5s4Ljr1yM9xA6wmWzRhlUyFRtV8twxkkoCpNnXfF2x6aFuiBz3GRRrrVmeH6BCd7ApDx3eaqJoYb7HcnnUF6fIcaIbXdakoBA974MxwOsmmBdrDGYjXyyNkBL6wdNuFAIFraq6nEpOZ31B5yx4AqIP9_vXM3q_QLfWP8qOiSTxyV_Au6FIswSKErmMkxqA7QAzSx9wEwTS4eWnpRgZZsb2eyKReNiLTNCuElPYe0KSQvjFapBpGh3hrspOqkCIDqFYQUaEVZ1onnAE6FNYFHeHCXFkgPbughddKI_HGzM-0hOrzW9CsTsYrhlNqEZbB1uQtyRF9GnnVpwjaSC7_63fZ-zyzJa26oGpvkc5sclAh-63g5DHwptoV&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "I Grappoli est l'adresse transalpine qui réchauffe la Place Denfert-Rochereau. Cette véritable trattoria de quartier brille par sa simplicité authentique et sa générosité. Avec sa grande terrasse ensoleillée, c'est le lieu idéal pour une immersion italienne, entre pizzas cuites au feu de bois et pâtes fraîches maison. L'ambiance y est vibrante, rappelant les déjeuners dominicaux en famille sous le soleil de Toscane.",
    insider_tip: "Leur terrasse est un véritable aimant à soleil, arrivez tôt aux beaux jours. Ne manquez pas les beignets de mozzarella en entrée, un plaisir régressif parfait avec un Spritz.",
    expert_catchline: "La trattoria ensoleillée et sa terrasse mythique à Denfert.",
    specials: {
        cuisine: ["Trattoria Italienne", "Pizza au feu de bois"],
        drinks: ["Vins de Toscane", "Spritz Classique"],
        must_eat: "La pizza Tripletta (homonyme piquant) ou les linguine alla Vongole.",
        must_drink: "Un verre de Chianti sélectionné dans leur belle cave transalpine."
    }
};
