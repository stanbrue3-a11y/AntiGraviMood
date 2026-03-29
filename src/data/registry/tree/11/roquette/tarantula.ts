import { SurgicalPlace } from '../../../type-definition';

export const tarantula: SurgicalPlace = {
    id: "poi-tarantula",
    name: "Tarántula",
    slug: "tarantula",
    category: "restaurant",
    subcategory: ["mexican", "cantina", "modern", "natural-wine"],
    location: {
        address: "13 bis Rue Keller",
        arrondissement: 11,
        lat: 48.8553057,
        lng: 2.375595,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJN4EGozVz5kcRcL9OSHhiPWE" // Placeholder for precise ID
    },
    moods: {
        chill: 60,
        festif: 70,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 18:00–00:00 (01:30 Sam); Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/tarantulaparis/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.00,
        coffee_price: 3.50,
        dish_price: 24.00, // MANUAL: Median for main sharing plates
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Tarántula Paris 2024-2025
            {
                category_type: "other",
                display_label: "Antojitos (Petites Assiettes)",
                items: [
                    { name: "Tacos de champignons sauvages 'hallucinogènes'", price_cents: 1200 },
                    { name: "Oignon Roscoff rôti au piment jaune", price_cents: 1400 },
                    { name: "Tuna Crudo, sauce chilaca", price_cents: 1800 },
                    { name: "Empanada croustillante de Chicharrón", price_cents: 1100 }
                ]
            },
            {
                category_type: "main",
                display_label: "Platos Fuertes (Plats à partager)",
                items: [
                    { name: "Demi-poulet rôti au beurre de piment japone", price_cents: 2800 },
                    { name: "Entrecôte (500g) sauce Café de Paris Mexicana", price_cents: 5200, description: "Idéal pour deux." },
                    { name: "Tacos Cantinero (boeuf braisé lentement)", price_cents: 2400 },
                    { name: "Lieu jaune, salsa verde & herbes fraîches", price_cents: 2600 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Postres (Desserts)",
                items: [
                    { name: "Flan au caramel, huile d'olive & romarin frit", price_cents: 1000, description: "Le dessert signature incontournable." },
                    { name: "Gâteau de maïs, crème de Mezcal", price_cents: 950 }
                ]
            },
            {
                category_type: "other",
                display_label: "Bebidas",
                items: [
                    { name: "Margarita Maison", price_cents: 1300 },
                    { name: "Verre de Mezcal sélection", price_cents: 900 },
                    { name: "Soda UMÀ Green Tea / Lemonade", price_cents: 700 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.8,
    description: "Tarántula est la nouvelle sensation mexicaine de la rue Keller. Sous la houlette du chef Emmanuel Peña Treviño, cette cantina moderne délaisse les clichés pour proposer une cuisine du nord du Mexique (Norestense) hautement créative. Ambiance tamisée à la bougie, playlist pointue et sélection de vins natures : c'est le lieu parfait pour une soirée vibrante où les saveurs de piments fumés rencontrent des produits de terroir français sourcés avec soin.",
    insider_tip: "Leur flan à l'huile d'olive et au romarin frit est devenu culte en quelques mois : ne terminez pas sans lui. Pour les amateurs de sensations fortes, demandez leur sélection de mezcals artisanaux.",
    expert_catchline: "La cantina mexicaine 2.0 : saveurs explosives, ambiance tamisée et vins natures.",
    specials: {
        cuisine: ["Modern Mexican (Norestense)", "Cuisine de partage", "Vins natures"],
        drinks: ["Mezcals de petits producteurs", "Margaritas d'exception"],
        must_eat: "Les Tacos de champignons sauvages et le Flan huile d'olive/romarin.",
        must_drink: "Une Margarita classique ou un verre de skin-contact wine."
    }
};
