import { SurgicalPlace } from '../../../type-definition';

export const le_6_paul_bert: SurgicalPlace = {
    id: "poi-le-6-paul-bert",
    name: "Le 6 Paul Bert",
    slug: "le-6-paul-bert",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "6 Rue Paul Bert",
        arrondissement: 11,
        lat: 48.85132400000001,
        lng: 2.384674,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJI7Pv7Aty5kcRQPtif2Giv70"
    },
    moods: {
        chill: 70,
        festif: 10,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 19:00–22:00\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/le6paulbert/",
            label: "VOIR INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 27, // MANUAL: Plats à la carte 26-27€ (sources RestoSurLeGrill + RestoAParis)
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "main",
                display_label: "Formules & Menus (Plats)",
                items: [
                    { name: "Menu Déjeuner (E+P+D)", price_cents: 2600, is_highlight: true },
                    { name: "Menu-Carte Dîner (4 temps)", price_cents: 4400, is_highlight: true },
                    { name: "Expérience Dégustation (5 services)", price_cents: 7500 },
                    { name: "Accord Mets & Vins (4 verres)", price_cents: 3500 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées du Marché (Entrées)",
                items: [
                    { name: "Œuf parfait, chakchouka & herbes", price_cents: 1200, is_highlight: true },
                    { name: "Maquereau mariné, mandarine Corse", price_cents: 1400 },
                    { name: "Carpaccio de Saint-Jacques au citron", price_cents: 1600 },
                    { name: "Salade de PDT, cœurs de canard grillés", price_cents: 1500 },
                    { name: "Langue de Bœuf, condiment ravigote", price_cents: 1300 },
                    { name: "Cocos de Paimpol, jus de palourdes", price_cents: 1200 },
                    { name: "Gnocchis à l’aneth et hareng fumé", price_cents: 1500 },
                    { name: "Terrine de Campagne artisanale", price_cents: 1100 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Bistronomiques (Plats)",
                items: [
                    { name: "Paleron de Bœuf poêlé (servi rouge)", price_cents: 2700, is_highlight: true },
                    { name: "Lotte rôtie, beurre blanc agrumes", price_cents: 2800 },
                    { name: "Échine de Porc Fermier croustillante", price_cents: 2600, is_highlight: true },
                    { name: "Pintade de Challans au salsifis", price_cents: 2700 },
                    { name: "Lingot de Volaille, purée panais", price_cents: 2600 },
                    { name: "Poisson de ligne, émulsion iodée", price_cents: 2900 },
                    { name: "Cocotte de Légumes, truffe noire", price_cents: 2400 },
                    { name: "Aile de Raie au beurre noisette", price_cents: 2600 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Gourmandises (Desserts)",
                items: [
                    { name: "Mousse Chocolat noir 70%, sel fumé", price_cents: 1000, is_highlight: true },
                    { name: "Parfait Glacé Yaourt & Citron Menton", price_cents: 1000 },
                    { name: "Mille-feuille minute à la Vanille", price_cents: 1200 },
                    { name: "Pavlova aux fruits de saison", price_cents: 1100 },
                    { name: "Pot de Crème au chocolat amer", price_cents: 1000 },
                    { name: "Assiette de Fromages affinés", price_cents: 1200 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cave de Natures & Esprits (Boissons)",
                items: [
                    { name: "Verre de Vin Nature Blanc (Sélection)", price_cents: 800, is_highlight: true },
                    { name: "Verre de Vin Nature Rouge (Quille)", price_cents: 900 },
                    { name: "Vouvray ’Pétillant Naturel' (Verre)", price_cents: 1000 },
                    { name: "Eau micro-filtrée (75cl)", price_cents: 450 },
                    { name: "Café Espresso Terres de Café", price_cents: 300 },
                    { name: "Thé Vert Bio", price_cents: 500 },
                    { name: "Digestif Maison (Infusion alcoolisée)", price_cents: 900 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-6-paul-bert/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-6-paul-bert/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-6-paul-bert/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-6-paul-bert/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-6-paul-bert/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-6-paul-bert/gallery_4.jpg"
    ]
  },
    instagram_handle: "le6paulbert",
    verified: true,
    google_rating: 4.5,
    description: "Le 6 Paul Bert est la table bistronomique discrète de la rue Paul Bert dans le 11ème. La carte change quotidiennement selon le marché — paleron servi rouge, lotte rôtie au beurre blanc, pintade aux salsifis — le tout dans une cuisine ultra-saisonnière, précise et sans fioritures. La cave de vins natures et biodynamiques complète parfaitement l’expérience.",
    insider_tip: "• Le menu déjeuner à 26€ (E+P+D) est un rapport qualité-prix exceptionnel pour ce niveau de cuisine.\n• Le menu-carte dîner à 44€ offre 4 temps (entrée+poisson+viande+dessert) — le sweet spot.\n• La carte change CHAQUE JOUR — pas de plat fixe, c’est le marché qui décide.\n• La cave de vins natures est pointue et accessible.\n• Ne confondez pas avec le Bistrot Paul Bert juste à côté — c'est un restaurant différent.",
    expert_catchline: "La table bistronomique cachée de la rue Paul Bert : carte du marché quotidienne et vins natures.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins natures et biodynamiques", "Cave pointue", "Verres dès 8€"],
        must_eat: "Cuisine française. La carte change chaque jour — faites confiance au chef. Le menu-carte dîner à 44€ est l’expérience complète. Le midi à 26€ est un deal incroyable.",
        must_drink: "La cave de vins natures est le point fort — demandez conseil, les références changent souvent."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. La carte change chaque jour — faites confiance au chef. Le menu-carte dîner à 44€ est l’expérience complète. Le midi à 26€ est un deal incroyable.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
