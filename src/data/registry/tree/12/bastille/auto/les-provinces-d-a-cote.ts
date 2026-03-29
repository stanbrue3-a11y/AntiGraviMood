import { SurgicalPlace } from "../../../../type-definition";

export const les_provinces_d_a_cote: SurgicalPlace = {
  id: "poi-les-provinces-d-a-cote",
  slug: "les-provinces-d-a-cote",
  name: "Les Provinces d’à coté",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "20 Rue d'Aligre, 75012 Paris, France",
    arrondissement: 12,
    lat: 48.8493394,
    lng: 2.3785534,
    nearest_metro: "Ledru-Rollin",
    metro_lines: [8],
    google_id: "ChIJnwgUYDFz5kcRNmL3sppk61M"
  },
  moods: {
    chill: 60,
    festif: 50,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "mardi: 11:30–14:00 | mercredi-samedi: 11:30–14:00, 18:30–22:30 | dimanche: 11:30–15:00 | lundi: Fermé",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://boucherie-restaurant-les-provinces.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 30,
    dish_price: 19.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Droit de Cuisson & Concept : Service (Plat)",
        items: [
          { name: "Droit de Cuisson (Pièce choisie en vitrine)", price_cents: 1200, is_highlight: true },
          { name: "Préparation Boucher & Accompagnement", price_cents: 0 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées & Canaille : L'Art du Boucher",
        items: [
          { name: "Os à Moëlle au sel de Guérande", price_cents: 980, is_highlight: true },
          { name: "Croustillant de pied de cochon maison", price_cents: 1180, is_highlight: true },
          { name: "Planche de Saucisson sec artisanal", price_cents: 500 },
          { name: "Carpaccio de Bœuf charolais", price_cents: 980 },
          { name: "Terrine du moment au piment d'Espelette", price_cents: 850 },
          { name: "Assiette de Jambon Noir de Bigorre", price_cents: 1400 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats : Les Grandes Pièces de Viande",
        items: [
          { name: "Onglet 'Grosse Faim' (300g)", price_cents: 1950, is_highlight: true },
          { name: "Ris de Veau dorés au sautoir", price_cents: 3200, is_highlight: true },
          { name: "Côte de Bœuf Maturée (Pour 2 pers - le kg)", price_cents: 7500 },
          { name: "Faux-filet de Race Normande", price_cents: 2400 },
          { name: "Steak Tartare maison préparé minute", price_cents: 1850 },
          { name: "Bœuf Bourguignon tradition (Mijoté)", price_cents: 1700 },
          { name: "Andouillette AAAAA, sauce moutarde", price_cents: 1650 },
          { name: "Côtelettes d'Agneau de lait", price_cents: 2200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Garnitures & Sauces (Plats)",
        items: [
          { name: "Pommes Grenaille sautées au gras de bœuf", price_cents: 0 },
          { name: "Purée de Pommes de Terre maison", price_cents: 0 },
          { name: "Salade de saison bien assaisonnée", price_cents: 0 },
          { name: "Sauce Béarnaise montée minute", price_cents: 250 },
          { name: "Sauce au Poivre Vert", price_cents: 200 },
          { name: "Sauce Roquefort", price_cents: 200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Desserts",
        items: [
          { name: "Le Parfait glacé à la Vanille", price_cents: 850, is_highlight: true },
          { name: "Île Flottante, crème anglaise onctueuse", price_cents: 750 },
          { name: "Mousse au Chocolat intensive", price_cents: 700 },
          { name: "Dessert du Marché (Saison)", price_cents: 800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons & Vins Nature",
        items: [
          { name: "Verre de Rouge 'Le P'tit Pinard'", price_cents: 650 },
          { name: "Bouteille de vin Nature (Sélection)", price_cents: 2800 },
          { name: "Bière Artisanale du 12ème", price_cents: 700 },
          { name: "Jus de fruits Alain Milliat", price_cents: 600 },
          { name: "Café Espresso Bio", price_cents: 220 }
        ]
      }
    ]
  },
  description: "Les Provinces d'à côté est une véritable ambassade de la viande située au cœur du marché d'Aligre. Mi-boucherie traditionnelle, mi-table d'hôte, le lieu propose une expérience radicale : choisir sa pièce de viande directement dans l'étal du boucher pour la faire griller à la perfection quelques mètres plus loin. Sous les carcasses suspendues et dans une odeur enivrante de jus de viande, on y redécouvre le goût du vrai produit dans une ambiance conviviale et sans artifice. Un incontournable pour les puristes carnivores.",
  insider_tip: `• **Le Choix du Boucher** : N'hésitez pas à demander conseil sur la maturation des côtes de bœuf, ils sont experts et passionnés.
  • **Right of Cooking** : Le concept du 'droit de cuisson' permet de s'offrir des pièces de luxe à un prix restaurant défiant toute concurrence.
  • **Le Pied de Cochon** : Leur croustillant de pied de cochon est l'un des meilleurs de la capitale, à ne pas rater.`,
  specials: {
    cuisine: ["Française", "Boucherie", "Carnivore"],
    drinks: ["Vins Nature", "Bières Artisanales"],
    must_eat: "Cuisine de Boucher. Onglet Grosse Faim & Os à Moëlle",
  },
  images: {
    hero: "AU_ZVEEf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf",
    gallery: ["AU_ZVEG_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3W","AU_ZVEHm_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf"]
  },
  verified: false,
  google_rating: 4.4
};

export default les_provinces_d_a_cote;
