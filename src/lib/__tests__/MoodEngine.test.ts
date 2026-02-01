/** @jest-environment node */
import { MoodEngine } from '../MoodEngine';
import { Place } from '../../types/model';

const mockSearch = jest.fn();
const mockAdd = jest.fn();

// Mock FlexSearch to isolate scoring logic
jest.mock('flexsearch', () => {
    return {
        __esModule: true,
        default: {
            Document: jest.fn().mockImplementation(() => ({
                add: mockAdd,
                search: mockSearch
            }))
        }
    };
});

const MOCK_PLACES: Partial<Place>[] = [
    {
        id: '1',
        name: 'Le Bar Chill',
        category: 'bar',
        subcategory: 'cocktail',
        vibes: ['calme', 'cosy'],
        dominant_mood: 'chill',
        location: { arrondissement: 10 } as any,
        practical_info: { specialty: 'Cocktail Signature' } as any
    },
    {
        id: '2',
        name: 'La Fête Bleue',
        category: 'club',
        subcategory: 'techno',
        vibes: ['danse', 'fête', 'vibrant'],
        dominant_mood: 'festif',
        location: { arrondissement: 11 } as any,
        practical_info: { specialty: 'Sound System' } as any
    }
];

describe('MoodEngine (Haussmann)', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        MoodEngine.init(MOCK_PLACES as Place[]);
    });

    test('should rank exact name match higher than partial matches', () => {
        // Simulate FlexSearch returning both IDs
        mockSearch.mockReturnValue([{ field: 'name', result: [{ id: '1' }, { id: '2' }] }]);

        const results = MoodEngine.search(MOCK_PLACES as Place[], 'Le Bar Chill');

        expect(results[0].id).toBe('1'); // Exact match
        expect(results[1].id).toBe('2'); // Partial (if it had matched)
    });

    test('should boost score for mood keywords', () => {
        mockSearch.mockReturnValue([{ field: 'vibes', result: [{ id: '1' }] }]);

        // 'calme' is a keyword for chill, and place 1 is dominant_mood: chill
        const results = MoodEngine.search(MOCK_PLACES as Place[], 'calme');

        expect(results[0].id).toBe('1');
    });

    test('should handle empty results gracefully', () => {
        mockSearch.mockReturnValue([]);

        const results = MoodEngine.search(MOCK_PLACES as Place[], 'unknown');
        expect(results).toEqual([]);
    });
});
