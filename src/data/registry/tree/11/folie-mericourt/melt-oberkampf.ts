import { SurgicalPlace } from '../../../type-definition';

export const melt_oberkampf: SurgicalPlace = {
    id: "poi-melt-oberkampf",
    name: "Melt Oberkampf",
    slug: "melt-oberkampf",
    category: "restaurant",
    subcategory: ["barbecue", "texan", "viande", "restaurant"],
    location: {
        address: "74 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8656108,
        lng: 2.3708026,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJ3yn11Pxt5kcRjMyRkVFktAQ"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:00, 19:00–22:00\nmardi: 12:00–14:00, 19:00–22:00\nmercredi: 12:00–14:00, 19:00–22:00\njeudi: 12:00–14:00, 19:00–22:00\nvendredi: 12:00–14:00, 18:30–22:30\nsamedi: 12:00–15:00, 18:00–22:30\ndimanche: 12:00–15:00, 19:00–22:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.meltslowsmokedbarbecue.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 6.00,
        coffee_price: 0,
        dish_price: 18, // MANUAL: Brisket 200g à 20.90€, Burgers à 16.50€
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category: "Viandes Fumées (Au Poids)",
                items: [
                    // VERIFIED: Uber Eats + Site officiel (2024-2025)
                    { name: "Brisket (200g)", price: "18.90€", description: "Poitrine de bœuf Black Angus, fumée 15h, fondante." },
                    { name: "Pulled Pork (200g)", price: "18.00€", description: "Épaule de cochon effilochée." }
                ]
            },
            {
                category: "Sandwichs & Buns",
                items: [
                    { name: "Brisket Sandwich", price: "20.90€", description: "Brisket fumé 15h, bun artisanal, sauce BBQ, pickles maison." },
                    { name: "Beef Cheek Bun", price: "18.90€", description: "Joue de bœuf fumée 10h et confite 5h." },
                    { name: "Black Angus Burger", price: "16.50€", description: "Double steak Black Angus, double cheddar, fancy sauce." },
                    { name: "Pulled Pork Sandwich", price: "14.00€", description: "Sauce BBQ et coleslaw." },
                    { name: "Fried Chicken Sandwich", price: "13.00€", description: "Poulet frit croustillant." }
                ]
            },
            {
                category: "Sides",
                items: [
                    { name: "Brisket chili cheese smash", price: "10.50€" },
                    { name: "Smash potatoes", price: "5.50€" },
                    { name: "Sweet potato rôtie", price: "6.50€" },
                    { name: "Cornbread", price: "4.00€" },
                    { name: "Coleslaw maison", price: "4.50€" },
                    { name: "Mac & Cheese", price: "7.00€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Cookie géant chocolat", price: "5.00€" },
                    { name: "Pecan Pie", price: "7.00€" }
                ]
            },
            {
                category: "Boissons",
                items: [
                    { name: "Pinte de bière artisanale (Pale Ale)", price: "8.00€" },
                    { name: "Soft américain (Dr Pepper, Root Beer)", price: "4.50€" },
                    { name: "Verre de vin (à partir de)", price: "6.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV4LoNWRJIbPcUZJkKTFo9caENk7mZzxnD7VZreUPMJGX9AQCq9iOO0GrMEr9zOx9Y_O1yaAsfw_sjdD0bCQqTFFY3vyHBK9NMHCWjOKuVWhdGEQhea6DCJtg4AJ9-Cly10J069bXLIPu1m4WQiFdOVRk0EcWaUxYgXSvyMSV9m3RgPbnyybd4rQrup8PwoD54eRe05SVSXkSkAoSa_zXQuyTLdXnesV8EbDmhnDnzp27hiHnGvMsR_ytOP4FgR-8JrIGYDiWXytmHcRV102Yxe7RJzHWRKSbO0vansi1RH0g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWEsv3lPxBa4JSceLrt-tw7-IBy1kgF1i54QPN2kbI0lqmRtPlHMESrR28JZMvh_pBOsEGcYkqW8HL-fx-dco7181H3vZ_1XLbz2MzVH9nQiuiAiDc5MmVA4hjL4Hmz_1c8fbbfurKzGzhpfNoORTi53HeCdyrwpxPKH-P0J1io01zduUKfPOW0r79GXwFLUh7O5dm4CwATdum3gB-MhsPiD1Fsm9ByWvVpSFphDFaKwWiOJ_9o7HMD8HGwFtSuWHe0PCVpo3Zm4PJl72sCUiB2DdyAxdV-Dqa7U9plEyX6yB4N_vJ_8PmpKn-pFs2InOEqLrHeJVCj3z83DUv_B0N9KNhPN0Ex6velh1rEPJXAyNlto9ArVPTyKcBOYfNqOdLkyeNyITcG8S5ivgNtY5Zl3uxqICqWfysrEU96pHTK0K-7l-WeYwTjtHWBYqME&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUlduNqt51EANezr1THzwJK7i4o2n23osr9hYrOCSDH-cJoCFvWmz5sfZj87SF0nXWiDIRBhpJKBxV1_CK6bAcxjjjavgSmth5RCVBC_nuxgCl8HTUSBsIKCpCYS8JSlGYSn1J2sA0GkFRDuIoHGkWqFFxE_hOJW5Y8z-0qkVXI6aAph86qtqzkgucVpfJutzz1REL5hr3cUCLvloz8-attoOIW62fA2iAjG5qxFm5mTSwnTw1EsjqaRrS7N8Y7q1G5BY1AERMionPGVTGCqUdjrf4R5tpFsP2u7VW632Vyzg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "melt.paris",
    verified: true,
    google_rating: 4.7,
    description: "Le temple du barbecue à la texane au cœur du quartier Oberkampf. Les viandes s'y fument lentement aux bois de chêne (notamment le célèbre Brisket de Black Angus fumé 15h) avant d'être caramélisées à souhait. Le réconfort absolu pour les carnivores pointus avec d'excellents sides.",
    insider_tip: "• Attention aux sold-outs : tout est fumé sur place en continu, la quantité est finie. Arrivez tôt si vous voulez absolument goûter le Brisket du jour.\n• Le niveau de fumage est très américain, préparez-vous pour des goûts intenses.\n• Mention spéciale au chili cheese smash pour accompagner le pulled pork.",
    expert_catchline: "Du vrai BBQ texan fumé lentement au bois de chêne. Régressif, fondant et ultra-goûteux.",
    specials: {
        cuisine: ["Brisket de bœuf (fumé 15h)", "Pulled Pork Sandwich", "Joue de bœuf confite"],
        drinks: ["Bières artisanales Brooklyn", "Softs américains traditionnels (Dr Pepper)"],
        must_eat: "Le Brisket Black Angus : d'une tendreté invraisemblable, la viande cède sous le simple poids de la fourchette.",
        must_drink: "Une Pale Ale amérisante pour trancher dans le gras réconfortant du barbecue."
    }
};
