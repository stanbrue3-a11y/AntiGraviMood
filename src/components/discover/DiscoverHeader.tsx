import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { useTheme, moodColors } from '../../design';
import { ScalePressable } from '../design/ScalePressable';

type Props = {
    selectedMoods: string[];
    toggleMood: (mood: "chill" | "festif" | "culturel") => void;
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    setFilterVisible: (v: boolean) => void;
    isSearchActive: boolean;
    setIsSearchActive: (v: boolean) => void;
    insetsTop: number;
    transparent?: boolean;
    showLeftButton?: boolean;
};

export const DiscoverHeader = ({
    selectedMoods,
    toggleMood,
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
    const MOODS = ['chill', 'festif', 'culturel'] as const;

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

                    <View style={styles.moods}>
                        {MOODS.map((m) => {
                            const on = selectedMoods.includes(m);
                            return (
                                <Pressable key={m} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); toggleMood(m); }}
                                    style={[
                                        styles.pill,
                                        { backgroundColor: moodColors[m]?.primary ?? '#999', opacity: on || selectedMoods.length === 0 ? 1 : 0.5 },
                                        { shadowOpacity: 0, elevation: 0, height: 40, borderRadius: 20, paddingHorizontal: 0 }
                                    ]}>
                                    <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pillText}>{m.toUpperCase()}</Text>
                                </Pressable>
                            );
                        })}
                    </View>

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
