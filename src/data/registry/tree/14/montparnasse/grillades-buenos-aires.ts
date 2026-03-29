import { SurgicalPlace } from "../../../type-definition";

export const grilladesBuenosAires: SurgicalPlace = {
    id: "poi-grillades-buenos-aires",
    name: "Les Grillades de Buenos Aires",
    slug: "les-grillades-de-buenos-aires",
    category: "restaurant",
    subcategory: ["argentin", "steakhouse", "viande", "parrillada"],
    location: {
        address: "54 Rue du Montparnasse",
        arrondissement: 14,
        lat: 48.8420982,
        lng: 2.325433,
        nearest_metro: "Montparnasse-Bienvenüe",
        metro_lines: [4, 6, 12, 13],
        google_id: "ChIJIVDDEcxx5kcRNdC36XGfaBA"
    },
    moods: {
        chill: 30,
        festif: 20,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:00, 19:30–23:00 | Mardi: 12:00–14:00, 19:30–23:00 | Mercredi: 12:00–14:00, 19:30–23:00 | Jeudi: 12:00–14:00, 19:30–23:00 | Vendredi: 12:00–14:00, 19:30–23:00 | Samedi: 12:00–14:00, 19:30–23:00 | Dimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.lesgrilladesdebuenosaires.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.00,
        dish_price: 23.50, // MÉDIAN des plats de terroir
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de Terroir",
                items: [
                    { name: "Bife de Lomo (Filet de bœuf, 250g)", price_cents: 3800, description: "Le summum de la tendreté argentine." },
                    { name: "Ojo de Bife (Noix d'entrecôte, 300g)", price_cents: 3200 },
                    { name: "Bife de Cuadril (Cœur de rumsteck)", price_cents: 2600 },
                    { name: "Bife de Chorizo (Faux-filet, 300g)", price_cents: 2900 },
                    { name: "Asado de Tira (Plat de côtes)", price_cents: 2400 },
                    { name: "Entraña (Hampe savoureuse)", price_cents: 2500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Entradas (Tradition)",
                items: [
                    { name: "Empanadas de carne (les 2)", price_cents: 1200, description: "Faites maison selon la recette familiale." },
                    { name: "Mollejas de Ternera (Ris de veau grillés)", price_cents: 1800 },
                    { name: "Chorizo Argentino", price_cents: 1000 },
                    { name: "Morcilla (Boudin noir)", price_cents: 950 },
                    { name: "Provoleta au grill", price_cents: 1100 }
                ]
            },
            {
                category_type: "other",
                display_label: "Guarniciones & Postres",
                items: [
                    { name: "Papas Fritas a la provenzal (ail & persil)", price_cents: 600 },
                    { name: "Ensalada mixta", price_cents: 700 },
                    { name: "Panqueque con Dulce de Leche", price_cents: 950 },
                    { name: "Don Pedro (Glace vanille, whisky, noix)", price_cents: 1100 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXPNSRBKC-Nhj9z_rSp0zwTjRrfqNmv9DPXYrubYxtsBtETYC4pxy1YyYZkgcYcdO4dbE3znPLYPdunOmmoWZdicCY4LdLWhjO6qEeKycpKYizBLIs9O-rnpCrw46BOY3irmBARK1AZMtfUr4i8a3irxXV9runrKWbW2yG1L0b5fMTsTGWRJSQa-xA3NiQ-ft-5zddwMg0-SAgMAxS2lxnGeEq5Cmu0MfqxoDRHclSfxK0gqhGpGSBojpSJ-cDd8voVtm_wot1-7gjivQs0XVsB79ZcQFdv6PBbcZu26xyCkw44gQTNLdNbV6zfL_PibNJrbn08PXk4BFLs0bz8XvZqhbnxh98uMvpbn1EINDsMIAy-X0yAXgmktesIoQWnU3uTsswGwbw-5-dhv3WIWeqUnyOlAbtYPmYIL3m1gVGU6mck&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUUruodHVbYnvTn27Nn1wvkScj5hRcYUPPmtFd7GitdWEqGwnOigx_rFjnk_uxb6ZrmKdYMDkoUTXCG2u5fC1rw4M0O0dKVq9Tq59Kun-BQPwMsdlZpiGW-xD1hhmVR9JZPEc6tv3oCF-kedXXDD5Ad119V6zygmBbbaeWhn8tHSDZ1zgZ7QtnIbfkXg_32QreQVDVAGDbiYeMi8cFtpUJcfXVm3TYNVbUzA71bEbMEPhvDdK4Q17-Kkcet2sP5DSUO8Ouj3BgbNJyC9poyrsKr1Hxt1XeOyePrwkVD_EJ0Tw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUilYxMDWgzunMvEZXwFhFTt15hZVLTRoeYu6sn-87YzanvHPix05g6kwlv3_uM4RE7m58C-fqK5oGaCoqVepaCof8iMyYB1kIOlJ3FTMKElT_a7IEG5FmPU0lYOy9qjjPCpNysmarS2SZOO2mrT81WRnZ5C79kBu1T2aJsfFjOLcdqA0S6bYX2RGFrOzT7lM35GAp5ahcZOJ5czwwUHW7I18an-AbX0OJVujfOCX-Rvvx-WoMcisOJVK3HfDGbQTgYFkjHhqgGak8JGAF_dEBt_hIrhIkOh4S1anZHenVOTvMbCOQrKdHWR7VMZGmdhH5vgpYHcz8KcHGg0PKbwqFbYBZINJK4eoUoLkCPGysNbZJFjCE6GRKO0qE5SocKsn4VzZ70ypwcmyvqnxcOVfEcYNVfFXm48OQMe6WExm0t21CA7rtc3ktuPHc4Qw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.6,
    description: "Une véritable 'estancia' argentine au cœur de Montparnasse. Depuis plus de 20 ans, cet établissement fait figure de référence pour les amoureux de viande d'exception, exclusivement importée de la Pampa argentine. Dans un décor rustique et chaleureux peuplé de guitares et de souvenirs, les parrilladas sont orchestrées avec une précision chirurgicale, portées par les notes de tango qui flottent dans l'air.",
    insider_tip: "Le 'Bife de Lomo' est d'une tendreté légendaire, mais ne passez pas à côté des empanadas maison en entrée et demandez leur chimichurri spécial.",
    expert_catchline: "L'ambassade de la viande argentine à Paris.",
    specials: {
        cuisine: ["Steakhouse Argentin", "Parrillada"],
        drinks: ["Malbec Argentin", "Vins de Mendoza"],
        must_eat: "L'Asado de Tira et les Papas Fritas a la provenzal.",
        must_drink: "Un Malbec puissant pour accompagner la viande rouge."
    }
};
