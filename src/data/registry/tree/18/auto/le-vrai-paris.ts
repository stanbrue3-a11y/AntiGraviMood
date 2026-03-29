import { SurgicalPlace } from "../../../type-definition";

export const le_vrai_paris: SurgicalPlace = {
  id: "poi-le-vrai-paris",
  slug: "le-vrai-paris",
  name: "Le vrai Paris",
  category: "restaurant",
  subcategory: ["brasserie", "bistrot", "terrasse", "fleurie", "cuisine de terroir"],
  location: {
    address: "33 Rue des Abbesses, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8849583,
    lng: 2.3370663,
    nearest_metro: "Abbesses",
    metro_lines: [12],
    google_id: "ChIJzZpoE0Vu5kcR0KUvRgGO56A"
  },
  moods: {
    chill: 40,
    festif: 85,
    culturel: 65
  },
  practical: {
    opening_hours_raw: "lundi: 07:00 – 02:00 | mardi: 07:00 – 02:00 | mercredi: 07:00 – 02:00 | jeudi: 07:00 – 02:00 | vendredi: 07:00 – 02:00 | samedi: 07:00 – 03:00 | dimanche: 07:00 – 02:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://levraiparis-bistrot.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 35,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Os à moelle rôti, gros sel", price_cents: 1200 },
          { name: "Escargots de Bourgogne (x6)", price_cents: 1450 },
          { name: "Soupe à l'oignon gratinée", price_cents: 1100 },
          { name: "Salade de chèvre chaud", price_cents: 1300 },
          { name: "Foie gras de canard maison", price_cents: 1850 },
          { name: "Œuf cocotte aux morilles", price_cents: 1500 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Confit de canard du Sud-Ouest", price_cents: 2100 },
          { name: "Steak frites, sauce au poivre", price_cents: 2600 },
          { name: "Risotto aux champignons sauvages", price_cents: 1900 },
          { name: "Pavé de saumon à l'oseille", price_cents: 2250 },
          { name: "Burger du Vrai Paris", price_cents: 1950 },
          { name: "Tartare de boeuf au couteau", price_cents: 1800 },
          { name: "Blanquette de veau à l'ancienne", price_cents: 2200 },
          { name: "Magret de canard au miel", price_cents: 2400 },
          { name: "Cassoulet maison", price_cents: 2350 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Desserts",
        items: [
          { name: "Crème brûlée à la vanille bourbon", price_cents: 950 },
          { name: "Mousse au chocolat maison", price_cents: 800 },
          { name: "Tarte au citron meringuée", price_cents: 900 },
          { name: "Café gourmand", price_cents: 1100 },
          { name: "Coupe de glaces artisanales", price_cents: 700 },
          { name: "Île flottante et son caramel", price_cents: 900 }
        ]
      }
    ]
  },
  description: "Bistrot parisien emblématique de la rue des Abbesses, Le Vrai Paris séduit par sa devanture fleurie spectaculaire et son atmosphère survoltée. On y déguste les grands classiques du terroir français dans un décor rétro soigné. Sa terrasse chauffée, idéalement placée, est l'un des meilleurs postes d'observation pour capturer l'esprit bohème et vibrant de Montmartre.",
  insider_tip: "• **Timing Stratégique** : Pour un déjeuner en terrasse sans attente, privilégiez le service continu entre 15h et 18h.\n• **Combo Moelle** : Le Confit de Canard est ici une valeur sûre, particulièrement généreux et accompagné de frites maison croustillantes.\n• **Détail Secret** : La devanture fleurie change selon les saisons, n'oubliez pas votre appareil photo, c'est l'un des lieux les plus instagrammables de la Butte.",
  specials: {
    cuisine: ["Brasserie", "Bistrot", "Terroir"],
    drinks: ["Vins de pays", "Brouilly", "Bière pression"],
    must_eat: "Cuisine de brasserie. Confit de canard & Os à moelle rôti",
  },
  images: {
    hero: "AU_ZVEG7jLqCquWNceZaZZBTDvzWa6FmfKihUREn88qD4teUOOtdLNgVOMh1oLgnJGogT27TSEi1W_-5DHNfSJViIn-QDyAgTgOS-19zfXpq7F5R3L3MkbkiW5Lw8cH-NSiRBQYqXB2WEA8K9hWBU3ZiA0wKD8KAurod-WowArCyZeZZ31ooCQoBxUOuBkFepSleLYzi2QG4Gx75RDrmJCOc-2iy6PrZWWucsEN2PORUpcGQOaS2GjFbLOqpXLwQc2orNsjFPFBZ8eSDr3gIf58wttOcj_z4H1oOkw9TDgGgw7Y",
    gallery: ["AU_ZVEFB-O26phV4FFxWpTM7kvDVlkugF6YwaUHqWvdsLzGguIEKkwjkTPERfJSo8iQDBXQXsKHBoXddhHrkarAeYpauOGZM7BtHY5F7mOQzGNEDidk2MCjLF8Ibfs7nCTb5A5HgSa1fI3jURlWR_sS2bHeNA--5WOy2tFFgi-qFQrAPayvhG7aDDw6ZsIMrrlO9uwKZBYImgd43fDOUdBDsXBOwpjjICk7ytfL4xZ9RO9qJNzRxHyuy52mhF1Hf7AsZR7XIkqffprN3hc67eAHSG9PnNGNO8hFpygDs6k_sz7Y","AU_ZVEE3K7LTJZ_Xh1M_fJ3nwSqoM8yFJF-dtvI8F5lL6zkWLVYyu04-teleR5ce0OwEfX4t80yp5zGUJ7eZOD335Avt7L4CVTUaAvDAQMOKA5W27XpVl5rYE-G0x3HRoVLgYPURiy1HO9b6SWcvbjJRkwT7C4rq3pRGANJ8pLFs4VizJv2i7-NiGq_I_wKjFxdELIrQnVqxphodJ6az-Tzf-Gi3MpbvgsAfSGTtZZEmReTbDjpzN7mNdI-TS0tEqi3z5-Ooj2m-VaSvxMl3NGZ5ZlCJFImyvQB0DwX-HG16VqM"]
  },
  verified: true,
  google_rating: 4.1
};

export default le_vrai_paris;
