import { SurgicalPlace } from "../../../type-definition";

export const bistrot_jools: SurgicalPlace = {
    id: "poi-bistrot-jools-75014",
    name: "Bistrot JOOLS",
    slug: "bistrot-jools",
    category: "restaurant",
    subcategory: ["bistrot", "francaise"],
    location: {
        address: "2 rue Pernety, 24 Rue Didot, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8325761,
        lng: 2.3204988,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJtyCvRgBx5kcRDicVh793gls"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Tuesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Saturday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Sunday: Closed | Monday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://bistrotjoolsparis.fr/fr",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        dish_price: 18,
        menu_type: "standard",
        last_updated: "2026-05-20",
        menu_items: []
    },
    images: {
        hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-jools/hero.jpg",
        gallery: [
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-jools/photo_1.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-jools/photo_2.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-jools/photo_3.jpg",
            "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrot-jools/photo_4.jpg"
        ]
    },
    verified: true,
    google_rating: 4.9,
    description: "Des banquettes en cuir rouge et des tables en bois sombre créent l'atmosphère de cette adresse de quartier située rue Pernety. La salle claire offre une ambiance calme, rythmée par le bourdonnement feutré des conversations. On y déguste une cuisine de bistrot soignée, axée sur des produits frais de saison et des assiettes simples.",
    insider_tip: "• Réservez pour le déjeuner en semaine car les tables se remplissent rapidement.\n• Les frites maison qui accompagnent les plats sont particulièrement réussies.\n• Installez-vous près de la grande vitrine pour profiter de la lumière naturelle.",
    expert_catchline: "Cuisine de quartier soignée et atmosphère détendue à deux pas de la rue Didot.",
    specials: {
        cuisine: ["bistrot", "francaise"],
        drinks: ["Sélection de Bières Pression", "Vins de Propriétaire"],
        must_eat: "Les frites de la maison avec le plat du jour.",
        must_drink: "Un verre de vin rouge choisi à l'ardoise."
    },
    source: "expert_human",
    real_talk: {
        text: "Une table de quartier soignée et d'une belle régularité.",
        must_eat: "Les frites de la maison avec le plat du jour.",
        le_secret: "La proximité avec la rue Pernety.",
        le_son: "Le bourdonnement feutré des conversations.",
        le_must: "L'accueil prévenant."
    }
};
