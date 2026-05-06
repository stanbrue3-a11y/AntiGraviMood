import { SurgicalPlace } from "../../../type-definition";

export const le_select: SurgicalPlace = {
    id: "poi-le-select-montparnasse",
    name: "Le Select",
    slug: "le-select-montparnasse",
    category: "restaurant",
    subcategory: ['français', 'terrasse'],
    location: {
        address: "99 Boulevard du Montparnasse, 75006 Paris, France",
        arrondissement: 14,
        lat: 48.8426118,
        lng: 2.3284069,
        nearest_metro: "Vavin",
        metro_lines: ["4"],
        google_id: "ChIJPcO4w85x5kcRjh9ZKp6tkPQ"
    },
    moods: {
        chill: 60,
        festif: 50,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 2:00 AM | Tuesday: 7:00 AM – 2:00 AM | Wednesday: 7:00 AM – 2:00 AM | Thursday: 7:00 AM – 2:00 AM | Friday: 7:00 AM – 2:00 AM | Saturday: 7:00 AM – 3:00 AM | Sunday: 7:00 AM – 3:00 AM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.leselect-montparnasse.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 22,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Les Grands Classiques du Select",
                items: [
                    { name: "Tartare de Boeuf Aubrac au couteau", price_cents: 2450 },
                    { name: "Confit de Canard des Landes, frites maison", price_cents: 2600 },
                    { name: "Andouillette 5A à la Chablisienne", price_cents: 2250 },
                    { name: "Onglet de Boeuf Sauce Poivre", price_cents: 2800 },
                    { name: "Pavé de Saumon, Sauce Béarnaise", price_cents: 2100 },
                    { name: "Filet de Bar à l’Huile d'Olive", price_cents: 2800 },
                    { name: "Magret de Canard, Sauce Périgourdine", price_cents: 2900 },
                    { name: "Risotto aux Champignons des bois", price_cents: 1950 },
                    { name: "Salade César au Poulet Fermier", price_cents: 1850 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées de Brasserie",
                items: [
                    { name: "Oeuf Mayo Tradition (Championnat)", price_cents: 850 },
                    { name: "Escargots de Bourgogne de chez Metzger", price_cents: 1450 },
                    { name: "Saumon Fumé & Blinis Maison", price_cents: 1800 },
                    { name: "Foie Gras de Canard, Toasts Chauds", price_cents: 1950 },
                    { name: "Harengs Pommes à l’Huile", price_cents: 1200 },
                    { name: "Tataki de Thon et Saumon", price_cents: 1600 },
                    { name: "Assiette de Planche de Charcuterie Conquet", price_cents: 1730 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs & Desserts",
                items: [
                    { name: "Tarte Tatin caramélisée, crème fraîche", price_cents: 1150 },
                    { name: "Crème Brûlée à la Vanille Bourbon", price_cents: 950 },
                    { name: "Profiteroles au Chocolat Chaud", price_cents: 1250 },
                    { name: "Baba au Rhum Ambré", price_cents: 1200 },
                    { name: "Tarte Citron façon Select", price_cents: 1050 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-select-montparnasse/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-select-montparnasse/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-select-montparnasse/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-select-montparnasse/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-select-montparnasse/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-select-montparnasse/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.1,
    description: "Le Select est la dernière grande brasserie de Montparnasse à avoir conservé son âme et son décor d’origine, sans succomber aux sirènes de la modernisation à outrance. Inauguré en 1923, il fut le refuge de la ’Lost Generation’ : Henry Miller, Ernest Hemingway et Morley Callaghan y avaient leurs habitudes. Sous ses éclairages tamisés et son plafond patiné par les années, l'atmosphère y est restée intellectuelle, artistique et profondément parisienne. Que ce soit pour un café matinal, un déjeuner de brasserie classique ou un dernier verre à deux heures du matin, Le Select incarne cette permanence du Montparnasse éternel.",
    insider_tip: "Ne cherchez pas à réserver le soir, l’établissement cultive une liberté rare à Paris. Le chocolat chaud est l’un des plus onctueux du quartier, parfait pour une pause après-midi. Les soirs de week-end, l’ambiance y est particulièrement vibrante jusqu'au petit matin.",
    expert_catchline: "Le dernier temple authentique de la Lost Generation à Montparnasse.",
    specials: {
        cuisine: ["Brasserie"],
        drinks: ["Cocktails Classiques", "Vins de Vignerons"],
        must_eat: "Cuisine de brasserie. L’Oeuf Mayo et le Confit de Canard.",
        must_drink: "Un café creme ou un cocktail au bar en zinc."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de brasserie. L’Oeuf Mayo et le Confit de Canard.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
