import { SurgicalPlace } from '../../../type-definition';

export const petitBaoBastille: SurgicalPlace = {
    id: "poi-petit-bao-bastille",
    name: "Petit Bao (Bastille)",
    slug: "petit-bao-bastille",
    category: "restaurant",
    subcategory: ["chinese", "baos", "dim-sum", "hong-kong-diner"],
    location: {
        address: "10 Rue Bréguet",
        arrondissement: 11,
        lat: 48.8552636,
        lng: 2.3734007,
        nearest_metro: "Bastille",
        metro_lines: [1, 5, 8],
        google_id: "ChIJ7d3z67Bt5kcRe_v-dY1dTXk"
    },
    moods: {
        chill: 70,
        festif: 60,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Lun-Dim: 12:00–15:00, 19:00–23:00 (Week-end continu 12:00–23:00)",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.baofamily.co/petitbao-bastille",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 22,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 0,
        coffee_price: 3.50,
        dish_price: 15.00, // MANUAL: Median of Bao kits & Plats
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Petit Bao Bastille (ex-Bao Express) 2024-2025
            {
                category: "Les Signatures (Baos & Dim Sum)",
                items: [
                    { name: "Charsiu Bao (x2)", price: "9.00€", description: "Brioche vapeur au porc laqué caramélisé." },
                    { name: "Baozi Shanghai Classic (x2)", price: "8.50€", description: "Porc, ciboule, gingembre." },
                    { name: "Chicken Bao (x2)", price: "9.00€", description: "Poulet, shiitake, poivre noir." },
                    { name: "Xiao Long Bao (x4)", price: "9.50€", description: "Raviolis à la soupe brûlante de porc." },
                    { name: "Pan-fried Pork Mini Bao (x3)", price: "10.00€", description: "Croustillants, jus brûlant." },
                    { name: "Siu Mai (x3)", price: "7.00€", description: "Bouchées porc & crevettes." },
                    { name: "Cheesy Bao (x1)", price: "6.00€", description: "Bao frit, fromage & oignons caramélisés." }
                ]
            },
            {
                category: "Dim Sum & Sides",
                items: [
                    { name: "Fried Wontons (x6)", price: "10.00€", description: "Crevettes entières, sauce sweet chili." },
                    { name: "Shrimp Toast (x2)", price: "9.00€", description: "Pain brioché, crevettes, mayo sriracha." },
                    { name: "Golden Mushrooms", price: "7.50€", description: "Pleurotes frites au cumin." },
                    { name: "Fraîcheur Verte", price: "5.00€", description: "Concombres à l'ail et vinaigre noir." }
                ]
            },
            {
                category: "Wok & Plats",
                items: [
                    { name: "Aubergines Hong Shao sur riz", price: "15.00€", description: "Aubergines fondantes à la sauce soja secrète." },
                    { name: "Poulet Sweet & Sour sur riz", price: "16.00€", description: "Poulet frit croustillant, sauce acidulée." },
                    { name: "Boeuf Loc Lac", price: "18.00€" },
                    { name: "OG Chao Fan", price: "14.50€", description: "Riz sauté aux œufs, shiitake & sauce XO maison." },
                    { name: "Veggie Ho Fun", price: "14.00€", description: "Nouilles de riz larges, tofu & légumes." },
                    { name: "Nouilles de Shanghai", price: "10.00€", description: "Nouilles fraîches maison, soja & échalotes frites." }
                ]
            },
            {
                category: "Petites Choses (Sides)",
                items: [
                    { name: "Fraîcheur Verte", price: "5.00€", description: "Concombres à l'ail et vinaigre noir." },
                    { name: "Wontons Crevettes (x6)", price: "10.00€" }
                ]
            },
            {
                category: "Douceurs (Desserts)",
                items: [
                    { name: "Peanut Bao", price: "6.00€", description: "Le bao sucré au coeur cacahuète & caramel." },
                    { name: "Mini Bao Choco", price: "6.50€", description: "Ganache chocolat noir fondante." },
                    { name: "Mango Sago", price: "7.00€", description: "Perles de tapioca & mangue fraîche." }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWvEEJTitkBEjbfK5neEMASKs9V4zgWlPrBge4Dil_wOtT1-8oUqklsvdui5m2QhmzkWvPc1vmiPAHBXOi76fgGGj2QMDeEPdHVcKJm4kx-IdHgyCATAyt5zo-Q3toXyxoSl9lT9kbzZx24AsTyhqSD48AF8TpcKGECo5nD51xazeToIESFefv-75ojuyJpWesc996UemvuHfe6-QTCKu0m74UzCNKKGzduhG41HdW6evzwT3pwYpxYYA4tZzKQ7XgDV_9-0-hX7x69ixFaC_RUXWfFCyu4T3b43KoLxUCMmg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWJG_MMu6FYjG-kj31Ib5B2rQs_XXHesaC_OYRJIJrtgCuOOFt8uXxR5snK7pURbl7hd99y3---W0E5rZJoYNrSRKopGAkrtgVmf7EW3BtFN1fDheY3zDWNCdxxnKhrzRv_NRCDV0B0Bly1DD0owoSTPzWSeMr1Ft9-j_e0ggpxdhCkwqXTn3_lhVtFcJkpF3bAH9yX877hrfBcmFnYr_lQvZJm20MRPm2QzmkCJdTehx1J-csfedn_xncmSTO44mtbcgaVpyqHkPrg9xwZigeopMzk7UPGVeUW2qP7d0ysMaV2Py3fccp0Epg44oOpvYvHhewLtwCPxtdi-jvezBQHRbiaL5XsybfG3QQ3ZvJDLFaHFfPFkpH8geUh-akK728-kOY1kHK_S3BVGJyVQBqKrwiKIp6_NENvcsaE0fuZ4TDoygteFmsC77cU9oHp&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.3,
    description: "Anciennement Bao Express, ce lieu a été repensé pour devenir le plus grand temple de la Bao Family. Inspiré des 'cha chaan teng' (cafés de Hong Kong), le décor rétro mélange néons, banquettes et cuisine ouverte survoltée. Des baos vapeur façonnés main aux nouilles sautées au wok, on y trouve toute la gourmandise de la street-food cantonaise avec une énergie communicative.",
    insider_tip: "N'essayez même pas de réserver, c'est premier arrivé, premier servi. Le weekend, le service continu est parfait pour un déjeuner tardif à 16h sans faire la queue. Le French Toast version Hong-Kong est une folie calorique nécessaire.",
    expert_catchline: "L'énergie de Hong-Kong et le paradis du bao artisanal entre Bastille et Bréguet.",
    specials: {
        cuisine: ["Baos artisanaux", "Wok-cooked dishes", "Hong Kong Diner vibe"],
        drinks: ["Bières artisanales Deck&Donohue", "Thés glacés maison"],
        must_eat: "Le Charsiu Bao au porc laqué, fondant et sucré-salé.",
        must_drink: "Le Ginger Beer maison pour réveiller les papilles."
    }
};
