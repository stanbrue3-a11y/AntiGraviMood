import fs from "fs";
import path from "path";

// ════════════════════════════════════════════════════════════
// 🏷️ SUBCATEGORY PATCH — Standard Moelle 2026
// Classification manuelle expert par connaissance gastronomique
// Bypass total de l'IA — Données curées à la main
// ════════════════════════════════════════════════════════════

require("dotenv").config({ path: path.join(__dirname, "../.env") });
const REGISTRY_ROOT = path.join(__dirname, "../src/data/registry/tree");
const DRY_RUN = process.argv.includes("--dry-run");

// ── Base de classification experte ──────────────────────────
// Format: slug → subcategories correctes (Whitelist Moelle 2026)
const CLASSIFICATION: Record<string, string[]> = {

    // ── 1er ──────────────────────────────────────────────────
    "la-dame-de-pic":                   ["gastronomique", "français"],

    // ── 4ème ─────────────────────────────────────────────────
    "l-as-du-fallafel":                 ["libanais", "street-food"],

    // ── 7ème ─────────────────────────────────────────────────
    "firmin-le-barbier":                ["bistrot", "français"],

    // ── 10ème ────────────────────────────────────────────────
    "cavale":                           ["bistronomie", "français"],
    "fulgurances":                      ["gastronomique", "français"],
    "jamrock":                          ["caribéen", "américain"],
    "moonshiner":                       ["bar à vin", "américain"],
    "brasserie-rosie":                  ["brasserie", "français"],
    "present":                          ["bistronomie", "français"],
    "a-la-renaissance":                 ["bistrot", "français"],
    "korus":                            ["coréen"],
    "qui-plume-la-lune":               ["gastronomique", "français"],
    "l-avant-poste-nouvellement-les-resistants-la-table": ["bistronomie", "français"],
    "le-bistrot-de-la-place":           ["bistrot", "français"],

    // ── 11ème ────────────────────────────────────────────────
    "biondi":                           ["argentin", "bistrot"],
    "folderol":                         ["bistronomie", "français"],
    "goguette":                         ["bistronomie", "français"],
    "osteria-goto":                     ["italien"],
    "atelier-saisonnier":               ["végétarien", "bistronomie"],
    "cafe-du-coin":                     ["bistrot", "français"],
    "l-ecailler-du-bistrot":            ["fruits de mer", "français"],
    "le-6-paul-bert":                   ["bistronomie", "français"],
    "le-chardenoux":                    ["bistrot", "français"],
    "les-deserteurs":                   ["bistronomie", "français"],
    "mokoloco":                         ["mexicain"],
    "vaisseau":                         ["bistronomie", "français"],
    "mokonuts":                         ["fusion", "méditerranéen"],
    "pianovins":                        ["bar à vin", "français"],
    "acolyte-insolite":                 ["bistronomie", "français"],
    "auberge-pyrenees-cevennes":        ["bistrot", "français"],
    "aujourdhui-demain":               ["bistronomie", "végétarien"],
    "blanca":                           ["mexicain", "fusion"],
    "fief":                             ["gastronomique", "français"],
    "geosmine":                         ["gastronomique", "français"],
    "gramme-11":                        ["bistronomie", "français"],
    "impact-kebap":                     ["turc", "street-food"],
    "l-homme-bleu":                     ["tunisien", "méditerranéen"],
    "melt-oberkampf":                   ["américain", "street-food"],
    "onze-a-table":                     ["bistrot", "français"],
    "pierre-sang-gambey":               ["coréen", "fusion"],
    "epopee":                           ["bistronomie", "français"],
    "kai-izakaya":                      ["japonais"],
    "lacigne":                          ["bistronomie", "français"],
    "perchoir-menilmontant":            ["brasserie", "français"],
    "le-yard":                          ["bistronomie", "français"],
    "acme":                             ["bistronomie", "français"],
    "orgueil":                          ["bistronomie", "français"],
    "pierre-sang-oberkampf":            ["coréen", "fusion"],
    "soya":                             ["végétarien"],
    "astier":                           ["bistrot", "français"],
    "bouche":                           ["bistronomie", "français"],
    "chulita":                          ["mexicain"],
    "le-dauphin":                       ["tapas", "bistronomie"],
    "les-3-bornes":                     ["bistrot", "français"],
    "passerini":                        ["italien"],
    "picotte":                          ["bistronomie", "français"],
    "brutos":                           ["bistronomie", "français"],
    "louloute":                         ["bistrot", "français"],
    "le-tagine":                        ["marocain"],
    "tarantula":                        ["mexicain"],
    "track-119":                        ["street-food", "américain"],
    "zaoka":                            ["japonais"],
    "la-mano":                          ["argentin", "bistrot"],
    "comptoir-sur-mer":                 ["fruits de mer", "méditerranéen"],
    "melt-paris":                       ["américain", "street-food"],

    // ── 12ème ────────────────────────────────────────────────
    "brasserie-martin":                 ["brasserie", "français"],
    "le-goyavier":                      ["créole", "fusion"],
    "el-comal":                         ["mexicain"],
    "erso":                             ["bistronomie", "français"],
    "la-buvette":                       ["bar à vin", "français"],
    "au-passage":                       ["tapas", "bar à vin"],
    "godaille":                         ["bistrot", "français"],
    "le-baron-rouge":                   ["bar à vin", "français"],
    "le-poisson-d-aligre":              ["fruits de mer", "français"],
    "virtus":                           ["gastronomique", "français"],
    "le-mazette":                       ["bistrot", "français"],
    "le-dalou":                         ["bistrot", "français"],

    // ── 13ème ────────────────────────────────────────────────
    "au-petit-marguery":                ["bistrot", "français"],
    "auberge-de-la-butte":              ["bistrot", "français"],
    "chez-gladines-butte-aux-cailles":  ["basque", "français"],
    "chez-mamane":                      ["tunisien", "méditerranéen"],
    "hawai":                            ["vietnamien", "asiatique"],
    "il-etait-un-square-burger-paris":  ["américain", "street-food"],
    "l-age-d-or":                       ["bistronomie", "français"],
    "lao-viet":                         ["vietnamien", "asiatique"],
    "mondol-kiri":                      ["cambodgien", "asiatique"],
    "pepe-rosso":                       ["pizzeria", "italien"],
    "restaurant-lao-lane-xang":         ["laotien", "asiatique"],
    "sinorama":                         ["chinois"],
    "tang-gourmet":                     ["chinois"],
    "thai-vien":                        ["thaï"],
    "viet-thai":                        ["vietnamien", "thaï"],
    "wonderland-patisserie":            ["français"],  // pâtisserie française

    // ── 14ème ────────────────────────────────────────────────
    "restaurant-korean-barbecue":       ["coréen"],
    "augustin-bistrot-14":              ["bistrot", "français"],
    "au-bistrot-a-cote":                ["bistrot", "français"],
    "creperie-de-pont-aven":            ["bistrot", "français"],
    "jazz-cafe-montparnasse":           ["brasserie", "français"],
    "mosugo-mory-sacko-14":             ["africain", "gastronomique"],
    "umami-burger-montparnasse":        ["américain", "japonais"],
    "le-bistrot-du-dome-paris-14":      ["fruits de mer", "français"],
    "les-grillades-de-buenos-aires":    ["argentin"],
    "le-duc-paris-14":                  ["fruits de mer", "gastronomique"],
    "a-mi-chemin-paris-14":             ["bistrot", "français"],
    "la-cantine-du-troquet-pernety-paris-14": ["bistrot", "basque"],
    "la-cerisaie-paris-14":             ["gastronomique", "français"],
    "l-entrepot":                       ["brasserie", "français"],
    "papy-aux-fourneaux-paris":         ["bistrot", "français"],
    "bistrotters-paris-14":             ["bistronomie", "français"],
    "le-cornichon-paris-14":            ["bistronomie", "français"],
    "les-petits-plats-paris-14":        ["bistrot", "français"],
    "le-severo-paris-14":               ["bistrot", "français"],

    // ── 15ème ────────────────────────────────────────────────
    "afaria":                           ["basque", "bistronomie"],
    "cafe-fleur":                       ["bistrot", "français"],
    "de-la-tour":                       ["bistrot", "français"],
    "l-antre-amis":                     ["bistronomie", "français"],
    "l-os-a-moelle":                    ["bistrot", "français"],
    "le-belisaire":                     ["bistrot", "français"],
    "le-bistrot-d-andre":               ["brasserie", "français"],
    "le-bouchon-parisien":              ["bistrot", "français"],
    "le-grand-pan":                     ["bistrot", "viande d'exception"],
    "le-troquet":                       ["basque", "bistronomie"],
    "pedzouille-la-grange":             ["bistrot", "français"],
    "le-baribal":                       ["bistronomie", "français"],

    // ── 16ème ────────────────────────────────────────────────
    "cravan-paris-16e":                 ["bar à vin", "bistronomie"],
    "auberge-du-bonheur":               ["brasserie", "français"],
    "bambini-paris":                    ["italien"],
    "bellefeuille":                     ["gastronomique", "français"],
    "comice":                           ["gastronomique", "français"],
    "corail-restaurant":                ["fruits de mer", "méditerranéen"],
    "geoelia":                          ["gastronomique", "français"],
    "le-petit-retro":                   ["bistrot", "français"],
    "radioeat":                         ["fusion", "street-food"],
    "restaurant-don-juan-ii-yachts-de-paris": ["gastronomique", "français"],
    "substance":                        ["gastronomique", "français"],
    "zostera":                          ["gastronomique", "français"],
    "forest":                           ["gastronomique", "français"],
    "monsieur-bleu":                    ["brasserie", "français"],
    "girafe":                           ["fruits de mer", "gastronomique"],

    // ── 17ème ────────────────────────────────────────────────
    "maison-revka":                     ["gastronomique", "français"],
    "bistrot-flonflon":                 ["bistrot", "français"],
    "frederic-simonin-restaurant":      ["gastronomique", "français"],
    "gare-au-gorille":                  ["bistronomie", "français"],
    "l-agape":                          ["gastronomique", "français"],
    "le-17-45":                         ["bar à vin", "bistronomie"],
    "le-bonheur-de-cardinet":           ["bistrot", "français"],
    "mallory-gabsi":                    ["gastronomique", "tunisien"],
    "mamma-primi":                      ["italien"],
    "mano-a-mano-pizza-restaurant":     ["pizzeria", "italien"],
    "oxte":                             ["mexicain"],
    "papillon":                         ["gastronomique", "français"],
    "restaurant-le-faham":              ["gastronomique", "fusion"],
    "coretta":                          ["bistronomie", "français"],
    "l-entredgeu":                      ["bistrot", "français"],
    "le-p-tit-canon":                   ["bar à vin", "bistrot"],
    "chantoiseau":                      ["bistronomie", "français"],
    "l-arcane":                         ["gastronomique", "français"],
    "le-coq-fils-the-poultry-house":    ["bistrot", "français"],

    // ── 18ème ────────────────────────────────────────────────
    "rue-forest":                       ["bistronomie", "français"],
    "bulot-bulot":                      ["fruits de mer", "bistrot"],
    "chez-maman":                       ["bistrot", "français"],
};

