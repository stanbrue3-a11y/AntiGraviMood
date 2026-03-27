import { SurgicalPlace } from '../../../../type-definition';

export const le_royal: SurgicalPlace = {
    "id": "poi-le-royal",
    "name": "Le Royal",
    "slug": "le-royal",
    "category": "restaurant",
    "subcategory": [
        "brasserie",
        "bar",
        "pizza",
        "terrasse",
        "happy-hour"
    ],
    "verified": true,
    "google_rating": 4.1,
    "instagram_handle": "", // SOURCE: Non trouvé après recherche exhaustive (brasserie de tradition)
    "location": {
        "address": "90 Boulevard de Port-Royal",
        "arrondissement": 5,
        "lat": 48.8394616,
        "lng": 2.3383765,
        "nearest_metro": "Port-Royal",
        "metro_lines": ["RER B"],
        "google_id": "ChIJN1S_OsFx5kcRtoMh54mOHHk"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "wifi": true,
        "terrace": true,
        "opening_hours_raw": "lundi: 07:00–02:00, mardi: 07:00–02:00, mercredi: 07:00–02:00, jeudi: 07:00–02:00, vendredi: 07:00–02:00, samedi: 07:00–02:00, dimanche: 07:00–02:00",
        "main_action": {
            "type": "site",
            "url": "https://www.privateaser.com/lieu/40519-le-royal",
            "label": "RESERVER"
        },
        "cuisine_type": "Brasserie Parisienne / Italienne"
    },
    "pricing": {
        "avg_budget": 20,
        "is_free": false,
        // SOURCE: MisterGoodBeer & Site Officiel — HH 16h-02h (Vérifié Fév 2026)
        "pint_price": 4.5,
        "cocktail_price": 5,
        "wine_glass": 4,
        "coffee_price": 2.5,
        // SOURCE: Menu leroyalbarparis.fr — Sep 2025
        "dish_price": 17.5,
        "smart_tip": "Happy Hour marathon (16h-02h) et spécialité de Croque à la Truffe.",
        "menu_items": [
            {
                "category": "Sélection Happy Hour (16h-02h)",
                // SOURCE: MisterGoodBeer + Menu Boissons 2026
                "items": [
                    { "name": "Pinte de Pelforth", "price": "4,50€" },
                    { "name": "Pinte de Lagunitas IPA (Pression)", "price": "6,50€" },
                    { "name": "Cocktails classiques (Mojito, Negroni, Moscow Mule)", "price": "5€" },
                    { "name": "Verre de Vin Blanc", "price": "4€" },
                    { "name": "Americano Maison", "price": "8€" }
                ]
            },
            {
                "category": "Malts & Spiritueux",
                // SOURCE: Carte des alcools consolidée
                "items": [
                    { "name": "Aberlour 15 ans Single Malt", "price": "12€" },
                    { "name": "Oban 14 ans / Talisker 10 ans", "price": "11€" },
                    { "name": "Nikka Pure Malt (Japon)", "price": "12€" },
                    { "name": "Vieux Rhum sélectionné", "price": "9€" }
                ]
            },
            {
                "category": "Pépites de la Brasserie",
                // SOURCE: Menu leroyalbarparis.fr Sep 2025
                "items": [
                    { "name": "Croque Royal à la Truffe (Comté/Jambon Prince de Paris)", "price": "20€" },
                    { "name": "Burrata des Pouilles (150g), Pêches rôties & Pesto Framboise", "price": "17€" },
                    { "name": "Gravlax de Saumon Bömlö, Vinaigrette Agrumes", "price": "17,50€" },
                    { "name": "Tataki de Thon mariné, Sésame & Gingembre", "price": "20€" },
                    { "name": "Burger VG (Halloumi, Légumes rôtis & Yaourt herbes)", "price": "17€" },
                    { "name": "Bourguignon de joue de bœuf confite au vin rouge", "price": "18€" }
                ]
            },
            {
                "category": "Douceurs",
                // SOURCE: TheFork 2025
                "items": [
                    { "name": "Brioche perdue, Caramel & Sorbet pêche", "price": "8€" },
                    { "name": "Fondant baulois au chocolat & Glace vanille", "price": "8€" },
                    { "name": "Lemon Curd & Crumble aux amandes", "price": "7,50€" }
                ]
            }
        ],
        "last_updated": "2026-02-28"
    },
    "moods": {
        "chill": 75,
        "festif": 65,
        "culturel": 20
    },
    "description": "Brasserie d'angle historique au carrefour du Val-de-Grâce. Le Royal se distingue par son sens du sourcing (Jambon Prince de Paris, Saumon Bömlö) et ses horaires de Happy Hour qui s'étirent jusqu'au bout de la nuit sur une grande terrasse chauffée.",
    "insider_tip": "Le spot ultime : les tables en bordure de boulevard vers 18h pour le soleil couchant. Pour les noctambules, c'est l'un des rares lieux du quartier à servir un vrai plat (le Croque Truffe) jusqu'à 01h du matin dans une ambiance de brasserie parisienne pur jus.",
    "specials": {
        "cuisine": ["Brasserie", "Gastro-Bistrot", "Italienne"],
        "drinks": ["Américano Maison", "Aberlour 15 ans", "Lagunitas IPA", "Vins au verre"],
        "must_eat": "Bistronomie canaille. Le Croque Royal à la Truffe avec son Comté affiné est le banger du lieu. En dessert, la Brioche Perdue rivalise avec les meilleures adresses du quartier.",
        "expert_catchline": "L'institution de Port-Royal pour un apéro marathon et un croque-monsieur à la truffe d'exception."
    },
    "images": {
        "hero": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWX_gfjvqWOL3LlxUo6fGQBnlaZvI0OLSQS7q_5bHTrPdmuIdxHnx3MO6z-06kpZ4fRRODhh_5-DCoTzmR-s8XWYowO14VU-DZWEm52jGw-kdIYue-5JUeThygZ2oCPyng6xlqaEI904grFnQtUffwtIFkJTRJJAODUf__2KPQEea4WqtI8RBCVoCxeu9PTixxCZzzbwwdDT-o_s3v0SgZaiBb4HazTQ5nPOBta2R1ccEUyRrE8JYNKiKnsdW0v8gSTWNRY847Uclj0nox9BwTLP5bNjk4v8QM2IjBnUpGyOtuePZo&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        "gallery": []
    },
    "source": "expert_human"
};
