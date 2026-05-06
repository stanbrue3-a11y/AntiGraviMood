import { SurgicalPlace } from '../../../type-definition';

export const kubri: SurgicalPlace = {
    id: "poi-kubri",
    name: "Kubri",
    slug: "kubri",
    category: "restaurant",
    subcategory: ['méditerranéen', 'français'],
    location: {
        address: "108 Rue Amelot",
        arrondissement: 11,
        lat: 48.86305,
        lng: 2.3673334,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJE3_8yTBv5kcRNtfiFlNQ8s8"
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:30, 19:00–22:30\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 12:00–15:00, 19:00–22:30\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.kubri-restaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 26, // MANUAL: Tabak (plats) souvent 25-26€ (poulet lala, veau laqué).
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus",
                items: [
                    // VERIFIED: Mises à jour récentes (2024-2025)
                    { name: "Formule Déjeuner", price_cents: 2500, description: "Salade ou chou/kibbeh + plat + dessert ou accompagnement + boisson chaude" }
                ]
            },
            {
                category_type: "other",
                display_label: "Entrées",
                items: [
                    { name: "Kubri Hummus (zaatar, dukka)", price_cents: 900 },
                    { name: "Baba Ghanouj fumé, salsa de noix", price_cents: 1100 },
                    { name: "Beef Pesto Hummus (filet de bœuf)", price_cents: 1400 },
                    { name: "Labneh fouetté, broccolini grillé, feta", price_cents: 1200 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "À Partager",
                items: [
                    // VERIFIED: Plats 9-16€
                    { name: "Halloumi Kataif Rolls, miel pimenté", price_cents: 1300, description: "Le plat signature absolu." },
                    { name: "Kubri Fried Chicken, toum citron", price_cents: 1500 },
                    { name: "Tartare d’agneau, kammouné, radis rose", price_cents: 1600 },
                    { name: "Poulpe Imsabaha", price_cents: 1600 },
                    { name: "Falafel Chips, salsa tomate & jalapeño", price_cents: 1000 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: Plats 25-26€ (jusqu'à la côte de bœuf)
                    { name: "Lala Roasted Chicken (toum, labneh citron noir)", price_cents: 2500 },
                    { name: "Veau Laqué à la mélasse de dattes", price_cents: 2600 },
                    { name: "Shortrib de bœuf, épices chawarma, confit tomate", price_cents: 2600 },
                    { name: "Tajen de Daurade", price_cents: 2500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Nammoura Amande-Citron", price_cents: 900 },
                    { name: "Halwa Glacé (amande, pistache, chocolat noir)", price_cents: 900 },
                    { name: "Gâteau Pistache (ashta, compotée de cerises noires)", price_cents: 900 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kubri/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kubri/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kubri/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kubri/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kubri/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kubri/gallery_4.jpg"
    ]
  },
    instagram_handle: "kubri.paris",
    verified: true,
    google_rating: 4.8,
    description: "La gastronomie libanaise modernisée à son apogée. Kubri dynamite les codes du mezze classique : les assiettes sont créatives, punchy et pensées pour le partage de masse. Halloumi rolls au miel pimenté, tartare d’agneau sublime, poulet laqué citron noir... L'ambiance est survoltée, chaleureuse, parfait pour une table de potes.",
    insider_tip: "• Les ’Halloumi Kataif Rolls’ (rouleaux de halloumi frits au miel, 13€) sont le banger absolu de la carte.\n• Venez à plusieurs (3-4) pour pouvoir rayer quasiment toute la carte des mezzes (9-16€).\n• La formule dej à 25€ (3 plats + boisson chaude) est l’un des meilleurs deals d’Oberkampf.\n• Très compliqué d’avoir une table le week-end sans anticiper, réservez en ligne.",
    expert_catchline: "La bistronomie libanaise explosive qui ringardise les vieux mezzes. Halloumi rolls incroyables.",
    specials: {
        cuisine: ["Méditerranéen"],
        drinks: ["Mocktails floraux", "Vins méditerranéens", "Cocktails à l’Arak"],
        must_eat: "Cuisine méditerranéenne. Vous devez impérativement tester l’Halloumi frit au miel et le poulet Kubri Fried Chicken. En plat, le Shortrib épices chawarma est d’une tendreté redoutable.",
        must_drink: "Les limonades libanaises maison ou fiez-vous aux bouteilles de la plaine de la Bekaa pour l’immersion."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine méditerranéenne. Vous devez impérativement tester l’Halloumi frit au miel et le poulet Kubri Fried Chicken. En plat, le Shortrib épices chawarma est d",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
