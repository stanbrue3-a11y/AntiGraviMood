import { SQLiteKernel } from './SQLiteKernel';
import { MigrationRunner } from './MigrationRunner';
import { logger } from '../lib/logger';
import { Place, PlaceRow, PlaceSkeleton } from '../types/model';
import { FilterCriteria } from '../types/filters';
import { IPlacesRepository } from '../repositories/IPlacesRepository';
import { SupabasePlacesRepository } from '../repositories/SupabasePlacesRepository';
import { IMomentsRepository } from '../repositories/IMomentsRepository';
import { SQLiteMomentsRepository } from '../repositories/SQLiteMomentsRepository';

/**
 * DataService v6.0 (Vault Grade Infrastructure)
 * Clean facade delegating to specialized low-level components.
 */
export class DataService {
  private static _singleton: DataService;
  private _kernel: SQLiteKernel;
  private _placesRepo: IPlacesRepository | null = null;
  private _momentsRepo: IMomentsRepository | null = null;
  private _initPromise: Promise<void> | null = null;

  private constructor() {
    this._kernel = new SQLiteKernel();
  }

  static getInstance(): DataService {
    if (!DataService._singleton) {
      DataService._singleton = new DataService();
    }
    return DataService._singleton;
  }

  get places(): IPlacesRepository {
    if (!this._placesRepo) throw new Error('🚀 [DataService] ENGINE CORE OFFLINE.');
    return this._placesRepo;
  }

  get moments(): IMomentsRepository {
    if (!this._momentsRepo) throw new Error('🚀 [DataService] SOCIAL CORE OFFLINE.');
    return this._momentsRepo;
  }

  /**
   * ATOMIC IGNITION
   * Uses Supabase for Places and SQLite for local Moments.
   */
  async init() {
    if (this._placesRepo && this._momentsRepo) return;
    if (this._initPromise) return this._initPromise;

    this._initPromise = (async () => {
      try {
        logger.log('🧠 [DataService] Cloud-First Ignition Start...');

        // 1. Repository Hydration (Supabase for Places)
        const placesRepo = new SupabasePlacesRepository();

        // 2. Local fallback for Moments (Keep it for now as requested)
        const db = await this._kernel.attach();
        await MigrationRunner.run(db);
        const momentsRepo = new SQLiteMomentsRepository(db);

        // 3. Atomic Assignment
        this._placesRepo = placesRepo;
        this._momentsRepo = momentsRepo;

        logger.log('✅ [DataService] Cloud Engine Live (Places on Supabase).');
      } catch (fault) {
        this._initPromise = null;
        const message = fault instanceof Error ? fault.message : 'Unknown core fault';
        logger.error(`💀 [DataService] IGNITION FAILURE: ${message}`);
        throw fault;
      }
    })();

    return this._initPromise;
  }

  // --- PUBLIC API WRAPPERS ---

  async getRegistryPlaces(signal?: AbortSignal): Promise<Place[]> {
    if (!this._placesRepo) await this.init();
    if (signal?.aborted) throw new Error('AbortError');
    return this.places.getRegistryPlaces(signal);
  }

  /**
   * [V2 Architecture] Returns lightweight PlaceSkeletons for map/feed (O(1) Memory).
   */
  async getRegistrySkeletons(signal?: AbortSignal): Promise<PlaceSkeleton[]> {
    if (!this._placesRepo) await this.init();
    if (signal?.aborted) throw new Error('AbortError');
    return this.places.getRegistrySkeletons(signal);
  }

  async getRegistryRows(signal?: AbortSignal): Promise<PlaceRow[]> {
    if (!this._placesRepo) await this.init();
    if (signal?.aborted) throw new Error('AbortError');
    return this.places.getRegistryRows(signal);
  }

  async getFilteredPlaces(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
  ): Promise<Place[]> {
    if (!this._placesRepo) await this.init();
    if (signal?.aborted) throw new Error('AbortError');
    return this.places.getFilteredPlaces(filters, signal);
  }

  async getFilteredPlaceIds(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
  ): Promise<string[]> {
    if (!this._placesRepo) await this.init();
    if (signal?.aborted) throw new Error('AbortError');
    return this.places.getFilteredPlaceIds(filters, signal);
  }

  async getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null> {
    if (!this._placesRepo) await this.init();
    if (signal?.aborted) throw new Error('AbortError');
    return this.places.getPlaceDetails(id, signal);
  }

  async checkHealth(): Promise<boolean> {
    try {
      const db = await this._kernel.getDatabase();
      const result = await db.getFirstAsync<{ ok: number }>('SELECT 1 as ok');
      return result?.ok === 1;
    } catch (e) {
      logger.error(e, 'DataService Health Check');
      return false;
    }
  }
}

export const dataService = DataService.getInstance();
