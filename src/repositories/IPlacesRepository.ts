import { Place, PlaceRow, PlaceSkeleton } from '../types/model';
import { FilterCriteria } from '../types/filters';

/**
 * Interface for Place data access.
 * This is the "blueprint" that allows the app to be independent of the database technology.
 */
export interface IPlacesRepository {
  /**
   * Fetches all places with minimal data for map display.
   */
  getRegistryPlaces(signal?: AbortSignal): Promise<Place[]>;

  /**
   * [V2 Architecture] Fetches all places as lightweight Skeletons (O(1) Memory Array).
   */
  getRegistrySkeletons(signal?: AbortSignal): Promise<PlaceSkeleton[]>;

  /**
   * Fetches all raw rows for the registry (Performance optimized).
   */
  getRegistryRows(signal?: AbortSignal): Promise<PlaceRow[]>;

  /**
   * Fetches places based on complex filtering criteria.
   */
  getFilteredPlaces(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
  ): Promise<Place[]>;

  /**
   * Fetches full details for a single place.
   */
  getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null>;

  /**
   * Fetches only IDs based on complex filtering criteria (Performance optimized).
   */
  getFilteredPlaceIds(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
  ): Promise<string[]>;
}
