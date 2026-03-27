import { SurgicalPlace } from '../../../type-definition';

export const le_servan: SurgicalPlace = {
    id: "poi-le-servan",
    name: "Le Servan",
    slug: "le-servan",
    category: "restaurant",
    subcategory: ["fusion philippine", "bistronomie", "restaurant"],
    location: {
        address: "32 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.86101559999999,
        lng: 2.3814506,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJDxNp1_Bt5kcRfBQ1nlGxQoQ"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:00, 19:30–22:30\nmardi: 12:00–14:00, 19:30–22:30\nmercredi: 12:00–14:00, 19:30–22:30\njeudi: 12:00–14:00, 19:30–22:30\nvendredi: 12:00–14:00, 19:30–22:30\nsamedi: 12:00–14:00, 19:30–22:30\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://leservan.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 30, // Median des Plats: 28, 28, 30, 38, 45 → médiane = 30€
        last_updated: "2026-03-07",
    menu_items: [
      {
        category: "Les Menus d'Épure (Menus)",
        items: [
          { name: "Menu Dégustation (À l'aveugle)", price: "55.00€", highlight: true },
          { name: "Menu Déjeuner (Entrée, Plat, Dessert)", price: "35.00€", highlight: true },
          { name: "Accord Mets & Vins Nature (3 verres)", price: "30.00€" },
          { name: "Accord Mets & Vins Nature (5 verres)", price: "45.00€" }
        ]
      },
      {
        category: "Petites Assiettes Perçantes (Entrées)",
        items: [
          { name: "Cœurs de Canard au piment doux", price: "12.00€", highlight: true },
          { name: "Raviolis de Porc & Langoustine, beurre de soja", price: "16.00€", highlight: true },
          { name: "Ceviche du moment, agrumes & piment", price: "15.00€" },
          { name: "Encornets sautés, ail noir & herbes", price: "17.00€" },
          { name: "Tartare de Bœuf, mayo épicée & sarrasin", price: "18.00€" },
          { name: "Oreilles de Cochon au poivre du Sichuan", price: "14.50€" },
          { name: "Tartelette Tomate, ricotta & chutney piment", price: "13.00€" },
          { name: "Os à Moelle, croûte d'herbes & levain", price: "15.00€" },
          { name: "Maquereau Crudo, calamansi & gingembre", price: "16.00€" },
          { name: "Hors-d'œuvre du jour (Saison)", price: "12.00€" }
        ]
      },
      {
        category: "Plats de Convive & Créations (Plats)",
        items: [
          { name: "Paleron de Bœuf braisé au tamarin", price: "28.00€", highlight: true },
          { name: "Pot-au-feu de Saint-Jacques", price: "28.00€" },
          { name: "Maigre de ligne, bouillon asiatique", price: "30.00€" },
          { name: "Ris de Veau croustillant, jus pimenté", price: "45.00€", highlight: true },
          { name: "Canard en Brioche, jus aux cinq épices", price: "36.00€" },
          { name: "Poitrine de Cochon croustillante & bok choy", price: "29.00€" },
          { name: "Bar de ligne, fenouil, chou kale & safran", price: "34.00€" },
          { name: "Raviolis de Homard, beurre safrané & cacahuète", price: "38.00€" },
          { name: "Pigeon rôti, jus corsé (Entier)", price: "38.00€" }
        ]
      },
      {
        category: "Douceurs & Fins de Repas (Desserts)",
        items: [
          { name: "Tarte meringuée au Citron (Revisitée)", price: "12.00€", highlight: true },
          { name: "Chocolat crémeux & praliné cacahuète", price: "13.00€" },
          { name: "Poire pochée aux épices & crème crue", price: "12.00€" },
          { name: "Mango Pomelo Sago (Interpretation moderne)", price: "11.00€" },
          { name: "Glace Sésame noir maison (2 boules)", price: "8.50€" },
          { name: "Sélection de Fromages affinés artisanaux", price: "14.00€" }
        ]
      },
      {
        category: "La Cave Nature & Vibrante (Boissons)",
        items: [
          { name: "Verre de Vin Blanc (Vibrant & Frais)", price: "9.50€", highlight: true },
          { name: "Verre de Vin Rouge (Fruit & Caractère)", price: "10.00€" },
          { name: "Verre d'Orange (Macération)", price: "12.00€", highlight: true },
          { name: "Bouteille de Pet-Nat (Sélection)", price: "48.00€" },
          { name: "Eau micro-filtrée (75cl)", price: "5.00€" },
          { name: "Café Espresso Terres de Café", price: "3.50€" }
        ]
      }
    ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXhlP-gJZKZ_KNIw9cWTR03sZtpbRa7RdoB3yTwZ2rnLGsnORGQifHBDqP5hidQlOXoRZIpL-qlwiCqyFrmZZc3JJeCU4sXE3I2zpT4uAw9RVlYMXnJE-FlUoME4ypVVwLBllYmqqx7dz1wqjOkHtK99J6mpoPL1tAIKlYew8BCN6pp9Ml_OSB6ubr2jrKZm-arCtrwiqU2O-CBmmZ7F8lFboLs16k36AjDqwDHXVUIgcr50osSLeK5DWI4KeJMyMHOep1OJlvHaaAE0-bDkndnTdxjZVdfYPlBWPx0dSVfpFNYf52omSUT9Iw0tM1Gz0BPwuiCEvE7d8jSZERAFO3phjY6-K3mMf61LwE-5FDL-pFiHcnDV0mP21VsBe6s-cn_BqcsNzr8Ahl5yuaQB6foFnjtKQ4u3wnNp_4mBar1qrRa&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVSlRMBGVPguKG_9rP7rRPbtbcZMYzV0gaMip00H0tEsu8JbJf3uFWQ06G-sPxJgw2k7gACCr9bZIc5fzMlC0RRtf9o_-uWpTeNHtQ92nXJXDQEl7u12BxZP3bN2IDc6y1fSRw_Wm406nFa_M8b_nU3ggv43nT78kgEaeY6qExktngxy9nowc6ST7nbewBu2lc_1924heFuIDr3myiJ5ULpuy9wi-D8WwZ3DNihWEAKxQ86DqmF0Yk-c76P-yKBzuO_okrMD7hl2jrO04gPBrzuk6pkefrxaRozKG1vUYO8Zg5U23Nd_Uy64W05SHQrtrQ8DVB168m06Py_DOLDURp8btoqVVWBZ502IbS1XBR_NpP9FFp_pWvgNWLlWgG9jGdWEUW_YhALAg0Urrc0CMAXsF0yBAQ7BO-KuqvPitkkpWccTgt8Dylq-iEEySnK&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUZpGlWzaXl55tSJoIyO9Q7SvO3soIyHQ9Ejqyuh40MQunp4dvEP5xBgz9xlmxfDlKgV7sLEmTa8X_05S1WmAeNkC8VjzEeKyQkp8wNFh-myOEuZ76c_FL5PcZEDORpcUHhtUxB7RRmLY6EasGvsT-V8UrYSGt-5Gtn0B1CGImG3gI6ETcmOIpdg__GVgpGzoeUWJV0i72sLrwXkD0OKvyF8E7hiQsTo3c0pUiF3jFY1U0ajRSfEcERk0Bh9WMn7LOLAabGt9XayMJ0A7GUxCON5zyj1kiutbwrVnJHzwRhL3bZBhUIWoHakFFWbr01lo6beUb5vIoh0bs4iMxUq3Y5C86sH_mvL7uuWzV-lG8-jYnuUhlO3rBpWs5YndTSBcbPqZ_QqkEgKOQcqjBMyWvX2Amw3AUrpxLNg4rZkMqebpoAlUaSkGlsA9e7U9Dw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "leservan",
    verified: true,
    google_rating: 4.5,
    description: "Le bistrot fulgurant des sœurs Tatiana et Katia Levha. Sous ses airs de bistrot titi-parisien (moulures, plafond peint), la carte balance de formidables uppercuts aux influences asiatiques, et particulièrement philippines (piment, herbes fraîches, agrumes).",
    insider_tip: "• La carte change purement quotidiennement en fonction du marché de la cheffe.\n• L'ancienne formule déjeuner très attractive n'existe plus, le ticket moyen monte vite à 50€ (et attention, la carafe d'eau micro-filtrée est facturée 5€).\n• Réservez très en avance, le lieu est constament pris d'assaut.",
    expert_catchline: "Haute-bistronomie percutée d'influences philippines par la brillante Tatiana Levha.",
    specials: {
        cuisine: ["Cœurs de canard au piment", "Raviolis langoustine au beurre de soja"],
        drinks: ["Vins natures exigeants"],
        must_eat: "Si les cœurs de canard au piment doux sont à la carte du jour, jetez-vous dessus aveuglément.",
        must_drink: "Un vin orange macéré pour tenir tête aux épices de la carte."
    }
};
