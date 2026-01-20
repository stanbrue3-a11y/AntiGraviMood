const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/pois_flattened.json'));
let report = {
    missing_desc: [],
    short_desc: [],
    missing_realtalk: [],
    placeholder_text: [],
    encoding_issues: [],
    bad_grammar: []
};

const ENCODING_REGEX = /[ÃÂ][©®™¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ]/;
const PLACEHOLDER_TERMS = ['lorem', 'ipsum', 'todo', 'à venir', 'a venir', 'description', 'test'];

data.forEach(p => {
    // 1. Description Checks
    if (!p.description) {
        report.missing_desc.push(p.name);
    } else {
        if (p.description.length < 50) report.short_desc.push(`${p.name} (${p.description.length} chars)`);
        if (PLACEHOLDER_TERMS.some(t => p.description.toLowerCase().includes(t))) report.placeholder_text.push(`${p.name} (Description)`);
        if (ENCODING_REGEX.test(p.description)) report.encoding_issues.push(`${p.name} (Description)`);
    }

    // 2. Real Talk Checks
    if (!p.real_talk || !p.real_talk.text) {
        report.missing_realtalk.push(p.name);
    } else {
        const rt = p.real_talk.text;
        if (rt.length < 30) report.short_desc.push(`${p.name} (Real Talk)`);
        if (PLACEHOLDER_TERMS.some(t => rt.toLowerCase().includes(t))) report.placeholder_text.push(`${p.name} (Real Talk)`);
        if (ENCODING_REGEX.test(rt)) report.encoding_issues.push(`${p.name} (Real Talk)`);
        // Check grammar (starts with lowercase)
        if (/^[a-z]/.test(rt)) report.bad_grammar.push(`${p.name} (Real Talk starts lowercase)`);
    }

    // 3. Practical Info Keys
    if (p.practical_info) {
        Object.keys(p.practical_info).forEach(k => {
            const val = p.practical_info[k];
            if (typeof val === 'string' && ENCODING_REGEX.test(val)) {
                report.encoding_issues.push(`${p.name} (Info: ${k})`);
            }
        });
    }
});

console.log("=== REPORT AUDIT TEXTE ===");
console.log(`POIs scannés : ${data.length}\n`);

if (report.missing_desc.length > 0) console.log(`❌ Descriptions manquantes (${report.missing_desc.length}):`, report.missing_desc.slice(0, 5));
if (report.short_desc.length > 0) console.log(`⚠️ Descriptions trop courtes (${report.short_desc.length}):`, report.short_desc.slice(0, 5));
if (report.missing_realtalk.length > 0) console.log(`❌ Real Talk manquant (${report.missing_realtalk.length}):`, report.missing_realtalk.slice(0, 5));
if (report.placeholder_text.length > 0) console.log(`🚧 Placeholders détectés (${report.placeholder_text.length}):`, report.placeholder_text);
if (report.encoding_issues.length > 0) console.log(`UTF-8 Issues (${report.encoding_issues.length}):`, report.encoding_issues);
if (report.bad_grammar.length > 0) console.log(`Grammaire (${report.bad_grammar.length}):`, report.bad_grammar.slice(0, 5));

if (Object.values(report).every(arr => arr.length === 0)) {
    console.log("✅ AUCUNE ANOMALIE TEXTUELLE DÉTECTÉE !");
}
