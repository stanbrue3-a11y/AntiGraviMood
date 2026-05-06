import { SurgicalPlace } from '../../../type-definition';

export const lacigne: SurgicalPlace = {
    id: "poi-lacigne",
    name: "Lacigne",
    slug: "lacigne",
    category: "restaurant",
    subcategory: ['fusion'],
    location: {
        address: "124 Avenue Parmentier",
        arrondissement: 11,
        lat: 48.8679649,
        lng: 2.3728093,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJTx-97HJt5kcRkJVKq9y9ykg"
    },
    moods: {
        chill: 90,
        festif: 10,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "Lun-Sam: 12:00–15:00, Mer-Sam: 19:00–22:00; Fermé Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/lacigne.paris",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 4.50,
        dish_price: 16.00, // MÉDIAN du Donburi (Plat unique)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-10",
        menu_items: [
            // VERIFIED: Lacigne 2025 Seasonal (Japanese Fusion)
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus",
                items: [
                    { name: "Formule Déjeuner (E+P+Mochi)", price_cents: 2200, description: "Le meilleur deal du quartier." },
                    { name: "Menu Omakase (Dîner)", price_cents: 4500, description: "Carte blanche du chef Daisuke Kikuchi." }
                ]
            },
            {
                category_type: "other",
                display_label: "L’Art du Mochi (Pâtisserie)",
                items: [
                    { name: "Mochi Matcha Azuki", price_cents: 550, description: "Mochi frais, texture nuageuse." },
                    { name: "Mochi Framboise Litchi", price_cents: 550 },
                    { name: "Mochi Soja vert grillé & Umeboshi", price_cents: 600 },
                    { name: "Boîte de 6 Mochis (Take-away)", price_cents: 3000 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats (Donburi)",
                items: [
                    { name: "Donburi du jour", price_cents: 1600 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Soupes",
                items: [
                    { name: "Entrée de saison (Sashimi/Tofu)", price_cents: 900 },
                    { name: "Soupe Miso artisanale", price_cents: 450 }
                ]
            },
            {
                category_type: "other",
                display_label: "Thés & Cafés",
                items: [
                    { name: "Matcha Latte (Ceremonial)", price_cents: 650 },
                    { name: "Sencha Supérieur", price_cents: 550 },
                    { name: "Café de spécialité", price_cents: 450 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lacigne/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lacigne/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lacigne/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lacigne/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lacigne/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lacigne/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.9,
    description: "Tenu par le chef Daisuke Kikuchi et son épouse Megumi, Lacigne est un sanctuaire de la pâtisserie et de la cuisine japonaise. Célèbre pour ses mochis artisanaux à la texture d’une finesse rare, le lieu propose aussi une formule déjeuner d’un rapport qualité-prix imbattable. Un écrin minimaliste sur l’Avenue Parmentier où la rigueur nippone rencontre la poésie sucrée.",
    insider_tip: "Les mochis partent très vite, surtout le Matcha Azuki. Arrivez tôt pour le déjeuner ou réservez votre boîte de mochis en avance via Instagram.",
    expert_catchline: "L’excellence du mochi artisanal et de la cuisine nippone par Daisuke Kikuchi.",
    specials: {
        cuisine: ["Cuisine d'auteur"],
        drinks: ["Thé Matcha", "Sake de dégustation", "Café de spécialité"],
        must_eat: "Cuisine créative. Le mochi Framboise Litchi, un équilibre parfait.",
        must_drink: "Un Matcha Latte préparé dans les règles de l’art."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine créative. Le mochi Framboise Litchi, un équilibre parfait.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
