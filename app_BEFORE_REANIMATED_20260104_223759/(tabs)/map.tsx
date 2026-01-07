import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { Stack, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import Svg, { Path, Circle, G } from 'react-native-svg';

// Stores & Logic
import { usePlacesStore } from '../../src/stores';
import { useStableCluster } from '../../src/hooks/useStableCluster';
import { useTheme } from '../../src/design';

// Components
import { MapPin } from '../../src/components/map/MapPin';
import { CustomClusterMarker } from '../../src/components/map/CustomClusterMarker';
import { PlaceDetailSheetMap } from '../../src/components/place/PlaceDetailSheetMap';
import { FilterActionSheet } from '../../src/components/common/FilterActionSheet';
import { ScreenFade } from '../../src/components/navigation/ScreenFade';

// Config
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3RhbnRoZW1hbnMiLCJhIjoiY21qYW9rZmJzMDVrejNkc2J6dW9sbmNubCJ9.rio8auCYmW4qWaHP9YxD5A';
Mapbox.setAccessToken(MAPBOX_TOKEN);

// --- SVG HELPERS ---
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
};

const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
        "M", x, y,
        "L", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        "Z"
    ].join(" ");
};

export default function MapScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { theme, isDark } = useTheme();

    console.log("📍📍 MAP SCREEN MOUNTED V4 (Animation Fix Final) 📍📍");

    // Refs
    const mapRef = useRef<Mapbox.MapView>(null);
    const cameraRef = useRef<Mapbox.Camera>(null);

    // Global State
    // Global State Selectors (OPTIMIZED & ATOMIC)
    const rawPlaces = usePlacesStore(state => state.places);

    // Atomic Selectors to prevent object reference changes triggering re-renders
    const selectedPrice = usePlacesStore(state => state.selectedPrice);
    const timeRange = usePlacesStore(state => state.timeRange);
    const searchQuery = usePlacesStore(state => state.searchQuery);
    const selectedCategories = usePlacesStore(state => state.selectedCategories);

    const { selectPlace, selectedPlaceId } = usePlacesStore();

    // Local State
    const [isFilterSheetVisible, setFilterSheetVisible] = useState(false);
    // Multi-select state: Default all selected
    const [selectedMoods, setSelectedMoods] = useState<string[]>(['chill', 'festif', 'culturel']);

    // Data Calculation (MEMOIZED & STABLE) 🛡️
    const places = useMemo(() => {
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
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // Price
        if (selectedPrice !== null) {
            result = result.filter(p => (p.practical_info.price_range || 2) <= selectedPrice);
        }

        // Time (skipped for now or add if needed, dependent on logic)
        // if (timeRange) ...

        // Map Specific Mood Logic (Local State)
        if (selectedMoods.length > 0) {
            result = result.filter(p => {
                const scores = p.mood_scores;
                if (!scores) return selectedMoods.includes('chill'); // Default
                const dominant = Object.entries(scores).sort((a, b) => b[1].overall - a[1].overall)[0]?.[0] || 'chill';
                return selectedMoods.includes(dominant);
            });
        } else {
            return [];
        }

        return result;
    }, [rawPlaces, searchQuery, selectedCategories, selectedPrice, selectedMoods]); // Atomic stable dependencies

    // Clustering Hook (Imperative)
    const { clusters, refreshClusters, getExpansionZoom } = useStableCluster(places);

    // --- HANDLERS ---

    // 1. TOUCH UP TRIGGER (Optimized for Responsiveness)
    const onTouchEnd = useCallback(async () => {
        if (!mapRef.current) return;
        try {
            const zoom = await mapRef.current.getZoom();
            const boundsArray = await mapRef.current.getVisibleBounds();
            if (!boundsArray) return;
            const [ne, sw] = boundsArray;
            const bounds = {
                northEast: { latitude: ne[1], longitude: ne[0] },
                southWest: { latitude: sw[1], longitude: sw[0] }
            };
            refreshClusters(bounds, zoom);
        } catch (e) { }
    }, [refreshClusters]);

    // 2. STANDARD BACKUP
    const onMapIdle = useCallback(async () => {
        onTouchEnd();
    }, [onTouchEnd]);

    const handleClusterPress = async (clusterId: number, coordinates: [number, number]) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        const expansionZoom = getExpansionZoom(clusterId);
        cameraRef.current?.setCamera({
            centerCoordinate: coordinates,
            zoomLevel: expansionZoom,
            animationDuration: 500,
        });
    };

    const handlePlacePress = useCallback((placeId: string, coordinates: [number, number]) => {
        Haptics.selectionAsync();
        selectPlace(placeId);
        cameraRef.current?.setCamera({
            centerCoordinate: coordinates,
            animationDuration: 400,
        });
    }, [selectPlace]);

    // --- NATIVE IMAGE RASTERIZATION 📸 ---
    // --- NATIVE IMAGE RASTERIZATION (THE ATLAS STRATEGY) 📸 ---
    // We use STRICT ASCII keys for Mapbox Constants to avoid native charset issues
    const CATEGORIES = ['bar', 'cafe', 'restaurant', 'club', 'espace-culturel', 'parc', 'museum', 'workshop', 'exhibition', 'other'];
    const MOODS = ['chill', 'festif', 'culturel'];

    // 2. CLUSTER TEMPLATES (The Pie Charts)
    const CLUSTER_TYPES = [
        // A. PURE (100%)
        { id: 'chill-pure', colors: ['#8ccaf7', '#8ccaf7'] },
        { id: 'festif-pure', colors: ['#ffab60', '#ffab60'] },
        { id: 'culturel-pure', colors: ['#c499ff', '#c499ff'] },

        // B. DOMINANT (66% / 33%)
        { id: 'chill-festif', colors: ['#8ccaf7', '#ffab60'] },
        { id: 'chill-culturel', colors: ['#8ccaf7', '#c499ff'] },

        { id: 'festif-chill', colors: ['#ffab60', '#8ccaf7'] },
        { id: 'festif-culturel', colors: ['#ffab60', '#c499ff'] },

        { id: 'culturel-chill', colors: ['#c499ff', '#8ccaf7'] },
        { id: 'culturel-festif', colors: ['#c499ff', '#ffab60'] },

        // C. EQUAL SPLIT (50% / 50%) - Avoids "Fake Tricolor"
        { id: 'chill-festif-equal', colors: ['#8ccaf7', '#ffab60'] },
        { id: 'chill-culturel-equal', colors: ['#8ccaf7', '#c499ff'] },
        { id: 'festif-culturel-equal', colors: ['#ffab60', '#c499ff'] },

        // D. BALANCED (True Tricolor Mix)
        { id: 'balanced', colors: ['#8ccaf7', '#ffab60', '#c499ff'] },
    ];
