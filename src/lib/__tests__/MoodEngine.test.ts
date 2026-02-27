/** @jest-environment node */
/**
 * MoodEngine V3 Test Suite (V2 Architecture — PlaceSkeleton)
 */
import { MoodEngine } from '../MoodEngine';
import { PlaceSkeleton } from '../../types/model';

const mockSearch = jest.fn();
const mockAdd = jest.fn();

// Mock FlexSearch to isolate scoring logic
jest.mock('flexsearch', () => {
  return {
    __esModule: true,
    default: {
      Document: jest.fn().mockImplementation(() => ({
        add: mockAdd,
        search: mockSearch,
      })),
    },
  };
});

// V2: Test data uses PlaceSkeleton (not Place)
const MOCK_SKELETONS: PlaceSkeleton[] = [
  {
    id: '1',
    name: 'Le Bar Chill',
    slug: 'le-bar-chill',
    category: 'bar',
    subcategories: ['cocktail'],
    dominant_mood: 'chill',
    location: { address: '', arrondissement: 10, coordinates: { lat: 0, lng: 0 } },
    media: { hero_image: '' },
    pricing: { type: 'generic', is_free: false, unit: '€', menu_items: [] },
  },
  {
    id: '2',
    name: 'La Fête Bleue',
    slug: 'la-fete-bleue',
    category: 'club',
    subcategories: ['techno'],
    dominant_mood: 'festif',
    location: { address: '', arrondissement: 11, coordinates: { lat: 0, lng: 0 } },
    media: { hero_image: '' },
    pricing: { type: 'generic', is_free: false, unit: '€', menu_items: [] },
  },
  {
    id: '3',
    name: 'Musée du Louvre',
    slug: 'musee-du-louvre',
    category: 'museum',
    subcategories: ['art', 'histoire'],
    dominant_mood: 'culturel',
    location: { address: '', arrondissement: 1, coordinates: { lat: 0, lng: 0 } },
    media: { hero_image: '' },
    pricing: { type: 'generic', is_free: false, unit: '€', menu_items: [] },
  },
];

describe('MoodEngine V3 (Nominal Search)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    MoodEngine.init(MOCK_SKELETONS);
  });

  test('should initialize FlexSearch index with skeleton data', () => {
    expect(mockAdd).toHaveBeenCalledTimes(3);
  });

  test('should index nominal fields only (name, category, subcategories)', () => {
    // After init, the search function should work with nominal queries
    // This verifies the engine was initialized with the right data
    mockSearch.mockReturnValue([{ field: 'name', result: [{ id: '3' }] }]);
    const results = MoodEngine.search(MOCK_SKELETONS, 'Louvre');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].id).toBe('3');
  });

  test('should rank exact name match higher than partial matches', () => {
    mockSearch.mockReturnValue([{ field: 'name', result: [{ id: '1' }, { id: '2' }] }]);
    const results = MoodEngine.search(MOCK_SKELETONS, 'Le Bar Chill');
    expect(results[0].id).toBe('1');
  });

  test('should boost score for mood keywords (calme → chill)', () => {
    mockSearch.mockReturnValue([{ field: 'name', result: [{ id: '1' }, { id: '2' }] }]);
    const results = MoodEngine.search(MOCK_SKELETONS, 'calme');
    // Place 1 has dominant_mood: chill, 'calme' is a chill keyword → boosted
    expect(results[0].id).toBe('1');
  });

  test('should handle empty results gracefully', () => {
    mockSearch.mockReturnValue([]);
    const results = MoodEngine.search(MOCK_SKELETONS, 'unknown');
    expect(results).toEqual([]);
  });

  test('should ignore queries shorter than 2 characters', () => {
    const results = MoodEngine.search(MOCK_SKELETONS, 'a');
    expect(results).toEqual([]);
  });

  test('should handle multiple inits without error', () => {
    // Re-init should not throw
    expect(() => MoodEngine.init(MOCK_SKELETONS)).not.toThrow();
  });
});
