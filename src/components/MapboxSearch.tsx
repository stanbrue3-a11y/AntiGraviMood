import React, { useState, useCallback, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Keyboard, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../design';
import * as Haptics from 'expo-haptics';

// Mapbox Token (Ideally env var, but hardcoded for now as per user request)
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3RhbnRoZW1hbnMiLCJhIjoiY21qYW9rZmJzMDVrejNkc2J6dW9sbmNubCJ9.rio8auCYmW4qWaHP9YxD5A';

interface MapboxFeature {
    id: string;
    place_name: string;
    center: [number, number]; // [lng, lat]
    text: string;
    context?: any[];
}

interface MapboxSearchProps {
    onSelect: (place: { name: string; address: string; lat: number; lng: number }) => void;
    placeholder?: string;
}

export const MapboxSearch = ({ onSelect, placeholder = "Rechercher un lieu, une adresse..." }: MapboxSearchProps) => {
    const { theme, isDark } = useTheme();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<MapboxFeature[]>([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSearch = (text: string) => {
        setQuery(text);

        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        if (text.length < 2) {
            setResults([]);
            return;
        }

        setShowResults(true);
        setLoading(true);

        searchTimeout.current = setTimeout(async () => {
            try {
                // Search Paris specifically (bbox for Paris approx)
                const bbox = '2.224199,48.815573,2.469920,48.902145';
                const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(text)}.json?access_token=${MAPBOX_TOKEN}&bbox=${bbox}&country=fr&types=poi,address&limit=5`;

                const response = await fetch(url);
                const data = await response.json();

                if (data.features) {
                    setResults(data.features);
                }
            } catch (error) {
                console.error('Mapbox search error:', error);
            } finally {
                setLoading(false);
            }
        }, 400); // Debounce
    };

    const handleSelect = (item: MapboxFeature) => {
        Haptics.selectionAsync();
        setQuery(item.place_name); // Show full name temporarily
        setShowResults(false);
        Keyboard.dismiss();

        onSelect({
            name: item.text,
            address: item.place_name,
            lat: item.center[1],
            lng: item.center[0]
        });
    };

    const clearSearch = () => {
        setQuery('');
        setResults([]);
        setShowResults(false);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.searchBar, { backgroundColor: isDark ? '#333' : '#f3f4f6' }]}>
                <Ionicons name="search" size={20} color={isDark ? '#aaa' : '#6b7280'} style={styles.icon} />
                <TextInput
                    style={[styles.input, { color: theme.text.primary }]}
                    placeholder={placeholder}
                    placeholderTextColor={isDark ? '#888' : '#9ca3af'}
                    value={query}
                    onChangeText={handleSearch}
                    onFocus={() => {
                        if (query.length >= 3) setShowResults(true);
                    }}
                    returnKeyType="search"
                    clearButtonMode="never" // We implement our own
                />
                {loading ? (
                    <ActivityIndicator size="small" color={theme.primary} style={styles.rightIcon} />
                ) : query.length > 0 ? (
                    <TouchableOpacity onPress={clearSearch} style={styles.rightIcon}>
                        <Ionicons name="close-circle" size={18} color={isDark ? '#aaa' : '#9ca3af'} />
                    </TouchableOpacity>
                ) : null}
            </View>

            {showResults && results.length > 0 && (
                <View style={[styles.resultsContainer, { backgroundColor: isDark ? '#1F2937' : '#ffffff', borderColor: isDark ? '#444' : '#e5e7eb' }]}>
                    <FlatList
                        data={results}
                        keyExtractor={(item) => item.id}
                        keyboardShouldPersistTaps="handled" // Crucial for selection
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={[
                                    styles.resultItem,
                                    { borderBottomColor: isDark ? '#333' : '#f0f0f0' },
                                    index === results.length - 1 && { borderBottomWidth: 0 }
                                ]}
                                onPress={() => handleSelect(item)}
                            >
                                <View style={[styles.resultIcon, { backgroundColor: isDark ? '#333' : '#f3f4f6' }]}>
                                    <Ionicons name="location" size={16} color={theme.text.primary} />
                                </View>
                                <View style={styles.resultTextContainer}>
                                    <Text style={[styles.resultTitle, { color: theme.text.primary }]} numberOfLines={1}>{item.text}</Text>
                                    <Text style={[styles.resultSubtitle, { color: isDark ? '#999' : '#6b7280' }]} numberOfLines={1}>{item.place_name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 100, // Important for overlay
        width: '100%',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        height: '100%',
        fontFamily: 'Inter_500Medium', // Or default
    },
    rightIcon: {
        padding: 4,
    },
    resultsContainer: {
        position: 'absolute',
        top: 54, // searchBar height + margin
        left: 0,
        right: 0,
        borderRadius: 12,
        borderWidth: 1,
        maxHeight: 250,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
        overflow: 'hidden',
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
    },
    resultIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    resultTextContainer: {
        flex: 1,
    },
    resultTitle: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 2,
    },
    resultSubtitle: {
        fontSize: 13,
    }
});
