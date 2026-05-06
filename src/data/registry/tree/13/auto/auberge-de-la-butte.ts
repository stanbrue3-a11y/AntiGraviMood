import { SurgicalPlace } from "../../../type-definition";

export const auberge_de_la_butte: SurgicalPlace = {
  id: "poi-auberge-de-la-butte",
  slug: "auberge-de-la-butte",
  name: "Auberge de la Butte",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "8 Rue de la Butte aux Cailles, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.828249,
    lng: 2.352171,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJm5rqSZBx5kcRKUfB5RiuUnU"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 08:00 – 00:00 | mardi: 08:00 – 00:00 | mercredi: 08:00 – 00:00 | jeudi: 08:00 – 00:00 | vendredi: 08:00 – 00:00 | samedi: 08:00 – 00:00 | dimanche: 08:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://auberge-de-la-butte.fr/fr",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    dish_price: 18.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Mezzés",
        items: [
          { name: "Cuisses de Grenouilles persillées", price_cents: 1400, is_highlight: true },
          { name: "6 Escargots au beurre de pays", price_cents: 900 },
          { name: "Millefeuille de Chèvre & Épinards", price_cents: 1000 },
          { name: "Burrata Campani & Tomates", price_cents: 1300 },
          { name: "Mezzé Maison (Assortiment)", price_cents: 1000 },
          { name: "Assiette de Charcuteries fines", price_cents: 1000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Terroir (Viandes)",
        items: [
          { name: "Bœuf Bourguignon Tradition", price_cents: 1800, is_highlight: true },
          { name: "Magret de Canard au Miel", price_cents: 2000 },
          { name: "Bavette aux Échalotes", price_cents: 1800 },
          { name: "Cochon de Lait rôti au thym", price_cents: 2100 },
          { name: "Carré d’Agneau au Romarin", price_cents: 2000 },
          { name: "Tartare de Bœuf Charolais", price_cents: 1800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizzas au Feu de Bois (Plats)",
        items: [
          { name: "Pizza Reginella (Jambon/Champignons)", price_cents: 1600 },
          { name: "Quattro Formaggi (Bio)", price_cents: 1500 },
          { name: "Pizza Tutto Fuoco (Pimentée)", price_cents: 1500 },
          { name: "Pizza Salmone & Citron", price_cents: 1600 },
          { name: "Margherita Classica", price_cents: 1300 }
        ]
      },
      {
        category_type: "main",
        display_label: "Côté Mer & Végé (Plats)",
        items: [
          { name: "Daurade Royale Grillée", price_cents: 2000 },
          { name: "Pavé de Saumon à l’Olivier", price_cents: 1800 },
          { name: "Gambas Géantes à la Plancha", price_cents: 2200 },
          { name: "Suggestion Végétarienne du Jour", price_cents: 1700 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Salades & Douceurs",
        items: [
          { name: "Salade de Poulpe à la Gallega", price_cents: 1600 },
          { name: "Salade Niçoise au Thon frais", price_cents: 1300 },
          { name: "Tarte Tatin de l’Auberge", price_cents: 850 },
          { name: "Mousse Chocolat à la louche", price_cents: 700 },
          { name: "Café Gourmand de la Butte", price_cents: 950 }
        ]
      }
    ]
  },
  description: "L’Auberge de la Butte est un carrefour gourmand situé sur les hauteurs de la Butte-aux-Cailles. Ce restaurant hybride réussit le pari de marier une brasserie française traditionnelle (bourguignon, confit) avec une pizzeria de quartier respectée. Son décor boisé et sa terrasse ensoleillée en font une escale incontournable pour les familles et les habitués du 13e en quête d'une cuisine sincère et généreuse.",
  insider_tip: `• **Le Combo Mixte** : Ne choisissez pas entre pizza et terroir, partagez une burrata en entrée avant de plonger dans le bœuf bourguignon.
  • **Terrasse Royale** : Sa position à l’angle de la rue de la Butte-aux-Cailles offre l’un des meilleurs points d’observation pour humer l'ambiance du quartier.
  • **Fermeture Tardive** : Rare pour un restaurant de ce type dans le quartier, l’Auberge sert tard tous les jours, idéal pour les dîners improvisés.`,
  specials: {
    cuisine: ["Italien"],
    drinks: ["Vin au verre", "Bière pression"],
    must_eat: "Cuisine italienne. Bœuf Bourguignon & Cuisses de Grenouilles",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-de-la-butte/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-de-la-butte/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-de-la-butte/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-de-la-butte/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-de-la-butte/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-de-la-butte/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.1,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Bœuf Bourguignon & Cuisses de Grenouilles",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default auberge_de_la_butte;
