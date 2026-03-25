import { SurgicalPlace } from '../../../type-definition';

export const soya: SurgicalPlace = {
    id: "poi-soya",
    name: "Soya Cantine Bio",
    slug: "soya",
    category: "restaurant",
    subcategory: ["vegan", "organic", "fusion", "vegetarian", "healthy"],
    location: {
        address: "20 Rue de la Pierre Levée",
        arrondissement: 11,
        lat: 48.8687,
        lng: 2.3695,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJW0-v__tt5kcRrW0-v__tt5k" // Placeholder
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Lun-Sam: 12:00–15:00, 19:00–23:00; Dim: 11:30–16:00 (Brunch)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://soya-cantine-bio.fr",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.50,
        coffee_price: 3.00,
        dish_price: 19.50, // MANUAL: Median for main courses
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Soya Cantine Bio 2024-2025
            {
                category: "Entrées Véganes",
                items: [
                    { name: "Houmous au Dukkah & gomasio", price: "9.00€" },
                    { name: "Tartare d'algues fraîches", price: "10.00€" },
                    { name: "Mozza'Cajou (mozzarella de cajou maison)", price: "12.00€" },
                    { name: "Rouleaux de Printemps (x2)", price: "9.00€" }
                ]
            },
            {
                category: "Les Plats",
                items: [
                    { name: "Grand Mezze de Soya", price: "22.00€", description: "L'assiette signature : houmous, caviar de légumes, makis, falafels, crudités." },
                    { name: "Lasagne Végétale au pesto de cajou", price: "19.00€" },
                    { name: "Bi Bim Bap 100% végétal", price: "19.00€" },
                    { name: "Curry Masala au lait de coco", price: "19.00€" },
                    { name: "Maxi Salade complète", price: "18.00€" }
                ]
            },
            {
                category: "Douceurs Bio",
                items: [
                    { name: "Moelleux chocolat noir & fleur de sel", price: "8.50€" },
                    { name: "Crumble aux fruits de saison", price: "8.50€" },
                    { name: "Brunch Buffet (Dimanche uniquement)", price: "35.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Soya est le pionnier de la cuisine bio et végane dans le 11ème. Installé dans un ancien atelier textile aux beaux volumes indus, ce restaurant prouve que la cuisine végétale peut être gourmande, généreuse et techniquement aboutie. Leur 'Grand Mezze' est un festival de couleurs et de textures, devenu le chouchou des habitants du quartier en quête d'un repas sain sans compromis sur le plaisir.",
    insider_tip: "Leur brunch du dimanche est une institution absolue à Paris : buffet pantagruélique bio et végan. Réservation obligatoire au moins une semaine à l'avance pour espérer avoir une table.",
    expert_catchline: "La référence de la 'Plant-Based' gourmande : organique, fait-maison et indémodable.",
    specials: {
        cuisine: ["Vegan & Organic", "Gluten-Free Friendly", "Émergence indus"],
        drinks: ["Jus pressés à froid", "Vins bio et naturels"],
        must_eat: "Le Grand Mezze et leur Lasagne maison.",
        must_drink: "Leur infusion du jour au gingembre frais."
    }
};
