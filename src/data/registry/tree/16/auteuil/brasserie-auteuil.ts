import { SurgicalPlace } from "../../../type-definition";

export const brasserie_auteuil: SurgicalPlace = {
  id: "poi-brasserie-auteuil",
  slug: "brasserie-auteuil",
  name: "Brasserie Auteuil",
  category: "restaurant",
  subcategory: ["brasserie", "italien"],
  location: {
    address: "78 Rue d'Auteuil, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.8471587,
    lng: 2.2612745,
    nearest_metro: "Porte d'Auteuil",
    metro_lines: ["10"],
    google_id: "ChIJbXk0LzRv5kcRSX6M9P75Y4U"
  },
  moods: {
    chill: 60,
    festif: 85,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 02:00 | mardi: 09:00 – 02:00 | mercredi: 09:00 – 02:00 | jeudi: 09:00 – 02:00 | vendredi: 09:00 – 02:00 | samedi: 09:00 – 02:00 | dimanche: 09:00 – 02:00",
    reservation_policy: "resa_conseillee",
    wifi: true,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.auteuil-brasserie.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Antipasti & Mezzés",
        items: [
          { name: "Mezzés d'Auteuil", price: "20.50€", description: "Houmous, burrata, croquettes à la truffe", highlight: true },
          { name: "Burrata Crémeuse au Pesto", price: "14.50€" },
          { name: "Croquettes de Risotto à la Truffe", price: "12.50€" },
          { name: "Calamars Fritti & Sauce Tartare", price: "13.00€" },
          { name: "Planche de Charcuterie Italienne", price: "19.00€" }
        ]
      },
      {
        category: "Pizzas au Feu de Bois",
        items: [
          { name: "Pizza Regina", price: "16.50€", description: "Jambon blanc, champignons, mozzarella" },
          { name: "Pizza Truffe & Mascarpone", price: "22.00€", highlight: true },
          { name: "Pizza Piccante (Salami, Piment)", price: "18.50€" },
          { name: "Pizza Végétarienne d'Auteuil", price: "17.50€" }
        ]
      },
      {
        category: "Plats de la Brasserie",
        items: [
          { name: "Linguine aux Gambas", price: "24.50€", description: "Sauce tomate épicée", highlight: true },
          { name: "Aubergines à la Parmigiana", price: "18.50€" },
          { name: "Salade César Auteuil", price: "19.50€" },
          { name: "Pavé de Saumon Rôti", price: "23.00€" },
          { name: "Burger Auteuil (Boeuf & Gorgonzola)", price: "21.50€" }
        ]
      },
      {
        category: "Douceurs & Cocktails",
        items: [
          { name: "Tiramisu Maison au Café", price: "9.50€", highlight: true },
          { name: "Brioche Perdue & Caramel", price: "10.50€" },
          { name: "Cocktail 'Auteuil Spritz'", price: "14.00€", description: "Aperol, Prosecco, passion" },
          { name: "Pinte de Bière Artisanale", price: "9.00€" },
          { name: "Expresso", price: "3.50€" }
        ]
      }
    ]
  },
  description: `Installée dans une ancienne gare de la Petite Ceinture, la Brasserie Auteuil est le rendez-vous incontournable du 16ème sud. Son atout majeur ? Un immense rooftop végétalisé qui ne désemplit pas, été comme hiver. La décoration d'inspiration toscane et l'ambiance décontractée en font le spot parfait pour un aperitivo entre amis ou une pizza après un match à Roland-Garros.`,
  expert_catchline: `Le plus grand rooftop végétalisé du 16ème sud dans une ancienne gare.`,
  insider_tip: `• **Le Rooftop** : Arrivez tôt (avant 19h) pour espérer avoir une table sur le toit sans trop attendre, surtout les soirs de beau temps.
  • **Match Day** : Le lieu est très animé les jours de match à Roland-Garros ou au Parc des Princes, ambiance garantie.
  • **Hiver Cosy** : En hiver, le rooftop est chauffé et garni de plaids, idéal pour un cocktail au chaud sous les étoiles.`,
  specials: {
    cuisine: ["Italo-Française", "Brasserie"],
    drinks: ["Spritz Créations", "Cocktails à partager"],
    must_eat: "Cuisine de Brasserie. La Pizza à la Truffe & Mascarpone.",
  },
  images: {
    hero: "AU_ZVEG6eGfH3xDE8FhjeMdQfmH86QeDpilhFBrKk2-NjDQRqj7IfL1oT5nlIMUn4sZs5wt2w5J5HgSwsEgwYFVFL7RlzxZrdjt9w9nubafoF9G5gVVpW6SkEqcgHBL9T-avi4WkpczqnQR9GvoB9xHmmKw3PPmP3qMMw",
    gallery: ["AU_ZVEGlIWmS0liDnUJOplMWi3IdV_IlZRsgzskSXTYZyemOPdnKx4gTLWr9I27E-fgAcr4X22kD-zVqjVd_4wIGi87i4C-0zwstvE_NPXP_KHoLKbbvB9PXX8aLj_fAHd4ApXT1LerqXtDVoAlB3LUMNB7v9dyWohyyYMNWZkzksbRbxJxf46vjymotAll7WpRdA2tVJzv0ydJHCklXUuWYrbCH9xNIPSUt1hYMwSZt4x7uPwM_2g-weI9jw1KVofsP7XR0DkYtnhD_UoabFbJhpnfp3vBhH5HcE8xevFw1CKo9hQ","AU_ZVEEFJOgQQ7xGIsGxF4m_C9sqGMAPnQcIyzdda9H2n3c5EcGxgA0PKihNT48LEzAP4fOH4v7GTNGLfgkPA9R43cXoXF2yJ2MDEzdmeGUWv7RdgH-U_VFZRIUwF0XZ29-4kJ5qytgZtP8YFuCjD5WeCAFHJMxYz9bcUqOS536OYP_iF-AqnPnqS6CTD7amgkoh_4yGbnlUyesNNiSEdAJqRtWSzEXI9Ij2kzYHnQrYEzZ9LuuFRm2eBSfhgpeV395AViEVZgf9hTdkhrxjEJHB9AQ28ahOXKxeagXGQIoxun3V9gswJHJ9sI72HSvgNO3XdW-YUYEmiQPJfCarZlffPK6Wc5KrG3ZVeV90pdaWp45FhCjJNVin5T90R7S3YQJO0-Bwonq4YGaKHl6G-WWTYrvKsTVvnuJFK5Nc6TRrHyy4yw"]
  },
  verified: true,
  google_rating: 4.1,
  real_talk: {
    text: "Brasserie Auteuil, c'est l'usine à bonheur du quartier. C'est grand, c'est beau, et les prix restent corrects pour le 16ème. La nourriture est efficace, sans être révolutionnaire, mais le cadre du rooftop compense largement. C'est souvent très fréquenté par une jeunesse dorée et dynamique.",
    must_eat: "Pizza Truffe",
    le_secret: "On peut y venir juste pour boire un café le matin, c'est très calme dans une ambiance jardin d'hiver.",
    le_son: "Deep house en fin de journée, playlist brasserie le reste du temps.",
    le_must: "Privatiser un petit coin du rooftop pour un afterwork."
  }
};

export default brasserie_auteuil;
