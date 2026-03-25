import { SurgicalPlace } from "../../../type-definition";

export const la_mascotte_montmartre: SurgicalPlace = {
  id: "poi-la-mascotte-montmartre",
  slug: "la-mascotte-montmartre",
  name: "La Mascotte Montmartre",
  category: "restaurant",
  subcategory: ["fruits de mer", "brasserie", "français", "historique", "écailler"],
  location: {
    address: "52 Rue des Abbesses, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8857022,
    lng: 2.335517,
    nearest_metro: "Abbesses",
    metro_lines: [12],
    google_id: "ChIJVVXp9k9u5kcRRBfM2_21H3s"
  },
  moods: {
    chill: 30,
    festif: 80,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 07:00 – 00:00 | mardi: 07:00 – 00:00 | mercredi: 07:00 – 00:00 | jeudi: 07:00 – 00:00 | vendredi: 07:00 – 00:00 | samedi: 07:00 – 00:00 | dimanche: 07:00 – 00:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://la-mascotte-montmartre.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Entrées & Antipasti",
        items: [
          { name: "Plateau d'huîtres Fines de Claire N°3 (x6)", price: "18.00€" },
          { name: "Oursins de roche (à la pièce)", price: "6.50€" },
          { name: "Tartare de thon aux agrumes", price: "16.00€" },
          { name: "Bulots et mayonnaise maison", price: "12.00€" },
          { name: "Soupe de poisson de roche", price: "15.00€" }
        ]
      },
      {
        category: "Les Plats de Tradition",
        items: [
          { name: "Calamars à la plancha", price: "21.00€" },
          { name: "Sole meunière belle-meunière", price: "42.00€" },
          { name: "Plateau de fruits de mer 'Le Mascotte'", price: "75.00€" },
          { name: "Saint-Jacques snackées, risotto", price: "32.00€" },
          { name: "Andouillette AAAAA, frites maison", price: "24.00€" },
          { name: "Bar entier grillé au fenouil", price: "34.00€" },
          { name: "Choucroute de la mer Mascotte", price: "29.00€" }
        ]
      },
      {
        category: "Les Desserts",
        items: [
          { name: "Ile flottante géante", price: "9.00€" },
          { name: "Tarte tatin, crème crue", price: "10.00€" },
          { name: "Profiteroles au chocolat chaud", price: "11.00€" },
          { name: "Sorbet artisanal (2 boules)", price: "8.00€" },
          { name: "Assiette de fromages affinés", price: "12.00€" }
        ]
      }
    ]
  },
  description: "Véritable institution de la rue des Abbesses depuis 1889, La Mascotte est l'âme du Montmartre historique. Son décor Art Déco immuable, son célèbre banc d'écailler et son effervescence typiquement parisienne en font une adresse incontournable. On y vient pour la fraîcheur absolue des fruits de mer et l'ambiance chaleureuse d'une brasserie qui a traversé les siècles sans perdre de son éclat.",
  insider_tip: "• **Timing Stratégique** : Pour profiter du banc d'écailler au calme, privilégiez le service de midi en semaine dès l'ouverture.\n• **Combo Moelle** : Le plateau de fruits de mer accompagné d'un verre de Muscadet Sèvre-et-Maine est le passage obligé pour les puristes.\n• **Détail Secret** : Demandez une place près du bar pour observer le travail magistral des écaillers, un spectacle rare et fascinant de précision.",
  specials: {
    cuisine: ["Française", "Fruits de mer", "Brasserie"],
    drinks: ["Vins blancs", "Muscadet", "Café"],
    must_eat: "Cuisine française. Plateau de fruits de mer & Sole meunière",
  },
  images: {
    hero: "AU_ZVEEWVT_cgj3HFJEmpFY5bVbST9U1jG31H09qrd4rtvyc7GSDEqzzDTKTKV7tLfZVA9BvwlW43AdvUfRyuzHmzl8YD9V426lf0XJlwIGlanO2U40PEqkJaOXlrPh7CP0V5fDcM9Gh_gzO2d3svNUw7iuixqlnT6vASl_4dIu_m93yE7rzJZId2G1YElXY5YmqhtcE-r45C9rcFdSMuJdP9OSwOWvXAewK4qglmfHSXMvk6gvCK8xlIGl2-YyTWCBygs9l4PP9VTfnNEaqKioyCEp3fJzA7lqQxKU78VqB5fyJ1aT6h8Uldc5Yb0uuY_QLFbrJ4BbzqJw8e8gexQ5-7qtbMR2p_anHwaHrRLHBYPTXs37YrDJQHYVgZ7P1lUX6zq7zTC-chuU6D9lLCR7Ko8CHeF-tA5IKc5fG5rXMS3fJyds",
    gallery: ["AU_ZVEHuI94eAX6ASr6CcUeB2_rAI_sgnvOI8r4ArvTGT0iGYV2RHG9Il5GL_j-5K293DdjOk227lvnkncDI3MFLNg__WMuPX9oAULEbxcE3qylhGF1jAnM047qveJgETxzWtAEEk75qV5kprXYcH8s5WdFEeVjc18HToO64St-WUmh-yGbUixZ3pYrlGG6ZP8g7M4hdJ3X50-NrzN4jTfAR0w-yKn-Y4BjYzS9CyYfq_njVIfNSzXFeVkbAOKmSzT5xQJcNCSknak82Z9kAiUcqJPgksShSTC_sBo-Z-86phua9yg", "AU_ZVEGpAHx6PiAiOUqfvy4phO7RlQJVWDBKedNqAuafqrqoZN6d4PZRakCwXXCRqHlpn6bkTgIoYLV9oa6M-ONozH7QwRCg0AyIH3GfCNUpr70KetdTPB85XtZnGs6MAhTq4e7X7LFA5-o5bu6B8TmZfGAq0nVWXrkwkZZQCYwsF9kP_g8xq0Pc1cl_Eh6ktK0fsNkxZI3q_fAxI5Jj5NN4FCI7PR9Xy5QXTQd9xuY4nAyTrbYOBlFq1Fvd5QjIFIfnwbJpV9Qs9CXaI0YrcHzW7wSDcQZJdbM8_zAdAcehHXK5FQ"]
  },
  verified: true,
  google_rating: 4.3
};

export default la_mascotte_montmartre;
