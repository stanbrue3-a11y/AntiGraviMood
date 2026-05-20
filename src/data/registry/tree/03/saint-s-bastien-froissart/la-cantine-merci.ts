import { SurgicalPlace } from "../../../type-definition";

export const la_cantine_merci: SurgicalPlace = {
    "id": "poi-la-cantine-merci",
    "name": "La Cantine Merci",
    slug: "la-cantine-merci",
    category: "restaurant",
    subcategory: ["français"],
    location: {
        address: "111 Bd Beaumarchais, 75003 Paris",
        arrondissement: 3,
        lat: 48.8607214,
        lng: 2.3668319,
        nearest_metro: "Saint-Sébastien-Froissart",
        metro_lines: [8],
        google_id: "ChIJDSzfrABu5kcRJTf3iV__JCg"
    },
    moods: {
        chill: 85,
        festif: 10,
        culturel: 95
    },
    practical: {
        opening_hours_raw: "10:30 – 19:30 | mardi: 10:30 – 19:30 | mercredi: 10:30 – 19:30 | jeudi: 10:30 – 20:00 | vendredi: 10:30 – 20:00 | samedi: 10:00 – 20:00 | dimanche: 10:00 – 19:30",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://merci-merci.com/pages/la-cantine",
            label: "VOIR LA CARTE"
        }
    },
    pricing: {
        avg_budget: 22,
        is_free: false,
        last_updated: "2026-04-17",
        menu_items: [
            {
                category_type: "main",
                display_label: "L'Assiette Merci",
                items: [
                    { "name": "Grande Assiette de Salades Composées", price_cents: 1800, description: "Légumes de saison, céréales, herbes fraîches", is_highlight: true },
                    { "name": "Quiche du jour & Mesclun", price_cents: 1400 },
                    { "name": "Plat du jour (Viande ou Poisson)", price_cents: 1950 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Maison",
                items: [
                    { "name": "Tarte du jour aux fruits", price_cents: 750, is_highlight: true },
                    { "name": "Gâteau au chocolat sans gluten", price_cents: 800 }
                ]
            }
        ]
    },
    description: "Située au sous-sol du célèbre concept-store Merci, la Cantine s'ouvre sur un jardin intérieur baigné de lumière. On y déguste une cuisine saine, colorée et résolument tournée vers le produit de saison. C'est l'escale parfaite pour un déjeuner serein au milieu d'une virée shopping dans le Haut-Marais.",
    insider_tip: "• **Le Spot** : Demandez une table près de la baie vitrée pour profiter de la vue sur le jardin potager.\n• **Fraîcheur** : Les salades changent quotidiennement selon les arrivages du marché.\n• **Anticipation** : Le lieu est très prisé le samedi, venez tôt pour éviter l'attente.",
    expert_catchline: "La pause healthy et lumineuse du plus célèbre concept-store parisien.",
    specials: {
        cuisine: ["Français"],
        drinks: [`Jus de fruits frais`, `Thés bios`],
        must_eat: "Cuisine Française. Salades du Marché & Légumes de Saison.",
        must_drink: "Jus du jour pressé à froid."
    },
    real_talk: {
        text: "La Cantine Merci est une bouffée d'oxygène. Loin du tumulte du boulevard Beaumarchais, on y mange une cuisine assiette de salades est une leçon de fraîcheur et de couleurs.",
        must_eat: "Cuisine Française. Salades du Marché & Légumes de Saison.",
        le_secret: "Les herbes aromatiques utilisées en cuisine proviennent souvent du petit jardin suspendu que vous voyez par la verrière.",
        le_son: "Le murmure des discussions feutrées et le bruit lointain de la fontaine du jardin.",
        le_must: "L'assiette de salades composées, un incontournable pour faire le plein de vitamines."
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-merci/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-merci/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-merci/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-merci/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-merci/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-cantine-merci/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.1,
    google_reviews_count: 1200
};

export default la_cantine_merci;
