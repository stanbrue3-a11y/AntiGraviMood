import { SurgicalPlace } from "../../../type-definition";

export const afaria: SurgicalPlace = {
  id: "poi-afaria",
  slug: "afaria",
  name: "Afaria",
  category: "restaurant",
  subcategory: ['bistrot'],
  location: {
    address: "15 Rue Desnouettes, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8360054,
    lng: 2.2916562,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ7eEnvWxw5kcRkqWjeFXm_Hk"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:00, 19:00 – 22:00 | mercredi: 12:00 – 14:00, 19:00 – 22:00 | jeudi: 12:00 – 14:00, 19:00 – 22:00 | vendredi: 12:00 – 14:00, 19:00 – 22:00 | samedi: 12:00 – 14:00, 19:00 – 22:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.restaurant-afaria.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-29",
    verified_at: "2026-03-29",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Terrine d’artichaut au lard fumé", price_cents: 1300 },
          { name: "Cappuccino de langoustines", price_cents: 1200 },
          { name: "Escalope de foie gras poêlé", price_cents: 1300 },
          { name: "Velouté de topinambours, rillettes corail", price_cents: 1100 },
          { name: "Moelleux de courge butternut", price_cents: 1300 },
          { name: "Œuf croustilliant, magret fumé", price_cents: 1200 },
          { name: "Croquettes de pieds de cochon", price_cents: 1300 },
          { name: "Croustillant de gambas au basilic", price_cents: 1400 },
          { name: "Salade de gésiers confits", price_cents: 1200 },
          { name: "Os à moelle rôti à la fleur de sel", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Formule Midi (E + P ou P + D)", price_cents: 2500 },
          { name: "Menu Afaria (E + P + D)", price_cents: 2900 },
          { name: "Magret rôti aux sarments (pour 2)", price_cents: 4400 },
          { name: "Dos de cabillaud rôti, fèves", price_cents: 2200 },
          { name: "Quasi de veau à la crème de thym", price_cents: 2300 },
          { name: "Noix de St Jacques, risotto truffe", price_cents: 2800 },
          { name: "Caille farcie au cochon", price_cents: 2600 },
          { name: "Paleron de bœuf en pot-au-feu", price_cents: 2300 },
          { name: "Confit de canard du Sud-Ouest", price_cents: 2100 },
          { name: "Axoa de veau traditionnel", price_cents: 2000 },
          { name: "Ris d’agneau aux girolles", price_cents: 2500 },
          { name: "Pavé de sandre, sauce beurre rouge", price_cents: 2400 },
          { name: "Légumes de saison rôtis au miel", price_cents: 1800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Millefeuille crème au citron", price_cents: 1000 },
          { name: "Profiteroles vanille, caramel salé", price_cents: 900 },
          { name: "Dôme mousse chocolat passion", price_cents: 1000 },
          { name: "Brioche façon pain perdu", price_cents: 1000 },
          { name: "Tiramisu poire et chocolat", price_cents: 900 },
          { name: "Moelleux tiède au chocolat", price_cents: 1000 },
          { name: "Tarte tatin à l’ananas", price_cents: 1000 },
          { name: "Plateau de fromages des Pyrénées", price_cents: 1200 },
          { name: "Pavlova aux fruits exotiques", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Bouteille d’eau minérale", price_cents: 600 },
          { name: "Verre de vin du Sud-Ouest", price_cents: 700 },
          { name: "Café Richard", price_cents: 300 }
        ]
      }
    ]
  },
  description: `Afaria est une ode vibrante au Sud-Ouest, nichée dans le 15e arrondissement. Sous l’impulsion de la cheffe Ludivine Merlin, cet établissement propose une cuisine de terroir magnifiée par une touche de modernité. Entre les magrets rôtis aux sarments de vigne et les terrines d’artichaut raffinées, chaque plat raconte une histoire de produits sourcés et de passion culinaire. L'ambiance y est chaleureuse, évoquant les grandes tablées basques dans un décor élégant et convivial.`,
  expert_catchline: `Cuisine du Sud-Ouest. Magret rôti aux sarments de vigne & Axoa de veau.`,
  insider_tip: `• **Le Bon Plan** : Visez le déjeuner en semaine pour profiter des formules à 25€, un rapport qualité-prix imbattable pour ce niveau de cuisine.
• **Le Festin** : Ne passez pas à côté des pieds de cochon croustillants suivis du magret de canard à partager.
• **L’Ambiance** : La bibliothèque gourmande à l’entrée et l’accent chantant de l’équipe vous transportent directement dans les Landes.`,
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Vins du Béarn", "Armagnac"],
    must_eat: "Cuisine de bistrot. Le magret de canard rôti aux sarments de vigne.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/afaria/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/afaria/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/afaria/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/afaria/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/afaria/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/afaria/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Le magret de canard rôti aux sarments de vigne.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default afaria;
