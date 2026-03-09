import { SurgicalPlace } from '../../../type-definition';

export const gramme_11: SurgicalPlace = {
    id: "poi-gramme-11",
    name: "Gramme 11",
    slug: "gramme-11",
    category: "restaurant",
    subcategory: ["cantine", "brunch", "coffee shop", "parisien"],
    location: {
        address: "96 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8688, // Approx
        lng: 2.3785,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJR8uwROJt5kcR_8BfBGXFgzY"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 09:00–18:00, Dim: 10:00–17:00 (Brunch)",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://grammeparis.fr/",
            label: "CARTE"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 4.50,
        dish_price: 24, // MANUAL: Plat principal déjeuner typique
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Gramme 11 (2025 Menu & Brunch)
            {
                category: "Le Brunch & Le Midi",
                items: [
                    { name: "Bowl Saisonnier (Végé/Carné)", price: "18.00€", description: "Légumes rôtis, céréales anciennes, pickles maison." },
                    { name: "Gramme's Banh Mi", price: "16.00€", description: "Pain brioché, porc effiloché aux épices, légumes croquants." },
                    { name: "Pancakes Salés au Kimchi", price: "17.00€", description: "Œuf au plat, avocat, sauce gochujang." },
                    { name: "Plateau Lunch (E+P+D)", price: "28.00€" }
                ]
            },
            {
                category: "Grignotages & Sides",
                items: [
                    { name: "Poireaux brûlés au miso", price: "12.00€" },
                    { name: "Soupe Dashi & Noisettes", price: "10.00€" },
                    { name: "Pickles Maison", price: "6.00€" }
                ]
            },
            {
                category: "Coffee & Pastries (Fait Maison)",
                items: [
                    { name: "Cookie Chocolat & Fleur de Sel", price: "4.50€" },
                    { name: "Banana Bread toasté", price: "6.50€" },
                    { name: "Flat White", price: "5.00€" },
                    { name: "Homemade Granola Bowl", price: "12.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVAkGidY2nObheNCeImtV0vjBNb_W4bF3qFERk1SUNuhxGCle8cfQiSSFdRiXiwNNM0eQKAshfTOM_h5dP5LQ7uGmXdyHKZ7StYuZM8KXxmgkMsV0LDnWzi5MX5d-KUbtHnFT-JFlYSvL7jD2WIMGyy-g7RXKBlq-UjYNtMhp88XkFXd2mDcvak8aRDv6xmlfyl3ds55A6RWItSvOvNTlJwo0cAu6Y7cio0fuysME4g2qqesrMMLPT2G19sjqoPRKo4PFcx3n3NVDXYwrL6BIHkUiUr4coGmLzWHBKgnF7igjKH-o81A0efFg_wY75qoakiJ-zMnUrCofeVkq4Rocahd3TulDvln6abw3o01iNvPWJQD1J8ymv1k6T98_J6xsz8FoWt5foqY70dA6gzBH_g3cUfyJ762DqBeCw4vGk0sV2_dgkmVxGJuHr45jrta1UpD55tpROzahZEJHbu6or7jhrWPMm3XitdwalDJQNniM5H-JRf5mvPTTBOb92kexkzOpP30Gzt6MoxktxpZ-eTUPXvQNGpuwINeeIbkVSYr8SVZiYHzRfB_cXvqWDM33EgBI4k&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Gramme est bien plus qu'une cantine, c'est une véritable institution de la rue Jean-Pierre Timbaud. On y vient pour un brunch créatif le dimanche, ou pour un lunch sain et gourmand en semaine. Tout est fait maison avec des produits sourcés en circuit court : des banh mi revisités aux pancakes au kimchi, en passant par leur pâtisserie réconfortante. L'espace est chaleureux, boisé et respire la convivialité parisienne.",
    insider_tip: "• Les pâtisseries du dimanche changent chaque semaine, arrivez tôt pour le brunch ! (Pas de résa).\n• Le Banh Mi de chez Gramme est devenu une référence absolue dans le quartier.\n• Leurs pickles maison sont une petite addiction à ramener chez soi.",
    expert_catchline: "La néo-cantine iconique du 11ème, temple du brunch créatif et du fait-maison.",
    specials: {
        cuisine: ["Cuisine réconfortante", "Circuits courts", "Brunch créatif", "Banh Mi signature"],
        drinks: ["Café de spécialité (Lomi)", "Jus pressés", "Vins de soif"],
        must_eat: "Le Gramme's Banh Mi, une relecture ultra-gourmande sur pain brioché.",
        must_drink: "Un Flat White parfaitement exécuté avec les grains du torréfacteur Lomi."
    }
};
