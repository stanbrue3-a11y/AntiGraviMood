import { SurgicalPlace } from '../../../../type-definition';

export const maison_pinsa_montmartre: SurgicalPlace = {
    "id": "poi-maison-pinsa-montmartre",
    "name": "Maison Pinsa Montmartre",
    "slug": "maison-pinsa-montmartre",
    "category": "restaurant",
    "subcategory": [
        "pizzeria",
        "pinsa",
        "italien"
    ],
    "verified": true,
    "google_rating": 4.8,
    "location": {
        "address": "94 Rue des Martyrs, 75018 Paris",
        "arrondissement": 18,
        "lat": 48.8840173,
        "lng": 2.3398321,
        "nearest_metro": "Pigalle",
        "metro_lines": ["2", "12"],
        "google_id": "ChIJU--nzM1v5kcRXLaaO9GyhBw"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "opening_hours_raw": "Lundi: 12:00–14:30, 19:00–22:30\nMardi: 12:00–14:30, 19:00–22:30\nMercredi: 12:00–14:30, 19:00–22:30\nJeudi: 12:00–14:30, 19:00–22:30\nVendredi: 12:00–14:30, 19:00–23:00\nSamedi: 12:00–23:00\nDimanche: 12:00–22:30",
        "main_action": {
            "type": "site",
            "url": "http://www.maisonpinsa.com/",
            "label": "RESERVER"
        },
        "cuisine_type": "Pinsa Romana Italienne"
    },
    "pricing": {
        "avg_budget": 18,
        "is_free": false,
        // VERIFIED: Menu officiel site web + Privateaser 2024
        "pint_price": 8,
        "cocktail_price": 11,
        "wine_glass": 7,
        "coffee_price": 2.5,
        "dish_price": 13,
        "soft_price": 4,
        "smart_tip": "La Pinsa Margherita à 13€ est le meilleur rapport qualité/prix pour découvrir cette pâte 30% moins calorique.",
        "menu_items": [
            {
                "category_type": "starter",
                "display_label": "Antipasti",
                "items": [
                    { "name": "Burrata nature (125g)", "price_cents": 1000 },
                    { "name": "Burrata à la truffe", "price_cents": 1150 },
                    { "name": "Bruschetta Pomodoro", "price_cents": 800 },
                    { "name": "Planche mixte charcuterie & fromage", "price_cents": 1800 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Pinsas Classiques",
                "items": [
                    { "name": "Margherita (Tomate, Mozza, Basilic)", "price_cents": 1300 },
                    { "name": "Regina (Champignons, Jambon de pays)", "price_cents": 1600 },
                    { "name": "Quatre Fromages", "price_cents": 1750 },
                    { "name": "Genovese (Pesto, Tomates cerises)", "price_cents": 1550 },
                    { "name": "Mortadella Bomba", "price_cents": 1600 }
                ]
            },
            {
                "category_type": "drink",
                "display_label": "Boissons & Cocktails",
                "items": [
                    { "name": "Aperol Spritz", "price_cents": 1100 },
                    { "name": "Pinte Moretti (50cl)", "price_cents": 800 },
                    { "name": "Verre de Montepulciano d'Abruzzo", "price_cents": 700 },
                    { "name": "Expresso", "price_cents": 250 }
                ]
            },
            {
                "category_type": "dessert",
                "display_label": "Desserts",
                "items": [
                    { "name": "Tiramisu Maison", "price_cents": 800 },
                    { "name": "Pinsa Nutella", "price_cents": 950 }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 90,
        "festif": 60,
        "culturel": 10
    },
    "description": "Niché au pied de Montmartre, Maison Pinsa est le temple de la Pinsa Romana, cette pizza ancestrale réinventée avec un mélange de trois farines pour une légèreté absolue. Le cadre est adorable, la décoration soignée avec des touches végétales et l'accueil toujours chaleureux. Un spot parfait pour un date ou un dîner entre amis après une balade dans le 18e.",
    "insider_tip": "• Ne passez pas à côté de la Pinsa Romana : sa pâte est bien plus digeste et croustillante que la Napolitaine classique.\n• Le cadre intérieur est petit mais ultra-chaleureux, idéal pour un moment intime.\n• Si vous êtes deux, une burrata à la truffe en entrée suivie de deux pinsas est le combo gagnant.",
    "specials": {
        "cuisine": ["Italien", "Pinsa", "Pizza"],
        "drinks": ["Aperol Spritz", "Bière Moretti", "Vins Abruzzais"],
        "must_eat": "Cuisine Italienne. La Pinsa Regina aux champignons frais ou la Mortadella Bomba pour les gourmands.",
        "expert_catchline": "La pizza 2.0, plus légère, plus croustillante et 100% plaisir au pied du Sacré-Cœur."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXbZGhx8X9JPiTDHxxlFBTjFAQRAmjo1P_zAvwxZUvWUQxBK4FDTpD4d6jgM65QFLHGHgqQyXNQhP1_QFy6Gh4OrJkcRTXdTAI_q-PwJ68RfxqfyxCAliCjizjbNYaYivlJyRyynyWTSd_9-soarNzxij01plt-XsFjFOnJ6Uei2CyfI5zDCcTtcUc5fbPSDbRgrmraLCiNxCcpmhb11cEfmVk7b4ZPgWOF7lkDKN3psTB49fRzOpTKEDwaq-6qQxoBjlQY05-oyk1JjP2XQdtoKhYiJOubT5_Ug_amR8Rt2OSMCviW0-sKIwIH-DbS_r4UvtOyHsiMRXHwEFuKsE3WVSS56u4UvxvL3a97to9wB8A6gsO9xwGFJ5g3gkVEB0Q6DY0v41Kanlp8QfsJClzQRDm9NNLIFfRxU2Fk9gcDebNOhowPPSNDsipPgUp5PM7lloz702CdPktp2QaT2-ZQqH__U8ngjlWE54qTeUukG0tVYJQZ6OK0jozpJc6sw75tjzR9rxoDavw6VUn_Gk7ab5jQGKcGkS0LXLTP6UrSfFlZcqH2cgiyRkNb4u_guIehuSM455mHINOFZ13_QdSvyaa8NA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXw2iiENahseKgCI-FH7ApcMj4XnzDzc6b2X17j3CfLkdUweEYxL9Putt1XtvRL31Zj6FA3_i0dCpmovjzW9FQLD3NFj9sc0iRroZJAWrh1BwPVEOUSJNsIxK4sB5dUVbZ3mYoAZUgpbbnUIq8O4vqCfQjGuZ0x7_m6gQwNeMhDP7SEeB6XsbaGtDvXaUhhfXaMz3d96WszlNpUOIpKFWHfkst6o8Xr_MNVaGGcXYxrjiZqAf4BmyEs69PXw8HcT-NFVUdVT9ajbxJrM761fDsEmkC4OEoFw-FOc1YiXEXmhQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXmLjQQSULKzZXKMCsISyz7dIJxRVfC5J4Gws6EcnfCfHGQkhu0w2BTImtOT31iXd-thQ79EDe7EkMr-pEmPa6wcuk8A84BMg_VAxO8j1PkcptU7oObS1p8JL6dtx99qHqosYjT5WNFvFQE4oQwGky4BTbpeAHo9uwfH78PS2xlJ2vOLD1ipS1SGCGq0gkzaDPTom9gZdwAns9hCf-nrAaYJ9o0UGxT4YZbT_MK9O0ltxSa3ZwdZlOybpktB6czHtv5-2BBTpUXYvCzYVQ55iNxmJ1cVK9lGS9IRFbb2hvJP7PzoB_sdClVP5on4d4Oq2QZKSIJEgYKN2-aw-QvaIaePBTeH88PWPc1lKXX95maoFQLVG9M0JV7PQrRjMYWCtX9yUvPeDrDETdwTK02fCl4KBRJYPqmoa5pD1jCKE_jFNgK_lEAZo6RSEXzVTc5&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "instagram_handle": "maisonpinsa",
    "source": "expert_human"
};
