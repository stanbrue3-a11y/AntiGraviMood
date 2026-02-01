import { Place } from '../types/model';
import { FilterCriteria } from '../types/filters';

/**
 * Interface for Place data access.
 * This is the "blueprint" that allows the app to be independent of the database technology.
 */
export interface IPlacesRepository {
    /**
     * Fetches all places with minimal data for map display.
     */
    getAllPlacesLight(signal?: AbortSignal): Promise<Place[]>;

    /**
     * Fetches places based on complex filtering criteria.
     */
    getFilteredPlaces(filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } }, signal?: AbortSignal): Promise<Place[]>;

    /**
     * Fetches full details for a single place.
     */
    getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null>;
}
