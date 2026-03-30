import { SurgicalPlace } from "../../../type-definition";

export const le_bistrot_d_andre: SurgicalPlace = {
  id: "poi-le-bistrot-d-andre",
  slug: "le-bistrot-d-andre",
  name: "Le Bistrot d’André",
  category: "restaurant",
  subcategory: ["bistrot", "traditionnel", "français", "viande"],
  location: {
    address: "232 Rue Saint-Charles, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8372922,
    lng: 2.2771137,
    nearest_metro: "Balard",
    metro_lines: [8, 10],
    google_id: "ChIJoQBaNHVw5kcR6Ra0qsowZNM"
  },
  moods: {
    chill: 80,
    festif: 20,
    culturel: 100
  },
  practical: {
    opening_hours_raw: "Monday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Tuesday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Wednesday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Thursday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Friday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Saturday: Closed | Sunday: Closed",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://lebistrotdandre.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 28,
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Œuf Bio Mayo du Bistrot", price_cents: 650 },
          { name: "Œuf Cocotte Bio aux Morilles", price_cents: 1100, is_highlight: true },
          { name: "Terrine de Campagne Maison", price_cents: 850 },
          { name: "Salade de Gésiers Confits", price_cents: 900 },
          { name: "Poireaux Vinaigrette & Noisettes", price_cents: 800 },
          { name: "Croustillant de Camembert", price_cents: 950 },
          { name: "Escargots de Bourgogne (x6)", price_cents: 1200 }
        ]
      },
      {
        category_type: "sharing",
        display_label: "À Partager",
        items: [
          { name: "Os à Moelle à la Fleur de Sel", price_cents: 950, description: "La spécialité de Javel, à déguster avec du pain grillé", is_highlight: true },
          { name: "Planche Mixte (Charcuterie & Fromage)", price_cents: 1800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Bœuf Bourguignon de l’Ancien", price_cents: 2200, description: "Mijoté 8h, carottes fondant et vin de Bourgogne", is_highlight: true },
          { name: "Magret de Canard au Miel & Épices", price_cents: 2400 },
          { name: "Tartare de Bœuf Préparé à la Minute", price_cents: 1900 },
          { name: "Joues de Porc Confites au Cidre", price_cents: 2100 },
          { name: "Pavé de Lieu Jaune au Beurre Blanc", price_cents: 2300 },
          { name: "Andouillette AAAAA Grillée", price_cents: 2000 },
          { name: "Bacon Burger du Bistrot (Comté)", price_cents: 1800 },
          { name: "Entrecôte 300g & Frites Maison", price_cents: 2800, is_highlight: true },
          { name: "Saucisse au Couteau & Aligot", price_cents: 1950 },
          { name: "Confit de Canard du Sud-Ouest", price_cents: 2200 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules",
        items: [
          { name: "Formule Midi (Entrée + Plat)", price_cents: 1850 },
          { name: "Formule Midi (Plat + Dessert)", price_cents: 1850 },
          { name: "Formule Complète Midi", price_cents: 2150, description: "Entrée, Plat et Dessert au choix sur l'ardoise" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Profiteroles au Chocolat Chaud", price_cents: 950 },
          { name: "Tarte Tatin de la Mère André", price_cents: 900, is_highlight: true },
          { name: "Mousse au Chocolat à l’Ancienne", price_cents: 800 },
          { name: "Carpaccio d'Ananas au Caramel", price_cents: 850 },
          { name: "Panna Cotta aux Fruits Rouges", price_cents: 800 },
          { name: "Tiramisu du Chef", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Vins de Vignerons (Le Verre)", price_cents: 600 },
          { name: "Bouteille de Vin (Sélection)", price_cents: 2400 },
          { name: "Café Espresso Terroir", price_cents: 250 },
          { name: "Bière Pression (Demi)", price_cents: 500 },
          { name: "Eau Minérale (75cl)", price_cents: 600 }
        ]
      }
    ]
  },
  description: `Le Bistrot d’André est bien plus qu’un simple restaurant, c’est un voyage dans le temps au cœur du quartier Javel. Situé à deux pas des rives où trônaient jadis les usines Citroën, ce bistrot rend un hommage vibrant à l’histoire industrielle du 15ème arrondissement avec son décor vintage, ses maquettes d’Automobiles et ses affiches d’époque. On y vient pour l’ambiance chaleureuse d’un vrai bistrot de quartier et pour une cuisine de terroir qui ne transige jamais sur la générosité des portions.`,
  insider_tip: `• **Timing Stratégique** : Le lieu est très prisé par les habitués du quartier au déjeuner, arrivez dès midi ou réservez pour garantir votre table sur la terrasse.
  • **Combo Moelle** : Commencez par l’os à moelle bien grillé avant d’attaquer leur Bœuf Bourguignon, l’un des plus authentiques de la rive gauche.
  • **Expérience Culturelle** : Prenez le temps de détailler les memorabilia Citroën qui parsèment la salle, c’est un petit musée privé de l’automobile française.`,
  specials: {
    cuisine: ["Française Traditionnelle", "Cuisine de Terroir"],
    drinks: ["Vins de Propriétaires", "Digestifs Classiques"],
    must_eat: "Cuisine de Bistrot. Bœuf Bourguignon & Magret de Canard au Miel.",
    expert_catchline: "Le repaire historique de Javel, hommage vibrant aux usines Citroën et à la cuisine de terroir.",
  },
  images: {
    hero: "AU_ZVEGBQf_SBvTaVZYTqfAkv3--aHQVOi9qxRb70o6c2oQVhTUuJav9-UoOLMzEyBNDsSyNAwz87AlWb128t3hlOB7idF6krQDsgJR-kAV-0Ib01m4vnEbD16Lgo55KUEjIiu2DI49DcGFNb32DDDDzE3o_dJ28_8jbXl9IxxWPQo5ShlZJcb6jPWvA3sg4vQOXpyQHVYJl4rsKeoHrlFASXHNOMGdTzMkxGrupX0pmqNK3rHKclZf2miWSUdplsJSG6IJJraencBwvqg9yH1dEdTidgCCLnijwx-zm3gCuSOuhZPEAi6YKH8cUDehVJkmW3gGoR99Gd7LKxX4Gk_w47j7_5iHPQwxARuJTavYAdXCsidJmcFhRNymihm5P8saCfDc35tjd25aTLtnP-74cHLmP4xnIX3tOfhFB8n89eDlY8A",
    gallery: ["AU_ZVEHugIL-ZUIZB6xEdWev9NG9DbHv6ksCaRg1l0cTRcfYIGugNPhjl6vPrIgZ3ABsL7r8tbU7igfu8wrWXlEcjkYvw1WUUuwJi0WiO1FucjSr7p450FaVkJoti-pDreVQ13FoUY-zsx6Xk1x9FM4nkUr8nof-mIdVx2v_eUY9s6O8Xw99EbHxTtHIlFL9va1qpdltrxpSRRfCBFsuHzjYXhBHj3T0Gi5gbn8dQr-65H_l9kauxJi2h3ksxTWa5__rd1kH_fO3k6CFQsZNBCldmvr6aqoP4lDzSvGLg8yLqpPl5L7-VQ9RaMo6no9CjYMojOuM6SdZ4n9EYmYm01LsGFtysJnlg3qVJ9eGr3m_NxogjLDh_X3acaZ7BVRjOe0EuCmCzuiyxe5Kg2dsqSQVt_CDvnIAlfz2rpDMCDXjVOZyWg","AU_ZVEHiojoA6Mgy9cW9EApPH3GjhsXnkD4YXXA-7gMKvBIeiNPwgl8QD6jCvaC_xUMXQgdZA0SFSDGQVWlYfVouvVyZQekuy8xwT3pptQsKCsP602LWEUN8QjxVQ1WGfsBGk0aqP4ydV6UBywklbTWVUWqGIANhdw3R5ZoYnE--p0E-KQZE3q1hOQ4KkF8tylnMMvhLify1DX-iZ29zHJopSDWOJXgd7Dh2dU5JYR_G-S0JnS23EqCh2eR0u_zE9Cikdn5vig9hAH1ctUx572O4qfzPN6IklOAUpM-tpso2RJh3Eh77x7IlqYXKONldxUJw3ZAYPnb5PTc1tBGYQw5KemkdHBmPgREoU8RiY0f8S8vI51H183n60ur__4f4p2YnPARmM4IK3kQAQ82e33HpJgYoJyRDqLo61O1qzHNXW9H7U1VIUgoY42CMgXrugwBn"]
  },
  verified: true,
  google_rating: 4.5
};

export default le_bistrot_d_andre;
