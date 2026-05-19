import { SurgicalPlace } from "../../../type-definition";

export const cantinella: SurgicalPlace = {
    id: "poi-cantinella-75014",
    name: "CANTINELLA",
    slug: "cantinella",
    category: "restaurant",
    subcategory: ["italienne", "pizza", "pasta"],
    location: {
        address: "30 Rue du Faubourg Saint-Jacques, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8369363,
        lng: 2.3383804,
        nearest_metro: "Saint-Jacques",
        metro_lines: ["6"],
        google_id: "ChIJO235vMBx5kcRrHbZaiYJUXU"
    },
    moods: {
        chill: 85,
        festif: 25,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Monday: 11:45 AM – 2:30 PM, 7:00 – 10:30 PM | Tuesday: 11:45 AM – 2:30 PM, 7:00 – 10:30 PM | Wednesday: 11:45 AM – 2:30 PM, 7:00 – 10:30 PM | Thursday: 11:45 AM – 2:30 PM, 7:00 – 10:30 PM | Friday: 11:45 AM – 2:30 PM, 7:00 – 10:30 PM | Saturday: Closed | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.cantinella.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        dish_price: 16,
        menu_type: "standard",
        last_updated: "2026-05-20",
        menu_items: []
    },
    images: {
        hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cantinella/hero.jpg",
        gallery: [
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cantinella/photo_1.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cantinella/photo_2.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cantinella/photo_3.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cantinella/photo_4.jpg"
        ]
    },
    verified: true,
    google_rating: 4.8,
    description: "Des tables en bois clair et une décoration épurée caractérisent la salle lumineuse de cette adresse italienne du Faubourg Saint-Jacques. Le bruit discret du four à pizza rythme l'espace dans une ambiance calme et ordonnée. La carte met en avant des pâtes fraîches façonnées sur place et des spécialités classiques bien exécutées.",
    insider_tip: "• La pizza blanche à la truffe est une spécialité très appréciée de la maison.\n• Les pâtes fraîches servies dans leur poêlon en cuivre valent le coup d'œil.\n• Une petite sélection de vins de vignerons transalpins accompagne le repas.",
    expert_catchline: "Pâtes fraîches et pizzas soignées dans le calme d'une cour intérieure.",
    specials: {
        cuisine: ["italienne", "pizza", "pasta"],
        drinks: ["Sélection de Vins Italiens", "Limoncello de la Maison"],
        must_eat: "Les pâtes fraîches maison servies dans le poêlon.",
        must_drink: "Un verre de Montepulciano d'Abruzzo."
    },
    source: "expert_human",
    real_talk: {
        text: "Une trattoria de quartier d'une grande rigueur.",
        must_eat: "Les pâtes fraîches maison.",
        le_secret: "La cour intérieure à l'abri des regards.",
        le_son: "Le bruit discret du four.",
        le_must: "L'ambiance calme."
    }
};
