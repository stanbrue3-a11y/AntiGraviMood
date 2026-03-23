import { SurgicalPlace } from "../../../type-definition";

export const sacree_fleur: SurgicalPlace = {
  id: "poi-sacree-fleur",
  slug: "sacree-fleur",
  name: "Sacrée Fleur",
  category: "restaurant",
  subcategory: ["français", "steakhouse", "viande d'exception", "montmartre", "traditionnel"],
  location: {
    address: "50 Rue de Clignancourt, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.887016,
    lng: 2.3484274,
    nearest_metro: "Château Rouge / Marcadet-Poissonniers",
    metro_lines: [4, 12],
    google_id: "ChIJW9O_h_9u5kcRy6B1Uxyk-Rc"
  },
  moods: {
    chill: 60,
    festif: 70,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 11:30 – 14:00, 18:30 – 22:00 | mardi: 11:30 – 14:00, 18:30 – 22:00 | mercredi: 11:30 – 14:00, 18:30 – 22:00 | jeudi: 11:30 – 14:00, 18:30 – 22:00 | vendredi: 11:30 – 14:00, 18:30 – 22:00 | samedi: 18:30 – 22:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    wifi: true,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://sacreefleur.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    avg_budget: 35,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Les Entrées",
        items: [
          { name: "Soupe à l’oignon gratinée", price: "9.50€" },
          { name: "Os à moelle rôti à la fleur de sel", price: "10.00€" },
          { name: "Escargots de Bourgogne (x6)", price: "9.00€" },
          { name: "Escargots de Bourgogne (x12)", price: "17.00€" },
          { name: "Terrine de campagne maison", price: "8.50€" },
          { name: "Salade de chèvre chaud au miel", price: "11.00€" },
          { name: "Gambas flambées au Pastis", price: "13.00€" },
          { name: "Cassolette d'escargots aux noisettes", price: "12.00€" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Bavette d'aloyau (200g) à l'échalote", price: "19.50€" },
          { name: "Entrecôte (300g) d'Aubrac", price: "26.00€" },
          { name: "Faux-filet grillé au poivre", price: "22.50€" },
          { name: "Magret de canard entier au miel", price: "24.00€" },
          { name: "Steak Tartare aux couteaux (180g)", price: "18.50€" },
          { name: "Le Burger de la Sacrée Fleur", price: "19.00€" },
          { name: "Cœur de Rumsteck sauce Roquefort", price: "21.00€" },
          { name: "Côte de Bœuf pour deux (1kg)", price: "68.00€" },
          { name: "Andouillette de Troyes AAAAA", price: "18.00€" },
          { name: "Souris d'agneau confite au thym", price: "23.00€" },
          { name: "Pavé de saumon à l'aneth", price: "20.00€" },
          { name: "Risotto végétarien aux truffes", price: "18.50€" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Tarte Tatin et sa crème fraîche", price: "9.00€" },
          { name: "Crème brûlée à la vanille Bio", price: "8.50€" },
          { name: "Mousse au chocolat maison", price: "7.50€" },
          { name: "Île flottante et caramel beurre salé", price: "8.00€" },
          { name: "Profiteroles au chocolat chaud", price: "10.00€" },
          { name: "Café gourmand Sacrée Fleur", price: "11.00€" },
          { name: "Sorbet Citron arrosé Vodka", price: "9.50€" },
          { name: "Plateau de fromages affinés", price: "12.00€" }
        ]
      }
    ]
  },
  description: "À l'ombre du Sacré-Cœur, la Sacrée Fleur est le temple de la viande rouge dans le 18e. Cette brasserie intime et chaleureuse se spécialise dans les pièces de bœuf d'exception (Aubrac, Charolais) servies avec une générosité rare. L'accueil y est légendaire et l'ambiance évoque le Montmartre authentique, loin des pièges à touristes. Un incontournable pour les carnivores en quête de Moelle.",
  insider_tip: "• La réservation est obligatoire le soir, le lieu est souvent complet plusieurs jours à l'avance.\n• Leur sauce au bleu est une institution, demandez-la pour accompagner votre entrecôte.\n• La côte de bœuf pour deux est spectaculaire, prévoyez une faim de loup.",
  specials: {
    cuisine: ["Française", "Steakhouse", "Viande"],
    drinks: ["Vins du Languedoc", "Vin de pays"],
    must_eat: "Steakhouse Montmartre. Entrecôte Aubrac & Os à Moelle",
  },
  images: {
    hero: "AU_ZVEE1QgqhG68YxvUW7Y01BmpyD27yysn48yQuVzXKXpnKPs4IN1HY219jsuIvo6gVf40YoFZ679gGhoVgepNDa2yz4qYcmUenNL5AN3q7xaheZ7nSNr5vaSiramcW0drycmp6BSZYb3ZO_d-5piThYMYIK1V2zIkOKd4KOJbgkG42EQbhM5K4VG7of7_XhCaC4wRAFzGPwOJFJKSt_0UeUlKCfqTwK3YMwUp2CbLXFf3ieOzpdRwzqwTML5DLL0ON4hjUB12yb4BwNeANWTqipMkkuVXWKYHMiShpXzBdGPE2cA",
    gallery: [
      "AU_ZVEEkMCc6457B2wgtiO63awv3BWMgbT3ni5IvtwRNCWHAZXs6_0PXvyFTYNaZCSMCD26inNMYoqvt2P7bHRO02TfzVzxHvnpHxsvSSd4ravLdw2-Ka8CknFYVXR8GoSCm-gbx-2Yc5EiBqcxF5FkoED5D2Hhk6aM2osRaW8MN3da3-xqvnELhuLbdForbyo1Gup2mj9jKDS4D16oZd5dfS0GRSWfWPkMd_avP_crp2v1Bres_skicIjuFKo3eeCbcE02BYyCSAckbVIQ2ioKV4kkGkyfhcg_e46e-Y1NoYTYkgQ",
      "AU_ZVEENs4TfbCtQN4XrQDVky7mIXWZnUp-O1F_oysEZIKIC3B_7J3x_j11Z6CeKLtWTc8XaXCsYgwxRQbG5SR8dg04IS7i1AeGVdAXqsAqo_FbG_83ogGgILqPKapyLLBPTiZt-3zsOKwJy7nIxztDicikzZ2Gsoqv6tULnnOoZOy5Uf1ltfPMke2c8v5P1Z1AcjiGv1DnVOiS5K-WM2OmfImZHKgK1CIOWJsRV4l0ksVv3LPaQehw8xZp3-gUaXRCgH3EK9x8LF5sddVMdCOGHUq4KRq5JvHD7EjtpQ6Z-U0lY_-mS9mSBgyqYdnYHLxWBRoqBLudp4yCL2ag9CD508h9-uWt5OYPJ0aM_ZS-HZ-zYMMHb7pZiz_8wylcuENpyShpAIF-DSzuiKzIuFuPkoquJ8Cg1iU73UNzNAsB68B7E9UWKhmLL6uuF_DZmXx5N"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default sacree_fleur;
