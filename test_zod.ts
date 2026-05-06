import allPlaces from './src/data/registry/index';
import { PlacePricingSchema, PlaceRealTalkSchema, PlaceEditorialSchema, PlaceMoodScoresSchema } from './src/schemas/place.validation';

let errorCount = 0;
for (const p of allPlaces) {
    if (p.pricing) {
        const res = PlacePricingSchema.safeParse(p.pricing);
        if (!res.success) {
            console.error('Pricing Error on', p.name, JSON.stringify(res.error.format()));
            errorCount++;
        }
    }
    if (p.real_talk) {
        const res = PlaceRealTalkSchema.safeParse(p.real_talk);
        if (!res.success) {
            console.error('RealTalk Error on', p.name, JSON.stringify(res.error.format()));
            errorCount++;
        }
    }
    if (p.practical) {
        const res = PlaceEditorialSchema.safeParse(p.practical);
        if (!res.success) {
            console.error('Editorial Error on', p.name, JSON.stringify(res.error.format()));
            errorCount++;
        }
    }
    if (p.moods) {
        const res = PlaceMoodScoresSchema.safeParse(p.moods);
        if (!res.success) {
            console.error('Mood Error on', p.name, JSON.stringify(res.error.format()));
            errorCount++;
        }
    }
}
console.log('Total errors:', errorCount);
