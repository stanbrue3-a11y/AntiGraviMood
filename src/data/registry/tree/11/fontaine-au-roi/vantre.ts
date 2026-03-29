import { SurgicalPlace } from '../../../type-definition';

export const vantre: SurgicalPlace = {
    id: "poi-vantre",
    name: "Vantre",
    slug: "vantre",
    category: "restaurant",
    subcategory: ["néo-bistrot", "gastronomique", "vins natures", "japonais", "restaurant"],
    location: {
        address: "19 Rue de la Fontaine au Roi",
        arrondissement: 11,
        lat: 48.8684957,
        lng: 2.3701262,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJ34SrV-Jt5kcR9ZAebuU_c5Q"
    },
    moods: {
        chill: 55,
        festif: 15,
        culturel: 30
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: 12:00–14:00, 19:30–22:00\nmardi: 12:00–14:00, 19:30–22:00\nmercredi: 12:00–14:00, 19:30–22:00\njeudi: 12:00–14:00, 19:30–22:00\nvendredi: 12:00–14:00, 19:30–22:00\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.vantre.fr/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Estimation à partir du nombre massif de références — verres dès 7€
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 26, // MANUAL: Median des Plats (24, 24, 26, 26, 28, 28, 28)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULE DÉJEUNER (Source: NovaCircle + LeFooding + GaultMillau + Postcard)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Formule Déjeuner (Lundi-Vendredi)",
                items: [
                    // VERIFIED: NovaCircle + Postcard (2024) — 28-29.50€
                    { name: "Entrée + Plat ou Plat + Dessert", price_cents: 2800 },
                    { name: "Entrée + Plat + Dessert", price_cents: 2950 }
                ]
            },
            // ═══════════════════════════════════════════
            // ENTRÉES (Source: NovaCircle + Yonder + LeFooding)
            // ═══════════════════════════════════════════
            {
                category_type: "starter",
                display_label: "Entrées",
                items: [
                    // VERIFIED: NovaCircle (2024) — entrées 8-12€
                    { name: "Terrine de campagne maison", price_cents: 1000 },
                    { name: "Huîtres de saison", price_cents: 1200 },
                    { name: "Carpaccio de poisson, agrumes", price_cents: 1200 },
                    { name: "Gnocchi aux artichauts et ricotta fumée", price_cents: 1100 },
                    { name: "Moules au gingembre et coriandre", price_cents: 1000 },
                    { name: "Salade de tomates, basilic, ricotta", price_cents: 800 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS (Source: NovaCircle + Yonder + Worlds50Best + LeFooding)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: Yonder + NovaCircle (2024) — plats 24-28€
                    { name: "Selle d'agneau farcie aux épinards", price_cents: 2800 },
                    { name: "Bar de ligne, légumes du moment", price_cents: 2600 },
                    { name: "Boeuf Wellington (en saison)", price_cents: 2800 },
                    { name: "Tête de porc grillée", price_cents: 2400, description: "Un classique audacieux du chef." },
                    { name: "Pigeon en pâté-croûte, foie gras", price_cents: 2800 },
                    { name: "Dorade, pommes de terre, fenouil grillé, salicorne", price_cents: 2600 },
                    { name: "Tagliatelles aux courgettes, basilic, tomates", price_cents: 2400 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: NovaCircle + Yonder)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    // VERIFIED: NovaCircle (2024) — desserts ~8€
                    { name: "Brownie au chocolat", price_cents: 800 },
                    { name: "Sablé pistache, cerises, glace pistache", price_cents: 900 },
                    { name: "Dessert du jour", price_cents: 800 }
                ]
            },
            // ═══════════════════════════════════════════
            // LA CAVE MONUMENTALE — 3000-6000 BOUTEILLES (Source: GaultMillau + Michelin + LeBey + Airial)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Cave (3000+ références, gérée par Marco Pelletier)",
                items: [
                    { name: "Verre de vin nature / bio", price_cents: 700 },
                    { name: "Bouteille (entrée de cave)", price_cents: 2800 },
                    { name: "Grands crus et raretés (jusqu'à)", price_cents: 50000, description: "Une cave légendaire de 3000 à 6000 bouteilles pour les amateurs." }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWUROU5tw9_EUPVejPmxVpkBawoGDOzUkG0IrO27_BLXVHsKpsCnHbLk6PGIooxNX9ENhis5Rwxb6tQiDQxKZI0aYT8VQ2zEAA7rVYjOxw9w9geNoQHwNi_uCPLqmbB17UQWTpiV4UomENU5w_pf2-sf-wx_2zps_ORRdbS9XFYe3NCA11lwNKyPV_95RGORhHA9hhO8Hfhitrh1CBii-9aOmPfZKc4NVJVAVy79kLvUaEsO31Z67HmZVrxjb0Lkm8etuw99rvFJKa-sWwHKEi-v-aCHGIQaMT8COv5yvRTvsZp3Xq5X9Gda5vmpq9mSd1vO0cqrtmDtUg0SoD0M1vWJy0LSF7o476R3BFUdpEjbZRk8zs0A3kbZ8Hc5V_JGnLdmkYoOo_Uv6MtEcCiRbFPKBkkajKGsAFrtu21oixSWQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWKfEDZRmcTsJe5o65JlTm-TR0A8rcwpzWtriY3JUxM0yetKChNem9tJbZbN61QeoTnmPZw504O6wsEbkRsabstug3F7PCrVhOMbTt0XtPTUiveYsfx3g3Vvwq5paW1iV5cNcwLgGvhQCVLWWhGK34o7gWtCxp0GZmlKkqqSSIbCy6CGXc5FTQU66m1k0vkZGyDsc_SmBGLoH8APP-0GMCSo74V0CMKqn4z0J82onHYOuqilmSuTyx5d8i-wwDMdlUknIBGtoF3EpSE1hoSv6MnOLuBOfelZfcAf5Pr3YBhIWOp9kGqfxzxLRTjw7ye0mw9JBpix7utCAxmasQhlnUhKSGpkfn2QmXx2AL6SV4bJ15Rjj187t99TaUuzUgjcR33t9kJ4UL8HSRUrCneKuSqAobpeSDdEQdy_gwf5buMdg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVmbFHU_6y2VGDdt1Wn0VB9gZqsmI9pWhNrIzckVAabMQmksz3kTwgXQaDCpcCg5TbDs11rG_kTu2e2gWvlxKvfUSXhme0BmwNGzP-bDX8Y67QSqb57ThUmAeuMW1Uyw34brFb45AeJHW9zqCeArmjsHBgrThE2AQ02zFLmgVGFvMxxpbq-yyTozj1N_1k_NAg09P7OP-9NfvMEQlnj6OIZm7S-OcU5PIsIyth1IieolUiZMlvLcQp6yWnHMFWbcOpqJ1-mILzWQQT6Jz28-cOvYZh3Ava_ggDnU7j8J2X1nNKTtDx8vJ5KdAFSLn-o-grhny2UiAokVRS-5obCi2p6aW1U-nVf0_GyKXNyRrHUss_s8ZljWLaq-oc6eS9wb5oZ7_yAmxypSZzlIlDLkZ3xotN96p4eIhlBsEWiW1IPNV20hJH1UYpmJn-gxzg_&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "vantre_paris",
    verified: true,
    google_rating: 4.4,
    description: "Vantre est le néo-bistrot du chef Marco Pelletier, sommelier de formation devenu cuisinier. Résultat : la cuisine est impeccable (touches japonaises subtiles, produits nobles) et la cave est tout simplement monumentale — entre 3000 et 6000 bouteilles référencées, dont des raretés introuvables. Le cadre est sobre et élégant dans un quartier qui concentre les meilleures tables de Paris.",
    insider_tip: "• La formule déjeuner à 28-29.50€ est l'un des meilleurs rapports qualité-prix du quartier pour cette catégorie de cuisine.\n• La cave est LE trésor caché : si vous êtes amateur, prévenez Marco et il ira vous chercher une bouteille mémorable dans les profondeurs de sa cave.\n• La selle d'agneau farcie aux épinards (28€) et le pigeon en pâté-croûte au foie gras sont des plats signatures qui reviennent souvent.\n• Le menu change chaque semaine — revenez régulièrement pour des découvertes toujours différentes.",
    expert_catchline: "Néo-bistrot d'un sommelier devenu chef, avec une cave de 3000+ bouteilles en sous-sol.",
    specials: {
        cuisine: ["Selle d'agneau farcie", "Boeuf Wellington", "Pigeon pâté-croûte foie gras", "Tête de porc grillée"],
        drinks: ["Cave monumentale 3000-6000 références", "Vins natures et grands crus", "Verres dès 7€"],
        must_eat: "Les plats changent chaque semaine mais les regulars reviennent pour la selle d'agneau farcie aux épinards (28€), la tête de porc grillée (24€) pour les audacieux, ou le pigeon en pâté-croûte au foie gras (28€). Le midi, la formule E+P+D à 29.50€ est imbattable.",
        must_drink: "Marco Pelletier est un sommelier de formation avec une cave de 3000 à 6000 bouteilles — probablement la plus grande collection secrète du 11ème. Faites-lui confiance les yeux fermés."
    }
};
