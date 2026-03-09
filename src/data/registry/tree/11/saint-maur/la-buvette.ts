import { SurgicalPlace } from '../../../type-definition';

export const la_buvette: SurgicalPlace = {
    id: "poi-la-buvette",
    name: "La Buvette",
    slug: "la-buvette",
    category: "restaurant",
    subcategory: ["cave à manger", "bar à vins", "petites assiettes", "restaurant"],
    location: {
        address: "67 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8628972,
        lng: 2.3792058,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJjYcMh_Bt5kcROjCZiaJiKDQ"
    },
    moods: {
        chill: 80,
        festif: 15,
        culturel: 5
    },
    practical: {
        opening_hours_raw: "lundi: 17:00–22:00\nmardi: 17:00–22:00\nmercredi: 17:00–22:00\njeudi: 17:00–22:00\nvendredi: 17:00–22:00\nsamedi: 17:00–22:00\ndimanche: 17:00–22:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.labuvette.paris/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 14.00, // MANUAL: Median des grignotis (3€ - 18€)
        menu_type: 'standard',
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Grignotis (3€ - 8€)",
                items: [
                    { name: "Olives de Kalamata", price: "4.50€" },
                    { name: "Amandes fumées", price: "4.00€" },
                    { name: "Beurre bordier & pain au levain", price: "6.00€" },
                    { name: "Pickled Eggs (Œufs marinés)", price: "4.50€" },
                    { name: "Sardines à l'huile", price: "8.00€" }
                ]
            },
            {
                category: "Assiettes Signature (10€ - 18€)",
                items: [
                    // VERIFIED: Source 2024-2025 menus
                    { name: "Haricots blancs, huile d'olive & zeste d'orange", price: "12.00€", description: "Le plat culte de Camille." },
                    { name: "Burrata des Pouilles, huile de basilic", price: "16.00€" },
                    { name: "Terrine de foies de volaille maison", price: "15.00€" },
                    { name: "Andouille au lard de Vire", price: "14.00€" },
                    { name: "Jambon blanc à l'os", price: "13.00€" },
                    { name: "Bresaola & roquette", price: "16.00€" },
                    { name: "Rillettes d'oie", price: "14.00€" },
                    { name: "Tomme aux orties", price: "12.00€" },
                    { name: "Comté 24 mois affiné", price: "14.00€" },
                    { name: "Chèvre frais & miel", price: "11.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWRosHKBDxZm5kTNi_PiD_C-3woY6O3BOA8DEVPzNvbZLJb1SZMUqGH5xTD0HUXTFaSe3mUjGHmw_5LcRe0qNMduXlggUQeknwiTuGu0XtWeNgGLPlnSjwRg02xwnuxyRE1-6r6GRH6SLWGT35PZ7iixdsWJ5FTIy7Pxqg_iwuOEx9icXAw3z5x6moGoTxZPJNi7ieftyQm9xj7JUMEEpP8ho9ZkW9PiwpsE0ycOORs7pfLRaofM2pUmgnm9qpCUdHvj5So6VLwoh6ZRY-z1U5ZmTsi2BIAbSiFlQ5U5FzNM2TJBSNzNSat39oEgRHmlkDeh1ol3W_qG2j15CVPfV32Y31NBObO5jFTdimlBdKbe1YmqxmiaRQBwn3uKwArDEkMTTY26IbB4_FrZZZgGD-XblNACiZkT_36CslCYus6-x3A&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUD7QK-q4SkJQ8ST8C5wJ2O-6PMZG6coAU-AuZLBqGUnT-Gt0OWZmctHmZugqdxXIrgmRBN6JdpZX2H_trPyZ82v5hs56wQ93_nFTY-Sr21hdjb16C1RYRRBSS6yNlvxXtBMJXgU0wgKAIQJIoVZXihP2HOYHNIGz4igJREZ4ZjMbU-zAo6E-ZLKIPM1nWhEUREcRnBoOBTqu5BIt0VpeYL2I0D3wGO1KvL1gkwwSPT1lM1C_NVMCwewHUT9j8PlnD-VISUp1ZIFGJaQKz93kGsTfkgE9wbQG8dRD23cx2CyA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUtiMungu8FXt7yeYTkYf-9cKxJ_Qrz2N_x3L57eCzZq8SXtHRzsXA4-tc-vNFIwr1vEye4a1VR7AEnCjgR8QFdfeKc7uvpxNuIQ6Sn0ZQPFO6CMA1Fpb5cLBlIh4NmRnRHVj2bvPlR73Zkb0Z6JyYxqjiKtUR6NKVS-Cue8v8ddJFeYTlfyP78B3uPo1ayDDVkhDXhuQ2K0n1zfKWreNGaume0DQRJ3Ox5h4atu9tNdtEgw6eHpVPbkGdsV_v6gsINGmYucZde3hvpRX5-NnnZnJnU7g9lEX9Y75H-gTrZosJDpSpZ1Ym_qXWOpVwHYh3i3XCdWJ5oz5Vo5t556eyQIejIkcl5gUFE7lE3o7bbxLLtSSJwBU1-VyTSvNDCpNAeUd4YdvBBrE5QPaPH1lZsmQ1-C4A_CGxTsT549ArCd6rN&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "labuvetteparis",
    verified: true,
    google_rating: 4.4,
    description: "Une des caves à manger les plus iconiques et puristes de Paris. Camille Fourmont a créé dans ce mouchoir de poche le spot idéal pour écluser des vins natures impeccables accompagnés de grignotis faussement simples mais foudroyants : les fameux haricots blancs zestés à l'orange sont un classique de la gastronomie de comptoir parisienne.",
    insider_tip: "• C'est tout petit et ils ne prennent aucune réservation : venez dès l'ouverture à 17h ou préparez-vous à boire debout le temps qu'une table se libère.\n• Ferme tôt (22h00) tous les soirs, c'est l'endroit parfait pour un apéro puissant ou un before.\n• Ouvert 7 jours sur 7, ce qui est très rare pour cette qualité.",
    expert_catchline: "La cave à manger puriste absolue : vins natures impeccables et haricots blancs à l'orange d'anthologie.",
    specials: {
        cuisine: ["Haricots blancs zeste d'orange", "Andouille au lard", "Tomme aux orties"],
        drinks: ["100% Vins natures", "Cidres brut"],
        must_eat: "Vous êtes obligé de commander leur petite assiette star : les gros haricots blancs à l'huile d'olive et zeste d'orange (12€). L'incarnation du 'less is more'.",
        must_drink: "Allez pointer le doigt directement sur une belle quille nature posée sur l'étagère et laissez Camille ou son équipe vous la raconter."
    }
};
