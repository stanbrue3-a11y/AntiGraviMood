import { SurgicalPlace } from "../../../type-definition";

export const petit_sommelier: SurgicalPlace = {
    id: "poi-petit-sommelier-75014",
    name: "Le Petit Sommelier",
    slug: "le-petit-sommelier-paris-14",
    category: "restaurant",
    subcategory: ['français', 'terrasse'],
    location: {
        address: "49 Avenue du Maine, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8398125,
        lng: 2.3218524,
        nearest_metro: "Montparnasse-Bienvenüe",
        metro_lines: ["4", "6", "12", "13"],
        google_id: "ChIJK-0NQMtx5kcRT2guyXzQChc"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 95
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Tuesday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Wednesday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Thursday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Friday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Saturday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "book",
            url: "http://www.lepetitsommelier.paris/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        dish_price: 24,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Entrées du Sommelier",
                items: [
                    { name: "Pâté en Croûte Maison (Cochon, Veau, Boudin Noir)", price_cents: 1690 },
                    { name: "Foie Gras de Canard Marbré", price_cents: 2290 },
                    { name: "6 Huîtres N°3 Joël Dupuch (Arcachon)", price_cents: 1990 },
                    { name: "Planche du Petit Sommelier (Charcuteries fines)", price_cents: 1490 },
                    { name: "Saumon Label Rouge Gravlax à l’aneth", price_cents: 1190 },
                    { name: "Os à Moelle Gratinée", price_cents: 1350 },
                    { name: "Cuisses de Grenouilles en Fricassée", price_cents: 1490 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats de Tradition",
                items: [
                    { name: "Le Boeuf Bourguignon Grande Tradition (12h de cuisson)", price_cents: 2490 },
                    { name: "Ris de Veau aux Trompettes de la Mort", price_cents: 5500 },
                    { name: "Poulpe Grillé à la Plancha, Riz Noir", price_cents: 2690 },
                    { name: "Vol-au-Vent de Pintade Fermière au Vin Jaune", price_cents: 2290 },
                    { name: "Tartare de Boeuf au couteau, frites fraîches", price_cents: 2190 },
                    { name: "Entrecôte Aberdeen Angus (Argentine)", price_cents: 3990 },
                    { name: "Côte de Boeuf Normande (pour 2, ~1.2kg)", price_cents: 11000 },
                    { name: "Pêche du jour confite à l’huile d'olive", price_cents: 2290 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Final en Douceur",
                items: [
                    { name: "Millefeuille Érable et Fleur d’Oranger", price_cents: 1390 },
                    { name: "Baba au Rhum Traditionnel", price_cents: 1290 },
                    { name: "Crème Brûlée Sauge & Passion", price_cents: 1290 },
                    { name: "Mousse Chocolat Liégeois au miel", price_cents: 1290 },
                    { name: "Assiette de Fromages Affinés", price_cents: 1890 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-sommelier-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-sommelier-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-sommelier-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-sommelier-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-sommelier-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-sommelier-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Le Petit Sommelier est bien plus qu’une brasserie, c’est l’un des meilleurs repaires bachiques de la capitale. Sous la houlette de Pierre Vila Palleja, sommelier de haut vol, cette institution de l’avenue du Maine concilie avec brio une cuisine bourgeoise impeccablement exécutée et une carte des vins vertigineuse (plus de 1300 références). Le décor, entre bistro traditionnel et cabinet de dégustation élégant, convie à la flânerie gourmande. Que ce soit pour un Boeuf Bourguignon de légende ou une dégustation de pépites de vignerons, l’accueil y est toujours empreint d'une passion contagieuse.",
    insider_tip: "Faites aveuglément confiance au sommelier pour les accords mets-vins, la carte recèle des trésors introuvables ailleurs. Le Vol-au-Vent au vin jaune est son chef-d’oeuvre absolu.",
    expert_catchline: "Haute sommellerie et gastronomie bourgeoise face à la Tour Montparnasse.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Carte des Vins Exceptionnelle", "Spiritueux Fins"],
        must_eat: "Cuisine de bistrot. Le Pâté en Croûte maison et le Boeuf Bourguignon.",
        must_drink: "Une pépite dénichée par Pierre dans la cave monumentale."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Le Pâté en Croûte maison et le Boeuf Bourguignon.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
