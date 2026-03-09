import { SurgicalPlace } from '../../../type-definition';

export const biondi: SurgicalPlace = {
    id: "poi-biondi",
    name: "Biondi",
    slug: "biondi",
    category: "restaurant",
    subcategory: ["viande", "argentin", "grillades", "restaurant"],
    location: {
        address: "118 Rue Amelot",
        arrondissement: 11,
        lat: 48.8638315,
        lng: 2.3671144,
        nearest_metro: "Filles du Calvaire",
        metro_lines: [8],
        google_id: "ChIJsRa6hQdu5kcRjccVObllC1Q"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–23:00\nmardi: 12:00–14:30, 19:00–23:00\nmercredi: 12:00–14:30, 19:00–23:00\njeudi: 12:00–14:30, 19:00–23:00\nvendredi: 12:00–14:30, 19:00–23:00\nsamedi: 12:00–14:30, 19:00–23:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.biondi-restaurant.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.00,
        dish_price: 40, // Median Plats+Viandes: 28-44€ plats, 32-45€ viandes individuelles
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Formules Déjeuner",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Formule Déjeuner (Semaine)", price: "23.50€", description: "Entrée, plat et dessert." },
                    { name: "Formule Déjeuner (Samedi)", price: "27.50€", description: "Menu du samedi midi." }
                ]
            },
            {
                category: "Les Entrées à Partager",
                items: [
                    { name: "Croquetas de jambon Iberico, mayo aïoli", price: "14.00€" },
                    { name: "Empanadas de Lomo, pousses de salade, jus de viande", price: "14.00€" },
                    { name: "Ceviche de maigre de ligne, avocat, maïs toasté", price: "17.00€" },
                    { name: "Jambon de bœuf mature Holstein, crème agrumes", price: "18.00€" },
                    { name: "Poulpe à la braise, chou fleur, mayo kalamata, citron vert", price: "18.00€" },
                    { name: "Empanadas de fromage Beaufort, épinards", price: "18.00€" },
                    { name: "Asperges blanches, œuf mollet, mousse de chorizo", price: "20.00€" },
                    { name: "Empanadas de carne (bœuf), agua de tomate", price: "20.00€" },
                    { name: "Carpaccio de Wagyu, mousse parmesan, câpres frits", price: "20.00€" },
                    { name: "Ris de veau à la braise, girolles, truffe", price: "20.00€" },
                    { name: "Os à moelle, viande confite, brioche", price: "23.00€" },
                    { name: "Ceviche de thon rouge, crème avocat, grenade", price: "25.00€" },
                    { name: "Jambon ibérique bellota bellota", price: "28.00€" },
                    { name: "Foie gras mi-cuit, coulis de betterave, figues, fruits rouges", price: "36.00€" },
                    { name: "Caviar Osciètre 50gr (Kaviari), blinis, crème crue", price: "95.00€" }
                ]
            },
            {
                category: "Plats & Suggestions du Chef",
                items: [
                    { name: "Maigre à la plancha, chou kale, émulsion raifort", price: "28.00€" },
                    { name: "Volaille croustillante, déclinaison de céleri, foie gras", price: "28.00€" },
                    { name: "Bar à la plancha, pak choi, girolles, émulsion d'ail", price: "30.00€" },
                    { name: "Milanesa de filet bœuf Angus, mayo chipotle", price: "40.00€" },
                    { name: "Volaille croustillante, grenailles, champignons de bois, vin jaune", price: "40.00€" },
                    { name: "Turbot à la plancha, crème champagne et caviar", price: "44.00€" }
                ]
            },
            {
                category: "Viandes d'Exception à la Braise (Argentine)",
                items: [
                    { name: "Hampe de bœuf (Angus)", price: "32.00€" },
                    { name: "Churrasco de las Pampas (Entrecôte)", price: "33.00€" },
                    { name: "Faux filet (Angus)", price: "36.00€" },
                    { name: "Churrasco de las Pampas (Entrecôte Angus Premium)", price: "39.00€" },
                    { name: "Bife de lomo (Filet bœuf Angus)", price: "45.00€" },
                    { name: "Double entrecôte (Holstein) à partager", price: "75.00€" },
                    { name: "Côte de bœuf à la braise maturée 4 sem. (Pour 2)", price: "95.00€" },
                    { name: "Côte de bœuf complète sélection (Holstein) maturée 4 sem.", price: "125.00€" },
                    { name: "Côte de bœuf (Kød) maturée 5 semaines", price: "135.00€" },
                    { name: "Côte de bœuf Galice maturée 8 semaines", price: "155.00€" }
                ]
            },
            {
                category: "Les Desserts & Fromages",
                items: [
                    { name: "Choco cacao, crumble", price: "8.00€" },
                    { name: "Déclinaison de dulce de leche, tuile à l'orange", price: "9.00€" },
                    { name: "Sélection de fromages fermiers de Cyril Hardouin", price: "15.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUqIfxA3xNfcdkKv1y0gMIhsAEloiRBCSShM0z1I7_3MnWlS_bjM0QxjDGsPWb_WdepN20eT9sQ_P8wXkjTpwxvuHaULgrfangyKjM-qF8PqOpNjgGMmMPIgy-713qFg_cF25VFWc2FM-WM6XktOCN8XJvVdVaC7xfNKvi_WITIDl85Ag5_sa4BktKE55jkYsGqIYOM9JOj0HpvlZhezCDLZVXYvqi4EFZoSkNVzg4in77l7IizojxmP909KAA8kgWRk2cvXMfKAaBiabd0CgYzPSJ8galyQ0I4JZUkPs021w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX6F71MPpTXJkYNcSvY8XD9PFRvd1bpdXQlzWgkAVGGWGUSbIK2GUZp5p0KE894xfWWvwRDZU0U2qn7uPN85S9mcP7W7VMJkSDXxmGSPJU-wUS0qIJ2zdvzvQy8ohAyohdLn-k1YVckatJitWPlnZr6MrE7LZUQUDP0ItpvqoY15-gsxsXY1FllIit5qPgb6J4TsazhCrh78_QS3jjkLvVYtFQMmWnI7KCvEatNxB-2hgZhUmW5rlIlEQumGHBYi8d9KWQOFB1DPNJ11Ly6DX8-nFvUD-Edtx22gtDocsYFRVJacaotpbdolxNjEDdHmH8S7QYstA4YhI1JqyH52wqiKBJaZ2yZoJrXOCNOK5hVlLcWUj4Xk0U_1a0XahodHjYVYnpZcUXksvWNALXpmpnqhXGZRfQwV1lYFqnuZyUbOiPNm5NhgcWmedMKxQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfURCHB2Gdml-7qduzTRVzwqEA5Ca3aCHk_LKQH712K4ux0EONRlHfELFQbqZwZe8-XNg1pso-ok6d94cg5I9OaNlXuytG6t_CdLF8HvoWfLvVp5AwtDDm7PogNVkdR6OYkR1nlRWnBpzI3un8rbRO__yYRrCUg978O0radXOwOh6qJlewZRM6LeG2vfCEc8-X30UXDawu1XryW4MLkF6ndu6jaQ3X8yyDdNG3acO7CCaxGJgTVTZMGUd5dgB3_5P3A-AWZaoCYzThhwIt4PSqjsdwRgqGmOsykMSja8gxWINdr4QR7ZGXigA2FppcWfpikMwctrwYGw8dPpb8NzCeGaAY1opzc0xJzE6qHSmrds1Lq05J28G4UTstDZPAxkFy0K3H6CeilPRW41bHLYZmGvQJrgRQdnY3GZqVm44Fe3nuRxCmFnL-hfJejqfg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "biondi_paris",
    verified: true,
    google_rating: 4.4,
    description: "Le temple parisien de l'Asado argentin. Au Biondi, le chef Fernando de Tomaso maîtrise le feu comme personne, cuisant à la braise des pièces de bœuf d'exception rigoureusement sourcées et maturées, de la Galice au Holstein, dans une salle brute aux allures de hacienda chaleureuse.",
    insider_tip: "• C'est le rendez-vous des très gros viandards : venez à plusieurs pour faire honneur aux Côtes de Bœuf maturées 8 semaines à partager.\n• L'expérience du midi est redoutable financièrement (Menu à 23,50€ pour Entrée/Plat/Dessert) et permet de goûter la qualité d'exécution à bas coût.\n• L'odeur de feu de bois embaume la salle, une vraie marque de fabrique.",
    expert_catchline: "Haute couture viandarde et maîtrise absolue du feu argentin. Le paradis carnivore.",
    specials: {
        cuisine: ["Côte de Boeuf Maturée (jusqu'à 8 semaines)", "Empanadas de carne", "Churrasco de las Pampas"],
        drinks: ["Malbecs pulpeux d'Argentine"],
        must_eat: "L'Empanada de carne en entrée obligatoire, pour s'échauffer avant d'attaquer les fantastiques pièces de viande à la braise.",
        must_drink: "Un Malbec argentin tannique et épicé, la seule règle valable pour affronter la côte de bœuf de Galice."
    }
};
