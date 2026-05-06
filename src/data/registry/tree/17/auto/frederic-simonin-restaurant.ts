import { SurgicalPlace } from "../../../type-definition";

export const frederic_simonin_restaurant: SurgicalPlace = {
  id: "poi-frederic-simonin-restaurant",
  slug: "frederic-simonin-restaurant",
  name: "Frédéric Simonin",
  category: "restaurant",
  subcategory: ['gastronomique'],
  location: {
    address: "25 Rue Bayen, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8799589,
    lng: 2.2942571,
    nearest_metro: "Ternes / Charles de Gaulle - Étoile",
    metro_lines: [1, 2, 6],
    google_id: "ChIJR2puoJNv5kcRKwrZ40ztbfA"
  },
  moods: {
    chill: 30,
    festif: 30,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:30 – 22:00 | mardi: 12:00 – 14:00, 19:30 – 22:00 | mercredi: 12:00 – 14:00, 19:30 – 22:00 | jeudi: 12:00 – 14:00, 19:30 – 22:00 | vendredi: 12:00 – 14:00, 19:30 – 22:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://fredericsimonin.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Formules & Menus",
        items: [
          { name: "Menu Déjeuner (2 plats)", price_cents: 6500 },
          { name: "Menu Déjeuner (3 plats)", price_cents: 8500 },
          { name: "Menu Signature (4 séquences)", price_cents: 13500 },
          { name: "Menu Tentation (5 séquences)", price_cents: 17500 },
          { name: "Menu Dégustation (8 séquences)", price_cents: 20000 },
          { name: "Accord Vins (Menu Signature)", price_cents: 5000 },
          { name: "Accord Vins (Menu Dégustation)", price_cents: 8000 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Raviole en imprimé d’herbes, jus de feuille d'épineux", price_cents: 3800 },
          { name: "Crème de cresson de fontaine, œuf de poule bio", price_cents: 3200 },
          { name: "Carpaccio de Saint-Jacques au citron de Menton", price_cents: 3600 },
          { name: "Asperges Blanches, sauce mousseline légère", price_cents: 3400 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Saint-Pierre piqué de citron confit, beurre d’algue acidulé", price_cents: 6200 },
          { name: "Homard des Côtes Européennes, conchiglioni glacé", price_cents: 7200 },
          { name: "Langoustines en bouillon d’artichaut barigoule", price_cents: 5900 },
          { name: "Bar de ligne rôti, asperges vertes du Pertuis", price_cents: 5800 },
          { name: "Pigeonneau de Monsieur Miéral à la lavande", price_cents: 5400 },
          { name: "Ris de Veau doré au sautoir, pommes rattes", price_cents: 6800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Desserts",
        items: [
          { name: "Choco-Mint : moelleux Manjari mi-cuisson", price_cents: 2400 },
          { name: "Fraises des Bois, crème madame vanille de Tahiti", price_cents: 2400 },
          { name: "Sablé Breton et sorbet fraise Gariguette", price_cents: 2200 },
          { name: "Soufflé au Grand Marnier, glace vanille", price_cents: 2000 }
        ]
      }
    ]
  },
  description: `Frédéric Simonin, Meilleur Ouvrier de France, livre une partition gastronomique impeccable dans un écrin sobre et chic de la Plaine Monceau. Étoilée au Guide Michelin, sa table célèbre le produit brut avec une technique virtuose et des assaisonnements d’une justesse rare. C’est la quintessence du raffinement français : discret, souverain et profondément axé sur l'émotion gustative.`,
  insider_tip: `• **Virtuosité** : Observez la précision des cuissons, c'est ce qui définit Simonin.
  • **Célébration** : Le menu Dégustation en 8 séquences est un voyage initiatique pour les amateurs de haute technique.
  • **Lieu** : Idéal pour un déjeuner d’affaires de haut vol ou un dîner discret et intimiste.`,
  expert_catchline: "La rigueur et le talent d’un Meilleur Ouvrier de France dans chaque assiette.",
  specials: {
    cuisine: ["Haute Gastronomie"],
    drinks: ["Vins prestigieux", "Grands Crus"],
    must_eat: "Haute gastronomie. Le Saint-Pierre au citron confit ou les langoustines au bouillon d’artichaut.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/frederic-simonin-restaurant/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/frederic-simonin-restaurant/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/frederic-simonin-restaurant/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/frederic-simonin-restaurant/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/frederic-simonin-restaurant/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/frederic-simonin-restaurant/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.6,
  michelin_stars: 1,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Haute gastronomie. Le Saint-Pierre au citron confit ou les langoustines au bouillon d’artichaut.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default frederic_simonin_restaurant;
