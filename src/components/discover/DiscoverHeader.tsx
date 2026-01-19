import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { useTheme, moodColors } from '../../design';
import { ScalePressable } from '../design/ScalePressable';
import { usePlacesStore } from '../../stores/usePlacesStore';

type Props = {
    // Props are now handled via Store mostly, but keeping Search/Filter props
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    setFilterVisible: (v: boolean) => void;
    isSearchActive: boolean;
    setIsSearchActive: (v: boolean) => void;
    insetsTop: number;
    transparent?: boolean;
    showLeftButton?: boolean;
    // Removed old props: selectedMoods, toggleMood
};

export const DiscoverHeader = ({
    searchQuery,
    setSearchQuery,
    setFilterVisible,
    isSearchActive,
    setIsSearchActive,
    insetsTop,
    transparent = false,
    showLeftButton = true
}: Props) => {
    const { theme, isDark } = useTheme();
    const { selectedCategories, toggleCategory } = usePlacesStore();

    // Horizontal Categories Configuration - MOOD GRADIENT DESIGN
    const CATEGORIES = [
        { key: 'bar', label: 'Bar', icon: 'beer-outline', colors: ['#8ccaf7', '#ffab60'] }, // Blue -> Orange
        { key: 'restaurant', label: 'Resto', icon: 'restaurant-outline', colors: ['#8ccaf7', '#ffab60'] }, // Blue -> Orange
        { key: 'café', label: 'Café', icon: 'cafe-outline', colors: ['#8ccaf7', '#8ccaf7'] }, // Blue
        { key: 'club', label: 'Club', icon: 'musical-notes-outline', colors: ['#ffab60', '#ffab60'] }, // Orange
        { key: 'parc', label: 'Parc', icon: 'leaf-outline', colors: ['#8ccaf7', '#8ccaf7'] }, // Blue
        { key: 'museum', label: 'Musée', icon: 'color-palette-outline', colors: ['#c499ff', '#c499ff'] }, // Violet
    ];

    return (
        <View style={[
            styles.headerContainer,
            { paddingTop: insetsTop, backgroundColor: transparent ? 'transparent' : theme.background },
            transparent && { shadowOpacity: 0, elevation: 0 }
        ]}>
            {transparent && (
                <LinearGradient
                    colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.1)', 'transparent']}
                    locations={[0, 0.4, 0.8]}
                    style={[StyleSheet.absoluteFill, { height: 100 }]}
                />
            )}
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
                                        locations={locations}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }} // Diagonal Slash
                                        style={[
                                            styles.pill,
                                            {
                                                height: 36,
                                                borderRadius: 18,
                                                paddingHorizontal: 14,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        ]}
                                    >
                                        <Ionicons name={cat.icon as any} size={16} color={fg} style={{ marginRight: 6 }} />
                                        <Text style={[styles.pillText, { color: fg, fontSize: 13 }]}>{cat.label}</Text>
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
        flex: 1,
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
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
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
});
