import { SurgicalPlace } from "../../../type-definition";

export const la_coupole: SurgicalPlace = {
    id: "poi-la-coupole",
    name: "La Coupole",
    slug: "la-coupole",
    category: "restaurant",
    subcategory: ["brasserie", "français", "institution", "art déco", "fruits de mer", "restaurant"],
    location: {
        address: "102 Boulevard du Montparnasse, 75014 Paris",
        arrondissement: 14,
        lat: 48.8422546,
        lng: 2.3279506,
        nearest_metro: "Vavin",
        metro_lines: [4],
        google_id: "ChIJYafZxs5x5kcRiDaXQXadCBY"
    },
    moods: {
        chill: 50,
        festif: 40,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Lundi: 08:00–00:00 | Mardi: 08:00–00:00 | Mercredi: 08:00–00:00 | Jeudi: 08:00–00:00 | Vendredi: 08:00–00:00 | Samedi: 08:00–00:00 | Dimanche: 08:00–00:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.lacoupole-paris.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 9.50,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 25.50, // MÉDIAN des plats signatures (Choucroutes & Currys)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Les Grands Classiques de La Coupole",
                items: [
                    { name: "Curry d'agneau à l'indienne (Mythique depuis 1927)", price: "25.50€", description: "Servi à la voiture, riz basmati & chutney." },
                    { name: "Choucroute Royale (Saucisse Francfort, échine, jarret)", price: "25.50€" },
                    { name: "Choucroute de la Mer (Haddock, saumon, gambas)", price: "28.00€" },
                    { name: "Filet de bar rôti, légumes de saison", price: "26.00€" },
                    { name: "Tartare de bœuf charolais, frites fraîches", price: "21.00€" },
                    { name: "Confit de canard du Sud-Ouest", price: "23.00€" },
                    { name: "Suprême de volaille aux champignons", price: "22.00€" }
                ]
            },
            {
                category: "Écailler & Banc de Fruits de Mer",
                items: [
                    { name: "Petit Plateau (Huîtres, crevettes, bulots)", price: "39.00€" },
                    { name: "Grand Plateau La Coupole", price: "79.00€" },
                    { name: "Huîtres Fines de Claire N°3 (les 6)", price: "18.60€" },
                    { name: "Bulots, mayonnaise maison", price: "10.80€" },
                    { name: "Crevettes roses Label Rouge", price: "15.00€" }
                ]
            },
            {
                category: "Formules Parisiennes",
                items: [
                    { name: "Menu Boulevard (E+P ou P+D) - Midi", price: "19.90€" },
                    { name: "Menu Tradition (Entrée + Plat + Dessert)", price: "34.00€" }
                ]
            },
            {
                category: "Desserts Historiques",
                items: [
                    { name: "Baba au rhum ambré, chantilly", price: "11.50€" },
                    { name: "Millefeuille à la vanille Bourbon", price: "11.50€" },
                    { name: "Profiteroles au chocolat chaud Valrhona", price: "12.50€" },
                    { name: "Crème brûlée à la cassonade", price: "10.00€" },
                    { name: "Tarte Tatin, crème fraîche", price: "11.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVoKjv6Kck_FbOSqbYEOYsshR2onLTeRIV_CdIm6o7lxH3CPv5-tGhnVy-fIsJ5eXeXjcjFOtIn9D_m5zPT4dff0cpcOdr2zwPzC5F1DYQdStfpcyi2h9C9GAAy0wYdpzyulB61vPent3xdWd7SqH-rcYPDaPxWQRzlq-Z7KVcPQyP1JfP6TXVl2uZQAOL8HI34jW909t57BERBJAlOH5lH1F7IJ1Dp6g3mSbW87Kzh-zw9RXxso43rxQzKH_j5KmPV2et63rkg49EDsk8juZbpn4RBtxoj5-lttIzu8EFODQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVR-WGolHwHSYHeXJE1O2h1NC6cyCkf9dVqwTZ3xV4JUFUdt8SwSPjZbnhzSMTsufKgM7NLvWdlOefjbMWjmROg-3cWQpTo2gBrC9M9iw-dpR0Q_y2P4slgU9552LiGJL4UyOFcGnnTq8Zbja7SanT8UfheMH5KMAx6AfbROYo7Ezs1ATy0_wvjr4uiR-3JRRSXd-r5ITWSashygrxc9rRCJkoSYZplU80l351_2SN7WTz80HLeyCke6jZb2QC270fPC8UEWY8hvcS87ikROuOwi8HmKIBrPaOwtQi9wScgdRFQhxNvFbpnsvFEnea4x1KpHSMBsJkd29tRNh6jAmygg8Q_no_id1fd5gVjdJ-NyCgPWKMy3g7CIAcvvrJ29bXSzGZ_Gmd9hIAMqOG69fXZg4SM3GJLqQ9_Z-hrfXcoFfQmLI4m-DZLENY5mA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU2ejicmtRbNlLfE_RadV4JHYPLxefELVrEosPKDDsruyJ4yRmSfUSb_3mv4v7u9egL9TB7Z40eCwmHgH426ziez9z2MDWRwfehw_LtjPBUcCNm965pe8ghyDhk3LXVmPLViFxFuK79vEg7fdWJFm38dBbehNKO8HT6J6zy9zA2T-1Y69He1X8HNtPTdwkzJk-jvLSOZAyTz_2ji55ji6zyjn0HRpta8E6DaXeJ0PC3TgxvWsgzsZj7Wx_lHvVgEc11kcAwrIVDfCWfzlwx4FR7eYNohQFXwuhRru2YaCrQMA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Plus qu'une brasserie, La Coupole est un temple de l'Art Déco et le cœur battant de l'histoire intellectuelle de Montparnasse. Sous ses célèbres piliers peints par les artistes de l'époque, on y déguste les grands classiques du répertoire français : choucroutes impériales, plateaux de fruits de mer somptueux et surtout son mythique curry d'agneau à l'indienne, servi à la voiture depuis 1927. Un spectacle permanent où le Paris d'hier rencontre celui d'aujourd'hui.",
    insider_tip: "Ne manquez pas le curry d'agneau servi à la voiture, un rituel historique inchangé depuis l'ouverture en 1927. Pensez à lever les yeux pour admirer les chapiteaux décorés par les élèves de Fernand Léger.",
    expert_catchline: "Le temple Art Déco de Montparnasse : choucroutes légendaires et curry mythique depuis 1927.",
    specials: {
        cuisine: ["Brasserie traditionnelle", "Curry à l'indienne", "Choucroute royale"],
        drinks: ["Grands classiques français", "Champagnes de prestige"],
        must_eat: "Le Curry d'agneau à l'indienne (servi à la voiture) et la Choucroute de La Coupole.",
        must_drink: "Une coupe de champagne pour célébrer l'ambiance des années folles."
    }
};
