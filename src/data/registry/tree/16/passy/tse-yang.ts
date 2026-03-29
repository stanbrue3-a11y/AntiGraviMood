import { SurgicalPlace } from "../../../type-definition";

export const tse_yang: SurgicalPlace = {
  id: "poi-tse-yang",
  slug: "tse-yang",
  name: "Tse Yang",
  category: "restaurant",
  subcategory: ["chinois", "gastronomique", "luxe", "passy"],
  location: {
    address: "25 Av. Pierre 1er de Serbie, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8669768,
    lng: 2.2979802,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJy_VA0edv5kcRYF_AiI8Qnpc"
  },
  moods: {
    chill: 95,
    festif: 5,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 23:00 | mardi: 12:00 – 14:30, 19:00 – 23:00 | mercredi: 12:00 – 14:30, 19:00 – 23:00 | jeudi: 12:00 – 14:30, 19:00 – 23:00 | vendredi: 12:00 – 14:30, 19:00 – 23:00 | samedi: 19:00 – 23:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://tse-yang.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "other",
        display_label: "L'Art des Vapeurs (Dim Sum)",
        items: [
          { name: "Ha Kao aux Crevettes", price_cents: 1400, description: "Pâte de riz translucide, 4 pièces" },
          { name: "Siu Mai Porc & Crevettes", price_cents: 1200, description: "4 pièces traditionnelles" },
          { name: "Bouchées aux Saint-Jacques", price_cents: 1800, description: "Vapeur délicate, corail fondu", is_highlight: true },
          { name: "Xiaolongbao de Shanghai", price_cents: 1600, description: "Bouillon brûlant à l'intérieur" },
          { name: "Raviolis Pékinois Grillés", price_cents: 1500, description: "Porc et ciboules, saisis à la poêle" },
          { name: "Nems au Poulet & Crabe", price_cents: 1400, description: "Croustillants, servis avec salade et menthe" },
          { name: "Brioches Cha Siu Bao", price_cents: 1300, description: "Pain vapeur au porc laqué sucré-salé" },
          { name: "Raviolis Végétaux Zen", price_cents: 1200, description: "Champignons noirs et pousses de bambou" },
          { name: "Crevettes à la Vapeur & Ail", price_cents: 1700, description: "Servis sur lit de vermicelles" }
        ]
      },
      {
        category_type: "other",
        display_label: "Grands Classiques Tse Yang",
        items: [
          { name: "Canard Laqué Pékinois", price_cents: 5500, description: "Présenté en deux services (Peau puis Chair)", is_highlight: true },
          { name: "Homard Bleu au Gingembre", price_cents: 7200, description: "Wok intense, oignons nouveaux et soja" },
          { name: "Boeuf aux Oignons & Sésame", price_cents: 3200, description: "Emincé de filet, sauce soja sombre" },
          { name: "Sole Sel & Poivre", price_cents: 4800, description: "Entière, saisie à haute température" },
          { name: "Poulet Kung Pao", price_cents: 2800, description: "Cacahuètes grillées et piments séchés" },
          { name: "Travers de Porc Aigre-Doux", price_cents: 2900, description: "Inspiration hongkongaise, ananas frais" },
          { name: "Canard Croustillant Aromatique", price_cents: 3800, description: "Servi avec crêpes déchiquetées" },
          { name: "Filet de Boeuf Poivre Noir", price_cents: 3600, description: "Sauce onctueuse et poivrons croquants" },
          { name: "Agneau à la Plaque Chauffante", price_cents: 3400, description: "Cumin et coriandre fraîche" }
        ]
      },
      {
        category_type: "other",
        display_label: "Le Potager Chinois",
        items: [
          { name: "Pak Choi à l'Ail", price_cents: 1600, description: "Saisi au wok, ail frit" },
          { name: "Aubergines Yu Xiang", price_cents: 1800, description: "Sauce pimentée et aigre-douce", is_highlight: true },
          { name: "Brocolis Sauce Huître", price_cents: 1500 },
          { name: "Haricots Verts du Sichuan", price_cents: 1700, description: "Sautés au porc et condiments salés" }
        ]
      },
      {
        category_type: "other",
        display_label: "Riz & Nouilles",
        items: [
          { name: "Riz Cantonais Imperial", price_cents: 1800, description: "Crevettes et porc laqué" },
          { name: "Nouilles Sautées Soja", price_cents: 1600, description: "Légumes croquants du moment" },
          { name: "Vermicelles Singapour", price_cents: 2200, description: "Curry jaune, crevettes et porc" },
          { name: "Riz Gluant Lotus", price_cents: 1400, description: "Vapeur, parfumé aux châtaignes d'eau" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Final & Douceurs",
        items: [
          { name: "Perles de Coco Vapeur", price_cents: 1000, description: "Cœur haricot mungo" },
          { name: "Nems au Chocolat", price_cents: 1200, description: "Glace vanille, fusion unique", is_highlight: true },
          { name: "Sorbet Litchi Maison", price_cents: 900 },
          { name: "Thé Vert Jasmin Supérieur", price_cents: 900 },
          { name: "Gingembre Confit", price_cents: 800 },
          { name: "Saké Shochu Premium", price_cents: 1400 }
        ]
      }
    ]
  },
  description: `Tse Yang est la référence absolue de la haute gastronomie chinoise à Paris depuis 1980. Dans un cadre feutré de boiseries laquées et de porcelaines précieuses, le restaurant perpétue l'art du canard pékinois et des vapeurs impériaux. Une institution de Passy où le luxe se déguste avec une précision gastronomique rare, loin des clichés, pour une clientèle internationale exigeante.`,
  insider_tip: `Le canard laqué en deux services est un rituel immanquable. Pour une expérience plus intime, demandez une table dans les alcôves du fond.`,
  specials: {
    cuisine: ["Chinois Gastronomique", "Cantonais", "Pékinois"],
    drinks: ["Grands crus classés", "Thés Pu-erh rares"],
    must_eat: "Cuisine Chinoise. Le Canard Laqué à la Pékinoise & Dim Sum Saint-Jacques.",
    must_drink: "Thé Vert Imperial"
  },
  images: {
    hero: "AU_ZVEHkg5Txv-4FamwIT5VrIPgRnjb-WihRWGBGqYH3cux3Kt6zgdJwNT0oU-AK-vXf2C4gwVl9mipftvL2kw4K0LsquwAQWJGPsHYhsnAP_lvF1kN3Qwj0tD2PbotyJ0eC5rs0OeUAFqU0vjryEAZJR8HN7UjlEeeQCwGd3iqIgN2uHFzS_ZesvttwM5wDy-LjelvhtdWQ_lZwERNPsgChryYy9OFaOtzKT5hegZgt_MwFWVdnXZVhcd1Pppbk16e2Td7oICCX41-oRx78DmWqxpaPQXdFKKTb4-rDZF8CtS_5j7ZsO_FdXRNenSy1-BK1mBOWlvru6m2xUyRrg6mdxTofGdobMWp8Q2sdKIfA6yEWLtfcp9zXEYuRT_V-v3drCA62L2MPNJNw4b05vubCFZ7ia7MwvELGT9Swnb_RfL951-LM",
    gallery: ["AU_ZVEELLw0dO8v5fWI-Jzcnra536rvewpqRtlbUJKIjE0gg4GIRjjy7K77ElIROdNclKq37al1ttvM8eXwHGs4r1lJo_g0p5h4O50IwFyYrUCUP6b5nQ41yOOhsvueLNdZqxi0bNoVGaJ3nwCj6UFoBzIb28_i9Yck8gnpFRWF973p6Je_jjKoPH1D_M6kk5fUex5KPM5Z9Juy6sYmABDudoXjtRCmJemJQZVnEiksyLUI2Av5oYKyToqa-HcV3f00q7egwnrfH_8XIbiwK15ipwraa4O9bX6maL4Tqgg7dj0ocbM1BTb0ocAj_ZpKr1j8GBVWBCVt5QhHefdmnsSiDJcAMSD7gE5KVoVFIodJnMhH9wjLHk0KK532ucfoELTHsgYvZZdxjiZfTRLmykTQZJRKy7V4OE9SvguIDj4cAOuXbLVgC","AU_ZVEGtFiVzfrezdO80t8ZKuueH_Jncrn8Y-vbk9OclS0qHQagh1Amg0B0QBzzCcyM3hFhqd7AQCQAXvVuSSir5J3zj4SZqTjfbi1-DvgsjCuUUdKGnjCwZdKv4aEE5BMUlIrVUa8VWbvmR4hJ5Fj2ISZ-qnsL2KtRbCc92PfvKrCfgMGEUKMRNd5yGhH14ZjJDOvC9deboOA064h-omgsWXV2OEhYOQZ9r9uHUO9dZIJ8LAoKWAprdo5n6Adz30rrku6NSgoKcQ92I0o3652ejXrnUfIB5uZt_ASC0l-kd4rJ2P083oWlPxDOyVZe-zAy_YxMT561tHfnUpk71DCVfsQJLP0Mwd7WW5igrCKOYSgr5XJO9Bdl5rzATqi8yoKwiCWanO-sgP83EpcjfO1vIFFKi0DXuh6CyM21zVP87NclKxIKyiN3ff4WWx1WxdQe9"]
  },
  verified: true,
  google_rating: 4
};

export default tse_yang;
