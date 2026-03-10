import { SurgicalPlace } from '../../../type-definition';

export const osteriaGoto: SurgicalPlace = {
    id: "poi-osteria-goto",
    name: "Osteria Gòto",
    slug: "osteria-goto",
    category: "restaurant",
    subcategory: ["italian", "venetian", "osteria", "natural wine"],
    location: {
        address: "151 Boulevard Voltaire",
        arrondissement: 11,
        lat: 48.853518,
        lng: 2.388487,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJUUjg7q5z5kcRIiuD4O2IZJg"
    },
    moods: {
        chill: 80,
        festif: 60,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mer-Sam: 12:00–14:30, 19:00–23:00; Lun-Mar: 19:00–23:00 (Fermé Dim)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.osteriagoto.com/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 36,
        is_free: false,
        pint_price: 7.50, // Peroni/Craft
        wine_glass: 8.50,
        coffee_price: 2.50,
        dish_price: 23, // MÉDIAN des Primi Piatti (20€ - 28€)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Osteria Gòto 2025 Standard (Venetian Italian)
            {
                category: "Cicchetti (Entrées/Tapas)",
                items: [
                    { name: "Sardine en saor (Oignon, pignons, raisins)", price: "8.00€", description: "L'emblème de Venise, marinade aigre-douce parfaite." },
                    { name: "Baccalà mantecato sur crostini", price: "12.00€", description: "Mousse de morue fouettée à l'huile d'olive, ultra-fondante." },
                    { name: "Polpetta de thon & câpres", price: "12.00€" },
                    { name: "Crostino Asperges & Pecorino", price: "9.00€" },
                    { name: "Crostino Lardo di Colonnata", price: "8.00€" },
                    { name: "Anchois marinés, poivre rose", price: "10.00€" },
                    { name: "Fritture de petits poissons", price: "14.00€" },
                    { name: "Gamberi au citron vert & menthe", price: "16.00€" }
                ]
            },
            {
                category: "Primi Piatti (Pâtes Maison)",
                items: [
                    { name: "Gnocchi maison aux quatre fromages & sauge", price: "22.00€", description: "Beurre de sauge et mélange de fromages italiens affinés." },
                    { name: "Maccheroni à la Carbonara (La Vraie)", price: "26.00€", description: "Guanciale craquant, pecorino romano, œuf, poivre noir." },
                    { name: "Tagliatelle au ragoût de canard", price: "24.00€" },
                    { name: "Bigoli in salsa (Anchois & Oignons)", price: "20.00€" },
                    { name: "Risotto à l'encre de seiche", price: "28.00€" },
                    { name: "Lasagne ouverte à la bolognaise", price: "22.00€" }
                ]
            },
            {
                category: "Secondi & Contorni",
                items: [
                    { name: "Poulpe confit au barbecue, crème de pois chiches", price: "32.00€", description: "Tendreté absolue, fumé délicat." },
                    { name: "Fritura Mistica (Mix de la mer)", price: "30.00€" },
                    { name: "Polenta grillée au potiron confit", price: "8.00€" },
                    { name: "Légumes de saison grillés à l'huile d'olive", price: "10.00€" },
                    { name: "Onigiri de seiche (Fusion Gòto)", price: "12.00€" }
                ]
            },
            {
                category: "Dolce & Caffetteria",
                items: [
                    { name: "Tiramisu Maison (Secret Gòto)", price: "9.00€", description: "Le classique, onctueux et équilibré." },
                    { name: "Cannolo Aperto (Ricotta & Pistache)", price: "9.00€" },
                    { name: "Panna Cotta à la fève tonka", price: "9.00€" },
                    { name: "Affogato al Caffè", price: "7.00€" },
                    { name: "Espresso Italo", price: "2.50€" }
                ]
            },
            {
                category: "Vins Natures d'Exception (Sélection)",
                items: [
                    { name: "Lambrusco dell'Emilia 'Camillo Donati' (Verre)", price: "9.00€" },
                    { name: "Verre de vin nature (Blanc/Rouge sélection)", price: "8.50€" },
                    { name: "Spritz Vénitien (Select/Aperol)", price: "10.00€" },
                    { name: "Americano Gòto", price: "11.00€" },
                    { name: "Bouteille de Prosecco Brut", price: "38.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXQUO2YQwwvTro8WjrqFNdwgiJrQud6dlUQoultr6QJrbHIBrFdnbrWmKSUv1RgiMKBXwA9uIcWTR23xkR33Cc-7cIhnjZP43KYrqSjXKIEcg_tZVO3h2Eim_tUwq11-eweTQttGPpWv5cs3gT8wWLzIsJqShXWuzy0u7RBek-b3kM5DYKGw5ibS0AEW7KpR_XXx6PsfifAaoYwcFAxYMsM3KN-PXCB13GoKFfAvQDlNtCnvwYNL76MGvSBVtJrzMi-dF67Ez-1vqJqzOpMA2_TREQFOXA7fC2GfU3yAUTT1Lr6aoq4RFu67GA4SloDLrVy_t5Lmigg5QgQzsbBHi2W3oELNZoRzSvEl-EiLfMrngdPVVeIlT8xB9AcDDSF7ILzrFNBy9k8Dll1RrS4elAeQB0VbIMkMBppDBoaLyk9gMc_CyOhV4MWlO0rdg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV2oYQHQJ1NbqH-mtSJfW2cNz_mSK5cZAHYOQ6iZAMm11C8az5ofellgmDIZNBF2nIrjOYsFGQDoJXhvD8hwx7HvEUgt8s4rRh6RwK16sh0x7wfoqHTCcVnMGmschauaNb3zhKgVA3yox2FOBRAaNiK8dBqIhPHElwxi2P1bjYp8qdvFMOlLfKBa-IfsbSaYkkSgTOVTAmo5mOctzQlb7zG8HzG2XWFSfSlrThG8KHYhDyt_r0qJO27SMEyS2MI89luX0Pa3OZgc2Ns3-QpFCWCdiSENvCahPUXExnMqiG5FteE-swpxGhFKPKgJROTkJWVDsRAN_gxl03cM3-oKy1yoh8q4O31yrSd7EiQ4fZ-tD3mjTl9LMXPZ3rHYLEfSkjPFij4nK09ZQt4b5UzVUngSoOiYdTatfERGKf6yX06ksgxF9Y1qGvReI71h4y8&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.8,
    description: "Une immersion vénitienne brute sur le boulevard Voltaire. Gòto célèbre les 'Cicchetti' (tapas italiens) et les vins naturels dans une ambiance d'osteria authentique. Ici, le produit prime, servi sans chichi mais avec une science des terroirs italiens impeccable.",
    insider_tip: "Commandez plusieurs Cicchetti comme les sardines en saor ou la polenta au poisson pour un véritable aperitivo vénitien. Le Lambrusco de Camillo Donati est une petite merveille à découvrir.",
    expert_catchline: "L'osteria vénitienne vibrante du Boulevard Voltaire.",
    specials: {
        cuisine: ["Venetian Specialties", "Cicchetti", "Hand-made Pasta"],
        drinks: ["Natural Italian Wines", "Bellini & Negroni house-style"],
        must_eat: "Le Baccalà Mantecato sur crostini.",
        must_drink: "Un verre de Lambrusco dell'Emilia Frizzante."
    }
};
