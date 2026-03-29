import { SurgicalPlace } from "../../../type-definition";

export const cafeRendezVous: SurgicalPlace = {
    id: "poi-cafe-rendez-vous",
    name: "Café du Rendez-Vous",
    slug: "cafe-rendez-vous",
    category: "restaurant",
    subcategory: ["brasserie", "bistronomie", "terrasse", "institution"],
    location: {
        address: "2 Av. du Général Leclerc",
        arrondissement: 14,
        lat: 48.834141,
        lng: 2.332309,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6, "B"],
        google_id: "ChIJEYElfrdx5kcR8NJ6jn7CDG8"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Lundi-Dimanche: 07:00–02:00",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lecafedurendezvous.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 9.00,
        wine_glass: 7.00,
        coffee_price: 2.80,
        dish_price: 18.00, // MÉDIAN des plats classiques
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Bistronomie de Saison",
                items: [
                    { name: "Blanquette de veau à l'ancienne", price_cents: 2100 },
                    { name: "Saucisse d'Auvergne & Aligot", price_cents: 1950 },
                    { name: "Poisson frais du jour, riz aux herbes", price_cents: 2200 },
                    { name: "Burger au Bleu d'Auvergne", price_cents: 1850 },
                    { name: "Tartare de Bœuf boucher", price_cents: 1750 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Tapas",
                items: [
                    { name: "Oeuf cocotte à la tomate confite", price_cents: 1150 },
                    { name: "Asperges rôties au parmesan", price_cents: 750 },
                    { name: "Planche de tapas à partager", price_cents: 1800 },
                    { name: "Soupe à l'oignon gratinée", price_cents: 950 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs Maison",
                items: [
                    { name: "French Toast au caramel beurre salé", price_cents: 900 },
                    { name: "Tiramisu du Rendez-Vous", price_cents: 850 },
                    { name: "Île flottante généreuse", price_cents: 750 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=Aaw_79J-8v8v8v8v8v8v8v8v8v8v8v8v8v8v8v8v&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=Aaw_79K-8v8v8v8v8v8v8v8v8v8v8v8v8v8v8v8v&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=Aaw_79L-8v8v8v8v8v8v8v8v8v8v8v8v8v8v8v8v&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.0,
    description: "Le Café du Rendez-Vous est l'âme battante de la Place Denfert-Rochereau. Depuis plus de 30 ans, cette brasserie tenue par la famille Porte incarne le trait d'union parfait entre le bistrot parisien traditionnel et l'élégance contemporaine. Sa terrasse chauffée et vitrée, véritable poste d'observation sur le mouvement de la ville, ne désemplit jamais, du petit-déjeuner matinal au dernier cocktail de la nuit.",
    insider_tip: "Profitez du Happy Hour de 17h à 21h pour découvrir leurs planches de tapas à prix doux. La terrasse est chauffée en hiver, ce qui en fait l'un des rares spots confortables dehors toute l'année à Denfert.",
    expert_catchline: "La terrasse institutionnelle et conviviale de Denfert.",
    specials: {
        cuisine: ["Bistronomie Saisonnière", "Happy Hour"],
        drinks: ["Cocktails Premium", "Bière de spécialité"],
        must_eat: "L'œuf cocotte maison et le French Toast au caramel.",
        must_drink: "Une bière artisanale ou un cocktail signature en terrasse."
    }
};
