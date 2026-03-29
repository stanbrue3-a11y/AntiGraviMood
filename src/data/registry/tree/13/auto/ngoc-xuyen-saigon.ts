import { SurgicalPlace } from "../../../type-definition";

export const ngoc_xuyen_saigon: SurgicalPlace = {
  id: "poi-ngoc-xuyen-saigon",
  slug: "ngoc-xuyen-saigon",
  name: "Ngoc Xuyen Saigon",
  category: "restaurant",
  subcategory: ["vietnamien", "authentique", "pho", "soupe"],
  location: {
    address: "4 Rue Caillaux, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8229203,
    lng: 2.3617349,
    nearest_metro: "Tolbiac",
    metro_lines: [7],
    google_id: "ChIJA0_NBodx5kcROe2nE0DePAw"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://ngocxuyensaigon.net/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 20,
    dish_price: 17.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées Signatures",
        items: [
          { name: "Nems au Poulet (Chả giò)", price_cents: 850, is_highlight: true },
          { name: "Rouleaux de Printemps au Bœuf (Bò cuốn)", price_cents: 850 },
          { name: "Bánh cuốn (Raviolis vapeur porc/champignons)", price_cents: 850, is_highlight: true },
          { name: "Gỏi cuốn (Rouleaux de printemps crevettes)", price_cents: 850 },
          { name: "Salade de Papaye verte (Som Tam style)", price_cents: 950 },
          { name: "Ailes de Poulet frites au Nuoc Mam", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Soupes Royales & Légendaires (Plats)",
        items: [
          { name: "Bun Bo Hue (Soupe de Hué - Bœuf & Porc)", price_cents: 1750, is_highlight: true },
          { name: "Phở Đặc Biệt (Phở Spécial Bœuf complet)", price_cents: 1700, is_highlight: true },
          { name: "Phở Bœuf Cru / Cuit", price_cents: 1700 },
          { name: "Phở au Poulet Fermier", price_cents: 1700 },
          { name: "Soupe Saïgonnaise (Mì/Hủ tiếu)", price_cents: 1750 },
          { name: "Bo Bun Classique (Bœuf & Nems)", price_cents: 1700 }
        ]
      },
      {
        category_type: "other",
        display_label: "Spécialités de Saison & Hebdomadaires",
        items: [
          { name: "Mardi : Bun Mang Ga (Poulet & Bambou)", price_cents: 1750 },
          { name: "Mercredi : Banh Canh Cua (Soupe Crabe & Pied de Porc)", price_cents: 1900 },
          { name: "Jeudi : Bun Rieu (Vermicelles au Crabe)", price_cents: 1850 },
          { name: "Ven/Sam : Bun Mam (Soupe Saumure de Poisson)", price_cents: 1900, is_highlight: true },
          { name: "Dimanche : Curry de Poulet à la Vietnamienne", price_cents: 1750 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Riz Traditonnels",
        items: [
          { name: "Com Tam Ba Bao (Riz aux 3 Trésors)", price_cents: 1750, is_highlight: true },
          { name: "Com Ga (Riz au poulet grillé)", price_cents: 1450 },
          { name: "Bœuf au Gingembre & Riz blanc", price_cents: 1650 },
          { name: "Porc au Caramel à la mode de Hué", price_cents: 1550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Milkshakes",
        items: [
          { name: "Haricot Rouge Lait de Coco (Chè đậu đỏ)", price_cents: 750 },
          { name: "Trois Couleurs (Chè ba màu)", price_cents: 750 },
          { name: "Délice de Maïs chaud", price_cents: 800 },
          { name: "Milkshake Corossol", price_cents: 1000, is_highlight: true },
          { name: "Milkshake Durian (L'authentique)", price_cents: 1000 },
          { name: "Milkshake Avocat", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons d'Asie",
        items: [
          { name: "Jus de Sucre de Canne (Pressé minute)", price_cents: 550, is_highlight: true },
          { name: "Café Filtré Vietnamien (Lait concentré)", price_cents: 550 },
          { name: "Bière Saigon / 33 Export", price_cents: 600 },
          { name: "Thé au Jasmin (Théière)", price_cents: 450 },
          { name: "Jus de Coco avec pulpe", price_cents: 500 }
        ]
      }
    ]
  },
  description: "Ngoc Xuyen Saigon est une institution du quartier Tolbiac, célèbre pour la pureté de ses bouillons et l'authenticité de ses recettes familiales. Ici, pas de chichis, on vient pour la maîtrise technique du Pho et les spécialités quotidiennes qui attirent les connaisseurs de tout Paris. Une adresse où le temps semble s'arrêter devant un bol fumant.",
  insider_tip: "• **Jus de Canne** : Ils le pressent minute, c'est le compagnon idéal pour équilibrer le piment du Bun Bo Hue.\n• **Calendrier Soupe** : Venez le jeudi pour leur vermicelle au crabe, une rareté à Paris exécutée à la perfection.\n• **Early Bird** : Fermeture à 17h ! C'est une adresse de déjeuner, ne prévoyez pas d'y dîner.",
  specials: {
    cuisine: ["Vietnamien", "Street Food"],
    drinks: ["Soft"],
    must_eat: "Cuisine Vietnamienne. Pho Tonkinois & Jus de Sucre de Canne",
  },
  images: {
    hero: "AU_ZVEE75eo5fjgQKqA-aMK1cTewFdt__wxSMdqAKNML7zQdLrBYjlhJ8xFwBLx1cbVGlq_GBMrDpV3VVdzbI2OkizC4J-oVJAx6_4bPXNw1YcxReQJazbF9cTt82z1AAAnBTFyWhLAhCPO17zkvdTey9RADp8YHjPz2dMdYF81GhKGJsO26AQ-lp-Jjm0AFKSVkQyZvZN8AB7rC_2H50W_x6UfDdLXuNUO2a01ndmKREJoYku1QpCXlxOpt8hScN_fpDCbyKNBMVIfFZS75KV4SXEGUp9tbNDz6xqFMZWKwLLETIg",
    gallery: ["AU_ZVEHpcXwp48ock07orENGVwNA60lqqAUvUJE3fwC-25S7ljJZafQ4L9P64Fdno4-P5EpO2l_6poAITVS4qtuWrzbe1jv3Lc-rv1NhZi2LtHHCusspZcPUyWxYSLFqHI3pBx67pXyUpgQJy4cGoDR_WEaAEJL5IS6T_p4ZsEtfwsc-ob7A5f8gK9xHbL2fMBOv_35d-B69NfXJbE1i9MHkz9svSizXQDAnU0Dva44q1LXVzHbpKzSaVy20uD8utj5HRZNFl5bsJD_huD-cvRMslnQPMTiqbX2qRc-YFYK5L_hKdg","AU_ZVEGjizc9s8SSFN6DoS5FSXkPutdy9BZJ8-DLW4DCkeT0nFgfSXtyH5hnXB1qNEuUI4tEXf8qmz1VaUD6Olv-LWY2MgpgPwVQ00nN2euBYoAtkVp28YadxFsvAIOCdiQwRM7P3pkzt3sHTC6It9JUPBLgTK0_Xslh71_NC78I7qPiqWrY-Cw7vfgOaktIjMJR3y3jHRjNmdKUqxPo0pYNf1AUtHRSVBlAyjzTDCTsbDJxShxQQmJhvDApxTJZLtwPn257a08b9xozy49yvLRc7kv5lxU4qZ8fpI_cJarOj1tQmQxNBtAdDJISOuJ2VtadM5YXkRU70hjyKjl4P7ygsnbZF0Rz3EljySbfgaCiePJ_NCoSXCuE4ICCHn_YSOWOiGAnfIfoug134sSigva-USd-vu35koTQFIuGwqZLy4vAHd6AddnV9f5ReTKCLNNC"]
  },
  verified: false,
  google_rating: 4.4
};

export default ngoc_xuyen_saigon;
