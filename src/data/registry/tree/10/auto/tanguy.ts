import { SurgicalPlace } from "../../../type-definition";

export const tanguy: SurgicalPlace = {
  id: "poi-tanguy",
  slug: "tanguy",
  name: "Tanguy",
  category: "restaurant",
  subcategory: ['bistrot'],
  location: {
    address: "15 Rue de l’Échiquier, 75010 Paris, France",
    arrondissement: 10,
    lat: 48.871212,
    lng: 2.348654,
    nearest_metro: "Bonne Nouvelle",
    metro_lines: [8, 9],
    google_id: "ChIJL50M6Adu5kcR_F589_9uO-g"
  },
  moods: {
    chill: 80,
    festif: 50,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:00–22:30, dimanche: 12:00–16:00",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.tanguy-crepes.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 25,
    is_free: false,
    dish_price: 10.5, // Prix de la Complète TANGUY
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Galettes de Blé Noir (Plats)",
        items: [
          { name: "La Complète de TANGUY (Jambon Prince de Paris, Œuf, Tomme)", price_cents: 1050, is_highlight: true },
          { name: "Andouille de Guémené, Tomme de Priziac & Oignons confits", price_cents: 1550, is_highlight: true },
          { name: "Saucisse Artisanale (Maison Beucher), Crème Moutardée & Œuf", price_cents: 1550, is_highlight: true },
          { name: "Poitrine Fumée au bois de hêtre, Œuf & Tomme", price_cents: 1250 },
          { name: "Galette Simple au Beurre Cru Thierry Lemarchand", price_cents: 300 },
          { name: "Galette à l’Œuf Bio Breizh'on egg (Miroir)", price_cents: 400 },
          { name: "Galette Jambon Prince de Paris & Sel de Guérande", price_cents: 900 },
          { name: "Galette Tomme au lait de vache biologique", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Créations Gourmandes (Plats)",
        items: [
          { name: "Truite Fumée de Bretagne & Crème de Ciboulette", price_cents: 1400, is_highlight: true },
          { name: "Boudin Noir Artisanal & Oignons de Roscoff confits", price_cents: 1350 },
          { name: "Fromage de Chèvre au Lait Cru & Miel du Pays", price_cents: 1200 },
          { name: "Galette Végétarienne : Légumes Rôtis & Graines", price_cents: 1150, is_highlight: true },
          { name: "Sardines Millésimées à l’huile d'olive & Algues", price_cents: 1450 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Crêpes de Froment (Desserts)",
        items: [
          { name: "Sucre de Canne Bio & Beurre demi-sel Cru", price_cents: 400, is_highlight: true },
          { name: "Caramel Beurre Salé Maison (L’onctueux)", price_cents: 650, is_highlight: true },
          { name: "Chocolat fondu Maison & Noisettes grillées", price_cents: 850, is_highlight: true },
          { name: "Pommes Caramélisées & Émietté de Palet Breton", price_cents: 850 },
          { name: "Citron Jaune Frais & Sucre de Canne Bio", price_cents: 450 },
          { name: "Miel de Bretagne sauvage & Éclats de Noix", price_cents: 700 },
          { name: "Grand Marnier Flambée à la minute", price_cents: 950 },
          { name: "Confiture de Fraise de Plougastel (Artisanale)", price_cents: 550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs Bretonnes (Desserts)",
        items: [
          { name: "Far Breton aux Pruneaux Maison (La tranche)", price_cents: 600, is_highlight: true },
          { name: "Kouign-Amann Tiède & Glace Vanille Madagascar", price_cents: 850, is_highlight: true },
          { name: "Sorbet Cidre & Pomme Fraîche (3 boules)", price_cents: 750 },
          { name: "Palet Breton Artisanal (À l’unité)", price_cents: 200 },
          { name: "Yaourt Fermier au Lait Entier de Bretagne", price_cents: 450 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cidres & Cuvées (Boissons)",
        items: [
          { name: "Bolée de Cidre Artisanal (Brut ou Doux)", price_cents: 450, is_highlight: true },
          { name: "Bouteille de Cidre de Cornouaille AOP", price_cents: 1800, is_highlight: true },
          { name: "Bouteille de Cidre du Cotentin (Extra-Brut)", price_cents: 2200 },
          { name: "Jus de Pomme Trouble Fermier de Bretagne", price_cents: 550 },
          { name: "Chouchen Artisanal du Pays Vannetais", price_cents: 700 },
          { name: "Bière Bretonne Ambrée Coreff (33cl)", price_cents: 650 },
          { name: "Eau micro-filtrée Tanguy (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso de spécialité Terres de Café", price_cents: 350 }
        ]
      }
    ]
  },
  description: "Tanguy est l’ambassade du terroir breton au cœur du 10ème arrondissement. Loin des crêperies touristiques, Gwendal Tanguy propose des galettes de blé noir 100% bio IGP Bretagne, battues à la main, d’une finesse et d’un croustillant incomparables. Ici, chaque produit est sourcé avec ferveur : jambon Prince de Paris, andouille de Guémené Rivalan-Quidu, beurres crus de Thierry Lemarchand. Dans un cadre épuré et moderne, on redécouvre la noblesse de la crêpe, accompagnée d'une sélection pointue de cidres artisanaux de petits producteurs bretons.",
  insider_tip: "• **La Pâte Battue à la Main** : C’est le secret de leur légèreté incroyable, la texture de la galette est unique à Paris.\n• **L’Andouille de Guémené** : Ne passez pas à côté, c’est la Rolls de l'andouille, transcendée par les oignons confits au chouchen.\n• **Cidre de Dégustation** : Osez les cidres extra-brut ou les cuvées de garde, ils rivalisent avec les plus grands vins blancs.",
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Plus de 20 références de cidres artisanaux", "Chouchens de vignerons", "Bières locales"],
    must_eat: "Cuisine de bistrot. La Complète de TANGUY (10.50€) : la simplicité absolue magnifiée par des produits d’exception.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tanguy/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tanguy/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tanguy/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tanguy/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tanguy/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tanguy/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. La Complète de TANGUY (10.50€) : la simplicité absolue magnifiée par des produits d’exception.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default tanguy;
