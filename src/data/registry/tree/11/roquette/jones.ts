import { SurgicalPlace } from '../../../type-definition';

export const jones: SurgicalPlace = {
    id: "poi-jones",
    name: "Jones",
    slug: "jones",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "43 Rue Godefroy Cavaignac",
        arrondissement: 11,
        lat: 48.856584,
        lng: 2.380064,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJDXxdvwly5kcRIKCw1301aTc"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 19:00–22:30\nmardi: Fermé\nmercredi: Fermé\njeudi: 19:00–22:30\nvendredi: 19:00–22:30\nsamedi: 19:00–22:30\ndimanche: 19:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.jonescaferestaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 18, // MANUAL: Petites assiettes complexes (13-22€) format ’tapas bistronomique'
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Les Petites Assiettes (Entrées & Tapas)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Arancini croustillants cacio e pepe", price_cents: 900, description: "Le classique italien frit, parfait pour ouvrir l’appétit." },
                    { name: "Pamplemousse avec Brocciu et pistache", price_cents: 1200 },
                    { name: "Salade Caesar, radis, radicchio rouge et rose, suprêmes d’orange", price_cents: 1200 },
                    { name: "Hareng, crème d’anguille et betteraves", price_cents: 1400 },
                    { name: "Asperges vertes et crème d’anguille", price_cents: 1500 },
                    { name: "Bonite, ricotta fumée et sarrasin", price_cents: 1500 },
                    { name: "Burrata d’exception & poutargue", price_cents: 1600, description: "L’iode de la poutargue vient percer le gras de la burrata." }
                ]
            },
            {
                category_type: "main",
                display_label: "Pâtes & Plats Principaux",
                items: [
                    { name: "Bucatini alla puttanesca", price_cents: 1700 },
                    { name: "Spaghetti Cacio e Pepe", price_cents: 1800, description: "Pecorino Romano et poivre noir, émulsion parfaite." },
                    { name: "Raviolis Ricotta cacio e pepe", price_cents: 1900 },
                    { name: "Saint-Jacques snackées, noisettes et panais", price_cents: 2200 },
                    { name: "Onglet de bœuf de Galice", price_cents: 2400 },
                    { name: "Veau avec palourdes et brocolis", price_cents: 2400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Fromages, Desserts & Vins Natures",
                items: [
                    { name: "Assiette de fromages affinés", price_cents: 900 },
                    { name: "Gâteau chaud aux coings", price_cents: 800 },
                    { name: "Tiramisu somptueux", price_cents: 900 },
                    { name: "Chocolat, fromage blanc et café", price_cents: 900 },
                    { name: "Sorbet Poire-Oseille, poire pochée et pecorino", price_cents: 1000 },
                    { name: "Verre de vin nature (Sélection caviste)", price_cents: 700, description: "Sélection pointue et vivante, changeante chaque soir." },
                    { name: "Bouteille de vin nature (à partir de)", price_cents: 3200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jones/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jones/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jones/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jones/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jones/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jones/gallery_4.jpg"
    ]
  },
    instagram_handle: "jonescaferestaurant",
    verified: true,
    google_rating: 4.5,
    description: "Derrière sa devanture bleu nuit, Jones s’impose comme une pépite bistronomique infusée d’influences italiennes. Une salle chaleureuse (pierres grattées, vieux miroirs) accueille des assiettes millimétrées, pensées pour être partagées, où la maîtrise des sauces et des cuissons tutoie l’excellence.",
    insider_tip: "• La carte est construite sous forme de petites et moyennes assiettes. Comptez 3 à 4 assiettes pour deux pour construire un grand dîner.\n• La sélection de vins natures est parmi les plus justes du quartier, laissez le sommelier choisir pour vous.\n• Attention : le restaurant n’est ouvert que le soir, et complètement fermé le mardi et le mercredi.",
    expert_catchline: "Haute volée d’assiettes partagées italo-françaises et quilles natures acérées dans un bistrot vibrant.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Vins vivants exclusifs", "Macération pointue"],
        must_eat: "Cuisine italienne. Les déclinaisons Cacio e Pepe, signature de la maison : de l’arancini à l’ouverture, jusqu’au spaghetti en plat de résistance.",
        must_drink: "Un rouge léger du Beaujolais ou une macération de Loire pour accompagner les notes intenses des assiettes."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Les déclinaisons Cacio e Pepe, signature de la maison : de l’arancini à l’ouverture, jusqu’au spaghetti en plat de résistance.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
