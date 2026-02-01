import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform, TextInput, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { useTheme, moodColors } from '../../design';
import { ScalePressable } from '../design/ScalePressable';
import { usePlacesStore } from '../../stores/placesStore';
import { useSearchStore, selectFilteredResults } from '../../stores/searchStore';
import { useUIStore } from '../../stores/uiStore';
import { useRouter, usePathname } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';
import { Place } from '../../types/model';
import { DeepSearchScreen } from '../search/DeepSearchScreen';

type Props = {
    insetsTop: number;
    transparent?: boolean;
    showLeftButton?: boolean;
    setFilterVisible: (v: boolean) => void;
};

export const DiscoverHeader = ({
    setFilterVisible,
    insetsTop,
    transparent = false,
    showLeftButton = true
}: Props) => {
    const { theme, isDark } = useTheme();
    const {
        selectedCategories,
        toggleCategory,
        searchQuery,
        setSearchQuery
    } = useSearchStore(useShallow(state => ({
        selectedCategories: state.selectedCategories,
        toggleCategory: state.toggleCategory,
        searchQuery: state.searchQuery,
        setSearchQuery: state.setSearchQuery
    })));

    const { selectPlace, setMapCameraRequest } = useUIStore();
    const places = usePlacesStore(state => state.places);

    const filteredPlaces = React.useMemo(() =>
        selectFilteredResults(places),
        [places, selectedCategories, searchQuery]
    );
    const router = useRouter();
    const pathname = usePathname();

    const [isSearchActive, setIsSearchActive] = React.useState(false);

    // Horizontal Categories Configuration - MOOD GRADIENT DESIGN
    const CATEGORIES = [
        { key: 'bar', label: 'Bar', icon: 'beer-outline', colors: ['#ffab60', '#ffab60'] }, // Orange (Festif)
        { key: 'restaurant', label: 'Resto', icon: 'restaurant-outline', colors: ['#ffab60', '#8ccaf7'] }, // Festif + Chill
        { key: 'café', label: 'Café', icon: 'cafe-outline', colors: ['#8ccaf7', '#8ccaf7'] }, // Blue (Chill)
        { key: 'club', label: 'Club', icon: 'musical-notes-outline', colors: ['#ffab60', '#ffab60'] }, // Orange (Festif)
        { key: 'museum', label: 'Musée', icon: 'library-outline', colors: ['#c499ff', '#c499ff'] }, // Purple (Culturel)
        { key: 'exhibition', label: 'Expo', icon: 'images-outline', colors: ['#c499ff', '#c499ff'] }, // Purple (Culturel)
        { key: 'parc', label: 'Parc', icon: 'leaf-outline', colors: ['#8ccaf7', '#8ccaf7'] }, // Blue (Chill)
    ];

    return (
        <View style={[
            styles.headerContainer,
            { paddingTop: insetsTop, backgroundColor: transparent ? 'transparent' : theme.background },
            !transparent && { borderBottomWidth: 1, borderBottomColor: theme.border }
        ]}>
            {transparent && (
                <LinearGradient
                    colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.1)', 'transparent']}
                    locations={[0, 0.4, 0.8]}
                    style={[StyleSheet.absoluteFill, { height: 100 }]}
                />
            )}
            {isSearchActive ? (
                <View style={[styles.header, { paddingHorizontal: 20, flexDirection: 'column', alignItems: 'stretch' }]}>
                    <View style={[
                        styles.searchBarContainer,
                        {
                            backgroundColor: isDark ? '#1A1C24' : '#f3f4f6',
                            borderWidth: 1.5,
                            borderColor: isDark ? '#8ccaf7' : 'transparent',
                            shadowColor: isDark ? '#8ccaf7' : '#000',
                            shadowOpacity: isDark ? 0.4 : 0.1,
                            shadowRadius: 10,
                        }
                    ]}>
                        <Ionicons name="search" size={20} color={isDark ? '#8ccaf7' : theme.text.secondary} style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Rechercher un lieu..."
                            placeholderTextColor={isDark ? 'rgba(255,255,255,0.4)' : theme.text.secondary}
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

                    {searchQuery.length > 0 && (
                        <View style={[StyleSheet.absoluteFill, {
                            marginTop: 60,
                            height: 2000, // Cover the whole screen
                            backgroundColor: 'transparent'
                        }]}>
                            <DeepSearchScreen
                                searchQuery={searchQuery}
                                results={filteredPlaces}
                                onSelect={(place) => {
                                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                                    selectPlace(place.id, 'map');
                                    setMapCameraRequest([place.location.coordinates.lng, place.location.coordinates.lat], 15);
                                    if (pathname !== '/map') {
                                        router.push('/map');
                                    }
                                    setIsSearchActive(false);
                                    setSearchQuery('');
                                }}
                                onClose={() => {
                                    setIsSearchActive(false);
                                    setSearchQuery('');
                                }}
                            />
                        </View>
                    )}
                </View>
            ) : (
                <View style={styles.header}>
                    <ScalePressable
                        onPress={() => {
                            console.log('🔥 DiscoverHeader: Filter Button Pressed!');
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            setFilterVisible(true);
                        }}
                        style={[
                            styles.roundBtn,
                            { backgroundColor: '#23252E' }
                        ]}
                    >
                        {transparent ? (
                            <View style={styles.glassButtonInner}>
                                <Ionicons name="options" size={22} color="#FFFFFF" />
                            </View>
                        ) : (
                            <Ionicons name="options" size={20} color="#FFFFFF" />
                        )}
                    </ScalePressable>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 8, paddingHorizontal: 4 }}
                        style={{ flex: 1, marginHorizontal: 8 }}
                    >
                        {CATEGORIES.map((cat) => {
                            const isSelected = selectedCategories.includes(cat.key);
                            const isAnySelected = selectedCategories.length === 1;

                            // Visual Logic: Mood Gradient vs Dark Glass
                            // For Dual Colors: Hard Split "Slash" (0.5 stop)
                            let finalColors: string[] = [];
                            let locations: number[] | undefined = undefined;

                            if (isSelected) {
                                if (cat.colors.length === 2) {
                                    // Hard Split: [C1, C1, C2, C2] at [0, 0.5, 0.5, 1]
                                    finalColors = [cat.colors[0], cat.colors[0], cat.colors[1], cat.colors[1]];
                                    locations = [0, 0.5, 0.5, 1];
                                } else {
                                    // Single Color
                                    finalColors = [cat.colors[0], cat.colors[0]];
                                }
                            } else {
                                // Inactive
                                finalColors = ['rgba(35, 37, 46, 0.8)', 'rgba(35, 37, 46, 0.8)'];
                            }

                            const fg = '#FFFFFF';

                            return (
                                <Pressable
                                    key={cat.key}
                                    onPress={() => {
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        toggleCategory(cat.key);
                                    }}
                                    style={{
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: isSelected ? 0.3 : 0,
                                        shadowRadius: 4,
                                        elevation: isSelected ? 4 : 0,
                                        transform: [{ scale: isSelected ? 1.05 : 1 }]
                                    }}
                                >
                                    <LinearGradient
                                        colors={finalColors as any}
                                        locations={locations as any}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={styles.pill}
                                    >
                                        <Ionicons name={cat.icon as any} size={16} color={fg} style={{ marginRight: 6 }} />
                                        <Text style={[styles.pillText, { color: fg }]}>{cat.label}</Text>
                                    </LinearGradient>
                                </Pressable>
                            );
                        })}
                    </ScrollView>

                    <ScalePressable
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            setIsSearchActive(true);
                        }}
                        style={[
                            styles.roundBtn,
                            { backgroundColor: '#23252E' }
                        ]}
                    >
                        {transparent ? (
                            <View style={styles.glassButtonInner}>
                                <Ionicons name="search" size={22} color="#FFFFFF" />
                            </View>
                        ) : (
                            <Ionicons name="search" size={20} color="#FFFFFF" />
                        )}
                    </ScalePressable>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 10,
        paddingBottom: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 8,
        gap: 8,
    },
    roundBtn: {
        width: 44, height: 44, borderRadius: 22,
        alignItems: 'center', justifyContent: 'center',
    },
    mapFloatingBtn: {
        backgroundColor: '#23252E', // Matches exact dark circle color
        borderRadius: 22,
        overflow: 'hidden',
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
    glassButtonInner: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    moods: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 6
    },
    searchBarContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        height: 44,
        borderRadius: 22,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Inter-Medium',
    },
    pill: {
        height: 38, borderRadius: 19,
        alignItems: 'center', justifyContent: 'center',
        shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2,
        paddingHorizontal: 14,
        flexDirection: 'row',
    },
    pillText: {
        color: '#fff', fontSize: 11, fontWeight: '700', letterSpacing: 0.2,
        fontFamily: 'Inter_600SemiBold',
    },
    toggleContainer: {
        flexDirection: 'row',
        height: 44,
        borderRadius: 22,
        padding: 4,
        gap: 2,
    },
    toggleSegment: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeSegment: {
        backgroundColor: '#fff',
        shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 1,
    },
    searchResultsContainer: {
        marginTop: 8,
        borderRadius: 20,
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 5,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        gap: 12,
    },
    moodIconSmall: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultName: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'PlayfairDisplay-Bold',
    },
    resultSub: {
        fontSize: 13,
        fontWeight: '500',
    },
    noResults: {
        padding: 20,
        alignItems: 'center',
    },
    moreResults: {
        padding: 8,
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'italic',
    },
});
