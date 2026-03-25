import { SurgicalPlace } from "../../../type-definition";

export const hawai: SurgicalPlace = {
  id: "poi-hawai",
  slug: "hawai",
  name: "Hawai",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "87 Av. d'Ivry, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.824534,
    lng: 2.362806,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJR1CW6odx5kcRYCbHwiO_WqE"
  },
  moods: {
    chill: 60,
    festif: 40,
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
      url: "https://maps.google.com/?cid=11626815548322948704",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    dish_price: 11.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Traiteur & Entrées (À la pièce)",
        items: [
          { name: "Nems au Porc mythiques (x6)", price: "7.90€", highlight: true },
          { name: "Rouleaux de Printemps (x2)", price: "6.60€" },
          { name: "Samoussas au Bœuf (x4)", price: "7.00€" },
          { name: "Bánh Cuốn (Vapeur Viet)", price: "7.70€" },
          { name: "Beignets de Crevettes (x5)", price: "8.50€" },
          { name: "Bouchées à la Vapeur (Assortiment)", price: "8.00€" }
        ]
      },
      {
        category: "Soupes & Bouillons (Plats)",
        items: [
          { name: "Soupe de Raviolis aux Crevettes", price: "11.00€", highlight: true },
          { name: "Phở Classique au Bœuf", price: "10.50€" },
          { name: "Soupe de Nouilles au Poulet", price: "10.00€" },
          { name: "Mì Hoành Thánh (Soupe Wonton)", price: "11.00€" },
          { name: "Soupe Spéciale Hawai (Mixte)", price: "12.50€" }
        ]
      },
      {
        category: "Composés & Satiété (Plats)",
        items: [
          { name: "Bo Bun Classic (Bœuf & Nems)", price: "8.90€", highlight: true },
          { name: "Riz aux Trois Trésors (Porc, Œuf, Viande)", price: "11.50€" },
          { name: "Nouilles Sautées au Poulet", price: "10.50€" },
          { name: "Riz Cantonais Hawai (Complet)", price: "9.50€" },
          { name: "Bœuf aux Oignons & Riz blanc", price: "10.80€" },
          { name: "Poulet Citronnelle & Riz", price: "10.50€" }
        ]
      },
      {
        category: "Vitrine Traiteur (Spécialités)",
        items: [
          { name: "Porc Laqué au Miel (Portion)", price: "9.50€" },
          { name: "Canard Laqué à la découpe", price: "11.50€" },
          { name: "Travers de Porc Sel & Poivre", price: "10.00€" },
          { name: "Salade de Choux au Poulet", price: "6.50€" }
        ]
      },
      {
        category: "Douceurs & Boissons",
        items: [
          { name: "Perles de Coco Maison", price: "4.50€" },
          { name: "Gelée aux Herbes & Lait de Coco", price: "5.50€" },
          { name: "Bière Tsingtao (33cl)", price: "4.50€" },
          { name: "Limonade Artisanal (Asian Style)", price: "3.50€" },
          { name: "Thé Vert Chaud (Pot)", price: "4.00€" },
          { name: "Jus de Coco avec pulpe", price: "4.50€" },
          { name: "Lait de Soja Froid", price: "3.00€" }
        ]
      }
    ]
  },
  description: "Hawaï est la cantine de référence de l'Avenue d'Ivry, un pilier du quartier chinois qui ne désemplit jamais. Si la salle est modeste, sa vitrine traiteur est une légende urbaine dans le 13e : on y vient de tout Paris pour ses nems ultra-croustillants et son porc laqué brillant. C'est l'essence même de la 'gastronomie de trottoir' : rapide, efficace, et d'une régularité métronomique dans la qualité. Une expérience brute et authentique de la vie de quartier.",
  insider_tip: `• **Le Graal du Nem** : Leurs nems sont considérés par les locaux comme faisant partie du top 3 du quartier. Prenez-en une portion en plus, ils se réchauffent parfaitement.
  • **Le Combo Traiteur** : Ne vous limitez pas à la carte assis ; regardez ce qui vient de sortir de la rôtisserie en vitrine, c'est là que se cachent les meilleures pièces de canard.
  • **Efficacité Maximale** : Le service est l'un des plus rapides de l'arrondissement. Idéal pour un déjeuner 'flash' avant de faire ses courses chez Tang Frères juste à côté.`,
  specials: {
    cuisine: ["Vietnamienne", "Chinoise", "Traiteur Asian"],
    drinks: ["Bière Tsingtao", "Jus de Coco", "Thé Vert"],
    must_eat: "Cuisine Traiteur. Nems au Porc & Bo Bun Classic",
  },
  images: {
    hero: "AU_ZVEF6ozFpZGVGosIYWNi38CjdmGFPptexqFV-uviEqPu4ChiTjNumWgmhXRzbuqTdlIWurSs-78vfAnf2XGMMlCbeMZGtunJ9SteBuc1DhWRIjw56Z8vvM5TuZDnnF0rI0saUY-lcm61U4aGKJnJKlcXau4dNuHWnva9ZKyoi3N6Vx6g0At17SUrsup_6g3WFusUqHM4Zsj8C27oplRX_nrXLofvEMzGasvLk_Go3kQXol0cgMOIB-phTs26NAWw2rpag0zGXLvu7oBvdJLfaNOGg3cm2176PM6rZHJgW25wdDQ",
    gallery: ["AU_ZVEHKTmfmqqJE_8v3w_KTOM0jSc6OYldSu_XyCUhLYfsfS4uMC-Zu1Isp1UvMWtbYmqwI9wm8_9UTSbqlt4aM5hj6kiZ3ZaUVgHEFa29Pi5T8DZKkvO8kuWk9SLU81FrCDDUIaWuEHkLCyJUbUtC3YvUC4vD6tmV-WsRWI41Y1OzI1Iq1qPhnIchQRpLFPWruyKLhMuiHvnbHKZ6F3zUjTv1wSQ0s1pPtHw7WYDRkh92YKlG3gkBzdYIUxOP5YInLerTVs9u199JurHk5x-3VflCRWu0MzOPXEBBSnDoHJrNqfA","AU_ZVEFwinIr0DoxVZJlEQO-ubpjF-NuvK7JQwj0TnMl0envLU3mAH8kfJ4FvJ3Njy6rkZSkie2aYCzah-fgG34Beh5bSRL7cdlww4WX7TE9YSPWdLiP5MPo8SvByyNFfOain6jKmdCXe88Cy-7pz11NimPXf3Ts_OOEjftiSshaEGe0Cy2qkgh8RXNsjB8odQzZRJbjB7Vlhdzfkpuzh9XO3j4hbtgxM7JsvS5l2EfRGMc-Ky8XS3g4YhHHx5nfq7m88yyosUst8GuHtn1qGz2399Z7e_VZVP70PCNOS4VT2loifanKddUTzMOSiC5QcAQ98tNl3O4SR8nKYlkFAuIgmENHPqIZADTJSiFX_g1UUTb5-renxyDiAMI9-tfb668J_mkt4yr93BJhsu1-b9sO6_03J3WtGrhpT-ISF2RdZKPoSg"]
  },
  verified: false,
  google_rating: 4
};

export default hawai;
