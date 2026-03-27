import { SurgicalPlace } from "../../../type-definition";

export const caillebotte: SurgicalPlace = {
  id: "poi-caillebotte",
  slug: "caillebotte",
  name: "Caillebotte",
  category: "restaurant",
  subcategory: ["bistrot", "bistronomie", "moderne", "terroir"],
  location: {
    address: "8 Rue Hippolyte Lebas, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8771649,
    lng: 2.3407727,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ7z8M6Adu5kcR_F589_9uO-g" // Corrigé (Exclusivité 9e)
  },
  moods: {
    chill: 70,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:30 – 15:00, 19:30 – 23:30 | mardi: 12:30 – 15:00, 19:30 – 23:30 | mercredi: 12:30 – 15:00, 19:30 – 23:30 | jeudi: 12:30 – 15:00, 19:30 – 23:30 | vendredi: 12:30 – 15:00, 19:30 – 23:30 | samedi: 12:30 – 15:00, 19:30 – 23:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lapantruchoise.com/caillebotte",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Préludes de Saison (Entrées)",
        items: [
          { name: "Terrine de Raie, Câpres & Citron confit", price: "13.00€", highlight: true },
          { name: "Ravioles de Jarret de Veau & Bouillon corsé", price: "14.50€", highlight: true },
          { name: "Poulpe de Roche poêlé & Houmous onctueux", price: "15.00€" },
          { name: "Velouté de Courge Butternut & Noisettes", price: "11.00€" },
          { name: "Œuf Parfait, Crème de Parmesan & Tuile dentelle", price: "13.50€", highlight: true },
          { name: "Maquereau mariné au Vin Blanc & Pickles", price: "12.50€" },
          { name: "Carpaccio de Bœuf de Salers & Huile de Noisette", price: "14.00€" },
          { name: "Saladine de Tourteau à la Mangue & Coriandre", price: "16.00€" }
        ]
      },
      {
        category: "Maîtrise & Terroir (Plats)",
        items: [
          { name: "Échine de Cochon fermier rôtie, Jus de viande", price: "25.00€", highlight: true },
          { name: "Barbue de Ligne à la nacre, Légumes oubliés", price: "28.00€", highlight: true },
          { name: "Pigeon de Vendée rôti sur le coffre (Michelin)", price: "34.00€", highlight: true },
          { name: "Quasi de Veau, Artichauts poivrade & Sauge", price: "27.00€" },
          { name: "Dos de Cabillaud au Chorizo & Bouillabaisse de légumes", price: "26.00€" },
          { name: "Ris de Veau doré au sautoir, Meunière (Prestige)", price: "38.00€", highlight: true },
          { name: "Gnocchis de Ricotta Maison, Beurre de Sauge", price: "22.50€" },
          { name: "Lotte rôtie & Émulsion à la Verveine citronnée", price: "29.00€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pomme de Terre au Beurre demi-sel", price: "6.50€", highlight: true },
          { name: "Frites fraîches Maison double cuisson", price: "6.00€" },
          { name: "Légumes Racines glacés au miel de fleurs", price: "7.00€" },
          { name: "Riz Sauvage Noir Sélectionné", price: "6.50€" },
          { name: "Petite Salade d'Herbes fraîches & Vinaigrette", price: "5.50€" }
        ]
      },
      {
        category: "Sucré-Signature (Desserts)",
        items: [
          { name: "Riz au Lait culte, Caramel & Brisures de sablé", price: "11.00€", highlight: true },
          { name: "Ganache Chocolat Noir & Fève Tonka", price: "10.50€" },
          { name: "Pomme confite, Glace Vanille-Estragon", price: "10.00€", highlight: true },
          { name: "Rhubarbe confite & Crumble d'Avoine", price: "11.50€" },
          { name: "Pêches confites, Granola & Sorbet Yaourt", price: "11.00€" },
          { name: "Assiette de Fromages (Vieux Comté & Saint-Nectaire)", price: "13.00€" },
          { name: "Sorbet Maison de saison (3 boules)", price: "9.00€" }
        ]
      },
      {
        category: "La Cave de Franck (Boissons)",
        items: [
          { name: "Verre de Bourgogne Manuel Olivier", price: "10.00€", highlight: true },
          { name: "Bouteille Beaujolais Villages Alex Foillard", price: "34.00€" },
          { name: "Jus de Fruits Artisanaux Sélection", price: "7.50€" },
          { name: "Eau micro-filtrée Caillebotte (75cl)", price: "4.50€" },
          { name: "Café Espresso Terres de Café", price: "3.50€" },
          { name: "Thé Vert Sencha de haute qualité", price: "6.50€" },
          { name: "Cocktail Spritz Caillebotte au St-Germain", price: "11.00€", highlight: true }
        ]
      }
    ]
  },
  description: "Caillebotte est la petite sœur lumineuse du Pantruche, une annexe bistronomique où le chef Franck Baranger déploie une cuisine de marché d'une précision diabolique. Dans un cadre épuré mêlant bois blond et cuisine ouverte, on y déguste des assiettes racées, généreuses et techniquement irréprochables. C'est l'adresse phare du 9ème pour ceux qui cherchent la quintessence du néo-bistrot parisien : créativité, produits nobles et prix restés sages.",
  insider_tip: "• **Le Riz au Lait** : Il est devenu culte dans tout le 9ème. Ne partez pas sans le goûter, sa texture et son caramel sont une référence.\n• **Le Déjeuner** : Profitez de la formule à 23€ en semaine, c'est l'un des meilleurs rapports qualité-prix de Paris.\n• **La Table du Chef** : Si vous pouvez, asseyez-vous face à la cuisine pour voir le ballet des cuisiniers, c'est un spectacle de précision.",
  specials: {
    cuisine: ["Bistronomie créative", "Cuisine ouverte", "Produits de saison"],
    drinks: ["Vins vivants & natures", "Sélection de Bourgogne", "Cocktails Maison"],
    must_eat: "Le Riz au Lait (11€) : l'un des plus mythiques de la capitale, une gourmandise réconfortante et parfaitement équilibrée.",
  },
  images: {
    hero: "AU_ZVEF8AoWPc7Yc9KzmUIqumwfdZjFtGqFgwLE4b1USioQBFAH0nPjsC3-baOmFkbQVEV_m0bvsPKofCas6EpkB4_TMndeVq8L2rbSnHspfLgXaUfq5fNa88WNSZ85RSrgrMWnIziaAsmmUtFwcJD8T_eoEZG13P7ziEVMSK81zKZq4SupW7hCpJ_335sU9EDRNya7eaIN-HiXTQSuKD2adf2yFogb3dplrle6DoWeSHTWtbdLFbanLe-KoIS2agAOBRNJamyBiZ1uaNydPj77jXKvk-RjVBEStmfkOStJiyRbvZs6JJH8E4ZjyZ3i2YgvNOnavG_0e3PYcr42Tdq3NWvQ5iHe4n-W7emaNW4UUD7nutcSOvCMr9ES7bY11MvheA5wNOIT0tCvEUkyHu5gqrSVjTQrS_OH6Iz1pkT90lk1DtVBG",
    gallery: ["AU_ZVEGuHZc-Dgi0NNcxl__lZFcQVp75iG_FWL9tDOSHIWPq7SxzFnkISIJfT_HEOB6C90dc1wKZArvCTCb3xgF87Q5EEDUhrIoubO9nX66r7E9KXIpw-JI4mh4vFvYizCoSI00c2j0bAUzF_2qPY0b9Gll6RZbZSwxrazS_r57XWLTLFxhZjFrZS62ZBrhcfE8HgN7V9qg1e9pwVobYJVwvn3qubSD_QaSGypaEsb16eGzW5pj_04vJI5gn2ihaBxNkF9tA5TVmht1IC-tDMH1D89i1S7hll6iaPRbUlnmPIrAW1OXCET38OvxayuUtmbJ7pmJzmrORshmbaLeCqI7Z51sJ3ZUpp6nhDjOsKIq5FVkND9hRTh0hg40hRoLUtEsJcgJkJdbASQpy1pOu8T0tLGjH-zDXkgsvzgmQ4KGFIUf3GQ","AU_ZVEHeAMam3iYOU5dxvDPnuk8WKeeWKLqsTiRgTHzSIuO67irJVVDetxn8X2Qsf4E5O70huKa67jF-1_IdaxU4_lwGBgFAWGtSpMM1Eb9Bml1Hebbh9-X9FXFDdZd2hnKhSlatCqChF4Vuotkrkvf_baEB3QnHBgyCBTSd5LnkGBj2fn9ZnNj1HcY3j2g7RXb88J9I5MCnV0pyoQFueVrche7XMZSWVptlANZwYyuIG7RP_M7lPnT3NefhtglYTbVE66HBxQLLnD40QmiXHRs23ckXOzzdZjQjoP3N1Qdcll9ifPM0funXKeD91YTx-x4E933BopxlTn0zzAyB9-6zKnhBBpFNVBUcrW2FRs_Mdfy_RwKyexBoteaN8s-LmgSMSR03ry91-RNXmvt_8CfOinluHf5fuy1bJOQ-Uec0983OgNIA-s5SN-z2xyvNr45K"]
  },
  verified: false,
  google_rating: 4.6
};

export default caillebotte;
