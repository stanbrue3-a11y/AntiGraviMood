import { SurgicalPlace } from "../../../type-definition";

export const breizhCafePaulBert: SurgicalPlace = {
    id: "poi-breizh-cafe-paul-bert",
    name: "Breizh Café (Paul Bert)",
    slug: "breizh-cafe-paul-bert",
    category: "restaurant",
    subcategory: ["Crêperie", "Breton", "Vins Natures", "Terroir"],
    location: {
        address: "23 Rue Paul Bert, 75011 Paris",
        arrondissement: 11,
        lat: 48.8510,
        lng: 2.3855,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJL-m_x3ZshkcRb_Vl3Qk_V_Q"
    },
    moods: {
        chill: 90,
        festif: 10,
        culturel: 20
    },
    pricing: {
        avg_budget: 30,
        dish_price: 18.00, // Galette Raclette
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Amuses-Galettes (Entrées Salées)",
                items: [
                    { name: "Amuse-Galette Chorizo & Comté", price: "8.70€" },
                    { name: "Amuse-Galette Camembert & Miel", price: "8.70€", description: "Confiture de figues, noix." },
                    { name: "Amuse-Galette Poisson Fumé", price: "12.00€", description: "Crème citronnée, ciboulette." },
                    { name: "Galette au Beurre d'Algues Bordier", price: "7.40€" },
                    { name: "Salade Verte, Vinaigrette au Cidre", price: "4.10€" },
                    { name: "Salade Wasabi & Sarrasin Soufflé", price: "4.10€" }
                ]
            },
            {
                category: "Galettes Spécialités (100% Sarrasin Bio)",
                items: [
                    { name: "Galette à la Raclette au Lait Cru", price: "18.00€", description: "Pommes de terre, jambon blanc, oignons." },
                    { name: "Galette Saucisse de Bretagne", price: "16.00€", description: "Saucisse artisanale, salade verte." },
                    { name: "Galette Reblochon & Lardons", price: "22.00€" },
                    { name: "Galette Complète au Jambon Cru", price: "16.00€", description: "Œuf miroir, Comté, jambon sec." },
                    { name: "Galette Complète au Chorizo", price: "16.00€" },
                    { name: "Galette aux Légumes de Saison", price: "18.00€", description: "Légumes rôtis, pesto de sarrasin." },
                    { name: "Galette Andouille de Guéméné", price: "18.50€", description: "Oignons confits au cidre, moutarde à l'ancienne." },
                    { name: "Galette Saumon Fumé Bio", price: "21.50€", description: "Crème fraîche, aneth, citron." },
                    { name: "Galette Forestière", price: "17.00€", description: "Champignons de Paris, crème, jambon, Comté." }
                ]
            },
            {
                category: "Breizh Rolls (Croustillants & Originaux)",
                items: [
                    { name: "Breizh Roll Champignons & Shiitaké", price: "16.00€" },
                    { name: "Breizh Roll Artichaut & Algues Wakame", price: "16.00€" },
                    { name: "Breizh Roll Lobster & Avocat", price: "24.00€", description: "Le roll luxe au homard bleu." }
                ]
            },
            {
                category: "Crêpes Desserts (Froment Bio)",
                items: [
                    { name: "Crêpe Beurre-Sucre (Bordier)", price: "6.50€" },
                    { name: "Crêpe Pommes Caramélisées", price: "10.50€", description: "Crumble de sarrasin, caramel beurre salé." },
                    { name: "Crêpe Suzette Tradition", price: "12.00€", description: "Flambée au Grand Marnier." },
                    { name: "Crêpe Poire au Cidre & Chocolat", price: "11.50€", description: "Glace vanille de Madagascar." },
                    { name: "Crêpe Frangipane & Amandes", price: "9.50€" },
                    { name: "Crêpe au Miel & Citron", price: "7.50€" }
                ]
            },
            {
                category: "Artisanal Ciders & Softs",
                items: [
                    { name: "Cidre Pression Barbé (Bio)", price: "6.00€" },
                    { name: "Cidre Brut Artisanal (Bouteille)", price: "16.00€" },
                    { name: "Cidre Doux de Producteur", price: "15.00€" },
                    { name: "Poiré Domfront (Effervescent)", price: "18.00€" },
                    { name: "Jus de Pomme Artisanal", price: "5.50€" },
                    { name: "Lait Ribot Traditionnel", price: "4.50€" },
                    { name: "Verre de Muscadet (Sevre & Maine)", price: "7.00€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "resa_conseillee",
        accessibility: true,
        wifi: false,
        terrace: true,
        vegan_friendly: true,
        opening_hours_raw: "Lundi-Dimanche: 11:00–22:00",
        main_action: {
            type: "site",
            url: "https://breizhcafe.com/",
            label: "RÉSERVER"
        }
    },
    description: "Le temple de la crêpe haute couture s'est installé rue Paul Bert avec une exigence rare. Farines bio, beurres Bordier et cidres d'exception (la cidrothèque est impressionnante). La galette de sarrazin est ici sublimée par des produits de petits producteurs, dans un cadre épuré qui rappelle les racines bretonnes mâtinées d'une touche de modernité nippone (clin d'œil au fondateur).",
    expert_catchline: "La crêpe bretonne en mode gastronomique : sarrazin bio, beurre Bordier et cidrothèque de folie.",
    insider_tip: "• Ne passez pas à côté des cidres, la sélection est l'une des meilleures de Paris.\n• La galette à la raclette au lait cru est d'un réconfort absolu en hiver.\n• Pour le dessert, la crêpe au caramel au beurre salé maison est une référence.\n• La terrasse sur la rue Paul Bert est très agréable pour un déjeuner au soleil.",
    specials: {
        cuisine: ["Galette Sarrazin Bio", "Breton", "Beurre Bordier"],
        drinks: ["Cidre Artisanal", "Kir Breton", "Gwenva (spiritueux)"],
        must_eat: "La galette complète au chorizo et la crêpe Suzette flambée."
    },
    images: {
        hero: "https://breizhcafe.com/wp-content/uploads/2022/02/BREIZH-CAFE-PAUL-BERT-1.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipM_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.6
};
