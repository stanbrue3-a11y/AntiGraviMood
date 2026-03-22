import { SurgicalPlace } from "../../../type-definition";

export const le_petit_bouillon_vavin: SurgicalPlace = {
  id: "poi-le-petit-bouillon-vavin",
  slug: "le-petit-bouillon-vavin",
  name: "Le Petit Bouillon Vavin",
  category: "restaurant",
  subcategory: ["français", "bouillon", "traditionnel", "vibrant", "art-deco"],
  location: {
    address: "119 Bd du Montparnasse, 75006 Paris, France",
    arrondissement: 6,
    lat: 48.84193699999999,
    lng: 2.3305309,
    nearest_metro: "Vavin",
    metro_lines: [4],
    google_id: "ChIJV_hp2l9x5kcRzNhaXizdWao"
  },
  moods: {
    chill: 15,
    festif: 85,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 00:00 | mardi: 12:00 – 00:00 | mercredi: 12:00 – 00:00 | jeudi: 12:00 – 00:00 | vendredi: 12:00 – 00:00 | samedi: 12:00 – 00:00 | dimanche: 12:00 – 00:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://petitbouillonvavin.fr/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 18,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Les Entrées du Bouillon",
        items: [
          { name: "Œuf mayonnaise", price: "2.30€", description: "Le champion du monde" },
          { name: "Os à moelle grillé, fleur de sel", price: "4.60€", description: "Servi avec ses toasts" },
          { name: "Hareng et son écrasé de pommes de terre", price: "4.80€" },
          { name: "Belle terrine de foie de volaille maison", price: "4.60€" },
          { name: "Gratinée à l'oignon", price: "3.90€", description: "Classique parisien" },
          { name: "Salade de gésiers de volaille confits", price: "3.90€" }
        ]
      },
      {
        category: "Les Plats de Résistance",
        items: [
          { name: "Bœuf bourguignon aux pommes vapeur", price: "14.90€", description: "Mijoté avec amour" },
          { name: "Saucisse au couteau Purée", price: "9.20€", description: "Jus de viande lié" },
          { name: "Lieu noir en papillote, légumes basquaise", price: "13.50€" },
          { name: "Côte de cochon à l'estragon", price: "12.80€" },
          { name: "Tartare de bœuf haché minute", price: "11.20€", description: "Frites fraîches" },
          { name: "Poulet Label Rouge Rôti", price: "10.80€" }
        ]
      },
      {
        category: "La Cave & Boissons",
        items: [
          { name: "Kir", price: "2.80€", description: "Cassis, Mûre ou Pêche" },
          { name: "Beaujolais Rouge (Bouteille)", price: "35.00€" },
          { name: "Café", price: "1.80€" },
          { name: "Bière Pression 25cl", price: "3.50€" }
        ]
      },
      {
        category: "Les Desserts",
        items: [
          { name: "Profiteroles au chocolat maison", price: "5.80€" },
          { name: "Île flottante", price: "4.80€" },
          { name: "Baba au rhum", price: "5.40€" },
          { name: "Tarte Tatin", price: "5.50€", description: "Crème d'Isigny" }
        ]
      }
    ]
  },
  description: "Le Petit Bouillon Vavin est une enclave d'effervescence joyeuse au cœur du Montparnasse historique. Sous son haut plafond Art Déco, on revit l'âge d'or des brasseries populaires parisiennes : service en tablier blanc, nappes en papier et une cuisine française authentique servie à une vitesse record. C'est bruyant, c'est vivant, c'est Paris.",
  insider_tip: "• Comme tout bon bouillon, l'endroit ne prend pas de réservations : vise les créneaux 'tôt' (12h/19h) pour éviter la queue sur le boulevard.\n• Ne rate surtout pas l'os à moelle, c'est l'un des meilleurs rapports qualité-prix du quartier.\n• Le service est si rapide que tu peux finir tes trois plats en moins de 45 minutes si tu es pressé.",
  specials: {
    cuisine: ["Française", "Bouillon", "Traditionnelle"],
    drinks: ["Vin de table", "Kir", "Café"],
    must_eat: "Bœuf Bourguignon & Œuf Mayo",
  },
  images: {
    hero: "AU_ZVEHWQ-1KSeGl4RTzEROvX0vyo_vHiBNiY7tWq5i9Zr9yWVTORp5e5MFrIbPuQm2_zF1EsiLA4pwqq-chvononqKPq4W-7rbkg3bJCLLrVlNiPB4Zruscn5tscERrx8l-kTbuUisXAvphcTbBHE6TNBOT5ko5ymLjhjGdY4FSXWsCG7FzXpspLuXVl7h50NFpK0MwptqDCRHrCRLgwBouWEgk60zyeQ0GU1J-bY1cdZlaNhdjeb0yopsVTWai27pDuHnc4Z05GCWTRhVZYGmVyLwiPLoO8hKeE8zSIceUhMM",
    gallery: ["AU_ZVEGwAm1v0oFxV0pFA3uZJTGvsMqxdqnLubPqun3XS4y0yUpC8tkJ6Mwds6tu2uevVLXPwYISsfvi94pALeRHtLtxogtuV4JVruGGEiBUH4Ludh2lCGswamXagf_kzMkqR688eEe16Pse3uJ3JaU750LuH0zt_v6UXNlPBnmpoFxghR6c6JjixNejeth5CqceOO_RxBh9hi_c7346nx01ocUWM9-vdnsS70Pn5ezOCgQjQmgpfGe7kiMDwpj2pe6lqZW1oAC7dfbowx-P56tBAI4VFRhkDGSWVYCH9k4nnntwOV5FJHuGromQS-riDqD9jD4TSG40sgU6jR8H6Cirvs4iiKAVJXcFmRZPF_RweVh78qGz3upQMU1tbsphMkgnabUSwat8QsA7KOu-e-0wucOBbpTZw9xsjR8hUUiC05jqvO4TXhlsFUXOYcdfnIT1","AU_ZVEE2e6Jt_EHpSNhlmOzvz6V9aedpckuKhen57Ux8ZGnSc2JEz7VffM2dzwoozsR_dkVi9-aTCFvMKcpCAQZNxFx21N6xWntkcX7cZ_fTc8uM7A50UiMpHGX71UQaASm9ORsLSjQ-_z3dnve_QqCL40KhcHO6WH0OgSIQI_dXDHch4O0oWX86c3IrG7K5N4p7W6_lV186qzb-iJtRK6KePvcb0IsO4Mo0ztXvVDnDNimRuWQyOb41OJoG_KlPR34e_J-UUsYuQA6uwArPR5CImb6T9cRCIShDsdqYEwTxX8c"]
  },
  verified: true,
  google_rating: 4.0
};

export default le_petit_bouillon_vavin;
