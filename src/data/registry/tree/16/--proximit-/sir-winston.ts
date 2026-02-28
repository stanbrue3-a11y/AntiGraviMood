import { SurgicalPlace } from '../../../../type-definition';

export const sir_winston: SurgicalPlace = {
    id: "poi-306",
    name: "Sir Winston Churchill",
    slug: "sir-winston",
    category: "bar",
    subcategory: ["pub", "cocktail-bar", "brasserie", "speakeasy"],
    verified: true,
    google_rating: 4.0,
    instagram_handle: "sirwinstonparis",
    location: {
        address: "5 Rue de Presbourg",
        arrondissement: 16,
        lat: 48.872199,
        lng: 2.294830,
        nearest_metro: "Charles de Gaulle - Étoile",
        metro_lines: [1, 2, 6, "A"],
    },
    practical: {
        reservation_policy: "resa_conseillee",
        accessibility: true,
        wifi: true,
        opening_hours_raw: "Lundi au Dimanche: 08h00-02h00",
        main_action: {
            type: "site",
            url: "https://www.sirwinston.fr/"
        },
        cuisine_type: "Pub Anglo-Indien",
        terrace: true
    },
    pricing: {
        is_free: false,
        index_price: 24,
        primary_price_type: "dish",
        pint_price: 10,
        cocktail_price: 15,
        wine_glass: 9,
        dish_price: 24,
        coffee_price: 3.5,
        menu_items: [
            {
                category: "Grignotage Anglo-Indien",
                items: [
                    { name: "Samosas Mozza & Feta", price: "12€" },
                    { name: "Naan nature cuit au tandoor", price: "5€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    { name: "Fish & Chips épicé", price: "22€", description: "Sauce tartare et purée de pois" },
                    { name: "Old Delhi Butter Chicken", price: "24€", description: "Riz basmati" }
                ]
            },
            {
                category: "Le Bar Mixologie",
                items: [
                    { name: "Cocktail Création du moment", price: "15€" },
                    { name: "Pinte de bière blonde", price: "10€" }
                ]
            }
        ],
        smart_tip: "Excellente carte de spiritueux et whiskies (à partir de 12.50€ les 4cl) pour les puristes."
    },
    moods: { chill: 50, festif: 70, culturel: 30 },
    description: "Métamorphose spectaculaire pour ce pub légendaire de l'Étoile, entièrement relifté par Laura Gonzalez. L'ambiance clope-et-cuir des vieux lords a muté en un sublime écrin anglo-indien. Le bar principal pulse au rythme des shakers, tandis que le chef Manoj Sharma fusionne comfort food britannique et peps de Delhi.",
    expert_catchline: "Pub de lords relifté sauce anglo-indienne et club caché sur-mesure pour afterworks à l'Étoile.",
    insider_tip: "- Ne restez pas dans la salle principale : demandez la porte dérobée qui s'ouvre sur le 'Doris Bar', un speakeasy intimiste caché au fond de l'établissement.\n- Idéal le dimanche midi : leur brunch (mix d'œufs Bénédicte et de saveurs indiennes) change radicalement la donne du quartier.\n- Les banquettes léopard et l'éclairage feutré créent un décor redoutable pour un 'dates'.",
    specials: {
        cuisine: ["Fusion", "Naan", "Comfort Food"],
        drinks: ["Cocktails Pointus", "Whiskies rares", "Speakeasy"],
        must_eat: "L'alliance décadente du Fish & Chips britannique percuté par les épices indiennes (22€).",
        expert_catchline: "Cocktails créations, whiskies de dandy et tapas indiennes."
    },
    images: { hero: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Place_de_l%27Etoile_-_Avenue_Kl%C3%A9ber.jpg", gallery: [] },
    source: "research_ai"
};
