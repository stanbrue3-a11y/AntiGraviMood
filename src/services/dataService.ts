import { SQLiteKernel } from './SQLiteKernel';
import { MigrationRunner } from './MigrationRunner';
import { logger } from '../lib/logger';
import { Place, PlaceRow, PlaceSkeleton } from '../types/model';
import { FilterCriteria } from '../types/filters';
import { IPlacesRepository } from '../repositories/IPlacesRepository';
import { SQLitePlacesRepository } from '../repositories/SQLitePlacesRepository';
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
   * Uses SQLiteKernel for attachment and MigrationRunner for schema stability.
   */
  async init() {
    if (this._placesRepo) return;
    if (this._initPromise) return this._initPromise;

    this._initPromise = (async () => {
      try {
        logger.log('🧠 [DataService] Vault Ignition Start...');

        // 1. Attach Kernel
        const db = await this._kernel.attach();

        // 2. Run Migrations
        await MigrationRunner.run(db);

        // 3. Schema Integrity Check
        const columns = await db.getAllAsync<{ name: string }>('PRAGMA table_info(places)');
        if (!columns.some((c) => c.name === 'real_talk_json')) {
          throw new Error('Kernel Panic: Schema missing real_talk_json.');
        }

        // 4. Repository Hydration
        this._placesRepo = new SQLitePlacesRepository(db);
        this._momentsRepo = new SQLiteMomentsRepository(db);

        logger.log('✅ [DataService] Vault Engine Live.');
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
