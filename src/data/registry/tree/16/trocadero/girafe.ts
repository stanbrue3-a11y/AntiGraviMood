import { SurgicalPlace } from "../../../type-definition";

export const girafe: SurgicalPlace = {
  id: "poi-girafe",
  slug: "girafe",
  name: "Girafe",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "1 Pl. du Trocadéro et du 11 Novembre, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.8630338,
    lng: 2.2885823,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJw7pLvsNv5kcRnYS9wwGfwsI"
  },
  moods: {
    chill: 40,
    festif: 85,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 18:00 – 02:00 | mardi: 12:00 – 14:30, 18:00 – 02:00 | mercredi: 12:00 – 14:30, 18:00 – 02:00 | jeudi: 12:00 – 14:30, 18:00 – 02:00 | vendredi: 12:00 – 14:30, 18:00 – 02:00 | samedi: 12:00 – 14:30, 19:00 – 03:00 | dimanche: 12:00 – 14:30, 19:00 – 02:00",
    reservation_policy: "resa_obligatoire",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://girafe-restaurant.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 120,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Entrées de la Mer",
        items: [
          { name: "Huîtres Gillaudeau (la demi-douzaine)", price: "36€", description: "Spéciales n°3, fleur de sel" },
          { name: "Carpaccio de Saint-Jacques", price: "28€", description: "Agrumes et huile de vanille", highlight: true },
          { name: "Tarama de la Maison", price: "14€", description: "Blinis maison tout chauds" },
          { name: "Tataki de Thon", price: "26€", description: "Huile de sésame et gingembre" },
          { name: "Crevettes Obsiblue", price: "32€", description: "Juste saisies, citron vert" }
        ]
      },
      {
        category: "Plats Signatures",
        items: [
          { name: "Linguine à la Homard", price: "48€", description: "Jus de carcasse corsé", highlight: true },
          { name: "Sole de Petit Bateau", price: "55€", description: "Meunière ou grillée, 400g-500g" },
          { name: "Turbot Rôti", price: "52€", description: "Purée de topinambour et beurre noisette" },
          { name: "Pavé de Bar à la Plancha", price: "42€", description: "Légumes de saison sautés" },
          { name: "Spaghetti aux Truffes Noires", price: "45€" }
        ]
      },
      {
        category: "Desserts & Douceurs",
        items: [
          { name: "Éclair XXL au Chocolat", price: "18€", description: "Le classique de la maison", highlight: true },
          { name: "Mille-feuille Vanille", price: "16€" },
          { name: "Pavlova aux Fruits Rouges", price: "15€" },
          { name: "Glaces & Sorbets Artisanaux", price: "12€" }
        ]
      },
      {
        category: "Cave & Cocktails",
        items: [
          { name: "Cocktail 'Lady Girafe'", price: "22€", description: "Gin, fraise, basilic" },
          { name: "Coupe de Ruinart Bleu de Blancs", price: "28€" },
          { name: "Bouteille de Chablis 1er Cru", price: "95€" },
          { name: "Eau Minérale (75cl)", price: "10€" },
          { name: "Expresso", price: "7€" }
        ]
      }
    ]
  },
  description: `Girafe est sans doute le restaurant le plus instagrammable de Paris, mais c'est aussi une table marine de haut vol. Installé au cœur de la Cité de l'Architecture et du Patrimoine, l'établissement dispose d'une terrasse spectaculaire avec une vue plongeante sur la Tour Eiffel. La décoration années 30 signée Joseph Dirand crée une atmosphère chic et feutrée, parfaite pour déguster des produits de la mer d'une fraîcheur absolue.`,
  expert_catchline: `Le plus beau face-à-face avec la Dame de Fer autour d'un plateau de fruits de mer.`,
  insider_tip: `• **Le Balcon** : C'est la place la plus convoitée de Paris. Réservez des semaines à l'avance et précisez 'en terrasse' pour avoir la Tour Eiffel en arrière-plan.
  • **Le Soir** : Attendez l'heure pile pour voir la Tour Eiffel scintiller, c'est le moment magique de Girafe.
  • **Le Homard** : Les linguines au homard sont la valeur sûre de la carte, généreuses et parfaitement exécutées.`,
  specials: {
    cuisine: ["Seafood", "Français"],
    drinks: ["Grands Crus", "Champagnes de prestige"],
    must_eat: "Cuisine Marine. Les Linguine au Homard.",
  },
  images: {
    hero: "AU_ZVEGE0kYlq2pf7P5GCtTM7uGe6Zv-Lvw5tovZIdTwPhBrg7pwFkBbDN2_Tu6eH0-qSR5N3I5-pPDmGoCi6vn2s5-jAJmOh3EA5AL0hta5dfOTW-1XHKM4dbwpK1feTLz9S-ZIYEre-iun0rZJ9TY4SCR2reM7cRssd8Rpdai4s5PYD8Pu94zbxjlyzAPKVRuru2nMIF3YHbvf3C_isnqB1Br_rvA1o9ytPJf-FFR3LFsyCzqaVhnJKqrW---vnuySSJqIY8iH-gR0xVQySqMUAhDsRgKjoBVdqh0NjwE8bj76mA",
    gallery: ["AU_ZVEGlIWmS0liDnUJOplMWi3IdV_IlZRsgzskSXTYZyemOPdnKx4gTLWr9I27E-fgAcr4X22kD-zVqjVd_4wIGi87i4C-0zwstvE_NPXP_KHoLKbbvB9PXX8aLj_fAHd4ApXT1LerqXtDVoAlB3LUMNB7v9dyWohyyYMNWZkzksbRbxJxf46vjymotAll7WpRdA2tVJzv0ydJHCklXUuWYrbCH9xNIPSUt1hYMwSZt4x7uPwM_2g-weI9jw1KVofsP7XR0DkYtnhD_UoabFbJhpnfp3vBhH5HcE8xevFw1CKo9hQ","AU_ZVEEFJOgQQ7xGIsGxF4m_C9sqGMAPnQcIyzdda9H2n3c5EcGxgA0PKihNT48LEzAP4fOH4v7GTNGLfgkPA9R43cXoXF2yJ2MDEzdmeGUWv7RdgH-U_VFZRIUwF0XZ29-4kJ5qytgZtP8YFuCjD5WeCAFHJMxYz9bcUqOS536OYP_iF-AqnPnqS6CTD7amgkoh_4yGbnlUyesNNiSEdAJqRtWSzEXI9Ij2kzYHnQrYEzZ9LuuFRm2eBSfhgpeV395AViEVZgf9hTdkhrxjEJHB9AQ28ahOXKxeagXGQIoxun3V9gswJHJ9sI72HSvgNO3XdW-YUYEmiQPJfCarZlffPK6Wc5KrG3ZVeV90pdaWp45FhCjJNVin5T90R7S3YQJO0-Bwonq4YGaKHl6G-WWTYrvKsTVvnuJFK5Nc6TRrHyy4yw"]
  },
  verified: true,
  google_rating: 3.9,
  real_talk: {
    text: "Girafe, on y vient pour la vue, on y reste pour le poisson. Joseph Dirand a fait un travail de dingue sur l'ambiance. C'est le spot de drague ultime mais aussi une vraie bonne table de la mer. Attention, le service peut être un peu speed les soirs d'affluence.",
    must_eat: "Linguine au Homard",
    le_secret: "La terrasse est chauffée en hiver, ce qui permet de profiter de la vue même par 5 degrés.",
    le_son: "Un brouhaha chic, dynamique, très parisien.",
    le_must: "Le plateau de fruits de mer Impérial à partager au soleil couchant."
  }
};

export default girafe;
