import { SurgicalPlace } from '../../../type-definition';

export const automne: SurgicalPlace = {
    id: "poi-automne",
    name: "Automne",
    slug: "automne",
    category: "restaurant",
    subcategory: ["étoilé", "gastronomique", "japonais", "vins natures", "restaurant"],
    location: {
        address: "11 Rue Richard Lenoir",
        arrondissement: 11,
        lat: 48.8547574,
        lng: 2.3821557,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJdznawgly5kcRxXTXI8Zkpvk"
    },
    moods: {
        chill: 60,
        festif: 5,
        culturel: 35
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 12:30–13:30, 19:30–21:30\njeudi: 12:00–13:30, 19:30–21:30\nvendredi: 12:00–13:30, 19:30–21:30\nsamedi: 12:00–13:00, 19:30–21:30\ndimanche: 12:00–13:00, 19:30–21:30",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.automne-akishige.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 110,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Estimation Vins au verre annoncés (Cave Nature / 2024)
        wine_glass: 12.00,
        // VERIFIED: Source web 2024
        coffee_price: 5.00,
        // Estimation dish_price pour la jauge : Menu Déjeuner 75€ / 3 temps ≈ 25€, Menu Dîner 110€ / 5 temps ≈ 22€ → ~25€
        dish_price: 75.00, // Menu Déjeuner (Entry Satiety)
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menu Découverte (Dîner & Week-end)",
                items: [
                    { name: "Menu en 5 étapes", price_cents: 11000, description: "Le voyage gastronomique structuré par Nobuyuki Akishige." },
                    { name: "Menu en 7 étapes", price_cents: 14500, description: "L'expérience complète du chef avec des produits nobles." },
                    { name: "Accord Mets & Vins (5 verres)", price_cents: 4500 },
                    { name: "Accord Mets & Vins (7 verres)", price_cents: 6500 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Menu Déjeuner (Mercredi au Vendredi)",
                items: [
                    { name: "Menu complet", price_cents: 7500, description: "Amuse bouche, entrée, plat au choix, dessert et mignardises." }
                ]
            },

            {
                category_type: "other",
                display_label: "Inspirations (Séquences Automne)",
                items: [
                    { name: "Saint-Jacques de Dieppe & légumes de saison", price_cents: 0 },
                    { name: "Asperges blanches, oseille & amandes fraîches", price_cents: 0 },
                    { name: "Maigre de ligne, courgettes & couteaux de plongée", price_cents: 0 },
                    { name: "Jardinière de légumes, émulsion barigoule", price_cents: 0 },
                    { name: "Tartelette de foie gras au pain d'épice & muscat", price_cents: 0 },
                    { name: "Ris de veau croustillant & champignons pied bleu", price_cents: 0 },
                    { name: "Selle de chevreuil rôtie (en saison de chasse)", price_cents: 0 },
                    { name: "Blanc manger à l'estragon & sorbet huile d'olive", price_cents: 0 },
                    { name: "Gelée de thé jasmin, crème chocolat blanc & mangue", price_cents: 0 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons & Extras",
                items: [
                    { name: "Eau minérale (75cl)", price_cents: 600 },
                    { name: "Café de spécialité", price_cents: 500 },
                    { name: "Mignardises de fin de repas", price_cents: 0 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUTD2_phSzeK7OGAbF6zn8GJHnHhx4876GajW257D-XoEQ9mXEebRxJT6rUXX9w5mNAw872BE53Py8vXG_T4_ktUHeqYJg-yf5yQpIsukb9KL3e6unXJBYeZkjJIWtWGYuQ_5qb053blGO1034jpblU4J3Cxx9ke9QbXNyORlAHB11B3BAmDb27GtZVTWJ67QJPYZ1pORf-h-NwpBC95PY0FcGRFvMUknoqqjVxOQsc11SVChaGlCzX0gYOZuv_g-qLsp1dNkFUnK6mErXEptBuBaVI8599023T1WTn7SwH_A&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWPv97-PFm_IkcQmIsZj1lszKS8pz2uARXL_JwfdtDNHE2NnheqoUDlGLRPBrI8ru7zJRql3N1kQKqEZG2OB_9EAKeXQuxMhFTAcMbmxWBCkg32Fc_qjVcxc0HhyDNPkmpi-DovTl84FgCM-7I6IvPO_1NVTfrJETv_fsBnGFBbj7NZlGoaFU-rY18VN6WIv3at-JTghlCczKgJmH3jmgCYPjWcdVN-pCR6RmTNQxnbXNuOshLzVcHlivcYbIRu5vtYJl5vnAX7pdnQLaxdo8aCoboLR6AU9O6iEVfnGGCmxg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVAEb7l_d8k7-n-5qfv6_qfCO_26YrWS0VGTlsY9xQinW3QU95IMko2cJjdVstv-UN8yhxqeTZAMF6BparI0kX5WJ3CAUcHaeAU0Hae_E8x1IQmW_41-yhP4qZ5WjljcHt3rJxnfJhOYnh4fPJrZctcBBMgZARQiwLL9IUc-PBiC50U0YPlao79juy08s8fms1OKRbxJ07snsFT_w_UCRGv-l1w6VmzY9te2rIZ-A0ClVGeT7101imQbVXojBAEaIJj11kdXKAy9yD0WggnlyjXJZorwTY6Ih26GFWP-7AvuARMWmr5q4AU6wtBC1Ekk2hD7RC8If2mlBqctQpoM0wPrEHhTd3KwyLSay8IV0bnzkWQFU9Hqo-6Un3DagQTWwoJgMzN8bsz6n_9oKBUUfZlr_YIzESJgwZ0LaZB3KSiwqgk6aahTlO-aUasZg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "restaurant_automne",
    michelin_stars: 1,
    verified: true,
    google_rating: 4.6,
    description: "Couronné d'une étoile Michelin, Automne est l'écrin du chef japonais Nobuyuki Akishige. Il y déploie une gastronomie française d'une technicité redoutable, magnifiée par la délicatesse et la précision de sa culture natale. Le cadre est feutré et sobre, concentrant toute l'attention sur des assiettes bluffantes, sublimées par une cave nature d'exception dirigée par le sommelier Ulysse Hivroz.",
    insider_tip: "• C'est l'adresse parfaite pour un dîner d'affaires haut de gamme ou un repas romantique où le calme et le service impeccable priment.\n• Allez-y pendant la saison de la chasse (automne/hiver) : le chef excelle dans la préparation du gibier (Selle de chevreuil) avec une subtilité rare.\n• Le menu déjeuner à 75€ du mercredi au vendredi est un excellent deal pour une table étoilée de ce calibre.",
    expert_catchline: "Haute couture gastronomique sous perfusion japonaise dans un écrin étoilé.",
    specials: {
        cuisine: ["Ris de veau croustillant", "Gibier en saison", "Tartelette de foie gras"],
        drinks: ["Cave nature d'auteur", "Accords de 45€ à 65€"],
        must_eat: "Laissez-vous guider par le Menu en 7 temps (145€). L'assiette star reste son ris de veau croustillant au printemps, ou ses formidables cuissons de gibier racé en hiver.",
        must_drink: "L'accord mets et vins (jusqu'à 65€) est conseillé car le sommelier déniche des quilles nature souvent introuvables par ailleurs."
    }
};
