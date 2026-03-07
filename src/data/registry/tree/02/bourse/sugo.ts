import { SurgicalPlace } from '../../../type-definition';

export const sugo: SurgicalPlace = {
    id: "poi-sugo",
    name: "Sugo",
    slug: "sugo",
    category: "restaurant",
    subcategory: ["italien", "pâtes"],
    location: {
        address: "16 Rue Saint-Augustin",
        arrondissement: 2,
        lat: 48.868939,
        lng: 2.3361951,
        nearest_metro: "Quatre-Septembre",
        metro_lines: [3],
        google_id: "ChIJ-WZa4A9v5kcRPgA2aczQBnQ"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 10
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–22:30\nmardi: 12:00–14:30, 19:00–22:30\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 12:00–15:00, 19:00–22:30\ndimanche: 12:00–15:00, 19:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.sugoparis.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        cocktail_price: 0,
        wine_glass: 0,
        coffee_price: 2.50,
        // NOT FOUND: Auto-calculated via `compile_registry.ts`
        dish_price: 0,
        last_updated: "2026-03-05",
        menu_items: [
            {
                category: "Antipasti",
                items: [
                    { name: "Carciofini (Artichauts des Pouilles, olives Taggiasche)", price: "10.00€" },
                    { name: "Mozzarella di Bufala (Tomates séchées des Pouilles)", price: "10.00€" },
                    { name: "Polpette (Boulettes de veau, sauce Sugo, parmesan)", price: "12.00€" },
                    { name: "Salade Betterave Ricotta (Vinaigrette orange)", price: "9.00€" },
                    { name: "Velouté Courge (Butternut, mascarpone, noisettes)", price: "8.00€" }
                ]
            },
            {
                category: "Pâtes Fraîches (Permanent - Prix midi / soir)",
                items: [
                    { name: "Sugo (Sauce tomate sarde cuite 4h, ail)", price: "12.00€" },
                    { name: "Sugo (Prix Soir)", price: "15.00€" },
                    { name: "Cacio e Pepe (Pecorino Romano, poivre torréfié)", price: "15.00€" },
                    { name: "Cacio e Pepe (Prix Soir)", price: "17.00€" },
                    { name: "Pesto (Basilic, amandes de Sicile, Pecorino)", price: "15.00€" },
                    { name: "Pesto (Prix Soir)", price: "17.00€" },
                    { name: "Amatriciana (Tomate sarde, guanciale, Pecorino)", price: "15.00€" },
                    { name: "Amatriciana (Prix Soir)", price: "17.00€" },
                    { name: "Ragù (Effiloché de boeuf, tomate sarde, Gremolada)", price: "15.00€" },
                    { name: "Ragù (Prix Soir)", price: "18.00€" }
                ]
            },
            {
                category: "Le Semainier (Spécialités - Prix Soir)",
                items: [
                    { name: "Lundi : Puttanesca (Tomates, olives, câpres, anchois)", price: "18.00€" },
                    { name: "Mardi : Carbonara (Pecorino, oeuf, Guanciale)", price: "18.00€" },
                    { name: "Mercredi : Burro Salvia Limone (Beurre, sauge, citron)", price: "18.00€" },
                    { name: "Jeudi : Lasagna (Ragu de boeuf Angus, béchamel)", price: "18.00€" },
                    { name: "Vendredi : Salsiccia (Aubergines et saucisse artisanale)", price: "18.00€" },
                    { name: "Samedi : Ruggine (Pesto, sauce Sugo, olives Ligure)", price: "18.00€" },
                    { name: "Dimanche : Carciofi (Crème d'artichaut, guanciale)", price: "18.00€" }
                ]
            },
            {
                category: "Dolci (Desserts)",
                items: [
                    { name: "Tiramisu (Mascarpone crémeux, café, chocolat)", price: "7.00€" },
                    { name: "Torta Caprese (Fondant chocolat Valrhona, amandes)", price: "7.00€" },
                    { name: "Panna Cotta (Fleur d'oranger, praliné pistache)", price: "6.00€" }
                ]
            },
            {
                category: "Boissons (Sans alcool et Cafés)",
                items: [
                    { name: "Café express-allongé", price: "2.50€" },
                    { name: "Mole Cola (Cola italien)", price: "3.00€" },
                    { name: "San Pellegrino", price: "3.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUbDRe4k5Z2YoZwk7IlpqT9zy09WnZOeQ1hCb1tEvqUFZ7vzLnd235dckBBEvBhIb25of0yXwL__Fplq8UdyUG1lsWoIXQZ1yVAVR-bAbz5-bbAJoR30B4iKKxPlg7FgHD5Yr_pbr1IlDuXHbiNtxYiLM2UYhqaMPYNC1_kbXGOMVplS4GnvqvK05SAhdmD27_iOxxvmblBK--mMaMntO7Zis27_TNjspBG9GuXvkT9lIEVhylOZmQn-RmlgZvmGaOIkZZXSI6wr8JsfiTULQfCxbBfBXksXm5QRvXLnXDvmTM1Dhs&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "sugoparis",
    verified: true,
    google_rating: 4.8,
    description: "Niché dans la rue Saint-Augustin, Sugo s'impose comme une adresse incontournable pour les puristes de la pasta fresca. Le lieu mise sur un approvisionnement pointu en direct d'Italie (semoule de blé dur bio, tomates sardes) pour délivrer des assiettes d'une redoutable efficacité. L'ambiance y est conviviale, vivante et laisse la part belle au produit brut sans aucune fioriture.",
    insider_tip: "• Pensez à vérifier le \"Semainier\" avant de venir : à chaque jour sa recette spéciale (Puttanesca le lundi, Carbonara le mardi...).\n• Victime de son succès, la queue s'allonge très vite : ne soyez pas surpris de patienter ou d'être invité à revenir une heure plus tard sans réservation.\n• Attention, la politique tarifaire est variable avec une différence d'environ +2€ ou +3€ sur les plats le soir par rapport au déjeuner.",
    expert_catchline: "Pâtes fraîches artisanales et sourcing italien obsessionnel dans ce repaire très prisé du quartier.",
    specials: {
        cuisine: ["Polpette de veau", "Pâtes fraîches Cacio e Pepe", "Carbonara du Mardi", "Tiramisu crémeux"],
        drinks: ["Mole Cola"],
        must_eat: "Temple absolu des pâtes fraîches. Le semainier rythme la carte : attaquez la redoutable Carbonara du mardi ou le Ragù mijoté 4h. Les délicates Polpettes de veau sont parfaites en entrée.",
        must_drink: "Restauration très orientée food, sans bar à cocktails spécifique. On y trouve néanmoins des classiques italiens comme le surprenant Mole Cola originel."
    }
};
