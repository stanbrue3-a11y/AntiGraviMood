import { SurgicalPlace } from "../../../type-definition";

export const lAlicheur: SurgicalPlace = {
    id: "poi-l-alicheur",
    name: "L'Alicheur",
    slug: "l-alicheur",
    category: "restaurant",
    subcategory: ["Cambodgien", "Vietnamien", "Healthy", "Asian Fusion"],
    location: {
        address: "96 Rue Saint-Maur, 75011 Paris",
        arrondissement: 11,
        lat: 48.8653,
        lng: 2.3785,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJOX_z_XRshkcR_9Xl3Qk_V_M"
    },
    moods: {
        chill: 90,
        festif: 0,
        culturel: 10
    },
    pricing: {
        avg_budget: 18,
        dish_price: 13.50, // Pâtes de riz
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Pâtes de Riz (Vapeur & Sans Gluten)",
                items: [
                    { name: "Pâtes de riz Bœuf Emincé", price: "14.00€", description: "Sauce Alicheur maison, herbes fraîches." },
                    { name: "Pâtes de riz Poulet Coco-Curry", price: "14.00€" },
                    { name: "Pâtes de riz Tofu & Sésame (V)", price: "14.00€" },
                    { name: "Pâtes de riz Crevettes & Olive Oil", price: "14.00€" },
                    { name: "Pâtes de riz Porc Grillé", price: "14.00€" },
                    { name: "Double Portion de Légumes", price: "4.50€" }
                ]
            },
            {
                category: "Soupes Citronnelle & Bouillons",
                items: [
                    { name: "Soupe Blé Bœuf Emincé", price: "14.00€" },
                    { name: "Soupe Blé Poulet Fermier", price: "14.00€" },
                    { name: "Soupe Blé Crevettes", price: "14.00€" },
                    { name: "Soupe Blé Tofu & Shiitake (V)", price: "14.00€" },
                    { name: "Bouillon Citronnelle & Coriandre", price: "6.00€" },
                    { name: "Soupe Signature Poisson Blanc", price: "16.00€" }
                ]
            },
            {
                category: "Entrées & Sides (No Frying)",
                items: [
                    { name: "Nems aux Légumes (x3)", price: "7.50€" },
                    { name: "Rouleaux de Printemps Crevette", price: "8.50€" },
                    { name: "Salade de Papaye Verte", price: "9.50€" },
                    { name: "Légumes Grillés de Saison", price: "6.50€" },
                    { name: "Tartine Alicheur Poulet", price: "7.00€" },
                    { name: "Sandwich Bœuf & Herbes", price: "6.50€" },
                    { name: "Petit Bol de Riz Parfumé", price: "3.50€" }
                ]
            },
            {
                category: "Douceurs",
                items: [
                    { name: "Flan au Lait de Coco", price: "5.50€" },
                    { name: "Perles de Tapioca & Jacquier", price: "6.50€" },
                    { name: "Salade de Fruits Exotiques", price: "6.00€" },
                    { name: "Gateau de Riz à la Banane", price: "5.50€" }
                ]
            },
            {
                category: "Boissons",
                items: [
                    { name: "Singha Beer (33cl)", price: "4.50€" },
                    { name: "Infusion Gingembre Maison (Chaud/Froid)", price: "5.00€" },
                    { name: "Jus de Mangue Artisanal", price: "4.50€" },
                    { name: "Pepsi Max / 7up (33cl)", price: "3.00€" },
                    { name: "Eau Minérale (50cl)", price: "2.50€" },
                    { name: "Thé Vert au Jasmin (Chaud)", price: "4.00€" },
                    { name: "Café Robusta Traditionnel", price: "3.00€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        terrace: false,
        vegan_friendly: true,
        opening_hours_raw: "Lun-Ven: 11:30–15:00, 18:30–22:00 (Fermé WE)",
        main_action: {
            type: "site",
            url: "https://www.instagram.com/lalicheur_paris/",
            label: "S'INFORMER"
        }
    },
    description: "L'Alicheur est une pépite du quartier Parmentier dédiée à la cuisine asiatique 'thérapeutique' et saine. Ici, on oublie le gras : tout est cuit à la vapeur ou en bouillon, avec des ingrédients d'une fraîcheur absolue. Inspiré par les traditions khmères et vietnamiennes, c'est l'un des rares spots de Paris à proposer un menu presque entièrement sans gluten de manière naturelle. Une adresse précieuse pour les corps fatigués en quête d'umami.",
    expert_catchline: "La cantine asiatique saine et zen : cuissons vapeur et bouillons citronnelle guérisseurs.",
    insider_tip: "• La sauce 'Alicheur' qui accompagne les pâtes de riz est addictive – demandez-en un peu plus si besoin.\n• C'est l'adresse idéale si vous voulez manger léger mais savoureux le midi.\n• Le bouillon à la citronnelle est un remède miracle contre les rhumes d'hiver.\n• Attention, le restaurant est fermé le weekend !",
    specials: {
        cuisine: ["Cambodgien", "Healthy", "Vapeur"],
        drinks: ["Infusion Gingembre", "Bière Singha", "Eaux Détox"],
        must_eat: "Les pâtes de riz au bœuf et le flan au lait de coco."
    },
    images: {
        hero: "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.8
};
