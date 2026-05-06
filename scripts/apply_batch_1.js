const fs = require('fs');
const path = require('path');

const updates = [
  {
    "slug": "aux-folies",
    "file": "src/data/registry/tree/20/belleville/aux-folies.ts",
    "must_eat": "Cuisine Tapas. Tapas & Spécialités de la maison."
  },
  {
    "slug": "chez-maman",
    "file": "src/data/registry/tree/19/laumi-re/chez-maman.ts",
    "must_eat": "Cuisine de grand-mère. Saucisse-aligot & Pot-au-feu."
  },
  {
    "slug": "rue-forest",
    "file": "src/data/registry/tree/18/auto/rue-forest.ts",
    "must_eat": "Cuisine de saison. Poisson du marché & Plat végétarien."
  },
  {
    "slug": "le-bonheur-de-cardinet",
    "file": "src/data/registry/tree/17/auto/le-bonheur-de-cardinet.ts",
    "must_eat": "Cuisine bourgeoise. Blanquette de veau & Crème brûlée."
  },
  {
    "slug": "mano-a-mano-pizza-restaurant",
    "file": "src/data/registry/tree/17/auto/mano-a-mano-pizza-restaurant.ts",
    "must_eat": "Pizza napolitaine. Margherita & Diavola."
  },
  {
    "slug": "pont-cardinet",
    "file": "src/data/registry/tree/17/auto/pont-cardinet.ts",
    "must_eat": "Brasserie moderne. Burger maison & Steak frites."
  },
  {
    "slug": "bambini-paris",
    "file": "src/data/registry/tree/16/auto/bambini-paris.ts",
    "must_eat": "Italienne festive. Focaccia & Pasta."
  },
  {
    "slug": "cafe-fleur",
    "file": "src/data/registry/tree/15/auto/cafe-fleur.ts",
    "must_eat": "Brasserie fleurie. Croque-monsieur signature & Viennoiseries."
  },
  {
    "slug": "de-la-tour",
    "file": "src/data/registry/tree/15/auto/de-la-tour.ts",
    "must_eat": "Cuisine de marché. Profiteroles & Spécialités de la maison."
  },
  {
    "slug": "kavi-paris",
    "file": "src/data/registry/tree/15/auto/kavi-paris.ts",
    "must_eat": "Cuisine indienne. Spécialités de la maison."
  }
];

updates.forEach(u => {
    if (!fs.existsSync(u.file)) {
        console.log(`File not found: ${u.file}`);
        return;
    }
    let content = fs.readFileSync(u.file, 'utf-8');
    
    // Update must_eat in specials
    content = content.replace(/must_eat:\s*["'`](.*?)["'`](,?)/g, (match, val, comma) => {
        return `must_eat: ${JSON.stringify(u.must_eat)}${comma || ""}`;
    });

    // Update subcategory if it is regex-like
    content = content.replace(/subcategory:\s*\["(.*?)"]/, (match, val) => {
        if (val.includes('.*')) {
            const type = u.must_eat.split('.')[0].replace('Cuisine ', '').trim().toLowerCase();
            return `subcategory: ["${type}"]`;
        }
        return match;
    });

    // Update real_talk if it exists
    if (content.includes('real_talk: {')) {
        content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'`](.*?)["'`](,?)/, (match, val, comma) => {
            return match.replace(/must_eat:\s*["'`](.*?)["'`](,?)/, `must_eat: ${JSON.stringify(u.must_eat)}${comma || ""}`);
        });
    } else {
        // Add real_talk if missing
        const rtBlock = `,\n  real_talk: {\n    text: "Une adresse de caractère.",\n    must_eat: ${JSON.stringify(u.must_eat)},\n    le_secret: "L'ambiance.",\n    le_son: "Paris.",\n    le_must: "La carte"\n  }\n`;
        const lastBraceIndex = content.lastIndexOf("};");
        if (lastBraceIndex !== -1) {
            content = content.slice(0, lastBraceIndex) + rtBlock + content.slice(lastBraceIndex);
        }
    }

    fs.writeFileSync(u.file, content);
});

console.log("✅ Batch 1 Applied Successfully.");
