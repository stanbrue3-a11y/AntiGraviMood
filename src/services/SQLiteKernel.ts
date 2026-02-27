import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system/legacy';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logger } from '../lib/logger';
import { Kysely } from 'kysely';
import { ExpoDialect } from 'kysely-expo';
import { Database } from '../data/db/schema';

/**
 * SQLiteKernel
 * The low-level engine room of the MoodMap database infrastructure.
 * Handles the binary payload, file system operations, and kernel attachment.
 */
export class SQLiteKernel {
  private static readonly DB_NAME = 'moodmap_current_v47.db';
  private static readonly BUNDLED_DB_ASSET = require('../../assets/moodmap_v47.db');
  private static readonly VERSION_KEY = 'deployed_db_version_v47';
  private static readonly CURRENT_VERSION = 47;

  private db: SQLite.SQLiteDatabase | null = null;
  private kyselyDb: Kysely<Database> | null = null;

  constructor() { }

  /**
   * Attaches the SQLite kernel by ensuring the binary is deployed and opened.
   */
  async attach(): Promise<SQLite.SQLiteDatabase> {
    if (this.db) return this.db;

    try {
      const dbDir = `${FileSystem.documentDirectory}SQLite`;
      const dbPath = `${dbDir}/${SQLiteKernel.DB_NAME}`;

      // 1. Ensure Directory
      const dirInfo = await FileSystem.getInfoAsync(dbDir);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(dbDir, { intermediates: true });
      }
      // 2. Binary Deployment Logic
      const asset = Asset.fromModule(SQLiteKernel.BUNDLED_DB_ASSET);
      await asset.downloadAsync();

      if (!asset.localUri) {
        throw new Error('Binary payload missing localUri.');
      }

      const dbInfo = await FileSystem.getInfoAsync(dbPath);
      let shouldDeploy = !dbInfo.exists;

      if (!shouldDeploy) {
        const deployedVersion = await AsyncStorage.getItem(SQLiteKernel.VERSION_KEY);
        if (deployedVersion !== SQLiteKernel.CURRENT_VERSION.toString()) {
          logger.log(
            `🔄 [Kernel] Version Shift detected (${deployedVersion} -> ${SQLiteKernel.CURRENT_VERSION})`,
          );
          await FileSystem.deleteAsync(dbPath, { idempotent: true });
          shouldDeploy = true;
        }
      }

      if (shouldDeploy) {
        logger.log(`📥 [Kernel] Deploying binary ${SQLiteKernel.CURRENT_VERSION}...`);
        await FileSystem.copyAsync({
          from: asset.localUri,
          to: dbPath,
        });
        await AsyncStorage.setItem(SQLiteKernel.VERSION_KEY, SQLiteKernel.CURRENT_VERSION.toString());
      }

      // 3. Open Database
      this.db = await SQLite.openDatabaseAsync(SQLiteKernel.DB_NAME);

      // 4. Performance Tuning
      await this.db.execAsync('PRAGMA journal_mode = WAL;');
      await this.db.execAsync('PRAGMA synchronous = NORMAL;');

      return this.db;
    } catch (error) {
      logger.error(
        `💀 [Kernel] Attachment Failed: ${error instanceof Error ? error.message : 'Unknown'}`,
      );
      throw error;
    }
  }

  async getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (!this.db) {
      return await this.attach();
    }
    return this.db;
  }

  async getKysely(): Promise<Kysely<Database>> {
    if (!this.kyselyDb) {
      const rawDb = await this.getDatabase();
      this.kyselyDb = new Kysely<Database>({
        dialect: new ExpoDialect({
          database: rawDb,
        }),
      });
    }
    return this.kyselyDb;
  }

  async close() {
    if (this.db) {
      await this.db.closeAsync();
      this.db = null;
    }
    if (this.kyselyDb) {
      await this.kyselyDb.destroy();
      this.kyselyDb = null;
    }
  }
}
