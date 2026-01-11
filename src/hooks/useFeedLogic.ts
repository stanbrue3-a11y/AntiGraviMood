import { useState, useEffect, useRef, useMemo } from 'react';
import * as Haptics from 'expo-haptics';
import { useMomentsStore } from '../stores/useMomentsStore';
import { usePlacesStore } from '../stores/usePlacesStore'; // Import Places Store
import { GLOBAL_MOMENTS, FRIENDS_MOMENTS } from '../data/mockMoments';

export type FeedMode = 'global' | 'amis';

export const useFeedLogic = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [feedMode, setFeedMode] = useState<FeedMode>('global');
    const [isLoading, setIsLoading] = useState(true);
    const { moments: localMoments } = useMomentsStore();

    // Get Filters and Place Data to cross-reference
    const selectedDistricts = usePlacesStore(state => state.selectedDistricts);
    const places = usePlacesStore(state => state.places);

    // No artificial loading delay for a snappier feel
    useEffect(() => {
        setIsLoading(false);
    }, []);

    // Filter Logic
    const filteredGlobalMoments = useMemo(() => {
        let result = [...localMoments, ...GLOBAL_MOMENTS];

        // Filter by District
        if (selectedDistricts && selectedDistricts.length > 0) {
            result = result.filter(moment => {
                // Find place to get district
                const place = places.find(p => p.id === moment.placeId);
                if (!place) return true; // Keep if unknown to be safe (or remove?) - Safe: keep.

                return selectedDistricts.includes(place.location.arrondissement);
            });
        }
        return result;
    }, [localMoments, selectedDistricts, places]);

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
