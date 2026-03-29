import { SurgicalPlace } from '../../../type-definition';

export const recoin: SurgicalPlace = {
    id: "poi-recoin",
    name: "Recoin",
    slug: "recoin",
    category: "restaurant",
    subcategory: ["bistronomic", "french", "modern-bistro", "neighborhood-gem"],
    location: {
        address: "60 Rue Saint-Sabin",
        arrondissement: 11,
        lat: 48.8591331,
        lng: 2.3688686,
        nearest_metro: "Richard Lenoir",
        metro_lines: [5],
        google_id: "0x47e66dc8c8c9349f:0xbc4821d2704e8801"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 09:00–01:00; Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://recoinparis.fr",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 7.00,
        coffee_price: 2.50,
        dish_price: 23.50, // MANUAL: Median for lunch formula or dinner plates
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Recoin Paris 2024-2025
            {
                category_type: "tasting_menu",
                display_label: "Formule Déjeuner (Semaine)",
                items: [
                    { name: "Entrée + Plat ou Plat + Dessert", price_cents: 2350 },
                    { name: "Menu Complet (E+P+D)", price_cents: 2700 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Assiettes à partager (Soir)",
                items: [
                    { name: "Radis, beurre demi-sel & pain au levain", price_cents: 700 },
                    { name: "Terrine de cochon maison", price_cents: 1100 },
                    { name: "Poireaux brûlés, vinaigrette noisette", price_cents: 1200 },
                    { name: "Gravlax de truite au raifort", price_cents: 1500 },
                    { name: "Crosnes au beurre & citron", price_cents: 1200 },
                    { name: "Pièce de boeuf, jus corsé & purée maison", price_cents: 2400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Mousse au chocolat & fleur de sel", price_cents: 900 },
                    { name: "Panna cotta à la verveine", price_cents: 850 },
                    { name: "Fruit de saison rôti & glace vanille", price_cents: 950 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Recoin est un petit bijou de la rue Saint-Sabin. Ce bistrot de quartier, discret et chaleureux, propose une cuisine de marché créative et maîtrisée. Le midi, on y trouve des formules d'un rapport qualité-prix exemplaire, tandis que le soir, l'ambiance devient plus intime avec des assiettes à partager intelligentes. Une adresse qui privilégie le produit, le goût et la sincérité du service.",
    insider_tip: "Passez le matin pour leur café de spécialité ou en fin d'après-midi pour un verre de vin nature en terrasse. Le lieu est petit, donc réservez si vous venez le midi avec un groupe.",
    expert_catchline: "Le néo-bistro de quartier par excellence : frais, saisonnier et terriblement efficace.",
    specials: {
        cuisine: ["Bistronomie de saison", "Assiettes à partager", "Produits de proximité"],
        drinks: ["Vins natures sélectionnés", "Café de spécialité"],
        must_eat: "La Terrine maison et les légumes de saison travaillés avec audace.",
        must_drink: "Un verre de Chenin pour accompagner le poisson."
    }
};
