import { SurgicalPlace } from "../../../type-definition";

export const tontine: SurgicalPlace = {
    id: "poi-tontine",
    name: "Tontine (Bistrot Permanent)",
    slug: "tontine",
    category: "restaurant",
    subcategory: ["Fusion", "Asiatique", "Vins Natures", "Néo-Bistrot"],
    location: {
        address: "6 Rue Paul Bert, 75011 Paris",
        arrondissement: 11,
        lat: 48.8508,
        lng: 2.3848,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJOX_z_XRshkcR_9Xl3Qk_V_Q"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 10
    },
    pricing: {
        avg_budget: 35,
        dish_price: 24.00, // Plat moyen
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Petites Assiettes & Partage (Franco-Asian)",
                items: [
                    { name: "Oignons de Roscoff brûlés", price: "9.00€", description: "Beurre de miso, noisettes." },
                    { name: "Tataki de Bonite aux herbes", price: "12.00€", description: "Sauce ponzu, radis daikon." },
                    { name: "Radis Beurre & Mousse d'Anchois", price: "8.50€" },
                    { name: "Couteaux à la citronnelle & piment", price: "12.00€", description: "Vapeur de couteaux, beurre de piment maison." },
                    { name: "Noix de St-Jacques au beurre de tamarin", price: "15.00€", description: "Servies avec chanterelles et herbes thaï." },
                    { name: "Sardines marinées au Miso & Gingembre", price: "9.50€" },
                    { name: "Omelette aux herbes & Nuoc-Mam", price: "8.50€" },
                    { name: "Tataki de bœuf au poivre de Kampot", price: "14.00€" },
                    { name: "Pickles de légumes bio", price: "5.00€" },
                    { name: "Bouillon de poulet au galanga", price: "7.00€" }
                ]
            },
            {
                category: "Les Plats du Moment",
                items: [
                    { name: "Paleron de Bœuf braisé au soja", price: "26.00€" },
                    { name: "Maquereau grillé à la flamme", price: "24.00€" },
                    { name: "Gnocchi de riz sautés Fusion", price: "22.00€" },
                    { name: "Cuisse de poulet laquée au caramel", price: "19.50€", description: "Caramel de nuoc-mam, riz gluant, kaffir lime." },
                    { name: "Aile de Raie à la vapeur & Gingembre", price: "22.50€", description: "Échalotes frites, sauce soja légère." },
                    { name: "Couscous Végétal aux épices douces", price: "17.00€" },
                    { name: "Pêche du jour au BBQ Coréen", price: "24.00€" },
                    { name: "Plat du Marché (Change tous les jours)", price: "18.00€" }
                ]
            },
            {
                category: "Douceurs",
                items: [
                    { name: "Gateau Chocolat & Piment", price: "10.00€" },
                    { name: "Tapioca Coco & Fruits Exotiques", price: "8.00€" },
                    { name: "Panna Cotta Citronnelle", price: "9.00€" },
                    { name: "Sorbet Poire & Shiso", price: "7.00€" }
                ]
            },
            {
                category: "Sélection de Vins Naturels (Vin Vivant)",
                items: [
                    { name: "Verre de Vin Blanc Nature", price: "8.50€" },
                    { name: "Verre de Vin Rouge Nature", price: "8.50€" },
                    { name: "Verre de Macération (Orange)", price: "9.50€" },
                    { name: "Beaujolais Nouveau Artisanal (Bouteille)", price: "34.00€" },
                    { name: "Cuvée Spéciale Yann Durieux", price: "95.00€", description: "Pour les amateurs de raretés." },
                    { name: "Pet-Nat (Pétillant Naturel)", price: "40.00€" },
                    { name: "Champagne Jacques Selosse", price: "515.00€", description: "La légende des vins de Champagne." },
                    { name: "Bière Artisanale IPA (33cl)", price: "7.50€" }
                ]
            },
            {
                category: "Tontine Cocktails & Digestifs",
                items: [
                    { name: "Cocktail Signature Pandan & Gin", price: "13.00€" },
                    { name: "Sichuan Negroni", price: "12.00€" },
                    { name: "Infusion Maison Hibiscus & Gingembre", price: "5.50€" },
                    { name: "Café Filtre de Terroir", price: "4.00€" },
                    { name: "Cognac de Propriété", price: "10.00€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "resa_conseillee",
        accessibility: true,
        wifi: false,
        terrace: false,
        vegan_friendly: true,
        opening_hours_raw: "Mar-Sam: 19:00–23:00 (Fermé Dim/Lun)",
        main_action: {
            type: "site",
            url: "https://www.instagram.com/tontineparis/",
            label: "VOIR NEWS"
        }
    },
    description: "Tontine (née au Perchoir et stabilisée rue Paul Bert) est un laboratoire culinaire où l'Orient rencontre l'Occident. Dans un décor brut et minimaliste, on y déguste une cuisine fusion audacieuse qui change au gré des résidences de chefs et des arrivages. Un spot pointu, très axé sur les vins natures et les saveurs umami, idéal pour les explorateurs de goût.",
    expert_catchline: "L'avant-garde de la fusion asiat-parisienne dans un cadre brut et convivial.",
    insider_tip: "• Surveillez leur compte Instagram : les résidences de chefs changent la donne culinaire tous les quelques mois.\n• Les oignons de Roscoff au miso sont une petite tuerie à partager absolument.\n• Ambiance tamisée le soir, très 'cool kids' de l'Est parisien.\n• Les vins sont choisis avec soin pour matcher les saveurs épicées ou fermentées.",
    specials: {
        cuisine: ["Fusion Asiatique", "Vins Natures", "Udon de riz"],
        drinks: ["Vin Naturel", "Thé Genmaicha", "Bière Artisanale"],
        must_eat: "L'omelette aux herbes thaï et les plats de bœuf braisé au soja."
    },
    images: {
        hero: "https://images.perchoir.fr/content/v1/589ca395b3db2b07d6d5a1b3/Tontine-Paris-11-Interior.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.4
};
