import { SurgicalPlace } from "../../../type-definition";

export const brasserie_barbes: SurgicalPlace = {
  id: "poi-brasserie-barbes",
  slug: "brasserie-barbes",
  name: "Brasserie Barbès",
  category: "restaurant",
  subcategory: ["français", "brasserie", "rooftop", "festif", "cocktails"],
  location: {
    address: "2 Bd Barbès, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.884007,
    lng: 2.3497388,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ4f7h_mhu5kcRtb3IkgcT7pU"
  },
  moods: {
    chill: 60,
    festif: 95,
    culturel: 45
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 02:00 | mardi: 09:00 – 02:00 | mercredi: 09:00 – 02:00 | jeudi: 09:00 – 02:00 | vendredi: 09:00 – 02:00 | samedi: 09:00 – 03:00 | dimanche: 09:00 – 02:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://brasseriebarbes.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & To Share",
        items: [
        { name: "Burrata Crémeuse & Focaccia", price_cents: 1200, description: "Basilic frais et huile d'olive vierge" },
        { name: "Houmous Maison & Pain Pita", price_cents: 900 },
        { name: "Arancini à la Trill (3pcs)", price_cents: 1100, description: "Cœur coulant fromage, huile de truffe" },
        { name: "Carpaccio de Bœuf au Parmesan", price_cents: 1400 },
        { name: "Salade de Kale & Grenade", price_cents: 1300 },
        { name: "Tempura de Légumes de Saison", price_cents: 1050 },
        { name: "Assiette de Jambon de Parme", price_cents: 1500 }
      ]},
      {
        category_type: "main",
        display_label: "Plats Brasserie",
        items: [
        { name: "Classic Burger Barbès", price_cents: 1900, description: "Bœuf français, cheddar affiné, frites maison" },
        { name: "Fish & Chips à la Londonienne", price_cents: 1800 },
        { name: "Risotto aux Herbes & Champignons", price_cents: 1750 },
        { name: "Tartare de Bœuf Traditionnel", price_cents: 1900 },
        { name: "Demi-Poulet Fermier Rôti", price_cents: 1850, description: "Jus de viande et purée maison" },
        { name: "Bavette d'Aloyau Grillée", price_cents: 2200, description: "Frites et sauce échalote" },
        { name: "Linguine aux Gambas & Piment", price_cents: 2100 },
        { name: "Saumon Snacké & Légumes Croquants", price_cents: 2050 }
      ]},
      {
        category_type: "dessert",
        display_label: "Desserts Maison",
        items: [
        { name: "Tiramisu Signature Barbès", price_cents: 900 },
        { name: "Cheesecake aux Fruits Rouges", price_cents: 950 },
        { name: "Moelleux au Chocolat Fondant", price_cents: 850 },
        { name: "Café très Gourmand", price_cents: 1050 },
        { name: "Glaces Artisanales (2 boules)", price_cents: 750 }
      ]}
    ]
  },
  description: "Installée dans un ancien magasin Tati mémorable, cette brasserie géante sur quatre niveaux est le cœur battant du carrefour Barbès. Entre déco industrielle, rooftop végétalisé et dancing, on y vient pour un cocktail, un burger ou un plat de saison dans une atmosphère ultra-parisienne et métissée.",
  insider_tip: "• **Choix du Spot** : Filez directement au rooftop au 4ème étage pour la lumière et l'ambiance jardin d'hiver sous verrière.\n• **Vibe Nocturne** : Le week-end, le spot se transforme en mini-club branché avec DJ sets ; idéal pour un dîner qui finit tard.\n• **Combo Moelle** : Optez pour les Arancini en entrée suivis du Burger Barbès pour une expérience 100% plaisir régressif.",
  specials: {
    cuisine: ["Brasserie"],
    drinks: ["Cocktails Création", "Spritz", "Vins Nature"],
    must_eat: "Cuisine de brasserie. Brasserie moderne. Le Burger Barbès & Arancini truffés",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-barbes/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-barbes/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-barbes/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-barbes/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-barbes/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-barbes/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de brasserie. Brasserie moderne. Le Burger Barbès & Arancini truffés",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default brasserie_barbes;
