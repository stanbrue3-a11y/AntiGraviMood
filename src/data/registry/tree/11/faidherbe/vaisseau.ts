import { SurgicalPlace } from '../../../type-definition';

export const vaisseau: SurgicalPlace = {
    id: "poi-vaisseau",
    name: "Vaisseau",
    slug: "vaisseau",
    category: "restaurant",
    subcategory: ["gastronomic", "modern-french", "creative", "chef-table"],
    location: {
        address: "35 Rue Faidherbe",
        arrondissement: 11,
        lat: 48.8531565,
        lng: 2.3826492,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJA73L0W9z5kcRqULmP_W05uw"
    },
    moods: {
        chill: 40,
        festif: 30,
        culturel: 95
    },
    practical: {
        opening_hours_raw: "Lun-Ven: 12:00–14:00, 19:30–22:00; Fermé Sam-Dim",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.restaurant-vaisseau.com",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 120,
        is_free: false,
        pint_price: 0,
        wine_glass: 15.00,
        coffee_price: 5.00,
        dish_price: 60.00, // MANUAL: Based on minimum lunch menu
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Vaisseau by Adrien Cachot 2024-2025
            {
                category: "Menus Dégustation (Carte Blanche)",
                items: [
                    { name: "Le 'Menu Quoi' (Déjeuner)", price: "60.00€", description: "Menu surprise en plusieurs étapes." },
                    { name: "Le 'Menu N'importe quoi' (Dîner)", price: "120.00€", description: "L'expérience complète Adrien Cachot." },
                    { name: "Le 'Menu Grand n'importe quoi'", price: "180.00€", description: "Immersion totale sans limites." }
                ]
            },
            {
                category: "Accords Mets & Boissons",
                items: [
                    { name: "Accord Boissons (Déjeuner)", price: "40.00€" },
                    { name: "Accord Boissons (Dîner)", price: "80.00€" },
                    { name: "Accord 'Grand n'importe quoi'", price: "100.00€" }
                ]
            },
            {
                category: "Inspirations (Séquences Adrien Cachot)",
                items: [
                    { name: "Mochi Cacio e Pepe", price: "Inclus", description: "Réinterprétation culte mêlant textures japonaises et saveurs romaines." },
                    { name: "Gaspach-eau de tomates & piment", price: "Inclus" },
                    { name: "Cervelle de veau Karaage & gribiche", price: "Inclus" },
                    { name: "Os à moelle & anchois de la Maison Dehesa", price: "Inclus" },
                    { name: "Bulots au persil plat & ail noir", price: "Inclus" },
                    { name: "Lentilles beluga & Caviar Osciètre", price: "Inclus" },
                    { name: "Ris de veau à la réglisse & purée de blettes", price: "Inclus" },
                    { name: "Anguille fumée & betterave laquée", price: "Inclus" },
                    { name: "Coeur de pigeon, sang et hibiscus", price: "Inclus" },
                    { name: "Mont-Blanc aux champignons de Paris", price: "Inclus" },
                    { name: "Dessert à la levure de boulanger & miel", price: "Inclus" },
                    { name: "Eau micro-filtrée", price: "Inclus" },
                    { name: "Mignardises insolentes", price: "Inclus" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX_J-mU_W05_V5--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Vaisseau est le projet tant attendu d'Adrien Cachot, finaliste prodige de Top Chef. Dans un décor minimaliste quasi-monacal du 11ème, le chef livre une partition libre, sans barrières, où les produits mal aimés (abats, algues) côtoient la noblesse du geste. Élu meilleur restaurant de Paris 2025 par Time Out, Vaisseau est plus qu'un restaurant : c'est une expérience sensorielle, intellectuelle et gustative unique au monde.",
    insider_tip: "Les réservations s'envolent en quelques secondes lors de l'ouverture des créneaux (généralement le 1er du mois à midi). Soyez plus rapide qu'un bot. Le menu 'N'importe quoi' est celui qui permet de saisir tout le génie de Cachot.",
    expert_catchline: "L'ovni gastronomique d'Adrien Cachot : une cuisine libre, punk et d'une intelligence rare.",
    specials: {
        cuisine: ["Haute gastronomie libre", "Focus Abats", "Inspirations japonisantes"],
        drinks: ["Vins de macération", "Accords sans alcool créatifs"],
        must_eat: "Le Mochi Cacio e Pepe, si présent sur le menu ce jour-là.",
        must_drink: "Laissez-vous tenter par les accords boissons, souvent surprenants."
    }
};
