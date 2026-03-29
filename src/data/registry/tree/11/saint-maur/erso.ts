import { SurgicalPlace } from '../../../type-definition';

export const erso: SurgicalPlace = {
    id: "poi-erso",
    name: "Erso",
    slug: "erso",
    category: "restaurant",
    subcategory: ["bistronomique", "marché", "français", "restaurant"],
    location: {
        address: "18 Rue Saint-Ambroise",
        arrondissement: 11,
        lat: 48.862393,
        lng: 2.378182,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJ5xLQUi5t5kcRm28wzY19NIQ"
    },
    moods: {
        chill: 80,
        festif: 5,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:30–14:00, 19:30–22:00\nmercredi: 12:30–14:00, 19:30–22:00\njeudi: 12:30–14:00, 19:30–22:00\nvendredi: 12:30–14:00, 19:30–22:00\nsamedi: 12:30–14:00, 19:30–22:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.erso-restaurant.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 31.50, // MANUAL: Plats du soir à la carte allant de 28€ à 35€. (28, 28, 28, 35, 35).
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner",
                items: [
                    // VERIFIED: Mises à jour 2024/2025 Lebey "Meilleur Bistrot"
                    { name: "Menu Déjeuner (E+P ou P+D)", price_cents: 2300 },
                    { name: "Menu Déjeuner Complet (E+P+D)", price_cents: 2900 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées (Soir)",
                items: [
                    { name: "Asperges blanches au barbecue", price_cents: 1500 },
                    { name: "Ravioles de Pélardon", price_cents: 1400 },
                    { name: "Millefeuille de champignon, mousseline miso", price_cents: 1500 },
                    { name: "Maigre, tarama de sardines, ponzu", price_cents: 1500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats (Soir)",
                items: [
                    // VERIFIED: Plats 28-35€
                    { name: "Barbue meunière, sabayon ail des ours", price_cents: 3500 },
                    { name: "Carré de veau, gnocchis de patate douce", price_cents: 3500 },
                    { name: "Épaule d'agneau braisée, mousseline chou-rave", price_cents: 2800 },
                    { name: "Daurade royale, fumet fumé, sabayon herbacé", price_cents: 2800 },
                    { name: "Pithiviers, palet butternut, betterave fumée", price_cents: 2800, description: "Végétarien" }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Fromages",
                items: [
                    { name: "Gianduja, pomme crue-gingembre", price_cents: 1100 },
                    { name: "Génoise chocolat, glace piment d'Espelette", price_cents: 1200 },
                    { name: "Sélection de fromages (Taka & Vermot)", price_cents: 1400 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUHoxtcJEG8eXFfP1ngE_SFRN35Wb139Z_RTd1gr2GuGbcZfh1stD1yPFwWzvi5kE3gstt_dmba-PRol_mhnoIlqkQzwI4WduXDMLlUbOogK9Iusdo0TcKl__LXUxQCUySeyqeqVXA6DFEr5dmf0TyKakkYlQn44Nz9A486uFCcBoQ8UETP7TG_wALhSETnmxE7vjdvjPeAN1zeIhGwgkj-jFmlCjk_RROnHETTyiZV4FYNl-ivyrd5sDQrgyddLmW9F8s4GKpH1uUneLb3xdPDqPp4qy_mLv3jseVCPX__9Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU-KFjNMXLPu12imCC_ZJhmUnwrYpBejcsZjVg3qEPtMKECHBybCOE83zIpVCLTM7cn8KqhE6CZ0hRrshsLd4u-uz3g_tTTHo3DUcIc4NMNMBMWqiea&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "erso.paris",
    verified: true,
    google_rating: 4.9,
    description: "Élu meilleur bistrot de Paris 2025 par le Lebey. Erso (la 'déferlante' en basque) a tout emporté sur son passage. En cuisine, le jeune chef Yann Placet dégaine une bistronomie incisive d'une précision diabolique sur les cuissons et les condiments. En salle, Marine Bert orchestre un service tout en velours pour accompagner de pures assiettes de terroir moderne.",
    insider_tip: "• Le déjeuner est un hold-up gastronomique spectaculaire : 29€ les 3 services pour un tel niveau de cuisine, on trouve difficilement mieux à Paris.\n• La réservation le soir (où la carte est plus onéreuse et poussée) doit se faire plusieurs semaines à l'avance depuis leur prix Lebey.\n• Il y a toujours un focus puissant sur des fromages affinés de compétition de chez Taka & Vermot.",
    expert_catchline: "Élu Meilleur Bistrot 2025 (Lebey). Un triomphe bistronomique total, le menu déjeuner est une aubaine.",
    specials: {
        cuisine: ["Barbue meunière au sabayon", "Millefeuille de champignon (miso)", "Carré de veau parfait", "Fromages Taka & Vermot"],
        drinks: ["Carte resserrée sur des pépites nature", "Biodynamie"],
        must_eat: "Suivez aveuglément leurs propositions sur les poissons nobles (barbue, daurade, maigre) traités avec une main de maître sur les fumets et sabayons.",
        must_drink: "Faites 100% confiance à la directrice de salle Marine pour les accords ; elle pioche chez les meilleurs faiseurs de jus vivants."
    }
};
