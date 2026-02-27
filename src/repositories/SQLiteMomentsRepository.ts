import * as SQLite from 'expo-sqlite';
import { Moment, MoodType } from '../types/model';
import { IMomentsRepository } from './IMomentsRepository';
import { logger } from '../lib/logger';

interface MomentRow {
  id: string;
  place_id: string;
  place_name: string;
  user_id: string;
  content: string;
  media_url: string;
  media_type: 'image' | 'video';
  created_at: string;
  mood: string;
  user_name: string;
  user_avatar: string;
  user_username?: string;
  likes: number;
  is_liked_by_me: number;
  verbatim_date?: string;
}

export class SQLiteMomentsRepository implements IMomentsRepository {
  constructor(private db: SQLite.SQLiteDatabase) { }

  async getMoments(placeId?: string): Promise<Moment[]> {
    let query = `
            SELECT m.*, u.full_name as user_name, u.avatar_url as user_avatar, u.username as user_username
            FROM moments m
            LEFT JOIN users u ON m.user_id = u.id
        `;
    const params: (string | number)[] = [];

    if (placeId) {
      query += ' WHERE m.place_id = ?';
      params.push(placeId);
    }

    query += ' ORDER BY m.created_at DESC';

    const rows = await this.db.getAllAsync<MomentRow>(query, params);

    return rows.map((row) => ({
      id: row.id,
      placeId: row.place_id,
      placeName: row.place_name || 'Lieu inconnu',
      imageUri: row.media_url,
      caption: row.content,
      mood: row.mood as MoodType,
      type: row.media_type,
      timestamp:
        typeof row.created_at === 'string' ? new Date(row.created_at).getTime() : row.created_at,
      user: {
        id: row.user_id,
        name: row.user_name,
        username: row.user_username || row.user_name.toLowerCase().replace(' ', '_'),
        avatar: row.user_avatar,
      },
      likes: row.likes || 0,
      isLikedByMe: row.is_liked_by_me === 1,
      verbatimDate: row.verbatim_date,
    }));
  }

  async saveMoment(moment: Moment): Promise<void> {
    await this.db.runAsync(
      `INSERT OR REPLACE INTO moments (
                id, place_id, place_name, user_id, content, media_url, media_type, created_at, mood, likes, is_liked_by_me, reactions_json
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        moment.id,
        moment.placeId,
        moment.placeName,
        moment.user.id,
        moment.caption,
        moment.imageUri || null,
        moment.type || 'image',
        moment.timestamp,
        moment.mood || 'chill',
        moment.likes || 0,
        moment.isLikedByMe ? 1 : 0,
        JSON.stringify([]),
      ],
    );
  }

  async deleteMoment(id: string): Promise<void> {
    await this.db.runAsync('DELETE FROM moments WHERE id = ?', [id]);
  }

  async syncMoments(): Promise<void> {
    logger.log('🔄 [Sync] Starting offline-first synchronization...');
    // Protocol Skeleton (Bugatti Grade):
    // 1. Identify unsynced periodic 'pending' moments
    // 2. Batch push to Supabase Edge Functions
    // 3. Pull delta since last sync timestamp
    // 4. Atomic SQLite update to avoid UI flickering
  }
}
