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
                category_type: "tasting_menu",
                display_label: "Menus Dégustation (Carte Blanche)",
                items: [
                    { name: "Le 'Menu Quoi' (Déjeuner)", price_cents: 6000, description: "Menu surprise en plusieurs étapes." },
                    { name: "Le 'Menu N'importe quoi' (Dîner)", price_cents: 12000, description: "L'expérience complète Adrien Cachot." },
                    { name: "Le 'Menu Grand n'importe quoi'", price_cents: 18000, description: "Immersion totale sans limites." }
                ]
            },
            {
                category_type: "drink",
                display_label: "Accords Mets & Boissons",
                items: [
                    { name: "Accord Boissons (Déjeuner)", price_cents: 4000 },
                    { name: "Accord Boissons (Dîner)", price_cents: 8000 },
                    { name: "Accord 'Grand n'importe quoi'", price_cents: 10000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Inspirations (Séquences Adrien Cachot)",
                items: [
                    { name: "Mochi Cacio e Pepe", price_cents: 0, description: "Réinterprétation culte mêlant textures japonaises et saveurs romaines." },
                    { name: "Gaspach-eau de tomates & piment", price_cents: 0 },
                    { name: "Cervelle de veau Karaage & gribiche", price_cents: 0 },
                    { name: "Os à moelle & anchois de la Maison Dehesa", price_cents: 0 },
                    { name: "Bulots au persil plat & ail noir", price_cents: 0 },
                    { name: "Lentilles beluga & Caviar Osciètre", price_cents: 0 },
                    { name: "Ris de veau à la réglisse & purée de blettes", price_cents: 0 },
                    { name: "Anguille fumée & betterave laquée", price_cents: 0 },
                    { name: "Coeur de pigeon, sang et hibiscus", price_cents: 0 },
                    { name: "Mont-Blanc aux champignons de Paris", price_cents: 0 },
                    { name: "Dessert à la levure de boulanger & miel", price_cents: 0 },
                    { name: "Eau micro-filtrée", price_cents: 0 },
                    { name: "Mignardises insolentes", price_cents: 0 }
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
