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
    isReady: boolean; // Signal for Search/UI
    error: string | null;
    likedPlaceIds: string[];
    // detailStorage: Record<string, Partial<Place>>; // DELETED: Unifying state 🏛️

    init: () => Promise<void>;
    toggleLike: (id: string) => void;
    hydratePlace: (id: string) => Promise<void>;
    setError: (error: string | null) => void;
}

export const usePlacesStore = create<PlacesState>()(
    persist(
        (set, get) => ({
            places: [],
            isLoading: false,
            isInitialized: false,
            isReady: false,
            error: null,
            likedPlaceIds: [],
            // detailStorage: {}, // DELETED

            setError: (error) => set({ error }),

            init: async () => {
                const { isInitialized, isLoading } = get();
                if (isInitialized || isLoading) return;
                set({ isLoading: true, error: null });

                try {
                    logger.log("🏛️ [PlacesStore/Haussemann] Architecting Registry...");
                    await dataService.init();

                    const processed = await dataService.places.getAllPlacesLight();
                    MoodEngine.init(processed);

                    set({ places: processed, isLoading: false, isInitialized: true, isReady: true });
                    logger.log(`🏡 [PlacesStore] Foundation Ready: ${processed.length} units.`);
                } catch (e) {
                    const msg = e instanceof Error ? e.message : "Foundation failure";
                    logger.error(`💀 [PlacesStore] Core Error: ${msg}`);
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
                // If already has heavy content (e.g. description length > 0), skip
                if (place?.description && place.description.length > 50) return;

                const controller = new AbortController();
                try {
                    const details = await dataService.places.getPlaceDetails(id, controller.signal);
                    if (details) {
                        set(state => ({
                            places: state.places.map(p =>
                                p.id === id ? { ...p, ...details } : p
                            )
                        }));
                        logger.log(`🧬 [PlacesStore] Hybrid Hydration Complete for ${id}`);
                    }
                } catch (e) {
                    if (e instanceof Error && e.message === "AbortError") return;
                    logger.error(e instanceof Error ? e.message : "Hydration failed", `[PlacesStore] Hydration failed for ${id}`);
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
