import { SurgicalPlace } from "../../../type-definition";

export const brasserie_auteuil: SurgicalPlace = {
  id: "poi-brasserie-auteuil-16",
  slug: "brasserie-auteuil",
  name: "Brasserie Auteuil",
  category: "restaurant",
  subcategory: ['italien', 'français'],
  location: {
    address: "78 Rue d’Auteuil, 75016 Paris",
    arrondissement: 16,
    lat: 48.8471587,
    lng: 2.2612745,
    nearest_metro: "Porte d’Auteuil",
    metro_lines: [10],
    google_id: "ChIJbXk0LzRv5kcRSX6M9P75Y4U"
  },
  moods: {
    chill: 50,
    festif: 85,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "Lun-Dim: 09h-02h",
    reservation_policy: "resa_conseillee",
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
        category_type: "sharing",
        display_label: "Antipasti (À Partager)",
        items: [
          { name: "Mezzés d’Auteuil", price_cents: 2050, description: "Houmous, burrata, croquettes à la truffe, légumes grillés", is_highlight: true },
          { name: "Burrata Crémeuse", price_cents: 1450, description: "Pesto de basilic et pignons de pin" },
          { name: "Croquettes de Risotto", price_cents: 1250, description: "Cœur fondant à la truffe d’été" },
          { name: "Calamars Fritti", price_cents: 1300, description: "Zeste de citron vert et sauce tartare" },
          { name: "Planche Italienne", price_cents: 1900, description: "Prosciutto, mortadelle, coppa et olives" },
          { name: "Bruschetta Tomate Basilic", price_cents: 1100, description: "Frottée à l’ail et huile d'olive" },
          { name: "Stracciatella & Focaccia", price_cents: 1500, description: "Le cœur de la mozza, huile de truffe" },
          { name: "Carpaccio de Bœuf", price_cents: 1600, description: "Parmesan, roquette et câpres" }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizzas au Feu de Bois",
        items: [
          { name: "Pizza Truffe & Mascarpone", price_cents: 2200, description: "La spécialité incontournable de la maison", is_highlight: true },
          { name: "Pizza Regina Classica", price_cents: 1650, description: "Jambon blanc de Paris, champignons frais" },
          { name: "Pizza Piccante", price_cents: 1850, description: "Salami piquant, piment et mozzarella fior di latte" },
          { name: "Pizza Végétarienne", price_cents: 1750, description: "Artichauts, poivrons, courgettes et pesto" },
          { name: "Margherita Bio", price_cents: 1450, description: "Tomates San Marzano, mozza et basilic" },
          { name: "Pizza 4 Fromaggi", price_cents: 1950, description: "Gorgonzola, fontina, provolone et mozza" },
          { name: "Pizza Bresaola", price_cents: 2050, description: "Bœuf séché, copeaux de parmesan et roquette" }
        ]
      },
      {
        category_type: "main",
        display_label: "Primi & Secondi (Plats)",
        items: [
          { name: "Linguine aux Gambas", price_cents: 2450, description: "Flambées au pastis, sauce tomate épicée", is_highlight: true },
          { name: "Aubergines Parmigiana", price_cents: 1850, description: "Gratinées à la mozzarella et aubergines fondantes" },
          { name: "Salade César Auteuil", price_cents: 1950, description: "Poulet croustillant, romaine, sauce anchois" },
          { name: "Pavé de Saumon Rôti", price_cents: 2300, description: "Légumes d’été et vierge de légumes" },
          { name: "Burger Auteuil Gorgonzola", price_cents: 2150, description: "Pain brioché, bœuf 180g, crème de bleu" },
          { name: "Rigatoni à la Truffe", price_cents: 2650, description: "Crème de truffe légère et noisettes" },
          { name: "Escalope Milanaise", price_cents: 2500, description: "Veau pané, linguine tomate" },
          { name: "Tartare de Bœuf Italien", price_cents: 2200, description: "Coupé au couteau, pesto et parmesan" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Gourmandises",
        items: [
          { name: "Tiramisu Maison", price_cents: 950, description: "Recette traditionnelle au café", is_highlight: true },
          { name: "Brioche Perdue", price_cents: 1050, description: "Caramel beurre salé et glace vanille" },
          { name: "Mousse au Chocolat XXL", price_cents: 1150 },
          { name: "Panna Cotta Mangue", price_cents: 900 },
          { name: "Affogato al Caffè", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Aperitivo & Cocktails",
        items: [
          { name: "Auteuil Spritz", price_cents: 1400, description: "Lero Lero, Prosecco, fruit de la passion" },
          { name: "Moscow Mule Auteuil", price_cents: 1500 },
          { name: "Pinte Blonde Auteuil", price_cents: 900 },
          { name: "Verre de Chianti Docg", price_cents: 1100 },
          { name: "Expresso", price_cents: 350 },
          { name: "Thé Glacé Maison", price_cents: 750 }
        ]
      }
    ]
  },
  description: "Nichée dans l’ancienne gare de la Petite Ceinture, la Brasserie Auteuil est un véritable poumon végétal au cœur du 16ème sud. Son atout maître est un immense rooftop arboré, chauffé l’hiver et ensoleillé l’été, qui invite à l’aperitivo italien. Dans un décor d’inspiration toscane, entre lierre grimpant et bois clair, on y déguste une cuisine transalpine généreuse, des pizzas au feu de bois et des cocktails créatifs. C’est l’adresse idéale pour une pause décontractée et stylée, loin de l'agitation parisienne.",
  expert_catchline: "Le plus grand rooftop végétalisé du 16ème dans une ancienne gare.",
  insider_tip: `• **L'Aperitivo** : Arrivez pour l'aperitivo afin de profiter de la lumière dorée sur le rooftop.
  • **Le Must** : La pizza à la truffe est une valeur sûre qui ne déçoit jamais.
  • **Match Day** : Ambiance électrique les soirs de match à Roland-Garros.`,
  specials: {
    cuisine: ["Italien"],
    drinks: ["Auteuil Spritz", "Cocktails Maison"],
    must_eat: "Cuisine de brasserie. Pizza Truffe & Mascarpone & Linguine aux Gambas.",
    must_drink: "Auteuil Spritz"
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-auteuil/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-auteuil/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-auteuil/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-auteuil/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-auteuil/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/brasserie-auteuil/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.1,
  instagram_handle: "brasserieauteuil",
  real_talk: {
    text: "Le spot phare du sud du 16ème. C’est grand, c’est vert et l’ambiance rooftop est imbattable dans le quartier. On y vient pour la coolitude apparente et les cocktails bien dosés.",
    must_eat: "Cuisine de brasserie. Pizza à la Truffe.",
    le_secret: "La bibliothèque au rez-de-chaussée est parfaite pour travailler au calme le matin.",
    le_son: "Deep house chill et sons ensoleillés.",
    le_must: "Dîner entre amis sur le rooftop sous les guirlandes guinguette."
  }
};

export default brasserie_auteuil;
