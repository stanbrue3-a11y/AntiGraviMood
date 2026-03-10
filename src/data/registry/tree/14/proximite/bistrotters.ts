import { SurgicalPlace } from "../../../type-definition";

export const bistrotters: SurgicalPlace = {
    id: "poi-bistrotters-75014",
    name: "Bistrotters",
    slug: "bistrotters-paris-14",
    category: "restaurant",
    subcategory: ["bistrot", "terroir", "pepite", "parisien", "authentique"],
    location: {
        address: "9 Rue Decrès, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8327769,
        lng: 2.3148769,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJUWpN50tw5kcRxFHi8fOzbi4"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Tuesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Saturday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Sunday: 12:00 – 2:00 PM, 7:00 – 10:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "http://www.bistrotters.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        dish_price: 24, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "L'ardoise des Bistrotters",
                items: [
                    { name: "Cuisse de Canard Confite Maison", price: "22.50€" },
                    { name: "Filet de Boeuf Aubrac, sauce poivre", price: "28.00€" },
                    { name: "Dos de Cabillaud en croûte d'herbes", price: "24.00€" },
                    { name: "Saucisse de Toulouse grillée et Aligot", price: "19.50€" },
                    { name: "Poitrine de Veau rôtie aux petits oignons", price: "24.00€" },
                    { name: "Tartare de Boeuf au couteau préparé", price: "21.00€" },
                    { name: "Risso de Légumes de l'Ardoise", price: "18.50€" }
                ]
            },
            {
                category: "Entrées Gourmandes",
                items: [
                    { name: "Os à Moelle Gratiné au Sel de Guérande", price: "10.00€" },
                    { name: "Oeuf Cocotte au Maroilles (Pépite !)", price: "11.50€" },
                    { name: "Ardoise de Charcuteries de pays", price: "14.00€" },
                    { name: "Entrée du Marché (à l'ardoise)", price: "9.50€" },
                    { name: "Salade de Crottin de Chavignol chaud", price: "12.00€" }
                ]
            },
            {
                category: "Desserts de Tradition",
                items: [
                    { name: "Le fameux Riz au Lait de Bistrotters", price: "9.00€" },
                    { name: "Tatin Maison et Crème Fraîche", price: "10.00€" },
                    { name: "Mousse au Chocolat Noir intense", price: "8.50€" },
                    { name: "Baba au Rhum du Chef", price: "11.00€" },
                    { name: "Fromages de nos Provinces", price: "12.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX5sF6bPeYA1nFzRikV_FqVjwXTeaPCA9gwuSAqWPDxJS8SLIK9z_YnnMQMx7LiGKjcwa-KLurTH1xzb5MlNNZ7_BaxpW-0ubarnZkuEgKqWmh7olU9RIFK3J_eM2X-Vwo9FnCUErUd2oGl2K6LvvHfgsGnQcdWz3Fzr9mrbQumsxOkTHJuPBiHmRbM-4gai00mZiEZIc-u3hj0yh_xu_UbFnhhusWsggDwNQ8AqkUD9bQ-CXhClnSPGixo28mXIIgFqNN9N75AHoAW736yWZLFTKszD3t0LBf-61cqCFsPqg&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXMxKIvOSJtTnVsFm_MWFTErsmEJ9MQqz-PsW1xEwf79-ZB8-hM3K4B9SH3dp9qRJiMgpQb5-S23xV4rZJRrvC0p6jJ0DCItbbZONx__i9YlNn77KuK3MUOUnDjP7qs6TYU_DYZEn0vCEhq5cO4owqt7ssorAx8iOcDH3-PXKVAabJgPbUBF-WH8GjUFehK1OmI_1_DSayb473AwZuTiEUxlyamzxC2hoVzNGjUgeqc05GMXdypE1XpxJkURmlo2-Wmc-ytbxiWac34qedWrp1sSv50MQ3F04jPKb5kZZB0TA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.7,
    description: "Bistrotters est l'une de ces pépites parisiennes que l'on voudrait garder pour soi. Situé dans la tranquille rue Decrès, ce restaurant incarne le bistrot moderne dans ce qu'il a de plus noble : une cuisine de terroir généreuse, un accueil d'une gentillesse rare et une atmosphère chaleureuse faite de bois et de sourires. Tout ici est fait maison, de la terrine au dessert, avec un respect sacré du produit. C'est l'adresse idéale pour redécouvrir le plaisir simple d'un plat parfaitement mijoté dans un cadre authentique.",
    insider_tip: "Goutez absolument à leur riz au lait, une légende locale qui vaut le détour à elle seule. L'ambiance le samedi soir est particulièrement conviviale, pensez à réserver car le lieu est petit.",
    expert_catchline: "L'authenticité absolue du bistrot de quartier et de terroir.",
    specials: {
        cuisine: ["Bistrot de Terroir", "Cuisine Familiale"],
        drinks: ["Vins de Propriétaires", "Bières de Micro-Brasserie"],
        must_eat: "Le Confit de Canard et le Riz au Lait.",
        must_drink: "Un vin rouge souple de l'Hérault."
    },
    source: "expert_human"
};
