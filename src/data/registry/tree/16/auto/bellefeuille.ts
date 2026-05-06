import { SurgicalPlace } from "../../../type-definition";

export const bellefeuille: SurgicalPlace = {
  id: "poi-bellefeuille",
  slug: "bellefeuille",
  name: "Bellefeuille",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "5 Pl. du Chancelier Adenauer, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8705451,
    lng: 2.2799786,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJh6iPsZNv5kcRbwL5NqrZtqA"
  },
  moods: {
    chill: 80,
    festif: 0,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 19:30 – 21:30 | mardi: 19:30 – 21:30 | mercredi: 19:30 – 21:30 | jeudi: 19:30 – 21:30 | vendredi: 19:30 – 21:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.saint-james-paris.com/fr/bellefeuille.html",
      label: "VÉRIFIER DISPO"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 220,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Menus Dégustation",
        items: [
          { name: "Menu en 6 Étapes", price_cents: 25000, description: "Le voyage complet dans l’univers de Grégory Garimbay" },
          { name: "Menu en 4 Étapes", price_cents: 20000 },
          { name: "Menu en 3 Étapes", price_cents: 17000 },
          { name: "Menu Diamant Noir (Saison Truffe)", price_cents: 32000, description: "5 services dédiés à la truffe noire" }
        ]
      },
      {
        category_type: "other",
        display_label: "La Nature & Le Jardin",
        items: [
          { name: "Araignée de Mer de casier", price_cents: 6500, description: "Au caviar, bouillon de carcasse infusé", is_highlight: true },
          { name: "Courge du Potager", price_cents: 5500, description: "Au riz noir de Camargue, condiment fumé" },
          { name: "Langoustine de Bretagne", price_cents: 7500, description: "Juste saisie, beurre de corail" },
          { name: "Légumes de Saison", price_cents: 4800, description: "Cuisinés en différentes textures, fleurs du jardin" },
          { name: "Turbot de Ligne", price_cents: 8500, description: "À la nacre, émulsion au pin" },
          { name: "Veau de Lait", price_cents: 8000, description: "Quasi rôti, jus perlé, racines de saison" },
          { name: "Canette de Challans", price_cents: 7800, description: "Poitrine fondante, cerise et hibiscus" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Douceurs Botaniques",
        items: [
          { name: "Chocolat & Aiguilles de Pin", price_cents: 3200, description: "Une signature végétale et intense" },
          { name: "Miel du Saint James", price_cents: 2800, description: "Glacé, pollen frais et agrumes" },
          { name: "Soufflé Passion", price_cents: 3000, description: "Cœur coulant, sorbet gingembre" },
          { name: "Sélection de Fromages de Maître", price_cents: 3400 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de Sancerre (Domaine Vacheron)", price_cents: 2200 },
          { name: "Cocktail Signature ’Bellefeuille'", price_cents: 2800 },
          { name: "Thé Rare (Sélection)", price_cents: 1400 },
          { name: "Expresso Bio", price_cents: 900 }
        ]
      }
    ]
  },
  description: `Table étoilée du mythique hôtel Saint James Paris, Bellefeuille est un écrin de verdure et de sérénité. Le chef Grégory Garimbay y déploie une cuisine inspirée par la nature, les produits de la mer et le potager de l’hôtel. La salle, entre bibliothèque et jardin d’hiver, offre une atmosphère confidentielle et luxueuse, loin du tumulte parisien.`,
  expert_catchline: `Une escale gastronomique botanique dans le jardin secret du 16e.`,
  insider_tip: `• **Le Jardin Caché** : En été, demandez une table en terrasse sous la pergola pour vivre l’expérience 'garden party' la plus chic de Paris.
  • **Cuisine de Potager** : Le chef utilise les herbes et légumes du jardin bio de l’hôtel, ne manquez pas les plats identifiés 'Potager'.
  • **Le Bar de l’Hôtel** : Prolongez la soirée au Library Bar de l’hôtel, l'un des plus impressionnants de la capitale.`,
  specials: {
    cuisine: ["Français"],
    drinks: ["Vin", "Cocktail", "Thé"],
    must_eat: "Cuisine française. L’Araignée de Mer au Caviar. Une explosion d’iode et de finesse.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bellefeuille/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bellefeuille/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bellefeuille/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bellefeuille/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bellefeuille/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bellefeuille/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,
  michelin_stars: 1,
  real_talk: {
    text: "Bellefeuille est une bulle. On oublie qu’on est à Paris. La cuisine de Garimbay est d'une légèreté incroyable, avec un focus rare sur le végétal sans jamais être ennuyeux.",
    must_eat: "Cuisine française. Araignée de Mer au Caviar",
    le_secret: "La piscine de l’hôtel est accessible aux résidents, mais l'ambiance du jardin est ouverte à tous pour le dîner.",
    le_son: "L’élégance du silence, feutré par les tapis et la végétation.",
    le_must: "Pour un dîner romantique ou confidentiel où l’on veut vraiment impressionner par le calme et la beauté du lieu."
  }
};

export default bellefeuille;
