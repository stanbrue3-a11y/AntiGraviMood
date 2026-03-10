import { SurgicalPlace } from "../../../type-definition";

export const cornichon: SurgicalPlace = {
    id: "poi-cornichon-75014",
    name: "Le Cornichon",
    slug: "le-cornichon-paris-14",
    category: "restaurant",
    subcategory: ["bistronomie", "moderne", "marche", "terrasse", "gastronomique"],
    location: {
        address: "34 Rue Gassendi, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8341243,
        lng: 2.326115,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: ["4", "6", "B"],
        google_id: "ChIJi994frZx5kcRKNYXb8J4sEg"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Tuesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Saturday: Closed | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "http://www.lecornichon.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 26, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "La Carte du Marché",
                items: [
                    { name: "Cochon de Lait Croustillant, Polenta", price: "28.00€" },
                    { name: "Dos de Lieu Jaune, Beurre Blanc au Yuzu", price: "26.00€" },
                    { name: "Onglet de Boeuf Maturé, Pommes Grenailles", price: "29.00€" },
                    { name: "Poitrine de Veau Confite 12h", price: "27.00€" },
                    { name: "Risotto d'Épeautre aux Légumes Oubliés", price: "24.00€" },
                    { name: "Tartare de Canard au Couteau", price: "25.00€" },
                    { name: "Noix de Saint-Jacques Snackées (en saison)", price: "32.00€" }
                ]
            },
            {
                category: "Entrées Créatives",
                items: [
                    { name: "Oeuf Parfait, Crème de Topinambour", price: "12.00€" },
                    { name: "Maquereau Mariné, Betteraves en textures", price: "14.00€" },
                    { name: "Terrine de Campagne au Foie Gras", price: "13.00€" },
                    { name: "Velouté de Panais aux Éclats de Châtaigne", price: "11.00€" },
                    { name: "Carpaccio de Saint-Jacques aux Agrumes", price: "16.00€" }
                ]
            },
            {
                category: "Desserts Signature",
                items: [
                    { name: "Le Cornichon au Chocolat (Dessert créatif)", price: "11.00€" },
                    { name: "Tartelette aux Poires et Cardamome", price: "10.00€" },
                    { name: "Riz au Lait Onctueux, Caramel Beurre Salé", price: "9.50€" },
                    { name: "Sablé Breton aux Fruits Rouges", price: "10.50€" },
                    { name: "Sélection de Fromages Artisans", price: "12.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXDYH8hzgnskYCfLli7-qZcCtXe9JMgAtndCWx22UFBMUWCtZK7FTxRG1FWP3mjaCpH1h45ndXXNyccHWwsGvChDFou0N6DQzN1XH4nxBQ7UF1lhdzvzee_Xgqbd0A7MiqvUsHg06-IX35gzlRw8-lQzYCSv5hVrxlg7mSumFJ67hQ9x0vWUhaGfjLlIa4R-frdnjXHmbHiZDUY0PCXF-EOSdKna8vPTzpzVTkwfMSWBdUXDvnOkQZVt3s2gnSqPq-N6f3HnlpvhaXhueffAvkeaFOK6uuB7CfeJwEkC0L9KQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUB96rp04m346HMjWQGUr6FEZw1hK35p0na_pJFF1P_wqrZ7UW1DBQBZySJUsGR-vXeT_YGUQVMNGQFshShjzCndCjHJ3o5GTHFHymooSk0oObw7bTGa_KSF1yBlV93mTdIou4F2gI0c0BXCUwJwoRHnKDHCpB5Cg7pxYgzfzcKTzevXnuXwzSdaKvFZxsHMVt5E8jY0ExBMaufETcbCXyEAOUS1QerzoaA7r1bOsckDNqmdqNgEtLjG9nnRVNz8Y-v4rghZ68Cyn3v2jQDIRRFxBaj8ygy1p5D9om8tc2dSQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Cornichon est la table bistronomique de référence de la rue Gassendi. Sous ses airs de bistrot de quartier décontracté, il cache une cuisine d'une redoutable précision. Le chef y travaille des produits bruts avec une inventivité qui surprend sans jamais dérouter. L'accueil y est chaleureux et la sélection de vins est pensée pour sublimer chaque assiette. C'est l'endroit parfait pour un déjeuner d'affaires décontracté ou un dîner entre passionnés de gastronomie moderne et accessible.",
    insider_tip: "Ne vous fiez pas au nom, c'est bien de la grande cuisine. Le menu déjeuner est l'un des meilleurs rapports qualité-prix du 14ème. Goutez absolument leur dessert signature au chocolat, une merveille d'équilibre.",
    expert_catchline: "La bistronomie moderne et précise de la rue Gassendi.",
    specials: {
        cuisine: ["Bistronomie moderne", "Cuisine Créative"],
        drinks: ["Vins d'Auteurs", "Cidres Artisanaux"],
        must_eat: "Le Cochon de Lait croustillant.",
        must_drink: "Un vin blanc minéral de la Vallée de la Loire."
    },
    source: "expert_human"
};
