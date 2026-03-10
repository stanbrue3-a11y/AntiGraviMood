import { SurgicalPlace } from "../../../type-definition";

export const triplettaGaite: SurgicalPlace = {
    id: "poi-tripletta-gaite-75014",
    name: "Tripletta Gaité",
    slug: "tripletta-gaite-paris-14",
    category: "restaurant",
    subcategory: ["pizza", "italien", "vibrant", "terrasse", "napolitain"],
    location: {
        address: "1 Impasse de la Gaité, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8405655,
        lng: 2.3247326,
        nearest_metro: "Gaité",
        metro_lines: ["13"],
        google_id: "ChIJlaEwLn9x5kcRLsh7q_LCDkM"
    },
    moods: {
        chill: 70,
        festif: 85,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: 11:30 AM – 10:45 PM | Tuesday: 11:30 AM – 10:45 PM | Wednesday: 11:30 AM – 10:45 PM | Thursday: 11:30 AM – 10:45 PM | Friday: 11:30 AM – 10:45 PM | Saturday: 11:30 AM – 10:45 PM | Sunday: 11:30 AM – 10:45 PM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://triplettagaite.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        dish_price: 16, // MÉDIAN des pizzas
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Le Pizze Classiche",
                items: [
                    { name: "Margherita (Pomodoro, Mozzarella, Basilico)", price: "13.00€" },
                    { name: "Marinara (Pomodoro, Aglio, Origano)", price: "10.00€" },
                    { name: "Bufala (Pomodoro, Mozzarella di Bufala)", price: "16.00€" },
                    { name: "Napoletana (Pomodoro, Acciughe, Capperi)", price: "15.00€" },
                    { name: "Regina (Pomodoro, Mozzarella, Jambon, Champignons)", price: "16.50€" }
                ]
            },
            {
                category: "Le Speciali di Tripletta",
                items: [
                    { name: "Tripletta (Pomodoro, Mozzarella, N'duja, Spianata)", price: "18.00€" },
                    { name: "Truffe (Mozzarella, Crème de Truffe, Champignons)", price: "19.50€" },
                    { name: "Mortadella (Mozzarella, Mortadelle, Pesto de Pistoles)", price: "18.50€" },
                    { name: "Burratina (Pomodoro, Burrata entière)", price: "19.00€" },
                    { name: "Veggie (Mozzarella, Légumes Grillés)", price: "16.00€" }
                ]
            },
            {
                category: "Antipasti & Dolci",
                items: [
                    { name: "Burrata Pugliese aux Tomates Cerises", price: "14.50€" },
                    { name: "Planche de Charcuteries Italiennes", price: "17.00€" },
                    { name: "Focaccia Maison à l'Huile d'Olive", price: "7.00€" },
                    { name: "Tiramisu della Nonna", price: "8.50€" },
                    { name: "Panna Cotta aux Fruits Rouges", price: "7.50€" },
                    { name: "Calzone à la Pâte à Tartiner", price: "9.50€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVE3js4xRE6riUbYjAcuwcjd15Y5f_QWkCwhu4XOgahl7wKE4HW_VL6jqZppldAwGDmdS9cY06p14wIXKu-_LnewgyyJKjWyA3k6QVta8HnXQE9eo4InOkT-4mgHvn1uW3JN1UcT7jnxkS3vc56UUkYEHsZNJd4RM1Zx2KLiEJJUMbmIrqYzFcvoASsCFOd-UaMu6rwVyBSuo1nK3-qx5kubDa0j8NIdtbDZdpjGxSgcCFWCYncwmtkTgwmNPIefLwwzpv52KBE5onZXSkYc85boyk4_faBq8fiUTdLi0Y3FQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU3bhHEvh387FEgwmdnQiLypByPjroJZTydAkuOk1EBlSK8e7zr7SastA_ZJc6QiWjpZaIZJuARhVjuUfuiooTsST9dKK1UTDzsgM8jpAOIvlwStTgLXkwwztWwLy5zio-G7_XCKlKqCFH3c-I9ILDTb23E9mjqUI85WB-FBWKGMgn6q7pgStJxOoi1XNjDcqo6bsngWETY1m2cOC_O0oT-P571zNx7eHjHAMzvd3dtmvIJwVU4TKWA7-4agqdgwXR-bmW6NIlwONgPyzJTx5xo4M5IjrvxBXj4Eqy2m9NHpu3SIt4ffztwru9vbDOlANhKefeW-AuJFs7Av5xe-8IaRx-FhUXtR2NpDf-ttTga1XcjJK3Co5OZnmPyzcsJFFgZVZREFk0y0xM4FlLnlxJ25zL5t7TBU1_6O21Jqwx-49L8mIAujf_ZrRrVaA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.6,
    description: "Tripletta Gaité est l'ambassade de la pizza napolitaine dans le quartier de la Gaité. Avec son four à bois imposant et sa décoration industrielle chaleureuse, le lieu dégage une énergie vibrante dès l'entrée. La pâte, longuement maturée, est une merveille de légèreté et de moelleux, garnie de produits sourcés directement en Italie. La terrasse, située dans une petite impasse calme, est une pépite rare dans ce quartier animé. C'est l'adresse idéale pour une pizza entre amis avant une séance de théâtre.",
    insider_tip: "Demandez une table en terrasse si le temps le permet, l'impasse est très charmante. La pizza Tripletta avec sa N'duja (saucisse piquante calabraise) est un must pour les amateurs de sensations fortes.",
    expert_catchline: "La pizza napolitaine pure et vibrante à Montparnasse.",
    specials: {
        cuisine: ["Napolitaine", "Italienne Contemporaine"],
        drinks: ["Spritz", "Vins Italiens Bio", "Bières Artisanales"],
        must_eat: "La pizza Tripletta et la Burrata Pugliese.",
        must_drink: "Un Spritz classique ou un vin rouge des Pouilles."
    },
    source: "expert_human"
};
