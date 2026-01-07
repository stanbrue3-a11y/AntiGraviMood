import { View, Text, StyleSheet, Platform, Modal, Pressable, TextInput, Switch, ScrollView, LayoutAnimation, UIManager } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useTheme, moodColors } from '../../src/design';
import { Place } from '../../src/types/model';
import { usePlacesStore, PLACE_CATEGORIES } from '../../src/stores/usePlacesStore';
import { DiscoverCard } from '../../src/components/feed/DiscoverCard';
import { PlaceDetailSheetExplore } from '../../src/components/place/PlaceDetailSheetExplore';
import { Skeleton } from '../../src/components/common/Skeleton';
import { useState, useRef, useMemo, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { ScreenFade } from '../../src/components/navigation/ScreenFade';
import { InteractivePriceGauge } from '../../src/components/common/InteractivePriceGauge';
import { HorizontalTimeSlider } from '../../src/components/common/HorizontalTimeSlider';
import { VerticalTimeSlider } from '../../src/components/common/VerticalTimeSlider';
import { LinearGradient } from 'expo-linear-gradient';


// Reusing Map Constants for consistency
const CATEGORY_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
    'bar': 'wine',
    'café': 'cafe',
    'restaurant': 'restaurant',
    'club': 'musical-notes',
    'espace-culturel': 'color-palette',
    'parc': 'leaf',
    'museum': 'library',
    'workshop': 'cut',
    'exhibition': 'images',
};

const CATEGORY_COLORS: Record<string, string> = {
    'bar': '#333',
    'bar dansant': '#333',
    'concert': '#333',
    'club': '#333',
    'café': '#333',
    'restaurant': '#333',
    'museum': '#333',
    'exhibition': '#333',
    'workshop': '#333',
    'espace-culturel': '#333',
    'parc': '#333',
};

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: any) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

