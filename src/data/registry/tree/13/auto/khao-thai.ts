import { SurgicalPlace } from "../../../type-definition";

export const khao_thai: SurgicalPlace = {
  id: "poi-khao-thai",
  slug: "khao-thai",
  name: "Khao Thaï",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "10 Rue des Gobelins, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.835158,
    lng: 2.351859,
    nearest_metro: "Les Gobelins",
    metro_lines: ["7"],
    google_id: "ChIJUQ2wQt9x5kcRnBT5N-KN9tg"
  },
  moods: {
    chill: 75,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Ouvert tous les jours: 12:00–14:30, 19:00–22:30",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://khaothaiparis.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 25,
    dish_price: 17.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Les Formules (Plats)",
        items: [
          { name: "Formule Midi (E+P ou P+D)", price: "17.00€", highlight: true },
          { name: "Formule Midi Complète (E+P+D)", price: "21.00€" },
          { name: "Menu Dégustation Khao Thaï", price: "36.00€", highlight: true },
          { name: "Plat du Jour + Riz", price: "15.00€" }
        ]
      },
      {
        category: "Entrées : Saveurs du Siam",
        items: [
          { name: "Nems au Poulet (x4)", price: "9.50€" },
          { name: "Nems aux Crevettes (x4)", price: "10.50€" },
          { name: "Salade de Papaye Verte (Som Tam)", price: "11.00€", highlight: true },
          { name: "Salade de Bœuf Épicée (Yam Neua)", price: "13.00€" },
          { name: "Brochettes de Poulet Saté (x4)", price: "12.00€" },
          { name: "Raviolis Vapeur aux Crevettes", price: "11.00€" },
          { name: "Soupe Tom Yam Gung (Indispensable)", price: "12.50€", highlight: true }
        ]
      },
      {
        category: "Plats : Pad Thaï & Nouilles",
        items: [
          { name: "Pad Thaï aux Crevettes (Signature)", price: "17.00€", highlight: true },
          { name: "Pad Thaï au Poulet", price: "16.00€" },
          { name: "Pad Thaï au Bœuf", price: "17.00€" },
          { name: "Nouilles Sautées aux Légumes", price: "14.50€" }
        ]
      },
      {
        category: "Plats : Currys & Spécialités",
        items: [
          { name: "Massaman Neua (Curry Cacahuète)", price: "17.50€", highlight: true },
          { name: "Bœuf au Curry Panang", price: "18.00€" },
          { name: "Poulet au Curry Vert & Bambou", price: "17.00€" },
          { name: "Le Tigre qui Pleure (Bœuf Grillé)", price: "24.00€", highlight: true },
          { name: "Bœuf au Basilic Thaï (Pad Kra Prao)", price: "18.00€" },
          { name: "Crevettes au Gingembre Frais", price: "22.00€" },
          { name: "Canard Laqué au Curry Rouge", price: "21.00€" }
        ]
      },
      {
        category: "Douceurs & Desserts",
        items: [
          { name: "Riz Gluant à la Mangue & Coco", price: "11.00€", highlight: true },
          { name: "Nem au Chocolat & Banane", price: "8.50€" },
          { name: "Flan Thaï au Lait de Coco", price: "8.00€" },
          { name: "Coupe de Fruits Exotiques", price: "7.50€" }
        ]
      },
      {
        category: "Boissons d'Ailleurs",
        items: [
          { name: "Bière Singha (Bouteille)", price: "6.50€" },
          { name: "Bière Chang (Bouteille)", price: "6.50€" },
          { name: "Jus de Coco Frais", price: "5.50€" },
          { name: "Thé Vert au Jasmin", price: "4.50€" },
          { name: "Verre de Vin Blanc (Sauvignon)", price: "6.50€" }
        ]
      }
    ]
  },
  description: "Khao Thaï Gobelins est une escale élégante qui transporte ses convives au cœur de Bangkok sans quitter le 13e. Réputé pour son cadre soigné et ses saveurs balancées, le restaurant propose une carte qui est un véritable hommage à la gastronomie siamoise. Du curry Massaman onctueux au légendaire Tigre qui Pleure, chaque plat est une invitation au voyage, préparé avec une rigueur qui lui vaut une place de choix parmi les institutions thaïlandaises du quartier.",
  insider_tip: `• **Le Choix Royal** : Le 'Tigre qui Pleure' est ici particulièrement réussi, avec une viande tendrement marinée et une sauce tamarin addictive.
  • **Douceur Finale** : Ne repartez pas sans goûter au Mango Sticky Rice (riz gluant à la mangue), un dessert qui rivalise avec les meilleurs stands de street-food de Thong Lo.
  • **Le Midi** : La formule à 17€ est un rapport qualité-prix imbattable pour un déjeuner d'affaires ou une pause gourmande.`,
  specials: {
    cuisine: ["Thaïlandaise"],
    drinks: ["Singha", "Chang"],
    must_eat: "Cuisine Thaïlandaise. Pad Thaï & Tigre qui Pleure",
  },
  images: {
    hero: "AU_ZVEF7qgvH5QaMNfGsZyAkWGl9c-GWkJnK1nOalf0QjZOIdnCHKed5Nsl-cA0SwBOOS8Sylvb-tdU5w7W7AVGC5gyiUu8wycjLDHZ_oDnCQaSttO2cCdopdbyG-XLcWtSjXhGQAAInySdQyWVEZWM4ECe4VY6lUO4pwHgouV0drRX9h35a4SBdAQ-yLrQum7c-CoNUGl6tUNHriN6etTNFCDZUG4tWm6c-6TUvSMhvqWymmrH4AKEltXxaN6qPlXTrRCE-4pPHElF3G6N2kErf8t_q6eox4YTLVArHCdGJ5lYwcv57YNU1L2zgWTaAzaMYIlq0ZrmOGI7eMOz3iPoqNdiM4Y278I5KY4Ji7HJSRd-wdr64Nq27aaefiaGyqWqls0gi-ZZhuD5ClrSXuDEJlo-dFmPrLC0ECMaBfxEnuLXDSA",
    gallery: ["AU_ZVEHhr1A8yCh-nZpAoKIU2O4i8KdM4hepAnflOdM2f74Usfbo3hiKqhnMGIvIQipUGBw3VTn0OMF0ziflJCU0GmHIVc8I7UH8AMM1pUjcZU1CJ116_B4Bx0XiMmm2GmLkcJg-u1ksuvrt4j-NDv18VOtmEZq-7VC7HPbhzunPYguidzI0vkh6FZ3aW8Pk7dERicEYhUxyoVJcjl4JwHpfgGg0_AE-pfEXay_2ecFYfLfi4KjHlp5KVW77b9nIH4GjAjlidNExwVu-S5pb-MELnUBt5d1Q7YkYLZD1b1PqenF57Q","AU_ZVEE8ZiACAn0fXYBhB-fT3EOxaXS_aaAG10Nn_8w7zy9T_ESVGlD5C0Cgjh6mMML5C9el4oSwcEK159mSEuTO6OphyoXJz9-NNvL8ayY0SPXBceIHBik1TAydmAYxybycI4AQKxOrt4WiYfDUw8fkxZfdZom0Afv5QPTtKtWRuaGwtsWpz0mx1pkopCn-JgfqP6em3zoCEeh43zn3bV8o0dD8_JlMW1OuSA0DKCjhX2gKAAZV6PNsvSHhvxMEiIFAjSdwN82a7qNeb4W4psbUxMnTqIAGa1fmF-ohr5JrbjcQD94bJiTnT8_tpkdfkShc8xsaG6WQlbE29Rnl2ssCsPJePbl7TxCeVg-d_UE9SlSD27-0ev9CClST0ekx9yXwiRHfFE-66EUA3_iTRjvCAOySD17KjWNsGXy0Ocw73YDoEx22UhFoBPbXUCjFP-bH"]
  },
  verified: false,
  google_rating: 4.3
};

export default khao_thai;
