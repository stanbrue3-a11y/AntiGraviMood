import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Place, PlaceSkeleton } from '../types/model';
import { dataService } from '../services/dataService';
import { logger } from '../lib/logger';
import { MoodEngine } from '../lib/MoodEngine';

/**
 * PlacesStore V2 (Pure Model Architecture)
 *
 * The global state now stores ONLY PlaceSkeletons (lightweight objects).
 * Full Place details are fetched on-demand via dataService.getPlaceDetails().
 * This reduces memory by ~10x and eliminates the "dictionary for a word" anti-pattern.
 */
interface PlacesState {
  /** V2: Lightweight array for map/feed rendering */
  places: PlaceSkeleton[];
  /** V2: O(1) lookup by ID for skeletons */
  placesMap: Record<string, PlaceSkeleton>;
  /** User favorites (persisted) */
  likedPlaceIds: string[];
  isLoading: boolean;
  isInitialized: boolean;
  isReady: boolean;
  error: string | null;
  toggleLike: (id: string) => void;
  setError: (error: string | null) => void;
  /** V2: Returns a lightweight skeleton (O(1)) */
  getPlace: (id: string) => PlaceSkeleton | undefined;
  /** V2: Fetches full Place details on-demand from SQLite (Lazy Load) */
  getFullPlace: (id: string) => Promise<Place | null>;
  init: () => Promise<void>;
}

export const usePlacesStore = create<PlacesState>()(
  persist(
    (set, get) => ({
      places: [],
      placesMap: {},
      isLoading: false,
      isInitialized: false,
      isReady: false,
      error: null,
      likedPlaceIds: [],

      setError: (error) => set({ error }),

      getPlace: (id) => get().placesMap[id],

      /**
       * V2 Lazy Load: Fetches the FULL Place object from SQLite on-demand.
       * Only called when the user opens a Place Detail modal.
       */
      getFullPlace: async (id: string): Promise<Place | null> => {
        try {
          return await dataService.getPlaceDetails(id);
        } catch (e) {
          logger.error(
            `💀 [PlacesStore] Lazy Load Error for ${id}: ${e instanceof Error ? e.message : 'Unknown'}`,
          );
          return null;
        }
      },

      init: async () => {
        const { isInitialized, isLoading } = get();
        if (isInitialized || isLoading) return;
        set({ isLoading: true, error: null });

        try {
          logger.log('🏛️ [PlacesStore/V2] Loading Skeleton Registry...');
          await dataService.init();

          // V2: Fetch ONLY lightweight skeletons (no editorial, no JSON blobs)
          const skeletons = await dataService.getRegistrySkeletons();

          // Initialize MoodEngine with skeleton data (Nominal Search: name + category only)
          MoodEngine.init(skeletons);

          // Build O(1) Map
          const map: Record<string, PlaceSkeleton> = {};
          skeletons.forEach((p: PlaceSkeleton) => (map[p.id] = p));

          set({
            places: skeletons,
            placesMap: map,
            isLoading: false,
            isInitialized: true,
            isReady: true,
          });
          logger.log(
            `🏡 [PlacesStore/V2] Skeleton Registry Ready: ${skeletons.length} lightweight places.`,
          );
        } catch (e) {
          const msg = e instanceof Error ? e.message : 'Foundation failure';
          logger.error(`💀 [PlacesStore] Core Error: ${msg}`);
          set({ error: msg, isLoading: false });
        }
      },

      toggleLike: (id) =>
        set((state) => ({
          likedPlaceIds: state.likedPlaceIds.includes(id)
            ? state.likedPlaceIds.filter((i) => i !== id)
            : [...state.likedPlaceIds, id],
        })),
    }),
    {
      name: 'moodmap-places-storage-v11', // 💥 CACHE BUSTER v11 (V2 Pure Model Architecture)
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ likedPlaceIds: state.likedPlaceIds }),
    },
  ),
);
