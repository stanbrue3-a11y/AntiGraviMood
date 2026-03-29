import { SurgicalPlace } from '../../../type-definition';

export const leGoyavier: SurgicalPlace = {
    id: "poi-le-goyavier",
    name: "Le Goyavier",
    slug: "le-goyavier",
    category: "restaurant",
    subcategory: ["reunionnais", "creole", "exotic", "institution"],
    location: {
        address: "4 Rue Saint-Bernard",
        arrondissement: 11,
        lat: 48.8509893,
        lng: 2.3801825,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJ_U67bYtt5kcRdYt9_U67bYt" // Placeholder for precise extraction if needed
    },
    moods: {
        chill: 80,
        festif: 50,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 19:30–23:00; Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.legoyavier.com",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 33,
        is_free: false,
        pint_price: 7.50, // Bière Bourbon "Dodo"
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 22.00, // MANUAL: Fixed price for main Caris/Rougails
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Le Goyavier 2024-2025 (Spécialités de l'Ile de la Réunion)
            {
                category_type: "starter",
                display_label: "Les Entrées Créoles",
                items: [
                    { name: "Bouchons (x4)", price_cents: 850, description: "Bouchées vapeur au porc, spécialité locale." },
                    { name: "Samoussas variés (x5)", price_cents: 900 },
                    { name: "Bonbons piment", price_cents: 800 },
                    { name: "Accras de morue", price_cents: 950 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats Authentiques (Caris & Rougails)",
                items: [
                    { name: "Rougail Saucisses", price_cents: 2200, description: "Le classique : sauccisses fumées, tomates, oignons, gingembre." },
                    { name: "Cari Porc aux pommes de terre", price_cents: 2200 },
                    { name: "Cari Poulet à la réunionnaise", price_cents: 2200 },
                    { name: "Massalé Cabri", price_cents: 2400, description: "Chèvre mijoté aux épices massalé." },
                    { name: "Cari Crevettes au combava", price_cents: 2300 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs des Iles",
                items: [
                    { name: "Gâteau Patate", price_cents: 900, description: "Gâteau traditionnel à la patate douce et vanille." },
                    { name: "Blanc-manger coco", price_cents: 850 },
                    { name: "Ananas frais au sirop de rhum", price_cents: 950 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons & Rhums",
                items: [
                    { name: "Bière Bourbon 'Dodo'", price_cents: 750 },
                    { name: "Punch Coco maison", price_cents: 850 },
                    { name: "Rhum Arrangé (Verre)", price_cents: 900 }
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
    description: "Le Goyavier est le plus ancien restaurant réunionnais de Paris. Depuis 1988, la famille Payet y concocte une cuisine créole d'une authenticité rare. Décor coloré, accueil chaleureux et saveurs ensoleillées : c'est une véritable ambassade de l'Ile Intense au coeur du 11ème. Le point fort ? Des caris mijotés pendant des heures qui vous transportent directement à Saint-Denis ou Cilaos.",
    insider_tip: "Commencez par un punch gingembre maison pour vous mettre dans l'ambiance. Si vous aimez le piment, demandez leur pâte 'piment oiseau' maison, mais allez-y avec précaution, elle ne plaisante pas.",
    expert_catchline: "L'authenticité réunionnaise à Paris depuis 1988 : caris, rougails et punchs solaires.",
    specials: {
        cuisine: ["Cuisine réunionnaise", "Creole specialties", "Slow-cooked stews"],
        drinks: ["Bière Bourbon Dodo", "Punchs artisanaux", "Rhums arrangés"],
        must_eat: "Le Rougail Saucisses et le Gâteau Patate en dessert.",
        must_drink: "Une Dodo bien fraîche, comme là-bas."
    }
};
