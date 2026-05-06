const fs = require('fs');
const path = require('path');

const batch3 = [
  { slug: "benjamin-schmitt-restaurant", file: "src/data/registry/tree/09/auto/benjamin-schmitt-restaurant.ts", must_eat: "Cuisine Gastronomique. Pâté en croûte & Cassoulet de Castelnaudary.", sub: "gastronomique" },
  { slug: "firmin-le-barbier", file: "src/data/registry/tree/07/auto/firmin-le-barbier.ts", must_eat: "Cuisine Française. Huître royale David Hervé & Terrine de canard.", sub: "français" },
  { slug: "le-saint-sebastien", file: "src/data/registry/tree/11/auto/le-saint-sebastien.ts", must_eat: "Cuisine Bistronomique. Légumes de la ferme & Vins Nature.", sub: "bistronomie" },
  { slug: "l-avant-poste", file: "src/data/registry/tree/10/auto/l-avant-poste-nouvellement-les-resistants-la-table.ts", must_eat: "Cuisine de Terroir. Porc de Bigorre & Produits en circuit court.", sub: "français" },
  { slug: "le-procope", file: "src/data/registry/tree/06/auto/le-procope.ts", must_eat: "Cuisine Française. Tête de veau en cocotte & Coq au vin.", sub: "français" },
  { slug: "judy", file: "src/data/registry/tree/06/auto/judy.ts", must_eat: "Cuisine Végétarienne. Pancakes sans gluten & Avocado Toast.", sub: "végétarien" },
  { slug: "topokki", file: "src/data/registry/tree/06/auto/topokki.ts", must_eat: "Cuisine Coréenne. Gâteaux de riz pimentés & Mandu.", sub: "coréen" },
  { slug: "le-volant-basque", file: "src/data/registry/tree/15/auto/le-volant-basque.ts", must_eat: "Cuisine Basque. Axoa de veau & Gâteau basque.", sub: "français" },
  { slug: "la-jacobine", file: "src/data/registry/tree/06/auto/la-jacobine.ts", must_eat: "Cuisine Française. Chocolat chaud à l'ancienne & Confit de canard.", sub: "français" },
  { slug: "le-bistrot-de-la-place", file: "src/data/registry/tree/04/auto/le-bistrot-de-la-place.ts", must_eat: "Cuisine Française. Tartare de Bœuf & Frites Maison.", sub: "français" },
  { slug: "les-botanistes", file: "src/data/registry/tree/07/auto/les-botanistes.ts", must_eat: "Cuisine Française. Épaule d'agneau & Purée maison.", sub: "français" },
  { slug: "petit-pan", file: "src/data/registry/tree/15/auto/petit-pan.ts", must_eat: "Cuisine Française. Plats de partage & Vins Nature.", sub: "français" },
  { slug: "stephane-martin", file: "src/data/registry/tree/15/auto/stephane-martin.ts", must_eat: "Cuisine Gastronomique. Menu Dégustation & Plats de Saison.", sub: "gastronomique" }
];

batch3.forEach(u => {
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

console.log("✅ Batch 3 Surgical Injection V3 Applied Successfully.");
