import { SurgicalPlace } from "../../../type-definition";

export const a_mi_chemin: SurgicalPlace = {
    id: "poi-a-mi-chemin-75014",
    name: "A Mi-Chemin",
    slug: "a-mi-chemin-paris-14",
    category: "restaurant",
    subcategory: ['marocain'],
    location: {
        address: "31 Rue Boulard, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8330501,
        lng: 2.3285528,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: ["4", "6", "B"],
        google_id: "ChIJr3W74rZx5kcRdNJLoL4acHw"
    },
    moods: {
        chill: 90,
        festif: 20,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: Closed | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:30 PM | Saturday: 11:30 AM – 3:00 PM, 7:00 – 10:30 PM | Sunday: 11:30 AM – 3:00 PM",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.restaurant-amichemin.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        dish_price: 22, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Fusion Franco-Tunisienne",
                items: [
                    { name: "Couscous Royal aux 7 Légumes", price_cents: 2400 },
                    { name: "Tajine de Veau aux Pruneaux et Amandes", price_cents: 2250 },
                    { name: "Poisson du Jour à la Chouchouka", price_cents: 2100 },
                    { name: "Brick à l’Oeuf Traditionnelle", price_cents: 950 },
                    { name: "Souris d’Agneau confite au Miel", price_cents: 2600 },
                    { name: "Couscous Végétarien Gourmand", price_cents: 1850 },
                    { name: "Sauté de Seiches à la Tunisienne", price_cents: 2150 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées Métissées",
                items: [
                    { name: "Houmous Crémeux Maison", price_cents: 850 },
                    { name: "Kemia de l’Artisan (Sélection d'entrées)", price_cents: 1600 },
                    { name: "Chorba de Tradition au Blé Vert", price_cents: 1000 },
                    { name: "Salade Méchouia au Thon Frais", price_cents: 1200 },
                    { name: "Merguez Artisanales Grillées", price_cents: 1100 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs d’Orient",
                items: [
                    { name: "Coupe de Pâtisseries fines du Maghreb", price_cents: 950 },
                    { name: "Orange à la Cannelle et Eau de Rose", price_cents: 850 },
                    { name: "Thé à la Menthe Fraîche (le pot)", price_cents: 600 },
                    { name: "Crème à la Cardamome et Pistaches", price_cents: 900 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-mi-chemin-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-mi-chemin-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-mi-chemin-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-mi-chemin-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-mi-chemin-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-mi-chemin-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.0,
    description: "A Mi-Chemin est une adresse unique, fruit de la rencontre entre Nordine Labiadh (tunisien) et sa femme Virginie (bretonne). Cette fusion donne naissance à une cuisine métissée d’une poésie absolue, où les épices orientales viennent s’encanailler avec les produits du marché parisien. Le décor est simple, intimiste, et le service d’une douceur extraordinaire. On y vient pour un voyage culinaire singulier où le couscous côtoie des flacons de vins naturels d'exception, créant un pont entre deux rives de la Méditerranée.",
    insider_tip: "Ne manquez pas leur tajine, d’un équilibre parfait entre le sucré et le salé. Nordine est un conteur de saveurs, laissez-le vous guider dans son univers. Les places sont limitées, la réservation est indispensable.",
    expert_catchline: "Le voyage poétique d’une fusion franco-tunisienne d'exception.",
    specials: {
        cuisine: ["Marocain"],
        drinks: ["Vins Naturels Curatés", "Thé à la Menthe Signature"],
        must_eat: "Cuisine marocaine. Le Tajine de Veau aux Pruneaux.",
        must_drink: "Un vin blanc de Loire en accord surprenant avec le couscous."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine marocaine. Le Tajine de Veau aux Pruneaux.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
