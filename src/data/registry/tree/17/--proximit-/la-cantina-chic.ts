import { SurgicalPlace } from '../../../../type-definition';

export const la_cantina_chic: SurgicalPlace = {
    "id": "poi-la-cantina-chic",
    "name": "La Cantina Chic",
    "slug": "la-cantina-chic",
    "category": "restaurant",
    "subcategory": ["italien", "sicilien", "traiteur", "fait-maison", "cocktail-bar", "trattoria"],
    "verified": true,
    "google_rating": 4.8,
    "location": {
        "address": "14 Rue de l'Étoile, 75017 Paris",
        "arrondissement": 17,
        "lat": 48.8773127,
        "lng": 2.2956199,
        "nearest_metro": "Charles de Gaulle - Étoile",
        "metro_lines": [1, 2, 6, "A"],
        "google_id": "ChIJI5VVVetv5kcRgjhiFj_9T3k"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "wifi": false,
        "terrace": false,
        "opening_hours_raw": "Lundi-Vendredi: 12:00-14:00, 19:00-21:30\nSamedi-Dimanche: Fermé",
        "main_action": {
            "type": "site",
            "url": "https://www.lacantinachic.fr/",
            "label": "RÉSERVER"
        },
        "cuisine_type": "Sicilienne & Italienne"
    },
    "pricing": {
        "is_free": false,
        "index_price": 18,
        "primary_price_type": "dish",
        "dish_price": 18,
        "pint_price": 7,
        "cocktail_price": 12,
        "wine_glass": 8,
        "coffee_price": 2.4,
        "soft_price": 3.9,
        "menu_items": [
            {
                "category": "Antipasti & Entrées",
                "items": [
                    { "name": "Assortiment d'antipasti (Idéal à partager)", "price": "14,00€", "description": "Légumes grillés, charcuteries italiennes, fromages affinés." },
                    { "name": "Burratina & Tomates cerises", "price": "9,00€", "description": "Burrata crémeuse, filet d'huile d'olive extra vierge." },
                    { "name": "Vitello Tonnato", "price": "14,00€", "description": "Tranches fines de veau, sauce crémeuse au thon." },
                    { "name": "Bruschetta al Pomodoro", "price": "8,00€", "description": "Pain grillé, tomates fraîches, basilic." },
                    { "name": "Arancini Siciliani (2 pièces)", "price": "10,00€", "description": "Boulettes de riz frites, cœur fondant ragù ou épinards." }
                ]
            },
            {
                "category": "Les Pâtes du Chef (Fait Maison)",
                "items": [
                    { "name": "Pappardelle funghi et crème de truffe", "price": "18,00€", "description": "Spécialité maison à la truffe noire." },
                    { "name": "Pipe rigate alla Sorrentina", "price": "15,00€", "description": "Sauce tomate, mozzarella fior di latte, basilic." },
                    { "name": "Tagliatelle pesto di roquette et coppa", "price": "17,00€" },
                    { "name": "Paccheri ai funghi et crème de truffes", "price": "18,00€" },
                    { "name": "Conchiglie Trevise, Ricotta, Pancetta", "price": "16,00€" },
                    { "name": "Fusilli Primavera", "price": "16,00€", "description": "Légumes de saison sautés." },
                    { "name": "Spaghetti alla Chitarra carbonara", "price": "17,00€", "description": "Guanciale, pecorino, jaune d'œuf." },
                    { "name": "Gnocchi alla Sorrentina", "price": "15,50€" },
                    { "name": "Ravioli Ricotta & Épinards", "price": "17,50€", "description": "Beurre de sauge." },
                    { "name": "Linguine alle Vongole", "price": "19,00€", "description": "Palourdes fraîches, ail, persil." }
                ]
            },
            {
                "category": "Secondi & Plats",
                "items": [
                    { "name": "Escalope de Veau à la Milanaise", "price": "22,00€", "description": "Panure dorée, roquette et tomates." },
                    { "name": "Involtini de veau à la sicilienne", "price": "21,00€", "description": "Roulés de veau fourrés, sauce tomate." },
                    { "name": "Espadon grillé au Salmoriglio", "price": "23,00€", "description": "Plat typique sicilien, herbes et citron." }
                ]
            },
            {
                "category": "Dolce & Desserts",
                "items": [
                    { "name": "Tiramisu Maison (Secret du Chef)", "price": "8,00€", "description": "Mascarpone onctueux, café intense." },
                    { "name": "Panna Cotta caramel beurre salé", "price": "7,00€" },
                    { "name": "Cannoli Siciliani (3 pièces mini)", "price": "9,00€", "description": "Ricotta sucrée, pépites de chocolat, pistache." },
                    { "name": "Affogato al caffé", "price": "7,00€" },
                    { "name": "Sorbetto al Limone", "price": "6,50€" },
                    { "name": "Café Gourmand", "price": "10,50€" }
                ]
            },
            {
                "category": "Mixologie & Vins Italiens",
                "items": [
                    { "name": "Aperol Spritz / Campari Spritz", "price": "10,00€" },
                    { "name": "Negroni Classico", "price": "12,00€" },
                    { "name": "Negroni Sbagliato (Prosecco)", "price": "11,00€" },
                    { "name": "Glass of Nero d'Avola (Sicile)", "price": "8,00€" },
                    { "name": "Glass of Chianti Riserva", "price": "9,00€" },
                    { "name": "Glass of Prosecco DOCG", "price": "8,50€" },
                    { "name": "Glass of Pinot Grigio (Blanc)", "price": "7,50€" },
                    { "name": "Birra Moretti (33cl)", "price": "6,50€" },
                    { "name": "Limoncello di Sicilia (4cl)", "price": "7,00€" },
                    { "name": "Amaro Averna / Montenegro (4cl)", "price": "8,00€" }
                ]
            },
            {
                "category": "Softs & Café",
                "items": [
                    { "name": "Eau minérale (75cl)", "price": "5,90€" },
                    { "name": "Coca-Cola / San Pellegrino", "price": "3,90€" },
                    { "name": "Café Espresso Terrazza", "price": "2,40€" }
                ]
            }
        ],
        "smart_tip": "Le chef étant Sicilien, ne passez pas à côté des Arancini et des Cannoli. Le restaurant étant fermé le week-end, c'est l'adresse idéale pour un déjeuner business ou un dîner discret en semaine vers l'Étoile."
    },
    "moods": {
        "chill": 70,
        "festif": 30,
        "culturel": 40
    },
    "description": "Niché dans une rue calme derrière l'Arc de Triomphe, La Cantina Chic est une pépite italienne tenue par un chef sicilien. L'ambiance y est chaleureuse, presque familiale, avec une décoration soignée aux accents ‘Campari Rosso’. Ici, pas de chichis mais une cuisine de produits frais, sincère et généreuse. C'est l'adresse parfaite pour un déjeuner de quartier authentique ou un dîner discret loin de l'agitation des Champs-Élysées.",
    "insider_tip": "• La salle est petite (environ 25 couverts), la réservation est indispensable en soirée.\n• Les Pappardelle à la truffe sont la signature de la maison, mais les spécialités siciliennes (Espadon, Cannoli) valent vraiment le détour.\n• La sélection de vins, bien que courte, est sourcée directement auprès de petits producteurs italiens par la patronne.",
    "specials": {
        "cuisine": ["Italienne", "Sicilienne", "Pasta Maison"],
        "drinks": ["Vins Siciliens", "Mixologie Italienne", "Limoncello"],
        "must_eat": "Arancini Maison & Pappardelle à la truffe.",
        "expert_catchline": "L'Italie authentique et confidentielle à deux pas de l'Étoile."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXharubMb4zLjE_Y1Jd495ZaZMsj4kurWHB-LYcSnuPfOLrwmI_vVEpf8w1sMLJ7p18f4_LL-g-PVOdR04oY4qr_9HklScYgoP8Doc4WDmEYHLZbLCZ48LELd2QF4NKV_y-gjVaIDqVr307SrQwZ0X1a6NCc9IyTyV9tkJd9-aPeTpK49F5OpOfyLSjGs_UZOVvWrVfH_voMNnppdWB039FZZeLCpUhxEu9CPMf6KhsLXb0pSpGp9nJP8g__94Bq1-2EnBbq5nu54_rpCvJzYSxOE-CQkj_CIZrifaPhGDA_-GJN4VtFea_sqJJNwt4hC_MBThXykQmpMQ3A3x3ih6vIKfNdFI6Dk5YZ3mG_kqpt1i0QiJ31OcH-N0FPC2gvx5BVwapye-6SFF44se1Dx59wRtwcg6hGEsRViSRcyCDiHUrwwnGJaaxXNOmTuTXuHdolv2GJEpBSx5zsIHuUQ6A3IR3sanlWGW5roOm-gxR_bKly5h9bbnYW1vHILXaDZqEmrHfh9qpfKpgtL7iUegfIWUoAoZxCK8iDRoZIxP76uZneNwSNoxVhuw0uTOA8PJgpTz4&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": []
    },
    "source": "expert_human"
};
