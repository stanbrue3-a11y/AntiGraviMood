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
        dish_price: 11.00, // Assiette moyenne
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Petites Assiettes & Tapas (Saisonnier)",
                items: [
                    { name: "Pain, Beurre Fumé & Truffes Noires", price: "10.00€", description: "Le toast iconique de la Cave." },
                    { name: "Jambon de Bœur, Citron & Huile d'Olive", price: "9.00€" },
                    { name: "Asperges Blanches & Mayonnaise au Capre", price: "8.00€" },
                    { name: "Carottes Fanes, Ail des Ours & Zaatar", price: "7.50€" },
                    { name: "Anchois & Mozzarella di Bufala", price: "8.50€" },
                    { name: "Foie Gras & Anguille Fumée", price: "12.00€" },
                    { name: "Planche de Charcuterie Artisanale", price: "15.00€" },
                    { name: "Saucisson d'Ardèche & Beurre Bordier", price: "7.50€" },
                    { name: "Pancetta de Terroir", price: "7.00€" },
                    { name: "Comté 24 mois & Chutney de Figues", price: "11.00€" },
                    { name: "Poireaux Vinaigrette Mimosa", price: "8.00€" },
                    { name: "Olives de Lucques & Kalamata", price: "5.50€" },
                    { name: "Pastrami & Huile de Laurier", price: "9.00€" },
                    { name: "Rillettes de Canard Maison", price: "8.50€" }
                ]
            },
            {
                category: "Sélection de Vins Naturels (Au Verre)",
                items: [
                    { name: "Verre de Vin Blanc Nature", price: "5.50€" },
                    { name: "Verre de Vin Rouge Nature", price: "5.50€" },
                    { name: "Verre de Macération (Orange)", price: "6.50€" },
                    { name: "Verre de Bulles Naturelles", price: "7.50€" }
                ]
            },
            {
                category: "Vins de Vignerons (Sélection Cave)",
                items: [
                    { name: "Domaine Ganevat (Jura)", price: "Shop Price", description: "Vins d'exception, nous consulter." },
                    { name: "Pfifferling - L'Anglore", price: "Shop Price" },
                    { name: "Domaine Mosse (Anjou)", price: "Shop Price" },
                    { name: "Radikon (Frioul)", price: "Shop Price" },
                    { name: "Belluard (Savoie)", price: "Shop Price" },
                    { name: "Puzelat - Clos du Tue-Bœuf", price: "Shop Price" },
                    { name: "Alexandre Bain (Loire)", price: "Shop Price" },
                    { name: "Droit de Bouchon (Sur place)", price: "7.00€", description: "Prix boutique + 7€ pour consommation sur place." }
                ]
            },
            {
                category: "Final Touches & Softs",
                items: [
                    { name: "Terrine de Campagne Maison", price: "8.50€" },
                    { name: "Couteaux Graphiques au Beurre d'Herbes", price: "12.00€" },
                    { name: "Verre de Vin Doux Naturel", price: "8.50€" },
                    { name: "Eau de Chateldon (75cl)", price: "6.50€" },
                    { name: "Café de Spécialité (L'Arbre à Café)", price: "3.50€" }
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
