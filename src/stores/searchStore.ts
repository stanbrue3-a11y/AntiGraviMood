import { create } from 'zustand';
import { MoodType, Place } from '../types/model';
import { MoodEngine } from '../lib/MoodEngine';

interface SearchState {
    selectedMoods: MoodType[];
    selectedCategories: string[];
    selectedDistricts: number[];
    searchQuery: string;
    timeRange: { start: number; end: number } | null;
    filterOpenNow: boolean;
    filterHappyHour: boolean;
    filterTerrace: boolean;

    // Pricing Filters
    pintLimit: number | null;
    dishLimit: number | null;
    coffeeLimit: number | null;
    isPinceEnabled: boolean;
    pinceMaxPercent: number;

    // Actions
    warmUpPrices: () => void;
    setSearchQuery: (query: string) => void;
    setTimeRange: (range: { start: number; end: number } | null) => void;
    setFilterOpenNow: (open: boolean) => void;
    setFilterHappyHour: (open: boolean) => void;
    setFilterTerrace: (open: boolean) => void;
    setSelectedMoods: (moods: MoodType[]) => void;
    toggleMood: (mood: MoodType) => void;
    toggleCategory: (cat: string) => void;
    setSelectedDistricts: (districts: number[]) => void;
    setPintLimit: (limit: number | null) => void;
    setDishLimit: (limit: number | null) => void;
    setCoffeeLimit: (limit: number | null) => void;
    clearFilters: () => void;
}

export const PLACE_CATEGORIES = [
    { key: 'bar', label: 'Bars' },
    { key: 'café', label: 'Cafés' },
    { key: 'restaurant', label: 'Restos' },
    { key: 'club', label: 'Clubs' },
    { key: 'parc', label: 'Parcs' },
    { key: 'museum', label: 'Musées' },
    { key: 'exhibition', label: 'Expos' }
];

export const useSearchStore = create<SearchState>((set) => ({
    selectedMoods: [],
    selectedCategories: [],
    selectedDistricts: [],
    searchQuery: '',
    timeRange: null,
    filterOpenNow: false,
    filterHappyHour: false,
    filterTerrace: false,
    pintLimit: null,
    dishLimit: null,
    coffeeLimit: null,
    isPinceEnabled: true,
    pinceMaxPercent: 100,

    warmUpPrices: () => {
        console.log('⚡️ [SearchStore] Warming up price indexes...');
    },

    setSearchQuery: (query) => set({ searchQuery: query }),
    setTimeRange: (range) => set({ timeRange: range }),
    setFilterOpenNow: (open) => set({ filterOpenNow: open }),
    setFilterHappyHour: (open) => set({ filterHappyHour: open }),
    setFilterTerrace: (open) => set({ filterTerrace: open }),
    setSelectedMoods: (moods) => set({ selectedMoods: moods }),
    toggleMood: (mood) => set(state => ({
        selectedMoods: state.selectedMoods.includes(mood)
            ? state.selectedMoods.filter(m => m !== mood)
            : [...state.selectedMoods, mood]
    })),
    toggleCategory: (cat) => set(state => ({
        selectedCategories: state.selectedCategories.includes(cat)
            ? state.selectedCategories.filter(c => c !== cat)
            : [cat]
    })),
    setSelectedDistricts: (districts) => set({ selectedDistricts: districts }),
    setPintLimit: (limit) => set({ pintLimit: limit }),
    setDishLimit: (limit) => set({ dishLimit: limit }),
    setCoffeeLimit: (limit) => set({ coffeeLimit: limit }),
    clearFilters: () => set({
        selectedMoods: [],
        selectedCategories: [],
        selectedDistricts: [],
        searchQuery: '',
        timeRange: null,
        filterOpenNow: false,
        filterHappyHour: false,
        filterTerrace: false,
        pintLimit: null,
        dishLimit: null,
        coffeeLimit: null
    })
}));

// Cross-domain selector
export const selectFilteredResults = (places: Place[]) => {
    const state = useSearchStore.getState();
    const {
        searchQuery,
        selectedMoods,
        selectedCategories,
        selectedDistricts,
        pintLimit,
        dishLimit,
        coffeeLimit,
        timeRange,
        filterOpenNow
    } = state;

    let filtered = searchQuery.length > 1
        ? MoodEngine.search(places, searchQuery)
        : places;

    return filtered.filter(p => {
        if (selectedMoods.length > 0 && !selectedMoods.includes(p.dominant_mood as MoodType)) return false;
        if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
        if (selectedDistricts.length > 0 && !selectedDistricts.includes(p.location.arrondissement)) return false;

        // Price checks
        if (pintLimit !== null && p.pricing?.pint_price && p.pricing.pint_price > pintLimit) return false;
        if (dishLimit !== null && p.pricing?.main_dish_price && p.pricing.main_dish_price > dishLimit) return false;
        if (coffeeLimit !== null && p.pricing?.coffee_price && p.pricing.coffee_price > coffeeLimit) return false;

        // Note: Time and OpenNow filters would require imports from timeUtils if needed here.
        // For SV-Grade decoupling, we keep it simple here and move complex logic to repositories or workers.

        return true;
    });
};
