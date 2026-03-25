import { SurgicalPlace } from "../../../type-definition";

export const brasserie_barbes: SurgicalPlace = {
  id: "poi-brasserie-barbes",
  slug: "brasserie-barbes",
  name: "Brasserie Barbès",
  category: "restaurant",
  subcategory: ["français", "brasserie", "rooftop", "festif", "cocktails"],
  location: {
    address: "2 Bd Barbès, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.884007,
    lng: 2.3497388,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ4f7h_mhu5kcRtb3IkgcT7pU"
  },
  moods: {
    chill: 60,
    festif: 95,
    culturel: 45
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 02:00 | mardi: 09:00 – 02:00 | mercredi: 09:00 – 02:00 | jeudi: 09:00 – 02:00 | vendredi: 09:00 – 02:00 | samedi: 09:00 – 03:00 | dimanche: 09:00 – 02:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://brasseriebarbes.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      { category: "Entrées & To Share", items: [
        { name: "Burrata Crémeuse & Focaccia", price: "12.00€", description: "Basilic frais et huile d'olive vierge" },
        { name: "Houmous Maison & Pain Pita", price: "9.00€" },
        { name: "Arancini à la Trill (3pcs)", price: "11.00€", description: "Cœur coulant fromage, huile de truffe" },
        { name: "Carpaccio de Bœuf au Parmesan", price: "14.00€" },
        { name: "Salade de Kale & Grenade", price: "13.00€" },
        { name: "Tempura de Légumes de Saison", price: "10.50€" },
        { name: "Assiette de Jambon de Parme", price: "15.00€" }
      ]},
      { category: "Plats Brasserie", items: [
        { name: "Classic Burger Barbès", price: "19.00€", description: "Bœuf français, cheddar affiné, frites maison" },
        { name: "Fish & Chips à la Londonienne", price: "18.00€" },
        { name: "Risotto aux Herbes & Champignons", price: "17.50€" },
        { name: "Tartare de Bœuf Traditionnel", price: "19.00€" },
        { name: "Demi-Poulet Fermier Rôti", price: "18.50€", description: "Jus de viande et purée maison" },
        { name: "Bavette d'Aloyau Grillée", price: "22.00€", description: "Frites et sauce échalote" },
        { name: "Linguine aux Gambas & Piment", price: "21.00€" },
        { name: "Saumon Snacké & Légumes Croquants", price: "20.50€" }
      ]},
      { category: "Desserts Maison", items: [
        { name: "Tiramisu Signature Barbès", price: "9.00€" },
        { name: "Cheesecake aux Fruits Rouges", price: "9.50€" },
        { name: "Moelleux au Chocolat Fondant", price: "8.50€" },
        { name: "Café très Gourmand", price: "10.50€" },
        { name: "Glaces Artisanales (2 boules)", price: "7.50€" }
      ]}
    ]
  },
  description: "Installée dans un ancien magasin Tati mémorable, cette brasserie géante sur quatre niveaux est le cœur battant du carrefour Barbès. Entre déco industrielle, rooftop végétalisé et dancing, on y vient pour un cocktail, un burger ou un plat de saison dans une atmosphère ultra-parisienne et métissée.",
  insider_tip: "• **Choix du Spot** : Filez directement au rooftop au 4ème étage pour la lumière et l'ambiance jardin d'hiver sous verrière.\n• **Vibe Nocturne** : Le week-end, le spot se transforme en mini-club branché avec DJ sets ; idéal pour un dîner qui finit tard.\n• **Combo Moelle** : Optez pour les Arancini en entrée suivis du Burger Barbès pour une expérience 100% plaisir régressif.",
  specials: {
    cuisine: ["Française Moderne", "Fusion"],
    drinks: ["Cocktails Création", "Spritz", "Vins Nature"],
    must_eat: "Brasserie moderne. Le Burger Barbès & Arancini truffés",
  },
  images: {
    hero: "AU_ZVEHSWsP1qrQQ-Ywoz6LXL9SvkJSkKt3Ge6V-QgeHstWmmZ7HRIU4685C-UH-o6pctE0V8HC6NVSNY2id8KCkXFn5meIukxGnVxclwSJvNbyhxVoP2TFToqH_Phi-4LrKMepOeIXNFEkYrifEEzihfND9EGv4sG9iHsr2GgBsT6lE5vVGi7bH42hLgFcj3WJ05mrP5xwS-_AoJGQivSUGl03e010LfAipWKJkz2M5oD5lNUgl9rksC5ss0KwY_l-rMeLLxCnf21Fa65gs2nULw1JA5Hz8sfAfdaridxYpXcr36A",
    gallery: ["AU_ZVEEn-rtkMlSVwpsb8W-7rfZSIBc1Sx1dgewK-qvSi9WFpIkKszGLuIPNPA0pHUtZNJ4O9ki_jNG1IczKJvkduXKlrwjtSZb5Xt1LDo2iqOUYtKmkX9Ruk6uUjG1lKGPij1YNTFw9IYj9sd44Ez5beHnZu5k84FiNWjaElvuFL0hfpMRzI0fzjh5ni-xJpJE25diwY37I6mbhWGdBKT701IY0eYuYYiLDeuCYEYuLKt5U0se5-9jzFHTju3SU81dKBuMozPl4wJcrlxI34_9yKjqSIgdvyIthKopbs0iDgGmJS-2Rn10yfvwQCA_1FLOWYfLFQLiOe9PfntxjzmuwJg-bVlk33tG2JC47dJnGhUK-2Mj4EagTtiHPvtb5pzEoh37XjkbyuVxw_r6AL-A5-Lev-ESGqaRmUAkvLQvDWwYEGC1yI1zNxlKaVwtMnQ","AU_ZVEFlIqCYl4BTswGAAMz8Sj6dk-EkH9b40jZlAIFyK4Odw0xLqEhIBqcx1vECwbcgy077pip3xJqIFat5V_q4VM1jzoonIrXy4wNstDL6WFm1OYjWfCsg3zC_SsxQrH1JQGx0tHbGP-gsR6CqAMckvxkM6dyO_aI3uekIVh5IR4Wb5sHIYB7Tyfy7WbMjUkypidvrRhqpsXuQUEk5m-Ur-7LSDZ5HISRX-Pdk2nSgEXoNeYF_W7y8l3USU08T_1K1w_iX_90Ui4jI_K18geZoKIMhymBhjy3NL0oJGUhVfg2DMQ"]
  },
  verified: false,
  google_rating: 4.5
};

export default brasserie_barbes;
