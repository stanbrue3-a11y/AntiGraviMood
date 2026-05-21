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
    const { data, error } = await supabase.from('places').select('*');

    if (error) throw error;
    return (data as any[]).map((row) => this.mapSupabaseRowToPlace(row));
  }

  async getRegistrySkeletons(signal?: AbortSignal): Promise<PlaceSkeleton[]> {
    const { data, error } = await supabase
      .from('places')
      .select(
        'id, name, slug, address, arrondissement, lat, lng, category, subcategories, dominant_mood, hero_image, google_rating, google_reviews_count, michelin_stars, plat_median_cents, tags',
      );

    if (error) throw error;

    return (data as any[]).map(
      (row) =>
        ({
          id: row.id,
          name: row.name,
          slug: row.slug,
          location: {
            address: row.address,
            arrondissement: row.arrondissement,
            coordinates: { lat: row.lat, lng: row.lng },
          },
          category: row.category,
          subcategories: row.subcategories || [],
          dominant_mood: row.dominant_mood,
          media: {
            hero_image: row.hero_image || '',
          },
          pricing: {
            index_price: row.plat_median_cents ? row.plat_median_cents / 100 : 0,
            unit: '€',
            is_free: false,
            type: 'generic',
            menu_items: [],
          } as any,
          google_rating: row.google_rating,
          michelin_stars: row.michelin_stars,
          tags: row.tags || [],
        }) as PlaceSkeleton,
    );
  }

  async getRegistryRows(signal?: AbortSignal): Promise<PlaceRow[]> {
    const { data, error } = await supabase.from('places').select('*');

    if (error) throw error;
    return data as any[];
  }

  async getFilteredPlaces(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
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

    // Price Filters (Titan-V4: converted to centimes)
    if (filters.pintLimit !== null && filters.pintLimit !== undefined) {
      query = query.lte('pint_price_cents', filters.pintLimit * 100);
    }
    if (filters.dishLimit !== null && filters.dishLimit !== undefined) {
      query = query.lte('plat_median_cents', filters.dishLimit * 100);
    }
    if (filters.coffeeLimit !== null && filters.coffeeLimit !== undefined) {
      query = query.lte('coffee_price_cents', filters.coffeeLimit * 100);
    }
    if (filters.maxPrice !== null && filters.maxPrice !== undefined) {
      query = query.lte('plat_median_cents', filters.maxPrice * 100);
    }

    // Practical Info Filters
    if (filters.filterTerrace) {
      query = query.eq('has_terrace', true);
    }

    if (filters.searchQuery) {
      query = query.ilike('name', `%${filters.searchQuery}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    return (data as any[]).map((row) => this.mapSupabaseRowToPlace(row));
  }

  async getPlaceDetails(id: string, signal?: AbortSignal): Promise<Place | null> {
    // Fetch place row
    const { data, error } = await supabase.from('places').select('*').eq('id', id).single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }

    // Fetch relational menu (Titan-V4) — categories + items
    const { data: categoriesData } = await supabase
      .from('menu_categories')
      .select('id, category_type, display_label, sort_order')
      .eq('place_id', id)
      .order('sort_order', { ascending: true });

    let menuItems: any[] = [];

    if (categoriesData && categoriesData.length > 0) {
      const categoryIds = categoriesData.map((c: any) => c.id);

      const { data: itemsData } = await supabase
        .from('menu_items')
        .select(
          'id, category_id, name, description, price_cents, happy_hour_price_cents, is_highlight',
        )
        .in('category_id', categoryIds);

      menuItems = categoriesData.map((cat: any) => ({
        category: cat.display_label || cat.category_type,
        category_type: cat.category_type,
        display_label: cat.display_label,
        items: (itemsData || [])
          .filter((item: any) => item.category_id === cat.id)
          .map((item: any) => ({
            name: item.name,
            description: item.description || undefined,
            price: item.price_cents
              ? `${(item.price_cents / 100).toFixed(item.price_cents % 100 === 0 ? 0 : 2)}€`
              : undefined,
            price_cents: item.price_cents,
            happy_hour_price_cents: item.happy_hour_price_cents || undefined,
            is_highlight: item.is_highlight || false,
          })),
      }));
    }

    return this.mapSupabaseRowToPlace(data, menuItems);
  }

  async getFilteredPlaceIds(
    filters: Partial<FilterCriteria> & { userLocation?: { lat: number; lng: number } },
    signal?: AbortSignal,
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

    // Price Filters (Titan-V4: converted to centimes)
    if (filters.pintLimit !== null && filters.pintLimit !== undefined) {
      query = query.lte('pint_price_cents', filters.pintLimit * 100);
    }
    if (filters.dishLimit !== null && filters.dishLimit !== undefined) {
      query = query.lte('plat_median_cents', filters.dishLimit * 100);
    }
    if (filters.coffeeLimit !== null && filters.coffeeLimit !== undefined) {
      query = query.lte('coffee_price_cents', filters.coffeeLimit * 100);
    }
    if (filters.maxPrice !== null && filters.maxPrice !== undefined) {
      query = query.lte('plat_median_cents', filters.maxPrice * 100);
    }

    // Practical Info Filters
    if (filters.filterTerrace) {
      query = query.eq('has_terrace', true);
    }

    if (filters.searchQuery) {
      query = query.ilike('name', `%${filters.searchQuery}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    return (data as any[]).map((r) => r.id);
  }

  /**
   * Complex Mapping: Supabase Flat Row V4 -> Complex App Model
   *
   * ⚠️ SYNCHRONISATION OBLIGATOIRE (Standard Industriel 2026) :
   * Tout nouveau champ ajouté ici DOIT aussi être ajouté dans :
   *   → src/services/PlaceMapper.ts (chemin SQLite legacy)
   *   → src/types/model.ts (interface PlaceRow)
   * Sans quoi le badge ou la donnée sera invisible sur le chemin SQLite.
   *
   * Champs synchronisés à ce jour :
   *   - reservation_policy → practical_info.primary_status ✅
   *   - has_terrace → practical_info.terrace ✅
   *   - metro_lines → location.metro_lines ✅
   */
  private mapSupabaseRowToPlace(row: any, menuItems: any[] = []): Place {
    return {
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description || '',
      expert_catchline: '',
      insider_tip: row.insider_tip || '',
      category: row.category,
      subcategories: row.subcategories || [],
      dominant_mood: row.dominant_mood,
      location: {
        address: row.address,
        arrondissement: row.arrondissement,
        coordinates: { lat: row.lat, lng: row.lng },
        nearest_metro: row.nearest_metro,
        metro_lines: row.metro_lines || [],
      },
      pricing: {
        type: row.category === 'café' ? 'cafe' : row.category,
        unit: '€',
        is_free: false,
        index_price: row.plat_median_cents ? row.plat_median_cents / 100 : 0,
        pint_price: row.pint_price_cents ? row.pint_price_cents / 100 : undefined,
        cocktail_price: row.cocktail_price_cents ? row.cocktail_price_cents / 100 : undefined,
        coffee_price: row.coffee_price_cents ? row.coffee_price_cents / 100 : undefined,
        wine_glass: row.wine_glass_cents ? row.wine_glass_cents / 100 : undefined,
        dish_price: row.plat_median_cents ? row.plat_median_cents / 100 : undefined,
        verified_at: row.menu_verified_at
          ? new Date(row.menu_verified_at).toISOString().split('T')[0]
          : undefined,
        menu_items: menuItems,
      } as any,
      practical_info: {
        // ⚡ NE PAS utiliser de fallback ici : si la politique n'est pas renseignée,
        // on retourne null pour ne pas afficher de badge sur les anciens lieux non audités.
        primary_status: (row.reservation_policy ||
          null) as Place['practical_info']['primary_status'],
        opening_hours: row.opening_hours_raw || 'Voir sur place',
        terrace: row.has_terrace || false,
        main_action: null,
      } as any,
      media: {
        hero_image: row.hero_image || '',
        google_photos: row.google_photos || [],
      } as any,
      real_talk: {
        insider_tip: row.insider_tip,
        must_eat: row.on_mange_quoi_ici,
        must_drink: undefined,
      } as any,
      specials: {
        cuisine: row.subcategories || [],
        drinks: [],
        must_eat: row.on_mange_quoi_ici || undefined,
        expert_catchline: undefined,
      },
      mood_scores: {
        chill: { overall: 50 },
        festif: { overall: 50 },
        culturel: { overall: 50 },
      },
      vibes: [],
      social_preview: {
        like_count: 0,
        moment_count: 0,
        top_vibe_tags: [],
      },
      google_rating: row.google_rating,
      google_user_ratings_total: row.google_reviews_count,
      verified: row.is_verified || false,
      michelin_stars: row.michelin_stars,
    } as Place;
  }
}
