import { SurgicalPlace } from "../../../type-definition";

export const maison_revka: SurgicalPlace = {
  id: "poi-maison-revka-16",
  slug: "maison-revka",
  name: "Maison Revka",
  category: "restaurant",
  subcategory: ["russe-chic", "slave", "jardin-hiver", "victor-hugo"],
  location: {
    address: "59 Av. Raymond Poincaré, 75116 Paris",
    arrondissement: 16,
    lat: 48.8674347,
    lng: 2.285733,
    nearest_metro: "Victor Hugo",
    metro_lines: [2],
    google_id: "ChIJj5j2zzVv5kcR7B_8Fvb4_Sk"
  },
  moods: {
    chill: 40,
    festif: 65,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Lun-Sam: 12h-15h, 19h-02h | Dim: 12h-16h, 19h-02h",
    reservation_policy: "resa_obligatoire",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maisonrevka.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 120,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "other",
        display_label: "L'Or Noir (Caviar)",
        items: [
          { name: "Caviar Beluga (50g)", price_cents: 24000, description: "Le summum du luxe slave, servi avec blinis", is_highlight: true },
          { name: "Caviar Baeri (30g)", price_cents: 8500, description: "Notes boisées et iodées" },
          { name: "Caviar Oscilètre (30g)", price_cents: 11000, description: "Grain ferme, saveurs de noisette" },
          { name: "Tarama au Caviar", price_cents: 2400, description: "Servi avec toasts briochés" }
        ]
      },
      {
        category_type: "starter",
        display_label: "Incontournables Slave (Entrées)",
        items: [
          { name: "Cœur de Saumon Fumé", price_cents: 3400, description: "Impérial, crème de raifort", is_highlight: true },
          { name: "Pirojkis à la Viande (x2)", price_cents: 1800, description: "Petits chaussons typiques, jus corsé" },
          { name: "Salade Olivier Classique", price_cents: 2200, description: "Pommes de terre, volaille, petits pois et mayo maison" },
          { name: "Borscht Revka", price_cents: 2100, description: "Soupe traditionnelle à la betterave et crème aigre" },
          { name: "Carpaccio de Sériole yuzu", price_cents: 2800, description: "Sériole tranchée finement, huile de citronnelle" },
          { name: "Œuf Mollet au Caviar", price_cents: 2900, description: "Sur lit de crème fraîche épaisse" },
          { name: "Foie Gras au Porto", price_cents: 3200, description: "Gelée de coing et pain noir" }
        ]
      },
      {
        category_type: "main",
        display_label: "Grands Plats Slaves",
        items: [
          { name: "Bœuf Strogonoff", price_cents: 5800, description: "Filet de bœuf émincé, sauce onctueuse aux champignons", is_highlight: true },
          { name: "Coulibiac de Saumon", price_cents: 4800, description: "Saumon en croûte feuilletée, riz, épinards et œuf" },
          { name: "Poulet à la Kiev", price_cents: 4600, description: "Suprême farci au beurre d'herbes et frites maison" },
          { name: "Linguine au Homard", price_cents: 7500, description: "Demie homard bleu et caviar baeri", is_highlight: true },
          { name: "Sashimi de Bar Revka", price_cents: 3600, description: "Vinaigrette truffée et fleurs comestibles" },
          { name: "Sole Meunière du Tsar", price_cents: 5500, description: "Filets levés, purée au caviar" },
          { name: "Entrecôte Wagyu (200g)", price_cents: 8500, description: "Provenance Australie, sauce chimichurri slave" },
          { name: "Risotto Noir Gambas", price_cents: 3900, description: "Gambas impériales, huile de corail" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Final en Apothéose (Desserts)",
        items: [
          { name: "Pavlova Fruits Rouges", price_cents: 2200, description: "Meringue fondante et généreuse", is_highlight: true },
          { name: "Saint-Honoré Vanille", price_cents: 1900, description: "Caramel croquant et crème légère" },
          { name: "Mille-feuille Minute", price_cents: 2100, description: "Vanille Bourbon, format à partager" },
          { name: "Chouquette Impériale", price_cents: 1800, description: "Servies par 6, crème vanille et caviar (optionnel)" },
          { name: "Sorbets Maison Slavons", price_cents: 1200, description: "Litchi, framboise et vodka" },
          { name: "Chocolat Signature", price_cents: 1400, description: "Ganache noire, éclats de sarrasin" }
        ]
      },
      {
        category_type: "drink",
        display_label: "L'Art de la Vodka & Cave",
        items: [
          { name: "Vodka Beluga Gold Line", price_cents: 2800, description: "Shot de 4cl - Service glacé" },
          { name: "Cocktail Moskovskaya", price_cents: 2200, description: "Vodka infusion thé, framboise, citron" },
          { name: "Ruinart Brut (Coupé)", price_cents: 2200 },
          { name: "Saint-Julien (Verre)", price_cents: 2400 },
          { name: "Double Expresso Pavillon", price_cents: 800 },
          { name: "Thé Samovar de luxe", price_cents: 1200 }
        ]
      }
    ]
  },
  description: "Maison Revka est l'écrin du luxe slave à Paris, un pavillon spectaculaire où l'opulence des datchas impériales rencontre l'élégance du 16ème. Dans un décor onirique de boiseries dorées, de velours profonds et d'un jardin d'hiver luxuriant, on y célèbre l'art de vivre russe à travers le caviar, le bœuf Strogonoff et les vodkas de collection. Une adresse envoûtante, orchestrée par Paris Society, qui s'est imposée comme le rendez-vous incontournable du glamour slave parisien.",
  expert_catchline: "L'opulence d'une datcha impériale en plein cœur de Victor Hugo.",
  insider_tip: "Le jardin d'hiver sous la verrière est l'endroit le plus convoité de Paris pour un dîner romantique. Le bœuf Strogonoff est un classique dont on ne se lasse pas.",
  specials: {
    cuisine: ["Slave Moderne", "Russe"],
    drinks: ["Vodkas de Prestige", "Champagnes de Collection"],
    must_eat: "Cuisine Slave. Bœuf Strogonoff & Pavlova aux Fruits Rouges.",
    must_drink: "Vodka Beluga Glasse"
  },
  images: {
    hero: "AU_ZVEEQ8ieM62y48w1CBRr9MHmI3PuNQ6AMFq1QaFs8omu5zjLTpIs88OjpBL_GzXqV-P9-h-xGR78gj6I0DfNjcg8zbPa0mOIzPsX0x26S80KB4qlOdussBHDQdnqeIueT-7foEaT2E03ATe3PkO7C06amKFhHLXyS12DFntfOZ_VGXXCTNqJG9_gV9N9NvuH45N3CStMsPT7yxzbUlBwc4Ki982EUXLupDTfaIY-cHkvMAw54cttBZHTTyCh7wvmDaWrHv7CYHxE4Cu-eQG2SKWg6S0VeR-nBNo3TEOzydLHWng",
    gallery: [
      "AU_ZVEF0ZGlHQz6olNQfPqoqM00gmIGSIbARkGlfNR8g31PQ3ncWxtn5V7pfSf7ql-m7G3I7cHAo8NueZfFGs5nt-2p_Pp8yGCribtujSMCYWS7HGBdTAcYMZse43j-Em2DrejUmLkssaJd_Cz9KgHWECfdJfDMmB5mQ2gas5jSCk_zYl9fuvgLpzc9baf097n5mzYBG7y_26RPuv9n0n5BBM0O3wDm0G-NohlmXS2qAdMEJr5SUrnchIY1N6uNN8O1lqX55RwWBPc29gVFE1I0-M-HZNLGdwvV-V3E6HQIqwCIte1Kctsbeftyk9jDiqbK7Zqjjt2Y3b_naAY02CsJsulDy2oAnvh2bjrjavj8AhA5Ph7jdKnjvTHFYKrZJJGCCbvf4XbqYpPFUvKYsBidc-84Gbn9VROxXGj3lfIFUvmfXBX34GAzOGq1yB2zDGoHS",
      "AU_ZVEES3oxyhUpX3_o2-RAAb6qwNO4qHuCaEhjUBHMoIzCr1UCNvObFYgUDGMoFC_Q5iM8coiJZd_Ar9qA0Lx5Ur7QXh2yvyobmKvITnrx4B6KK7y8Y9TQ1IfLuCJUdwZLLsrckcZZgG_mfncmdQMuLHDpsiZj91uI3xqv0G2vmpwAsJW2d7vtoR9FpMvzhDldkUEe1CXziiTy3L7AygtCYFZ-Jr1XVWz2_diQUNi4g9ZUIDGKiJJXmeVBM-tzJlGCRUFNrL8C2O4M3CHJ48Q3RBRwG9mXvpwczHho0OZzUsQiSKg"
    ]
  },
  verified: true,
  google_rating: 4.1,
  instagram_handle: "maison_revka",
  real_talk: {
    text: "Une expérience immersive totale. On oublie Paris dès qu'on franchit le seuil. C'est doré, c'est feutré et l'assiette impériale est à la hauteur du décor fou.",
    must_eat: "Cuisine Slave. Bœuf Strogonoff.",
    le_secret: "La boutique du rez-de-chaussée permet d'emporter un peu de cet univers slave chez soi.",
    le_son: "Piano-bar live et classiques russes revisités.",
    le_must: "Partager un caviar impérial sous les lustres du grand salon."
  }
};

export default maison_revka;
