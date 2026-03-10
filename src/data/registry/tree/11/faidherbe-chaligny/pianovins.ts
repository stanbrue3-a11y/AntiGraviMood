import { SurgicalPlace } from '../../../type-definition';

export const pianovins: SurgicalPlace = {
    id: "poi-pianovins",
    name: "Pianovins",
    slug: "pianovins",
    category: "restaurant",
    subcategory: ["gastronomique", "français", "restaurant"],
    location: {
        address: "46 Rue Trousseau",
        arrondissement: 11,
        lat: 48.8523649,
        lng: 2.379242,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJp8ypkghy5kcRB-RvBC7_Lp8"
    },
    moods: {
        chill: 70,
        festif: 0,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:30–14:00, 19:30–22:00\nmercredi: 12:30–14:00, 19:30–22:00\njeudi: 12:30–14:00, 19:30–22:00\nvendredi: 12:30–14:00, 19:30–22:00\nsamedi: 12:30–14:00, 19:30–22:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.pianovins.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 90,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 0,
        dish_price: 35.00, // Menu Marché (Déjeuner)
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "L'Expérience Pianovins (Déjeuner)",
                items: [
                    // VERIFIED: Emmanuel Sudres 2024-2025
                    { name: "Menu Déjeuner 'Le Marché' (3 temps)", price: "35.00€", description: "Entrée, Plat, Dessert selon l'inspiration du jour et les arrivages du marché." },
                    { name: "Accords Mets & Vins Déjeuner (2 verres)", price: "22.00€" }
                ]
            },
            {
                category: "L'Immersion Gastronomique (Dîner)",
                items: [
                    { name: "Menu 'Pianovins' en 5 services", price: "75.00€", description: "Menu Dégustation à l'aveugle, l'évolution gastronomique complète." },
                    { name: "Menu 'Grande Balade' en 8 services", price: "95.00€", description: "Le voyage ultime en 8 étapes (selon disponibilité)." },
                    { name: "Accords Mets & Vins Dîner (5 verres)", price: "45.00€" }
                ]
            },
            {
                category: "Inspirations & Signatures (Exemples 2025)",
                items: [
                    { name: "Soupe de patate douce, huile de café & cardamome", price: "Inclus", description: "Un classique de la douceur pianique." },
                    { name: "Œuf parfait, racine de cerfeuil tubéreux & noisettes", price: "Inclus" },
                    { name: "Carpaccio de Saint-Jacques, émulsion gingembre-citronnelle", price: "Inclus" },
                    { name: "Lieu jaune de ligne, heliantis et salicorne", price: "Inclus" },
                    { name: "Filet de canette, purée de panais, jus corsé au miel", price: "Inclus" },
                    { name: "Carré de porc de montagne, oignon rouge confit", price: "Inclus" },
                    { name: "Saint-Nectaire fermier affiné, confiture de vieux garçon", price: "Inclus" },
                    { name: "Clementine en textures, sorbet thym-citron", price: "Inclus" },
                    { name: "Ganache chocolat grand cru, sarrasin grillé", price: "Inclus" },
                    { name: "Mise en bouche du moment", price: "Inclus" },
                    { name: "Beurre de baratte Jean-Yves Bordier", price: "Inclus" },
                    { name: "Pain artisanal de la boulangerie voisine", price: "Inclus" },
                    { name: "Palette de mignardises", price: "Inclus" },
                    { name: "Eau micro-filtrée (Castalie)", price: "Inclus" }
                ]
            },
            {
                category: "La Sélection Cave Pointue",
                items: [
                    { name: "Verre de vin (Sélection Eric Mancio)", price: "12.00€" },
                    { name: "Coupe de Champagne (Maison sélectionnée)", price: "16.00€" },
                    { name: "Verre de vin blanc 'Cuvée d'Exception'", price: "15.00€" },
                    { name: "Café de spécialité & mignardises", price: "7.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX6aN1G4kwpCpYShjwTJ4DMD_UPLYxJh5tLhGRx7vxpuFE42vLMtc_Hg-RE3DYZsSKyUNBwxSUZ1lPkOYiHIfnFwgptmi6Zxf53MFqFgv4x5h7TZHkmGgovB5v8RrxRlO-XFmzpgkH_cWkMfCBlBEq_KYEjwseu8ogoB-x0fvdqC6o8P0L7tMTPRzgJOYjFHX14h2r1r1SroxDyM6uXT1eZoD3MLZSUalyCJxIiRxtXUvlLfmktVmNu8jAL0BkLLcjijEEHbZ0X__LQi-MdK2htEsFzxmjpPRk59R1sCSqYmrBJ4hTARedDFrVhsuV-CptdurHXCVmx8B4g70IGcWpf3LQEEv4AfbV4CfBP8RQHM3rGF7dzUzi4nY7GFSycWYBx8ndsrWl5Mb9KaclRrsFRySzVB1FzkPjwvdAhKoG5VOs&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUIpmguK15A73_YsE5v225NzJoTJt37GvsWpMhsifA8zN_v0uUwl3qaCosajcyqhnmgMYZ8Y1ytRG0mdyP1pxpLBs1iEdc2gy9Ck7sNCO4nYN47Igtc0csQ7t609MiFaXx0xjijWIP8KcP4vlCTP9eag9N_FRox4DRvfZhnsRMtefGFe7FzC_RkYX4W8XlgpiohU0xwClvEehkRgBW4f2K3ZuIi4cRxhnMY8ktmTZ7wT3xlzEAfARh1knCzhHYB0aT4o2J2ol3hPKE1lyxKSf-bT9qVfg79qzY4B3GA-5jB6Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWLGTioJxYkZ0guHE6uUTvEy0_n9qQ5hufwqwJQFuMnv_ElSf3IXZEJLesnT8AHlBSDd7FwoPJzrLPOPDdXsCREC-bbsVU_FSBTRL6YpwQNw-DZA-nKyC8tyZSvT-N5a4yTzkOpzzCcztpM6MoO7UaJcygDl8NwNpprkm33ZooUt6xyXqv2g_T7sZxGdbCzCByXvtPh_0oW9w2TU1gA9T77QZeD5tfPbDuB5Md56LCvx0laCmJWgobm1SbWhI1aCXpblnIal65vrtMzlTu5eLyTpKRzeHqIwZ05g1K5PBG6qzzZufTTNhKQWWvU8RofIYtrbkV6sxK_oAcRjw0ruT1g77bs5I_LlsPg8FsPdFjevUjzaz3u4vzOvFimsP-_4lobP2X4Kj5ebn-X8qBetX2XjcWNfsfzebcU5WBGROVraoOimKlN_seXEKEimHdi&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "pianovinsparis",
    verified: true,
    google_rating: 4.8,
    description: "Une des plus grandes petites tables du quartier, dirigée par Michel Roncière en cuisine et Éric Mancio en salle (deux anciens de l'empire Guy Savoy). À l'écart des grandes artères, le duo exécute un récital gastronomique brillantissime et très technique au sein d'une salle sobre, sans jamais se prendre au sérieux.",
    insider_tip: "• C'est la table parfaite pour une expérience hautement gastronomique (carrément digne de l'étoffe d'un étoilé) sans subir la lourdeur des protocoles mondains.\n• Excellent rapport qualité-prix au déjeuner avec une formule bluffante à 35€.\n• La salle est très contenue, réservation fortement recommandée.",
    expert_catchline: "Haute volée gastronomique discrète par d'anciens cadres de chez Guy Savoy. Dressages bijoux.",
    specials: {
        cuisine: ["Menu Dégustation Inventif en 5 services", "Plats très techniques, dressages orfèvres"],
        drinks: ["Large sélection de vins de propriétaires"],
        must_eat: "Laissez-vous guider par le Menu à 75€, chaque séquence est un choc de textures souvent très justement dosé.",
        must_drink: "Signalez vos préférences à Éric, l'ancien sommelier de Guy Savoy a le don d'ouvrir les bonnes quilles pour faire chanter les assiettes."
    }
};
