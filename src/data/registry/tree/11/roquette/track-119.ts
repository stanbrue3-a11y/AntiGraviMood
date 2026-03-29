import { SurgicalPlace } from '../../../type-definition';

export const track119: SurgicalPlace = {
    id: "poi-track-119",
    name: "Track 119 (Deb’s Street Food)",
    slug: "track-119",
    category: "restaurant",
    subcategory: ["indian", "pakistani", "street-food", "food-court"],
    location: {
        address: "119 Rue du Chemin Vert",
        arrondissement: 11,
        lat: 48.8618157,
        lng: 2.3830859,
        nearest_metro: "Père Lachaise",
        metro_lines: [2, 3],
        google_id: "ChIJp-noTExt5kcRo3SqnLu8UFg"
    },
    moods: {
        chill: 90,
        festif: 50,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Mar-Dim: 12:00–23:00 (Fermé Lun)",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://track119.com/",
            label: "DÉCOUVRIR"
        }
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        pint_price: 6,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 14.50, // Street Food Satiety Unit
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Deb's Street Food @ Track 119 (Indian/Pakistani)
            {
                category_type: "sharing",
                display_label: "Street Food Snacks",
                items: [
                    { name: "Pani Puri (x6)", price_cents: 750, description: "Billes croustillantes à l'eau épicée." },
                    { name: "Samosas Pomme de Terre/Pois", price_cents: 600 },
                    { name: "Pakoras Légumes", price_cents: 650 }
                ]
            },
            {
                category_type: "other",
                display_label: "Indian Mains (Curries & Bowls)",
                items: [
                    { name: "Chicken Keema", price_cents: 1300, description: "Poulet haché épicé, herbes fraîches." },
                    { name: "Dal Makhani", price_cents: 1150 },
                    { name: "Butter Chicken", price_cents: 1450 },
                    { name: "Biryani Agneau", price_cents: 1500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Creative Naans (L'Audace)",
                items: [
                    { name: "Naan Camembert", price_cents: 700, description: "Fusion franco-indienne ultime." },
                    { name: "Naan Gorgonzola/Miel", price_cents: 750 },
                    { name: "Naan Garlic & Herbs", price_cents: 450 },
                    { name: "Naan Nature", price_cents: 350 }
                ]
            },
            {
                category_type: "other",
                display_label: "Sweet Treats & Lassi",
                items: [
                    { name: "Mango Lassi", price_cents: 550 },
                    { name: "Gulab Jamun (x2)", price_cents: 500 },
                    { name: "Kulfi Maison", price_cents: 600 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUFXO3v__7eybqUaFmpY4xvicNt-ygoiuQ4L7hCjpoN33Qnq7UAJ3Q0YHND2ACsblJBF6HBGF081ByTecUNGr-b3OizTLnaG30YAFR0xuJWpP9o76l1Uv6uyZhmBBcft53H5Tf6m3SNP4wLig0oKcwF-XXM3m3oLf1uGXJQzZObwROOAyIwmMC29xzuw9GbF8lGsMdDDy-oBOLS3z8EFRH7U2ZfRm-6nJuY_WJNg-TUM12I59CMBF8rid6PcUOkUoT4zSA7_TddzpQrZr22D8kAfs6cjSXaVe2yZCnscjkbsmVFf-KFjNMXLPu12imCC_ZJhmUnwrYpBejcsZjVg3qEPtMKECHBybCOE83zIpVCLTM7cn8KqhE6CZ0hRrshsLd4u-uz3g_tTTHo3DUcIc4NMNMBMWqiea&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVtk8sP7AR7_RPMoMeus-D9li2r-ZOU5zAY3x2TFfVxMrBiHipRnQysOT4zsyyFVuboqal8s14Ycz_gI3X-plMVdhY2vv-qiu2vAmoKL4NGLcIRwJvFyOgGml9ghO1UGmUHD7l3LR42c6pHKQNNBNut-Sb1issEtei8Q5Ystg9vz5c6AtGSbIhIP-9tyghXukg2pe4CW3CMKW-Hxz7l01RF7uZpMBrpKiO7obYDEB-CFD_gABJzA7_TeWz5KeCsbw78w3p6QO5fYn4NBKdYQ3Ca2cjA-c23fOs2BSutinSSTg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.8,
    description: "Niché dans le hub artistique de Track 119, Deb's Street Food est une explosion de saveurs indo-pakistanaises. Le lieu respire la culture, mêlant street-art, musique et gastronomie sans complexes. Le clou du spectacle ? Des naans revisités avec des fromages français comme le camembert.",
    insider_tip: "Osez le Naan Gorgonzola/Miel, c'est une hérésie culinaire mais un pur délice gustatif. Accompagnez le tout d'un Mango Lassi bien onctueux pour calmer les épices du Keema.",
    expert_catchline: "La street-food indienne qui bouscule les codes rue du Chemin Vert.",
    specials: {
        cuisine: ["Indian Street Food", "Pakistani Specialties", "Fusion Naans"],
        drinks: ["Lassis Maison", "Bières Indiennes"],
        must_eat: "Le Naan Camembert (l'insolite MOELLE).",
        must_drink: "Un Chai Latte épicé."
    }
};
