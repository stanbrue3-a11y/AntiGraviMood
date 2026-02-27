import { create } from 'zustand';
import { MoodType, PlaceSkeleton } from '../types/model';
import { isOpenDuring, isOpenNow, isHappyHourActive } from '../lib/timeUtils';
import { dataService } from '../services/dataService';
import { usePlacesStore } from './placesStore';

export interface SearchState {
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

  // Surgical Performance (Phase 9)
  filteredIds: string[];
  isSearching: boolean;
  performSearch: () => Promise<void>;

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
  { key: 'exhibition', label: 'Expos' },
];

export const useSearchStore = create<SearchState>((set, get) => ({
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
  filteredIds: [],
  isSearching: false,
  pintLimit: null,
  dishLimit: null,
  coffeeLimit: null,

  setMaxPrice: (price) => {
    const categories = get().selectedCategories;
    const isBar = categories.includes('bar');
    const isResto = categories.includes('restaurant');
    const isCoffee = categories.includes('café');

    // Intelligence Situationnelle 2026 : Le slider s'adapte au contexte actif
    if (isBar) {
      set({ maxPrice: null, pintLimit: price, dishLimit: null, coffeeLimit: null });
    } else if (isResto) {
      set({ maxPrice: null, dishLimit: price, pintLimit: null, coffeeLimit: null });
    } else if (isCoffee) {
      set({ maxPrice: null, coffeeLimit: price, pintLimit: null, dishLimit: null });
    } else {
      set({ maxPrice: price, pintLimit: null, dishLimit: null, coffeeLimit: null });
    }
    get().performSearch();
  },

  performSearch: async () => {
    const state = get();
    if (state.isSearching) return;
    set({ isSearching: true });

    try {
      const filters = {
        searchQuery: state.searchQuery,
        selectedCategories: state.selectedCategories,
        selectedMoods: state.selectedMoods,
        selectedDistricts: state.selectedDistricts,
        maxPrice: state.maxPrice,
        pintLimit: state.pintLimit,
        dishLimit: state.dishLimit,
        coffeeLimit: state.coffeeLimit,
        filterTerrace: state.filterTerrace,
        // timeRange and filterOpenNow are still JS-only because they are dynamic (now)
      };

      const ids = await dataService.getFilteredPlaceIds(filters);

      // Post-filter for time-based (since it's hard to do in SQL-native without complicated date functions)
      // Actually, we can do it in JS on just the returned IDs (very fast)
      // V2: Time-based post-filters require full Place data (opening_hours, practical_info).
      // Since placesStore now only holds PlaceSkeletons, these JS-side filters are disabled.
      // TODO: Migrate openNow/happyHour/timeRange filtering to SQL-level in a future phase.
      let finalIds = ids;

      set({ filteredIds: finalIds, isSearching: false });
    } catch (e) {
      console.error('❌ [SearchStore] Search failed:', e);
      set({ isSearching: false });
    }
  },

  warmUpPrices: () => { },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setTimeRange: (range) => set({ timeRange: range }),
  setFilterOpenNow: (open) => {
    set({ filterOpenNow: open });
    get().performSearch();
  },
  setFilterHappyHour: (open) => {
    set({ filterHappyHour: open });
    get().performSearch();
  },
  setFilterTerrace: (open) => {
    set({ filterTerrace: open });
    get().performSearch();
  },
  setSelectedMoods: (moods) => {
    set({ selectedMoods: moods });
    get().performSearch();
  },
  toggleMood: (mood) => {
    set((state) => ({
      selectedMoods: state.selectedMoods.includes(mood)
        ? state.selectedMoods.filter((m) => m !== mood)
        : [...state.selectedMoods, mood],
    }));
    get().performSearch();
  },
  toggleCategory: (cat) => {
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(cat)
        ? state.selectedCategories.filter((c) => c !== cat)
        : [cat],
      // Reset contextual price limits on category change to avoid empty results
      pintLimit: null,
      dishLimit: null,
      coffeeLimit: null,
      maxPrice: null,
    }));
    get().performSearch();
  },
  setSelectedDistricts: (districts) => {
    set({ selectedDistricts: districts });
    get().performSearch();
  },
  setPintLimit: (limit) => {
    set({ pintLimit: limit });
    get().performSearch();
  },
  setDishLimit: (limit) => {
    set({ dishLimit: limit });
    get().performSearch();
  },
  setCoffeeLimit: (limit) => {
    set({ coffeeLimit: limit });
    get().performSearch();
  },
  clearFilters: () => {
    set({
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
    });
    get().performSearch();
  },
}));

// RELATIONAL BRIDGE 🏛️
// Explicit init function to be called from _layout.tsx
export const initSearchBridge = () => {
  const state = usePlacesStore.getState();
  if (state.isReady) {
    useSearchStore.getState().warmUpPrices();
  }

  // Subscribe for future updates
  return usePlacesStore.subscribe((newState) => {
    if (newState.isReady) {
      useSearchStore.getState().warmUpPrices();
    }
  });
};
