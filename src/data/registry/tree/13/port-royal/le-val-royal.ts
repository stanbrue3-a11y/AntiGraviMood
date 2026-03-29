import { SurgicalPlace } from '../../../../type-definition';

export const le_val_royal: SurgicalPlace = {
    "id": "poi-val-royal",
    "name": "Le Val Royal",
    "slug": "le-val-royal",
    "category": "restaurant",
    "subcategory": [
        "brasserie",
        "bar",
        "terrasse",
        "happy-hour"
    ],
    "verified": true,
    "google_rating": 4.2,
    "location": {
        "address": "93 Boulevard de Port-Royal",
        "arrondissement": 13,
        "lat": 48.838382,
        "lng": 2.341857,
        "nearest_metro": "Port-Royal",
        "metro_lines": ["RER B"],
        "google_id": "ChIJT_vAnMFx5kcRRE4Q-id-9p0"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "wifi": true,
        "terrace": true,
        "opening_hours_raw": "Lundi-Samedi: 07h00–02h00\nDimanche: 16h00–02h00",
        "main_action": {
            "type": "site",
            "url": "https://www.privateaser.com/lieu/16604-le-val-royal",
            "label": "RESERVER"
        },
        "cuisine_type": "Brasserie Traditionnelle / Couscous"
    },
    "pricing": {
        "avg_budget": 15,
        "is_free": false,
        "pint_price": 3.8,
        "cocktail_price": 5.8,
        "wine_glass": 3.5,
        "coffee_price": 2.2,
        "dish_price": 14,
        "hh_time": "15h-02h",
        "hh_pint": 3.8,
        "hh_cocktail": 5.8,
        "smart_tip": "Happy Hour record (3,80€ la pinte) jusqu'à 02h du matin. Menu étudiant à 9,50€ imbattable.",
        "menu_items": [
            {
                "category_type": "drink",
                "display_label": "Happy Hour (15h-02h)",
                "items": [
                    { "name": "Pinte de Blonde (Pression)", "price_cents": 380 },
                    { "name": "Cocktails Classiques", "price_cents": 580 },
                    { "name": "Verre de Vin", "price_cents": 350 },
                    { "name": "Ricard (2cl)", "price_cents": 430 },
                    { "name": "Softs (HH)", "price_cents": 300 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Cuisine du Val",
                "items": [
                    { "name": "Croque Monsieur Maison & Frites", "price_cents": 980 },
                    { "name": "Œuf Cocotte du Val", "price_cents": 600 },
                    { "name": "Entrecôte de Bœuf Grillée (240g)", "price_cents": 1800 },
                    { "name": "Pavé de Saumon à l'oseille", "price_cents": 1380 },
                    { "name": "Taglio Del Macellaio", "price_cents": 1500 },
                    { "name": "Menu Étudiant (Plat + Boisson)", "price_cents": 950 },
                    { "name": "Pasta Box (Petite/Moyenne/Maxi)", "price_cents": 450 }
                ]
            },
            {
                "category_type": "dessert",
                "display_label": "Omelettes & Desserts",
                "items": [
                    { "name": "Omelette Nature & Salade", "price_cents": 1200 },
                    { "name": "Omelette Fromage", "price_cents": 1400 },
                    { "name": "Tarte Tatin Maison", "price_cents": 700 },
                    { "name": "Crème Brûlée Vanille", "price_cents": 700 }
                ]
            }
        ],
        "last_updated": "2026-02-28"
    },
    "moods": {
        "chill": 80,
        "festif": 60,
        "culturel": 10
    },
    "description": "Le véritable QG de Port-Royal. Entre les étudiants de la fac de médecine et les habitués du Val-de-Grâce, cette brasserie est une institution de la convivialité brute. On y vient pour la terrasse immense et chauffée, les prix défiant toute concurrence parisienne et l'accueil toujours impeccable.",
    "insider_tip": "• Le secret du Val : leur Happy Hour court jusqu'à 2h du matin, une rareté totale sur le boulevard qui en fait le refuge ultime des fins de soirées fauchées.\n• Si vous saturez de la pinte, demandez leur couscous (servi avec générosité le vendredi) ou posez-vous dans la salle du fond avec votre laptop, c'est le spot de coworking gratuit le mieux gardé du quartier.\n• Pour les petits budgets, la Pasta Box à emporter démarre à 4,50€, imbattable pour le secteur.",
    "specials": {
        "cuisine": ["Brasserie", "Français", "Couscous"],
        "drinks": ["Pinte Blonde HH", "Vins de Propriétaires", "Cocktails Classiques"],
        "must_eat": "Le Croque Monsieur extra-beurré ou le Menu Étudiant pour les budgets serrés.",
        "expert_catchline": "Le meilleur rapport 'Heures de Soleil / Prix de la Pinte' de tout le sud parisien."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUweGRnq1YqS45Mq-6OgUmBxi6uK6Z1MiOhDdGdp0XnYHulXaY8rHSdoLFHHJcEjasvCdIqXewvSHdscxpH6uZ6lxj74humQzZ52_9NibTBmPIsKLR_UV7anuUdXR-tn30AlzMhcMv0764Sc0XPnSWXeSo7FiELnKUUh7I0jjs64TPVhtZ4X8_MqhRZWdeQXIYHnBeZjxQncjWwWz3j7KeTvBX798IM9X8fTL9DmrUhWW-HQNDKnF1YeMw2W8xTo6o7LU2wjm2iyNsdPnerd833snOwXHkuBkGkQ5a0yS9QQw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXIcXLezwUwg1AJYfMN81XmZAiyedFWhjKx3GNW_lpH-CT4J5Wqie817B5XzTGOTOkC4gfg80qQOEli2A4SAkNjflUTD28K6I8y0_vSb5ia2YHuM5Lyj95MhLjYIkkEYBEz-ZG6UptQBsirB6AwcO-8cN3xZrbvtgCDQXvXqf3bPpLctEbPiBX-yJFHBBjRDAnIdqj-iRb3TbpqqnpjZNKHYUakqMrN-TQgVmsnK2OaW9sTuOqeQlw7N3RCco-_kjRV7tfVpCRDroGXRYAiUqD7e0EIluAZU5m8u00wXeFfTw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXxyGs_ZqY0HOBBd7T6lJrZjhxTU718-atNurWszo_V6C2q5vjb-y-oTzg7Oiy_D6kiRbxri0wWKIoLUUJ34hRuPuiBJ0SwJlarNw5JZzhife5qbxtV5zl4ePyNzj1fu4tTxThuL-nMvuftKe_Qn-11gO01756xwgeqkYqro51cYGmnb2oF77c_PIL3kYoPRForvs3pbceyF4oUTZ3OPYrAoMHFaf6OvSSkFkVGvXM7SwA2lS56m7bGN4221OF1TjEsBTCS-IprpdxFdWkMpPZZKyEodx0hVXN7WYb0V2oSLA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "source": "expert_human"
};
