import { SurgicalPlace } from "../../../type-definition";

export const opportun: SurgicalPlace = {
    id: "poi-opportun-75014",
    name: "L’Opportun",
    slug: "l-opportun-paris-14",
    category: "restaurant",
    subcategory: ['français', 'terrasse'],
    location: {
        address: "62 Boulevard Edgar Quinet, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8415712,
        lng: 2.3256088,
        nearest_metro: "Edgar Quinet",
        metro_lines: ["6"],
        google_id: "ChIJMegTi8tx5kcRs2jy_IIojG0"
    },
    moods: {
        chill: 70,
        festif: 50,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Tuesday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Wednesday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Thursday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Friday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Saturday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Monday: Closed | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.lopportun.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 24,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Les Lyonnaiseries de l’Opportun",
                items: [
                    { name: "Tablier de Sapeur ’Maison'", price_cents: 2250, description: "Le chef d’oeuvre lyonnais pané et frit." },
                    { name: "Quenelle de Brochet à la cuillère, sauce Nantua", price_cents: 2400 },
                    { name: "Andouillette de chez Bobosse tirée à la ficelle", price_cents: 2100 },
                    { name: "Saucisson chaud brioché et sa lentille verte", price_cents: 1850 },
                    { name: "Tête de Veau sauce gribiche", price_cents: 2450 },
                    { name: "Rosette de Lyon artisanale", price_cents: 900 },
                    { name: "Ris de Veau aux Petits Oignons", price_cents: 3200 },
                    { name: "Onglet à l’Échalote confite", price_cents: 2600 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées du Bouchon",
                items: [
                    { name: "Gâteau de Foies de Volaille maison", price_cents: 1250 },
                    { name: "Oeufs en Meurette (les vrais)", price_cents: 1450 },
                    { name: "Salade Lyonnaise (Lardons, Croutons, Oeuf Poché)", price_cents: 1350 },
                    { name: "Pâté en Croûte Richelieu", price_cents: 1400 },
                    { name: "Ravioles du Royans en gratin", price_cents: 1200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Fromages",
                items: [
                    { name: "Cervelle de Canut maison", price_cents: 950 },
                    { name: "Saint-Marcellin coulant de la Mère Richard", price_cents: 1100 },
                    { name: "Tarte à la Praline Rose de Lyon", price_cents: 950 },
                    { name: "Ile Flottante aux amandes grillées", price_cents: 850 },
                    { name: "Baba au Rhum de Serge", price_cents: 1200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-opportun-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-opportun-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-opportun-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-opportun-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-opportun-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-opportun-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "L’Opportun est un véritable bouchon lyonnais égaré boulevard Edgar Quinet, une ambassade de la gourmandise rhodanienne en plein Paris. Ici, Serge et son équipe perpétuent les traditions les plus nobles : Tablier de sapeur, quenelles sauce Nantua et Saint-Marcellin coulant. L’atmosphère est celle d’un bistrot de copains, bruyant, joyeux et sincère, où les bouteilles de beaujolais défilent sur des tables serrées. C’est franc, c’est généreux, et c’est surtout le seul endroit du quartier où l’on respecte autant le produit que le terroir de sa région d'origine.",
    insider_tip: "Ne faites pas l’impasse sur le Tablier de Sapeur, c’est la grande spécialité du chef. La sélection de vins ’nature' est également remarquable, demandez conseil pour une découverte hors des sentiers battus.",
    expert_catchline: "L’authenticité brute et joyeuse du bouchon lyonnais à Montparnasse.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins du Beaujolais", "Vins Naturels"],
        must_eat: "Cuisine française. Le Tablier de Sapeur et la Tarte à la Praline.",
        must_drink: "Un pot de Côte-du-Rhône ou un Morgon fruité."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Tablier de Sapeur et la Tarte à la Praline.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
