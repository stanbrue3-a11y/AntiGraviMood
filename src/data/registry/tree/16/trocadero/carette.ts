import { SurgicalPlace } from "../../../type-definition";

export const carette: SurgicalPlace = {
  id: "poi-carette",
  slug: "carette",
  name: "Carette",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "4 Pl. du Trocadéro et du 11 Novembre, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.86370729999999,
    lng: 2.2872082,
    nearest_metro: "Trocadéro",
    metro_lines: ["6", "9"],
    google_id: "ChIJXQvlQftv5kcROZUkVMlEAdo"
  },
  moods: {
    chill: 85,
    festif: 30,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: 07:30 – 23:30 | mardi: 07:30 – 23:30 | mercredi: 07:30 – 23:30 | jeudi: 07:30 – 23:30 | vendredi: 07:30 – 23:30 | samedi: 07:30 – 23:30 | dimanche: 07:30 – 23:30",
    reservation_policy: "sans_resa",
    wifi: false,
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
          { name: "Chocolat Chaud Carette", price: "11€", description: "Onctueux à souhait, chantilly maison", highlight: true },
          { name: "Œufs Brouillés Nature", price: "15€", description: "Parfaitement coulants" },
          { name: "Œufs Brouillés au Saumon Fumé", price: "25.50€" },
          { name: "Pancakes aux Fruits Frais", price: "18€" },
          { name: "Le Petit-Déjeuner Carette", price: "32€", description: "Complet : boisson chaude, jus, viennoiseries, œufs" }
        ]
      },
      {
        category: "Salades & Clubs",
        items: [
          { name: "Club Sandwich Poulet", price: "22€", description: "Pain de mie toasté, frites maison", highlight: true },
          { name: "Salade Carette", price: "26€", description: "Homard, avocats, tomates" },
          { name: "Salade Végétarienne", price: "19.50€" },
          { name: "Croque-Monsieur au Comté", price: "17€" }
        ]
      },
      {
        category: "Pâtisseries Icônes",
        items: [
          { name: "Le Macaron XXL", price: "10€", description: "Framboise, chocolat ou pistache", highlight: true },
          { name: "Paris-Brest", price: "12€" },
          { name: "Saint-Honoré", price: "12€" },
          { name: "Éclair au Chocolat", price: "9.50€" },
          { name: "Assortiment de 5 Mini Macarons", price: "15€" }
        ]
      },
      {
        category: "Sélection de Thés",
        items: [
          { name: "Thé Mélange Carette", price: "9€" },
          { name: "Thé Vert à la Menthe Fraîche", price: "9.50€" },
          { name: "Jus d'Orange Pressé", price: "8.50€" },
          { name: "Expresso", price: "5€" }
        ]
      }
    ]
  },
  description: `Institution indétrônable de la place du Trocadéro depuis 1927, Carette est bien plus qu'une simple pâtisserie. C'est un salon de thé bourgeois où le temps semble s'être arrêté, avec ses serveurs en habit et ses nappes blanches. On y vient du monde entier pour son chocolat chaud légendaire et ses macarons, mais aussi pour son ambiance unique qui mêle habitués du quartier et voyageurs de passage dans un cadre Art Déco pur jus.`,
  expert_catchline: `Le mythe du salon de thé parisien sur la place du Trocadéro.`,
  insider_tip: `• **Le Chocolat Chaud** : Ne faites pas l'impasse, c'est l'un des meilleurs de Paris. Demandez le supplément chantilly, elle est exceptionnelle.
  • **Sans Réservation** : Prévoyez de l'attente le week-end, la queue peut être longue devant l'établissement. Privilégiez les matinées en semaine.
  • **La Vitrine** : Avant de vous installer, allez admirer la vitrine de pâtisseries à l'intérieur, c'est là que se fait le choix le plus difficile de la journée.`,
  specials: {
    cuisine: ["Salon de Thé", "Pâtisserie", "Français"],
    drinks: ["Chocolat Chaud Signature", "Thés d'exception"],
    must_eat: "Cuisine de Pâtissier. Le Macaron XXL à la Framboise.",
  },
  images: {
    hero: "AU_ZVEHXQfvtv5kcROZUkVMlEAdo",
    gallery: ["AU_ZVEGlIWmS0liDnUJOplMWi3IdV_IlZRsgzskSXTYZyemOPdnKx4gTLWr9I27E-fgAcr4X22kD-zVqjVd_4wIGi87i4C-0zwstvE_NPXP_KHoLKbbvB9PXX8aLj_fAHd4ApXT1LerqXtDVoAlB3LUMNB7v9dyWohyyYMNWZkzksbRbxJxf46vjymotAll7WpRdA2tVJzv0ydJHCklXUuWYrbCH9xNIPSUt1hYMwSZt4x7uPwM_2g-weI9jw1KVofsP7XR0DkYtnhD_UoabFbJhpnfp3vBhH5HcE8xevFw1CKo9hQ","AU_ZVEEFJOgQQ7xGIsGxF4m_C9sqGMAPnQcIyzdda9H2n3c5EcGxgA0PKihNT48LEzAP4fOH4v7GTNGLfgkPA9R43cXoXF2yJ2MDEzdmeGUWv7RdgH-U_VFZRIUwF0XZ29-4kJ5qytgZtP8YFuCjD5WeCAFHJMxYz9bcUqOS536OYP_iF-AqnPnqS6CTD7amgkoh_4yGbnlUyesNNiSEdAJqRtWSzEXI9Ij2kzYHnQrYEzZ9LuuFRm2eBSfhgpeV395AViEVZgf9hTdkhrxjEJHB9AQ28ahOXKxeagXGQIoxun3V9gswJHJ9sI72HSvgNO3XdW-YUYEmiQPJfCarZlffPK6Wc5KrG3ZVeV90pdaWp45FhCjJNVin5T90R7S3YQJO0-Bwonq4YGaKHl6G-WWTYrvKsTVvnuJFK5Nc6TRrHyy4yw"]
  },
  verified: true,
  google_rating: 4,
  michelin_stars: 0,
  real_talk: {
    text: "Carette, c'est le Paris de carte postale qui existe pour de vrai. C'est bruyant, les tables sont serrées, mais quand on goûte au chocolat chaud ou au Saint-Honoré, on oublie tout le reste. C'est l'adresse de repli parfaite après une balade au Trocadéro.",
    must_eat: "Chocolat Chaud",
    le_secret: "On peut acheter les macarons à emporter sur le côté pour éviter la queue du salon de thé.",
    le_son: "Un bourdonnement de conversations polyglottes et le tintement des cuillères sur la porcelaine.",
    le_must: "Le petit-déjeuner complet un matin de semaine sous les arcades."
  }
};

export default carette;
