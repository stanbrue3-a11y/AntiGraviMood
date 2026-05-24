import fs from 'fs';
import path from 'path';

const payloads: Record<string, any> = {
  'les-tontons': {
    on_mange_quoi_ici: "Cuisine de bistrot. Cassoulet artisanal & Confit de canard maison.",
    pint_price: 6.90,
    cocktail_price: null,
    coffee_price: 2.00,
    wine_glass: 4.20,
    plat_median_cents: 1750,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Escargots x6", price_cents: 800, is_highlight: false },
          { name: "Soupe à l'oignon gratinée", price_cents: 750, is_highlight: false },
          { name: "Assiette de serrano", price_cents: 800, is_highlight: false },
          { name: "Terrine de campagne", price_cents: 750, is_highlight: false },
          { name: "Salade chevre chaud et magret fumé", price_cents: 850, is_highlight: false },
          { name: "Salade d'écrevisses et crevettes marinées", price_cents: 850, is_highlight: false },
          { name: "Assiette de charcuterie (1 pers)", price_cents: 800, is_highlight: false },
          { name: "Assiette de charcuterie (2 pers)", price_cents: 1390, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats, Burgers & Salades",
        items: [
          { name: "Penne aux écrevisses", price_cents: 1650, is_highlight: false },
          { name: "Penne à la Provençale gratinées", price_cents: 1350, is_highlight: false },
          { name: "Cassoulet artisanal", price_cents: 1850, is_highlight: true },
          { name: "Confit de canard maison, pommes sarladaises", price_cents: 1690, is_highlight: true },
          { name: "Quiche maison salade", price_cents: 1550, is_highlight: false },
          { name: "Travers de porc sauce miel", price_cents: 1650, is_highlight: false },
          { name: "Steak de magret, sauce aux cèpes", price_cents: 1790, is_highlight: false },
          { name: "Magret façon Rossini", price_cents: 2090, is_highlight: false },
          { name: "Magret sauce au miel", price_cents: 1790, is_highlight: false },
          { name: "Pièce du boucher du chef", price_cents: 1790, is_highlight: false },
          { name: "Filet de poulet, crème Normande", price_cents: 1590, is_highlight: false },
          { name: "Pavé de saumon à l'oseille", price_cents: 1790, is_highlight: false },
          { name: "Souris d'agneau avec purée maison", price_cents: 1990, is_highlight: false },
          { name: "Entrecôte 300g, frites, salade", price_cents: 2290, is_highlight: false },
          { name: "Le Burger Tradi (au cheddar)", price_cents: 1550, is_highlight: false },
          { name: "L'Auverpin (au cantal)", price_cents: 1800, is_highlight: false },
          { name: "Le Josébeauburger (au roquefort)", price_cents: 1900, is_highlight: false },
          { name: "Le Burger foie gras", price_cents: 2150, is_highlight: false },
          { name: "Le Bacon Burger (au cheddar)", price_cents: 1650, is_highlight: false },
          { name: "Le Burger végétarien", price_cents: 1550, is_highlight: false },
          { name: "Salade Parisienne", price_cents: 1450, is_highlight: false },
          { name: "Salade Bergère", price_cents: 1750, is_highlight: false },
          { name: "Salade Océane", price_cents: 1750, is_highlight: false },
          { name: "Salade des Tontons", price_cents: 1890, is_highlight: false },
          { name: "Assiette des Tontons", price_cents: 1750, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Café gourmand", price_cents: 950, is_highlight: false },
          { name: "Panacotta coulis de fruits rouges", price_cents: 700, is_highlight: false },
          { name: "Crème brûlée", price_cents: 900, is_highlight: false },
          { name: "Mousse au chocolat", price_cents: 700, is_highlight: false },
          { name: "Tiramisu maison", price_cents: 800, is_highlight: false },
          { name: "Assiette de fromage", price_cents: 850, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons sans alcool",
        items: [
          { name: "Coca Cola (33cl)", price_cents: 350, is_highlight: false },
          { name: "Schweppes (33cl)", price_cents: 290, is_highlight: false },
          { name: "Perrier (33cl)", price_cents: 290, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons alcoolisées",
        items: [
          { name: "Pinte Météor (50cl)", price_cents: 690, is_highlight: false },
          { name: "Pinte Carlsberg (50cl)", price_cents: 950, is_highlight: false },
          { name: "Verre de vin (12cl)", price_cents: 420, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Apéro Gourmand", price_cents: 1590, description: "Foie gras, saucisse sèche, terrine et confit d'oignons", is_highlight: false }
        ]
      }
    ]
  },
  'les-fauves-restaurant': {
    on_mange_quoi_ici: "Cuisine de bistrot. Cheeseburger des Fauves & Pot-au-feu de la mer.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 2000,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Couteaux de mer à la braise", price_cents: 1100, description: "Couteaux de mer cuits à la braise, huile verte au ponzu, gingembre confit", is_highlight: false },
          { name: "Ceviche de truite", price_cents: 1100, description: "Leche de tigre coco, fleur de sel timut, zeste de citron vert, avocat, ananas confit", is_highlight: true },
          { name: "Oeufs à la coque façon mimosa", price_cents: 700, is_highlight: false },
          { name: "Burrata crémeuse & poires rôties", price_cents: 1300, is_highlight: false },
          { name: "Velouté de panais", price_cents: 900, is_highlight: false },
          { name: "Poireaux cuits au four à braise", price_cents: 900, is_highlight: false },
          { name: "Rillettes de poisson", price_cents: 800, is_highlight: false },
          { name: "Foie gras de canard mi-cuit", price_cents: 1900, is_highlight: false }
        ]
      },
      {
        category_type: "sharing",
        display_label: "À Partager",
        items: [
          { name: "Assiette de Mezze", price_cents: 2000, is_highlight: false },
          { name: "Planche Mixte", price_cents: 1900, is_highlight: false },
          { name: "Assortiment de fromages fermiers", price_cents: 1700, is_highlight: false },
          { name: "Assortiment de charcuterie", price_cents: 1800, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats & Salades",
        items: [
          { name: "Cheeseburger des Fauves", price_cents: 2000, description: "Steak haché de bœuf grillé, cheddar, mozzarella, compotée d’oignons, pickles, frites maison", is_highlight: true },
          { name: "Suprême de poulet grillé", price_cents: 2200, description: "Suprême grillé au four à braise, mousseline de patates douces fumées", is_highlight: false },
          { name: "Côte de cochon marinée", price_cents: 2600, is_highlight: false },
          { name: "Steak de tofu rôti (Végétarienne)", price_cents: 2000, is_highlight: false },
          { name: "Pot-au-feu de la mer", price_cents: 2500, description: "Saumon, palourdes, crevettes, légumes de saison glacés, bouillon combava", is_highlight: true },
          { name: "Demi Magret de canard", price_cents: 2600, is_highlight: false },
          { name: "Pull Pork Burger", price_cents: 1900, is_highlight: false },
          { name: "Poelée de Saint-Jacques", price_cents: 2700, is_highlight: false },
          { name: "Salade Caesar", price_cents: 1600, is_highlight: false },
          { name: "Salade Supernature", price_cents: 1700, is_highlight: false },
          { name: "Salade Mekong", price_cents: 1700, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Fromages",
        items: [
          { name: "Fondant chocolat et cacahuète", price_cents: 1200, is_highlight: false },
          { name: "Mont-Blanc", price_cents: 1200, is_highlight: false },
          { name: "Tarte au citron", price_cents: 900, is_highlight: false },
          { name: "Salade de fruits", price_cents: 800, is_highlight: false },
          { name: "Cheesecake au citron", price_cents: 800, is_highlight: false },
          { name: "Tiramisu au mascarpone & café", price_cents: 800, is_highlight: false },
          { name: "Portion de fromage affiné", price_cents: 700, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Brunch classique", price_cents: 3400, is_highlight: false },
          { name: "Brunch avec Prosecco", price_cents: 2900, is_highlight: false },
          { name: "Formule Petit-Déjeuner Express", price_cents: 850, is_highlight: false }
        ]
      }
    ]
  },
  'mian-fan': {
    on_mange_quoi_ici: "Cuisine asiatique. Bo buon & Sha shao porc ibérique.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 1375,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Dim Sum & Entrées",
        items: [
          { name: "Chicken Dim Sum (x5)", price_cents: 700, is_highlight: false },
          { name: "Dim Sum Laqué (x5)", price_cents: 1100, is_highlight: false },
          { name: "Beef Dim Sum (x5)", price_cents: 800, is_highlight: false },
          { name: "Dim Sum Santé Veggie (x5)", price_cents: 800, is_highlight: false },
          { name: "Gyoza Japonais Porc (x5)", price_cents: 700, is_highlight: false },
          { name: "Banh Bao de Madame Li (x5)", price_cents: 1100, is_highlight: false },
          { name: "Duck Dim Sum (x5)", price_cents: 800, is_highlight: false },
          { name: "Edamame", price_cents: 1200, is_highlight: false },
          { name: "Raviolis Crevettes Frits", price_cents: 1200, is_highlight: false },
          { name: "Nems au poulet", price_cents: 1100, is_highlight: false },
          { name: "Nems légumes vegan", price_cents: 1200, is_highlight: false },
          { name: "Som Tam (Salade papaye)", price_cents: 1400, is_highlight: false },
          { name: "Yam Neus Nam Tok (Salade boeuf)", price_cents: 1400, is_highlight: false },
          { name: "Tako Sensai (Salade poulpe)", price_cents: 1680, is_highlight: false },
          { name: "Sashimi de Saumon", price_cents: 1800, is_highlight: false },
          { name: "Tartare de Saumon et mangue", price_cents: 1500, is_highlight: false },
          { name: "Tartare d'avocat au crabe", price_cents: 2200, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Principaux & Woks",
        items: [
          { name: "Sha Sao Soup", price_cents: 1680, description: "Soupe de nouilles Soba, choux pak choï, filet mignon de porc ibérique laqué", is_highlight: false },
          { name: "Duck's Soup", price_cents: 1800, description: "Soupe de nouilles Udon, choux pak choï, magret de canard laqué", is_highlight: false },
          { name: "Yaya (Canard laqué au miel)", price_cents: 1500, is_highlight: false },
          { name: "Sha Shao (Porc laqué au miel)", price_cents: 2200, is_highlight: true },
          { name: "Duck's (Magret laqué à rouler)", price_cents: 2400, is_highlight: false },
          { name: "Yun Tun Mian", price_cents: 1180, is_highlight: false },
          { name: "Bo Buon (Boeuf / Poulet / Vegan)", price_cents: 1200, is_highlight: true },
          { name: "Zha Jiang Mian", price_cents: 1200, is_highlight: false },
          { name: "Spicy Pai Fan", price_cents: 1200, is_highlight: false },
          { name: "Jipai Mian", price_cents: 1300, is_highlight: false },
          { name: "Le Tartare Thaï", price_cents: 1600, is_highlight: false },
          { name: "Xia façon Mian Fan", price_cents: 1600, is_highlight: false },
          { name: "Le Bibimbap", price_cents: 1600, is_highlight: false },
          { name: "Mi Zhi Mian Fan (Wok)", price_cents: 1100, is_highlight: false },
          { name: "Shu Cai Chao Mian (Wok Veggie)", price_cents: 1100, is_highlight: false },
          { name: "Ji Pai Fan (Wok)", price_cents: 1080, is_highlight: false },
          { name: "Double Wok", price_cents: 1280, is_highlight: false },
          { name: "Veggie Wok", price_cents: 1280, is_highlight: false },
          { name: "Udonguo Mian", price_cents: 1580, is_highlight: false },
          { name: "Hai Xian Fan", price_cents: 1450, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Coupelle de litchis", price_cents: 600, is_highlight: false },
          { name: "Cheesecake coulis framboise", price_cents: 700, is_highlight: false },
          { name: "Moelleux au chocolat", price_cents: 700, is_highlight: false },
          { name: "Tarte au citron meringuée", price_cents: 700, is_highlight: false },
          { name: "Salade de fruits frais", price_cents: 700, is_highlight: false },
          { name: "Crumble pommes fruits rouges", price_cents: 700, is_highlight: false },
          { name: "Café gourmand cookie", price_cents: 900, is_highlight: false },
          { name: "Mangue fraîche entière", price_cents: 1000, is_highlight: false }
        ]
      }
    ]
  },
  'maison-binder': {
    on_mange_quoi_ici: "Cuisine de bistrot. Asperges vertes grillées & Dahl de lentilles vertes.",
    pint_price: 8.50,
    cocktail_price: 10.00,
    coffee_price: 2.50,
    wine_glass: 7.50,
    plat_median_cents: 1600,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Asperges vertes grillées", price_cents: 950, description: "Gel orange, tuile sarrasin, huile verte, aneth", is_highlight: true },
          { name: "L'artichaut entier sauce gribiche", price_cents: 950, description: "Artichaut entier, sauce gribiche, algue nori, ciboulette", is_highlight: false },
          { name: "Sucrine braisée crème de tahini", price_cents: 900, description: "Persillade au piment d'Espelette, oxalys", is_highlight: false },
          { name: "Ricotta citron, fraises et petit pois", price_cents: 900, description: "Tuiles de fraises, fraises confites, petit pois frais", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Dahl de lentilles vertes", price_cents: 1750, description: "Blettes, pois chiche, noix au paprika fumé, naan & zeste de citron", is_highlight: true },
          { name: "Salade radicchio au roquefort", price_cents: 1550, description: "Endives, poire, roquefort, amandes caramélisées, sauce orange", is_highlight: false },
          { name: "Aïoli à l'ail des ours", price_cents: 1550, description: "Oeufs durs, ail grillé, carottes rôties, fenouil cru, pommes grenailles", is_highlight: false },
          { name: "Burger patate douce & grenailles", price_cents: 1650, description: "Bun boulanger, patate douce laquée miel, chèvre, roquette, asperges vertes", is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mousse au chocolat", price_cents: 750, description: "Chocolat, piment d'Espelette, fleur de sel", is_highlight: false },
          { name: "Blanc manger coco", price_cents: 850, description: "Crème de coco, fécule de maïs & rhubarbe", is_highlight: false },
          { name: "Pavlova du moment", price_cents: 950, description: "Pavlova, fruits de saison", is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons sans alcool",
        items: [
          { name: "Citronnade bio maison", price_cents: 450, is_highlight: false },
          { name: "Ginger Beer UMA", price_cents: 550, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons alcoolisées",
        items: [
          { name: "Pinte IPA Citra Galactique (50cl)", price_cents: 850, is_highlight: false },
          { name: "Expresso Martini", price_cents: 1000, is_highlight: false },
          { name: "Poire Tonic", price_cents: 1000, is_highlight: false },
          { name: "Verre de vin", price_cents: 750, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Formule Unique Dimanche", price_cents: 2600, is_highlight: false }
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
    console.log(`Updated second batch payload: ${p}`);
  }
});
