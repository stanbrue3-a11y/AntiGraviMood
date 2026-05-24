import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const payloads: Record<string, any> = {
  'pny-gaite': {
    on_mange_quoi_ici: "Cuisine de rue. Vintage Cheeseburger & Sunday BBQ burger.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 2.50,
    wine_glass: null,
    plat_median_cents: 1390,
    menu_items: [
      {
        category_type: "starter",
        display_label: "À Partager",
        items: [
          { name: "Jalapeño Poppers (x6)", price_cents: 750, description: "Boules de fromage frites avec une pointe de piment jalapeño", is_highlight: false },
          { name: "Fresh Avocado & Chips", price_cents: 690, description: "Chips de tortillas de maïs croustillantes, guacamole maison aux piments", is_highlight: false },
          { name: "Onion Rings (x6)", price_cents: 550, description: "Rondelles d'oignons frites faites minute, sauce Sunday BBQ", is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Burgers",
        items: [
          { name: "Vintage Cheeseburger", price_cents: 1190, description: "Bœuf PNY, cheddar affiné, ketchup, moutarde, pickles, salade iceberg, oignon rouge", is_highlight: true },
          { name: "Jucy Lucy", price_cents: 1490, description: "Steak PNY fourré au cheddar coulant, sauce Minneapolis, oignons grillés et pickles", is_highlight: true },
          { name: "Crispy Burger", price_cents: 1350, description: "Poulet frit mariné au gingembre, cheddar affiné, mayonnaise au paprika", is_highlight: false },
          { name: "The Return of the Cowboy", price_cents: 1450, description: "Bœuf PNY, cheddar affiné, onion ring, bacon fumé, oignons caramélisés, sauce Sunday BBQ", is_highlight: true },
          { name: "Tribute", price_cents: 1390, description: "Bun sésame, bœuf PNY, American cheese, cheddar affiné, sauce maison, oignons, pickles, salade iceberg", is_highlight: false },
          { name: "Morning California", price_cents: 1450, description: "Bœuf PNY, cheddar affiné, guacamole maison, mayonnaise sriracha, salade iceberg", is_highlight: false },
          { name: "Smoky Blue", price_cents: 1390, description: "Bœuf PNY, fromage Blue Stilton, bacon croustillant, salade iceberg, oignons caramélisés", is_highlight: false },
          { name: "Atomic Veggie", price_cents: 1350, description: "Champignon Portobello pané au panko, cheddar affiné, sauce secrète PNY, oignon rouge, salade iceberg", is_highlight: false },
          { name: "Vegan Nirvana", price_cents: 1390, description: "Steak végétal Redefine Meat, bun vegan, cheddar vegan, ketchup, moutarde, salade iceberg, oignon rouge, pickles", is_highlight: false },
          { name: "XXL Tribute", price_cents: 1980, description: "Bun sésame, bœuf PNY de 250g, American cheese, cheddar affiné, oignons, pickles, sauce maison, salade iceberg", is_highlight: false }
        ]
      },
      {
        category_type: "side",
        display_label: "Accompagnements",
        items: [
          { name: "French Fries", price_cents: 490, description: "Frites shoestring faites maison", is_highlight: false },
          { name: "Sweet Potatoes", price_cents: 590, description: "Frites de patate douce shoestring faites maison", is_highlight: false },
          { name: "Reloaded Fries", price_cents: 650, description: "Frites maison nappées de cheddar fondu affiné 18 mois, sauce Minneapolis, oignons grillés", is_highlight: true },
          { name: "Loaded Fries", price_cents: 690, description: "Frites maison nappées de cheddar fondu affiné 18 mois, éclats de bacon croustillant", is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Cookie Skillet", price_cents: 950, description: "Cookie aux pépites de chocolat chaud et peanuts grillées, servi dans sa poêle avec glace vanille", is_highlight: true },
          { name: "Le Cheesecake", price_cents: 890, description: "Servi avec un coulis de fruits rouges", is_highlight: false },
          { name: "Crumble à la Mode", price_cents: 890, description: "Pommes tendres à la cannelle, servi chaud avec glace vanille artisanale", is_highlight: false },
          { name: "Blackout Chocolate Cake", price_cents: 750, description: "Gâteau au chocolat maison, pépites de chocolat, sauce chocolat et chantilly", is_highlight: false },
          { name: "Giant Devil Profiterole", price_cents: 1250, description: "Chou géant maison, crème fouettée, chocolat fondu, glace vanille artisanale (pour deux)", is_highlight: false }
        ]
      }
    ]
  },
  'poincon': {
    on_mange_quoi_ici: "Cuisine de bistrot. Rumsteck d'agneau & Focaccia à l'ail noir.",
    pint_price: 7.50,
    cocktail_price: 12.00,
    coffee_price: 2.30,
    wine_glass: 6.00,
    plat_median_cents: 2400,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Tapas & Entrées",
        items: [
          { name: "Houmous de petits pois à la menthe", price_cents: 800, is_highlight: false },
          { name: "Burrata & condiment tomates séchées piquillos et gingembre", price_cents: 1200, is_highlight: false },
          { name: "Asperges blanches, condiment rhubarbe, sarrasin croquant", price_cents: 1300, is_highlight: false },
          { name: "Focaccia à l'ail noir, thym, ricotta et compotée de pommes", price_cents: 1100, is_highlight: true },
          { name: "Flan chorizo, maroilles, tomates séchées, jalapenos", price_cents: 900, is_highlight: false },
          { name: "Sardine au chalumeau, poivrons rôtis, gel de basilic", price_cents: 900, is_highlight: false },
          { name: "Raviole ouverte, farce aux légumes, sauce hoisin à l'orange", price_cents: 1000, is_highlight: false },
          { name: "Crudo de daurade, fenouil croquant, vinaigrette carotte citron", price_cents: 1500, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Rumsteck d'agneau, jus aux épices, pois chiches grillés, carottes glacées", price_cents: 2600, is_highlight: true },
          { name: "Filet d'omble chevalier, purée PDT épinards, beurre blanc rhubarbe et sauge", price_cents: 2400, is_highlight: true },
          { name: "Risotto à la crème de roquefort, fenouil grillé, huile d'aneth", price_cents: 2000, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Chou Paris Quimper, chantilly tonka, amandes effilées", price_cents: 800, is_highlight: false },
          { name: "Premières fraises, pomelo, lemon curd, sablé breton", price_cents: 800, is_highlight: false },
          { name: "Ossau Iraty 24 mois, confiture de fruits rouges", price_cents: 800, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Bières & Cidre",
        items: [
          { name: "Pinte Tuborg pression 50cl", price_cents: 750, is_highlight: false },
          { name: "Pinte 1664 Blanche pression 50cl", price_cents: 900, is_highlight: false },
          { name: "Pinte Brooklyn IPA pression 50cl", price_cents: 1050, is_highlight: false },
          { name: "Cidre Extra Brut Appie 33cl", price_cents: 600, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Formule Midi (Entrée + Plat ou Plat + Dessert)", price_cents: 2200, is_highlight: false },
          { name: "Formule Midi (Entrée + Plat + Dessert)", price_cents: 2600, is_highlight: false },
          { name: "Formule Brunch Adulte (Reservations et concert live)", price_cents: 3700, is_highlight: true }
        ]
      }
    ]
  },
  'ramen-wang-take-away-ramen': {
    on_mange_quoi_ici: "Cuisine japonaise. Tonkutsu ramen & Tori shoyu ramen.",
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
          { name: "Gyoza poulet (6p)", price_cents: 800, is_highlight: false },
          { name: "Gyoza légumes (6p)", price_cents: 800, is_highlight: false },
          { name: "Ebi Fry (crevettes panées 3p)", price_cents: 900, is_highlight: false },
          { name: "Poulet Crispy (filet de poulet frit 5p)", price_cents: 1100, is_highlight: true },
          { name: "Gua bao au poulet", price_cents: 600, is_highlight: false },
          { name: "Gua bao crevette", price_cents: 650, is_highlight: false },
          { name: "Gua bao vegan (aubergine chinoise gratinée)", price_cents: 650, is_highlight: false },
          { name: "Takoyaki au poulpe (6p)", price_cents: 900, is_highlight: false },
          { name: "Edamame", price_cents: 500, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Nos Ramens",
        items: [
          { name: "Tonkutsu ramen (bouillon porc mijoté 12h)", price_cents: 1500, is_highlight: true },
          { name: "Tori Shoyu ramen (bouillon poulet)", price_cents: 1600, is_highlight: true },
          { name: "Tori Shio ramen (bouillon poulet)", price_cents: 1600, is_highlight: false },
          { name: "Pai tan Aka ramen (bouillon porc)", price_cents: 2000, is_highlight: false },
          { name: "Pai tan Kuro ramen (bouillon porc)", price_cents: 2000, is_highlight: false },
          { name: "Vegan ramen (bouillon lait de soja)", price_cents: 2000, is_highlight: false },
          { name: "Aka poulet teriyaki ramen", price_cents: 2200, is_highlight: false },
          { name: "Kuro poulet teriyaki ramen", price_cents: 2200, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Daifuku Mochi (sésame noir / fraise / thé vert / yuzu)", price_cents: 300, is_highlight: false },
          { name: "Pancake fourré (haricot rouge / yuzu / thé vert)", price_cents: 300, is_highlight: false },
          { name: "Dango Hanami (3 couleurs, 2 brochettes)", price_cents: 300, is_highlight: false }
        ]
      }
    ]
  },
  'restaurant-14-juillet': {
    on_mange_quoi_ici: "Cuisine de bistrot. Bœuf bourguignon & Épaule d'agneau confite.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: 6.50,
    plat_median_cents: 1800,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Croustillant de chèvre frais (menthe, miel)", price_cents: 900, is_highlight: false },
          { name: "Assiette de Couteaux en persillade", price_cents: 900, is_highlight: true },
          { name: "Saumon cru mariné façon Gravlax", price_cents: 900, is_highlight: false },
          { name: "Assiette de Terrine maison", price_cents: 700, is_highlight: false },
          { name: "Os à moelle, pain grillé", price_cents: 1200, is_highlight: false },
          { name: "Tartare de Haddock, pommes vertes, betterave", price_cents: 900, is_highlight: false },
          { name: "Filet de harengs à l'huile, pommes tièdes", price_cents: 900, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Tête de veau, sauce balsamique, purée maison", price_cents: 1800, is_highlight: false },
          { name: "Supions poêlés, pommes grenailles", price_cents: 1800, is_highlight: true },
          { name: "Escalope de veau Normande, frites maison", price_cents: 1900, is_highlight: false },
          { name: "Pièce de boucher, sauce poivre, frites maison", price_cents: 1900, is_highlight: false },
          { name: "Bœuf bourguignon, purée maison", price_cents: 1800, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Fromages",
        items: [
          { name: "La Profiterole au chocolat chaud", price_cents: 700, is_highlight: true },
          { name: "Le pot de tiramisu", price_cents: 700, is_highlight: false },
          { name: "La crème brûlée au cointreau", price_cents: 700, is_highlight: false },
          { name: "Liégeois aux fruits rouges", price_cents: 700, is_highlight: false },
          { name: "La pomme grand-mère", price_cents: 700, is_highlight: false },
          { name: "Le fondant au chocolat", price_cents: 700, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Formule Midi en semaine (Entrée + Plat ou Plat + Dessert)", price_cents: 1800, is_highlight: false }
        ]
      }
    ]
  },
  'restaurant-a-mi-chemin-paris-14-eme': {
    on_mange_quoi_ici: "Cuisine de bistrot. Couscous Royal & Mloukhiya de bœuf.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: 7.00,
    plat_median_cents: 3300,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Kémia au zahtar", price_cents: 1000, is_highlight: false },
          { name: "Chakchouka aux merguez", price_cents: 1400, is_highlight: true },
          { name: "Œuf mayonnaise à la boutargue", price_cents: 1000, is_highlight: false },
          { name: "Saint-Jacques rôties dans leur coquille, châtaignes, clémentines", price_cents: 2000, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Couscous Royal agneau confit, boulette de veau de lait et merguez (Hugo Desnoyer)", price_cents: 3800, is_highlight: true },
          { name: "Couscous Royal poulet jaune, boulette de veau de lait et merguez", price_cents: 3400, is_highlight: false },
          { name: "Couscous Royal boulettes de veau de lait et merguez", price_cents: 3000, is_highlight: false },
          { name: "Couscous Royal légumes et boulette végétale aux herbes", price_cents: 3000, is_highlight: false },
          { name: "Couscous de la mer aux coquilles Saint-Jacques", price_cents: 3800, is_highlight: true },
          { name: "Couscous de la mer au poulpe", price_cents: 3400, is_highlight: false },
          { name: "Couscous de poisson au Maigre", price_cents: 3200, is_highlight: false },
          { name: "Tajine de la mer à la seiche", price_cents: 3000, is_highlight: false },
          { name: "Tajine de boulettes de veau de lait", price_cents: 2800, is_highlight: false },
          { name: "Mloukhiya au paleron de bœuf mijotée toute la journée", price_cents: 3600, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Sélection de pâtisseries orientales", price_cents: 1100, is_highlight: false },
          { name: "Profiterole chocolat Guanaja", price_cents: 1100, is_highlight: false },
          { name: "Poire pochée à la fleur d'hibiscus", price_cents: 1100, is_highlight: false },
          { name: "Crème légère à la fleur d'oranger, pistaches concassées", price_cents: 1100, is_highlight: true },
          { name: "Sorbet pamplemousse et glace au thym, amandes", price_cents: 1100, is_highlight: false }
        ]
      }
    ]
  },
  'restaurant-aiyara': {
    on_mange_quoi_ici: "Cuisine thaïlandaise. Pad thaï au poulet & Curry massaman de bœuf.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 3.00,
    wine_glass: null,
    plat_median_cents: 1900,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Pompia (4 nems au poulet / légumes / porc)", price_cents: 900, is_highlight: false },
          { name: "Samosa de légumes frits (x3)", price_cents: 900, is_highlight: false },
          { name: "Tomyam Kung (Soupe de crevettes, citronnelle, tomates)", price_cents: 1400, is_highlight: true },
          { name: "Tomkha Kai (Soupe de poulet au lait de coco, tomates)", price_cents: 1400, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Pad See Ew (Large nouilles sautées aux crevettes et œuf)", price_cents: 1900, is_highlight: false },
          { name: "Pad Kee Mao (Large nouilles sautées au bœuf)", price_cents: 1900, is_highlight: false },
          { name: "Pad Thaï au poulet", price_cents: 1700, is_highlight: true },
          { name: "Curry Massaman de bœuf au lait de coco, pommes de terre", price_cents: 1900, is_highlight: true },
          { name: "Poulet sauté aux légumes sauce maison (Pad Horapha)", price_cents: 1900, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Glace coco maison au riz gluant (I-Tim Boxan)", price_cents: 1000, is_highlight: false },
          { name: "Riz gluant à la mangue (Kao Niew Mamuang)", price_cents: 1000, is_highlight: true },
          { name: "Perles de tapioca au lait de coco (Saku Piek)", price_cents: 500, is_highlight: false },
          { name: "Boules de riz coco caramélisées au sucre de palme (Khanom Tom)", price_cents: 700, is_highlight: false }
        ]
      }
    ]
  },
  'restaurant-korean-barbecue': {
    on_mange_quoi_ici: "Cuisine coréenne. Barbecue de côte de bœuf & Dolsot-bibimbap.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 4.00,
    wine_glass: null,
    plat_median_cents: 2400,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Gyoza grillés (3 pièces)", price_cents: 600, is_highlight: false },
          { name: "Gyoza grillés (6 pièces)", price_cents: 1000, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Grillades & Menus",
        items: [
          { name: "Menu Midi A (Gyoza x3 + Barbecue Bœuf 100g + Riz)", price_cents: 1900, is_highlight: false },
          { name: "Menu Midi B (Gyoza x3 + Barbecue Bœuf 100g + Dolsot-Bibimbap)", price_cents: 2400, is_highlight: true },
          { name: "Menu Midi C (Gyoza x6 + Barbecue Bœuf + Riz)", price_cents: 2100, is_highlight: false },
          { name: "Menu Midi D (Gyoza x6 + Barbecue Bœuf + Dolsot-Bibimbap)", price_cents: 2600, is_highlight: false },
          { name: "Menu Soir E (Gyoza x4 + Barbecue Bœuf + Riz)", price_cents: 2300, is_highlight: false },
          { name: "Menu Soir F (Gyoza x4 + Barbecue Bœuf + Dolsot-Bibimbap)", price_cents: 2800, is_highlight: true },
          { name: "Menu Soir G (Gyoza x6 + Barbecue Bœuf + Riz)", price_cents: 2500, is_highlight: false },
          { name: "Menu Soir H (Gyoza x6 + Barbecue Bœuf + Dolsot-Bibimbap)", price_cents: 3000, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Matcha Roll Cake (Pancake japonais roulé au thé vert et Azuki)", price_cents: 600, is_highlight: true },
          { name: "Beignet de banane flambé au Grand Marnier", price_cents: 1200, is_highlight: false },
          { name: "Mangue fraîche", price_cents: 600, is_highlight: false },
          { name: "Glace au sésame noir", price_cents: 600, is_highlight: false },
          { name: "Glace au thé vert (Macha)", price_cents: 600, is_highlight: false }
        ]
      }
    ]
  },
  'pizzeria-i-briganti': {
    on_mange_quoi_ici: "Cuisine italienne. Pizza Margarita & Burrata di parma.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 2.00,
    wine_glass: 5.00,
    plat_median_cents: 1250,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Salades",
        items: [
          { name: "Pain aux herbes et persillade", price_cents: 250, is_highlight: false },
          { name: "Pain aux herbes, persillade et mozzarella", price_cents: 300, is_highlight: false },
          { name: "Burrata à l'huile d'olive & olives de Ligurie", price_cents: 650, is_highlight: false },
          { name: "Salade végétarienne (olives, artichauts, parmesan)", price_cents: 1000, is_highlight: false },
          { name: "Burrata de parma (burrata, parme, parmesan, olives)", price_cents: 1150, is_highlight: true }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizze & Pâtes",
        items: [
          { name: "Pizza Margarita (sauce tomate, mozzarella)", price_cents: 890, is_highlight: false },
          { name: "Pizza Napolitaine (sauce tomate, mozzarella, tomates cerises, basilic)", price_cents: 1150, is_highlight: false },
          { name: "Pizza Reine (sauce tomate, mozzarella, jambon, champignons)", price_cents: 1150, is_highlight: false },
          { name: "Pizza Chèvre miel (sauce tomate, mozzarella, chèvre, miel)", price_cents: 1150, is_highlight: false },
          { name: "Pizza Charcutière (sauce tomate, mozzarella, jambon, soubressade)", price_cents: 1250, is_highlight: false },
          { name: "Pizza Végétarienne", price_cents: 1250, is_highlight: false },
          { name: "Pizza Burrata di parma", price_cents: 1390, is_highlight: true },
          { name: "Pizza de Talia (crème, mozzarella, poulet, raclette, oignons)", price_cents: 1290, is_highlight: false },
          { name: "Pizza Savoyarde (crème, mozzarella, PDT, oignons, parme)", price_cents: 1290, is_highlight: false },
          { name: "Pizza Truffe (crème, mozzarella, crème de truffe, champignons, parmesan)", price_cents: 1390, is_highlight: true },
          { name: "Pâtes Arabiata (sauce tomate, basilic, piment)", price_cents: 890, is_highlight: false },
          { name: "Pâtes Carbonara", price_cents: 990, is_highlight: false },
          { name: "Pâtes à la Truffe", price_cents: 1150, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Tiramisu maison", price_cents: 400, is_highlight: true },
          { name: "Panna cotta", price_cents: 400, is_highlight: false }
        ]
      }
    ]
  }
};

async function run() {
  for (const slug of Object.keys(payloads)) {
    console.log(`Writing payload template for ${slug}...`);
    
    // Fetch current Url_Photos_Menu from Supabase
    const { data: place, error: fetchErr } = await supabase
      .from('places')
      .select('Url_Photos_Menu')
      .eq('slug', slug)
      .single();
      
    if (fetchErr || !place) {
      console.error(`Failed to fetch Url_Photos_Menu for ${slug}:`, fetchErr);
      continue;
    }
    
    let urls: string[] = [];
    if (typeof place.Url_Photos_Menu === 'string') {
      try {
        urls = JSON.parse(place.Url_Photos_Menu);
      } catch {
        urls = [place.Url_Photos_Menu];
      }
    } else if (Array.isArray(place.Url_Photos_Menu)) {
      urls = place.Url_Photos_Menu;
    }
    
    const payload = payloads[slug];
    payload.Url_Photos_Menu = urls;
    
    const destPath = path.join(__dirname, `../scratch/${slug}_payload.json`);
    fs.writeFileSync(destPath, JSON.stringify(payload, null, 2), 'utf8');
    console.log(`Successfully generated: ${destPath}`);
  }
}

run();
