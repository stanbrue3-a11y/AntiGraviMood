import { SurgicalPlace } from "../../../type-definition";

export const le_relais_gascon: SurgicalPlace = {
  id: "poi-le-relais-gascon",
  slug: "le-relais-gascon",
  name: "Le Relais Gascon",
  category: "restaurant",
  subcategory: ["français", "gascon", "sud-ouest", "salades-geantes", "montmartre"],
  location: {
    address: "6 Rue des Abbesses, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8840242,
    lng: 2.3391513,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJpW4VWERu5kcRpFwpIfrfC5c"
  },
  moods: {
    chill: 40,
    festif: 85,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 11:00 – 00:00 | mardi: 11:00 – 00:00 | mercredi: 11:00 – 00:00 | jeudi: 11:00 – 00:00 | vendredi: 11:00 – 00:00 | samedi: 11:00 – 00:00 | dimanche: 11:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.lerelaisgascon.fr/",
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
        category_type: "starter",
        display_label: "Salades Géantes (Plats)",
        items: [
        { name: "Salade Gascon", price_cents: 1850, description: "Magrets fumés, bloc de foie gras, pommes de terre sautées à l'ail" },
        { name: "Salade du Chef", price_cents: 1590, description: "Blancs de volaille, emmental, pommes de terre ail" },
        { name: "Salade du Sud-Ouest", price_cents: 1690, description: "Gésiers confits, lardons, croutons, pommes de terre ail" },
        { name: "Salade Montmartre", price_cents: 1860, description: "Jambon de pays, burrata, avocat, maïs, pommes de terre ail" },
        { name: "Salade Océane", price_cents: 1850, description: "Saumon fumé, crevettes, avocat, pommes de terre ail" },
        { name: "Salade du Béarnais", price_cents: 1650, description: "Chèvre chaud, lardons, croutons, pommes de terre ail" },
        { name: "Salade Fraîcheur", price_cents: 1690, description: "Œuf frit, jambon cru, lardons, pommes de terre ail" },
        { name: "Salade Végétarienne", price_cents: 1590, description: "Maïs, betteraves, carottes, olives, pommes de terre ail" },
        { name: "Salade Gourmande", price_cents: 1690, description: "Thon, œuf dur, haricots verts, poivrons, pommes de terre" }
      ]},
      {
        category_type: "main",
        display_label: "Plats & Tradition",
        items: [
        { name: "Confit de Canard Moelleux", price_cents: 1850, description: "Servi avec pommes à l'ail et haricots verts" },
        { name: "Magret de Canard au Miel", price_cents: 2050 },
        { name: "Cassoulet Gascon Maison", price_cents: 1900 },
        { name: "Bœuf Bourguignon Tradition", price_cents: 1700 },
        { name: "Tartiflette au Reblochon", price_cents: 1650 },
        { name: "Entrecôte Grillée (250g)", price_cents: 2250 }
      ]},
      {
        category_type: "dessert",
        display_label: "Desserts Maison",
        items: [
        { name: "Profiteroles Maison", price_cents: 850 },
        { name: "Tatin Gasconne", price_cents: 750 },
        { name: "Mousse au Chocolat", price_cents: 650 }
      ]}
    ]
  },
  description: "Une institution montmartroise célèbre pour ses salades XXL servies dans des bols géants, accompagnées de pommes de terre sautées à l'ail. L'ambiance y est conviviale, rustique et chaleureuse, typique des bistrots de quartier où l'on vient pour la générosité des portions et l'accueil sans chichis.",
  insider_tip: "• **Timing Stratégique** : Le soir, la file s'allonge vite sur le trottoir des Abbesses. Misez sur une arrivée à 19h15 pour éviter l'attente.\n• **Combo Moelle** : La Salade Gascon (avec foie gras) est l'expérience ultime du lieu. Attention : une salade suffit largement pour deux petits appétits.\n• **Vibe** : Si vous cherchez le calme, passez votre chemin. Ici, l'effervescence est la règle, surtout en terrasse les soirs d'été.",
  specials: {
    cuisine: ["Française", "Sud-Ouest", "Brasserie"],
    drinks: ["Vins du Sud-Ouest", "Bières"],
    must_eat: "Cuisine généreuse du Sud-Ouest. Salade Gascon & Confit de Canard",
  },
  images: {
    hero: "AU_ZVEEtsuUnu0Uv3NlLV3nZs2Ksdc9B0aZvdbz1CH568YAZUuAyffMME6ftRRdZcN4yHyx9xIYTlPFrv8GnE19iXQZirvejCwxnPJRwuCNDTj4h1k9DQaKmakYV7HzQPPLiYlHb9LbhxeI64isP9voI0fVxfAEV_mSfxEoJoJvZ6D2DLynMkejLOV6lxA3H3IH9I5O3qncX8K0DaPQvbxMe-yL6PytJKPPGQtNN3ns3Shshz6OlFhbNdGL_Gfxwpvg-EaLuiLmog3HF5OMDzmBC5gKl5X37WZQ6ivpQMh5lXnb5GQ",
    gallery: ["AU_ZVEHY_60Hk7N2TssO6R8pdjggsgc_3Ku9nyJP__3pj0BxwGVBgPB4ACjcrHp65S-bGXBkV43PfnUvrNB5n1dfBsCTtZvH9y4YWtDKmwEPTfJ_4DbaCta4nhtOJdbMmDlI7lJ2W6Vcf3fjGjLnmZGOC2vIXJOuk05S_EnHumRiXLudBvaMz9BZwyshSy8ib3t912o7uoOCAfSht7J1_Tbwy8zfP43RfIUODc7cSvztWF_y5cbgKQoRmNLUb8MyZBcFgvoySOR4U-1ShbNwwvUgo9jKX_k4Lb60UxNLgrofb3u7SQ","AU_ZVEFIuhQth-q2tdGtIw0sh1qBFXruuLo_RLt3ISa4zhJR5nlPxJQWubXYIpaajWkYyjzIJwd9CleXR59zZ9QKvykO74sjckBt4YwLYiwQ8QjuNIKx1oDIXx8Qzry_xZVLoXAzXX_4Ba2DRXn11tTxpHuTHsVhaR_IVtzXfL40QbG2FsQlpBaF3cNGO4vP6gLuiFDa1zluZYdcJcF-X0zbio6QLC3i4VbbZk4nsbPDEV6AmAcgMq5bSUXZegFYdsLtEpBTUqcjqXMlmNB3PZKuPY40EfhCalsU1SV_F2nEc3X9MQN20cQG67NKv-vBbfyPJTNVq8PbL25vXfk1nJ0dfI6CMcnfKDqTnFMi0CSRKP8i4Rrqo30DFwNv3WrMl6sn9xLXEf_ya0H-n_I2Cwu3sHIIswlgcbCY8C8h8ZU0xRhhFk1EmqG4PypybiBx3jEX"]
  },
  verified: false,
  google_rating: 4.4
};

export default le_relais_gascon;
