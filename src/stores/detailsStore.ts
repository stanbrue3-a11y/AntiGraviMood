import { create } from 'zustand';
import { Place } from '../types/model';
import { dataService } from '../services/dataService';
import { logger } from '../lib/logger';

const MAX_CACHE_SIZE = 25;

interface DetailsState {
  detailsCache: Record<string, Place>;
  cacheOrder: string[];
  isLoading: Record<string, boolean>;
  errors: Record<string, string | null>;

  // Actions
  hydratePlace: (id: string) => Promise<void>;
  getDetail: (id: string) => Place | undefined;
  clearCache: () => void;
}

/**
 * ⚡️ DETAILS STORE V2 (Pure Model Architecture)
 * The single source of truth for the PlaceDetailScreen.
 *
 * V2 Change: The global placesStore now ONLY stores PlaceSkeletons.
 * Full Place details are ALWAYS fetched from SQLite on demand.
 * There is no "fast path" fallback from placesStore anymore.
 */
export const useDetailsStore = create<DetailsState>((set, get) => ({
  detailsCache: {},
  cacheOrder: [],
  isLoading: {},
  errors: {},

  getDetail: (id) => {
    return get().detailsCache[id];
  },

  hydratePlace: async (id) => {
    const { detailsCache, isLoading } = get();

    // 1. Guard: Already loading?
    if (isLoading[id]) return;

    // 2. Guard: Already in cache with full data?
    const currentEntry = detailsCache[id];
    if (currentEntry?.description) {
      return; // Already full, no work needed
    }

    // 3. V2: ALWAYS fetch from SQLite (no skeleton fallback)
    set((state) => ({
      isLoading: { ...state.isLoading, [id]: true },
      errors: { ...state.errors, [id]: null },
    }));

    try {
      logger.log(`🧬 [DetailsStore/V2] Lazy Hydration: ${id}...`);
      const details = await dataService.places.getPlaceDetails(id);

      if (details) {
        const nextCache = { ...get().detailsCache, [id]: details };
        let nextOrder = [...get().cacheOrder.filter((oid) => oid !== id), id];

        // FIFO Eviction
        if (nextOrder.length > MAX_CACHE_SIZE) {
          const victimId = nextOrder.shift();
          if (victimId && victimId !== id) {
            delete nextCache[victimId];
            logger.log(`♻️ [DetailsStore] Evicted ${victimId}`);
          }
        }

        set({
          detailsCache: nextCache,
          cacheOrder: nextOrder,
          isLoading: { ...get().isLoading, [id]: false },
        });
        logger.log(`✅ [DetailsStore/V2] Lazy Hydration Complete: ${id}`);
      } else {
        set((state) => ({
          isLoading: { ...state.isLoading, [id]: false },
          errors: { ...state.errors, [id]: `Place ${id} not found in database` },
        }));
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Hydration failed';
      logger.error(`❌ [DetailsStore] Error: ${msg}`);
      set((state) => ({
        isLoading: { ...state.isLoading, [id]: false },
        errors: { ...state.errors, [id]: msg },
      }));
    }
  },

  clearCache: () => set({ detailsCache: {}, cacheOrder: [], isLoading: {}, errors: {} }),
}));
