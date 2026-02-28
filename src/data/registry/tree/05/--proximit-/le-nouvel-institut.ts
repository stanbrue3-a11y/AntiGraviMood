import { SurgicalPlace } from '../../../../type-definition';

export const le_nouvel_institut: SurgicalPlace = {
    id: "poi-302",
    name: "Le Nouvel Institut",
    slug: "le-nouvel-institut",
    category: "bar",
    subcategory: ["brasserie", "pub-etudiant"],
    verified: true,
    instagram_handle: "lenouvelinstitut",
    location: {
        address: "1 Boulevard Saint-Germain",
        arrondissement: 5,
        lat: 48.849230,
        lng: 2.355606,
        nearest_metro: "Jussieu",
        metro_lines: [7, 10],
        google_id: "ChIJx2HQM_tx5kcRyAq6_MNGMKs"
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: true,
        opening_hours_raw: "Lundi au Dimanche: 08h00-02h00\nService continu 12h00-23h00",
        main_action: {
            type: "site",
            url: "https://lenouvelinstitut.com/"
        },
        cuisine_type: "Bar Brasserie Étudiant",
        terrace: true
    },
    pricing: {
        is_free: false,
        index_price: 3.5,
        primary_price_type: "pint",
        pint_price: 6.5,
        cocktail_price: 10,
        wine_glass: 6,
        coffee_price: 2.20,
        dish_price: 15,
        hh_pint: 3.5,
        hh_cocktail: 6,
        hh_wine: 4,
        hh_time: "16h00-22h00",
        menu_items: [
            {
                category: "Côté Bar (Boissons)",
                items: [
                    { name: "Pinte de Blonde (HH)", price: "3.50€", description: "Le prix imbattable du quartier" },
                    { name: "Le Litron (1L)", price: "6.50€", description: "Le format culte des étudiants" },
                    { name: "Pinte Blanche / IPA (HH)", price: "4.50€" },
                    { name: "Pinte de Blonde (Normal)", price: "6.50€" },
                    { name: "Cocktails Classiques (HH)", price: "6€", description: "Mojito, Spritz, Moscow Mule" },
                    { name: "Verre de Vin Bio (HH)", price: "4€" },
                    { name: "Le Ricard (2cl)", price: "3€" },
                    { name: "Shot Téquila / Jäger", price: "4€" },
                    { name: "Softs (Cola, Limonade)", price: "4.50€" },
                    { name: "Café Espresso", price: "2.20€" }
                ]
            },
            {
                category: "Grignotage & Planches",
                items: [
                    { name: "Planche Mixte XXL", price: "16€", description: "Le compagnon idéal du Litron" },
                    { name: "Frites Maison Baguette", price: "4.50€" },
                    { name: "Assiette de Tapas", price: "12€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    { name: "L'Institut Burger", price: "15€", description: "Steak boucher, cheddar, frites" },
                    { name: "Pizza Regina", price: "13€" },
                    { name: "Salade César", price: "14€" }
                ]
            }
        ],
        smart_tip: "Le Litron à 6.50€ ou la pinte à 3.50€ en Happy Hour jusqu'à 22h. C'est le QG étudiant ultime du 5ème."
    },
    moods: { chill: 50, festif: 80, culturel: 10 },
    description: "Le grand frère festif de la fac de Jussieu. Un immense bar d'angle avec une terrasse ultra-sollicitée, parfait pour les fins de partiels et les tournées à petits prix.",
    expert_catchline: "Le temple de la bière à petit prix sur le Boulevard Saint-Germain.",
    insider_tip: "- La terrasse sur le Boulevard Saint-Germain est toujours pleine, arrivez tôt pour capter une table.\n- Le Litron de bière (1L) à 6.50€ est le secret pour ne pas se ruiner.\n- Ambiance garantie et bruyante le jeudi soir.",
    specials: {
        cuisine: ["Brasserie", "Pizza", "Burgers"],
        drinks: ["Bière Pression", "Litron", "Cocktails"],
        must_eat: "La pinte bon marché (3.50€) accompagnée de sa planche mixte.",
        expert_catchline: "Carburant étudiant : bière de soif et planches généreuses."
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXeHUtq_dLJT7xOeuP9IkqwjS5RjLDVrBde1B5-ugYGI8qCfH3q5fsMqknTbfGztg6aFWSsSBzNQcgZrDb4uH6zYjPt4wKcDaZEgxjpmfAlgAT-xiGZfnZLCFakNbzthEiU9xk14iYSd9zz0SWcXTB72ldem4-Q4oZt9er848fpvXWzbELMVZefS8MgCXGpNOEW5cQKKqQHBIyVeQnk2BIjBXfPC52lvqHoIQ0HbSTe3u1ES2iJ3SF2IxSh16jZtuUxG3D55Jfkn_NhSkDi0b_FOchFnespEOGqV32GeHac0jQDtMY&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUo9epRl3z6nABPgM14apASaCAMLjWeSWDP_lF0XqCF4rv3FIRGrtCEzhce4M4gCKOBCxD4SWcuKSnNrOxIzxxOD1duHzSRRrcSv2FvrF8PhI7PzR7AGJPWl2ABann1DfqQGsTRulywJiCSe_8Kz34jpOczXQqla6c0zKdlkBLDAWudNgklVicBMzKvDDXJM_a4dhQlnvnWlrOXGLVIWHT6VWHXgQKySX66_d4Jb8wwAANFPiVuJaJzVE7nobSFZPiPbusUoxcaoyfZXIqRr_xMTeWtguctxSGqoz6kf4UFGA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVEggCryW77BH-H1lTl7xWo_rsSxRgpCzZNJBP0P2bGL7RIGOWmKeSC7pOyG7-dZrekGWsGYqtkhkMUvGmGWR5NSZYuOUkZCPAcOWISAGHP100oFNZcD8fJA3MewqNEeK9hG-rx6UAAfNhWHUO9NGPt06OYDaZ3peIILNQQ74gvG3g6Vr8pwoD02qepPQJ7MhoUhMJ7g15bNdr-GJOVQcn6qh4MsiLrep0jbtSuptIF2Q3T0iTiiMU6ycOaA58LZ_tT_Rbn32HEhoPYXhuMFR_AASHs3IFDCq_r2Itc-CBh3w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    google_rating: 4.5,
    source: "research_ai"
};
