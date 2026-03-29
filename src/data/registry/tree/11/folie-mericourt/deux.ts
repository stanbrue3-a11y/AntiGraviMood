import { SurgicalPlace } from '../../../type-definition';

export const deux: SurgicalPlace = {
    id: "poi-deux",
    name: "Deux Restaurant",
    slug: "deux",
    category: "restaurant",
    subcategory: ["terroir", "bistronomique", "sud-ouest", "savoie", "restaurant"],
    location: {
        address: "58 Rue de la Fontaine au Roi",
        arrondissement: 11,
        lat: 48.866946,
        lng: 2.373406, // Coordinates from the vicinity of Fontaine au Roi
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJLUp_9nRt5kcRLk22XvXFfQU"
    },
    moods: {
        chill: 60,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Monday: Closed\nTuesday: 12:00–2:30 PM, 7:30–10:30 PM\nWednesday: 12:00–2:30 PM, 7:30–10:30 PM\nThursday: 12:00–2:30 PM, 7:30–10:30 PM\nFriday: 12:00–2:30 PM, 7:30–10:30 PM\nSaturday: 12:00–2:30 PM, 7:30–10:30 PM\nSunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://deux-restaurant.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 27, // Median of main dishes
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner (Semaine)",
                items: [
                    { name: "Plat du jour seul", price_cents: 1800 },
                    { name: "Entrée + Plat (ou P+D)", price_cents: 2100 },
                    { name: "Entrée + Plat + Dessert", price_cents: 2500 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner (Samedi)",
                items: [
                    { name: "Plat du jour seul", price_cents: 2000 },
                    { name: "Entrée + Plat (ou P+D)", price_cents: 2600 },
                    { name: "Entrée + Plat + Dessert", price_cents: 3000 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Apéritifs & Entrées",
                items: [
                    { name: "Jambon Porc Ibaiama (60g)", price_cents: 1800, description: "Louis Ospital, Sud-Ouest." },
                    { name: "Panisses & sauce yaourt au zaatar", price_cents: 1200 },
                    { name: "Velouté de lentilles corail & courge", price_cents: 1300 },
                    { name: "Tatin d'oignons confits au miso", price_cents: 1400 },
                    { name: "Œuf poché & crémeux céleri-pomme de terre", price_cents: 1500, description: "Servi avec des diots fumés de Savoie." }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats",
                items: [
                    { name: "Gnocchis poêlés & crème de Vacherin", price_cents: 2400 },
                    { name: "Poisson du moment (arrivage)", price_cents: 2700 },
                    { name: "Ribs de porc braisés au miel de Savoie", price_cents: 2800 },
                    { name: "Blanquette de veau à l'ancienne", price_cents: 2900 },
                    { name: "Cocotte de joue & queue de bœuf (pour 2)", price_cents: 6800, description: "Façon Bourguignon, 34€ par personne." }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Fromages",
                items: [
                    { name: "Fromages du moment (Savoie x Sud-Ouest)", price_cents: 1200 },
                    { name: "Cheesecake basque à la vanille", price_cents: 1100 },
                    { name: "Mousse au chocolat fleur de sel", price_cents: 1100 },
                    { name: "Baba à la Chartreuse", price_cents: 1200 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVNR5SeQqflRHTu7TIXdsiLLvOJ7xYIBOGfBrIyjytj0-rzY3Xu10ARF-SFOu8wFZUfkaZI8AODT85f1mOySx3N9DrbO_-XNZHlO8qCDod-KNylnaxtlCl-zwPBwdpzshSwesowN9OGxr3WYVBoZWZcbUWVsCA-TRoLsSx0HxVS7mde7ArvmcbsgrIJVaRnw3hFFrRzdbKy8UR6lS8E2zKq2WXChA_8SRvZo10wTdHkN6WHDCl1XMBFUGl-Ti4FUReMGKHXIH4cEBGFQPBGoLJc_WyOMxc2jVbmjiQt6i0&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.8,
    description: "Deux Restaurant est le fruit de la collaboration entre deux chefs complices : Tiphaine Mollard (Savoie) et Romain Casas (Sud-Ouest). Dans ce bistrot de quartier chaleureux, les deux terroirs fusionnent avec intelligence pour proposer une cuisine de produit brute, généreuse et techniquement irréprochable. Un lieu de partage où la convivialité n'a d'égal que la qualité des sourcing.",
    insider_tip: "• C'est l'un des meilleurs spots pour redécouvrir la Chartreuse (à travers leur baba signature).\n• Les ribs de porc au miel de Savoie sont d'une gourmandise absolue.\n• Le samedi midi, l'ambiance est parfaite pour un déjeuner de terroir prolongé.\n• Les fromages proviennent directement de petits producteurs des deux régions d'origine des chefs.",
    expert_catchline: "La fusion parfaite entre le Sud-Ouest et la Savoie dans un bistrot de haute volée.",
    specials: {
        cuisine: ["Gnocchis au Vacherin", "Ribs au miel de Savoie", "Jambon Ibaiama Louis Ospital", "Blanquette de veau"],
        drinks: ["Sélection de vins de Savoie", "Vins du Sud-Ouest rares", "Digestifs à la Chartreuse"],
        must_eat: "L'œuf poché au crémeux de céleri et diots fumés : un pont gustatif parfait entre les deux terroirs des chefs.",
        must_drink: "Un verre de vin blanc de Savoie (Chignin-Bergeron ou Roussette) pour accompagner les plats crémeux."
    }
};
