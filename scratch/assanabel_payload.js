#!/usr/bin/env node

const payload = JSON.stringify({
  on_mange_quoi_ici: 'Libanais. Mezzehs à partager & grillades méditerranéennes.',
  Url_Photos_Menu: [
    'https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/assanabel-alesia/Assanabel-Menu-Web.pdf',
  ],
  coffee_price: 4,
  cocktail_price: 14,
  menu_items: [
    {
      category_type: 'formula',
      display_label: 'Les Gastronomes',
      items: [
        {
          name: 'Le Concept des Gastronomes',
          description:
            'Assortiment de mezzehs en entrée puis présentoir de grillades méditerranéennes.',
          price_cents: 5100,
          is_highlight: true,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Froids — Les Classiques',
      items: [
        {
          name: 'Hommos',
          description: 'Purée de pois chiches à la crème de sésame',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Hommos Assanabel',
          description: 'Purée de pois chiches à la crème de sésame, citron et persil',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Tabouleh',
          description:
            "Salade de persil haché, blé concassé, tomates, oignons, huile d'olive et citron",
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Moutabal',
          description: "Caviar d'aubergines rôties à la crème de sésame et au citron",
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Labneh Beltoum',
          description: "Fromage blanc battu à l'ail et à la menthe",
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Baba Ghanouge',
          description: "Salade d'aubergines grillées, tomates, persil, oignons, poivrons et citron",
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Chankliche',
          description: 'Salade de fromage de chèvre parfumé au thym',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Moussaka',
          description: "Ratatouille d'aubergines aux pois chiches à la sauce tomate",
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Warak Enab',
          description: 'Feuilles de vigne farcies, riz, tomates, oignons',
          price_cents: 1200,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Froids — Tartares de Viande',
      items: [
        {
          name: 'Kebbé Nayé',
          description: 'Tartare de bœuf au blé concassé',
          price_cents: 1600,
          is_highlight: false,
        },
        {
          name: 'Habra Nayée',
          description: 'Purée de viande de bœuf crue',
          price_cents: 1600,
          is_highlight: false,
        },
        {
          name: 'Kafta Nayée',
          description: 'Viande de bœuf crue hachée, oignons et persil',
          price_cents: 1600,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: "Mezzehs Froids — Salades d'Exception",
      items: [
        {
          name: 'Fattouch',
          description: "Salade de crudités, huile d'olive, pain grillé, à l'épice de thym rouge",
          price_cents: 1400,
          is_highlight: false,
        },
        {
          name: 'Salade Orientale',
          description:
            "Salade, tomates, concombres, poivrons, oignons, radis, persil, citron et huile d'olive",
          price_cents: 1400,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Froids — La Noblesse Occidentale',
      items: [
        {
          name: 'Hommos Royal à la truffe',
          description: 'Purée de pois chiches truffée, lamelles de truffe noire',
          price_cents: 2200,
          is_highlight: true,
        },
        {
          name: 'Labneh des Ancêtres',
          description: 'Aubergine, fromage, poivron aux noix et à la menthe',
          price_cents: 1700,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Chauds — Les Classiques',
      items: [
        {
          name: 'Jawanah Betoum',
          description: "Ailes de poulet à l'ail et au citron",
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Patata Hara',
          description: 'Pommes de terre, ail, citron et coriandre',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Sawdet Djaj',
          description: 'Foies de volaille sautés',
          price_cents: 1200,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Chauds — Les Incontournables',
      items: [
        {
          name: 'Hommos Lahmeh',
          description: 'Purée de pois chiches à la crème de sésame et viande',
          price_cents: 1400,
          is_highlight: true,
        },
        {
          name: 'Fatteh Assanabel',
          description: 'Viande, aubergines, pain et yaourt',
          price_cents: 1400,
          is_highlight: false,
        },
        {
          name: 'Kellage',
          description: 'Pain farci au fromage halloumi et tomates grillées',
          price_cents: 1400,
          is_highlight: false,
        },
        {
          name: 'Arayess',
          description: 'Pain farci à la viande épicée grillée',
          price_cents: 1400,
          is_highlight: false,
        },
        {
          name: 'Halloumi grillé',
          description: 'Fromage grillé',
          price_cents: 1400,
          is_highlight: false,
        },
        {
          name: 'Soujouk',
          description: 'Saucisses de bœuf épicées au citron',
          price_cents: 1400,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Chauds — Les Abats',
      items: [
        {
          name: 'Lisanat',
          description: "Poêlée de Langue d'agneau acidulé",
          price_cents: 1500,
          is_highlight: false,
        },
        {
          name: "Cervelles d'agneau",
          description: 'Cervelles cuites au sirop de grenade',
          price_cents: 1500,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Chauds — Les Croustillants',
      items: [
        {
          name: 'Sambousek Jehbmeh',
          description: 'Beignets farcis au fromage',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Sambousek Lahmeh',
          description: 'Beignets farcis à la viande',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Kebbeh Krass',
          description: 'Coquilles croustillantes au blé concassé, farcies à la viande hachée',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Fatayer',
          description: "Chaussons d'épinards au thym rouge",
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Rekak',
          description: 'Feuilletés au fromage',
          price_cents: 1200,
          is_highlight: false,
        },
        {
          name: 'Falafel',
          description: 'Beignets de fèves et pois chiches aux épices',
          price_cents: 1200,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'sharing',
      display_label: 'Mezzehs Chauds — La Noblesse Occidentale',
      items: [
        {
          name: 'Les Crevettes Croquantes',
          description: 'Crevettes Croustillantes et sauce tartare',
          price_cents: 1900,
          is_highlight: false,
        },
        {
          name: 'Le Bassalich',
          description: "Viande d'agneau avec oignons caramélisés, poêlée aux épices",
          price_cents: 2500,
          is_highlight: true,
        },
      ],
    },
    {
      category_type: 'main',
      display_label: 'Nos Plats — Grillades',
      items: [
        {
          name: 'Chiche Taouk',
          description: "Brochettes de blanc de poulet mariné au citron et à l'ail",
          price_cents: 2800,
          is_highlight: true,
        },
        {
          name: 'Lahem Méchoui',
          description: "Brochettes d'agneau parfumées",
          price_cents: 2900,
          is_highlight: false,
        },
        {
          name: 'Kafta Méchoui',
          description: "Brochettes de viande de haché au persil et à l'oignon épicé",
          price_cents: 2900,
          is_highlight: false,
        },
        {
          name: 'Grillade Assanabel',
          description: "Trio de brochettes d'agneau, poulet et viande hachée",
          price_cents: 3300,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'main',
      display_label: 'Nos Plats — Viandes Poulet',
      items: [
        {
          name: 'Djaj Méchoui',
          description: 'Demi-poulet désossé, mariné et grillé',
          price_cents: 3100,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'main',
      display_label: 'Nos Plats — Viandes Bœuf',
      items: [
        {
          name: 'Charahat Assanabel',
          description: 'Filet de bœuf au citron et champignons',
          price_cents: 3500,
          is_highlight: true,
        },
        {
          name: 'Chawarma Lahmeh',
          description: 'Lamelles de filet de bœuf marinées',
          price_cents: 3300,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'main',
      display_label: 'Nos Plats — Viandes Agneau',
      items: [
        {
          name: 'Castaletta',
          description: "4 côtes d'agneau assaisonnées et grillées",
          price_cents: 3300,
          is_highlight: false,
        },
        {
          name: 'Kharouf Mehchi',
          description: 'Agneau confit parfumé aux épices douces accompagné de son riz oriental',
          price_cents: 3000,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'main',
      display_label: 'Nos Plats — Poissons',
      items: [
        {
          name: 'Daurade Royale',
          description: 'Daurade grillée',
          price_cents: 2900,
          is_highlight: false,
        },
        {
          name: 'Gambas grillées',
          description: 'Gambas parfumées aux épices',
          price_cents: 4500,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'side',
      display_label: 'Accompagnements',
      items: [
        { name: 'Riz', price_cents: 700, is_highlight: false },
        { name: 'Frites Assanabel', price_cents: 900, is_highlight: false },
        { name: 'Soupe de lentilles', price_cents: 1200, is_highlight: false },
      ],
    },
    {
      category_type: 'dessert',
      display_label: 'Les Desserts de la Maison',
      items: [
        {
          name: 'Karabige',
          description: "Petits fours sablés au cœur de pistache accompagnés d'une crème meringuée",
          price_cents: 1000,
          is_highlight: false,
        },
        {
          name: 'Baklawa mixte',
          description: 'Feuilletés et pâtisseries libanaises',
          price_cents: 1000,
          is_highlight: false,
        },
        {
          name: 'Halawa Bel Jebné',
          description:
            'Rouleaux de fromage garnis de crème de lait avec du sirop de sucre aux éclats de pistaches',
          price_cents: 1100,
          is_highlight: true,
        },
        {
          name: 'Mouhalabieh',
          description: "Flan à la fleur d'oranger au sirop de sucre et éclats de pistache",
          price_cents: 900,
          is_highlight: false,
        },
        {
          name: 'Osmallié',
          description:
            "Cheveux d'ange recouvrant un cœur de crème de lait arrosé de sirop de sucre",
          price_cents: 1100,
          is_highlight: false,
        },
        {
          name: 'Glace',
          description: '2 boules : Rose (à la rose) ou Achta (fleur de lait, crème glacée)',
          price_cents: 900,
          is_highlight: false,
        },
        { name: 'Fruits de saison', price_cents: 2500, is_highlight: false },
        {
          name: 'Le concept des Gourmands',
          description:
            "Dégustation de finesse sucrée à partager (conçu pour l'ensemble de la table)",
          price_cents: 1400,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'alcohol_drink',
      display_label: 'Apéritifs',
      items: [
        {
          name: 'Arak (4cl)',
          description:
            "Apéritif à base de raisin fermenté distillé en eau-de-vie avec des graines d'anis",
          price_cents: 950,
          is_highlight: false,
        },
        { name: 'Arak double (10cl)', price_cents: 1500, is_highlight: false },
        { name: 'Kir Royal (17cl)', price_cents: 1600, is_highlight: false },
        { name: 'Kir Maison (17cl)', price_cents: 1000, is_highlight: false },
        { name: 'Ricard ou Pastis (4cl)', price_cents: 900, is_highlight: false },
        { name: 'Banyuls ou Porto (17cl)', price_cents: 1000, is_highlight: false },
        { name: 'Whisky J&B ou Red Label (4cl)', price_cents: 1300, is_highlight: false },
        {
          name: 'Whisky Black Label ou Chivas Regal (4cl)',
          price_cents: 1500,
          is_highlight: false,
        },
        { name: 'Gin Tonic (25cl)', price_cents: 1400, is_highlight: false },
        { name: 'Martini Gin Tonic (25cl)', price_cents: 1700, is_highlight: false },
        { name: 'Vodka verre (14cl)', price_cents: 1500, is_highlight: false },
        { name: 'Vodka Grey Goose (75cl)', price_cents: 13000, is_highlight: false },
        {
          name: 'Martini (17cl)',
          description: 'Rouge ou Blanc',
          price_cents: 1000,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'alcohol_drink',
      display_label: 'Champagnes',
      items: [
        { name: 'Coupe de Champagne (17cl)', price_cents: 1400, is_highlight: false },
        { name: 'Haton Noble (75cl)', price_cents: 8800, is_highlight: false },
        { name: 'Haton Grand Cru Blanc de Blanc (75cl)', price_cents: 16900, is_highlight: false },
        { name: 'Dom Pérignon (75cl)', price_cents: 44900, is_highlight: false },
      ],
    },
    {
      category_type: 'alcohol_drink',
      display_label: 'Araks',
      items: [
        { name: 'Arak Brun (20cl)', price_cents: 3900, is_highlight: false },
        { name: 'Arak Brun (35cl)', price_cents: 6300, is_highlight: false },
        { name: 'Ksarak (35cl)', price_cents: 6100, is_highlight: false },
        { name: 'Arak Brun (75cl)', price_cents: 16900, is_highlight: false },
        {
          name: 'Arak Brun Spécial Réserve 5 ans (75cl)',
          description: 'Vieilli cinq ans dans des jarres en terre cuite',
          price_cents: 19500,
          is_highlight: true,
        },
      ],
    },
    {
      category_type: 'alcohol_drink',
      display_label: 'Cocktails',
      items: [
        {
          name: 'Cocktail Mojito / Gin Fizz / Piña Colada / Américano (33cl)',
          price_cents: 1400,
          is_highlight: false,
        },
        { name: 'Almaza — Bière libanaise (33cl)', price_cents: 900, is_highlight: false },
      ],
    },
    {
      category_type: 'alcohol_drink',
      display_label: 'Digestifs',
      items: [
        { name: 'Baileys (4cl)', price_cents: 1100, is_highlight: false },
        { name: 'Boukha (4cl)', price_cents: 1300, is_highlight: false },
        { name: 'Calvados (4cl)', price_cents: 1300, is_highlight: false },
        { name: 'Cognac (4cl)', price_cents: 1300, is_highlight: false },
        { name: 'Poire (4cl)', price_cents: 1200, is_highlight: false },
        {
          name: 'Nectar de Kefraya (4cl)',
          description:
            'Liqueur élaborée avec un jus de raisin blanc élevé et vieilli en fûts de chêne',
          price_cents: 1300,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'soft_drink',
      display_label: 'Cocktails sans alcool',
      items: [
        {
          name: 'Cocktail sans alcool (33cl)',
          description:
            'Cocktail aux fruits frais, Virgin Mojito, Virgin Piña Colada, Limonade fraîche',
          price_cents: 1100,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'soft_drink',
      display_label: 'Boissons Fraîches',
      items: [
        { name: 'Limonade (33cl)', price_cents: 800, is_highlight: false },
        {
          name: 'Jus de fruits (25cl)',
          description: 'Orange, ananas, abricot, pomme ou tomate',
          price_cents: 600,
          is_highlight: false,
        },
        { name: "Jus d'orange pressé (33cl)", price_cents: 1000, is_highlight: false },
        {
          name: 'Ayran (33cl)',
          description: 'Boisson lactée libanaise',
          price_cents: 800,
          is_highlight: false,
        },
        {
          name: 'Soda (33cl)',
          description: 'Coca-Cola, Ice Tea, Orangina, Seven Up…',
          price_cents: 800,
          is_highlight: false,
        },
        { name: 'Evian ou Badoit 50cl', price_cents: 500, is_highlight: false },
        { name: 'Evian ou Badoit 100cl', price_cents: 800, is_highlight: false },
        {
          name: 'Jallab (33cl)',
          description: 'Sirop de fruit de mélasse de dattes avec des pignons',
          price_cents: 900,
          is_highlight: false,
        },
      ],
    },
    {
      category_type: 'soft_drink',
      display_label: 'Boissons Chaudes',
      items: [
        { name: 'Café expresso', price_cents: 400, is_highlight: false },
        { name: 'Café libanais', price_cents: 400, is_highlight: false },
        {
          name: 'Café blanc',
          description: "Eau aromatisée à l'eau de fleur d'oranger",
          price_cents: 400,
          is_highlight: false,
        },
        { name: 'Thé nature', price_cents: 400, is_highlight: false },
        { name: 'Thé à la menthe', price_cents: 400, is_highlight: false },
        { name: 'Thé et pignons', price_cents: 500, is_highlight: false },
        { name: 'Verveine', price_cents: 400, is_highlight: false },
      ],
    },
  ],
});

console.log(payload);
