import { SurgicalPlace } from "../../../type-definition";

export const girafe: SurgicalPlace = {
  id: "poi-girafe",
  slug: "girafe",
  name: "Girafe",
  category: "restaurant",
  subcategory: ["seafood", "élégant", "vue-tour-eiffel", "trocadero"],
  location: {
    address: "1 Pl. du Trocadéro et du 11 Novembre, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.8630338,
    lng: 2.2885823,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJw7pLvsNv5kcRnYS9wwGfwsI"
  },
  moods: {
    chill: 20,
    festif: 85,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 18:00 – 02:00 | mardi: 12:00 – 14:30, 18:00 – 02:00 | mercredi: 12:00 – 14:30, 18:00 – 02:00 | jeudi: 12:00 – 14:30, 18:00 – 02:00 | vendredi: 12:00 – 14:30, 18:00 – 02:00 | samedi: 12:00 – 14:30, 19:00 – 03:00 | dimanche: 12:00 – 14:30, 19:00 – 02:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://girafe-restaurant.com/?utm_source=Yext&utm_medium=GMB&y_source=1_MjU3NjI3ODUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "other",
        display_label: "Le Banc de l'Écailler",
        items: [
          { name: "Huîtres Gillardeau N°3 (x6)", price_cents: 3600, description: "La chair ferme et noisettée" },
          { name: "Crevettes Obsiblue (x4)", price_cents: 3200, description: "Rares, juste saisies au citron vert", is_highlight: true },
          { name: "Bulots de Granville", price_cents: 1400, description: "Cuisson minute, aïoli maison" },
          { name: "Oursins d'Islande", price_cents: 2400, description: "Selon arrivage, iodés et crémeux" },
          { name: "Plateau Girafe (2 pers)", price_cents: 11000, description: "Assortiment complet de l'écailler" },
          { name: "Langoustines Royales", price_cents: 4500, description: "4 pièces magnifiques" }
        ]
      },
      {
        category_type: "starter",
        display_label: "Premières Brises (Entrées)",
        items: [
          { name: "Carpaccio de Saint-Jacques", price_cents: 2800, description: "Huile de vanille et agrumes", is_highlight: true },
          { name: "Tarama de la Maison", price_cents: 1400, description: "Blinis au sarrasin servis chauds" },
          { name: "Tataki de Thon", price_cents: 2600, description: "Sésame torréfié et ponzu" },
          { name: "Salade de Homard Bleu", price_cents: 3800, description: "Pamplemousse rose et avocat" },
          { name: "Tempura de Crevettes", price_cents: 2200, description: "Sauce spicy mayo maison" },
          { name: "Foie Gras de Canard", price_cents: 2400, description: "Chutney de figues et brioche toastée" },
          { name: "Burrata des Pouilles", price_cents: 2100, description: "Tomates anciennes et basilic sacré" }
        ]
      },
      {
        category_type: "main",
        display_label: "Le Grand Large (Plats)",
        items: [
          { name: "Linguine au Homard", price_cents: 4800, description: "Demi-homard, bisque corsée et herbes", is_highlight: true },
          { name: "Sole de Petit Bateau", price_cents: 5500, description: "400-500g, grillée ou meunière" },
          { name: "Turbot Rôti à l'Arrête", price_cents: 5200, description: "Beurre noisette et câpres géantes" },
          { name: "Pavé de Bar Plancha", price_cents: 4200, description: "Émulsion de citronnelle et gingembre" },
          { name: "Friture Rouge Girafe", price_cents: 3600, description: "Rougets, calamars et gambas frits" },
          { name: "Thon Rossini Océanique", price_cents: 4600, description: "Thon rouge et escalope de foie gras poêlée" },
          { name: "Saint-Jacques à la Plancha", price_cents: 3900, description: "Risotto crémeux aux herbes" },
          { name: "Poulpe Grillé Cruel", price_cents: 3400, description: "Condiment olives noires et tomates fumées" }
        ]
      },
      {
        category_type: "other",
        display_label: "Terre & Végétal",
        items: [
          { name: "Filet de Bœuf Simmental", price_cents: 4500, description: "Jus corsé, purée de pommes de terre à la truffe" },
          { name: "Risotto aux Champignons", price_cents: 2800, description: "Cèpes et éclats de noisettes" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Final en Douceur",
        items: [
          { name: "Éclair XXL Chocolat", price_cents: 1800, description: "La signature sucrée emblématique", is_highlight: true },
          { name: "Mille-feuille Vanille", price_cents: 1600, description: "Feuilletage inversé croustillant" },
          { name: "Pavlova Fruits Rouges", price_cents: 1500, description: "Légèreté absolue" },
          { name: "Ananas Rôti Passion", price_cents: 1400 },
          { name: "Sélection de Glaces", price_cents: 1200 }
        ]
      },
      {
        category_type: "other",
        display_label: "Bar de Prestige",
        items: [
          { name: "Cocktail Lady Girafe", price_cents: 2200, description: "Gin premium, fraise, basilic frais" },
          { name: "Coupe Ruinart Blanc de Blancs", price_cents: 2800 },
          { name: "Expresso", price_cents: 700 },
          { name: "Thé Vert Mariage Frères", price_cents: 1000 }
        ]
      }
    ]
  },
  description: `Girafe est le joyau iodé du 16ème arrondissement, niché au cœur de la Cité de l'Architecture et du Patrimoine. Son décor années 30, signé Joseph Dirand, offre un écrin luxueux à une cuisine marine d'exception. Mais le véritable spectacle se joue sur la terrasse : un balcon suspendu offrant le face-à-face le plus spectaculaire de Paris avec la Tour Eiffel. Une expérience hors du temps où l'élégance parisienne rencontre la fraîcheur absolue du grand large.`,
  insider_tip: `Réservez impérativement en 'terrasse' pour la vue. Le soir, attendez le début de chaque heure pour voir la Tour Eiffel scintiller pendant que vous dégustez vos linguines au homard.`,
  specials: {
    cuisine: ["Seafood", "Élégant"],
    drinks: ["Champagnes de Prestige", "Grands Crus de Loire"],
    must_eat: "Cuisine Marine. Linguine au Homard & Éclair XXL au Chocolat.",
    must_drink: "Ruinart Blanc de Blancs"
  },
  images: {
    hero: "AU_ZVEGdsriscYKgC1TR8YdDmS36oMIMRxDoq7_Xn5KZO9K3HnjYu14YMeHbpi9yMZnAs_ambRQpSjF9FGm_yDoCoUpUpqp2YpkmRoy8b0iBoMnJvog1EXDgXmHPpX0kU9-X9tA6nKjAFyg03ZtdEsaveK2N-lA7lnSGYNq5ubIEcI33WTkfWuxJ005qJ_T4DpMX_Sb-Dw0y7YUQZcxN48R0dl8L5f812VMSAuCS7QuHvm20YMh-D5vZThulbPoBar6SN1OxgkzDQn9LIflL2neQ0RGJX3lXOcY1qV8pHFGfJeJHlQ",
    gallery: ["AU_ZVEEy5YXM8LZrhoN_1UpK57rSLv4AYYkVwmfSyAZ1qjwmqKlUmKMQWC-qKQWtJ1QlPXPBtBPqpx5sl3xapXJMM79qcIBWIUP-tCkxpGg_rtmmWPuHhrtEQyj18wSHdfVNrm2VeX3X8gVmL3XUCTz4Bd0SIN5jmUY8ddd3To1b8EfXJgPgFx2A3BscKbNQlBiNtNAGsXkvV4YHyec3Dqs9XGHAFWkdBxY8tE74DqQCpEx2i-5K2O27sbJhWgWC5HovUEgG6bylhAO_krbvCz8qxqjCTncYJoFmrR6fV29QPVeHXw","AU_ZVEEk9dGXnCmmukzy5lhd3tZE46auy4WC003GEINaR7hsACI0qyd8XTsXD_tme50H43M6acEouOVRlNWIwCthq5q3WcEsCtXZv6VvaZov0wy3IHtaNWbo8_8kVkWHftxqCJC8zoxkWHGX11g9vEZBfbMN63txp-iMfHaIF-wH8D8Ld9PkI3Nn6vR3h6N3_DMB6aaIaOU73JN78iZXSeguBb5n19-QnuASYYyw3uk3ggchcprJSCJDo7WT83U7ERemekLzrG_4_FKWsaXiJ6O8AyyL3sPyI286JIUfj_uvCCOrY475CoEf3iUxtM3KjqYafrYa8m5NrVZv3eKLTJSM8x6JhuqAP7bo4k5hYnVwRP39h0maRhnCSJuaFXE04K2ZPyyE_KjwGtL7Uld601HTKEprGofhFFpQPuoAvCsb9SVr9A"]
  },
  verified: true,
  google_rating: 3.9
};

export default girafe;
