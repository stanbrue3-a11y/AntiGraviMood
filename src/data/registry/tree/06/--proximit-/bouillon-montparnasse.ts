import { SurgicalPlace } from '../../../../type-definition';

export const bouillon_montparnasse: SurgicalPlace = {
    id: "poi-303",
    name: "Bouillon Chartier Montparnasse",
    slug: "bouillon-chartier-montparnasse",
    category: "restaurant",
    subcategory: ["bouillon", "cuisine-francaise", "patrimoine", "restaurant"],
    verified: true,
    google_rating: 4.1,
    instagram_handle: "bouillonchartier",
    location: {
        address: "59 Boulevard du Montparnasse",
        arrondissement: 6,
        lat: 48.844291,
        lng: 2.323322,
        nearest_metro: "Montparnasse - Bienvenüe",
        metro_lines: [4, 6, 12, 13],
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        opening_hours_raw: "Lundi au Dimanche: 11h30-00h00",
        main_action: {
            type: "site",
            url: "https://www.bouillon-chartier.com/montparnasse/"
        },
        cuisine_type: "Bouillon Traditionnel"
    },
    pricing: {
        is_free: false,
        index_price: 15,
        primary_price_type: "dish",
        wine_glass: 3.50,
        coffee_price: 2.20,
        dish_price: 13.20,
        soft_price: 3.80,
        menu_items: [
            {
                category: "Les Entrées du Moment",
                items: [
                    { name: "Œuf dur mayonnaise", price: "2.50€", description: "L'institution nationale (Championnat du monde)" },
                    { name: "Céleri Rémoulade", price: "3.20€" },
                    { name: "Poireaux vinaigrette", price: "3.80€" },
                    { name: "Filet de hareng pommes à l'huile", price: "4.50€" },
                    { name: "Pâté de campagne maison", price: "4.20€" }
                ]
            },
            {
                category: "Les Plats de Tradition",
                items: [
                    { name: "Saucisse au couteau, purée maison", price: "9.80€" },
                    { name: "Poulet rôti, frites fraîches", price: "12.80€" },
                    { name: "Pièce du boucher sauce poivre, frites", price: "13.20€", description: "Le choix des gourmets" },
                    { name: "Daurade royale au four", price: "14.80€" },
                    { name: "Confit de canard, pommes grenailles", price: "14.20€" },
                    { name: "Tête de veau sauce gribiche", price: "12.50€" }
                ]
            },
            {
                category: "Fromages & Desserts",
                items: [
                    { name: "Camembert 'Le Châtelain' portion", price: "3.20€" },
                    { name: "Chou glacé vanille, chocolat chaud", price: "4.20€" },
                    { name: "Mousse au chocolat faite maison", price: "3.80€" },
                    { name: "Baba au rhum", price: "4.80€" },
                    { name: "Compote de pommes", price: "2.80€" }
                ]
            },
            {
                category: "Boissons & Vins",
                items: [
                    { name: "Carafe de Merlot (25cl)", price: "4.90€" },
                    { name: "Pichet de vin rouge (50cl)", price: "8.50€" },
                    { name: "Verre de vin (12cl)", price: "3.50€" },
                    { name: "Pression Licorne (25cl)", price: "3.20€" },
                    { name: "Bière Picon (25cl)", price: "4.20€" },
                    { name: "Café / Expresso", price: "2.20€" }
                ]
            }
        ],
        smart_tip: "Champion du monde de l'œuf mayo, entrées à partir de 2.50€ : le record imbattable de Paris Rive Gauche."
    },
    moods: { chill: 20, festif: 40, culturel: 90 },
    description: "Anciennement Bouillon Rougeot, cette cantine de la Belle Époque à la majestueuse salle de 1903 (classée monument historique) fait revivre l'esprit des bouillons. Le ballet incessant des garçons en gilet noir, le bruit des assiettes et les prix qui défient toute inflation créent une atmosphère unique, théâtrale et populaire.",
    expert_catchline: "Le mythe parisien XXL : service survolté en gilet noir et addition gribouillée sur la nappe.",
    insider_tip: "- Aucune réservation : pointez-vous à 11h45 ou à 19h00 pour éviter l'inévitable file d'attente sur le trottoir.\n- N'y allez pas pour un dîner intime : le bordel ambiant et le coude-à-coude sur de grandes tables partagées sont la norme.\n- Le décor Art Nouveau et ses céramiques de 1903 sont à tomber.",
    specials: {
        cuisine: ["Terroir", "Classiques Parisiens"],
        drinks: ["Pichet de Vin", "Picon Bière"],
        must_eat: "Cuisine française de tradition. L'Œuf dur mayonnaise (2.50€) et la Saucisse au couteau purée maison (9.80€).",
        expert_catchline: "Traditions ouvrières : plats canailles, poireaux vinaigrettes et choucroute bien servie."
    },
    images: { hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Paris_Montparnasse_Bouillon_Chartier_01.jpg/1200px-Paris_Montparnasse_Bouillon_Chartier_01.jpg", gallery: [] },
    source: "research_ai"
};
