const fs = require('fs');
const path = require('path');

const batch4 = [
  { slug: "le-bouchon-parisien", file: "src/data/registry/tree/15/auto/le-bouchon-parisien.ts", must_eat: "Cuisine Française. Confit de Canard & Planches de terroir.", sub: "français" },
  { slug: "villa-verdi", file: "src/data/registry/tree/15/auto/villa-verdi.ts", must_eat: "Cuisine Italienne. Linguine alle vongole & Tiramisu maison.", sub: "italien" },
  { slug: "la-veraison", file: "src/data/registry/tree/15/auto/la-veraison.ts", must_eat: "Cuisine Française. Ris de veau croustillant & Plats de saison.", sub: "français" },
  { slug: "mr-chow-cuisine-chinoise", file: "src/data/registry/tree/14/auto/mr-chow-cuisine-chinoise.ts", must_eat: "Cuisine Chinoise. Canard Laqué & Chicken Satay.", sub: "chinois" },
  { slug: "restaurant-a-mi-chemin-paris-14-eme", file: "src/data/registry/tree/14/auto/restaurant-a-mi-chemin-paris-14-eme.ts", must_eat: "Cuisine Bistronomique. Couscous de la mer & Souris d'agneau.", sub: "bistronomie" },
  { slug: "restaurant-l-oyat", file: "src/data/registry/tree/03/auto/restaurant-l-oyat.ts", must_eat: "Cuisine Française. Filet de Bœuf & Poisson du Marché.", sub: "français" },
  { slug: "la-mano", file: "src/data/registry/tree/09/proximite/la-mano.ts", must_eat: "Cuisine Mexicaine. Tacos artisanaux & Ceviche.", sub: "mexicain" },
  { slug: "epicerie-hectare", file: "src/data/registry/tree/11/auto/epicerie-hectare.ts", must_eat: "Cuisine Bistronomique. Produits de la ferme & Sandwiches gourmets.", sub: "bistronomie" }
];

batch4.forEach(u => {
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

console.log("✅ Batch 4 Surgical Injection V3 Applied Successfully.");
