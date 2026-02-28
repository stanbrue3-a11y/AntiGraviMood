import { SurgicalPlace } from '../../../../type-definition';

export const le_centenaire: SurgicalPlace = {
    "id": "poi-le-centenaire",
    "name": "Le Centenaire",
    "slug": "le-centenaire",
    "category": "restaurant",
    "subcategory": [
        "bistrot",
        "bar-brasserie",
        "cuisine-française",
        "happy-hour"
    ],
    "verified": true,
    "google_rating": 4.3,
    "location": {
        "address": "104 Rue Amelot",
        "arrondissement": 11,
        "lat": 48.8626796,
        "lng": 2.3675321,
        "nearest_metro": "Oberkampf",
        "metro_lines": ["5", "9"],
        "google_id": "ChIJ0VTQYgdu5kcRAOymof359kA"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": false,
        "wifi": false,
        "terrace": true,
        "opening_hours_raw": "lundi: 07:00–00:00, mardi: 07:00–00:00, mercredi: 07:00–00:00, jeudi: 07:00–00:00, vendredi: 07:00–00:00, samedi: 07:00–01:00, dimanche: 08:00–00:00",
        "main_action": {
            "type": "site",
            "url": "https://www.lecentenaireparis.com/",
            "label": "SITE WEB"
        },
        "cuisine_type": "Français"
    },
    "pricing": {
        "avg_budget": 15,
        "is_free": false,
        // VERIFIED: MisterGoodBeer + Privateaser (2025) — 8,40€
        "pint_price": 8.40,
        // VERIFIED: lecentenaireparis.com (2025) — 9€ classique, 14€ signature
        "cocktail_price": 9,
        // NOT FOUND: aucune source récente
        "wine_glass": 0,
        // VERIFIED: Google review Eléa Grise (2025) — café gourmand 12€, espresso estimé ~2.50
        "coffee_price": 0,
        // VERIFIED: lecentenaireparis.com (2025) — entrecôte 20€, espadon 21€
        "dish_price": 20,
        // VERIFIED: MisterGoodBeer + Privateaser (2025) — HH 17h-00h pinte 5,80€
        "hh_pint": 5.80,
        // VERIFIED: lecentenaireparis.com (2025) — HH cocktails classiques 7€
        "hh_cocktail": 7,
        // HH de 17h à 00h = 7 heures = RÈGLE HH 3H+ ACTIVE
        "hh_time": "17h-00h",
        "smart_tip": "HH 17h-00h : pinte 5,80€ et cocktails classiques 7€. Planche mixte gargantuesque à partager.",
        "menu_items": [
            {
                "category": "Plats",
                "items": [
                    { "name": "Entrecôte grillée sauce poivre", "price": "20€" },
                    { "name": "Espadon grillé aux herbes", "price": "21€" },
                    { "name": "Fish and Chips maison", "price": "16€" },
                    { "name": "Salade César (option Halloumi)", "price": "14€" }
                ]
            },
            {
                "category": "Desserts",
                "items": [
                    { "name": "Baba au rhum chantilly", "price": "8€" },
                    { "name": "Tarte amandine aux fraises", "price": "8€" },
                    { "name": "Cheesecake caramel maison", "price": "8€" },
                    { "name": "Café gourmand", "price": "12€" }
                ]
            },
            {
                "category": "Bières (HH)",
                "items": [
                    { "name": "Pinte blonde (HH)", "price": "5,80€" },
                    { "name": "Pinte blonde", "price": "8,40€" }
                ]
            },
            {
                "category": "Cocktails",
                "items": [
                    { "name": "Cocktail classique (HH)", "price": "7€" },
                    { "name": "Cocktail classique", "price": "9€" },
                    { "name": "Cocktail signature", "price": "14€" }
                ]
            }
        ],
        "last_updated": "2026-02-28"
    },
    "moods": {
        "chill": 70,
        "festif": 55,
        "culturel": 15
    },
    "description": "Bistrot de quartier généreux et chaleureux, Le Centenaire est une institution de la rue Amelot à deux pas d'Oberkampf. Avec ses 1000+ avis Google et sa note de 4.3, c'est le genre d'adresse où tout le monde se sent chez soi. La cuisine française maison y est servie sans chichi : entrecôte sauce poivre, fish and chips avec frites maison (avec leur peau), et une planche mixte gargantuesque qui fait le bonheur des tablées d'amis. Le Happy Hour de 17h à minuit en fait un des meilleurs deals du 11e pour les after-work prolongés.",
    "insider_tip": "La planche mixte est légendaire — les habitués la décrivent comme 'la plus longue qu'ils aient jamais vue'. Le café gourmand à 12€ est un excellent rapport qualité-prix selon les avis récents. Demandez les vins bio sur conseil du staff. Pour les végétariens : la salade César est disponible avec du Halloumi grillé à la place du poulet.",
    "specials": {
        "cuisine": ["Français"],
        "drinks": ["Bière pression (pinte 8,40€, HH 5,80€)", "Cocktails (9€, HH 7€)", "Vins bio"],
        "must_eat": "Cuisine française bistrot. L'entrecôte grillée sauce poivre (20€) et le fish and chips maison (16€) sont les valeurs sûres. Le cheesecake caramel maison est recommandé par les clients.",
        "expert_catchline": "Le bistrot généreux de la rue Amelot : HH de 17h à minuit, planche XXL et cuisine maison sans prétention."
    },
    "images": {
        "hero": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWThkNEpDTlxu-6JngUnW7xqPt8QuUwues5jbP4kPZws5KQ23gfEf8P5Kpuq-RHRasew5Lh9QFf5blJjMSs_JJCxeJvxCkyeFjkEwbZ6v5G4j-e-Hf1nKfR3X6LajCGedBUye-iLY06ra6JSBu0SxED7SXpLnntt-sPKMFbbvDJb_ktOisnewZQklIIeXX62MZZhEM5qrcGbWyUF83_Q1u3TYPd0FgnleGD3WR3RKkKJKViquginYzJeSYu0tATsgdELpcUXDyq0GvCWCYwO_a69CsGWCHDZbL2F0e7rzgM30P7MIn-rcWLYc-NmQoeP97R6IqAtOHa16fLxXYW6R1m8LNJspRzhLhyYp6mXuGeRW3cnEB84w8qTiGaTWgr1mhOGsgtKBaHnPCkSkZH_eeE7RR7E6LYqBTJxZxG8jczzaZ38Y2N9YKhhzUnPHapHT8yTiGuOvwBQQIYm5tUNKM1qImACxHa-JSduKZo_sWNoBUdiMR2O92Tf86RcCrbLq3JDpX7GumT30hohkbSEsnVNpsh-z6_70n4VDEqqcIwG4W4n_uonsunnnjJhNQuBnesv2HEZX_Zuw&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        "gallery": []
    },
    "source": "expert_human"
};
