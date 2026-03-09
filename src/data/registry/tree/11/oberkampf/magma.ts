import { SurgicalPlace } from '../../../type-definition';

export const magma: SurgicalPlace = {
    id: "poi-magma",
    name: "Magma",
    slug: "magma",
    category: "restaurant",
    subcategory: ["bistronomie", "franco-japonais", "gastronomique", "seasonal"],
    location: {
        address: "9 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.865523,
        lng: 2.368512,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJnx3AVi1v5kcRegkMkjuBFa8"
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–22:30 (Fermé Dim-Lun)",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://restaurantmagma.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 120, // Based on dinner tasting menu
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 4.50,
        dish_price: 80, // MANUAL: Prix du menu dégustation 6 temps
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Magma 2025 Standard (Fixed Tasting Menu)
            {
                category: "Lunch Formulas (Midi)",
                items: [
                    { name: "Menu Déjeuner (3 temps) - Semaine", price: "38.00€", description: "Entrée, Plat, Dessert selon arrivage." },
                    { name: "Menu Déjeuner (3 temps) - Weekend", price: "50.00€" }
                ]
            },
            {
                category: "Dinner Tasting Menus (Soir)",
                items: [
                    { name: "Menu Dégustation (6 temps)", price: "80.00€", description: "L'essentiel de la vision de Ryuya Ono." },
                    { name: "Menu Dégustation (9 temps)", price: "120.00€", description: "L'expérience Magma complète." },
                    { name: "Accords Mets & Vins (9 temps)", price: "90.00€" },
                    { name: "Accords Mets & Sakés (9 temps)", price: "70.00€" }
                ]
            },
            {
                category: "Inspirations (Séquences Ryuya Ono)",
                items: [
                    { name: "Abalone & Oreille de cochon", price: "Inclus", description: "Fenouil, chanterelles, sauce thé vert (Signature)." },
                    { name: "Truite marinée & champignons de Paris", price: "Inclus" },
                    { name: "Lieu jaune de ligne au Bincho-tan", price: "Inclus" },
                    { name: "Omble chevalier fumé, bouillon dashi", price: "Inclus" },
                    { name: "Quasi de veau de lait, réglisse & blettes", price: "Inclus" },
                    { name: "Pigeon fermier rôti sur le coffre", price: "Inclus" },
                    { name: "Meringue aux tomates cerises & sorbet pêche", price: "Inclus" },
                    { name: "Chocolat Tonka, sablé noisette & glace sésame", price: "Inclus" },
                    { name: "Mont-Blanc crèmeux au goût de courge", price: "Inclus" },
                    { name: "Eau micro-filtrée", price: "Inclus" },
                    { name: "Mignardises de fin de repas", price: "Inclus" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWBZb9j2TAaN9ptNsoo_QSD0F-pz9zjOkqNKk3Kk6HmnajskwHEFrrmbbvena41ef38c8ENeh_zKfNi1mCWZEDiPCc475PAT95YHdnctiwGXSSRTCAAH7_yVmh5n5dNLNMA1rjdzBdw0q2NhQOUGZPrKdOZ149ORITwfTMeo8-JchgL4extQBIU3A2B_jPsD71Cy83DIDFvMVIeGfruCQTdgxmMs99x1X_Vp7ESiTgnTJqAtLbdp5AfRN2xW3itVT5e-o_fMcR4OeEuGNniiCn664lWNjYqF_VfseYMvJc6tw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVNlGh2zZy6AZog1nFn4xxlsgUMRUNQV841dPeWr-45S1R83kDmFhCfXgWgwguAm6cxirKBUvQHPljLC8RYM7-B0-Oss5bDcIKLN3FHwXeQW6quGzcM2LQc3F1jbp4xww3KjEtFDXCNKWXS8P8mLxa0s3_HSBef4oACFF9uoYBiFofY_07yuCPgy0EFXLLYa-ZzwlyiTCzP78fF2mJQ4cNawTavCiY1ErLwDLI92zgWJpYg2ziDaPBLyL4k357RBoP7qnjSXAz2zhBQWTiuMmaVhSGPRV-nuiLiDDj9i201UA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.6,
    michelin_stars: 0, // Listed but not starred yet?
    description: "Le chef Ryuya Ono livre une partition d'une justesse rare. Magma est un laboratoire où la technique française s'efface devant la pureté japonaise du produit. Une cuisine anti-gaspi, agile et émouvante, servie dans un cadre intimiste.",
    insider_tip: "L'ormeau (abalone) à l'oreille de cochon est le plat signature à ne pas manquer si disponible. L'accord saké est particulièrement bien pensé et apporte une dimension supplémentaire aux plats de mer.",
    expert_catchline: "La rigueur japonaise rencontre le terroir français dans un magma d'émotions.",
    specials: {
        cuisine: ["Franco-Japonais", "Omakase-style", "Anti-gaspi Gastronomy"],
        drinks: ["Sake Pairing", "Vins Vivants"],
        must_eat: "Le menu 9 temps pour saisir toute la palette du chef.",
        must_drink: "Un accord saké pointu."
    }
};
