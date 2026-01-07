const fs = require('fs');
const path = require('path');

const POIS_PATH = path.join(__dirname, '../src/data/pois.json');

const CATEGORY_HOURS = {
    'club': { start: '23:00', end: '06:00' }, // Late night
    'bar': { start: '17:00', end: '02:00' },
    'restaurant': { start: '12:00', end: '23:30' },
    'café': { start: '08:00', end: '20:00' },
    'parc': { start: '07:00', end: '21:00' },
    'museum': { start: '10:00', end: '18:00' },
    'default': { start: '09:00', end: '19:00' }
};

try {
    const rawData = fs.readFileSync(POIS_PATH, 'utf8');
    const pois = JSON.parse(rawData);

    const updatedPois = pois.map(place => {
        // If already has complex hours, skip (unlikely)
        if (place.opening_hours) return place;

        const cat = place.category || 'default';
        const hours = CATEGORY_HOURS[cat] || CATEGORY_HOURS['default'];

        // Simple format: "HH:MM-HH:MM" for every day
        // In a real app we'd have per-day. For this mock, we assume 7 days a week.
        return {
            ...place,
            opening_hours: {
                standard: `${hours.start}-${hours.end}`
            }
        };
    });

    fs.writeFileSync(POIS_PATH, JSON.stringify(updatedPois, null, 2), 'utf8');
    console.log(`Updated ${updatedPois.length} places with opening hours.`);

} catch (err) {
    console.error('Error updating POIs:', err);
}
