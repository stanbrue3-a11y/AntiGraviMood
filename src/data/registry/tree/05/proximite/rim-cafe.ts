import { SurgicalPlace } from '../../../../type-definition';

export const rim_cafe: SurgicalPlace = {
    "id": "poi-rim-cafe",
    "name": "Rim Café",
    "slug": "rim-cafe",
    "category": "restaurant",
    "subcategory": [
        "italien",
        "pizza",
        "pates",
        "saint-michel",
        "terrasse",
        "fait-maison"
    ],
    "verified": true,
    "google_rating": 4.2,
    "location": {
        "address": "38 Rue Saint-Séverin, 75005 Paris",
        "arrondissement": 5,
        "lat": 48.85273,
        "lng": 2.3444385,
        "nearest_metro": "Saint-Michel Notre-Dame",
        "metro_lines": [4, "B", "C"],
        "google_id": "ChIJaYHwmOBx5kcRsvo00gioEEU"
    },
    "practical": {
        "reservation_policy": "resa_conseillee",
        "accessibility": true,
        "terrace": true,
        "opening_hours_raw": "Lundi: 11:00–00:00\nMardi: 11:00–00:00\nMercredi: 11:00–00:00\nJeudi: 11:00–00:00\nVendredi: 11:00–00:00\nSamedi: 11:00–00:00\nDimanche: 11:00–00:00",
        "main_action": {
            "type": "book",
            "url": "https://www.thefork.fr/restaurant/rim-cafe-r528773",
            "label": "RESERVER"
        },
        },
    "pricing": {
        "avg_budget": 25,
        "is_free": false,
        "dish_price": 16,
        "pint_price": 7,
        "wine_glass": 6,
        "coffee_price": 2.5,
        "soft_price": 5,
        "smart_tip": "Le Happy Hour de 16h à 20h est l’un des meilleurs plans du quartier Saint-Michel pour un spritz en terrasse.",
        "menu_items": [
            {
                "category_type": "starter",
                "display_label": "Antipasti & Bruschettas",
                "items": [
                    { "name": "Mix de Bruschetta", "price_cents": 1200 },
                    { "name": "Burrata crémeuse et tomates d’Antan", "price_cents": 1400 },
                    { "name": "Planche de charcuterie italienne", "price_cents": 1800 }
                ]
            },
            {
                "category_type": "main",
                "display_label": "Pizzas au Feu de Bois",
                "items": [
                    { "name": "Margherita", "price_cents": 1300 },
                    { "name": "Regina", "price_cents": 1500 },
                    { "name": "Tartufo (Crème de truffe)", "price_cents": 1900 },
                    { "name": "Rim Café (Spécialité)", "price_cents": 1700 }
                ]
            },
            {
                "category_type": "main",
                "display_label": "Pasta & Risotto",
                "items": [
                    { "name": "Gnocchi alla crema di pistacchi", "price_cents": 1700 },
                    { "name": "Rigatoni à la truffe", "price_cents": 2100 },
                    { "name": "Lasagne bolognaise maison", "price_cents": 1600 },
                    { "name": "Risotto aux Gambas", "price_cents": 2200 }
                ]
            }
        ],
        "last_updated": "2026-03-01"
    },
    "moods": {
        "chill": 80,
        "festif": 60,
        "culturel": 30
    },
    "description": "Niché dans la pittoresque rue Saint-Séverin, le Rim Café est une escale italienne authentique loin des pièges à touristes classiques du quartier. Sa spécialité ? Les pizzas cuites dans un imposant four au feu de bois visible dès l’entrée. L’accueil y est chaleureux, souvent orchestré par une équipe passionnée qui n’hésite pas à recommander les gnocchis à la pistache, devenus cultes parmi les habitués. La petite terrasse permet de profiter de l'animation du Quartier Latin tout en savourant une cuisine généreuse faite maison.",
    "insider_tip": "• Ne passez pas à côté des Gnocchis à la crème de pistache, c’est la pépite absolue de la carte.\n• Le Happy Hour quotidien rend les cocktails très abordables pour le secteur.\n• Si la terrasse est pleine, l'intérieur avec vue sur le four à pizza est tout aussi agréable.",
    "specials": {
        "cuisine": ["Italien", "Pizza", "Pasta"],
        "drinks": ["Vins Italiens", "Spritz"],
        "must_eat": "Pizza au feu de bois & Gnocchis Pistache.",
        "expert_catchline": "L’Italie authentique au feu de bois en plein Saint-Michel."
    },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rim-cafe/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rim-cafe/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rim-cafe/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rim-cafe/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rim-cafe/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rim-cafe/gallery_4.jpg"
    ]
  },
    "source": "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Italien. Rim Café.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
