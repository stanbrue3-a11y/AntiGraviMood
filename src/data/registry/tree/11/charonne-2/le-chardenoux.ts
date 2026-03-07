import { SurgicalPlace } from '../../../type-definition';

export const le_chardenoux: SurgicalPlace = {
    id: "poi-le-chardenoux",
    name: "Le Chardenoux",
    slug: "le-chardenoux",
    category: "restaurant",
    subcategory: ["bistrot", "fruit de mer", "monument historique", "restaurant"],
    location: {
        address: "1 Rue Jules Vallès",
        arrondissement: 11,
        lat: 48.8527778,
        lng: 2.385,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJL9eeygty5kcRBJgRHblbXkw"
    },
    moods: {
        chill: 65,
        festif: 15,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–23:00\nmardi: 12:00–14:30, 19:00–23:00\nmercredi: 12:00–14:30, 19:00–23:00\njeudi: 12:00–14:30, 19:00–23:00\nvendredi: 12:00–14:30, 19:00–23:00\nsamedi: 12:00–14:30, 19:00–23:00\ndimanche: 12:00–14:30, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.restaurantlechardenoux.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 10.00,
        coffee_price: 0,
        dish_price: 28, // MANUAL: Median des Plats individuels (26, 28, 28, 28, 31, 32, 32) — bar en croûte et entrecôte exclus (partage)
        last_updated: "2026-03-06",
        menu_items: [
            {
                category: "Entrées",
                items: [
                    // VERIFIED: ParisGourmand + site officiel (2024)
                    { name: "Crispy sushi saumon aux agrumes, chipotle", price: "16.00€" },
                    { name: "Œuf moelleux, asperges blanches, noix", price: "16.00€" },
                    { name: "Beignets d'encornets, mayonnaise paprika", price: "17.00€" },
                    { name: "Crevettes croustillantes épicées, romaine", price: "19.00€" },
                    { name: "Carpaccio de dorade, citron, baies roses", price: "19.00€" },
                    { name: "Asperges vertes caramélisées au miso", price: "20.00€" },
                    { name: "Tartare de thon ponzu, avocat sésame", price: "20.00€" },
                    { name: "Galette craquante, tourteau curry Madras", price: "25.00€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    // VERIFIED: ParisGourmand (2024) — plats individuels 26-32€
                    { name: "Gnocchi et stracciatella, sauce tomate aux herbes", price: "26.00€" },
                    { name: "Lieu jaune au miso, petits pois à la française", price: "28.00€" },
                    { name: "Le cheeseburger du Chardenoux", price: "28.00€" },
                    { name: "Bavette grillée aux épices saté", price: "28.00€" },
                    { name: "Épaule d'agneau confite aux olives, citron", price: "31.00€" },
                    { name: "Les fameuses ravioles de langoustines, bisque", price: "32.00€", description: "Le plat signature de Cyril Lignac." },
                    { name: "Lobster roll, crevettes et homard, avocat", price: "32.00€" }
                ]
            },
            {
                category: "Plats à Partager",
                items: [
                    // Exclues du dish_price
                    { name: "Bar en croûte de sel, vierge de légumes (pour 2)", price: "45.00€", description: "Prix par personne." },
                    { name: "Entrecôte de race française 500g, béarnaise, frites (pour 2)", price: "30.00€", description: "Prix par personne." }
                ]
            },
            {
                category: "Desserts",
                items: [
                    // VERIFIED: ParisGourmand + site officiel (2024) — desserts 12-15€
                    { name: "Mille-feuille vanille, praliné noix de pécan", price: "12.00€" },
                    { name: "Pain perdu aux framboises, glace pistache", price: "12.00€" },
                    { name: "Biscuit coulant au chocolat, praliné noisettes", price: "12.00€" },
                    { name: "Baba au rhum, crème fouettée vanille", price: "12.00€" },
                    { name: "Tarte tatin, crème crue", price: "15.00€" },
                    { name: "Profiteroles glacées, sauce chocolat", price: "14.00€" }
                ]
            },
            {
                category: "Cocktails & Vins",
                items: [
                    { name: "Cocktails signatures", price: "15.00€" },
                    { name: "Verre de vin (à partir de)", price: "10.00€" },
                    { name: "Bouteille (à partir de)", price: "35.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV3pJ4VfyXYG5-U9xnSHROZDUYHavJXhfsUT7ONoL3eP83oPDtXJ4HBT01hnj5b0X7jvEFQDVHs_qbNwGhlH-7VvASG0IQB-eSZ3mM9wXnGlH_E5ChgVT7JgFzs1YJ0iy1m9a4z_vzY-PXo5bzKhSwCxT10lD7NxcLGDY6Zd6I6tiarrxKNGGe7nOF67Dk0s24ZItN3MykOm_fII8k2G3JNhT0oP8DV0FJbfS_CyP8PmnZga6WyycQwnLlhl65qTFwDlGSM3ia-zs9D5XC5CpxPTA3bInn7MN5oMz6aVceOIg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXNKKpJdyrUrQnhASD-grwLfctjQt-HOeWdMHzDO0OXyNIAs14b420o_ytadDN1rX3XVyV225cp-LHxgFKkagVbBi16c7060MrJnkXGHTx0J7cMs8hDu-sWggP3krI4Qa-WjcRhbz8AQvNt6O_21zBVFT-7-qK9Utx_F6KrXQ_qFmyMpASiIwAns93a1vtwXkoi213-E9QpLoRMG9Xw1gQ1_ftBI9ESV4KDiZGRuzUL5PsjLeLts9ItuNspGFXitTQUIyXF3MflqWWZ9pys2cJ_T8OW5NQAA5WkrRwZYKQY9w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXOE95iVVaZIwMKsDQwOtuDLV38S7w6xDph6IbKaqQf2w60NxLD1H9COY-HtWNA_a1XNitI8Fu6tX4-4kDD4WIzqxqn8vN0h4fjW-VWtPo9K_rYBBzl2fQVIfybwcjY_3EZf_t_RTpSlPbl7Igk5TTXRPgWGAPA3WX1ZvF8e1UiV_5cGYOdT5K3EjUHnk0DPp10uWr28WHk1L4O9R4GJ2caCaH5ExwPFwsFONhVwbpithJ-aP3cSsHIoGzIMN0S4BWzzO3h5TvSHol2mX6v-K_eMacipVAWVIaJR66q6pY9MsdbI67GIZwwkdvSfj1JymMkOIg_amIzlW62c7nYXiSQjR-GaMPEawRqilTFvaCtDl45eYNfzH8TP7IdoTNUnYOONxZR4Tn0-0IUZ0PO9kOjn0nk0fWr_bjpfQAuV3WO5Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "lechardenoux",
    verified: true,
    google_rating: 4.3,
    description: "Le Chardenoux est le bistrot rétro-chic de Cyril Lignac dans un monument historique classé du 11ème. Plafond Art Nouveau à couper le souffle, cuisine entre terre et mer, et les fameuses ravioles de langoustines qui ont fait la réputation de la maison. L'endroit parfait pour un dîner élégant sans la froideur des palaces.",
    insider_tip: "• Les ravioles de langoustines à la bisque (32€) sont le plat signature — ne les ratez pas.\n• Le décor est classé monument historique : plafond Art Nouveau et boiseries d'époque.\n• Le cheeseburger du Chardenoux (28€) est étonnamment bon dans ce cadre chic.\n• Le bar en croûte de sel pour 2 (45€/pers) est une pièce spectaculaire si vous êtes en couple.\n• Ouvert 7j/7, midi et soir — rare pour ce niveau de qualité.",
    expert_catchline: "Le bistrot Art Nouveau de Cyril Lignac : ravioles de langoustines et monument historique.",
    specials: {
        cuisine: ["Ravioles de langoustines bisque", "Lobster roll", "Bavette grillée saté", "Épaule d'agneau olives"],
        drinks: ["Cocktails signatures 15€", "Carte des vins classique", "Sélection accessible"],
        must_eat: "Les ravioles de langoustines à la bisque (32€) sont le plat signature. Le lieu jaune au miso (28€) est un best-seller. Le cheeseburger (28€) est un classique régressif. Côté entrées, la galette tourteau curry Madras (25€) est sublime.",
        must_drink: "Les cocktails maison (15€) sont travaillés. La carte des vins est courte mais bien choisie — demandez conseil."
    }
};
