import { SurgicalPlace } from '../../../type-definition';

export const les_deserteurs: SurgicalPlace = {
    id: "poi-les-deserteurs",
    name: "Les Déserteurs",
    slug: "les-deserteurs",
    category: "restaurant",
    subcategory: ["menu dégustation", "gastro", "restaurant"],
    location: {
        address: "46 Rue Trousseau",
        arrondissement: 11,
        lat: 48.85238589999999,
        lng: 2.379208,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJ6x6Zkghy5kcRfCmlxVg5reg"
    },
    moods: {
        chill: 80,
        festif: 0,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:15–14:00, 19:30–22:00\nmercredi: 12:15–14:00, 19:30–22:00\njeudi: 12:15–14:00, 19:30–22:00\nvendredi: 12:15–14:00, 19:30–22:00\nsamedi: 12:15–14:00, 19:30–22:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "tel:+33148069585",
            label: "APPELER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 28.00, // Menu Déjeuner (Entry Satiety)
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Les Menus Uniques (À l'aveugle)",
                items: [
                    { name: "Menu Déjeuner 3 temps (Entrée-Plat-Dessert)", price_cents: 3500 },
                    { name: "Menu Déjeuner 2 temps (Entrée-Plat ou Plat-Dessert)", price_cents: 2800 },
                    { name: "Menu Dégustation 4 temps (Soir)", price_cents: 4500 },
                    { name: "Menu Dégustation 6 temps (Soir)", price_cents: 6000, description: "L'expérience complète du chef Daniel Baratier à l'aveugle." },
                    { name: "Plateau de fromages affinés (Supplément)", price_cents: 1200 },
                    { name: "Accord Mets & Vins (4 verres)", price_cents: 3000 },
                    { name: "Accord Mets & Vins (6 verres)", price_cents: 4500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Inspirations (Saveurs Déserteurs)",
                items: [
                    { name: "Betterave aigre-doux, estragon du Mexique", price_cents: 0 },
                    { name: "Ravioles d'oignons de paille, amandes de Noto", price_cents: 0 },
                    { name: "Thon blanc basque snacké, purée potiron-miso", price_cents: 0 },
                    { name: "Rouget barbet, mousseline de chou-fleur & rouille", price_cents: 0 },
                    { name: "Asperges, anchoïade & pimprenelle", price_cents: 0 },
                    { name: "Pigeonneau de Barbarie, carotte & oseille", price_cents: 0 },
                    { name: "Paris-Brest déstructuré, noisettes & shiso", price_cents: 0 },
                    { name: "Le dessert 'Triple C' (Caramel, Cacahuète, Chocolat)", price_cents: 0 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWfCJazICA4f6nx__R1rkFf-HqIj35AVsP84lN9yTek8qKIaQdNzRfQt6wgfwMFJlNrAUrc7zkLtVnWYGmjM7vtG22jyh2govowFMc2nSQuf31mxWbjWHBZAFZWqwRNWIh7SpJgyJfWBfC2AC2G8lPhjdLQPMCZ46gsopSWG1A6g-R8yKAfALH4o0SG8JG5DZm0yli3vDK_zhcS-tLPYPuIN8AHoGldl5WqDyqrW298gg_UlnLHfNQWt_A4D26y-N7cg_uNk-g3nrg5Wjcdeiq9l-kyDScKdYKHS_mtVXaWAT37-2ndREQA0aSeZKiZaY7gq3LisvpxZ_ClL4A_BlN1_8mr1pZRtXCxKe-0F8qIUlCqcRCBFNofA_70YksQmgxV81Qs1qCcAu2l6PDepwDZzPWu3ClzkF-LzW6no0Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU5NCm0FinXdmadudBr2-qbdZ9vFkoMb7aGU6935TX2URGDnTjltneKzeIcrrqcst8FygwhOTP0HDbB2q_YQtOe1C_SAU9Nls2LUQWt0JXx6CCP044SwsrrS2SzCLhEaYNKTLfYfW7QR4ZQHIBXTYTABT3ZmiiJaS5FVuJIKO5RQxby6cz18i1niTXSNy4yuk4XkXp7M4_xEUv7nn4XmSnQOXhZ9VIuL1xGp_kAZfMJpGbygPQx5Rzbj7k-ohEPARt-_P06sTP3oYffqdNNd4ZM_45Sc3M_efx2OAiEVrR8aZQ6QODtKeDJ1ng91wxNtTInop-wn4p7hV5gV98-cXcVzeirPcyNHmkPOcZelyOM3ZHtmU4tAjqG-xbQU2iWeRNYF1Pjs3gKQrj-VcEl3jGgJhcMD7mTZ5gD9LfDLjo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW4Rc5tv7BhmophhzzkcuvUHrvK_RE13NcHLd7PWP15VF_fUVLvOFfOL-V5huD-kDA683gWcjH8YYs4fAvEsjovcsQ8pZHsBZ5SMlA-wVbGrtNDpMjQlDYUV8tn_yN0X_9d_Jx-Pel0KHPHY93lprUSlNMyvRSwuO-2VMNFwZ0QWekRzCO2Z-ZiRdTFe_e_lQlzo152uwA_m-Uts4H-sn7ZHXmUtX2OlRM8HkyFpkbnP-IH-XoXaWe9Y2GntXt2WYGbMCBARNel0ktVtciF4fUTzcFlAgDi3qVYuwPI12eMRzCdGiyTwEPqAh18942KrX1cO4lNn14oGD9K6PAFbzjXv-c6RuAjIDVCYC0XEfeGSFG0Q0S-6NUIOJjLsoQKrGAISKJasMa2LBWcjlIJVOo3QAk6U10O3Gfjy8sf6jZZLA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "lesdeserteurs_paris",
    verified: true,
    google_rating: 4.6,
    description: "Le duo choc d'anciens de l'institution 'Le Sergent Recruteur' signe ici une table minimaliste (sans fioriture de décoration) où seule l'assiette prime. Cuisine hyper-inventive, rythmée par l'Asie et la Bretagne, rythmée par un menu unique à l'aveugle.",
    insider_tip: "• C'est un concept exclusif de \"Menu Dégustation à l'aveugle\". Si vous détestez les surprises ou avez trop de restrictions, fuyez.\n• Le menu Déjeuner (35€ pour 3 temps) est un hold-up qualitatif rare dans Paris.\n• Réservation obligatoire par téléphone, le site n'a pas de module de résa direct.",
    expert_catchline: "Haute gastronomie cachée et minimaliste. L'accord mets/vins à l'aveugle est de très haut niveau.",
    specials: {
        cuisine: ["Menu 6 temps à l'aveugle", "Foie gras terre/mer"],
        drinks: ["Accord Mets / Vins inattendu"],
        must_eat: "Laissez-vous glisser dans le menu en 6 temps, c'est la seule façon de comprendre la narration du chef.",
        must_drink: "L'accord mets et vins orchestré au cordeau par le sommelier, on y découvre des petites pépites du Jura et de Bourgogne."
    }
};
