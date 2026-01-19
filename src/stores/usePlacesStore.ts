// DATA_REFRESH_1767735275360
/**
 * MoodMap Paris - Places Store (Updated with Category Filtering)
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Constants from 'expo-constants';

// Force Data Refresh Timestamp: 2026-01-10T20:00
// Consolidated Data Source (Enriched) (Fresh Copy)
import placesData from '../data/pois_flattened.json';
import { isTimeInRange } from '../lib/timeUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TEMPORARY: Force clear store once to fix persistent data issue
AsyncStorage.getItem('moodmap-places-fix-v51').then(val => {
    if (!val) {
        AsyncStorage.removeItem('moodmap-places-storage');
        AsyncStorage.setItem('moodmap-places-fix-v51', 'done');
        console.log('[DEBUG] Storage cleared for v51 refresh');
    }
});

// Types
import { Place, MoodCriteria, MoodScore } from '../types/model';

export type MoodType = 'chill' | 'festif' | 'culturel';
export type SheetMode = 'map' | 'explore' | 'feed';

// Catégories disponibles
// Forced refresh for Surgical Verification
export const STORE_VERSION = 'v53';
export const PLACE_CATEGORIES = [
    { key: 'museum', label: 'Musée', emoji: '🏛️' },
    { key: 'exhibition', label: 'Expo', emoji: '🖼️' },
    { key: 'restaurant', label: 'Restaurant', emoji: '🍽️' },
    { key: 'bar', label: 'Bar', emoji: '🍸' },
    { key: 'café', label: 'Café', emoji: '☕' },
    { key: 'parc', label: 'Parc', emoji: '🌳' },
    { key: 'club', label: 'Club', emoji: '🎵' },
] as const;

interface RouteState {
    origin: { lat: number; lng: number } | null;
    destination: { lat: number; lng: number } | null;
    isNavigating: boolean;
}

interface PlacesState {
    // Data
    places: Place[];
    isLoading: boolean;
    error: string | null;

    // Filtres
    selectedMoods: MoodType[];
    selectedCategories: string[];
    selectedPrice: number | null;
    pinceMaxPercent: number | null; // Max % vs average for Pince filter
    isPinceEnabled: boolean; // Whether Pince filter is active
    selectedDistricts: number[];
    timeRange: { start: number; end: number } | null;
    filterOpenNow: boolean; // New: Open Now filter
    filterHappyHour: boolean; // Power-Up: Happy Hour
    filterTerrace: boolean; // Power-Up: Terrace
    searchQuery: string;

    // Triple Anchor Limits
    pintLimit: number | null;
    dishLimit: number | null;
    coffeeLimit: number | null;


    // Selection
    selectedPlaceId: string | null;
    sheetMode: SheetMode;

    // Navigation
    route: RouteState;

    // Likes (local)
    likedPlaceIds: string[];

    // Actions
    setPlaces: (places: Place[]) => void;
    toggleMood: (mood: MoodType) => void;
    setSelectedMoods: (moods: MoodType[]) => void;
    toggleCategory: (category: string) => void;
    setSelectedCategories: (categories: string[]) => void;
    setSelectedPrice: (price: number | null) => void;
    setPinceMaxPercent: (percent: number | null) => void;
    setIsPinceEnabled: (enabled: boolean) => void;
    setSelectedDistricts: (districts: number[]) => void;
    setTimeRange: (range: { start: number; end: number } | null) => void;
    setTimeRange: (range: { start: number; end: number } | null) => void;
    setFilterOpenNow: (enabled: boolean) => void;
    setFilterHappyHour: (enabled: boolean) => void;
    setFilterTerrace: (enabled: boolean) => void;
    setPintLimit: (limit: number | null) => void;
    setDishLimit: (limit: number | null) => void;
    setCoffeeLimit: (limit: number | null) => void;

    clearFilters: () => void;

    setSearchQuery: (query: string) => void;
    selectPlace: (id: string | null, mode?: SheetMode) => void; // Update signature using SheetMode
    toggleLike: (placeId: string) => void;

    // Navigation actions
    startNavigation: (origin: { lat: number; lng: number }, destination: { lat: number; lng: number }) => void;
    stopNavigation: () => void;
    warmUpPrices: () => void; // Optimization for slider interactions

    // Simulation
    simulateLoading: () => Promise<void>;

    // Computed
    getFilteredPlaces: () => Place[];
    getPlaceById: (id: string) => Place | undefined;
    getDominantMood: (place: Place) => MoodType;
    isPlaceLiked: (placeId: string) => boolean;
}

export const isOpenDuring = (place: Place, range: { start: number; end: number }): boolean => {
    if (!place.opening_hours?.standard) return true; // Default to TRUE if no data (don't hide)

    // Parse Opening Hours (e.g., "17:00-02:00")
    if (place.opening_hours.standard === 'Non renseigné') return true;
    const parts = place.opening_hours.standard.split('–').length === 2 ? place.opening_hours.standard.split('–') : place.opening_hours.standard.split('-');

    // If format is not standard range, assume open (permissive)
    if (parts.length !== 2) return true;
    const [startStr, endStr] = parts;
    const [placeStartH] = startStr.split(':').map(Number);
    const [placeEndH] = endStr.split(':').map(Number);

    // Normalize hours to 0-48 scale to handle night crossing easily?
    // Let's us simpler logic:
    // User range: e.g. 20h - 02h
    // Place range: e.g. 18h - 04h
    // They overlap if max(start1, start2) < min(end1, end2) (roughly)

    // To handle crossing midnight, let's treat "00, 01, 02..." as "24, 25, 26..."

    const normalize = (h: number) => h < 10 ? h + 24 : h; // Assume < 10 is next day (morning/night)

    const uStart = normalize(range.start);
    let uEnd = normalize(range.end);
    if (uEnd < uStart) uEnd += 24; // Ensure range direction

    const pStart = normalize(placeStartH);
    let pEnd = normalize(placeEndH);
    if (pEnd <= pStart) pEnd += 24; // Hande place crossing midnight (17 -> 02 becomes 17 -> 26)

    // Check overlap
    return Math.max(uStart, pStart) < Math.min(uEnd, pEnd);
};


// Helper to get current price for a specific anchor
export const getCurrentPrice = (place: Place, type: 'pint' | 'dish' | 'coffee'): number | undefined => {
    const p = place.pricing;
    if (!p) return undefined;

    // Use pre-calculated values if available (Surgical optimization)
    // @ts-ignore - internal cache injected during load/sync
    if (place._currentPrices) {
        // @ts-ignore
        return place._currentPrices[type];
    }

    const isHH = p.hh_time ? isTimeInRange(p.hh_time) : false;

    if (type === 'pint') return (isHH && p.pint_hh) ? p.pint_hh : p.pint_price;
    if (type === 'dish') return (isHH && p.dish_hh) ? p.dish_hh : p.main_dish_price;
    if (type === 'coffee') return (isHH && p.coffee_hh) ? p.coffee_hh : p.coffee_price;

    return undefined;
};

/** Provides raw price distributions for histograms */
export const getPriceDistributions = (places: Place[]) => {
    const pints: number[] = [];
    const dishes: number[] = [];
    const coffees: number[] = [];

    places.forEach(p => {
        const pr = p.pricing;
        if (!pr) return;
        if (pr.pint_price) pints.push(pr.pint_price);
        if (pr.main_dish_price) dishes.push(pr.main_dish_price);
        if (pr.coffee_price) coffees.push(pr.coffee_price);
    });

    return { pints, dishes, coffees };
};

