import { SurgicalPlace } from '../../../../type-definition';

export const le_pure_cafe: SurgicalPlace = {
    "id": "poi-067",
    "name": "Le Pure Café",
    "slug": "le-pure-cafe",
    "category": "restaurant",
    "subcategory": [
        "bistro-traditionnel",
        "cinema",
        "terrasse",
        "brunch"
    ],
    "verified": true,
    "google_rating": 4.5,
    "location": {
        "address": "14 Rue Jean Macé",
        "arrondissement": 11,
        "lat": 48.853289,
        "lng": 2.383442,
        "nearest_metro": "Charonne",
        "metro_lines": [9],
        "google_id": "ChIJN-v--jM--jM--jM--jM--jM--jM"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "terrace": true,
        "opening_hours_raw": "Lundi-Vendredi: 07:30–02:00, Samedi-Dimanche: 08:30–02:00",
        "main_action": {
            "type": "site",
            "url": "http://www.lepurecafe.com/",
            "label": "SITE WEB"
        }
    },
    "pricing": {
        "avg_budget": 25,
        "is_free": false,
        "pint_price": 8.50,
        "wine_glass": 6.00,
        "coffee_price": 2.50,
        "dish_price": 15.00,
        "last_updated": "2024-03-08",
        "menu_items": [
            {
                "category_type": "other",
                "display_label": "L’Ardoise du Déjeuner",
                "items": [
                    { "name": "Plat du Jour", "price_cents": 1150 },
                    { "name": "Pure Burger & Frites maison", "price_cents": 1500 },
                    { "name": "Fish N’ Chips, sauce tartare", "price_cents": 1500 },
                    { "name": "Suprême de Canette des Dombes rôti", "price_cents": 1500 },
                    { "name": "Ceviche de Truite, vinaigrette mangue", "price_cents": 1500 },
                    { "name": "Pavé de Colin en papillote", "price_cents": 1500 },
                    { "name": "Assiette Végétarienne de saison", "price_cents": 1350 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Carte du Soir (Bistro Classics)",
                "items": [
                    { "name": "Steak Frites, sauce au poivre", "price_cents": 1900 },
                    { "name": "Tartare de Bœuf préparé", "price_cents": 1800 },
                    { "name": "Pavé de Saumon à l’unilatérale", "price_cents": 2000 },
                    { "name": "Salade César au poulet croustillant", "price_cents": 1650 }
                ]
            },
            {
                "category_type": "starter",
                "display_label": "Entrées & Desserts",
                "items": [
                    { "name": "Œuf dur Mayonnaise", "price_cents": 580 },
                    { "name": "Rillettes de canard maison", "price_cents": 800 },
                    { "name": "Mousse au Chocolat noir", "price_cents": 750 },
                    { "name": "Crème Brûlée vanille", "price_cents": 800 },
                    { "name": "Tarte Tatin & glace vanille", "price_cents": 850 }
                ]
            }
        ]
    },
    "moods": {
        "chill": 85,
        "festif": 30,
        "culturel": 70
    },
    "description": "Véritable décor de cinéma (immortalisé dans ’Before Sunset’), Le Pure Café est l’archétype du beau bistrot d’angle parisien. Avec son bar circulaire en bois, ses boiseries patinées et ses larges miroirs, il dégage une atmosphère intemporelle et chaleureuse. C’est l'endroit idéal pour un café matinal avec un livre, un déjeuner de quartier efficace ou un verre entre amis dans une ambiance feutrée et authentique.",
    "insider_tip": "La table dans l’angle vitré est la plus prisée pour observer la vie de la rue Jean Macé. C'est exactement là que se déroule la scène culte du film.",
    "expert_catchline": "Le bistrot cinématographique et intemporel de Charonne.",
    "specials": {
        "cuisine": ["French Bistro", "Burgers", "Salades"],
        "drinks": ["Vins de propriété", "Pinte classique", "Café de comptoir"],
        "must_eat": "Le Pure Burger & sa montagne de frites maison.",
        "must_drink": "Un verre de vin rouge de la Loire au bar."
    },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pure-cafe/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pure-cafe/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pure-cafe/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pure-cafe/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pure-cafe/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pure-cafe/gallery_4.jpg"
    ]
  },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Bistro-traditionnel. Le Pure Café.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
