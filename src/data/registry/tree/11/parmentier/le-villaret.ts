import { SurgicalPlace } from '../../../type-definition';

export const le_villaret: SurgicalPlace = {
    id: "poi-le-villaret",
    name: "Le Villaret",
    slug: "le-villaret",
    category: "restaurant",
    subcategory: ["bistronomique", "terroir", "vins", "restaurant"],
    location: {
        address: "13 Rue Ternaux",
        arrondissement: 11,
        lat: 48.86431899999999,
        lng: 2.372838,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJRV4qmfxt5kcR8htPBNXSGKE"
    },
    moods: {
        chill: 70,
        festif: 5,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:30, 19:00–22:30\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 12:00–14:30, 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.levillaret-restaurant.fr/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 59,
        is_free: false,
        pint_price: 0,
        wine_glass: 10.00,
        coffee_price: 3.50,
        dish_price: 32.00, // VERIFIED 2025: Median of main courses (22€ to 52€). Lunch menu at 35€.
        last_updated: "2026-03-06",
        menu_items: [
            {
                category: "Formule Déjeuner",
                items: [
                    { name: "Menu Midi", price: "35.00€" }
                ]
            },
            {
                category: "Entrées",
                items: [
                    { name: "Queue de bœuf au foie gras", price: "18.00€" },
                    { name: "Tête de veau, sauce gribiche", price: "16.00€" },
                    { name: "Ris de veau doré", price: "18.00€" },
                    { name: "Saumon fumé maison, focaccia herbes", price: "22.00€" },
                    { name: "Pâté en croûte (Ris de veau, Porc, Foie gras)", price: "25.00€" },
                    { name: "Cervelle d'agneau et petits légumes", price: "18.00€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    { name: "Faux-filet de boeuf Blonde d'Aquitaine", price: "42.00€" },
                    { name: "Fricassée de rognons à la truffe", price: "52.00€" },
                    { name: "Épaule d'agneau de Lozère (pour 2)", price: "95.00€", description: "Pièce de partage — exclue du dish_price." }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Baba au rhum, gingembre et clémentine", price: "15.00€" },
                    { name: "Dessert du jour", price: "15.00€" }
                ]
            },
            {
                category: "Cave (1000+ références, dominante Bourgogne)",
                items: [
                    { name: "Verre de vin (à partir de)", price: "10.00€" },
                    { name: "Bouteille (à partir de)", price: "35.00€" },
                    { name: "Grands Bourgognes (armoire vitrée)", price: "120.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXgekspiDs7vs_sIVzqBkCq4Ui4p6w0LD-RWhTWEIzKD-w5nyx5YQJgd5wgO3USj7OiffQD-pQ6DQpFEiemNGn8clMIalMbyrtTjoLsJER215t0gwl7j736cPOgtzj2nENETjAD6zDfi32BYVB989wV6FUKhpcZhh37l1hug0MpNBEJTtJUwRIsA5lOtDONa0iFUCWyxmStbv8rd9Z4RaM8MRYWVpObxCKGb1pgNlZuE1IWxhxjGACGeFpmiDhNAZY0B8uYLOtzUb2rpVdPJ1Yio6thKjyYzqX_FWJkGYwy73YuCG15OKzsZZUsKLGSt_E5A2CrNQ_vwYMKJWma9yWyDUzcE4koHRNe6_S3QSgpyORCLxtbd1vpnuEqMvpo5sHCC3YKi3989rL2KnGIQDRkLDcQyrq8ziu-iUX3AsE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWcYoOY4n52WdebbaC5szQHaBFgvSm43gu14bPTLE4b1FMgmpVLmwX5y4JdClV8_1bOSqpeV0IrfN18uU0dCxcuV1G7M2nn53E_2DHmkTzOg99P1co-1ZhhucGQoSrK28mhvxCHdVzNHf0Pq-umg2stjjTYshyMAC17ijLLGh1dWy-GUk8KW0MCYbpTScugiqr1JSVxQ9-2TiX2veG1YNri8ynYWRjh46Ywteo0atqIDXOOjarhnhFFBhoj_zbhBRLZnghN7H9q0Gc6xAtaQxkyeCIPq3GztEr-gnh_3sl-GzA6ir9WeAjiA62s4bpPsNprcbfv615iU75HLzN5r40GAkXkvB0qTrnVDslb8sTfRdlFqKTS3IYe2nGZmVv4cXi_qmg2TGqrLUXGFukjPahFuCNkbzW-1PSup36u8HLL0BWSvKgOv746s2aHKpKE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXZgqkwbVyPHqLldqXrYfW_9khmmg2fi28eCvT5UwfOV4OKNmKt0IGS5ny6qbPYWFJfs6gOO6RP7g6_-q9r8a3mNooT-Bq0V3EmjPRWSYKZeub6VMWeGqJwU9t7t-IzUNc9_0mX2tUefjhp_22KuMdzOAz2hzUou3-lVvI9vBJWN6bt_xvtuHXiiprt6D-mu1BS2rVFdIwDzXZJUVKngsqCnjv-R2CuQiUjMZk6KPFj2Sm_C-4RSKJQV_liAMaacpmyzLdGDS8AIlBddPSDlog1quJZH4ddVhfkSiHtK8Cu-pDyemgmhR-lhpwd5y0BEOPPOeF2PYCRBTYSD3YAahAXjS2P96dnvq7NitvaBEiTOCrgFJemp_WLLIflhGYRcEh8KLICLESkwo4DQCyQGxWnGmQhSdugjzZvoz0-wYCh_QjciayqMmuMGIOkQRhI&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "levillaret",
    verified: true,
    google_rating: 4.4,
    description: "Le Villaret est le bistrot gastronomique d'Olivier Gaslain, niché dans une ruequiète du 11ème. La carte est courte, ultra-saisonnière, et met en avant les produits nobles : rognons truffés, boeuf Blonde d'Aquitaine, agneau de Lozère. Mais le vrai trésor, c'est la cave : plus de 1000 références avec une dominante bourguignonne magistrale, présentées dans une armoire vitrée spectaculaire.",
    insider_tip: "• La cave de 1000+ références est LE trésor caché — demandez à voir l'armoire vitrée qui contient les Bourgognes rares.\n• La fricassée de rognons à la truffe (52€) est le plat signature pour les amateurs.\n• Le menu midi à 35€ est le point d'entrée idéal pour découvrir le chef.\n• L'épaule d'agneau de Lozère (95€ pour 2) se partage et se commande à l'avance.",
    expert_catchline: "Le bistrot du terroir noble : rognons truffés, agneau de Lozère et 1000 vins en armoire vitrée.",
    specials: {
        cuisine: ["Fricassée de rognons à la truffe", "Faux-filet Blonde d'Aquitaine", "Épaule d'agneau Lozère", "Queue de boeuf au foie gras"],
        drinks: ["Cave 1000+ références", "Grands Bourgognes", "Armoire vitrée spectaculaire"],
        must_eat: "La fricassée de rognons à la truffe (52€) est iconique. Pour un budget plus doux, le faux-filet Blonde d'Aquitaine (42€) est irréprochable. Le menu midi à 35€ est un excellent deal.",
        must_drink: "La cave est le nerf de guerre : 1000+ références, dominante Bourgogne et Rhône. Les verres démarrent à 10€ mais laissez-vous guider vers une bouteille — le rapport qualité-prix est honnête."
    }
};
