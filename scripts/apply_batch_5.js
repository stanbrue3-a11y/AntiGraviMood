const fs = require('fs');
const path = require('path');

const batch5 = [
  { slug: "bambini-paris", file: "src/data/registry/tree/16/auto/bambini-paris.ts", must_eat: "Cuisine Italienne. Arancini croustillants & Rigatoni.", sub: "italien" },
  { slug: "mano-a-mano-pizza-restaurant", file: "src/data/registry/tree/17/auto/mano-a-mano-pizza-restaurant.ts", must_eat: "Cuisine Italienne. Pizza Napolitaine & Antipasti.", sub: "pizzeria" },
  { slug: "la-bellevilloise", file: "src/data/registry/tree/20/m-nilmontant/la-bellevilloise.ts", must_eat: "Cuisine Bar. Planches de charcuterie & Cocktails maison.", sub: "bar" },
  { slug: "aux-folies", file: "src/data/registry/tree/20/proximite/aux-folies.ts", must_eat: "Cuisine Bar. Bière pression & Tapas de quartier.", sub: "bar" },
  { slug: "ten-belles", file: "src/data/registry/tree/10/goncourt---jacques-bonsergent/ten-belles.ts", must_eat: "Cuisine Coffee Shop. Focaccia garnie & Café de spécialité.", sub: "café" },
  { slug: "le-pure-cafe", file: "src/data/registry/tree/11/charonne/le-pure-cafe.ts", must_eat: "Cuisine Française. Œuf Mayo & Steak frites.", sub: "français" },
  { slug: "serpent-plume", file: "src/data/registry/tree/03/proximite/serpent-plume.ts", must_eat: "Cuisine Bar. Cocktails Signature & Finger Food.", sub: "bar" },
  { slug: "silencio", file: "src/data/registry/tree/02/bourse/silencio.ts", must_eat: "Cuisine Bar. Cocktail Signature & Finger Food chic.", sub: "bar" },
  { slug: "fringe", file: "src/data/registry/tree/03/filles-du-calvaire/fringe.ts", must_eat: "Cuisine Coffee Shop. Porridge de saison & Café de spécialité.", sub: "café" },
  { slug: "yukga", file: "src/data/registry/tree/11/proximite/yukga.ts", must_eat: "Cuisine Coréenne. BBQ Coréen & Bibimbap.", sub: "coréen" },
  { slug: "cafe-industrie", file: "src/data/registry/tree/11/proximite/cafe-industrie.ts", must_eat: "Cuisine Française. Confit de Canard & Profiteroles.", sub: "français" },
  { slug: "caf-oberkampf", file: "src/data/registry/tree/11/proximite/caf-oberkampf.ts", must_eat: "Cuisine Française. Shakshuka & Grilled Cheese.", sub: "français" },
  { slug: "le-pavillon-des-canaux", file: "src/data/registry/tree/19/laumi-re/le-pavillon-des-canaux.ts", must_eat: "Cuisine Coffee Shop. Brunch dominical & Tarte maison.", sub: "café" },
  { slug: "dose-batignolles", file: "src/data/registry/tree/17/proximite/dose-batignolles.ts", must_eat: "Cuisine Coffee Shop. Granola Maison & Latte Art.", sub: "café" },
  { slug: "bloom-cafe", file: "src/data/registry/tree/17/proximite/bloom-cafe.ts", must_eat: "Cuisine Coffee Shop. Avocado Toast & Chai Latte.", sub: "café" },
  { slug: "cafe-lomi", file: "src/data/registry/tree/18/marcadet-poissonniers/cafe-lomi.ts", must_eat: "Cuisine Coffee Shop. Café torréfié sur place & Pâtisseries.", sub: "café" }
];

batch5.forEach(u => {
    if (!fs.existsSync(u.file)) {
        console.log(`Missing: ${u.file}`);
        return;
    }
    let content = fs.readFileSync(u.file, 'utf-8');
    
    function replaceField(c, field, newVal) {
        const regex = new RegExp(`${field}:\\s*["'\`](.*?)["'\`](,?)`, 'g');
        return c.replace(regex, (match, val, comma) => {
            return `${field}: ${JSON.stringify(newVal)}${comma || ""}`;
        });
    }

    content = replaceField(content, 'must_eat', u.must_eat);
    content = content.replace(/subcategory:\s*\["(.*?)"]/, `subcategory: ["${u.sub}"]`);
    
    if (content.includes('real_talk: {')) {
        const rtRegex = /real_talk:\s*\{[\s\S]*?must_eat:\s*["'\`](.*?)["'\`](,?)/;
        content = content.replace(rtRegex, (match, val, comma) => {
            return match.replace(/must_eat:\s*["'\`](.*?)["'\`](,?)/, `must_eat: ${JSON.stringify(u.must_eat)}${comma || ""}`);
        });
    } else {
        const rtBlock = `,\n  real_talk: {\n    text: "Une adresse de caractère.",\n    must_eat: ${JSON.stringify(u.must_eat)},\n    le_secret: "L'ambiance.",\n    le_son: "Paris.",\n    le_must: "La carte"\n  }\n`;
        const lastBraceIndex = content.lastIndexOf("};");
        if (lastBraceIndex !== -1) {
            content = content.slice(0, lastBraceIndex) + rtBlock + content.slice(lastBraceIndex);
        }
    }

    fs.writeFileSync(u.file, content);
});

console.log("✅ Batch 5 XL Surgical Injection V3 Applied Successfully.");
