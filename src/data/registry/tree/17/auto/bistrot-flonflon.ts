import { SurgicalPlace } from "../../../type-definition";

export const bistrot_flonflon: SurgicalPlace = {
  id: "poi-bistrot-flonflon",
  slug: "bistrot-flonflon",
  name: "Bistrot Flonflon",
  category: "restaurant",
  subcategory: ["Bistrot", "Cuisine française", "Festif"],
  location: {
    address: "2 Rue Brunel, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8763781,
    lng: 2.2891027,
    nearest_metro: "Argentine / Charles de Gaulle Etoile",
    metro_lines: [1, 2, 6],
    google_id: "ChIJgTP35vJv5kcRAe5HUVF1S_8"
  },
  moods: {
    chill: 50,
    festif: 90,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "mardi: 12:00–14:30, 19:30–22:30 | mercredi: 12:00–14:30, 19:30–22:30 | jeudi: 12:00–14:30, 19:30–22:30 | vendredi: 12:00–14:30, 19:30–22:30 | samedi: 19:30–22:30 | dimanche: Fermé | lundi: Fermé",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.bistrotflonflon.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-31",
    verified_at: "2026-03-31",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Croque-monsieur brioché à la truffe", price_cents: 1400 },
          { name: "Œufs mimosa du Flonflon", price_cents: 800 },
          { name: "Os à moelle gratiné au sel fumé", price_cents: 1200 },
          { name: "Encornets à la plancha, chorizo", price_cents: 1500 },
          { name: "Poireaux vinaigrette et noisettes", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Cote de bœuf maturée (pour 2)", price_cents: 7500 },
          { name: "Saucisse-purée de notre enfance", price_cents: 1900 },
          { name: "Cabillaud au beurre citronné", price_cents: 2400 },
          { name: "Parmentier de canard confit", price_cents: 2200 },
          { name: "Plat du jour (Ardoise)", price_cents: 2000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Mousse au chocolat à partager", price_cents: 1000 },
          { name: "Baba au rhum géant", price_cents: 1200 },
          { name: "Tarte tatin aux pommes", price_cents: 900 },
          { name: "Profiteroles sauce chocolat chaud", price_cents: 1100 },
          { name: "Assiette de fromages canailles", price_cents: 1200 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de Morgon", price_cents: 800 },
          { name: "Cocktail Spritz du Chef", price_cents: 1000 },
          { name: "Bière à la pression", price_cents: 700 },
          { name: "Digestif du patron", price_cents: 900 },
          { name: "Café serré", price_cents: 250 }
        ]
      }
    ]
  },
  description: `À deux pas de l'Étoile, Flonflon est le nouveau refuge des bons vivants. Inspiré par l'esprit des guinguettes parisiennes, ce bistrot réinvente les classiques de la cuisine bourgeoise avec un twist festif. Ici, le service est décontracté, les vins coulent à flots et on n'hésite pas à finir la soirée en chanson au son des flonflons.`,
  insider_tip: `• **Timing Stratégique** : Visez le jeudi soir pour une ambiance maximale où le Tout-Paris se presse.
  • **Combo Moelle** : Le croque à la truffe est addictif, commandez-en un pour deux avant de passer aux choses sérieuses.
  • **Côté Verre** : La carte des vins de vignerons est une pépite, avec des références canailles à prix doux.`,
  expert_catchline: "Flonflons, bons vins et assiettes canailles.",
  specials: {
    cuisine: ["Bistrot festif"],
    drinks: ["Vins de copains", "Cocktails"],
    must_eat: "Cuisine de bistrot. Le croque-monsieur brioché à la truffe.",
  },
  images: {
    hero: "AU_ZVEGTO_ILqSBryyFy8X6HAuOQ53qY_M-s27_m0GVgMb0vMknkN01fRNsVPJe_oBh-7okfLW3aA3flUGa2hvWe4X-S4xsClwKyTEVFAX2FuAl-6gc7HvnOTFwvHpP1qnaNZVFHvF0BDFm3c7kkceDeV1aq5b0_6cJgUjSedVyX7UaSvOMcLJiDHqw3hP7niowBR5_q1OT2auMX7_ByIS8F-UYhnc-WYer3FJlm_Lgo42BAlBSF7820DSeuyVyQAS1Coqx6WTEBeyVYFWXhKNy-HHj-68LNqq5eNrOsEkP-tyJ-dA",
    gallery: ["AU_ZVEF23nO-e8WCmtqqG589_laya2Auo8o7L4vNGPHkpnvI_9z6k3rEP9JgxaycTMpN2Us_PHpkjReWQGmEoWqLWancnC4Ssp4c2FtYWvoHeEr8uS9o-fMXuFWAZZIAEu8aTI35xBTrbG_jsUk18IYT5k4ZyD76ct9_K2efhFng9KlrutQgxMLRdcBqg26T6L4yykyKkAK1bX8Jo7oVAMFjRFpqsGGR4S8WJHSE0J-oYFRfaeCBvzLckBlhxNMCaY1_5Jt81wHGZJrAHhNJTY3A9ljNV8-mmoDPV4yx3ZJhzQZr5g","AU_ZVEHbWci7k-CpNsSZSkMP107RMkIDFchmIb7zxXGLA90SOd2Waa5QHYqbZ5B2kkoGyT6nAdZNJEVP8pMVHV0KgJaYYep5JgmNlA5zvs2IoRFCKcXVEei53w4LU8bSyMOD35kLIxD5Zp_JBFb9xoh2MJe_hikteK9d7Ysxxzx-kG-ob_sYqev3ndpAA1E2b4vSpJJGSuAOTQwunFiIgW1dt_jhLSFBu0mSEd3NX6IysXOLrhM0pJ3r-1N2YAzO5vELAkAAUyujSdlce7_Zw-P2-c2ApQTsD8GapIc5SxswH_wDrJta3_g554BkuLbSyKcAFmK9D9nC3Qq_oPTEcE-jUWk1u9dqk9SGDmfurvikgUgpSxyOzec19yZ91aldadGiIaMb7crllqHxs3asAgzb7zRZwdfCIGee4DuD6GJ2lzChP9k1BtnxOhRXpoP6wyXF"]
  },
  verified: true,
  google_rating: 4.5
};

export default bistrot_flonflon;
