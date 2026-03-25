import { SurgicalPlace } from "../../../type-definition";

export const le_maquis: SurgicalPlace = {
  id: "poi-le-maquis",
  slug: "le-maquis",
  name: "Le Maquis",
  category: "restaurant",
  subcategory: ["français", "bistrot", "moderne", "cloys", "gastronomique"],
  location: {
    address: "53 Rue des Cloys, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8932077,
    lng: 2.3373085,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJzfIaxFlu5kcRvu1q5E3sCjs"
  },
  moods: {
    chill: 95,
    festif: 35,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:30 – 14:30, 19:30 – 22:30 | mercredi: 12:30 – 14:30, 19:30 – 22:30 | jeudi: 12:30 – 14:30, 19:30 – 22:30 | vendredi: 12:30 – 14:30, 19:30 – 22:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://lemaquisrestaurant.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 28,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Les Entrées",
        items: [
          { name: "Pâté en croûte maison (Recette de saison)", price: "12.00€" },
          { name: "Betteraves fumées, crème d'aneth & herbes", price: "11.00€" },
          { name: "Asperges vertes grillées, sabayon agrumes", price: "13.50€" },
          { name: "Terrine de foies de volaille", price: "10.00€" },
          { name: "Tartelette oignons cévenols confits", price: "11.50€" },
          { name: "Pignons de pin, herbes sauvages & radis", price: "9.00€" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Cochon de lait rôti, petits pois & menthe", price: "24.00€" },
          { name: "Poisson de ligne (selon arrivage), fenouil", price: "26.00€" },
          { name: "Pithiviers de canard et foie gras", price: "28.00€" },
          { name: "Risotto d'épeautre aux légumes printaniers", price: "22.00€" },
          { name: "Bœuf braisé au vin rouge, purée fondante", price: "25.00€" },
          { name: "Linguine au citron et poutargue", price: "21.00€" },
          { name: "Epaule d'agneau confite 12h", price: "27.00€" },
          { name: "Poitrine de veau croustillante", price: "25.50€" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Sélection de fromages affinés", price: "12.00€" },
          { name: "Riz au lait à la vanille, caramel salé", price: "8.50€" },
          { name: "Mousse au chocolat noir et huile d'olive", price: "9.00€" },
          { name: "Tartelette aux fraises gariguette", price: "10.50€" },
          { name: "Sorbet maison (Parfum du jour)", price: "7.00€" },
          { name: "Baba au rhum ambré", price: "11.00€" }
        ]
      }
    ]
  },
  description: "Caché dans le calme du quartier des Cloys, Le Maquis est la pépite bistronomique que les Parisiens s'échangent sous le manteau. Ici, la cuisine est sincère, saisonnière et d'une technicité bluffante sous des airs de simplicité. L'ambiance est intimiste, avec une sélection de vins naturels pointue qui accompagne parfaitement chaque assiette. C'est le bistrot moderne par excellence.",
  insider_tip: "• **Timing Stratégique** : Venez au déjeuner pour profiter d'un rapport qualité-prix imbattable sur la Butte.\n• **Combo Moelle** : Le pâté en croûte est une spécialité reconnue du chef, un incontournable de la maison.\n• **Détail Secret** : La carte change presque quotidiennement selon l'inspiration du chef et les arrivages du marché.",
  specials: {
    cuisine: ["Française", "Bistrot", "Moderne"],
    drinks: ["Vins naturels", "Bières artisanales"],
    must_eat: "Bistrot moderne. Pâté en Croûte & Cochon de lait",
  },
  images: {
    hero: "AU_ZVEGKQ6sXUJ4EKZgr_qPnhMh7yQaqNL0gAcp3C-xTGu3f1tvSj3blKLRW3faxIfjqM88ALqCXjge_5Dn6QiHWELeC5BI2hLcfxYh4WsH9etbfRV0oswUW_x5f5ufYJI56oOD2Fjry8a7Sb9j_hA6wqFLxTdLbRT_EIndexYNh7oCVdgkSuPmWFq6hiv-q3bORgAmP53u-bLp4UbrcL9VKPCKArzPmDDzj-AnTbbaybU2bMDo_72iMk1seHysdGkAjIEDmGQA3LG_17weFhXWm4dzDjBAQy_EJOphlnEQILCQzsw",
    gallery: ["AU_ZVEF4Eaj9oNiQJfPW-e7d8dFomdnZLc_kKB_zB0l92HJcJuySQC1uaS5WQ3D4B37y5b5Fcznyt3hrzPfiuy5-iB5QJiRZ054MLt_-ARUgJkn2nGj8VaCz3h0WASNAP8X3m8PhviXey6gCCx-iVn2v1LPy3u6xreSZYfdW8GrvsU3T9Mz4Jgz1EOw6Zc_vE0QITPAa760yQiXOCentXMHUejpRj9M0RoEsFDK94jHe-5GlLvNnXqPhV6Co9hJEgMlwdUGWiGoNrwwChvNFG65i2kJv2q_v5jTelUQys6S-i5wkcVOwwfvbkjbelovxw23U7CM6IoyXuXBvNuxjbkg2gzGJkutzddAB88IwuYQzTu7GFUqNQ4qx-wOnyzpDZAKtzcTX6gEFWDRmrHr0clRe-viZvsmISTOWgo8M88buBXe5-VxL","AU_ZVEEGmhlD1FK8JCPtEFQh4R6vaptcM8H9JubgVWAVQobZVH4VBwLC65CKElch-rrXJK1G86ZZ72f6F2maz-Ze2ZwpYT8UqRkyqe5fCeng6fGwiVhIhGQ2kNHSZZCe7wSc6Lm0DYdJPpk2-c_dmEXvymhz5bsUVMuFYG56nltmAMQhkATsmYDVfJWp5hWx3bLpEULIGHb2q4cWBBRZs7zLWM2aN_6P6_QFEw2Cg2Ev6h9ULAe4_7Ey-Hb4rgU8W8H6Bdi5Q26N8X2w8ZhXzO5qsurAHdJwRntvZds_enB_-8fqPez-ECm3OYdFdJ_8p3alLxkWAyU3mmjZwjCUV7VHEdPxdCWRcc5djbl27T8N3e06dNGFschxDNVXQaSTV1sGlly-MsHNiaCKGmQ0vFVMzP5PzQMUw7YeA9zkHGzbADxxidc"]
  },
  verified: true,
  google_rating: 4.6
};

export default le_maquis;
