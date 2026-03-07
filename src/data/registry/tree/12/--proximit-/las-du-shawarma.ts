import { SurgicalPlace } from '../../../../type-definition';

export const las_du_shawarma: SurgicalPlace = {
    "id": "poi-las-du-shawarma",
    "name": "L'As du Shawarma",
    "slug": "las-du-shawarma",
    "category": "restaurant",
    "subcategory": ["libanais", "israélien", "shawarma", "falafel", "street-food", "traiteur"],
    "verified": true,
    "google_rating": 4.5,
    "location": {
        "address": "18 Rue d'Aligre, 75012 Paris",
        "arrondissement": 12,
        "lat": 48.848834,
        "lng": 2.378037,
        "nearest_metro": "Ledru-Rollin",
        "metro_lines": [8],
        "google_id": "ChIJ03N3U7N-5kcRhLhgH-Y_Y-g"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "wifi": false,
        "terrace": false,
        "opening_hours_raw": "Lundi-Mardi: 12:00-23:00\nMercredi: Fermé\nJeudi-Dimanche: 12:00-23:00",
        "main_action": {
            "type": "site",
            "url": "https://lasdushawarma.fr/",
            "label": "COMMANDER"
        },
        "cuisine_type": "Libanaise & Levantine"
    },
    "pricing": {
        "is_free": false,
        "index_price": 12,
        "primary_price_type": "dish",
        "dish_price": 16, // MANUAL: Assiette complète (Meat, sides) over Sandwich
        "force_manual_dish_price": true,
        "pint_price": 0, // Ne sert pas d'alcool (Halal/Religieux possiblement)
        "wine_glass": 0,
        "coffee_price": 2.0,
        "soft_price": 3.0,
        "menu_items": [
            {
                "category": "Sandwichs (Le Cœur du Sujet)",
                "items": [
                    { "name": "Sandwich Shawarma Poulet", "price": "11,95€", "description": "Poulet mariné, laitue, cornichons libanais, frites, sauce Toum (ail) maison." },
                    { "name": "Sandwich Shawarma Bœuf", "price": "10,95€", "description": "Bavette de bœuf marinée, oignons, tomates, persil, menthe, sauce tahini." },
                    { "name": "Sandwich Falafel", "price": "10,95€", "description": "Falafels croustillants, navets marinés, persil, menthe, tomates, sauce tarator." },
                    { "name": "Sandwich Mixte (Bœuf & Poulet)", "price": "12,50€" }
                ]
            },
            {
                "category": "Formules Habibi",
                "items": [
                    { "name": "Formule Classique", "price": "15,50€", "description": "1 Sandwich au choix + Frites + 1 Boisson." },
                    { "name": "Formule Mezzé", "price": "12,95€", "description": "1 Sandwich au choix + 2 pièces de Mezzé chaud." },
                    { "name": "Formule Habibi Duo", "price": "29,00€", "description": "2 Sandwichs au choix + 4 pièces de Mezzé chaud + 2 Boissons." }
                ]
            },
            {
                "category": "Mezzés Froids (Traiteur)",
                "items": [
                    { "name": "Hommos", "price": "7,95€", "description": "Crème de pois chiches à la tahina, huile d'olive." },
                    { "name": "Moutabal (Caviar d'Aubergines)", "price": "7,95€", "description": "Aubergines grillées fumées, tahina." },
                    { "name": "Labné", "price": "7,50€", "description": "Fromage frais onctueux libanais." },
                    { "name": "Feuilles de vignes (5 pièces)", "price": "7,50€", "description": "Farcies au riz et herbes." },
                    { "name": "Taboulé Libanais", "price": "7,95€", "description": "Persil plat, tomates, oignons, boulgour, citron." },
                    { "name": "Baba Ganoush", "price": "7,95€" }
                ]
            },
            {
                "category": "Mezzés Chauds (À la pièce/3pcs)",
                "items": [
                    { "name": "Falafel (3 pièces)", "price": "5,50€", "description": "Boulettes de pois chiches épicées, sauce tahina." },
                    { "name": "Samboussek Viande (3 pièces)", "price": "7,95€", "description": "Chaussons frits fourrés au bœuf haché." },
                    { "name": "Rakakat au Fromage (3 pièces)", "price": "7,95€", "description": "Rouleaux croustillants au fromage." },
                    { "name": "Fatayer Épinards (3 pièces)", "price": "7,50€", "description": "Triangles farcis aux épinards et pignons." },
                    { "name": "Kebbé (3 pièces)", "price": "8,50€", "description": "Boulettes de boulgour farcies à la viande hachée." }
                ]
            },
            {
                "category": "Assiettes Complètes",
                "items": [
                    { "name": "Assiette Shawarma Poulet", "price": "15,50€", "description": "Poulet, taboulé, hommos, cornichons, crème d'ail." },
                    { "name": "Assiette Shawarma Bœuf", "price": "16,50€", "description": "Bœuf, taboulé, hommos, tomates, sauce tarator." },
                    { "name": "Assiette Falafel (Végé)", "price": "14,50€", "description": "5 falafels, taboulé, hommos, moutabal." },
                    { "name": "Assiette Mixte Royale", "price": "18,50€" }
                ]
            },
            {
                "category": "Desserts Maison",
                "items": [
                    { "name": "Baklava (3 pièces)", "price": "5,50€", "description": "Pâte filo beurrée, miel, noix." },
                    { "name": "Maamoul Pistache", "price": "3,50€", "description": "Pâtisserie sablée à la pistache." },
                    { "name": "Knafé", "price": "6,50€", "description": "Fromage blanc fondant, cheveux d'ange, sirop." },
                    { "name": "Mouhalabié", "price": "5,00€", "description": "Flan au lait parfumé à la fleur d'oranger." }
                ]
            },
            {
                "category": "Boissons & Softs",
                "items": [
                    { "name": "Ayran (Lait fermenté)", "price": "3,50€" },
                    { "name": "Coca-Cola / Zéro (33cl)", "price": "2,50€" },
                    { "name": "Pepsi Max / 7Up", "price": "2,50€" },
                    { "name": "Ice Tea Pêche", "price": "2,50€" },
                    { "name": "Eau Plate Evian (50cl)", "price": "2,00€" },
                    { "name": "Eau Gazeuse Perrier (33cl)", "price": "2,50€" }
                ]
            }
        ],
        "smart_tip": "La sauce Toum (ail) maison est une tuerie absolue. Demandez-en un supplément si vous n'avez pas de rendez-vous galant juste après. Le Shawarma Poulet avec les frites *à l'intérieur* est le vrai classique du lieu."
    },
    "moods": {
        "chill": 40,
        "festif": 20,
        "culturel": 30
    },
    "description": "Situé en plein cœur du marché d'Aligre, L'As du Shawarma est l'adresse de référence pour ceux qui cherchent le vrai goût du Liban sans artifice. Ici, la viande marine des heures dans des épices importées de Beyrouth et les falafels sont façonnés à la commande. C'est une échoppe vibrante, souvent bondée, où l'on vient pour l'efficacité, la générosité et ce parfum de grillades qui embaume la rue. Un pilier de la street-food du 12e arrondissement.",
    "insider_tip": "• Ne vous laissez pas impressionner par la file d'attente, ça débite très vite.\n• Prenez votre sandwich à emporter et allez le manger sur les bancs du square Trousseau à 2 minutes de là.\n• Les Arancini version libanaise (Kebbé) sont d'une finesse rare, testez-les en complément.",
    "specials": {
        "cuisine": ["Lebanese", "Shawarma", "Street Food"],
        "drinks": ["Ayran"],
        "must_eat": "Le Shawarma Poulet sauce Toum.",
        "expert_catchline": "Le temple du shawarma authentique au Marché d'Aligre."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW0It2pjG0Ug1EgDTITIiexlrjWo7IGcPxHPjUJ6Me3VvvFYIIcWeD90UFHe4jGbUPbAN2xUU_NWkTxMr2If8-0ZXyUjYfWc8uZaxnd0-r2qLLfEBGe27XYUf6UVn_FciUnJfAM1TeYsQuf0zJ0EMiMF1g5ARKX8MRWJ_vhxk_Brhl6hEaY8wyRAD8GVMD5hsiLu4xAAVyJdQr2p8Tdx7s-hF-AUItuCkyPpgHfcKCLwu7YIFmY0MkCpYMJUNHAj-W-Ft02NyMlRavZ_npqhrcpRnApqm_af-22BRwC9qvUzXeYBVY&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": []
    },
    "source": "expert_human"
};
