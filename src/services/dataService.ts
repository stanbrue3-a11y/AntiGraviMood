import { logger } from '../lib/logger';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
// SILICON VALLEY PIVOT: Modern API is unstable in SDK 54 runtime (Ghosting/Undefined Exports).
// FALLBACK TO STABLE LEGACY PROTOCOL via official entry point.
import * as FileSystem from 'expo-file-system/legacy';
import { Place } from '../types/model';
import { FilterCriteria } from '../types/filters';
import { IPlacesRepository } from '../repositories/IPlacesRepository';
import { SQLitePlacesRepository } from '../repositories/SQLitePlacesRepository';
import { IMomentsRepository } from '../repositories/IMomentsRepository';
import { SQLiteMomentsRepository } from '../repositories/SQLiteMomentsRepository';

/**
 * DATASERVICE v5.0 (Legacy Protocol Stabilization)
 * MODERN API ABANDONED DUE TO RUNTIME INSTABILITY.
 * USING OFFICIAL LEGACY ENTRY POINT FOR MAX RELIABILITY.
 */
export class DataService {
    private static _singleton: DataService;
    private _kernel: SQLite.SQLiteDatabase | null = null;
    private _placesRepo: IPlacesRepository | null = null;
    private _momentsRepo: IMomentsRepository | null = null;
    private _initPromise: Promise<void> | null = null;

    private constructor() { }

    static getInstance(): DataService {
        if (!DataService._singleton) {
            DataService._singleton = new DataService();
        }
        return DataService._singleton;
    }

    // --- RESTRUCTURED GETTERS ---

    get places(): IPlacesRepository {
        if (!this._placesRepo) {
            throw new Error("🚀 [DataService] ENGINE CORE OFFLINE.");
        }
        return this._placesRepo;
    }

    get moments(): IMomentsRepository {
        if (!this._momentsRepo) {
            throw new Error("🚀 [DataService] SOCIAL CORE OFFLINE.");
        }
        return this._momentsRepo;
    }

    // --- CORE IGNITION LOGIC (LEGACY PROTOCOL) ---

    async init() {
        if (this._kernel) return;
        if (this._initPromise) return this._initPromise;

        this._initPromise = (async () => {
            try {
                logger.log("🧠 [DataService] HARD IGNITION START (LEGACY PROTOCOL)...");

                const dbName = 'moodmap_v4.db';
                const dbDir = `${FileSystem.documentDirectory}SQLite`;
                const dbPath = `${dbDir}/${dbName}`;

                // A. IDEMPOTENT DIRECTORY CREATION
                const dirInfo = await FileSystem.getInfoAsync(dbDir);
                if (!dirInfo.exists) {
                    logger.log("📁 [DataService] Creating SQLite directory...");
                    await FileSystem.makeDirectoryAsync(dbDir, { intermediates: true });
                }

                // B. ASSET PAYLOAD EXTRACTION
                logger.log("📦 [DataService] Extracting binary payload...");
                const binary = Asset.fromModule(require('../../assets/moodmap_v4.db'));
                await binary.downloadAsync();

                if (!binary.localUri) {
                    throw new Error("Internal failure: Binary localUri is null.");
                }

                // C. ATOMIC DEPLOYMENT (FORCED FOR SILICON VALLEY MIGRATION)
                logger.log("🚚 [DataService] Deploying fresh core to: " + dbPath);
                await FileSystem.copyAsync({
                    from: binary.localUri,
                    to: dbPath
                });

                // D. KERNEL ATTACHMENT
                logger.log("🔓 [DataService] Attaching SQLite kernel...");
                this._kernel = await SQLite.openDatabaseAsync(dbName);

                // E. HIGH-PERFORMANCE PROTOCOL
                await this._kernel.execAsync("PRAGMA journal_mode = WAL;");
                await this._kernel.execAsync("PRAGMA synchronous = NORMAL;");

                // F. SCHEMA STABILIZATION (Silicon Valley Robustness)
                logger.log("🛠️ [DataService] Stabilizing Schema...");
                await this._kernel.execAsync(`
                    CREATE TABLE IF NOT EXISTS users (
                        id TEXT PRIMARY KEY,
                        full_name TEXT,
                        avatar_url TEXT,
                        username TEXT,
                        created_at INTEGER
                    );
                    CREATE TABLE IF NOT EXISTS moments (
                        id TEXT PRIMARY KEY,
                        place_id TEXT,
                        place_name TEXT,
                        user_id TEXT,
                        content TEXT,
                        media_url TEXT,
                        media_type TEXT,
                        created_at INTEGER,
                        mood TEXT,
                        likes INTEGER DEFAULT 0,
                        is_liked_by_me INTEGER DEFAULT 0,
                        reactions_json TEXT,
                        FOREIGN KEY(user_id) REFERENCES users(id)
                    );
                `);

                // G. SCHEMA VALIDATION
                const integrity = await this._kernel.getFirstAsync<{ count: number }>(
                    "SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='places'"
                );

                if (!integrity || integrity.count === 0) {
                    throw new Error("Kernel Panic: Schema integrity check failed.");
                }

                const countCheck = await this._kernel.getFirstAsync<{ count: number }>("SELECT count(*) as count FROM places");
                logger.log(`✅ [DataService] ENGINE LIVE. Records: ${countCheck?.count}`);

                // G. REPOSITORY HYDRATION
                this._placesRepo = new SQLitePlacesRepository(this._kernel);
                this._momentsRepo = new SQLiteMomentsRepository(this._kernel);

            } catch (fault) {
                this._initPromise = null; // Reset promise so retry is possible
                const message = fault instanceof Error ? fault.message : 'Unknown core fault';
                logger.error(`💀 [DataService] CRITICAL ENGINE FAILURE: ${message}`);
                throw fault;
            }
        })();

        return this._initPromise;
    }

    // --- PUBLIC API WRAPPERS ---

    async getAllPlacesLight(signal?: AbortSignal): Promise<Place[]> {
        if (!this._placesRepo) await this.init();
        if (signal?.aborted) throw new Error("AbortError");
        return this.places.getAllPlacesLight(signal);
    }

    async getFilteredPlaces(filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } }, signal?: AbortSignal): Promise<Place[]> {
        if (!this._placesRepo) await this.init();
        if (signal?.aborted) throw new Error("AbortError");
        return this.places.getFilteredPlaces(filters, signal);
    }

    async getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null> {
        if (!this._placesRepo) await this.init();
        if (signal?.aborted) throw new Error("AbortError");
        return this.places.getPlaceDetails(id, signal);
    }
    async checkHealth(): Promise<boolean> {
        if (!this._kernel) return false;
        try {
            const result = await this._kernel.getFirstAsync<{ ok: number }>("SELECT 1 as ok");
            return result?.ok === 1;
        } catch (e) {
            logger.error(e, "DataService Health Check");
            return false;
        }
    }
}

export const dataService = DataService.getInstance();
