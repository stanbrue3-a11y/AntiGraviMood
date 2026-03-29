import { SurgicalPlace } from "../../../type-definition";

export const bellefeuille: SurgicalPlace = {
  id: "poi-bellefeuille",
  slug: "bellefeuille",
  name: "Bellefeuille",
  category: "restaurant",
  subcategory: [],
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
    wifi: false,
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
        category: "Les Menus Dégustation",
        items: [
          { name: "Menu en 6 Étapes", price: "250€", description: "Le voyage complet dans l'univers de Grégory Garimbay" },
          { name: "Menu en 4 Étapes", price: "200€" },
          { name: "Menu en 3 Étapes", price: "170€" },
          { name: "Menu Diamant Noir (Saison Truffe)", price: "320€", description: "5 services dédiés à la truffe noire" }
        ]
      },
      {
        category: "La Nature & Le Jardin",
        items: [
          { name: "Araignée de Mer de casier", price: "65€", description: "Au caviar, bouillon de carcasse infusé", highlight: true },
          { name: "Courge du Potager", price: "55€", description: "Au riz noir de Camargue, condiment fumé" },
          { name: "Langoustine de Bretagne", price: "75€", description: "Juste saisie, beurre de corail" },
          { name: "Légumes de Saison", price: "48€", description: "Cuisinés en différentes textures, fleurs du jardin" },
          { name: "Turbot de Ligne", price: "85€", description: "À la nacre, émulsion au pin" },
          { name: "Veau de Lait", price: "80€", description: "Quasi rôti, jus perlé, racines de saison" },
          { name: "Canette de Challans", price: "78€", description: "Poitrine fondante, cerise et hibiscus" }
        ]
      },
      {
        category: "Les Douceurs Botaniques",
        items: [
          { name: "Chocolat & Aiguilles de Pin", price: "32€", description: "Une signature végétale et intense" },
          { name: "Miel du Saint James", price: "28€", description: "Glacé, pollen frais et agrumes" },
          { name: "Soufflé Passion", price: "30€", description: "Cœur coulant, sorbet gingembre" },
          { name: "Sélection de Fromages de Maître", price: "34€" }
        ]
      },
      {
        category: "La Cave & Boissons",
        items: [
          { name: "Verre de Sancerre (Domaine Vacheron)", price: "22€" },
          { name: "Cocktail Signature 'Bellefeuille'", price: "28€" },
          { name: "Thé Rare (Sélection)", price: "14€" },
          { name: "Expresso Bio", price: "9€" }
        ]
      }
    ]
  },
  description: `Table étoilée du mythique hôtel Saint James Paris, Bellefeuille est un écrin de verdure et de sérénité. Le chef Grégory Garimbay y déploie une cuisine inspirée par la nature, les produits de la mer et le potager de l'hôtel. La salle, entre bibliothèque et jardin d'hiver, offre une atmosphère confidentielle et luxueuse, loin du tumulte parisien.`,
  expert_catchline: `Une escale gastronomique botanique dans le jardin secret du 16e.`,
  insider_tip: `• **Le Jardin Caché** : En été, demandez une table en terrasse sous la pergola pour vivre l'expérience 'garden party' la plus chic de Paris.
  • **Cuisine de Potager** : Le chef utilise les herbes et légumes du jardin bio de l'hôtel, ne manquez pas les plats identifiés 'Potager'.
  • **Le Bar de l'Hôtel** : Prolongez la soirée au Library Bar de l'hôtel, l'un des plus impressionnants de la capitale.`,
  specials: {
    cuisine: ["Français", "Végétarien"],
    drinks: ["Vin", "Cocktail", "Thé"],
    must_eat: "L'Araignée de Mer au Caviar. Une explosion d'iode et de finesse.",
  },
  images: {
    hero: "AU_ZVEEBh-DOMNhRW1FknXABgITWS-ZwgBWXMgZZsztyEUUssn3Uoni4IQ3QdRwrmGaDH-WIF9BPN2K9XcfYu0k3WQLanRthgg8ZolA-NyQuqbW18wmm7lyLO9n5mcYcc6rVjyZD3HlCPYPJJRwqzjkSqli4KrHg7CpJvD5Z7vzBKjmFskAfp5ncicwvE83Bka7wpU4bcbtWoRmK-SDjroxo-vxDwxjtRsUJxf70rsOnYJ8q7vX6xt0t9yZTeke197FqpL4MRlTI162F36thW5eMISmAJgfJqw3328QUDXiohg82BQ",
    gallery: ["AU_ZVEGADITO-kv6gVGNRkW8RsoBXi7ueXL_ohlB7rtMiobf4s7EnfUgeJhTN5MO8sa_tGk8XqlBsR9lxE6C3odL_3jZJy3_5E3Od6XJ9ZBO2Q0_YL2Sg6EtKW_DHqT9vBCfimQC_850iOzMKw14CCTVGVLHwg0S6EXGdTaaH1amqsaBnP8IfrpFE2twFhXJNoHUMLLMFvube49x2G2D8JvDGan0jhvkOx4DClSQkoy1J7ri4SXm5NMlK2YXe_dki27iazzyFNtmDjW9L7ZelUU8Vq6w7IMNY8nBtdaPPwQ3Lifd_Q","AU_ZVEHdmQ5jKyjf6SCDV2JRvekKk7t0MNnoxqh0q4WFBRtzm2e_tJ1eEszJlzLuAm5cKYTZF_4aMd-V6Zz9VqqdsyslYzRY36xK33iV-OSwpnRjyz3RRz9TGLJT4yirBXmT9f_QniM8g32tv9bRYb4Y4K0brTiOFjS2cenBE1TD4E7o2P9DUEP8vgmPBoh5xJmwEbpzSYxAwzpr27TbKB71i7kj0broFtBpgZT5rLKafPlFDXvEECI3pxWIappCnWUXGzJ8COYhf0rpJUi1wbgHB1Wp4Uwhgt13kK0HCCTiOlqQ2g"]
  },
  verified: true,
  google_rating: 4.7,
  michelin_stars: 1,
  real_talk: {
    text: "Bellefeuille est une bulle. On oublie qu'on est à Paris. La cuisine de Garimbay est d'une légèreté incroyable, avec un focus rare sur le végétal sans jamais être ennuyeux.",
    must_eat: "Araignée de Mer au Caviar",
    le_secret: "La piscine de l'hôtel est accessible aux résidents, mais l'ambiance du jardin est ouverte à tous pour le dîner.",
    le_son: "L'élégance du silence, feutré par les tapis et la végétation.",
    le_must: "Pour un dîner romantique ou confidentiel où l'on veut vraiment impressionner par le calme et la beauté du lieu."
  }
};

export default bellefeuille;
