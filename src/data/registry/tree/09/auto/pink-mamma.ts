import { SurgicalPlace } from "../../../type-definition";

export const pink_mamma: SurgicalPlace = {
  id: "poi-pink-mamma",
  slug: "pink-mamma",
  name: "Pink Mamma",
  category: "restaurant",
  subcategory: ["italien", "trattoria", "grillades", "vibrant", "institution", "cocktail-bar"],
  location: {
    address: "20 Bis Rue de Douai, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8824151,
    lng: 2.3338428,
    nearest_metro: "Pigalle",
    metro_lines: [2, 12],
    google_id: "ChIJ8X9a6URu5kcRQhFvU3o_X6o"
  },
  moods: {
    chill: 60,
    festif: 90,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–14:30, 18:45–22:45",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: false,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.bigmammagroup.com/fr/trattorias/pink-mamma",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 20, // Prix des Pâtes à la Truffe
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Antipasti (Entrées)",
        items: [
          { name: "Pulled Pork Dips (Fritures de porc effiloché)", price: "8.00€", highlight: true },
          { name: "Focaccia e Prosciutto San Daniele DOP", price: "8.00€" },
          { name: "Gorgonzola for Lovers, Poires & Noix", price: "9.00€" },
          { name: "Arancini à la Truffe & Cœur Fondant", price: "10.00€", highlight: true },
          { name: "Carpaccio de Bœuf, Grenade & Orange", price: "15.00€", highlight: true },
          { name: "Polpette de Bœuf & Sauce San Marzano", price: "19.00€" },
          { name: "Calamar Fritti & Sauce Tartare Maison", price: "12.00€" },
          { name: "Zuppa di Castagne (Châtaigne & Courge)", price: "8.00€" },
          { name: "So the Moon (Gravelax de Saumon & Blinis)", price: "10.00€" }
        ]
      },
      {
        category: "La Burrata di Puglia",
        items: [
          { name: "Burrata Verde (Olives Taggiasche & Estragon)", price: "8.00€", highlight: true },
          { name: "Burrata Autunno (Champignons & Châtaignes)", price: "8.00€" },
          { name: "Burrata Mare (Anchois Marinés & Poutargue)", price: "8.00€" },
          { name: "Big Burrata Mix (Dégustation x3)", price: "22.00€", highlight: true },
          { name: "Burrata Classique à l'Huile d'Olive Extra Vierge", price: "7.00€" }
        ]
      },
      {
        category: "La Pasta della Casa (Plats)",
        items: [
          { name: "Pâtes à la Truffe Fraîche et Mascarpone", price: "20.00€", highlight: true },
          { name: "Pasta Fusilli Carbonara Classica", price: "18.50€", highlight: true },
          { name: "Lasagne Maison à la Bolognaise", price: "17.00€" },
          { name: "Mafalde à la Crème de Truffe Noire", price: "21.00€", highlight: true },
          { name: "Linguine aux Coques & Bottarga", price: "19.50€" },
          { name: "Gnocchi au Pesto de Basilic Frais", price: "16.00€" },
          { name: "Ravioli à la Ricotta di Bufala & Épinards", price: "17.50€" }
        ]
      },
      {
        category: "La Braceria (Grillades & Plats)",
        items: [
          { name: "Bistecca alla Fiorentina (T-Bone 800g)", price: "58.00€", highlight: true },
          { name: "Tomahawk di Manzo (1.3kg à partager)", price: "84.00€", highlight: true },
          { name: "Tagliata de Bœuf, Roquette & Parmesan", price: "26.00€", highlight: true },
          { name: "Filet de Bœuf au Feu de Bois", price: "32.00€" },
          { name: "Saucisse Italienne Grillée & Fenouil", price: "18.00€" }
        ]
      },
      {
        category: "Dolci & Caffè (Desserts)",
        items: [
          { name: "Tiramisu Mythique (Servi à la cuillère)", price: "8.50€", highlight: true },
          { name: "Passionmisu (Mangue, Passion & Matcha)", price: "9.00€" },
          { name: "Flaming Crème Brûlée à l'Italienne", price: "9.50€", highlight: true },
          { name: "Panna Cotta aux Fruits Rouges de Saison", price: "7.50€" },
          { name: "Gelato Artigianale Stracciatella", price: "6.50€" },
          { name: "Sorbetto al Limone di Sicilia", price: "6.00€" },
          { name: "Espresso Napoletano (Gran Espresso)", price: "2.50€" }
        ]
      },
      {
        category: "Cocktails & Spritz (Boissons)",
        items: [
          { name: "Spritz Classico (Aperol, Prosecco)", price: "10.00€", highlight: true },
          { name: "Bellini Spritz Cocktail Signature", price: "12.00€", highlight: true }
        ]
      }
    ]
  },
  description: "Pink Mamma est la cathédrale transalpine spectaculaire du 9ème arrondissement. Répartie sur quatre étages baignés de lumière, cette trattoria du groupe Big Mamma rend hommage à Florence et à sa célèbre 'Braceria'. On y vient pour la vue imprenable sous la verrière du dernier étage, mais surtout pour ses viandes maturées grillées au feu de bois et ses pâtes à la truffe devenues légendaires. L'ambiance y est électrique, généreuse et résolument festive, complétée par un bar speakeasy caché au sous-sol pour finir la soirée en beauté.",
  insider_tip: "• **La Verrière** : Pour une expérience visuelle optimale, demandez une table au dernier étage sous la verrière lors de votre réservation.\n• **Pâtes à la Truffe** : C'est le 'must' absolu de la maison, ultra-crémeux et généreux en truffe fraîche.\n• **No Entry** : Ne partez pas sans avoir déniché l'entrée secrète du bar à cocktails au sous-sol, caché derrière les portes d'une chambre froide.",
  specials: {
    cuisine: ["Cuisine Florentine (Braceria)", "Pâtes fraîches maison", "Pizzas au feu de bois"],
    drinks: ["Cocktails créatifs au bar No Entry", "Vins italiens en direct des vignerons", "Sélection de Spritz"],
    must_eat: "La Bistecca alla Fiorentina (58€) : une côte de bœuf d'exception cuite à la flamme, pour les vrais amateurs de viande.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEH9z-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEE-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGx-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default pink_mamma;
