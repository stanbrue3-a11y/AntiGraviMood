import { SurgicalPlace } from '../../../type-definition';

export const brasserie_rosie: SurgicalPlace = {
    id: "poi-brasserie-rosie",
    name: "Brasserie Rosie",
    slug: "brasserie-rosie",
    category: "restaurant",
    subcategory: ["brasserie", "traditionnel", "restaurant"],
    location: {
        address: "53 Rue du Faubourg Saint-Antoine",
        arrondissement: 11,
        lat: 48.8521656,
        lng: 2.3731937,
        nearest_metro: "Bastille",
        metro_lines: [1, 5, 8],
        google_id: "ChIJpxiIIGdz5kcRw6DgrF-erAA"
    },
    moods: {
        chill: 50,
        festif: 40,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Tous les jours: 12:00–14:30, 19:00–22:45",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://brasseriesalamode.com/brasserie-rosie",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 6.50,
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 18, // MANUAL: Moyenne des plats principaux (16-20€), axé sur les vrais plats.
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Les Formules (Le Midi en Semaine)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Formule Déjeuner (E/P ou P/D)", price_cents: 1950, description: "En semaine uniquement, de 11h30 à 17h." },
                    { name: "Le Menu Brasserie Complet (E/P/D)", price_cents: 3950 }
                ]
            },
            {
                category_type: "other",
                display_label: "L'Écailler & Fruits de Mer",
                items: [
                    { name: "Happy Oysters (3 huîtres + 1 verre blanc)", price_cents: 1300 },
                    { name: "Crevettes (environ 100g)", price_cents: 1000 },
                    { name: "Bigorneaux (environ 300g)", price_cents: 1250 },
                    { name: "Gambas Label Rouge (par 6)", price_cents: 1450 },
                    { name: "1/2 Homard Froid, Mayonnaise", price_cents: 2250 },
                    { name: "Homard Entier, Mayonnaise maison", price_cents: 4500 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Hors-d'œuvre & Entrées",
                items: [
                    { name: "Œuf mayonnaise", price_cents: 450 },
                    { name: "Poireaux vinaigrette", price_cents: 650 },
                    { name: "Soupe à l'oignon gratinée à la parisienne", price_cents: 850 },
                    { name: "6 escargots de Bourgogne Label Rouge", price_cents: 950 },
                    { name: "Terrine des amis par Maison Brosset", price_cents: 1100 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Principaux Fait-Maison",
                items: [
                    { name: "Saucisse purée au jus", price_cents: 1550 },
                    { name: "Ravioles du Royans Label Rouge, crème Parmesan", price_cents: 1600 },
                    { name: "Tartare de bœuf au couteau, frites", price_cents: 1700 },
                    { name: "Suprême de volaille", price_cents: 1800 },
                    { name: "Cordon bleu de Rosalie, coquillettes", price_cents: 1800 },
                    { name: "Coquillettes à la truffe et jambon blanc", price_cents: 1850, description: "Le best-seller absolu et ultra-réconfortant de la maison." },
                    { name: "Pavé de saumon écossais rôti, fondue de poireaux", price_cents: 1900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts (L'artisanat pur)",
                items: [
                    { name: "Crème brûlée à la vanille Bourbon", price_cents: 950 },
                    { name: "Île flottante", price_cents: 950 },
                    { name: "Le fameux Paris-Brest", price_cents: 1150 },
                    { name: "Soufflé au chocolat", price_cents: 1250 }
                ]
            },
            {
                category_type: "other",
                display_label: "Coupes Glacées",
                items: [
                    { name: "Coupes 2 boules", price_cents: 850 },
                    { name: "Coupes 3 boules", price_cents: 1050 },
                    { name: "Café ou Chocolat Liégeois", price_cents: 1250 },
                    { name: "Coupe Nocciolata", price_cents: 1250 },
                    { name: "Dame Blanche", price_cents: 1250 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUvNAXEO_VpHe8y7kMEuKoFLTBdaNDeIC84jE-qjpZjI_X-1UrW478Q5vT6Qsdbma2uNGdxBwxKb_XGTxc8RV5jDyzLRhXSS_oXedRBuxg5exMsQBvR0_ukb694pmDgJm9hLaoPIXiR604FH_TKWw9cNdIBPWOcROVB1YUeoWoUSs_Atf244vo1EbsHTB0sJ8pv3FWqHCltsgWdy68NQa5ruuKNk7D5wtaLSwiQo-QwgZBxo1vNUXJBm0WEt8ftt9s05y6sozaIh1TDKpWt5RnzxGd1WrjxJeADCiMTK9igZw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXIaXQ0ik95okz48pzc1tcfiPWHPkGP-kB92d-zr-HmXVVtlMbw2nEtuUQrQOIdEvY16-k2u3MVXgTZ2EMgoOiymFQLs96j7qsWIEWeZhrmusTggVJ38xAd-yY5b2QgESYSjxzMQLbBT4DLD3qW-bNrunAU2FdC4bOtXuLlIfqxmdZRQzMPr4vHBYnbCJg5ARSA60JtjIhZLwGJoR1WcdyJFg1egoQy_iGRdVR6brLcHQt80uSQYhiciAS-4hgxRgpn7-AW0Bjr9-S2AIqVmlZfWDhtLALC1jKK1VOzacCGd61GCpR4R4rqLtJfQN4ezk7vbNmM-aBf75i-GU0o70XKvo19fLFS_TlX1NCbxt0iZ6km5Le5E0MCMY0PbMzFQjmxHmuaZcFYTFAE6fsJ7dCtCQ5LgY-ekrANUKfq0549PhtNDpHhE3nOweCldg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUdWpzOzfIuVZDOD0mfWUfkdvxiXs9hxAxD1djDwg4HFkfcR5VlsMmnXVVdSAUBoHMAF3R2GA8u0EifmK_0oP3iH96knLOM9xLd4Ow5XFk6Kd-KB0sxEhSPSbK5hYVdkw77CH5D7-0-rTFLxx5mAWaEpjqC9IhZl5sPbkgqKnkY2PtVo396YeOAJrBkKj4HVTz--zW46o6xsOsZBYPP0F1uYJbWc0x0QYLx_Vmw2aYNKwg7xuR2oDaJLq1_ky9dTNUHVnInWr68GC3saPjTpR3jC8OfWgW6XAIUkkcTEooa5Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "brasserierosie",
    verified: true,
    google_rating: 4.7,
    description: "Une brasserie furieusement moderne qui ressuscite l'âme des grands bouillons parisiens avec un décor hyper travaillé (moquettes fleuries, banquettes velours rose) et un 100% fait main à prix justes.",
    insider_tip: "• Les saloirs/boutiques privatisables au premier étage valent le coup d'œil.\n• Pour une brasserie aussi stylisée, le rapport qualité/prix (notamment la formule à 19,50€ le midi) est imbattable dans ce quartier.\n• Le Paris-Brest y est stratosphérique, il justifie presque le déplacement.",
    expert_catchline: "La néo-brasserie parfaite : déco dingue, 100% fait-maison, et coquillettes à la truffe en étendard.",
    specials: {
        cuisine: ["Coquillettes truffe/jambon", "Paris-Brest de folie"],
        drinks: ["Pinte de blonde rafraîchissante"],
        must_eat: "Vous n'aurez d'autre choix que de sombrer devant les réjouissantes coquillettes à la crème de truffes (servies dans leur poêlon en cuivre).",
        must_drink: "Restez sur de bons basiques traditionnels comme une pinte de bière artisanale."
    }
};
