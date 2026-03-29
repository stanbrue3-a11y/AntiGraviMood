import { SurgicalPlace } from '../../../type-definition';

export const orgueil: SurgicalPlace = {
    id: "poi-orgueil",
    name: "Orgueil",
    slug: "orgueil",
    category: "restaurant",
    subcategory: ["gastronomique", "bistronomique", "speakeasy", "restaurant"],
    location: {
        address: "6 Rue Popincourt",
        arrondissement: 11,
        lat: 48.8571038,
        lng: 2.3777207,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJUV-8mTht5kcRUPNTaT6O-O4"
    },
    moods: {
        chill: 50,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–00:00\nmardi: 12:00–14:30, 19:00–00:00\nmercredi: 12:00–14:30, 19:00–00:00\njeudi: 12:00–14:30, 19:00–00:00\nvendredi: 12:00–14:30, 19:00–00:30\nsamedi: 12:00–14:30, 19:00–00:30\ndimanche: 12:00–14:30, 19:00–00:00",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://bonaloi.com/fr/orgueil/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 10.00,
        coffee_price: 0,
        dish_price: 22, // MANUAL: Menu Formule Déjeuner: 22€-27€. (Speakeasy 55€/74€). A la carte sharing plates (11€-16€).
        menu_type: 'fixed',
        last_updated: "2026-03-06",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "other",
                display_label: "Bistro - Les Produits & Le Végétal",
                items: [
                    { name: "Pâté en croûte de saison", price_cents: 1300, description: "Veau, porc et fruits secs" },
                    { name: "Terrine du moment", price_cents: 1200, description: "Accompagnée de pickles" },
                    { name: "Poireaux brûlés", price_cents: 1100, description: "Sauce gribiche et noisettes" },
                    { name: "Betteraves fumées au bois", price_cents: 1200, description: "Crème de raifort et aneth" },
                    { name: "Gnocchis à la parisienne", price_cents: 1400, description: "Beurre de sauge et parmesan" }
                ]
            },
            {
                category_type: "other",
                display_label: "Bistro - Mer & Terre",
                items: [
                    { name: "Seiche à la plancha", price_cents: 1400, description: "Teriyaki, purée de pommes de terre au citron Beldi" },
                    { name: "Croquetas de porc", price_cents: 1100, description: "Sésame, cream cheese et sauce pimentée" },
                    { name: "Agneau confit de 12h", price_cents: 1600, description: "Salicorne, darphins à la noisette" },
                    { name: "Côte de boeuf (pour 2)", price_cents: 8500, description: "Sélectionnée par le boucher, frites maison" },
                    { name: "Poisson du marché au barbecue", price_cents: 2400, description: "Légumes de saison rôtis" }
                ]
            },
            {
                category_type: "other",
                display_label: "Speakeasy (Table gastronomique)",
                items: [
                    { name: "Menu Dégustation (5 temps)", price_cents: 5500, description: "Cuisine libre et instinctive du Chef Spinnler (Midi J-D / Soir L-M)" },
                    { name: "Menu Dégustation (7 temps)", price_cents: 7400, description: "Le voyage complet en immersion totale (Soir M-S)" },
                    { name: "Accord Mets & Vins (5 verres)", price_cents: 4500 },
                    { name: "Accord Mets & Spiritueux", price_cents: 5000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Gourmandises",
                items: [
                    { name: "Brownie au chocolat", price_cents: 1000, description: "Citron vert, chocolat pétillant" },
                    { name: "Tarte Tatin signature", price_cents: 1000, description: "Glace au romarin" },
                    { name: "Brioche perdue au labneh", price_cents: 900, description: "Caramel beurre salé" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWlDOo8O2wNdUDTPjP5Aa5Ekj1wxFqgzWInFsq-N8c88spEO4cleLrGy6dEMlAiPV4N-ha2wnHMKrBctytoL5KN_ihyUVKEVFcAfFbkIgiFlLxC3Oa-wonxCTZA5NB-QrgDyLcJYHIpHBNT8l10UVJUf8TKujCzchQ2Ti3NTpIDAegLZc6LmPJQ2HhindU3u3f-3Z7g8-EFggYA72e-N7NibhqfyG44b73dSqy4A5WkWQOUa1Ai2Ce75oVwV2Y-jYy-cymjacVF0OG3ABtCKN3TQ3eCzMJgaQ1nKGWafGx59w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXHWwkhm0nEZ2tcCXSf851q5C6NLy3I9-6_RNVuUXQ64APvBU9nwPN_chfAgY0LgrpwNao8p5dscNRgwdqs2Qg7_1NjB1vedNltXqyGAai-mYkeQvcch-i2cNGFF9c9nBpnUbPglt7qS99WUpSPPwPfKXH1vWf7wjRnCbRqG8qhD1xmo6AEZLD4iR6X46mMyhhhc_KV8mrq3o6VveQjq9E4bIpZLFCOHYmp9qYmNJMM6nFcSmEEaJzNtlV6D_Nn_5KIHOv8k5hz1SRXK5o9FtpODTsljVwceovXg99BuvBNPQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUsMMgF180xe94y5grDgquI-jxEkTbgBwgZ-hlRdtcYuqKnSMVUVmWQpfBGkgzFMqLuklDzvXfRYmY29QMYRG5dK5KvR1psJa4M7eDIIteg5x-eAb3T8-wtafoDl8XLWy6KX6unRQVKs61tD0Cj-TjcJn7dZUj8rl4eMm9JEQ2iF19ArTIiUyFW1BKP1lYT1KJXOCl71ToyQy1FJUoQxESRRCzAf_odnhsStGEZZiRryAo9qs5K95T5NYCVB6AX5IYSOTvrIH45NuZjeslllt_9VqlZTYp4iQ3TlvGgxjOzEQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "orgueil.paris",
    verified: true,
    google_rating: 4.7,
    description: "Orgueil (du groupe Bonaloi par le chef Eloi Spinnler) est un restaurant gastronomique hybride : à l'avant, une salle de 'bistro' proposant une carte audacieuse de petites assiettes à partager. À l'arrière, dissimulé derrière les cuisines, un 'speakeasy' ultra-confidentiel proposant un menu dégustation aveugle de (très) haut vol. Un lieu double face avec une philosophie anti-gaspi radicale.",
    insider_tip: "• Réservez le 'Speakeasy' (74€ en 7 temps) pour une soirée inoubliable caché derrière la cuisine.\n• Côté Bistro : le déjeuner à 22€/27€ est l'une des meilleures affaires du quartier.\n• L'expérience repose sur le zéro déchet : tout est recyclé, fermenté ou twisté dans les recettes.\n• Le menu change tous les trois mois pour coller au plus près des saisons.",
    expert_catchline: "Bistro zéro déchet à l'avant, speakeasy gastronomique caché à l'arrière : le double jeu d'Orgueil.",
    specials: {
        cuisine: ["Poulpe breton teriyaki", "Croquetas de canard confit", "Menu dégustation 7 temps (Speakeasy)"],
        drinks: ["Vins natures", "Cocktails création", "Boissons fermentées maison"],
        must_eat: "L'option Speakeasy est fascinante (dégustation surprise). En bistro, les gnocchis et les viandes confites sont travaillés avec des cuissons millimétrées.",
        must_drink: "Faites confiance à la carte des vins et aux accords sans alcool (kombuchas, jus) du chef."
    }
};
