import { SurgicalPlace } from "../../../type-definition";

export const petitsPlats: SurgicalPlace = {
    id: "poi-petits-plats-75014",
    name: "Les Petits Plats",
    slug: "les-petits-plats-paris-14",
    category: "restaurant",
    subcategory: ["bistrot", "terroir", "traditionnel", "chaleureux", "fait-maison"],
    location: {
        address: "39 Rue des Plantes, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8286334,
        lng: 2.3222125,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJOZXq-7Jx5kcRr7k3qLJAwXM"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: 8:00 AM – 12:00 AM | Wednesday: 8:00 AM – 12:00 AM | Thursday: 8:00 AM – 12:00 AM | Friday: 8:00 AM – 12:00 AM | Saturday: 8:00 AM – 12:00 AM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://lespetitsplatsrestaurant.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 38,
        is_free: false,
        dish_price: 22, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Les Plats de Saison",
                items: [
                    { name: "Cuisse de Canard Confite, Pommes Sautées", price: "21.00€" },
                    { name: "Saucisse de Morteau et ses Lentilles", price: "18.50€" },
                    { name: "Filet de Bar à la Plancha, Purée Maison", price: "23.00€" },
                    { name: "Bavette d'Aloyau, Sauce Poivre", price: "22.50€" },
                    { name: "Risotto Crémeux aux Champignons", price: "19.00€" },
                    { name: "Parmentier de Canard Confit", price: "20.50€" },
                    { name: "Plat du Jour (à l'ardoise)", price: "17.00€" }
                ]
            },
            {
                category: "Entrées du Terroir",
                items: [
                    { name: "Terrine de Campagne Maison", price: "9.50€" },
                    { name: "Oeuf Cocotte au Foie Gras", price: "12.00€" },
                    { name: "Velouté de Potiron et Éclats de Noisettes", price: "8.50€" },
                    { name: "Salade de Lentilles et Gésiers Confits", price: "11.00€" },
                    { name: "Poireaux Vinaigrette Tradition", price: "8.00€" }
                ]
            },
            {
                category: "Desserts Gourmands",
                items: [
                    { name: "Mousse au Chocolat à discrétion", price: "8.50€" },
                    { name: "Crème Brûlée à la Vanille de Bourbon", price: "9.00€" },
                    { name: "Tatin Maison et sa Boule de Glace", price: "10.00€" },
                    { name: "Ile Flottante sur Crème Anglaise", price: "7.50€" },
                    { name: "Sélection de Fromages Affinés", price: "11.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWdZXFtCimy1M-zdd5lQigNreDwIFRYZVO_owoxrPjSIUq6HZS0XD6BG4GMzj7ZaryNx_u78_NRQ8bfGulqUiXKqQfdQTsWVF6J_XiGyvtiYdWFSHG6p7uauq0E-V1R5EH307G6Y-cTV_4iJzIIuCgXUq51KL8ysetJ2U_xuU6jtUTk6s7yYbujp6f5ooNAzobdIJtviSEAA85p_hCh_Ne2v5a530NcU_sVeWU23OhU45dZX1zA6ICZhe8KrnE543FSWbVm3bucbdy2HTToYf2-ZihfJNczxTB9F5hWl48&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUOxxy5WuVVDOIwWw3WAGPhgNJ87mSM7FPhn_hw3kEzAkVQ5ywTp0wj9J6E7ZSJFBDGHCupYScfxmspWY0ty-jeOfftwGzNhhzzmHgeLB_OFWolDI_iapyS2cRS7Jye8DTWra4lkiGkRekQtPg7fDlt10TsxfXvAbm_gKOYU6Obpos7oOCpXD16uwkO4YKnYSn66V_Pr6IbJYebr5ILNWuU95z_fC9xJ_XrZd6zSS1tfkGu3YJtlX4UThDjqMY5B8H-nA8OPf_tUStQc917xp6UBGUB5KA8moSgBdxHFEE&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.7,
    description: "Les Petits Plats, situé rue des Plantes, est l'archétype du bistrot parisien chaleureux et sincère. Ici, pas de chichis, mais une cuisine généreuse faite de produits frais et de saison. Le cadre est authentique, avec ses boiseries et ses ardoises affichant les suggestions du jour. On s'y sent tout de suite chez soi, accueilli par une équipe aux petits soins. C'est l'adresse parfaite pour un déjeuner réconfortant ou un dîner convivial entre amis autour de classiques français parfaitement exécutés.",
    insider_tip: "La mousse au chocolat est un incontournable absolu, servie comme à la maison. Le midi, la formule du jour est d'un excellent rapport qualité-prix, très prisée des habitants du quartier.",
    expert_catchline: "La sincérité du bistrot parisien dans chaque assiette.",
    specials: {
        cuisine: ["Bistrot Traditionnel", "Cuisine Ménagère"],
        drinks: ["Vins au Verre", "Bière de Brasserie"],
        must_eat: "Le Confit de Canard et les Frites Maison.",
        must_drink: "Un quart de vin rouge de pays."
    },
    source: "expert_human"
};
