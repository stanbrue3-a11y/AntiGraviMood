import { createClient } from '@supabase/supabase-js';
import path from 'path';
import fs from 'fs';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const menuSpecs: Record<string, any> = {
  'la-coupole': {
    on_mange_quoi_ici: "Cuisine de brasserie. Curry d'agneau à l'indienne & Choucroute de la mer.",
    pint_price: 9.50,
    cocktail_price: 12.50,
    coffee_price: 3.50,
    wine_glass: 6.50,
    plat_median_cents: 2750,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Oeufs mayonnaise de La Coupole", price_cents: 850, is_highlight: false },
          { name: "Ravioles du Dauphiné", price_cents: 950, is_highlight: false },
          { name: "Soupe à l'oignon gratinée à la parisienne", price_cents: 1150, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Choucroute Strasbourgeoise", price_cents: 2450, is_highlight: false },
          { name: "Choucroute de La Coupole", price_cents: 2950, is_highlight: false },
          { name: "Choucroute de la mer", price_cents: 3150, is_highlight: true },
          { name: "Andouillette AAAAA", price_cents: 1950, is_highlight: false },
          { name: "Suprême de volaille française aux morilles", price_cents: 2350, is_highlight: false },
          { name: "Curry d'agneau à l'indienne servi depuis 1927", price_cents: 2950, is_highlight: true },
          { name: "Tartare de bœuf de race normande", price_cents: 1950, is_highlight: false },
          { name: "Noix d'entrecôte d'Argentine (350g)", price_cents: 3550, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Crème brûlée à la vanille Bourbon", price_cents: 850, is_highlight: false },
          { name: "Profiteroles au chocolat chaud", price_cents: 1350, is_highlight: true }
        ]
      }
    ]
  },
  'le-cornichon-paris-14': {
    on_mange_quoi_ici: "Cuisine bistronomique. Ris de veau doré croustillant & Cabillaud rôti.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 3500,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Matjes en croque en sel", price_cents: 1200, is_highlight: false },
          { name: "Poireaux fondants marinés", price_cents: 1000, is_highlight: false },
          { name: "Crabes sauvages", price_cents: 1200, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Dorade royale en filet à la plancha", price_cents: 3500, is_highlight: false },
          { name: "Dos de cabillaud rôti", price_cents: 3500, is_highlight: false },
          { name: "Poulet de ferme rôti", price_cents: 3500, is_highlight: false },
          { name: "Épaule de cochon cuite fondante", price_cents: 3500, is_highlight: false },
          { name: "Ris de veau doré croustillant au beurre", price_cents: 5300, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Chou croustillant vanille Bourbon", price_cents: 1000, is_highlight: false },
          { name: "Chocolat de St Domingue façon soufflé", price_cents: 1000, is_highlight: true }
        ]
      }
    ]
  },
  'le-dome-montparnasse': {
    on_mange_quoi_ici: "Cuisine marine. Aile de barbue meunière & Sole meunière tradition.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 5.50,
    wine_glass: 10.00,
    plat_median_cents: 5300,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Soupe de poissons de roche, rouille maison", price_cents: 1900, is_highlight: false },
          { name: "Premières asperges blanches sauce mousseline", price_cents: 2800, is_highlight: false },
          { name: "Foie gras du Sud-Ouest au torchon", price_cents: 3600, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Aile de barbue meunière", price_cents: 5300, is_highlight: true },
          { name: "Dos de merlu aux herbes, sauce vierge", price_cents: 3800, is_highlight: false },
          { name: "Saumon d'Ecosse, bouillon de coquillages", price_cents: 3800, is_highlight: false },
          { name: "Émincé de lotte tandoori", price_cents: 4200, is_highlight: false },
          { name: "Belle sole meunière tradition", price_cents: 6500, is_highlight: true },
          { name: "Tronçon de turbot rôti, sauce Béarnaise", price_cents: 6800, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Millefeuille Napoléon au rhum et vanille", price_cents: 1700, is_highlight: false },
          { name: "Tarte au chocolat Manjari et sa ganache passion", price_cents: 1900, is_highlight: false }
        ]
      }
    ]
  },
  'le-duc-paris-14': {
    on_mange_quoi_ici: "Cuisine marine. Escalopes de Saint-Pierre au beurre de vodka & Sole meunière.",
    pint_price: null,
    cocktail_price: 20.00,
    coffee_price: 8.00,
    wine_glass: 15.00,
    plat_median_cents: 6800,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Salmon tartare", price_cents: 2500, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Sole in Meuniere butter", price_cents: 6800, is_highlight: true },
          { name: "Escalopes of John Dory with vodka butter sauce", price_cents: 6800, is_highlight: true },
          { name: "Goujons of sole with 2 peppers sauce", price_cents: 9000, is_highlight: false },
          { name: "Langoustine from Scotland, ginger butter", price_cents: 7500, is_highlight: false },
          { name: "Gilthead sea bream aiguillettes in lime butter", price_cents: 5800, is_highlight: false },
          { name: "Monkfish sauteed provence style", price_cents: 5800, is_highlight: false },
          { name: "Hake steak, rosemary oil", price_cents: 6000, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mille-feuilles", price_cents: 2000, is_highlight: false },
          { name: "Baba au Rhum", price_cents: 2200, is_highlight: false }
        ]
      }
    ]
  },
  'le-florissant': {
    on_mange_quoi_ici: "Cuisine asiatique. Bibimbap au bœuf & Gyozas au porc grillés.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: 4.50,
    plat_median_cents: 1390,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Nems au porc ou poulet (E1)", price_cents: 550, is_highlight: false },
          { name: "Raviolis aux crevettes à la vapeur (E3)", price_cents: 550, is_highlight: false },
          { name: "Potage pékinois (E4)", price_cents: 500, is_highlight: false },
          { name: "Gyozas porc ou poulet (R13)", price_cents: 680, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Ramen Tonkotsu porc ou poulet (N1)", price_cents: 1400, is_highlight: false },
          { name: "Soupe de nouilles aux travers de porc (N3)", price_cents: 1280, is_highlight: false },
          { name: "Riz au bœuf maison (R1)", price_cents: 1450, is_highlight: false },
          { name: "Bibimbap au bœuf (R2)", price_cents: 1450, is_highlight: true },
          { name: "Bibimbap au poulet (R3)", price_cents: 1450, is_highlight: false },
          { name: "Bibimbap au saumon (R4)", price_cents: 1550, is_highlight: false },
          { name: "Bibimbap végétarien (R7)", price_cents: 1400, is_highlight: false },
          { name: "Bo Bun au bœuf (V2)", price_cents: 1280, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mochi glacé x2", price_cents: 600, is_highlight: false },
          { name: "Perles de coco x2", price_cents: 400, is_highlight: false }
        ]
      }
    ]
  },
  'le-jeroboam': {
    on_mange_quoi_ici: "Cuisine bistronomique. Poulpe grillé & Pluma ibérique grillée.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 2600,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Croustillants de gambas au curry breton", price_cents: 1600, is_highlight: false },
          { name: "Ceviche de maigre, yaourt grec et cancha", price_cents: 1600, is_highlight: false },
          { name: "Frites d'halloumi, pak choi et sauce tartare", price_cents: 1500, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Mi-cuit de thon au sésame", price_cents: 2500, is_highlight: false },
          { name: "Poulpe grillé, infusion au chorizo", price_cents: 2600, is_highlight: true },
          { name: "Noix de pétoncles grillées, crème de morilles", price_cents: 2900, is_highlight: false },
          { name: "Gnocchi, asperges vertes et parmesan", price_cents: 2600, is_highlight: false },
          { name: "Agneau confit 7h à la citronnelle", price_cents: 2900, is_highlight: false },
          { name: "Pluma ibérique grillée, vinaigre de Xérès", price_cents: 2400, is_highlight: true },
          { name: "Entrecôte Black Angus, beurre Café de Paris", price_cents: 3100, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Brioche façon pain perdu, caramel beurre salé", price_cents: 1100, is_highlight: true },
          { name: "Pavlova fraise, sorbet framboise-violette", price_cents: 1100, is_highlight: false }
        ]
      }
    ]
  },
  'le-layon': {
    on_mange_quoi_ici: "Cuisine bistronomique. Filet de Canard rôti & Steak de chou-fleur snacké.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 1900,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Le Radis multicolore cresson et fromage frais", price_cents: 1300, is_highlight: false },
          { name: "Le Petit Pois salade ail doux et fraise", price_cents: 1300, is_highlight: false },
          { name: "La Courgette crème et bresaola", price_cents: 1300, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Le Chou-Fleur steak snacké et yaourt", price_cents: 1900, is_highlight: false },
          { name: "Le Maigre rôti aux asperges vertes", price_cents: 1900, is_highlight: false },
          { name: "Le Canard filet rôti et patates douces", price_cents: 1900, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "La Rhubarbe clafoutis et sorbet maison", price_cents: 1200, is_highlight: false },
          { name: "La Fraise au naturel et siphon yaourt", price_cents: 1200, is_highlight: false }
        ]
      }
    ]
  },
  'le-petit-amazigh': {
    on_mange_quoi_ici: "Cuisine kabyle. Couscous Méchoui & Tadjine Hlou.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 2.50,
    wine_glass: null,
    plat_median_cents: 1900,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Chorba Frik soupe maison", price_cents: 800, is_highlight: false },
          { name: "Assortiment de Boureks", price_cents: 900, is_highlight: false },
          { name: "Tchektchouka", price_cents: 850, is_highlight: false },
          { name: "H'Miss poivrons tomates ail", price_cents: 900, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Couscous Agneau", price_cents: 1900, is_highlight: false },
          { name: "Couscous Bœuf", price_cents: 1700, is_highlight: false },
          { name: "Couscous Poulet", price_cents: 1800, is_highlight: false },
          { name: "Couscous Méchoui d'agneau au four", price_cents: 2200, is_highlight: true },
          { name: "Couscous Brochette d'agneau", price_cents: 2000, is_highlight: false },
          { name: "Tadjine Zitoune carotte olives", price_cents: 1800, is_highlight: false },
          { name: "Tadjine Hlou aux pruneaux et amandes", price_cents: 1900, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Baghrir crêpe mille trous", price_cents: 600, is_highlight: false },
          { name: "Khobz de Maman", price_cents: 550, is_highlight: false }
        ]
      }
    ]
  },
  'le-petit-baigneur': {
    on_mange_quoi_ici: "Cuisine française. Bœuf bourguignon & Saucisse au couteau.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: 2.50,
    wine_glass: 5.00,
    plat_median_cents: 1800,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "L'œuf mayo", price_cents: 700, is_highlight: false },
          { name: "Terrine de campagne maison", price_cents: 900, is_highlight: false },
          { name: "Filets de harengs pommes à l'huile", price_cents: 900, is_highlight: false },
          { name: "Soupe à l'oignon gratinée", price_cents: 800, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "La saucisse au couteau purée maison", price_cents: 1800, is_highlight: false },
          { name: "Tartare de bœuf frites maison", price_cents: 1800, is_highlight: false },
          { name: "Brandade de morue salade verte", price_cents: 1700, is_highlight: false },
          { name: "Suprême de poulet rôti forestière", price_cents: 1900, is_highlight: false },
          { name: "Bavette à l'échalote frites maison", price_cents: 1850, is_highlight: false },
          { name: "Boeuf bourguignon coquillettes", price_cents: 2100, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Crème caramel à l'ancienne", price_cents: 800, is_highlight: false },
          { name: "Tiramisu classique", price_cents: 900, is_highlight: false }
        ]
      }
    ]
  },
  'le-petit-broc': {
    on_mange_quoi_ici: "Cuisine de bistrot. Le Tigre qui pleure & Deluxe bacon cheeseburger.",
    pint_price: 5.00,
    cocktail_price: 7.00,
    coffee_price: null,
    wine_glass: 5.00,
    plat_median_cents: 2350,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Guacamole au citron vert", price_cents: 900, is_highlight: false },
          { name: "Nem de légumes", price_cents: 900, is_highlight: false },
          { name: "Camembert à la Truffe", price_cents: 1200, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Le Tigre qui Pleure frites maison", price_cents: 2500, is_highlight: true },
          { name: "Belle entrecôte Simmental frites maison", price_cents: 2800, is_highlight: false },
          { name: "Lasagnes de Bœuf maison burrata", price_cents: 2500, is_highlight: false },
          { name: "Deluxe Bacon Cheeseburger frites", price_cents: 2000, is_highlight: true },
          { name: "Filet de Bar rôti légumes grillés", price_cents: 2200, is_highlight: false },
          { name: "Tartare de Bœuf frites maison", price_cents: 1900, is_highlight: false }
        ]
      }
    ]
  },
  'le-saut-du-crapaud': {
    on_mange_quoi_ici: "Cuisine fusion. Big Yucatan Burger & Poulpe grillé à la mexicaine.",
    pint_price: 7.50,
    cocktail_price: 8.00,
    coffee_price: 2.50,
    wine_glass: 7.00,
    plat_median_cents: 2200,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Sopa azteca au chorizo", price_cents: 1200, is_highlight: false },
          { name: "Boudin noir basque plancha compotée d'oignons", price_cents: 1200, is_highlight: false },
          { name: "Croqueta de crabe sauce aux herbes", price_cents: 1000, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Filet de bar sauce à la diabla", price_cents: 2200, is_highlight: false },
          { name: "Onglet de bœuf sauce chimichurri", price_cents: 2200, is_highlight: false },
          { name: "Big Yucatan Burger pulled pork frites", price_cents: 2200, is_highlight: true },
          { name: "Ceviche vert de bar marinade herbes", price_cents: 2200, is_highlight: false },
          { name: "Poulpe grillé à la mexicaine", price_cents: 2600, is_highlight: true },
          { name: "Thon rouge mi-cuit sauce aigre-douce", price_cents: 2200, is_highlight: false },
          { name: "Steak tartare citron vert coriandre", price_cents: 2200, is_highlight: false },
          { name: "Ris de veau rôti légumes saison", price_cents: 3500, is_highlight: false },
          { name: "Entrecôte maturée 300g frites", price_cents: 2800, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Ananas rôtis à la téquila", price_cents: 1100, is_highlight: false },
          { name: "Cheesecake au citron vert coulis passion", price_cents: 1100, is_highlight: false }
        ]
      }
    ]
  },
  'le-plomb-du-cantal-gaite': {
    on_mange_quoi_ici: "Cuisine auvergnate. Saucisse fraîche d'Auvergne & Confit de canard.",
    pint_price: 9.60,
    cocktail_price: 9.50,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 2700,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Saucisse sèche d'Auvergne", price_cents: 910, is_highlight: false },
          { name: "Pâté d'Auvergne maison", price_cents: 910, is_highlight: false },
          { name: "Soupe à l'oignon gratinée avec tomme", price_cents: 880, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Saucisse fraîche d'Auvergne avec aligot", price_cents: 2400, is_highlight: true },
          { name: "Magret entier 400g avec aligot", price_cents: 3050, is_highlight: false },
          { name: "Confit de canard avec aligot", price_cents: 2700, is_highlight: true },
          { name: "Tripoux 3 pièces avec aligot", price_cents: 2700, is_highlight: false },
          { name: "Chou farci à l'Aveyronnaise avec aligot", price_cents: 2650, is_highlight: false },
          { name: "L'Onglet 250g avec aligot", price_cents: 2850, is_highlight: false },
          { name: "Entrecôte 330g avec aligot", price_cents: 2950, is_highlight: false },
          { name: "Côte de bœuf 500g avec aligot", price_cents: 3150, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Tarte maison pommes caramel et vanille", price_cents: 930, is_highlight: false },
          { name: "Flan Auvergnat pruneaux raisins rhum", price_cents: 780, is_highlight: false }
        ]
      }
    ]
  },
  'le-severo-paris-14': {
    on_mange_quoi_ici: "Cuisine de viandes. Faux-filet frites & Steak tartare au couteau.",
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    plat_median_cents: 3800,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Boudin noir de Ch Parra salade verte", price_cents: 1400, is_highlight: false },
          { name: "Rosette de Vic", price_cents: 1400, is_highlight: false },
          { name: "Jambon fermier d'Auvergne 16 mois", price_cents: 2200, is_highlight: false },
          { name: "Poitrine de porc fermière confite", price_cents: 1400, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Steak haché 250g frites", price_cents: 1950, is_highlight: false },
          { name: "Steak tartare 250g frites", price_cents: 2800, is_highlight: true },
          { name: "Pavé de veau fermier purée", price_cents: 3800, is_highlight: false },
          { name: "Noix de ris de veau purée", price_cents: 4800, is_highlight: true },
          { name: "Faux-filet frites", price_cents: 5200, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mousse au chocolat", price_cents: 950, is_highlight: false },
          { name: "Crème au caramel", price_cents: 900, is_highlight: false }
        ]
      }
    ]
  }
};

async function run() {
  for (const slug of Object.keys(menuSpecs)) {
    const spec = menuSpecs[slug];
    console.log(`Generating payload for ${slug}...`);

    const { data: place, error } = await supabase
      .from('places')
      .select('Url_Photos_Menu')
      .eq('slug', slug)
      .single();

    if (error || !place) {
      console.error(`Failed to fetch Url_Photos_Menu for ${slug}:`, error);
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

    const payload = {
      on_mange_quoi_ici: spec.on_mange_quoi_ici,
      Url_Photos_Menu: urls,
      pint_price: spec.pint_price,
      cocktail_price: spec.cocktail_price,
      coffee_price: spec.coffee_price,
      wine_glass: spec.wine_glass,
      plat_median_cents: spec.plat_median_cents,
      menu_items: spec.menu_items
    };

    const destPath = path.join(__dirname, `../scratch/${slug}_payload.json`);
    fs.writeFileSync(destPath, JSON.stringify(payload, null, 2), 'utf8');
    console.log(`Saved payload to ${destPath}`);
  }
}

run();
