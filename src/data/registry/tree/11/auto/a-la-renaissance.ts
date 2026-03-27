import { SurgicalPlace } from "../../../type-definition";

export const a_la_renaissance: SurgicalPlace = {
  id: "poi-a-la-renaissance",
  slug: "a-la-renaissance",
  name: "A La Renaissance",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "87 Rue de la Roquette, 75011 Paris, France",
    arrondissement: 11,
    lat: 48.8571955,
    lng: 2.3787317,
    nearest_metro: "Voltaire",
    metro_lines: [9],
    google_id: "ChIJbSGWjvdt5kcRTZPgPTeuDPA"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 08:00 – 01:00 | mardi: 08:00 – 01:00 | mercredi: 08:00 – 01:00 | jeudi: 08:00 – 01:00 | vendredi: 08:00 – 01:00 | samedi: 08:00 – 01:00 | dimanche: 08:00 – 01:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.alarenaissance.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 24, // Plat principal médian (Burger/Steak/Poisson)
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Petites Assiettes & Entrées (Entrées)",
        items: [
          { name: "Œuf Mayo 'Renaissance' (Culte)", price: "8.00€", highlight: true },
          { name: "Terrine de Campagne & Pickles", price: "10.00€" },
          { name: "Croquettes de Cochon (x4)", price: "12.00€", highlight: true },
          { name: "Poireaux Vinaigrette & Noisettes", price: "9.50€" },
          { name: "Tarama Maison & Pain grillé", price: "9.00€" },
          { name: "Radis Beurre & Sel de Maldon", price: "7.00€" },
          { name: "Petite Salade de saison", price: "8.50€" },
          { name: "Frites Maison & Mayo ail", price: "7.00€" }
        ]
      },
      {
        category: "Plats de Convive (Plats)",
        items: [
          { name: "Le Burger Renaissance (Cheddar/Bacon)", price: "22.00€", highlight: true },
          { name: "Steak au Poivre & Frites Maison", price: "28.00€", highlight: true },
          { name: "Poisson du Marché, beurre blanc", price: "26.00€" },
          { name: "Tartare de Bœuf au couteau", price: "24.00€" },
          { name: "Salade Caesar 'Luxueuse'", price: "21.00€" },
          { name: "Gnocchi à la crème de sauge", price: "19.00€" },
          { name: "Longe de Veau rôtie, jus corsé", price: "27.00€" },
          { name: "Demi-Poulet fermier rôti", price: "25.00€" }
        ]
      },
      {
        category: "Desserts Maison (Desserts)",
        items: [
          { name: "Mousse au Chocolat (À partager ou pas)", price: "9.00€", highlight: true },
          { name: "Cheesecake New-Yorkais", price: "10.00€" },
          { name: "Tartelette aux fruits de saison", price: "11.00€" },
          { name: "Crème Brûlée à la Vanille de Tahiti", price: "9.50€" },
          { name: "Assiette de Fromages (Sélection)", price: "12.00€" },
          { name: "Boule de Sorbet artisanal", price: "4.50€" }
        ]
      },
      {
        category: "Quixotic Cocktails & Spirits (Boissons)",
        items: [
          { name: "Negroni de la Roquette", price: "14.50€", highlight: true },
          { name: "Pornstar Martini Signature", price: "15.00€" },
          { name: "Moscow Mule Artisanal", price: "13.00€" },
          { name: "Old Fashioned (Bourbon/Peel)", price: "16.00€" },
          { name: "Mocktail 'Renaissance' (Frais)", price: "11.00€" }
        ]
      },
      {
        category: "La Cave & Softs (Boissons)",
        items: [
          { name: "Verre de Vin Nature (Sélection)", price: "8.50€", highlight: true },
          { name: "Demi-Pinte Craft Beer (Draft)", price: "6.00€" },
          { name: "Pinte de Lager (Draft)", price: "9.50€" },
          { name: "Café Lomi Espresso", price: "3.00€" },
          { name: "Double Espresso", price: "5.00€" },
          { name: "Eau micro-filtrée (75cl)", price: "4.50€" },
          { name: "Jus de fruits frais", price: "7.00€" }
        ]
      }
    ]
  },
  description: "À La Renaissance est un bistrot historique de la rue de la Roquette, brillamment repris par l'équipe de Quixotic Projects. L'endroit a conservé son âme de brasserie populaire tout en injectant une exigence moderne sur le sourcing et une expertise cocktail de haut vol. C'est le lieu hybride parfait, où l'on peut manger un burger d'anthologie ou un œuf mayo culte accompagné d'un Negroni parfaitement exécuté.",
  insider_tip: "• **L'Œuf Mayo** : Il est régulièrement cité comme l'un des meilleurs de Paris — un impératif absolu.\n• **Vibration** : Le lieu est très animé le soir, idéal pour un dîner festif avant d'explorer les bars du quartier.\n• **Service Continu** : Très pratique pour manger un morceau de qualité à des heures décalées.",
  specials: {
    cuisine: ["Burger Renaissance", "Œuf Mayo Culte", "Bistrot Moderne"],
    drinks: ["Cocktails Quixotic Projects", "Vins natures", "Bières artisanales"],
    must_eat: "L'Œuf Mayo 'Renaissance' (8€) : une onctuosité parfaite, une pointe d'acidité, bref la perfection du genre.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHL9Kjr2OpMIHP5XmEBjiE-XivmojvglOaZV7d5g-AcKq2veg0wzi8vpGzqZT_F_OUZSGk1Wv9CSEwcK0ZSTza8LRKbrHMKhJsrHDjfwAhj5GqeUu9B0yPnW9zS0bAGLGySjwt6tRVzk0lcQRwkxW4Wknsscl_QHYO743EpnLNQL6_zgv_4iVfRMNRIs2ktqZvqGKTj9l14sSl_QVRUBAVNSZLqbPrBCqR7PM0o0QCg2HziKfyBmkMUKqBLHk8K_cVX1VYttOiOejR8c0kxv5w-tUBc9WxCF6K609WPKrgj0w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHr9FzPRcBTcVtFkUAvyHl-wXL-lNUdasdYV3EZToj-U_Ouaof4FIKd3t2O0WdEch7ALk4-KdoFDbi_mb_NytHExOUMcW3PIT-3W9Y_jGuwb3cv33Bxj8nKdfa9TxU0ycRgIze6URbOGp3NovUufYuU2Igs3bFJ2xMzkrf0r_9js_RK2nGbzmHO0149ZvCEIIhlS9gKEBRRIYqcbD7txy6llrCM3rY5urZbz8fEZfsAZDRkKNZpVQSapBeIQ3e05TR3p0wMdMx9pgCJ7eImEyfABuXpStBFqle5JVRbY3LtDg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHaXKmegwKRnU6OVWS6qe2wHiYWLxu_0aB5HmrhtoEafn0NUs89jrViddUkiEziGhKwcCAZPCDfJ8bbHnMZZySoKidoa5TL7_ey3nFNUT-p6lRXMLnL5Rmn4eSv0RFrq6k3h1uw5sSRngaObvrl8wJUIFs7mVvOZKmBIXD6HIUDFpqD_ZA9PHXv9C4gt9wJQm70E6-r6MmReIzk7DvmjbLuUApZ1hFhQVWt6cTZqF0sKOPf8TyQa4bAND9aPfJnb8jy5TEr_OY-M3g4RoIe78jmK9wj-2imquHP0t2pYSQLsMVJAYis7RR-51PLbYuFRhE6hrkJjToBCGN82UVkj5LTw6p0tqeDfBj-bE1BEzj9X2OaGXtOak1J1GawDbx7GzfmO3PpwZ8PwZEz58M1lfsTtdMeJLaJWgXCbzycQCjtygkFV-A5xuGvMPkmT2Y2&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.3
};

export default a_la_renaissance;
