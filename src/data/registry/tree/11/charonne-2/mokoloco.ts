import { SurgicalPlace } from '../../../type-definition';

export const mokoloco: SurgicalPlace = {
    id: "poi-mokoloco",
    name: "Mokoloco",
    slug: "mokoloco",
    category: "restaurant",
    subcategory: ["fusion", "coréen", "français", "restaurant"],
    location: {
        address: "74 Rue de Charonne",
        arrondissement: 11,
        lat: 48.8534122,
        lng: 2.3799023,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJseadIG1z5kcR0GvBsNWHgd8"
    },
    moods: {
        chill: 65,
        festif: 15,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 19:00–22:00\nmercredi: 19:00–22:00\njeudi: 19:00–22:00\nvendredi: 19:00–22:00\nsamedi: 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://mokoloco.co/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 24, // MANUAL: Plats à la carte évalués autour de 20-28€ le soir (Rouget 24€).
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "starter",
                display_label: "Petites Assiettes à Partager (Entrées)",
                items: [
                    // VERIFIED: Le Fooding + Umai + lacarte.menu (2024-2025) — Chef Minsoo Kim
                    { name: "Snack 'Barbajuan'", price_cents: 1200 },
                    { name: "Briouate au foie de volaille", price_cents: 1300 },
                    { name: "Egg Jjim (flan coréen vapeur)", price_cents: 1400 },
                    { name: "Sardines chalumées", price_cents: 1400 },
                    { name: "Mulet cru, condiments coréens", price_cents: 1600 },
                    { name: "Thon blanc cru, condiments saisonniers", price_cents: 1600 },
                    { name: "Beignets de pommes de terre, sauce pimentée", price_cents: 1200 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats (à partager ou individuels)",
                items: [
                    { name: "Madame Butterfly (Crevettes frites pointues)", price_cents: 2200 },
                    { name: "Rouget de ligne rôti, réduction corsée", price_cents: 2400 },
                    { name: "Pkaïla (ragoût d'épinards traditionnel)", price_cents: 2000 },
                    { name: "Fricassé tunisien revisité", price_cents: 1800 },
                    { name: "Tajine aux boulettes de kefta", price_cents: 2200 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Menu Dégustation",
                items: [
                    { name: "Menu Dégustation du Soir (5-6 assiettes)", price_cents: 3800, description: "Le chef compose pour vous. Meilleur rapport Q/P." }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Dessert de saison du chef", price_cents: 1200 },
                    { name: "Dessert signature (selon résidence)", price_cents: 1000 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins Natures",
                items: [
                    { name: "Verre de vin nature (à partir de)", price_cents: 800 },
                    { name: "Pet'Nat fruité (bouteille)", price_cents: 3200 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUhklRsOQQ2czp1R8TEmx9YkyIs3yJuYztM6UvYF55cC_DDMufhP1w_bjTa-_mfG2zJ7fYMc3lY0ltqnmdFmg3ua1FzjaQ22JzkkVG-fbkK8n-VzDnkQBEIuaAzN8Buz_6DFCle4HrMnARUPuyT62HixMEG8cHshUImHnrGxCLechrurkaLcqcyQPqpin1BgYHdJSVWFnVqhijVvAWpU9kS2qHRDRqXg_Q8sELKUO0CwcXW5SgW_6eOvHQqx01qMiaiknZhqV45kMCm9VYjPzc9PvmDXxBzcGHeL4k3dldHTJxLAS0dTzwdDONQkYBo7ZhvCBOt83Onom6_dk8q4ZSUiSdVgpLlqBU9k9poHX4X3G_VuCQx-rOifwP9XvFc0hh1nA1nId2dg3wPoo1SqZup-Q6YRO61gny7byA3tbdZKVhw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVqHBidCFadIRyq50joYCZZyrPPACOD37HwF1Yzskt-BRR-Eq_M4WU2M7_qmdkRMxdqPOpGEMNfHEhO_sAIIwDXKjJPG5uik5_2oOBFcTARueqoL-cJohuUAhgIrd6wBmbnVbveJGXJjePZHe5PyOgEzRw4pQb0bnV6CMa6rKUH5LGr9H1xOU7VpaO-8ZuUumxiQYIiM7vxvDp2d-4XAeWoPveow8LZmVD8Pq8FYhyZ55evsSe4JZjvCn4KddxHW51-gSHblUdv-L9opAEQi2vr33WKNkhtL4WBbkeKfx0aSffzrfUXNiFPiiSv7GTvHdstUJFSFfG1TMhVXOVyKUci89zKO5UkhNc47vTZf-XkiFwaep-u2Vo5hEsilepNBC64KsL4CT0FG8ORWBxgJwdEP4OW2sIGZ3d3DdwZvAOA43o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVWa_TpgKQM6b64m-8ncgbjKytxVmN1-UFpbgOqOENmEoKoiRMgYZEAjzj4NYkaj3X-hbhu1Oi2mw9ETuMiQDY0fLpKB6KSUvD2n41UssjyQQPL9MSO1O9zfAPiUjKz078tZg3pYyPx9O_es7yV-3pG3wY0vnZo1EKOrLzIbeNtZSoWSutlA-2I1Ahxhb2c7f9FfgDxyeou-Ho2FdP2dBZ_q5xKyWYG4lfNLsBZpdYSaXrXavvWCXZDXipq_g-Rcfi3rpyTmu7S476IKlxJiHqwohwPUQj4lf4tN_u31IP2fYaAhLesLz2EDMBSDN5La44K5e1tob9dJC720v-6No7bYA2Ct13b2VSjRm0YpavPB4JdJ1RtwzlrvkNMaRP82XVBiQZIQ3bFA_z3bherbiQ_OG3is8-plYdonPxL-adM_x2q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "mokoloco.paris",
    verified: true,
    google_rating: 4.6,
    description: "Le superbe laboratoire de résidence culinaire monté par Omar et Moko (les génies derrière Mokonuts). Actuellement dirigé par le chef coréen Minsoo Kim, Mokoloco envoie le soir une bistronomie fusion franco-coréenne saisissante, où les techniques classiques percutent les fermentations et les piments doux de Séoul.",
    insider_tip: "• Mokoloco n'est désormais ouvert que le soir ! Et fermé le dimanche et le lundi.\n• Le menu dégustation à 38€ le soir est probablement le meilleur rapport qualité-prix de l'extrêmement hype rue de Charonne.\n• L'endroit est minuscule et charmant, la réservation est indispensable.",
    expert_catchline: "La résidence culinaire de la galaxie Mokonuts, avec un rapport prix/plaisir redoutable le soir.",
    specials: {
        cuisine: ["Egg Jjim (Flan coréen)", "Menu dégustation abordable", "Fusions franco-coréennes"],
        drinks: ["Pétillants naturels", "Vins sains de vignerons indés"],
        must_eat: "Laissez-vous tenter par le menu à 38€ pour balayer d'un coup le talent de Minsoo Kim.",
        must_drink: "Un Pet'Nat fruité pour casser le sel et l'umami des piments coréens."
    }
};
