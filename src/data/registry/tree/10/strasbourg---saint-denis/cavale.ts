import { SurgicalPlace } from '../../../type-definition';

export const cavale: SurgicalPlace = {
    id: "poi-cavale",
    name: "Cavale",
    slug: "cavale",
    category: "restaurant",
    subcategory: ["brasserie", "français", "bar"],
    location: {
        address: "40 Rue des Petites Écuries",
        arrondissement: 10,
        lat: 48.8739145,
        lng: 2.3502589,
        nearest_metro: "Strasbourg - Saint-Denis",
        metro_lines: [4, 8, 9],
        google_id: "ChIJVXsQixRu5kcRRNuV5Qc4S4Q"
    },
    moods: {
        chill: 10,
        festif: 80,
        culturel: 10
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 10:00–01:30\nmardi: 10:00–01:30\nmercredi: 10:00–01:30\njeudi: 10:00–01:30\nvendredi: 10:00–01:30\nsamedi: 10:00–01:30\ndimanche: 11:00–01:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.castaniu-family.fr/restaurant-brasserie-cavale-paris/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        // OFFICIALLY VERIFIED: They serve pints but not listed on the web extraction
        pint_price: 0,
        cocktail_price: 0,
        wine_glass: 0,
        coffee_price: 0,
        // NOT FOUND: Auto-calculated via `compile_registry.ts`
        dish_price: 0,
        last_updated: "2026-03-05",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Pour Commencer (Entrées / Tapas)",
                items: [
                    { name: "Croquetas de truffade et coppa (3 pièces)", price_cents: 1000 },
                    { name: "Accra de cabillaud et patate douce (6 pièces)", price_cents: 1100 },
                    { name: "Oeuf mayo à la chapelure d'herbes", price_cents: 1000 },
                    { name: "Terrine de Steph", price_cents: 1200 },
                    { name: "Ceviche de thon", price_cents: 1200 },
                    { name: "Gros nem de feta croustillant", price_cents: 1100 }
                ]
            },
            {
                category_type: "other",
                display_label: "Salades & Bowls",
                items: [
                    { name: "Bun (nouilles chinoises, nems poulet)", price_cents: 1900 },
                    { name: "Mama (saumon mariné et fumé, agrumes)", price_cents: 2000 },
                    { name: "Capra (chèvre pané, fruits secs, jambon)", price_cents: 1900 },
                    { name: "Cobb (poulet croustillant, bacon)", price_cents: 2000 },
                    { name: "Trotro (lentille verte, patate douce, halloumi)", price_cents: 1900 },
                    { name: "Bowl de la semaine", price_cents: 2000 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "À Partager & Grignotages",
                items: [
                    { name: "Planche de charcuterie", price_cents: 2000 },
                    { name: "Planche de fromages affinés", price_cents: 2000 },
                    { name: "Planche Mixte", price_cents: 2300 },
                    { name: "Le Croque (jambon, crème de truffe d'été)", price_cents: 900 },
                    { name: "Camembert rôti, noix de pécan, sirop d'érable", price_cents: 1000 },
                    { name: "Castaniù (frites, cantal fondu, lard fumé)", price_cents: 900 },
                    { name: "Assiette de frites", price_cents: 600 },
                    { name: "Frites de patate douce", price_cents: 800 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats (Poissons, Veggies, Viandes)",
                items: [
                    { name: "Mi-cuit de thon", price_cents: 2400 },
                    { name: "Lasagne butternut/artichaut", price_cents: 2100 },
                    { name: "Pavé de saumon", price_cents: 2400 },
                    { name: "Gambas snackées", price_cents: 2400 },
                    { name: "Mafaldine", price_cents: 2300 },
                    { name: "Magret de canard", price_cents: 2400 },
                    { name: "Poitrine de cochon Normand", price_cents: 2300 },
                    { name: "Bavette", price_cents: 2300 },
                    { name: "Suprême de volaille fermière", price_cents: 2400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Burgers & Hot Dog",
                items: [
                    { name: "Le Cavale (Steak haché, Saint-Nectaire)", price_cents: 2000 },
                    { name: "Le Gros cochon (Porc confit, cheddar)", price_cents: 2000 },
                    { name: "Le Guezmer Vege (Merguez veggie)", price_cents: 2000 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Pour Finir (Desserts & Fromages)",
                items: [
                    { name: "Fromage au choix", price_cents: 600 },
                    { name: "Assiette 3 fromages", price_cents: 1200 },
                    { name: "Mookie (Crème anglaise praliné, glace)", price_cents: 1100 },
                    { name: "Millefeuille", price_cents: 1000 },
                    { name: "Riz au lait de coco", price_cents: 1100 },
                    { name: "Des fruits, des fruits, des fruits", price_cents: 1000 },
                    { name: "Brioche perdue", price_cents: 1000 },
                    { name: "Mont blanc", price_cents: 1100 },
                    { name: "Café gourmand", price_cents: 1000 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUvLHcc1RCffFlLtbE5XSUc83DG1W3wJc0LejswLsb7LTWg3M0J8CkTaYGtfO_KsxSLz1AgV1drzi4dMpt5WrC7VSQ7t4I5L9-KjvK_yfh2yf19cdfi-KC7dRY8pg6bOGL6yJkDVSYePyP1xe3EpIqVJdg1QR-58TywamUhwT6gg9NzQxF8NST7B9weu1d_5y6VSbhzUnxJUcYEboADE0CZYeXhbGMP4t5iDoL3Ttbo-kKZSdUnOLcVga5eGwAexuyAHq9xSQGHzRmvwfViUWMG_eHHjtqoaTmPU4wy3DdMar8ReCHdPKP0Y1YckWWR6g_8JzPGmqvs7GHTW7BHUS57Q6dZeuGp5AkllHdgwB-jF4WaliC93g1tb6OqUjoabLckhll7i4xLZ-EXP2a22MPPifmUsuNQpQcQ4srkpOfyptu5bjycHFfL06A6KhQecRc1rNwEuKs8NWi4cqcTWguPqGYAoL0ywsEc5EjRGRPedYZfJ90GO4RbVfKfWHjmFVQtMT4S4XcV7o5GXB6fELWXiXqMhytWtS2jBpwiDJVHRvs9NecWwz3GXC-WruBYgDKVh-mV&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "cavale_paris",
    verified: true,
    google_rating: 4.8,
    description: "Installée rue des Petites Écuries, Cavale est la brasserie moderne par excellence du 10ème arrondissement. Dotée d'une architecture singulière avec son plafond miroir, sa décoration léchée et sa terrasse couverte, le lieu vibre au rythme des bandes de copains qui s'y retrouvent pour de grandes tablées animées. Côté assiette, c'est une cuisine française créative, généreuse, et redoutablement efficace qui fait le pont entre classiques bistrotiers et street-food pointue.",
    insider_tip: "• Si vous cherchez un dîner romantique et calme, fuyez : l'endroit est réputé pour son niveau sonore extrêmement festif (et bruyant) en soirée.\n• La terrasse couverte est équipée de chauffages et de couvertures en hiver, ce qui en fait un spot très prisé toute l'année.\n• Leurs \"tapas\" hybrides, comme les gros Nems de Feta (11€) ou le Castaniù (Frites, cantal fondu et lard fumé à 9€), sont exceptionnels pour accompagner l'apéro.",
    expert_catchline: "Brasserie vibrante et bouillonnante du 10ème, où l'on dévore une cuisine ultra-généreuse dans un joyeux vacarme.",
    specials: {
        cuisine: ["Magret de canard au sirop d'érable", "Le Croque à la truffe d'été", "Gros nem de Feta croustillant", "Brioche Perdue"],
        drinks: ["Pinte de bière", "Cocktails création", "Vin de copains"],
        must_eat: "Cuisine de brasserie percutante. Incontournables : les croquetas truffade, le magret de canard au sirop d'érable, et la fameuse brioche perdue en dessert.",
        must_drink: "Large sélection de cocktails création, vins nature pointus et pintes fraîches. Le bar tourne à plein régime jusqu'à la fermeture."
    }
};
