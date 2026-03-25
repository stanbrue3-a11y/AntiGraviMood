import { SurgicalPlace } from '../../../type-definition';

export const monsieurBleu: SurgicalPlace = {
    id: "poi-monsieur-bleu",
    name: "Monsieur Bleu",
    slug: "monsieur-bleu",
    category: "restaurant",
    subcategory: ["institution", "chic", "festif-chic", "vue tour eiffel", "terrasse"],
    location: {
        address: "20 Avenue de New York, 75116 Paris",
        arrondissement: 16,
        lat: 48.8643563, // EXACT GPS
        lng: 2.2968759,  // EXACT GPS
        nearest_metro: "Iéna / Alma-Marceau",
        metro_lines: [9],
        google_id: "ChIJpw9w4A9v5kcRqfF3_5h_I-o"
    },
    moods: {
        chill: 5,
        festif: 90,
        culturel: 25 // Dans le Palais de Tokyo
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-11)
        opening_hours_raw: "Lundi: 12:00–14:30, 19:00–02:00 | Mardi: 12:00–14:30, 19:00–02:00 | Mercredi: 12:00–14:30, 19:00–02:00 | Jeudi: 12:00–14:30, 19:00–02:00 | Vendredi: 12:00–14:30, 19:00–02:00 | Samedi: 12:00–16:00, 19:00–02:00 | Dimanche: 12:00–16:00, 19:00–02:00",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://monsieurbleu.com/reservation/",
            label: "RÉSERVER (ANTICIPER)"
        }
    },
    pricing: {
        avg_budget: 120,
        is_free: false,
        pint_price: 12, // Bière bouteille chic
        wine_glass: 16.00,
        coffee_price: 5.50,
        dish_price: 43.00, // MÉDIAN des Plats (Tartare 36, Cabillaud 42, Filet de Bœuf 55)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Pour Commencer (Entrées / Tapas)",
                items: [
                    { name: "Tarama à la truffe, blinis", price: "24.00€" },
                    { name: "Burrata des Pouilles, tomates anciennes", price: "26.00€" },
                    { name: "Croustillant de gambas, sauce piment doux", price: "32.00€" },
                    { name: "Saumon fumé 'Petrossian', crème épaisse", price: "34.00€" },
                    { name: "Carpaccio de bar, huile d'olive pimentée", price: "28.00€" }
                ]
            },
            {
                category: "Les Les Plats (Plats Principaux)",
                items: [
                    { name: "Tartare de bœuf tradition, frites", price: "36.00€" },
                    { name: "Cabillaud rôti, purée de pommes de terre", price: "42.00€" },
                    { name: "Rigatoni à la crème de truffe noire", price: "44.00€" },
                    { name: "Suprême de volaille jaune des Landes", price: "39.00€" },
                    { name: "Véritable Filet de bœuf au poivre, frites", price: "55.00€" },
                    { name: "Sole meunière en belle taille (500g)", price: "68.00€" }
                ]
            },
            {
                category: "Pâtisseries & Gourmandises (Desserts)",
                items: [
                    { name: "Pavlova 'Monsieur Bleu' (Fruits rouges)", price: "18.00€" },
                    { name: "Tiramisu très onctueux", price: "16.00€" },
                    { name: "Mousse au chocolat tiède", price: "17.00€" }
                ]
            },
            {
                category: "Bar (Cocktails)",
                items: [
                    { name: "Cocktail 'Le Bleu' (Gin, pamplemousse, tonic)", price: "22.00€" },
                    { name: "Moscow Mule Tradition", price: "20.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW2Gm4G7HroSsoMq1CqtxFHejxq42Qdmvqi7YUfRMdOQ4Z3vbL8_-s-oFymckQNUWlWXIzbBYitNXZypob50jQUIGaoTwmrCL0ID_lpcf6zYkmZeJrECiOpCSUhhUrPsryO7YhlL1ZExrohLC67L6s8ZxyRK-VOJE4YDAsKrR2gSpc8GqxhnPbmqdwPj90yoDT8z40H31I6bpn1fm-pgxAw6BiL94bltGMWMj1bt4IQC7yLz4tUXu4ZP4076cxGdhlu2QYhHwjUAwHiI47zxflIeIZA0BOG2aZywz9RT8eJPCyKQlM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVC1O2idsunYwNAxqaQj495R2-l8d4dnQmwq3n_s6Dp-FxXKbFgMp9rBwJDgacIdfrMnh2VrmnhsC6jDrvw-tfWppchlqwbFyL35LONiM5GybSqB2xUe5FQXljMgJ_zMqzhl5jLLSlQsbOk9-p7_zQrUO8Tzw3H2D8Ei6stHVVDjRhLh_-vDNj3v3Rw72DfJN4KXFpGTm8ByRhWwEA8H0quhoryGKDPdVfUKD26fDqU6sXIJJ0M_f-hOBOP-ltkunaiquf_Sp-_sMVpNnpJ---w1pKw6oe8AfrMcsxz5OetNw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXbOAWJJZiyWQCep0Ele19eW3_VIXuE9oQrK57axSoHezZdAZjWfPg4brwTcMibmVIhZLM9nXxIHayzxZTtJn216W1AcwXrXoamKi7JiVIbnkQlefcKqcJKY9rs75-fdKpec0Xa3bwZlLPDE8jfTfO62TdrZykmkFJ4Zysp4fXVZZk1mT6vpDdC6V_mdnnY5fXYEnMRhGZ3iQmYj4nLYuLmbHxwvUHJw-PrzODcFLeWNdEHSn0DaUKl10FKgFJfdGZXeIVX9AbXbMD-zGda3-jEeORkh_FNcqSoTQgoXcPFRQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "monsieurbleuparis",
    verified: true,
    google_rating: 4.1,
    description: "Installé dans l'aile Ouest du Palais de Tokyo, Monsieur Bleu est une véritable institution parisienne. Décoré par Joseph Dirand dans un style Art Déco moderne, l'espace est grandiose. L'été, sa terrasse avec vue sur la Tour Eiffel est l'un des lieux de pouvoir et de fête les plus en vue de la capitale. La carte propose une excellente gastronomie française classique, parfaitement exécutée. Mais on y vient surtout pour l'ambiance : chic, vibrante, et souvent électrique le soir au son du DJ.",
    insider_tip: "• C'est The Place To Be pour le brunch du dimanche dans le 16ème (attention, réservation obligatoire).\n• Demandez une table sur la terrasse aux beaux jours pour la vue mythique sur la Tour Eiffel scintillante.\n• Tenue correcte fortement exigée, l'établissement filtre sévèrement le soir.\n• Profitez de l'exposition au Palais de Tokyo avant le dîner.",
    expert_catchline: "L'institution mondaine du Palais de Tokyo. Architecture Art Déco, vue Tour Eiffel et ambiance électrique.",
    specials: {
        cuisine: ["Filet de Bœuf", "Pavlova", "Tartare", "Rigatoni Truffe"],
        drinks: ["Cocktails Créations", "Vins Français D'Exception"],
        must_eat: "Le Filet de bœuf au poivre, une valeur sûre indémodable.",
        must_drink: "Le Cocktail signature 'Le Bleu'."
    }
};
