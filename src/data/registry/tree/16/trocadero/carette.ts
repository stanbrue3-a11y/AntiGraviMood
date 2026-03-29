import { SurgicalPlace } from "../../../type-definition";

export const carette: SurgicalPlace = {
  id: "poi-carette-16",
  slug: "carette",
  name: "Carette",
  category: "restaurant",
  subcategory: ["salon-de-thé", "pâtisserie", "brunch", "trocadero"],
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
        category: "Petit-Déjeuner & Brunch",
        items: [
          { name: "Chocolat Chaud Carette", price: "11€", description: "Onctueux, recette secrète avec chantilly maison", highlight: true },
          { name: "Œufs Brouillés Nature", price: "15€", description: "Baveux et onctueux à souhait" },
          { name: "Œufs Brouillés au Saumon", price: "25.50€", description: "Saumon fumé de qualité supérieure" },
          { name: "Pancakes aux Fruits", price: "18€", description: "Sirop d'érable et fruits de saison" },
          { name: "Petit-Déjeuner complet", price: "32€", description: "Boisson chaude, jus frais, viennoiseries, œufs" },
          { name: "Omelette aux Herbes", price: "16.50€" },
          { name: "Pain Perdu Minute", price: "14.00€", description: "Caramel beurre salé" },
          { name: "Salade de Fruits frais", price: "12.00€" }
        ]
      },
      {
        category: "Dégustation Salée",
        items: [
          { name: "Club Sandwich Poulet", price: "22€", description: "Le classique, pain de mie toasté et frites", highlight: true },
          { name: "Club Sandwich Saumon", price: "26€", description: "Saumon fumé et crème acidulée" },
          { name: "Croque-Monsieur Comté", price: "17€", description: "Pain de mie artisanal et jambon de Paris" },
          { name: "Salade Carette Homard", price: "36€", description: "Demi homard, avocat, pamplemousse" },
          { name: "Quiche Lorraine", price: "14.50€", description: "Servie avec une petite salade verte" },
          { name: "Feuilleté aux Champignons", price: "16.00€" },
          { name: "Salade César Poulet", price: "21.00€" }
        ]
      },
      {
        category: "Pâtisseries Icônes",
        items: [
          { name: "Macaron XXL Framboise", price: "10€", description: "Énorme macaron garni de framboises fraîches", highlight: true },
          { name: "Saint-Honoré Vanille", price: "12€", description: "Crème chiboust et caramel craquant" },
          { name: "Paris-Brest Praliné", price: "12€", description: "Crème mousseline noisette intense" },
          { name: "Éclair au Chocolat", price: "9.50€", description: "Ganache noire 70%" },
          { name: "Tarte au Citron Meringuée", price: "11.00€" },
          { name: "Mille-feuille Vanille", price: "12.50€" },
          { name: "Mont-Blanc (Saison)", price: "13.00€" },
          { name: "Duo de Macarons classiques", price: "6.00€" }
        ]
      },
      {
        category: "Sélection Samovar",
        items: [
          { name: "Thé Mélange Carette", price: "9€", description: "Thé noir parfumé aux agrumes" },
          { name: "Thé Vert à la Menthe", price: "9.50€", description: "Feuilles de menthe fraîche" },
          { name: "Jus d'Orange Pressé", price: "8.50€" },
          { name: "Café Allongé", price: "6.00€" },
          { name: "Expresso", price: "5€" },
          { name: "Limonade Maison", price: "8.50€" }
        ]
      }
    ]
  },
  description: "Institution mythique de la place du Trocadéro depuis 1927, Carette est le temple des gourmets parisiens. Sous ses arcades Art Déco, ce salon de thé bourgeois perpétue l'excellence française avec ses nappes blanches, ses serveurs en habit et son chocolat chaud onctueux, souvent cité comme le meilleur de Paris. Qu'il s'agisse d'un brunch dominical, d'un macaron XXL ou d'un moment de détente face à la Tour Eiffel, Carette reste l'adresse intemporelle où le raffinement rencontre la gourmandise pure.",
  expert_catchline: "Le mythe du salon de thé parisien sur la place du Trocadéro.",
  insider_tip: "Ne faites aucune concession sur le chocolat chaud avec chantilly, c'est l'âme de la maison. Évitez les heures de pointe le week-end, l'attente peut être longue sous les arcades.",
  specials: {
    cuisine: ["Salon de Thé", "Pâtisserie", "Français"],
    drinks: ["Chocolat Chaud Signature", "Thés d'exception"],
    must_eat: "Cuisine de Pâtissier. Chocolat Chaud Carette & Macaron XXL Framboise.",
    must_drink: "Chocolat Chaud Maison"
  },
  images: {
    hero: "AU_ZVEGz2OYpcSwzNsTReqsQObtr7FSTqaFGKnzG9oXdFa4qvECcuN6EP_5cwsXp44NlOQDFgxNBEB73ADBm3wvF-sotcU7EGInkhn6c4ih35tp6A0QE3usPkbCCt-isAIitzGmZHPJxl22l-6woc8fvPAoai3pAGw_bjuHaRoXd1cjGSFoyZCkWpcj6EOXaP1Ye_pif_UjL8gaoBdCKfzWTApvmBVMrn_ZGZ3bu2W1m3zM5zgacVHaGE8mlT5kIhKL8l7S8lqpKSOTCXFgpooXDfci7Goo0Sf9A7R0SW49ZcavXttZVMiEPK4yG9vYd8Siiec3KdKFXoDWlZFom5M37homgphfY8LPn16oPR2Jl66x4mabs1Bo4_48eaZjqcQof0hZb1jtXnJiwMkJ6SQkpg7bWUyh3tY5S_ovP6P2XtuSRyr4",
    gallery: [
      "AU_ZVEFcpkbzeySTOns6utcVQVQ_9koWCTFHyNLuZ5419VNRnm5fCfr5jLQnM_UBEYV72xqnPDeh0mmCPTwgF8R_tvNe78wP0KIFPs4rutQQF9FC2_zJtleO8X_055oAGRYinc0_vTE4l59eO-4NvRMmac15QRYEUUrE_HMNAduK2MqvccgytArrfB-BaKhLNJvfs6AYtIEfbas81PfcO-8rWG94hfITcM69v3h41SX-RzHc5SyqOk9nJm9WYMm-jSwd6u_0sxVHP_QnI1myq0msD-_h49Y0JZOSvfQpaWmHa_ceJOUSAwUuh7TtC_UdsB-JxYbiG3toMv4XwrXnfmGETZ33_HBoGlXGkCkloBQcSEAZNMHhNx1l2-4jZNTXKwDeBtd0SwpJXXZHzrIvaMDigbUfLp6JDX1XcSdg_Uol2ykqwg",
      "AU_ZVEE13qtIwyAMfKY2Di-cM_KDQgua_Am75Cf_S7JFa3H3o1f0nYn3BsuHG4HrGBpN0W-54Ep9UttWI5YgRciVO2vdo7EqKKKyhQNBT2vA6evbYsp_T_s4bVTNCSuXjTgNDZzkhVcaaqZzwGVhk1Tfp6A66nUjouvt8zlkqDDDXQJJm93cf6be56mSeZ1soOchKe9Y6lkzk9UpR-VsaWy-xVKsqF1nIdvXv4abevmv4oEoxl1Wur2Nm535wfzZCGcmlqYbZdNQXlTvfPKd0qK9JORpe__oJy52MzGFdmEaba4Us6zZWn45-3qsOvoB0Bc8twHt9-uhFolTfPsBzkiyvmOGRINQQVuG3n-QlC6HCFJLCtMOGhqyQQoYLSptei0IQY27rY-r9W64wnHNnj7q3X-w4AvptiHNKWFcCbz5VYyZ_9YtLEsyIMKqkjQGGWKx"
    ]
  },
  verified: true,
  google_rating: 4,
  instagram_handle: "caretteofficiel",
  real_talk: {
    text: "Carette, c'est le luxe sans l'ostentation. Un bourdonnement joyeux sous les lustres, des pâtisseries monumentales et un service qui a encore du panache. C'est l'ADN pur du Trocadéro.",
    must_eat: "Cuisine de Pâtissier. Le Macaron XXL.",
    le_secret: "La terrasse est chauffée, ce qui permet de profiter de l'air de la place même en hiver avec un thé fumant.",
    le_son: "Le tintement de la porcelaine et des éclats de rire élégants.",
    le_must: "Le petit-déjeuner complet un matin de semaine, quand Paris s'éveille doucement."
  }
};

export default carette;
