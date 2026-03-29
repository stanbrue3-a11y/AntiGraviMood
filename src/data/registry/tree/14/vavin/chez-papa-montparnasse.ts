import { SurgicalPlace } from "../../../type-definition";

export const chez_papa_montparnasse: SurgicalPlace = {
    id: "poi-chez-papa-montparnasse",
    name: "Chez Papa Montparnasse",
    slug: "chez-papa-montparnasse",
    category: "restaurant",
    subcategory: ["sud-ouest", "traditionnel", "genereux", "terrasse", "familial", "nocturne"],
    location: {
        address: "138 Boulevard du Montparnasse, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8408424,
        lng: 2.3323028,
        nearest_metro: "Vavin",
        metro_lines: ["4"],
        google_id: "ChIJC0tMA8Zx5kcRT0FUzlguCls"
    },
    moods: {
        chill: 60,
        festif: 50,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: 8:00 AM – 2:00 AM | Tuesday: 8:00 AM – 2:00 AM | Wednesday: 8:00 AM – 2:00 AM | Thursday: 8:00 AM – 2:00 AM | Friday: 8:00 AM – 2:00 AM | Saturday: 8:00 AM – 2:00 AM | Sunday: 8:00 AM – 2:00 AM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "http://www.chez-papa.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        dish_price: 19,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Les Incontournables de Papa",
                items: [
                    { name: "Confit de Canard de Papa", price_cents: 1910, description: "Le grand classique avec pommes sautées 'Papa'." },
                    { name: "L'Escalope de Veau Campagnarde", price_cents: 2040 },
                    { name: "Cassoulet Artisanal Maison", price_cents: 2450 },
                    { name: "L'Axoa de Veau au Piment d'Espelette", price_cents: 1890 },
                    { name: "Magret de Canard au Miel", price_cents: 1690 },
                    { name: "L'Aligot et sa Saucisse de Toulouse", price_cents: 1990 },
                    { name: "Burger Cantalou (Cantal & Bacon)", price_cents: 1760 },
                    { name: "Bavette Rouergate", price_cents: 1940 },
                    { name: "Tartare de Canard au Foie Gras chaud", price_cents: 2450 }
                ]
            },
            {
                category_type: "other",
                display_label: "Mises en Bouche & Salades Gargantuesques",
                items: [
                    { name: "Salade Super 'Papa' (la plus complète)", price_cents: 1850 },
                    { name: "Salade Landaise au Foie Gras", price_cents: 1950 },
                    { name: "Escargots au Bleu de Brebis (les 12)", price_cents: 1600 },
                    { name: "Planche de Foie Gras Entier 'Papa'", price_cents: 1970 },
                    { name: "Oeufs Pochés au Bleu de Brebis", price_cents: 1050 },
                    { name: "Planche Mixte du Sud-Ouest", price_cents: 2850 },
                    { name: "Rillons de Canard", price_cents: 890 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs du Sud-Ouest",
                items: [
                    { name: "Tatin flambée au Bas Armagnac", price_cents: 890 },
                    { name: "Gâteau Basque à la cerise noire", price_cents: 810 },
                    { name: "Croustade de Pommes au caramel", price_cents: 750 },
                    { name: "Le Vrai Pain Perdu de Papa", price_cents: 860 },
                    { name: "Mousse au Chocolat généreuse", price_cents: 620 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXB4h-MRjPCYlmxDbYTAMKzYMMkSngRkDltGvSxzlyPLqFOx6nuDj7r7xXAphNKx11BCovXRMtQC9HxVIkwjui5nUBbdPMTp0fLUQzGSo_TmBadsEJJruMwsSJvcLpXUDkpA-EEgF2KnfloZ_aUmGNFc1GLIurtXHU3Q29razCR6-hb9VQE2yckjvWAXzo-mdEZOcR03yyPZCF7xtW6Sg1wIyP2FQNtVblMbZ07HkHkz7WTbGAPcIS8XG8wXO6lKA8YiovI9EzNXsVupZlT48RuSQVrcYoK1cYzGvGmVbOtew&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUrFA70kaeehWDCUoeSg7boASD7TZPuAcRMaP0ZAGs8rH_EuTIG87PeAt_W42tDWOvKBHJqWlBevEK-pOYkh80eE0fOvEpQPNu7GCXo7o4MD8A3XvcYvmSoNrDvGADeF6kc-Sbmtj3wM_1MlYyaoWOcYzlxWSU4g9gktIcWMPuW-VPyALSvrKMIeHjPZQsYB6Hp1rvD-tVWZo2cqdumhl5h2xmEUW8HX-Mny1CA12KyjKSSRWWtKRO8yj7pxbO1mzb8rSjunNxBM92n7bBPA0xMxVa2IHLxZYp1eDhHP7D_NA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.0,
    description: "Chez Papa, c'est l'ambassade la plus conviviale du Sud-Ouest à Montparnasse. Oubliez la diététique et plongez dans une cuisine de terroir rustique, servie avec une générosité qui frise l'insolence. Ici, les salades sont servies dans des saladiers de famille et les plats de résistance pourraient nourrir une escouade de rugbymans. C'est l'adresse refuge par excellence pour ceux qui cherchent la chaleur d'un repas de village au cœur de la capitale, le tout dans une ambiance bon enfant où le rire et les bons appétits sont rois. Service continu et atmosphère sans chichis font de Chez Papa une valeur sûre, de jour comme de nuit.",
    insider_tip: "Les portions sont réellement massives, n'hésitez pas à partager une 'Salade Gargantuesque' avant d'attaquer les plats chauds. L'aligot est filé à la demande, un spectacle à ne pas manquer pour les amateurs de fromage.",
    expert_catchline: "La générosité brute et gourmande du Sud-Ouest à Vavin.",
    specials: {
        cuisine: ["Sud-Ouest", "Terroir Français"],
        drinks: ["Pacherenc", "Madiran de Producteur"],
        must_eat: "L'Aligot Saucisse et la Tatin flambée.",
        must_drink: "Un verre de vin des Côtes de Gascogne."
    },
    source: "expert_human"
};
