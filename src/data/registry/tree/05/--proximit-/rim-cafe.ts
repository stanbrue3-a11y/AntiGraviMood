import { SurgicalPlace } from '../../../../type-definition';

export const rim_cafe: SurgicalPlace = {
    "id": "poi-rim-cafe",
    "name": "Rim Café",
    "slug": "rim-cafe",
    "category": "restaurant",
    "subcategory": [
        "italien",
        "pizza",
        "pates",
        "saint-michel",
        "terrasse",
        "fait-maison"
    ],
    "verified": true,
    "google_rating": 4.2,
    "location": {
        "address": "38 Rue Saint-Séverin, 75005 Paris",
        "arrondissement": 5,
        "lat": 48.85273,
        "lng": 2.3444385,
        "nearest_metro": "Saint-Michel Notre-Dame",
        "metro_lines": [4, "B", "C"],
        "google_id": "ChIJaYHwmOBx5kcRsvo00gioEEU"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "wifi": false,
        "terrace": true,
        "opening_hours_raw": "Lundi: 11:00–00:00\nMardi: 11:00–00:00\nMercredi: 11:00–00:00\nJeudi: 11:00–00:00\nVendredi: 11:00–00:00\nSamedi: 11:00–00:00\nDimanche: 11:00–00:00",
        "main_action": {
            "type": "book",
            "url": "https://www.thefork.fr/restaurant/rim-cafe-r528773",
            "label": "RESERVER"
        },
        "cuisine_type": "Italien / Pizza au feu de bois"
    },
    "pricing": {
        "avg_budget": 25,
        "is_free": false,
        "dish_price": 16,
        "pint_price": 7,
        "wine_glass": 6,
        "coffee_price": 2.5,
        "soft_price": 5,
        "smart_tip": "Le Happy Hour de 16h à 20h est l'un des meilleurs plans du quartier Saint-Michel pour un spritz en terrasse.",
        "menu_items": [
            {
                "category": "Antipasti & Bruschettas",
                "items": [
                    { "name": "Mix de Bruschetta", "price": "12,00€" },
                    { "name": "Burrata crémeuse et tomates d'Antan", "price": "14,00€" },
                    { "name": "Planche de charcuterie italienne", "price": "18,00€" }
                ]
            },
            {
                "category": "Pizzas au Feu de Bois",
                "items": [
                    { "name": "Margherita", "price": "13,00€" },
                    { "name": "Regina", "price": "15,00€" },
                    { "name": "Tartufo (Crème de truffe)", "price": "19,00€" },
                    { "name": "Rim Café (Spécialité)", "price": "17,00€" }
                ]
            },
            {
                "category": "Pasta & Risotto",
                "items": [
                    { "name": "Gnocchi alla crema di pistacchi", "price": "17,00€" },
                    { "name": "Rigatoni à la truffe", "price": "21,00€" },
                    { "name": "Lasagne bolognaise maison", "price": "16,00€" },
                    { "name": "Risotto aux Gambas", "price": "22,00€" }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 80,
        "festif": 60,
        "culturel": 30
    },
    "description": "Niché dans la pittoresque rue Saint-Séverin, le Rim Café est une escale italienne authentique loin des pièges à touristes classiques du quartier. Sa spécialité ? Les pizzas cuites dans un imposant four au feu de bois visible dès l'entrée. L'accueil y est chaleureux, souvent orchestré par une équipe passionnée qui n'hésite pas à recommander les gnocchis à la pistache, devenus cultes parmi les habitués. La petite terrasse permet de profiter de l'animation du Quartier Latin tout en savourant une cuisine généreuse faite maison.",
    "insider_tip": "• Ne passez pas à côté des Gnocchis à la crème de pistache, c'est la pépite absolue de la carte.\n• Le Happy Hour quotidien rend les cocktails très abordables pour le secteur.\n• Si la terrasse est pleine, l'intérieur avec vue sur le four à pizza est tout aussi agréable.",
    "specials": {
        "cuisine": ["Italien", "Pizza", "Pasta"],
        "drinks": ["Vins Italiens", "Spritz"],
        "must_eat": "Pizza au feu de bois & Gnocchis Pistache.",
        "expert_catchline": "L'Italie authentique au feu de bois en plein Saint-Michel."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUVRdVZ8Ydyu-z7KfXrp_5zCTP9tN5PaBL7PTls_7TEbtZoNijhfrHyoTSWZS894N63qhptV58x4_7HJrBlMJkhTPjMGuRdLRnuoW66RsGeKeO6wVKriErl4ktxzSr3CKqPZqI1IrTd-uarSj1bwbYtruCgwv6EsIm0DjLYgslxfapyt1qd80lFrsb3ssSK4MzhfBuh-8_29Xn-2jIfW-rXqTy1aZd6Cd7vZ_b1ZmJk6cGDdojl-_t50eYaegxA2HKMwrOSPxrGg9jHURtLAsDTXgrKCQtOLEbuH6Vs8ZvhjHbaZlwy0HPXwJuCul4Qg9LlHcOZzsbhkOHiHW3tL_PXA3uAGMOeDdwVOTGpSpNsZs3Yak0qX3SSFj4HyVjrgN18wF5_NmEXYlfoplUKSUZdNfJj9C-YGbgaDQTTvq5ZPj_maGU4KsZOsiMetS0JgRZpwVBb30OqQm31ZwcBjzxw-dkAViC4DEb8RQavRBjfpDNPjzZCSMHrDSRWhWukUJAGAjR5aCAwW46IpplvPbt-D8HvBMVC5Rbgww-2iHWhDkL1ZnPRBJ6GfPH6b-zZ1PCVDKyuNKYcnA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWGHvyPPPzNhVOunSc0CodHdKuwmRg2g5EMXcIaZ7dHInzKkpSFxJ9IvBuwpFpo_jS1V5thCLBIpgAjoeC-5VfnKjwq6oAtzJBwItU6GPDQyZkc0tFFchZVBnh38dglyT_xGPMrbUwQaFbo4OAWqL-5q-_nHxaDEPkzWAWSFXiHQ4qiz5bKGSIErxwD0wZb70YrOBpOxTNV_8-HkWGqCZugKEvLYdWA3ss3ovzBdrB4EGtBAjElewBtsoJxEiQHdjjfeLko1Ob3cZNpc_LUJoSO5RNSatJZIxyaSw2CIjZGqeS1m58ajDNjMSZFwL-31C7BdsXZsik5ezn4YqR0u5oqIvApT6vw2-c7qKCyn9GjL3vKWfyACHm4EWf2kvUoYrIeVM9LQir06c7DkRDcUQ1uKCy4k2Xx-BLsGHsCshX4HQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUJVZfJ7HT0Hv9RRg4koZSvZb96ejGQJia-BVOumUtP-20TqqJ0jMqw_uFqfEgQw_RbyvpKpoJWHh9eiDS-Pp2KoMr9eHjBz6LrkgksM0FDj7zHmaLbeZYmuAjH_d9-rgICrgtXNhSYthuLxwYPLVD4B043EzKb8Yo7S5Z9qb-NjPmW3h_L5Sd7A2TcpkFPrQrL06E1ayq19NfqscunPfoCG2VzoQQx6jZ-zfIK8Oo8mOJMDBL7jRfgvmQTMXBteBO4F3kMtJETIxZbsdOuZ9FHVAccBMVlaotyACzIClInmg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "source": "expert_human"
};
