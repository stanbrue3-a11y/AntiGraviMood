import { SurgicalPlace } from "../../../type-definition";

export const cravan: SurgicalPlace = {
  id: "poi-cravan",
  slug: "cravan",
  name: "Cravan",
  category: "restaurant",
  subcategory: ["bar_cocktail", "coffeeshop"],
  location: {
    address: "17 Rue de la Fontaine, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.8517527,
    lng: 2.2741913,
    nearest_metro: "Ranelagh",
    metro_lines: ["9"],
    google_id: "ChIJb7E-xzdv5kcRk4Xj0fS_L7w"
  },
  moods: {
    chill: 95,
    festif: 65,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "mardi: 08:30 – 00:00 | mercredi: 08:30 – 00:00 | jeudi: 08:30 – 00:00 | vendredi: 08:30 – 00:00 | samedi: 09:00 – 00:00 | dimanche: 09:00 – 23:00 | lundi: Fermé",
    reservation_policy: "sans_resa",
    wifi: true,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://cravanparis.com/",
      label: "VOIR LE SITE"
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
        category: "Petites Bouchées (Gildas)",
        items: [
          { name: "La Gilda Classique", price: "7€", description: "Olive, anchois, piment Guindilla", highlight: true },
          { name: "Gilda au Maquereau Fumé", price: "8€" },
          { name: "Gilda Végétale", price: "6€" },
          { name: "Amandes Grillées & Sel", price: "5€" }
        ]
      },
      {
        category: "Plats & Rolls",
        items: [
          { name: "Lobster Roll Signature", price: "29€", description: "Brioche toastée, homard bleu", highlight: true },
          { name: "Paté en Croûte de Maison", price: "15€" },
          { name: "Burrata & Huile d'Argan", price: "17€" },
          { name: "Sourdough Sandwich Comté 24m", price: "14€" },
          { name: "Bowl de Saison (Végétal)", price: "18€" }
        ]
      },
      {
        category: "Mixologie Signature",
        items: [
          { name: "Cocktail 'Royal Basilic'", price: "22€", description: "Champagne, basilic frais", highlight: true },
          { name: "Cravan Negroni", price: "18€" },
          { name: "Yellow Cocktail", price: "17€", description: "Gin, Suze, Chartreuse" },
          { name: "Picon Bière Maison", price: "12€" }
        ]
      },
      {
        category: "Café & Douceurs",
        items: [
          { name: "Tarte au Citron Meringuée", price: "10€" },
          { name: "Tiramisu du Moment", price: "10€" },
          { name: "Cake au Citron & Pavot", price: "7€" },
          { name: "Café Filtre de Spécialité", price: "6€" },
          { name: "Double Expresso", price: "5€" }
        ]
      }
    ]
  },
  description: `Cravan est un ovni magnifique au cœur de l'avenue de la Fontaine. Installé dans un monument historique de style Art Nouveau signé Hector Guimard, ce bar à cocktails et coffeeshop de quartier a redéfini les standards de la mixologie parisienne. Le décor d'origine, avec ses boiseries et ses céramiques, crée un cadre intemporel où l'on déguste des breuvages millimétrés et une 'bar food' de haute volée.`,
  expert_catchline: `L'excellence de la mixologie dans un chef-d'œuvre Art Nouveau.`,
  insider_tip: `• **Le Comptoir** : Asseyez-vous au bar pour admirer la précision des barmen, c'est un spectacle en soi.
  • **Le Matin** : C'est l'un des meilleurs spots du quartier pour un café de spécialité dans un cadre historique sublime.
  • **Les Gildas** : Ne passez pas à côté de ces petites piques espagnoles, elles sont le compagnon idéal de leurs cocktails secs.`,
  specials: {
    cuisine: ["Mixologie", "Petits Plats"],
    drinks: ["Cocktails d'auteur", "Vins de macération"],
    must_eat: "Cuisine de Bar. Le Lobster Roll dans sa brioche dorée.",
  },
  images: {
    hero: "AU_ZVEHHFu18nkHmqgsOt7pP1SJE1wkuniaZHRmzOC_ETc-OGvCYtLs8je1gqhIKiWrG0ZIHB3dv92nlx4bSWfpzNdBjaEditO-Htc6wqrZOY4H7gtm62Ku2GWdHQPZ_3TsNN_kqvUZNWi3ZUyfa4UiMsoL0S5xrt_rkaVEgYGUpXYOLNKN8xSWSCRX0ZBQNWzTviYS-yGyGo9-rP51wgD6rb-cJIZsxACAbhSmT_20kv2xNKOehAT5Vy0DFLZocd2tW4GSDLhwXRiIxiAEW48jsJAPCojpaDQ234sSWvyFUCnghbw",
    gallery: ["AU_ZVEEwtUwy82tJvgDRO8b9hAIZ3FD-cSzbYxlnplA8-ONjKCHOpILMCaGsWTQf20SWgfvZsmzYv4zEf0xJe311w6YDoAHdI6vN0sckGac0PRh2GdyM9AVJFe0oBo-BInY8Lt_i4J6VQKcrWUotRnQUt_qVOBTuLvt9ccfckE5_HQryGiVzcKRjbxdF4d5KBUpwrlaVoyhQbdfflUC5sSS_-y4_nTcIwoxa2QPZyPabucc0FpJ8ioqmyCxE3K7tiDLzhr5nHcBhyUFErhVJwoXdIJMONvTO2NeF7ZypL0tzxRCcDQ","AU_ZVEHs0Sem5YogrEhy_QAcrxjYkCtSLbWpuHT6ekI2PeGkL4JZl4tx-vKS_Ivpo4gqw7KcxIx3_S27kJI8rS47y7eRtZR-cYJLoVDQjNfnBSzVVKUl2-gPSSycx9Py8fbizzbnKFAw5YbxegFI6nryGexqqm62A2fFaZHj9P1J21l7TurMHnJgSyq59bmVidnYoSF_Y9F9FkuvyvYmpJGfNNL63fLbsgp6qTMtFOELUT-O0jmWmzgFtVjh0BI31w6U1104mWu3j0YXD4rfCYKwCBURZdBkMBI0pjGhCfv5tuU7aQ"]
  },
  verified: true,
  google_rating: 4.4,
  real_talk: {
    text: "Cravan, c'est pour les puristes. Franck Audoux a créé un lieu où le superflu n'existe pas. Les cocktails sont limpides, les goûts sont tranchés. C'est l'anti-bling par excellence dans un quartier qui en a parfois trop. Un vrai coup de cœur pour l'esthétique et la rigueur.",
    must_eat: "Lobster Roll",
    le_secret: "La petite terrasse sur le trottoir, parfaite pour observer la vie de Passy un cocktail à la main.",
    le_son: "Un jazz feutré ou du silence respectueux du décor.",
    le_must: "Le cocktail 'Yellow' pour les amateurs d'amertume maîtrisée."
  }
};

export default cravan;
