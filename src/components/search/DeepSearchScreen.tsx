import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { type Place } from '../../types/model';
import { moodColors, useTheme, darkTheme } from '../../design';
import { MetroBadge } from '../ui/MetroBadge';
import { getDominantMood } from '../../lib/moodUtils';

interface DeepSearchScreenProps {
    searchQuery: string;
    results: Place[];
    onSelect: (place: Place) => void;
    onClose: () => void;
}

export const DeepSearchScreen = ({ searchQuery, results, onSelect, onClose }: DeepSearchScreenProps) => {
    const { isDark } = useTheme();

    const renderItem = ({ item, index }: { item: Place; index: number }) => {
        const mood = item.dominant_mood as 'chill' | 'festif' | 'culturel' || 'chill';
        const primaryColor = moodColors[mood]?.primary || '#888';

        // Fake distance for UI demo (Sync with real location if possible)
        const distance = `${(400 + index * 120)}m`;
        const time = `${Math.floor((400 + index * 120) / 80)} min`;

        return (
            <Pressable
                onPress={() => onSelect(item)}
                style={({ pressed }) => [
                    styles.resultItem,
                    { borderBottomColor: isDark ? 'rgba(255,255,255,0.1)' : '#f0f0f0' },
                    pressed && { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb' }
                ]}
            >
                <View style={styles.topRow}>
                    <Text style={[styles.distanceText, { color: isDark ? '#9CA3AF' : '#6B7280' }]}>
                        {distance} — {time}
                    </Text>
                    <View style={[styles.moodBadge, { backgroundColor: primaryColor + '20' }]}>
                        <View style={[styles.moodDot, { backgroundColor: primaryColor }]} />
                        <Text style={[styles.moodText, { color: primaryColor }]}>{mood.toUpperCase()}</Text>
                    </View>
                </View>

                <View style={styles.contentRow}>
                    <View style={styles.mainInfo}>
                        <Text style={styles.placeName}>{item.name}</Text>
                        <View style={styles.locationInfo}>
                            <View style={styles.metroList}>
                                {(item.location.metro_lines as (string | number)[])?.map((line: string | number, i: number) => (
                                    <MetroBadge key={i} line={String(line)} size={18} />
                                ))}
                            </View>
                            <Text style={[styles.metroName, { color: isDark ? '#9CA3AF' : '#6B7280' }]}>
                                {item.location.nearest_metro} • {item.location.arrondissement}e
                            </Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color={isDark ? '#4B5563' : '#D1D5DB'} />
                </View>

                {item.description && (
                    <Text style={[styles.description, { color: isDark ? '#D1D5DB' : '#4B5563' }]} numberOfLines={2}>
                        {item.description}
                    </Text>
                )}
            </Pressable>
        );
    };

    return (
        <BlurView intensity={Platform.OS === 'ios' ? 95 : 100} tint={isDark ? 'dark' : 'light'} style={StyleSheet.absoluteFill}>
            <View style={styles.headerSpacer} />
            <FlatList
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="search-outline" size={48} color={isDark ? '#374151' : '#E5E7EB'} />
                        <Text style={[styles.emptyText, { color: isDark ? '#9CA3AF' : '#6B7280' }]}>
                            Aucun lieu trouvé pour "{searchQuery}"
                        </Text>
                    </View>
                }
            />
        </BlurView>
    );
};

const styles = StyleSheet.create({
    headerSpacer: {
        height: 110, // Matches DiscoverHeader height
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 100,
    },
    resultItem: {
        paddingVertical: 18,
        borderBottomWidth: 1,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    distanceText: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    moodBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
    },
    moodDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 6,
    },
    moodText: {
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    mainInfo: {
        flex: 1,
    },
    placeName: {
        fontSize: 22,
        fontFamily: 'PlayfairDisplay-Bold',
        color: darkTheme.text.primary,
        marginBottom: 4,
    },
    locationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metroList: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },
    metroName: {
        fontSize: 13,
        fontWeight: '500',
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Inter-Regular',
        opacity: 0.8,
    },
    emptyContainer: {
        paddingTop: 120,
        alignItems: 'center',
        gap: 16,
    },
    emptyText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    },
});
