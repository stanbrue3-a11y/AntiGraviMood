import { SurgicalPlace } from "../../../type-definition";

export const la_coupole: SurgicalPlace = {
    id: "poi-la-coupole",
    name: "La Coupole",
    slug: "la-coupole",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "102 Boulevard du Montparnasse, 75014 Paris",
        arrondissement: 14,
        lat: 48.8422546,
        lng: 2.3279506,
        nearest_metro: "Vavin",
        metro_lines: [4],
        google_id: "ChIJYafZxs5x5kcRiDaXQXadCBY"
    },
    moods: {
        chill: 50,
        festif: 40,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Lundi: 08:00–00:00 | Mardi: 08:00–00:00 | Mercredi: 08:00–00:00 | Jeudi: 08:00–00:00 | Vendredi: 08:00–00:00 | Samedi: 08:00–00:00 | Dimanche: 08:00–00:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lacoupole-paris.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 9.50,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 25.50, // MÉDIAN des plats signatures (Choucroutes & Currys)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Les Grands Classiques de La Coupole",
                items: [
                    { name: "Curry d’agneau à l'indienne (Mythique depuis 1927)", price_cents: 2550, description: "Servi à la voiture, riz basmati & chutney." },
                    { name: "Choucroute Royale (Saucisse Francfort, échine, jarret)", price_cents: 2550 },
                    { name: "Choucroute de la Mer (Haddock, saumon, gambas)", price_cents: 2800 },
                    { name: "Filet de bar rôti, légumes de saison", price_cents: 2600 },
                    { name: "Tartare de bœuf charolais, frites fraîches", price_cents: 2100 },
                    { name: "Confit de canard du Sud-Ouest", price_cents: 2300 },
                    { name: "Suprême de volaille aux champignons", price_cents: 2200 }
                ]
            },
            {
                category_type: "other",
                display_label: "Écailler & Banc de Fruits de Mer",
                items: [
                    { name: "Petit Plateau (Huîtres, crevettes, bulots)", price_cents: 3900 },
                    { name: "Grand Plateau La Coupole", price_cents: 7900 },
                    { name: "Huîtres Fines de Claire N°3 (les 6)", price_cents: 1860 },
                    { name: "Bulots, mayonnaise maison", price_cents: 1080 },
                    { name: "Crevettes roses Label Rouge", price_cents: 1500 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules Parisiennes",
                items: [
                    { name: "Menu Boulevard (E+P ou P+D) - Midi", price_cents: 1990 },
                    { name: "Menu Tradition (Entrée + Plat + Dessert)", price_cents: 3400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Historiques",
                items: [
                    { name: "Baba au rhum ambré, chantilly", price_cents: 1150 },
                    { name: "Millefeuille à la vanille Bourbon", price_cents: 1150 },
                    { name: "Profiteroles au chocolat chaud Valrhona", price_cents: 1250 },
                    { name: "Crème brûlée à la cassonade", price_cents: 1000 },
                    { name: "Tarte Tatin, crème fraîche", price_cents: 1100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-coupole/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-coupole/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-coupole/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-coupole/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-coupole/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-coupole/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "Plus qu’une brasserie, La Coupole est un temple de l’Art Déco et le cœur battant de l’histoire intellectuelle de Montparnasse. Sous ses célèbres piliers peints par les artistes de l’époque, on y déguste les grands classiques du répertoire français : choucroutes impériales, plateaux de fruits de mer somptueux et surtout son mythique curry d’agneau à l’indienne, servi à la voiture depuis 1927. Un spectacle permanent où le Paris d’hier rencontre celui d’aujourd’hui.",
    insider_tip: "Ne manquez pas le curry d’agneau servi à la voiture, un rituel historique inchangé depuis l'ouverture en 1927. Pensez à lever les yeux pour admirer les chapiteaux décorés par les élèves de Fernand Léger.",
    expert_catchline: "Le temple Art Déco de Montparnasse : choucroutes légendaires et curry mythique depuis 1927.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Grands classiques français", "Champagnes de prestige"],
        must_eat: "Cuisine française. Le Curry d’agneau à l’indienne (servi à la voiture) et la Choucroute de La Coupole.",
        must_drink: "Une coupe de champagne pour célébrer l’ambiance des années folles."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Curry d’agneau à l",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
