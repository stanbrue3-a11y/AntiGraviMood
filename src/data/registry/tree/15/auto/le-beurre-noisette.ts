import { SurgicalPlace } from "../../../type-definition";

export const le_beurre_noisette: SurgicalPlace = {
  id: "poi-le-beurre-noisette",
  slug: "le-beurre-noisette",
  name: "Le Beurre Noisette",
  category: "restaurant",
  subcategory: ["bistrot", "bistronomie", "traditionnel", "terroir"],
  location: {
    address: "68 Rue Vasco de Gama, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.835621,
    lng: 2.2847406,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ35ar7nJw5kcRR2-Jh-Zj4Bs"
  },
  moods: {
    chill: 70,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 13:45, 19:00 – 21:45 | mercredi: 12:00 – 13:45, 19:00 – 21:45 | jeudi: 12:00 – 13:45, 19:00 – 21:45 | vendredi: 12:00 – 13:45, 19:00 – 21:45 | samedi: 19:00 – 21:45 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.restaurantbeurrenoisette.com/",
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
        category: "Préludes du Marché (Entrées)",
        items: [
          { name: "Velouté de Haricots Tarbais & Foie Gras", price: "16.00€", highlight: true },
          { name: "Crème de Fenouil glacée & Pomme verte", price: "15.00€" },
          { name: "Pâté en Croûte de Sarrasin au Canard", price: "18.00€", highlight: true },
          { name: "Salade de Haricots Verts & Homard Bleu", price: "19.50€", highlight: true },
          { name: "Œuf Parfait, Crème de Cèpes & Mouillettes", price: "15.50€" },
          { name: "Terrine de Foie de Volaille faite Maison", price: "12.00€" },
          { name: "Tartare de Bar, Mangue & Coriandre", price: "17.00€" },
          { name: "Escargots de Bourgogne au Beurre Persillé", price: "14.50€" }
        ]
      },
      {
        category: "Haute Bistronomie (Plats)",
        items: [
          { name: "Poitrine de Canette rôtie, Jus corsé", price: "28.00€", highlight: true },
          { name: "Dos de Cabillaud demi-sel au Chorizo", price: "26.00€", highlight: true },
          { name: "Brandade de Haddock au Chou Vert", price: "24.00€" },
          { name: "Noix de Ris de Veau rissolées au sauteur", price: "35.00€", highlight: true },
          { name: "Gnocchi au Vert, Ail des Ours & Parmesan", price: "25.00€" },
          { name: "Épaule d'Agneau de 7 heures (Confite)", price: "29.00€", highlight: true },
          { name: "Filet de Bœuf au Poivre Noir & Cognac", price: "32.00€" },
          { name: "Risotto de Petit Épeautre aux Légumes", price: "22.50€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre à l'Huile de Noisette", price: "7.00€", highlight: true },
          { name: "Légumes du Moment rôtis au Four", price: "7.50€" },
          { name: "Gratin Dauphinois Traditionnel", price: "8.00€", highlight: true },
          { name: "Salade de Jeunes Pousses & Vinaigrette", price: "6.00€" },
          { name: "Frites Maison coupées au couteau", price: "6.50€" }
        ]
      },
      {
        category: "Desserts de Tradition (Desserts)",
        items: [
          { name: "Riz au Lait & Caramel Beurre Salé", price: "11.00€", highlight: true },
          { name: "Baba au Rhum Ambré, Crème Vanille", price: "13.00€", highlight: true },
          { name: "Sablé Breton, Fraises & Rhubarbe", price: "12.50€" },
          { name: "Cappuccino Chocolat Caraïbes (70%)", price: "12.00€", highlight: true },
          { name: "Roulé Meringué au Citron Jaune", price: "11.50€" },
          { name: "Nage d'Ananas frais aux Épices", price: "10.00€" },
          { name: "Plateau de Fromages affinés (Sélection)", price: "14.50€" }
        ]
      },
      {
        category: "La Cave de Thierry (Boissons)",
        items: [
          { name: "Verre de Chardonnay Sélection Pierre", price: "8.50€", highlight: true },
          { name: "Verre de Pic-Saint-Loup 'L'Ermitage'", price: "9.50€" },
          { name: "Bouteille de Sancerre (Domaine Vacheron)", price: "52.00€" },
          { name: "Bière Artisanale du 15ème (33cl)", price: "7.50€" },
          { name: "Jus de fruits Alain Milliat (25cl)", price: "7.00€" },
          { name: "Eau micro-filtrée Le Beurre Noisette", price: "4.50€", highlight: true },
          { name: "Café Espresso Terre de Café", price: "3.50€" }
        ]
      }
    ]
  },
  description: "Le Beurre Noisette est l'archétype du grand bistrot parisien où la technique gastronomique se met au service de la convivialité. Le chef Thierry Blanqui, passé par les plus grandes cuisines (Ledoyen, Tour d'Argent), propose une cuisine de marché créative et généreuse. L'endroit est chaleureux, boisé, et respire la passion du terroir. C'est l'adresse de référence dans le 15ème pour un repas d'une qualité exceptionnelle à prix de bistrot.",
  insider_tip: "• **Le Riz au Lait** : Il est légendaire. Servi avec un caramel au beurre salé addictif, c'est l'un des meilleurs de Paris.\n• **La Formule** : Le menu dégustation en 6 services (68€) est une démonstration de force culinaire à réserver pour les grandes occasions.\n• **La Purée** : Ne manquez pas l'option purée à l'huile de noisette, un clin d'œil au nom du restaurant et un pur délice.",
  specials: {
    cuisine: ["Bistronomie de haut vol", "Riz au Lait culte", "Produits de saison"],
    drinks: ["Vins de vignerons indépendants", "Bières locales", "Spiritueux artisanaux"],
    must_eat: "Le Pâté en Croûte de sarrasin au canard : un équilibre parfait entre croquant et fondant.",
  },
  images: {
    hero: "AU_ZVEGHPn4seV0r35YKa3J1Lv74Ut32Zg5cp_-vJC_zCpaQkjC5FhWjgJJysBpAT2r58JztR2jrnN0j5H68Y_tLt0EYq5vAHDItbDp8CpqHqPCuOQwEQpPM5nCQcMk865vAUYHv8M1Q4WccnA1uyYeoYVogBzkUXnGmZ46xY747uuYwV62pM4uqbQHMVyj3YAQxDHkSmOIEQPRRC-ZYqwaYewze1VSS3mDYJRhl4-3MU3nVKoNkKke9vKPCMFHYkWZ3H_Q-mPyV3bFK9haTb16SHoG0x3NaMF0aDYTIfTPMV8PH5w",
    gallery: ["AU_ZVEHfXWJM_Wh2ALHC646IEqFZPs9oXcA8bw0rxajhcGDtUvT2zcFXdzvuh6mrxUk9iaGqN6hHL9Z7M-xHyTpuEBbjmYHyGRjPyj9yBNOWytgQTjdFzzw5JjSdn_d5FaAI04xtmJ59aWTIQuA8S78p4Hy468AnwiARC_7kXueELLVloK0CaYdv0gZ_k7QAWMunms0I7UJPUKuysNIB-MwipWiGkuBCJyKIRiEveh7v-b4-t78mgyFU_OialK7pRbZYS9D3MehOEAt_h5VjJvc0aFWk-13qZ5GrY3KCx1ZevV0qCA","AU_ZVEEkFsrJ2GUS9_UdOQHOgcTnNfzZ4ioLzxJqk68P_ItI8FTgzVsH2KsjNFYUNN04h_1VYxm2BE8Qi6S16VE4PmpswV8nKbiiQ7PunXY1a1HeZVriwIRTqXROVKxcIVM1h6jXryyPrQocvx2nwRv_DyRvpsnJV1Xqc0Cj541bssrBwZLRrsl08nT3EkNI3vxsJRT7bF9cQ4NlTBhAnPj6XP8x_2rw1Ful0nApn2vOG4Uhopka0J4DN7VVbz9mtzij-6dJqGm3HM2-LVSRtuWfXTjo0TCtWR5tji3ENvsD3zu8lZgHGZ-4pTQKl2pGkVXcIflEFwYjj9qQe5fkDWjzrW0tYUVcM2UGxDD7VddJkpZx9TAuqkBPAaRn4l0amBmZKyaFrH2EhhOQlitA2HYF_d6IH1YoemFeHhl3ftw9j5TJUGXp_yOrxMawxFmw5vUE"]
  },
  verified: false,
  google_rating: 4.6
};

export default le_beurre_noisette;
