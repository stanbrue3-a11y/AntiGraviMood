import { SurgicalPlace } from "../../../type-definition";

export const essentiel_boulangerie: SurgicalPlace = {
    id: "poi-lessentiel-boulangerie-14",
    name: "Boulangerie L’Essentiel",
    slug: "boulangerie-l-essentiel-paris-14",
    category: "café",
    subcategory: ['français'],
    location: {
        address: "Rue de l’Ouest / Rue d'Alésia, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.831512,
        lng: 2.321456,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJvW_a_ktw5kcR-H-c9tgHuGQ"
    },
    moods: {
        chill: 90,
        festif: 0,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 8:00 PM | Tuesday: 7:00 AM – 8:00 PM | Wednesday: 7:00 AM – 8:00 PM | Thursday: 7:00 AM – 8:00 PM | Friday: 7:00 AM – 8:00 PM | Saturday: 7:00 AM – 8:00 PM | Sunday: Closed",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://boulangerie-lessentiel.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 12,
        is_free: false,
        coffee_price: 2.60,
        dish_price: 10.50,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules Déjeuner",
                items: [
                    { name: "Menu complet (Sandwich + Boisson + Dessert)", price_cents: 1050 },
                    { name: "Menu Salade (Salade + Boisson + Dessert)", price_cents: 1230 },
                    { name: "Menu Duo (Sandwich + Dessert)", price_cents: 880 },
                    { name: "Menu Salade Duo (Salade + Boisson)", price_cents: 980 },
                    { name: "Menu Expresso (Café + Croissant/Pain Choco)", price_cents: 260 }
                ]
            },
            {
                category_type: "other",
                display_label: "Le Salé Artisanal",
                items: [
                    { name: "Le Parigot (Jambon Beurre Tradition)", price_cents: 490 },
                    { name: "Sandwich Signature l’Essentiel", price_cents: 600 },
                    { name: "Salade La Gauloise généreuse", price_cents: 780 },
                    { name: "Quiche Lorraine à l’ancienne", price_cents: 420 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pâtisseries & Boulangerie",
                items: [
                    { name: "L’Essentiel (Pâtisserie Signature)", price_cents: 500 },
                    { name: "Flan à la Vanille de Madagascar", price_cents: 410 },
                    { name: "Tarte Citron Meringuée", price_cents: 450 },
                    { name: "Paris-Brest de Champion", price_cents: 550 },
                    { name: "Croissant au Beurre AOP", price_cents: 120 },
                    { name: "Tourte de Meule Bio (600g)", price_cents: 480 },
                    { name: "Le Versot (Pain Signature 1kg)", price_cents: 650 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/boulangerie-l-essentiel-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/boulangerie-l-essentiel-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/boulangerie-l-essentiel-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/boulangerie-l-essentiel-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/boulangerie-l-essentiel-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/boulangerie-l-essentiel-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "Élue meilleure boulangerie d’Île-de-France en 2022, l’Essentiel porte bien son nom. Ici, on revient aux fondamentaux de la boulangerie française : levain naturel, farines bio et savoir-faire artisanal sans concession. Que ce soit pour leur pain Versot à la croûte généreuse, leurs viennoiseries pur beurre ou leurs pâtisseries fines, la qualité est constante et l’éthique de production irréprochable. C’est l’escale gourmande par excellence pour un petit-déjeuner vrai ou un déjeuner sur le pouce qui ne sacrifie jamais le goût à la rapidité.",
    insider_tip: "Ne manquez pas leur flan à la vanille de Madagascar, d’une onctuosité rare. Le pain ’Versot’ se conserve admirablement bien plusieurs jours, n'hésitez pas à en prendre une miche entière.",
    expert_catchline: "L’excellence artisanale primée, au service du goût l'état pur.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Café de Qualité", "Jus de Fruits Bio"],
        must_eat: "Cuisine française. Le Flan à la Vanille et le Pain Versot.",
        must_drink: "Un café Expresso avec un croissant au beurre."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Flan à la Vanille et le Pain Versot.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
