/** @jest-environment node */
/**
 * Zod Schema Validation Tests — Industrial Coverage
 * Tests the validation layer that sits between raw SQLite data and TypeScript interfaces.
 */
import {
  PlaceEditorialSchema,
  PlaceRealTalkSchema,
  PlacePricingSchema,
  PlaceMoodScoresSchema,
} from '../../schemas/place.validation';

// ============================================================
// PlaceRealTalkSchema
// ============================================================
describe('PlaceRealTalkSchema', () => {
  it('should parse valid real talk data', () => {
    const data = {
      insider_tip: 'Best spot for sunset',
      le_secret: 'Ask for the rum punch',
      le_son: 'Jazz every Thursday',
      la_faune: 'Creative types',
      le_must: 'The terrace',
      must_eat: 'Croque monsieur',
    };

    const result = PlaceRealTalkSchema.parse(data);
    expect(result.insider_tip).toBe('Best spot for sunset');
    expect(result.le_secret).toBe('Ask for the rum punch');
  });

  it('should convert null values to undefined (not leak null into TS)', () => {
    const data = {
      insider_tip: null,
      le_secret: null,
      le_son: null,
      la_faune: null,
      le_must: null,
      must_eat: null,
    };

    const result = PlaceRealTalkSchema.parse(data);
    expect(result.insider_tip).toBeUndefined();
    expect(result.le_secret).toBeUndefined();
    expect(result.le_son).toBeUndefined();
    expect(result.la_faune).toBeUndefined();
    expect(result.le_must).toBeUndefined();
    expect(result.must_eat).toBeUndefined();
  });

  it('should accept empty objects with passthrough', () => {
    const result = PlaceRealTalkSchema.parse({});
    expect(result.insider_tip).toBeUndefined();
  });

  it('should passthrough unknown fields', () => {
    const data = { insider_tip: 'test', unknown_field: 'value' };
    const result = PlaceRealTalkSchema.parse(data);
    expect((result as Record<string, unknown>).unknown_field).toBe('value');
  });
});


// ============================================================
// PlaceEditorialSchema
// ============================================================
describe('PlaceEditorialSchema', () => {
  it('should handle boolean terrace as boolean', () => {
    const data = { terrace: true, wifi: false };
    const result = PlaceEditorialSchema.parse(data);
    expect(result.terrace).toBe(true);
    expect(result.wifi).toBe(false);
  });

  it('should coerce numeric 1/0 to boolean for tag fields', () => {
    const data = { terrace: 1, wifi: 0, shotgun: 1 };
    const result = PlaceEditorialSchema.parse(data);
    expect(result.terrace).toBe(true);
    expect(result.wifi).toBe(false);
    expect(result.shotgun).toBe(true);
  });

  it('should coerce string "true"/"false" to boolean', () => {
    const data = { terrace: 'true', wifi: 'false' };
    const result = PlaceEditorialSchema.parse(data);
    expect(result.terrace).toBe(true);
    expect(result.wifi).toBe(false);
  });

  it('should allow happy_hour as string, object, boolean, or null', () => {
    expect(() => PlaceEditorialSchema.parse({ happy_hour: '18h-20h' })).not.toThrow();
    expect(() =>
      PlaceEditorialSchema.parse({ happy_hour: { start: '18h', end: '20h' } }),
    ).not.toThrow();
    expect(() => PlaceEditorialSchema.parse({ happy_hour: true })).not.toThrow();
    expect(() => PlaceEditorialSchema.parse({ happy_hour: null })).not.toThrow();
  });
});

// ============================================================
// PlacePricingSchema
// ============================================================
describe('PlacePricingSchema', () => {
  it('should parse full pricing data', () => {
    const data = {
      pint_price: 7,
      cocktail_price: 12,
      coffee_price: 3.5,
      smart_tip: 'Happy hour 18h-20h',
    };

    const result = PlacePricingSchema.parse(data);
    expect(result.pint_price).toBe(7);
    expect(result.smart_tip).toBe('Happy hour 18h-20h');
  });

  it('should default menu_items to empty array', () => {
    const result = PlacePricingSchema.parse({});
    expect(result.menu_items).toEqual([]);
  });

  it('should accept hh_time string', () => {
    const data = { hh_time: '18h-20h' };
    const result = PlacePricingSchema.parse(data);
    expect(result.hh_time).toBe('18h-20h');
  });
});
