import { SurgicalPlace } from '../../../../type-definition';

export const le_grand_breguet: SurgicalPlace = {
    "id": "poi-le-grand-breguet",
    "name": "Le Grand Bréguet",
    "slug": "le-grand-breguet",
    "category": "restaurant",
    "subcategory": [
        "cantine-bio",
        "café",
        "bar",
        "coworking",
        "brunch"
    ],
    "verified": true,
    "google_rating": 4.3,
    "instagram_handle": "legrandbreguet", // SOURCE: website links + search hits
    "location": {
        "address": "17 Rue Bréguet",
        "arrondissement": 11,
        "lat": 48.8577641,
        "lng": 2.3735641,
        "nearest_metro": "Bréguet-Sabin",
        "metro_lines": ["5"],
        "google_id": "ChIJX2Ot2vht5kcRlPPv7W_48LA"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": false,
        "wifi": true,
        "terrace": true,
        "opening_hours_raw": "lundi: 08:30–00:00, mardi: 08:30–00:00, mercredi: 08:30–00:00, jeudi: 08:30–01:30, vendredi: 08:30–01:30, samedi: 09:00–01:30, dimanche: Fermé",
        "main_action": {
            "type": "site",
            "url": "http://www.legrandbreguet.com/",
            "label": "SITE WEB"
        },
        "cuisine_type": "Bio / Français"
    },
    "pricing": {
        "avg_budget": 15,
        "is_free": false,
        // SOURCE: SchloukMap 2025 & MisterGoodBeer (confirmé par utilisateur terrain)
        "pint_price": 7,
        "cocktail_price": 10,
        "wine_glass": 6,
        "coffee_price": 2.5,
        "dish_price": 10,
        "smart_tip": "Formule déjeuner 100% bio imbattable dès 10€. Coworking gratuit l'après-midi. Ambiance cantine bio le midi et bar à tapas le soir.",
        "menu_items": [
            {
                "category_type": "tasting_menu",
                "display_label": "Formules Midi (100% Bio)",
                // SOURCE: qqf.fr + parisbouge.com + Uber Eats 2025
                "items": [
                    { "name": "Entrée + Plat bio", "price_cents": 1000 },
                    { "name": "Plat + Dessert bio", "price_cents": 1000 },
                    { "name": "Formule complète bio (entrée+plat+dessert)", "price_cents": 1700 }
                ]
            },
            {
                "category_type": "main",
                "display_label": "Plats à la carte (Cantine)",
                // SOURCE: Uber Eats 2025 + mapstr signatures
                "items": [
                    { "name": "Bol 1 bio végé du jour", "price_cents": 1000 },
                    { "name": "Bol protéiné bio", "price_cents": 1100 },
                    { "name": "Duo de crudités bio", "price_cents": 300 },
                    { "name": "Plat chaud bio signature", "price_cents": 1000 }
                ]
            },
            {
                "category_type": "drink",
                "display_label": "Boissons Sans Alcool (Bio)",
                // SOURCE: legrandbreguet.com + Uber Eats 2025
                "items": [
                    { "name": "Citronnade maison bio", "price_cents": 400 },
                    { "name": "Jus Pomme-Carotte bio", "price_cents": 400 },
                    { "name": "ChariTea Mate", "price_cents": 450 },
                    { "name": "ChariTea Black", "price_cents": 450 },
                    { "name": "Café artisanal bio", "price_cents": 250 }
                ]
            },
            {
                "category_type": "drink",
                "display_label": "Alcools & Cocktails (Bio)",
                // SOURCE: SchloukMap + site officiel "Carte des Boissons"
                "items": [
                    { "name": "Pinte de bière bio (pression)", "price_cents": 700 },
                    { "name": "Breguet Mule (Vodka/Ginger Beer)", "price_cents": 1000 },
                    { "name": "Vodka infusée au basilic", "price_cents": 900 },
                    { "name": "Verre de vin nature bio", "price_cents": 600 },
                    { "name": "Bière bio bouteille", "price_cents": 600 }
                ]
            },
            {
                "category_type": "dessert",
                "display_label": "Desserts",
                // SOURCE: Uber Eats + Timeout
                "items": [
                    { "name": "Succulent au chocolat", "price_cents": 300 },
                    { "name": "Gâteau végan bio", "price_cents": 400 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Brunch (Samedi)",
                // SOURCE: Maison Bréguet / Canteen verified brunch info
                "items": [
                    { "name": "Formule Bréguet Brunch (Buffet + Œufs)", "price_cents": 3200 }
                ]
            }
        ],
        "last_updated": "2026-02-28"
    },
    "moods": {
        "chill": 80,
        "festif": 40,
        "culturel": 30
    },
    "description": "Le Grand Bréguet est une 'cantine vivante' nichée au cœur du 11e, à deux pas de la Place de la Bastille. Véritable tiers-lieu 100% bio, l'espace alterne entre café studieux le matin (coworking gratuit), cantine saine le midi (formules dès 10€) et bar à tapas/vins nature le soir. On y trouve de grandes tables en bois, une terrasse spacieuse, un piano et même un baby-foot. L'engagement est total : 90% des produits sont issus de l'agriculture française et l'intégralité de la carte est biologique, y compris les spiritueux.",
    "insider_tip": "C'est un établissement en self-service : on prend son plateau à la cantine et on débarrasse sa table (règle d'or du lieu). Pour le coworking, c'est gratuit de 08:30 à 12:00 et de 14:30 à 17:45 en semaine, avec prises et WiFi. Le soir, l'ambiance devient plus festive avec des bières bio et des cocktails signature comme le Breguet Mule.",
    "specials": {
        "cuisine": ["Bio", "Français", "Végétarien", "Vegan"],
        "drinks": ["Vins nature bio", "Bière bio pression (7€)", "Breguet Mule", "Café artisanal bio"],
        "must_eat": "La formule midi à 10€ (entrée/plat ou plat/dessert 100% bio) est l'un des meilleurs rapports qualité/prix du quartier. Le 'Bol bio végé' et le 'Succulent au chocolat' sont les classiques de la maison. Pour l'afterwork, les tapas bio accompagnées d'un vin nature français.",
        "expert_catchline": "Tiers-lieu 100% bio : cantine saine le midi, coworking studieux et bar festif le soir avec vins nature."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU-CpG6Bdfvop3ojLEvO-HTdIlvT6kldXoW2psUeEVXjYnacod7rbVSjFrboqGDFvMQcCxgkkcuaJucvhrGMAXDAQylzjuwjpHwMrhuAOWuuFsIQtF7vOn-4j30cufa9u910k4caJm8nx7lTLiT39NZapdCP7HcqNc1StAl6XiuOGaTO6Y6L6NJpNyO8Xgh-Fxh4RQ5yWMqbX6ccMagbNehNgHa7F1ikbvwP2LsPGs3jUEBlOhpYgi71qNDPJ6sgJ8gufPfYp1dZXGpZXrDEQOG7FLvEGnlssgSVtbpH3sRmsFz3SdsVnjKK6fLJys91ep_WEZpbd-LGn7zF7rXvtD24le3Qd_7fxPIj9j-bG2D9sUW9Xcpqw9lxkJOzH0GvEmTkDEbCM1WOn29O2KE8Pv7hNg88XrPUDGPau5y8BfV3MNm5t6u9831PBypfAh26Y7vuD7D0GRfCvaAdQVPx9R3rKuDGaOi_Jv5HgaN0zg-JxIt7ZicroB6cHFibhpgp2QVqhxPQ4nHGEVFHx_P3Nu-BlZRFPfzw-_BUL7yjbUARTEQfTTRscCzr4jp5ai7x6dmTN-3&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": []
    },
    "source": "expert_human"
};
