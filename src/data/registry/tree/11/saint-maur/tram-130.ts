import { SurgicalPlace } from '../../../type-definition';

export const tram130: SurgicalPlace = {
    id: "poi-tram-130",
    name: "Trâm 130",
    slug: "tram-130",
    category: "restaurant",
    subcategory: ["bistronomic", "franco-vietnamese", "fusion", "creative"],
    location: {
        address: "130 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8680202,
        lng: 2.3754187,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "0x47e66d0077a82023:0x8b5ef22cd6445b6f"
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Lun-Ven: 17:00–23:00; Fermé Sam-Dim",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/tram_130/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 26.00, // MANUAL: Median of main courses (32, 35, 20, 26, 22)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Trâm 130 Paris 2024-2025
            {
                category: "Pour Commencer (Appetizers)",
                items: [
                    { name: "Croquettes Aubergine, Miso & Comté", price: "10.00€" },
                    { name: "Ailes de poulet laquées nuoc-mâm & citron vert", price: "12.00€" },
                    { name: "Tomate entière marinée au bouillon dashi", price: "14.00€" },
                    { name: "Tartare de boeuf façon vietnamienne sur os à moëlle", price: "23.00€" }
                ]
            },
            {
                category: "Plats de Résistance",
                items: [
                    { name: "Risotto d'orzo crémeux, tourteau & bisque", price: "32.00€" },
                    { name: "Ris de veau laqués façon Char Siu", price: "35.00€" },
                    { name: "Crêpe Banh Xèo revisitée (Végé)", price: "20.00€", description: "Oignons, champignons, salade de fenouil, fromage frais." },
                    { name: "Pâtes fraîches, ragù de joue de boeuf à la citronnelle", price: "26.00€" },
                    { name: "Curry jaune aux légumes de saison", price: "22.00€" }
                ]
            },
            {
                category: "Douceurs",
                items: [
                    { name: "Basque Cheesecake signature", price: "8.00€" },
                    { name: "Crème brûlée au Matcha", price: "8.00€" },
                    { name: "Gâteau à la poire, fève tonka & praliné", price: "9.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.8,
    description: "Trâm 130 est l'une des ouvertures les plus excitantes du 11ème. La cheffe Priscilla Trâm y déploie une identité forte : une base classique française percutée par des saveurs vietnamiennes explosives. Ici, le jus de viande côtoie la citronnelle, et l'os à moëlle se pare d'herbes fraîches de Saïgon. Le tout dans un cadre de bistrot moderne, brut et vibrant.",
    insider_tip: "Ne ratez pas leur Tartare sur os à moëlle, c'est le plat qui a fait leur réputation sur les réseaux et il est aussi bon qu'il est beau. Réservation indispensable car le lieu est pris d'assaut.",
    expert_catchline: "L'éclatante fusion Franco-Viet de Priscilla Trâm : technique précise et saveurs percutantes.",
    specials: {
        cuisine: ["Bistronomie Franco-Viet", "Produits de saison", "Accords créatifs"],
        drinks: ["Sélection courte et efficace de vins natures", "Bière artisanale"],
        must_eat: "Le Tartare de boeuf vietnamien sur os à moëlle et le Basque Cheesecake.",
        must_drink: "Un vin blanc de la Loire pour équilibrer les épices."
    }
};
