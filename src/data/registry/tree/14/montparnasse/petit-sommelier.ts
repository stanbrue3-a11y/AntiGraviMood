import { SurgicalPlace } from "../../../type-definition";

export const petit_sommelier: SurgicalPlace = {
    id: "poi-petit-sommelier-75014",
    name: "Le Petit Sommelier",
    slug: "le-petit-sommelier-paris-14",
    category: "restaurant",
    subcategory: ['cave_a_manger', 'francaise'],
    location: {
        address: "49 Avenue du Maine, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8398125,
        lng: 2.3218524,
        nearest_metro: "Montparnasse - Bienvenüe",
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
    description: "Des boiseries patinées et des tables rondes habillent cette adresse de l'avenue du Maine, réputée pour sa cave aux nombreuses références. Dans une ambiance calme et propice à la dégustation, le cliquetis discret des verres accompagne des plats de la cuisine bourgeoise soignée.",
    insider_tip: "Faites confiance aux suggestions du sommelier pour des accords précis avec vos plats. Le pâté en croûte fait maison est une entrée particulièrement travaillée.",
    expert_catchline: "Haute sommellerie et gastronomie bourgeoise face à la Tour Montparnasse.",
    specials: {
        cuisine: ["cave_a_manger", "francaise"],
        drinks: ["Carte des Vins Exceptionnelle", "Spiritueux Fins"],
        must_eat: "Cuisine de bistrot. Le Pâté en Croûte maison et le Boeuf Bourguignon.",
        must_drink: "Une bouteille dénichée par le sommelier dans la cave monumentale."
    },

  real_talk: {
    text: "Une table de quartier sérieuse et sincère.",
    must_eat: "Cuisine de bistrot. Le Pâté en Croûte maison et le Boeuf Bourguignon.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux.",
    le_must: "L'accueil attentif."
  }

};
