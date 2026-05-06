import { SurgicalPlace } from "../../../type-definition";

export const le_rempart_bastille: SurgicalPlace = {
  id: "poi-le-rempart-bastille",
  slug: "le-rempart-bastille",
  name: "Le Rempart Bastille",
  category: "restaurant",
  subcategory: ['français', 'terrasse'],
  location: {
    address: "15 Rue Saint-Antoine, 75004 Paris, France",
    arrondissement: 4,
    lat: 48.8534253,
    lng: 2.3666076,
    nearest_metro: "Bastille",
    metro_lines: [1, 5, 8],
    google_id: "ChIJDf4jgf9x5kcRB6AIVMypZS4"
  },
  moods: {
    chill: 60,
    festif: 70,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 07:00 – 00:00 | mardi: 07:00 – 00:00 | mercredi: 07:00 – 00:00 | jeudi: 07:00 – 00:00 | vendredi: 07:00 – 00:00 | samedi: 07:00 – 01:00 | dimanche: 07:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lerempartbastille.fr/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Œufs mayonnaise ’Rempart'", price_cents: 650, description: "L’indémodable de la maison" },
          { name: "Os à moelle rôti au sel de Guérande", price_cents: 1100 },
          { name: "Soupe à l’oignon gratinée", price_cents: 950 },
          { name: "Burrata crémeuse et tomates d’antan", price_cents: 1250 },
          { name: "Escargots de Bourgogne (x6)", price_cents: 900 },
          { name: "Planche de charcuterie fine", price_cents: 1800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Les Plats",
        items: [
          { name: "Tartare de bœuf tradition frites maison", price_cents: 1750 },
          { name: "Burger du Rempart (Cheddar, oignons confits)", price_cents: 1850 },
          { name: "Confit de canard du Sud-Ouest", price_cents: 1900 },
          { name: "Entrecôte grillée sauce au poivre", price_cents: 2400 },
          { name: "Fish & Chips sauce tartare", price_cents: 1700 },
          { name: "Salade César au poulet croustillant", price_cents: 1650 },
          { name: "Risotto aux champignons des bois", price_cents: 1800 },
          { name: "Tagliatelles à la crème de truffe", price_cents: 2000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Desserts",
        items: [
          { name: "Tiramisu maison au café", price_cents: 850 },
          { name: "Crème brûlée à la vanille Bourbon", price_cents: 800 },
          { name: "Mousse au chocolat noir", price_cents: 750 },
          { name: "Profiteroles au chocolat chaud", price_cents: 950 },
          { name: "Tarte Tatin et sa crème fraîche", price_cents: 900 },
          { name: "Café gourmand du Rempart", price_cents: 1050 }
        ]
      }
    ]
  },
  description: "Trônant fièrement à l’angle de la rue Saint-Antoine, Le Rempart est l’archétype de la grande brasserie parisienne qui ne dort jamais. Avec sa terrasse chauffée donnant sur l’effervescence de Bastille, c’est le spot idéal pour observer la faune urbaine tout en dégustant des classiques parfaitement exécutés. L’ambiance y est électrique, surtout en fin de semaine.",
  insider_tip: "• La terrasse est l’une des meilleures de Bastille pour le ’people watching’.\n• Le samedi soir, la cuisine ferme plus tard (01h00), idéal pour un dîner post-spectacle à l’Opéra.\n• Leurs frites maison sont particulièrement réussies, n’hésitez pas à demander un supplément.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Cocktails classiques", "Vin au verre"],
    must_eat: "Cuisine Français.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-rempart-bastille/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-rempart-bastille/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-rempart-bastille/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-rempart-bastille/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-rempart-bastille/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-rempart-bastille/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Français.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_rempart_bastille;
