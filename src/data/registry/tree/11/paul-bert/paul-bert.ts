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
            {
                category_type: "main",
                display_label: "Formules & Menus (Plats)",
                items: [
                    { name: "Formule Déjeuner (Entrée + Plat)", price_cents: 2200, is_highlight: true },
                    { name: "Menu complet (Entrée + Plat + Dessert)", price_cents: 4100, is_highlight: true }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées du Terroir (Entrées)",
                items: [
                    { name: "Terrine de Campagne Maison", price_cents: 1000 },
                    { name: "Poireaux Vinaigrette & Noisettes", price_cents: 900, is_highlight: true },
                    { name: "Oeuf Mayo à l'ail des ours", price_cents: 1000 },
                    { name: "Couteaux à la plancha, beurre persillé", price_cents: 1400 },
                    { name: "Foie Gras de Canard mi-cuit", price_cents: 2500 },
                    { name: "Hure de Cochon artisanale", price_cents: 1000 },
                    { name: "Salade de Museau de Boeuf", price_cents: 1200 },
                    { name: "Six Huîtres de pleine mer (N°3)", price_cents: 1800 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats de Tradition (Plats)",
                items: [
                    { name: "Filet de Boeuf au poivre de Sarawak & frites", price_cents: 4400, is_highlight: true },
                    { name: "Tartare de Boeuf au couteau & frites", price_cents: 2800 },
                    { name: "Aile de Raie à la Grenobloise", price_cents: 3000, is_highlight: true },
                    { name: "Sole Meunière du Guilvinec", price_cents: 4800 },
                    { name: "Andouillette AAAAA, sauce moutarde", price_cents: 2600 },
                    { name: "Tête de Veau sauce Gribiche", price_cents: 2800 },
                    { name: "Hachis Parmentier de canard", price_cents: 2400 },
                    { name: "Côte de Boeuf (pour deux), Béarnaise", price_cents: 8500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Fromages & Desserts Cultes (Desserts)",
                items: [
                    { name: "Paris-Brest Signature (Le meilleur de Paris)", price_cents: 1200, is_highlight: true },
                    { name: "Soufflé au Grand Marnier", price_cents: 1500, is_highlight: true },
                    { name: "Soufflé au Chocolat amer", price_cents: 1400 },
                    { name: "Ile Flottante aux pralines roses", price_cents: 1000 },
                    { name: "Baba au Rhum Ambré", price_cents: 1300 },
                    { name: "Plateau de Fromages Jean-Yves Bordier", price_cents: 1800 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cave & Boissons (Boissons)",
                items: [
                    { name: "Verre de Vin Blanc (Sélection)", price_cents: 700, is_highlight: true },
                    { name: "Verre de Vin Rouge (Ardoise)", price_cents: 800 },
                    { name: "Pression Paul Bert (Lager)", price_cents: 800 },
                    { name: "Eau Minérale Evian/Badoit (75cl)", price_cents: 650 },
                    { name: "Café Espresso (Torréfié)", price_cents: 300 },
                    { name: "Infusion Herbes Fraîches", price_cents: 500 },
                    { name: "Digestif (Bas Armagnac)", price_cents: 1200 }
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
