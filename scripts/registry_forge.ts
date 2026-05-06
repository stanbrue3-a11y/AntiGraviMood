/**
 * REGISTRY FORGE V5 — Standard Moelle 2026
 * 
 * Logiciel de précision pour la normalisation gastronomique.
 * RÈGLE D'OR : Préserver l'info éditoriale, normaliser le format.
 */

import * as fs from "fs";
import * as path from "path";

const REGISTRY_PATH = "src/data/registry/tree";

const CUISINE_MAP: Record<string, string> = {
  "français":       "Française",
  "italien":        "Italienne",
  "japonais":       "Japonaise",
  "coréen":         "Coréenne",
  "chinois":        "Chinoise",
  "vietnamien":     "Vietnamienne",
  "indien":         "Indienne",
  "thaï":           "Thaïlandaise",
  "marocain":       "Marocaine",
  "mexicain":       "Mexicaine",
  "africain":       "Africaine",
  "libanais":       "Libanaise",
  "méditerranéen":  "Méditerranéenne",
  "péruvien":       "Péruvienne",
  "brésilien":      "Brésilienne",
  "grec":           "Grecque",
  "turc":           "Turque",
  "éthiopien":      "Éthiopienne",
  "américain":      "Américaine",
  "caribéen":       "Caribéenne",
  "pakistanais":    "Pakistanaise",
  "espagnol":       "Espagnole",
  "argentin":       "Argentine",
  "asiatique":      "Asiatique",
  "bistronomie":    "Bistronomique",
  "gastronomique":  "Gastronomique",
  "bistrot":        "Bistrot",
  "brasserie":      "Brasserie",
  "bouillon":       "Bouillon",
  "bar à vin":      "Bar à Vin",
  "fruits de mer":  "Fruits de Mer",
  "fruits-de-mer":  "Fruits de Mer",
  "pizzeria":       "Italienne",
  "pizza":          "Italienne",
  "tapas":          "Tapas",
  "végétarien":     "Végétarienne",
  "street-food":    "Street Food",
  "fusion":         "Fusion",
  "israélienne":    "Israélienne",
};

const SLUG_OVERRIDES: Record<string, string> = {
  "l-as-du-fallafel":          "Israélienne",
  "sababa-le-gout-de-la-paix": "Israélienne",
  "grillades-buenos-aires":    "Argentine",
  "mosugo":                    "Africaine",
  "shang-palace":              "Chinoise",
  "jamrock":                   "Caribéenne",
  "east-mamma":                "Italienne",
  "osteria-goto":              "Italienne",
  "ober-mamma":                "Italienne",
  "popine-sacre-coeur":        "Italienne",
  "dilia":                     "Italienne",
  "chakaiseki-akiyoshi":       "Japonaise",
  "kodawari-ramen-tsukiji":    "Japonaise",
  "sokcho":                    "Japonaise",
  "sharma-ji":                 "Indienne",
  "kubri":                     "Méditerranéenne",
  "condesa":                   "Bistronomique",
  "le-galopin":                "Bistronomique",
  "septime":                   "Bistronomique",
  "geosmine":                  "Gastronomique",
  "bellefeuille":              "Gastronomique",
  "le-pre-catelan":            "Gastronomique",
  "l-accolade":                "Bistronomique",
  "brasserie-rosie":           "Brasserie",
  "la-coupole":                "Brasserie",
  "le-moulin-de-la-galette":   "Brasserie",
  "le-duc":                    "Fruits de Mer",
  "la-mascotte-montmartre":    "Française",
};

function walk(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) results = results.concat(walk(filePath));
        else if (filePath.endsWith(".ts") && !filePath.includes("index.ts")) results.push(filePath);
    });
    return results;
}

function processFile(filePath: string) {
    let content = fs.readFileSync(filePath, "utf-8");
    const slug = path.basename(filePath, ".ts");

    // Détection cuisine
    const subcatMatch = content.match(/subcategory:\s*\[(.*?)\]/s);
    const rawTags = subcatMatch ? subcatMatch[1].split(",").map(s => s.trim().replace(/['"]/g, "")).filter(Boolean) : [];
    
    let cuisine = "Française";
    if (SLUG_OVERRIDES[slug]) {
        cuisine = SLUG_OVERRIDES[slug];
    } else {
        const clean = rawTags.filter(t => !["terrasse", "rooftop", "historique"].includes(t));
        for (const t of clean) {
            if (t !== "français" && CUISINE_MAP[t]) { cuisine = CUISINE_MAP[t]; break; }
        }
    }

    // Normalisation OBLIGATOIRE du must_eat
    // On cherche must_eat quel que soit le délimiteur (", ', `)
    const mustEatRegex = /(must_eat:\s*)(["'`])([\s\S]*?)\2(,?)/g;
    
    content = content.replace(mustEatRegex, (match, prefix, quote, value, comma) => {
        let val = value.trim();
        
        // Nettoyage multi-lignes et espaces superflus
        val = val.replace(/\n\s*/g, " ");
        
        // Si c'est déjà normalisé et pas générique, on ne touche à rien
        if (val.startsWith("Cuisine ") && !["TODO", "Spécialité Maison", "Plat de saison"].some(m => val.includes(m))) {
            return match;
        }

        // Si c'est vide ou générique
        if (!val || val === "TODO" || ["Spécialité Maison", "Plat de saison", "Plat signature"].some(m => val.includes(m))) {
            return `${prefix}"Cuisine ${cuisine}. À découvrir sur place."${comma}`;
        }

        // Si c'est du contenu réel sans préfixe
        if (!val.startsWith("Cuisine ")) {
            return `${prefix}"Cuisine ${cuisine}. ${val.replace(/^Cuisine .*?\.\s*/, "")}"${comma}`;
        }

        return match;
    });

    fs.writeFileSync(filePath, content);
}

console.log("🏭 ULTIMATE FORGE V5 — Standard Moelle 2026");
const files = walk(REGISTRY_PATH);
files.forEach(f => processFile(f));
console.log("✅ Forge terminée.");
