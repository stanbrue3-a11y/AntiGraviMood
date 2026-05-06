import { SurgicalPlace } from '../../../type-definition';

export const le_feria: SurgicalPlace = {
    id: "poi-le-feria",
    name: "Féria Café",
    slug: "le-feria",
    category: "restaurant", // Categorized as Bar so PriceEngine prioritizes the pint
    subcategory: ['tapas'],
    location: {
        address: "4 Rue du Bourg Tibourg",
        arrondissement: 4,
        lat: 48.856825,
        lng: 2.3558486,
        nearest_metro: "Hôtel de Ville",
        metro_lines: [1, 11],
        google_id: "ChIJKbFNswJu5kcRFMqaoj-mUJ4"
    },
    moods: {
        chill: 30,
        festif: 70, // Loud at night
        culturel: 0
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 11:00–02:00\nmardi: 11:00–02:00\nmercredi: 11:00–02:00\njeudi: 11:00–02:00\nvendredi: 11:00–02:00\nsamedi: 11:00–02:00\ndimanche: 10:00–02:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: false,
        main_action: {
            type: "site",
            url: "https://feria-cafe.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        pint_price: 8.00,
        hh_pint: 6.00,
        hh_time: "17h-20h", // Triggers Happy Hour computation and badge
        cocktail_price: 10.00,
        wine_glass: 0,
        coffee_price: 0,
        dish_price: 0, // Auto-calculated by compile_registry.ts via median (Pizzas, Salades)
        last_updated: "2026-03-05",
        menu_items: [
            {
                category_type: "other",
                display_label: "Drinks & Apéro",
                items: [
                    { name: "Pinte de bière", price_cents: 600 },
                    { name: "Shots (unité)", price_cents: 400 },
                    { name: "Coca Cola (33cl)", price_cents: 400 },
                    { name: "Lipton Ice Tea (33cl)", price_cents: 400 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Tapas pour accompagner",
                items: [
                    { name: "Egg toast (Foie gras, champignons)", price_cents: 900 },
                    { name: "Burratina (Huile de truffe, roquette)", price_cents: 900 },
                    { name: "Saumon Gravlax", price_cents: 900 },
                    { name: "Falafels et légumes rôtis", price_cents: 900 },
                    { name: "Oeufs cocotte, saumon fumé", price_cents: 900 },
                    { name: "Nems de poulet", price_cents: 1050 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas à partager",
                items: [
                    { name: "Margherita", price_cents: 1190 },
                    { name: "Diavola (Spianata piquante)", price_cents: 1570 },
                    { name: "La ’Hulk' (Pesto verde, stracciatella)", price_cents: 1670 },
                    { name: "Tartufo (Crème de truffe, copeaux)", price_cents: 2490 }
                ]
            },
            {
                category_type: "main",
                display_label: "Brasserie & Plats",
                items: [
                    { name: "Salade Falafels et rôtis", price_cents: 1300 },
                    { name: "Salade César", price_cents: 1300 },
                    { name: "Poke bowl (Saumon, avocat, mangue)", price_cents: 1300 },
                    { name: "Suprême de poulet", price_cents: 1300 },
                    { name: "Feria Burger", price_cents: 1300 },
                    { name: "Poisson cuit sur peau", price_cents: 1300 },
                    { name: "Cassolette de boulettes, linguine", price_cents: 1300 },
                    { name: "Poulet fermier rôti, purée patate douce", price_cents: 1400 },
                    { name: "Tartare de boeuf, frites fraîches", price_cents: 1450 },
                    { name: "Onglet de boeuf rôti", price_cents: 1650 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Brunch",
                items: [
                    { name: "Crêpes au sucre", price_cents: 550 },
                    { name: "Cheesecake en pot, Nutella", price_cents: 700 },
                    { name: "Pain perdu, fruits rouges", price_cents: 700 },
                    { name: "Tiramisu", price_cents: 750 },
                    { name: "Crème brûlée", price_cents: 750 },
                    { name: "Brunch Buffet à Volonté (Week-end)", price_cents: 3100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-feria/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-feria/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-feria/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-feria/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-feria/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-feria/gallery_4.jpg"
    ]
  },
    instagram_handle: "feriacafe_paris",
    verified: true,
    google_rating: 4.3,
    description: "Installé en plein cœur du Marais rue du Bourg Tibourg, le Féria est un formidable lieu hybride. Festif et bruyant le soir autour d’une pinte (la terrasse est littéralement prise d’assaut à la moindre éclaircie), il se révèle aussi être une sacrée cantine. L’adresse carbure à l'énergie, enchaînant cocktails, pizzas denses et un gargantuesque brunch dominical à volonté.",
    insider_tip: "• Si vous cherchez de l’intimité pour un premier date calme, fuyez. Ici l’ambiance grimpe très vite en décibels dès 19h.\n• En semaine, attaquez-vous sans hésiter à la solide Pizza ’La Hulk' (Pesto verde & Stracciatella).\n• Pinte très honnête à 6€ en HH pour ce quartier hyper-central.",
    expert_catchline: "Repaire hybride redoutable du Marais : pintes en terrasse le soir, et brunch XXL à volonté le week-end.",
    specials: {
        cuisine: ["Espagnol"],
        drinks: ["Pinte blonde HH", "Shots", "Cocktails création"],
        must_eat: "Cuisine espagnole (Tapas). L’équipe du bar envoie une batterie de tapas bien sourcés pour l’apéro : mention spéciale aux nems de poulet (10,50€). Côté brasserie pure, on frappe au cœur des pizzas napolitaines ou sur l’artillerie lourde du grand brunch buffet.",
        must_drink: "L’arsenal parfait pour le quartier : pintes à 6€ en HH, pichets et une redoutable carte de cocktails pour enflammer la soirée dans une ambiance très vivante."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine espagnole (Tapas). L’équipe du bar envoie une batterie de tapas bien sourcés pour l’apéro : mention spéciale aux nems de poulet (10,50€). Côté brasserie pure, on frappe au cœur des pizzas napolitaines ou sur l’artillerie lourde du grand brunch buffet.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
