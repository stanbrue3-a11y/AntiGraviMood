const fs = require('fs');
const path = require('path');

const filePath = '/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/pois.json';
const rawData = fs.readFileSync(filePath, 'utf8');
let pois = JSON.parse(rawData);

// Regex to match emojis (ranges)
// Common ranges: Emoticons, Dingbats, Transport/Map symbols, Enclosed Alphanumeric, etc.
// \u2700-\u27BF: Dingbats
// \uE000-\uF8FF: Private Use (sometimes custom fonts)
// \uD83C.. - \uD83E..: Surrogate pairs for emojis
const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;

let modifiedCount = 0;

pois = pois.map(place => {
    let wasModified = false;

    // Check practical_info values
    if (place.practical_info) {
        Object.keys(place.practical_info).forEach(key => {
            const val = place.practical_info[key];
            if (typeof val === 'string') {
                // Remove emojis
                const cleanVal = val.replace(emojiRegex, '').trim();
                // Replace double spaces
                const finalVal = cleanVal.replace(/\s\s+/g, ' ');

                if (finalVal !== val) {
                    place.practical_info[key] = finalVal;
                    wasModified = true;
                    // console.log(`Cleaned: "${val}" -> "${finalVal}"`);
                }
            }
        });
    }

    // Check other fields if needed (description?)
    if (place.description) {
        const cleanVal = place.description.replace(emojiRegex, '').trim().replace(/\s\s+/g, ' ');
        if (cleanVal !== place.description) {
            place.description = cleanVal;
            wasModified = true;
        }
    }

    if (wasModified) modifiedCount++;
    return place;
});

console.log(`Modified ${modifiedCount} places.`);

// Write back
fs.writeFileSync(filePath, JSON.stringify(pois, null, 4));
