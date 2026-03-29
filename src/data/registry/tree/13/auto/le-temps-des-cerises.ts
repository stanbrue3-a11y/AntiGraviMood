import { SurgicalPlace } from "../../../type-definition";

export const le_temps_des_cerises: SurgicalPlace = {
  id: "poi-le-temps-des-cerises",
  slug: "le-temps-des-cerises",
  name: "Le Temps des Cerises",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "18-20 Rue de la Butte aux Cailles, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8279102,
    lng: 2.3504885,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJh0pxV5Bx5kcRnxlPNiJLKRU"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 23:00 | mardi: 12:00 – 14:30, 19:00 – 23:00 | mercredi: 12:00 – 14:30, 19:00 – 23:00 | jeudi: 12:00 – 14:30, 19:00 – 23:00 | vendredi: 12:00 – 14:30, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.letempsdescerisescoop.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 16,
    dish_price: 15.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées du Terroir",
        items: [
          { name: "Salade de Joue de Porc confite", price_cents: 750, is_highlight: true },
          { name: "Terrine Maison Polonaise", price_cents: 650 },
          { name: "Rillettes de Poisson du moment", price_cents: 700 },
          { name: "Œufs Cocotte à la crème", price_cents: 600 },
          { name: "Velouté de légumes de saison", price_cents: 550 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats (Français)",
        items: [
          { name: "Super Cassoulet du Chef", price_cents: 2250, is_highlight: true },
          { name: "Petit Salé aux Lentilles", price_cents: 1550 },
          { name: "Joues de Cochon braisées", price_cents: 1650 },
          { name: "Boudin Noir à la Normande", price_cents: 1650 },
          { name: "Cuisse de Canard confite (Pot au feu)", price_cents: 1700 },
          { name: "Pavé de Lieu Jaune au four", price_cents: 1800 },
          { name: "Assiette Végétarienne de la Butte", price_cents: 1450 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules & Satiété",
        items: [
          { name: "Formule Midi (E+P+D)", price_cents: 1900, is_highlight: true },
          { name: "Formule Midi (E+P ou P+D)", price_cents: 1600 },
          { name: "Menu Soir Complet", price_cents: 3100 },
          { name: "Formule Soir (E+P ou P+D)", price_cents: 2450 },
          { name: "Plat du Jour Étudiant (Samedi)", price_cents: 100 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs (Desserts)",
        items: [
          { name: "Mousse au Chocolat maison", price_cents: 600 },
          { name: "Île Flottante aux pralines", price_cents: 550 },
          { name: "Tarte Tatin de la Butte", price_cents: 700 },
          { name: "Fromage Blanc au miel", price_cents: 500 },
          { name: "Baba au Rhum classique", price_cents: 750 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave / Boissons",
        items: [
          { name: "Verre de Vin Naturel", price_cents: 550 },
          { name: "Pinte de Bière Artisanale", price_cents: 700 },
          { name: "Limonade du Village", price_cents: 450 },
          { name: "Café Équitable", price_cents: 180 },
          { name: "Thé Bio Jardins de Gaïa", price_cents: 400 }
        ]
      }
    ]
  },
  description: "Le Temps des Cerises n'est pas qu'un restaurant, c'est une institution autogérée (SCOP) née en 1976 au cœur de la Butte-aux-Cailles. La cuisine y est franche, généreuse et ancrée dans le terroir français. On y vient pour l'atmosphère unique de village parisien, les discussions enflammées en terrasse et l'engagement social d'une équipe passionnée. Le lieu incarne l'esprit frondeur et solidaire de la Butte.",
  insider_tip: `• **Solidarité Butte** : Le samedi midi, le restaurant propose un plat à 1€ pour les étudiants, une tradition qui perdure avec panache.
  • **Le Must-Eat** : Le Super Cassoulet est une légende du quartier, généreux et authentique, parfait pour les soirées d'hiver.
  • **Timing Réserve** : Le lieu est extrêmement prisé des locaux. Les réservations téléphoniques sont limitées à 12h30 pour le midi et 19h30 pour le soir, soyez ponctuels !`,
  specials: {
    cuisine: ["Française", "Bistrot"],
    drinks: ["Vin nature", "Bière artisanale"],
    must_eat: "Cuisine Bistrot. Super Cassoulet & Salade de Joue de Porc",
  },
  images: {
    hero: "AU_ZVEEnWBX9iR_EIyUbgGmmy3iTOsisWlUKsPFZO2Mi8MsNM0EvuoaFYcwBJ6HlUGnFS76KZj4KJTyvX08Q0_LFcaXxAazlGTJ3Xopv1WXUzX6X9rvM-39VaVCA8ti67MC3YW3pY3ywuIDeHvv7bDJgNViEJ6BW8fVRv5Af6xzhkXO6TFrVHcnd617YAZXy84Sc32hz3NXetqSOSsfT29dQ3e_zZy1ayHoIWu3EK05Z4MiatiZch2-NzrmZ00_pqSfR43655eP6j9kXpcPZN7asRsR1FR3S8E_LKCk-Jb4eHbt5sw",
    gallery: ["AU_ZVEF4liEWfxKN8Hz_Jr1T_xG0GGSxfFWlzBC-5-RylTwJmg8-TM-lCSU3lbvwiSiIT8syBCOuH_eo2cjBVZLRgXrX7gWBUQ6Yueb1I0KSHGiiziGu_HGcUBxvWk6_Yhs-uyyFBr0DErocmSlkKr4GnVNEokz18xCbZLeBUSjTQTxp7775B2J7KNoiJKmc6HtIDJU4rQgxPWUDZH81Vq188lHaCO-Ypx323Usk1Fm3ypHNhnfI7a004rRfvQuqbsKFFgK7Ckf-BxYhPcitWAPuoFI8deyESC0n9p0XRQZgrxj2QNPgUCJ-80TMj8bgDbu9TZ1CjJt0FdH-XKdhQcwyNnxi0TVrk43QPewC3ef4UlL3hdaVp4I25QOMtiHPZw8cGHm8CvHjyQ0llz27Pc_kStPGHxu61bVTDfH6o7ORDQYM4WHj1NkAu04T6Ik1b2Ks","AU_ZVEHnLH5n9yhi8kXakzTFmw7wjSaQhQnsiNG7VjpnoJdHIGVt1V5lMDTTWDtzlM8gcXMKiwxDEYvwJsn1hjpHHkESuW15B-JY-kHoCD0whsp8gNQR4yvddG0U2UPx2P7OElLrZPTDQCR5qgADz_6q5DfbJJyidhKJ2m5KAxNzqXQAVPDCQvei9_wz7g0seoL_H6_AViMgzSo-5AjiCrDDuvoxjZhkV5SsIYiZizPXNIK1YH1l7ETEjr8Iraiz_gvVNs5X2JdsrSP7Fvg4zFsnCy3CFVfaHi0TsVokiEcjhxxUo0vz6hwiMFdru3eWKpE56iBTSwis6C5cscVu1ACFSn92lULdZsc-Tg3tlmEafpyBRtICgqkq64xoASA9RbVArWnMeqOo3SH4Lx0prFbZU_eM6vOGnUsG_zcUAbeiivGjImtG"]
  },
  verified: false,
  google_rating: 4.4
};

export default le_temps_des_cerises;
