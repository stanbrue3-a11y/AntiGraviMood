import { SurgicalPlace } from '../../../type-definition';

export const oobatz: SurgicalPlace = {
    id: "poi-oobatz",
    name: "Oobatz",
    slug: "oobatz",
    category: "restaurant",
    subcategory: ["pizzeria", "pâte fermentée", "vins naturels", "artisanal"],
    location: {
        address: "4bis Av. Jean Aicard",
        arrondissement: 11,
        lat: 48.8653,
        lng: 2.3789,
        nearest_metro: "Ménilmontant",
        metro_lines: [2],
        google_id: "ChIJr9u4KKtt5kcRNwiGaAm9JYw"
    },
    moods: {
        chill: 70,
        festif: 60,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mer-Dim: 18:00–22:00 (Fermé Lun-Mar)",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.oobatz.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 9, // Estimé pour 50cl si 6€ le 33cl
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 19, // MANUAL: Median des pizzas (16€-26€)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Oobatz 2025 Standard (Naturally Leavened Pizzeria)
            {
                category: "Pizzas Artisanales (Pâte Fermentée)",
                items: [
                    { name: "Marguerita Oobatz", price: "16.00€", description: "Sauce tomate maison, mozzarella, basilic frais." },
                    { name: "Diavola Fermentée", price: "20.00€", description: "Salami piquant, piment, origan." },
                    { name: "Verdure d'Été / Saison", price: "18.00€", description: "Légumes de saison rôtis, herbes fraîches." },
                    { name: "Pizza Salsiccia", price: "22.00€", description: "Saucisse italienne, fenouil, pecorino." },
                    { name: "Pizza Polpette", price: "23.00€", description: "Boulettes de viande maison, tomate, parmesan." },
                    { name: "Pizza Blanche Asparagus", price: "24.00€", description: "Asperges, agrumes, crème de ricotta." },
                    { name: "Pizza Carte Blanche (Chef Choice)", price: "26.00€", description: "L'inspiration du moment de Dan Pearson." }
                ]
            },
            {
                category: "Sides & Entrées",
                items: [
                    { name: "Side Salad Oobatz", price: "8.00€", description: "Vinaigrette maison, herbes amères." },
                    { name: "Assiette de légumes rôtis", price: "12.00€" }
                ]
            },
            {
                category: "Desserts Signatures",
                items: [
                    { name: "Pizzookie (Warm Cookie & Pizza Dough)", price: "10.00€", description: "Dough hybride, pépites de chocolat, servi chaud." },
                    { name: "Pana Cotta Saison", price: "8.00€" },
                    { name: "Glace Maison (Boule)", price: "6.00€" }
                ]
            },
            {
                category: "Vins Natures & Boissons",
                items: [
                    { name: "Verre de Vin Nature sélectionné", price: "7.00€" },
                    { name: "Bouteille de Vin (à partir de)", price: "36.00€" },
                    { name: "Draft Beer (33cl)", price: "6.00€" },
                    { name: "Soft Artisanal", price: "12.00€", description: "Limonades et kéfirs premium." }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXgNCYXObq9JZA9K4Rf-qNVbVUiJo9t44c5l5vVBxepuERzKFV-idFgmOYTjofRA-1l0KrvyoijBUdvQXEK2RzlL_vapvvGCj9ZLVX9i4sA-KWfNslEqBlzGce_2CbdUhgkD71cyYoUjTwg-doBK2MrgMviziW_9nq7cnKpyncI2iQFPZG9Uhcx6odc4ariNhN5gBl3shzisbK7t5xuTBHitrcRICT2IFZdpAe2xFXRyIlEPVtp812Cm_bUi47Z351BfN3m2e8kLi0guj9lHc-1UGLy-kMXTxJsorA7uS-_LT44jnPC8vhOfJ7UcvqPCT9xWO-ZTegxPodmURGQTS0p6j8OoXXwBRNE23c_o_LmllRmi7PXixz20cGG6a7cURG9wKixbklEmG7IFdsbwxSYA-0WtiH5OosvUyVuuSoD-vCkhv-rJ6PkCrnH3MdO5hdiJT1m2QJ_UjSQjeYkaFv1ZvIlze_As_HBJoktgLaKOMBKVNr2jGzqXol1SIahScAVZ24q7dKbg3djOEyPmhCvqRQYccsKVFPnb94J09LXb1RG9J5go0d4X9jpqQqzzpLbewv92aIKKzXCViwd-Po3LOiVfg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.5,
    description: "La pizzeria culte de Dan Pearson, ex-chef du Rigmarole. Ici, la pizza est un art de la fermentation : pâte légère, croustillante et garnitures sourcées à l'extrême. Une expérience brute et vibrante.",
    insider_tip: "Ne passez pas à côté du Pizzookie, le dessert signature hybride pizza-cookie servi chaud. Prévoyez de réserver pile 14 jours à l'avance à 10h, les places s'arrachent.",
    expert_catchline: "L'art de la pizza fermentée par un virtuose du Rigmarole.",
    specials: {
        cuisine: ["Pizzas à longue fermentation", "Garnitures ultra-saisonnières", "Pizzookie"],
        drinks: ["Natural Wines", "Craft Softs"],
        must_eat: "Le Pizzookie chaud en fin de repas.",
        must_drink: "Une limonade artisanale ou une cuvée sauvage en blanc."
    }
};
