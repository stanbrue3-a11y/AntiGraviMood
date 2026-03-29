import { SurgicalPlace } from "../../../type-definition";

export const geoelia: SurgicalPlace = {
  id: "poi-geoelia-16",
  slug: "geoelia",
  name: "Geoélia",
  category: "restaurant",
  subcategory: ["gastronomique", "terroir", "végétal-engagé", "passy"],
  location: {
    address: "125 Rue de la Tour, 75116 Paris",
    arrondissement: 16,
    lat: 48.863265,
    lng: 2.2744685,
    nearest_metro: "La Pompe",
    metro_lines: [9],
    google_id: "ChIJI15J0wVl5kcRJ15AKiwqxfM"
  },
  moods: {
    chill: 95,
    festif: 0,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "Lun-Ven: 12h-13h30, 19h-21h | Sam-Dim: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://geoelia.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 150,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Les Menus Immersion",
        items: [
          { name: "Menu en 7 Temps", price: "160€", description: "L'expression totale du terroir par Camille Saint-M'leux", highlight: true },
          { name: "Menu en 5 Temps", price: "125€", description: "Une partition végétale et marine équilibrée" },
          { name: "Menu Déjeuner", price: "65€", description: "3 temps, le meilleur rapport qualité/prix du quartier" }
        ]
      },
      {
        category: "Les Échos de la Terre (Dégustation)",
        items: [
          { name: "Poireau de Sable au Charbon", price: "0€", description: "Textures fumées, praliné noisette sauvage" },
          { name: "Betterave Crapaudine Salée", price: "0€", description: "Croûte de sel, réglisse et herbes potagères", highlight: true },
          { name: "Omble Chevalier de Rivière", price: "0€", description: "Cuit au foin, émulsion légère d'oseille" },
          { name: "Volaille de la Cour d'Armoise", price: "0€", description: "Le suprême rôti, jus corsé à l'origan" },
          { name: "Agneau de Lait des Pyrénées", price: "0€", description: "Épaule confite 24h, ail des ours et navets boulangère" },
          { name: "Champignon de Paris en textures", price: "0€", description: "Cru, torréfié, en bouillon et en mousse" },
          { name: "Carotte de chez mon Maraîcher", price: "0€", description: "Terreuse, gingembre et fanes frites" },
          { name: "Bar Sauvage de Petite Pêche", price: "0€", description: "Saisi à la nacre, beurre de ciboule" },
          { name: "Sourdough Maison & Beurre baratté", price: "0€", description: "Pain au levain naturel 48h" },
          { name: "Amuse-Bouche Potager", price: "0€", description: "Soupe froide de saison et écume d'herbes" }
        ]
      },
      {
        category: "Finales Terre-Air (Desserts)",
        items: [
          { name: "Chèvre Frais de la Ferme", price: "18€", description: "Herbes folles du jardin et miel de forêt" },
          { name: "Rhubarbe Sureau & Yaourt", price: "0€", description: "Fraîcheur acide, sorbet sauvage et meringue", highlight: true },
          { name: "Chocolat Noir & Sarrasin", price: "0€", description: "Ganache fumée au bois d'olivier et croustillant breton" },
          { name: "Poire Confite à la Verveine", price: "0€", description: "Jus de poire réduit et amandes fraîches" },
          { name: "Abricot & Thym Citronné", price: "0€" },
          { name: "Mignardises de Camille", price: "0€", description: "Petits fours du moment" }
        ]
      },
      {
        category: "La Sommelerie Engagée",
        items: [
          { name: "Accord Mets & Vins 'Empreinte'", price: "85€", description: "Vignerons indépendants et bio" },
          { name: "Accord 'Botannique' (Sans alcool)", price: "65€", description: "Infusions d'herbes et eaux aromatisées" },
          { name: "Coupe de Champagne Extra-Brut", price: "24€" },
          { name: "Verre de Muscadet Granit", price: "14€" },
          { name: "Bouteille de Morgon Nature", price: "72€" },
          { name: "Thé Vert Genmaicha de Prestige", price: "12€" },
          { name: "Café Micro-Torréfaction", price: "10€" },
          { name: "Eau de Source Filtrée", price: "7€" }
        ]
      }
    ]
  },
  description: "Geoélia est la révélation étoilée de Camille Saint-M'leux, nichée dans le calme de la rue de la Tour. Le chef y prône une gastronomie de terroir ultra-précise, où le végétal s'élève au rang de pièce maîtresse. Chaque plat est un hommage vibrant aux petits producteurs, sublimé par une technique minimaliste et audacieuse. Dans un cadre épuré, aux tons naturels et à l'acoustique travaillée, Geoélia offre une parenthèse zen et précieuse où la sincérité culinaire est la seule règle.",
  expert_catchline: "La poésie brute du terroir à la table étoilée de Camille Saint-M'leux.",
  insider_tip: "Ne faites pas l'impasse sur la Betterave Crapaudine, c'est elle qui a fait la réputation du chef. Le menu déjeuner est une pépite à 65€ pour s'initier à la haute gastronomie engagée.",
  specials: {
    cuisine: ["Gastronomique Terroir", "Moderne"],
    drinks: ["Vins Nature", "Accords Botanniques"],
    must_eat: "Cuisine Terroir. Betterave Crapaudine en croûte de sel & Rhubarbe-Sureau.",
    must_drink: "Accord Botannique Sans Alcool"
  },
  images: {
    hero: "AU_ZVEFmILqtKa-4tl-PYTqazv3wj18DWEjRaa60n-_XD2VdhWeiyMhDlyv3uHmXg0Dxr2Pfk7W-DwQME2CjwCpmvzmiOn3yy3NuRHeVA9ve200YGH17rjePZda0lvdlBuhqshzFcuDGHOOZ3TXAUD6ua0rUg3g5bzIYXXiFiP2ye7q2_1L27hFvB3horp1Q9xuxeckClQHs6WYG-qgWEPqxNdF6bMpUGJwmjyQbDuODvSIShPdYZ_C2sAHzUIw_P-R5gOzDez_p1tleu6tk1a_7QA93oQDS1rJJPjKlDLg46vr0PBPSt-r_eT7-IY-y4uzBbGoBJUlVlaSMiXnzW12-SA35uH88HCFkzamNKs5II8D7QYEEjSTsDVG1hUNeXc0RfeIrjsD0jljwgwyZzchJp7ywen4c5L61cC3l0IOO6hwymRpA4IhwS1ufrZ4QIzN0",
    gallery: [
      "AU_ZVEGo_moYYwoRgPu9PgGq80HEliQ09th4ilj48hYfo-nI8fcGmTuFJcdImPKAMC99b1BHvKftZJyO_zbRx6uLs7s7yj9zdyKa4pvXrzUMeI-HDEeObhgJ4Jb0VUa7YlJZz0D0lPSII1RPBrwdXf3dQ5dWjIpdOPN3hEBMgZB_xWwVNrEHV3nLVDkroeXonOB4H38K4SmGcfR17D46aTSM1rE5GbHd038SGOYvynvtrRH5HZ1xPhj6ZzHwM-H8Y2myxO80RPveWogUKOz_gogHMtXLRuKECcYjOVlyv2_smqD6OA",
      "AU_ZVEFeNLEHyj6ZNht9h5ntwuLLGkiBxMjRHkhmaRc1HsjAThXspnUxFpWhZN_QdQp_Dgbu5avq37ZqQ7o2UQxXL9Yi2dmQz-s_Y-EeIWN3AxwZBtzAgXAP1J-1_O_bECbB5bVSKH4KZJNfDdbMJUB2aIsjnroVQtrvVvVVofE_AYFqQzCU4qtEGFV8c9o6WURowdm3EP-pE4b7Rz3d9Qh9sM11VquOf7ylJsX3AR0ScUTuSGjfyt8ua63GtzK6NlUj9dkjcN7kSpgCX5hiMvOr_AF6LIgMuSq6UKLy6hc_K0S0dK41l_PS2OIlL25hACPOPgvKVzGo_7imF1hQGwyvEKa54k_yQWNeAgIxGmnQ_Vbc1Vq4b1P1MEqnW2nnTx0bju_1WWlIH_8aNpQoHxSDAp_e3SddOLCIe_zD-f4ZaW-cCPK5Epge3-1_NGm_rg"
    ]
  },
  verified: true,
  google_rating: 5,
  michelin_stars: 1,
  instagram_handle: "geoelia_paris",
  real_talk: {
    text: "Un lieu qui apaise instantanément. Camille n'est pas là pour épater mais pour nourrir l'esprit avec les meilleurs produits du terroir. C'est brillant, technique et d'une sincérité désarmante.",
    must_eat: "Cuisine Terroir. Betterave Crapaudine.",
    le_secret: "L'infusion de fin de repas réalisée avec les herbes sourcées chez les mêmes maraîchers que pour les plats.",
    le_son: "Un silence élégant et feutré, propice à la confidence.",
    le_must: "Dîner face à la baie vitrée pour profiter de la douceur du quartier Passy."
  }
};

export default geoelia;
