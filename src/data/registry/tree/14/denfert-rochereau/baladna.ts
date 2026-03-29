import { SurgicalPlace } from "../../../type-definition";

export const baladna: SurgicalPlace = {
    id: "poi-baladna",
    name: "Baladna",
    slug: "baladna-paris-14",
    category: "restaurant",
    subcategory: ["libanais", "méditerranéen", "grillades", "mezzés", "restaurant"],
    location: {
        address: "26 Pl. Denfert-Rochereau, 75014 Paris",
        arrondissement: 14,
        lat: 48.8338331,
        lng: 2.3310743,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6],
        google_id: "ChIJX7BUf7dx5kcRHJYpFjxx-6M"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–15:00, 19:00–23:00 | Mardi: 12:00–15:00, 19:00–23:00 | Mercredi: 12:00–15:00, 19:00–23:00 | Jeudi: 12:00–15:00, 19:00–23:00 | Vendredi: 12:00–15:00, 19:00–23:00 | Samedi: 12:00–15:00, 19:00–23:00 | Dimanche: 12:00–15:00, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.thefork.fr/restaurant/baladna-r392657",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 27,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.50,
        coffee_price: 2.20,
        dish_price: 18.50, // PRIX du Plat Baladna (Mix grillades)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats Signatures (Plaisir Libanais)",
                items: [
                    { name: "Plat Baladna (3 brochettes : agneau, poulet, kebbé)", price_cents: 1850, description: "L'assortiment complet des grillades maison." },
                    { name: "Chawarma (Émincé de viande marinée aux épices)", price_cents: 1600 },
                    { name: "Rougets frits à la libanaise", price_cents: 1650 },
                    { name: "Kebbé au four (Viande hachée farcie, blé concassé)", price_cents: 1450 },
                    { name: "Kafta (Brochettes de viande hachée persillée)", price_cents: 1500 },
                    { name: "Chich Taouk (Dés de poulet marinés)", price_cents: 1550 }
                ]
            },
            {
                category_type: "other",
                display_label: "Mezzés Chauds & Froids",
                items: [
                    { name: "Houmous Classique (Purée de pois chiches)", price_cents: 700 },
                    { name: "Moutabbal (Caviar d'aubergine fumé)", price_cents: 750 },
                    { name: "Taboulé Libanais (Persil, tomate, bourghoul)", price_cents: 750 },
                    { name: "Falafel maison (les 4 pièces)", price_cents: 700 },
                    { name: "Batata Harra (Pommes de terre sautées à l'ail)", price_cents: 650 },
                    { name: "Samboussek (Chausson viande ou fromage)", price_cents: 250 },
                    { name: "Assiette variée de 5 Mezzés", price_cents: 1450 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs d'Orient",
                items: [
                    { name: "Baklawa (Pâte feuilletée, miel, pistache)", price_cents: 600 },
                    { name: "Mouhalabié (Flan libanais à la fleur d'oranger)", price_cents: 650 },
                    { name: "Loukoum Traditionnel", price_cents: 400 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules",
                items: [
                    { name: "Menu Midi Express (E+P ou P+D)", price_cents: 1490 },
                    { name: "Menu Soir Complet (Mezzés + Plat + Dessert)", price_cents: 2990 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVJmP6XZW0NihY4859qN4hMvtrUlATsbswbc2omQF4AXUeGyn5c-QZDGi8PPf1EyyCgc7372GtpRq57Y4jfX1QaRVbacPZbAXJerEX_tY1eNR9XUnCY8aCg4IXbgYADSszPm8vS_CE9K7QtFDYn7CCUuwPtAr7xEvaEb3e0_EO1X-ElXvoEZeLhB8i1GeTGJO6sBJS0bpzpYQvzIjqc-9C2hy2qU3i_mZYJCy1E4X0Apjb1mV_NSN6RZOGxyelFMJczKFXond8NE8ZCsgvth6IaOfBlSBZOZ79ii8DXtJMnnaZbtXJRZgCdc0zoRm00c_qVjPjTthh4kNZSeHqjxoY0HTxAX4EOL7M_FGdkrzLYb3us67pH0KMYpcvdjCGybqHWKZ2DnzhkYvPS4TcbsjKEKm3Obv0ZcBoERo1vNZJMTDVU&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVgucbKtq0qikLyRpTEYFPSrelIDjEUDdDP9BA5AE47oSC9joQoX0ZmYM9fInu3PM5QX_tWEe8-RlljjxssB6XrKiCWojRxuCekX_v-Nooui9n_FGyNV8pEo6d4i0ViH58C3uv8CQGjSWcYhiKKhXsu5UhWaWJdYzjd70zuF7X8dTPIiyQ9kluLy6v3RyY9jm3UvIXXnbU2EFnKY0HGcENhRZ8m5EBjrpEN244xG14F1m0TP_5LmSgjYDpB7xvmmEtjsm4TutX30W3u2Le10wnG5HIcuwuhtIhVx83QsZmmb74Ynm4LH6798b_e2Vb0mUqiUPuqrE930BDV-K7MH341p5Zv6TrxB4dl-7Cw9Ajg4eaRaXqKC9s2hQCLjzs3ubqN_f8y6QCJrAJUxk9WUoq1EXsHKkQzUpYKZ49pQtd8wVIVFp0IO9nwiwaqKs43&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVzGst0-hdSSiFwTlixJLfSGEKaWo1pxWFFTIJP2zNAiBXCQnFomEtbWebdLqYyuxc50sRMlmqNwNroE3DqJNVLa-rev8wt-Cj3dPbqgYpYjVjAnYIdhhgcHDmGGcANyVjBIK9SJQSxq4815mEFvTCgFa0QsPE_sacVNATdkVIrzvGTJyxrwEwSMzxg9ipYiHHTzn3qYT2neiOGFtIxMBg83miWPW9l1JniWbxrm97Ce746BhUJlZDYg0TtHdKOSKKhNuH6akCT20cz2LbwhR3wqV8IIiXQ2EnhOu12M9hRW3ci_0Aq-XWExQYgzjVYypup15T9AhoAcgzHp9LvrF0C2Af_GNr9VZRxsh01muHdP6OGyYa8cQbgYEK1ITSaW30iVx76R_wIBwcXqdVQWCCdbcvbBaqoobMv9fVjWvNL3Q4yTXJTlovyKzh1DzqG&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Surplombant la place Denfert-Rochereau, Baladna est une escale libanaise authentique qui refuse les compromis sur la qualité. Ici, les mezzés sont faits maison tous les matins et les grillades au feu de bois embaument la salle. L'ambiance est familiale, généreuse et invite au voyage culinaire entre Beyrouth et Paris. Une valeur sûre pour découvrir la finesse d'un vrai houmous et la tendreté des viandes marinées.",
    insider_tip: "Ne manquez pas le Kebbé Nayé (agneau cru au blé concassé) pour les amateurs de sensations fortes, c'est l'un des plus frais de la capitale. La terrasse ensoleillée sur la place est un vrai bonheur au printemps.",
    expert_catchline: "La quintessence du Liban à Denfert : mezzés d'une finesse rare et grillades parfumées.",
    specials: {
        cuisine: ["Traditionnelle Libanaise", "Grillades au feu de bois", "Mezzés maison"],
        drinks: ["Arak traditionnel", "Vin libanais (Château Musar)"],
        must_eat: "Le Plat Baladna et le Houmous maison.",
        must_drink: "Un verre d'Arak pour ouvrir l'appétit."
    }
};
