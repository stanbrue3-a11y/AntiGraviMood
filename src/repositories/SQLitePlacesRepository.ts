import * as SQLite from 'expo-sqlite';
import { Place } from '../types/model';
import { FilterCriteria } from '../types/filters';
import { IPlacesRepository } from './IPlacesRepository';
import { PlaceMapper, PlaceRow } from '../services/PlaceMapper';

export class SQLitePlacesRepository implements IPlacesRepository {
    constructor(private db: SQLite.SQLiteDatabase) { }

    /**
     * getAllPlacesLight 
     * 
     * ⚠️ PERFORMANCE OVERRIDE: 
     * Switching to SELECT * to ensure NO data is missing during initial render.
     * The "Light" naming is legacy now; this returns FULL objects for the ~63 places.
     * This fixes the "White Sheet Pop-in" issue.
     */
    async getAllPlacesLight(signal?: AbortSignal): Promise<Place[]> {
        const results = await this.db.getAllAsync<PlaceRow>(
            `SELECT * FROM places`
        );
        if (signal?.aborted) throw new Error("AbortError");
        return results.map(row => PlaceMapper.mapRowToPlace(row));
    }

    async getFilteredPlaces(filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } }, signal?: AbortSignal): Promise<Place[]> {
        const {
            searchQuery = '',
            selectedCategories = [],
            selectedMoods = [],
            selectedDistricts = [],
            isPinceEnabled = false,
            pinceMaxPercent = null,
            selectedPrice = null,
            pintLimit = null,
            dishLimit = null,
            coffeeLimit = null,
            filterTerrace = false,
            userLocation
        } = filters;

        // ⚠️ PERFORMANCE OVERRIDE: SELECT * here too.
        let query = `SELECT p.* FROM places p`;

        const whereClauses: string[] = [];
        const params: any[] = [];

        if (searchQuery && searchQuery.length > 0) {
            query += ` JOIN places_fts fts ON p.id = fts.id`;
            whereClauses.push(`places_fts MATCH ?`);
            params.push(searchQuery + "*");
        }

        if (selectedCategories && selectedCategories.length > 0) {
            const placeholders = selectedCategories.map(() => '?').join(',');
            whereClauses.push(`(p.category IN (${placeholders}) OR EXISTS (
        SELECT 1 FROM json_each(p.categories_json) WHERE json_each.value IN (${placeholders})
      ))`);
            params.push(...selectedCategories, ...selectedCategories);
        }

        if (selectedMoods && selectedMoods.length > 0) {
            const placeholders = selectedMoods.map(() => '?').join(',');
            whereClauses.push(`p.dominant_mood IN (${placeholders})`);
            params.push(...selectedMoods);
        }

        if (selectedDistricts && selectedDistricts.length > 0) {
            const placeholders = selectedDistricts.map(() => '?').join(',');
            whereClauses.push(`p.arrondissement IN (${placeholders})`);
            params.push(...selectedDistricts);
        }

        if (pintLimit !== null) {
            whereClauses.push(`(p.pint_price <= ? OR (p.pint_price IS NULL AND p.category != 'bar'))`);
            params.push(pintLimit);
        }

        if (dishLimit !== null) {
            whereClauses.push(`(p.main_dish_price <= ? OR (p.main_dish_price IS NULL AND p.category != 'restaurant'))`);
            params.push(dishLimit);
        }

        if (coffeeLimit !== null) {
            whereClauses.push(`(p.coffee_price <= ? OR (p.coffee_price IS NULL AND p.category != 'café'))`);
            params.push(coffeeLimit);
        }

        if (selectedPrice !== null) {
            whereClauses.push(`p.budget_avg <= ?`);
            params.push(selectedPrice);
        }

        if (isPinceEnabled) {
            const limit = pinceMaxPercent !== null ? pinceMaxPercent : 60;
            whereClauses.push(`p.category_percentile <= ?`);
            params.push(limit);
        }

        if (filterTerrace) {
            whereClauses.push(`(p.description LIKE '%terrasse%' OR p.editorial_json LIKE '%terrasse%')`);
        }

        if (whereClauses.length > 0) {
            query += ` WHERE ` + whereClauses.join(' AND ');
        }

        if (searchQuery) {
            query += ` ORDER BY rank ASC`; // FTS5 rank: lower is better usually, or use bm25
        } else if (userLocation) {
            // High-fidelity Haversine approximation
            query += ` ORDER BY ((p.lat - ?) * (p.lat - ?) + (p.lng - ?) * (p.lng - ?)) ASC`;
            params.push(userLocation.lat, userLocation.lat, userLocation.lng, userLocation.lng);
        } else {
            query += ` ORDER BY p.rating DESC, p.user_ratings_total DESC`;
        }

        const results = await this.db.getAllAsync<PlaceRow>(query, params);
        if (signal?.aborted) throw new Error("AbortError");
        return results.map(row => PlaceMapper.mapRowToPlace(row));
    }

    async getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null> {
        const row = await this.db.getFirstAsync<PlaceRow>(
            `SELECT p.*, description, editorial_json, pricing_json, hours_json, media_json, ai_insights_json, real_talk_json 
       FROM places p WHERE p.id = ?`,
            [id]
        );
        if (signal?.aborted) throw new Error("AbortError");
        if (!row) return null;

        const place = PlaceMapper.mapRowToPlace(row);
        return PlaceMapper.hydrateDetails(place, row);
    }
}
