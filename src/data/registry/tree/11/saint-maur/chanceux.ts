import { SurgicalPlace } from '../../../type-definition';

export const chanceux: SurgicalPlace = {
    id: "poi-chanceux",
    name: "Chanceux",
    slug: "chanceux",
    category: "restaurant",
    subcategory: ["bistronomie", "tapas", "brunch", "restaurant"],
    location: {
        address: "57 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8623269,
        lng: 2.3798678,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJwY_sxkxt5kcRm1rEQRvtGqc"
    },
    moods: {
        chill: 80,
        festif: 0,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 09:30–17:00\nmardi: 09:30–17:00\nmercredi: 09:30–17:00\njeudi: 09:30–23:00\nvendredi: 09:30–23:00\nsamedi: 09:30–23:00\ndimanche: 10:00–23:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/chanceux.paris/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 17, // MANUAL: Plats du midi autour de 17-18.50€. Le soir plus "tapas" (16 - 33€)
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Petit-Déjeuner & Espresso Bar (jusqu'à 12h)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Tartine baguette fraîche, beurre et confiture maison", price: "5.00€" },
                    { name: "Chèvre frais mariné", price: "7.00€" },
                    { name: "Granola maison, fromage blanc et purée de fruits", price: "9.00€" },
                    { name: "Oeuf coque, mouillettes, beurre sarrasin, Cantal", price: "11.00€" }
                ]
            },
            {
                category: "Café de Spécialité & Pâtisseries",
                items: [
                    { name: "Viennoiseries du jour", price: "3.50€" },
                    { name: "Cookie du jour", price: "4.00€" },
                    { name: "Lemon cake", price: "5.00€" },
                    { name: "Banana bread", price: "5.00€" },
                    { name: "Muxu aux noisettes", price: "5.00€" },
                    { name: "Gâteaux chocolat et tahini (sans gluten)", price: "5.00€" }
                ]
            },
            {
                category: "Déjeuner (12h - 15h) : Les Entrées",
                items: [
                    { name: "Œuf dur, mayonnaise à l'estragon", price: "7.00€" },
                    { name: "Truite gravlax maison, aneth, crème crue", price: "7.00€" },
                    { name: "Terrine de cochon noir de Bigorre, pickles maison", price: "8.00€" }
                ]
            },
            {
                category: "Déjeuner : Sandwichs Chauds & Froids",
                items: [
                    { name: "Bun jambon ou Bun tuna mix", price: "12.00€" },
                    { name: "Mushroom melt (pain rye, champignons rôtis, gorgonzola)", price: "14.00€" },
                    { name: "Pickled beef (pain rye, pastrami, fromage suisse, moutarde miel)", price: "15.00€", description: "L'arme de destruction massive du midi." }
                ]
            },
            {
                category: "Déjeuner : Les Plats",
                items: [
                    { name: "Couscous bowl (panisse, légumes rôtis/crus, tzatziki)", price: "17.00€" },
                    { name: "Risotto potimarron, roquette, tuile parmesan sauge", price: "17.00€" },
                    { name: "Épaule d'agneau confite, purée, jus d'agneau", price: "17.50€" },
                    { name: "Ragoût de confit de canard, tagliatelles, jaune d'œuf", price: "18.50€" }
                ]
            },
            {
                category: "Dîner & Soirée (Soirs J/V/S/D)",
                items: [
                    { name: "Gravelax de truite maison grand format", price: "10.00€" },
                    { name: "Falafels maison au labneh", price: "17.00€" },
                    { name: "Saucisse, crème champignons, purée beurre salé, pickles", price: "18.00€" },
                    { name: "Crumble aux fruits de saison, flocons sarrasin", price: "7.00€" },
                    { name: "Mont d'Or chaud à partager", price: "44.00€", description: "L'option conviviale gourmande des soirs froids." }
                ]
            },
            {
                category: "Brunch du Dimanche",
                items: [
                    { name: "Brunch Complet du Dimanche (par personne)", price: "32.00€", description: "Inclus viennoiseries, plats chauds, boissons." }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXjRe54AgfYhiAoHHLGUI_pyRjbZe7exa8CXIQwbHqyCeAPxhP-4IhIXaUML-LP2Wi1IAmftCoIcwZABNB9Od4YggpmW7W6MZCKMyn1lkuZOboH5VUe74Z1LMO3dAMOt2wVfy5e-njVdV96J3vA4k_rHDMBFG27Nr85R2HmBdVnryvF6joaLYq3AELInPYQfo6xaPPGYX3-iL8lJLwkwDPbgKFugOVyKkHARaFCxTlrH2AUCzZFbPcx__AHnqQdFc5turXTTbAaBwJXAjc9AOvKhIHIvOiYo3yCYJR2xueemQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUFNRCYwBanPY9yq6_XOWqenBzKOUe1hYq6fS7taV6rXBGwnkZcLKZ9N4hEYEn_k-Is8RNSDszvOJyM1KZck5Qdn9CWnI9Eq4PTWBbzNU4C0ccD_10CjKcunI7INIQYcKmHee4cy3WO-x3qwffLDxJwHINI9caMx5u7wUDW66MtSuM9Gn9l85v8aQEFawo7zYykfZFm1c7_GFQxFffEJiQ9URZBfF6RbpK9FEk2WdWcVojCCNI_mE5dlF8o0c02Ty8h45yihzaLzN65xy1LgmBjUfi6flSdmi25u4tgPL8dLYT4zxDSDOedkMGEyPugwA99P_IRf7XVLMLZ8tVOit-_A2GYuXaX2MYa4k-gD_ajrYiXaOpAGPw9wNFcIhtd7iRjjKtQVXzdY0XknWsOIu9VOr2UnS1mo5XSfwIWUPBdwEWWquWjqUNmymfgr7iu&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVNDjMtPdkEitrB5i5Oqq4Vmr_E4MWEVBUwa0feoIuz5iFVfmUQUv0fgu7iahJBLhIobzYxnM_N2ACU3E8-1Qi4ULkuTmZGukVXTiBNi58myLb3Lpe_UmTmC0QAXjRp5JLB70cbfe_BmBWACiHeL-R7JNzlK0gm-zitvG6v9LExrFqpyO3-_vzkjvuIWsXsd8vDFrR5DLOGO6LGUKNkBv9VW7nThbKOPF3d6M_Dbwytn1WNVL4VCVNMePc7DgU2sH9LKi_xptWCc84ojv0UMeWMr3ehVr0t-7CK7DDOsoCzLw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "chanceux.paris",
    verified: true,
    google_rating: 4.6,
    description: "Une petite merveille de quartier hybride sur la rue Saint-Maur : épicerie, coffee shop le matin (merveilleux granola), cantine bistronomique le midi (avec ses fameux melts) et bar à tapas à prix doux en fin de semaine. La comfort food est ici élevée au rang d'art du quotidien.",
    insider_tip: "• Les horaires sont trompeurs : Chanceux est un vrai coffee-shop diurne du lundi au mercredi et ne devient un restaurant du soir qu'à partir du jeudi.\n• Leurs sandwichs chauds (\"Melt\") du midi avec un croisement de fromages fondants et pastrami sont d'authentiques tueries.\n• Excellente alternative pour le petit-déjeuner ou le télétravail léger grâce au WiFi gratuit le matin.",
    expert_catchline: "Superbe adresse hybride diurne/nocturne misant sur une comfort-food ultra généreuse. L'âme du 11ème.",
    specials: {
        cuisine: ["Le Pickled Beef sandwich (Pastrami)", "Mont d'Or chaud à partager", "Ragoût de canard"],
        drinks: ["Café de spécialité le matin", "Vins natures le soir"],
        must_eat: "Le Pickled Beef le midi : du gros pastrami relevé par un fromage suisse texturé dans un pain rye hyper moelleux.",
        must_drink: "Un flat white exécuté dans les règles de l'art le matin, pour démarrer du bon pied."
    }
};
