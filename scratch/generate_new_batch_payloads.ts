import { createClient } from '@supabase/supabase-js';
import path from 'path';
import fs from 'fs';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const menuSpecs: Record<string, any> = {
  'le-tonnerre': {
    on_mange_quoi_ici: "Cuisine de bar. Assiette de charcuterie maison & Tapas maison.",
    pint_price: 5.00,
    cocktail_price: 8.00,
    coffee_price: null,
    wine_glass: 4.00,
    plat_median_cents: 650,
    menu_items: [
      {
        category_type: "main",
        display_label: "Plats & Planches",
        items: [
          { name: "Assiette de charcuterie maison, pain, cornichons", price_cents: 1600, is_highlight: true },
          { name: "Saucisson nature, Beaufort ou noisettes", price_cents: 800, is_highlight: false },
          { name: "Tapas maison (houmous, rillettes de thon)", price_cents: 500, is_highlight: false },
          { name: "Bol de frites maison avec mayonnaise ou ketchup", price_cents: 500, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons",
        items: [
          { name: "Éclair (Blonde légère) pinte 50cl", price_cents: 500, is_highlight: true },
          { name: "Britt Summer IPA pinte 50cl", price_cents: 850, is_highlight: false },
          { name: "Sant Erwann Abbaye pinte 50cl", price_cents: 850, is_highlight: false },
          { name: "Ti Punch (6cl)", price_cents: 800, is_highlight: false },
          { name: "Daïquiri", price_cents: 800, is_highlight: false },
          { name: "Pina Colada", price_cents: 800, is_highlight: false },
          { name: "Verre de vin rouge / blanc", price_cents: 400, is_highlight: false }
        ]
      }
    ]
  },
  'le-verre-siffleur-paris': {
    on_mange_quoi_ici: "Cuisine de bistrot. Croustifondant de paleron & Filet de dorade à la plancha.",
    pint_price: 9.00,
    cocktail_price: 10.50,
    coffee_price: 2.70,
    wine_glass: 6.00,
    plat_median_cents: 1900,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer",
        items: [
          { name: "Assiette de saucisson beurre", price_cents: 800, is_highlight: false },
          { name: "Fricandeau pour 1", price_cents: 1100, is_highlight: false },
          { name: "Le fameux Croque-apéro", price_cents: 1000, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Filet de dorade à la plancha", price_cents: 2100, is_highlight: false },
          { name: "Croustifondant de paleron", price_cents: 1700, is_highlight: true },
          { name: "Boudin basque Anne Rozés", price_cents: 1800, is_highlight: false },
          { name: "Onglet d'Angus", price_cents: 2200, is_highlight: true },
          { name: "Pavé de saumon snacké", price_cents: 2000, is_highlight: false },
          { name: "Risotto verde", price_cents: 1700, is_highlight: false },
          { name: "Suprême de poulet", price_cents: 1800, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Fromages",
        items: [
          { name: "Assiette de 3 fromages", price_cents: 1000, is_highlight: false },
          { name: "Crème brûlée à la vanille Bourbon", price_cents: 800, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons",
        items: [
          { name: "Mutzig Blonde pinte 50cl", price_cents: 900, is_highlight: false },
          { name: "Affligem Blonde pinte 50cl", price_cents: 1100, is_highlight: false },
          { name: "Verre de Bourgueil AOC", price_cents: 850, is_highlight: false },
          { name: "Mojito", price_cents: 1050, is_highlight: false },
          { name: "Gin Fizz", price_cents: 1050, is_highlight: false }
        ]
      }
    ]
  },
  'le-zeyer-paris': {
    on_mange_quoi_ici: "Cuisine de brasserie. Pavé de cabillaud poêlé & Andouillette AAAAA grillée.",
    pint_price: 10.00,
    cocktail_price: 9.50,
    coffee_price: 3.00,
    wine_glass: 7.00,
    plat_median_cents: 2500,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Snacking",
        items: [
          { name: "Les 6 très gros escargots de Bourgogne", price_cents: 1100, is_highlight: false },
          { name: "Omelette nature frites et salade", price_cents: 800, is_highlight: false },
          { name: "Le croque-monsieur frites et salade", price_cents: 1100, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Merlan meunière aux amandes", price_cents: 2500, is_highlight: false },
          { name: "Grillade de poissons à l'aïoli", price_cents: 2500, is_highlight: false },
          { name: "Pavé de cabillaud poêlé au curry", price_cents: 2500, is_highlight: true },
          { name: "Pavé de saumon poêlé sauce pistou", price_cents: 2500, is_highlight: false },
          { name: "Mi-cuit de thon rouge aux graines de sésame", price_cents: 2500, is_highlight: false },
          { name: "Linguines crémeuses aux gambas", price_cents: 2500, is_highlight: false },
          { name: "Filet de bar sauce béarnaise", price_cents: 2500, is_highlight: false },
          { name: "Andouillette AAAAA grillée, sauce moutarde", price_cents: 2500, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Crème brûlée à la cassonade", price_cents: 1100, is_highlight: false },
          { name: "Soufflé glacé au Grand-Marnier", price_cents: 1100, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons",
        items: [
          { name: "Kronembourg pinte 50cl", price_cents: 1000, is_highlight: false },
          { name: "Demory Paris IPA pinte 50cl", price_cents: 1100, is_highlight: false },
          { name: "Verre de Côtes de Provence AOC", price_cents: 700, is_highlight: false }
        ]
      }
    ]
  },
  'les-grillades-de-buenos-aires': {
    on_mange_quoi_ici: "Cuisine argentine. Bife de chorizo & Empanadas mendocinas.",
    pint_price: null,
    cocktail_price: 7.00,
    coffee_price: null,
    wine_glass: 7.00,
    plat_median_cents: 3000,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Empanada mendocina au bœuf", price_cents: 900, is_highlight: true },
          { name: "Empanada de espinaca y 3 quesos", price_cents: 900, is_highlight: false },
          { name: "Ensalada mixta (Salade mixte)", price_cents: 1000, is_highlight: false },
          { name: "Chorizo criollo (saucisse grillée)", price_cents: 850, is_highlight: false },
          { name: "Morcilla (boudin noir grillé)", price_cents: 850, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Grillades",
        items: [
          { name: "Bife Ancho (Entrecôte)", price_cents: 3000, is_highlight: false },
          { name: "Bife de Chorizo (Faux-filet)", price_cents: 3000, is_highlight: true },
          { name: "Bife de Lomo (Filet de bœuf)", price_cents: 3550, is_highlight: true },
          { name: "Trio de viandes", price_cents: 3200, is_highlight: false },
          { name: "Asado de Tira (travers de bœuf)", price_cents: 2750, is_highlight: false },
          { name: "Plato del Gaucho", price_cents: 2850, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Flan con dulce de leche", price_cents: 850, is_highlight: false },
          { name: "Banana con dulce de leche", price_cents: 500, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons",
        items: [
          { name: "Fuerza Vermouth Argentin", price_cents: 700, is_highlight: false },
          { name: "Quilmes 34cl", price_cents: 500, is_highlight: false },
          { name: "Verre de vin rouge Malbec", price_cents: 700, is_highlight: false }
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