// Selector pour les performances (à utiliser avec usePlacesStore(useShallow(selectFilteredPlaces)))
export const selectFilteredPlaces = (state: PlacesState) => {
    const {
        places,
        selectedMoods,
        selectedCategories,
        selectedPrice,
        pinceMaxPercent,
        isPinceEnabled,
        selectedDistricts,
        timeRange,
        filterOpenNow,
        filterHappyHour,
        filterTerrace,
        searchQuery,
        pintLimit,
        dishLimit,
        coffeeLimit
    } = state;

    // Early return for empty search
    if (selectedCategories.length === 0) return [];

    return places.filter((place) => {
        // 0. SEARCH OVERRIDE (Top Priority) 🔍
        // If a search is active, it OVERRIDES all other filters.
        // User Intent: "I am looking for THIS, don't hide it."
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            const matches = place.name.toLowerCase().includes(q) ||
                place.vibes.some(v => v.toLowerCase().includes(q)) ||
                (place.category || '').toLowerCase().includes(q);

            // If it doesn't match the search, it's gone.
            // If it matches, we KEEP it (ignoring budget/mood/category).
            return matches;
        }

        // 1. Category Filter (Checked means Include) - FASTEST CHECK FIRST
        const hasMatch = selectedCategories.includes(place.category) ||
            (place.categories && place.categories.some(c => selectedCategories.includes(c)));
        if (!hasMatch) return false;

        // 2. Mood Filter
        if (selectedMoods.length > 0) {
            const dominantMood = state.getDominantMood(place);
            if (!selectedMoods.includes(dominantMood)) return false;
        }

        // 3. UNIVERSAL PRICE SHIELDING (Applied to any venue with the data point) 🛡️
        if (pintLimit !== null) {
            const price = getCurrentPrice(place, 'pint');
            if (price !== undefined && price > pintLimit) return false;
            // Strict mode: Hide bars that are missing price data to avoid "dead" filters
            if (price === undefined && (place.category === 'bar' || (place.categories && place.categories.includes('bar')))) return false;
        }

        if (dishLimit !== null) {
            const price = getCurrentPrice(place, 'dish');
            if (price !== undefined && price > dishLimit) return false;
            // Strict mode: Hide restaurants/food-spots missing price data
            if (price === undefined && (place.category === 'restaurant' || (place.categories && place.categories.includes('restaurant')))) return false;
        }

        if (coffeeLimit !== null) {
            const price = getCurrentPrice(place, 'coffee');
            if (price !== undefined && price > coffeeLimit) return false;
            // Strict mode: Hide cafes/coffee-shops missing price data
            if (price === undefined && (place.category === 'café' || (place.categories && place.categories.includes('café')))) return false;
        }

        // 4. District Filter
        if (selectedDistricts.length > 0) {
            if (!selectedDistricts.includes(place.location.arrondissement)) return false;
        }

        // 4.5 POWER-UPS ⚡️
        if (filterHappyHour) {
            const hasHH = !!place.happy_hour || (place.practical_info && !!place.practical_info.happy_hour);
            if (!hasHH) return false;
        }

        if (filterTerrace) {
            // Check 'terrace' in practical_info.terrace (boolean or string) or vibes or top-level boolean if exists?
            // Schema check: usually inside practical_info or vibes.
            // Let's check implicit "Terrasse" vibe or explicit field.
            // Assuming place.practical_info.terrace is the source of truth based on schema usually.
            const hasTerrace = (place.practical_info && place.practical_info.terrasse) || place.vibes.includes('Terrasse');
            if (!hasTerrace) return false;
        }

        // 5. UNIFIED PRICE & PINCE FILTER
        if (isPinceEnabled) {
            const limit = pinceMaxPercent !== null ? pinceMaxPercent : 60;
            if ((place.pricing?.category_percentile ?? 50) > limit) return false;
        }

        if (selectedPrice !== null) {
            if ((place.pricing?.budget_avg ?? 0) > selectedPrice) return false;
        }

        // 6. Time Filter
        if (filterOpenNow) {
            // Simplified "Open Now" for performance
            const now = new Date();
            const hour = now.getHours();
            const std = place.opening_hours?.standard;
            if (std && std !== 'Non renseigné') {
                const parts = std.split(/[-–]/);
                if (parts.length === 2) {
                    const s = parseInt(parts[0], 10);
                    const e = parseInt(parts[1], 10);
                    const isOpen = e < s ? (hour >= s || hour < e) : (hour >= s && hour < e);
                    if (!isOpen) return false;
                }
            }
        } else if (timeRange) {
            if (!isOpenDuring(place, timeRange)) return false;
        }

        return true;
    });
};

