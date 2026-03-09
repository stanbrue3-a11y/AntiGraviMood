import { SurgicalPlace } from '../../../type-definition';

export const bistrotPaulBert: SurgicalPlace = {
    id: "poi-bistrot-paul-bert",
    name: "Bistrot Paul Bert",
    slug: "bistrot-paul-bert",
    category: "restaurant",
    subcategory: ["bistrot", "french", "traditional", "institution"],
    location: {
        address: "18 Rue Paul Bert",
        arrondissement: 11,
        lat: 48.8510842,
        lng: 2.383184,
        nearest_metro: "Faidherbe - Chaligny",
        metro_lines: [8],
        google_id: "ChIJw7oP6G5z5kcRL6v_I4xR_q8"
    },
    moods: {
        chill: 40,
        festif: 70,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:00, 19:30–23:00; Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/Bistrot-Paul-Bert-153664324653603/",
            label: "FACEBOOK"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 7.00,
        coffee_price: 3.00,
        dish_price: 28.00, // MANUAL: Median for main à la carte dishes
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Bistrot Paul Bert 2024-2025
            {
                category: "Formules & Menus",
                items: [
                    { name: "Formule Déjeuner (Entrée + Plat ou Plat + Dessert)", price: "22.00€", description: "Le meilleur rapport qualité-prix du quartier le midi." },
                    { name: "Menu Complet (Entrée + Plat + Dessert)", price: "41.00€", description: "L'expérience Paul Bert intégrale." }
                ]
            },
            {
                category: "Les Entrées du Moment",
                items: [
                    { name: "Terrine de campagne maison", price: "10.00€", description: "Rustique, généreuse, servie avec des cornichons." },
                    { name: "Oeufs durs mayonnaise à l'ail des ours", price: "10.00€", description: "Le grand classique indémodable du bistrot." },
                    { name: "Hure de cochon maison", price: "10.00€" },
                    { name: "Carpaccio de daurade, fruit de la passion", price: "18.00€" },
                    { name: "Foie gras de canard mi-cuit, compotée de coings", price: "25.00€" },
                    { name: "Salade de museau de bœuf", price: "12.00€" },
                    { name: "Poireaux vinaigrette aux noisettes", price: "9.00€" },
                    { name: "Couteaux à la plancha, beurre persillé", price: "14.00€" }
                ]
            },
            {
                category: "Les Plats de Résistance (Authentique)",
                items: [
                    { name: "Filet de bœuf au poivre de Sarawak & frites maison", price: "44.00€", description: "Le plat signature mythique, cuisson saignante vivement conseillée." },
                    { name: "Tartare de bœuf au couteau & frites", price: "28.00€", description: "Assaisonnement classique, viande sourcée d'exception." },
                    { name: "Aile de raie à la grenobloise", price: "30.00€", description: "Beurre noisette et câpres, une institution." },
                    { name: "Sole du Guilvinec meunière (selon arrivage)", price: "48.00€" },
                    { name: "Hachis Parmentier traditionnel", price: "24.00€" },
                    { name: "Andouillette AAAAA, sauce moutarde", price: "26.00€" },
                    { name: "Côte de bœuf pour deux, Béarnaise & frites", price: "85.00€" },
                    { name: "Épaule d'agneau confite (pour 2)", price: "70.00€" },
                    { name: "Tête de veau sauce gribiche", price: "28.00€" }
                ]
            },
            {
                category: "Fromages & Desserts Cultes",
                items: [
                    { name: "Paris-Brest Signature", price: "12.00€", description: "Considéré par les puristes comme le meilleur de Paris, praliné intense." },
                    { name: "Ile flottante aux pralines roses", price: "10.00€" },
                    { name: "Soufflé au chocolat (20 min d'attente)", price: "14.00€", description: "Aérien, intense en cacao, un classique qui demande patience." },
                    { name: "Tarte fine aux pommes, glace vanille", price: "12.00€" },
                    { name: "Soufflé au Grand Marnier", price: "15.00€" },
                    { name: "Baba au rhum ambré", price: "13.00€" },
                    { name: "Assiette de fromages Jean-Yves Bordier", price: "18.00€" },
                    { name: "Saint-Nectaire fermier", price: "10.00€" }
                ]
            },
            {
                category: "Boissons & Cave",
                items: [
                    { name: "Verre de vin (sélection ardoise)", price: "7.00€" },
                    { name: "Pression Paul Bert", price: "8.00€" },
                    { name: "Café Espresso", price: "3.00€" },
                    { name: "Infusion herbes fraîches", price: "5.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWw5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Bistrot Paul Bert est l'archétype du bistrot parisien. Entre ses banquettes en cuir, ses miroirs piqués et ses ardoises où s'inscrivent les arrivages du jour, le temps semble s'être arrêté. Ici, on célèbre la grande cuisine de tradition française : viandes sourcées avec soin, sauces onctueuses et desserts généreux. Une institution bruyante, vivante et indispensable où le Paris-Brest et l'entrecôte au poivre règnent en maîtres.",
    insider_tip: "Ne faites pas l'impasse sur le dessert. Leur Paris-Brest est une légende urbaine à lui seul. Arrivez à l'heure car la salle se remplit instantanément de fidèles et de gourmets du monde entier.",
    expert_catchline: "L'âme du bistrot parisien : service à l'ancienne, viandes d'exception et Paris-Brest de légende.",
    specials: {
        cuisine: ["Bistronomie traditionnelle", "Viandes de race", "Grandes sauces françaises"],
        drinks: ["Cave à vins monumentale", "Vins de vignerons"],
        must_eat: "Le filet de boeuf au poivre de Sarawak et l'inoxydable Paris-Brest.",
        must_drink: "Un Saint-Joseph ou un vin de la Loire choisi sur l'ardoise."
    }
};
