import { SurgicalPlace } from "../../../type-definition";

export const petits_parisiens: SurgicalPlace = {
    id: "poi-petits-parisiens-75014",
    name: "Les Petits Parisiens",
    slug: "les-petits-parisiens-paris-14",
    category: "restaurant",
    subcategory: ['bistronomie', 'français'],
    location: {
        address: "33 Avenue Jean Moulin, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8249105,
        lng: 2.3203546,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJ65kTdVNx5kcRb34kg2awxac"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Tuesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Saturday: Closed | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "book",
            url: "https://petits-parisiens.fr/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 26, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "La Cuisine de Arnaud Baptiste",
                items: [
                    { name: "Poitrine de Veau rôtie aux Épices", price_cents: 2800 },
                    { name: "Paleron de Boeuf Braisé au vin rouge", price_cents: 2700 },
                    { name: "Pêche du Jour au Beurre Noisette", price_cents: 2600 },
                    { name: "Volaille Fermière rôtie au Foin", price_cents: 2500 },
                    { name: "Tartare de Boeuf au Couteau, condiment huître", price_cents: 2400 },
                    { name: "Gnocchi Maison aux Herbes de Saison", price_cents: 2200 },
                    { name: "Filet de Maquereau snacké, vierge de légumes", price_cents: 2300 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées du Bistrot",
                items: [
                    { name: "Os à Moelle Gratiné, pain de campagne", price_cents: 1200 },
                    { name: "Pâté en Croûte de Tradition", price_cents: 1600 },
                    { name: "Leeks Vinaigrette Revisités (Poireaux)", price_cents: 1100 },
                    { name: "Oeuf Cocotte aux Champignons des bois", price_cents: 1250 },
                    { name: "Carpaccio de Langue de Boeuf", price_cents: 1300 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Final en Douceur",
                items: [
                    { name: "Tartelette Chocolat et Caramel", price_cents: 1100 },
                    { name: "Mousse au Riz au Lait de Grand-Mère", price_cents: 950 },
                    { name: "Baba au Rhum Ambré et sa chantilly", price_cents: 1200 },
                    { name: "Profiterole au Chocolat Chaud", price_cents: 1100 },
                    { name: "Ardoise de Fromages de nos Régions", price_cents: 1200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-petits-parisiens-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-petits-parisiens-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-petits-parisiens-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-petits-parisiens-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-petits-parisiens-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-petits-parisiens-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Les Petits Parisiens est le digne successeur de l’esprit Régalade sur l’avenue Jean Moulin. Repris avec brio, ce bistrot chic propose une cuisine d’auteur signée Arnaud Baptiste, qui allie avec maestria les codes de la grande cuisine bourgeoise et une modernité décomplexée. Le cadre est élégant, avec ses banquettes de velours et son éclairage tamisé, créant un cocon idéal pour savourer des assiettes d’une grande justesse. C’est le nouveau repaire des gourmets du sud parisien en quête de sincérité culinaire.",
    insider_tip: "Ne manquez pas l’os à moelle, un classique parfaitement exécuté. Le menu carte blanche du chef est l’option idéale pour découvrir toute l’étendue de sa créativité. L'ambiance y est très chaleureuse en soirée.",
    expert_catchline: "La haute bistronomie de quartier, héritière de la Régalade.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Sélection de Vignerons", "Cocktails de Saison"],
        must_eat: "Cuisine de bistrot. Le Paleron de Boeuf braisé.",
        must_drink: "Un vin rouge puissant pour accompagner les plats mijotés."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Le Paleron de Boeuf braisé.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
