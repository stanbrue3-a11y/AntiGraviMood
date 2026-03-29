import { SurgicalPlace } from "../../../type-definition";

export const septimeLaCave: SurgicalPlace = {
    id: "poi-septime-la-cave",
    name: "Septime La Cave",
    slug: "septime-la-cave",
    category: "bar",
    subcategory: ["Bar à vin", "Tapas", "Vins Natures", "Gastro-Cave"],
    location: {
        address: "3 Rue Basfroi, 75011 Paris",
        arrondissement: 11,
        lat: 48.8538,
        lng: 2.3807,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJ03_z_XRshkcRv9Xl3Qk_V_Q"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 20
    },
    pricing: {
        avg_budget: 35,
        dish_price: 22.00, // MANUAL: Wine bar small plates - requires 2-3 for satiety
        last_updated: "2026-03-08",
        menu_items: [
            {
                category_type: "sharing",
                display_label: "Petites Assiettes à Partager (Tapas)",
                items: [
                    { name: "Pain, Beurre Fumé & Truffes Noires", price_cents: 1000, description: "Le toast iconique de la Cave." },
                    { name: "Jambon de Bœur, Citron & Huile d'Olive", price_cents: 900 },
                    { name: "Asperges Blanches & Mayonnaise au Capre", price_cents: 800 },
                    { name: "Carottes Fanes, Ail des Ours & Zaatar", price_cents: 750 },
                    { name: "Anchois & Mozzarella di Bufala", price_cents: 850 },
                    { name: "Foie Gras & Anguille Fumée", price_cents: 1200 },
                    { name: "Planche de Charcuterie Artisanale", price_cents: 1500 },
                    { name: "Saucisson d'Ardèche & Beurre Bordier", price_cents: 750 },
                    { name: "Pancetta de Terroir", price_cents: 700 },
                    { name: "Comté 24 mois & Chutney de Figues", price_cents: 1100 },
                    { name: "Poireaux Vinaigrette Mimosa", price_cents: 800 },
                    { name: "Olives de Lucques & Kalamata", price_cents: 550 },
                    { name: "Pastrami & Huile de Laurier", price_cents: 900 },
                    { name: "Rillettes de Canard Maison", price_cents: 850 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Sélection de Vins Naturels (Au Verre)",
                items: [
                    { name: "Verre de Vin Blanc Nature", price_cents: 550 },
                    { name: "Verre de Vin Rouge Nature", price_cents: 550 },
                    { name: "Verre de Macération (Orange)", price_cents: 650 },
                    { name: "Verre de Bulles Naturelles", price_cents: 750 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins de Vignerons (Sélection Cave)",
                items: [
                    { name: "Domaine Ganevat (Jura)", price_cents: 0, description: "Vins d'exception, nous consulter." },
                    { name: "Pfifferling - L'Anglore", price_cents: 0 },
                    { name: "Domaine Mosse (Anjou)", price_cents: 0 },
                    { name: "Radikon (Frioul)", price_cents: 0 },
                    { name: "Belluard (Savoie)", price_cents: 0 },
                    { name: "Puzelat - Clos du Tue-Bœuf", price_cents: 0 },
                    { name: "Alexandre Bain (Loire)", price_cents: 0 },
                    { name: "Droit de Bouchon (Sur place)", price_cents: 700, description: "Prix boutique + 7€ pour consommation sur place." }
                ]
            },
            {
                category_type: "other",
                display_label: "Final Touches & Softs",
                items: [
                    { name: "Terrine de Campagne Maison", price_cents: 850 },
                    { name: "Couteaux Graphiques au Beurre d'Herbes", price_cents: 1200 },
                    { name: "Verre de Vin Doux Naturel", price_cents: 850 },
                    { name: "Eau de Chateldon (75cl)", price_cents: 650 },
                    { name: "Café de Spécialité (L'Arbre à Café)", price_cents: 350 }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        terrace: false,
        vegan_friendly: false,
        opening_hours_raw: "Lundi-Dimanche: 16:00–23:00",
        main_action: {
            type: "site",
            url: "https://septime-lacave.fr/",
            label: "VOIR LE LIEU"
        }
    },
    description: "L'antichambre du célébrissime Septime. Ici, on ne réserve pas, on vient pour l'atmosphère vibrante, les vins natures dénichés aux quatre coins de l'Europe et des grignotages de haute volée. Dans un espace exigu et chaleureux, on déguste des produits sourcés avec une précision chirurgicale (charcuteries ibériques, fromages affinés, petites assiettes créatives). C'est l'essence même de l'apéro parisien moderne.",
    expert_catchline: "La cave naturelle de Septime : des vins d'exception et des tapas cultes sans réservation.",
    insider_tip: "• Le Foie Gras à l'anguille fumée est un classique indémodable du groupe Septime.\n• Arrivez tôt (18h) pour espérer avoir une petite place au comptoir, car c'est toujours plein.\n• La sélection de vins Orange est souvent incroyable, laissez-vous guider par les cavistes.\n• Vous pouvez acheter vos bouteilles à emporter (-7€ de droit de bouchon).",
    specials: {
        cuisine: ["Vins Natures", "Anguille Fumée", "Produits d'exception"],
        drinks: ["Vins de Macération", "Pet'Nat", "Domaine Gauby"],
        must_eat: "L'assiette foie gras / anguille et la terrine de porc noir."
    },
    images: {
        hero: "https://septime-lacave.fr/wp-content/uploads/2021/05/Septime-La-Cave-Interieur.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipM_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.4
};
