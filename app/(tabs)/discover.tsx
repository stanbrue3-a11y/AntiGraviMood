import { View, Text, StyleSheet, Platform, UIManager } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../src/design';
import { Place } from '../../src/types/model';
import { usePlacesStore } from '../../src/stores/placesStore';
import { useSearchStore, selectFilteredResults } from '../../src/stores/searchStore';
import { useUIStore } from '../../src/stores/uiStore';
import { useShallow } from 'zustand/react/shallow';
import { DiscoverCard } from '../../src/components/feed/DiscoverCard';
import { PlaceDetailSheet } from '../../src/components/place/PlaceDetailSheet';
import { Skeleton } from '../../src/components/common/Skeleton';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { ScreenFade } from '../../src/components/navigation/ScreenFade';
import * as Haptics from 'expo-haptics';

// Sub-components
import { DiscoverHeader } from '../../src/components/discover/DiscoverHeader';
// import { DiscoverFilters } from '../../src/components/discover/DiscoverFilters';
import { FilterActionSheet } from '../../src/components/common/FilterActionSheet';
import { FlashList } from '@shopify/flash-list';


export default function DiscoverScreen() {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const router = useRouter();

    // --- SV-REFACTOR: DOMAIN STORES ---

    // 1. Places Store (Raw Data)
    const rawPlaces = usePlacesStore(state => state.places);
    const isLoading = usePlacesStore(state => state.isLoading);

    // 2. Search Store (Filters & Logic)
    const {
        searchQuery, setSearchQuery,
        selectedMoods, toggleMood,
        selectedCategories, toggleCategory,
        timeRange, setTimeRange
    } = useSearchStore(useShallow(state => ({
        searchQuery: state.searchQuery,
        setSearchQuery: state.setSearchQuery,
        selectedMoods: state.selectedMoods,
        toggleMood: state.toggleMood,
        selectedCategories: state.selectedCategories,
        toggleCategory: state.toggleCategory,
        timeRange: state.timeRange,
        setTimeRange: state.setTimeRange
    })));

    // Derived: Computed Filtered Results
    const filteredPlaces = useMemo(() => selectFilteredResults(rawPlaces), [
        rawPlaces,
        searchQuery,
        selectedMoods,
        selectedCategories,
        timeRange
    ]);

    // 3. UI Store (Interactions)
    const {
        selectPlace,
        selectedPlaceId
    } = useUIStore(useShallow(state => ({
        selectPlace: state.selectPlace,
        selectedPlaceId: state.selectedPlaceId
    })));

    // UI State
    const [filterVisible, setFilterVisible] = useState(false);

    // Initialize layout animations
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);


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
                        setFilterVisible={setFilterVisible}
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




                <PlaceDetailSheet />

                {filterVisible && (
                    <FilterActionSheet
                        visible={true}
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

