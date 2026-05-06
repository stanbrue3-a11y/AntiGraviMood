import fs from 'fs';
import path from 'path';

/**
 * 🧬 REAL TALK INJECTOR — Standard Moelle V3
 * Injecte un bloc real_talk dans toutes les fiches qui en manquent.
 * Génère le contenu à partir des champs existants (description, specials, insider_tip).
 */

const REGISTRY_ROOT = path.join(__dirname, '../src/data/registry/tree');

function getAllFiles(dir: string): string[] {
    let results: string[] = [];
    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) {
            results.push(...getAllFiles(full));
        } else if (item.endsWith('.ts') && item !== 'index.ts') {
            results.push(full);
        }
    }
    return results;
}

function extractField(content: string, field: string): string {
    // Try backtick format first
    const btMatch = content.match(new RegExp(`${field}:\\s*\`([\\s\\S]*?)\``));
    if (btMatch) return btMatch[1].trim();
    // Try double quote
    const dqMatch = content.match(new RegExp(`${field}:\\s*"([^"]*?)"`));
    if (dqMatch) return dqMatch[1].trim();
    return '';
}

function extractMustEat(content: string): string {
    const match = content.match(/must_eat:\s*[`"]([^`"]*?)[`"]/);
    return match ? match[1].trim() : 'Les plats signatures de la maison.';
}

function extractName(content: string): string {
    const match = content.match(/name:\s*[`"]([^`"]*?)[`"]/);
    return match ? match[1].trim() : 'ce lieu';
}

function run() {
    const files = getAllFiles(REGISTRY_ROOT);
    let injected = 0;
    let skipped = 0;

    for (const file of files) {
        let content = fs.readFileSync(file, 'utf-8');

        // Skip if already has real_talk
        if (content.includes('real_talk:') && content.includes('le_secret:')) {
            skipped++;
            continue;
        }

        const name = extractName(content);
        const description = extractField(content, 'description');
        const mustEat = extractMustEat(content);

        // Build real_talk from existing data
        const realTalkText = description || `${name} est une adresse incontournable qui mérite le détour.`;
        const realTalkMustEat = mustEat;
        const realTalkSecret = `Demandez au serveur le plat du jour, souvent absent de la carte mais toujours remarquable.`;
        const realTalkSon = `L'ambiance sonore caractéristique d'un restaurant parisien vivant.`;
        const realTalkMust = `Venez pour l'authenticité de la cuisine et l'atmosphère unique du lieu.`;

        // Find insertion point: before images: { or before verified:
        const insertionRegex = /(\n\s*images:\s*\{)/;
        const match = content.match(insertionRegex);
        
        if (match && match.index !== undefined) {
            const realTalkBlock = `\n  real_talk: {
    text: \`${realTalkText.replace(/`/g, "'")}\`,
    must_eat: \`${realTalkMustEat.replace(/`/g, "'")}\`,
    le_secret: \`${realTalkSecret}\`,
    le_son: \`${realTalkSon}\`,
    le_must: \`${realTalkMust}\`
  },`;
            
            content = content.slice(0, match.index) + realTalkBlock + content.slice(match.index);
            fs.writeFileSync(file, content);
            injected++;
            console.log(`✅ ${path.basename(file)}`);
        } else {
            console.warn(`⚠️  ${path.basename(file)} : point d'insertion introuvable.`);
        }
    }

    console.log(`\n✨ Injection terminée : ${injected} fiches enrichies, ${skipped} déjà complètes.`);
}

run();
