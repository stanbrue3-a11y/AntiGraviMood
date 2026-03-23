import { SurgicalPlace } from "../../../type-definition";

export const zhao_louvre: SurgicalPlace = {
  id: "poi-zhao-louvre",
  slug: "la-taverne-de-zhao-louvre",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ["chinois", "noodles", "biang-biang", "authentique", "chic"],
  location: {
    address: "22 rue Molière, 75001 Paris, France",
    arrondissement: 1,
    lat: 48.8653054, 
    lng: 2.3363313,
    nearest_metro: "Palais Royal - Musée du Louvre",
    metro_lines: [1, 7],
    google_id: "ChIJMaKiAJFv5kcRLB8Kv2l2ORY"
  },
  moods: {
    chill: 60,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 22:30 | dimanche: 12:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/louvre/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Entrées & Raviolis (Jiaozi)",
        items: [
          { name: "Salade de Tofu frité", price: "4.80€" },
          { name: "Algues marinées au sésame", price: "4.50€" },
          { name: "Pommes de terre à la vinaigrette de Xi'an", price: "4.20€" },
          { name: "Oreilles de porc pimentées", price: "5.50€" },
          { name: "Concombre frappé à l'ail", price: "4.50€" },
          { name: "Raviolis Porc & Chou (8 pièces)", price: "12.00€" },
          { name: "Raviolis Poulet & Champignon (8 pièces)", price: "12.00€" },
          { name: "Raviolis Végétariens (8 pièces)", price: "11.50€" },
          { name: "Assiette dégustation (12 pièces)", price: "16.00€" }
        ]
      },
      {
        category: "Burgers Chinois (Mo's)",
        items: [
          { name: "Mo au Porc mijoté", price: "6.50€", description: "Pain pita croustillant" },
          { name: "Mo au Bœuf au curry", price: "7.00€" },
          { name: "Mo au Canard laqué", price: "7.50€" },
          { name: "Mo Végétarien", price: "6.00€" }
        ]
      },
      {
        category: "Les Plats (Biang Biang)",
        items: [
          { name: "Biang Biang au Bœuf mijoté", price: "12.80€", description: "Nouilles larges maison, épices" },
          { name: "Biang Biang au Porc haché", price: "11.50€" },
          { name: "Biang Biang Poulet croustillant", price: "13.00€" },
          { name: "Biang Biang Tomate & Œuf", price: "10.80€", description: "Option végétarienne iconique" },
          { name: "Biang Biang Canard laqué", price: "14.50€" }
        ]
      },
      {
        category: "Desserts & Douceurs Maison",
        items: [
          { name: "Mochi glacé (2)", price: "4.50€" },
          { name: "Perles de coco", price: "4.80€" },
        ]
      }
    ]
  },
  description: "À quelques pas du Louvre, cette taverne est sans doute la plus raffinée du groupe. Avec son décor qui mêle pierres apparentes et design contemporain, elle offre une parenthèse de sérénité au cœur du 1er arrondissement. On y déguste les spécialités de Xi'an avec une élégance rare.",
  insider_tip: "• C'est l'adresse idéale si vous cherchez un déjeuner chic et authentique après une visite au Musée.\n• La salle est feutrée et bien insonorisée, ce qui en fait un spot parfait pour un rendez-vous calme.\n• Ne repartez pas sans avoir goûté le thé au jasmin, servi ici avec une attention particulière.",
  specials: {
    cuisine: ["Chinoise", "Xi'an", "Nouilles"],
    must_eat: "Cuisine chinoise. Biang Biang Bœuf & Raviolis maison",
  },
  images: {
    hero: "AU_ZVEGPNrOixdLurpWzlD2ZUHxzE161i9CXRIK1_NQtP1H7SDoDc0lvmvgbOfVCGPhvgCuAaPG6DBRfkTtfO9-f-C8nZZOiofpxaDpbQkSwQz6yqI-jTl9vo67KibpmqcUZlaNG7-OWqlolH3EGQtz3fE6deQ6Q18mUuNMOf8BVE7PTHmgBXK-O8xnIddESl8dHPBPvAe6SJMS-ffGVFcClpHoDSLD014DDGlfqDsMFSwnpmGRoGflHNpf17gTyMuQsG-x_cO7bdLVqkTba99C2NfcAhZy4wEYG3-GypgJqHM6BTA",
    gallery: [
      "AU_ZVEEwzmgTRGH-ThBgXb4AkPMNPzkX1nHCXpnj6nSd8DYeWFnLLeN-w5d5EHZO2CoBuuOgJqBtAKjwfBziVPwlMeWm3iVY-zmwBEcM37fNjkB9iu-HTvuVuYHlZTpG6f8XYaQlxHpbkjsJImPcwJKrhKKtzxqCDzjsj6ong5rAiKaWpvl_SDcXsV4B6CpxI8m8LOQeN4QQOrg9r2tml15wG8-NeXOkyy8oT9AiGuMYoEK2uouIVQ70L84Mr1v4rQh2cjujGREb_GzreM89wD512ssGNTIw9o21GOpvuHy2Rtm05A",
      "AU_ZVEHmd1qWOD7Q7a8gwITBYSQ6l5yMTuIXm8ap8Mm-CoOIqIB2n9RN2YxCegN-ofYmihLLl1vDQMnfNaerBvUz4n4YSZughowe-0yN6HkCCAZEUTLLXqCJGXm1B09lw7UDh5Ql5itaI2Lpgy740zN3X8G1cMXPO6yRq8QQV4umbVm_mQO_GeQ_BmyPt-AwCcj0lnPUueO_OFQaM2j3rJt_AVb7dLfRRXKWlmezG9uezghLi2Gf9hJlDNB-rZrvMXFPdxxWZCVkVeBrhWeOKtCnsfMnwqNrJyy3zd0vkI39iiqNmOkKUlmCAOv-bJFobS2KPfIjR968lwnSDsyKOBLkxL3LmC3OlMVwqb01yuIno7LUbtZkhmIl2I6MdvaPcoBgab3G2AULl2tthdpPNpq_4sXsQQJ-o4bPkrA2VPxsC9yrmSh7"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default zhao_louvre;
