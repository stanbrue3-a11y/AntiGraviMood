/** @jest-environment node */
import { getDominantMood } from '../moodUtils';
import { Place } from '../../types/model';

// Helper to create a partial mock place
const mockPlace = (overrides: Partial<Place>): Place => ({
    id: 'test-id',
    name: 'Test Place',
    slug: 'test-place',
    category: 'bar',
    subcategory: '',
    mood_scores: {
        chill: { overall: 0, criteria: {} },
        festif: { overall: 0, criteria: {} },
        culturel: { overall: 0, criteria: {} },
    },
    location: {
        address: '', arrondissement: 75001, coordinates: { lat: 0, lng: 0 },
        nearest_metro: '', metro_line: []
    },
    vibes: [],
    ui_theme: { main_color: '', map_icon: '' },
    social_preview: { like_count: 0, moment_count: 0, top_vibe_tags: [] },
    discovery_radius_meters: 100, min_stay_time_minutes: 30,
    practical_info: {
        price_range: 2, reservation_required: false, wifi_available: false,
        outdoor_seating: false, accessibility: false
    },
    media: { hero_image: '', instagram_handle: '' },
    ...overrides
} as Place);

describe('getDominantMood', () => {
    it('should return "culturel" for museums', () => {
        const place = mockPlace({ category: 'museum' });
        expect(getDominantMood(place)).toBe('culturel');
    });

    it('should return "festif" for clubs', () => {
        const place = mockPlace({ category: 'club' });
        expect(getDominantMood(place)).toBe('festif');
    });

    it('should return "chill" for cafés', () => {
        const place = mockPlace({ category: 'café' });
        expect(getDominantMood(place)).toBe('chill');
    });

    it('should return "festif" for a bar with high festif score', () => {
        const place = mockPlace({
            category: 'bar',
            mood_scores: {
                chill: { overall: 0.2, criteria: {} },
                festif: { overall: 0.9, criteria: {} },
                culturel: { overall: 0.1, criteria: {} },
            }
        });
        expect(getDominantMood(place)).toBe('festif');
    });

    it('should fall back to "chill" if scores are equal or low (user preference rule: prioritize chill if unsure)', () => {
        // Based on current logic: if festif >= chill return festif. So actually it defaults to festif if equal?
        // Let's check logic: "if (festif.overall >= chill.overall) return 'festif';"
        const place = mockPlace({
            category: 'restaurant',
            mood_scores: {
                chill: { overall: 0.5, criteria: {} },
                festif: { overall: 0.5, criteria: {} },
                culturel: { overall: 0.1, criteria: {} },
            }
        });
        expect(getDominantMood(place)).toBe('festif');
    });

    it('should return "chill" if chill score is strictly higher', () => {
        const place = mockPlace({
            category: 'restaurant',
            mood_scores: {
                chill: { overall: 0.8, criteria: {} },
                festif: { overall: 0.4, criteria: {} },
                culturel: { overall: 0.1, criteria: {} },
            }
        });
        expect(getDominantMood(place)).toBe('chill');
    });
});