export default function DiscoverScreen() {
    const { theme, isDark } = useTheme();
    const insets = useSafeAreaInsets();
    // Optimized selectors to prevent unnecessary re-renders
    const places = usePlacesStore(state => state.places);
    const selectedPlaceId = usePlacesStore(state => state.selectedPlaceId);
    const selectedMoods = usePlacesStore(state => state.selectedMoods);
    const toggleMood = usePlacesStore(state => state.toggleMood);
    const selectedCategories = usePlacesStore(state => state.selectedCategories);
    const toggleCategory = usePlacesStore(state => state.toggleCategory);
    const getDominantMood = usePlacesStore(state => state.getDominantMood);
    const searchQuery = usePlacesStore(state => state.searchQuery);
    const setSearchQuery = usePlacesStore(state => state.setSearchQuery);

    const simulateLoading = usePlacesStore(state => state.simulateLoading);

    // ...

    // ...

    // Practical Filters
    const selectedPrice = usePlacesStore(state => state.selectedPrice);
    const setSelectedPrice = usePlacesStore(state => state.setSelectedPrice);
    const timeRange = usePlacesStore(state => state.timeRange);
    const setTimeRange = usePlacesStore(state => state.setTimeRange);


    const selectPlace = usePlacesStore(state => state.selectPlace);
    const router = useRouter();

    // Modals
    const [filterVisible, setFilterVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false); // Old modal state
    const [isSearchActive, setIsSearchActive] = useState(false); // New header state

    // Progressive Loading State
    const [visibleCount, setVisibleCount] = useState(8);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // Local state for immediate UI feedback
    const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

    // Debounce store update
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchQuery(localSearchQuery);
        }, 300);
        return () => clearTimeout(timer);
    }, [localSearchQuery, setSearchQuery]);

    // Check if loading (simulated or real from store)
    const isLoading = usePlacesStore(state => state.isLoading);

    // Simulate loading on mount
    useEffect(() => {
        simulateLoading();
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);

    // Memoize filtering utilizing shared logic
    const filteredPlaces = useMemo(() => {
        return places.filter((place) => {
            // Filtre par mood
            if (selectedMoods.length > 0) {
                const dominantMood = getDominantMood(place);
                if (!selectedMoods.includes(dominantMood)) {
                    return false;
                }
            }

            // Filtre par catégorie
            if (selectedCategories.length > 0) {
                if (!selectedCategories.includes(place.category)) {
                    return false;
                }
            }

            // Filtre par recherche
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesName = place.name.toLowerCase().includes(query);
                const matchesVibes = place.vibes.some((v) => v.toLowerCase().includes(query));
                const matchesCategory = place.category.toLowerCase().includes(query);
                if (!matchesName && !matchesVibes && !matchesCategory) {
                    return false;
                }
            }

            return true;
        });
    }, [places, selectedMoods, selectedCategories, searchQuery, getDominantMood]);

    // Define handleCardPress BEFORE it is used in renderItem
    const handleCardPress = (place: Place) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        selectPlace(place.id, 'explore');
    };

    // Use MasonryFlashList for performance
    const renderItem = ({ item, index }: { item: Place, index: number }) => (
        <DiscoverCard
            place={item}
            onPress={() => handleCardPress(item)}
            index={index}
        />
    );

    // Load more handler
    const handleEndReached = () => {
        if (!isLoadingMore && visibleCount < filteredPlaces.length) {
            setIsLoadingMore(true);
            // Removed LayoutAnimation to prevent UI thread lock
            // Direct update with smaller batch for smoothness
            setVisibleCount(prev => Math.min(prev + 4, filteredPlaces.length));
            setIsLoadingMore(false);
        }
    };

    return (
        <>
            <ScreenFade
                style={[styles.container, { backgroundColor: theme.background }]}
            >
                {/* Pointer events logic usually handled by the fade wrapper or passed through. 
                    However, ScreenFade renders an Animated.View. 
                    We need to ensure pointerEvents logic is respected. 
                    The 'pointerEvents' prop on View is not directly transparently passed by ScreenFade unless we add it.
                    But ScreenFade wraps children.
                    We can add a View inside ScreenFade for the pointerEvents logic if ScreenFade doesn't accept it.
                */}
                <View style={{ flex: 1 }} pointerEvents={selectedPlaceId ? 'none' : 'auto'}>

                    {/* Header Control Bar */}
                    <View style={[styles.headerContainer, { paddingTop: insets.top, backgroundColor: theme.background }]}>
                        {isSearchActive ? (
                            <View style={[styles.header, { paddingHorizontal: 20 }]}>
                                <View style={[styles.searchBarContainer, { backgroundColor: isDark ? theme.surfaceElevated : '#f3f4f6' }]}>
                                    <Ionicons name="search" size={20} color={theme.text.secondary} style={{ marginRight: 8 }} />
                                    <TextInput
                                        placeholder="Rechercher..."
                                        placeholderTextColor={theme.text.secondary}
                                        style={[styles.searchInput, { color: theme.text.primary }]}
                                        autoFocus
                                        value={searchQuery}
                                        onChangeText={setSearchQuery}
                                    />
                                    <Pressable
                                        onPress={() => {
                                            setSearchQuery('');
                                            setIsSearchActive(false);
                                        }}
                                        style={{ padding: 4 }}
                                    >
                                        <Ionicons name="close-circle" size={20} color={theme.text.secondary} />
                                    </Pressable>
                                </View>
                            </View>
                        ) : (
                            <View style={styles.header}>
                                <Pressable
                                    onPress={() => setFilterVisible(true)}
                                    style={[styles.roundBtn, { backgroundColor: isDark ? theme.surfaceElevated : '#f3f4f6' }]}
                                >
                                    <Ionicons name="options" size={20} color={theme.text.primary} />
                                </Pressable>
                                <View style={styles.moods}>
                                    {(['chill', 'festif', 'culturel'] as const).map((m) => {
                                        const on = selectedMoods.includes(m);
                                        return (
                                            <Pressable key={m} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); toggleMood(m); }}
                                                style={[styles.pill, { backgroundColor: moodColors[m]?.primary ?? '#999', opacity: on || selectedMoods.length === 0 ? 1 : 0.5 }]}>
                                                <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pillText}>{m.toUpperCase()}</Text>
                                            </Pressable>
                                        );
                                    })}
                                </View>
                                <Pressable
                                    onPress={() => {
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        setIsSearchActive(true);
                                    }}
                                    style={[styles.roundBtn, { backgroundColor: isDark ? theme.surfaceElevated : '#f3f4f6' }]}
                                >
                                    <Ionicons name="search" size={20} color={theme.text.primary} />
                                </Pressable>
                            </View>
                        )}
                    </View>

                    {/* List Container */}
                    <View style={[styles.scrollContent, { paddingHorizontal: 8 }]}>
                        {isLoading && filteredPlaces.length === 0 ? (
                            <View style={styles.masonryContainer}>
                                {/* Keep skeleton simple for now, can be optimized later */}
                                <View style={styles.column}>
                                    <Skeleton height={240} borderRadius={24} style={{ marginBottom: 12 }} />
                                    <Skeleton height={180} borderRadius={24} style={{ marginBottom: 12 }} />
                                    <Skeleton height={220} borderRadius={24} style={{ marginBottom: 12 }} />
                                </View>
                                <View style={styles.column}>
                                    <Skeleton height={200} borderRadius={24} style={{ marginBottom: 12 }} />
                                    <Skeleton height={260} borderRadius={24} style={{ marginBottom: 12 }} />
                                    <Skeleton height={180} borderRadius={24} style={{ marginBottom: 12 }} />
                                </View>
                            </View>
                        ) : filteredPlaces.length === 0 ? (
                            <View style={styles.emptyState}>
                                <Text style={styles.emptyText}>Aucun lieu trouvé avec ces filtres.</Text>
                            </View>
                        ) : (
                            <ScrollView
                                contentContainerStyle={{ paddingBottom: 120, paddingTop: 12 }}
                                showsVerticalScrollIndicator={false}
                                onScroll={({ nativeEvent }) => {
                                    if (isCloseToBottom(nativeEvent)) {
                                        handleEndReached();
                                    }
                                }}
                                scrollEventThrottle={400}
                            >
                                <View style={styles.masonryContainer}>
                                    <View style={styles.column}>
                                        {/* Slice first, then filter for columns to avoid processing hidden items */}
                                        {filteredPlaces.slice(0, visibleCount).filter((_, i) => i % 2 === 0).map((item, index) => (
                                            <DiscoverCard
                                                key={item.id}
                                                place={item}
                                                onPress={() => handleCardPress(item)}
                                                index={index * 2}
                                            />
                                        ))}
                                    </View>
                                    <View style={styles.column}>
                                        {filteredPlaces.slice(0, visibleCount).filter((_, i) => i % 2 !== 0).map((item, index) => (
                                            <DiscoverCard
                                                key={item.id}
                                                place={item}
                                                onPress={() => handleCardPress(item)}
                                                index={index * 2 + 1}
                                            />
                                        ))}
                                    </View>
                                </View>
                            </ScrollView>
                        )}
                    </View>
                </View>

                {/* Fiche Lieu (Modal) - Gérée globalement dans _layout.tsx via usePlacesStore */}

                {/* Search Modal */}
                <Modal visible={searchVisible} transparent animationType="fade">
                    <BlurView intensity={20} tint="dark" style={styles.modalWrap}>
                        <Pressable style={styles.overlay} onPress={() => setSearchVisible(false)} />

                        <View style={styles.cardContainer}>
                            <Text style={styles.cardTitle}>Rechercher</Text>

                            <View style={styles.searchInputContainer}>
                                <Ionicons name="search" size={20} color="#9CA3AF" />
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Nom, vibe, quartier..."
                                    placeholderTextColor="#9CA3AF"
                                    value={localSearchQuery}
                                    onChangeText={setLocalSearchQuery}
                                    autoFocus
                                    returnKeyType="search"
                                    onSubmitEditing={() => setSearchVisible(false)}
                                />
                                {localSearchQuery.length > 0 && (
                                    <Pressable onPress={() => setLocalSearchQuery('')}>
                                        <Ionicons name="close-circle" size={20} color="#9CA3AF" />
                                    </Pressable>
                                )}
                            </View>

                            <Pressable
                                style={styles.searchButton}
                                onPress={() => setSearchVisible(false)}
                            >
                                <Text style={styles.searchButtonText}>Rechercher</Text>
                            </Pressable>
                        </View>
                    </BlurView>
                </Modal>

                {/* Category Filter Modal */}
                <Modal visible={filterVisible} transparent animationType="fade">
                    <BlurView intensity={20} tint="dark" style={styles.modalWrap}>
                        <Pressable style={styles.overlay} onPress={() => setFilterVisible(false)} />

                        <View style={styles.cardContainer}>
                            <Text style={styles.cardTitle}>Filtres</Text>

                            {/* Budget Section - SLIDABLE */}
                            <Text style={styles.sectionTitle}>Budget Max</Text>
                            <InteractivePriceGauge
                                selectedPrice={selectedPrice}
                                onPriceChange={setSelectedPrice}
                            />

                            {/* Availability Section - HORIZONTAL */}
                            <Text style={styles.sectionTitle}>Horaire de sortie</Text>
                            <HorizontalTimeSlider
                                timeRange={timeRange}
                                onTimeRangeChange={setTimeRange}
                            />


                            <Text style={styles.sectionTitle}>Types de lieux</Text>

                            <View style={styles.cardGrid}>
                                {PLACE_CATEGORIES.map(({ key, label }) => {
                                    const on = selectedCategories.includes(key);
                                    const iconName = CATEGORY_ICONS[key] || 'ellipse-outline';

                                    // COLORS constants (replicated locally for self-contained logic)
                                    const COLORS = { chill: '#8ccaf7', festif: '#ffab60', culturel: '#c499ff' };

                                    // Helper for gradient colors
                                    const getCategoryColors = (k: string): string[] => {
                                        switch (k) {
                                            case 'bar':
                                            case 'restaurant': return [COLORS.chill, COLORS.festif];
                                            case 'club': return [COLORS.festif, COLORS.festif];
                                            case 'museum':
                                            case 'exhibition':
                                            case 'workshop':
                                            case 'espace-culturel': return [COLORS.culturel, COLORS.culturel];
                                            case 'parc':
                                            case 'café': return [COLORS.chill, COLORS.chill];
                                            default: return ['#374151', '#374151'];
                                        }
                                    };

                                    const gradientColors = getCategoryColors(key);
                                    // Determine if we need a sharp "half-half" split
                                    const isMixed = key === 'bar' || key === 'restaurant';

                                    const finalColors = isMixed
                                        ? [gradientColors[0], gradientColors[0], gradientColors[1], gradientColors[1]]
                                        : gradientColors;

                                    const finalLocations = isMixed
                                        ? [0, 0.5, 0.5, 1]
                                        : undefined;

                                    return (
                                        <Pressable key={key} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); toggleCategory(key); }}
                                            style={[
                                                styles.cardItem,
                                                on ?
                                                    { borderColor: 'transparent' } :
                                                    { backgroundColor: '#fff', borderColor: '#E5E7EB', borderWidth: 1 }
                                            ]}>

                                            {on && (
                                                <LinearGradient
                                                    colors={finalColors as any}
                                                    locations={finalLocations as any}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 1 }}
                                                    style={StyleSheet.absoluteFill}
                                                />
                                            )}

                                            <Ionicons name={iconName} size={20} color={on ? "#fff" : "#374151"} style={{ marginRight: 8, zIndex: 1 }} />
                                            <Text style={[styles.cardItemLabel, { color: on ? "#fff" : "#374151", zIndex: 1 }]}>{label}</Text>
                                        </Pressable>
                                    );
                                })}
                            </View>
                        </View>
                    </BlurView>
                </Modal>
            </ScreenFade >
            <PlaceDetailSheetExplore />

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Header Styles
    headerContainer: {
        backgroundColor: '#fff',
        zIndex: 10,
        paddingBottom: 12,
        // Small shadow for separation
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 4,
        gap: 10,
    },
    roundBtn: {
        width: 44, height: 44, borderRadius: 22,
        backgroundColor: '#f3f4f6', // Light gray background
        alignItems: 'center', justifyContent: 'center',
    },
    moods: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 8
    },
    // New Header Search
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        height: 44,
        borderRadius: 22,
        // Background color handled in render
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
    },
    pill: {
        flex: 1, height: 38, borderRadius: 19,
        alignItems: 'center', justifyContent: 'center',
        shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2,
        paddingHorizontal: 4
    },
    pillText: {
        color: '#fff', fontSize: 11, fontWeight: '700', letterSpacing: 0.2,
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    },

    scrollContent: {
        flex: 1,
        paddingHorizontal: 8, // 8 list pad + 8 item margin = 16px visual edge
        paddingTop: 12,
    },
    masonryContainer: {
        flexDirection: 'row',
        gap: 16, // Strict 16px gap
    },
    column: {
        flex: 1, // Equal width columns
    },
    emptyState: {
        padding: 40, alignItems: 'center', justifyContent: 'center'
    },
    emptyText: {
        color: '#666', fontSize: 16, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    },

    // Modal Styles
    modalWrap: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    overlay: { ...StyleSheet.absoluteFillObject },
    cardContainer: {
        width: '90%', maxWidth: 360,
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20, elevation: 12
    },
    cardTitle: {
        fontSize: 22, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '800', color: '#1F2937',
        marginBottom: 24, textAlign: 'center'
    },
    cardGrid: {
        flexDirection: 'row', flexWrap: 'wrap',
        gap: 12, justifyContent: 'space-between',
        width: '100%'
    },
    cardItem: {
        width: '47%', height: 48,
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 24,
        overflow: 'hidden', // Essential for LinearGradient
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3
    },
    cardItemLabel: { fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '700', fontSize: 14 },

    // Search Modal Styles
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        padding: 12,
        gap: 10,
        width: '100%',
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        color: '#1F2937',
    },
    searchButton: {
        backgroundColor: '#1F2937',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 24,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    },
    sectionTitle: {
        fontSize: 16, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '700', color: '#374151',
        alignSelf: 'flex-start', marginBottom: 16, marginTop: 4
    },
    // Gauge Styles
    gaugeContainer: {
        flexDirection: 'row', alignItems: 'center', gap: 16, width: '100%', marginBottom: 24,
        backgroundColor: '#F9FAFB', padding: 16, borderRadius: 20
    },
    gaugeIcon: {
        width: 40, height: 40, borderRadius: 20, backgroundColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center'
    },
    gaugeCurrency: {
        fontSize: 18, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '700', color: '#374151'
    },
    gaugeBars: {
        flexDirection: 'row', alignItems: 'flex-end', gap: 6, flex: 1
    },
    gaugeBar: {
        flex: 1, borderRadius: 6, minHeight: 10
    },
    gaugeLabel: {
        fontSize: 14, fontFamily: 'Inter_600SemiBold', color: '#4B5563', width: 70, textAlign: 'right'
    },
    switchRow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        width: '100%', marginBottom: 24, paddingVertical: 4
    },
    switchLabel: {
        fontSize: 16, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), color: '#374151'
    }
});
