import { SurgicalPlace } from '../../../type-definition';

export const maison_sota: SurgicalPlace = {
    id: "poi-maison-sota",
    name: "Maison Sota Atsumi",
    slug: "maison-sota",
    category: "restaurant",
    subcategory: ["gastronomique", "feu de bois", "japonais", "exception", "restaurant"],
    location: {
        address: "3 Rue Saint-Hubert",
        arrondissement: 11,
        lat: 48.8637982,
        lng: 2.3791662,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJwc06-rBt5kcRWNPRltJQcd0"
    },
    moods: {
        chill: 50,
        festif: 10,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 19:30–21:00\njeudi: 12:30–13:30, 19:30–21:00\nvendredi: 12:30–13:30, 19:30–21:00\nsamedi: 12:30–13:30, 19:30–21:00\ndimanche: 12:30–13:30",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.maison-sota.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 165,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Vins au verre annoncés sur TheFork & Le Fooding (2024)
        wine_glass: 12.00,
        coffee_price: 5.00,
        // Estimation dish_price pour la jauge : Menu Déjeuner 65€ / 4 temps ≈ 16€, Menu 85€ / 5 ≈ 17€ → ~20€ (pondéré vers le haut pour le prestige)
        dish_price: 65.00, // VERIFIED 2025: Lunch Tasting Menu (Entry Satiety)
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menus Dégustation Gourmands",
                items: [
                    { name: "Menu Maison (Dîner 6 étapes)", price_cents: 14000 },
                    { name: "Menu Maison (Dîner 7 étapes - Mer-Sam)", price_cents: 16500 },
                    { name: "Menu Déjeuner (4 étapes)", price_cents: 6500 },
                    { name: "Menu Déjeuner (5 étapes - Jeu-Sam)", price_cents: 8500 },
                    { name: "Menu Dimanche (7 étapes)", price_cents: 16500 },
                    { name: "Accord Mets & Vins - Dîner", price_cents: 11000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Signature Sota Atsumi (Extraits)",
                items: [
                    { name: "Makis de veau, huîtres & condiment algues", price_cents: 0 },
                    { name: "Asperges blanches cuites au bois, beurre d'agrumes", price_cents: 0 },
                    { name: "Saint-Jacques de plongée, mousseline de céleri", price_cents: 0 },
                    { name: "Pigeon de Vendée, betteraves au feu de bois", price_cents: 0 },
                    { name: "Poire rôtie, glace au foin & caramel beurre salé", price_cents: 0 },
                    { name: "Tartelette au yuzu & meringue italienne", price_cents: 0 },
                    { name: "Homard bleu de casier au Bincho-tan", price_cents: 0 },
                    { name: "Oursin & sabayon au Vin Jaune", price_cents: 0 },
                    { name: "Turbot sauvage, émulsion d'arêtes perlé", price_cents: 0 },
                    { name: "Pain maison au feu de bois & Beurre fermier", price_cents: 0 },
                    { name: "Mignardises de la Maison Sota", price_cents: 0 },
                    { name: "Eau micro-filtrée", price_cents: 600 },
                    { name: "Sélection de Cafés par Sota", price_cents: 500 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWLBNKlmXz975fAasgXW2w_zL2bFI9Gfrv0_pMbYXG7jdGH_XXCwe_QwxjX5LPmx7cIIv0tkCOxTPhDPQtMNJhioH5XPYOc9xcHshiMCo1kYLb_ydSuGFsgIqOAQv1AwmQQZ7JCldACp6TjJMcVoCGMh4fHcgBB1T62VgG9CvdAVKlXg9IqUvPbuGG5JSXBJKoLoDAk25nAPJY38HpsQeHuMTlgVJKE8KVD96kbcXyjqedp-TRuF2YZv-yb1S-PkUMMcr0kFnL88A4nztusnFwVPs5BhEGXn_47MmWUGBWZpL5uirZ5xLzQGXeVM0mxqiamJ_EOohKlAyd7mqJkw8moL6ElI-5KkkPacgo_c2O9E6kGQqhzsklZUwb-CXz6EQK0q9-V8tnAu8jiwc5DS6oZHF38IlUI0V_proJsKgtDiSgT-elqu6ctmTLdfkc_&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXdZkn1eieWUqSBWloDp0dMFrmrHKETqtEAsKcRdYHLtouM8KHvvo_YU2Ohh5tSRob9iaabTuSpIigPE_88-KWNQxqxdiabaAzu7V6NFCzmhS3666qbwb0YC4s6tmm2novctPDgEzwWQqgLbslq7PJA9JYBMzzX3TGfvP3nLU2_ODrv0Wfc50foKOPOEI7F7BiJRbKd6dwCU2Z2XuqHvHSA7dDrC0E2L7EmgpUjPGp_8RwPcyWn7GV8YYrQ0AnW4K-VfyIokiIEON0oONxm8V-QZJuuS7H7BO-3fGHgm-fGbpdY9wzrz0EmbllXu1cRFYcc0D0vFRV_HrFDiAZLQb_r-OVI5E-R3dm2hLOWXeXzEWjdRDeJEQXahIsSlzvTfuIFvD7rXHQ0wBAO85oZAEX6CHeIhF5Z0nxRUO_enM0&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVSovDi2UxgJkfm39VjZwBWqPKhUClscJqjFvwfn_BM-JJYUT9g1M5kinc9m8AyK9JQ1RK0M-A9b1lYOXEdKO2SdsOLIO-GvaoTH5XKjlG3wIl-2MdWhHfZ04vno0qnURcC5xVnj5mb9HWlh0hGsBCKTKf2o1xMGARlRzWusIehBtXL6oUh77PsUbm5IkV-bovL2XYChucM1GyGeC2sqz-RT_mUJ4OhI0UMNo4r1nMA552EjtgC6lmVtFdrgDYeZg1RjSdjoXdqOV4ZZPrq_fVf4yZRzQhWFlmDD8pgZzXtij9OwDDVPctx8RMcchgv2e0P9EoPeGQ5-B1eBoyz4pJF53cG287TFUPMeG-j_6C1cBIXJT-lpKib1EUhj1DrWiSXuKeBpdr01Um49s5AhXic04hqwWZPNVpUyQV5GQtz4NDRIZ8sePf7EZkxAA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "maisonsota",
    verified: true,
    google_rating: 4.7,
    description: "Installé dans un loft sublimement réhabilité avec ses hauts plafonds et ses briques apparentes, Maison est le temple parisien du chef Sota Atsumi (ancien du Clown Bar). L'expérience s'articule autour d'un imposant four à bois spectaculaire placé au centre de la cuisine ouverte. La brigade y exécute une partition millimétrée, mêlant la rigueur japonaise aux plus beaux produits des terroirs français.",
    insider_tip: "• C'est la table pour célébrer un anniversaire où le budget n'est pas un problème. Le cadre est incroyablement esthétique et romantique.\n• Demandez une table avec vue sur la cuisine ouverte, l'organisation de la brigade est un spectacle hypnotisant en soi.\n• Le menu Déjeuner (Jeudi au Samedi) à 65€ ou 85€ reste l'option la plus stratégique pour découvrir cette étoile Michelin sans forcément débourser 200€ par tête.",
    expert_catchline: "Haute gastronomie nippone-française enflammée dans un loft d'exception : un sommet parisien.",
    specials: {
        cuisine: ["Pigeon au feu de bois", "Homard transparent", "Oursin et vin jaune"],
        drinks: ["Cave stratosphérique", "Accords pointus (110€)"],
        must_eat: "Laissez-vous totalement guider par le Menu Maison (165€). Le pigeon et les pièces maîtresses rôtissent lentement au feu de bois devant vos yeux, tandis que le homard et l'oursin font des apparitions remarquables au rythme des saisons.",
        must_drink: "L'accord Mets & Vins avec ses 7 verres (110€) est loué par les experts pour sa précision d'orfèvre."
    }
};
