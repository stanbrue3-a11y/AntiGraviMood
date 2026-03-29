import { SurgicalPlace } from '../../../type-definition';

export const brasserieMartin: SurgicalPlace = {
    id: "poi-brasserie-martin",
    name: "Brasserie Martin",
    slug: "brasserie-martin",
    category: "restaurant",
    subcategory: ["brasserie", "french", "rotisserie", "bouillon-style"],
    location: {
        address: "24 Rue Saint-Ambroise",
        arrondissement: 11,
        lat: 48.8624107,
        lng: 2.3769913,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJH_Lrladt5kcRt4_zYv_Z_q8"
    },
    moods: {
        chill: 50,
        festif: 85,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Lun-Dim: 09:00–00:00 (Service continu)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.lanouvellegarde.com/fr/brasserie-martin",
            label: "RESERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 6.50,
        wine_glass: 5.50,
        coffee_price: 2.50,
        dish_price: 16.00, // MANUAL: Median of main rotisserie dishes
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Brasserie Martin 2024-2025 (Nouvelle Garde)
            {
                category_type: "starter",
                display_label: "Les Entrées (Wallet-friendly)",
                items: [
                    { name: "Oeuf Mayo de compète", price_cents: 250, description: "Le classique indémodable." },
                    { name: "Poireaux vinaigrette & noisettes", price_cents: 700 },
                    { name: "Saucisson truffé de la maison Montalet", price_cents: 1000 },
                    { name: "Pâté en croûte au canard & foie gras", price_cents: 1400 }
                ]
            },
            {
                category_type: "main",
                display_label: "La Rotisserie & Plats",
                items: [
                    { name: "Poulet Fermier de l'Allier rôti", price_cents: 1600, description: "Jus de viande corsé, frites maison." },
                    { name: "Demi-poulet rôti à partager", price_cents: 3100 },
                    { name: "Pièce du boucher (Bavette), sauce béarnaise", price_cents: 1850 },
                    { name: "Saucisse au couteau, purée maison", price_cents: 1400 },
                    { name: "Gnocchi maison, sauce tomate & citron", price_cents: 1500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Maousses",
                items: [
                    { name: "Paris-Brest XL", price_cents: 900, description: "Le dessert culte de la Nouvelle Garde." },
                    { name: "Tarte Pécan Chocolat", price_cents: 850 },
                    { name: "Crème Brûlée à la vanille bourbon", price_cents: 750 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons",
                items: [
                    { name: "Bière Martin (Pinte Artisanale)", price_cents: 650 },
                    { name: "Vin de la maison (Verre)", price_cents: 550 },
                    { name: "Cocktail Spritz", price_cents: 950 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWFpIDM5V9_74eM-SJiP_8eivedBJBGZ4-Lco24aiNHVDFRrGlQVKocOEHT34o5OUQMcgJ2KI2P7BBFukGHqkeDKlNwSAlIZFbyghaSZ67MShuRH1b8P1372_geYGYyXTVa2kbkoEFLg7tIhwhi-_No_tFcOJKSINWkECAypAVWadWeqQOS6f-N0s3mgzbEMLJTnT1gEE12VHSDsTiCuNfc3oV_ju7P90jBQKCyj6pBrrKQaJ5i-czbG-oAtmW2N-UxrWyE19_Y&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVnMrgLoUzMfKmc-bEu6VicptuxWJ77mFq-AwAHQZdMwolTX9ltWkCQbdScYw3Ly_8tA-hiIgJBzyKap3MRHvZIMI2YAjDLwrN2BLiQiLh-gJlmt10Y4sNdJmFCbZFypaddb5JTLc71A9DtuuQlu7_lrOCQyCYTg3mEefzeM7SH2UFOFgR4mne-QwNUQWZXjNSD-rRA2mrccicC4m8J1C_9_EUJ-Mgh-tcyvwgKOm4qZSD9XAYj3sCsmD4mnGIn5nysPTg-cB3RfhBGWWU0CIhxj7YMRKmlupRb2Yy_8GxYQA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.7,
    description: "Brasserie Martin est le flagship de la 'Nouvelle Garde' dans le 11ème. Un lieu immense, bruyant, vivant et follement parisien. Sa spécialité ? La rotisserie visible dès l'entrée où tournent poulets fermiers et agneaux de lait. Ici, tout est fait maison, des sauces aux glaces, avec une obsession pour le produit local et le prix juste. Une atmosphère de fête populaire, de midi à minuit.",
    insider_tip: "La terrasse végétalisée face au Square Maurice Gardette est l'un des meilleurs spots du quartier pour un déjeuner au soleil. Goûtez absolument le Paris-Brest, il est gargantuesque.",
    expert_catchline: "La grande brasserie parisienne réinventée : rotisserie, fait-maison et prix d'amis.",
    specials: {
        cuisine: ["Rotisserie au feu de bois", "Classiques bistrot", "Pâtisseries maison"],
        drinks: ["Bières artisanales", "Vins de petits producteurs", "Cocktails création"],
        must_eat: "Le poulet rôti frites maison, la base absolue.",
        must_drink: "Une pinte de Martin, leur bière blonde exclusive."
    }
};
