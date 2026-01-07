// DATA_REFRESH_1767735275360
/**
 * MoodMap Paris - Places Store (Updated with Category Filtering)
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Constants from 'expo-constants';

// Force Data Refresh Timestamp: 2025-12-23T12:00
// Consolidated Data Source (Enriched) (Fresh Copy)
import placesData from '../data/pois_flattened.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TEMPORARY: Force clear store once to fix persistent data issue
AsyncStorage.getItem('moodmap-places-fix-v30').then(val => {
    if (!val) {
        AsyncStorage.removeItem('moodmap-places-storage');
        AsyncStorage.setItem('moodmap-places-fix-v30', 'done');
        console.log('[DEBUG] Storage cleared for v30 refresh');
    }
});

// Types
import { Place, MoodCriteria, MoodScore } from '../types/model';

export type MoodType = 'chill' | 'festif' | 'culturel';
export type SheetMode = 'map' | 'explore' | 'feed';

// Catégories disponibles
export const PLACE_CATEGORIES = [
    { key: 'museum', label: 'Musée', emoji: '🏛️' },
    { key: 'workshop', label: 'Atelier', emoji: '🧶' },
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
    timeRange: { start: number; end: number } | null; // New
    searchQuery: string;



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
    toggleCategory: (category: string) => void;
    setSelectedPrice: (price: number | null) => void;
    setTimeRange: (range: { start: number; end: number } | null) => void; // New
    clearFilters: () => void;

    setSearchQuery: (query: string) => void;
    selectPlace: (id: string | null, mode?: SheetMode) => void; // Update signature using SheetMode
    toggleLike: (placeId: string) => void;

    // Navigation actions
    startNavigation: (origin: { lat: number; lng: number }, destination: { lat: number; lng: number }) => void;
    stopNavigation: () => void;

    // Simulation
    simulateLoading: () => Promise<void>;

    // Computed
    getFilteredPlaces: () => Place[];
    getPlaceById: (id: string) => Place | undefined;
    getDominantMood: (place: Place) => MoodType;
    isPlaceLiked: (placeId: string) => boolean;
}

const isOpenDuring = (place: Place, range: { start: number; end: number }): boolean => {
    if (!place.opening_hours?.standard) return false;

    // Parse Opening Hours (e.g., "17:00-02:00")
    const parts = place.opening_hours.standard.split('-');
    if (parts.length !== 2) return false;
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

// Selector pour les performances (à utiliser avec usePlacesStore(useShallow(selectFilteredPlaces)))
export const selectFilteredPlaces = (state: PlacesState) => {
    const { places, selectedMoods, selectedCategories, selectedPrice, timeRange, searchQuery } = state;


    return places.filter((place) => {
        // Filtre par mood
        if (selectedMoods && selectedMoods.length > 0) {
            const dominantMood = state.getDominantMood(place);
            if (!selectedMoods.includes(dominantMood)) {
                return false;
            }
        }

        // Filtre par catégorie
        if (selectedCategories && selectedCategories.length > 0) {
            if (!selectedCategories.includes(place.category)) {
                return false;
            }
        }

        // Filtre par prix (Max Budget Logic: Level <= Selected)
        if (selectedPrice !== null) {
            const placePrice = place.practical_info.price_range || 2;
            if (placePrice > selectedPrice) {
                return false;
            }
        }

        // Filtre Horaire (Range)
        if (timeRange) {
            if (!isOpenDuring(place, timeRange)) {
                return false;
            }
        }

        // Filtre par recherche
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesName = place.name.toLowerCase().includes(query);
            const matchesVibes = place.vibes.some((v) => v.toLowerCase().includes(query));
            const matchesCategory = place.category.toLowerCase().includes(query);
            if (!matchesName && !matchesVibes && !matchesCategory) {
                return false;
            }
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
            selectedCategories: [],
            selectedPrice: null,
            timeRange: null,
            searchQuery: '',

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

            toggleCategory: (category) => set((state) => ({
                selectedCategories: state.selectedCategories.includes(category)
                    ? state.selectedCategories.filter((c) => c !== category)
                    : [...state.selectedCategories, category],
            })),

            setSelectedPrice: (price) => set({ selectedPrice: price }),
            setTimeRange: (range) => set({ timeRange: range }),





            clearFilters: () => set({
                selectedMoods: [],
                selectedCategories: [],
                selectedPrice: null,
                timeRange: null,
                searchQuery: '',
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

            // Getters
            getFilteredPlaces: () => selectFilteredPlaces(get()),

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
            }),
            migrate: (persistedState: any, version: number) => {
                console.log('[usePlacesStore] Migrating from version:', version, 'to 30');
                if (version < 30) {
                    return {
                        ...persistedState,
                        places: placesData as unknown as Place[],
                    };
                }
                return persistedState;
            },
            version: 30,
        }
    )
);
