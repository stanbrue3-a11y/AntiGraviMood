import { SurgicalPlace } from '../../../../type-definition';

export const maison_de_l_aubrac: SurgicalPlace = {
    "id": "poi-maison-de-l-aubrac",
    "name": "La Maison de l'Aubrac",
    "slug": "maison-de-l-aubrac",
    "category": "restaurant",
    "subcategory": [
        "viande",
        "aubrac",
        "steakhouse",
        "institution",
        "terrasse",
        "ouvert-tard"
    ],
    "verified": true,
    "google_rating": 4.4,
    "location": {
        "address": "37 Rue Marbeuf, 75008 Paris",
        "arrondissement": 8,
        "lat": 48.869619,
        "lng": 2.305197,
        "nearest_metro": "Franklin D. Roosevelt",
        "metro_lines": [1, 9],
        "google_id": "ChIJ8QfpncNv5kcRo4wGa4RC7GE"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "terrace": true,
        "opening_hours_raw": "Lundi: 12:00–01:00\nMardi: 12:00–01:00\nMercredi: 12:00–06:00\nJeudi: 12:00–07:00\nVendredi: 12:00–07:00\nSamedi: 12:00–07:00\nDimanche: 12:00–01:00",
        "main_action": {
            "type": "site",
            "url": "https://www.maison-aubrac.com/",
            "label": "RESERVER"
        },
        "cuisine_type": "Viande Aubrac / Steakhouse"
    },
    "pricing": {
        "avg_budget": 50,
        "is_free": false,
        // VERIFIED: Menu officiel 2024 (Maison Aubrac)
        "dish_price": 29,
        "pint_price": 9.5, // Estimé pour le quartier Champs-Elysées
        "wine_glass": 9,
        "coffee_price": 3.5,
        "soft_price": 6,
        "smart_tip": "Le service ultra-tardif (jusqu'à 7h du matin en fin de semaine) en fait le refuge ultime pour une viande d'exception après minuit.",
        "menu_items": [
            {
                "category_type": "starter",
                "display_label": "Entrées",
                "items": [
                    { "name": "Œufs mimosa bio", "price_cents": 900 },
                    { "name": "Soupe à l'oignon gratinée", "price_cents": 1400 },
                    { "name": "Os à moelle au sel de Guérande", "price_cents": 1600 },
                    { "name": "Croquettes d'Aligot à la truffe", "price_cents": 1200 },
                    { "name": "Foie gras de canard maison", "price_cents": 2600 }
                ]
            },
            {
                "category_type": "main",
                "display_label": "Viandes d'Aubrac",
                "items": [
                    { "name": "Steak au poivre (200g)", "price_cents": 2900 },
                    { "name": "Faux-filet de l'Aubrac (300g)", "price_cents": 3400 },
                    { "name": "Cheeseburger de l'Aubrac", "price_cents": 2400 },
                    { "name": "Lasagne de bœuf d'Aubrac", "price_cents": 2600 },
                    { "name": "Côte de bœuf (1kg, pour 2)", "price_cents": 11000 }
                ]
            },
            {
                "category_type": "dessert",
                "display_label": "Côté Cave & Dessert",
                "items": [
                    { "name": "Verre de vin (Sélection)", "price_cents": 900 },
                    { "name": "Aligot Maison", "price": "Accompagnement" },
                    { "name": "Fondant au chocolat cœur coulant", "price_cents": 1400 },
                    { "name": "Brioche façon pain perdu", "price_cents": 1200 }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 70,
        "festif": 80,
        "culturel": 10
    },
    "description": "Véritable institution située à deux pas des Champs-Élysées, La Maison de l'Aubrac est le sanctuaire de la noda rouge. Ici, la viande provient directement de l'élevage familial en Aveyron, garantissant une traçabilité et une qualité exceptionnelles. Le cadre est élégant mais sans chichis, avec une cave impressionnante de plus de 800 références. C'est l'un des rares endroits de la capitale où l'on peut déguster un aligot filant à 4h du matin.",
    "insider_tip": "• Pour les vrais amateurs, l'Aligot est un passage obligé : il est servi avec une générosité typique du terroir.\n• Si vous sortez tard, c'est LE spot sécure pour manger chaud et bien au milieu de la nuit.\n• La viande maturée (Dry Aged) est leur grande spécialité, n'hésitez pas à demander les arrivages du moment.",
    "specials": {
        "cuisine": ["Français", "Viande", "Aubrac"],
        "drinks": ["Grands Vins", "Vieux Rhums"],
        "must_eat": "Cuisine de l'Aubrac. L'onglet de bœuf ou le traditionnel Aligot filant servi à table.",
        "expert_catchline": "Le temple de la viande aveyronnaise ouvert quand tout le monde dort."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVdRA0izsmYMmigzy5uNKldTZXUqxAG67YEMRFWrswvawCk7dnHb8VH16FKu3tyR3Um7Yrz1OKdIW-WGXJusmAe4H8k41FHaAnwB5SPYiDWANwLFfCqB3JYwDBUkfwV_2kgOvp-5tjnmQP_2dAYKosPgEcdZ3EZzv2NjPYE8ghN7VrVUWr5FLQJBfgcNm4msrIEjaOZDO5QU98RN5XWtKayn4nUJRGvgEjpxmRhbThKYdvP47Adv-nthCu3X-Ggbn2iT_kfP8Q-BbBwgvL5IrL7MO_ADbuAUzRKffX_BpQ0IIRQeak&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXL-AZtaumBe_Jl2Ly2K9Ta2xfgo2kSLlMbZ6BMHzWNYWss7rP43xzv9x-208aKZqtVeShpckyOGhXsvj46GRA8VdqDgktZtKeZAMVL2nknKTDALjAfOt5MqQUMVWajzAJJSEEd6Bl0vw_yF1B6iR3WhTLUmcaB7OTu8VMbkiRlQzwfDae-QDPqCKRJ8n619Nbq02iqxuatsC6Zs7gy0dEP-GJp6Qi0gjdd7jhv6nRS7zTaV3oj-9WXbw1Mg1HM1IGosMJMcQ4ZNJ9b42l6LIoVQzd1HrOPbA0zz5WrSS98ZDFxpa8v_01oK8xgwdXESubesPdQahxhJFdI5QJjDWxh4vmBOuPfPUvlrLbNaXBfy5NbbjDhGwfMsxC6u_52skat4OjLMnhRiqqf6n6ifIWhvt3e1HpYxFLLEBq0epvBhkW-G3fzJeUCaWV8tsyQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUme0l1ryZXI2CDex5HeD4wcJTg60XDugKRsWppEIc54xjpPK7eit-sZkZ7XT5x8jtNITRE04RnLVx3VgMsbLGmZOKarQZiO7L8-DqNyzTvCXVUUz8f7gq7aBtCXj1VZWKir4GsvWX8gCfo6Gr5xD_1goOy2ZkZ0Z6lYLMxkZfP6mrVrJErfxlRI1wxsb7BYm3gH3d-E3CB_oXSvxtzTi42jQ4Uy2P0_PkKEOD9gBVfqd6Y8Qt60KRWpyB3J8QdK1Jn09CCvlKs097BRDIHtY26CSMCA4HItoia7USlfU2_L2mSodITQv9OirWhSXxShZ0sxxRuEViEAN0dBjTPeTrGhaLUci9eNf29HroRlrS0rluFhxOve962L8vmCFgGcfypTjy_-7CSIl5u7xqp_-5Nr0XGGZt12mBExXRMp8_VWKVWura-fc5rGtxe0IM0&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "instagram_handle": "lamaisondelaubrac",
    "source": "expert_human"
};
