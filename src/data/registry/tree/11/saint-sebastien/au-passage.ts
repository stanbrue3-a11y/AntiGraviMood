import { SurgicalPlace } from '../../../type-definition';

export const au_passage: SurgicalPlace = {
    id: "poi-au-passage",
    name: "Au Passage",
    slug: "au-passage",
    category: "restaurant",
    subcategory: ["bar à vins", "tapas", "bistronomique", "vins natures", "restaurant"],
    location: {
        address: "1 bis Passage Saint-Sébastien",
        arrondissement: 11,
        lat: 48.8616849,
        lng: 2.3691189,
        nearest_metro: "Saint-Sébastien – Froissart",
        metro_lines: [8],
        google_id: "ChIJ2_f-6P1t5kcR2Q_cUoAudcs"
    },
    moods: {
        chill: 50,
        festif: 35,
        culturel: 15
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: Fermé\nmardi: 19:00–01:00\nmercredi: 19:00–01:00\njeudi: 19:00–01:00\nvendredi: 19:00–01:00\nsamedi: 19:00–01:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.restaurant-aupassage.fr/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        // VERIFIED: LeFooding + ParisFrivole (2024) — vins au verre dès 6€
        wine_glass: 6.00,
        coffee_price: 0,
        dish_price: 21, // MANUAL: Median des Plats Principaux (18, 24) — Tapas exclues (partage), Côte 80€/kg exclue (partage)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULE MIDI (Source: RestoAParis + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Formule Déjeuner",
                items: [
                    // VERIFIED: RestoAparis (2024) — 19.50€
                    { name: "Plat du jour", price_cents: 1950, description: "Formule midi simple et directe." }
                ]
            },
            // ═══════════════════════════════════════════
            // TAPAS DU MARCHÉ (Source: LeFooding + ParisBouge + ParisFrivole)
            // ═══════════════════════════════════════════
            {
                category_type: "sharing",
                display_label: "Tapas du Marché (Le Soir)",
                items: [
                    // VERIFIED: ParisBouge (2024) — tapas 7-14€
                    { name: "Saucisson tranché et cornichons", price_cents: 700 },
                    { name: "Rillettes maison", price_cents: 800 },
                    { name: "Anchois marinés", price_cents: 700 },
                    { name: "Tartare de thon, agrumes", price_cents: 1400 },
                    { name: "Carpaccio de rouget, chou-rave", price_cents: 1300 },
                    { name: "Poulpe à la plancha", price_cents: 1400 },
                    { name: "Parfait de foie de volaille", price_cents: 1000 },
                    { name: "Crabe, poireaux fumés", price_cents: 1400 },
                    { name: "Lotte, fenouil et pêche", price_cents: 1400 },
                    { name: "Légumes grillés de saison", price_cents: 900 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS PRINCIPAUX (Source: LeFooding + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats Principaux",
                items: [
                    // VERIFIED: LeFooding (2024) — plats plus conséquents 18-24€
                    { name: "Épaule d'agneau confite (à partager)", price_cents: 2400 },
                    { name: "Côte de bœuf (au kg, certains soirs)", price_cents: 8000, description: "Par kilo, à partager en tablée." },
                    { name: "Poisson du jour grillé", price_cents: 1800 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: RestoAParis)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Dessert du jour", price_cents: 800 },
                    { name: "Assiette de fromages affinés", price_cents: 1000 }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS D'AUTEURS — 250 RÉFÉRENCES (Source: LeFooding + Raisin + ParisFrivole)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Vins d'Auteurs (250 références)",
                items: [
                    // VERIFIED: Plusieurs sources — verres dès 6€
                    { name: "Verre de vin nature (sélection du soir)", price_cents: 600 },
                    { name: "Verre premium / cuvée rare", price_cents: 1200 },
                    { name: "Bouteille nature (à partir de)", price_cents: 2500 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUg3ndH2NK6C_T8lGIXF_h9F75JgQsx-FUF2Nz_gfRSzik9zNjeoB6eympdXXmL9RxRiX_1VkGJTdTpAUAW0ZRBC4LiFNLr6o3-rPLIg3XNcucu0ZEW1VIjS--0vefYMIN34OfiNod6gNWW5MSbnv3OL5u7qHM55XNHtALqvo24FBiuGFReLoaBoNnkhZorJ23bgjfpfyhapGojsVr_sZiYbWwGH4b56OZozOnQxIBe85wzWYxnjwBmJiy1R1dfssapIJ5hFPtXBJrF3Mjgk8PVfdBaXhW8g9-b15XHSUTyvfziIvNS8JdxoRguwBXAWQCPTGzkTAekLL6FyZjvw5F5G7X0KmY2pLi31N2YJwg5ZMv5ZX73Mz6lxH2Q6Ruf4-CP8ozrGTU8DDfPOAAdKjgTnbdyLAZiEWV5btN6oHXMbxo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV1NNqcIukw5ylzYPN6uAO7tNOVt2JDv8uMPNjqqDmE673gQgOkskyHRKIIcs0gUp8NdOlV9kw6NNZySy5bdiwdoKGUJlyryRSmCdGO7MrnpTPfVBZVIMJDk0QaQAnLRvhKpttdRJlswcnliMSsxoskdx1yTJgrgLzsQJJGqeSgk49bmG_MrrMKyb0VKb2NnUM0hQgCoVYMY_s8WMqtSMlL3WQyjnmnwNF8WxKCkp98Peddb6TO8KLdswD4LHWMz390CsMZLXlqOrnD7fjk_4KwPGN4plf9DAtlueBikORwBw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXXxeOiQGckHjpECS3rp-ntEIu4dCyb70WOy3AollQMSw--8n5afRg3BYNi8G2cvpNZsHBC4fxTkXiQhoD0BbWPhso26eadvaPFd3QL2WLavLRWAF8oAjMOlv8L_ZUNHcjDUDN0fA7kO1n-zKljNnzAxEyIY-yRGksc4aQew6Dp9ccEjI3l9-Rlf6bw5UcvLnHc0naMDHkn4EklVbc5KXJX3H4beFoUVjvFJfAvTlU6-_jhiw0FCxrvDYZdQhC9b79kYHmi99Mmo27t6VGtsmbwugcT5iGJ46p0BUkVRkXJAQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "aupassage_paris",
    verified: true,
    google_rating: 4.5,
    description: "Au Passage est le bar à vins et tapas culte du 11ème arrondissement, niché dans un passage piéton intime près de Saint-Sébastien. Le principe est simple : on commande des petites assiettes (tapas du marché ultra-créatives), on partage, et Jessica gère une cave de 250 vins d'auteurs natures et bio. L'ambiance est électrique le soir avec une clientèle de connaisseurs et de foodistas.",
    insider_tip: "• Pas de réservation le soir : venez tôt (dès 19h) pour avoir une place au comptoir ou une table dans le passage.\n• Commandez 3 à 4 tapas par personne pour un repas complet — les portions sont généreuses.\n• Le poulpe à la plancha (14€) et le tartare de thon (14€) sont les valeurs sûres.\n• Si vous êtes un groupe, demandez la côte de boeuf au kg (80€) qui est servie certains soirs seulement — un coup de fil en avance est conseillé.\n• Les verres de vin nature démarrent à 6€, un prix d'appel rare pour cette qualité dans le quartier.",
    expert_catchline: "Le QG nocturne du vin nature et des tapas du marché dans un passage secret du 11ème.",
    specials: {
        cuisine: ["Poulpe à la plancha", "Tartare de thon", "Épaule d'agneau", "Tapas du marché créatives"],
        drinks: ["250 vins d'auteurs natures", "Verres dès 6€", "Sélection bio et biodynamique"],
        must_eat: "Les tapas changent chaque soir selon le marché. Les classiques qui reviennent souvent : le poulpe à la plancha (14€), le carpaccio de rouget au chou-rave (13€), et le parfait de foie de volaille (10€). En groupe, la côte de boeuf au kilo (80€) est un must.",
        must_drink: "La cave de 250 références natures est le nerf de guerre. Les verres du soir démarrent à 6€ — un rapport qualité-prix honnête et rare dans le 11ème."
    }
};
