import { SurgicalPlace } from "../../../type-definition";

export const bistrot_campagnes: SurgicalPlace = {
    id: "poi-bistrot-campagnes-75014",
    name: "Le Bistrot des Campagnes",
    slug: "le-bistrot-des-campagnes-paris-14",
    category: "restaurant",
    subcategory: ['français', 'terrasse'],
    location: {
        address: "6 Rue Léopold Robert, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8409963,
        lng: 2.3307099,
        nearest_metro: "Raspail",
        metro_lines: ["4", "6"],
        google_id: "ChIJodz_tshx5kcRUayAaJCnP2A"
    },
    moods: {
        chill: 85,
        festif: 40,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Tuesday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Wednesday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Thursday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Friday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Saturday: 6:30 – 11:30 PM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://lebistrotdescampagnes.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 38,
        is_free: false,
        dish_price: 22, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de nos Terroirs",
                items: [
                    { name: "Andouillette de Troyes AAAAA, Frites Maison", price_cents: 2100 },
                    { name: "Confit de Canard du Sud-Ouest, Pommes Sarladaises", price_cents: 2250 },
                    { name: "Petit Salé aux Lentilles du Puy", price_cents: 1950 },
                    { name: "Blanquette de Veau à l’Ancienne", price_cents: 2300 },
                    { name: "Pot-au-Feu Traditionnel au Paleron de Boeuf", price_cents: 2050 },
                    { name: "Souris d’Agneau de Sept Heures au Romarin", price_cents: 2400 },
                    { name: "Saucisse de Toulouse Grillée, Purée", price_cents: 1850 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées Rustiques",
                items: [
                    { name: "Terrine Maison au Poivre Vert", price_cents: 950 },
                    { name: "Oeufs Cocotte au Roquefort", price_cents: 1100 },
                    { name: "Soupe à l’Oignon Gratinée au Cantal", price_cents: 1000 },
                    { name: "Salade de Lardons et de Croutons", price_cents: 1200 },
                    { name: "Os à Moelle à la Fleur de Sel", price_cents: 1300 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs de Nos Campagnes",
                items: [
                    { name: "Mousse au Chocolat à la louche", price_cents: 850 },
                    { name: "Crème Renversée au Caramel", price_cents: 750 },
                    { name: "Ile Flottante aux Pralines Roses", price_cents: 800 },
                    { name: "Tatin Tiède et son Pot de Crème", price_cents: 950 },
                    { name: "Plateau de Fromages de Région", price_cents: 1150 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-des-campagnes-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-des-campagnes-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-des-campagnes-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-des-campagnes-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-des-campagnes-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-des-campagnes-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Le Bistrot des Campagnes est une véritable invitation au voyage dans la France rurale au coeur du Paris moderne. Avec ses boiseries sombres, ses nappes à carreaux et ses affiches vintage, le décor plante le décor d’une gastronomie généreuse et sans complexe. On y vient pour retrouver les saveurs perdues de l'enfance : des mijotés longuement préparés, des produits de terroir sourcés avec soin et une ambiance conviviale inimitable. La petite terrasse est un havre de paix idéal pour savourer un bon verre de vin de pays.",
    insider_tip: "Ne faites pas l’impasse sur l'andouillette si vous êtes amateur, elle est certifiée AAAAA et parfaitement grillée. Le plateau de fromages est une sélection tournante de petits producteurs de nos régions.",
    expert_catchline: "Tout le charme et la saveur des campagnes françaises dans votre assiette.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Pichets de Vin de Pays", "Liqueurs Digestives"],
        must_eat: "Cuisine de bistrot. L’Andouillette AAAAA et le Confit de Canard.",
        must_drink: "Un rouge charpenté du Sud-Ouest."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. L’Andouillette AAAAA et le Confit de Canard.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
