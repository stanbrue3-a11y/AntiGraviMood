import { useState, useEffect, useRef, useMemo } from 'react';
import * as Haptics from 'expo-haptics';
// Moments logic handled via useMomentsStore
import { Place } from '../types/model';
import { useMomentsStore } from '../stores/momentsStore';
import { useSearchStore } from '../stores/searchStore';
import { usePlacesStore } from '../stores/placesStore';
import { GLOBAL_MOMENTS, FRIENDS_MOMENTS } from '../data/mockMoments';

export type FeedMode = 'global' | 'amis';

export const useFeedLogic = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [feedMode, setFeedMode] = useState<FeedMode>('global');
    const [isLoading, setIsLoading] = useState(true);
    const localMoments = useMomentsStore(state => state.moments);

    // Get Filters and Place Data to cross-reference
    const selectedDistricts = useSearchStore(state => state.selectedDistricts);
    const places = usePlacesStore(state => state.places);

    // No artificial loading delay for a snappier feel
    useEffect(() => {
        setIsLoading(false);
    }, []);

    // Optimized Lookup Map 🗺️
    const placesMap = useMemo(() => {
        const map: Record<string, Place> = {};
        places.forEach(p => { map[p.id] = p; });
        return map;
    }, [places]);

    // Filter Logic - Now O(N) instead of O(N*M) ⚡️
    const filteredGlobalMoments = useMemo(() => {
        let result = [...localMoments, ...GLOBAL_MOMENTS];

        // Filter by District
        if (selectedDistricts && selectedDistricts.length > 0) {
            result = result.filter(moment => {
                const place = placesMap[moment.placeId];
                if (!place) return true;

                return selectedDistricts.includes(place.location.arrondissement);
            });
        }
        return result;
    }, [localMoments, selectedDistricts, placesMap]);

    // Merge strategy
    const allGlobalMoments = filteredGlobalMoments;
    // Future: Filter friends moments
    const allFriendsMoments = [...FRIENDS_MOMENTS];

    const moments = feedMode === 'global' ? allGlobalMoments : allFriendsMoments;

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            const newIndex = viewableItems[0].index || 0;
            if (newIndex !== activeIndex) {
                Haptics.selectionAsync();
            }
            setActiveIndex(newIndex);
        }
    }).current;

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setRefreshing(true);
        // Simulate network fetch
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    };

    const handleSwitchMode = (mode: FeedMode) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setFeedMode(mode);
        setActiveIndex(0);
    };

    return {
        feedMode,
        moments,
        isLoading,
        activeIndex,
        localMoments, // Exposed for extraData
        handleSwitchMode,
        onViewableItemsChanged,
        refreshing,
        onRefresh
    };
};
