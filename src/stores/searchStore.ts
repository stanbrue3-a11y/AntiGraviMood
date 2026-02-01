import { create } from 'zustand';
import { MoodType, Place } from '../types/model';
import { MoodEngine } from '../lib/MoodEngine';
import { isOpenDuring } from '../lib/timeUtils';

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
    pinceMaxPercent: number;

    // Unified Adaptive Filter
    maxPrice: number | null;
    setMaxPrice: (price: number | null) => void;

    // Legacy/Component Specific Limits
    pintLimit: number | null;
    dishLimit: number | null;
    coffeeLimit: number | null;

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
    selectedCategories: ['bar'],
    selectedDistricts: [],
    searchQuery: '',
    timeRange: null,
    filterOpenNow: false,
    filterHappyHour: false,
    filterTerrace: false,
    pinceMaxPercent: 100,
    maxPrice: null,
    pintLimit: null,
    dishLimit: null,
    coffeeLimit: null,

    setMaxPrice: (price) => set({ maxPrice: price }),

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
    setDishLimit: (limit) => set({ dishLimit: limit }),
    setCoffeeLimit: (limit) => set({ coffeeLimit: limit }),
    setPintLimit: (limit) => set({ pintLimit: limit }),
    clearFilters: () => set({
        selectedMoods: [],
        selectedCategories: ['bar'],
        selectedDistricts: [],
        searchQuery: '',
        timeRange: null,
        filterOpenNow: false,
        filterHappyHour: false,
        filterTerrace: false,
        maxPrice: null,
        pintLimit: null,
        dishLimit: null,
        coffeeLimit: null,
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
        maxPrice,
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
        // 1. Mood & Category & District
        if (selectedMoods.length > 0 && !selectedMoods.includes(p.dominant_mood as MoodType)) return false;
        if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
        if (selectedDistricts.length > 0 && !selectedDistricts.includes(p.location.arrondissement)) return false;

        // 2. Adaptive Pricing Intelligence 🧠
        // If any limit is set, we check the relevant field based on category/vibes
        if (p.pricing) {
            const isCocktailBar = p.vibes.some(v => v.toLowerCase().includes('cocktail'));
            const isClub = p.category === 'club';
            const isRestaurant = p.category === 'restaurant' || p.category === 'bouillon';
            const isCafe = p.category === 'café';
            const isBar = p.category === 'bar';

            let targetPrice: number | undefined;
            let currentLimit: number | null = null;

            if (isCocktailBar) {
                targetPrice = p.pricing.cocktail_price;
                currentLimit = maxPrice;
            } else if (isClub) {
                targetPrice = p.pricing.pint_price || p.pricing.cocktail_price;
                currentLimit = pintLimit || maxPrice;
            } else if (isRestaurant) {
                targetPrice = p.pricing.main_dish_price;
                currentLimit = dishLimit || maxPrice;
            } else if (isCafe) {
                targetPrice = p.pricing.coffee_price;
                currentLimit = coffeeLimit || maxPrice;
            } else if (isBar) {
                targetPrice = p.pricing.pint_price;
                currentLimit = pintLimit || maxPrice;
            }

            // Fallback to budget_avg if no specific item price found
            if (targetPrice === undefined) {
                targetPrice = p.pricing.budget_avg;
                if (currentLimit === null) currentLimit = maxPrice;
            }

            if (currentLimit !== null && targetPrice > currentLimit) return false;
        }

        // 3. Time Filter Reconnection ⏱️
        if (timeRange && !isOpenDuring(p, timeRange)) return false;

        // 4. Open Now Short-circuit
        if (filterOpenNow && p.opening_hours && !p.opening_hours.is_open_now) return false;

        return true;
    });
};
