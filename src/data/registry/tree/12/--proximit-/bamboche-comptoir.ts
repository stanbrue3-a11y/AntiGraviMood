import { SurgicalPlace } from '../../../../type-definition';

export const bamboche_comptoir: SurgicalPlace = {
    "id": "poi-bamboche-comptoir",
    "name": "Bamboche Comptoir",
    "slug": "bamboche-comptoir",
    "category": "restaurant",
    "subcategory": ["bistrot", "viande", "terroir", "fait-maison", "bar-a-vins", "vin-naturel"],
    "verified": true,
    "google_rating": 4.6,
    "location": {
        "address": "99 Rue de Charenton, 75012 Paris",
        "arrondissement": 12,
        "lat": 48.8475624,
        "lng": 2.3775473,
        "nearest_metro": "Ledru-Rollin / Reuilly-Diderot",
        "metro_lines": [8, 1],
        "google_id": "ChIJT0QKTndz5kcRgqzWwfq-c8g"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "wifi": false,
        "terrace": true,
        "opening_hours_raw": "Mardi-Jeudi: 12:00-14:00, 19:00-23:30\nVendredi-Samedi: 12:00-14:30, 19:00-01:00\nDimanche-Lundi: Fermé",
        "main_action": {
            "type": "site",
            "url": "https://www.bambocherestaurant.fr/",
            "label": "RÉSERVER"
        },
        "cuisine_type": "Marché & Terroir"
    },
    "pricing": {
        "is_free": false,
        "index_price": 25,
        "primary_price_type": "dish",
        "dish_price": 22,
        "pint_price": 7,
        "cocktail_price": 12,
        "wine_glass": 9,
        "coffee_price": 2.5,
        "soft_price": 4,
        "menu_items": [
            {
                "category": "Antipasti & Petites Assiettes",
                "items": [
                    { "name": "Huître fine de claire N°3", "price": "3,00€", "description": "À la pièce." },
                    { "name": "Oeuf dur mayo aux herbes & œufs de truite", "price": "3,00€", "description": "Le classique revisité." },
                    { "name": "Raviole truite", "price": "12,00€" },
                    { "name": "Oignon rôti farci", "price": "9,00€" },
                    { "name": "Crudo de Saint-Jacques", "price": "12,00€" },
                    { "name": "Couteaux en persillade", "price": "12,00€" },
                    { "name": "Planche de charcuterie artisanale", "price": "16,00€" },
                    { "name": "Os à moelle grillé", "price": "11,00€" }
                ]
            },
            {
                "category": "Plats Signature",
                "items": [
                    { "name": "Risotto Beaufort & Chanterelles", "price": "20,00€" },
                    { "name": "Pavé de skrei nacré & Coques", "price": "26,00€" },
                    { "name": "Chou farci cochon et veau", "price": "19,00€" },
                    { "name": "Noix de Saint-Jacques au beurre blanc", "price": "29,00€" },
                    { "name": "Saucisse au couteau & Purée maison", "price": "18,50€" },
                    { "name": "Filet Américain (Tartare)", "price": "21,00€" },
                    { "name": "Steak Frites (Bœuf Français)", "price": "24,00€" }
                ]
            },
            {
                "category": "Pièces de Boucher (1kg environ)",
                "items": [
                    { "name": "Côte de Bœuf Normande (~1kg)", "price": "96,00€", "description": "Servie avec jus, condiments et frites maison." },
                    { "name": "Côte Blonde d'Aquitaine maturée 30j", "price": "11,00€", "description": "Prix pour 100g." }
                ]
            },
            {
                "category": "Dolce & Fromages",
                "items": [
                    { "name": "Mousse au chocolat 70% & Crème de marrons", "price": "9,00€" },
                    { "name": "Chou à la crème pâtissière", "price": "8,00€" },
                    { "name": "Crémeux agrumes & Crumble", "price": "11,00€" },
                    { "name": "Affogato al Caffè", "price": "7,50€" },
                    { "name": "Sélection de Fromages affinés", "price": "13,00€" },
                    { "name": "Trou Normand", "price": "10,00€" }
                ]
            },
            {
                "category": "Cocktails & Mixologie",
                "items": [
                    { "name": "Margarita", "price": "12,00€" },
                    { "name": "Espresso Martini", "price": "13,00€" },
                    { "name": "Mai Tai", "price": "12,50€" },
                    { "name": "Mule XII (Mule Maison)", "price": "12,00€" },
                    { "name": "Nuage Mule", "price": "11,50€" },
                    { "name": "Salty Skin", "price": "12,00€" },
                    { "name": "Birra Moretti / Artisanale", "price": "7,00€" }
                ]
            },
            {
                "category": "Vins au Verre (Sélection Française)",
                "items": [
                    { "name": "Verre de Vin Blanc (Sélection Raisonnée)", "price": "9,00€" },
                    { "name": "Verre de Vin Rouge (Cuvée Bamboche)", "price": "8,50€" },
                    { "name": "Coupe de Champagne", "price": "14,00€" }
                ]
            }
        ],
        "smart_tip": "La Formule Dej' à 25€ (Entrée+Plat) est l'un des meilleurs rapports qualité-prix du quartier Aligre. Le weekend, l'ambiance vire au festif vers le 'Comptoir' jusqu'à 01h."
    },
    "moods": {
        "chill": 60,
        "festif": 50,
        "culturel": 20
    },
    "description": "Bamboche Comptoir est l'incarnation du néo-bistrot parisien : des murs en pierre brute, du mobilier en bois massif, et une énergie contagieuse. Ici, le produit est roi : les viandes sont 100% françaises et sourcées chez des éleveurs responsables, tandis qu'une sélection pointue de vins 'raisonnés' accompagne chaque plat. C'est un lieu hybride où l'on déjeune dans le calme avant de voir le comptoir s'animer le soir dans une ambiance 'Comptoir' vibrante et conviviale. Une pépite brute près du marché d'Aligre.",
    "insider_tip": "• Ne ratez pas la côte de bœuf à partager, c'est la spécialité incontestée pour les tablées de copains.\n• Le service est décontracté mais d'une précision remarquable sur le conseil des vins.\n• Si vous êtes seul ou en duo, demandez le comptoir pour voir la brigade à l'œuvre.",
    "specials": {
        "cuisine": ["French Market", "Meat Specialist", "Seasonal"],
        "drinks": ["French Wines", "Artisan Beers", "Digestifs"],
        "must_eat": "Noix de Saint-Jacques au beurre blanc & Côte Normande.",
        "expert_catchline": "Produits vrais et ambiance brute au Marché d'Aligre."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVyaj4N8cpBfZ9I_iw3yHOcg2ea5tVy5ufqrlnxqXLJM2s53Y1UtWg-AVNC7GTcb52oHk5N1Svmta8mcsf5HV2oO0OcJQZwtj-SS4su238jj8NSRrVr9c8KIkTBtYJScs86TpxICLkNdxP-nPU6vSEl4hHpVceVMkUfeKSrkvOTQUMHX9SarxP1C-WIQE-ra8i9Dwf_pCMTJJaf9a2lvXWJjo6HrPfBkS9dhlgpJNh_Xl4nZRTWnKs3ShhqB93f8SWS-YMAatGhqR269UNBBctfrPjKoKsmCK1l4CIU0IoykcBNuMkN7JttznThTzaOHDNWKyc1nSX7vpkQpdY2x1QITn1nKBS0a0Dp9rEaBzhBPUGI0KWQOMOdmjqnIeQl_Wcg7yU6N_L4W-nDCwIZyqPAuoFDvHoM-cpyPA1SKOAoY1rxOF9UixR6AF2OVLzhZAn1gnf6P5rL5Z9h2I7kwMiPF5xZJaSbxHZwvMjcLednRPYyEQxb_F9nLb6oiYdJCk-DQ5ITiuns9WEFOyjc0rF5Nd2xncoUdh2HvqrEhMuGOLcRNZdxJpnznMTLlAKOfEWaT0FXundBbw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": []
    },
    "source": "expert_human"
};
