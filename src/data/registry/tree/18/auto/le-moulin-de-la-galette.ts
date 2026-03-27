import { SurgicalPlace } from "../../../type-definition";

export const le_moulin_de_la_galette: SurgicalPlace = {
  id: "poi-le-moulin-de-la-galette",
  slug: "le-moulin-de-la-galette",
  name: "Le Moulin de la Galette",
  category: "restaurant",
  subcategory: ["brasserie", "historique", "chic", "traditionnel"],
  location: {
    address: "83 Rue Lepic, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8873961,
    lng: 2.3371292,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ8ZiCuFpu5kcRyvhTh9aSNZU"
  },
  moods: {
    chill: 60,
    festif: 50,
    culturel: 100
  },
  practical: {
    opening_hours_raw: "lundi: 08:00 – 00:00 | mardi: 08:00 – 00:00 | mercredi: 08:00 – 00:00 | jeudi: 08:00 – 00:00 | vendredi: 08:00 – 00:00 | samedi: 08:00 – 00:00 | dimanche: 08:00 – 00:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.moulindelagaletteparis.com/",
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
        category: "Préludes Historiques (Entrées)",
        items: [
          { name: "Terrine de Foie Gras de Canard & Chutney", price: "26.00€", highlight: true },
          { name: "Escargots de Bourgogne en coquille (x9)", price: "19.00€", highlight: true },
          { name: "Cuisses de Grenouille à la Provençale", price: "19.00€" },
          { name: "Gratinée à l'Oignon Traditionnelle", price: "14.00€" },
          { name: "Assiette de Saumon fumé & Blinis Maison", price: "24.00€" },
          { name: "Entrée du jour du Marché", price: "12.00€" },
          { name: "Carpaccio de Bœuf, Copeaux de Grana & Basilic", price: "18.00€" },
          { name: "Burrata crémeuse & Tomates d'Antan au pesto", price: "17.00€" }
        ]
      },
      {
        category: "Classiques de la Galette (Plats)",
        items: [
          { name: "Confit de Cuisse de Canard & Pommes grenailles", price: "26.00€", highlight: true },
          { name: "Sole Meunière (400g), Épinards & Pommes vapeur", price: "45.00€", highlight: true },
          { name: "Pavé de Saumon à la plancha, Julienne de légumes", price: "24.00€" },
          { name: "Le traditionnel Coq au Vin & Tagliatelles fraîches", price: "24.00€", highlight: true },
          { name: "Filet de Bœuf Français (Sauce Poivre ou Béarnaise)", price: "38.00€" },
          { name: "Côte de Bœuf 1.2kg (pour 2 personnes)", price: "95.00€", highlight: true },
          { name: "Risotto aux Gambas & Asperges vertes", price: "28.00€" },
          { name: "Suprême de Volaille jaune & Crème de Morilles", price: "29.00€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre onctueuse au Burret", price: "7.50€", highlight: true },
          { name: "Pommes Grenailles sautées à l'Ail & Persil", price: "7.00€" },
          { name: "Épinards frais à la crème de Normandie", price: "6.50€" },
          { name: "Julienne de Légumes de saison croquants", price: "7.00€" },
          { name: "Frites Maison double cuisson croustillantes", price: "6.00€" }
        ]
      },
      {
        category: "Sucré-Signature (Desserts)",
        items: [
          { name: "Tarte Tatin & sa boule de Glace Vanille", price: "14.00€", highlight: true },
          { name: "Crème Brûlée à la Vanille de Madagascar", price: "12.00€", highlight: true },
          { name: "Profiteroles Artisanales & Sauce Chocolat chaud", price: "14.00€", highlight: true },
          { name: "Mousse au Chocolat à la cuillère (XXL)", price: "12.00€" },
          { name: "Crêpes Suzette flambées au Grand Marnier", price: "15.00€", highlight: true },
          { name: "Dessert du jour Maison", price: "11.00€" },
          { name: "Café Gourmand (Sélection de 3 douceurs)", price: "15.00€" }
        ]
      },
      {
        category: "La Cave du Moulin (Boissons)",
        items: [
          { name: "Verre de Vin de Pays Sélection", price: "7.50€", highlight: true },
          { name: "Bouteille de Chablis (Domaine des Malandes)", price: "48.00€" },
          { name: "Bouteille de Saint-Émilion Grand Cru (Cuvée Rare)", price: "95.00€", highlight: true },
          { name: "Cocktail Spritz du Moulin au St-Germain", price: "12.00€" },
          { name: "Jus de Fruits Artisanaux Alain Milliat", price: "7.50€" },
          { name: "Eau micro-filtrée Moulin de la Galette (75cl)", price: "4.50€", highlight: true },
          { name: "Café Espresso de spécialité Terres de Café", price: "3.50€" }
        ]
      }
    ]
  },
  description: "Le Moulin de la Galette est une icône vivante de l'histoire de Montmartre. Mentionné dès 1622 et immortalisé par Renoir, ce lieu mythique propose aujourd'hui une expérience de brasserie chic et intemporelle. Sous l'imposant moulin en bois, on déguste les grands classiques de la cuisine bourgeoise française — Coq au vin, Sole meunière, Escargots — dans un cadre qui respire l'âme bohème du XIXe siècle. Sa terrasse ombragée est l'un des secrets les mieux gardés de la Butte pour un déjeuner hors du temps.",
  insider_tip: "• **La Table de Renoir** : Demandez une place en terrasse pour vous imprégner de l'atmosphère qui a inspiré le célèbre peintre.\n• **Le Coq au Vin** : C'est une recette inchangée, rustique et réconfortante, exactement ce qu'on attend d'une telle institution.\n• **Visite du Moulin** : Le moulin lui-même ne se visite pas de l'intérieur, mais le restaurant est le seul point d'accès pour l'admirer de si près.",
  specials: {
    cuisine: ["Cuisine bourgeoise traditionnelle", "Plats signatures classiques", "Atmosphère historique"],
    drinks: ["Belle sélection de vins (150 réf)", "Cocktails classiques", "Cave à champagne"],
    must_eat: "Le Confit de Canard (26€) : une cuisson parfaite, une peau croustillante et des pommes grenailles fondantes.",
  },
  images: {
    hero: "AU_ZVEGJz6niuxtitZNJgq6zZWzhTIoEmowDO4xhS9f1rEPo2Pw0lph11PK10LxQ4T1x2uOcEX9ARrZf9AYSHWiEFN1Jjhp8R5nXDh-grMkjnrJ58XBxAMH0cV_MwGo0eFhZHNesxuQKIzhTi-Hk0Z3IhP7qg6Rk6opZxEMJvZwyJZ1n9FIuVxJ4gUPdIZNaWBqdO0kgANxdD8xnH-4-QIxuJOvssDXKbrzWa-4-wkEqFB7RNzZIjOOoSNUJnnZ9dK50PDpXuKtVQd4JGK6AQ4NDsHgmUKwwGNgpicWRGK3JXus",
    gallery: ["AU_ZVEE3_nAPdHns4hoWlqD-0_4ip4QJC75zTRQfbTMFNFrXwGmVLsgJINph2BFryw0SL-MUcZCkrC7qoKBfTjDfAr4xUHchQ3kDdRU6BubPjivSO1iq7nVmNA8MwEqqYO35oE8Qx51mfKSXrs_erbxKtY0tfZPi21i4bONvO0bPdS3IuNI7J23x1xdebnM-VeyF5i81dUxnEoreUiZUn1zkWGsAPYHR3ltpoe1HvU7BLIWtmpn3_vNBLPJOXZDeBl8kagNFH0Ux11xmWAthz7iust3Fr4IodVjbUG19UYnehNjYEvT32yzVM7SU4c5FqtcKMsxfoJ_OyBjZyo2ie7pApNVMOAWOmGsLtTfEwf8BhEGTWZsjBzVxSd7m3aJy9vEWnY03tR9bpdIBx-2MGqQm5cxwOQTPZLR2QyXjAQ91HzzF48-ZNHyGLo0lvyNUInJI","AU_ZVEHKzGbI5E_tq-qEK8yFPA8Xqk6lOON2Pg-RPWw35mcY39o4MisYItQvSpRdL3w3Z6l1nCx2oD-9L61h4Nn7qkGhl9h5s5b_WVm6AjpKG6gnoI7AQqBHVHiEWLd4fAoUv8XZAQNcftaib0bw1it84ires5hsdkdZznss2jrgL8mh8W_WVzAgo1qYbMvQg9a3gDW_L-C7YByS1qnxgPSM4g6Jj3fSwD8cbTC06bUxfKpCWzS5D0qlRhKiFzQoNR_Qwf-5MdyIRE8tjMHnCS_4fY2sYKR3oNr_KYIsN0ztReQ"]
  },
  verified: false,
  google_rating: 4.4
};

export default le_moulin_de_la_galette;
