import { SurgicalPlace } from "../../../type-definition";

export const buvette_paris: SurgicalPlace = {
  id: "poi-buvette-paris",
  slug: "buvette-paris",
  name: "Buvette Paris",
  category: "restaurant",
  subcategory: ["gastrobar", "brunch", "bistrot", "vin-naturel", "institution"],
  location: {
    address: "28 Rue Henry Monnier, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.88044,
    lng: 2.3377375,
    nearest_metro: "Saint-Georges",
    metro_lines: [12],
    google_id: "ChIJcQXFZkZu5kcRM7dlSZoQVK8"
  },
  moods: {
    chill: 90,
    festif: 70,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 09:00–00:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://ilovebuvette.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 35,
    is_free: false,
    dish_price: 21, // Prix du Coq au Vin
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Brunch & Matinées (Entrées)",
        items: [
          { name: "Œufs Brouillés Jambon de Bayonne & Parmesan", price_cents: 1600, is_highlight: true },
          { name: "Œufs Brouillés Saumon Fumé & Câpres", price_cents: 1800, is_highlight: true },
          { name: "Œufs Brouillés Chèvre & Tomates Confites", price_cents: 1500 },
          { name: "Gaufre Maison 'Waffle Sandwich' (Bacon, Œuf)", price_cents: 1500, is_highlight: true },
          { name: "Gaufre Maison & Confiture ou Nutella", price_cents: 1300 },
          { name: "Pain Perdu au Cognac & Crème Épaisse", price_cents: 1400, is_highlight: true },
          { name: "Scones Maison, Beurre & Marmelade", price_cents: 500 },
          { name: "Madeleines à la Vanille (les 3)", price_cents: 400 }
        ]
      },
      {
        category_type: "main",
        display_label: "Cuisine de Marché (Plats)",
        items: [
          { name: "Coq au Vin Signature & Gratin Dauphinois", price_cents: 2100, is_highlight: true },
          { name: "Parmentier de Bœuf & Purée Onctueuse", price_cents: 1500 },
          { name: "Parmentier de Canard, Purée & Céleri", price_cents: 2100, is_highlight: true },
          { name: "Brandade de Morue sur Fondue de Poireaux", price_cents: 1800, is_highlight: true },
          { name: "Rillettes de Saumon Frais au Citron", price_cents: 1900 },
          { name: "Os à Moelle, Ail Confit & Champignons", price_cents: 1700, is_highlight: true },
          { name: "Salade de Lentilles du Puy Maison", price_cents: 1100 },
          { name: "Pâté en Croûte Artisanal & Pickles", price_cents: 1450 }
        ]
      },
      {
        category_type: "main",
        display_label: "Croque & Tartines (Plats)",
        items: [
          { name: "Croque Madame (Cr'Q Mme) & Œuf au Plat", price_cents: 1550, is_highlight: true },
          { name: "Croque Monsieur Classique & Jambon Blanc", price_cents: 1300 },
          { name: "Tartine Pesto de Noix & Fromage", price_cents: 1300 },
          { name: "Tartine Pesto de Fèves & Menthe", price_cents: 1200 },
          { name: "Tartine Mousse de Foie de Volaille", price_cents: 1200 },
          { name: "Tartine Pesto de Bayonne & Roquette", price_cents: 1300 },
          { name: "Tartine Boudin Noir & Pommes Caramélisées", price_cents: 1400, is_highlight: true },
          { name: "Tartine Aligot & Jambon Cru", price_cents: 1500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs Gourmandes (Desserts)",
        items: [
          { name: "Fondant au Chocolat & Crème d'Isigny", price_cents: 700, is_highlight: true },
          { name: "Tarte Tatin Maison & Crème Fraîche", price_cents: 850, is_highlight: true },
          { name: "Mousse au Chocolat Noir Intense", price_cents: 750 },
          { name: "Sorbet Citron Jaune & Menthe Fraîche", price_cents: 650 },
          { name: "Fromage de Chèvre Fermier & Miel", price_cents: 950 },
          { name: "Cookie aux Pépites de Chocolat Maison", price_cents: 450 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de la Gastrothèque (Boissons)",
        items: [
          { name: "Coupe de Champagne Pierre Gimonnet 1er Cru", price_cents: 1400, is_highlight: true },
          { name: "Verre de Vin Blanc (Sélection Loire)", price_cents: 850 },
          { name: "Verre de Vin Rouge (Sélection Terroir)", price_cents: 900 },
          { name: "Cocktail Mimosa (Brunch Signature)", price_cents: 1100, is_highlight: true },
          { name: "Café Latte de Spécialité", price_cents: 550 },
          { name: "Jus de Pamplemousse Frais Pressé", price_cents: 650, is_highlight: true },
          { name: "Eau Micro-filtrée Buvette (75cl)", price_cents: 450 }
        ]
      }
    ]
  },
  description: "Buvette Paris est la 'gastrothèque' culte du 9ème arrondissement, véritable pont entre l'énergie de New York et l'art de vivre français. Situé dans la charmante rue Henry Monnier, ce lieu hybride propose un service continu, du café matinal au cocktail tardif. On y vient pour ses célèbres œufs vapeur au brunch, ses croque-madame iconiques ou son coq au vin réconfortant. Le décor, mêlant briques apparentes, bois patiné et marbre, crée une atmosphère intime et vibrante où chaque détail célèbre le produit brut et le partage.",
  insider_tip: "• **Le Croque Madame** : Appelé 'Cr'Q Mme' sur la carte, c'est le meilleur de SoPi, demandez-le bien doré.\n• **Sans Réservation** : Le lieu est victime de son succès, surtout le week-end. Arrivez avant 10h pour le brunch ou optez pour un déjeuner tardif en semaine.\n• **Le Coq au Vin** : Un plat de grand-mère magnifié, servi uniquement au dîner, parfait pour les soirées d'hiver.",
  specials: {
    cuisine: ["Gastrothèque Franco-Américaine", "Brunch iconique en service continu", "Cuisine de terroir modernisée"],
    drinks: ["Belle carte de vins naturels", "Champagnes de vignerons", "Cocktails de brunch classiques"],
    must_eat: "Le Coq au Vin (21€) : fondant, intense et servi avec un gratin dauphinois qui vaut le détour.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGoX5X2_s_B7-A7n-D8v9bL7S9T0y-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEERv-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHLB-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.3
};

export default buvette_paris;
