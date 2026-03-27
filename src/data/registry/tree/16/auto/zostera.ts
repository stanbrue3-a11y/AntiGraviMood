import { SurgicalPlace } from "../../../type-definition";

export const zostera: SurgicalPlace = {
  id: "poi-zostera",
  slug: "zostera",
  name: "Zostera",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "40 Rue Pergolèse, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.87436,
    lng: 2.2825778,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJmc1-M0xv5kcRc7IR1byBo7U"
  },
  moods: {
    chill: 85,
    festif: 0,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:00 – 22:30 | mardi: 12:00 – 14:00, 19:00 – 22:30 | mercredi: 12:00 – 14:00, 19:00 – 22:30 | jeudi: 12:00 – 14:00, 19:00 – 22:30 | vendredi: 12:00 – 14:00, 19:00 – 22:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.zostera.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 110,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Les Menus Côtiers",
        items: [
          { name: "Menu Nature (8 Temps)", price: "125€", description: "L'immersion totale dans l'écosystème marin de Julien Dumas", highlight: true },
          { name: "Menu Immersion (6 Temps)", price: "95€" },
          { name: "Menu Déjeuner 'Marée Haute'", price: "50€", description: "4 services, servi au déjeuner uniquement" }
        ]
      },
      {
        category: "Les Étapes de l'Océan",
        items: [
          { name: "Algues Zostères & Coquillages", price: "0€", description: "Bouillon iodé, textures croquantes" },
          { name: "Huître de l'Île aux Oiseaux", price: "0€", description: "Légèrement tiédie, eau de concombre", highlight: true },
          { name: "Lieu Jaune de Ligne", price: "0€", description: "Nacre fondante, beurre de dulse" },
          { name: "Ormeau Sauvage", price: "0€", description: "Snacké, jus de viande réduit et salicorne" },
          { name: "Saint-Jacques de plongée", price: "0€", description: "Crues et marinées au galanga" },
          { name: "Pigeon de Terre et de Mer", price: "0€", description: "Le coffre rôti, jus de carcasse infusé aux algues" }
        ]
      },
      {
        category: "Douceurs de l'Arrière-Pays",
        items: [
          { name: "Chariot de Fromages de Bretagne", price: "22€" },
          { name: "La Pomme d'Antan", price: "0€", description: "Confite au miel de mer, sorbet cidre" },
          { name: "Chocolat de la Manufacture", price: "0€", description: "Fleur de sel de Guérande, mousse d'embruns" },
          { name: "Mignardises Littorales", price: "0€" }
        ]
      },
      {
        category: "La Cave Marine",
        items: [
          { name: "Accord Mets & Vins 'Estran'", price: "75€" },
          { name: "Coupe de Champagne Extra-Brut", price: "28€" },
          { name: "Bouteille de Chablis 1er Cru", price: "90€" },
          { name: "Eau Minérale 'Abatilles'", price: "9€" },
          { name: "Café de Spécialité", price: "10€" },
          { name: "Infusion de Plantes Sauvages", price: "12€" }
        ]
      }
    ]
  },
  description: `Zostera est le nouveau navire amiral du chef Julien Dumas (ex-Saint James) situé rue Pergolèse. Ce passionné d'écologie marine propose une cuisine radicale et poétique centrée sur les produits de l'océan et les herbes sauvages du littoral. Fraîchement étoilé en 2026, l'établissement offre une expérience immersive unique, où chaque plat semble avoir été puisé directement dans une crique sauvage de Bretagne.`,
  expert_catchline: `L'océan sauvage s'invite à la table étoilée de Julien Dumas.`,
  insider_tip: `• **Algues Zostères** : Le nom du restaurant vient d'une plante marine, et vous la retrouverez sous diverses formes dans le menu.
  • **L'Ormeau** : Si Julien Dumas en propose, foncez, c'est l'un des rares chefs à savoir dompter ce produit complexe.
  • **Le Midi** : À 50€, c'est un 'cheat code' pour découvrir la signature d'un grand chef étoilé sans se ruiner.`,
  specials: {
    cuisine: ["Gastronomique Marine", "Français"],
    drinks: ["Vins du Val de Loire", "Champagnes de Vignerons"],
    must_eat: "L'Ormeau Sauvage et son jus aux algues. Une claque marine.",
  },
  images: {
    hero: "AU_ZVEHBJ_xrhroZv1EAqtUsLleWjI1a-khrCLcX4Sf6KHiCmKKtfLlDcts1oVge2xF74HtlQSMaljwRLo74rKWeGPRSFAGd2BfCJ-wNKny653Trt-prq5IBQdCNmW6y5OUVAZ-9i6LXBNIj0dGQ1QkK-I-jrUun2hcyBRXIzzFz0xC4QxOrxTrAbubD3AC80WMH2bpe6eqZmF-hececUE-fSmjMqXdlik-eaZkKZmW2Y3qRx1S2g242ryma4ApE24NKJfj1dXqkJDgzUITVSqnSUve-G9ahImjNtWQO25HaM16EE2KFjFMufL9UV0BYduoJyJpVWLu-wWoStVhw_pzRZDJGUTIOxHFHDqCbbc_PEHMNJ1NkTZqrXfqfW-igeHoFRKQqrSrzGkSWDrwm52CF8EIeC9EYPjWtE9qBbHd8VIvwxbPLK5RkDZK8MJYwIA",
    gallery: ["AU_ZVEEcnjh3o6-nbd95xXyGVU-2xyV0MysEnThREajlFhdqOr-xA11tl6qqxyZeKEiFXskW-wslMMuSLf_I6ISdPw36ByhB7B9gFylEompB1uz6nPPwDwBqlYk6I01pLNhmDTprWgKw8OUX2CI1MaL2SiSk5do1wXOJu4iQKbbwJtMS7mMdGy84GmKd6EhTRThgCcB3ff8g4tMyElas8h7zDdilwXg4TUGiLOR4QX7yT9RfpCXCg7pyGTFYh1roF-kXlcy1o0XCUJy-ZEha2yB_hdK_i0sWs0XE7p0ErvdcD8SNsQ","AU_ZVEGxRc4gnJLslwgBeeSKTDV-hBefDCp1GecyhGoEcLepI0bPz6Lpe9IDCkvD3B1G-7wttnJdyl686mOJr4KtRezCKLS09s6Xmom57eWgomCWfefaeRitry0wY1TbhTI_5b1W2gBlt0U_kOzUzsvU_rDKImH2CzV6dEekmPN2SR2D471y24p4CUR250G7vZLvRYjOMVdr5T3QjbF9n9fBeag4rROEIcroJf6ihwxDijF2ti4zgyapjxob3HyC6-wAXW-GiIpeSbUZnjLSEkWYvnTBVMiE0qXtELe-UL66UKysSNIE6IlruYY3XVdVGYsWJl6SycrQFxDjVrHj-oOF10dwN-xxtTKLI4XwhdGmjdFri3WHxyUeDu0322LfPsw9P2j06vd_qdqgSvVrGxeAtKMyklOdNdMEPTRXla8UwF4z-B0iRMykWhyeUOAX6VHW"]
  },
  verified: true,
  google_rating: 4.8,
  michelin_stars: 1,
  real_talk: {
    text: "Chez Zostera, on ne mange pas du poisson, on boit l'océan. Julien Dumas est un puriste absolu de l'iode. Le cadre est sobre pour laisser place aux textures incroyables de ses coquillages. Une expérience radicale.",
    must_eat: "Ormeau Sauvage",
    le_secret: "La proximité avec la place de l'Étoile tout en étant dans une rue hyper calme qui renforce l'aspect 'bulle marine'.",
    le_son: "Le silence, presque religieux, entrecoupé par les descriptions passionnées des serveurs.",
    le_must: "Le menu Nature en 8 temps qui est un véritable voyage côtier sans bouger de Paris."
  }
};

export default zostera;
