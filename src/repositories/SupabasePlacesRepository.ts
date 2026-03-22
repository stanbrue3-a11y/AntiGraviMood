import { supabase } from '../lib/supabase';
import { Place, PlaceRow, PlaceSkeleton } from '../types/model';
import { FilterCriteria } from '../types/filters';
import { IPlacesRepository } from './IPlacesRepository';

/**
 * Supabase Implementation of IPlacesRepository.
 * This represents the "New World" of MoodMap (Cloud-First).
 */
export class SupabasePlacesRepository implements IPlacesRepository {
  
  /**
   * Fetches full place objects.
   * Supabase already returns JSON objects for columns like 'media' or 'practical_info',
   * so we don't need the string-parsing logic of PlaceMapper (Legacy).
   */
  async getRegistryPlaces(signal?: AbortSignal): Promise<Place[]> {
    const { data, error } = await supabase
      .from('places')
      .select('*');

    if (error) throw error;
    return (data as any[]).map((row) => this.mapSupabaseRowToPlace(row));
  }

  async getRegistrySkeletons(signal?: AbortSignal): Promise<PlaceSkeleton[]> {
    const { data, error } = await supabase
      .from('places')
      .select('id, name, slug, address, arrondissement, lat, lng, category, subcategories, dominant_mood, media, index_price, google_rating');

    if (error) throw error;
    
    return (data as any[]).map(row => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      location: {
        address: row.address,
        arrondissement: row.arrondissement,
        coordinates: { lat: row.lat, lng: row.lng }
      },
      category: row.category,
      subcategories: row.subcategories || [],
      dominant_mood: row.dominant_mood,
      media: {
        hero_image: row.media?.hero_image || row.media?.hero || ''
      },
      pricing: {
          index_price: row.index_price || 0,
          unit: '€',
          is_free: false,
          type: 'generic',
          menu_items: []
      } as any,
      google_rating: row.google_rating
    } as PlaceSkeleton));
  }

  async getRegistryRows(signal?: AbortSignal): Promise<PlaceRow[]> {
    const { data, error } = await supabase
      .from('places')
      .select('*');

    if (error) throw error;
    return data as any[];
  }

  async getFilteredPlaces(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal
  ): Promise<Place[]> {
    let query = supabase.from('places').select('*');

    if (filters.selectedCategories && filters.selectedCategories.length > 0) {
      query = query.in('category', filters.selectedCategories);
    }
    if (filters.selectedDistricts && filters.selectedDistricts.length > 0) {
      query = query.in('arrondissement', filters.selectedDistricts);
    }
    if (filters.selectedMoods && filters.selectedMoods.length > 0) {
      query = query.in('dominant_mood', filters.selectedMoods);
    }
    
    // Price Filters
    if (filters.pintLimit !== null && filters.pintLimit !== undefined) {
      query = query.lte('pint_price', filters.pintLimit);
    }
    if (filters.dishLimit !== null && filters.dishLimit !== undefined) {
      query = query.lte('main_dish_price', filters.dishLimit);
    }
    if (filters.coffeeLimit !== null && filters.coffeeLimit !== undefined) {
      query = query.lte('coffee_price', filters.coffeeLimit);
    }
    if (filters.maxPrice !== null && filters.maxPrice !== undefined) {
      query = query.lte('index_price', filters.maxPrice);
    }

    // Practical Info Filters
    if (filters.filterTerrace) {
      query = query.eq('practical_info->terrace', true);
    }
    if (filters.filterHappyHour) {
      query = query.not('hh_pint_price', 'is', null);
    }

    if (filters.searchQuery) {
      query = query.ilike('name', `%${filters.searchQuery}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    return (data as any[]).map((row) => this.mapSupabaseRowToPlace(row));
  }

  async getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null> {
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
        if (error.code === 'PGRST116') return null; // Not found
        throw error;
    }
    return this.mapSupabaseRowToPlace(data);
  }

  async getFilteredPlaceIds(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal
  ): Promise<string[]> {
    let query = supabase.from('places').select('id');

    if (filters.selectedCategories && filters.selectedCategories.length > 0) {
      query = query.in('category', filters.selectedCategories);
    }
    if (filters.selectedDistricts && filters.selectedDistricts.length > 0) {
      query = query.in('arrondissement', filters.selectedDistricts);
    }
    if (filters.selectedMoods && filters.selectedMoods.length > 0) {
      query = query.in('dominant_mood', filters.selectedMoods);
    }

    // Price Filters
    if (filters.pintLimit !== null && filters.pintLimit !== undefined) {
      query = query.lte('pint_price', filters.pintLimit);
    }
    if (filters.dishLimit !== null && filters.dishLimit !== undefined) {
      query = query.lte('main_dish_price', filters.dishLimit);
    }
    if (filters.coffeeLimit !== null && filters.coffeeLimit !== undefined) {
      query = query.lte('coffee_price', filters.coffeeLimit);
    }
    if (filters.maxPrice !== null && filters.maxPrice !== undefined) {
      query = query.lte('index_price', filters.maxPrice);
    }

    // Practical Info Filters
    if (filters.filterTerrace) {
      query = query.eq('practical_info->terrace', true);
    }
    if (filters.filterHappyHour) {
      query = query.not('hh_pint_price', 'is', null);
    }

    if (filters.searchQuery) {
      query = query.ilike('name', `%${filters.searchQuery}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    return (data as any[]).map(r => r.id);
  }

  /**
   * Complex Mapping: Supabase Flat Row -> Complex App Model
   */
  private mapSupabaseRowToPlace(row: any): Place {
    // 1. Merge Duplicate Categories in Pricing
    const rawMenu = row.raw_menu || [];
    const mergedMenu: any[] = [];
    const categoryMap: Record<string, any[]> = {};

    rawMenu.forEach((cat: any) => {
      if (!categoryMap[cat.category]) {
        categoryMap[cat.category] = [];
      }
      categoryMap[cat.category].push(...cat.items);
    });

    Object.keys(categoryMap).forEach(catName => {
      mergedMenu.push({
        category: catName,
        items: categoryMap[catName]
      });
    });

    return {
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description || '',
      expert_catchline: row.real_talk?.expert_catchline || '',
      insider_tip: row.real_talk?.insider_tip || '',
      category: row.category,
      subcategories: row.subcategories || [],
      dominant_mood: row.dominant_mood,
      location: {
        address: row.address,
        arrondissement: row.arrondissement,
        coordinates: { lat: row.lat, lng: row.lng },
        nearest_metro: row.nearest_metro,
        metro_lines: row.metro_lines || []
      },
      pricing: {
        type: row.category === 'café' ? 'cafe' : row.category,
        unit: '€',
        is_free: row.pint_price === 0,
        index_price: row.index_price,
        pint_price: row.pint_price || undefined,
        cocktail_price: row.cocktail_price || undefined,
        coffee_price: row.coffee_price || undefined,
        dish_price: row.main_dish_price || undefined,
        menu_items: mergedMenu
      } as any,
      practical_info: {
        primary_status: row.practical_info?.reservation_policy,
        opening_hours: row.practical_info?.opening_hours || 'Voir sur place',
        terrace: row.practical_info?.terrace,
        main_action: row.practical_info?.main_action
      } as any,
      media: {
        hero_image: row.media?.hero_image || row.media?.hero || '',
        google_photos: row.media?.google_photos || row.media?.gallery || []
      } as any,
      real_talk: {
        insider_tip: row.real_talk?.insider_tip,
        must_eat: row.real_talk?.must_eat,
        must_drink: row.real_talk?.must_drink
      } as any,
      specials: {
        cuisine: row.real_talk?.cuisine || [],
        drinks: row.real_talk?.drinks || [],
        must_eat: row.real_talk?.must_eat || undefined,
        must_drink: row.real_talk?.must_drink || undefined,
        expert_catchline: row.real_talk?.expert_catchline || undefined,
      },
      google_rating: row.google_rating,
      verified: row.verified
    } as Place;
  }
}
