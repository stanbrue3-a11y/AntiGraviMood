import { SurgicalPlace } from '../../../../type-definition';

export const brasserie_rosie: SurgicalPlace = {
    "id": "poi-brasserie-rosie",
    "name": "Brasserie Rosie",
    "slug": "brasserie-rosie",
    "category": "restaurant",
    "subcategory": [
        "brasserie",
        "francais",
        "bastille",
        "coquillettes",
        "paris-brest",
        "terrasse"
    ],
    "verified": true,
    "google_rating": 4.7,
    "location": {
        "address": "53 Rue du Faubourg Saint-Antoine, 75011 Paris",
        "arrondissement": 11,
        "lat": 48.8521487,
        "lng": 2.373183,
        "nearest_metro": "Bastille",
        "metro_lines": [1, 5, 8],
        "google_id": "ChIJpxiIIGdz5kcRw6DgrF-erAA"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "wifi": false,
        "terrace": true,
        "opening_hours_raw": "Lundi-Jeudi: 12:00-14:30, 18:45-22:30\nVendredi: 12:00-14:30, 18:45-23:00\nSamedi: 12:00-15:00, 18:45-23:00\nDimanche: 12:00-15:00, 18:45-22:00",
        "main_action": {
            "type": "site",
            "url": "https://brasseriesalamode.com/",
            "label": "SITE WEB"
        },
        "cuisine_type": "Brasserie Française Moderne"
    },
    "pricing": {
        "avg_budget": 30,
        "is_free": false,
        "dish_price": 16,
        "pint_price": 7,
        "wine_glass": 6,
        "coffee_price": 2.5,
        "soft_price": 5,
        "smart_tip": "Leur Paris-Brest est l'un des meilleurs de la capitale à ce prix. Ne partez pas sans y avoir goûté.",
        "menu_items": [
            {
                "category": "Entrées",
                "items": [
                    { "name": "Œuf Mayo Rosie", "price": "4,50€" },
                    { "name": "Vinaigrette de poireaux", "price": "6,00€" },
                    { "name": "Pâté en croûte maison", "price": "9,00€" }
                ]
            },
            {
                "category": "Plats",
                "items": [
                    { "name": "Coquillettes à la truffe", "price": "19,00€" },
                    { "name": "Saucisse-purée généreuse", "price": "14,00€" },
                    { "name": "Tartare de bœuf au couteau", "price": "17,00€" },
                    { "name": "Pièce du boucher & Frites", "price": "22,00€" }
                ]
            },
            {
                "category": "Desserts",
                "items": [
                    { "name": "Paris-Brest (Iconique)", "price": "8,00€" },
                    { "name": "Fondant au chocolat Valrhona", "price": "7,50€" },
                    { "name": "Crème brûlée vanille Bleue", "price": "6,00€" }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 60,
        "festif": 70,
        "culturel": 20
    },
    "description": "Située sur le dynamique Faubourg Saint-Antoine, la Brasserie Rosie réinvente les codes du genre. Entre son décor inspiré des années 50 (lustres à pampilles, banquettes roses) et sa cuisine 100% maison, c'est l'adresse parfaite pour une tablée de copains. Les prix sont serrés mais la qualité est là, avec des fournisseurs sourcés avec soin. Mention spéciale aux chambres privatisables à l'étage pour des dîners plus confidentiels.",
    "insider_tip": "• Les coquillettes à la truffe sont le 'best-seller' absolu, un vrai retour en enfance.\n• Allez-y tôt ou réservez, car le lieu est pris d'assaut dès 20h.\n• Si vous êtes en groupe, demandez une table dans l'un des salons à l'étage pour plus de confort.",
    "specials": {
        "cuisine": ["Français", "Brasserie", "Terroir"],
        "drinks": ["Vins de Producteurs", "Cocktails Maison"],
        "must_eat": "Coquillettes à la truffe & Paris-Brest.",
        "expert_catchline": "Le néo-bouillon de Bastille qui réconcilie tradition et kitch assumé."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWLIocPbkfgct1YSjLMiE3FDHm5fb9Kloh41UpWol0dTNhG5H-heOjXb1xmkjpaOtlxeWx4lyGoY6-ZSx_5lWy3keNYVzi_Ns78ZeHL9YNYXTYIPSPQoZiCZtzTLTr86_tZq12O2CdfMy2lm1HTZ3m0c_HKjtDgpAFfAhisvCN0MxOubfJGmNVNiVzYg89x0-1IEyTg5-96VRGnefH1Iw4Bn_gEDbSq4RAnj190Rv9jyILhp2pzjdxVlElT0AFWIs7xVrhANtJHeTLNo_JtiplqvJptzQRzChTtGHJifMFDc05O-uc&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW87XWq_e2NwweaKQ1VxKPH-FWiE32rzy8AuAZqOblP5Ut3HOvqplpTkHOc3SBEQmEvF3F5a__lHrri29OKl4QBAe5C5n0TzpH07QrcxJe7rJ63YYOJLbDxGyV9mKtykVV-Y93sK6ZsHXAEBc3Uv7_i8jW-x_oohUaNEn2HyyKHuOCQRb1rAm92iUs8qHGWS7f9Io6Lh3FSLzgwPEjeO_RlQKUBr4wORKmlj2w1Au1PoFL9NwSQvo131plZICh9n_QVwrBeO8zQPEXHtaM6T5pUH2Fr4KP6k2rWOWdshLAPYrPkP-aZbc689iH4910ndZeWnDRW-aUkmbosaz3hy8QHTObm__-6jPjweB1x8cJuNC_rH1Z6FSKECr_KD9v61h3F-Qnlx014UpXmuHxmaUDFzD5vz90YU46WpbPKrVMJBaVKn6pZhsUfZXXb8g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU8HB1p73YNa9BMJYru6jyZ3DtWTEYIknMceF5bmLPIIi5_9WMZJE2izDPUbxIb3RIK_7dbgpkbNvgDJAvMKymwqetbFeVxKrtd_xRrx5puXOsNncMKFQ6g0o3bVgVSRbgh0f5pvBdeta7NndwF4pvQeNA9_GNkkqu1f8nvVPRn9R-yV95JyZBJ3lsdPHeku1QNO_26FBMaP-MuVtg9LRn7yMU_R7qp2vSIWlKRhOj16T7dUdhG4HRlal-QnGInziciCiqiBUpmJ9ZgQpIrFPzatiGva2Or-jwL9rSQTmRAg3RJKJfqNOJfHn4eaL2Mq3V6ZH1K2lAU4ZVLAQEkSdcNdk96ppR-98CZ2qS9I9M3N2uykjDFsOoZy_XSrVD6tB6JQTtaC-vMJXQZtqeVzegmIaIPBMOhhKTXD4SYezrt8S0CLapzBwlMwDDgwBIa&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "source": "expert_human"
};
