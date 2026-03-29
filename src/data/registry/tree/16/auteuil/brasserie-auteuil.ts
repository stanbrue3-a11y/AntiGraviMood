import { SurgicalPlace } from "../../../type-definition";

export const brasserie_auteuil: SurgicalPlace = {
  id: "poi-brasserie-auteuil-16",
  slug: "brasserie-auteuil",
  name: "Brasserie Auteuil",
  category: "restaurant",
  subcategory: ["italien", "rooftop", "festif", "auteuil"],
  location: {
    address: "78 Rue d'Auteuil, 75016 Paris",
    arrondissement: 16,
    lat: 48.8471587,
    lng: 2.2612745,
    nearest_metro: "Porte d'Auteuil",
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
        category: "Antipasti (À Partager)",
        items: [
          { name: "Mezzés d'Auteuil", price: "20.50€", description: "Houmous, burrata, croquettes à la truffe, légumes grillés", highlight: true },
          { name: "Burrata Crémeuse", price: "14.50€", description: "Pesto de basilic et pignons de pin" },
          { name: "Croquettes de Risotto", price: "12.50€", description: "Cœur fondant à la truffe d'été" },
          { name: "Calamars Fritti", price: "13.00€", description: "Zeste de citron vert et sauce tartare" },
          { name: "Planche Italienne", price: "19.00€", description: "Prosciutto, mortadelle, coppa et olives" },
          { name: "Bruschetta Tomate Basilic", price: "11.00€", description: "Frottée à l'ail et huile d'olive" },
          { name: "Stracciatella & Focaccia", price: "15.00€", description: "Le cœur de la mozza, huile de truffe" },
          { name: "Carpaccio de Bœuf", price: "16.00€", description: "Parmesan, roquette et câpres" }
        ]
      },
      {
        category: "Pizzas au Feu de Bois",
        items: [
          { name: "Pizza Truffe & Mascarpone", price: "22.00€", description: "La spécialité incontournable de la maison", highlight: true },
          { name: "Pizza Regina Classica", price: "16.50€", description: "Jambon blanc de Paris, champignons frais" },
          { name: "Pizza Piccante", price: "18.50€", description: "Salami piquant, piment et mozzarella fior di latte" },
          { name: "Pizza Végétarienne", price: "17.50€", description: "Artichauts, poivrons, courgettes et pesto" },
          { name: "Margherita Bio", price: "14.50€", description: "Tomates San Marzano, mozza et basilic" },
          { name: "Pizza 4 Fromaggi", price: "19.50€", description: "Gorgonzola, fontina, provolone et mozza" },
          { name: "Pizza Bresaola", price: "20.50€", description: "Bœuf séché, copeaux de parmesan et roquette" }
        ]
      },
      {
        category: "Primi & Secondi (Plats)",
        items: [
          { name: "Linguine aux Gambas", price: "24.50€", description: "Flambées au pastis, sauce tomate épicée", highlight: true },
          { name: "Aubergines Parmigiana", price: "18.50€", description: "Gratinées à la mozzarella et aubergines fondantes" },
          { name: "Salade César Auteuil", price: "19.50€", description: "Poulet croustillant, romaine, sauce anchois" },
          { name: "Pavé de Saumon Rôti", price: "23.00€", description: "Légumes d'été et vierge de légumes" },
          { name: "Burger Auteuil Gorgonzola", price: "21.50€", description: "Pain brioché, bœuf 180g, crème de bleu" },
          { name: "Rigatoni à la Truffe", price: "26.50€", description: "Crème de truffe légère et noisettes" },
          { name: "Escalope Milanaise", price: "25.00€", description: "Veau pané, linguine tomate" },
          { name: "Tartare de Bœuf Italien", price: "22.00€", description: "Coupé au couteau, pesto et parmesan" }
        ]
      },
      {
        category: "Desserts & Gourmandises",
        items: [
          { name: "Tiramisu Maison", price: "9.50€", description: "Recette traditionnelle au café", highlight: true },
          { name: "Brioche Perdue", price: "10.50€", description: "Caramel beurre salé et glace vanille" },
          { name: "Mousse au Chocolat XXL", price: "11.50€" },
          { name: "Panna Cotta Mangue", price: "9.00€" },
          { name: "Affogato al Caffè", price: "8.50€" }
        ]
      },
      {
        category: "Aperitivo & Cocktails",
        items: [
          { name: "Auteuil Spritz", price: "14.00€", description: "Lero Lero, Prosecco, fruit de la passion" },
          { name: "Moscow Mule Auteuil", price: "15.00€" },
          { name: "Pinte Blonde Auteuil", price: "9.00€" },
          { name: "Verre de Chianti Docg", price: "11.00€" },
          { name: "Expresso", price: "3.50€" },
          { name: "Thé Glacé Maison", price: "7.50€" }
        ]
      }
    ]
  },
  description: "Nichée dans l'ancienne gare de la Petite Ceinture, la Brasserie Auteuil est un véritable poumon végétal au cœur du 16ème sud. Son atout maître est un immense rooftop arboré, chauffé l'hiver et ensoleillé l'été, qui invite à l'aperitivo italien. Dans un décor d'inspiration toscane, entre lierre grimpant et bois clair, on y déguste une cuisine transalpine généreuse, des pizzas au feu de bois et des cocktails créatifs. C'est l'adresse idéale pour une pause décontractée et stylée, loin de l'agitation parisienne.",
  expert_catchline: "Le plus grand rooftop végétalisé du 16ème dans une ancienne gare.",
  insider_tip: `• **L'Aperitivo** : Arrivez pour l'aperitivo afin de profiter de la lumière dorée sur le rooftop.
  • **Le Must** : La pizza à la truffe est une valeur sûre qui ne déçoit jamais.
  • **Match Day** : Ambiance électrique les soirs de match à Roland-Garros.`,
  specials: {
    cuisine: ["Italo-Française", "Brasserie"],
    drinks: ["Auteuil Spritz", "Cocktails Maison"],
    must_eat: "Cuisine de Brasserie. Pizza Truffe & Mascarpone & Linguine aux Gambas.",
    must_drink: "Auteuil Spritz"
  },
  images: {
    hero: "AU_ZVEG0JmMrwn3FRi1lWdvbeR0Ga5oGSKikbf_8H6WbfxQfT3EQzoVMCvH7l6K-1y6HQ9RUyitzMYX-Hs1MbF-PiVU3brbjKecH9NJh_tNgBaov8GoHIjC_lbE_Y07FV94EmZDK_tl9NBl5srPqbAlUBOHIllzYeo6sdoQaBMdJCwiTN-WrX1DV1D8r8xdQVo7DO41vJ56sxGeSHgcCL_o6pgX8uOx6YByGEnPoayaVEDGTMB17XSx3QkL_jUS85q_w5L_BwIwCiP90f795fTU_rQkpks6GRgCwxq0a4SE4E6kJAg",
    gallery: [
      "AU_ZVEEiV6o9__A_WYQ1DSEO0l2V1yKDNl9gYGuacLHeDyKL3RuO2VzfO2s62tRPRVfJDFuNH1O5PzXB53RhLfaVx_Ve6_ustYecR6DZg0fE7SNTs8lHRFyGRrxgLoW5BNEbOhFu4WcnqU9zk-9A-nkcX6A9_mbAUz_kzb1aKxMFHUowyVcEABU3N0QmYuzk_aq51yaSz8kzYSu36K9VC279wPd-ycO3qQIlMrhbAeWl-I1X4YVyF0UgQhXXeXJvq6NNIrD8scU2WIHFWrWw8PQ9YY5HJfhfi7iqFMNR3GNw9yiVwA",
      "AU_ZVEF2g5hUjI4f418TQc8ga7guqSs58fwK06Sccgt_f0aR1foQnbiCcqdjnl3Zvzqw-rMuE7cS6tawX9j0hVJcnxJtzqrMjFbdoB0HebITpCxvdPTW0GRAnECd3zf6d5PAuuyS591MtzrAoH3b2nmiLMuNm0k1ZJ6B1DxtMrIWpOnFoKX-lDaN0D44TiO9VRMecQjgTVDZvr4_Vb4oQ1gLdgVwAiyEYXKkBjvipc6OvrMD2Gxi1TqskkDwwoVfV9ik4m3PiicbJThO4LKRdlvVOaJzSnCrmvrfSzXiD_9O7HflaXwhQieYuE7fbZ92ZLYPFXqe7H-xLOcX4DEbwHs748_b4hVI0jeFoqst9097gxlbtmUHkMJZgK0TwSp1mk231G0rgxDCdLoBS1CMoGgyeGMIIKO-IsMGY9UVlFqME6eRZAVV5nJ2BhopOaXePQ"
    ]
  },
  verified: true,
  google_rating: 4.1,
  instagram_handle: "brasserieauteuil",
  real_talk: {
    text: "Le spot phare du sud du 16ème. C'est grand, c'est vert et l'ambiance rooftop est imbattable dans le quartier. On y vient pour la coolitude apparente et les cocktails bien dosés.",
    must_eat: "Cuisine de Brasserie. Pizza à la Truffe.",
    le_secret: "La bibliothèque au rez-de-chaussée est parfaite pour travailler au calme le matin.",
    le_son: "Deep house chill et sons ensoleillés.",
    le_must: "Dîner entre amis sur le rooftop sous les guirlandes guinguette."
  }
};

export default brasserie_auteuil;
