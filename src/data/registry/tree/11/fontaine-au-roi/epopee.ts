import { SurgicalPlace } from '../../../type-definition';

export const epopee: SurgicalPlace = {
    id: "poi-epopee",
    name: "Épopée",
    slug: "epopee",
    category: "restaurant",
    subcategory: ["gastronomique", "franco-japonais", "bistronomique", "vins naturels"],
    location: {
        address: "52 Rue Léon Frot",
        arrondissement: 11,
        lat: 48.8549, // Approx
        lng: 2.3875,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJN7SRmbpt5kcR7p1SZdulAYY"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:15–14:00, 19:30–22:00 (Fermé Dim-Lun)",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.epopee-charonne.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 11.00,
        coffee_price: 4.00,
        dish_price: 29, // MANUAL: Menu Déjeuner complet
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Épopée 2025 (Cuisine Franco-Japonaise de Yurika Kitano)
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner (Semaine)",
                items: [
                    { name: "Menu E+P ou P+D", price_cents: 2400, description: "Entrée/Plat ou Plat/Dessert selon le marché." },
                    { name: "Menu complet E+P+D", price_cents: 2900, description: "L'expérience complète du midi." }
                ]
            },
            {
                category_type: "other",
                display_label: "Expérience du Soir (Carte Blanche)",
                items: [
                    { name: "Menu Dégustation (5 temps)", price_cents: 5500, description: "Le voyage signature de la cheffe Yurika Kitano." },
                    { name: "Sélection de Vins Natures", price_cents: 0, description: "Carte pointue gérée par Thomas Legrand." }
                ]
            },
            {
                category_type: "main",
                display_label: "Exemples de Plats Signature (Yurika Kitano)",
                items: [
                    { name: "Choux de Bruxelles frits, crème crue & œufs de truite", price_cents: 0 },
                    { name: "Chou-fleur rôti, sauce anchois & herbes", price_cents: 0 },
                    { name: "Bavette de bœuf maturée, condiment échalote", price_cents: 0 },
                    { name: "Poulpe snacké, mousseline de céleri & noisettes", price_cents: 0 },
                    { name: "Légumes de saison à la vapeur, houmous de pois chiches", price_cents: 0 },
                    { name: "Crudo de bar & émulsion de yuzu", price_cents: 0 },
                    { name: "Magret de canard, jus corsé & miso rouge", price_cents: 0 },
                    { name: "Millefeuille de racine de persil & bergamote", price_cents: 0 },
                    { name: "Pudding de Kabocha (courge japonaise)", price_cents: 0 },
                    { name: "Mont Blanc aux marrons d'Ardèche", price_cents: 0 },
                    { name: "Mousse de sésame noir & framboises fraîches", price_cents: 0 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXT0Za-YgK0SUh3E7HLBXE4CX5i44ts1ypeooYUjfaIu4JSuYv29519J7UO9eIzsvYOmrz4u1nkxIHHo2FSRR8tiHSfdTe9ZYjhMEgKxTkqWp7vl2yspEoAC3cSJsO4dd38wBET5AF5oGQDxAMrBAejx9CMD-S1TDOg1LpEKiZZxRolF4_m-0w58XDJQnoWmWBEi2EGGx_El9KRs7nRLc_JDsd6P5J_nFgBvVyrFFqAYZoqjuhS0DW3iSXFbEP4aq9tGm2QUd9umXrGEgMTaqlBwR9kcEowlJb1jstKHDJDZKPCPKE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.9,
    description: "Épopée est une perle rare située près de Charonne, née de l'union créative de la cheffe Yurika Kitano et du sommelier Thomas Legrand. Dans un cadre zen et minimaliste, la cuisine fusionne la technique française et la délicatesse japonaise avec une précision d'orfèvre. Les accords vins natures sont d'une justesse remarquable, faisant de chaque repas une véritable aventure sensorielle, sans l'ostentation des tables étoilées classiques.",
    insider_tip: "• Le rapport qualité-prix au déjeuner (29€ pour 3 plats) est l'un des plus impressionnants de Paris.\n• Ne manquez pas les créations autour du miso et des fermentations maison.\n• Thomas Legrand est un sommelier passionné; laissez-vous guider sur des pépites qu'on ne trouve nulle part ailleurs.",
    expert_catchline: "La fusion parfaite de la précision japonaise et de la générosité française.",
    specials: {
        cuisine: ["Cuisine Franco-Japonaise", "Produits de saison", "Techniques d'orfèvre", "Végétal sublimé"],
        drinks: ["Vins natures d'exception", "Sélection de sakés artisanaux", "Conseils sommelier pointus"],
        must_eat: "Le dessert au sésame noir, un monument d'équilibre et de texture.",
        must_drink: "Un vin de macération choisi par Thomas pour ses notes complexes et sa longueur."
    }
};
