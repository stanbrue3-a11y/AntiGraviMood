import { SurgicalPlace } from '../../../type-definition';

export const le_6_paul_bert: SurgicalPlace = {
    id: "poi-le-6-paul-bert",
    name: "Le 6 Paul Bert",
    slug: "le-6-paul-bert",
    category: "restaurant",
    subcategory: ["bistronomique", "fait maison", "vins natures", "restaurant"],
    location: {
        address: "6 Rue Paul Bert",
        arrondissement: 11,
        lat: 48.85132400000001,
        lng: 2.384674,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJI7Pv7Aty5kcRQPtif2Giv70"
    },
    moods: {
        chill: 70,
        festif: 10,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 19:00–22:00\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/le6paulbert/",
            label: "VOIR INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 27, // MANUAL: Plats à la carte 26-27€ (sources RestoSurLeGrill + RestoAParis)
        last_updated: "2026-03-06",
        menu_items: [
            {
                category: "Formules & Menus (Plats)",
                items: [
                    { name: "Menu Déjeuner (E+P+D)", price: "26.00€", highlight: true },
                    { name: "Menu-Carte Dîner (4 temps)", price: "44.00€", highlight: true },
                    { name: "Expérience Dégustation (5 services)", price: "75.00€" },
                    { name: "Accord Mets & Vins (4 verres)", price: "35.00€" }
                ]
            },
            {
                category: "Entrées du Marché (Entrées)",
                items: [
                    { name: "Œuf parfait, chakchouka & herbes", price: "12.00€", highlight: true },
                    { name: "Maquereau mariné, mandarine Corse", price: "14.00€" },
                    { name: "Carpaccio de Saint-Jacques au citron", price: "16.00€" },
                    { name: "Salade de PDT, cœurs de canard grillés", price: "15.00€" },
                    { name: "Langue de Bœuf, condiment ravigote", price: "13.00€" },
                    { name: "Cocos de Paimpol, jus de palourdes", price: "12.00€" },
                    { name: "Gnocchis à l'aneth et hareng fumé", price: "15.00€" },
                    { name: "Terrine de Campagne artisanale", price: "11.00€" }
                ]
            },
            {
                category: "Plats Bistronomiques (Plats)",
                items: [
                    { name: "Paleron de Bœuf poêlé (servi rouge)", price: "27.00€", highlight: true },
                    { name: "Lotte rôtie, beurre blanc agrumes", price: "28.00€" },
                    { name: "Échine de Porc Fermier croustillante", price: "26.00€", highlight: true },
                    { name: "Pintade de Challans au salsifis", price: "27.00€" },
                    { name: "Lingot de Volaille, purée panais", price: "26.00€" },
                    { name: "Poisson de ligne, émulsion iodée", price: "29.00€" },
                    { name: "Cocotte de Légumes, truffe noire", price: "24.00€" },
                    { name: "Aile de Raie au beurre noisette", price: "26.00€" }
                ]
            },
            {
                category: "Desserts & Gourmandises (Desserts)",
                items: [
                    { name: "Mousse Chocolat noir 70%, sel fumé", price: "10.00€", highlight: true },
                    { name: "Parfait Glacé Yaourt & Citron Menton", price: "10.00€" },
                    { name: "Mille-feuille minute à la Vanille", price: "12.00€" },
                    { name: "Pavlova aux fruits de saison", price: "11.00€" },
                    { name: "Pot de Crème au chocolat amer", price: "10.00€" },
                    { name: "Assiette de Fromages affinés", price: "12.00€" }
                ]
            },
            {
                category: "Cave de Natures & Esprits (Boissons)",
                items: [
                    { name: "Verre de Vin Nature Blanc (Sélection)", price: "8.00€", highlight: true },
                    { name: "Verre de Vin Nature Rouge (Quille)", price: "9.00€" },
                    { name: "Vouvray 'Pétillant Naturel' (Verre)", price: "10.00€" },
                    { name: "Eau micro-filtrée (75cl)", price: "4.50€" },
                    { name: "Café Espresso Terres de Café", price: "3.00€" },
                    { name: "Thé Vert Bio", price: "5.00€" },
                    { name: "Digestif Maison (Infusion alcoolisée)", price: "9.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX102-W0-WeTWkdfdnZK9lguSz1E5UXzcAc3RukdCVDnmefGFT2JpIOGL3eyUXdQ7d63zuhSgO0K3RuFIbbZWrBbcvBX-u9NHRvKq5dq8LiK43cITNKH9Ueq-FsxQZdNtRuPUEHjuSNMRojPqcDKitDtQ3FiFQl6OTSYPWKbNGxudmQokJ7GM4KLzWcjcU1GPrNoW5J_zDaf6wH9a4qwNgrQiHZ-ATMcsAn4EV7IDYwC3BGvw2DcqMAhVXf-Ed5_Qnpr66RnTNynVZ4YeY9pXqdLPO-WrHB6fNAElisOqI&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXxjKf4u-1gjhE998NEAzrb8UFGfM8K0k9Ke1j6XogaxaWsvpjNxuaMhs2QgHIh-OzDPZ0x7p60QmHPE03uJiYZEegNyrGfYnROJeDbhRBo5bMUUri-Kzz6KR1c1GsVkMkM5Ci0ibj3vGqFSszsw26K-UUzmyKKLu3v0HWYhC2Ks4vhU4jXHV3nyMLPQwo6wO6ZsGgMOgTBQjDXMv2dSrQBLuiUeZGgOtMtyVODLU7s22JtDxcR-9q1-efqsYAWf1zhK_yTJgF8jbn-7c2tQU1uYkNb22ZlMPeGxHm0jz5miS8_A_zd9Ek8WzoOKIy0DY70z69QmWQYiw70CHKpns-t2NBtmq7EoBJ02M6mg4L_xC9FiJT3vCE0DcpAzv3npaUC69tQ_3mFUMJFBvA0zP5DDobqwdMVL5j5nVIV-apGiHw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW4HekjHnG-T6NxkYzsvoNx5xctIbYVhlUGQzqffwfr211ge1mCsLIGOiqrQZRh2pgoN3BGn90US86Z95ltYdzAk7PCo06_BVi617iC1IgoYXmqN64DxpZy47M3eYOHiSRlcOExoxUm44uNkY8QlH0kMzvcPQfHUuTykxOagBUxvKLRZS2CnR0alvL3iTGDDw8uA4mv22O_53xggru1PRBx3JO0b_V4L9_9MFlU7Px3bYZgvbAIe1X0c__lynetZPg5yWvXjEUqJYytAy54Np93KrBZF3_EUHZOc_E1PIyUIIuVVPFlBSOFJvr3pigIggJeT-srSyVk7Ocq7tMeN8vjJGbRtnicCwZ9Eu7747Klk670kGe2vwuPslao0tyUYVote8Xh9DsSx7TpV867Go-ngGr_3FdgF0-F3TKwiMnp0LXcUEQjBLaR1HPKSQLH&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "le6paulbert",
    verified: true,
    google_rating: 4.5,
    description: "Le 6 Paul Bert est la table bistronomique discrète de la rue Paul Bert dans le 11ème. La carte change quotidiennement selon le marché — paleron servi rouge, lotte rôtie au beurre blanc, pintade aux salsifis — le tout dans une cuisine ultra-saisonnière, précise et sans fioritures. La cave de vins natures et biodynamiques complète parfaitement l'expérience.",
    insider_tip: "• Le menu déjeuner à 26€ (E+P+D) est un rapport qualité-prix exceptionnel pour ce niveau de cuisine.\n• Le menu-carte dîner à 44€ offre 4 temps (entrée+poisson+viande+dessert) — le sweet spot.\n• La carte change CHAQUE JOUR — pas de plat fixe, c'est le marché qui décide.\n• La cave de vins natures est pointue et accessible.\n• Ne confondez pas avec le Bistrot Paul Bert juste à côté — c'est un restaurant différent.",
    expert_catchline: "La table bistronomique cachée de la rue Paul Bert : carte du marché quotidienne et vins natures.",
    specials: {
        cuisine: ["Paleron poêlé servi rouge", "Lotte rôtie beurre blanc", "Pintade salsifis", "Carte quotidienne du marché"],
        drinks: ["Vins natures et biodynamiques", "Cave pointue", "Verres dès 8€"],
        must_eat: "La carte change chaque jour — faites confiance au chef. Le menu-carte dîner à 44€ est l'expérience complète. Le midi à 26€ est un deal incroyable.",
        must_drink: "La cave de vins natures est le point fort — demandez conseil, les références changent souvent."
    }
};
