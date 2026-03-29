import { SurgicalPlace } from '../../../type-definition';

export const acolyte_insolite: SurgicalPlace = {
    id: "poi-acolyte-insolite",
    name: "L'Acolyte de l'Insolite",
    slug: "acolyte-insolite",
    category: "restaurant",
    subcategory: ["fusion", "tapas", "atypique", "restaurant"],
    location: {
        address: "49 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8641936,
        lng: 2.3716608,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJoZuX1fxt5kcRKC-vvTCiJE8"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:00, 19:00–22:30\nmardi: 12:00–14:00, 19:00–22:30\nmercredi: 12:00–14:00, 19:00–22:30\njeudi: 12:00–14:00, 19:00–22:30\nvendredi: 12:00–14:00, 19:00–22:30\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/lacolytedelinsolite/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 18, // Plats entre 14 et 22€, médiane vers 18€
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Les Assiettes Insolites (Entrées & Tapas)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Assiette de frites maison", price_cents: 300 },
                    { name: "Assiette de Melon à l'italienne", price_cents: 500 },
                    { name: "Antipasti de légumes confits", price_cents: 800 },
                    { name: "Foie Gras Maison", price_cents: 1400 },
                    { name: "Takoyaki fusion (spécialité japonaise poulpe)", price_cents: 1200 },
                    { name: "Asperges au Parmesan", price_cents: 1000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Les Salades & Sandwichs Garni",
                items: [
                    { name: "Le Provençal (Sandwich travaillé)", price_cents: 900 },
                    { name: "Salade Crétoise", price_cents: 1200 },
                    { name: "Salade Igp", price_cents: 1300 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Les Plats (Hybrides)",
                items: [
                    { name: "Pizza Fusion", price_cents: 1400 },
                    { name: "Udon au poulet, touches japonaises", price_cents: 1500 },
                    { name: "Tartare de Bœuf préparé minute, frites", price_cents: 1600 },
                    { name: "Risotto onctueux au Poisson blanc", price_cents: 1800 },
                    { name: "Magret de Canard, jus réduit", price_cents: 1900 },
                    { name: "Saint-Jacques snackées", price_cents: 2200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Tiramisu maison", price_cents: 700 },
                    { name: "Fondant au chocolat", price_cents: 700 },
                    { name: "Pâtisserie du jour", price_cents: 800 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUrVVuqi5foXBi5R8PoWltQFmMx1HZeVT3mOkUFtHyDzIphh5gFzetXSIGy4me1tWAXiePFIPSgcgQCY-4p51rZR1_yIsDcJG-vpjGrfd9ZJnWSjBQM0w3bM2dSMwmbxIDObCC4TBRE4DEtpTB6rKmre_dPPKwMxUpdjwYc9c1Lx9sH3yDSTC4vrxFnFrJ5bt2EKu_tYIDS-2lRqQz-UiIL5oTvChAl7BSanAE26fLKi4KkfojhwwtmsJYrijDsQ67wvs6IVArMKXL-hlZLHsrE_EMGbKnTr7fnSrPMGIibVeneKkES7LFBY7CeMuh9SLKxNb3McB-8rPjhPhqDI5Ih6X8_hyWhS1vm6ps1LXRdTkqfkz0wG3SX8tdp3sQ3nKNKdJDZUaQxG_rf3z9C5UZCVTspfNdv26OcBaXl5XY&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXEXtb7kSmk-xPLSUU8yc9FQeqM4o9aoFsxoAtBD9tuPdkTeRcI3pHfjEv-_iwyUuGU9i5pUI6AbDI_XBR8-awyV1wZqPVMKY0284AB6BvmiiP5s-WDLMZuhGk6BMzyRO_SaSdKTx1Q1M5sV7yafTm55g6XbGibMi7yRu8iqpznEV1WNv546IXakAdahK1DYhEOchkMlM-i8fd8HqfVztfxWjFZKiJMQgnDS9ehFqWs_TkGRdlRa9tjV1Ae7G5IxiZ6GABJc53JhRsZk-BziI6NZP8o82tV6v_iSOT6xQKR_QaucW9pD-br-Svp35DGoaxA2ySC211HH6yZA198lNGYWCU9iCv347M8JSl4CAsLLCleklu5kN-w3cmtsfWog0KYkMlk1Pegc4dKYVxjaZWMpayPuTmLgNYQyCWuitbK2Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWEElpPHPSrSCxat61qhSubg_QgnZ0wyO7_rHNk5sIincB_4p91sFbh3f6kagBz9gzDJ3job7UMapAmXi6Mgg3XV0MHdTA2u1Qziaw2UxdTugjj0wgPxHeNnPlzO8WYInBmmWkJbgm7ZoZHit6sZwcYUDMzHQC-Fw_2qsMSRqpTWaFR6Plk5KU7VQXF9M3Sn80JqNShZL4cCT5oLZMUILEOD63nezVEND-ovXW2CIplZYKju9xXB9P9Ci_Q5bNiFonIBCqxH__QxY2K55p6S2M9Ci8Athylr-H1VptXZQgHnByYfMSnkwHGLgjs8QsWS-o2OSQ2ZdLSBlL3gKLDbxIl7lTReZcT1VPvGO3kpGt1HIY9cks5VndWc_dtePuW91_qtIGgwFjgbgs5bqc-bxKcGzcGpYU45DABpmtUpczbI2on&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "lacolytedelinsolite",
    verified: true,
    google_rating: 4.8,
    description: "Une adresse curieuse et discrète (quasi introuvable sans la cercher) frôlant l'insaisissable, avec un rating stupéfiant de 4.8. La cuisine s'amuse d'une hybridité totale : des grands classiques bistrot de viandes croisant par surprise des Takoyaki ou des Udons japonais.",
    insider_tip: "• Les tarifs sont incroyablement doux pour le quartier (13€ la belle salade IGP, 9€ le sandwich ultra soigné).\n• L'endroit est fermé TOUT le week-end, prévoyez vos visites en semaine.\n• Demandez au chef s'il peut adapter le plat ou improviser, il s'amuse particulièrement avec les contraintes \"végétariennes\" ou hors carte.",
    expert_catchline: "Une table secrète aux influences surprenantes (franco-japonaises) qui truste un rating exceptionnel.",
    specials: {
        cuisine: ["Takoyaki", "Udon de poulet revisité", "Magret de canard"],
        drinks: ["Vins natures sans chichi"],
        must_eat: "Laissez-vous tenter par le grand écart : un Tartare de Bœuf parfaitement assaisonné suivi par des Takoyaki japonais !",
        must_drink: "Un petit verre de rouge naturel simple et gouleyant pour accompagner cette folie culinaire."
    }
};
