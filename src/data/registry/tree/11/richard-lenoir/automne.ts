import { SurgicalPlace } from '../../../type-definition';

export const automne: SurgicalPlace = {
    id: "poi-automne",
    name: "Automne",
    slug: "automne",
    category: "restaurant",
    subcategory: ['français', 'japonais'],
    location: {
        address: "11 Rue Richard Lenoir",
        arrondissement: 11,
        lat: 48.8547574,
        lng: 2.3821557,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJdznawgly5kcRxXTXI8Zkpvk"
    },
    moods: {
        chill: 60,
        festif: 5,
        culturel: 35
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 12:30–13:30, 19:30–21:30\njeudi: 12:00–13:30, 19:30–21:30\nvendredi: 12:00–13:30, 19:30–21:30\nsamedi: 12:00–13:00, 19:30–21:30\ndimanche: 12:00–13:00, 19:30–21:30",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.automne-akishige.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 110,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Estimation Vins au verre annoncés (Cave Nature / 2024)
        wine_glass: 12.00,
        // VERIFIED: Source web 2024
        coffee_price: 5.00,
        // Estimation dish_price pour la jauge : Menu Déjeuner 75€ / 3 temps ≈ 25€, Menu Dîner 110€ / 5 temps ≈ 22€ → ~25€
        dish_price: 75.00, // Menu Déjeuner (Entry Satiety)
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menu Découverte (Dîner & Week-end)",
                items: [
                    { name: "Menu en 5 étapes", price_cents: 11000, description: "Le voyage gastronomique structuré par Nobuyuki Akishige." },
                    { name: "Menu en 7 étapes", price_cents: 14500, description: "L’expérience complète du chef avec des produits nobles." },
                    { name: "Accord Mets & Vins (5 verres)", price_cents: 4500 },
                    { name: "Accord Mets & Vins (7 verres)", price_cents: 6500 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Menu Déjeuner (Mercredi au Vendredi)",
                items: [
                    { name: "Menu complet", price_cents: 7500, description: "Amuse bouche, entrée, plat au choix, dessert et mignardises." }
                ]
            },

            {
                category_type: "other",
                display_label: "Inspirations (Séquences Automne)",
                items: [
                    { name: "Saint-Jacques de Dieppe & légumes de saison", price_cents: 0 },
                    { name: "Asperges blanches, oseille & amandes fraîches", price_cents: 0 },
                    { name: "Maigre de ligne, courgettes & couteaux de plongée", price_cents: 0 },
                    { name: "Jardinière de légumes, émulsion barigoule", price_cents: 0 },
                    { name: "Tartelette de foie gras au pain d’épice & muscat", price_cents: 0 },
                    { name: "Ris de veau croustillant & champignons pied bleu", price_cents: 0 },
                    { name: "Selle de chevreuil rôtie (en saison de chasse)", price_cents: 0 },
                    { name: "Blanc manger à l’estragon & sorbet huile d'olive", price_cents: 0 },
                    { name: "Gelée de thé jasmin, crème chocolat blanc & mangue", price_cents: 0 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons & Extras",
                items: [
                    { name: "Eau minérale (75cl)", price_cents: 600 },
                    { name: "Café de spécialité", price_cents: 500 },
                    { name: "Mignardises de fin de repas", price_cents: 0 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/automne/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/automne/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/automne/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/automne/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/automne/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/automne/gallery_4.jpg"
    ]
  },
    instagram_handle: "restaurant_automne",
    michelin_stars: 1,
    verified: true,
    google_rating: 4.6,
    description: "Couronné d’une étoile Michelin, Automne est l’écrin du chef japonais Nobuyuki Akishige. Il y déploie une gastronomie française d’une technicité redoutable, magnifiée par la délicatesse et la précision de sa culture natale. Le cadre est feutré et sobre, concentrant toute l’attention sur des assiettes bluffantes, sublimées par une cave nature d’exception dirigée par le sommelier Ulysse Hivroz.",
    insider_tip: "• C’est l’adresse parfaite pour un dîner d’affaires haut de gamme ou un repas romantique où le calme et le service impeccable priment.\n• Allez-y pendant la saison de la chasse (automne/hiver) : le chef excelle dans la préparation du gibier (Selle de chevreuil) avec une subtilité rare.\n• Le menu déjeuner à 75€ du mercredi au vendredi est un excellent deal pour une table étoilée de ce calibre.",
    expert_catchline: "Haute couture gastronomique sous perfusion japonaise dans un écrin étoilé.",
    specials: {
        cuisine: ["Japonais"],
        drinks: ["Cave nature d’auteur", "Accords de 45€ à 65€"],
        must_eat: "Haute gastronomie. Laissez-vous guider par le Menu en 7 temps (145€). L’assiette star reste son ris de veau croustillant au printemps, ou ses formidables cuissons de gibier racé en hiver.",
        must_drink: "L’accord mets et vins (jusqu'à 65€) est conseillé car le sommelier déniche des quilles nature souvent introuvables par ailleurs."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Haute gastronomie. Laissez-vous guider par le Menu en 7 temps (145€). L’assiette star reste son ris de veau croustillant au printemps, ou ses formidables cuissons de gibier racé en hiver.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
