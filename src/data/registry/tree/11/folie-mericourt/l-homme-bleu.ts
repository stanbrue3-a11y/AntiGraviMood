import { SurgicalPlace } from '../../../type-definition';

export const l_homme_bleu: SurgicalPlace = {
    id: "poi-l-homme-bleu",
    name: "L’Homme Bleu",
    slug: "l-homme-bleu",
    category: "restaurant",
    subcategory: ["marocain", "couscous", "tajine", "restaurant"],
    location: {
        address: "55 Bis Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8669735,
        lng: 2.3743172,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJIcUaluRt5kcRnPRcQYyvTQ0"
    },
    moods: {
        chill: 50,
        festif: 10,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "lundi: 10:00–15:00, 18:00–00:00\nmardi: 10:00–15:00, 18:00–00:00\nmercredi: 10:00–15:00, 18:00–00:00\njeudi: 10:00–15:00, 18:00–00:00\nvendredi: 10:00–15:00, 18:00–00:00\nsamedi: 10:00–15:00, 18:00–00:00\ndimanche: 16:00–00:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.restaurantlhommebleu.fr/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.00,
        coffee_price: 0,
        dish_price: 21, // MANUAL: Median de couscous/tajines (17.50, 19.50, 20.00, 21.00, 21.50, 22.00, 24.00)
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "other",
                display_label: "Tajines Maison",
                items: [
                    // VERIFIED: Site officiel (2024-2025)
                    { name: "Tajine S'Ixudra (Végétarien)", price_cents: 1800, description: "Petits légumes de saison avec un œuf poché." },
                    { name: "Tajine S'Uyazid (Poulet, légumes, citron confit)", price_cents: 2100 },
                    { name: "Tajine Mtewem (Boulettes, poulet, pois chiches)", price_cents: 2150 },
                    { name: "Tajine S'Uxarfi (Agneau, légumes, citron confit)", price_cents: 2150 },
                    { name: "Tajine Lham Lahlou (Agneau, pruneaux, amandes)", price_cents: 2200 },
                    { name: "Tajine S'Ihut (Poissons sauvages du moment)", price_cents: 2200 }
                ]
            },
            {
                category_type: "other",
                display_label: "Couscous Maison (Seksu)",
                items: [
                    // VERIFIED: Mises à jour récentes (2024-2025)
                    { name: "Seksu S'ixudra (Couscous Végétarien)", price_cents: 1750 },
                    { name: "Seksu Merguez", price_cents: 1950 },
                    { name: "Seksu S'uyazid (Poulet et merguez)", price_cents: 2000 },
                    { name: "Seksu S'iberdien n'izimer (Côtelettes d'agneau)", price_cents: 2250 },
                    { name: "Seksu Homme Bleu (Couscous Royal : brochette, boulette, côtelette, merguez)", price_cents: 2300 },
                    { name: "Seksu Tfaya (Agneau ou Poulet, raisins, miel)", price_cents: 2400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Pâtisseries & Desserts",
                items: [
                    { name: "Thé à la menthe", price_cents: 350 },
                    { name: "Assortiment de pâtisseries marocaines", price_cents: 900 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVDP1p_xrBFl1fDkjsMEToSRCpbuzGjyVDl0DxPhkSW6lKdTdSnKOfiJ8tyShUIQpwOSYcP6z4mCHw6GYZ4Gn8AtNIkYtzwdvLqXOYdTpdJ4pcJnxS-f4Vlq-4PvdSY_kr7tsWdMdWtcZvXPrRRXQnoNZvDch-ZR7t1rj0ei1ogQKkKgqhtX9Xo14ZpDJQ03FSmTNTpw_7Q1zyIR9_CT4lzAYcyd2zJU-1cxXq5EQlCIskMNVD5LNFXene28HnOSB37zgw3kvvDo0O9DSBW_n-RH-lcrvxW7NcZioPdFymRGwriJO6fzzPn24svpVzU2yDGsfpPqC83HhmHffnaoOX5lEhdgj9tk-MLBwTYyScM6yMMlJWiBt-xYomLtirXxZ-QEponT9KyktTwa-wwv9L0Gb19PlpLgpZWHaJCRkR3R0g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUanXbs9TB4Tdm8Sy38biVs5LNFqtha-riu4E0I2q5AdrKdp-T08wOQNq1HieirXkiqnZgrhekxXsnRgVi2N_dvWvTSIjU9V-iwzF0QgQv0rnxT0L-oFjIA3mml2Ci3jv68HB3CaE19p8Li2G8waVzCazVXSZQYaPNIRHd45PROPyGsq2a0UUryAxYmRkh9opHIxq6w7FjcrcaFoqfpCKAAG_qGMl7-pESuX-2YKTW-iyvheepmgZjNeLQKhcazoHnWNZ-zEs7DxG2Z8Q1hrj2En5d8SSYoAQr9ycmfi_g2BZSzPAu6lNZc-D1UTrkwJrGFV5d8h0MKW811CuCUdhTU7xSp5d-2tDFw9DprYkXsnQNLVLwd_WhuPmbimXcJLQMlqZnEEhY2lIBZXLzJu7ChI_Kb2dmCFt9HSk6zauE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX7ZVlyyCj3k06tDnfIt6rD1J016nJPLAeJh854INZCbwfRser9WOE2c3jX0GrgsmYeLtXqUmB-K8zcCQFpvEZVpuPtFl3UtIKFkotl4A_soG9kH6aeY6Pu0AvRLaw99RzC3n9N1e5mZsbC-pcpk5NMm12npVvHcf9OcRYNEXNnhJqOHP0LpULsgRkmYNWw_X8moBFKXt9JG0dtISf4lEtLbLBiE1mDz399BsZtXFi3-HuMwOOwpqZINA1CCTbZLRoLkhGWao8rKmvHTZnoOOv3H15jEwNIyoiV7Dp1y1NptRWRAAV1lqV4_PgsAEz0VpFSnyc7kcM_YInPSerBaBeDZT0BffHxNkF3RQ6_jETf409mLY21iwwx9xBTdsFx-qddd52DPfAnE2A291HUghwaz8tNzPboUz0MImxPIYyQvkzW4EkYTVsz-5sGSBWw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "restaurant.lhommebleu",
    verified: true,
    google_rating: 4.6,
    description: "L'institution de la rue Jean-Pierre Timbaud. L'Homme Bleu réalise parmi les meilleurs couscous et tajines de tout Paris dans un décor pur jus oriental chaleureux. Des bouillons ultra-parfumés, des semoules fines comme du sable, des viandes parfaitement cuites. Le spot idéal pour un dîner réconfortant ou un repas dominical.",
    insider_tip: "• Le Couscous 'Homme Bleu' (Royal à 23€) est la valeur sûre pour les très grosses faims.\n• Le Tajine Lham Lahlou (agneau, pruneaux, 22€) ravira les fans de sucré-salé.\n• La salle est grande mais se remplit vite l'hiver — réservation quasiment obligatoire le week-end.\n• Très bon rapport qualité/prix/quantité, on repart souvent avec un doggy-bag.",
    expert_catchline: "Couscous et tajines exceptionnels dans une ambiance chaleureuse. Une institution parisienne.",
    specials: {
        cuisine: ["Couscous Homme Bleu (Royal)", "Tajine aux pruneaux", "Tajine S'Uxarfi (Agneau-citron confit)"],
        drinks: ["Thé à la menthe", "Vins du Maghreb"],
        must_eat: "Le Couscous Royal rassemble tout ce qu'on aime, et les boulettes de viande sont fondantes à souhait.",
        must_drink: "Le rituel du thé à la menthe (3.50€) pour clôturer le repas est non négociable."
    }
};
