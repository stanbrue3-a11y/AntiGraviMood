import * as SQLite from 'expo-sqlite';
import { Place, PlaceRow, PlaceSkeleton } from '../types/model';
import { FilterCriteria } from '../types/filters';
import { IPlacesRepository } from './IPlacesRepository';
import { PlaceMapper } from '../services/PlaceMapper';
import { Kysely, sql, ExpressionBuilder } from 'kysely';
import { Database } from '../data/db/schema';
import { SQLiteKernel } from '../services/SQLiteKernel';

export class SQLitePlacesRepository implements IPlacesRepository {
  private kysely: Kysely<Database> | null = null;

  constructor(
    private db: SQLite.SQLiteDatabase,
    private kernel?: SQLiteKernel,
  ) { }

  private async getDb(): Promise<Kysely<Database>> {
    if (this.kysely) return this.kysely;
    if (this.kernel) {
      this.kysely = await this.kernel.getKysely();
    } else {
      // Fallback for tests or legacy instantiation
      const { ExpoDialect } = require('kysely-expo');
      this.kysely = new Kysely<Database>({
        dialect: new ExpoDialect({ database: this.db }),
      });
    }
    return this.kysely;
  }

  /**
   * Returns FULL objects for the ~63 places to avoid pop-in.
   * Part of the Haussmannian Registry Store model.
   */
  async getRegistryPlaces(signal?: AbortSignal): Promise<Place[]> {
    const queryBuilder = await this.getDb();
    const results = await queryBuilder.selectFrom('places').selectAll().execute();

    if (signal?.aborted) throw new Error('AbortError');
    return (results as unknown as PlaceRow[]).map((row) => PlaceMapper.mapRowToPlace(row));
  }

  /**
   * [V2 Architecture] Fetches ONLY the required columns to build PlaceSkeletons.
   * Guaranteed O(1) Memory footprint by stripping out heavy JSON objects.
   */
  async getRegistrySkeletons(signal?: AbortSignal): Promise<PlaceSkeleton[]> {
    const queryBuilder = await this.getDb();

    const results = await queryBuilder
      .selectFrom('places')
      .select([
        'id',
        'name',
        'slug',
        'category',
        'subcategory',
        'dominant_mood',
        'lat',
        'lng',
        'arrondissement',
        'address',
        'hero_image',
        'rating',
        'user_ratings_total',
        // Pricing Base Fields for MiniBadge
        'budget_avg',
        'is_free',
        'budget_unit',
        'pint_price',
        'cocktail_price',
        'coffee_price',
        'main_dish_price',
        // No Categories JSON, No Social, No Editorial, No Vibe, No AI Insights
        'pricing_json', // Required for Happy Hour parsing inside the MiniBadge
      ])
      .execute();

    if (signal?.aborted) throw new Error('AbortError');

    // We use PlaceMapper to guarantee consistent typing, even for skeletons
    return (results as unknown as PlaceRow[]).map((row) => PlaceMapper.mapRowToSkeleton(row));
  }

  async getRegistryRows(signal?: AbortSignal): Promise<PlaceRow[]> {
    const queryBuilder = await this.getDb();
    const results = await queryBuilder.selectFrom('places').selectAll().execute();

    if (signal?.aborted) throw new Error('AbortError');
    return results as unknown as PlaceRow[];
  }

