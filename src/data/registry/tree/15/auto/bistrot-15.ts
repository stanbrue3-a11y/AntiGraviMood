import { SurgicalPlace } from "../../../type-definition";

export const bistrot_15: SurgicalPlace = {
    id: "poi-bistrot-15-75015",
    name: "Bistrot 15",
    slug: "bistrot-15",
    category: "restaurant",
    subcategory: ["bistrot", "francaise"],
    location: {
        address: "1 Rue Aristide Maillol, 99 Rue Falguière, 75015 Paris, France",
        arrondissement: 15,
        lat: 48.8377799,
        lng: 2.3112591,
        nearest_metro: "Pasteur",
        metro_lines: ["6", "12"],
        google_id: "ChIJ1aA85VJx5kcRH_Jo6mIkLhY"
    },
    moods: {
        chill: 75,
        festif: 35,
        culturel: 55
    },
    practical: {
        opening_hours_raw: "lundi: 08:00 – 00:00 | mardi: 08:00 – 00:00 | mercredi: 08:00 – 00:00 | jeudi: 08:00 – 00:00 | vendredi: 08:00 – 01:00 | samedi: 08:00 – 01:00 | dimanche: 10:00 – 22:00",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.google.com/maps/place/?q=place_id:ChIJ1aA85VJx5kcRH_Jo6mIkLhY",
            label: "VOIR SUR LE PLAN"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        dish_price: 19,
        menu_type: "standard",
        last_updated: "2026-05-20",
        menu_items: []
    },
    images: {
        hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-15/hero.jpg",
        gallery: [
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-15/photo_1.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-15/photo_2.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-15/photo_3.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-15/photo_4.jpg"
        ]
    },
    verified: true,
    google_rating: 4.8,
    description: "Un bar en zinc et des tables en bois foncé meublent cette adresse discrète de la rue Falguière. La lumière tamisée en soirée accompagne une ambiance calme, propice au murmure tranquille de la salle. Le menu décline des plats ménagers soignés comme la blanquette de veau ou le confit de canard.",
    insider_tip: "• Les desserts faits maison reprennent des classiques très bien maîtrisés.\n• Le service continu l'après-midi permet de s'y arrêter pour un verre au calme.\n• Privilégiez les tables situées dans la seconde salle pour plus de tranquillité.",
    expert_catchline: "Cuisine ménagère traditionnelle et verres ardoisés près de la rue Falguière.",
    specials: {
        cuisine: ["bistrot", "francaise"],
        drinks: ["Sélection de Vins au Verre", "Café de Spécialité"],
        must_eat: "Le confit de canard maison croustillant.",
        must_drink: "Un verre de Brouilly choisi à l'ardoise."
    },
    source: "expert_human",
    real_talk: {
        text: "Une halte de quartier très soignée.",
        must_eat: "Le confit de canard maison.",
        le_secret: "La seconde salle plus intime.",
        le_son: "Le murmure tranquille de la salle.",
        le_must: "Le service en continu."
    }
};

export default bistrot_15;
