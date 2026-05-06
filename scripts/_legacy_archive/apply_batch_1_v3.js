const fs = require('fs');
const path = require('path');

const batch1 = [
  { slug: "bon-jo", file: "src/data/registry/tree/18/auto/bon-jo.ts", must_eat: "Cuisine Française. Baked Eggs Spinach & Cheese & Salmon Toast Avocado.", sub: "français" },
  { slug: "bouillon-pigalle", file: "src/data/registry/tree/18/auto/bouillon-pigalle.ts", must_eat: "Cuisine Française. Œuf Mayonnaise & Poireaux Vinaigrette.", sub: "français" },
  { slug: "brasserie-barbes", file: "src/data/registry/tree/18/auto/brasserie-barbes.ts", must_eat: "Cuisine Italienne. Burrata Crémeuse & Focaccia.", sub: "italien" },
  { slug: "chantoiseau", file: "src/data/registry/tree/18/auto/chantoiseau.ts", must_eat: "Cuisine Bistronomique. Crème de Châtaigne & Tourteau Frais.", sub: "bistronomie" },
  { slug: "l-arcane", file: "src/data/registry/tree/18/auto/l-arcane.ts", must_eat: "Cuisine Gastronomique. Menu surprise carte blanche.", sub: "gastronomique" },
  { slug: "l-ete-en-pente-douce", file: "src/data/registry/tree/18/auto/l-ete-en-pente-douce.ts", must_eat: "Cuisine Française. Quiche Maison au Saumon & Salade de l’Été.", sub: "français" },
  { slug: "la-boite-aux-lettres", file: "src/data/registry/tree/18/auto/la-boite-aux-lettres.ts", must_eat: "Cuisine Française. Œuf Mayonnaise Maison & Terrine de Campagne.", sub: "français" },
  { slug: "la-mascotte-montmartre", file: "src/data/registry/tree/18/auto/la-mascotte-montmartre.ts", must_eat: "Cuisine Française. Crevettes Bio nacrées & Foie Gras de Canard.", sub: "français" },
  { slug: "la-traversee", file: "src/data/registry/tree/18/auto/la-traversee.ts", must_eat: "Cuisine Bistronomique. Haricots verts frits & Scotch egg maison.", sub: "bistronomie" },
  { slug: "le-coq-fils-the-poultry-house", file: "src/data/registry/tree/18/auto/le-coq-fils-the-poultry-house.ts", must_eat: "Cuisine Gastronomique. Gésiers confits & Terrine de Volaille.", sub: "gastronomique" },
  { slug: "le-moulin-de-la-galette", file: "src/data/registry/tree/18/auto/le-moulin-de-la-galette.ts", must_eat: "Cuisine Française. Terrine de Foie Gras & Escargots de Bourgogne.", sub: "français" },
  { slug: "le-relais-gascon", file: "src/data/registry/tree/18/auto/le-relais-gascon.ts", must_eat: "Cuisine Française. Salade Gascon & Salade du Chef.", sub: "français" },
  { slug: "le-vieux-chalet", file: "src/data/registry/tree/18/auto/le-vieux-chalet.ts", must_eat: "Cuisine Française. Soupe à l’Oignon Maison & Escargots de Bourgogne.", sub: "français" },
  { slug: "le-vrai-paris", file: "src/data/registry/tree/18/auto/le-vrai-paris.ts", must_eat: "Cuisine Française. Os à moelle rôti & Escargots de Bourgogne.", sub: "français" },
  { slug: "sacree-fleur-montmartre", file: "src/data/registry/tree/18/auto/sacree-fleur-montmartre.ts", must_eat: "Cuisine Française. Cuisses de grenouilles & Cassolette d’escargots.", sub: "français" },
  { slug: "sacree-fleur", file: "src/data/registry/tree/18/clignancourt/sacree-fleur.ts", must_eat: "Cuisine Française. Soupe à l’oignon gratinée & Os à moelle rôti.", sub: "français" },
  { slug: "bulot-bulot", file: "src/data/registry/tree/18/martyrs/bulot-bulot.ts", must_eat: "Cuisine Street Food. Huîtres de Blainville & Bulots.", sub: "street-food" },
  { slug: "le-p-tit-canon", file: "src/data/registry/tree/17/legendre/le-p-tit-canon.ts", must_eat: "Cuisine Française. Œufs mayonnaise bio & Escargots.", sub: "français" },
  { slug: "l-entredgeu", file: "src/data/registry/tree/17/laugier/l-entredgeu.ts", must_eat: "Cuisine Française. Tarte tatin d’oignons & Carpaccio de la pêche du jour.", sub: "français" },
  { slug: "anona", file: "src/data/registry/tree/17/batignolles/anona.ts", must_eat: "Cuisine Gastronomique. Menu Initiation & Menu Signature.", sub: "gastronomique" }
];

batch1.forEach(u => {
    if (!fs.existsSync(u.file)) {
        console.log(`Missing: ${u.file}`);
        return;
    }
    let content = fs.readFileSync(u.file, 'utf-8');
    
    // Replacement function to avoid double-dipping or syntax breaking
    function replaceField(c, field, newVal) {
        const regex = new RegExp(`${field}:\\s*["'\`](.*?)["'\`](,?)`, 'g');
        return c.replace(regex, (match, val, comma) => {
            return `${field}: ${JSON.stringify(newVal)}${comma || ""}`;
        });
    }

    // 1. Update specials.must_eat
    content = replaceField(content, 'must_eat', u.must_eat);

    // 2. Standardize subcategory
    content = content.replace(/subcategory:\s*\["(.*?)"]/, `subcategory: ["${u.sub}"]`);

    // 3. Sync real_talk must_eat
    if (content.includes('real_talk: {')) {
        const rtRegex = /real_talk:\s*\{[\s\S]*?must_eat:\s*["'\`](.*?)["'\`](,?)/;
        content = content.replace(rtRegex, (match, val, comma) => {
            return match.replace(/must_eat:\s*["'\`](.*?)["'\`](,?)/, `must_eat: ${JSON.stringify(u.must_eat)}${comma || ""}`);
        });
    }

    fs.writeFileSync(u.file, content);
});

console.log("✅ Batch 1 Surgical Injection V3 Applied Successfully.");
