import { SurgicalPlace } from "../../../type-definition";

export const restaurant_le_faham: SurgicalPlace = {
  id: "poi-restaurant-le-faham",
  slug: "restaurant-le-faham",
  name: "Le Faham",
  category: "restaurant",
  subcategory: ["Gastronomique", "Michelin-starred", "Fusion", "Réunionnais", "Créatif"],
  location: {
    address: "108 Rue Cardinet, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.885508,
    lng: 2.3118679,
    nearest_metro: "Pont Cardinet / Malesherbes",
    metro_lines: [14, 3],
    google_id: "ChIJh7RqoiVv5kcR5w3Op2E4r2k"
  },
  moods: {
    chill: 40,
    festif: 50,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: 19:30 – 21:30 | mardi: 19:30 – 21:30 | mercredi: 12:00 – 13:30, 19:30 – 21:30 | jeudi: 12:00 – 13:30, 19:30 – 21:30 | vendredi: 12:00 – 13:30, 19:30 – 21:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://lefaham.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Les Formules & Menus",
        items: [
          { name: "Menu Découverte (1 personne)", price: "54€" },
          { name: "Menu Lunch (3 plats)", price: "74€" },
          { name: "Menu Insulaire (4 séquences)", price: "118€" },
          { name: "Menu Velours (6 séquences)", price: "162€" },
          { name: "Accord Mets & Vins (Insulaire)", price: "55€" },
          { name: "Accord Mets & Vins (Velours)", price: "80€" }
        ]
      },
      {
        category: "Les Entrées",
        items: [
          { name: "Sarcives au miel de forêt, condiment gingembre-citron", price: "28€" },
          { name: "Samoussa de canard aux épices douces", price: "22€" },
          { name: "Tartare de thon à la mangue et piment oiseau", price: "24€" },
          { name: "Bouchon réunionnais traditionnel, porc et combava", price: "15€" }
        ]
      },
      {
        category: "Les Plats (Océan & Terre)",
        items: [
          { name: "Légine de l'Océan Indien, riz safrané, rougail", price: "45€" },
          { name: "Camarons rôtis au curry massalé", price: "42€" },
          { name: "Cochon de lait confit, écrasé de patate douce", price: "38€" },
          { name: "Massalé de agneau de 7 heures, légumes d'antan", price: "40€" },
          { name: "Cari de Poulet fermier de la Réunion", price: "35€" }
        ]
      },
      {
        category: "Les Desserts",
        items: [
          { name: "Gâteau Patate au Faham (Dessert Signature)", price: "18€" },
          { name: "Le Baba au Rhum Arrangé 'Le Faham'", price: "20€" },
          { name: "Mille-Feuille à la vanille Bourbon", price: "16€" },
          { name: "Rhum Arrangé de la Maison Rangama", price: "12€" },
          { name: "Café Bourbon Pointu de la Réunion", price: "8€" }
        ]
      }
    ]
  },
  description: `Le Faham est la table vibrante de la cheffe Kelly Rangama (Top Chef) et du pâtissier Jérôme Devreese. Récompensée d'une étoile Michelin, cette adresse unique signe une 'cuisine métisse' d'exception, fusionnant les saveurs de l'Île de la Réunion avec la haute technicité française. Un voyage sensoriel bercé par les effluves du faham (une orchidée endémique) et marqué par des contrastes audacieux : piment, gingembre et produits nobles s'y tutoient glorieusement.`,
  insider_tip: `• **Signature** : Ne repartez pas sans avoir goûté les sarcives (porc laqué) ou le gâteau patate réinventé par Jérôme.
  • **Cocktail** : Testez les breuvages infusés au Faham, ils racontent l'histoire de la cheffe.
  • **Ambiance** : C'est lumineux, moderne et chaleureux ; une bouffée d'air marin réunionnais en plein Paris.`,
  expert_catchline: "L'éclat d'une cuisine métisse portée au sommet par Kelly Rangama.",
  specials: {
    cuisine: ["Fusion / Réunionnaise Gastronomique"],
    drinks: ["Rhum Arrangé d'Exception", "Cocktails Exotiques"],
    must_eat: "Cuisine fusion. Les sarcives au miel ou la légine de l'Océan Indien.",
  },
  images: {
    hero: "AU_ZVEEozWhFOgKogw0ycu5aPpCunIZl_DqAk5rSmlQIRM0kQMU5cvKJEC30AHbg5tlpba41A3QFFlhoeeP2vlWm7hRiNAF1m9IKomryGeW9mlg_HeNMHAPy0JqIyci4JF9BifCZywk28UEXrgGU2tPUkc24SZF3o4VRb9M8YnIR3Ocxu02NBuxfRLbLUe-09TKIcaHvyKMmP8xY-Dy0mec2Z9_VeAXQ68FeoIUIYiT2SkX03P68V4E_AKH4y4URCIC8PCv4xIZU7BFNUG4OiJjil7KwWzUs1HLM-7C6Dqnqp_E90Q",
    gallery: ["AU_ZVEGQiRNpsKixPMT5J3wS6W_6ajuSXZINC7bYfcCBbComQFUWREoKFqH6XoliRZgwlmFs_sPXYTJGqcNGxvCoBV5vOW4lG4VoecTabKtL2pzrkmA3C31M3dBwdUkmoxIS9KQQvkcF9Kzzt54rpxeiEA822b0Fg2aKgdjXZndUrtx8e2rNPIWXRhcLP8iCCWV-4b6Vx0QnCTQJ5BJ8zckG7yXfdPUtKvFgMb3CAoUuaFPY3MN0qg1kfXK_ng0Fk7PacSMGfgtuamBZsk2jF6c4gwIF86J76XhbEQ1NgajeVqHe-g","AU_ZVEH_NIQhO0uPOWvTnMJn7wP3FWX6leK93GLTlPBJiM2Z8iF6L8o0TOYREw-8cUMByASig4ouQ72NzkvEjqcibfeEpypjLs2_GnWKaLFME7vyIMOVIn7RgmFoL_iscGtaGjptq4AJ2K8-PfWP1ZD8s5tV8ohcWR-7rXq2268MOt1nipk27F_eUon3sRDqOMNELUpAX0JD4iOuIKLGqfrBibPp3JAqisuwkpSY-_kBFmnapW1SxUkuCrjWMCsUOKnih7YLJohQMhyXUMWH9UpST19Yy05NbMgta5SECG4orfXwWBXberjYMvQ6drf6O3Jd3xT4dtMMw_yNW7XCy-eE-LS1B7lOMdPWGMTbnDX1sEzAMovwEQr6JgyQiaUNv9PosUIogE_omLSD6MLPlOQZt5di3fotYaw2tHkIETY7sa-L0ie4"]
  },
  verified: true,
  google_rating: 4.6,
  michelin_stars: 1
};

export default restaurant_le_faham;
