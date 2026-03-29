import { SurgicalPlace } from '../../../type-definition';

export const samaBistro: SurgicalPlace = {
    id: "poi-sama-bistro",
    name: "Sama Bistro",
    slug: "sama-bistro",
    category: "restaurant",
    subcategory: ["lebanese", "bistronmic", "fusion", "creative"],
    location: {
        address: "5 Rue Guillaume Bertrand",
        arrondissement: 11,
        lat: 48.8633905,
        lng: 2.379782,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "0x47e66d57cc1a8e4f:0x4d6e22cf47a4d45b"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–22:30; Dim: 12:00–16:00 (Brunch); Fermé Lun",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.samabistro.com",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.50,
        coffee_price: 2.50,
        dish_price: 27.00, // MANUAL: Full lunch menu as standard satiety unit
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-10",
        menu_items: [
            // VERIFIED: Sama Bistro Paris 2024-2025
            {
                category_type: "main",
                display_label: "Plats (Formules Déjeuner)",
                items: [
                    { name: "Entrée + Plat + Dessert", price_cents: 2700 },
                    { name: "Entrée + Plat ou Plat + Dessert", price_cents: 2300 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Petites Assiettes à Partager",
                items: [
                    { name: "Pain Tannour au zaatar", price_cents: 450 },
                    { name: "Feuilleté Batata, ail & crème", price_cents: 900 },
                    { name: "Halloumi grillé, confit de coing & zaatar", price_cents: 1100 },
                    { name: "Brochettes Taouk, chapelure pistache", price_cents: 1100 },
                    { name: "Kafta de canard sur houmous", price_cents: 1200 },
                    { name: "Warak enab (feuilles de vigne) à l'agneau", price_cents: 1600 },
                    { name: "Falafels maison & tarator", price_cents: 950 },
                    { name: "Houmous classique revisité", price_cents: 800 },
                    { name: "Labné à la menthe séchée", price_cents: 750 }
                ]
            },
            {
                category_type: "other",
                display_label: "Brunch Libanais (Weekend)",
                items: [
                    { name: "Formule Terwi'a (Menu complet)", price_cents: 3400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Awaymettes (beignets sirop orange)", price_cents: 900 },
                    { name: "Poire pochée à l'arak", price_cents: 900 },
                    { name: "Flan Libanais à la fleur d'oranger", price_cents: 850 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.7,
    description: "Sama Bistro est une lettre d'amour à la cuisine libanaise, réinterprétée avec la finesse d'un bistrot contemporain. Ici, les saveurs du Proche-Orient s'émancipent des clichés pour proposer des assiettes solaires, techniques et extrêmement généreuses. Le cadre est lumineux, l'accueil vibrant, et le brunch du weekend est déjà une institution pour les amateurs de Terwi'a authentique.",
    insider_tip: "Ne faites pas l'impasse sur le feuilleté Batata, c'est une merveille de textures. Le brunch est souvent complet, réservez bien à l'avance.",
    expert_catchline: "La cuisine levantine en mode bistronomie : solaire, créative et passionnée.",
    specials: {
        cuisine: ["Libanais Créatif", "Bistronomie du Levant", "Mezzés revisités"],
        drinks: ["Vins du Liban et d'ailleurs", "Arak sélectionné"],
        must_eat: "Le feuilleté Batata et les brochettes Taouk à la pistache.",
        must_drink: "Un verre de Château Musar pour accompagner la viande."
    }
};
