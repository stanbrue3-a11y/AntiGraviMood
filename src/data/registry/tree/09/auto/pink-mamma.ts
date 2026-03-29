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
        category_type: "starter",
        display_label: "Antipasti (Entrées)",
        items: [
          { name: "Pulled Pork Dips (Fritures de porc effiloché)", price_cents: 800, is_highlight: true },
          { name: "Focaccia e Prosciutto San Daniele DOP", price_cents: 800 },
          { name: "Gorgonzola for Lovers, Poires & Noix", price_cents: 900 },
          { name: "Arancini à la Truffe & Cœur Fondant", price_cents: 1000, is_highlight: true },
          { name: "Carpaccio de Bœuf, Grenade & Orange", price_cents: 1500, is_highlight: true },
          { name: "Polpette de Bœuf & Sauce San Marzano", price_cents: 1900 },
          { name: "Calamar Fritti & Sauce Tartare Maison", price_cents: 1200 },
          { name: "Zuppa di Castagne (Châtaigne & Courge)", price_cents: 800 },
          { name: "So the Moon (Gravelax de Saumon & Blinis)", price_cents: 1000 }
        ]
      },
      {
        category_type: "other",
        display_label: "La Burrata di Puglia",
        items: [
          { name: "Burrata Verde (Olives Taggiasche & Estragon)", price_cents: 800, is_highlight: true },
          { name: "Burrata Autunno (Champignons & Châtaignes)", price_cents: 800 },
          { name: "Burrata Mare (Anchois Marinés & Poutargue)", price_cents: 800 },
          { name: "Big Burrata Mix (Dégustation x3)", price_cents: 2200, is_highlight: true },
          { name: "Burrata Classique à l'Huile d'Olive Extra Vierge", price_cents: 700 }
        ]
      },
      {
        category_type: "main",
        display_label: "La Pasta della Casa (Plats)",
        items: [
          { name: "Pâtes à la Truffe Fraîche et Mascarpone", price_cents: 2000, is_highlight: true },
          { name: "Pasta Fusilli Carbonara Classica", price_cents: 1850, is_highlight: true },
          { name: "Lasagne Maison à la Bolognaise", price_cents: 1700 },
          { name: "Mafalde à la Crème de Truffe Noire", price_cents: 2100, is_highlight: true },
          { name: "Linguine aux Coques & Bottarga", price_cents: 1950 },
          { name: "Gnocchi au Pesto de Basilic Frais", price_cents: 1600 },
          { name: "Ravioli à la Ricotta di Bufala & Épinards", price_cents: 1750 }
        ]
      },
      {
        category_type: "main",
        display_label: "La Braceria (Grillades & Plats)",
        items: [
          { name: "Bistecca alla Fiorentina (T-Bone 800g)", price_cents: 5800, is_highlight: true },
          { name: "Tomahawk di Manzo (1.3kg à partager)", price_cents: 8400, is_highlight: true },
          { name: "Tagliata de Bœuf, Roquette & Parmesan", price_cents: 2600, is_highlight: true },
          { name: "Filet de Bœuf au Feu de Bois", price_cents: 3200 },
          { name: "Saucisse Italienne Grillée & Fenouil", price_cents: 1800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Dolci & Caffè (Desserts)",
        items: [
          { name: "Tiramisu Mythique (Servi à la cuillère)", price_cents: 850, is_highlight: true },
          { name: "Passionmisu (Mangue, Passion & Matcha)", price_cents: 900 },
          { name: "Flaming Crème Brûlée à l'Italienne", price_cents: 950, is_highlight: true },
          { name: "Panna Cotta aux Fruits Rouges de Saison", price_cents: 750 },
          { name: "Gelato Artigianale Stracciatella", price_cents: 650 },
          { name: "Sorbetto al Limone di Sicilia", price_cents: 600 },
          { name: "Espresso Napoletano (Gran Espresso)", price_cents: 250 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cocktails & Spritz (Boissons)",
        items: [
          { name: "Spritz Classico (Aperol, Prosecco)", price_cents: 1000, is_highlight: true },
          { name: "Bellini Spritz Cocktail Signature", price_cents: 1200, is_highlight: true }
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
