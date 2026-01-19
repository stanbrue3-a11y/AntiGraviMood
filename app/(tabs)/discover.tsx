import { View, Text, StyleSheet, Platform, UIManager } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../src/design';
import { Place } from '../../src/types/model';
import { usePlacesStore } from '../../src/stores/usePlacesStore';
import { DiscoverCard } from '../../src/components/feed/DiscoverCard';
import { PlaceDetailSheetExplore } from '../../src/components/place/PlaceDetailSheetExplore';
import { Skeleton } from '../../src/components/common/Skeleton';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { ScreenFade } from '../../src/components/navigation/ScreenFade';
import * as Haptics from 'expo-haptics';

// Sub-components
import { DiscoverHeader } from '../../src/components/discover/DiscoverHeader';
// import { DiscoverFilters } from '../../src/components/discover/DiscoverFilters';
import { FilterSheet } from '../../src/components/feed/FilterSheet';
import { DiscoverSearch } from '../../src/components/discover/DiscoverSearch';
import { FlashList } from '@shopify/flash-list';


export default function DiscoverScreen() {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const router = useRouter();

    // Store State
    const places = usePlacesStore(state => state.places);
    const selectedPlaceId = usePlacesStore(state => state.selectedPlaceId);
    const selectedMoods = usePlacesStore(state => state.selectedMoods);
    const toggleMood = usePlacesStore(state => state.toggleMood);
    const selectedCategories = usePlacesStore(state => state.selectedCategories || []);
    const toggleCategory = usePlacesStore(state => state.toggleCategory);
    const getDominantMood = usePlacesStore(state => state.getDominantMood);
    const searchQuery = usePlacesStore(state => state.searchQuery);
    const setSearchQuery = usePlacesStore(state => state.setSearchQuery);
    const simulateLoading = usePlacesStore(state => state.simulateLoading);
    const isLoading = usePlacesStore(state => state.isLoading);
    const selectPlace = usePlacesStore(state => state.selectPlace);

    // Filter Stores
    const selectedPrice = usePlacesStore(state => state.selectedPrice);
    const setSelectedPrice = usePlacesStore(state => state.setSelectedPrice);
    const timeRange = usePlacesStore(state => state.timeRange);
    const setTimeRange = usePlacesStore(state => state.setTimeRange);

    // Pince Filter
    const isPinceEnabled = usePlacesStore(state => state.isPinceEnabled);
    const pinceMaxPercent = usePlacesStore(state => state.pinceMaxPercent);

    // UI State
    const [filterVisible, setFilterVisible] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);

    // Initialize layout animations
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);

    // Memoize filtering
    const filteredPlaces = useMemo(() => {
        return places.filter((place) => {
            // Filter by mood
            if (selectedMoods.length > 0) {
                const dominantMood = getDominantMood(place);
                if (!selectedMoods.includes(dominantMood)) {
                    return false;
                }
            }

            // Filter by category
            if (selectedCategories.length > 0) {
                if (!selectedCategories.includes(place.category)) {
                    return false;
                }
            }

            // Filter by search
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesName = place.name.toLowerCase().includes(query);
                const matchesVibes = place.vibes.some((v) => v.toLowerCase().includes(query));
                const matchesCategory = place.category.toLowerCase().includes(query);
                if (!matchesName && !matchesVibes && !matchesCategory) {
                    return false;
                }
            }

            // Filter by Pince (sociology_factor)
            if (isPinceEnabled && pinceMaxPercent !== null) {
                const sociologyFactor = place.practical_info?.price_info?.sociology_factor ?? 0;
                if (sociologyFactor > pinceMaxPercent) {
                    return false;
                }
            }

            return true;
        });
    }, [places, selectedMoods, selectedCategories, searchQuery, getDominantMood, isPinceEnabled, pinceMaxPercent]);

    const handleCardPress = (place: Place) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        selectPlace(place.id, 'explore');
    };



    return (
        <>
            <ScreenFade style={[styles.container, { backgroundColor: theme.background }]}>
                <View style={{ flex: 1 }}>

                    {/* Header with Moods & Search Toggle */}
                    <DiscoverHeader
                        selectedMoods={selectedMoods}
                        toggleMood={toggleMood}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setFilterVisible={setFilterVisible}
                        isSearchActive={isSearchActive}
                        setIsSearchActive={setIsSearchActive}
                        insetsTop={insets.top}
                    />

                    {/* List Content */}
                    <View style={[styles.scrollContent]}>
                        {isLoading && filteredPlaces.length === 0 ? (
                            <View style={styles.masonryContainer}>
                                <View style={styles.column}>
                                    <Skeleton height={240} borderRadius={24} style={{ marginBottom: 16 }} />
                                    <Skeleton height={180} borderRadius={24} style={{ marginBottom: 16 }} />
                                    <Skeleton height={220} borderRadius={24} style={{ marginBottom: 16 }} />
                                </View>
                                <View style={styles.column}>
                                    <Skeleton height={200} borderRadius={24} style={{ marginBottom: 16 }} />
                                    <Skeleton height={260} borderRadius={24} style={{ marginBottom: 16 }} />
                                    <Skeleton height={180} borderRadius={24} style={{ marginBottom: 16 }} />
                                </View>
                            </View>
                        ) : filteredPlaces.length === 0 ? (
                            <View style={styles.emptyState}>
                                <Text style={styles.emptyText}>Aucun lieu trouvé avec ces filtres.</Text>
                            </View>
                        ) : (
                            <FlashList
                                data={filteredPlaces}
                                numColumns={2}
                                // @ts-ignore - Masonry mode
                                masonry={true}
                                // @ts-ignore - FlashList type issues
                                estimatedItemSize={200}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 120, paddingTop: 0 }}
                                renderItem={({ item, index }: any) => (
                                    <View style={{ flex: 1, paddingHorizontal: 8 }}>
                                        <DiscoverCard
                                            place={item as Place}
                                            onPress={() => handleCardPress(item as Place)}
                                            index={index}
                                        />
                                    </View>
                                )}
                                keyExtractor={(item: any) => item.id}
                            />
                        )}
                    </View>
                </View>

                {/* Modals */}
                <DiscoverSearch
                    visible={isSearchActive} // Reusing the header state for consistency or separate if modal needed
                    onClose={() => setIsSearchActive(false)}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />



                <PlaceDetailSheetExplore />

                {filterVisible && (
                    <FilterSheet
                        visible={true} // Always true when mounted
                        onClose={() => setFilterVisible(false)}
                    />
                )}

            </ScreenFade>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContent: {
        flex: 1,
        paddingHorizontal: 8,
        paddingTop: 12,
    },
    masonryContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    column: {
        flex: 1,
    },
    emptyState: {
        padding: 40, alignItems: 'center', justifyContent: 'center'
    },
    emptyText: {
        color: '#666', fontSize: 16, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    },
});

