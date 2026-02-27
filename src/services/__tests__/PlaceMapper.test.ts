/** @jest-environment node */
/**
 * PlaceMapper Test Suite — Industrial Coverage
 * Tests the critical data transformation layer: DB Row → Place / PlaceSkeleton
 */
import { PlaceMapper } from '../PlaceMapper';
import { MOCK_PLACE_ROW } from '../testFixtures';
import { PlaceRow } from '../../types/model';

const BASE_ROW = MOCK_PLACE_ROW;

// ============================================================
// mapRowToSkeleton
// ============================================================
describe('PlaceMapper.mapRowToSkeleton', () => {
  it('should extract only lightweight fields', () => {
    const skeleton = PlaceMapper.mapRowToSkeleton(BASE_ROW);

    expect(skeleton.id).toBe('poi-test-place');
    expect(skeleton.name).toBe('Test Place');
    expect(skeleton.slug).toBe('test-place');
    expect(skeleton.category).toBe('bar');
  });

  it('should correctly map coordinates', () => {
    const skeleton = PlaceMapper.mapRowToSkeleton(BASE_ROW);

    expect(skeleton.location.coordinates.lat).toBe(48.8566);
    expect(skeleton.location.coordinates.lng).toBe(2.3522);
    expect(skeleton.location.arrondissement).toBe(75011);
    expect(skeleton.location.address).toBe('123 Industrial Ave, 75011 Paris');
  });

  it('should parse subcategories from comma-separated string', () => {
    const skeleton = PlaceMapper.mapRowToSkeleton(BASE_ROW);

    expect(skeleton.subcategories).toEqual(['cocktail', 'terrace']);
  });

  it('should determine dominant mood from scores', () => {
    const skeleton = PlaceMapper.mapRowToSkeleton(BASE_ROW);

    expect(skeleton.dominant_mood).toBe('chill');
  });

  it('should extract hero_image into media', () => {
    const skeleton = PlaceMapper.mapRowToSkeleton(BASE_ROW);

    expect(skeleton.media.hero_image).toBe('https://example.com/hero.jpg');
  });

  it('should map Google rating and total', () => {
    const skeleton = PlaceMapper.mapRowToSkeleton(BASE_ROW);

    expect(skeleton.google_rating).toBe(4.5);
    expect(skeleton.google_user_ratings_total).toBe(100);
  });

  it('should NOT contain heavy properties (description, vibes, social_preview)', () => {
    const skeleton = PlaceMapper.mapRowToSkeleton(BASE_ROW);
    const keys = Object.keys(skeleton);

    expect(keys).not.toContain('description');
    expect(keys).not.toContain('vibes');
    expect(keys).not.toContain('social_preview');
    expect(keys).not.toContain('mood_scores');
    expect(keys).not.toContain('real_talk');
    expect(keys).not.toContain('opening_hours');
  });

  it('should handle missing subcategory gracefully', () => {
    const row = { ...BASE_ROW, subcategory: null } as unknown as PlaceRow;
    const skeleton = PlaceMapper.mapRowToSkeleton(row);

    expect(skeleton.subcategories).toEqual([]);
  });

  it('should handle zero rating as undefined', () => {
    const row = { ...BASE_ROW, rating: 0, user_ratings_total: 0 } as unknown as PlaceRow;
    const skeleton = PlaceMapper.mapRowToSkeleton(row);

    expect(skeleton.google_rating).toBeUndefined();
    expect(skeleton.google_user_ratings_total).toBeUndefined();
  });
});

// ============================================================
// mapRowToPlace (Full)
// ============================================================
describe('PlaceMapper.mapRowToPlace', () => {
  it('should map all fields for a full Place object', () => {
    const place = PlaceMapper.mapRowToPlace(BASE_ROW);

    expect(place.id).toBe('poi-test-place');
    expect(place.name).toBe('Test Place');
    expect(place.description).toBe(
      'A strictly typed mock place for testing the Industrial 2026 Data Engine.',
    );
  });

  it('should parse mood_scores from JSON', () => {
    const place = PlaceMapper.mapRowToPlace(BASE_ROW);

    expect(place.mood_scores.festif.overall).toBe(30);
    expect(place.mood_scores.chill.overall).toBe(80);
  });

  it('should parse vibes from JSON', () => {
    const place = PlaceMapper.mapRowToPlace(BASE_ROW);

    expect(place.vibes).toEqual(['chill', 'industrial']);
  });

  it('should parse social_preview from JSON', () => {
    const place = PlaceMapper.mapRowToPlace(BASE_ROW);

    expect(place.social_preview.like_count).toBe(42);
    expect(place.social_preview.moment_count).toBe(5);
  });

  it('should parse real_talk insider_tip', () => {
    const place = PlaceMapper.mapRowToPlace(BASE_ROW);

    expect(place.real_talk?.insider_tip).toContain('Go early');
  });

  it('should handle completely null JSON fields gracefully', () => {
    const row = {
      ...BASE_ROW,
      mood_scores_json: null,
      vibes_json: null,
      social_json: null,
      real_talk_json: null,
      editorial_json: null,
    } as unknown as PlaceRow;

    const place = PlaceMapper.mapRowToPlace(row);

    expect(place.vibes).toEqual([]);
    expect(place.social_preview.like_count).toBe(0);
  });

  it('should handle malformed JSON without crashing', () => {
    const row = {
      ...BASE_ROW,
      mood_scores_json: '{invalid json!!}',
      vibes_json: 'not an array',
    } as unknown as PlaceRow;

    // Should NOT throw — PlaceMapper must be resilient
    expect(() => PlaceMapper.mapRowToPlace(row)).not.toThrow();
  });
});
