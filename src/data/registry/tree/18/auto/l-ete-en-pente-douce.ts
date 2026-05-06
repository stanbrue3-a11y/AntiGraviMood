import { SurgicalPlace } from "../../../type-definition";

export const l_ete_en_pente_douce: SurgicalPlace = {
  id: "poi-l-ete-en-pente-douce",
  slug: "l-ete-en-pente-douce",
  name: "L’Été en Pente Douce",
  category: "restaurant",
  subcategory: ['français', 'terrasse'],
  location: {
    address: "8 Rue Paul Albert, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8863549,
    lng: 2.3451788,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJrdoUy0Ju5kcRY7MRXAycqlA"
  },
  moods: {
    chill: 95,
    festif: 35,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 22:00 | mardi: 12:00 – 22:00 | mercredi: 12:00 – 22:00 | jeudi: 12:00 – 22:00 | vendredi: 12:00 – 22:00 | samedi: 12:00 – 22:00 | dimanche: 12:00 – 22:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://eteenpentedouce.com/",
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
        category_type: "main",
        display_label: "Plats de Tradition",
        items: [
        { name: "Quiche Maison au Saumon & Épinards", price_cents: 1550, description: "Servie avec une salade verte croquante" },
        { name: "Salade de l’Été (XXL)", price_cents: 1650, description: "Légumes grillés, feta, pignons, herbes fraîches" },
        { name: "Parmentier de Canard Confit", price_cents: 1950 },
        { name: "Pavé de Cabillaud Rôti", price_cents: 2100, description: "Écrasé de pommes de terre, huile de piment doux" },
        { name: "Sauté d’Agneau aux Olives", price_cents: 2250 },
        { name: "Lasagnes Maison Aubergines & Moza", price_cents: 1700 },
        { name: "Quiche Chèvre & Miel", price_cents: 1550 },
        { name: "Salade César Montmartre", price_cents: 1600 }
      ]},
      {
        category_type: "starter",
        display_label: "Petites Faims (Entrées)",
        items: [
        { name: "Soupe du Jour Artisanale", price_cents: 950 },
        { name: "Assiette de Charcuterie Fine", price_cents: 1400 },
        { name: "Houmous Maison & Pain Grillé", price_cents: 850 },
        { name: "Terrine de Campagne", price_cents: 900 }
      ]},
      {
        category_type: "dessert",
        display_label: "Desserts Maison",
        items: [
        { name: "Tatin du Petit Muller", price_cents: 950, description: "Pommes caramélisées, crème fraîche épaisse" },
        { name: "Moelleux Chocolat Cœur Fondant", price_cents: 850 },
        { name: "Céline aux Fruits Rouges", price_cents: 900 }
      ]}
    ]
  },
  description: "Situé sur la mythique rue Muller, ce bistrot bucolique offre l’une des terrasses les plus charmantes de Montmartre. Avec son ambiance de village et sa cuisine de marché fraîche et colorée, c’est le lieu idéal pour une halte apaisante après l’ascension des marches du Sacré-Cœur.",
  insider_tip: "• **Timing Stratégique** : Visez le milieu d’après-midi pour une citronnade en terrasse ; la lumière qui filtre à travers les feuilles est sublime.\n• **Combo Moelle** : La Quiche Maison (une des meilleures du quartier) accompagnée d’une bière de la Goutte d’Or locale.\n• **Détail Secret** : La petite place Muller est bien plus calme que sa voisine la place du Tertre, idéal pour lire un livre en terrasse.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Citronnade Maison", "Bières Locales", "Vins Bio"],
    must_eat: "Cuisine française. Havre de paix au pied du Sacré-Cœur. Quiche maison & Tatin",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ete-en-pente-douce/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ete-en-pente-douce/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ete-en-pente-douce/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ete-en-pente-douce/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ete-en-pente-douce/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ete-en-pente-douce/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.1,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Havre de paix au pied du Sacré-Cœur. Quiche maison & Tatin",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default l_ete_en_pente_douce;
