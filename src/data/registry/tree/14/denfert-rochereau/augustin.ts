import { SurgicalPlace } from "../../../type-definition";

export const augustin: SurgicalPlace = {
    id: "poi-augustin",
    name: "Augustin",
    slug: "augustin-bistrot-14",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "79 Rue Daguerre, 75014 Paris",
        arrondissement: 14,
        lat: 48.8355077,
        lng: 2.3249323,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6],
        google_id: "ChIJjRK57rVx5kcRGrW2O9Bq6XQ"
    },
    moods: {
        chill: 60,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:30, 19:30–22:30 | Mardi: 12:00–14:30, 19:30–22:30 | Mercredi: 12:00–14:30, 19:30–22:30 | Jeudi: 12:00–14:30, 19:30–22:30 | Vendredi: 12:00–14:30, 19:30–22:30 | Samedi: Fermé | Dimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.augustin-bistrot.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.50,
        coffee_price: 3.00,
        dish_price: 24.00, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Entrées (Sourcing Direct)",
                items: [
                    { name: "Terrine de lapin de chez ’Pépé’, compotée d’oignons rouges", price_cents: 1400 },
                    { name: "Tartare de dorade royale aux agrumes & aneth", price_cents: 1400 },
                    { name: "Six escargots de Bourgogne au beurre persillé Maison", price_cents: 1400 },
                    { name: "Velouté de châtaignes, éclats de noisettes, croûtons", price_cents: 1400 },
                    { name: "Burratina des Pouilles, huile de basilic", price_cents: 1400 },
                    { name: "Salade de haricots verts, amandes & fêta", price_cents: 1200 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats (Bistronomie du Chef)",
                items: [
                    { name: "Côte de Cochon du Cantal, purée à la truffe noire", price_cents: 3200, description: "Le plat emblématique du bistrot." },
                    { name: "Filet de bar rôti à la plancha, légumes oubliés", price_cents: 2400 },
                    { name: "Pavé de cabillaud sauvage, risotto crémeux aux petits pois", price_cents: 2400 },
                    { name: "Tartare de bœuf charolais préparé au couteau", price_cents: 2400 },
                    { name: "Quasi de veau fermier déglacé au porto", price_cents: 2400 },
                    { name: "Magret de canard rôti au miel & épices", price_cents: 2400 },
                    { name: "Risotto Arborio aux champignons des bois (Végé)", price_cents: 2200 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus Gourmets",
                items: [
                    { name: "Menu Carte Complet (E+P+D)", price_cents: 4200 },
                    { name: "Formule Déjeuner (E+P ou P+D)", price_cents: 3400 },
                    { name: "Assiette de fromages affinés par nos soins", price_cents: 1500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Signature",
                items: [
                    { name: "Vacherin glacé aux framboises fraîches", price_cents: 1200 },
                    { name: "Moelleux au chocolat Guanaja, glace vanille", price_cents: 1400 },
                    { name: "Authentique Baba au rhum ’Augustin'", price_cents: 1200 },
                    { name: "Riz au lait grand-mère au caramel beurre salé", price_cents: 1200 },
                    { name: "Ile flottante à la fève tonka", price_cents: 1000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/augustin-bistrot-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/augustin-bistrot-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/augustin-bistrot-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/augustin-bistrot-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/augustin-bistrot-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/augustin-bistrot-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "Augustin est le joyau chic du quartier Daguerre. Sous la houlette du chef Vincent Deyres, ce bistrot réinvente les codes de la gastronomie française avec une modernité rafraîchissante. Le décor est feutré, l’accueil soigné, et chaque assiette est un tableau où le produit noble est roi. C’est l’adresse idéale pour un dîner intimiste ou un déjeuner d'affaires au calme, loin du tumulte des grandes brasseries montparnassiennes.",
    insider_tip: "Le menu à 42€ est d’un équilibre remarquable, laissez-vous guider par les suggestions du chef qui changent tous les mois. La purée à la truffe qui accompagne le cochon est une expérience en soi.",
    expert_catchline: "La bistronomie d’exception du quartier Daguerre : raffinement, saisonnalité et justesse.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Cave à vins pointue", "Champagnes de niche"],
        must_eat: "Cuisine de bistrot. La Côte de Cochon à la purée de truffe.",
        must_drink: "Un verre de Bourgogne blanc sélectionné par Vincent Deyres."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. La Côte de Cochon à la purée de truffe.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
