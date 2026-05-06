import { SurgicalPlace } from "../../../type-definition";

export const shang_palace: SurgicalPlace = {
  id: "poi-shang-palace",
  slug: "shang-palace",
  name: "Shang Palace",
  category: "restaurant",
  subcategory: ['bar à vin'],
  location: {
    address: "10 Av. d’Iéna, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.863726,
    lng: 2.2934,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJC3Q8OeRv5kcRizBUU2o1qCA"
  },
  moods: {
    chill: 85,
    festif: 30,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 18:30 – 22:00 | mardi: Fermé | mercredi: Fermé | jeudi: 12:00 – 14:00, 18:30 – 22:00 | vendredi: 12:00 – 14:00, 18:30 – 22:00 | samedi: 12:00 – 14:00, 18:30 – 22:00 | dimanche: 12:00 – 14:00, 18:30 – 22:00",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.shangri-la.com/fr/paris/shangrila/dining/restaurants/shang-palace/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 180,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Menus Dégustation",
        items: [
          { name: "Menu Émeraude", price_cents: 17800, description: "Le parcours classique du chef Tony Xu", is_highlight: true },
          { name: "Menu Découverte (Midi)", price_cents: 8800, description: "Une introduction à la haute cuisine cantonaise" },
          { name: "Menu Dégustation Signature", price_cents: 24800, description: "Le sommet de la gastronomie de Hong Kong à Paris" }
        ]
      },
      {
        category_type: "other",
        display_label: "Spécialités Cantonaises (Dim Sum & Rôtisserie)",
        items: [
          { name: "Canard Laqué à la Pékinoise", price_cents: 16800, description: "En deux services (Peau croustillante puis chair sautée)", is_highlight: true },
          { name: "Siu Mai au Porc & Crevettes", price_cents: 1800, description: "Vapeurs artisanales d’une finesse rare" },
          { name: "Ha Kao (Crevettes)", price_cents: 2000 },
          { name: "Bao au Porc Laqué", price_cents: 1600 },
          { name: "Travers de Porc au Miel", price_cents: 3200, description: "Rôtis à la perfection" }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Signature",
        items: [
          { name: "Crevettes impériales sautées", price_cents: 4800, description: "À la sauce XO maison" },
          { name: "Filet de Bœuf au Poivre Noir", price_cents: 5200 },
          { name: "Riz Sauté à la Cantonaise", price_cents: 2800, description: "Le classique, version palace" },
          { name: "Légumes de Saison sautés à l’ail", price_cents: 2400 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cave à Thés & Boissons",
        items: [
          { name: "Thé Pu-Erh Millésimé", price_cents: 2500, description: "Le digestif parfait pour la cuisine grasse" },
          { name: "Thé Oolong de Haute Montagne", price_cents: 1800 },
          { name: "Verre de Riesling ’Trimbach'", price_cents: 2200 },
          { name: "Cocktail ’Jardin d’Iéna’", price_cents: 2600 },
          { name: "Eau Minérale (75cl)", price_cents: 1200 },
          { name: "Café de Tradition", price_cents: 1000 }
        ]
      }
    ]
  },
  description: `Seul restaurant chinois étoilé en France, le Shang Palace est une institution au sein du palais Shangri-La. Sous la direction du chef Tony Xu, on y déguste une cuisine cantonaise d'une authenticité absolue, portée par des maîtres rôtisseurs et des experts en Dim Sum. Le décor inspiré de la Chine impériale et le service palace en font une expérience à part, voyageuse et solennelle.`,
  expert_catchline: `Le seul et unique rendez-vous étoilé de la gastronomie cantonaise en France.`,
  insider_tip: `• **Le Canard Laqué** : C'est le rituel incontournable. Il est découpé devant vous avec une dextérité fascinante. Prévoyez de le partager à deux ou trois.
  • **Le Dim Sum Lunch** : Les vapeurs sont plus nombreuses au déjeuner, c'est le moment idéal pour découvrir la variété de la carte.
  • **Le Thé** : Ne négligez pas la carte des thés, ils sont sélectionnés comme des grands crus et changent radicalement l’expérience du repas.`,
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Thés Rares", "Vins d’Alsace"],
    must_eat: "Cuisine française. Le Canard Laqué à la Pékinoise. Le plus authentique de Paris.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/shang-palace/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/shang-palace/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/shang-palace/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/shang-palace/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/shang-palace/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/shang-palace/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.5,
  michelin_stars: 1,
  real_talk: {
    text: "Le Shang Palace n’est pas un ’chinois’ de quartier, c’est une ambassade culturelle. Tony Xu ne transige pas sur les techniques de rôtissage. C’est le seul endroit où vous trouverez un canard laqué de ce niveau dans un cadre de palace parisien.",
    must_eat: "Cuisine française. Canard Laqué",
    le_secret: "La cave de thés Pu-Erh millésimés qui coûtent parfois plus cher que le vin mais offrent un accord incroyable avec les Dim Sum.",
    le_son: "Le silence majestueux et le bruit des chariots en bois précieux.",
    le_must: "Un déjeuner Dim Sum en famille dans l’une des alcôves privées."
  }
};

export default shang_palace;
