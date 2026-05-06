import { SurgicalPlace } from "../../../type-definition";

export const le_troquet: SurgicalPlace = {
  id: "poi-le-troquet",
  slug: "le-troquet",
  name: "Le Troquet",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "21 Rue François Bonvin, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8449807,
    lng: 2.3058898,
    nearest_metro: "Sèvres - Lecourbe",
    metro_lines: ["6"],
    google_id: "ChIJd_QQDTtw5kcRReydJyl1KsA"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:00, 19:30 – 22:15 | mercredi: 12:00 – 14:00, 19:30 – 22:15 | jeudi: 12:00 – 14:00, 19:30 – 22:15 | vendredi: 12:00 – 14:00, 19:30 – 22:15 | samedi: 12:00 – 14:00, 19:30 – 22:15 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.restaurantletroquet.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Formules du Troquet",
        items: [
          { name: "Menu Bistrot (Entrée + Plat + Dessert)", price_cents: 4800, description: "La totale pour les bons vivants, selon l’ardoise du jour.", is_highlight: true },
          { name: "Menu Déjeuner", price_cents: 3200, description: "Entrée + Plat ou Plat + Dessert (Midi uniquement en semaine)" }
        ]
      },
      {
        category_type: "starter",
        display_label: "Pour se mettre en appétit",
        items: [
          { name: "Pâté en Croûte Maison", price_cents: 1400, description: "Cochon, volaille, pistaches, pickles de légumes", is_highlight: true },
          { name: "Soupe de Poissons de Roche", price_cents: 1200, description: "Rouille maison, croûtons aillés et gruyère râpé" },
          { name: "Asperges Vertes des Landes", price_cents: 1600, description: "Œuf mollet, vinaigrette aux agrumes" },
          { name: "Carpaccio de Tête de Veau", price_cents: 1300, description: "Sauce gribiche, herbes fraîches" },
          { name: "Couteaux à la Plancha", price_cents: 1500, description: "Persillade, beurre noisette" },
          { name: "Poireaux Vinaigrette Revisités", price_cents: 1100, description: "Vinaigrette à l’ancienne, noisettes torréfiées" }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Canaille & Tradition",
        items: [
          { name: "Côte de Bœuf pour deux", price_cents: 8500, description: "Maturée 30 jours, frites maison au couteau, béarnaise (Prix pour 2 personnes)" },
          { name: "Ris de Veau Dorés au Sautoir", price_cents: 3800, description: "Macaronis gratinés, jus corsé à la truffe", is_highlight: true },
          { name: "Poitrine de Volailles Jaune", price_cents: 2600, description: "Légumes de saison rôtis, suprême au vin jaune" },
          { name: "Dos de Cabillaud Rôti", price_cents: 2800, description: "Risotto crémeux, émulsion de coquillages" },
          { name: "Saucisse Purée (Plat Canaille)", price_cents: 2200, description: "Purée fondante au beurre, jus de rôti déglacé" },
          { name: "Canette de Challans", price_cents: 2900, description: "Chou rouge braisé, jus acidulé" },
          { name: "Pigeon Rôti sur le Coffre", price_cents: 3400, description: "Cuisse confite, petits pois à la française" }
        ]
      },
      {
        category_type: "sharing",
        display_label: "Fromages Affinés",
        items: [
          { name: "Assiette de Fromages d’Ossau-Iraty", price_cents: 1200, description: "Confiture de cerises noires d’Itxassou" },
          { name: "Camembert Rôti au Four", price_cents: 1600, description: "Thym, miel, mouillettes" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Desserts",
        items: [
          { name: "Véritable Gâteau Basque", price_cents: 1100, description: "Crème pâtissière ou cerise noire, glace vanille", is_highlight: true },
          { name: "Riz au Lait de notre Enfance", price_cents: 900, description: "Caramel au beurre salé, nougatine" },
          { name: "Mousse au Chocolat Tiède", price_cents: 1000, description: "Glace vanille turbinée minute" },
          { name: "Profiteroles XXL", price_cents: 1200, description: "Chou craquelin, glace vanille, sauce chocolat chaud" },
          { name: "Tarte Fine aux Pommes", price_cents: 1100, description: "Cuite à la commande (Attente 15 minutes)" }
        ]
      },
      {
        category_type: "drink",
        display_label: "Coups à Boire (Cartes des Vins)",
        items: [
          { name: "Verre de l’Amitié (Vin de Soif)", price_cents: 600 },
          { name: "Verre de Madiran", price_cents: 800 },
          { name: "Bouteille de Minervois", price_cents: 3500 },
          { name: "Bouteille de Saint-Joseph", price_cents: 4800 },
          { name: "Bière Pression Demi", price_cents: 450 },
          { name: "Bière Pression Pinte", price_cents: 850 },
          { name: "Café Allongé", price_cents: 350 },
          { name: "Cognac ou Armagnac (Digestif)", price_cents: 1200 }
        ]
      }
    ]
  },
  description: `Une authentique pépite du 15ème arrondissement où l’âme bistrotier croise le Sud-Ouest avec panache. Avec ses nappes à carreaux vichy rouge et son zinc patiné, le Troquet de Marc Lèze respecte un dogme absolu : la glorification du gras, du bonbon de viande et du jus corsé. La côte de bœuf pour deux y est majestueuse, et le ris de veau fait pleurer les puristes. Le bruit des fourchettes résonne, les verres trinquent, c’est l'anti-fast-food par excellence.`,
  expert_catchline: `Le bistrot franchouillard culte du 15ème : générosité, viande et amour.`,
  insider_tip: `• **Dîner Canaille** : Ne manquez surtout pas le menu complet à 48€, dont le rapport qualité-prix-satiété est quasi imbattable à Paris.
  • **Le Must-Have** : S'il y a du Pâté en Croûte, commandez-le sans réfléchir. Suivez de près avec le Gâteau Basque.
  • **Casting** : Parfait pour y emmener des amis viandards ou un "bon vivant" qui ne jure que par la tradition.`,
  specials: {
    cuisine: ["Français"],
    must_eat: `Cuisine Sud-Ouest authentique. Ris de veau dorés & Gâteau basque.`
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-troquet/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-troquet/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-troquet/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-troquet/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-troquet/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-troquet/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Français. Le Troquet.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_troquet;
