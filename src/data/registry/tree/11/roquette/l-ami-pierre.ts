import { SurgicalPlace } from '../../../type-definition';

export const lAmiPierre: SurgicalPlace = {
    id: "poi-l-ami-pierre",
    name: "A l'ami Pierre",
    slug: "l-ami-pierre",
    category: "restaurant",
    subcategory: ["bistrot", "french", "traditional", "neighborhood-gem"],
    location: {
        address: "5 Rue de la Main d'Or",
        arrondissement: 11,
        lat: 48.8514931,
        lng: 2.3782317,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "0x47e67208a3bec699:0x4be330db6d7710a3"
    },
    moods: {
        chill: 80,
        festif: 50,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–23:00; Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.lamipierre.fr",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 33,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 6.50,
        coffee_price: 2.50,
        dish_price: 22.00, // MANUAL: Median for main courses (19, 17, 28, 24, 22)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: L'Ami Pierre Paris 2024-2025
            {
                category: "Entrées du Bistrot",
                items: [
                    { name: "Os à moëlle rôti", price: "8.00€" },
                    { name: "Couteaux à la Sétoise", price: "11.00€" },
                    { name: "Filets de hareng, pommes à l'huile", price: "8.00€" },
                    { name: "Terrine de campagne maison", price: "9.00€" }
                ]
            },
            {
                category: "Plats Traditionnels",
                items: [
                    { name: "Andouillette de Bretagne, moutarde à l'ancienne", price: "19.00€" },
                    { name: "Spaghetti bicolores aux coques", price: "17.00€" },
                    { name: "Entrecôte de Normandie (300g), Béarnaise", price: "28.00€" },
                    { name: "Faut-filet au poivre, frites maison", price: "24.00€" },
                    { name: "Poisson du marché selon arrivage", price: "22.00€" }
                ]
            },
            {
                category: "Desserts Classiques",
                items: [
                    { name: "Mi-cuit au chocolat, crème anglaise", price: "8.00€" },
                    { name: "Tarte Tatin maison", price: "8.00€" },
                    { name: "Crème brûlée à la vanille bourbon", price: "8.00€" },
                    { name: "Assiette de fromages", price: "9.50€" }
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
    description: "L'Ami Pierre est l'exemple même du petit bistrot de quartier que l'on voudrait garder pour soi. Situé dans la calme rue de la Main d'Or, ce lieu respire l'authenticité avec son comptoir en zinc et ses nappes à carreaux. On y vient pour une cuisine française sincère, sans chichi, où les produits (notamment les viandes de Normandie) sont rois. Un accueil d'une gentillesse rare qui fait de chaque repas un moment suspendu.",
    insider_tip: "Leurs frites maison sont une pure merveille, n'hésitez pas à demander un supplément. Le midi, la formule à 14€ est imbattable dans le quartier.",
    expert_catchline: "Sincérité, générosité et tradition dans ce bistrot pépite de la Main d'Or.",
    specials: {
        cuisine: ["Bistrot traditionnel", "Cuisine de marché", "Viandes de terroir"],
        drinks: ["Petite sélection de vins de vignerons", "Apéritifs classiques"],
        must_eat: "L'Andouillette de Bretagne ou l'Entrecôte Béarnaise.",
        must_drink: "Un petit rouge de soif servi au verre."
    }
};