// ── Fonctions utilitaires ────────────────────────────────────

function walk(dir: string): string[] {
    const res: string[] = [];
    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) res.push(...walk(full));
        else if (item.endsWith(".ts") && !item.includes("index")) res.push(full);
    }
    return res;
}

function getSlug(content: string): string | null {
    return content.match(/slug:\s*"([^"]+)"/)?.[1] || null;
}

function applyPatch(content: string, tags: string[]): string {
    const arr = tags.map(t => `"${t}"`).join(", ");
    return content.replace(/subcategory:\s*\[[\s\S]*?\]/, `subcategory: [${arr}]`);
}

// ── Main ─────────────────────────────────────────────────────

function main() {
    const files = walk(REGISTRY_ROOT);
    let patched = 0;
    let skipped = 0;
    let notInDb = 0;
    const unknown: string[] = [];

    console.log("═".repeat(60));
    console.log("🏷️  SUBCATEGORY PATCH — Standard Moelle 2026");
    if (DRY_RUN) console.log("🧪 MODE DRY-RUN — aucune écriture");
    console.log("═".repeat(60));

    for (const fp of files) {
        const content = fs.readFileSync(fp, "utf-8");
        if (!content.includes('subcategory: ["français"]')) continue;

        const slug = getSlug(content);
        if (!slug) continue;

        const tags = CLASSIFICATION[slug];
        if (!tags) {
            // Not in our DB — flag for manual review
            const name = content.match(/name:\s*"([^"]+)"/)?.[1] || slug;
            unknown.push(`${slug} (${name})`);
            notInDb++;
            continue;
        }

        // Skip if correct tags already applied (idempotence)
        if (tags.length === 1 && tags[0] === "français") {
            skipped++;
            continue;
        }

        const updated = applyPatch(content, tags);
        if (!DRY_RUN) fs.writeFileSync(fp, updated);

        console.log(`   ✅ ${slug} → [${tags.join(", ")}]`);
        patched++;
    }

    console.log("\n" + "═".repeat(60));
    console.log("📊 RAPPORT");
    console.log("═".repeat(60));
    console.log(`✅ Patchés  : ${patched}`);
    console.log(`⏭️  Skippés  : ${skipped}`);
    console.log(`❓ Inconnus : ${notInDb}`);

    if (unknown.length > 0) {
        console.log("\n⚠️  À CLASSIFIER MANUELLEMENT :");
        unknown.forEach(u => console.log(`   • ${u}`));
    }
}

main();
