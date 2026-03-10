import { SurgicalPlace } from "../../../type-definition";

export const aMiChemin: SurgicalPlace = {
    id: "poi-a-mi-chemin-75014",
    name: "A Mi-Chemin",
    slug: "a-mi-chemin-paris-14",
    category: "restaurant",
    subcategory: ["fusion", "tunisien", "cuisine-francaise", "insolite", "vin-nature"],
    location: {
        address: "31 Rue Boulard, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8330501,
        lng: 2.3285528,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: ["4", "6", "B"],
        google_id: "ChIJr3W74rZx5kcRdNJLoL4acHw"
    },
    moods: {
        chill: 90,
        festif: 20,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: Closed | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:30 PM | Saturday: 11:30 AM – 3:00 PM, 7:00 – 10:30 PM | Sunday: 11:30 AM – 3:00 PM",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "http://www.restaurant-amichemin.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        dish_price: 22, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Fusion Franco-Tunisienne",
                items: [
                    { name: "Couscous Royal aux 7 Légumes", price: "24.00€" },
                    { name: "Tajine de Veau aux Pruneaux et Amandes", price: "22.50€" },
                    { name: "Poisson du Jour à la Chouchouka", price: "21.00€" },
                    { name: "Brick à l'Oeuf Traditionnelle", price: "9.50€" },
                    { name: "Souris d'Agneau confite au Miel", price: "26.00€" },
                    { name: "Couscous Végétarien Gourmand", price: "18.50€" },
                    { name: "Sauté de Seiches à la Tunisienne", price: "21.50€" }
                ]
            },
            {
                category: "Entrées Métissées",
                items: [
                    { name: "Houmous Crémeux Maison", price: "8.50€" },
                    { name: "Kemia de l'Artisan (Sélection d'entrées)", price: "16.00€" },
                    { name: "Chorba de Tradition au Blé Vert", price: "10.00€" },
                    { name: "Salade Méchouia au Thon Frais", price: "12.00€" },
                    { name: "Merguez Artisanales Grillées", price: "11.00€" }
                ]
            },
            {
                category: "Douceurs d'Orient",
                items: [
                    { name: "Coupe de Pâtisseries fines du Maghreb", price: "9.50€" },
                    { name: "Orange à la Cannelle et Eau de Rose", price: "8.50€" },
                    { name: "Thé à la Menthe Fraîche (le pot)", price: "6.00€" },
                    { name: "Crème à la Cardamome et Pistaches", price: "9.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXB5v4Z3DWasbA0TudjIJGX_a_3mlMTzINeQ8_N7QxOBvc3uDZbeMk4kDErhSds3_7Sjb37a0T33-bP5Ju8WQVldQlzdqHYvRYStLKWfM3g_1avE8rOPEIRyxl8-f2X2Ez54vUukW5RBtXHANMXEGCmch7AHS-lMa5dVjufrxEIYXiTPJ-CGyAttfPo5ZMwGNarVarDlBn5ECi-jzrMAFPkTRQqy0dkwUrmfO7bKgFPIUj-Q7oIlWavrT-WnEma7rQZUj1Dq1u9k6Grtm9Uk-Jvv3vQw4PBSY_Fr3HSB_QpuQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXZTNnm-Gb_SQKzY87GeKm2-vgXSXvU30KjOw1ndyZzXJJodUKXh9LiBXWWFh6M_bmE683UbGnbY6lPk9QFVE19L6hB5_tkI7-KTJcGJOSpEyM9E4jkQGCy1gebSGbqFAQ7peanDvx02Wg0NQpICBhrBJeFUzbVi2hFYV1eZaWCAFB8l71uhBOjDByoIVAMMRVpHpvhFf4-AbTyv9CQh_mNTKdkH43ZFRB4JmWLsUGu98vNHlDKl_6cyhtT5o8FcuRDnsiuN7qufqI3uXrKfgPZo0NQZz8f2gOhHJxXbwfO9A&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.0,
    description: "A Mi-Chemin est une adresse unique, fruit de la rencontre entre Nordine Labiadh (tunisien) et sa femme Virginie (bretonne). Cette fusion donne naissance à une cuisine métissée d'une poésie absolue, où les épices orientales viennent s'encanailler avec les produits du marché parisien. Le décor est simple, intimiste, et le service d'une douceur extraordinaire. On y vient pour un voyage culinaire singulier où le couscous côtoie des flacons de vins naturels d'exception, créant un pont entre deux rives de la Méditerranée.",
    insider_tip: "Ne manquez pas leur tajine, d'un équilibre parfait entre le sucré et le salé. Nordine est un conteur de saveurs, laissez-le vous guider dans son univers. Les places sont limitées, la réservation est indispensable.",
    expert_catchline: "Le voyage poétique d'une fusion franco-tunisienne d'exception.",
    specials: {
        cuisine: ["Fusion", "Tunisienne et Française"],
        drinks: ["Vins Naturels Curatés", "Thé à la Menthe Signature"],
        must_eat: "Le Tajine de Veau aux Pruneaux.",
        must_drink: "Un vin blanc de Loire en accord surprenant avec le couscous."
    },
    source: "expert_human"
};
