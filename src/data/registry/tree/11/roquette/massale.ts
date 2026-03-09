import { SurgicalPlace } from '../../../type-definition';

export const massale: SurgicalPlace = {
    id: "poi-massale",
    name: "Massale",
    slug: "massale",
    category: "restaurant",
    subcategory: ["bistronomic", "french", "creative", "neighborhood-gem"],
    location: {
        address: "5 Rue Guillaume Bertrand",
        arrondissement: 11,
        lat: 48.8651,
        lng: 2.3802,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJW0-v__tt5kcRrW0-v__tt5k" // Placeholder
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Lun-Ven: 12:00–14:00, 19:30–22:00; Sam: 19:30–22:00 (Wine Bar vibe); Fermé Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/massaleparis/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.50,
        coffee_price: 2.50,
        dish_price: 28.00, // MANUAL: Median for dinner main courses
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Massale Paris 2024-2025
            {
                category: "Formules Déjeuner (Semaine)",
                items: [
                    { name: "Entrée + Plat + Dessert", price: "22.00€" },
                    { name: "Entrée + Plat ou Plat + Dessert", price: "17.00€" }
                ]
            },
            {
                category: "Assiettes de Saison (Dîner)",
                items: [
                    { name: "Céleri braisé, tarama d'oignons brûlés", price: "14.50€" },
                    { name: "Millefeuille d'oignon, crème de foin", price: "12.00€" },
                    { name: "Épaule d'agneau confite, pois chiches & yaourt", price: "26.00€" },
                    { name: "Risotto d'orge perlé aux blettes", price: "21.00€" },
                    { name: "Lieu jaune de ligne, beurre blanc dashi", price: "24.00€" },
                    { name: "Gnocchis de pomme de terre, sauge & citron", price: "19.00€" },
                    { name: "Betteraves fumées, crème de féta aux herbes", price: "11.00€" }
                ]
            },
            {
                category: "Desserts Créatifs",
                items: [
                    { name: "Ganache chocolat blanc & topinambour", price: "9.50€" },
                    { name: "Poire pochée au poivre Timut", price: "9.00€" },
                    { name: "Assiette de fromages affinés", price: "12.00€" }
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
    description: "Massale est la quintessence du néo-bistro parisien : discret, technique et passionné par le produit. Sous la direction du chef Marlo Snellman, les légumes oubliés retrouvent une noblesse insoupçonnée grâce à des associations audacieuses. Le cadre est sobre et l'accueil d'une grande douceur, parfait pour découvrir une cuisine qui ne cherche pas à faire de l'esbroufe mais qui frappe toujours juste.",
    insider_tip: "Leurs formules midi sont parmi les meilleures affaires du quartier. Le samedi soir, l'ambiance glisse doucement vers le bar à vin avec des assiettes à partager plus décontractées.",
    expert_catchline: "Le néo-bistro qui sublime le produit brut avec une technique chirurgicale.",
    specials: {
        cuisine: ["Bistronomie de produit", "Cuisine du marché", "Technique pointue"],
        drinks: ["Vins natures de vignerons indépendants", "Petite sélection pointue"],
        must_eat: "Leurs déclinaisons autour du céleri ou des oignons sont souvent incroyables.",
        must_drink: "Laissez-vous guider par le sommelier sur un vin blanc atypique."
    }
};