  async getFilteredPlaces(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
  ): Promise<Place[]> {
    const queryBuilder = await this.getDb();

    const {
      searchQuery = '',
      selectedCategories = [],
      selectedMoods = [],
      selectedDistricts = [],
      maxPrice = null,
      pintLimit = null,
      dishLimit = null,
      coffeeLimit = null,
      filterTerrace = false,
      userLocation,
    } = filters;

    let results;

    if (searchQuery && searchQuery.trim().length > 1) {
      let q = queryBuilder
        .selectFrom('places')
        .innerJoin('places_fts', 'places.id', 'places_fts.id')
        .selectAll('places')
        .where('places_fts.places_fts', 'match', searchQuery.trim() + '*');

      if (selectedCategories && selectedCategories.length > 0)
        q = q.where((eb) => eb.or([
          eb('places.category', 'in', selectedCategories),
          ...selectedCategories.map(cat => eb(sql`(', ' || places.subcategory || ', ')`, 'like', `%, ${cat}, %`))
        ]));
      if (selectedMoods && selectedMoods.length > 0)
        q = q.where('places.dominant_mood', 'in', selectedMoods);
      if (selectedDistricts && selectedDistricts.length > 0)
        q = q.where('places.arrondissement', 'in', selectedDistricts);

      if (maxPrice !== null || pintLimit !== null || dishLimit !== null || coffeeLimit !== null) {
        q = q.where((eb) => {
          const priceOrs = [];

          if (pintLimit !== null) {
            priceOrs.push(
              eb.and([
                eb.or([eb('places.category', '=', 'bar'), eb(sql`(', ' || places.subcategory || ', ')`, 'like', '%, bar, %')]),
                eb.or([
                  eb.and([eb('places.pint_price', '>', 0), eb('places.pint_price', '<=', pintLimit)]),
                  eb.and([eb('places.wine_glass', '>', 0), eb('places.wine_glass', '<=', pintLimit)]),
                  eb.and([eb('places.cocktail_price', '>', 0), eb('places.cocktail_price', '<=', pintLimit * 1.35)]),
                  eb.and([
                    eb.or([eb('places.pint_price', 'is', null), eb('places.pint_price', '=', 0)]),
                    eb.or([eb('places.wine_glass', 'is', null), eb('places.wine_glass', '=', 0)]),
                    eb.or([eb('places.cocktail_price', 'is', null), eb('places.cocktail_price', '=', 0)]),
                    eb.and([eb('places.budget_avg', '>', 0), eb('places.budget_avg', '<=', pintLimit)])
                  ])
                ])
              ])
            );
          }

          if (dishLimit !== null) {
            priceOrs.push(
              eb.and([
                eb('places.category', 'in', ['restaurant', 'bouillon']),
                eb.and([eb('places.main_dish_price', '>', 0), eb('places.main_dish_price', '<=', dishLimit)]),
              ])
            );
          }

          if (coffeeLimit !== null) {
            priceOrs.push(
              eb.and([
                eb('places.category', '=', 'café'),
                eb.and([eb('places.coffee_price', '>', 0), eb('places.coffee_price', '<=', coffeeLimit)]),
              ])
            );
          }

          if (maxPrice !== null) {
            priceOrs.push(eb.and([eb('places.budget_avg', '>', 0), eb('places.budget_avg', '<=', maxPrice)]));
          }

          return eb.or(priceOrs);
        });
      }

      if (filterTerrace) {
        q = q.where((eb) =>
          eb.or([
            eb('places.description', 'like', '%terrasse%'),
            eb('places.editorial_json', 'like', '%terrasse%'),
          ]),
        );
      }

      q = q.orderBy('places_fts.rank', 'asc');
      results = await q.execute();
    } else {
      let q = queryBuilder.selectFrom('places').selectAll('places');

      if (selectedCategories && selectedCategories.length > 0)
        q = q.where((eb) => eb.or([
          eb('places.category', 'in', selectedCategories),
          ...selectedCategories.map(cat => eb('places.subcategory', 'like', `%${cat}%`))
        ]));
      if (selectedMoods && selectedMoods.length > 0)
        q = q.where('places.dominant_mood', 'in', selectedMoods);
      if (selectedDistricts && selectedDistricts.length > 0)
        q = q.where('places.arrondissement', 'in', selectedDistricts);

      if (maxPrice !== null || pintLimit !== null || dishLimit !== null || coffeeLimit !== null) {
        q = q.where((eb) => {
          const priceOrs = [];
          if (pintLimit !== null)
            priceOrs.push(
              eb.and([
                eb.or([eb('places.category', '=', 'bar'), eb('places.subcategory', 'like', '%bar%')]),
                eb('places.pint_price', '<=', pintLimit)
              ]),
            );
          if (dishLimit !== null)
            priceOrs.push(
              eb.and([
                eb('places.category', 'in', ['restaurant', 'bouillon']),
                eb('places.main_dish_price', '<=', dishLimit),
              ]),
            );
          if (coffeeLimit !== null)
            priceOrs.push(
              eb.and([
                eb('places.category', '=', 'café'),
                eb('places.coffee_price', '<=', coffeeLimit),
              ]),
            );
          if (maxPrice !== null) priceOrs.push(eb('places.budget_avg', '<=', maxPrice));
          return eb.or(priceOrs);
        });
      }

      if (filterTerrace) {
        q = q.where((eb) =>
          eb.or([
            eb('places.description', 'like', '%terrasse%'),
            eb('places.editorial_json', 'like', '%terrasse%'),
          ]),
        );
      }

      if (userLocation) {
        q = q.orderBy(
          sql`((places.lat - ${userLocation.lat}) * (places.lat - ${userLocation.lat}) + (places.lng - ${userLocation.lng}) * (places.lng - ${userLocation.lng}))`,
          'asc',
        );
      } else {
        q = q.orderBy('places.rating', 'desc').orderBy('places.user_ratings_total', 'desc');
      }
      results = await q.execute();
    }

    if (signal?.aborted) throw new Error('AbortError');
    return (results as unknown as PlaceRow[]).map((row) => PlaceMapper.mapRowToPlace(row));
  }

  async getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null> {
    const queryBuilder = await this.getDb();
    const row = await queryBuilder
      .selectFrom('places')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();

    if (signal?.aborted) throw new Error('AbortError');
    if (!row) return null;

    const typedRow = row as unknown as PlaceRow;
    const place = PlaceMapper.mapRowToPlace(typedRow);
    return PlaceMapper.hydrateDetails(place, typedRow);
  }

