import { SurgicalPlace } from '../../../../type-definition';

export const maison_de_l_aubrac: SurgicalPlace = {
    "id": "poi-maison-de-l-aubrac",
    "name": "La Maison de l’Aubrac",
    "slug": "maison-de-l-aubrac",
    "category": "restaurant",
    "subcategory": [
        "viande",
        "aubrac",
        "steakhouse",
        "institution",
        "terrasse",
        "ouvert-tard"
    ],
    "verified": true,
    "google_rating": 4.4,
    "location": {
        "address": "37 Rue Marbeuf, 75008 Paris",
        "arrondissement": 8,
        "lat": 48.869619,
        "lng": 2.305197,
        "nearest_metro": "Franklin D. Roosevelt",
        "metro_lines": [1, 9],
        "google_id": "ChIJ8QfpncNv5kcRo4wGa4RC7GE"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "terrace": true,
        "opening_hours_raw": "Lundi: 12:00–01:00\nMardi: 12:00–01:00\nMercredi: 12:00–06:00\nJeudi: 12:00–07:00\nVendredi: 12:00–07:00\nSamedi: 12:00–07:00\nDimanche: 12:00–01:00",
        "main_action": {
            "type": "site",
            "url": "https://www.maison-aubrac.com/",
            "label": "RESERVER"
        },
        },
    "pricing": {
        "avg_budget": 50,
        "is_free": false,
        // VERIFIED: Menu officiel 2024 (Maison Aubrac)
        "dish_price": 29,
        "pint_price": 9.5, // Estimé pour le quartier Champs-Elysées
        "wine_glass": 9,
        "coffee_price": 3.5,
        "soft_price": 6,
        "smart_tip": "Le service ultra-tardif (jusqu’à 7h du matin en fin de semaine) en fait le refuge ultime pour une viande d'exception après minuit.",
        "menu_items": [
            {
                "category_type": "starter",
                "display_label": "Entrées",
                "items": [
                    { "name": "Œufs mimosa bio", "price_cents": 900 },
                    { "name": "Soupe à l’oignon gratinée", "price_cents": 1400 },
                    { "name": "Os à moelle au sel de Guérande", "price_cents": 1600 },
                    { "name": "Croquettes d’Aligot à la truffe", "price_cents": 1200 },
                    { "name": "Foie gras de canard maison", "price_cents": 2600 }
                ]
            },
            {
                "category_type": "main",
                "display_label": "Viandes d’Aubrac",
                "items": [
                    { "name": "Steak au poivre (200g)", "price_cents": 2900 },
                    { "name": "Faux-filet de l’Aubrac (300g)", "price_cents": 3400 },
                    { "name": "Cheeseburger de l’Aubrac", "price_cents": 2400 },
                    { "name": "Lasagne de bœuf d’Aubrac", "price_cents": 2600 },
                    { "name": "Côte de bœuf (1kg, pour 2)", "price_cents": 11000 }
                ]
            },
            {
                "category_type": "dessert",
                "display_label": "Côté Cave & Dessert",
                "items": [
                    { "name": "Verre de vin (Sélection)", "price_cents": 900 },
                    { "name": "Aligot Maison", "price": "Accompagnement" },
                    { "name": "Fondant au chocolat cœur coulant", "price_cents": 1400 },
                    { "name": "Brioche façon pain perdu", "price_cents": 1200 }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 70,
        "festif": 80,
        "culturel": 10
    },
    "description": "Véritable institution située à deux pas des Champs-Élysées, La Maison de l’Aubrac est le sanctuaire de la noda rouge. Ici, la viande provient directement de l’élevage familial en Aveyron, garantissant une traçabilité et une qualité exceptionnelles. Le cadre est élégant mais sans chichis, avec une cave impressionnante de plus de 800 références. C’est l’un des rares endroits de la capitale où l’on peut déguster un aligot filant à 4h du matin.",
    "insider_tip": "• Pour les vrais amateurs, l’Aligot est un passage obligé : il est servi avec une générosité typique du terroir.\n• Si vous sortez tard, c’est LE spot sécure pour manger chaud et bien au milieu de la nuit.\n• La viande maturée (Dry Aged) est leur grande spécialité, n’hésitez pas à demander les arrivages du moment.",
    "specials": {
        "cuisine": ["Français", "Viande", "Aubrac"],
        "drinks": ["Grands Vins", "Vieux Rhums"],
        "must_eat": "Cuisine de l’Aubrac. L'onglet de bœuf ou le traditionnel Aligot filant servi à table.",
        "expert_catchline": "Le temple de la viande aveyronnaise ouvert quand tout le monde dort."
    },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-de-l-aubrac/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-de-l-aubrac/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-de-l-aubrac/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-de-l-aubrac/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-de-l-aubrac/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/maison-de-l-aubrac/gallery_4.jpg"
    ]
  },
    "instagram_handle": "lamaisondelaubrac",
    "source": "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Viande. La Maison de l’Aubrac.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
