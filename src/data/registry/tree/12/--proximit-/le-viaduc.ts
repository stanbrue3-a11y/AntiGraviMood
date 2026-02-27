import { SurgicalPlace } from '../../../../type-definition';

export const le_viaduc: SurgicalPlace = {
    id: "poi-301",
    name: "Le Viaduc",
    slug: "le-viaduc",
    category: "restaurant",
    subcategory: ["bar", "terrasse", "cafe"],
    verified: true,
    google_rating: 4.2,
    instagram_handle: "leviaduc_",
    location: {
        address: "43 Avenue Daumesnil",
        arrondissement: 12,
        lat: 48.847631,
        lng: 2.375105,
        nearest_metro: "Gare de Lyon",
        metro_lines: [1, 14, "A", "D"],
        google_id: "ChIJxxxxViaduc"
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: true,
        opening_hours_raw: "Lundi au Dimanche: 08h00-02h00\nService continu 11h30-23h30",
        action_type: "site",
        action_url: "https://leviaducdaumesnil.com/",
        cuisine_type: "Brasserie Française",
        terrace: true
    },
    pricing: {
        is_free: false,
        index_price: 3.5,
        primary_price_type: "pint",
        pint_price: 7,
        cocktail_price: 10,
        wine_glass: 6,
        coffee_price: 2.5,
        dish_price: 22,
        hh_pint: 3.5,
        hh_cocktail: 6,
        hh_wine: 4,
        hh_time: "16h00-02h00 (Tous les jours)",
        menu_items: [
            {
                category: "Côté Bar",
                items: [
                    { name: "Pinte de Blonde (HH)", price: "3.50€", description: "Le prix de référence imbattable" },
                    { name: "Le Litron (1L)", price: "6.50€", description: "Pour les grandes soifs" },
                    { name: "Cocktail Classique (HH)", price: "6€" }
                ]
            },
            {
                category: "Côté Resto",
                items: [
                    { name: "Belle entrecôte (250g) et frites maison", price: "22€" },
                    { name: "Le Burger du Viaduc", price: "19€" },
                    { name: "Planche Mixte", price: "16€" }
                ]
            }
        ],
        smart_tip: "Le Litron de bière blonde (1L) est à 6.50€ ou la pinte à 3.50€ absolument TOUS LES JOURS jusqu'à 2h."
    },
    moods: { chill: 80, festif: 50, culturel: 10 },
    description: "Niché sous les majestueuses arcades de la Coulée Verte, Le Viaduc est une brasserie monumentale qui se transforme en bar vibrant le soir. Sa terrasse plein sud est le QG du quartier.",
    expert_catchline: "Le temple de la pinte à 3.50€ sous les voûtes de la Coulée Verte.",
    insider_tip: "- La pinte à 3.50€ jusqu'à 2h du matin est le secret le mieux gardé du quartier.\n- Idéal pour les grands groupes avec ses volumes cathédrale.\n- Le Litron à 6.50€ est l'institution locale pour les fins de journée ensoleillées.",
    specials: {
        cuisine: ["Brasserie", "Fait Maison", "Viandes"],
        drinks: ["Bière de soif", "Licorne", "Pinte 3.5€"],
        must_eat: "L'entrecôte frites maison (22€) ou le Litron de bière (6.50€).",
        expert_catchline: "Volumes spectaculaires et pintes à prix cassés jusqu'à l'aube."
    },
    images: {
        hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Viaduc_des_Arts.jpg/1200px-Viaduc_des_Arts.jpg",
        gallery: []
    },
    source: "research_ai"
};
