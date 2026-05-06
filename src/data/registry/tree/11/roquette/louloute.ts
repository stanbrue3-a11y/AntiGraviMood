import { SurgicalPlace } from '../../../type-definition';

export const louloute: SurgicalPlace = {
    id: "poi-louloute",
    name: "Louloute",
    slug: "louloute",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "55 Rue de Charonne",
        arrondissement: 11,
        lat: 48.8534205,
        lng: 2.3787701,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJq5hC3E1z5kcR9l8s4grTP28"
    },
    moods: {
        chill: 30,
        festif: 60,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 17:00–23:30\nmercredi: 17:00–01:30\njeudi: 17:00–01:30\nvendredi: 17:00–01:30\nsamedi: 17:00–01:30\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.louloute.paris/",
            label: "PROGRAMMATION / RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 16, // MANUAL: Assiettes à partager, médiane calculée sur les mets principaux du soir (15€, 15€, 17€, 19€).
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "sharing",
                display_label: "Apéritifs / Tapas (dès 17h30)",
                items: [
                    // VERIFIED: louloute.paris (2024-2025)
                    { name: "Guacamole, crudités à dipper", price_cents: 900 },
                    { name: "Falafels (pois chiches, fèves, gouda cumin, sauce tahini harissa)", price_cents: 900 },
                    { name: "Frites de polenta, ketchup maison", price_cents: 800 },
                    { name: "Taquitos (poulet, tomates, aromates, cream cheese)", price_cents: 1200 },
                    { name: "Cromesquis de Mont d’Or", price_cents: 1100 },
                    { name: "Croquettes canard confit (style Korokke), sauce aigre-douce", price_cents: 1200 },
                    { name: "Crevettes très croustillantes, shiso, chutney abricot gingembre", price_cents: 1300 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Assiettes à partager (dès 18h30)",
                items: [
                    { name: "Croustillant de chèvre, figues fraîches, miel, grenade", price_cents: 1100 },
                    { name: "Bruschetta (ail, tomates Datterino, basilic, courgettes snackées)", price_cents: 1100 },
                    { name: "Salade de freekeh, feta, figues, fruits secs, noisettes, pignons", price_cents: 1200 },
                    { name: "Beignets de fleurs de courgettes, mozzarella, anchois", price_cents: 1300 },
                    { name: "3 tortillas, houmous, cèpes grillés, poivrons, pesto", price_cents: 1300 },
                    { name: "Plateau de 3 pitas au kefta, sauce tahini", price_cents: 1400 },
                    { name: "Tartare de Bœuf, œuf de caille, bergamote, paille de patates", price_cents: 1500 },
                    { name: "Ceviche de Cabillaud, radis, gingembre, citron", price_cents: 1500 },
                    { name: "2 Bao buns O’fish, sauce tartare", price_cents: 1400 },
                    { name: "Poulpe snacké à la Levantine, batata harra coriandre", price_cents: 1600 },
                    { name: "Parmigiana d’aubergine aux boulettes, salade d'herbes", price_cents: 1500 },
                    { name: "Bœuf ’Tiger’s tears’ style, riz thaï", price_cents: 1700 }
                ]
            },
            {
                category_type: "main",
                display_label: "Grands plats du jour",
                items: [
                    { name: "Plat du jour (viande ou poisson, change quotidiennement)", price_cents: 1900 },
                    { name: "Plat du jour végétarien", price_cents: 1500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Tiramisu fraises, poivre, basilic", price_cents: 800 },
                    { name: "Fondant pur chocolat, piment, glace à l’eau de rose", price_cents: 800 },
                    { name: "Tiramisu café", price_cents: 800 },
                    { name: "Profiteroles au chocolat", price_cents: 800 },
                    { name: "Pandoro perdu au zeste d’orange", price_cents: 800 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins & Cocktails",
                items: [
                    { name: "Verre de vin nature (à partir de)", price_cents: 900 },
                    { name: "Cocktail création du barman", price_cents: 1200 },
                    { name: "Guinness pression", price_cents: 800 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louloute/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louloute/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louloute/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louloute/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louloute/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/louloute/gallery_4.jpg"
    ]
  },
    instagram_handle: "louloute.paris",
    verified: true,
    google_rating: 4.7,
    description: "Le bar à manger le plus musical du 11ème. Louloute est un pur hybride : au rez-de-chaussée, on partage d’excellentes assiettes aux influences franco-italiennes (tartares, ceviches, fleurs de courgettes frites) accompagnées de vins natures. L'apothéose se trouve au sous-sol : un authentique club de jazz caché en cave voûtée, avec programmation pointue et jam sessions endiablées.",
    insider_tip: "• Pensez à vérifier la programmation en ligne : les concerts (Jazz, Soul, Latin) au sous-sol démarrent souvent vers 20h30/21h00.\n• Prévoyez de manger au RDC avant de descendre boire un verre pour le concert.\n• Les beignets de fleurs de courgettes (13€) et le tartare (15€) font l’unanimité.\n• Ouvert un peu plus tôt que les autres (dès 17h00) pour un afterwork pré-concert.",
    expert_catchline: "Bistronomie incisive au rez-de-chaussée, jazz club clandestin au sous-sol. Duo gagnant rue de Charonne.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Vins natures purs jus", "Cocktails création", "Guinness pression"],
        must_eat: "Cuisine italienne. Contrairement aux clubs classiques qui négligent la nourriture, ici les assiettes sont de vraies claques (goûtez les keftas en pita).",
        must_drink: "Laissez le barman improviser un cocktail ’sur mesure' en fonction du style sonore du soir."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Contrairement aux clubs classiques qui négligent la nourriture, ici les assiettes sont de vraies claques (goûtez les keftas en pita).",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
