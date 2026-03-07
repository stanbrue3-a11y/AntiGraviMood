import { SurgicalPlace } from '../../../type-definition';

export const le_feria: SurgicalPlace = {
    id: "poi-le-feria",
    name: "Féria Café",
    slug: "le-feria",
    category: "bar", // Categorized as Bar so PriceEngine prioritizes the pint
    subcategory: ["bar à cocktails", "brasserie", "pizza", "brunch", "happy hour", "festif"],
    location: {
        address: "4 Rue du Bourg Tibourg",
        arrondissement: 4,
        lat: 48.856825,
        lng: 2.3558486,
        nearest_metro: "Hôtel de Ville",
        metro_lines: [1, 11],
        google_id: "ChIJKbFNswJu5kcRFMqaoj-mUJ4"
    },
    moods: {
        chill: 30,
        festif: 70, // Loud at night
        culturel: 0
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 11:00–02:00\nmardi: 11:00–02:00\nmercredi: 11:00–02:00\njeudi: 11:00–02:00\nvendredi: 11:00–02:00\nsamedi: 11:00–02:00\ndimanche: 10:00–02:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://feria-cafe.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        pint_price: 8.00,
        hh_pint: 6.00,
        hh_time: "17h-20h", // Triggers Happy Hour computation and badge
        cocktail_price: 10.00,
        wine_glass: 0,
        coffee_price: 0,
        dish_price: 0, // Auto-calculated by compile_registry.ts via median (Pizzas, Salades)
        last_updated: "2026-03-05",
        menu_items: [
            {
                category: "Drinks & Apéro",
                items: [
                    { name: "Pinte de bière", price: "6.00€" },
                    { name: "Shots (unité)", price: "4.00€" },
                    { name: "Coca Cola (33cl)", price: "4.00€" },
                    { name: "Lipton Ice Tea (33cl)", price: "4.00€" }
                ]
            },
            {
                category: "Tapas pour accompagner",
                items: [
                    { name: "Egg toast (Foie gras, champignons)", price: "9.00€" },
                    { name: "Burratina (Huile de truffe, roquette)", price: "9.00€" },
                    { name: "Saumon Gravlax", price: "9.00€" },
                    { name: "Falafels et légumes rôtis", price: "9.00€" },
                    { name: "Oeufs cocotte, saumon fumé", price: "9.00€" },
                    { name: "Nems de poulet", price: "10.50€" }
                ]
            },
            {
                category: "Pizzas à partager",
                items: [
                    { name: "Margherita", price: "11.90€" },
                    { name: "Diavola (Spianata piquante)", price: "15.70€" },
                    { name: "La 'Hulk' (Pesto verde, stracciatella)", price: "16.70€" },
                    { name: "Tartufo (Crème de truffe, copeaux)", price: "24.90€" }
                ]
            },
            {
                category: "Brasserie & Plats",
                items: [
                    { name: "Salade Falafels et rôtis", price: "13.00€" },
                    { name: "Salade César", price: "13.00€" },
                    { name: "Poke bowl (Saumon, avocat, mangue)", price: "13.00€" },
                    { name: "Suprême de poulet", price: "13.00€" },
                    { name: "Feria Burger", price: "13.00€" },
                    { name: "Poisson cuit sur peau", price: "13.00€" },
                    { name: "Cassolette de boulettes, linguine", price: "13.00€" },
                    { name: "Poulet fermier rôti, purée patate douce", price: "14.00€" },
                    { name: "Tartare de boeuf, frites fraîches", price: "14.50€" },
                    { name: "Onglet de boeuf rôti", price: "16.50€" }
                ]
            },
            {
                category: "Desserts & Brunch",
                items: [
                    { name: "Crêpes au sucre", price: "5.50€" },
                    { name: "Cheesecake en pot, Nutella", price: "7.00€" },
                    { name: "Pain perdu, fruits rouges", price: "7.00€" },
                    { name: "Tiramisu", price: "7.50€" },
                    { name: "Crème brûlée", price: "7.50€" },
                    { name: "Brunch Buffet à Volonté (Week-end)", price: "31.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWRpX9IuSTSv9Z2r5v6wnCbCSdEaFLG7oyLc4Zr5Hd7vnDn7J_R0_PCkEaH3GMgS1rqe8xgm9cy8uE3MAdWkGWGEkWPA8vQxatQCKSBH1EbxUIXWMFMFeFvCN7MYxly_jXoGFsiZSQr2Q2CKE7W84tw5OSEs1AJyC-rw_ADxy9-rjGLw6UMQv7zUkW7bOt3LL-NhlNsSnX1wrJjXXABO14YLOmL11i78dN3z5R8QK9iBwJkbzkoDu2d5EAHhkrAcoRA8Ur69hbNzkSqwr86zBgotR0-CW1R1oLQosHRbHbpDxk23YCx0mNKMmVMxNMctiFFP5onFMgXG-GCTByB032k8mpZbj0NcsgSL_YAtCv3BxDzvHkBYywaQbLy-LE4W7x6_CfCP-0uI2IaljwMJIPnVJc5t6yVNS3N-MA5FjHnQpbQ4ALBPAn75BOFBw36k3PmJ2VdB3d5j35Yrjfobsm0joDNyt1Mwyn1kVwQwM449LwaDzmcncxShU9OvPmyv1KvmRghx0EUYgFiriPfoeVHIVpS9QV83lig7CtOpdm8IU-smhav-3OwZOmEePIixtPmJ25M&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "feriacafe_paris",
    verified: true,
    google_rating: 4.3,
    description: "Installé en plein cœur du Marais rue du Bourg Tibourg, le Féria est un formidable lieu hybride. Festif et bruyant le soir autour d'une pinte (la terrasse est littéralement prise d'assaut à la moindre éclaircie), il se révèle aussi être une sacrée cantine. L'adresse carbure à l'énergie, enchaînant cocktails, pizzas denses et un gargantuesque brunch dominical à volonté.",
    insider_tip: "• Si vous cherchez de l'intimité pour un premier date calme, fuyez. Ici l'ambiance grimpe très vite en décibels dès 19h.\n• En semaine, attaquez-vous sans hésiter à la solide Pizza 'La Hulk' (Pesto verde & Stracciatella).\n• Pinte très honnête à 6€ en HH pour ce quartier hyper-central.",
    expert_catchline: "Repaire hybride redoutable du Marais : pintes en terrasse le soir, et brunch XXL à volonté le week-end.",
    specials: {
        cuisine: ["Brunch à volonté (31€)", "Pizza Tartufo", "Egg toast Foie Gras", "Nems de Poulet"],
        drinks: ["Pinte blonde HH", "Shots", "Cocktails création"],
        must_eat: "L'équipe du bar envoie une batterie de tapas bien sourcés pour l'apéro : mention spéciale aux nems de poulet (10,50€). Côté brasserie pure, on frappe au cœur des pizzas napolitaines ou sur l'artillerie lourde du grand brunch buffet.",
        must_drink: "L'arsenal parfait pour le quartier : pintes à 6€ en HH, pichets et une redoutable carte de cocktails pour enflammer la soirée dans une ambiance très vivante."
    }
};
