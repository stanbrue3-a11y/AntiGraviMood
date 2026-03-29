import { SurgicalPlace } from "../../../type-definition";

export const monsieur_bleu: SurgicalPlace = {
  id: "poi-monsieur-bleu",
  slug: "monsieur-bleu",
  name: "Monsieur Bleu",
  category: "restaurant",
  subcategory: ["brasserie-chic", "élégant", "palais-de-tokyo", "vue-tour-eiffel"],
  location: {
    address: "Palais De Tokyo, 20 Av. de New York, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8643563,
    lng: 2.2968759,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJNWYQDudv5kcRj-kwX_6y0Sc"
  },
  moods: {
    chill: 50,
    festif: 80,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 02:00 | mardi: 12:00 – 14:30, 19:00 – 02:00 | mercredi: 12:00 – 14:30, 19:00 – 02:00 | jeudi: 12:00 – 14:30, 19:00 – 02:00 | vendredi: 12:00 – 14:30, 19:00 – 02:00 | samedi: 12:00 – 16:00, 19:00 – 03:00 | dimanche: 12:00 – 16:00, 19:00 – 02:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://monsieurbleu-restaurant.com/?utm_source=Yext&utm_medium=GMB&y_source=1_MjU3NjI3ODMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
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
        category_type: "starter",
        display_label: "Les Premières Lueurs (Entrées)",
        items: [
          { name: "Rock Shrimps Tempura", price_cents: 2100, description: "Légère et croustillante, mayo épicée", is_highlight: true },
          { name: "Burrata des Pouilles", price_cents: 2500, description: "Tomates anciennes de plein champ", is_highlight: true },
          { name: "Tarama Maison au Caviar", price_cents: 2800, description: "Pain toasté et herbes fraîches" },
          { name: "Saumon Mariné Gravalax", price_cents: 2400, description: "Aneth, baies de genièvre et crème fraîche" },
          { name: "Escargots de Bourgogne (x6)", price_cents: 1800, description: "Beurre persillé à l'ancienne" },
          { name: "Carpaccio de Bœuf Black Angus", price_cents: 2200, description: "Parmesan, roquette et pignons grillés" },
          { name: "Velouté de Potiron", price_cents: 1700, description: "Éclats de châtaignes et truffe d'été" },
          { name: "Salade de Homard Bleu", price_cents: 3900, description: "Vinaigrette d'agrumes et jeunes légumes" },
          { name: "Artichauts de Bretagne", price_cents: 1900, description: "Vinaigrette aux noisettes et parmesan" }
        ]
      },
      {
        category_type: "main",
        display_label: "L'Étoffe des Grands (Plats)",
        items: [
          { name: "Poulpe Grillé", price_cents: 4000, description: "Purée de pois chiches crémeuse, jus corsé", is_highlight: true },
          { name: "Tagliatelle à la Truffe Noire", price_cents: 4500, description: "Parmesan 24 mois, crème de truffe onctueuse", is_highlight: true },
          { name: "Filet de Bœuf Simmental", price_cents: 4800, description: "Sauce au poivre, frites maison croustillantes" },
          { name: "Ravioles de Langoustines", price_cents: 4200, description: "Bouillon de crustacés et cerfeuil" },
          { name: "Bar de Ligne Grillé", price_cents: 3800, description: "Sauce vierge aux olives et légumes vapeur" },
          { name: "Risotto au Safran & Gambas", price_cents: 3600, description: "Gambas impériales juste saisies" },
          { name: "Cœur de Cabillaud Vapeur", price_cents: 3400, description: "Purée fondante et beurre de yuzu" },
          { name: "Pluma de Pata Negra", price_cents: 4400, description: "Pommes rattes rissolées au lard" },
          { name: "Tartare de Bœuf 'Monsieur Bleu'", price_cents: 3200, description: "Coupé au couteau, condiment secret" },
          { name: "Sole Meunière d'Océan", price_cents: 5500, description: "Pêche du jour, environ 400g" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Final en Apothéose (Desserts)",
        items: [
          { name: "Mille-feuille Vanille", price_cents: 1900, description: "Crème légère et caramel au beurre salé", is_highlight: true },
          { name: "Fondant Chocolat Noir", price_cents: 1600, description: "Cœur coulant 70% et glace vanille" },
          { name: "Pavlova Agrumes", price_cents: 1500, description: "Meringue craquante et sorbet citron" },
          { name: "Brioche Perdue de mon Enfance", price_cents: 1700, description: "Caramel onctueux et chantilly" },
          { name: "Fraises & Crème de Mascarpone", price_cents: 1800, description: "Saison uniquement" },
          { name: "Selection de Fromages Affinés", price_cents: 1800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave Bleue (Vins & Spiritueux)",
        items: [
          { name: "Cocktail Bleu de Paris", price_cents: 2000, description: "Gin premium, violette et touche de citron" },
          { name: "Coupe de Moët & Chandon Reserve", price_cents: 2400 },
          { name: "Verre de Chablis 'Brocard'", price_cents: 1600 },
          { name: "Double Expresso Pavillon", price_cents: 800 },
          { name: "Thé Glacé Maison", price_cents: 950 },
          { name: "Eau Filtrée Plate/Gazeuse", price_cents: 800 }
        ]
      }
    ]
  },
  description: `Installé dans l'aile ouest monumentale du Palais de Tokyo, Monsieur Bleu est l'incarnation du chic parisien. Sous ses plafonds vertigineux et son décor Art Déco revisité par Joseph Dirand, ce restaurant offre un cadre spectaculaire et vibrant. Que ce soit sur sa magnifique terrasse face à la Tour Eiffel ou dans son grand salon feutré, on y savoure une cuisine française cosmopolite et exigeante. Un lieu vibrant, à la fois mondain et décontracté, où l'élégance se mêle à l'énergie créative du quartier d'Iéna.`,
  insider_tip: `Réservez une table près de la baie vitrée pour la lumière magique du soir, ou en terrasse dès les premiers rayons de soleil. Le mille-feuille est une signature indispensable pour conclure le dîner.`,
  specials: {
    cuisine: ["Brasserie Chic", "Français"],
    drinks: ["Cocktails Créations", "Vins Sélectionnés"],
    must_eat: "Cuisine de Brasserie. Poulpe Grillé & Mille-feuille Vanille-Caramel.",
    must_drink: "Cocktail Bleu de Paris"
  },
  images: {
    hero: "AU_ZVEFeextDc-xxdKvnpHxasDLUwGDqEHIltW4uJswhr74QA3uMyWnWczc10G2ae0aOXgGL381c5dTT5f58d7CYPI8mapqD19iTf1g5Adop9D0kVhvLm5yLC3v9Q_Tm9bmopB0BILrzgVobjVKrdfmzc6xxNn9j9gSBPPLxwhvLk9e7LPue-r1kGqj7rxqGyDfx5VpMwSg7CScjzgEsJ7Rhn2t6aTvFi1VL6eKeLoCz9x8EZOd10WZN5rv25ZV2eE2v7KWKA1aZBltdkA3mknQ7MdVuq-ENcX5_7YfmJ6E7Lb6E1w",
    gallery: ["AU_ZVEEg_eB_swmdP88a8nfIsa5sbtqBREdW75IzMYmTft_dTXreDyLXj2FLCMpFlBVvM1EyMF9bdzYV7PbGVzPJOwE5C-PEtjXdwSvgB2aJO6qCLy0iN0sLnrDpWMBYDCxke-9Q5LdSzXI7hs6HIYFa5yI9mVewWRtzYw36i1d1kU7KqKnontFlS5YN3sNfXc_vVHIu8Jp76lEGKKkQv8PqoDfvxDPqk0bnAOUd-zsvlYx9wkUXysekufrbjjkQYSFmBgqhzC6-jQ7NV02ibGwdFAEpPtYD1NYC5jWu8O9D5VnSdw","AU_ZVEHcSUvXIDiCgTQ-61bOJRXgDzHYbeGh8oiKM8eEBH4Q8lJYRkYj_6bBXhizk15Y7XNQy-LuGUhgImanSpE6HwIw4kAWlLUxXWBJKex8lVgZWlqKtuqDIL7s4uf0kEgOfVC3j8EHEq8l4ErRZICGUaWuhUQ81Mw_XhQGp1qx6q0rePjANVDPVdcp_fvd5PHN5htoOp4MEyXExMUifngDoVqWY4W9Jv_e631bYYMFf5UxK97UaKlmJ9Sc2xrwBjRy41bF1fWfpGoZmcVBvBQwZfeSqihDS2AoI3GNZLNCaqMZQw"]
  },
  verified: true,
  google_rating: 4
};

export default monsieur_bleu;
