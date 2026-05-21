const { execFileSync } = require('child_process');

const payload = {
  on_mange_quoi_ici: 'Japonais. Pavé de saumon teriyaki & filet de bœuf Simmental.',
  Url_Photos_Menu: [
    'https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/ayako-teppanyaki/Ayako_teppanyaki_.pdf'
  ],
  coffee_price: 2.8,
  cocktail_price: 10,
  wine_glass: 6,
  menu_items: [
    {
      category_type: 'starter',
      display_label: 'Entrées',
      items: [
        { name: 'Tataki de Saumon', price_cents: 1200, description: 'Saumon grillé au chalumeau, éclats de tempura, huile de truffe, sauce yuzu soja.' },
        { name: 'Tataki de Thon', price_cents: 1350, description: 'Thon grillé au chalumeau, éclats de tempura, huile de truffe, sauce yuzu soja.' },
        { name: 'Carpaccio de Poulpe', price_cents: 1350, description: 'Sauce dashi, yuzu kosho, huile d\'olive au basilic et gelée de tosazu.' },
        { name: 'Tataki de Bœuf', price_cents: 1350, description: 'Bœuf grillé émincé, échalotes, purée de wasabi kizami, sauce yuzu.' },
        { name: 'Shake Tartare', price_cents: 1250, description: 'Tartare de saumon frais, sauce anguille, sauce soja au yuzu et avocat.' },
        { name: 'Ceviche', price_cents: 1100, description: 'Salade péruvienne acidulée préparée à la façon japonaise.' },
        { name: 'Kyuri Wakame', price_cents: 600, description: 'Salade d\'algues wakamé et tranches de concombre croquantes, vinaigrette japonaise.' },
        { name: 'Edamame', price_cents: 550, description: 'Cosses de soja vertes cuites à la vapeur et parsemées de sel.' },
        { name: 'Wakame', price_cents: 600, description: 'Salade classique d\'algues vertes assaisonnées.' },
        { name: 'Gyoza', price_cents: 750, description: 'Raviolis japonais frits farcis au poulet et aux légumes (5 pièces).' },
        { name: 'Tempura de Crevette', price_cents: 1050, description: 'Crevettes de Madagascar frites en beignet croustillant, sauce maison.' },
        { name: 'Tofu Grillé', price_cents: 700, description: 'Tofu grillé nappé de sauce teriyaki et mayonnaise épicée, éclats de tempura, bonite séchée.' },
        { name: 'Yasai Tempura', price_cents: 700, description: 'Assortiment de légumes frits en beignet croustillant.' },
        { name: 'Takoyaki', price_cents: 800, description: 'Boulettes de poulpe grillées, mayonnaise japonaise, sauce okonomiyaki et bonite séchée.' },
        { name: 'Karaage', price_cents: 800, description: 'Beignets de poulet frit mariné à la japonaise, sauce sweet garlic.' },
        { name: 'Foie Gras Poêlé (Entrée)', price_cents: 1600, description: 'Foie gras poêlé de qualité extra, servi avec poireaux grillés et sauce teriyaki à la prune ume.' }
      ]
    },
    {
      category_type: 'main',
      display_label: 'Teppanyaki (Grillés sur plaque)',
      items: [
        { name: 'Foie Gras Poêlé Teppanyaki', price_cents: 2850, description: 'Tranche généreuse de foie gras de qualité extra saisie sur plaque teppanyaki.' },
        { name: 'Teppanyaki Daurade', price_cents: 2400, description: 'Filet de daurade grillé à la plaque.' },
        { name: 'Teppanyaki Trio de Poissons', price_cents: 2700, description: 'Assortiment grillé de saumon, thon et daurade.', is_highlight: true },
        { name: 'Teppanyaki Saumon d\'Écosse', price_cents: 2400, description: 'Pavé de saumon d\'Écosse grillé sur plaque chauffante.' },
        { name: 'Teppanyaki Noix de Saint-Jacques', price_cents: 2950, description: 'Noix de Saint-Jacques de Normandie saisies au teppanyaki.', is_highlight: true },
        { name: 'Teppanyaki Gambas Sauvages', price_cents: 2600, description: 'Gambas sauvages saisies sur plaque chauffante.' },
        { name: 'Teppanyaki Filet de Poulet Fermier', price_cents: 2400, description: 'Filet de poulet fermier Label Rouge cuit à basse température puis grillé.' },
        { name: 'Teppanyaki Filet de Bœuf Simmental', price_cents: 2950, description: 'Filet de bœuf Simmental grillé à la plaque (environ 180g).' },
        { name: 'Teppanyaki Entrecôte Angus Argentine', price_cents: 2950, description: 'Entrecôte Angus d\'Argentine grillée au teppanyaki (environ 230g).' },
        { name: 'Teppanyaki Faux Filet Angus Argentine', price_cents: 2500, description: 'Faux-filet Angus d\'Argentine saisi sur plaque chauffante (environ 230g).' },
        { name: 'Teppanyaki Wagyu Australien M8', price_cents: 5500, description: 'Faux-filet de bœuf Wagyu australien d\'exception (environ 200g).' },
        { name: 'Teppanyaki Wagyu A5 de Kagoshima', price_cents: 6500, description: 'Prestigieux bœuf Wagyu A5 du Japon grillé à la plaque (environ 160g).', is_highlight: true }
      ]
    },
    {
      category_type: 'sharing',
      display_label: 'Spécial Rolls & Sushis',
      items: [
        { name: 'Shake Yaki Roll', price_cents: 1550, description: 'Saumon grillé, éclats de tempura, avocat, huile de truffe, sauce mayonnaise épicée et sauce anguille (8 pièces).' },
        { name: 'Hulk Roll', price_cents: 1600, description: 'Anguille grillée, omelette tamago, avocat, masago et sauce anguille (8 pièces).' },
        { name: 'Mango Roll', price_cents: 2050, description: 'Mangue, aneth, foie gras, avocat et sauce mayonnaise épicée (8 pièces).' },
        { name: 'Shake Spicy Roll', price_cents: 1550, description: 'Saumon, avocat, ciboulette, mayonnaise épicée, masago, sauce sriracha, sauce anguille et cream cheese (8 pièces).' },
        { name: 'Anguilles Roll', price_cents: 2050, description: 'Anguille grillée, tempura de crevettes, avocat, bonite séchée et sauce anguille (8 pièces).' }
      ]
    },
    {
      category_type: 'side',
      display_label: 'Accompagnements',
      items: [
        { name: 'Riz sauté à l\'œuf', price_cents: 700, description: 'Riz sauté sur plaque teppanyaki avec œuf et petits légumes.' },
        { name: 'Champignons grillés', price_cents: 700, description: 'Champignons frais saisis sur plaque teppanyaki.' },
        { name: 'Soupe Miso', price_cents: 300, description: 'Soupe traditionnelle de soja fermenté avec tofu et algues.' },
        { name: 'Salade de Choux', price_cents: 300, description: 'Salade croquante de chou blanc émincé.' },
        { name: 'Riz Nature', price_cents: 250, description: 'Bol de riz blanc cuit à la vapeur.' }
      ]
    },
    {
      category_type: 'dessert',
      display_label: 'Desserts',
      items: [
        { name: 'Salade de Fruits', price_cents: 700, description: 'Fruits frais de saison découpés.' },
        { name: 'Mochi Glacé (2 pièces)', price_cents: 750, description: 'Parfums au choix : fraise, yuzu, vanille, mangue, sésame ou pistache.' },
        { name: 'Coupe de glace japonaise', price_cents: 750, description: 'Trois boules : haricot rouge azuki, yuzu et sésame noir.' },
        { name: 'Coupe Fuji', price_cents: 750, description: 'Glace coco, lait concentré sucré et cacahuètes grillées.' },
        { name: 'Daifuku Thé Vert & Chestnut', price_cents: 900, description: 'Pâte de riz moelleuse traditionnelle fourrée à la crème de soja au thé vert et éclats de marron.' },
        { name: 'Baba au Whisky', price_cents: 1050, description: 'Biscuit baba imbibé au whisky japonais Nikka Days, crème chantilly maison.' },
        { name: 'Secret Café', price_cents: 1050, description: 'Entremets chocolat praliné feuillantine, ganache chocolat noisettes, mousse café au chocolat blanc.' },
        { name: 'Cheesecake Yuzu & Spéculoos', price_cents: 900, description: 'Cheesecake parfumé au citron yuzu, coulis de framboise et base spéculoos.' },
        { name: 'Fondant Chocolat au Yuzu', price_cents: 900, description: 'Cœur coulant chocolat aromatisé au yuzu, servi avec une boule de glace vanille.' },
        { name: 'Montblanc Citron', price_cents: 1100, description: 'Crème d\'amande, marron glacé, crème de marron, marmelade citron et chantilly au mascarpone.' },
        { name: 'Poire Williams & Croustillant', price_cents: 900, description: 'Biscuit financier noisette, croustillant caramel au beurre salé, mousse de poire Williams.' }
      ]
    },
    {
      category_type: 'alcohol_drink',
      display_label: 'Sakés & Bières',
      items: [
        { name: 'Saké Sayuri Nigori 300ml', price_cents: 1950, description: 'Saké Hakutsuru non filtré, doux et crémeux, notes de noix et fruits blancs.' },
        { name: 'Saké Junmai Daiginjo 720ml', price_cents: 4700, description: 'Saké Hakutsuru doux et raffiné, texture soyeuse et acidité équilibrée.' },
        { name: 'Saké Daiginjo Muroka Genshu 640ml', price_cents: 5300, description: 'Saké Shirakabegura floral et racé, légère acidité et umami profond.' },
        { name: 'Saké Sparkling Natural 300ml', price_cents: 2500, description: 'Saké Ninki-Ichi Kuro pétillant, notes crémeuses parfum yaourt.' },
        { name: 'Saké Junmai Ginjo 620ml', price_cents: 5300, description: 'Saké Shirakabegura léger et frais, notes florales et minérales.' },
        { name: 'Saké Ryujin Kakushi Ginjo 720ml', price_cents: 5200, description: 'Saké vibrant entre fraîcheur fruitée et texture soyeuse.' },
        { name: 'Saké Dassai 45 Junmai Daiginjo 720ml', price_cents: 5300, description: 'Palette aromatique fraîche et fruitée de melon et poire.' },
        { name: 'Saké Dassai 23 Junmai Daiginjo 720ml', price_cents: 12500, description: 'Saké d\'exception d\'une finesse extrême, arômes riches de fruits mûrs.' },
        { name: 'Saké Mio Sparkling 300ml', price_cents: 2100, description: 'Saké naturellement sucré et finement pétillant, saveurs douces.' },
        { name: 'Saké Fukucho Junmai Genshu 720ml', price_cents: 5300, description: 'Saké léger et frais aux notes citronnées prononcées.' },
        { name: 'Liqueur Yuzu Shu 300ml', price_cents: 2000, description: 'Liqueur de yuzu japonaise, acidulée, douce et fruitée.' },
        { name: 'Tokyo Spritz Plum Wine 720ml', price_cents: 4500, description: 'Vin de prune pétillant aux bulles fines et notes fruitées.' },
        { name: 'Cocktail Yuzu Summer', price_cents: 1000, description: 'Gin, miel de yuzu et jus de litchi.' },
        { name: 'Cocktail Mojito Litchi', price_cents: 1000, description: 'Rhum, menthe fraîche, citron vert, jus de litchi et sucre de canne.' },
        { name: 'Cocktail Ayako Champagne', price_cents: 1000, description: 'Sirop de violette, jus de litchi et champagne.' },
        { name: 'Cocktail Sweet Geisha', price_cents: 1000, description: 'Jus de yuzu, cordial de framboise Belvoir, liqueur d\'abricot et champagne.' },
        { name: 'Cocktail Océane', price_cents: 1000, description: 'Umeshu, vodka, liqueur de curaçao bleu, jus de citron vert.' },
        { name: 'Cocktail Yatomi', price_cents: 1000, description: 'Malibu coco, liqueur de litchi, liqueur de fraise, jus de raisin et citron vert.' },
        { name: 'Kir (10cl)', price_cents: 600, description: 'Crème de cassis, de mûre ou de pêche et vin blanc.' },
        { name: 'Kir Royal (10cl)', price_cents: 1200, description: 'Crème de fruit et champagne.' },
        { name: 'Umeshu Liqueur de Prune (7cl)', price_cents: 750, description: 'Liqueur de prune traditionnelle japonaise sucrée.' },
        { name: 'Coupe de Champagne Nicolas Feuillatte (10cl)', price_cents: 1000 },
        { name: 'Whisky Japonais Nikka (4cl)', price_cents: 1100 },
        { name: 'Whisky Japonais Tottori Bourbon Barrel (4cl)', price_cents: 1100 },
        { name: 'Whisky Japonais Toki (4cl)', price_cents: 1100 },
        { name: 'Whisky Japonais Yamazaki 12 ans (4cl)', price_cents: 2500 },
        { name: 'Bière Asahi 33cl (Bouteille)', price_cents: 600 },
        { name: 'Bière Kirin 33cl (Bouteille)', price_cents: 600 }
      ]
    },
    {
      category_type: 'soft_drink',
      display_label: 'Boissons sans alcool',
      items: [
        { name: 'Bubble Tea Kiwi Litchi', price_cents: 700, description: 'Thé vert au kiwi, jus de litchi et perles de boba.' },
        { name: 'Cocktail Mocktail Shaitama', price_cents: 700, description: 'Jus d\'ananas et litchi, citron, sirop de vanille et cannelle.' },
        { name: 'Coca-Cola (33cl)', price_cents: 550 },
        { name: 'Coca-Cola Zéro (33cl)', price_cents: 550 },
        { name: 'Jus de Fruits (25cl)', price_cents: 550, description: 'Orange, pomme ou litchi.' },
        { name: 'Ice Tea Pêche (25cl)', price_cents: 500 },
        { name: 'Orangina (25cl)', price_cents: 500 },
        { name: 'Limonade Japonaise Ramune (20cl)', price_cents: 550 },
        { name: 'Perrier (33cl)', price_cents: 550 },
        { name: 'Evian (1L)', price_cents: 700 },
        { name: 'Chateldon (75cl)', price_cents: 800 },
        { name: 'Thé Vert Sencha / Genmaicha', price_cents: 400 },
        { name: 'Thé chaud au Yuzu et Miel', price_cents: 400 },
        { name: 'Café Expresso', price_cents: 280 }
      ]
    },
    {
      category_type: 'formula',
      display_label: 'Formules & Menus',
      items: [
        { name: 'Menu Sakura (Midi & Soir)', price_cents: 3350, description: 'Entrée au choix + Plat Teppanyaki (Tofu, Daurade, Saumon, Crevettes, Poulet ou Faux-filet) + Dessert au choix.' },
        { name: 'Menu Asagao (Midi & Soir)', price_cents: 4200, description: 'Entrée au choix + Plat Teppanyaki (Crevettes, St-Jacques, Saumon, Poulet, Entrecôte ou Filet de Bœuf) + Dessert au choix.' },
        { name: 'Menu Ayako (Midi & Soir)', price_cents: 5300, description: 'Entrée froide au choix + Entrée chaude au choix + Plat Teppanyaki (St-Jacques, Crevettes, Trio de Poissons, Filet de Bœuf ou Entrecôte) + Dessert.' }
      ]
    }
  ]
};

try {
  console.log('Ingesting Ayako menu...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--menu', 'ayako-teppanyaki', JSON.stringify(payload)],
    { stdio: 'inherit' }
  );
} catch (e) {
  console.error('Failed to ingest Ayako menu:', e.message);
  process.exit(1);
}
