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
        "terrace": false,
        "opening_hours_raw": "Mardi-Samedi: 12:00-14:30, 19:00-23:00\nDimanche-Lundi: Fermé",
        "main_action": {
            "type": "site",
            "url": "http://www.restaurant-alkaram.fr/",
            "label": "SITE OFFICIEL"
        },
        
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
        "smart_tip": "L’option sandwich/emporter (Chawarma à 7,50€) est imbattable pour le déjeuner. Sur place, la moyenne par personne avec mezzés tourne autour de 25€.",
        "menu_items": [
            {
                "category_type": "other",
                "display_label": "Mezzés Froids",
                "items": [
                    { "name": "Hommos Classique", "price_cents": 800, "description": "Purée de pois chiches à la crème de sésame." },
                    { "name": "Hommos Beyrouti", "price_cents": 900, "description": "Version relevée avec ail et persil." },
                    { "name": "Hommos Viande", "price_cents": 1050, "description": "Relevé avec des émincés de viande poêlés." },
                    { "name": "Moutabal (Caviar d’aubergine)", "price_cents": 800, "description": "Aubergine grillée, crème de sésame." },
                    { "name": "Taboulé Libanais", "price_cents": 800, "description": "Persil, blé concassé, tomate, menthe, oignon, citron." }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Mezzés Chauds",
                "items": [
                    { "name": "Falafels (4 pièces)", "price_cents": 840, "description": "Boulettes frites de fèves et pois chiches." },
                    { "name": "Kebbé Boulettes (4 pièces)", "price_cents": 840, "description": "Viande farcie au bourghoul et pignons de pin." }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Grillades & Assiettes",
                "items": [
                    { "name": "Chawarma (Bœuf mariné)", "price_cents": 2500, "description": "Sur place. Viande de bœuf mariné, émincé et grillé." },
                    { "name": "Chiche Taouk (Poulet mariné)", "price_cents": 2350 },
                    { "name": "Sandwich Chawarma (Emporter)", "price_cents": 750 }
                ]
            },
            {
                "category_type": "drink",
                "display_label": "Boissons & Vins",
                "items": [
                    { "name": "Verre de Vin Ksara Libanais", "price_cents": 800 },
                    { "name": "Arak (Boisson libanaise anisée 8cl)", "price_cents": 700 },
                    { "name": "Bière Libanaise (33cl)", "price_cents": 600 },
                    { "name": "Laban Ayran (Yaourt liquide salé)", "price_cents": 600 },
                    { "name": "Café Expresso", "price_cents": 260 },
                    { "name": "Café Blanc (Eau de fleur d’oranger)", "price_cents": 380 }
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
    "description": "Situé rue Ferdinand Fabre, AlKaram s’impose discrètement comme l’une des tables libanaises les plus fiables du 15ème arrondissement. Oubliez les concepts standardisés : l’endroit mise sur une véritable authenticité culinaire où tout est fait maison, de l’onctuosité de l’houmous aux viandes marinées avec précision. Le cadre est pensé pour être chaleureux et immersif, soutenu par un fond musical toujours juste – assez présent pour donner la texture d’un voyage au Levant, mais parfaitement dosé pour préserver l’intimité des tables.",
    "insider_tip": "• Garez vos a priori sur les portions : les mezzés sont très copieux, laissez le service vous guider sur les quantités, ils sont de très bon conseil pour éviter le suremballage.\n• Contrairement à beaucoup d’adresses, la musique de fond est réglée spécifiquement pour ne pas couvrir les conversations : l'ambiance y reste sereine même à salle pleine.\n• Fermé le dimanche et le lundi : anticipez pour vos dîners de week-end.",
    "specials": {
        "cuisine": ["Libanaise", "Mezzés", "Option Végétarienne Forte"],
        "drinks": ["Vins Libanais", "Thé à la menthe", "Arak"],
        "must_eat": "Le Hommos Viande poêlée & les Kebbé Maison.",
        "expert_catchline": "La grande tradition des mezzés levantins, sans compromis ni surenchère."
    },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/alkaram-paris-15/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/alkaram-paris-15/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/alkaram-paris-15/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/alkaram-paris-15/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/alkaram-paris-15/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/alkaram-paris-15/gallery_4.jpg"
    ]
  },
    "source": "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Libanais. AlKaram.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
