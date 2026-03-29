import { SurgicalPlace } from "../../../type-definition";

export const le_cornichon: SurgicalPlace = {
    id: "poi-le-cornichon",
    name: "Le Cornichon",
    slug: "le-cornichon-paris-14",
    category: "restaurant",
    subcategory: ["néo-bistrot", "français", "moderne", "michelin bib gourmand", "restaurant"],
    location: {
        address: "34 Rue Gassendi, 75014 Paris",
        arrondissement: 14,
        lat: 48.8341264,
        lng: 2.3261094,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6],
        google_id: "ChIJi994frZx5kcRKNYXb8J4sEg"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:30, 20:00–22:30 | Mardi: 12:00–14:30, 20:00–22:30 | Mercredi: 12:00–14:30, 20:00–22:30 | Jeudi: 12:00–14:30, 20:00–22:30 | Vendredi: 12:00–14:30, 20:00–22:30 | Samedi: Fermé | Dimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.lecornichon.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 2.50,
        dish_price: 34.00, // UNITÉ DE SATIÉTÉ (Menu MIDI E+P)
        menu_type: "fixed",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menus du Moment (Standard Industriel)",
                items: [
                    { name: "Menu MIDI (Entrée + Plat + Dessert)", price_cents: 3500 },
                    { name: "Menu MIDI (Entrée + Plat)", price_cents: 3400, description: "L'option déjeuner standard." },
                    { name: "Menu SOIR (Entrée + Plat + Dessert)", price_cents: 4200 },
                    { name: "Menu SOIR (Entrée + Plat)", price_cents: 4100 }
                ]
            },
            {
                category_type: "main",
                display_label: "Exemples de Plats (Selon Arrivage)",
                items: [
                    { name: "Épaule de porc de 12h, purée de panais", price_cents: 0 },
                    { name: "Cabillaud nacré, émulsion de coquillages", price_cents: 0 },
                    { name: "Poitrine de cochon croustillante", price_cents: 0 },
                    { name: "Velouté de potiron & châtaignes", price_cents: 0 },
                    { name: "Carpaccio de Saint-Jacques", price_cents: 0 },
                    { name: "Chou craquelin vanille Bourbon", price_cents: 0 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "À Partager (Apéritif)",
                items: [
                    { name: "Petites sardines à l'huile d'olive artisanales", price_cents: 1000 },
                    { name: "Socca minute croustillante à la fleur de sel", price_cents: 700 },
                    { name: "½ Fuet Catalan artisanal", price_cents: 1000 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVXUdIeFZQbkObKmgaDWO6Joy-TQNoY7jtzMedte-Vk-TPtuZ6422fx9L_bJI6t-kEMj2mzjt6PS4PhFmHhicoDiK7Ua6cAbdMWDGqEIoDGzaNa0HjwHQzRc_9Cm-w68Uz53lqMd9_hClw_H-HjgjytwSU3oD6PravcoZaCEIMhXD1gruINW_k92xZAXe9r-kWLhf9GJocW0YJ-d58o5Wuc0NTlIXJB6Pi9G8avmEl5wEekEd7Xz44ihIu5_aToYUHUCKN0Jq0Exu5z77lXNbH3GteirQmje6aAJe7kVm6YAw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfViH3dg0R49N1nDaWHWU4q8LDAwEMKsUFCQCOW9ih-bW-bDNzGK2P0SWEeIgTz7Iq6dgbMxFoGt2OutnjYHJvqfpLeg8VmK1KA5mttE1WN7wb9MhCTfAukqsTj1HG34nB3qAAmViVL_FGOCtODlJ5I8eO4NgjDcHTxI8sxL9B-2gozUxfGZN_fWg06kl402JiS_exQiOsRjls3l-2t6WwhlpCqng42EfPtVmkCkmp9-GyRMZqKxuny3NIrpj8eC_HE0cOl32N-qvcDZHYwS6DhBHl8si3CdM_8Ov_UPk9Pb_A&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVy-_yam7FphOLBfan1xmT7D9zXZjVGJr8I5bqe-D5YCCIGgxYuHYoCxzeb8_jrSI-Rh1lg2peWv-48dRU9G4RX1aH5ENj7pYw2W5oHWMmz8t9aBCb3K5DXnj1xpnnmS_AYza--weCOgQY-yHfZdInEBBLnA-9KSXv6z7KVP5IsUwZVn8DMBjEx2Lm-ugjSbzlSFUI8-pnsohf2XGMdp00OKJwVDnBuSWkbacNPCtohOyR2EUw69S7BFHG2yxbHxFzgEN4VnLQXvQvaFRNv4ObZHXsDIpe6tVc1uqGw5xY6V-_fFyHe3T7REKE8-T6c8BzPfidKghlByf0L7tcM8g9Babbm6cGC3LtSJMjJfOFCuph_R4D2cv6kzzNE2rIAoCoxhrgjEAW2_tlzWOF6Tm_RsXE8Y9kgVsS4DjIB9f1Vs2ANrRjGVTb-P2OyyEdM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Cornichon est l'un des néo-bistrots les plus accomplis du 14ème, régulièrement salué par le guide Michelin d'un Bib Gourmand. La cuisine y est franche, technique et d'une grande finesse, privilégiant les circuits ultra-courts et le respect des saisons. Le cadre est sobre et moderne, mettant toute la lumière sur l'assiette. C'est l'archétype du restaurant où l'on revient pour la justesse des cuissons et l'originalité des sauces.",
    insider_tip: "Les formules déjeuner sont d'un rapport qualité-prix exceptionnel pour ce niveau de technicité. La socca croustillante en apéritif est un petit bonheur simple à ne pas négliger.",
    expert_catchline: "Bistronomie de précision et sourcing durable : le Bib Gourmand incontournable du 14e.",
    specials: {
        cuisine: ["Néo-Bistrot", "Sourcing durable", "Bib Gourmand"],
        drinks: ["Cave à vins naturels et biodynamiques", "Domaines d'exception"],
        must_eat: "L'épaule de porc fondante et le chou croustillant vanille bourbon.",
        must_drink: "Une pépite de vin nature conseillée par l'équipe."
    }
};
