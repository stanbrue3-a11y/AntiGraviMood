import { SurgicalPlace } from "../../../type-definition";

export const l_alimentari: SurgicalPlace = {
  id: "poi-l-alimentari",
  slug: "l-alimentari",
  name: "L’Alimentari",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "6 Rue des Cinq Diamants, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.828854,
    lng: 2.351658,
    nearest_metro: "Corvisart",
    metro_lines: ["6"],
    google_id: "ChIJBwhQhgJu5kcRM31qxeTimtY"
  },
  moods: {
    chill: 85,
    festif: 50,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:30–23:00 | dimanche: 12:00–15:00 | lundi: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/LAlimentari-290417151054338/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 22,
    dish_price: 15.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "other",
        display_label: "Antipasti : L’Art du Partage",
        items: [
          { name: "Burrata crémeuse & Tomates confites", price_cents: 1450, is_highlight: true },
          { name: "Assiette d’Antipasti de saison (Légumes grillés)", price_cents: 1700 },
          { name: "Planche de Charcuteries fines (Parme, Speck)", price_cents: 1850 },
          { name: "Focaccia maison au Romarin", price_cents: 600 },
          { name: "Bresaola, roquette et copeaux de Grana", price_cents: 1500 },
          { name: "Bruschetta à la Tomate et Basilic", price_cents: 950 }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizzas Rouges (Plats - Base Tomate)",
        items: [
          { name: "Margherita (Mozza, Basilic)", price_cents: 1200, is_highlight: true },
          { name: "Regina (Jambon, Champignons)", price_cents: 1650 },
          { name: "Spianata (Pimentée, Oignons rouges)", price_cents: 1600 },
          { name: "Napolitaine (Anchois, Câpres, Olives)", price_cents: 1600 },
          { name: "Quatre Fromages Italienne", price_cents: 1550 },
          { name: "Calzone Classique", price_cents: 1700 },
          { name: "Vegetariana du Marché", price_cents: 1550 }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizzas Blanches & Gourmet (Plats)",
        items: [
          { name: "Mortadella (Pistache, Stracciatella)", price_cents: 1800, is_highlight: true },
          { name: "Speck & Gorgonzola", price_cents: 1800 },
          { name: "Tartufo (Crème de Truffe)", price_cents: 1800 },
          { name: "Capretta (Chèvre frais, Pesto)", price_cents: 1600 },
          { name: "Pizza Burrata entière", price_cents: 1700 },
          { name: "N’duja & Courgettes", price_cents: 1600 }
        ]
      },
      {
        category_type: "other",
        display_label: "Pâtes Fraîches (Le Jour Même)",
        items: [
          { name: "Linguine al Pomodoro fresco", price_cents: 1500 },
          { name: "Cacio e Pepe (Pecorino, Poivre)", price_cents: 1650, is_highlight: true },
          { name: "Spaghetti alle Vongole (Palourdes)", price_cents: 1900 },
          { name: "Penne à la Norma (Aubergines)", price_cents: 1600 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Dolci & Boissons",
        items: [
          { name: "Tiramisu Maison (La Recette)", price_cents: 750, is_highlight: true },
          { name: "Panna Cotta aux fruits rouges", price_cents: 650 },
          { name: "Mousse au Chocolat intensive", price_cents: 650 },
          { name: "Bière Italienne Menabrea", price_cents: 650 },
          { name: "Verre de Chianti (DOCG)", price_cents: 700 },
          { name: "Spritz Classique (Aperitivo)", price_cents: 950, is_highlight: true },
          { name: "Limonata San Pellegrino", price_cents: 450 }
        ]
      }
    ]
  },
  description: "L’Alimentari est une enclave sarde authentique nichée dans la pittoresque Rue des Cinq Diamants. À la fois épicerie fine et restaurant, l’établissement ravit la Butte-aux-Cailles avec ses pizzas à pâte fine et ses pâtes fraîches préparées avec un amour manifeste du produit. L’ambiance y est conviviale, typique des bistrots de quartier où l'on se serre sur la terrasse pour déguster un spritz ou une planche de charcuterie fine avant une pizza généreuse.",
  insider_tip: `• **Le Trésor Pistache** : La pizza Mortadella avec sa crème de pistache et sa stracciatella est une explosion de gourmandise absolue.
  • **Fraîcheur Quotidienne** : N'hésitez pas à demander les suggestions de pâtes du jour, elles sont souvent meilleures que la carte fixe.
  • **Terrisse Stratégique** : Arrivez tôt (avant 20h) pour espérer décrocher une place en terrasse sur cette rue piétonne très prisée le soir.`,
  specials: {
    cuisine: ["Italien"],
    drinks: ["Chianti", "Spritz"],
    must_eat: "Cuisine italienne. Pizza Mortadella & Tiramisu",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-alimentari/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-alimentari/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-alimentari/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-alimentari/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-alimentari/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-alimentari/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Pizza Mortadella & Tiramisu",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default l_alimentari;