export const usePlacesStore = create<PlacesState>()(
    persist(
        (set, get) => ({
            // État initial
            // État initial (Loaded from JSON)
            places: placesData as unknown as Place[],
            isLoading: false,
            error: null,
            selectedMoods: [],
            selectedCategories: PLACE_CATEGORIES.map(c => c.key),
            selectedPrice: null,
            pinceMaxPercent: null,
            isPinceEnabled: false,
            selectedDistricts: [],
            timeRange: null,
            filterOpenNow: false,
            filterHappyHour: false,
            filterTerrace: false,
            searchQuery: '',
            pintLimit: null,
            dishLimit: null,
            coffeeLimit: null,


            selectedPlaceId: null,
            sheetMode: 'map', // Default mode
            route: {
                origin: null,
                destination: null,
                isNavigating: false,
            },
            likedPlaceIds: [],

            // Actions
            setPlaces: (places) => set({ places }),

            toggleMood: (mood) => set((state) => ({
                selectedMoods: state.selectedMoods.includes(mood)
                    ? state.selectedMoods.filter((m) => m !== mood)
                    : [...state.selectedMoods, mood],
            })),

            setSelectedMoods: (moods) => set({ selectedMoods: moods }),

            toggleCategory: (category) => set((state) => {
                const isSelected = state.selectedCategories.includes(category);
                const isSingleSelection = state.selectedCategories.length === 1;

                // RADIO LOGIC 📻
                // 1. If hitting the ONLY active category -> Reset to ALL (Global View)
                if (isSelected && isSingleSelection) {
                    return { selectedCategories: PLACE_CATEGORIES.map(c => c.key) };
                }

                // 2. Otherwise (Switching or Focusing) -> Select ONLY this category
                return { selectedCategories: [category] };
            }),

            setSelectedCategories: (categories) => set({ selectedCategories: categories }),

            setSelectedPrice: (price) => set({ selectedPrice: price }),
            setPinceMaxPercent: (percent) => set({ pinceMaxPercent: percent }),
            setIsPinceEnabled: (enabled) => set({ isPinceEnabled: enabled }),
            setSelectedDistricts: (districts) => set({ selectedDistricts: districts }),
            setTimeRange: (range) => set({ timeRange: range }),
            setFilterOpenNow: (enabled) => set({ filterOpenNow: enabled }),
            setFilterHappyHour: (enabled) => set({ filterHappyHour: enabled }),
            setFilterTerrace: (enabled) => set({ filterTerrace: enabled }),
            setPintLimit: (limit) => set({ pintLimit: limit }),
            setDishLimit: (limit) => set({ dishLimit: limit }),
            setCoffeeLimit: (limit) => set({ coffeeLimit: limit }),





            clearFilters: () => set({
                selectedMoods: [],
                selectedCategories: PLACE_CATEGORIES.map(c => c.key),
                selectedPrice: null,
                pinceMaxPercent: null,
                isPinceEnabled: false,
                selectedDistricts: [],
                timeRange: null,
                filterOpenNow: false,
                filterHappyHour: false,
                filterTerrace: false,
                searchQuery: '',
                pintLimit: null,
                dishLimit: null,
                coffeeLimit: null,
            }),


            setSearchQuery: (query) => set({ searchQuery: query }),

            selectPlace: (id, mode = 'map') => {
                console.log('STORE: selectPlace called with:', { id, mode });
                set({ selectedPlaceId: id, sheetMode: mode });
            },

            toggleLike: (placeId) => set((state) => ({
                likedPlaceIds: state.likedPlaceIds.includes(placeId)
                    ? state.likedPlaceIds.filter((id) => id !== placeId)
                    : [...state.likedPlaceIds, placeId],
            })),

            // Navigation
            startNavigation: (origin, destination) => set({
                route: { origin, destination, isNavigating: true },
            }),

            stopNavigation: () => set({
                route: { origin: null, destination: null, isNavigating: false },
            }),

            simulateLoading: async () => {
                set({ isLoading: true });
                await new Promise(r => setTimeout(r, 500));
                set({ isLoading: false });
            },

            warmUpPrices: () => {
                const state = get();
                const now = Date.now();
                // @ts-ignore
                if (!state._lastPriceSync || now - state._lastPriceSync > 30000) {
                    console.log('[Store] Warming up prices...');
                    state.places.forEach(p => {
                        // @ts-ignore
                        p._currentPrices = {
                            pint: getCurrentPrice(p, 'pint'),
                            dish: getCurrentPrice(p, 'dish'),
                            coffee: getCurrentPrice(p, 'coffee')
                        };
                    });
                    // @ts-ignore
                    state._lastPriceSync = now;
                }
            },

            // Getters
            getFilteredPlaces: () => {
                // Pre-calculate prices ONCE per minute or on demand to avoid 237*3 date parsing in the loop
                const state = get();
                const now = Date.now();
                // @ts-ignore
                if (!state._lastPriceSync || now - state._lastPriceSync > 30000) {
                    state.places.forEach(p => {
                        // @ts-ignore
                        p._currentPrices = {
                            pint: getCurrentPrice(p, 'pint'),
                            dish: getCurrentPrice(p, 'dish'),
                            coffee: getCurrentPrice(p, 'coffee')
                        };
                    });
                    // @ts-ignore
                    state._lastPriceSync = now;
                }
                return selectFilteredPlaces(state);
            },

            getPlaceById: (id) => {
                return get().places.find((p) => p.id === id);
            },

            getDominantMood: (place) => {
                // FORCE LOGIC based on Category
                const CATEGORIES_CULTUREL = ['museum', 'exhibition', 'workshop', 'theatre', 'gallery', 'espace-culturel'];
                if (CATEGORIES_CULTUREL.includes(place.category) || CATEGORIES_CULTUREL.includes(place.subcategory)) {
                    return 'culturel';
                }

                if (place.category === 'café' || place.category === 'coffee-shop') {
                    // Cafes are CHILL (unless extremely Festif, but let's stick to user rule: Café = Chill)
                    // If they serve alcohol late it might be festif, but usually 'café' category implies chill.
                    return 'chill';
                }

                // For Restaurants, Bars, Clubs: Determine between FESTIF and CHILL (ignore Culturel scores)
                // Use scores if available, but restrict to Festif vs Chill
                const { chill, festif } = place.mood_scores;

                // Clubs are inherently Festif
                if (place.category === 'club') return 'festif';

                if (festif.overall >= chill.overall) {
                    return 'festif';
                }
                return 'chill';
            },

            isPlaceLiked: (placeId) => {
                return get().likedPlaceIds.includes(placeId);
            },
        }),
        {
            name: 'moodmap-places',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({
                selectedMoods: state.selectedMoods,
                selectedCategories: state.selectedCategories,
                likedPlaceIds: state.likedPlaceIds,
                isPinceEnabled: state.isPinceEnabled,
                pinceMaxPercent: state.pinceMaxPercent,
                pintLimit: state.pintLimit,
                dishLimit: state.dishLimit,
                coffeeLimit: state.coffeeLimit,
            }),
            migrate: (persistedState: any, version: number) => {
                console.log('[usePlacesStore] Migrating from version:', version, 'to 32');
                if (version < 32) {
                    return {
                        ...persistedState,
                        places: placesData as unknown as Place[],
                    };
                }
                return persistedState;
            },
            version: 40,
        }
    )
);
