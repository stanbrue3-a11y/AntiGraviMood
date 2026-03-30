import { SurgicalPlace } from "../../../type-definition";

export const pho_tai: SurgicalPlace = {
  id: "poi-pho-tai",
  slug: "pho-tai",
  name: "Phở Tài",
  category: "restaurant",
  subcategory: ["vietnamien"],
  location: {
    address: "13 Rue Philibert Lucot, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.822139,
    lng: 2.361378,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJLwdFHodx5kcR-kRjRYqYWLQ"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 15:00, 18:45 – 22:15 | mercredi: 12:00 – 15:00, 18:45 – 22:15 | jeudi: 12:00 – 15:00, 18:45 – 22:15 | vendredi: 12:00 – 15:00, 18:45 – 22:15 | samedi: 12:00 – 15:00, 18:30 – 22:15 | dimanche: 12:00 – 15:00, 18:45 – 22:15",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/photaiparis/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 16,
    dish_price: 11.80,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées (Vapeur & Croustillant)",
        items: [
          { name: "Bánh Cuốn (Raviolis Vietnamiens)", price_cents: 850, is_highlight: true },
          { name: "Nems au Porc (x4)", price_cents: 750 },
          { name: "Ha Cao (Vapeur Crevettes)", price_cents: 780 },
          { name: "Beignets de Crevettes", price_cents: 900 },
          { name: "Salade de Poulet au Gingembre", price_cents: 880 },
          { name: "Crêpe Vietnamienne (Bánh Xèo)", price_cents: 1050 }
        ]
      },
      {
        category_type: "main",
        display_label: "Légendes du Phở (Plats)",
        items: [
          { name: "Phở Spécial (Phở Đặc Biệt)", price_cents: 1250, is_highlight: true },
          { name: "Phở au Bœuf Cru (Phở Tái)", price_cents: 1150 },
          { name: "Phở au Poulet (Phở Gà)", price_cents: 1100 },
          { name: "Phở aux Boulettes de Bœuf", price_cents: 1150 },
          { name: "Phở Végétarien au Tofu", price_cents: 1100 }
        ]
      },
      {
        category_type: "main",
        display_label: "Bo Buns & Nouilles (Plats)",
        items: [
          { name: "Bo Bun Royal (Nems & Bœuf)", price_cents: 1280, is_highlight: true },
          { name: "Bo Bun Classic (Bœuf)", price_cents: 1080 },
          { name: "Bo Bun Végétarien (Nems Végé)", price_cents: 1150 },
          { name: "Mì Xào (Nouilles sautées Poulet)", price_cents: 1180 },
          { name: "Bún Chả Ha Noi", price_cents: 1350 }
        ]
      },
      {
        category_type: "main",
        display_label: " Riz & Spécialités (Plats)",
        items: [
          { name: "Riz aux Brochettes de Bœuf", price_cents: 1180 },
          { name: "Riz Poulet & Porc Citronnelle", price_cents: 1180 },
          { name: "Riz aux Grosses Crevettes", price_cents: 1650 },
          { name: "Porc au Caramel à la mode de Hué", price_cents: 1250 },
          { name: "Canard à la Mangue Fraîche", price_cents: 1450 },
          { name: "Crevettes Poivre Vert & Coco", price_cents: 1500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Boissons Asia",
        items: [
          { name: "Trois Couleurs (Chè Ba Màu)", price_cents: 650, is_highlight: true },
          { name: "Banane au Lait de Coco Chaud", price_cents: 600 },
          { name: "Café Glacé à la Vietnamienne", price_cents: 450 },
          { name: "Thé à l'Artichaut (Dactilo)", price_cents: 400 },
          { name: "Lait de Soja Maison (Froid)", price_cents: 400 },
          { name: "Bière '33' Export (Vietnam)", price_cents: 600 },
          { name: "Jus de Lychee Frais", price_cents: 500 }
        ]
      }
    ]
  },
  description: "Phở Tài est une véritable institution nichée dans une petite rue calme du 13e, bien loin du tumulte commercial de l'avenue d'Italie. Ce restaurant, distingué par un Bib Gourmand Michelin, est considéré par beaucoup comme servant l'un des meilleurs Phở de la capitale. Le bouillon, mijoté pendant plus de 12 heures, est d'une clarté et d'une profondeur aromatique exceptionnelles. L'ambiance y est familiale, sans chichi, privilégiant la qualité absolue du produit et l'authenticité des recettes transmises de génération en génération.",
  insider_tip: `• **Le Rite du Phở** : Commandez le Phở Tái (bœuf cru) et laissez la chaleur du bouillon cuire la viande à votre convenance pour une tendreté parfaite.
  • **Secret de Gourmet** : Leurs Bánh Cuốn (raviolis vapeur) sont préparés à la minute et rivalisent avec les meilleures adresses du quartier chinois.
  • **Timing Idéal** : Victime de son succès, le restaurant ne prend pas de réservation. Arrivez dès 18h45 pour le service du soir afin d'éviter la file d'attente sur le trottoir.`,
  specials: {
    cuisine: ["Vietnamienne"],
    drinks: ["Café Vietnamien", "Bière 33 Export", "Thé Artichaut"],
    must_eat: "Cuisine Vietnamienne. Phở Spécial & Bánh Cuốn",
  },
  images: {
    hero: "AU_ZVEGnM-qDPWW9Sy4UNTXequGPhmGeEbPAPtbMmci5ZtIwCl7t2AWvLPf2Wpm_kD9u8w5Wr1pukKeAO1abObD7G6yt_xruiZewt8CaIC2KYaCjOL6Rgr6pHvSrB86Y1uTpXtxVv8kZ00lFcBNWYYfMdSeg3Uwsd2FlcQVfReNwr1-NUxE5fX34YITsytmAfSAgLFl0pXrQeE_BfR5uDVTeaW4i6iNNbBxd-pLMI_H9dHajYRN7ygzS7DtNHHowzUvGtFxHtx_gTJBZdCHh1adqAnLVSpKa8YqSTBckdlE9zEWYf7sp337z0nToj4yUXakC4nFJo6WlrdMAPfqHVhl3OTKAwvbfZW0Ddv5puXWCUW19wNh3LOWM6NE2DG_tBtow_uaUhtm0WPBen6CS1wzygEmrUKks4xtM2MIc_3wt3cJGb3VO85gQSt09k794-0u_",
    gallery: ["AU_ZVEG0vx6xDkJJNCYwXyFcshqWs98sM0frxRaPV0DvcrO0qLxCs0dGdkGmilsh9ErAXTrhCrEjKcyr7SVOF1oKgdSQVc2wHSqDAev6V19FjsLdz_vRbaJA19grYjawNfsgUBkpSeD6HB_ficlvJ0jH1GgdgvJ0KiYQrEiPATkt-s44r5uoRUT6HhEy3uDuOrUjWeYHIeyizHmuaWkBqGXA2eLXm8brK6NtieM8O_NQM4X2tUzfGqPNBxcqglToVWdOxdThsn2kue6dpS2fP80_mq2vvz3c5HDOzAXGDSju_f_KAQ","AU_ZVEHGTSPQd2mHGYDvhH0cbHoHh9BPp1piJ2aimf5u3ZFLeKTh50PfuhPddQkHVhlv25dGIQ1pcNiTeRUdkVWc_Bvm9isqckGkgheiPjMk8ejCU4UuuKxVQwRJS6CCfDyt0nXDyWzUhYuIYTZkhpqy4y3RUSpq5AqOK0AvbgdRMTYERRlvz0he9jqwgLaxBGYcCCrcPERquZ9B9i4U4wBoJN5sI7gwwe-K484tACKTsT55v-JSCUGYanubSNonWATLjZyyAHUR4GKGdwxbyp9BD-MXG-0F8w9_kzng4STChnniYKsRiUEb2VYwy1i5BGiWK01vKBjBAN6rJTxFjgtDgB4zM96wpeIqObmFT1eb56AHhPWk0335DyOYOWyt9jIGtqSN6nD-Wx94YgJCTKPl6lOdk8r2Hhd2Lma1gKqjWAxUS-tZIDh3OHG12sOCdw"]
  },
  verified: false,
  google_rating: 4.2
};

export default pho_tai;
