import { SurgicalPlace } from '../../../../type-definition';

export const alkaram: SurgicalPlace = {
    "id": "poi-alkaram-75015",
    "name": "AlKaram",
    "slug": "alkaram-paris-15",
    "category": "restaurant",
    "subcategory": ["libanais", "moyen-orient", "mezzes", "grillades", "fait-maison", "traiteur"],
    "verified": true,
    "google_rating": 4.8,
    "location": {
        "address": "15 Rue Ferdinand Fabre, 75015 Paris",
        "arrondissement": 15,
        "lat": 48.8384506,
        "lng": 2.2971176,
        "nearest_metro": "Boucicaut / Convention",
        "metro_lines": ["8", "12"],
        "google_id": "ChIJJRmYaRVw5kcRqjvMKFlSNI8"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "wifi": false,
        "terrace": false,
        "opening_hours_raw": "Mardi-Samedi: 12:00-14:30, 19:00-23:00\nDimanche-Lundi: Fermé",
        "main_action": {
            "type": "site",
            "url": "http://www.restaurant-alkaram.fr/",
            "label": "SITE OFFICIEL"
        },
        "cuisine_type": "Cuisine Libanaise & Méditerranéenne",
        "menu_url": "http://www.restaurant-alkaram.fr/la-carte/"
    },
    "pricing": {
        "avg_budget": 25,
        "is_free": false,
        "dish_price": 18, // MANUAL: Expérience mezzés ~18€/pers. Les grillades (23-25€) sont des options premium.
        "force_manual_dish_price": true,
        "pint_price": 6,
        "cocktail_price": 9,
        "wine_glass": 8,
        "coffee_price": 2.6,
        "soft_price": 5,
        "smart_tip": "L'option sandwich/emporter (Chawarma à 7,50€) est imbattable pour le déjeuner. Sur place, la moyenne par personne avec mezzés tourne autour de 25€.",
        "menu_items": [
            {
                "category": "Mezzés Froids",
                "items": [
                    { "name": "Hommos Classique", "price": "8,00€", "description": "Purée de pois chiches à la crème de sésame." },
                    { "name": "Hommos Beyrouti", "price": "9,00€", "description": "Version relevée avec ail et persil." },
                    { "name": "Hommos Viande", "price": "10,50€", "description": "Relevé avec des émincés de viande poêlés." },
                    { "name": "Moutabal (Caviar d'aubergine)", "price": "8,00€", "description": "Aubergine grillée, crème de sésame." },
                    { "name": "Taboulé Libanais", "price": "8,00€", "description": "Persil, blé concassé, tomate, menthe, oignon, citron." }
                ]
            },
            {
                "category": "Mezzés Chauds",
                "items": [
                    { "name": "Falafels (4 pièces)", "price": "8,40€", "description": "Boulettes frites de fèves et pois chiches." },
                    { "name": "Kebbé Boulettes (4 pièces)", "price": "8,40€", "description": "Viande farcie au bourghoul et pignons de pin." }
                ]
            },
            {
                "category": "Grillades & Assiettes",
                "items": [
                    { "name": "Chawarma (Bœuf mariné)", "price": "25,00€", "description": "Sur place. Viande de bœuf mariné, émincé et grillé." },
                    { "name": "Chiche Taouk (Poulet mariné)", "price": "23,50€" },
                    { "name": "Sandwich Chawarma (Emporter)", "price": "7,50€" }
                ]
            },
            {
                "category": "Boissons & Vins",
                "items": [
                    { "name": "Verre de Vin Ksara Libanais", "price": "8,00€" },
                    { "name": "Arak (Boisson libanaise anisée 8cl)", "price": "7,00€" },
                    { "name": "Bière Libanaise (33cl)", "price": "6,00€" },
                    { "name": "Laban Ayran (Yaourt liquide salé)", "price": "6,00€" },
                    { "name": "Café Expresso", "price": "2,60€" },
                    { "name": "Café Blanc (Eau de fleur d'oranger)", "price": "3,80€" }
                ]
            }
        ],
        "last_updated": "2026-03-04"
    },
    "moods": {
        "chill": 80,
        "festif": 20,
        "culturel": 40
    },
    "description": "Situé rue Ferdinand Fabre, AlKaram s'impose discrètement comme l'une des tables libanaises les plus fiables du 15ème arrondissement. Oubliez les concepts standardisés : l'endroit mise sur une véritable authenticité culinaire où tout est fait maison, de l'onctuosité de l'houmous aux viandes marinées avec précision. Le cadre est pensé pour être chaleureux et immersif, soutenu par un fond musical toujours juste – assez présent pour donner la texture d'un voyage au Levant, mais parfaitement dosé pour préserver l'intimité des tables.",
    "insider_tip": "• Garez vos a priori sur les portions : les mezzés sont très copieux, laissez le service vous guider sur les quantités, ils sont de très bon conseil pour éviter le suremballage.\n• Contrairement à beaucoup d'adresses, la musique de fond est réglée spécifiquement pour ne pas couvrir les conversations : l'ambiance y reste sereine même à salle pleine.\n• Fermé le dimanche et le lundi : anticipez pour vos dîners de week-end.",
    "specials": {
        "cuisine": ["Libanaise", "Mezzés", "Option Végétarienne Forte"],
        "drinks": ["Vins Libanais", "Thé à la menthe", "Arak"],
        "must_eat": "Le Hommos Viande poêlée & les Kebbé Maison.",
        "expert_catchline": "La grande tradition des mezzés levantins, sans compromis ni surenchère."
    },
    "images": {
        "hero": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWCsAyKbgKYjzQEdXDkqECSzhq_4p847-EJQ7T2xaSR8eBbqe9Vnll8MFuj8iGMvdtc4scI9794DkJ4yjeipSiBRAHMOEewSV8qMv2EeoKF_R7ChcvOsEqaXk-jB2DUSdxLB_VwGz2VcXaZDavYiJIrVyEITMuC_SzLc2JRxE_kc3UKqUnoEGX0Gl8ZZzILudeQeMbgA--eCyHmlZ6hUwP1KNHElv-YJac7thSctx4mEuvfoYvaJYpdkAqcB16ix8xxda7y04pB8fd1P1Y-UNRtkuHI4UrPM5CAbzhfPpdo2w&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        "gallery": [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVR0_a2BXnuJqHPGyZlxfjUj6z1EwMDabfysv_8d4pywEq_Cdanftns7qtZNRWjbZ6SSuiKDIHQMcxy6FecFwNq5PpNLacXNEKriqjWnbt7A6Pm0Ix4vKNKmVT39CvO9AnH_cMIbsUQaEaa6VBs4Rhz2I9g0_6D6x-poKlO44mev-UEyBKgJLtcbmcb9QOrFI5u7OObYnjuNvthkQUgGmHmk60KWj1RBrQGBg2FQJlqxfhK96SyKxMgkpA2P61J2OHkErtiS2xjybP3BoXdMhKPkbJ_hShZtUFvgzWipWpH4N7n-K3neS9rtgij5RyGqOSIgSMhKU5xk_4m0o6qcpgoVDR--Dm1h7LdZKgSCJyawsYaxmBNWd0SpW_KQprWc1iolZb252PGNPJ3nwNiDHv0JCCA2y_6Vb4Rg_bpJxg&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV7UG3oYVtUkeOXjqldcHz60lhv13DkCnZHi2Run8FPzc8E2jc1XXJd9SZrGkrGR6qY8aHVR5ndDkZAq_ZZ47C8csRQ_6-67qL-1GsjNONA66WrBHB5FMi5f5SUn28HR6ocPKY1fFhuM6931g10pDPhiYXWrPzcDZFABegXgdC7wz3ane5Xsru2AgXkq_Ma3zYwq1B0z37kGEGRO75eQBr92Q99tj1NwSK3gAKQECMAmjJuIa89PsnESS_Z4iyXAKgkkh7A-JBNcyTqsaZJCo4TBv89ZoEdyGem0QxHZHY6vYUkG3z37tiS2e69BW7kYbqLdgy83nOMteks35Sg4dZvVI32KByUravGJCuSXeqKm3ihjHBaJzThZOT3vouG5yXYGEwMIaDv2g6AyLQ1jeSQYofw8XrvlVQ05BnuCVIbsw&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWMuw3NBlihoe1u-aXZ5GQD2TEND5mFFU3XGrDyW7oV1BHC6lDvpF7jGnxe0KKZjjx5TXAQQ9nkep9HNnSo7e2S6rx9dbTJZOejsEBk1fJULXBTzTnRKuVjYeZucPmoYFsE8cpmVQwUWFquhiwMakd8OUoWT4PQjC2UMTqFxi8ylf0mWWhoOeFWtYPdgFeElClgmfP_wUJB2lScCEeWHLTO-_iQMiZ6Zid7hTpYyRSU47lo8Llsf15YPhf0lklfau6d8W5YcXmLLuaS34a3Iq-H2JtNmCtklRX61AqUikt84lvVlDOGNiq1vgDaBsoA21DvN-ubDm9BTQaznj0wnz9nSFKpGmTg5I5jk9kqxsWYnoVzwjKcQkb-pj71tGi0pnLNOoRUn_vn1n5du0U_W7y9TX79xrXzsU28a6IdV5HP-soO&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    "source": "expert_human"
};
