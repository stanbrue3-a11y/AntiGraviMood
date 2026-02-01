import { MoodType } from './model';

export interface FilterCriteria {
    searchQuery: string;
    selectedCategories: string[];
    selectedMoods: MoodType[];
    selectedDistricts: number[];

    // Time Filters
    filterOpenNow: boolean;
    timeRange: { start: number; end: number } | null;

    // Advanced Price Filters
    selectedPrice: number | null; // Budget Avg Max
    isPinceEnabled: boolean;
    pinceMaxPercent: number | null;

    // Triple Anchor Limits
    pintLimit: number | null;
    dishLimit: number | null;
    coffeeLimit: number | null;

    // Metadata Filters
    filterTerrace: boolean;
    filterHappyHour?: boolean; // Optional for now
}
