import { SurgicalPlace } from "../../../type-definition";

export const jazz_cafe_montparnasse: SurgicalPlace = {
    id: "poi-jazz-cafe-montparnasse",
    name: "Jazz Café Montparnasse",
    slug: "jazz-cafe-montparnasse",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "13 Rue du Commandant René Mouchotte, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8389991,
        lng: 2.320896,
        nearest_metro: "Gaîté",
        metro_lines: ["13"],
        google_id: "ChIJVVVVzspx5kcR-5LwER4FSEE"
    },
    moods: {
        chill: 40,
        festif: 70,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: 6:30 PM – 2:00 AM | Tuesday: 6:30 PM – 2:00 AM | Wednesday: 6:30 PM – 2:00 AM | Thursday: 6:30 PM – 2:00 AM | Friday: 6:30 PM – 2:00 AM | Saturday: 6:30 PM – 2:00 AM | Sunday: Closed",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "book",
            url: "https://jazzcafemontparnasse.fr/",
            label: "RÉSERVER DÎNER-CONCERT"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        dish_price: 22,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Starters & Shared Plates",
                items: [
                    { name: "Planche Mixte (Charcuteries & Fromages)", price_cents: 2600 },
                    { name: "Foie Gras de Canard, Chutney de Saison", price_cents: 2100 },
                    { name: "Crème de Saint-Jacques au St Marcellin", price_cents: 800 },
                    { name: "Gaspacho Andalou & Quenelle Guacamole", price_cents: 700 },
                    { name: "Gratinée à l’Oignon Traditionnelle", price_cents: 700 },
                    { name: "Carpaccio de Boeuf au Miel", price_cents: 1200 },
                    { name: "Tentacules de Poulpe Caramélisés", price_cents: 1400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats de la Scène",
                items: [
                    { name: "Belle Entrecôte (300g) Sauce Béarnaise", price_cents: 2200 },
                    { name: "Filets de Bar, Sauce Vierge, Ecrasé de PDT", price_cents: 1800 },
                    { name: "Suprême de Poulet aux Cèpes & Truffe", price_cents: 1400 },
                    { name: "Timbale de Légumes de Saison", price_cents: 1600 },
                    { name: "Bar de Ligne, Emulsion Bergamote", price_cents: 2000 },
                    { name: "Veau Fondant au Serrano", price_cents: 2200 },
                    { name: "Risotto crémeux aux champignons", price_cents: 1800 },
                    { name: "Burger Jazz au Comté", price_cents: 1900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Final",
                items: [
                    { name: "Café Gourmand (4 mignardises)", price_cents: 700 },
                    { name: "Cheesecake Maison aux Fruits Rouges", price_cents: 700 },
                    { name: "Crème Brûlée à l’Anis Étoilée", price_cents: 700 },
                    { name: "Dôme Vanille-Amande & Hibiscus", price_cents: 900 },
                    { name: "Pavé Chocolat Guanaja 70%", price_cents: 900 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jazz-cafe-montparnasse/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jazz-cafe-montparnasse/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jazz-cafe-montparnasse/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jazz-cafe-montparnasse/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jazz-cafe-montparnasse/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/jazz-cafe-montparnasse/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.2,
    description: "Le temple de la note bleue à Montparnasse. Le Jazz Café Montparnasse perpétue l’esprit légendaire des jazz clubs parisiens dans un cadre moderne, confortable et acoustiquement irréprochable. Ici, la musique ne se savoure pas seulement avec les oreilles, mais aussi avec une cuisine de bistrot généreuse et soignée. La scène accueille chaque soir des pointures internationales et des talents émergents, créant une atmosphère électrique où les verres s’entrechoquent au rythme du swing. C’est le lieu parfait pour une soirée hors du temps, entre improvisation culinaire et virtuosité musicale.",
    insider_tip: "Les concerts débutent généralement à 21h, mais arrivez dès 18h30 pour l’apéritif dans la véranda, l'ambiance y est déjà magique. Pensez à réserver les tables en bord de scène pour une immersion totale.",
    expert_catchline: "Gastronomie de bistrot et sets de jazz magistraux à Montparnasse.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Vins de Propriété", "Cocktails Classiques"],
        must_eat: "Cuisine de bistrot. L’Entrecôte sauce Béarnaise et le Pavé Chocolat Guanaja.",
        must_drink: "Un verre de vin rouge corsé pendant le deuxième set."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. L’Entrecôte sauce Béarnaise et le Pavé Chocolat Guanaja.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
