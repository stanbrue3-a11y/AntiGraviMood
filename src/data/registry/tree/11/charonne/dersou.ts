import { SurgicalPlace } from "../../../type-definition";

export const dersou: SurgicalPlace = {
    id: "poi-dersou",
    name: "Dersou",
    slug: "dersou",
    category: "restaurant",
    subcategory: ["Bistronomique", "Fusion", "Cocktail Pairing", "Vins Natures"],
    location: {
        address: "21 Rue de la Forge Royale, 75011 Paris",
        arrondissement: 11,
        lat: 48.8524,
        lng: 2.3789,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJ_XP_S8FshkcRvN_Gv9Xl3Qk"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 50
    },
    pricing: {
        avg_budget: 60,
        index_price: 33.00,
        dish_price: 33.00, // Filet de lotte
        menu_type: "fixed", // Dinner is tasting only
        last_updated: "2026-03-08",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menus Dégustation & Lunch",
                items: [
                    { name: "Menu Dîner 6 étapes", price_cents: 9500, description: "L'expérience signature du chef avec pairing cocktail." },
                    { name: "Menu Dîner 7 étapes", price_cents: 11000, description: "L'immersion totale, service prolongé." },
                    { name: "Lunch Menu (3 étapes)", price_cents: 2800, description: "Servi en semaine, retour de marché." },
                    { name: "Lunch Menu (5 étapes)", price_cents: 4500, description: "La version gastronomique du déjeuner." },
                    { name: "Accord Cocktails (6 verres)", price_cents: 4000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Petites Assiettes (Lunch / A la Carte)",
                items: [
                    { name: "Huître d'Arcachon N2, crème crue & citron", price_cents: 350 },
                    { name: "Sardines de Bolinche marinées, brioche", price_cents: 850 },
                    { name: "Pommes Dauphine au Brillat Savarin", price_cents: 750 },
                    { name: "Tartelette aux Chanterelles & ail des ours", price_cents: 1500 },
                    { name: "Sashimi de Sériole, sauce ponzu", price_cents: 1900 },
                    { name: "Carpaccio de Bœuf Wagyu, sésame grillé", price_cents: 2200 },
                    { name: "Tataki de Thon Rouge, vinaigrette soja-gingembre", price_cents: 1800 },
                    { name: "Croquette de Porc Noir, moutarde au miel", price_cents: 900 },
                    { name: "Asperges Vertes Grillées, parmesan & zestes", price_cents: 1400 },
                    { name: "Pickles Maison de Saison", price_cents: 500 },
                    { name: "Terrine de Campagne au poivre long", price_cents: 1100 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats",
                items: [
                    { name: "Filet de Lotte à la grenobloise", price_cents: 3300, description: "Chanterelles jaunes et beurre noisette." },
                    { name: "Turbot au BBQ, bok choy, sauce matelote", price_cents: 3800 },
                    { name: "Suprême de Pintade rôtie, jus corsé", price_cents: 3700 },
                    { name: "Flatbread Agneau de lait BBQ", price_cents: 1800 },
                    { name: "Dashi Curry Vegetarien, légumes racines", price_cents: 2400 },
                    { name: "Calamar à la Plancha, encre et chorizo", price_cents: 2800 },
                    { name: "Entrecôte Maturée (300g), sauce béarnaise Dersou", price_cents: 4200 },
                    { name: "Riz sauté au Kimchi & œuf bio", price_cents: 1600 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs & Fromages",
                items: [
                    { name: "Assiette de trois fromages affinés", price_cents: 1500 },
                    { name: "Tarte poire & amande", price_cents: 1300 },
                    { name: "Glace Orange Sanguine, bavaroise fromage blanc", price_cents: 1200 },
                    { name: "Ganache Chocolat Noir & Sel de Mer", price_cents: 1100 },
                    { name: "Sorbet Maison (Parfum du jour)", price_cents: 600 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Signature Cocktails",
                items: [
                    { name: "Dersou Mule (Vodka, Ginger, Lime)", price_cents: 1400 },
                    { name: "Old Fashioned Japonais (Nikka Whisky)", price_cents: 1600 },
                    { name: "Gin & Shiso Tonic", price_cents: 1400 },
                    { name: "Pisco Sour à la Cardamome", price_cents: 1500 },
                    { name: "Mescal & Chili Smokey Drink", price_cents: 1600 },
                    { name: "Mocktail Virgin Yuzu", price_cents: 900 }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "resa_conseillee",
        accessibility: true,
        terrace: false,
        vegan_friendly: false,
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–23:00\nDim-Lun: Fermé",
        main_action: {
            type: "site",
            url: "http://www.dersouparis.com/",
            label: "RÉSERVER"
        }
    },
    description: "Dersou est un ovni gastronomique situé entre Bastille et Charonne. Pionnier du pairing 'plat-cocktail', le restaurant propose une cuisine d'auteur brute et sophistiquée, où les influences asiatiques et européennes s'entrechoquent avec brio. Le décor industriel avec ses murs grattés et son grand comptoir en métal entoure une cuisine ouverte bouillonnante d'énergie.",
    expert_catchline: "L'art du pairing fusion : une cuisine d'auteur percutante accompagnée de cocktails haute couture.",
    insider_tip: "• L'expérience complète se vit au dîner avec le menu dégustation et l'accord cocktail : c'est l'essence même du lieu.\n• Le midi, la carte plus accessible permet de goûter à la précision du chef sans se ruiner.\n• Installez-vous au comptoir pour voir la brigade à l'œuvre et échanger avec les barmans sur les créations du moment.\n• La sélection de vins naturels est également très pointue pour ceux qui boudent les cocktails.",
    specials: {
        cuisine: ["Fusion", "Bistronomique", "Sashimi Sériole"],
        drinks: ["Cocktails Signature", "Vins Natures", "Pairing Alcoolisé"],
        must_eat: "Le menu dégustation 6 étapes et les sardines sur brioche."
    },
    images: {
        hero: "https://static.wixstatic.com/media/dersou-paris-interior.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.5,
    michelin_stars: null,
};
