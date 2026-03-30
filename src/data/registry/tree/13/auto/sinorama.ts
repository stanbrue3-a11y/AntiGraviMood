import { SurgicalPlace } from "../../../type-definition";

export const sinorama: SurgicalPlace = {
  id: "poi-sinorama",
  slug: "sinorama",
  name: "Sinorama 大家樂",
  category: "restaurant",
  subcategory: ["cantonais"],
  location: {
    address: "23 Rue du Dr Magnan, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8263893,
    lng: 2.3602059,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJoxqtvIhx5kcR7u1IJ1H3xiA"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:00, 18:30 – 23:00 | mardi: 12:00 – 15:00, 18:30 – 23:00 | mercredi: 12:00 – 15:00, 18:30 – 23:00 | jeudi: 12:00 – 15:00, 18:30 – 23:00 | vendredi: 12:00 – 15:00, 18:30 – 23:45 | samedi: 12:00 – 16:00, 18:30 – 23:45 | dimanche: 12:00 – 16:00, 18:30 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://sinorama.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 20,
    dish_price: 18.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Vapeurs (Dim Sum)",
        items: [
          { name: "Pâtés Impériaux au Poulet (x4)", price_cents: 960, is_highlight: true },
          { name: "Raviolis Pékinois à la Poêle (x8)", price_cents: 960 },
          { name: "Pattes de Poulet sauce Soja Noir", price_cents: 960 },
          { name: "Raviolis de Crevettes Frits (x4)", price_cents: 960 },
          { name: "Ha Cao (Vapeur Crevettes)", price_cents: 850 },
          { name: "Siu Mai (Vapeur Porc & Crevettes)", price_cents: 850 },
          { name: "Brioches à la Vapeur (Steamed Buns)", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "La Rôtisserie (Plats)",
        items: [
          { name: "Canard Laqué Dégustation (3 services)", price_cents: 4000, is_highlight: true },
          { name: "Canard Laqué Cantonais (Désossé)", price_cents: 2160 },
          { name: "Travers de Porc au Sel & Poivre", price_cents: 1850 },
          { name: "Porc Laqué (Char Siu) Maison", price_cents: 1750 },
          { name: "Poulet du Chef à la Vapeur", price_cents: 1560 }
        ]
      },
      {
        category_type: "main",
        display_label: "Sautés au Wok (Plats)",
        items: [
          { name: "Pâte de Riz Sauté au Bœuf", price_cents: 1800, is_highlight: true },
          { name: "Bœuf aux Poivres de Tasmanie", price_cents: 2040 },
          { name: "Haricots Fins sauce XO", price_cents: 1860 },
          { name: "Nouilles Sautées aux Crevettes", price_cents: 1800 },
          { name: "Riz Sauté au Bœuf & Oignons", price_cents: 1740 },
          { name: "Bœuf sauce Saté & Légumes", price_cents: 1680 },
          { name: "Marmite de Tofu à la Cantonaise", price_cents: 1650 }
        ]
      },
      {
        category_type: "main",
        display_label: "Soupes & Bouillons (Plats)",
        items: [
          { name: "Soupe aux Raviolis de Crevettes", price_cents: 1740 },
          { name: "Soupe de Nouilles au Canard Laqué", price_cents: 1600 },
          { name: "Soupe Wonton au Porc Épicée", price_cents: 1550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Infusions",
        items: [
          { name: "Perles de Coco Vapeur (x3)", price_cents: 650 },
          { name: "Nougat Chinois au Sésame", price_cents: 550 },
          { name: "Gingembre Confit au Sirop", price_cents: 500 },
          { name: "Thé Pu-Erh Millésimé (Pot)", price_cents: 750 },
          { name: "Chrysanthème Infusion Bio", price_cents: 550 },
          { name: "Bière Tsingtao (64cl)", price_cents: 800 },
          { name: "Trio de Sorbets Exotiques", price_cents: 700 }
        ]
      }
    ]
  },
  description: "Sinorama (大家樂) est une institution emblématique de la Dalle des Olympiades, véritable épicentre de la culture hongkongaise à Paris. Réputé pour son canard laqué servi en trois services et sa rôtisserie visible dès l'entrée, le restaurant attire une clientèle d'habitués en quête d'authenticité. La salle, vaste et animée, résonne du bruit des baguettes et des woks, offrant une immersion totale dans un bouillon de culture cantonaise. C'est l'un des rares endroits de Paris où l'on peut encore trouver des recettes traditionnelles inchangées depuis des décennies.",
  insider_tip: `• **Le Rite du Canard** : Pour une expérience ultime, commandez le canard en 3 services (peau croustillante avec crêpes, chair sautée, et bouillon). C'est le standard d'excellence de la maison.
  • **Secret de Dalle** : Les étiquettes écrites à la main sur les murs indiquent souvent les arrivages de poissons frais ou les spécialités du jour non inscrites sur la carte plastifiée.
  • **Noctambules bienvenus** : Le service continue souvent tard dans la nuit (jusqu'à 2h), ce qui en fait le refuge préféré des chefs et des travailleurs de nuit du quartier.`,
  specials: {
    cuisine: ["Cantonaise", "Hongkongaise", "Chinoise"],
    drinks: ["Thé Pu-Erh", "Bière Tsingtao"],
    must_eat: "Cuisine Cantonaise. Canard Laqué (3 services) & Pâte de Riz au Bœuf",
  },
  images: {
    hero: "AU_ZVEG4SPVe6jGDEjYBp3eojF4aXBbr8PAjQMYn3R_YglW8FLKntqhGhdRLtlBz_Ux9Y7yUE78bUwIp7tw4sQXWSDQESdfLz9NwLuuJxXH3zriLUIEWdq6B_bTzlmdUnEAkZymVmREygK2paXgUZL6XoZa2CU9ng339yJEyJ0X_35RomWg06ZYI5ZOvTXRNpUcl_0UqCE9va5V96gXEy56KgUaA3CZfyMkbJZH6hxFVt7tkQ5eyHkyCoGL2Bts8yqYP-cfofWoMjdJpKxR2vLbjfXca2qEKRD5zSVmfDaYy598I3g",
    gallery: ["AU_ZVEGygWXItq-hlRsEMuGmqhLFBJYdlulcJIcZtM5AGYYgNs3rS4cDg8IKcReLikyByNNGtmrZ-jo-Ab4XkX6F8kGyO4Ja_fBQF9GJ5Azya_IEOzikHLh8kkas1vCoC6nigAJgbqpRv1USevxjdeOvXMyvmB9znWUVDCnnjTByY3nYCK-nHW-ewm9-lNlmJX90zdUuof55YHDRLJO8le2Cs-mdomMbYM_7MWuw1z18w1oaH5B2a8jR6FR0YOR_CdVMt9YXHMiywXNh39RpFDw3xgjP7ryV3m2QyarAHrsZ7Hiu8A","AU_ZVEE45MropzUQByW-HuwRcDW7VKgiKBZ1ybsM3AhS3Wwx_2I4w7_OHjLuHE3yBeSoAxKHsPle4aPgO4CmjMCsjjYopZcDbvpfVB6udzmLxoJ8W8hCIs-NAglx0Hqj_OhqoXSux8nOdT0hiBEBwBuuOO6sCA8P3toxuXsw_vZWk4R9Bw-OGHyYYKByJBLHMRBRmfp2eSgwVk233L_VNRDizyX66utjLpuW3Tj_2UcSDj3KRYRlJnTrFig1jPG-c1T4mrzoI1Q7VeFcz5ApCa8mQ23hwDlvFKnosuKgV75Cq-a80rQum-mzc3ypmDlKtK4071115tfkCeOl12I0uAOubYFbZv2KwShlEvE7iX6zFHvII7y69mQGTlO556btpi2nseeakkcofDZc_Ar7elHZvTeCr4ZOYx6bLROwTdEMwHW1eDIoZ0phzpuqnZmOfCnt"]
  },
  verified: false,
  google_rating: 4.3
};

export default sinorama;
