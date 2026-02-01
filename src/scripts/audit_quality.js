const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/pois_flattened.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const places = JSON.parse(rawData);

console.log(`🔍 Auditing ${places.length} places...`);

let genericRealTalk = 0;
let missingPricing = 0;
let missingMenu = 0;
let shortDescriptions = 0;

places.forEach(p => {
    // 1. Real Talk Check
    if (!p.real_talk || !p.real_talk.text || p.real_talk.text.length < 20 || p.real_talk.text.toLowerCase().includes("lorem")) {
        console.warn(`[RealTalk] ${p.name} has weak Real Talk: "${p.real_talk?.text}"`);
        genericRealTalk++;
    }

    // 2. Pricing Check
    if (!p.pricing) {
        console.warn(`[Pricing] ${p.name} has NO pricing`);
        missingPricing++;
    } else if (!p.pricing.menu_items || p.pricing.menu_items.length === 0) {
        console.warn(`[Menu] ${p.name} has NO menu items`);
        missingMenu++;
    }

    // 3. Description Score
    if (!p.description || p.description.length < 50) {
        console.warn(`[Desc] ${p.name} has short description`);
        shortDescriptions++;
    }
});

console.log('--- Summary ---');
console.log(`Weak Real Talk: ${genericRealTalk}`);
console.log(`Missing Pricing: ${missingPricing}`);
console.log(`Missing Menus: ${missingMenu}`);
console.log(`Short Descriptions: ${shortDescriptions}`);
if (genericRealTalk + missingPricing + missingMenu + shortDescriptions === 0) {
    console.log('✅ Data Quality is PERFECT (according to heuristics)');
} else {
    console.log('⚠️  Data Quality issues found.');
}
