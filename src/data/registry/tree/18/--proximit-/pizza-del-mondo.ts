import { SurgicalPlace } from '../../../../type-definition';

export const pizza_del_mondo: SurgicalPlace = {
    "id": "poi-pizza-del-mondo",
    "name": "Pizza del Mondo",
    "slug": "pizza-del-mondo",
    "category": "restaurant",
    "subcategory": [
        "italien",
        "pizza",
        "pates",
        "montmartre",
        "fait-maison"
    ],
    "verified": true,
    "google_rating": 4.7,
    "location": {
        "address": "16 Rue des Trois Frères, 75018 Paris",
        "arrondissement": 18,
        "lat": 48.8845101,
        "lng": 2.3412652,
        "nearest_metro": "Abbesses",
        "metro_lines": [12],
        "google_id": "ChIJOU9wfUNu5kcRSVDWIFIxTTU"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": false,
        "wifi": false,
        "terrace": false,
        "opening_hours_raw": "Lundi-Mardi: 17:00-00:00\nMercredi-Jeudi: 12:00-15:00, 17:00-00:00\nVendredi-Samedi: 12:00-01:00\nDimanche: 12:00-00:00",
        "main_action": {
            "type": "site",
            "url": "http://pizzarestaurantdelmondo.fr/fr",
            "label": "SITE WEB"
        },
        "cuisine_type": "Italien / Pizzas au four à pierre"
    },
    "pricing": {
        "avg_budget": 20,
        "is_free": false,
        "dish_price": 13,
        "pint_price": 6,
        "wine_glass": 5,
        "coffee_price": 2,
        "soft_price": 4,
        "smart_tip": "La pizza 'Del Mondo' (viande hachée, merguez) est l'un des meilleurs rapports qualité-prix du quartier pour un repas sur le pouce.",
        "menu_items": [
            {
                "category": "Pizzas Maison",
                "items": [
                    { "name": "Margherita", "price": "11,50€" },
                    { "name": "Regina", "price": "13,50€" },
                    { "name": "Carbonara", "price": "14,50€" },
                    { "name": "Végétariana", "price": "15,50€" }
                ]
            },
            {
                "category": "Pâtes",
                "items": [
                    { "name": "Bolognaise maison", "price": "14,50€" },
                    { "name": "Carbonara", "price": "15,50€" },
                    { "name": "Napoletana", "price": "13,50€" }
                ]
            },
            {
                "category": "Desserts Maison",
                "items": [
                    { "name": "Tiramisu Maison", "price": "6,50€" },
                    { "name": "Mousse au chocolat", "price": "5,50€" }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 70,
        "festif": 40,
        "culturel": 50
    },
    "description": "Situé dans la charmante rue des Trois Frères, à quelques volées de marches du Sacré-Cœur, Pizza Del Mondo est l'archétype du petit italien de quartier sans prétention mais extrêmement généreux. Connu pour son ambiance intime et son accueil familial, l'établissement mise sur une cuisson au four à pierre pour des pizzas croustillantes. C'est l'escale idéale après une balade dans les ruelles de Montmartre, loin des pièges à touristes de la Place du Tertre.",
    "insider_tip": "• La pâte est cuite au four à pierre, garantissant un croustillant parfait.\n• Ne soyez pas surpris par l'étroitesse du lieu, c'est ce qui fait son charme montmartrois.\n• Ils proposent souvent une formule 'Pizza pour deux' très avantageuse.",
    "specials": {
        "cuisine": ["Italien", "Pizza"],
        "drinks": ["Vins Italiens", "Softs"],
        "must_eat": "Pizza Del Mondo & Tiramisu Maison.",
        "expert_catchline": "L'italien généreux et authentique caché au pied de la Butte."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWLCHDh7izuKqLyvbWfGKP04ihT2CQwXx-K_O-Qt8nN6KiCuzCmaRMV3byYlDQK_rjn2iXPE_CnVIxv84HynagilD4fG8dyLxIB661EE-WuAKeyQdCi2w4KEGO09WvjunNEMkvmMeXS0bcxp9XFZGmvWuQWNfUXWOAEinUqN2VQCC2czPRShzgGvB-p_eJ6wI77Ql51sEYVsqLrNrJB1StJ4LBPEeNuEfRN83Vns1vBtrNiHhrgKMhkdImnQPtI9JHfwUEfPJ3d-raOQRTbIux4MoFM5tMyvimjIsvrW4YVxI3k_PcoZPYj0eF_4joPUf97YEWVIOtxgf_PZH-_fjeHZxcio-XSZlUxrQtwpKKKHkLU6en3DyvH9fHSgCFpsYq4R5__FecEzyT7m30GEj_mIrilWxLe1Bre3jDGegTawbCvTc-xrFyqJLSzrt9mMotmsG4y8ddO8sH2TCTqrMIRulPKvczE5Q3Ri9LzBB9BYM0LhBlUly7eNWwO_HbIPlPOnAJJ0KJBth3_wOHqa8nVIwGchPAYbtsTFnHCLZ1OYv2gFFdTqfBTEPOCtSTUthxR52DrKXG6F3Tbg1AKsATyD5PdrA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWMgTEfpy3awd5Ecq4ig_6N4hhA_WZLfT_SswxS4N_2UNxBESbE4IGDSQJV0llFogazXJrez3KC-gyRtxXFXyjfBQTIR8NtqrU9-uf73_QmSojGzbFs96mv6lAGvxkR9yMVIXMcPsctm70uWYI-LXz0DMnT5cv9tjy5LKZCQJogF20Jo_e6AUIWGOSBDYvoXJRMdEymOCepUgg4dVbtLH_vvYS0O1anjuK40zBP_cjklhmMB_4zryPNst_6hkngVCCwt-w7v1J_yXhrgocL8ihonKtL2NX-5P-Rp-5OyZ4NyJJirDWejyl1sFr6OS7wpBln-F9C_VnUJW4Euo2NdUYmHhecXd5TsZAdYK5oulwepfegdUyYurCSeGId-KZj0dZQX4vUwTYOLcwYOi0zqyBueUviKfFxImIlL6Le2h0dVw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUQ90HGapFx5pUGmqY9bV1DjydZ_OZNRr_2o32yRiTJpnCH9tGZ2YWVp3-gEGPi4d-C8FT_gRYR4OGGhIOfEA1igYqmBI-pH7WJi8MYNg3MYkml5Jtd6-OiMbjr0uSK7nKzPVWc_8uzBHGF4V8nBATFplSeEE2YVhtZZ1Xxi1X9afH4TyCBZfmTNZBp8neq_eGyEobsGeMWTn2ZohriTeqhvq1wAnDeFBorqtu9EFWeW1ePylMPIyhiI5QcgsinQraN5OYp2fWwAvd0yqeYCN6Bym6MyvHNMRAKl1gFg0XPSTFm7ndUfA9C5nVEC_1r9XP3SMRXl5_tl7CIT5zR05y4bENTWNReGoV2knjRZV4SIYg8KwA48vNlr0aTO7Na5hr9-HYiyUxriZ3XeQnkc0wpOiY5MmlQgQqjYKycdFWPpngt2pp9cLheImMRBrt-&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "source": "expert_human"
};
