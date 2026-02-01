import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Place, Moment } from '../types/model';
import { dataService } from '../services/dataService';
import { logger } from '../lib/logger';
import { MoodEngine } from '../lib/MoodEngine';

interface PlacesState {
    places: Place[];
    isLoading: boolean;
    isInitialized: boolean;
    error: string | null;
    likedPlaceIds: string[];

    init: () => Promise<void>;
    toggleLike: (id: string) => void;
    hydratePlace: (id: string) => Promise<void>;
}

export const usePlacesStore = create<PlacesState>()(
    persist(
        (set, get) => ({
            places: [],
            isLoading: false,
            isInitialized: false,
            error: null,
            likedPlaceIds: [],

            init: async () => {
                if (get().isInitialized || get().isLoading) return;
                set({ isLoading: true, error: null });

                try {
                    logger.log("🚀 [PlacesStore] Igniting Data Core...");
                    await dataService.init();

                    const processed = await dataService.places.getAllPlacesLight();

                    // Sync with search engine
                    MoodEngine.init(processed);

                    set({ places: processed, isLoading: false, isInitialized: true });
                    logger.log(`✅ [PlacesStore] ${processed.length} places loaded.`);
                } catch (e) {
                    const msg = e instanceof Error ? e.message : "Data core failure";
                    logger.error(`❌ [PlacesStore] Init Failed: ${msg}`);
                    set({ error: msg, isLoading: false });
                }
            },

            toggleLike: (id) => set(state => ({
                likedPlaceIds: state.likedPlaceIds.includes(id)
                    ? state.likedPlaceIds.filter(i => i !== id)
                    : [...state.likedPlaceIds, id]
            })),

            hydratePlace: async (id) => {
                const place = get().places.find(p => p.id === id);
                if (place && !place.description) {
                    const controller = new AbortController();
                    try {
                        const details = await dataService.places.getPlaceDetails(id, controller.signal);
                        if (details) {
                            set(state => ({
                                places: state.places.map(p => p.id === id ? { ...p, ...details } : p)
                            }));
                        }
                    } catch (e) {
                        if (e instanceof Error && e.message === "AbortError") return;
                        logger.error(e instanceof Error ? e.message : "Hydration failed", `[PlacesStore] Hydration failed for ${id}`);
                    }
                }
            }
        }),
        {
            name: 'moodmap-places-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({ likedPlaceIds: state.likedPlaceIds }),
        }
    )
);
