import fs from 'fs';
import path from 'path';

const payloads: Record<string, any> = {
  'les-petits-parisiens-paris-14': {
    on_mange_quoi_ici: "Cuisine bistronomique. Œuf mayonnaise au kasu & Poulpe grillé/laqué.",
    pint_price: null,
    cocktail_price: 12.00,
    coffee_price: 3.50,
    wine_glass: 10.00,
    plat_median_cents: 3600,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Œuf mayonnaise au kasu & sapin", price_cents: 1100, description: "Finaliste du championnat du monde de l’œuf mayonnaise 2025", is_highlight: true },
          { name: "Asperges vertes de Provence", price_cents: 1900, description: "Poutargue & ail des ours & jaune d'oeuf confit", is_highlight: false },
          { name: "Ravioles de Brocciu, noix & noisettes", price_cents: 1200, description: "Bouillon de cosses de petits pois, olive/miso", is_highlight: false },
          { name: "Sashimi de sériole ikejime marinée", price_cents: 2100, description: "Ponzu & condiment d'ail noir", is_highlight: false },
          { name: "Foie gras de canard IGP du Sud-Ouest", price_cents: 2100, description: "Condiment passion/café", is_highlight: false },
          { name: "Œuf parfait à la turque", price_cents: 1100, description: "Pickles de légumes", is_highlight: false },
          { name: "Salade de chou vinaigré", price_cents: 1100, description: "Sésame & orange confite", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Poulpe grillé/laqué", price_cents: 3600, description: "Cresson, oseille & fraises", is_highlight: true },
          { name: "Maigre de ligne au miso de sureau", price_cents: 2900, description: "Poireaux brûlés, nage de céleri", is_highlight: false },
          { name: "Volaille Culoiselle au vin jaune & morilles", price_cents: 5000, is_highlight: false },
          { name: "Bœuf AOP Fin Gras du Mézenc", price_cents: 3800, description: "Sauce cacao & angélique, gratin de PDT à la sauge", is_highlight: true },
          { name: "Pomme de ris de veau", price_cents: 4900, description: "Purée fumée, sabayon à la feuille de figue", is_highlight: false },
          { name: "Lieu confit au poivre des cimes", price_cents: 2100, description: "Crème de petits pois & légumes de saison", is_highlight: false },
          { name: "Filets de caille", price_cents: 2100, description: "Crème d’artichaut, tétragones sautés & champignons eryngii", is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Fromages",
        items: [
          { name: "Assiette de fromages affinés", price_cents: 1200, is_highlight: false },
          { name: "Crémeux aux agrumes", price_cents: 1400, description: "Saké & flouve odorante, sorbet mandarine", is_highlight: false },
          { name: "Notre fameux riz au lait à la vanille", price_cents: 1100, description: "Fruits à coques, caramel au beurre salé", is_highlight: true },
          { name: "Chocolat 70% Mayan Red", price_cents: 1500, description: "Crémeux au thé matcha, framboise pépins", is_highlight: false },
          { name: "Glaces & sorbets maison", price_cents: 1200, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons alcoolisées & Cocktails",
        items: [
          { name: "Espresso Martini", price_cents: 1200, description: "Vodka & liqueur de café", is_highlight: false },
          { name: "Cosmopolitan", price_cents: 1400, description: "Vodka, liqueur d’orange, jus de cranberry", is_highlight: false },
          { name: "Meletti Apéritivo Spritz", price_cents: 1300, is_highlight: false },
          { name: "Verre de vin (15cl)", price_cents: 1000, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Menu Dégustation (5 services)", price_cents: 6900, description: "Menu en cinq services idéal pour découvrir toute la cuisine du chef", is_highlight: false }
        ]
      }
    ]
  },
  'ma-shi-ta': {
    on_mange_quoi_ici: "Cuisine coréenne. Yukhoe bibimbap & So bol jjim.",
    pint_price: 9.00,
    cocktail_price: 12.00,
    coffee_price: 3.50,
    wine_glass: 5.00,
    plat_median_cents: 2000,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Tartare de boeuf charolais", price_cents: 1500, description: "Au couteau avec prune verte au piment, œuf cru, fleur de sel", is_highlight: false },
          { name: "Bojagi Japchae (Petit)", price_cents: 900, description: "Nouilles de patate douce sautées sauce soja et sésame", is_highlight: false },
          { name: "Gamtae Jumeokbap", price_cents: 1000, description: "3 petites boules de riz avec ecklonia cava", is_highlight: false },
          { name: "Saewoo Jatjeub Muchim", price_cents: 1000, description: "Salade de crevettes, concombres et racine de lotus (été)", is_highlight: false },
          { name: "Dak Gangjeong (Petit)", price_cents: 900, description: "Poulet frit à la sauce au choix (piquante, soja, ou sel/poivre)", is_highlight: false },
          { name: "Haemul Pajeon", price_cents: 1600, description: "Crêpe coréenne aux fruits de mer (hiver)", is_highlight: false },
          { name: "Aubergine et racine de lotus frite", price_cents: 1000, is_highlight: false },
          { name: "Mandoo au poulet et légumes", price_cents: 900, description: "5 raviolis au poulet et légumes, sauce aigre-douce", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Yukhoe Bibimbap", price_cents: 2500, description: "Bibimbap au tartare de bœuf charolais/limousin au couteau, œuf, légumes sautés", is_highlight: true },
          { name: "So Bol Jjim", price_cents: 2500, description: "Joue de bœuf fondante mijotée lentement, interprétation coréenne du bœuf bourguignon", is_highlight: true },
          { name: "Maekjeok (Porc grillé)", price_cents: 2400, description: "Échine de porc assaisonnée à la pâte de soja de Muryangsu", is_highlight: false },
          { name: "Ibérique Jeyuk Bokkeum", price_cents: 2000, description: "Échine de porc ibérique tranchée, sauce pimentée, légumes", is_highlight: false },
          { name: "Bibimbap Végétarien", price_cents: 2000, description: "Riz blanc et noir, œuf, carottes, pousses de soja, courgettes, navets sautés", is_highlight: false },
          { name: "Gomtang", price_cents: 1800, description: "Bouillon clair de bœuf longuement mijoté", is_highlight: false },
          { name: "Sundubu Jjigae", price_cents: 2000, description: "Ragoût de tofu moelleux bouilli au porc, sauce épicée, légumes, œuf cru", is_highlight: false },
          { name: "Jjimdak", price_cents: 1800, description: "Morceaux de poulet braisé à la sauce soja et légumes", is_highlight: false },
          { name: "Udon froid aux crevettes frites", price_cents: 1700, description: "Udon froid avec sauce maison soja ou piquante (été)", is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Trou Séoul", price_cents: 1300, description: "Premium soju servi avec glace vanille et yuzu", is_highlight: false },
          { name: "Assortiment de 2 petits desserts", price_cents: 900, description: "Desserts coréens par un artiste de la Royal Food Culture Foundation", is_highlight: false },
          { name: "Tiramisu au sésame noir", price_cents: 800, description: "Revisité par Sayuri Nakao", is_highlight: true },
          { name: "Bingsu", price_cents: 1000, description: "Glace pilée au lait et lait concentré (été)", is_highlight: false },
          { name: "Madeleine artisanale + boisson", price_cents: 800, description: "Thé vert ou sésame noir, servie avec café ou thé", is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons alcoolisées",
        items: [
          { name: "Bière Cass (50cl)", price_cents: 900, is_highlight: false },
          { name: "Soju Highball", price_cents: 1200, is_highlight: false },
          { name: "Bokbunja Cocktail", price_cents: 1200, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Formule Midi (Entrée + Plat)", price_cents: 1800, is_highlight: false },
          { name: "Formule Midi (Entrée + Plat + Dessert)", price_cents: 2200, is_highlight: false }
        ]
      }
    ]
  },
  'madame-ngo': {
    on_mange_quoi_ici: "Cuisine vietnamienne. Bo Bun & Canard grillé à la sauce tamarin.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 1800,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Salade de mangue au Tofu", price_cents: 890, is_highlight: false },
          { name: "Salade de mangue aux Crevettes", price_cents: 1090, is_highlight: false },
          { name: "Soupe au lait de coco (Tofu)", price_cents: 1000, is_highlight: false },
          { name: "Crepe de lune croustillante", price_cents: 1090, is_highlight: false },
          { name: "Banh Xep", price_cents: 990, description: "Paté chaud vietnamien, taro, champignon noir, crevettes", is_highlight: false },
          { name: "Nems au porc ou poulet (4 pcs)", price_cents: 900, is_highlight: false },
          { name: "Wow Poulet", price_cents: 990, description: "Poulet frit croustillant, cheddar, mayonnaise épicée", is_highlight: false },
          { name: "Raviolis frits aux crevettes", price_cents: 1000, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Bo Bun Tofu", price_cents: 1650, is_highlight: false },
          { name: "Bo Bun Poulet ou Boeuf", price_cents: 1750, is_highlight: true },
          { name: "Bo Bun Crevettes", price_cents: 1850, is_highlight: false },
          { name: "Canard grillé sauce tamarin", price_cents: 2000, is_highlight: true },
          { name: "Poulet fermier sauce gingembre", price_cents: 1900, is_highlight: false },
          { name: "Porc caramélisé aux cinq épices", price_cents: 1850, is_highlight: false },
          { name: "Riz sauté royal aux trois trésors", price_cents: 1850, is_highlight: false },
          { name: "Mi Xao Tofu", price_cents: 1650, is_highlight: false },
          { name: "Mi Xao Poulet / Boeuf", price_cents: 1750, is_highlight: false },
          { name: "Mi Xao Poulet pané", price_cents: 1850, is_highlight: false },
          { name: "Mi Xao Crevettes / Canard", price_cents: 2050, is_highlight: false },
          { name: "Curry Rouge Tofu", price_cents: 1550, is_highlight: false },
          { name: "Curry Rouge Poulet", price_cents: 1650, is_highlight: false },
          { name: "Curry Rouge Boeuf", price_cents: 1750, is_highlight: false },
          { name: "Curry Rouge Crevettes", price_cents: 1850, is_highlight: false },
          { name: "Curry Rouge Canard", price_cents: 2050, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Perles de tapioca à la mangue", price_cents: 800, is_highlight: false },
          { name: "Banh Da Lon", price_cents: 800, description: "Gâteau de pandan, taro et riz vert", is_highlight: false },
          { name: "Perles de coco au gingembre", price_cents: 800, is_highlight: false },
          { name: "Tiramisu au Matcha", price_cents: 800, is_highlight: true }
        ]
      }
    ]
  },
  'maison-peret': {
    on_mange_quoi_ici: "Cuisine de brasserie. Cuisse de canard fermier & Saucisse fraîche de cochon.",
    pint_price: 8.20,
    cocktail_price: 12.00,
    coffee_price: 2.90,
    wine_glass: 5.00,
    plat_median_cents: 2050,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Assiette de saucisson d'Auvergne", price_cents: 1300, is_highlight: false },
          { name: "Œufs durs mayonnaise", price_cents: 850, is_highlight: false },
          { name: "Terrine de pâté de foie", price_cents: 1100, is_highlight: false },
          { name: "Filet de harengs J.-C. David", price_cents: 1200, is_highlight: false },
          { name: "Chèvre chaud Rocamadour (x2)", price_cents: 1200, is_highlight: false },
          { name: "Escargots Géants de Bourgogne (x6)", price_cents: 1500, is_highlight: true },
          { name: "Foie gras de canard du Gers", price_cents: 2100, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats & Terroir",
        items: [
          { name: "Salade Végétale aux légumes tièdes", price_cents: 1800, is_highlight: false },
          { name: "Salade Rustique au Bleu d'Auvergne", price_cents: 1800, is_highlight: false },
          { name: "Salade Césarine au poulet fermier", price_cents: 1900, is_highlight: false },
          { name: "Salade Labaskar au jambon de Pays", price_cents: 1900, is_highlight: false },
          { name: "Saucisson chaud lyonnais pistaché", price_cents: 2000, is_highlight: false },
          { name: "Saucisse fraîche de cochon du Perche", price_cents: 2100, is_highlight: true },
          { name: "Poitrine de cochon fermier de l'Aveyron", price_cents: 2300, is_highlight: false },
          { name: "Cuisse de canard fermier confite 24h", price_cents: 2400, is_highlight: true },
          { name: "Steak haché Aubrac frites", price_cents: 1900, is_highlight: false },
          { name: "Burger Cantalou au bacon", price_cents: 2100, is_highlight: false },
          { name: "Tartare de bœuf Aubrac", price_cents: 2200, is_highlight: false },
          { name: "Bœuf Aubrac braisé au Minervois", price_cents: 2500, is_highlight: false }
        ]
      },
      {
        category_type: "sharing",
        display_label: "À Partager",
        items: [
          { name: "L’Ardoise de Saint-Urcize (Charcuteries & Fromages)", price_cents: 3200, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Assortiment de fromages d'Auvergne", price_cents: 1100, is_highlight: false },
          { name: "Crème brûlée à la vanille", price_cents: 1100, is_highlight: false },
          { name: "Crumble aux pommes", price_cents: 1300, is_highlight: false },
          { name: "Café Gourmand Berthillon", price_cents: 1300, is_highlight: false },
          { name: "Dessert du jour", price_cents: 1100, is_highlight: false },
          { name: "Crêpes au sucre (x2)", price_cents: 600, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons alcoolisées & Cocktails",
        items: [
          { name: "Pinte Tuborg blonde pression (47cl)", price_cents: 820, is_highlight: false },
          { name: "Pinte Grimbergen blanche (47cl)", price_cents: 1000, is_highlight: false },
          { name: "Spritz-Aperol", price_cents: 1200, is_highlight: false },
          { name: "Pornstar Martini", price_cents: 1200, is_highlight: false },
          { name: "Verre de Touraine Sauvignon (15cl)", price_cents: 500, is_highlight: false },
          { name: "Verre de Bourgueil rouge (15cl)", price_cents: 600, is_highlight: false }
        ]
      }
    ]
  }
};

const targetSlugs = Object.keys(payloads);

targetSlugs.forEach(slug => {
  const p = path.join(__dirname, `${slug}_payload.json`);
  if (fs.existsSync(p)) {
    const existing = JSON.parse(fs.readFileSync(p, 'utf8'));
    const combined = {
      ...existing,
      ...payloads[slug]
    };
    fs.writeFileSync(p, JSON.stringify(combined, null, 2), 'utf8');
    console.log(`Updated third batch payload: ${p}`);
  }
});
