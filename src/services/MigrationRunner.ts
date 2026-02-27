import * as SQLite from 'expo-sqlite';
import { logger } from '../lib/logger';

/**
 * MigrationRunner
 * Handles incremental schema updates using PRAGMA user_version.
 * Ensures the database schema evolves correctly across installations.
 */
export class MigrationRunner {
  private static readonly MIGRATIONS: Record<number, string[]> = {
    1: [
      `CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                full_name TEXT,
                avatar_url TEXT,
                username TEXT,
                created_at INTEGER
            );`,
      `CREATE TABLE IF NOT EXISTS moments (
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
            );`,
    ],
    // Future migrations go here:
    // 2: [`ALTER TABLE places ADD COLUMN new_feature TEXT;`],
  };

  /**
   * Executes pending migrations on the attached kernel.
   */
  static async run(db: SQLite.SQLiteDatabase) {
    try {
      // Get current version
      const result = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version;');

      let currentVersion = result?.user_version || 0;
      const targetVersion = Math.max(...Object.keys(this.MIGRATIONS).map(Number));

      if (currentVersion >= targetVersion) {
        logger.log(`🏗️ [Migration] Already at version ${currentVersion}.`);
        return;
      }

      logger.log(`🚧 [Migration] Upgrading from ${currentVersion} to ${targetVersion}...`);

      for (let v = currentVersion + 1; v <= targetVersion; v++) {
        const scripts = this.MIGRATIONS[v];
        if (scripts) {
          logger.log(`📜 [Migration] Running version ${v} scripts...`);
          for (const sql of scripts) {
            await db.execAsync(sql);
          }
        }
        await db.execAsync(`PRAGMA user_version = ${v};`);
      }

      logger.log('✅ [Migration] Schema update successful.');
    } catch (error) {
      logger.error(`❌ [Migration] Failed: ${error instanceof Error ? error.message : 'Unknown'}`);
      throw error;
    }
  }
}
