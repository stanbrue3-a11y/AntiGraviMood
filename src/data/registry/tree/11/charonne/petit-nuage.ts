import { SurgicalPlace } from '../../../type-definition';

export const petit_nuage: SurgicalPlace = {
    id: "poi-petit-nuage",
    name: "Petit Nuage",
    slug: "petit-nuage",
    category: "restaurant",
    subcategory: ["bistronomique", "fusion", "petites assiettes", "restaurant"],
    location: {
        address: "51 Rue Basfroi",
        arrondissement: 11,
        lat: 48.854109,
        lng: 2.381388,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJI_Q8rWNt5kcRrB0WvXFfQU"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Monday: Closed\nTuesday: 12:00–2:30 PM, 7:00–11:00 PM\nWednesday: 12:00–2:30 PM, 7:00–11:00 PM\nThursday: 12:00–2:30 PM, 7:00–11:00 PM\nFriday: 12:00–2:30 PM, 7:00–11:00 PM\nSaturday: 12:00–2:30 PM, 7:00–11:00 PM\nSunday: 12:00–2:30 PM, 7:00–11:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://petitnuageparis.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 2.50,
        dish_price: 21, // Average of the larger plates/carpaccio
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category: "Formules Déjeuner (Contenu variable)",
                items: [
                    { name: "Formule E + P (ou P + D)", price: "24.00€" },
                    { name: "Formule Complète (E + P + D)", price: "29.00€" },
                    { name: "Entrée seule", price: "9.00€" },
                    { name: "Plat seul", price: "19.00€" },
                    { name: "Dessert seul", price: "9.00€" }
                ]
            },
            {
                category: "Tapassiettes du Soir (Salé)",
                items: [
                    { name: "Cheese Naan truffé", price: "9.00€", description: "Le best-seller du soir." },
                    { name: "Gyozas de bœuf braisé", price: "15.00€" },
                    { name: "Gnocchis de patates douces", price: "15.00€" },
                    { name: "Carpaccio de Dorade (selon arrivage)", price: "21.00€" },
                    { name: "Ballotine de pintade farcie", price: "19.00€" },
                    { name: "Faux-filet de bœuf Normand", price: "24.00€" },
                    { name: "Celerisotto", price: "15.00€" }
                ]
            },
            {
                category: "Douceurs Fin de Repas",
                items: [
                    { name: "Fontainebleau aux fruits de saison", price: "11.00€" },
                    { name: "Tarte Tatin maison", price: "11.00€" },
                    { name: "Mousse au chocolat noir 72%", price: "11.00€" }
                ]
            },
            {
                category: "Cocktails Signatures",
                items: [
                    { name: "Petit Nuage (Gin Hendrick's)", price: "13.00€" },
                    { name: "Mayday (Rhum Sailor Jerry)", price: "12.00€" },
                    { name: "Jamaican Mule", price: "11.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU_WnxROlMYL2u7iKceqSoIKEmDPeyeu1X_8ODDr7gh0UAGF0k13r5qxO66PjOrFINXtADvnS9zqVqfjQNpWlY65WGEbRAquo0NPyD5qGFJjJniV8TXd53kIbktS-1qtXBNNRD9_Z0PH0YNKyQZI7eRjz03LBCcvUgt4GTdASfwysNbD2JO2r3UL86GMTAoRbLKQNAtCU-adA4OwnXN_QSjYlHwvRge3cx5ga-KEoOgf7qfggUOGx9GTATzDdTUgL5hDPcyxgDXAEPGZIowfBC0Y6jwdfCA0Y5l6gjptHlWT-IjljyGZxPw_muEtj6ZfDPmDhoEqFe83_5KMsFawv1MEA8Vkb_AW5NIxggWWK_mW6DpSJjuoLx6wkLT34v58vRO6Tyq-_-zEp-i8yMiL-mclcircDSW0BohBueErVfP9Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.9,
    description: "Petit Nuage est un néobistrot vibrant de la rue Basfroi qui mixe avec brio les codes de la gastronomie française et des touches asiatiques audacieuses. Le midi, on y trouve des formules fraîches et accessibles ; le soir, le lieu se transforme en spot à tapassiettes (comme le célèbre cheese naan truffé) dans une ambiance tamisée et conviviale. Une cuisine inventive, lisible et portée par un sourcing de haute volée.",
    insider_tip: "• Les cheese naans (truffés ou butter chicken) sont l'incontournable absolu pour démarrer la soirée.\n• La salle est souvent comble dès le milieu de semaine, réservez en ligne.\n• Belle sélection de cocktails signatures qui change des classiques habituels.\n• Les gyozas de bœuf maison sont d'une finesse rare.",
    expert_catchline: "Néobistrot de quartier aux accents fusion : créativité, cheese naans de luxe et ambiance cool.",
    specials: {
        cuisine: ["Cheese Naan truffé", "Bœuf braisé en gyoza", "Ballotine de pintade", "Bistronomie fusion"],
        drinks: ["Cocktails à base de Gin Hendrick's", "Sélection de vins nature"],
        must_eat: "Le Cheese Naan truffé : un mariage terre-mer déroutant mais addictif qui résume l'esprit fusion du lieu.",
        must_drink: "Le cocktail 'Petit Nuage' (Gin Hendrick's) pour rester dans le thème aérien du restaurant."
    }
};
