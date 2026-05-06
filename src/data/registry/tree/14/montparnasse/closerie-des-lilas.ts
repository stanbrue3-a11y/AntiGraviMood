import { SurgicalPlace } from "../../../type-definition";

export const closerie_des_lilas: SurgicalPlace = {
    id: "poi-closerie-des-lilas",
    name: "La Closerie des Lilas",
    slug: "la-closerie-des-lilas",
    category: "restaurant",
    subcategory: ['français', 'terrasse'],
    location: {
        address: "171 Boulevard du Montparnasse, 75006 Paris, France",
        arrondissement: 14, // Traditionally associated with 14th/Montparnasse
        lat: 48.8401436,
        lng: 2.3360432,
        nearest_metro: "Port-Royal",
        metro_lines: ["RER B"],
        google_id: "ChIJD0MBxsZx5kcREfMy9IsrUTo"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 PM – 1:30 AM | Tuesday: 12:00 PM – 1:30 AM | Wednesday: 12:00 PM – 1:30 AM | Thursday: 12:00 PM – 1:30 AM | Friday: 12:00 PM – 1:30 AM | Saturday: 12:00 PM – 1:30 AM | Sunday: 12:00 PM – 1:30 AM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "book",
            url: "https://www.closeriedeslilas.fr/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 75,
        is_free: false,
        dish_price: 48,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "L’Écailler & Crustacés",
                items: [
                    { name: "Plateau Royal Closerie (Homard, Tourteau, Huîtres, Langoustines)", price_cents: 11500 },
                    { name: "Plateau Dégustation", price_cents: 5400 },
                    { name: "Huîtres Gillardeau N°3 (les 6)", price_cents: 3400 },
                    { name: "Huîtres Brittany N°1 (les 6)", price_cents: 2340 },
                    { name: "Langoustines Royales fraîches", price_cents: 3800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Légendes Hemingway",
                items: [
                    { name: "Le Célèbre Filet de Boeuf Hemingway", price_cents: 5200, description: "Flambé au poivre, la signature historique du lieu." },
                    { name: "Tartare de Boeuf Classique Closerie", price_cents: 3200 },
                    { name: "Quenelle de Brochet Sauce Nantua", price_cents: 4800 },
                    { name: "Sole Meunière de nos Côtes (500g)", price_cents: 5800 },
                    { name: "Ris de Veau doré au sautoir", price_cents: 5200 },
                    { name: "Pavé de Cabillaud à la vapeur, vierge de légumes", price_cents: 4200 },
                    { name: "Riz de Veau aux Morilles", price_cents: 5400 },
                    { name: "Epaule d’Agneau confite 7 heures", price_cents: 4500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs & Classiques",
                items: [
                    { name: "Profiteroles au Chocolat Chaud", price_cents: 1600 },
                    { name: "Crêpes Suzette flambées en salle", price_cents: 2200 },
                    { name: "Millefeuille à la Vanille Bourbon", price_cents: 1800 },
                    { name: "Soufflé au Grand Marnier", price_cents: 2100 },
                    { name: "Baba au Rhum Ambré ’Closerie'", price_cents: 1900 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cocktails Signature",
                items: [
                    { name: "Hemingway Special (Rhum, Pamplemousse, Marasquin)", price_cents: 2200 },
                    { name: "Jazz à la Closerie", price_cents: 2100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-closerie-des-lilas/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-closerie-des-lilas/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-closerie-des-lilas/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-closerie-des-lilas/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-closerie-des-lilas/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-closerie-des-lilas/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.3,
    description: "La Closerie des Lilas n’est pas qu’un restaurant, c’est un fragment vivant de l’histoire littéraire de Paris. Depuis 1847, ce lieu mythique a vu défiler Baudelaire, Verlaine, Hemingway, Fitzgerald et tant d’autres. Divisé en trois espaces — le bar à cocktails feutré, la brasserie animée et le restaurant gastronomique sous verrière — il conserve une atmosphère unique de salon intellectuel permanent. Les banquettes de cuir rouge portent encore les noms des illustres habitués, gravés sur des plaques de cuivre. Entre les lilas de la terrasse et les notes de piano qui s’échappent du bar, le temps semble s’être arrêté dans ce sanctuaire du chic rive gauche.",
    insider_tip: "Demandez la table de Hemingway au bar pour un cocktail en solo, ou installez-vous sous la verrière du restaurant pour un dîner romantique hors du temps. Ne manquez pas le Filet Hemingway, une institution inchangée depuis des décennies.",
    expert_catchline: "Le sanctuaire mythique des lettres et des arts à Montparnasse.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Cocktails Historiques", "Vins d’Exception"],
        must_eat: "Cuisine française. Le Filet de Boeuf Hemingway flambé.",
        must_drink: "Un Hemingway Special au mythique piano-bar."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Filet de Boeuf Hemingway flambé.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
