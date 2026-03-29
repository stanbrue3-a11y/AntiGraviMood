import { SurgicalPlace } from '../../../type-definition';

export const kubri: SurgicalPlace = {
    id: "poi-kubri",
    name: "Kubri",
    slug: "kubri",
    category: "restaurant",
    subcategory: ["libanais", "méditerranéen", "fusion", "restaurant"],
    location: {
        address: "108 Rue Amelot",
        arrondissement: 11,
        lat: 48.86305,
        lng: 2.3673334,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJE3_8yTBv5kcRNtfiFlNQ8s8"
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:30, 19:00–22:30\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 12:00–15:00, 19:00–22:30\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.kubri-restaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 26, // MANUAL: Tabak (plats) souvent 25-26€ (poulet lala, veau laqué).
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus",
                items: [
                    // VERIFIED: Mises à jour récentes (2024-2025)
                    { name: "Formule Déjeuner", price_cents: 2500, description: "Salade ou chou/kibbeh + plat + dessert ou accompagnement + boisson chaude" }
                ]
            },
            {
                category_type: "other",
                display_label: "Dips & Petits Mezze",
                items: [
                    { name: "Kubri Hummus (zaatar, dukka)", price_cents: 900 },
                    { name: "Baba Ghanouj fumé, salsa de noix", price_cents: 1100 },
                    { name: "Beef Pesto Hummus (filet de bœuf)", price_cents: 1400 },
                    { name: "Labneh fouetté, broccolini grillé, feta", price_cents: 1200 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Mezze (à partager)",
                items: [
                    // VERIFIED: Plats 9-16€
                    { name: "Halloumi Kataif Rolls, miel pimenté", price_cents: 1300, description: "Le plat signature absolu." },
                    { name: "Kubri Fried Chicken, toum citron", price_cents: 1500 },
                    { name: "Tartare d'agneau, kammouné, radis rose", price_cents: 1600 },
                    { name: "Poulpe Imsabaha", price_cents: 1600 },
                    { name: "Falafel Chips, salsa tomate & jalapeño", price_cents: 1000 }
                ]
            },
            {
                category_type: "main",
                display_label: "Tabak & Sofra (Plats principaux)",
                items: [
                    // VERIFIED: Plats 25-26€ (jusqu'à la côte de bœuf)
                    { name: "Lala Roasted Chicken (toum, labneh citron noir)", price_cents: 2500 },
                    { name: "Veau Laqué à la mélasse de dattes", price_cents: 2600 },
                    { name: "Shortrib de bœuf, épices chawarma, confit tomate", price_cents: 2600 },
                    { name: "Tajen de Daurade", price_cents: 2500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts (Helo)",
                items: [
                    { name: "Nammoura Amande-Citron", price_cents: 900 },
                    { name: "Halwa Glacé (amande, pistache, chocolat noir)", price_cents: 900 },
                    { name: "Gâteau Pistache (ashta, compotée de cerises noires)", price_cents: 900 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVxNI5TG32SnRdKE17QhLREEo7_QumFnC6_-dEWfuVCyPywt-ZKt4j-rtnB4NBAvQytLW_qu6LIajvMWWvV2DOPc9WCM3fT_jKLMieLI-fd3YLwhUNIBszEy9xJZ6tCH0RHO4c472zlTnxp1b-jAPMHv-mnAO6nKWRRZywRS7rJC7_SeJIqZdqF-g-WOynmzWhskpv5bra1S6GhLKUf0mwAMPPeG0-FaSuZefbdd0TmUzCT_H-0GBMqYo4WC0f3JHFFMKcX3YsgIkfy5L7N797KAE-rYHMLsQPMCyPpvc65PYCNniAC-y8weE3U_Bpo3Q9I9stT-Senv_F4u3zpdjSEYc61f4bnqgZGBHvLw3X5_dxqplFmIQCk1shIkj3fgnKmkE6147vBQsD79op73J1IcI8v58yPdnhbGiNQJRkM3tVEiK1e6SSuLgbhro1g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVFEi-slxTI5DaQ8r0JWqlSI1rGDIOdZ2Czt2NB0WXPcu8-GIh2RCQLT-jZkXkjePLYC93KrP5avaC5nnN-qOYeKH_TG-PWS7rwiA5vgLH85eLk6PX5X5h-mBHjpkv43Zss4vUWmj7rRuc60u2-WL02LMwTw0xXIOSePSV9FLutapc_b413wLx4xr0Nm_zZ14MaWsiMxNSGvWayrUod_w0LFphA-mYhKVcGY2KOlu-NvfCRLWXOwDjKwMbbwMtGwN0KeBQr8MYmPM8e8coyC72L3zy2cCqyjZsKQYJCbZvnTQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUnXfj8Os3go9yvIp_EJIWQ1L9XvinrKnuOdmjEh0PuX4zsGgeA1SSVWGAGWuA0Z1QR3Gh0O93SfCX_EOFlys150eBRvTA2EOHb9PobeyrcXHOBP_fvCHb7fXo0RFUW__ZGgVpGNPVnvaAHvSqjMV3OB66nquNA0qvj_3EsxKNFKh_t8vHj7FCA9uQmnfykKM3KNbevlBRd_gMMyC9Gol7s08Lx0fu4DwVBYjvXdR-s78A5lmd5nqzW-1h0yOElif3O5cE5Y_Zpwdb251mAPwbd793iHhfN5bIUBn9HW5tDKzPygDehvB2Dd3i8jWbn_SYnxz23taYfNYosWkk_suRlyftksv-qyploMRVJGLZWE5Wd9YP4G9MdNcTNx2t-1Zw70cw6IrQXAY4riEs5nPXVWmAg8rxPeS_fxF7zs5zQGGI3uGv2I4j2KLyr4ymN&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "kubri.paris",
    verified: true,
    google_rating: 4.8,
    description: "La gastronomie libanaise modernisée à son apogée. Kubri dynamite les codes du mezze classique : les assiettes sont créatives, punchy et pensées pour le partage de masse. Halloumi rolls au miel pimenté, tartare d'agneau sublime, poulet laqué citron noir... L'ambiance est survoltée, chaleureuse, parfait pour une table de potes.",
    insider_tip: "• Les 'Halloumi Kataif Rolls' (rouleaux de halloumi frits au miel, 13€) sont le banger absolu de la carte.\n• Venez à plusieurs (3-4) pour pouvoir rayer quasiment toute la carte des mezzes (9-16€).\n• La formule dej à 25€ (3 plats + boisson chaude) est l'un des meilleurs deals d'Oberkampf.\n• Très compliqué d'avoir une table le week-end sans anticiper, réservez en ligne.",
    expert_catchline: "La bistronomie libanaise explosive qui ringardise les vieux mezzes. Halloumi rolls incroyables.",
    specials: {
        cuisine: ["Halloumi Kataif Rolls", "Tartare d'agneau citronné", "Hummus au pesto de bœuf", "Veau laqué à la mélasse"],
        drinks: ["Mocktails floraux", "Vins méditerranéens", "Cocktails à l'Arak"],
        must_eat: "Vous devez impérativement tester l'Halloumi frit au miel et le poulet Kubri Fried Chicken. En plat, le Shortrib épices chawarma est d'une tendreté redoutable.",
        must_drink: "Les limonades libanaises maison ou fiez-vous aux bouteilles de la plaine de la Bekaa pour l'immersion."
    }
};
