const fs = require('fs');
const path = require('path');

const batch1 = [
  { slug: "bon-jo", file: "src/data/registry/tree/18/auto/bon-jo.ts", must_eat: "Cuisine Française. Baked Eggs & French Toast Banana Caramel." },
  { slug: "bouillon-pigalle", file: "src/data/registry/tree/18/auto/bouillon-pigalle.ts", must_eat: "Cuisine Française. Oeuf Mayonnaise & Saucisse Purée." },
  { slug: "brasserie-barbes", file: "src/data/registry/tree/18/auto/brasserie-barbes.ts", must_eat: "Cuisine Italienne. Basilic frais & huile d'olive." },
  { slug: "chantoiseau", file: "src/data/registry/tree/18/auto/chantoiseau.ts", must_eat: "Cuisine Bistronomique. Jus de mandarine & crème crue fumée." },
  { slug: "l-arcane", file: "src/data/registry/tree/18/auto/l-arcane.ts", must_eat: "Cuisine Gastronomique. Menu Surprise & Gastronomie d'auteur." },
  { slug: "l-ete-en-pente-douce", file: "src/data/registry/tree/18/auto/l-ete-en-pente-douce.ts", must_eat: "Cuisine Française. Quiche Maison & Citronnade." },
  { slug: "la-boite-aux-lettres", file: "src/data/registry/tree/18/auto/la-boite-aux-lettres.ts", must_eat: "Cuisine Street Food. Burger de la BAL & Frites maison." },
  { slug: "la-mascotte-montmartre", file: "src/data/registry/tree/18/auto/la-mascotte-montmartre.ts", must_eat: "Cuisine Française. Plateau de Fruits de Mer & Huîtres." },
  { slug: "la-traversee", file: "src/data/registry/tree/18/auto/la-traversee.ts", must_eat: "Cuisine Street Food. Haricots verts frits & Cocktails." },
  { slug: "le-coq-fils-the-poultry-house", file: "src/data/registry/tree/18/auto/le-coq-fils-the-poultry-house.ts", must_eat: "Cuisine Gastronomique. Volaille de Race & Île Flottante." },
  { slug: "le-moulin-de-la-galette", file: "src/data/registry/tree/18/auto/le-moulin-de-la-galette.ts", must_eat: "Cuisine Française. Confit de Canard & Tartare de Bœuf." },
  { slug: "le-relais-gascon", file: "src/data/registry/tree/18/auto/le-relais-gascon.ts", must_eat: "Cuisine Française. Salades Géantes & Magret de Canard." },
  { slug: "le-vieux-chalet", file: "src/data/registry/tree/18/auto/le-vieux-chalet.ts", must_eat: "Cuisine Française. Confit de Canard & Escargots au beurre persillé." },
  { slug: "le-vrai-paris", file: "src/data/registry/tree/18/auto/le-vrai-paris.ts", must_eat: "Cuisine Française. Confit de Canard & Entrecôte frites." },
  { slug: "sacree-fleur-montmartre", file: "src/data/registry/tree/18/auto/sacree-fleur-montmartre.ts", must_eat: "Cuisine Française. Côte de bœuf & Soupe à l'oignon." },
  { slug: "sacree-fleur", file: "src/data/registry/tree/18/clignancourt/sacree-fleur.ts", must_eat: "Cuisine Française. Côte de bœuf & Escargots." },
  { slug: "bulot-bulot", file: "src/data/registry/tree/18/martyrs/bulot-bulot.ts", must_eat: "Cuisine Street Food. Bulots & Huîtres." },
  { slug: "le-p-tit-canon", file: "src/data/registry/tree/17/legendre/le-p-tit-canon.ts", must_eat: "Cuisine Française. Saucisse au couteau & Purée maison." },
  { slug: "l-entredgeu", file: "src/data/registry/tree/17/laugier/l-entredgeu.ts", must_eat: "Cuisine Bistronomique. Terrine de campagne & Joue de bœuf." },
  { slug: "anona", file: "src/data/registry/tree/17/batignolles/anona.ts", must_eat: "Cuisine Gastronomique. Menu en 7 temps & Cuisine éco-responsable." }
];

batch1.forEach(u => {
    if (!fs.existsSync(u.file)) {
        console.log(`Missing: ${u.file}`);
        return;
    }
    let content = fs.readFileSync(u.file, 'utf-8');
    
    // 1. Update must_eat in specials
    content = content.replace(/must_eat:\s*["'`](.*?)["'`](,?)/g, (match, val, comma) => {
        return `must_eat: ${JSON.stringify(u.must_eat)}${comma || ""}`;
    });

    // 2. Standardize subcategory
    const type = u.must_eat.split('.')[0].replace('Cuisine ', '').trim().toLowerCase();
    content = content.replace(/subcategory:\s*\["(.*?)"]/, `subcategory: ["${type}"]`);

    // 3. Sync Real Talk
    if (content.includes('real_talk: {')) {
        content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'`](.*?)["'`](,?)/, (match, val, comma) => {
            return match.replace(/must_eat:\s*["'`](.*?)["'`](,?)/, `must_eat: ${JSON.stringify(u.must_eat)}${comma || ""}`);
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

console.log("✅ Batch 1 Final Applied Successfully.");
