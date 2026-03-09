import { SurgicalPlace } from '../../../type-definition';

export const fief: SurgicalPlace = {
    id: "poi-fief",
    name: "FIEF / Fait Ici En France",
    slug: "fief",
    category: "restaurant",
    subcategory: ["étoilé", "gastronomique", "durable", "restaurant"],
    location: {
        address: "44 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8636616,
        lng: 2.3724591,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJA_9pJnVt5kcRf7FroqePNw4"
    },
    moods: {
        chill: 50,
        festif: 10,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Monday: 7:00–9:45 PM\nTuesday: 7:00–9:45 PM\nWednesday: 7:00–9:45 PM\nThursday: 7:00–9:45 PM\nFriday: 7:00–9:45 PM\nSaturday: Closed\nSunday: Closed",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://fiefrestaurant.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 95,
        is_free: false,
        pint_price: 0,
        wine_glass: 14.00,
        coffee_price: 6.00, // Cafief (French cereal infusion)
        dish_price: 95, // Median for the 5-step dinner menu
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category: "L'Expérience Gastronomique (Comptoir d'Hôtes)",
                items: [
                    { name: "Menu Dégustation en 10 Temps", price: "170.00€", description: "Servi exclusivement au comptoir à 20h, immersion totale avec le chef." },
                    { name: "Accord Mets & Vins 'Découverte'", price: "80.00€", description: "6 verres de vins de vignerons français." },
                    { name: "Accord Mets & Vins 'Exception'", price: "145.00€", description: "6 verres de cuvées rares et prestigieuses." },
                    { name: "Accord Sans Alcool", price: "65.00€", description: "6 boissons d'exception infusées/fermentées (100% FR)." }
                ]
            },
            {
                category: "La Salle de Restaurant (5 temps)",
                items: [
                    { name: "Menu Omnivore Conscient", price: "95.00€", description: "Dégustation en 5 étapes célébrant le terroir français." },
                    { name: "Menu Amour Végétal", price: "90.00€", description: "Version 100% végétale et gastronomique en 5 étapes." }
                ]
            },
            {
                category: "Signatures - Fait Ici En France",
                items: [
                    { name: "Sturgeon Soufflé", price: "32.00€", description: "Esturgeon fumé, lait de Neuvic et caviar." },
                    { name: "Tartelette d'oignons brûlés", price: "18.00€", description: "Truffe noire et kale croustillant." },
                    { name: "Poisson de ligne au poivre du Gers", price: "38.00€", description: "Légumes racines, émulsion au mélilot." },
                    { name: "Dessert autour de la Figue & Huile d'olive", price: "16.00€" },
                    { name: "Cafief (Infusion de céréales)", price: "6.00€", description: "Alternative locale au café : orge, sarrasin et chicorée." }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW83cfHeo0lxLGDOMK5P74CLD7_pK5zZ-hnG_rrWlMyurv03cVWD58jExUj6hM6EQ0GK9HWee2zivpPcfFtAHtoH9pEpjShVcM3fPu95M3DAW5CKYcHyrpGE6d6FKC4jh7z3KQwlIzeONs6R14mVggqVheqkx2nZwhUZWhiFjO-UGxcwDS7DpOO1Lc01SffCKPpOHdpInaKRyTKWRK_UkhVEB1wZCZxSDr7DJigyswJVaN4tpP6-VHjXFhvy35YdDcpXX6rYuyIYx8XDYzSYFwb6awhKudaRtMR5Ul-FqK-rw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfULyDap0t_rTa8RS9m4tI2k-rJajMRMbt1HWMyC1zhNEClECeoJ_-Lwf1f9GzSfkNNea14sYuexOv5KqHKNvTLi0gsNfBuL9ETGdvdQLVJib_WdJBG1mm8ayujpo5z3N5CTJB8XezhdmYOlQH-td9wW_jzte5YalAh47K9L0cN39jf50o3MXdzN8M4OYoQDNsrI0ShSTRYcNFSxjU8QMFXWSvzDYmxCiWAaBYEaH7TEVW2RC--AXJGV22ISsgjlN59WU6_0_96rbvSI255TftNc1prP1RA9r97OxZ4z6KGAGg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "fiefrestaurant",
    michelin_stars: 1,
    verified: true,

    google_rating: 4.8,
    description: "FIEF (Fait Ici En France) est le restaurant étoilé au Guide Michelin du talentueux Victor Mercier. Ici, la démarche est radicale et militante : aucun produit importé (pas de café, pas de poivre, pas de chocolat) pour magnifier exclusivement les richesses de la métropole française. Dans un décor brut et élégant, le chef propose une gastronomie durable, technique et profondément ancrée dans nos territoires.",
    insider_tip: "• Réservez le comptoir à 20h pour vivre l'expérience 'Grand Menu' (10 temps) face à la cuisine ouverte.\n• Testez le 'Cafief' en fin de repas : une infusion céréalière bluffante qui remplace le café traditionnel.\n• Le menu Amour Végétal est l'un des plus aboutis de Paris pour les amateurs de gastronomie végétale.\n• Pensez à réserver plusieurs semaines à l'avance pour le soir.",
    expert_catchline: "L'étoile militante de Victor Mercier : une gastronomie 100% française, durable et époustouflante.",
    specials: {
        cuisine: ["Menu 10 Temps au comptoir", "Cuisine 100% française", "Infusions de céréales (Cafief)", "Techniques de fermentation"],
        drinks: ["Vins de vignerons hexagonaux", "Accords sans alcool artisanaux", "Spiritueux français"],
        must_eat: "L'esturgeon soufflé avec sa sauce au lait fumé et caviar : un plat de haute volée qui illustre la perfection technique du chef.",
        must_drink: "Les accords sans alcool (infusions, kéfirs) sont pensés avec la même exigence que les plats."
    }
};
