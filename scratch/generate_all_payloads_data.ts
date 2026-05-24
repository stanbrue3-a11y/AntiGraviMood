import fs from 'fs';
import path from 'path';

const payloads: Record<string, any> = {
  'mosugo-mory-sacko-14': {
    on_mange_quoi_ici: "Cuisine de rue. Mosugo chicken burger & Chicken & waffle.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 3.00,
    wine_glass: null,
    plat_median_cents: 1350,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Frieds",
        items: [
          { name: "Fried Chicken Signature", price_cents: 1050, description: "Poulet frit au panko, sauce Bulldog, épices cajun", is_highlight: true },
          { name: "Fried Plantain", price_cents: 1050, description: "Banane plantain frite au panko, sauce Bulldog, épices cajun", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Burgers & Gaufres",
        items: [
          { name: "Mosugo Chicken Burger", price_cents: 1350, description: "Bun bretzel, poulet frit, mayonnaise miso, emmental, concombre pickles, oignon, spicy sauce", is_highlight: true },
          { name: "Mosugo Veggie Burger", price_cents: 1350, description: "Bun bretzel, butternut frite, mayonnaise miso, emmental, concombre pickles, oignon, spicy sauce", is_highlight: false },
          { name: "Teriyaki Burger", price_cents: 1290, description: "Bun La Petite Alsacienne, poulet frit, sauce teriyaki, sucrine, oignon, mayonnaise miso", is_highlight: false },
          { name: "Chicken & Waffle", price_cents: 1350, description: "Gaufres maison, poulet frit, beurre manié cajun, sauce Bulldog érable, sirop d'érable, pickles", is_highlight: true },
          { name: "Plantain & Waffle", price_cents: 1350, description: "Gaufres maison, banane plantain frite, beurre manié cajun, sauce Bulldog érable, sirop d'érable, pickles", is_highlight: false }
        ]
      },
      {
        category_type: "side",
        display_label: "Accompagnements",
        items: [
          { name: "Frites de patate douce", price_cents: 500, description: "Frites de patate douce, sauce cajun", is_highlight: false },
          { name: "Sucrine grillée", price_cents: 500, description: "Sucrine grillée, sweet vinaigrette", is_highlight: false },
          { name: "Pommes de terre grenaille", price_cents: 500, description: "Grenailles aux épices cajun, mayonnaise spicy", is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Brookie", price_cents: 450, description: "Chocolat de Tanzanie, baie de Selim, caramel miso", is_highlight: false },
          { name: "Fruit du moment", price_cents: 450, description: "Façon pavlova au fruit du moment, yaourt grec citronné, menthe", is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons sans alcool",
        items: [
          { name: "Bissap maison", price_cents: 450, description: "Infusion d'hibiscus originaire d'Afrique de l'Ouest, parfumée a la menthe et aux épices", is_highlight: false },
          { name: "Gingembre maison", price_cents: 450, description: "Jus de gingembre, inspiré du Gnemakoudj d'Afrique de l'Ouest", is_highlight: false },
          { name: "Soft (33cl)", price_cents: 450, description: "Coca-Cola / Coca-Cola Zéro / Fuze Tea / Limonade", is_highlight: false },
          { name: "Eau", price_cents: 350, description: "Plate ou Gazeuse (33cl)", is_highlight: false },
          { name: "Thés et infusions", price_cents: 450, description: "Selection de thés et infusions de la marque l'Infuseur", is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons alcoolisées",
        items: [
          { name: "Vin Canetta (18,7cl)", price_cents: 800, description: "Blanc / Rouge / Rose", is_highlight: false },
          { name: "Bière blonde Asahi (33cl)", price_cents: 500, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Menu Burger", price_cents: 2150, description: "Burger + Accompagnement + Boisson", is_highlight: false },
          { name: "Menu Waffle", price_cents: 2150, description: "Chicken/Plantain & Waffle + Accompagnement + Boisson", is_highlight: false },
          { name: "Menu Big", price_cents: 3150, description: "Burger + Fried + Accompagnement + Boisson", is_highlight: true }
        ]
      }
    ]
  },
  'mosuke-par-mory-sacko': {
    on_mange_quoi_ici: "Cuisine gastronomique. Menu Migration & Menu Vol de nuit.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: null,
    menu_items: [
      {
        category_type: "formula",
        display_label: "Menus Dégustation",
        items: [
          { name: "Menu Migration - Au déjeuner", price_cents: 14500, description: "Service en 15 séquences mariant les influences africaines, japonaises et françaises. Déclinable en version végétarienne. Proposé au déjeuner de 12h à 14h.", is_highlight: true },
          { name: "Menu Vol de nuit - Au dîner", price_cents: 25500, description: "Service en 25 séquences mariant les influences africaines, japonaises et françaises. Déclinable en version végétarienne. Proposé au dîner de 19h à 21h45.", is_highlight: true }
        ]
      }
    ]
  },
  'mr-chow-cuisine-chinoise': {
    on_mange_quoi_ici: "Cuisine chinoise. Biang Biang beef noodles & Xiao long bao.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 1450,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Xiao Chi & Dim Sum",
        items: [
          { name: "Fresh Mushroom Salad", price_cents: 750, description: "Champignons frais de saison, sauce ail-soja-sésame, chili oil maison, cébette, coriandre", is_highlight: false },
          { name: "Smashed Cucumbers", price_cents: 450, description: "Concombres, citron, ail, huile de sésame, coriandre, chili oil maison", is_highlight: false },
          { name: "Cold Sichuan Chicken", price_cents: 750, description: "Haut de cuisse de poulet mariné au gingembre, sauce soja, chili oil maison", is_highlight: false },
          { name: "Wontons aux crevettes (x5)", price_cents: 850, description: "Frits (avec spicy mayo) ou Pochés (avec chili oil maison)", is_highlight: false },
          { name: "Baozis (x3)", price_cents: 700, description: "Classique au porc ou Veggie", is_highlight: false },
          { name: "Xiao Long Bao (x5)", price_cents: 950, description: "Raviolis vapeurs au porc, cébette, gingembre, chou chinois, hot bouillon", is_highlight: true },
          { name: "Shui Jiao (x6)", price_cents: 850, description: "Porc fermier ou Poulet mariné avec gingembre, chili oil maison, cacahuètes", is_highlight: false },
          { name: "Sheng Jian Bao (x4)", price_cents: 950, description: "Raviolis semi-briochés grillés au porc, cébette, gingembre, chou chinois, hot bouillon", is_highlight: false },
          { name: "Wu Gok Pork-Taro (x3)", price_cents: 850, description: "Raviolis frits à base de farine de riz gluant, taro, porc mariné, champignons", is_highlight: false },
          { name: "Crystal Veggie Dumplings (x5)", price_cents: 850, description: "Raviolis vapeur à la farine de froment, champignons shiitakés, maïs, coriandre", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Specials & Noodles",
        items: [
          { name: "Aubergines Hong Shao", price_cents: 1250, description: "Aubergines tigrées fondantes, sauce maison soja vinaigre noir, oignons frits", is_highlight: false },
          { name: "Popcorn Fried Chicken", price_cents: 1300, description: "Poulet frit mariné au buttermilk, spicy mayo maison, popcorn", is_highlight: false },
          { name: "Spicy Fried Chicken", price_cents: 1450, description: "Poulet frit mariné pimpé avec une sauce épicée au Gochujiang", is_highlight: false },
          { name: "Shrimp Toasts", price_cents: 1350, description: "Fried gua bao maison, à la crevette, sésame noir et blanc, spicy mayo", is_highlight: false },
          { name: "Biang Biang Beef Noodles", price_cents: 1450, description: "Nouilles fraîches biang biang, bœuf braisé à la taïwanaise, sésame, coriandre", is_highlight: true },
          { name: "Taiwanese Beef Noodle Soup", price_cents: 1450, description: "Nouilles fraîches, bœuf braisé à la taïwanaise, pak choï, coriandre, bouillon maison", is_highlight: false },
          { name: "Biang Biang Noodles Porc Grillé", price_cents: 1450, description: "Nouilles fraîches biang biang, porc rôti puis grillé, concombres frais, pickles, sauce soja sésame, cacahuètes", is_highlight: false },
          { name: "Biang Biang Noodles Agneau Confit", price_cents: 1550, description: "Nouilles fraîches biang biang, épaule d’agneau confite 4h, sauce soja cumin, coriandre", is_highlight: true },
          { name: "Biang Biang Chicken Noodles", price_cents: 1400, description: "Nouilles fraîches biang biang, haut de cuisse de poulet braisé et mariné au gingembre, sésame, coriandre", is_highlight: false },
          { name: "Creamy Dandan Noodles", price_cents: 1450, description: "Nouilles fraîches biang biang, porc haché sauté, champignons parfumés, crème de sésame, cacahuètes", is_highlight: false },
          { name: "Veggie Noodles", price_cents: 1350, description: "Nouilles fraîches biang biang, aubergines chinoises, champignons shiitakés", is_highlight: false },
          { name: "Cold Mango Noodles", price_cents: 1450, description: "Nouilles de patate douce froides, mangues fraîches, concombres, carottes, sauce citron sésame", is_highlight: false }
        ]
      },
      {
        category_type: "side",
        display_label: "Accompagnements",
        items: [
          { name: "Riz blanc", price_cents: 350, description: "Riz blanc, cébette, sésame", is_highlight: false },
          { name: "Yu Choy Sum", price_cents: 500, description: "Légumes verts HK style, sauce huître, huile à l'ail", is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mochi glacé", price_cents: 650, description: "Pâte à mochi, boule de glace artisanale de chez Reÿs", is_highlight: false },
          { name: "Mochis peanuts sésame noir (x2)", price_cents: 500, description: "Servis chauds. Pâte de riz gluant, crème cacahuète, sésame noir, noix de coco", is_highlight: false },
          { name: "Mango Sago", price_cents: 600, description: "Lait de coco, perles de tapioca, mangue fraîche, zeste de citron vert", is_highlight: false },
          { name: "Bao sucré", price_cents: 500, description: "Liu Sha Bao (crème œufs) ou Bao choco noisette (gianduja)", is_highlight: false }
        ]
      }
    ]
  },
  'mr-chow-paris-14': {
    on_mange_quoi_ici: "Cuisine chinoise. Biang Biang beef noodles & Xiao long bao.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 1450,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Xiao Chi & Dim Sum",
        items: [
          { name: "Fresh Mushroom Salad", price_cents: 750, description: "Champignons frais de saison, sauce ail-soja-sésame, chili oil maison, cébette, coriandre", is_highlight: false },
          { name: "Smashed Cucumbers", price_cents: 450, description: "Concombres, citron, ail, huile de sésame, coriandre, chili oil maison", is_highlight: false },
          { name: "Cold Sichuan Chicken", price_cents: 750, description: "Haut de cuisse de poulet mariné au gingembre, sauce soja, chili oil maison", is_highlight: false },
          { name: "Wontons aux crevettes (x5)", price_cents: 850, description: "Frits (avec spicy mayo) ou Pochés (avec chili oil maison)", is_highlight: false },
          { name: "Baozis (x3)", price_cents: 700, description: "Classique au porc ou Veggie", is_highlight: false },
          { name: "Xiao Long Bao (x5)", price_cents: 950, description: "Raviolis vapeurs au porc, cébette, gingembre, chou chinois, hot bouillon", is_highlight: true },
          { name: "Shui Jiao (x6)", price_cents: 850, description: "Porc fermier ou Poulet mariné avec gingembre, chili oil maison, cacahuètes", is_highlight: false },
          { name: "Sheng Jian Bao (x4)", price_cents: 950, description: "Raviolis semi-briochés grillés au porc, cébette, gingembre, chou chinois, hot bouillon", is_highlight: false },
          { name: "Wu Gok Pork-Taro (x3)", price_cents: 850, description: "Raviolis frits à base de farine de riz gluant, taro, porc mariné, champignons", is_highlight: false },
          { name: "Crystal Veggie Dumplings (x5)", price_cents: 850, description: "Raviolis vapeur à la farine de froment, champignons shiitakés, maïs, coriandre", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Specials & Noodles",
        items: [
          { name: "Aubergines Hong Shao", price_cents: 1250, description: "Aubergines tigrées fondantes, sauce maison soja vinaigre noir, oignons frits", is_highlight: false },
          { name: "Popcorn Fried Chicken", price_cents: 1300, description: "Poulet frit mariné au buttermilk, spicy mayo maison, popcorn", is_highlight: false },
          { name: "Spicy Fried Chicken", price_cents: 1450, description: "Poulet frit mariné pimpé avec une sauce épicée au Gochujiang", is_highlight: false },
          { name: "Shrimp Toasts", price_cents: 1350, description: "Fried gua bao maison, à la crevette, sésame noir et blanc, spicy mayo", is_highlight: false },
          { name: "Biang Biang Beef Noodles", price_cents: 1450, description: "Nouilles fraîches biang biang, bœuf braisé à la taïwanaise, sésame, coriandre", is_highlight: true },
          { name: "Taiwanese Beef Noodle Soup", price_cents: 1450, description: "Nouilles fraîches, bœuf braisé à la taïwanaise, pak choï, coriandre, bouillon maison", is_highlight: false },
          { name: "Biang Biang Noodles Porc Grillé", price_cents: 1450, description: "Nouilles fraîches biang biang, porc rôti puis grillé, concombres frais, pickles, sauce soja sésame, cacahuètes", is_highlight: false },
          { name: "Biang Biang Noodles Agneau Confit", price_cents: 1550, description: "Nouilles fraîches biang biang, épaule d’agneau confite 4h, sauce soja cumin, coriandre", is_highlight: true },
          { name: "Biang Biang Chicken Noodles", price_cents: 1400, description: "Nouilles fraîches biang biang, haut de cuisse de poulet braisé et mariné au gingembre, sésame, coriandre", is_highlight: false },
          { name: "Creamy Dandan Noodles", price_cents: 1450, description: "Nouilles fraîches biang biang, porc haché sauté, champignons parfumés, crème de sésame, cacahuètes", is_highlight: false },
          { name: "Veggie Noodles", price_cents: 1350, description: "Nouilles fraîches biang biang, aubergines chinoises, champignons shiitakés", is_highlight: false },
          { name: "Cold Mango Noodles", price_cents: 1450, description: "Nouilles de patate douce froides, mangues fraîches, concombres, carottes, sauce citron sésame", is_highlight: false }
        ]
      },
      {
        category_type: "side",
        display_label: "Accompagnements",
        items: [
          { name: "Riz blanc", price_cents: 350, description: "Riz blanc, cébette, sésame", is_highlight: false },
          { name: "Yu Choy Sum", price_cents: 500, description: "Légumes verts HK style, sauce huître, huile à l'ail", is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mochi glacé", price_cents: 650, description: "Pâte à mochi, boule de glace artisanale de chez Reÿs", is_highlight: false },
          { name: "Mochis peanuts sésame noir (x2)", price_cents: 500, description: "Servis chauds. Pâte de riz gluant, crème cacahuète, sésame noir, noix de coco", is_highlight: false },
          { name: "Mango Sago", price_cents: 600, description: "Lait de coco, perles de tapioca, mangue fraîche, zeste de citron vert", is_highlight: false },
          { name: "Bao sucré", price_cents: 500, description: "Liu Sha Bao (crème œufs) ou Bao choco noisette (gianduja)", is_highlight: false }
        ]
      }
    ]
  },
  'oggi': {
    on_mange_quoi_ici: "Cuisine italienne. Pizza Margherita & Piadina romagnola.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 1500,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Antipasti",
        items: [
          { name: "Antipasti mozzarella", price_cents: 1000, description: "Assortiment de légumes grillés, mozzarella di bufala campana", is_highlight: false },
          { name: "Antipasti Parm", price_cents: 1100, description: "Assortiment de légumes grillés, jambon de Parme", is_highlight: false },
          { name: "Salumi misti", price_cents: 1000, description: "Assortiment de charcuteries italiennes (coppa, bresaola...)", is_highlight: false },
          { name: "Mozzarella di bufala campana", price_cents: 900, description: "Roquette, tomates cerises", is_highlight: false },
          { name: "Mozzarella burrata pugliese", price_cents: 1500, description: "Burrata des Pouilles, roquette, tomates cerises", is_highlight: true },
          { name: "Zucchine e ricotta", price_cents: 1000, description: "Courgettes, ricotta, basilic", is_highlight: false },
          { name: "Parma e mozzarella di bufala campana", price_cents: 1100, description: "Jambon de Parme, mozzarella di bufala, roquette, tomates cerises", is_highlight: false },
          { name: "Poivrons marines", price_cents: 1000, description: "Poivrons marinés, ricotta, pesto", is_highlight: false },
          { name: "Aubergine parmigiana", price_cents: 900, is_highlight: false },
          { name: "Artichauts au parmesan", price_cents: 1700, is_highlight: false },
          { name: "Bresaola", price_cents: 1200, description: "Bresaola italienne, roquette, parmesan", is_highlight: false },
          { name: "Roquette parmesan", price_cents: 800, is_highlight: false },
          { name: "Insalata di tonno", price_cents: 1500, description: "Roquette, thon, câpres, parmesan, tomates cerises, olives faggiasca", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizze & Piadine",
        items: [
          { name: "Marinara", price_cents: 1100, description: "Sauce tomate, ail, origan", is_highlight: false },
          { name: "Margherita", price_cents: 1200, description: "Sauce tomate, mozzarella, basilic", is_highlight: false },
          { name: "Bufala", price_cents: 1500, description: "Sauce tomate, mozzarella di bufala campana, tomates cerises", is_highlight: false },
          { name: "Bufala e parma", price_cents: 1700, description: "Sauce tomate, mozzarella di bufala campana, jambon de Parme, tomates cerises", is_highlight: true },
          { name: "Burrata", price_cents: 1800, description: "Sauce tomate, mozzarella burrata pugliese, basilic, tomates cerises", is_highlight: true },
          { name: "Ricotta", price_cents: 1500, description: "Sauce tomate, mozzarella, ricotta, basilic", is_highlight: false },
          { name: "Regina", price_cents: 1400, description: "Sauce tomate, mozzarella, jambon blanc, champignons", is_highlight: false },
          { name: "Napoli", price_cents: 1300, description: "Sauce tomate, mozzarella, anchois, olives taggiasca, câpres", is_highlight: false },
          { name: "Stagione con", price_cents: 1400, description: "Sauce tomate, mozzarella, jambon blanc, artichaut, champignons, olives taggiasca", is_highlight: false },
          { name: "Parma", price_cents: 1500, description: "Sauce tomate, mozzarella, jambon de Parme", is_highlight: false },
          { name: "Formaggi", price_cents: 1400, description: "Sauce tomate, mozzarella, pecorino, ricotta, gorgonzola", is_highlight: false },
          { name: "Rustica", price_cents: 1500, description: "Sauce tomate, mozzarella, coppa, pecorino", is_highlight: false },
          { name: "Siciliana", price_cents: 1100, description: "Sauce tomate, câpres, olives", is_highlight: false },
          { name: "Rucola", price_cents: 1200, description: "Sauce tomate, mozzarella, bresaola, roquette, parmesan", is_highlight: false },
          { name: "Calzone", price_cents: 1500, description: "Sauce tomate, mozzarella, jambon blanc, œuf", is_highlight: false },
          { name: "Calabrese", price_cents: 1400, description: "Sauce tomate, mozzarella, saucisse piquante", is_highlight: false },
          { name: "Bianca", price_cents: 1600, description: "Crème fraîche, mozzarella, jambon de Parme, champignons", is_highlight: false },
          { name: "Cabrera", price_cents: 1400, description: "Crème fraîche, mozzarella, thon, oignon rouge", is_highlight: false },
          { name: "Verduri", price_cents: 1700, description: "Sauce tomate, courgette, aubergine, poivron", is_highlight: false },
          { name: "Verduri e bufala", price_cents: 1600, description: "Sauce tomate, courgette, aubergine, poivron, mozzarella di bufala campana", is_highlight: false },
          { name: "Nordique", price_cents: 1900, description: "Crème fraîche, mozzarella, saumon fumé", is_highlight: false },
          { name: "Tartufo", price_cents: 1500, description: "Crème fraîche, crème de truffe noire, champignons, roquette, parmesan", is_highlight: false },
          { name: "Piadina romagnola", price_cents: 1500, description: "Pâte finement étirée et refermée, ricotta, jambon de Parme, tomate fraîche, roquette, parmesan", is_highlight: false },
          { name: "Piadina tartufo", price_cents: 1800, description: "Pâte finement étirée et refermée, ricotta, champignons, crème de truffe", is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Dolci",
        items: [
          { name: "Panna cotta", price_cents: 650, description: "Coulis de fruits rouges ou caramel", is_highlight: false },
          { name: "Tiramisu della casa", price_cents: 650, is_highlight: true },
          { name: "Baba au rhum", price_cents: 650, is_highlight: false },
          { name: "Moelleux au chocolat", price_cents: 650, is_highlight: false }
        ]
      }
    ]
  }
};

const targetSlugs = Object.keys(payloads);

// We will write another script to output remaining 7 payloads so we don't hit size limits or do it in chunks.
// Write first 6 payloads
targetSlugs.forEach(slug => {
  const p = path.join(__dirname, `${slug}_payload.json`);
  if (fs.existsSync(p)) {
    const existing = JSON.parse(fs.readFileSync(p, 'utf8'));
    const combined = {
      ...existing,
      ...payloads[slug]
    };
    fs.writeFileSync(p, JSON.stringify(combined, null, 2), 'utf8');
    console.log(`Updated first batch payload: ${p}`);
  }
});
