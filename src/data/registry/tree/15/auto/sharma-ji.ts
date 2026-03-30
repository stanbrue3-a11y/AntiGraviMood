import { SurgicalPlace } from "../../../type-definition";

export const sharma_ji: SurgicalPlace = {
  id: "poi-sharma-ji",
  slug: "sharma-ji",
  name: "Sharma Ji",
  category: "restaurant",
  subcategory: ["indien", "moderne", "bistronomie", "chic", "street-food"],
  location: {
    address: "16 Rue Frémicourt, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.84733500000001,
    lng: 2.2983166,
    nearest_metro: "La Motte-Picquet - Grenelle",
    metro_lines: [6, 8, 10],
    google_id: "ChIJLZ3bUplx5kcREJJwwkZJIvg"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:15, 18:30 – 22:30 | mercredi: 12:00 – 14:15, 18:30 – 22:30 | jeudi: 12:00 – 14:15, 18:30 – 23:00 | vendredi: 12:00 – 14:15, 18:30 – 23:00 | samedi: 12:00 – 14:30, 18:30 – 23:00 | dimanche: 12:00 – 14:30",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.sharmaji.fr/",
      label: "RÉSERVER UNE TABLE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Street Food",
        items: [
          { name: "Three Lentille Texture", price_cents: 1300, description: "Textures de lentilles croquantes et fondantes" },
          { name: "Devilled Duck Tikki", price_cents: 1600, description: "Effiloché de canard épicé" },
          { name: "Malai Broccoli", price_cents: 1200, is_highlight: true },
          { name: "Raviolis Tandoori", price_cents: 1400, description: "Dumplings grillés au four tandoor" },
          { name: "Calamari Pepper Fry", price_cents: 1600 },
          { name: "Lamb Keema Samosa", price_cents: 1500 },
          { name: "Beetroot Arancini", price_cents: 1400 },
          { name: "Chicken Tikka", price_cents: 1500 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats de Manoj",
        items: [
          { name: "Lamb Ghee Roast", price_cents: 3800, description: "Épaule d'agneau confite, sauce au ghee et épices", is_highlight: true },
          { name: "Old Delhi Butter Chicken", price_cents: 2600 },
          { name: "Dum Biryani d'Agneau", price_cents: 2900, description: "Cuit à l'étouffée sous une croûte de pain" },
          { name: "Wadia Auntie Fish Masala", price_cents: 3200, description: "Poisson en feuille de bananier" },
          { name: "Paneer Saffron Korma", price_cents: 2400 },
          { name: "Kerala Prawn Curry", price_cents: 3100 },
          { name: "Black Dal Sharmaji", price_cents: 1800, description: "Lentilles noires mijotées 24h" },
          { name: "Baingan Bharta Moderne", price_cents: 2100 },
          { name: "Veggie Dum Biryani", price_cents: 2400 }
        ]
      },
      {
        category_type: "other",
        display_label: "Naans & Accompagnements",
        items: [
          { name: "Butter Naan", price_cents: 450 },
          { name: "Garlic & Coriander Naan", price_cents: 550 },
          { name: "Cheese Naan Core", price_cents: 650 },
          { name: "Truffle Naan Luxe", price_cents: 800 },
          { name: "Basmati Pilau Rice", price_cents: 500 },
          { name: "Raita aux herbes fraîches", price_cents: 400 },
          { name: "Laccha Paratha", price_cents: 600 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cocktails & Boissons",
        items: [
          { name: "Bombay Colada", price_cents: 1400 },
          { name: "Gulabi Gin Tonic", price_cents: 1300 },
          { name: "Karikal Punch", price_cents: 1400 },
          { name: "Mango Lassi Frais", price_cents: 700 },
          { name: "Masala Chai Maison", price_cents: 500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Rose & Cardamom Cheesecake", price_cents: 1000 },
          { name: "Mango Kulfi Moderne", price_cents: 900 },
          { name: "Dark Chocolate Delice Chili", price_cents: 1100 }
        ]
      }
    ]
  },
  description: `Sharmaji est l’incarnation de la nouvelle scène gastronomique indienne à Paris. Sous la houlette du chef Manoj Sharma, l’établissement propose une vision chic, moderne et dépouillée des classiques du sous-continent. Ici, pas de néons criards mais une ambiance feutrée en bois sombre, parfaite pour découvrir une cuisine qui privilégie la finesse des épices et la qualité des produits sourcés avec soin. C’est l’adresse incontournable pour ceux qui veulent redécouvrir les saveurs de l’Inde à travers un prisme bistronomique raffiné.`,
  insider_tip: `• **Timing Stratégique** : Réservez impérativement votre table plusieurs jours à l’avance, le lieu est petit et affiche complet quasiment tous les soirs de la semaine.
  • **Combo Moelle** : Ne passez pas à côté de l’agneau confit (Lamb Ghee Roast), une prouesse de tendreté, idéalement accompagné d’un Garlic Naan tout juste sorti du tandoor.
  • **Expérience Culturelle** : Portez une attention particulière à la carte des cocktails ; les créations comme le Bombay Colada utilisent des épices indiennes de façon magistrale pour accompagner le repas.`,
  specials: {
    cuisine: ["Indienne Moderne", "Bistronomie"],
    drinks: ["Cocktails Signatures", "Vins Naturels"],
    must_eat: "Cuisine Indienne Moderne. L’épaule d’agneau (Lamb Ghee Roast) & les raviolis tandoori.",
    expert_catchline: "L’excellence indienne par le chef Manoj Sharma, entre tradition et modernité absolue.",
  },
  images: {
    hero: "AU_ZVEENMEN24w4Kshf8po7uY-Ilo6561-jkCiGZJWGfW5V62vd0jBCASb1iRo-KimjSvYVQRn7ktanEPYF3PGHUAFTZ-3yTMnM0EGvYyXVuLuq_wB-sz9odXBmUuYqzh_0pNBuTLoiHhiIFLDxJNjNbkgOHO3TRi82dYT6ff6dGeoscu9Zcx8E_e0WEluDMWp0dnbhNmDUFwu57AxsIPHhgVRH0t_1JRkEDv1LsXKl7g2hfTElgrQjmM0BTQO1N1Owde46vrBxUDlPcxy5hUd6msm3UqztYFDCn_x3akAx-a7I",
    gallery: ["AU_ZVEEDfNRYiYbthbCCbi-qou1wf6huI_nVt4M0ru7qrH4xNgbyIvjlKLWSqwp8SeGgtcLaOfq3k33HtUL0R04TMuK5krUtVFVWYzNFTdBs0YEyc9_sEAYHvyIiAJyiEvuqkwO8ZTimdI-BceZPSErsIHUCPt560IFd6G9z8REONSdukmJ1TMrJk54EUey38IRZc2NNpckCc4AK3-EyeEv2Xn4HsckaHwIX2yjyxblNZdcGIy2dXybc81I4RpdW6aunuCvtr88y0zEsCVkWNZw2x1COaT7qK5dUv8SIT8pgdI8","AU_ZVEF2nb1ObE4TsRhw_yTTXF_oe5bghHbM_ZrtNxOpSNChT2yISUiMu3CN1V2SOzddC4Fc9GmISV7OOtnj2QQg--9tzsmV05t5-36JsVx4gbBZ9q7nRNswPXALrmKUp3xqB8vaERvSAGKpx2CGb93G_rhjAknM_yerdD0BCtsCwueob4DeLIrRLPlLKjDllJsD2HFwAZvYa8uPe6pPia0oabzg0u9poZXhBFzkzkb7klWJ6BKglHTuquQXiyAGXJ5f9cUhUIuqFqdYFH1bfRO0uNpadHQB29SVAf5_65Buktjb8EdXZjD8Luoe-JzRYbd9YfZtXGb1TAPnJd4vkyEjoW2ar5MgxCnolF88mEfJN7IejYKWYMiibACb3j0HaLnZIYBOnM-6Zfq22kQ2ZR_Wu-JqjHwNcYOt0z6Be7ptNBZQfj70tf9dk0ST4K12ww"]
  },
  verified: true,
  google_rating: 4.7
};

export default sharma_ji;
