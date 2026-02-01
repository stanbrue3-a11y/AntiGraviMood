import * as SQLite from 'expo-sqlite';
import { Place } from '../types/model';
import { FilterCriteria } from '../types/filters';
import { IPlacesRepository } from './IPlacesRepository';
import { PlaceMapper, PlaceRow } from '../services/PlaceMapper';

export class SQLitePlacesRepository implements IPlacesRepository {
    constructor(private db: SQLite.SQLiteDatabase) { }

    async getAllPlacesLight(signal?: AbortSignal): Promise<Place[]> {
        const results = await this.db.getAllAsync<PlaceRow>(
            `SELECT id, name, slug, category, subcategory, dominant_mood, lat, lng, arrondissement, address,
              main_color, map_icon, verified, rating, user_ratings_total, hero_image, instagram_handle,
              budget_avg, is_free, budget_unit, pint_price, cocktail_price, coffee_price, main_dish_price, category_percentile,
              mood_scores_json, social_json, categories_json, hours_json, nearest_metro, metro_line_json, editorial_json, vibes_json
       FROM places`
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

        let query = `
      SELECT p.id, p.name, p.slug, p.category, p.subcategory, p.dominant_mood, p.lat, p.lng, p.arrondissement, p.address,
             p.main_color, p.map_icon, p.verified, p.rating, p.user_ratings_total, p.hero_image, p.instagram_handle,
             p.budget_avg, p.is_free, p.budget_unit, p.pint_price, p.cocktail_price, p.coffee_price, p.main_dish_price, p.category_percentile,
             p.mood_scores_json, p.social_json, p.categories_json, p.hours_json, p.editorial_json, p.nearest_metro, p.metro_line_json, p.vibes_json
      FROM places p
    `;
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
            `SELECT p.*, description, editorial_json, pricing_json, hours_json, media_json, ai_insights_json 
       FROM places p WHERE p.id = ?`,
            [id]
        );
        if (signal?.aborted) throw new Error("AbortError");
        if (!row) return null;
        const place = PlaceMapper.mapRowToPlace(row);
        return PlaceMapper.hydrateDetails(place, row);
    }
}
