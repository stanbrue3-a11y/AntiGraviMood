import React, { useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useTheme } from '../design';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

// NOTE: This key should be in .env. Falling back to a placeholder or user prompt if missing.
const GOOGLE_API_KEY = Constants.expoConfig?.extra?.googleMapsApiKey || '';

interface GooglePlacesSearchProps {
    onSelect: (details: any) => void;
    placeholder?: string;
}

export const GooglePlacesSearch = ({ onSelect, placeholder = "Rechercher un lieu..." }: GooglePlacesSearchProps) => {
    const ref = useRef<any>();
    const { theme, isDark } = useTheme();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                ref={ref}
                placeholder={placeholder}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // data is the prediction result
                    onSelect({
                        name: data.structured_formatting?.main_text || data.description,
                        address: data.description,
                        placeId: data.place_id,
                        details: details
                    });
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'fr',
                    types: 'establishment', // Focus on places, not just regions
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInputContainer: {
                        backgroundColor: isDark ? '#333' : '#f3f4f6',
                        borderRadius: 12,
                        paddingHorizontal: 8,
                        height: 48,
                        flexDirection: 'row',
                        alignItems: 'center',
                    },
                    textInput: {
                        height: 44,
                        color: theme.text.primary,
                        fontSize: 16,
                        backgroundColor: 'transparent',
                        fontFamily: 'Georgia', // 'Indie' font
                    },
                    listView: {
                        backgroundColor: isDark ? '#1F2937' : '#fff',
                        borderRadius: 12,
                        marginTop: 8,
                        borderWidth: 1,
                        borderColor: isDark ? '#444' : '#e5e7eb',
                        elevation: 4,
                        zIndex: 9999, // Crucial for overlay
                    },
                    row: {
                        backgroundColor: 'transparent',
                        padding: 13,
                        height: 50,
                        flexDirection: 'row',
                    },
                    separator: {
                        height: 0.5,
                        backgroundColor: isDark ? '#444' : '#c8c7cc',
                    },
                    description: {
                        color: theme.text.primary,
                        fontFamily: 'Georgia',
                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 8, marginRight: 4 }}>
                        <Ionicons name="search" size={20} color={isDark ? '#aaa' : '#6b7280'} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        zIndex: 100,
    },
});
