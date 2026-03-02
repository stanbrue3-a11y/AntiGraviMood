import { SurgicalPlace } from '../../../../type-definition';

export const cafe_industrie: SurgicalPlace = {
    "id": "poi-cafe-industrie",
    "name": "Café de l'Industrie",
    "slug": "cafe-industrie",
    "category": "restaurant",
    "subcategory": [
        "bistro",
        "francais",
        "bastille",
        "retro",
        "brunch",
        "terrasse"
    ],
    "verified": true,
    "google_rating": 4.1,
    "location": {
        "address": "16 Rue Saint-Sabin, 75011 Paris",
        "arrondissement": 11,
        "lat": 48.855654,
        "lng": 2.3718075,
        "nearest_metro": "Bastille / Bréguet-Sabin",
        "metro_lines": [1, 5, 8],
        "google_id": "ChIJv4KfpwBy5kcROqKaKlwHAgg"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "wifi": false,
        "terrace": true,
        "opening_hours_raw": "Lundi-Dimanche: 09:00-02:00",
        "main_action": {
            "type": "site",
            "url": "http://www.cafedelindustrieparis.fr/",
            "label": "SITE WEB"
        },
        "cuisine_type": "Cuisine Française Traditionnelle"
    },
    "pricing": {
        "avg_budget": 25,
        "is_free": false,
        "dish_price": 21,
        "pint_price": 7,
        "wine_glass": 5.5,
        "coffee_price": 2.5,
        "soft_price": 4.5,
        "smart_tip": "Le menu midi Express à 16€ (E+P ou P+D) est imbattable dans le quartier. Pour le soir, arrivez tôt car la terrasse est prise d'assaut.",
        "menu_items": [
            {
                "category": "Formules & Brunch",
                "items": [
                    { "name": "Formule Midi (E+P+D)", "price": "19,00€" },
                    { "name": "Formule Midi (E+P ou P+D)", "price": "16,00€" },
                    { "name": "Brunch Complet (WE & JF)", "price": "23,00€" },
                    { "name": "Petit Déjeuner Parisien", "price": "8,00€" }
                ]
            },
            {
                "category": "Plats de Résistance",
                "items": [
                    { "name": "Filet de bœuf sauce au poivre", "price": "25,00€" },
                    { "name": "Filet de bar poêlé au pesto", "price": "17,00€" },
                    { "name": "Brick de chèvre chaud", "price": "6,00€" },
                    { "name": "Accras de morue à la créole", "price": "7,00€" }
                ]
            },
            {
                "category": "Boissons & Alcools",
                "items": [
                    { "name": "Cocktails Classiques", "price": "9,50€" },
                    { "name": "Pinte de Bière Pression", "price": "7,00€" },
                    { "name": "Verre de Vin AOC", "price": "5,50€" },
                    { "name": "Jus de Bissap Maison", "price": "4,50€" },
                    { "name": "Café / Allongé", "price": "2,50€" }
                ]
            }
        ],
        "last_updated": "2026-03-02"
    },
    "moods": {
        "chill": 80,
        "festif": 60,
        "culturel": 70
    },
    "description": "Véritable institution de la Bastille, le Café de l'Industrie déploie son charme rétro sur trois salles aux ambiances distinctes (boiseries, tapis Kilim, vieux tableaux). C'est le rendez-vous incontournable des habitués du quartier et des curieux en quête d'un Paris authentique et bohème. On y sert une cuisine française généreuse, sans chichis, dans une atmosphère qui rappelle les bistrots d'autrefois.",
    "insider_tip": "• Les trois salles ont chacune leur caractère : demandez la salle 'historique' pour le maximum de cachet.\n• Le jus de Bissap maison est une petite tuerie rafraîchissante.\n• En été, la terrasse à l'angle de la rue Sedaine est l'un des meilleurs spots de 'people watching' du 11e.",
    "specials": {
        "cuisine": ["Entrecôte", "Magret de Canard", "Plat du jour"],
        "drinks": ["Bissap", "Vins de Propriétaires"],
        "must_eat": "Le Filet de bœuf au poivre & le Gâteau au chocolat.",
        "expert_catchline": "L'âme rétro de Bastille dans un décor de cinéma."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWNR8T3YmaFWPsQ8TJX9hAJokoCE0L3CdG-fnx-B1CFhDODDoTd2UlEnmzy6HXVypvh9qPii-3ZURxKH72hYHxgbm6ccKnJXRd-wG90SornmSMp-yyw4u4tVyTyfmrPYaY9xGFDYK64LwP4KUNXA4FXwHZTCwVhpBjDtTfU33lhPCJITCWzJUuLNd5E2u512DWFH0DEJ8leiZCR-RGMOlkG1RSS9UQuA7WYu14maTcqM6vf3TaivJIW_eygnLLn7BU1XaBFKBsbXeYhqy6GssulYK408cXSV3N7WPaDuOcZB7WBXSnDuWSKjAEc_MPkrwh4ULF-_jgCu7AcXLz63Z3gg_OEH1Daxs8JrqNQ3Uu4OG04mDITHC7u5viIaRPdpfbPkZBqfYCpS99ogbQF8IMmfTc4TGhzMwnybUEtAkosZ_8&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU1iD_iwqomdnwJtjv8OrSKEW3Sh4oJ4tI620gNJbtho-ZvBu0sm0nKF0KqmIA0B7p_QmgG0rnhViFWUQ013rFP7p2MaWEmKZO6wEa7s3ujge3DTvcV3y6YLv7Iahe9wQSUMPZ5ESWEU6bHusQhyaEzLr8XFax0W81ZaZ9kFawbiFTevxfPAKRA_t-BD_Pf1fzKZjvhTk3pTkbcMmdxqK6eoCit9OC3U8UZvnAR0E169BB-QFLfoLZI1XvEqzFoSmIPL65_7_MZXWpDoEoAoc7oYWLrpcY0qOwO58oL266EqgaLnaiQwckeQPinGXlP3Zxmw17HfAa6pu6XkBc4mSpEHRxuPqmAEiMy95Yso7S-cijk0hESaV0uKu_TSrNa0-GAY0R1g7L_BBYGdMHsjhA0wIUM2hO2PqJ_oVKVFOZr2i7V&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVD2JVi8HMktP9IagPObrsjMlnkvpgmpG_B3_EsbvgFXKuXFk0A8-Ctw1QmQYl0w0ajHRgqIvSsshrUxpSLSEVX9I7TTmXtmWINJoiTVx1VGHTFhfwToi9fQTc2AUUTCaKH1MdjFoDXylJQg4SaE0CBYmBQyEER4Zl2yhpbR3hVmT7N9-kjXDbjHn2sF-sDjD5PaJoB8IaIWvKYK6GEBbPKSSERX4RpXxFwblQObDBnWssH8cWGablWdAv8mdhRmOiDiBhJl65q69fAG4W9hrm3femAPixrGu8Oj7tey_iBG-EY53-9k6Prpyuq5HIjCVXCCeGqlAOa3w1uKY4N1hxmVP4VZG0EtqU8gZpNzYRasbBzj3jKP3LxDL3ex8pOQJ8gY4lMNtRTTi33wKr2yEESGxWB5G03FIOO7GR4E28&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "source": "expert_human"
};
