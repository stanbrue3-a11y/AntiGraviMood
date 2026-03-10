import { SurgicalPlace } from "../../../type-definition";

export const entrepot: SurgicalPlace = {
    id: "poi-entrepot-75014",
    name: "L'Entrepôt",
    slug: "l-entrepot-paris-14",
    category: "restaurant",
    subcategory: ["jardin", "culturel", "bistrot", "cinema", "insolite"],
    location: {
        address: "7 Rue Francis de Pressensé, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8339719,
        lng: 2.3165548,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJbWYjnaBx5kcR2GLcrOR_LgY"
    },
    moods: {
        chill: 95,
        festif: 40,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: 12:00 PM – 12:00 AM | Wednesday: 12:00 PM – 12:00 AM | Thursday: 12:00 PM – 12:00 AM | Friday: 12:00 PM – 12:00 AM | Saturday: 12:00 PM – 12:00 AM | Sunday: 12:00 – 6:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: true, // Dispose d'un magnifique jardin intérieur
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.cinemalentrepot.fr/restaurant-bar/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        dish_price: 19, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Cuisine de Saison & Jardin",
                items: [
                    { name: "Burger de l'Entrepôt, Frites Maison", price: "18.50€" },
                    { name: "Tataki de Thon aux Graines de Sésame", price: "22.00€" },
                    { name: "Suprême de Volaille aux Girolles", price: "21.00€" },
                    { name: "Bowl Végétarien du Moment (Healthy)", price: "16.50€" },
                    { name: "Linguine aux Gambas et Citron Vert", price: "19.50€" },
                    { name: "Pièce du Boucher, Sauce Chimichurri", price: "24.00€" },
                    { name: "Suggestion du Chef (voir ardoise)", price: "17.50€" }
                ]
            },
            {
                category: "Tapas & Entrées à Partager",
                items: [
                    { name: "Planche de Charcuteries Artisanales", price: "18.00€" },
                    { name: "Houmous Fait Maison et Pain Pitta", price: "8.50€" },
                    { name: "Croquettes de Fromage de Brebis", price: "9.50€" },
                    { name: "Calamars Frits, Sauce Tartare", price: "11.00€" },
                    { name: "Beignets de Courgettes (en saison)", price: "9.00€" }
                ]
            },
            {
                category: "Fin de Séance (Desserts)",
                items: [
                    { name: "Cheesecake au Coulis de Fruits Rouges", price: "9.50€" },
                    { name: "Fondant au Chocolat Coeur Coulant", price: "8.50€" },
                    { name: "Petit Pot de Crème à la Vanille", price: "7.00€" },
                    { name: "Salade de Fruits Frais du Marché", price: "8.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXUkfQyFXoeNRrDPJ1LkI5QbaaTX9vzuxJYkJ2zF77GptWmF_h5oR8iFb0GMBZ0E5lIBmqUtlxi_KuDatnaGP8FDVZwXXRhWqrycyz_uYSzccK9v1TFrvk4n1gnpDZWhWGzoRFlg324zl_Sv84kHZBBx9mj5GB4UIk-hQMz0Wn5rlmMwOxayjr1QrYlsEbc_VB3vlMTQ4kc_7eb5rGC1YmF49dJNbbwrX4JTFy0Ycw-5I8SDuogKdl6sJiDH7xlh8datOir4_9UWShxDwiL2C9bVbo2Lcz6nWN0-8MwH271_g&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVc30t8KjEeptVNKs_BGaZ034Jrj87CVVU3QSjQzp-hYn1YJDXB27AIyZmP-kLujGUoO0ZtJ9FnMhI_URPCAJuEgUreVEypUs9Swfyzy4TikkUBwCb2T1jTKv5pJkYzyP8qh3n-v_9b8aKlMLRxv-NXMbTtU2mZ-0YjOS3NKiPoovinlk4QAoMR_2nAKka6CWqW4PsdlikOIxoItNgwcWr9sXYS_9tOlJhq9uvAkPqDZYgtd58CnNjUaBJrX39OcMF6Ti750x4TE7czNtZDoBNeijgCInwhWeakfm_09D0iKw&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "L'Entrepôt est un lieu de vie hybride absolument unique dans le 14ème, mêlant cinéma d'art et d'essai, galerie d'art, salle de concert et restaurant. Son plus grand secret est sa magnifique verrière qui s'ouvre sur un jardin intérieur luxuriant, offrant une oasis de calme en plein Paris. La cuisine y est fraîche, de saison et sans prétention, privilégiant les saveurs franches et les assiettes colorées. C'est l'endroit idéal pour un brunch dominical, un verre entre amis après un film ou une pause lecture dans un cadre magique.",
    insider_tip: "Le jardin est l'un des plus beaux secrets cachés du quartier, idéal pour les journées ensoleillées. Ne manquez pas les concerts de jazz réguliers qui complètent parfaitement le dîner. L'atmosphère y est incroyablement apaisante.",
    expert_catchline: "L'oasis culturelle et gourmande au coeur du 14ème.",
    specials: {
        cuisine: ["Bistrot de Saison", "Options Healthy"],
        drinks: ["Cocktails Maison", "Limonades Artisanales"],
        must_eat: "Le Burger Entrepôt et les salades géantes.",
        must_drink: "Un thé glacé maison dans le jardin."
    },
    source: "expert_human"
};
