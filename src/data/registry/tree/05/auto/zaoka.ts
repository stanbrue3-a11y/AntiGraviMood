import { SurgicalPlace } from "../../../type-definition";

export const zaoka: SurgicalPlace = {
  id: "poi-zaoka",
  slug: "zaoka",
  name: "Zaoka",
  category: "restaurant",
  subcategory: ["taïwanais", "street-food", "asian"],
  location: {
    address: "3 Rue des Patriarches, 75005 Paris, France",
    arrondissement: 5,
    lat: 48.8413563,
    lng: 2.3509841,
    nearest_metro: "Censier-Daubenton",
    metro_lines: [7],
    google_id: "ChIJBwmxhO5x5kcRq1xF0j6r9vw"
  },
  moods: {
    chill: 80,
    festif: 20,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "Mar-Sam: 12h-15h, 19h-22h30 | Dim-Lun: Fermé",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://zaoka.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-29",
    verified_at: "2026-03-29",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Poulet Frit Taïwanais (Popcorn Chicken)", price_cents: 900, description: "Sel, poivre et basilic frit", is_highlight: true },
          { name: "Salade de Concombres Frappés", price_cents: 600, description: "Vinaigre noir et huile de sésame" },
          { name: "Edamame Grillés", price_cents: 500, description: "Fleur de sel et sésame torréfié" },
          { name: "Tempura de Légumes de Saison", price_cents: 800 },
          { name: "Gyoza Grillés au Porc (x5)", price_cents: 800 },
          { name: "Gyoza Végétariens (x5)", price_cents: 800 },
          { name: "Champignons Enoki Croustillants", price_cents: 700 },
          { name: "Tofu Frit Sauce Aigre-Douce", price_cents: 700 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Gua Bao Classique", price_cents: 1200, description: "Porc braisé, coriandre, cacahuètes rémoises et moutarde marinée", is_highlight: true },
          { name: "Gua Bao Poulet Frit", price_cents: 1300, description: "Poulet croustillant, chou mariné, sauce secrète" },
          { name: "Gua Bao Champignon Shiitake", price_cents: 1200, description: "Option végétarienne aux champignons rôtis" },
          { name: "Gua Bao au Bœuf Épicé", price_cents: 1400, description: "Émincé de bœuf au cumin" },
          { name: "Lu Rou Fan (Bol de Riz au Porc)", price_cents: 1400, description: "Porc mijoté, œuf mariné sur riz parfumé", is_highlight: true },
          { name: "Ji Rou Fan (Bol de Riz au Poulet)", price_cents: 1400, description: "Poulet effiloché, sauce soja douce" },
          { name: "Soupe de Nouilles au Bœuf (Niu Rou Mian)", price_cents: 1600, description: "Bouillon riche, bœuf fondant et pak choï" },
          { name: "Nouilles Froides au Sésame (Liang Mian)", price_cents: 1300, description: "Sauce cacahuète et concombre julienne" },
          { name: "Rice Burger au Porc", price_cents: 1500 },
          { name: "Rice Burger au Poulet", price_cents: 1500 },
          { name: "Assiette Découverte Taïwan", price_cents: 1800, description: "Mix de spécialités du jour" },
          { name: "Nouilles Dan Dan", price_cents: 1400, description: "Porc haché épicé et ciboule" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Bao Sucré au Taro", price_cents: 600, description: "Pâte fondante à l'igname" },
          { name: "Mochi Artisanal (x2)", price_cents: 500, description: "Sésame noir ou cacahuète", is_highlight: true },
          { name: "Panna Cotta au Jasmin", price_cents: 700 },
          { name: "Glace au Lait et Perles de Tapioca", price_cents: 800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Bubble Tea Classique", price_cents: 650, description: "Thé noir, lait, perles de tapioca" },
          { name: "Bubble Tea Matcha", price_cents: 700 },
          { name: "Thé Oolong Froid", price_cents: 500 },
          { name: "Bière Taïwan Beer", price_cents: 600, description: "La classique de Taipei" },
          { name: "Bière Asahi", price_cents: 550 },
          { name: "Jus d'Aloe Vera", price_cents: 400 },
          { name: "Limonade Yuzu", price_cents: 500 },
          { name: "Expresso", price_cents: 250 }
        ]
      }
    ]
  },
  description: `À deux pas de la rue Mouffetard, Zaoka vous embarque pour un aller sans retour vers les night markets de Taipei. Dans un cadre intimiste aux accents boisés, cette cantine taïwanaise maîtrise l'art de la fusion street-food avec une authenticité redoutable. Les baos vapeur sont d'un moelleux incomparable, renfermant des garnitures généreuses où la poitrine de porc mijotée vole souvent la vedette.`,
  expert_catchline: `Cuisine taïwanaise. Gua Bao de compétition & Lu Rou Fan ultra-réconfortant.`,
  insider_tip: `• **Le Décor** : L'ambiance est cosy et s'y prête parfaitement pour un dîner intimiste ou un déjeuner sur le pouce.
  • **Le Must-Eat** : Le Gua Bao au porc mijoté avec ses éclats de cacahuètes, un monument de réconfort.
  • **Le Secret** : Combinez votre bao avec le poulet popcorn taïwanais pour une véritable expérience de night market.`,
  specials: {
    cuisine: ["Taïwanais"],
    drinks: ["Bubble Tea", "Taiwan Beer"],
    must_eat: "Cuisine taïwanaise. Gua Bao & Lu Rou Fan."
  },
  images: {
    hero: "AU_ZVEFgzdY__ICBvCu_bzm2a8vguK80T2pqRzUvyTVUb7USE8vnYb9bggrxwfbdDmlVDB7LDQBGCPrvyKziEWpLmbixvpJSJDXdU8Z1EN7O3NRrpSHX469Y3egqNLxXw6wURvF3q9VZH6ANCFXF_PdTnx8mOATuKlyc9PaoB-CxJxQqRo7zUGpPvzrzu6Tz4G4y9hA3H89ZxQnOmkVHjnZDyPYvKcKzP5e3l9f_8M3Ps1aESwibEaPl358tb1_k2-hiLNfnoF2zs-osUn2ECOH8lUp0vkzLKEtBODuqxJ9D2ndTY5D5xCb9KGUolTUyzLbs2kL7relcumUfkklmhB0Dz0ZQg9KVR2FfBPTDn_1MRXOPPPNgESwzdhV7o-ihbIY6nVK9cy9ZrZS5iRK9cc2tpTeQnrIB5-fpDJBqCdAWiLRf0Gc",
    gallery: ["AU_ZVEEA-c3H8xh1SHQ1zSeTF3oUnw99jiaGCLmi3DCkP6DGIAfSF8z71IenzCS3dRWgq7IEBsL2viW1UQp827UaaQBbgUuLwkpAoCuomWP0T7lqoDVrSP2kBZ21VlsIcSVSjzt6HZNvIGsYiUO6NVBZ3vwECZnJyr152iJwwcvMCv4UjROsk6x0lYvSYLJZboza9xJ7s3ycJelAuIDymZD_i2o0wIHaOoMHgXhE0He33dDzdMjaZ7FmtKpqQWw1QNHDtT4SMsBLl3r2IN8_jb16dsQmY7JBb97LnsQR2V4H57AztBH_j1zL678OTykF5SELjDB3GCFCb2xnB5CKXr0t89qkOND9m4r8sa9JRuIIdhSLRBAyMAWLgOeBEJZiEAf-plRfi0LJhtQLdFm26hzFHtDGU4BjUKFhtgi0n5HQT2Q2V58","AU_ZVEGVfDK2haFR7fPLMBJrg4BiJbFIB78SJEf8d-kvgpKMBSkZ_Ue-mtPdPqOPN8vRHU5N5vT2OWpJFxr0Nsr5PMoyZY_LjC0MWS4Ptq5Ke_8fMZUdMVlXA4CLPBG4GxZFYNuFosPOhh8G-UHosb2hL9Po4qOb4C84yVYjXo13DOI0m9AU-CzfBOeYXOF_o_3Bsy1-tSLg0GiTMn3codDbsbhGaT-FoMRHHcjiI_W2J9FBatBSTNM3t82-V1H--2CeHDsPXz3DLHAR_gp1QC9U-WQlZgvpMcwLRRIgKpGAZjMZKknYXq4ZWNLIlRwFav7xhwKIG_lgaGMT_B8qSiCJpIdIE7HBbyVnrJ0jhuSMJLj8z_ka1IWOskOlNNIWDXGLDjpdz_d9VEhwxl9nbVstSFX6rkydDhq6KD-ZyUEqHGt1cw", "AU_ZVEGVfDK2haFR7fPLMBJrgoBihJGFIB78SJEf8d-kvgpKMBSkZ_Ue-mtPdPqOPN8vRHU5N5vT2OWpJFxr0Nsr5PMoyZY_LjC0MWS4Ptq5Ke_8fMZUdMVlXA4CLPB"]
  },
  verified: true,
  google_rating: 4.6,
  real_talk: {
    text: `Une cantine qui sent bon le voyage. On vient ici pour croquer dans la street-food taïwanaise la plus réconfortante du 5ème arrondissement, sans aucune prétention mais avec beaucoup de goût.`,
    must_eat: `Cuisine taïwanaise. Gua Bao traditionnel au porc.`,
    le_secret: `Ne partez pas sans tester leurs thés Oolong froids, parfaits pour casser le côté riche du Gua Bao.`,
    le_son: `Ambiance cantine animée et chill.`,
    le_must: `Prendre 2 baos différents pour tout goûter.`
  }
};

export default zaoka;
