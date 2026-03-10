import { SurgicalPlace } from "../../../type-definition";

export const pavillon_montsouris: SurgicalPlace = {
    id: "poi-pavillon-montsouris",
    name: "Le Pavillon Montsouris",
    slug: "le-pavillon-montsouris",
    category: "restaurant",
    subcategory: ["gastronomique", "historique", "parc", "romantique"],
    location: {
        address: "20 Rue Gazan, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8222425,
        lng: 2.3405775,
        nearest_metro: "Cité Universitaire",
        metro_lines: ["B", "T3a"],
        google_id: "ChIJTyilE6Jx5kcRLuoJ5rU4W8"
    },
    moods: {
        chill: 100,
        festif: 0,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Monday: 12:30 – 2:30 PM, 7:30 – 10:30 PM | Tuesday: 12:30 – 2:30 PM, 7:30 – 10:30 PM | Wednesday: 12:30 – 2:30 PM, 7:30 – 10:30 PM | Thursday: 12:30 – 2:30 PM, 7:30 – 10:30 PM | Friday: 12:30 – 2:30 PM, 7:30 – 10:30 PM | Saturday: 12:30 – 2:30 PM, 7:30 – 10:30 PM | Sunday: 12:30 – 2:30 PM, Closed (Oct-Apr Sunday Evening)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://pavillon-montsouris.paris/",
            label: "RESERVER"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 5.00,
        dish_price: 38.00,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Entrées Signature",
                items: [
                    { name: "Foie gras de canard maison, chutney de saison", price: "22.00€" },
                    { name: "Effiloché de tourteau au citron vert", price: "24.00€" },
                    { name: "Asperges blanches, sauce mousseline", price: "19.00€" },
                    { name: "Œuf mollet bio, crème de champignons", price: "16.00€" },
                    { name: "Gravelax de saumon à l'aneth", price: "18.00€" }
                ]
            },
            {
                category: "L'Arrivage du Chef (Plats)",
                items: [
                    { name: "Dos de cabillaud rôti, petits légumes", price: "32.00€" },
                    { name: "Daurade royale à la plancha", price: "34.00€" },
                    { name: "Filet de bœuf, sauce bordelaise", price: "38.00€" },
                    { name: "Selle d'agneau rôtie aux herbes", price: "36.00€" },
                    { name: "Risotto crémeux aux légumes oubliés", price: "26.00€" },
                    { name: "Poisson de ligne selon arrivage", price: "35.00€" },
                    { name: "Menu Carte (E+P+D)", price: "51.00€" }
                ]
            },
            {
                category: "Douceurs & Desserts",
                items: [
                    { name: "Soufflé chaud au Grand Marnier", price: "14.00€" },
                    { name: "Millefeuille vanille de Madagascar", price: "12.00€" },
                    { name: "Tarte fine aux pommes et cannelle", price: "11.00€" },
                    { name: "Baba au rhum ambré", price: "13.00€" },
                    { name: "Plateau de fromages affinés", price: "15.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWqPEjFSDHZLGA38sYY6UO7MJKWHjEAiOXU9z6-b7nmzaJtirdnrW6SVoa_0jCMyFKXuIh_mYjcOHO_mJlCOcrb3WhZZeCmjN0cuhlhbB7sn-QITW6GrvLIjBsE8lLoroAgfGhvgfWvYfh4QwI9N2JnYtxKifts_ZwcC-upbyuyAOB01pU_-zpnKP2ne2p9jbz0i_WxZ24OQzb54wm9NPPYFpkyJWrD27jfSD4qcr3X4XcmcrPo4cKJPeI_pq0rGW88ETMp7l_r9So21fDTr_k_aPzJtCDe8e9jABz6v3HXnA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVXUn0btQiavQAKMhfrO4b0gzV2d7nJSndhwIdsVl571BemawKcr_hkegrTvqb_EVA_Nplet5qgfmefjj_lozX_Lxvqp7KV5Te6ZXiHuOVxV-GrgO6Q40QgCa7P0nRENkwVcmhqm5MyNl26S8V_lnH_w56fYa7bAfIM7qtnIfVsDq_Dp14a3YzHRw1oEukasiLF7wbpbAAdvJ9dBYrIgYUzL4aPHGHi6CFL_S5tyl_mXYPFvcJrCwUy-qfcqoHRQQmFfv985vIl2esnSTZVzzDMlScH35eUs-UmgL5hsDNlYg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.1,
    description: "Inscrit aux Monuments Historiques, le Pavillon Montsouris est une perle de la Belle Époque nichée en plein cœur du parc. Fondé en 1889 pour l'Exposition Universelle, ce bâtiment à l'architecture coloniale élégante offre une expérience hors du temps. On y vient pour sa verrière inondée de lumière et sa terrasse avec vue plongeante sur les pelouses du parc. La cuisine, classique et raffinée, rend hommage aux grands produits français dans un calme que seul le chant des oiseaux vient perturber.",
    insider_tip: "Demandez une table près des fenêtres de la rotonde pour avoir l'impression de déjeuner dans un tableau impressionniste. C'est l'un des lieux les plus romantiques de Paris pour une grande occasion ou un déjeuner dominical paisible.",
    expert_catchline: "L'élégance Belle Époque suspendue au cœur du parc Montsouris.",
    specials: {
        cuisine: ["Gastronomie Française Revisitée", "Terroir"],
        drinks: ["Grands Crus Classés", "Cocktails de Jardin"],
        must_eat: "Le foie gras de canard et le tourteau au citron vert.",
        must_drink: "Un vin blanc frais à déguster sur la terrasse."
    }
};
