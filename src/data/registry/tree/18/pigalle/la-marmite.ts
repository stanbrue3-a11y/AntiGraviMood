import { SurgicalPlace } from '../../../../type-definition';

export const la_marmite: SurgicalPlace = {
    "id": "poi-308",
    "name": "La Marmite",
    "slug": "la-marmite",
    "category": "restaurant",
    "subcategory": [
        "bistrot",
        "bar",
        "afterwork"
    ],
    "verified": true,
    // VERIFIED: Google Maps API (place_id: ChIJOx7tF0Ru5kcRFYvebSNg7uk)
    "google_rating": 3.9,
    "location": {
        // VERIFIED: Google Maps API
        "address": "2 Boulevard de Clichy",
        "arrondissement": 18,
        "lat": 48.8822792,
        "lng": 2.3394899,
        "nearest_metro": "Pigalle",
        "metro_lines": [
            2,
            12
        ]
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": false,
        // NOT CONFIRMED: aucune source ne mentionne le WiFi
        // VERIFIED: Privateaser — "spacieuse terrasse"
        "terrace": true,
        // VERIFIED: Google Maps API weekday_text — 10h30-02h tous les jours
        "opening_hours_raw": "Lundi-Dimanche: 10h30 - 02h00",
        "action_type": "site",
        // VERIFIED: Google Maps API (champ website)
        "action_url": "https://lamarmiteparis.fr/fr"
    },
    "pricing": {
        "avg_budget": 14,
        "is_free": false,
        // VERIFIED: Privateaser + site officiel — pinte Kanterbrau 5€ en HH
        "pint_price": 5,
        // VERIFIED: Privateaser + site officiel — cocktails 8€ normal
        "cocktail_price": 8,
        // NOT FOUND: prix du verre de vin non trouvé (coupe champagne 6€ en HH)
        "wine_glass": 0,
        // VERIFIED: site officiel lamarmiteparis.fr — café 2,20€
        "coffee_price": 2.20,
        // VERIFIED: site officiel — plat du jour 14,50€
        "dish_price": 14.50,
        // VERIFIED: site officiel — Perrier 33cl 4€
        "soft_price": 4,
        // VERIFIED: Privateaser + Mapstr + site officiel — HH 16h-23h
        "hh_time": "16h-23h tous les jours",
        // VERIFIED: Privateaser + site officiel — pinte Kanterbrau 5€ en HH
        "hh_pint": 5,
        // VERIFIED: Privateaser + site officiel — cocktails 5€ en HH
        "hh_cocktail": 5,
        // VERIFIED: site officiel — coupe champagne 6€ en HH
        "hh_wine": 6,
        // VERIFIED: site officiel lamarmiteparis.fr — menu complet avec prix
        "menu_items": [
            {
                "category_type": "other",
                "display_label": "Cafés",
                "items": [
                    { "name": "Café", "price_cents": 220 },
                    { "name": "Café allongé", "price_cents": 250 },
                    { "name": "Café crème", "price_cents": 400 },
                    { "name": "Cappuccino", "price_cents": 450 },
                    { "name": "Café / Café allongé après 18h", "price_cents": 350 }
                ]
            },
            {
                "category_type": "drink",
                "display_label": "Cocktails",
                "items": [
                    { "name": "Cocktails alcoolisés (Apérol Spritz, Gin Fizz, Mojito...)", "price_cents": 800 },
                    { "name": "Cocktails sans alcool", "price_cents": 600 },
                    { "name": "Tous cocktails en Happy Hour (16h-23h)", "price_cents": 500 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Bières",
                "items": [
                    { "name": "Pinte Kanterbrau (Happy Hour)", "price_cents": 500 }
                ]
            },
            {
                "category_type": "drink",
                "display_label": "Happy Hour (16h-23h)",
                "items": [
                    { "name": "Coupe de Champagne", "price_cents": 600 },
                    { "name": "Tous les cocktails", "price_cents": 500 },
                    { "name": "Pinte Kanterbrau", "price_cents": 500 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Eaux minérales",
                "items": [
                    { "name": "Perrier 33cl", "price_cents": 400 },
                    { "name": "Evian 25cl", "price_cents": 350 },
                    { "name": "Evian 50cl", "price_cents": 450 },
                    { "name": "Badoit", "price_cents": 450 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Pâtes",
                "items": [
                    { "name": "Spaghetti bolognaise", "price_cents": 1350 },
                    { "name": "Lasagnes bolognaises", "price_cents": 1350 },
                    { "name": "Tagliatelles au saumon", "price_cents": 1250 },
                    { "name": "Tagliatelles carbonara", "price_cents": 1250 },
                    { "name": "Penne aux 3 fromages", "price_cents": 1200 }
                ]
            },
            {
                "category_type": "main",
                "display_label": "Plats",
                "items": [
                    { "name": "Plat du jour", "price_cents": 1450 },
                    { "name": "Formule express midi (entrée+plat ou plat+dessert)", "price_cents": 1950, "description": "VERIFIED: Google review valéry (3 mois)" }
                ]
            },
            {
                "category_type": "tasting_menu",
                "display_label": "Menu Enfant",
                "items": [
                    { "name": "Plat + Dessert (Nuggets frites ou Spaghetti bolo + 2 boules glace)", "price_cents": 1300 }
                ]
            }
        ],
        "smart_tip": "Happy Hour 16h-23h : tous les cocktails et la pinte Kanterbrau à 5€, coupe de champagne à 6€. Formule express midi à 19,50€.",
        "last_updated": "2026-02-28"
    },
    "moods": {
        "chill": 12,
        "festif": 18,
        "culturel": 5
    },
    "description": "Bistrot de quartier planté juste à la sortie du métro Pigalle, La Marmite joue la carte du bistrot parisien classique sans chichi. On y vient pour un déjeuner express avec la formule à 19,50€, pour le couscous du lundi qui fait venir les réguliers de tout le 18ème, ou simplement pour un Happy Hour de 7 heures (16h-23h) où tous les cocktails tombent à 5€. La terrasse spacieuse est le spot idéal pour observer le ballet permanent du boulevard de Clichy, entre touristes du Moulin Rouge et habitués du quartier.",
    "insider_tip": "Le couscous n'est servi que le lundi — les habitués le savent et débarquent en masse, note le dans ton agenda. La formule express du midi (entrée+plat ou plat+dessert à 19,50€) est un rapport qualité-prix imbattable pour le quartier. Un avis Google récent recommande la soupe à l'oignon et la salade montmartroise comme alternatives aux classiques.",
    "specials": {
        "cuisine": [
            "Couscous (le lundi)",
            "Escargots",
            "Cassoulet maison",
            "Confit de canard",
            "Fondue savoyarde",
            "Lasagnes bolognaises (13,50€)",
            "Plat du jour (14,50€)"
        ],
        "drinks": [
            "Pinte Kanterbrau (5€ en HH)",
            "Cocktails (8€ / 5€ en HH 16h-23h)",
            "Cocktails sans alcool (6€)",
            "Champagne (6€ en HH)",
            "Café (2,20€)",
            "Cappuccino (4,50€)"
        ],
        "must_eat": "Le couscous le lundi (institution locale), la formule express midi à 19,50€ avec l'œuf mayonnaise maison en entrée et les lasagnes fondantes. Un habitué Google 5 étoiles jure par la crêpe caramel beurre salé en dessert.",
        "expert_catchline": "Happy Hour de 7 heures (16h-23h), couscous le lundi, et la terrasse la plus vivante de Pigalle — le bistrot qui résiste au piège à touristes du boulevard."
    },
    "images": {
        // VERIFIED: Google Maps API photo_reference
        "hero": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX5Z2pyPh905TlSZZdOPQ9kZ5IhKiD3VfN724UwVSqptXhYD_f6BnWDGSciuBy6YNMhKTqTLU75tLB9m8tvr7Bdbm06xbWVKs4CZ5Agv14BGm72FHs4NPBh_3A73Qq2TwD_DxvwHjhb7xzlnD8yiAzuk4AfisAQAPoZ2R1so865Xsq3YGXIJbIa1nUN6ReHzFTT74nexx5iHEgvhFDslCw3Gb6N6mNTj67wXGyltY9_treDC-jIvTrEpDdoEwmHaB4k5_l0X3hhOlIZbgsVvjcpLEz9dnaUf0mSRRfKPwWJs8VeQWGTACf-OMeYJXv-Tyk-XZKS5bVIwtSIHtu2-2T2CtQM__ne0g68Rv-EKTz2FeoBnqV5fRCAQQvM1KM5eyLoc1jPR-lXZ-scQQgTKqP9jq9iHfWb5vH_-tMyr6QJJbjXzsFF6DEVmEKMw7cGYYt3nLSsxPpubXgDkuExsmKSSdumuckmpnPexQ16zq73I_SkIc2Cpyeul3DM6s0DGQt1wQ40InoaoeiHzrHGHVH5m0wRrDJTK4OU2LPL1GYgciF9I4zPCtgTJu5rJEPslnmY_oJvdYxQsg&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        "gallery": []
    },
    "source": "research_ai"
};
