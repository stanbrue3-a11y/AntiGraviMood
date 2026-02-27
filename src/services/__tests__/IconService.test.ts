/** @jest-environment node */
/**
 * IconService Test Suite — Industrial Coverage
 * Tests the centralized icon resolution logic for all place categories.
 */
import { IconService } from '../IconService';
import { PlaceSkeleton, Place } from '../../types/model';

// Helper: create a minimal PlaceSkeleton for testing
const mockSkeleton = (category: string, subcategories: string[] = []): PlaceSkeleton =>
  ({
    id: 'test',
    name: 'Test',
    slug: 'test',
    category,
    subcategories,
    location: { address: '', arrondissement: 1, coordinates: { lat: 0, lng: 0 } },
    media: { hero_image: '' },
  }) as PlaceSkeleton;

describe('IconService.getIconCategory', () => {
  // ---- Bars & Drinks ----
  describe('Bars & Drinks', () => {
    it('should return "beer" for generic bar', () => {
      expect(IconService.getIconCategory(mockSkeleton('bar'))).toBe('beer');
    });

    it('should return "wine" for bar with wine subcategory', () => {
      expect(IconService.getIconCategory(mockSkeleton('bar', ['wine', 'vin']))).toBe('wine');
    });

    it('should return "cocktail" for bar with cocktail subcategory', () => {
      expect(IconService.getIconCategory(mockSkeleton('bar', ['cocktail', 'mixologie']))).toBe(
        'cocktail',
      );
    });

    it('should return "beer" for pub', () => {
      expect(IconService.getIconCategory(mockSkeleton('pub'))).toBe('beer');
    });

    it('should return "beer" for rooftop', () => {
      expect(IconService.getIconCategory(mockSkeleton('rooftop'))).toBe('beer');
    });
  });

  // ---- Coffee ----
  describe('Coffee & Sweets', () => {
    it('should return "cafe" for café', () => {
      expect(IconService.getIconCategory(mockSkeleton('café'))).toBe('cafe');
    });

    it('should return "cafe" for bakery', () => {
      expect(IconService.getIconCategory(mockSkeleton('bakery'))).toBe('cafe');
    });

    it('should return "cafe" for salon-de-the', () => {
      expect(IconService.getIconCategory(mockSkeleton('salon-de-the'))).toBe('cafe');
    });
  });

  // ---- Food ----
  describe('Food', () => {
    it('should return "restaurant" for restaurant', () => {
      expect(IconService.getIconCategory(mockSkeleton('restaurant'))).toBe('restaurant');
    });

    it('should return "restaurant" for bistro', () => {
      expect(IconService.getIconCategory(mockSkeleton('bistro'))).toBe('restaurant');
    });
  });

  // ---- Nightlife ----
  describe('Nightlife', () => {
    it('should return "music" for club', () => {
      expect(IconService.getIconCategory(mockSkeleton('club'))).toBe('music');
    });

    it('should return "music" for boite-de-nuit', () => {
      expect(IconService.getIconCategory(mockSkeleton('boite-de-nuit'))).toBe('music');
    });
  });

  // ---- Culture ----
  describe('Arts & Culture', () => {
    it('should return "palette" for espace-culturel', () => {
      expect(IconService.getIconCategory(mockSkeleton('espace-culturel'))).toBe('palette');
    });

    it('should return "palette" for gallery', () => {
      expect(IconService.getIconCategory(mockSkeleton('gallery'))).toBe('palette');
    });
  });

  // ---- Parks ----
  describe('Parks & Outdoors', () => {
    it('should return "leaf" for parc', () => {
      expect(IconService.getIconCategory(mockSkeleton('parc'))).toBe('leaf');
    });

    it('should return "leaf" for garden', () => {
      expect(IconService.getIconCategory(mockSkeleton('garden'))).toBe('leaf');
    });
  });

  // ---- Museums ----
  describe('Sights & Landmarks', () => {
    it('should return "museum" for museum', () => {
      expect(IconService.getIconCategory(mockSkeleton('museum'))).toBe('museum');
    });

    it('should return "museum" for monument', () => {
      expect(IconService.getIconCategory(mockSkeleton('monument'))).toBe('museum');
    });
  });

  // ---- Hotels ----
  it('should return "lodging" for hotel', () => {
    expect(IconService.getIconCategory(mockSkeleton('hotel'))).toBe('lodging');
  });

  // ---- Fallback ----
  it('should return "star" for unknown categories', () => {
    expect(IconService.getIconCategory(mockSkeleton('unknown_thing'))).toBe('star');
    expect(IconService.getIconCategory(mockSkeleton(''))).toBe('star');
  });

  // ---- V2: Accepts PlaceSkeleton (not just Place) ----
  it('should accept PlaceSkeleton type without error', () => {
    const skeleton = mockSkeleton('bar', ['cocktail']);
    expect(() => IconService.getIconCategory(skeleton)).not.toThrow();
    expect(IconService.getIconCategory(skeleton)).toBe('cocktail');
  });
});
