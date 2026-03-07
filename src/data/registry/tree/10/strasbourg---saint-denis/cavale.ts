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
                category: "Pour Commencer (Entrées / Tapas)",
                items: [
                    { name: "Croquetas de truffade et coppa (3 pièces)", price: "10.00€" },
                    { name: "Accra de cabillaud et patate douce (6 pièces)", price: "11.00€" },
                    { name: "Oeuf mayo à la chapelure d'herbes", price: "10.00€" },
                    { name: "Terrine de Steph", price: "12.00€" },
                    { name: "Ceviche de thon", price: "12.00€" },
                    { name: "Gros nem de feta croustillant", price: "11.00€" }
                ]
            },
            {
                category: "Salades & Bowls",
                items: [
                    { name: "Bun (nouilles chinoises, nems poulet)", price: "19.00€" },
                    { name: "Mama (saumon mariné et fumé, agrumes)", price: "20.00€" },
                    { name: "Capra (chèvre pané, fruits secs, jambon)", price: "19.00€" },
                    { name: "Cobb (poulet croustillant, bacon)", price: "20.00€" },
                    { name: "Trotro (lentille verte, patate douce, halloumi)", price: "19.00€" },
                    { name: "Bowl de la semaine", price: "20.00€" }
                ]
            },
            {
                category: "À Partager & Grignotages",
                items: [
                    { name: "Planche de charcuterie", price: "20.00€" },
                    { name: "Planche de fromages affinés", price: "20.00€" },
                    { name: "Planche Mixte", price: "23.00€" },
                    { name: "Le Croque (jambon, crème de truffe d'été)", price: "9.00€" },
                    { name: "Camembert rôti, noix de pécan, sirop d'érable", price: "10.00€" },
                    { name: "Castaniù (frites, cantal fondu, lard fumé)", price: "9.00€" },
                    { name: "Assiette de frites", price: "6.00€" },
                    { name: "Frites de patate douce", price: "8.00€" }
                ]
            },
            {
                category: "Plats (Poissons, Veggies, Viandes)",
                items: [
                    { name: "Mi-cuit de thon", price: "24.00€" },
                    { name: "Lasagne butternut/artichaut", price: "21.00€" },
                    { name: "Pavé de saumon", price: "24.00€" },
                    { name: "Gambas snackées", price: "24.00€" },
                    { name: "Mafaldine", price: "23.00€" },
                    { name: "Magret de canard", price: "24.00€" },
                    { name: "Poitrine de cochon Normand", price: "23.00€" },
                    { name: "Bavette", price: "23.00€" },
                    { name: "Suprême de volaille fermière", price: "24.00€" }
                ]
            },
            {
                category: "Burgers & Hot Dog",
                items: [
                    { name: "Le Cavale (Steak haché, Saint-Nectaire)", price: "20.00€" },
                    { name: "Le Gros cochon (Porc confit, cheddar)", price: "20.00€" },
                    { name: "Le Guezmer Vege (Merguez veggie)", price: "20.00€" }
                ]
            },
            {
                category: "Pour Finir (Desserts & Fromages)",
                items: [
                    { name: "Fromage au choix", price: "6.00€" },
                    { name: "Assiette 3 fromages", price: "12.00€" },
                    { name: "Mookie (Crème anglaise praliné, glace)", price: "11.00€" },
                    { name: "Millefeuille", price: "10.00€" },
                    { name: "Riz au lait de coco", price: "11.00€" },
                    { name: "Des fruits, des fruits, des fruits", price: "10.00€" },
                    { name: "Brioche perdue", price: "10.00€" },
                    { name: "Mont blanc", price: "11.00€" },
                    { name: "Café gourmand", price: "10.00€" }
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
