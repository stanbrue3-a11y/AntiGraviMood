import { SurgicalPlace } from "../../../type-definition";

export const blanc: SurgicalPlace = {
  id: "poi-blanc",
  slug: "blanc",
  name: "Blanc",
  category: "restaurant",
  subcategory: ['bar à vin'],
  location: {
    address: "52 Rue de Longchamp, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.86512829999999,
    lng: 2.2875706,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ-We0YUpv5kcREptIC-71C_Y"
  },
  moods: {
    chill: 90,
    festif: 0,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 19:00 – 23:30 | mercredi: 12:00 – 15:00, 19:00 – 23:30 | jeudi: 19:00 – 23:30 | vendredi: 19:00 – 23:30 | samedi: 12:00 – 15:00, 19:00 – 23:30 | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://blanc-paris.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 300,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Menus Dégustation",
        items: [
          { name: "Le Menu Blanc", price_cents: 36000, description: "L’expérience signature complète de Shinichi Sato", is_highlight: true },
          { name: "Menu Perle", price_cents: 29000 },
          { name: "Table du Chef", price_cents: 45000, description: "Face aux cuisines, menu exclusif" },
          { name: "Menu Déjeuner", price_cents: 18000, description: "Uniquement servi le midi" }
        ]
      },
      {
        category_type: "other",
        display_label: "Les Étapes du Blanc",
        items: [
          { name: "Beurre aux Algues & Pain Maison", price_cents: 0, description: "Le prélude iconique" },
          { name: "Asperge Blanche & Caviar", price_cents: 0, description: "Pureté et iode" },
          { name: "Ormeaux de l’Île de Groix", price_cents: 0, description: "Cuisson lente, condiment ail noir" },
          { name: "Turbot de Ligne", price_cents: 0, description: "Nacre parfaite, émulsion de coquillages" },
          { name: "Bœuf de Galice au Charbon", price_cents: 0, description: "Accompagné de cecina, une intensité rare", is_highlight: true },
          { name: "Côte de Veau de Lait", price_cents: 0, description: "Au Château-Chalon, morilles étuvées" },
          { name: "Pigeonneau de Racan", price_cents: 0, description: "Sur le coffre, abats en toast" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Finitions & Douceurs",
        items: [
          { name: "Sorbet Shiso", price_cents: 0, description: "Nettoyage du palais" },
          { name: "Soufflé Minute à la Vanille", price_cents: 0 },
          { name: "Textures de Fruits de Saison", price_cents: 0 },
          { name: "Mignardises Haute Couture", price_cents: 0 }
        ]
      },
      {
        category_type: "other",
        display_label: "La Sélection Sommelier",
        items: [
          { name: "Accord Mets & Vins ’Découverte'", price_cents: 15000 },
          { name: "Coupe de Champagne Blanc de Blancs", price_cents: 3500 },
          { name: "Bouteille de Meursault (Sélection)", price_cents: 16000 },
          { name: "Bouteille de Gevrey-Chambertin", price_cents: 22000 },
          { name: "Thé Vert Gyokuro ’Prestige'", price_cents: 1800 },
          { name: "Eau Filtrée ’Blanc'", price_cents: 800 },
          { name: "Expresso Pur Origine", price_cents: 1200 }
        ]
      }
    ]
  },
  description: `Blanc est le sanctuaire gastronomique du chef japonais Shinichi Sato. Dans un décor épuré et minimaliste, le chef (ancien double étoilé du Passage 53) repousse les limites de la précision. Chaque plat est une leçon de pureté, privilégiant le produit brut sublimé par une technique franco-japonaise sans faille. Une expérience zen, silencieuse et intensément mémorable.`,
  expert_catchline: `La perfection japonaise au service de la grande tradition française.`,
  insider_tip: `• **Le Bœuf de Galice** : C'est le plat signature absolu de Sato, la cuisson au charbon de bois atteint ici un niveau de maîtrise inégalé.
  • **Discrétion Automnale** : Le décor est très sobre, presque clinique, pour ne laisser place qu’à l'assiette. Idéal pour les puristes du goût.
  • **Réservation** : Les places sont rares et la Table du Chef est très demandée, réservez plusieurs semaines à l’avance.`,
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Vin", "Sake"],
    must_eat: "Cuisine française. Le Bœuf de Galice au Charbon. Probablement la meilleure viande de Paris.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/blanc/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/blanc/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/blanc/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/blanc/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/blanc/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/blanc/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.5,
  michelin_stars: 2,
  real_talk: {
    text: "Chez Blanc, on ne discute pas, on contemple. Shinichi Sato est un obsédé du détail. Tout est immaculé, du décor à la nacre du turbot. C’est l'un des rares lieux où le silence fait partie du menu.",
    must_eat: "Cuisine française. Bœuf de Galice au Charbon",
    le_secret: "La cave de sakés incroyables qui changent la vision qu’on peut avoir des accords de gastronomie française.",
    le_son: "Le silence, ponctuel, majestueux.",
    le_must: "Pour les puristes qui considèrent la gastronomie comme un art sacré."
  }
};

export default blanc;
