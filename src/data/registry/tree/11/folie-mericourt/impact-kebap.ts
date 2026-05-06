import { SurgicalPlace } from '../../../type-definition';

export const impact_kebap: SurgicalPlace = {
    id: "poi-impact-kebap",
    name: "Impact Berliner Kebap",
    slug: "impact-kebap",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "119 Rue du Chemin Vert",
        arrondissement: 11,
        lat: 48.8617852,
        lng: 2.3828718,
        nearest_metro: "Père Lachaise",
        metro_lines: [2, 3],
        google_id: "ChIJYdb214lt5kcRfewr8U8Iiss"
    },
    moods: {
        chill: 90,
        festif: 40,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Lun-Sam: 11:00–00:00 (Ven-Sam jusqu’à 01:00); Fermé Dim",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.impact-kebap.fr",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 14,
        is_free: false,
        pint_price: 6.50,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 14.50, // Berliner Kebap Menu + drink
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Impact Berliner Kebap 2025 Standard
            {
                category_type: "other",
                display_label: "Les Kebaps (Pains ou Wraps)",
                items: [
                    { name: "Le Berliner Döner", price_cents: 800, description: "Poulet mariné, légumes grillés, feta, jus de citron." },
                    { name: "Le Berliner Dürüm", price_cents: 850, description: "Version wrap galette, plus léger." },
                    { name: "Le Classic Döner", price_cents: 700, description: "Simple, efficace, sans légumes grillés." },
                    { name: "Le Vegan Kebap (Seitan)", price_cents: 900, description: "Seitan mariné maison, feta vegan." }
                ]
            },
            {
                category_type: "drink",
                display_label: "Formules (Frites + Boisson)",
                items: [
                    { name: "Menu Döner", price_cents: 1300 },
                    { name: "Menu Dürüm", price_cents: 1350 },
                    { name: "Menu Vegan", price_cents: 1450 }
                ]
            },
            {
                category_type: "other",
                display_label: "Sides & Extra",
                items: [
                    { name: "Frites Maison (Double cuisson)", price_cents: 400 },
                    { name: "Suppléments Légumes Grillés", price_cents: 150 },
                    { name: "Extra Feta / Halloumi", price_cents: 200 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons",
                items: [
                    { name: "Bière Turque (Efes)", price_cents: 500 },
                    { name: "Ayran frais", price_cents: 350 },
                    { name: "Softs", price_cents: 300 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/impact-kebap/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/impact-kebap/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/impact-kebap/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/impact-kebap/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/impact-kebap/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/impact-kebap/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.8,
    description: "L’un des meilleurs Berliner Kebaps de la capitale. Impact ne fait pas de compromis : pain artisanal livré chaque matin, poulet mariné en direct de Rungis et légumes grillés à point. La touche spéciale ? Le mélange de feta, herbes fraîches et jus de citron qui vient ’impacter’ la gourmandise du döner classique. Une institution street-food de la rue du Chemin Vert.",
    insider_tip: "Demandez la sauce Chimichurri maison, elle apporte une acidité herbacée qui sublime la viande. Attention, l’endroit est minuscule, privilégiez le take-away aux heures de pointe.",
    expert_catchline: "Le Berliner Döner qui a redéfini le kebab dans le 11ème.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Bière Efes", "Ayran Maison"],
        must_eat: "Cuisine française. Le Berliner Döner Classique avec extra Halloumi.",
        must_drink: "Un Ayran bien frais pour le contraste thermique."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Berliner Döner Classique avec extra Halloumi.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