// Minimal map for normalization checking
    const CAT_ICONS: Record<string, boolean> = {
        'bar': true, 'café': true, 'cafe': true, 'restaurant': true, 'club': true,
        'espace-culturel': true, 'parc': true, 'museum': true,
        'workshop': true, 'exhibition': true
    };

    // Helper to snap color to mood (Robust)
    const getMoodFromColor = (color: string | undefined): string | null => {
        if (!color) return null;
        const c = color.toLowerCase().trim();
        // Check for specific hex codes or simple color overlap
        if (c.includes('8ccaf7')) return 'chill';
        if (c.includes('ffab60')) return 'festif';
        if (c.includes('c499ff')) return 'culturel';
        return null;
    };

    // Helper to normalize category to ASCII
    // This is the CRITICAL fix for the white squares
    const normalizeCategory = (cat: string): string => {
        if (!cat) return 'other';
        let lower = cat.toLowerCase();

        // Manual ASCII mapping
        if (lower === 'café' || lower === 'coffee') return 'cafe';
        if (lower === 'musée') return 'museum';

        // Remove accents if any remain
        lower = lower.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (CATEGORIES.includes(lower)) return lower;
        return 'other';
    };

    // Memoize the template keys
    // These keys MUST generate 'cafe-chill', NOT 'café-chill'
    const templates = useMemo(() => {
        const temps: { id: string, category: string, mood: string }[] = [];
        MOODS.forEach(mood => {
            CATEGORIES.forEach(cat => {
                temps.push({ id: `${cat}-${mood}`, category: cat, mood });
            });
        });
        return temps;
    }, []);

    // --- PURE GEOJSON SOURCE (NO JS CLUSTERING) 🚀 ---

    const placesGeoJSON = useMemo(() => {
        const features = places.map(p => {
            // 1. Mood Logic (Score-based > Color-based > Category-based)
            let mood = 'festif'; // default fallback
            let maxScore = 0;

            // A. Try Scores first (Most accurate)
            if (p.mood_scores) {
                const chill = p.mood_scores.chill?.overall || 0;
                const festif = p.mood_scores.festif?.overall || 0;
                const culturel = p.mood_scores.culturel?.overall || 0;

                if (chill > maxScore) { maxScore = chill; mood = 'chill'; }
                if (festif > maxScore) { maxScore = festif; mood = 'festif'; }
                if (culturel > maxScore) { maxScore = culturel; mood = 'culturel'; }
            }

            // B. Fallback to Color (if scores were weak/missing)
            if (maxScore === 0 && p.ui_theme?.main_color) {
                const snapped = getMoodFromColor(p.ui_theme.main_color);
                if (snapped) mood = snapped;
            }

            // C. Fallback to Category (Last resort if color failed too)
            if (maxScore === 0 && (!p.ui_theme?.main_color || !getMoodFromColor(p.ui_theme.main_color))) {
                const c = normalizeCategory(p.category);
                if (['museum', 'exhibition', 'espace-culturel', 'workshop', 'theatre', 'art-gallery'].includes(c)) mood = 'culturel';
                else if (['cafe', 'parc', 'restaurant', 'coffee-shop', 'hotel'].includes(c)) mood = 'chill';
                else if (['bar', 'club', 'pub', 'night-club'].includes(c)) mood = 'festif';
            }

            // 2. Category Logic - Must match templates
            let cat = normalizeCategory(p.category);
            if (!CATEGORIES.includes(cat) && cat !== 'other') cat = 'other';

            return {
                type: 'Feature',
                id: p.id,
                properties: {
                    id: p.id,
                    mood: mood,
                    // The image name must match the Mapbox.Image ID exactly
                    icon_image: `${cat}-${mood}`,
                    // For Cluster Aggregation
                    mood_val_chill: mood === 'chill' ? 1 : 0,
                    mood_val_festif: mood === 'festif' ? 1 : 0,
                    mood_val_culturel: mood === 'culturel' ? 1 : 0
                },
                geometry: {
                    type: 'Point',
                    coordinates: [p.location.coordinates.lng, p.location.coordinates.lat]
                }
            };
        });

        return {
            type: 'FeatureCollection',
            features: features
        };
    }, [places, selectedMoods]);

    // --- HANDLERS ---

    // Simple interactions (Native Layer)
    const onShapeSourcePress = useCallback(async (e: any) => {
        if (!e.features || e.features.length === 0) return;
        const feature = e.features[0];

        if (feature.properties.cluster) {
            // Zoom to cluster (Fluid Physics)
            const center = feature.geometry.coordinates;
            const currentZoom = await mapRef.current?.getZoom() || 12;

            cameraRef.current?.setCamera({
                centerCoordinate: center,
                zoomLevel: currentZoom + 2.5, // Slightly less aggressive
                animationDuration: 600, // Slower for "Spring" feel
                animationMode: 'flyTo' // Organic
            });
        } else {
            // It's a place
            handlePlacePress(feature.properties.id, feature.geometry.coordinates);
        }
    }, [handlePlacePress]);

    const handleMoodToggle = (mood: string) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setSelectedMoods(prev => {
            if (prev.includes(mood)) {
                return prev.filter(m => m !== mood);
            } else {
                return [...prev, mood];
            }
        });
    };

    const moods = [
        { id: 'chill', label: 'CHILL', color: '#8ccaf7' },
        { id: 'festif', label: 'FESTIF', color: '#ffab60' },
        { id: 'culturel', label: 'CULTUREL', color: '#c499ff' }
    ];

    // --- THE BRAIN: EXPRESSION LOGIC V3 (HIGH FIDELITY) 🧠 ---
    const getClusterImage = [
        'case',
        // 1. PURE (>85%)
        ['>', ['/', ['get', 'chill_count'], ['get', 'point_count']], 0.85], 'cluster-chill-pure',
        ['>', ['/', ['get', 'festif_count'], ['get', 'point_count']], 0.85], 'cluster-festif-pure',
        ['>', ['/', ['get', 'culturel_count'], ['get', 'point_count']], 0.85], 'cluster-culturel-pure',

        // 2. DOMINANT (>50% Major)
        ['>', ['/', ['get', 'chill_count'], ['get', 'point_count']], 0.5],
        ['case',
            ['>', ['get', 'festif_count'], ['get', 'culturel_count']], 'cluster-chill-festif',
            'cluster-chill-culturel'
        ],

        ['>', ['/', ['get', 'festif_count'], ['get', 'point_count']], 0.5],
        ['case',
            ['>', ['get', 'chill_count'], ['get', 'culturel_count']], 'cluster-festif-chill',
            'cluster-festif-culturel'
        ],

        ['>', ['/', ['get', 'culturel_count'], ['get', 'point_count']], 0.5],
        ['case',
            ['>', ['get', 'chill_count'], ['get', 'festif_count']], 'cluster-culturel-chill',
            'cluster-culturel-festif'
        ],

        // 3. EQUAL SPLITS (Check for ~50/50 pairs where the 3rd is minimal)
        // If Chill+Festif > 85% (meaning Culturel < 15%), it's a 2-way split
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'festif_count']], ['get', 'point_count']], 0.85], 'cluster-chill-festif-equal',
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-chill-culturel-equal',
        ['>', ['/', ['+', ['get', 'festif_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-festif-culturel-equal',

        // 4. BALANCED (True Tricolor Mix)
        'cluster-balanced'
    ];

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <Mapbox.MapView
                ref={mapRef}
                style={styles.map}
                styleURL={Mapbox.StyleURL.Dark}
                scaleBarEnabled={false}
                attributionEnabled={false}
                rotateEnabled={true}
                pitchEnabled={true}
                // @ts-ignore
                panDecelerationFactor={0.99}
            >
                <Mapbox.Camera
                    ref={cameraRef}
                    defaultSettings={{ centerCoordinate: [2.3522, 48.8566], zoomLevel: 12 }}
                    minZoomLevel={3}
                    maxZoomLevel={20}
                />

                <Mapbox.FillLayer id="custom-water" sourceID="composite" sourceLayerID="water" style={{ fillColor: '#263c52', fillOpacity: 0.8 }} belowLayerID="waterway-label" />
                <Mapbox.FillLayer id="custom-parks" sourceID="composite" sourceLayerID="landuse" filter={['==', 'class', 'park']} style={{ fillColor: '#343f38', fillOpacity: 0.8 }} belowLayerID="waterway-label" />

                {/* TEMPLATES (Invisible Rasterization) */}
                <Mapbox.Images>
                    {templates.map(t => {
                        // INLINE LOGIC FOR PERFORMANCE & STABILITY
                        // Hardcode colors to guarantee value
                        let color = '#888';
                        if (t.mood === 'chill') color = '#8ccaf7';
                        else if (t.mood === 'festif') color = '#ffab60';
                        else if (t.mood === 'culturel') color = '#c499ff';

                        // Icon Mapping (Inline)
                        let icon = 'ellipse';
                        const cat = t.category;
                        if (cat === 'bar') icon = 'wine';
                        else if (cat === 'cafe' || cat === 'café') icon = 'cafe';
                        else if (cat === 'restaurant') icon = 'restaurant';
                        else if (cat === 'club') icon = 'musical-notes';
                        else if (cat === 'espace-culturel') icon = 'easel';
                        else if (cat === 'parc') icon = 'leaf';
                        else if (cat === 'museum') icon = 'library';
                        else if (cat === 'workshop') icon = 'hammer';
                        else if (cat === 'exhibition') icon = 'glasses';

                        return (
                            <Mapbox.Image key={t.id} name={t.id}>
                                <View
                                    style={{
                                        width: 32, height: 32,
                                        alignItems: 'center', justifyContent: 'center'
                                    }}
                                    collapsable={false}
                                >
                                    <View
                                        style={{
                                            width: 32, height: 32, borderRadius: 16,
                                            backgroundColor: 'white',
                                            alignItems: 'center', justifyContent: 'center'
                                        }}
                                        collapsable={false}
                                    >
                                        <View
                                            style={{
                                                width: 26, height: 26, borderRadius: 13,
                                                backgroundColor: color,
                                                alignItems: 'center', justifyContent: 'center'
                                            }}
                                            collapsable={false}
                                        >
                                            <Ionicons name={icon as any} size={14} color="white" />
                                        </View>
                                    </View>
                                </View>
                            </Mapbox.Image>
                        );
                    })}

                    {/* B. CLUSTER TEMPLATES (The "Smart Atlas" V2 - Proportional Slices) */}
                    {/* B. CLUSTER TEMPLATES (SVG PIE CHARTS V4 - HIGH FIDELITY) 🧠 */}
                    {CLUSTER_TYPES.map(type => {
                        const isPure = type.id.endsWith('pure');
                        const isBalanced = type.id === 'balanced';
                        const isEqual = type.id.includes('equal');
                        
                        return (
                            <Mapbox.Image key={type.id} name={`cluster-${type.id}`}>
                                <View style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }} collapsable={false}>
                                    <Svg height="60" width="60" viewBox="0 0 44 44">
                                        <Circle cx="22" cy="22" r="22" fill="white" />{/* Border */}
                                        <G origin="22, 22" rotation="0">
                                            {isPure && (
                                                 <Circle cx="22" cy="22" r="20" fill={type.colors[0]} />
                                            )}
                                            
                                            {!isPure && !isBalanced && !isEqual && (
                                                <>
                                                    {/* Primary (65% = 234 deg) */}
                                                    <Path d={describeArc(22, 22, 20, 0, 234)} fill={type.colors[0]} />
                                                    {/* Secondary (35% = 126 deg) */}
                                                    <Path d={describeArc(22, 22, 20, 234, 360)} fill={type.colors[1]} />
                                                </>
                                            )}

                                            {isEqual && (
                                                <>
                                                    {/* 50/50 Split (180 deg each) */}
                                                    <Path d={describeArc(22, 22, 20, 0, 180)} fill={type.colors[0]} />
                                                    <Path d={describeArc(22, 22, 20, 180, 360)} fill={type.colors[1]} />
                                                </>
                                            )}

                                            {isBalanced && (
                                                <>
                                                    <Path d={describeArc(22, 22, 20, 0, 120)} fill={type.colors[0]} />
                                                    <Path d={describeArc(22, 22, 20, 120, 240)} fill={type.colors[1]} />
                                                    <Path d={describeArc(22, 22, 20, 240, 360)} fill={type.colors[2]} />
                                                </>
                                            )}
                                        </G>
                                    </Svg>
                                </View>
                            </Mapbox.Image>
                        );
                    })}

                    {/* Selected Pin Template */}
                    <Mapbox.Image name="selected-pin-marker">
                        <View style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{
                                width: 40, height: 40, borderRadius: 20, backgroundColor: 'white',
                                shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, elevation: 6
                            }}>
                                {/* Just a clean white POP circle around the pin */}
                            </View>
                        </View>
                    </Mapbox.Image>
                </Mapbox.Images>

                {/* SINGLE SOURCE OF TRUTH (Native Clustering) */}
                <Mapbox.ShapeSource
                    id="placesSource"
                    shape={placesGeoJSON as any}
                    cluster={true}
                    clusterRadius={25} // Surgical clustering (Video Reference)
                    clusterMaxZoomLevel={16} // Explode early
                    clusterProperties={{
                        chill_count: ['+', ['case', ['==', ['get', 'mood'], 'chill'], 1, 0]],
                        festif_count: ['+', ['case', ['==', ['get', 'mood'], 'festif'], 1, 0]],
                        culturel_count: ['+', ['case', ['==', ['get', 'mood'], 'culturel'], 1, 0]]
                    }}
                    onPress={onShapeSourcePress}
                >
                    {/* 1. CLUSTERS (Unified for Sync & Performance) */}
                    <Mapbox.SymbolLayer
                        id="clusters-merged"
                        filter={['has', 'point_count']}
                        style={{
                            // Icon Config
                            iconImage: getClusterImage as any,
                            iconAllowOverlap: true, // Allow overlap so they don't vanish
                            iconIgnorePlacement: true, // Always show clusters
                            iconSize: 0.65, // Reduced Size (User Requested)
                            iconAnchor: 'center',
                            iconOpacityTransition: { duration: 300, delay: 0 },

                            // Text Config (Merged for Sync)
                            textField: ['get', 'point_count'],
                            textSize: 12, // Slightly smaller text for smaller cluster
                            textColor: '#ffffff',
                            textAllowOverlap: true,
                            textIgnorePlacement: true,
                            textHaloColor: 'rgba(0,0,0,0.4)',
                            textHaloWidth: 1.5,
                            textAnchor: 'center',
                            textOpacityTransition: { duration: 300, delay: 0 },

                            symbolSortKey: ['get', 'point_count'] // Big clusters on top
                        }}
                    />

                    {/* 3. PINS (Individual) */}
                    <Mapbox.SymbolLayer
                        id="unclustered-point"
                        filter={['!', ['has', 'point_count']]}
                        style={{
                            iconImage: ['get', 'icon_image'],
                            iconAllowOverlap: true, // Pins always show if possible
                            iconIgnorePlacement: false, // Respect clusters
                            iconSize: 1.0,
                            iconAnchor: 'bottom', // Precision Anchoring
                            iconOpacityTransition: { duration: 300, delay: 0 } // Smooth appearance
                        }}
                    />
                </Mapbox.ShapeSource>

            </Mapbox.MapView>

            {/* Top Controls: Search separate from Filters */}
            <View style={[styles.topHeader, { top: insets.top + 10 }]}>
                {/* Left Column: Filter Stack (Settings, etc.) */}
                <View style={styles.leftStack}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => setFilterSheetVisible(true)}
                    >
                        <Ionicons name="options-outline" size={20} color="#000" />
                    </TouchableOpacity>
                    {/* Add Map Mode / Location / Favs here later to match stack in photo */}
                </View>

                {/* Center: Mood Pills Scroll (or centered row) */}
                <View style={styles.centerPills}>
                    {moods.map((m) => {
                        const isSelected = selectedMoods.includes(m.id);
                        // If everything is selected (default), we show them active?
                        // Or if nothing is specifically selected, we consider ALL active.
                        // User wants: check/uncheck logic.

                        return (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.8}
                                style={[
                                    styles.moodPill,
                                    {
                                        backgroundColor: m.color,
                                        opacity: isSelected ? 1 : 0.4, // Dim if unchecked
                                        transform: [{ scale: isSelected ? 1 : 0.95 }]
                                    }
                                ]}
                                onPress={() => handleMoodToggle(m.id)}
                            >
                                <Text style={styles.moodTextSerif}>
                                    {m.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Right: Search */}
                <View style={styles.rightStack}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => console.log("Search")}
                    >
                        <Ionicons name="search-outline" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            <PlaceDetailSheetMap />
            <FilterActionSheet
                visible={isFilterSheetVisible}
                onClose={() => setFilterSheetVisible(false)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    map: { flex: 1 },
    topHeader: {
        position: 'absolute', left: 16, right: 16, zIndex: 100,
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', // Align top for stacks
    },
    leftStack: { flexDirection: 'column', gap: 12 }, // Vertical stack for filters/settings
    rightStack: { flexDirection: 'column', gap: 12 },
    centerPills: { flexDirection: 'row', gap: 8, marginTop: 4 }, // Center pills

    iconButton: {
        width: 44, height: 44, borderRadius: 22,
        backgroundColor: 'white',
        alignItems: 'center', justifyContent: 'center',
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 4, elevation: 4,
    },
    moodPill: {
        paddingHorizontal: 14, paddingVertical: 8, borderRadius: 16,
        backgroundColor: 'white',
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 4, elevation: 3,
        minWidth: 70, alignItems: 'center', justifyContent: 'center'
    },
    moodTextSerif: {
        fontSize: 12, fontWeight: '700', letterSpacing: 0.5,
        fontFamily: 'Times New Roman', // Serif font request (or Platform specific serif)
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.1)', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 1
    }
});
