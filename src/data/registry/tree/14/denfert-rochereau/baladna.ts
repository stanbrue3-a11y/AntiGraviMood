import { SurgicalPlace } from "../../../type-definition";

export const baladna: SurgicalPlace = {
    id: "poi-baladna",
    name: "Baladna",
    slug: "baladna-paris-14",
    category: "restaurant",
    subcategory: ['méditerranéen', 'français'],
    location: {
        address: "26 Pl. Denfert-Rochereau, 75014 Paris",
        arrondissement: 14,
        lat: 48.8338331,
        lng: 2.3310743,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6],
        google_id: "ChIJX7BUf7dx5kcRHJYpFjxx-6M"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–15:00, 19:00–23:00 | Mardi: 12:00–15:00, 19:00–23:00 | Mercredi: 12:00–15:00, 19:00–23:00 | Jeudi: 12:00–15:00, 19:00–23:00 | Vendredi: 12:00–15:00, 19:00–23:00 | Samedi: 12:00–15:00, 19:00–23:00 | Dimanche: 12:00–15:00, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.thefork.fr/restaurant/baladna-r392657",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 27,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.50,
        coffee_price: 2.20,
        dish_price: 18.50, // PRIX du Plat Baladna (Mix grillades)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats Signatures (Plaisir Libanais)",
                items: [
                    { name: "Plat Baladna (3 brochettes : agneau, poulet, kebbé)", price_cents: 1850, description: "L’assortiment complet des grillades maison." },
                    { name: "Chawarma (Émincé de viande marinée aux épices)", price_cents: 1600 },
                    { name: "Rougets frits à la libanaise", price_cents: 1650 },
                    { name: "Kebbé au four (Viande hachée farcie, blé concassé)", price_cents: 1450 },
                    { name: "Kafta (Brochettes de viande hachée persillée)", price_cents: 1500 },
                    { name: "Chich Taouk (Dés de poulet marinés)", price_cents: 1550 }
                ]
            },
            {
                category_type: "other",
                display_label: "Mezzés Chauds & Froids",
                items: [
                    { name: "Houmous Classique (Purée de pois chiches)", price_cents: 700 },
                    { name: "Moutabbal (Caviar d’aubergine fumé)", price_cents: 750 },
                    { name: "Taboulé Libanais (Persil, tomate, bourghoul)", price_cents: 750 },
                    { name: "Falafel maison (les 4 pièces)", price_cents: 700 },
                    { name: "Batata Harra (Pommes de terre sautées à l’ail)", price_cents: 650 },
                    { name: "Samboussek (Chausson viande ou fromage)", price_cents: 250 },
                    { name: "Assiette variée de 5 Mezzés", price_cents: 1450 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs d’Orient",
                items: [
                    { name: "Baklawa (Pâte feuilletée, miel, pistache)", price_cents: 600 },
                    { name: "Mouhalabié (Flan libanais à la fleur d’oranger)", price_cents: 650 },
                    { name: "Loukoum Traditionnel", price_cents: 400 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules",
                items: [
                    { name: "Menu Midi Express (E+P ou P+D)", price_cents: 1490 },
                    { name: "Menu Soir Complet (Mezzés + Plat + Dessert)", price_cents: 2990 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/baladna-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/baladna-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/baladna-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/baladna-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/baladna-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/baladna-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Surplombant la place Denfert-Rochereau, Baladna est une escale libanaise authentique qui refuse les compromis sur la qualité. Ici, les mezzés sont faits maison tous les matins et les grillades au feu de bois embaument la salle. L’ambiance est familiale, généreuse et invite au voyage culinaire entre Beyrouth et Paris. Une valeur sûre pour découvrir la finesse d'un vrai houmous et la tendreté des viandes marinées.",
    insider_tip: "Ne manquez pas le Kebbé Nayé (agneau cru au blé concassé) pour les amateurs de sensations fortes, c’est l'un des plus frais de la capitale. La terrasse ensoleillée sur la place est un vrai bonheur au printemps.",
    expert_catchline: "La quintessence du Liban à Denfert : mezzés d’une finesse rare et grillades parfumées.",
    specials: {
        cuisine: ["Méditerranéen"],
        drinks: ["Arak traditionnel", "Vin libanais (Château Musar)"],
        must_eat: "Cuisine méditerranéenne. Le Plat Baladna et le Houmous maison.",
        must_drink: "Un verre d’Arak pour ouvrir l'appétit."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine méditerranéenne. Le Plat Baladna et le Houmous maison.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
