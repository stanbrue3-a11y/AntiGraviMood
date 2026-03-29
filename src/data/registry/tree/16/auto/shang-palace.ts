import { SurgicalPlace } from "../../../type-definition";

export const shang_palace: SurgicalPlace = {
  id: "poi-shang-palace",
  slug: "shang-palace",
  name: "Shang Palace",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "10 Av. d'Iéna, 75116 Paris, France",
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
          { name: "Siu Mai au Porc & Crevettes", price_cents: 1800, description: "Vapeurs artisanales d'une finesse rare" },
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
          { name: "Légumes de Saison sautés à l'ail", price_cents: 2400 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cave à Thés & Boissons",
        items: [
          { name: "Thé Pu-Erh Millésimé", price_cents: 2500, description: "Le digestif parfait pour la cuisine grasse" },
          { name: "Thé Oolong de Haute Montagne", price_cents: 1800 },
          { name: "Verre de Riesling 'Trimbach'", price_cents: 2200 },
          { name: "Cocktail 'Jardin d'Iéna'", price_cents: 2600 },
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
  • **Le Thé** : Ne négligez pas la carte des thés, ils sont sélectionnés comme des grands crus et changent radicalement l'expérience du repas.`,
  specials: {
    cuisine: ["Cantonaise", "Chinoise Gastronomique"],
    drinks: ["Thés Rares", "Vins d'Alsace"],
    must_eat: "Le Canard Laqué à la Pékinoise. Le plus authentique de Paris.",
  },
  images: {
    hero: "AU_ZVEG0qmqLtgY8sUKA0OmJbWRT662typbagKEK39JlENGym82kw5SKMhLhthX7pEuFs-wTjhDEqW8TeG1hcIO3Jmhk4sGF_MQP4EDPGQv3iQ3AkRK7xsvlPOLVtw046gsdKt6sbB9WzXjrMn2IYEiNvO8M2kLSjBWKw2rgh3DnXbOVn9MFJsxNWsmfVXP67PRiWOzeaQbdGbrXEQsE7sSsqiGAK-7JRhE4bJSsoQ3REjGJiRmTMth8G2AtPitL9Iui8dxqVP2hUfPzuqCc3xe0-wft23jw-9Jt762DHZQznNg",
    gallery: ["AU_ZVEHOfxuHPXyuBhDtiSkFAaFZk2ALcAGp8D-K7h8I-eBN7ap4NdifpiT9X2FLGmRRRxFusF5x9EHK5WESvNUzbzt2PWM8UTT2T7vGOAwoiM4e5YsAkpHKFwjWktODD3oMycjmOlAnnurOwQfJF2vYcGdZfIrMCmZfO8sUfy-tj0NQNNw5C5D5-3k1K-6fpeMJ_hZ_8x7mA0rpAZhb-ZamYN2WAOp5G9Qz6vIVJyIrQehx5BMY7BtFGteh7fCc1NcHytBeyT5UBEQyAWn743iiZwPTHKWsWQC9_IuviqZOS5jaiJxNTgpOJGbc5epS2jx6cT53BbNbaXXosCQsBw9UhPVmaVbHUFEIPDQsf7p9Uct7ul6iLz-oDDv93JRvafJ-IFdrZkfpsdkvoWApS86W7zJ3KregzgPX8pu9DpuLfdBPP4g","AU_ZVEHVc0jeTUF2kpPkY2_xVp_eIkL5R3NH6DffDNsaX2KK9_PPGZEGodVihJnAu4T13uGsiMTKqCwdaoFoo_vLcyCXRgdK7VNEr_D5a8WnFrTHYiZrouA9Qa6paEEtcsHagZarm0M75ncMwfKLuypVOYZLyn4GXdAzuFyM_8nPc8uyTgXlj2IGFiinepkWIpROPpz8IcnswPq1KOnlgvsD4xMj2DKn_frbAMjv3XVU3LZkT4ulS4VcBboTfC0CnKE9RfY_zEoy4VsFftS9gV6lzFZend6emBIK7BsJz5hE-iJJlepkhIbjQwYz1CH5TnFIW9rHJzYyER1RzcuNpe3eGl-7vEkZy0WUJ1roSxcCjOafSI7m3ce0vl0XRrYW6_iN5SLvD8BccNr61Aa8cFp_wnTqD5cY2JEVfWkoCCMVlZsNsbgk6EoIoHxBY4hYVOIZ"]
  },
  verified: true,
  google_rating: 4.5,
  michelin_stars: 1,
  real_talk: {
    text: "Le Shang Palace n'est pas un 'chinois' de quartier, c'est une ambassade culturelle. Tony Xu ne transige pas sur les techniques de rôtissage. C'est le seul endroit où vous trouverez un canard laqué de ce niveau dans un cadre de palace parisien.",
    must_eat: "Canard Laqué",
    le_secret: "La cave de thés Pu-Erh millésimés qui coûtent parfois plus cher que le vin mais offrent un accord incroyable avec les Dim Sum.",
    le_son: "Le silence majestueux et le bruit des chariots en bois précieux.",
    le_must: "Un déjeuner Dim Sum en famille dans l'une des alcôves privées."
  }
};

export default shang_palace;
