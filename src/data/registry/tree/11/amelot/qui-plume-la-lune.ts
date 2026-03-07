import { SurgicalPlace } from '../../../type-definition';

export const qui_plume_la_lune: SurgicalPlace = {
    id: "poi-qui-plume-la-lune",
    name: "Qui Plume la Lune",
    slug: "qui-plume-la-lune",
    category: "restaurant",
    subcategory: ["étoilé", "gastronomique", "dégustation", "restaurant"],
    location: {
        address: "50 Rue Amelot",
        arrondissement: 11,
        lat: 48.8590381,
        lng: 2.3684167,
        nearest_metro: "Chemin Vert",
        metro_lines: [8],
        google_id: "ChIJp4qdOP5t5kcRBK5zybICJt8"
    },
    moods: {
        chill: 60,
        festif: 5,
        culturel: 35
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:00, 19:00–21:30\nmercredi: 12:00–14:00, 19:00–21:30\njeudi: 12:00–14:00, 19:00–21:30\nvendredi: 12:00–14:00, 19:00–21:30\nsamedi: 12:00–14:00, 19:00–21:30\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "http://www.quiplumelalune.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 110,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Site officiel (2024) — accords vins 3 verres 45€ → ~15€/verre
        wine_glass: 15.00,
        coffee_price: 0,
        // Estimation dish_price pour la jauge : Menu Angèle 90€ / 4 temps ≈ 22.50€, Menu Lucie 130€ / 5 ≈ 26€ → ~24€
        dish_price: 24,
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            // ═══════════════════════════════════════════
            // MENUS DÉJEUNER (Source: site officiel + TheFork + ParisSecret)
            // ═══════════════════════════════════════════
            {
                category: "Menu Déjeuner",
                items: [
                    // VERIFIED: Site officiel + TheFork (2024)
                    { name: "Menu Théodore (amuse-bouche + entrée-plat ou plat-dessert + mignardise)", price: "45.00€", description: "Le menu midi accessible." }
                ]
            },
            // ═══════════════════════════════════════════
            // MENUS DÉGUSTATION (Source: site officiel quiplumelalune.fr)
            // ═══════════════════════════════════════════
            {
                category: "Menus Dégustation (Soir)",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Menu 3 temps", price: "70.00€" },
                    { name: "Menu Angèle (4 plats + desserts)", price: "90.00€" },
                    { name: "Menu 5 temps", price: "110.00€" },
                    { name: "Menu Lucie (5 plats + desserts)", price: "130.00€" },
                    { name: "Menu 6 temps", price: "150.00€" },
                    { name: "Menu Claude M. (produits d'exception)", price: "250.00€", description: "Le menu ultime avec des produits d'exception." }
                ]
            },

            // ═══════════════════════════════════════════
            // FROMAGES & DESSERTS (Source: site officiel + TheFork)
            // ═══════════════════════════════════════════
            {
                category: "Fromages & Desserts",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Assiette de fromages (supplément)", price: "30.00€" },
                    { name: "Farandole de desserts (incluse dans le menu)", price: "0.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // ACCORDS METS & VINS (Source: site officiel + TheFork)
            // ═══════════════════════════════════════════
            {
                category: "Accords Mets & Vins",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Accord 3 verres", price: "45.00€" },
                    { name: "Accord Garance (5 verres)", price: "75.00€" },
                    { name: "Accord Léopoldine (6 verres)", price: "90.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // MENU ENFANT
            // ═══════════════════════════════════════════
            {
                category: "Menu Enfant",
                items: [
                    { name: "Menu Enfant (moins de 10 ans)", price: "35.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXc9NGzVor8JdKd3SIAQYe7yRD7mrsgOflX7ZCbtSZokinlXXMELXK25JwqMKRTWaeYaHfj0nAOIpTQDxQXDhD-FApgdHD1U5Eh2jwxo27dr3sJUaj4U1AaN2sybgLXE9qAYg2-h74polcguNU-8xy97jXPMTZVvKtJOpIXr_qbwGV-uOwmqLfo9Uxt_Ca-Epuh2hISOwe4D0qUipSowLRhlFKR4JnlY7F_4nTyg7O3CGYra1R2PFLh-WDThM2Qn1uA3eXxN5H496uAv3f90uWvVTE5o5pzXbq6x7i13vW1iQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW5hTnAnjeTtWM12cSpSnbCntBzRbtxmTqI_xojckMW8LF1Riuc4Dw4b1gYX6JSswdG7haWOkywsuqLitvb5e4bjk4XB0Y6H67XFabDxAlFpaoqT_f5vpyK4oKE3Q1XtengRPkrCs-l3uBuRGll7lGf2yJZgIuKWck13Qeepjval9jm1lFzv1ssM19O_nXwCjvN1AxzbNeWHziaaWbQ_Fiqdkcwa83gRL7USLOvIxOyfu5u1LlUDIA9vQyrWy1Y9Ug4W21vlrRdnMqXVXCWEYbvBLkt9VqgjjZoBBXqCzGCQQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXV9qoBE6rq68nT-lCoOpr9o-v9iFrCTUkm3nj5qMfYrgDJ0lsaei37JbKyphcJ7m7oQ4cGxMaqlo23bKBfTJoYypF4bBPvNSULdkYMZi8PycQZqp86IwqFUoaXXIq-uxYkALUXGTXoz43tXq-Vz6hEhfNgs4iaLoefzJNlWqotQYSSh70q5iItsm__sDbJfyNin6CdAM1s7l1cPbt9IIw2XJaCYrT5-PFr8OTTldpbNY9xzRSjXlqxrtcO8t2RXsMwcivq_xowS43Culnkz-z1F9WAxXL3YWfJR-XkHWSqV9XfPu1KxR-PhClenHTSso-mdU2cOfP_VDESH9xU_A-irNdnN_oxaUjyWu0c9JLHJNnA1A8D-SBHnedQgyB6guS6_yKT2l23XvrAI0LSyAba6u2pMpu7arv_IWHed4NfnwS56gBnuFxgYXMXBuJB&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "quiplumelalune",
    verified: true,
    google_rating: 4.6,
    description: "Qui Plume la Lune est un restaurant étoilé au Guide Michelin niché dans une rue discrète du 11ème. Le chef compose des menus surprises autour de produits d'exception — Saint-Jacques, homard breton, cerf, agneau de lait des Pyrénées — dans un cadre intime et feutré. Pas de carte : on se laisse porter par les menus dégustation, du midi accessible (45€) au somptueux Menu Claude M. (250€).",
    insider_tip: "• Le Menu Théodore à 45€ le midi est le prix d'entrée le plus accessible pour un étoilé Michelin dans le 11ème — c'est un deal rare.\n• Il n'y a PAS de carte à la carte : tous les menus sont des parcours surprise du chef.\n• L'accord mets et vins en 3 verres (45€) est recommandé — le sommelier est excellent.\n• Le Menu Claude M. à 250€ est réservé aux grandes occasions — uniquement des produits d'exception (homard, truffe, etc.).\n• La réservation est OBLIGATOIRE, surtout le week-end.",
    expert_catchline: "L'étoilé Michelin secret du 11ème : menus surprise du chef et produits d'exception dès 45€.",
    specials: {
        cuisine: ["Saint-Jacques cresson", "Homard breton rôti", "Cerf rôti beurre genièvre", "Agneau de lait Pyrénées"],
        drinks: ["Accords mets-vins 3 à 6 verres", "Sommelière experte", "Cave classique raffinée"],
        must_eat: "Pas de choix : on se laisse porter. Le Menu Angèle (90€, 4 temps) est le sweet spot entre ambition culinaire et budget. Le Menu Théodore (45€) est parfait pour un premier essai au déjeuner.",
        must_drink: "L'accord Garance en 5 verres (75€) est la meilleure façon de profiter du repas — la sommelière ajuste les accords à chaque plat surprise."
    }
};
