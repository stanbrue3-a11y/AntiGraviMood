import { SurgicalPlace } from '../../../../type-definition';

export const yukga: SurgicalPlace = {
    "id": "poi-yukga",
    "name": "Yukga Paris",
    "slug": "yukga",
    "category": "restaurant",
    "subcategory": [
        "coreen",
        "barbecue-coreen",
        "bastille",
        "wagyu",
        "bibimbap",
        "poulet-frit"
    ],
    "verified": true,
    "google_rating": 4.7,
    "location": {
        "address": "13 Rue Sedaine, 75011 Paris",
        "arrondissement": 11,
        "lat": 48.8560023,
        "lng": 2.372093,
        "nearest_metro": "Bastille",
        "metro_lines": [1, 5, 8],
        "google_id": "ChIJW6QAHKdt5kcRu-en-zxC5_M"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "wifi": false,
        "terrace": false,
        "opening_hours_raw": "Lundi-Jeudi: 12:00-14:30, 19:00-22:30\nVendredi-Samedi: 12:00-14:30, 19:00-23:00\nDimanche: 12:00-14:30, 19:00-22:30",
        "main_action": {
            "type": "site",
            "url": "https://yukga888.com/",
            "label": "SITE WEB"
        },
        "cuisine_type": "Barbecue Coréen Authentique"
    },
    "pricing": {
        "avg_budget": 30,
        "is_free": false,
        "dish_price": 17,
        "pint_price": 7,
        "wine_glass": 6,
        "coffee_price": 2.5,
        "soft_price": 4,
        "smart_tip": "Le menu du midi à 15€ (Entrée + Plat) est une aubaine absolue. Pour les groupes, le plateau Barbecue à 22€/pers est le meilleur compromis qualité-prix.",
        "menu_items": [
            {
                "category": "Entrées & Tapas Coréennes",
                "items": [
                    { "name": "Raviolis au poulet (8 pcs)", "price": "11,00€" },
                    { "name": "Crêpe Coréenne (Kimchi ou Seafood)", "price": "15,00€" },
                    { "name": "Poulet frit pimenté", "price": "16,00€" },
                    { "name": "Japchae (Vermicelles)", "price": "11,00€" }
                ]
            },
            {
                "category": "Barbecue Coréen (Grill)",
                "items": [
                    { "name": "Plateau Mixte (Bœuf, Porc, Poulet)", "price": "22,00€" },
                    { "name": "Boeuf Bulgogi (Mariné)", "price": "19,00€" },
                    { "name": "Travers de Porc au Fromage", "price": "19,50€" },
                    { "name": "Menu Wagyu Australien (400g + Accompagnements)", "price": "148,00€" }
                ]
            },
            {
                "category": "Plats & Bibimbaps",
                "items": [
                    { "name": "Bibimbap Classique (Bœuf)", "price": "17,00€" },
                    { "name": "Dolsot Bibimbap (Bol chaud - Saumon/Tofu)", "price": "18,00€" },
                    { "name": "Kimchi Jjigae (Ragoût porc & kimchi)", "price": "17,00€" }
                ]
            },
            {
                "category": "Boissons & Alcools",
                "items": [
                    { "name": "Soju Classique (Bouteille)", "price": "15,00€" },
                    { "name": "Bière Coréenne (Cass / Hite - 33cl)", "price": "6,50€" },
                    { "name": "Jus Coréens (Raisin, Aloe Vera, Pastèque)", "price": "4,50€" },
                    { "name": "Thés Coréens (Yuzu, Gingembre, Citron)", "price": "4,00€" },
                    { "name": "Coca / Coca Zéro / Ice Tea", "price": "4,00€" }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 70,
        "festif": 50,
        "culturel": 40
    },
    "description": "Situé à deux pas de la place de la Bastille, Yukga est rapidement devenu une référence pour les amateurs de barbecue coréen authentique. Ici, la qualité de la viande est reine, proposée brute ou marinée dans le respect des traditions. L'intérieur moderne et chaleureux, doté de systèmes d'extraction performants, permet de savourer son barbecue sans les inconvénients de la fumée. Une adresse généreuse où le service attentif vous guide dans l'art de la découpe et de la dégustation à la coréenne.",
    "insider_tip": "• Ne passez pas à côté des accompagnements (banchan) faits maison, ils sont d'une fraîcheur exemplaire.\n• Le soir, la réservation est fortement recommandée car le lieu est souvent complet.\n• Si vous êtes amateur de sensations fortes, demandez leur Kimchi Jjigae, il a du caractère.",
    "specials": {
        "cuisine": ["Coréen", "Barbecue", "Grillades"],
        "drinks": ["Soju", "Bière Coréenne"],
        "must_eat": "Barbecue de Bœuf & Bibimbap.",
        "expert_catchline": "L'authenticité du barbecue coréen nichée au cœur du 11e."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWGmfhNV2GSZOizGZQecsFjbn3B-zW0ZnaURYcENfV-6JveDnrphhbIdcRmsXIyQLKUJLGTCFKrs6eUB04cmXJ4skHgiGn48GlGnfAP-0-cX1iEu3SmMKyZ0RGsIJN6WrBTPAx6UMqx4kKmdIuyaAeZATjRf2_M1Od5FM1cvioZyNCxQWGCeNf8eLd6in9ulc-xDcE2UC7p6TGggtNeqThP8r-A8R7U641jt1lQCNBEw2nSFnx9C7ZyrhbanJ3QqQw_E4BRPiroWbBfaI-O7uP0GgA_6uW6oNAl-InkSGPGhw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV9cgVSWqzm6OlD8UGQyhZOGeUpRgbGULiRBWVbbzhUBr8ogkir9wuBdFmy3FBPGkX6uGC7U7FtWKh8ckL_Jh23dGhup7DsF19GPA0Itktxc_EqDKvGZld0zIYLIz_uDyN6wAPbRSrdukR1sSpH4_tjE_sV93MJR_TJ5tovBy2g2PcBiRNp2rM_pmLImkygPaSEkf7pnwRUq3WPQ4nC3JO2s8NwGdQsaay7EyhWKrmkN_aLVXyrKbXqGPl_EWwwLrQhULpGk50eOWxiDDgkslYbfU9eVb6mFLDqS7Htr6KgkPROJJezdPkJj-Cz-r0Jq-u-FzVRq0WpHro6Zh8ysK9CDng2ah_k72IoUxmr3ObFGHwHj0ahMv_L1bsMb8sPUYZL7ISAYfWSYRdJdJctWZTDQh16AEpeFKw2-MsxrtXZMsM8&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWbt3_pBWYGpq_ycSx2-iywQOQeDbEBNOe80mt4uZUtd-2FYcdtJGplAVWRjNzNkpvkHYE3YzRuX8e0ZOaEvU1C-1uCaRWDl5ZQisrheyYN2VzBsqmZqzntZsJ-EJQ_MaovionMw7hxogfGpQqtGIzhfnMSvP3QgWR4Z64EvitUAYuDa-poLkkCiON2yVPmr1kj0gT36ubJN2IzFrUxpEl8ZFMci101n0HLFL1REjK8JxXpGCZrGeK-T5OUj0rY_YkvL267M6igji4QZYHjWmlQzMV7TPH3GRyaSansZPMG-P4mLoTk_IsPks3Sqd90cOex7oSuPJgL4tbSQQtCA68IUW-rgFz3xUowW_5PkzeuZfbf4iLEa3orQyc2OSaCFvRR4cZ3zakafPW_pgt1Qp_QN15yKp-pAPlwXIbS_myXAunftMGe9uslYxSlAU6Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "source": "expert_human"
};
