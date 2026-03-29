import { SurgicalPlace } from "../../../type-definition";

export const andia: SurgicalPlace = {
  id: "poi-andia-16",
  name: "ANDIA",
  slug: "andia",
  category: "restaurant",
  subcategory: ["latino", "festif", "terrasse", "muette"],
  location: {
    address: "19 Chau. de la Muette, 75016 Paris",
    arrondissement: 16,
    lat: 48.8581596,
    lng: 2.2722369,
    nearest_metro: "La Muette",
    metro_lines: [9],
    google_id: "ChIJ6RIysFRl5kcRgTQU1vLwwWg"
  },
  moods: {
    chill: 30,
    festif: 95,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "Lun-Mer: 12h-14h30, 19h-01h | Jeu-Ven: 12h-14h30, 19h-02h | Sam: 12h-15h, 19h-03h | Dim: 12h-15h, 19h-01h",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://andia-paris.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 75,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "sharing",
        display_label: "Para Picar (À Partager)",
        items: [
          { name: "Guacamole Andia", price_cents: 1400, description: "Avocat mûr, oignon rouge, coriandre et chips de maïs", is_highlight: true },
          { name: "Tequeños au Fromage", price_cents: 1500, description: "Bâtonnets de fromage frits, sauce aji verde" },
          { name: "Empanadas de Pollo", price_cents: 1600, description: "Chausson frit au poulet effiloché et épices" },
          { name: "Beef Tacos (x3)", price_cents: 1900, description: "Bœuf confit, oignon rouge, coriandre" },
          { name: "Tacos de Crevettes", price_cents: 1800, description: "Crevettes marinées, chou rouge et mayo pimentée" },
          { name: "Calamars Fritos", price_cents: 1700, description: "Beignets de calamars, sauce tartare andine" },
          { name: "Tostadas de Thon", price_cents: 1600, description: "Tortilla craquante, tartare de thon et sésame" }
        ]
      },
      {
        category_type: "other",
        display_label: "Raw Bar & Ceviches",
        items: [
          { name: "Ceviche Classico", price_cents: 2400, description: "Bar sauvage, lait de tigre, patate douce, choclo", is_highlight: true },
          { name: "Ceviche Thon & Truffe", price_cents: 2800, description: "Thon rouge, huile de truffe, soja et citron vert" },
          { name: "Tiradito Saint-Jacques", price_cents: 2600, description: "Tranches fines, fruit de la passion, piment doux" },
          { name: "Ceviche Veggie", price_cents: 1900, description: "Cœur de palmier, avocat, mangue et lait de tigre coco" },
          { name: "Salmon Poke Andia", price_cents: 2200, description: "Saumon mariné, riz noir, edamames, algues" },
          { name: "Carpaccio de Poulpe", price_cents: 2100, description: "Olives noires, citron confit et huile d'olive" }
        ]
      },
      {
        category_type: "other",
        display_label: "Asador (Grillades)",
        items: [
          { name: "Poulpe Grillé Chimichurri", price_cents: 3600, description: "Cuit au charbon, écrasé de pommes de terre", is_highlight: true },
          { name: "Anticucho de Poulet", price_cents: 2200, description: "Brochettes marinées à l'aji panca" },
          { name: "Entrecôte Black Angus (300g)", price_cents: 4200, description: "Origine Argentine, sauce salsa roja" },
          { name: "Thon Rouge Grillé", price_cents: 3800, description: "Saisi à la plancha, légumes de saison au wok" },
          { name: "Lomo Saltado", price_cents: 3400, description: "Filet de bœuf sauté, oignons, tomates et frites" },
          { name: "Burger Andia", price_cents: 2800, description: "Pain brioché, bœuf 180g, cheddar, aji verde" },
          { name: "Côtelettes d'Agneau", price_cents: 3900, description: "Marinade aux herbes des Andes" }
        ]
      },
      {
        category_type: "other",
        display_label: "Acompanantes (Sides)",
        items: [
          { name: "Riz à la Mexicaine", price_cents: 800 },
          { name: "Haricots Noirs", price_cents: 700 },
          { name: "Frites Maison", price_cents: 700 },
          { name: "Légumes Grillés", price_cents: 900 },
          { name: "Maïs Grillé au Beurre", price_cents: 800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Postres (Douceurs)",
        items: [
          { name: "Churros Classicos", price_cents: 1200, description: "Sauce chocolat chaud et dulce de leche", is_highlight: true },
          { name: "Pavlova Tropicale", price_cents: 1400, description: "Meringue, mangue, passion et coco" },
          { name: "Gâteau Très Lait", price_cents: 1100, description: "Le classique Tres Leches mexicain" },
          { name: "Sorbet Exotique Maison", price_cents: 900 }
        ]
      },
      {
        category_type: "other",
        display_label: "Spiritueux & Co",
        items: [
          { name: "Pisco Sour Classique", price_cents: 1600, description: "Pisco, citron vert, sucre et blanc d'œuf" },
          { name: "Andia Margarita", price_cents: 1700, description: "Tequila Blanco, agave, citron vert et sel tajin" },
          { name: "Expresso", price_cents: 400 },
          { name: "Thé Vert à la Menthe", price_cents: 700 }
        ]
      }
    ]
  },
  description: "Installé dans le cadre grandiose de l'ancienne gare de la Muette, ANDIA est un sanctuaire festif dédié à la cuisine latino-américaine. Sous une immense verrière végétale, le lieu vibre aux rythmes tribaux et propose un voyage sensoriel du Pérou au Mexique. Entre ceviches percutants, viandes grillées au charbon de bois et cocktails exotiques, c'est l'adresse incontournable pour un dîner vibrant qui s'étire jusqu'au bout de la nuit.",
  expert_catchline: "L'aventure fusion latino dans une gare historique métamorphosée.",
  insider_tip: "Réservez une table sous la verrière pour l'effet 'WOW' garanti. En fin de semaine, le lieu se transforme en club chic dès 22h30.",
  specials: {
    cuisine: ["Andine", "Latino-Fusion"],
    drinks: ["Pisco Sour", "Margarita Tajin"],
    must_eat: "Cuisine Andine. Ceviche Classico & Poulpe Grillé au Chimichurri.",
    must_drink: "Pisco Sour Maison"
  },
  images: {
    hero: "AU_ZVEGOoWa9N23PWmfDt3OLJyEvtJlhT0KFqg2weGFlZpyR__MkHTB11I1Wc1fz_-WBfAGGkFUeTKncwK0soJL71xdaIW2TmHvhVkiiqNpzxp-ZIQMd1BcCDiVn5WfTE1B9FmWIqJhiDac3PFlQfqhWj6Q-y4lXtqwCRJX2wrDZzmpuljdi7c_C_GTjzGtiURhHbYw2kkqSU2TLMP1JlCsCQ-5SMPUQ76JdcDORZaoys5zt1hxaKxbdo-H1nUvDZz2RjusBXcCaBWAq6NU2Dy606_8iyq5nuIMiahXtOOtn-vcaahDyDwziyge6ftubkPX4FP9eY4_5caSL6uhCAIxDMNhgND9PpstyMRhYKsIz6wHKMChBVZkJni5Ps9V7p9Xl3wO2n04AbF-kuvtVG7JdbstsE2HCRgc1wNqLpVcpWnEJaco",
    gallery: [
      "AU_ZVEE4xg1sgYCfjt1B3iH3pApnYC5QzgNecFuCvUlmY7p0mgkjs_9F9BzmLBieK8Q4FbF7T605XHrE47D72SkVkeQhJUDsceee8gFQSsT1hqMNnAHVn2w13JvsD_ThCPUFXmT69AT1phWRgLARkU-2_Du6xCj_qxANUPES7k-a6mG7nRNI21MiYrXkzH-HNFW5MUHUlM5TyzrOR0bfHpRpmhUb8V-20_fySeO8J4DcIxxrYt3sJC-FnXUSZLcbqRSPzDCtmIn4gz98ywsxn5KT7Onzp5a2NbvV8FECuUckFUjEo6TJ9-ltH96W9wtOSBExw61RzFaFjF5FUBcVnMKg9xok2JacynLPfDoyX9ZA1mwvMeNojsDN6UMKnJvwuRk3Sfdk6RjZefo2D2eQguX94IyHrjFQa-YipnpA_C3zSsmB0RAuthm7uLELi3ULEI2l",
      "AU_ZVEEJkTEk4Xm4W6EnzGTTNg4noEjASwfJMb37vS1kLneFQLLIBcpkyHG0bGe5JqJD6Ws3IIXunxcK1VNZoqstsBpV9749Tjp7BkY7VJJul-2dEKWI6ZZRprjaEa8GfDno7Ru1jy3aa8l2TFaFg4waYGbEqleNJGpPLdjgNfp0VqY6h6AQI6wNf-PMo9AcThrfdzqdpG4MJxfzI1wxu6esHrEREUcMRDVTptknT0dqRRe0Nm5sRBSI7nbohNq1MPqJX5nkmHwHY5d7K9DHPJLbbHpRBMoDmezE6jSePsjb6p3KbA"
    ]
  },
  verified: true,
  google_rating: 4.3,
  instagram_handle: "andia_paris",
  real_talk: {
    text: "Une jungle chic nichée dans une gare désaffectée. C'est bruyant, c'est beau, et l'assiette tient la route avec des saveurs latines bien exécutées.",
    must_eat: "Cuisine Andine. Ceviche Classico.",
    le_secret: "La terrasse jardin en été est un véritable havre de paix tropical.",
    le_son: "Reggaeton chic, Afro-house et percussions en live.",
    le_must: "L'arrivée spectaculaire sous la coupole en début de soirée."
  }
};

export default andia;
