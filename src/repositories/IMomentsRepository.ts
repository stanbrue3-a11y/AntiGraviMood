import { Moment } from '../types/model';

/**
 * IMomentsRepository - The Protocol for Social Persistence 📱
 */
export interface IMomentsRepository {
    /**
     * Fetch all moments (optionally filtered by place)
     */
    getMoments(placeId?: string): Promise<Moment[]>;

    /**
     * Persist a new moment to the local database
     */
    saveMoment(moment: Moment): Promise<void>;

    /**
     * Delete a moment
     */
    deleteMoment(id: string): Promise<void>;

    /**
     * Sync local moments with the cloud (Supabase)
     */
    syncMoments(): Promise<void>;
}
