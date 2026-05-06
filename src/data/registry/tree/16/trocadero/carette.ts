import { SurgicalPlace } from "../../../type-definition";

export const carette: SurgicalPlace = {
  id: "poi-carette-16",
  slug: "carette",
  name: "Carette",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "4 Pl. du Trocadéro et du 11 Novembre, 75016 Paris",
    arrondissement: 16,
    lat: 48.8637073,
    lng: 2.2872082,
    nearest_metro: "Trocadéro",
    metro_lines: [6, 9],
    google_id: "ChIJXQvlQftv5kcROZUkVMlEAdo"
  },
  moods: {
    chill: 85,
    festif: 20,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "Lun-Dim: 07h30-23h30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.carette-paris.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 35,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "other",
        display_label: "Petit-Déjeuner & Brunch",
        items: [
          { name: "Chocolat Chaud Carette", price_cents: 1100, description: "Onctueux, recette secrète avec chantilly maison", is_highlight: true },
          { name: "Œufs Brouillés Nature", price_cents: 1500, description: "Baveux et onctueux à souhait" },
          { name: "Œufs Brouillés au Saumon", price_cents: 2550, description: "Saumon fumé de qualité supérieure" },
          { name: "Pancakes aux Fruits", price_cents: 1800, description: "Sirop d’érable et fruits de saison" },
          { name: "Petit-Déjeuner complet", price_cents: 3200, description: "Boisson chaude, jus frais, viennoiseries, œufs" },
          { name: "Omelette aux Herbes", price_cents: 1650 },
          { name: "Pain Perdu Minute", price_cents: 1400, description: "Caramel beurre salé" },
          { name: "Salade de Fruits frais", price_cents: 1200 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Dégustation Salée",
        items: [
          { name: "Club Sandwich Poulet", price_cents: 2200, description: "Le classique, pain de mie toasté et frites", is_highlight: true },
          { name: "Club Sandwich Saumon", price_cents: 2600, description: "Saumon fumé et crème acidulée" },
          { name: "Croque-Monsieur Comté", price_cents: 1700, description: "Pain de mie artisanal et jambon de Paris" },
          { name: "Salade Carette Homard", price_cents: 3600, description: "Demi homard, avocat, pamplemousse" },
          { name: "Quiche Lorraine", price_cents: 1450, description: "Servie avec une petite salade verte" },
          { name: "Feuilleté aux Champignons", price_cents: 1600 },
          { name: "Salade César Poulet", price_cents: 2100 }
        ]
      },
      {
        category_type: "other",
        display_label: "Pâtisseries Icônes",
        items: [
          { name: "Macaron XXL Framboise", price_cents: 1000, description: "Énorme macaron garni de framboises fraîches", is_highlight: true },
          { name: "Saint-Honoré Vanille", price_cents: 1200, description: "Crème chiboust et caramel craquant" },
          { name: "Paris-Brest Praliné", price_cents: 1200, description: "Crème mousseline noisette intense" },
          { name: "Éclair au Chocolat", price_cents: 950, description: "Ganache noire 70%" },
          { name: "Tarte au Citron Meringuée", price_cents: 1100 },
          { name: "Mille-feuille Vanille", price_cents: 1250 },
          { name: "Mont-Blanc (Saison)", price_cents: 1300 },
          { name: "Duo de Macarons classiques", price_cents: 600 }
        ]
      },
      {
        category_type: "other",
        display_label: "Sélection Samovar",
        items: [
          { name: "Thé Mélange Carette", price_cents: 900, description: "Thé noir parfumé aux agrumes" },
          { name: "Thé Vert à la Menthe", price_cents: 950, description: "Feuilles de menthe fraîche" },
          { name: "Jus d’Orange Pressé", price_cents: 850 },
          { name: "Café Allongé", price_cents: 600 },
          { name: "Expresso", price_cents: 500 },
          { name: "Limonade Maison", price_cents: 850 }
        ]
      }
    ]
  },
  description: "Institution mythique de la place du Trocadéro depuis 1927, Carette est le temple des gourmets parisiens. Sous ses arcades Art Déco, ce salon de thé bourgeois perpétue l’excellence française avec ses nappes blanches, ses serveurs en habit et son chocolat chaud onctueux, souvent cité comme le meilleur de Paris. Qu’il s’agisse d’un brunch dominical, d’un macaron XXL ou d’un moment de détente face à la Tour Eiffel, Carette reste l’adresse intemporelle où le raffinement rencontre la gourmandise pure.",
  expert_catchline: "Le mythe du salon de thé parisien sur la place du Trocadéro.",
  insider_tip: "Ne faites aucune concession sur le chocolat chaud avec chantilly, c’est l’âme de la maison. Évitez les heures de pointe le week-end, l’attente peut être longue sous les arcades.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Chocolat Chaud Signature", "Thés d’exception"],
    must_eat: "Cuisine de Pâtissier. Chocolat Chaud Carette & Macaron XXL Framboise.",
    must_drink: "Chocolat Chaud Maison"
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/carette/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/carette/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/carette/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/carette/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/carette/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/carette/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4,
  instagram_handle: "caretteofficiel",
  real_talk: {
    text: "Carette, c’est le luxe sans l’ostentation. Un bourdonnement joyeux sous les lustres, des pâtisseries monumentales et un service qui a encore du panache. C’est l'ADN pur du Trocadéro.",
    must_eat: "Cuisine de Pâtissier. Le Macaron XXL.",
    le_secret: "La terrasse est chauffée, ce qui permet de profiter de l’air de la place même en hiver avec un thé fumant.",
    le_son: "Le tintement de la porcelaine et des éclats de rire élégants.",
    le_must: "Le petit-déjeuner complet un matin de semaine, quand Paris s’éveille doucement."
  }
};

export default carette;
