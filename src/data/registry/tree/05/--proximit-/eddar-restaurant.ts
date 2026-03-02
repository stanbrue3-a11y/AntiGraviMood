import { SurgicalPlace } from '../../../../type-definition';

export const eddar_restaurant: SurgicalPlace = {
    id: "poi-eddar-restaurant",
    name: "Eddar Restaurant",
    slug: "eddar-restaurant",
    category: "restaurant",
    subcategory: ["tunisien", "grillades", "couscous", "cafe", "bar", "mediterraneen"],
    verified: true,
    google_rating: 4.7,
    instagram_handle: "eddar_restaurant",
    location: {
        address: "36 bis Bd de l'Hôpital",
        arrondissement: 5,
        lat: 48.8405222,
        lng: 2.3618533,
        nearest_metro: "Saint-Marcel",
        metro_lines: ["5"],
        google_id: "ChIJpx1alftx5kcRJbL0OtJreeQ"
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: true,
        opening_hours_raw: "Lundi au Dimanche: 12:00–23:00",
        main_action: {
            type: "site",
            url: "https://eddarrestaurant-paris5.fr/",
            label: "SITE WEB"
        },
        cuisine_type: "Tunisienne / Méditerranéenne",
        terrace: false
    },
    pricing: {
        avg_budget: 20,
        is_free: false,
        pint_price: 7,
        cocktail_price: 9,
        wine_glass: 5,
        coffee_price: 2.5,
        dish_price: 17,
        smart_tip: "Le Couscous Eddar à 19.90€ est une véritable institution avec ses 3 viandes. Ne ratez pas l'Assidet Zgougou en dessert, une rareté à Paris.",
        menu_items: [
            {
                category: "Spécialités Couscous",
                items: [
                    { name: "Couscous Eddar (Agneau, Poulet, Merguez)", price: "19.90€", description: "Le plat signature complet aux 3 viandes" },
                    { name: "Couscous Agneau", price: "17€" },
                    { name: "Couscous Poulet", price: "16€" },
                    { name: "Couscous Merguez", price: "15.50€" },
                    { name: "Couscous Royal (4 viandes)", price: "21.90€" },
                    { name: "Couscous Végétarien", price: "14.50€" }
                ]
            },
            {
                category: "Grillades & Plats",
                items: [
                    { name: "Assiette Mixte (Côtelette, Fressure, Escalope, Merguez)", price: "21€", description: "Le grand plateau de grillades" },
                    { name: "Escalope de poulet grillée", price: "16.50€" },
                    { name: "Assiette Côte d'Agneau", price: "18.50€" },
                    { name: "Brochette d'Agneau", price: "19€" },
                    { name: "Poisson du Jour Grillé", price: "18.50€" },
                    { name: "Plateau Pêcheur (Poisson, Calamars, Crevettes)", price: "21€" },
                    { name: "Macarona Tunisienne à l'Agneau", price: "19€" },
                    { name: "Macarona Poulet", price: "16€" },
                    { name: "Ojja Merguez", price: "15.50€" },
                    { name: "Spaghetti Fruits de Mer", price: "19.50€" }
                ]
            },
            {
                category: "Entrées & Tapas",
                items: [
                    { name: "Tajine Tunisien (Quiche poulet/fromage)", price: "7.50€" },
                    { name: "Brik à l'oeuf", price: "6.50€" },
                    { name: "Chorba Agneau", price: "7€" },
                    { name: "Salade Tunisienne", price: "7€" },
                    { name: "Slata Mechouia", price: "7.50€" },
                    { name: "Kaftaji", price: "7.50€" }
                ]
            },
            {
                category: "Douceurs & Desserts",
                items: [
                    { name: "Assidet Zgougou (Crème de pin d'Alep)", price: "7.50€", description: "Le dessert traditionnel iconique" },
                    { name: "Assidet Noisette", price: "7.50€" },
                    { name: "Assidet Pistache", price: "7.50€" },
                    { name: "Pâtisseries Tunisiennes (le plateau)", price: "6€" },
                    { name: "Baklawa Maison", price: "3€" },
                    { name: "Tiramisu Pistache", price: "7.50€" },
                    { name: "Youyou Tunisien", price: "3€" }
                ]
            },
            {
                category: "Boissons",
                items: [
                    { name: "Thé à la menthe pignons", price: "4€" },
                    { name: "Citronnade Maison", price: "4.50€" },
                    { name: "Café au lait", price: "3.50€" },
                    { name: "Soda Tunisien (Boga)", price: "4€" }
                ]
            }
        ]
    },
    moods: { chill: 80, festif: 40, culturel: 60 },
    description: "Eddar est une ambassade de la cuisine tunisienne sur le Boulevard de l'Hôpital. Dans un cadre chaleureux et boisé, cette adresse propose une cuisine familiale et généreuse. Des couscous vapeur aux grillades au feu de bois, chaque plat est une invitation au voyage. Mention spéciale pour les Assidets, ces crèmes de fruits secs rares à trouver aussi bien exécutées à Paris.",
    expert_catchline: "Le temple du couscous vapeur et des douceurs tunisiennes face à la Pitié-Salpêtrière.",
    insider_tip: "Ne repartez pas sans avoir goûté l'Assidet Zgougou (crème de pin d'Alep), c'est leur grande spécialité. Pour le midi, les formules grillades sont ultra-généreuses avec deux garnitures au choix.",
    specials: {
        cuisine: ["Tunisienne", "Couscous", "Grillades", "Halal"],
        drinks: ["Thé à la menthe", "Citronnade maison", "Vins méditerranéens"],
        must_eat: "Le Couscous Eddar (19.90€) pour son agneau fondant et l'Assidet Pistache en dessert.",
        expert_catchline: "Cuisine tunisienne authentique, grillades généreuses et pâtisseries fines."
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVOEHjRK-9rnhN7MOTyOSN4EKt-Tit8jgPlqxd1J2wgb03iFJyDTWVKIv19Z_2DG7erAAL5crhG8SMszNVB7QIwD4qql8qWwM9GAiTEOKbfnC8Jjl--fcw8RvDXhk3M_p0IENGgSZKxCWr7iWDgvn4JvstHwPktcAoFCaU6MVz6PkuRo5vhpkFRajnk0r9TW0hEBJudyZ4cm4Yklv-Ji3Z-1KPrzAV5DEobnK4oB049a4UrZyxNrCIZ0WVMqh8cBi_sm3DXYiyEH5LMWbDF2cn3xgHFQrl68-Pa9WEAhksX7mFaK3EIC-H4bqQ_IE5PRkFiXIIvCGOVQ2tMfseONkf4p0rChRMHGXa7Y4dILTXgT4xBgoD5hDPDQU499rFmFczesafwIea3wjM8IRtnUfwdoYdGFF2npmS6Rs51w0Dq27Q9gouGunfjzOufhi48vtMEYkb8cpCB1T8qvxCKsBBdKlaRWvFuG4Ls3e_RWbCoXiwNOVw4ayLEM1A1KmINqf2Tg-iJLPFOuFbRIQlqNSAvMppK3986Gzd14jq3MxaxtTTu9KtctqsLCdGmc1cl9cW5RktY9dHCnSuATCw50DWrJjU&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    source: "research_ai"
};
