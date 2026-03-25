import { SurgicalPlace } from "../../../type-definition";

export const ducky_s: SurgicalPlace = {
  id: "poi-ducky-s",
  slug: "ducky-s",
  name: "Ducky's",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "157 Bd du Montparnasse, 75006 Paris, France",
    arrondissement: 6,
    lat: 48.8405755,
    lng: 2.334641,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ4X7yYsZx5kcRVWcDbOW0Fds"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.duckys.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 14,
    dish_price: 11.90,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Les Menus Combo (Plats)",
        items: [
          { name: "Menu 2 Gua Bao + Frites + Boisson", price: "11.90€", highlight: true },
          { name: "Menu Canard Laqué (Plat + Boisson)", price: "13.90€" },
          { name: "Menu Porc Laqué (Plat + Boisson)", price: "13.90€" },
          { name: "Menu Poulet Citronnelle (Plat + Boisson)", price: "12.90€" },
          { name: "Menu Végétarien (Gua Bao Tofu + Boisson)", price: "11.50€" }
        ]
      },
      {
        category: "Gua Bao : Les Plats / Burgers Asiat'",
        items: [
          { name: "Gua Bao Canard Laqué Solo", price: "5.50€", highlight: true },
          { name: "Gua Bao Porc Laqué Solo", price: "5.50€" },
          { name: "Gua Bao Poulet Citronnelle", price: "5.50€" },
          { name: "Gua Bao Tofu Bio", price: "5.00€" },
          { name: "Gua Bao Crevette Panko", price: "6.00€" }
        ]
      },
      {
        category: "Rôtisserie & Plats Signature",
        items: [
          { name: "Canard Laqué Entier (À partager)", price: "30.00€", highlight: true },
          { name: "Demi Canard Laqué", price: "16.00€" },
          { name: "Porc Laqué (Char Siu) - Portion", price: "11.00€" },
          { name: "Plat de Riz au Canard Laqué", price: "12.00€" },
          { name: "Wok de Nouilles au Poulet", price: "11.50€" },
          { name: "Cuisses de Canard Confites façon Asie", price: "14.50€" }
        ]
      },
      {
        category: "Dim Sum & Accompagnements",
        items: [
          { name: "Nems au Porc Maison (x4)", price: "6.00€" },
          { name: "Nems Végétariens (x4)", price: "5.50€" },
          { name: "Ha Kao (Crevettes x4)", price: "7.00€" },
          { name: "Siu Mai (Porc/Crevette x4)", price: "7.00€" },
          { name: "Frites de Patate Douce Maison", price: "5.50€", highlight: true },
          { name: "Gyoza Grillés Poulet (x5)", price: "6.50€" },
          { name: "Salade de Chou Croquante", price: "4.50€" }
        ]
      },
      {
        category: "Douceurs & Boissons",
        items: [
          { name: "Mochi Glacé (Parfum au choix)", price: "3.50€" },
          { name: "Perles de Coco au Lait de Coco", price: "5.50€" },
          { name: "Gâteau Banane & Coco", price: "5.50€" },
          { name: "Bière Tsingtao (Bouteille)", price: "5.00€" },
          { name: "Lait de Soja Maison", price: "3.50€" },
          { name: "Thé Glacé Maison (Citron)", price: "4.50€" }
        ]
      }
    ]
  },
  description: "Ducky's est l'adresse street-food par excellence lancée par la famille Ang (Tang Frères), apportant le savoir-faire de la rôtisserie traditionnelle dans un format urbain et moderne. Spécialisé dans le Gua Bao (le célèbre burger à la vapeur) et le canard laqué, l'établissement propose une cuisine rapide, savoureuse et accessible. C'est le spot idéal pour un déjeuner sur le pouce ou pour emporter les classiques de la gastronomie cantonaise revisités avec une touche contemporaine.",
  insider_tip: `• **Le Combo Ultime** : Le menu à 11.90€ avec deux Gua Bao est imbattable pour tester différentes rôtisseries (Canard et Porc).
  • **Secret Side** : Leurs frites de patate douce sont considérées comme parmi les meilleures du quartier, parfaitement croustillantes.
  • **Le Canard de Fête** : Il est possible de commander un canard entier laqué à l'avance pour vos dîners à la maison, découpé selon les règles de l'art.`,
  specials: {
    cuisine: ["Street Food", "Chinoise", "Asiatique"],
    drinks: ["Tsingtao", "Thé Glacé Maison"],
    must_eat: "Street Food. Gua Bao Canard Laqué & Frites de Patate Douce",
  },
  images: {
    hero: "AU_ZVEHY17L9DvYi5E1HJ1utVVWVb0vPfDKoq-cqRVavSMJgVONcrGLQAWaOTJoTKMCXTGzMyR2aqBeoJ6Kger_6srALn2pfpnwViZMAb0a3KawV8ycFLQmzMfoDgkv4t4DulCa8Q5BXYfFPlUOxpi7mPw_YYnT6uYhTq03efogm34Q69DkOYt1mWsytg54MlnQdt7GFJ-WRaVyjL-gIDvYTYvD6j-KE1BMw4_mQIv_5ZlgdMNXNtzi_IWBkQKWTT61imYUZIm12TBobJNohtqBhHau5rcfeQexvp91keKaIRxAsckUx-PON38dAtwwWYqPfLBD4bTWwydOMihlAy44608vHoTGN_ELcU0vnCiXtLCbTTxz-YQXRdA8tzYGbdPQ9aOZyARyAds2Sd-mKF5xQQv7h5XNsPsPYZAwJFN3qndqfB1o",
    gallery: ["AU_ZVEGK-srVRdQf2kvOwc08uZtU2rHmYNjxRrOB0WgVCWzzz7Or-6fjt_aW1paVedAUgqb6qzv9zE1ouWbJSbNCRnA_M822TsWE-fs8rZERuWzxXbp1C0kZ7XsBc-AQI41xDptQ9UIW8Np-_D9PiX2qP9gk1PoU6tmCRGNXcYODPnPcAoHrvw1qjVEwV1gVMVrmD42BA9_KxEsIEitx4n_Lk2AORU-p3X74Bl_Z_nku8UeKWnrqyk6eTOlKKdrA8ivYQDqWsCBFzMx-AC7z8WbkGhwVYfRigJ2Gpucao5LlL9RKMg","AU_ZVEE8ujWLjeox-qcANOpqzm91pMCT6dBedZ0o4Z3yy2XIdcF96F7twXLw7ljJSpXiqG6eMy1BRG-aV1pKqrpIe4Esmiu1mmIAfcJRk13stlm6kXprH7ka5fYX-WezUvw-fcTWju196MOVu2OpaMRBBwdh4hujVbPfLiW0ZrgYp9XQ4H06uBzjIZ3rOxXXgydCfGlgiGEblx1lWL0jScPtH0APo2F9YNDzkBFdWJdvslG7aiY6tfJq-LqDVM0NmqF2ZwW1Q8aoDoKSRh_iAuVbdQ0a6ISe5qJ2dUXrO4dLcxzvQ-YEElCy32E_hwFNs4f0-xSWybWSAD_4MKIZKr1mCJ6D1fS6ynQ9NYQRcxyBaN6rc9X_Xp1FTsr5MBh4FvvDjGuM0i9jEkCInIM91k-ubLtjmd9v1CMNrmFEOgYh2jeeuw"]
  },
  verified: false,
  google_rating: 4.6
};

export default ducky_s;
