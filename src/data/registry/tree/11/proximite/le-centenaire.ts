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
        wine_glass: 6.00,
        coffee_price: 2.40,
        dish_price: 19.00, // VERIFIED 2025: Median of main/meat courses (16€ to 29€)
        // VERIFIED: MisterGoodBeer + Privateaser (2025) — HH 17h-00h pinte 5,80€
        "hh_pint": 5.80,
        // VERIFIED: lecentenaireparis.com (2025) — HH cocktails classiques 7€
        "hh_cocktail": 7,
        // HH de 17h à 00h = 7 heures = RÈGLE HH 3H+ ACTIVE
        "hh_time": "17h-00h",
        "smart_tip": "HH 17h-00h : pinte 5,80€ et cocktails classiques 7€. Planche mixte gargantuesque à partager.",
        "menu_items": [
            {
                "category_type": "main",
                "display_label": "Plats",
                "items": [
                    { name: "Terrine de campagne maison & pickles", price_cents: 700 },
                    { name: "Soupe à l'Oignon traditionnelle gratinée", price_cents: 1200 },
                    { name: "Fricassée de grenouilles ail & persil", price_cents: 1600 },
                    { name: "Escargots de Bourgogne (6 pcs)", price_cents: 800 },
                    { name: "Salade Amelot (légumes grillés & artichaut)", price_cents: 1700 }
                ]
            },
            {
        category_type: "main",
        display_label: "Plats Brasserie",
        items: [
                    { name: "Linguine All Arrabiata, Burrata & Parmesan", price_cents: 1700 },
                    { name: "Croque Monsieur à la truffe, frites & salade", price_cents: 1800 },
                    { name: "Fish & Chips maison, sauce tartare", price_cents: 1800 },
                    { name: "Entrecôte grillée (300g), frites maison", price_cents: 2900 },
                    { name: "Saucisse d'Auvergne au couteau & Aligot", price_cents: 1900 },
                    { name: "Confit de Canard, pommes Sarladaises", price_cents: 2100 },
                    { name: "Tartare de Bœuf Salers, frites maison", price_cents: 1900 },
                    { name: "L'Américain Cheeseburger Black Angus", price_cents: 1700 }
                ]
            },
            {
        category_type: "starter",
        display_label: "Grandes Salades",
        items: [
                    { name: "La César (Poulet croustillant, Parmesan, Œuf mollet)", price_cents: 1900 },
                    { name: "L'Italienne (Burrata, Légumes grillés, Pesto)", price_cents: 2100 },
                    { name: "L'Auvergnate (Jambon cru, St Nectaire, Noix)", price_cents: 1900 }
                ]
            },
            {
                "category_type": "dessert",
                "display_label": "Desserts",
                "items": [
                    { name: "Crème brûlée à la vanille bourbon", price_cents: 800 },
                    { name: "Brownie chocolat & noix", price_cents: 800 },
                    { name: "Salade d'agrumes à la menthe fraîche", price_cents: 800 },
                    { name: "Café gourmand (sélection du jour)", price_cents: 1200 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Bières (HH)",
                "items": [
                    { "name": "Pinte blonde (HH)", "price_cents": 580 },
                    { "name": "Pinte blonde", "price_cents": 840 }
                ]
            },
            {
                "category_type": "drink",
                "display_label": "Cocktails",
                "items": [
                    { "name": "Cocktail classique (HH)", "price_cents": 700 },
                    { "name": "Cocktail classique", "price_cents": 900 },
                    { "name": "Cocktail signature", "price_cents": 1400 }
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
