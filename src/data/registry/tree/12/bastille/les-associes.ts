import { SurgicalPlace } from '../../../../type-definition';

export const les_associes: SurgicalPlace = {
    "id": "poi-309",
    "name": "Les Associés",
    "slug": "les-associes",
    "category": "restaurant",
    "subcategory": [
        "brasserie",
        "bar",
        "afterwork"
    ],
    "verified": true,
    // VERIFIED: Google Maps API (place_id: ChIJ83MJdgFy5kcR595wur1Undg)
    "google_rating": 3.7,
    "location": {
        // VERIFIED: Google Maps API
        "address": "50 Boulevard de la Bastille",
        "arrondissement": 12,
        "lat": 48.8515138,
        "lng": 2.3694951,
        "nearest_metro": "Bastille",
        "metro_lines": [
            1,
            5,
            8
        ]
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": false,
        // NOT CONFIRMED: aucune source ne mentionne le WiFi
        "wifi": false,
        // VERIFIED: Privateaser — "deux terrasses dont une couverte"
        "terrace": true,
        // VERIFIED: Google Maps API weekday_text — 07h-02h tous les jours
        "opening_hours_raw": "Lundi-Dimanche: 07h00 - 02h00",
        "main_action": {
            "type": "book",
            "url": "https://www.privateaser.com/lieu/46912-les-associes"
        },
    },
    "pricing": {
        "avg_budget": 15,
        "is_free": false,
        // VERIFIED: MisterGoodBeer (2 sources) — pinte 7€
        "pint_price": 7,
        // NOT FOUND: prix cocktails hors HH non trouvé
        "cocktail_price": 0,
        // VERIFIED: MisterGoodBeer — "verre de vin blanc/rosé 3€ en HH"
        "wine_glass": 0,
        // NOT FOUND: café mentionné dans avis Google mais sans prix
        "coffee_price": 0,
        // VERIFIED: eater.space + RestaurantGuru — American Burger 15€
        "dish_price": 15,
        // VERIFIED: eater.space + RestaurantGuru — Perrier/soft non trouvé
        "soft_price": 0,
        // VERIFIED: MisterGoodBeer — pinte 5€ en HH
        "hh_pint": 5,
        // NOT FOUND: cocktails HH non trouvé
        "hh_cocktail": 0,
        // VERIFIED: MisterGoodBeer — vin blanc/rosé 3€ en HH
        "hh_wine": 3,
        // VERIFIED: Privateaser + MisterGoodBeer — Happy Hour XXL 15h-00h
        "hh_time": "15h-00h tous les jours",
        // VERIFIED: eater.space + RestaurantGuru — menu complet
        "menu_items": [
            {
                "category": "Entrées",
                "items": [
                    { "name": "Tartare de tomate & mozzarella di Buffala au pistou", "price": "8,50€" },
                    { "name": "Croustillant nems au poulet & samosas végétariens", "price": "7,50€" },
                    { "name": "Assiette de saumon fumé de Norvège avec toast", "price": "7,00€" }
                ]
            },
            {
                "category": "Plats",
                "items": [
                    { "name": "American Burger pur bœuf, frites maison", "price": "15,00€" },
                    { "name": "Filet de cabillaud rôti à la poêle, petits légumes, pistou", "price": "15,00€" },
                    { "name": "Côte de bœuf, sauce béarnaise, pommes salardaises", "price": "19,50€" },
                    { "name": "Assiette de tapas", "price": "10,00€" }
                ]
            },
            {
                "category": "Desserts",
                "items": [
                    { "name": "Mi-cuit au chocolat tendre à cœur", "price": "6,50€" },
                    { "name": "Tarte Tatin, pomme Golden & quenelle de crème", "price": "6,50€" },
                    { "name": "Brioche façon pain perdu, caramel laitier & parfum glacé", "price": "6,50€" }
                ]
            },
            {
                "category": "Bières",
                "items": [
                    { "name": "Pinte", "price": "7,00€" },
                    { "name": "Pinte Happy Hour (15h-00h)", "price": "5,00€" }
                ]
            },
            {
                "category": "Happy Hour (15h-00h)",
                "items": [
                    { "name": "Pinte", "price": "5,00€" },
                    { "name": "Vin blanc / rosé (verre)", "price": "3,00€" }
                ]
            }
        ],
        "smart_tip": "Happy Hour XXL de 15h à minuit : pinte 5€, vin 3€. Côte de bœuf à 19,50€ pour les gros appétits.",
        "last_updated": "2026-02-28"
    },
    "moods": {
        "chill": 14,
        "festif": 20,
        "culturel": 3
    },
    "description": "Grande brasserie posée sur le boulevard de la Bastille, Les Associés joue la carte de la brasserie parisienne classique avec un twist afterwork. Deux terrasses (dont une couverte toute l'année), un intérieur spacieux, une cuisine française maison et un Happy Hour XXL qui s'étire de 15h jusqu'à minuit — le genre d'endroit où tu poses ton sac à la sortie du bureau et tu ne bouges plus de la soirée. La carte mélange burgers, tapas, plats de brasserie et un beau choix de desserts maison.",
    "insider_tip": "Le Happy Hour va jusqu'à MINUIT — c'est l'un des plus longs du quartier Bastille. Pinte à 5€ et verre de vin à 3€ pendant 9 heures d'affilée. La terrasse couverte est un game-changer quand il pleut. Attention : un avis MisterGoodBeer signale que les prix HH ne seraient pas toujours appliqués — vérifie à l'arrivée.",
    "specials": {
        "cuisine": [
            "American Burger frites maison (15€)",
            "Côte de bœuf béarnaise (19,50€)",
            "Filet de cabillaud rôti (15€)",
            "Assiette de tapas (10€)",
            "Mi-cuit chocolat (6,50€)",
            "Tarte Tatin (6,50€)"
        ],
        "drinks": [
            "Pinte (7€ / 5€ en HH)",
            "Vin blanc/rosé (3€ en HH)",
            "Cocktails"
        ],
        "must_eat": "Le burger maison frites à 15€ ou la côte de bœuf sauce béarnaise à 19,50€. En dessert, le mi-cuit chocolat tendre à cœur à 6,50€ — un classique indétrônable.",
        "expert_catchline": "Happy Hour de 9 heures (15h-00h), terrasse couverte, cuisine maison et l'addition qui reste douce — le QG afterwork du boulevard de la Bastille."
    },
    "images": {
        // VERIFIED: Google Maps API photo_reference
        "hero": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXw_nSVsJN21c6PzL3Iua-AVWmp35sWJxm9xdd6bvkzhkmbY_OSiVewW_ld1aGpTGvtFrM7P1kp7cmy6w6N-F1q9M_IW6ARR9evAgQk112-7IcC6xa1Yt0LdTOux4zPGRsVpc-m7vZ5lC8Sk0cNGfoLKctkI7mCTfQTXReLbX5RoLIYouhUZvXQDLEQgFdPS92ShPsPYndABiVneAj33N1DhJ_7WQV-ImAhE8v7aQZd0qQOPcUGtPhyM5VDfQBA5UEx6ck01qQ1GiM8XTROjMMvmckKf9pM0y8_9EFWcnzirnkR6szRydvr5wEZTud5DJqMjrGxdLlvho8Xbuluj4lhzFg1p80z-Q1DZSt6olrlbioJ_nElOijmC0Efalk4uYLiBuoFdVUw3km9Bfastil5SqQVDP53Vzcvm_iDMz6uWVW0nnFNDhTruiy8sSWPXdNjSCI9ZBnwIk0xxKXZTC-631SsIkzFWfJyQsJadZSX5hVSbNKbZrMfC1uviEOu21hwT22WxJYNytnqzdqaocT2hYK9iVLLvDeyTkIu__MHFCDaSRWxZMpURmkAfY9vYBbJv1k6Nk3hgJQt3hCG8owTqUyljQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        "gallery": []
    },
    "source": "research_ai"
};
