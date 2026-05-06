const fs = require('fs');
const path = require('path');

const batch2 = [
  { slug: "goku", file: "src/data/registry/tree/03/auto/goku-restaurant-asiatique-burgers-paris-republique-marais.ts", must_eat: "Cuisine Street Food. Burger Black OG & Frites de Patate Douce.", sub: "street-food" },
  { slug: "la-cantine-merci", file: "src/data/registry/tree/03/saint-s-bastien-froissart/la-cantine-merci.ts", must_eat: "Cuisine Française. Salades du Marché & Légumes de Saison.", sub: "français" },
  { slug: "l-as-du-fallafel", file: "src/data/registry/tree/04/auto/l-as-du-fallafel.ts", must_eat: "Cuisine Israélienne. Sandwich Fallafel Spécial & Shawarma.", sub: "israélien" },
  { slug: "pasta-e-fagioli", file: "src/data/registry/tree/05/auto/pasta-e-fagioli.ts", must_eat: "Cuisine Italienne. Pasta e Fagioli & Crème de Truffe.", sub: "italien" },
  { slug: "seoul-mama-luxembourg", file: "src/data/registry/tree/05/auto/seoul-mama-luxembourg.ts", must_eat: "Cuisine Coréenne. Korean Fried Chicken & Kimchi Rice.", sub: "coréen" },
  { slug: "hutong-paris", file: "src/data/registry/tree/05/auto/hutong-paris.ts", must_eat: "Cuisine Chinoise. Guoties & Soupe de Nouilles.", sub: "chinois" },
  { slug: "arrivederci-pizzeria", file: "src/data/registry/tree/05/auto/arrivederci-pizzeria.ts", must_eat: "Cuisine Italienne. Pizza Margherita & Antipasti.", sub: "pizzeria" },
  { slug: "double-dragon", file: "src/data/registry/tree/11/auto/double-dragon.ts", must_eat: "Cuisine Chinoise. Mapo Tofu & Plats de partage.", sub: "chinois" },
  { slug: "sababa-le-gout-de-la-paix", file: "src/data/registry/tree/11/auto/sababa-le-gout-de-la-paix.ts", must_eat: "Cuisine Libanaise. Houmous & Pita artisanale.", sub: "libanais" },
  { slug: "solstice", file: "src/data/registry/tree/05/auto/solstice.ts", must_eat: "Cuisine Gastronomique. Menu Dégustation & Plats de Saison.", sub: "gastronomique" },
  { slug: "amazonia", file: "src/data/registry/tree/07/auto/amazonia.ts", must_eat: "Cuisine Latino-Américaine. Ceviche & Cocktails Tropicaux.", sub: "mexicain" },
  { slug: "la-mi-fa", file: "src/data/registry/tree/11/auto/la-mi-fa.ts", must_eat: "Cuisine Bistronomique. Plats du Marché & Ardoise de Saison.", sub: "bistronomie" },
  { slug: "restaurant-les-fabricants", file: "src/data/registry/tree/11/auto/restaurant-les-fabricants.ts", must_eat: "Cuisine Française. Plats du Terroir & Portions Généreuses.", sub: "français" },
  { slug: "le-saint-sebastien", file: "src/data/registry/tree/11/auto/le-saint-sebastien.ts", must_eat: "Cuisine Bistronomique. Menu du Marché & Vins Nature.", sub: "bistronomie" }
];

batch2.forEach(u => {
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

console.log("✅ Batch 2 Surgical Injection V3 Applied Successfully.");