  async getFilteredPlaceIds(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
  ): Promise<string[]> {
    const queryBuilder = await this.getDb();

    const {
      searchQuery = '',
      selectedCategories = [],
      selectedMoods = [],
      selectedDistricts = [],
      maxPrice = null,
      pintLimit = null,
      dishLimit = null,
      coffeeLimit = null,
      filterTerrace = false,
      userLocation,
    } = filters;

    let results;

    if (searchQuery && searchQuery.trim().length > 1) {
      let q = queryBuilder
        .selectFrom('places')
        .innerJoin('places_fts', 'places.id', 'places_fts.id')
        .select('places.id')
        .where('places_fts.places_fts', 'match', searchQuery.trim() + '*');

      if (selectedCategories && selectedCategories.length > 0)
        q = q.where((eb) => eb.or([
          eb('places.category', 'in', selectedCategories),
          ...selectedCategories.map(cat => eb(sql`(', ' || places.subcategory || ', ')`, 'like', `%, ${cat}, %`))
        ]));
      if (selectedMoods && selectedMoods.length > 0)
        q = q.where('places.dominant_mood', 'in', selectedMoods);
      if (selectedDistricts && selectedDistricts.length > 0)
        q = q.where('places.arrondissement', 'in', selectedDistricts);

      if (maxPrice !== null || pintLimit !== null || dishLimit !== null || coffeeLimit !== null) {
        q = q.where((eb) => {
          const priceOrs = [];
          if (pintLimit !== null)
            priceOrs.push(
              eb.and([
                eb.or([eb('places.category', '=', 'bar'), eb(sql`(', ' || places.subcategory || ', ')`, 'like', '%, bar, %')]),
                eb('places.pint_price', '<=', pintLimit)
              ]),
            );
          if (dishLimit !== null)
            priceOrs.push(
              eb.and([
                eb('places.category', 'in', ['restaurant', 'bouillon']),
                eb('places.main_dish_price', '<=', dishLimit),
              ]),
            );
          if (coffeeLimit !== null)
            priceOrs.push(
              eb.and([
                eb('places.category', '=', 'café'),
                eb('places.coffee_price', '<=', coffeeLimit),
              ]),
            );
          if (maxPrice !== null) priceOrs.push(eb('places.budget_avg', '<=', maxPrice));
          return eb.or(priceOrs);
        });
      }

      if (filterTerrace) {
        q = q.where((eb) =>
          eb.or([
            eb('places.description', 'like', '%terrasse%'),
            eb('places.editorial_json', 'like', '%terrasse%'),
          ]),
        );
      }

      q = q.orderBy('places_fts.rank', 'asc');
      results = await q.execute();
    } else {
      let q = queryBuilder.selectFrom('places').select('places.id');

      if (selectedCategories && selectedCategories.length > 0)
        q = q.where((eb) => eb.or([
          eb('places.category', 'in', selectedCategories),
          ...selectedCategories.map(cat => eb(sql`(', ' || places.subcategory || ', ')`, 'like', `%, ${cat}, %`))
        ]));
      if (selectedMoods && selectedMoods.length > 0)
        q = q.where('places.dominant_mood', 'in', selectedMoods);
      if (selectedDistricts && selectedDistricts.length > 0)
        q = q.where('places.arrondissement', 'in', selectedDistricts);

      if (maxPrice !== null || pintLimit !== null || dishLimit !== null || coffeeLimit !== null) {
        q = q.where((eb) => {
          const priceOrs = [];
          if (pintLimit !== null)
            priceOrs.push(
              eb.and([
                eb.or([eb('places.category', '=', 'bar'), eb(sql`(', ' || places.subcategory || ', ')`, 'like', '%, bar, %')]),
                eb('places.pint_price', '<=', pintLimit)
              ]),
            );
          if (dishLimit !== null)
            priceOrs.push(
              eb.and([
                eb('places.category', 'in', ['restaurant', 'bouillon']),
                eb('places.main_dish_price', '<=', dishLimit),
              ]),
            );
          if (coffeeLimit !== null)
            priceOrs.push(
              eb.and([
                eb('places.category', '=', 'café'),
                eb('places.coffee_price', '<=', coffeeLimit),
              ]),
            );
          if (maxPrice !== null) priceOrs.push(eb('places.budget_avg', '<=', maxPrice));
          return eb.or(priceOrs);
        });
      }

      if (filterTerrace) {
        q = q.where((eb) =>
          eb.or([
            eb('places.description', 'like', '%terrasse%'),
            eb('places.editorial_json', 'like', '%terrasse%'),
          ]),
        );
      }

      if (userLocation) {
        q = q.orderBy(
          sql`((places.lat - ${userLocation.lat}) * (places.lat - ${userLocation.lat}) + (places.lng - ${userLocation.lng}) * (places.lng - ${userLocation.lng}))`,
          'asc',
        );
      } else {
        q = q.orderBy('places.rating', 'desc').orderBy('places.user_ratings_total', 'desc');
      }
      results = await q.execute();
    }

    if (signal?.aborted) throw new Error('AbortError');
    return results.map((r: { id: string }) => r.id);
  }
}
