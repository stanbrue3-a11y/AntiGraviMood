import { SurgicalPlace } from '../../../type-definition';

export const l_ami_jean: SurgicalPlace = {
    id: "poi-l-ami-jean",
    name: "L'Ami Jean",
    slug: "l-ami-jean",
    category: "restaurant",
    subcategory: ["bistronomie", "brasserie", "institution"],
    location: {
        address: "27 Rue Malar",
        arrondissement: 7,
        lat: 48.8602809,
        lng: 2.3059975,
        nearest_metro: "La Tour-Maubourg",
        metro_lines: [8],
        google_id: "ChIJjVT2MNlv5kcR4QtneAsLSdU"
    },
    moods: {
        chill: 15,
        festif: 35,
        culturel: 25 // Gastronomy culture
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:00, 18:30–23:00\nmercredi: 12:00–14:00, 18:30–23:00\njeudi: 12:00–14:00, 18:30–23:00\nvendredi: 12:00–14:00, 18:30–23:00\nsamedi: 12:00–14:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://lamijean.fr/reservation/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        // NOT FOUND: Lieu de gastronomie, prix pinte non pertinent/non indiqué.
        pint_price: 0,
        // NOT FOUND: Concentré sur le vin.
        cocktail_price: 0,
        // VERIFIED: lamijean.fr cartes des vins (March 2026) -> Verre de Bourgogne aligoté
        wine_glass: 9.00,
        // NOT FOUND:
        coffee_price: 0,
        // NOT FOUND: Auto-calculated via `compile_registry.ts` using the dish items
        dish_price: 0,
        last_updated: "2026-03-05",
        menu_items: [
            {
                category: "Début de Repas",
                items: [
                    { name: "Terrine de Campagne", price: "15.00€" },
                    { name: "La Terrine du Père Jégo", price: "20.00€" },
                    { name: "Tranche De Cochonnailles", price: "18.00€" },
                    { name: "Soupe de Parmesan 'Maman Philomène'", price: "20.00€" },
                    { name: "Mousserons De Langue Doiseaux Crevette De Madagascar, Façon Risotto", price: "21.00€" },
                    { name: "Poulpe Rôti Au Beurre 1/2 Sel, Saveurs De Grèce", price: "23.00€" },
                    { name: "Saint Jacques grillées, bardes au jus", price: "24.00€" },
                    { name: "Foie gras de canard du Sud-Ouest au torchon, salade de lentilles", price: "28.00€" }
                ]
            },
            {
                category: "Les Plats de Résistance",
                items: [
                    { name: "Confit De Joue De Veau, Choux Farcis", price: "45.00€" },
                    { name: "Bar En Filet Farcis Saveurs", price: "42.00€" },
                    { name: "Poitrine de canette grillée à l'origan", price: "42.00€" },
                    { name: "Véritable cochon fermier grillé", price: "39.00€" },
                    { name: "Ris de veau rôti au beurre 1/2 sel", price: "49.00€" },
                    { name: "Noix de Saint-Jacques rôties, risotto aux truffes noires", price: "38.00€" },
                    { name: "Paleron De Bœuf Confit Grillé, Fumé A L'origan (pour deux)", price: "80.00€" },
                    { name: "Côte de bœuf de race de sélection (pour deux)", price: "110.00€" }
                ]
            },
            {
                category: "Le Sucré",
                items: [
                    { name: "Le Riz au Lait Mythique (Caramel beurre salé)", price: "10.00€" },
                    { name: "Crème brûlée", price: "10.00€" }
                ]
            },
            {
                category: "Menus",
                items: [
                    { name: "Menu Déjeuner 'Affaires' (Entrée / Plat / Dessert)", price: "35.00€" },
                    { name: "Menu Dégustation", price: "90.00€", description: "Dépend des saisons et l'humeur du chef" }
                ]
            },
            {
                category: "Les Vins au Verre (12cl)",
                items: [
                    { name: "AOC Bourgogne Aligoté Buissonier 2023", price: "9.00€" },
                    { name: "IGP Alpilles Mourvèdre 2024", price: "10.00€" },
                    { name: "AOC Rully domaine des rois mages 2022", price: "13.00€" },
                    { name: "AOC Madiran Château Montus 2019", price: "18.00€" }
                ]
            },
            {
                category: "Bouteilles - Blanc",
                items: [
                    { name: "IGP Côtes Catalane Le Vigne de Fées 2021", price: "35.00€" },
                    { name: "AOC Muscadet S-M La Boire du verre 2022", price: "40.00€" },
                    { name: "AOC Sancerre Enclos de Rouffroy 2022", price: "55.00€" },
                    { name: "AOC Chablis 1er Cru Les Fourneaux 2021", price: "85.00€" },
                    { name: "AOC Puligny Montrachet 2021", price: "140.00€" }
                ]
            },
            {
                category: "Bouteilles - Rouge",
                items: [
                    { name: "IGP Collines Rhodanniennes Syrah 2022", price: "35.00€" },
                    { name: "AOC Morgon Côte de Py 2022", price: "45.00€" },
                    { name: "AOC Côtes du Roussillon La Muntada 2011", price: "130.00€" },
                    { name: "AOC Chateauneuf du Pape 2013", price: "160.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUUra8z-g5G4SEAVfYiPIzfwvRDLPqqzC7BcrC5qSrU9Oj4CZ9O-v5wGn6RarCc5jLEqHzQf3a8rlgeLBhIVOXDsixsAenn73IZzUYW3bDWIlvAXggWVv2NOgrjd9mFb5XRL64TXxKm__uubykyzQZ_XOZsAvLN10TkEWm3fum3xKM8uiOKBUcGDDzQr5jyNWYAEwJDkU1UnP-6CrPgadiEnxTznu5c6ttlxOHiSJSUtAymJL9iIKSJSZHc97lFZg9pcj2FfD9Y9nhCkZ8_GXafdia6T5MYIhAukj792A86AOvy6zLHyItXYkFsB8-DFnz5CxWENJ0XYMmMIcxpnC42cSV1dsejnRAsAtSD1-QpFgvi4ZwPcydlbZrMYKe9EjPJVO7f3uflV68n530IfoFj24kGdFenc4DoknTKVPHI-SNXr7V96OPxl9ikDiaGI6Z5lQU-AZq5ccqtgaSQ3_67smjRg26dmXZJdGe9eHkfNeUfSiLax7OLt0BOQ1ykX-9ox5bFFJD0ESlYjEVTH_z2uYoxmNPm-Jq70Cel1paxuT1-prWEAfNjVGWxOsrynxTNLJ4l_o18qA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "l_ami_jean",
    verified: true,
    google_rating: 4.5,
    description: "Véritable institution nichée au cœur du 7ème arrondissement, L'Ami Jean est le temple de la bistronomie généreuse et sans complexe. Sous la houlette de son chef historique, le restaurant propose une cuisine de terroir ultra-savoureuse, où la qualité exceptionnelle des produits fait face à une ambiance de salle bruyante et redoutablement vivante. Portions pantagruéliques, tables rapprochées et casseroles en cuivre qui volent : c'est l'anti-gastro guindé par excellence.",
    insider_tip: "• Les tables sont très rapprochées et la salle est souvent bruyante, le lieu est conseillé aux amateurs d'ambiance de bistrot chahutée, moins pour un dîner de la Saint-Valentin en tête-à-tête.\n• La réservation doit s'anticiper au moins plusieurs semaines à l'avance, particulièrement pour le service du soir.\n• La formule déjeuner à 35€ (Entrée, Plat, Dessert) offre le meilleur moyen de découvrir la cuisine du lieu à un prix plus accessible compte tenu des tarifs à la carte élevés.",
    expert_catchline: "Haute bistronomie, portions gargantuesques et ambiance de bistrot survoltée.",
    specials: {
        cuisine: ["Riz au lait mythique", "Terrine de campagne", "Confit de Joue de veau", "Ris de veau"],
        drinks: ["Verre de Bourgogne Aligoté (9€)", "Sancerre (55€)"],
        must_eat: "Haute bistronomie. Joue de veau confite exceptionnelle côté salé. En dessert, l'incontournable et mythique Riz au Lait servi à la louche.",
        must_drink: "Superbe cave de vignerons. Sélections ciblées sur des terroirs pointus, avec de superbes verres de Bourgogne Aligoté dès 9€."
    }
};
