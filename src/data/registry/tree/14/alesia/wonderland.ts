import { SurgicalPlace } from "../../../type-definition";

export const wonderland: SurgicalPlace = {
    id: "poi-wonderland",
    name: "Wonderland Patisserie",
    slug: "wonderland-patisserie",
    category: "café",
    subcategory: ["patisserie", "moderne", "the", "trompe-l-oeil"],
    location: {
        address: "94 Rue d'Alésia, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.827436,
        lng: 2.327464,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJr7w4RG1x5kcRzChGP4H0Lus"
    },
    moods: {
        chill: 70,
        festif: 0,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Tuesday: 8:30 AM – 7:30 PM | Wednesday: 8:30 AM – 7:30 PM | Thursday: 8:30 AM – 7:30 PM | Friday: 8:30 AM – 7:30 PM | Saturday: 8:30 AM – 7:30 PM | Sunday: 8:30 AM – 1:30 PM | Monday: Closed",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.wonderland-patisserie-paris.com/",
            label: "DÉCOUVRIR"
        }
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 3.50,
        dish_price: 14.50,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Pâtisseries Trompe-l'œil (Douceurs)",
                items: [
                    { name: "Le Fantasia (Signature)", price: "8.40€" },
                    { name: "Le Cactus (Trompe-l'œil)", price: "8.10€" },
                    { name: "Le Moaï (Chocolat & Noisette)", price: "7.90€" },
                    { name: "Le Champi (Fruit de la passion)", price: "8.20€" },
                    { name: "La Noix (Caramel & Noix)", price: "7.80€" },
                    { name: "La Jacinthe (Fleurs & Mûres)", price: "8.40€" },
                    { name: "Le Coquelicot (Fruits Rouges)", price: "8.30€" }
                ]
            },
            {
                category: "Gâteaux de Voyage (Douceurs)",
                items: [
                    { name: "Banana Bread moelleux", price: "10.90€" },
                    { name: "Cake Peanut (Beurre de cacahuète)", price: "9.50€" },
                    { name: "Marbré Chocolat-Vanille", price: "7.00€" },
                    { name: "Carapek (Caramel & Pécan)", price: "8.80€" },
                    { name: "Gâteau Nantais (2/3 pers)", price: "8.50€" },
                    { name: "Cookie Chocolat Noir (Takeaway)", price: "3.00€" },
                    { name: "Cookie Noix de Macadamia", price: "3.00€" }
                ]
            },
            {
                category: "Viennoiseries (Douceurs)",
                items: [
                    { name: "Pain au Chocolat pur beurre", price: "1.40€" },
                    { name: "Croissant Wonderland", price: "1.30€" },
                    { name: "Chausson aux Pommes caramélisé", price: "2.40€" },
                    { name: "Brioche Sucre Fine", price: "2.10€" },
                    { name: "Baguette de tradition bio", price: "1.30€" }
                ]
            },
            {
                category: "Salé & Lunch (Plats)",
                items: [
                    { name: "Bowl Végétarien du Chef", price: "14.50€" },
                    { name: "Menu Quiche (Quiche & Dessert)", price: "14.00€" },
                    { name: "Quiche de saison & salade", price: "12.00€" },
                    { name: "Wrap Poulet Curry", price: "9.50€" },
                    { name: "Salade de Pâtes au Pesto", price: "10.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW6zaHamMbhV6sCLRwZzZ58Lc6l_myOFBhR3-7GVojNb5upvx4fTe6cSPZWn8_IjitMZWeMqaatoKMU5ckyglfapJrgR_87ub4NGR7SRQcmJbX_jWvXC6YAejpVhwPC0o7X6mb0o14hQYiEvxcaTlFOsCsyu-OlNCQa9a-GbTvtsHJv_4tgOZPDmeanzPHncr7oAbT4xQMgpi1BYNTaAfY7Q9HD7SPUJripWQlJTOJzcoqxXW2G9lRYjosfJ8RGNWhQwCpGkSuRw0_--Sc9NesdJlL0rqWc6LBy4t6xKwsCFg&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXctzMp9O-VEQdsEl2pCwyYEemu1AgLFdHEepq_aqJDRnDTe1_aFVxrMgzH2-aKuc2hdEfCbdQw2ENHbA1TsEKjwnduIgD2PEK28TLu2oFbGT8br3ivMdfEvHQir06yEpnJ6CoKMUYE2GdfSZymUaXnrN3hheKEFtGVDojdBrUTwgIK8RUrJZUsGn_RuzAKyR2F9Lva7GwK8GrBwOAN7zBy_CqPbXgWndVui16XiKFPuxZnnJIRmxgmxzrsnQM-1DBXx1UfuXHgtUZ1vy4_PZDcjF938-0PcXqHms7c0Flq0mFeke2MIE3AjuvDni1ZbQBUdgqnxA722vUp-z6gxwm2CPliB35ftwntLPCD4GkVQ6NzA_MiiODr0sYAKFlwxC1rI8W9sHR-uxSG1HMxpilgObhOshYT72tqoQo5YQ5d_3ifPekGXYR6P-jrQWPU&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Rodolphe Groizard a créé avec Wonderland une véritable galerie d'art sucré. Célèbre pour ses pâtisseries en trompe-l'œil qui défient l'imagination (des cactus, des statues Moaï ou des fauteuils plus vrais que nature), cet établissement est devenu en quelques années la référence du 14ème pour les gourmets en quête de surprise. Chaque création est une prouesse technique qui cache des saveurs intenses et des textures parfaitement équilibrées.",
    insider_tip: "Arrivez avant 16h si vous voulez avoir le choix, les pièces les plus spectaculaires comme 'Le Cactus' s'arrachent dès la sortie du déjeuner. Profitez de leur espace salon de thé pour une dégustation sur place, l'accueil y est adorable.",
    expert_catchline: "La haute pâtisserie trompe-l'œil qui émerveille le 14ème.",
    specials: {
        cuisine: ["Haute Pâtisserie", "Trompe-l'œil"],
        drinks: ["Thés de créateurs", "Café de spécialité"],
        must_eat: "Le Cactus ou le Fantasia, les deux icônes de la maison.",
        must_drink: "Un thé vert pour contrebalancer la richesse du chocolat."
    },
    source: "expert_human"
};
