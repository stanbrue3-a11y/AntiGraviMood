import fs from 'fs';
import path from 'path';

const files = process.argv.slice(2);

if (files.length === 0) {
    console.error('❌ Usage: npx tsx scripts/audit_lot.ts path/to/file1.ts path/to/file2.ts ...');
    process.exit(1);
}

let errorCount = 0;

const FORBIDDEN_NAMES = ['Arthur', 'Jean', 'Marie', 'Kevin', 'Mélanie', 'Nicolas', 'Thomas', 'Julien'];

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.error(`❓ Fichier introuvable : ${file}`);
        return;
    }

    const content = fs.readFileSync(file, 'utf-8');
    const basename = path.basename(file);
    const errors: string[] = [];
    const warnings: string[] = [];

    // Pre-match components
    const mustEatMatch = content.match(/must_eat: "(.*?)"/);
    const realTalkMatch = content.match(/real_talk: \{([\s\S]*?)\}/);
    const descMatch = content.match(/description: `([\s\S]*?)`/);

    // 1. TODO Check
    if (content.includes('TODO')) errors.push('Contient des TODO');

    // 2. [Rule Removed: Apostrophes]

    // 3. Métro Check
    if (content.includes('nearest_metro: ""') || content.includes('nearest_metro: "TODO"')) errors.push('Métro manquant');
    if (content.includes('metro_lines: []')) errors.push('Lignes de métro vides');

    // 4. Anonymat Strict (Only in descriptions/tips)
    const textsToAudit = [descMatch?.[1], mustEatMatch?.[1], realTalkMatch?.[1], content.match(/expert_catchline: "(.*?)"/)?.[1], content.match(/insider_tip: "(.*?)"/)?.[1]].join(' ');
    FORBIDDEN_NAMES.forEach(name => {
        const regex = new RegExp(`\\b${name}\\b`, 'g');
        if (regex.test(textsToAudit)) errors.push(`Mention interdite de personne réelle (${name}) dans les descriptions`);
    });

    // 5. Must-Eat Format (Softened)
    if (mustEatMatch) {
        const val = mustEatMatch[1];
        if (!val.startsWith('Cuisine ')) {
            warnings.push('Le must_eat gagnerait à commencer par "Cuisine [Type]." pour la clarté (Optionnel).');
        }
    }

    // 6. Real Talk Structure
    const realTalkFields = ['text', 'must_eat', 'le_secret', 'le_son', 'le_must'];
    if (!realTalkMatch) {
        errors.push('Bloc real_talk manquant');
    } else {
        const rtBody = realTalkMatch[1];
        realTalkFields.forEach(field => {
            const fieldRegex = new RegExp(`['"]?${field}['"]?\\s*:`, 'g');
            if (!fieldRegex.test(rtBody)) errors.push(`Champ Real Talk manquant : ${field}`);
        });
    }

    // 7. Badges Consistency
    const descParts = [descMatch?.[1], mustEatMatch?.[1], realTalkMatch?.[1]].join(' ').toLowerCase();
    
    if ((descParts.includes('terrasse') || descParts.includes('terrace')) && content.includes('terrace: false')) {
        warnings.push('Incohérence : "terrasse" citée mais badge terrace: false');
    }
    if ((descParts.includes('michelin') || descParts.includes('étoile')) && !content.includes('certification: "gold"')) {
        warnings.push('Incohérence : "Michelin/étoile" cité mais certification non Gold');
    }
    if ((descParts.includes('tard') || descParts.includes('minuit') || descParts.includes('nuit')) && content.includes('ferme_tard: false')) {
        warnings.push('Incohérence : "tard/nuit" cité mais badge ferme_tard: false');
    }

    // 8. Description Length
    if (descMatch) {
        const sentences = descMatch[1].split(/[.!?]/).filter(s => s.trim().length > 10);
        if (sentences.length < 3) errors.push('La description doit contenir au moins 3 phrases riches.');
    }

    // 9. Pricing Check
    if (content.includes('avg_budget: 0') && !content.includes('is_free: true')) {
        errors.push('Budget à 0 alors que le lieu n’est pas marqué comme gratuit.');
    }

    // 4. VERIFICATION GPS (Standard Paris)
    const latMatch = content.match(/lat:\s*([0-9.]+)/);
    const lngMatch = content.match(/lng:\s*([0-9.]+)/);
    if (latMatch && lngMatch) {
        const lat = parseFloat(latMatch[1]);
        const lng = parseFloat(lngMatch[1]);
        if (lat < 48.8 || lat > 48.91 || lng < 2.2 || lng > 2.5) {
            errors.push(`🔴 ERROR: Coordonnées GPS hors zone Paris (${lat}, ${lng}). Vérifiez la source.`);
        }
    }

    // 5. HERMETICITÉ DES PHOTOS (Anti-mélange)
    const slugMatch = content.match(/slug:\s*[`"](.*?)[`"]/);
    if (slugMatch) {
        const slug = slugMatch[1];
        const photoPathRegex = new RegExp(`https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/(?!${slug}/)`, 'g');
        if (content.match(photoPathRegex)) {
            errors.push(`🔴 ERROR: Fuite de média détectée ! Une photo n'appartient pas au dossier "${slug}/".`);
        }
    }

    // 6. UNICITÉ GOOGLE ID (Anti-doublon)
    const googleIdMatch = content.match(/google_id:\s*[`"](.*?)[`"]/);
    if (googleIdMatch) {
        const gid = googleIdMatch[1];
        if (gid.length < 20) errors.push(`🔴 ERROR: Google ID invalide ou trop court ("${gid}").`);
    }

    if (errors.length > 0 || warnings.length > 0) {
        console.log(`${errors.length > 0 ? '❌' : '⚠️'} [AUDIT] ${basename}`);
        errors.forEach(err => console.log(`   🔴 ERROR: ${err}`));
        warnings.forEach(warn => console.log(`   🟡 WARN: ${warn}`));
        if (errors.length > 0) errorCount++;
    } else {
        console.log(`✅ [AUDIT PASS] ${basename}`);
    }
});

console.log('='.repeat(40));
if (errorCount > 0) {
    console.log(`💀 Audit terminé avec ${errorCount} échec(s) critique(s).`);
    process.exit(1);
} else {
    console.log('✨ Audit 100% réussi. Lot conforme au Standard Moelle 2026.');
}
