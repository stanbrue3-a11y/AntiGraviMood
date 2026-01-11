import React, { useRef, useState, useMemo, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';

// Stores & Logic
// Stores & Logic
import { usePlacesStore } from '../../src/stores';
import { useTheme } from '../../src/design';

// Components
import { PlaceDetailSheetMap } from '../../src/components/place/PlaceDetailSheetMap';
import { FilterSheet } from '../../src/components/feed/FilterSheet';
// import { DiscoverFilters } from '../../src/components/discover/DiscoverFilters'; // REPLACED
// import { MapImages } from '../../src/components/map/MapImages'; // Removed
// import { MapLayers } from '../../src/components/map/MapLayers'; // Removed
import { NativeMapPro } from '../../src/components/map/NativeMapPro';
import { DiscoverHeader } from '../../src/components/discover/DiscoverHeader';
import { DiscoverSearch } from '../../src/components/discover/DiscoverSearch';

// Config
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3RhbnRoZW1hbnMiLCJhIjoiY21qYW9rZmJzMDVrejNkc2J6dW9sbmNubCJ9.rio8auCYmW4qWaHP9YxD5A';
Mapbox.setAccessToken(MAPBOX_TOKEN);

export default function MapScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { theme, isDark } = useTheme();

    // Refs
    const mapRef = useRef<Mapbox.MapView>(null);
    const cameraRef = useRef<Mapbox.Camera>(null);
    const filterSheetRef = useRef<import('@gorhom/bottom-sheet').default>(null); // New Ref
    // const shapeSourceRef = useRef<Mapbox.ShapeSource>(null); // Handled inside NativeMapPro

    // Global State
    const rawPlaces = usePlacesStore(state => state.places || []);
    const selectedPrice = usePlacesStore(state => state.selectedPrice);
    const setSelectedPrice = usePlacesStore(state => state.setSelectedPrice);
    const searchQuery = usePlacesStore(state => state.searchQuery);
    const setSearchQuery = usePlacesStore(state => state.setSearchQuery);
    const selectedCategories = usePlacesStore(state => state.selectedCategories || []);
    const toggleCategory = usePlacesStore(state => state.toggleCategory);
    const timeRange = usePlacesStore(state => state.timeRange);
    const setTimeRange = usePlacesStore(state => state.setTimeRange);
    const selectPlace = usePlacesStore(state => state.selectPlace);
    const likedPlaceIds = usePlacesStore(state => state.likedPlaceIds);

    // Filter - Mood (Synced)
    const selectedMoods = usePlacesStore(state => state.selectedMoods);
    const toggleMood = usePlacesStore(state => state.toggleMood);
    const selectedDistricts = usePlacesStore(state => state.selectedDistricts);

    // Derived Moods for Map (NativeMapPro expects full list if "all", Store uses [] for "all")
    const effectiveMoods = useMemo(() => {
        return selectedMoods.length > 0 ? selectedMoods : ['chill', 'festif', 'culturel'];
    }, [selectedMoods]);


    // Local State
    const [isFilterSheetVisible, setFilterSheetVisible] = useState(false);
    // const [selectedMoods, setSelectedMoods] = useState<string[]>(['chill', 'festif', 'culturel']); // REMOVED local state
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [userLocation, setUserLocation] = useState<any>(null);
    const [mapMode, setMapMode] = useState<'global' | 'likes'>('global');
    const [internalHighlightId, setInternalHighlightId] = useState<string | null>(null);

    // Deep Link / Navigation Param Logic
    const params = useLocalSearchParams();
    const navigatedPlaceId = params.placeId as string;
    const lastNavigatedId = useRef<string | null>(null);

    React.useEffect(() => {
        if (navigatedPlaceId && rawPlaces.length > 0 && lastNavigatedId.current !== navigatedPlaceId) {
            lastNavigatedId.current = navigatedPlaceId;
            const place = rawPlaces.find(p => p.id === navigatedPlaceId);

            if (place) {
                // Give the UI a moment to switch tabs and layout
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        // cinematic zoom focus
                        cameraRef.current?.setCamera({
                            centerCoordinate: [place.location.coordinates.lng, place.location.coordinates.lat],
                            zoomLevel: 15.5,
                            animationDuration: 1400,
                            animationMode: 'flyTo'
                        });
                    });

                    // Trigger highlight POP when the camera is nearly arrived
                    setTimeout(() => {
                        setInternalHighlightId(navigatedPlaceId);
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

                        // Clear highlight after pop
                        setTimeout(() => {
                            setInternalHighlightId(null);
                        }, 1000);
                    }, 1200);

                    // Delay param clearing to prevent re-render during animation
                    setTimeout(() => {
                        router.setParams({ placeId: undefined });
                    }, 2000);
                }, 400);
            }
        }
    }, [navigatedPlaceId, rawPlaces.length]);

    // Constants
    const CATEGORIES = ['bar', 'cafe', 'restaurant', 'club', 'espace-culturel', 'parc', 'museum', 'workshop', 'exhibition', 'other'];

    // Data Calculation (MEMOIZED & STABLE) 🛡️
    const filteredPlaces = useMemo(() => {
        let result = rawPlaces;

        // Query
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q)
            );
        }

        // Categories
        if (selectedCategories?.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // Price
        if (selectedPrice !== null) {
            result = result.filter(p => (p.practical_info.price_range || 2) <= selectedPrice);
        }

        // Districts (Added per user request)
        if (selectedDistricts && selectedDistricts.length > 0) {
            result = result.filter(p => selectedDistricts.includes(p.location.arrondissement));
        }

        // Mood Filtering (Done here instead of in native styles for cleaner data flow, optional)
        // For NativeMapPro, we pass selectedMoods prop which handles the visual filtering
        // so we don't necessarily need to filter the data array itself unless we want to remove them completely from clustering.
        // Let's keep data full and let NativeMapPro handle visual filtering if preferred, 
        // OR filter here. Previous implementation filtered visually in MapLayers.
        // We will pass `places` and `selectedMoods` to NativeMapPro.

        // Map Mode Filtering (Global vs Likes)
        if (mapMode === 'likes') {
            result = result.filter(p => likedPlaceIds?.includes(p.id));
        }

        return result;
    }, [rawPlaces, searchQuery, selectedCategories, selectedPrice, mapMode, likedPlaceIds, selectedDistricts]);


    // --- HANDLERS ---
    const handlePlacePress = useCallback(async (placeId: string, coordinates: [number, number]) => {
        Haptics.selectionAsync();
        selectPlace(placeId);

        // Get current zoom to avoid zooming OUT if we are already close
        const currentZoom = await mapRef.current?.getZoom();
        const targetZoom = Math.max(currentZoom || 0, 14.5);

        // CINEMATIC FLY-TO 🎥
        cameraRef.current?.setCamera({
            centerCoordinate: coordinates,
            zoomLevel: targetZoom,
            animationDuration: 1000,
            animationMode: 'flyTo',
            padding: { paddingBottom: 450, paddingLeft: 0, paddingRight: 0, paddingTop: 0 }
        });
    }, [selectPlace]);

    // Removed local handleMoodToggle in favor of global toggleMood

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <Mapbox.MapView
                ref={mapRef}
                style={styles.map}
                styleURL={Mapbox.StyleURL.Dark}
                scrollEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
                attributionEnabled={false}
                scaleBarEnabled={false}
                logoEnabled={false}
                // @ts-ignore
                decelerationRate={0.2}
                onPress={() => {
                    // Optional: Deselect place on map tap
                }}
            >
                <Mapbox.Camera
                    ref={cameraRef}
                    defaultSettings={{ centerCoordinate: [2.3522, 48.8566], zoomLevel: 12 }}
                    minZoomLevel={10}
                    maxZoomLevel={20}
                    maxBounds={{ ne: [2.55, 49.2], sw: [2.15, 48.6] }}
                />

                <Mapbox.UserLocation
                    visible={true}
                    showsUserHeadingIndicator={true}
                    onUpdate={(loc) => setUserLocation(loc)}
                />

                <Mapbox.FillLayer id="custom-water" sourceID="composite" sourceLayerID="water" style={{ fillColor: '#263c52', fillOpacity: 0.8 }} belowLayerID="waterway-label" />
                <Mapbox.FillLayer id="custom-parks" sourceID="composite" sourceLayerID="landuse" filter={['==', 'class', 'park']} style={{ fillColor: '#343f38', fillOpacity: 0.8 }} belowLayerID="waterway-label" />

                {/* ✨ NATIVE MAP PRO INTEGRATION ✨ */}
                <NativeMapPro
                    places={filteredPlaces}
                    selectedMoods={effectiveMoods}
                    onPlacePress={handlePlacePress}
                    cameraRef={cameraRef}
                    highlightedPlaceId={internalHighlightId}
                />

            </Mapbox.MapView>

            {/* SkiaOverlay Disabled/Removed */}

            {/* Top Controls: DiscoverHeader */}
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
                <DiscoverHeader
                    selectedMoods={selectedMoods}
                    toggleMood={toggleMood as any}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setFilterVisible={() => {
                        console.log('🔥 FILTER BUTTON PRESSED - Opening Sheet');
                        Haptics.selectionAsync();
                        setFilterSheetVisible(true);
                    }}
                    isSearchActive={isSearchActive}
                    setIsSearchActive={setIsSearchActive}
                    insetsTop={insets.top}
                    transparent={true}
                    showLeftButton={true}
                />
            </View>

            {/* Map Mode Toggle (Vertical Glassmorphic) */}
            <View style={{ position: 'absolute', top: insets.top + 60, left: 16, zIndex: 90 }}>
                <BlurView intensity={90} tint="light" style={{
                    width: 48,
                    borderRadius: 24,
                    alignItems: 'center',
                    paddingVertical: 6,
                    gap: 8,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(255,255,255,0.4)'
                }}>
                    <TouchableOpacity
                        onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); setMapMode('global'); }}
                        style={{
                            width: 38, height: 38, borderRadius: 19,
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: mapMode === 'global' ? '#1c1c1e' : 'transparent',
                        }}
                    >
                        <Ionicons name={mapMode === 'global' ? "earth" : "earth-outline"} size={20} color={mapMode === 'global' ? "#fff" : "#000"} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); setMapMode('likes'); }}
                        style={{
                            width: 38, height: 38, borderRadius: 19,
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: mapMode === 'likes' ? '#1c1c1e' : 'transparent',
                        }}
                    >
                        <Ionicons name={mapMode === 'likes' ? "heart" : "heart-outline"} size={20} color={mapMode === 'likes' ? "#fff" : "#000"} />
                    </TouchableOpacity>
                </BlurView>
            </View>

            <DiscoverSearch
                visible={isSearchActive}
                onClose={() => setIsSearchActive(false)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Geolocation FAB */}
            <TouchableOpacity
                style={{
                    position: 'absolute', bottom: 120, left: 16,
                    width: 48, height: 48, borderRadius: 24,
                    backgroundColor: '#4e55f0',
                    alignItems: 'center', justifyContent: 'center',
                    shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    zIndex: 90 // Below Sheet (9999) but above map
                }}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    if (userLocation) {
                        cameraRef.current?.setCamera({
                            centerCoordinate: [userLocation.coords.longitude, userLocation.coords.latitude],
                            zoomLevel: 15,
                            animationDuration: 1000,
                            animationMode: 'flyTo'
                        });
                    } else {
                        // Fallback or request permission prompt technically handled by Mapbox defaults
                    }
                }}
            >
                <Ionicons name="locate" size={24} color="white" />
            </TouchableOpacity>

            {/* Create Post FAB */}
            <TouchableOpacity
                style={{
                    position: 'absolute', bottom: 120, right: 16,
                    width: 48, height: 48, borderRadius: 24,
                    backgroundColor: '#4e55f0',
                    alignItems: 'center', justifyContent: 'center',
                    shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    zIndex: 90
                }}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    router.push('/post/create');
                }}
            >
                <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>

            {/* --- OVERLAYS --- */}
            <View style={[StyleSheet.absoluteFill, { zIndex: 1000 }]} pointerEvents="box-none">
                <PlaceDetailSheetMap />
            </View>

            {/* Filter Sheet - Isolated Layer */}
            {isFilterSheetVisible && (
                <View style={[StyleSheet.absoluteFill, { zIndex: 1001 }]} pointerEvents="box-none">
                    <FilterSheet
                        visible={true} // Always true when mounted
                        onClose={() => setFilterSheetVisible(false)}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    map: { flex: 1 },
});
