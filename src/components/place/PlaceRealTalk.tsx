import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../stores';

interface PlaceRealTalkProps {
    place: Place;
    primaryColor: string;
}

// Keys to ignore (technical fields or already displayed elsewhere)
const IGNORED_KEYS = [
    'price_info', 'price_range', 'description',
    'website', 'phone', 'instagram', 'facebook', 'email',
    'google_maps_url', 'reservation_required',
    'accessibility', 'outdoor_seating', 'happy_hour',
    'vibe', 'Vibe', 'Horaires', 'opening_hours', 'address',
    // Also ignore empty or very short values
];

const getIconName = (key: string): keyof typeof Ionicons.glyphMap => {
    const k = key.toLowerCase();
    if (k.includes('faune') || k.includes('crowd') || k.includes('ambiance') || k.includes('monde')) return 'people';
    if (k.includes('secret') || k.includes('caché') || k.includes('insolite')) return 'key';
    if (k.includes('must') || k.includes('plat') || k.includes('boire') || k.includes('manger') || k.includes('signature')) return 'star';
    if (k.includes('tip') || k.includes('astuce') || k.includes('conseil') || k.includes('bon plan')) return 'bulb';
    if (k.includes('son') || k.includes('playlist') || k.includes('musique') || k.includes('dj')) return 'musical-notes';
    if (k.includes('décor') || k.includes('vue') || k.includes('architecture') || k.includes('design') || k.includes('waouh')) return 'eye';
    if (k.includes('amour') || k.includes('date') || k.includes('romant') || k.includes('sexy')) return 'heart';
    if (k.includes('café') || k.includes('productiv') || k.includes('wifi')) return 'cafe';
    if (k.includes('concept')) return 'flash';
    return 'information-circle';
};

export const PlaceRealTalk = ({ place, primaryColor }: PlaceRealTalkProps) => {
    if (!place.practical_info) return null;

    // Filter relevant entries
    const entries = Object.entries(place.practical_info)
        .filter(([key, value]) => !IGNORED_KEYS.includes(key) && typeof value === 'string' && value.length > 2);

    if (entries.length === 0) return null;

    return (
        <View style={styles.container}>
            {entries.map(([key, value]) => (
                <View key={key} style={[styles.card, { backgroundColor: primaryColor + '08', marginBottom: 12 }]}>
                    <View style={styles.headerRow}>
                        <Ionicons name={getIconName(key)} size={18} color={primaryColor} style={{ marginRight: 8 }} />
                        <Text style={[styles.label, { color: primaryColor }]}>{key.toUpperCase()}</Text>
                    </View>
                    <Text style={styles.value}>{value as string}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    },
    card: {
        padding: 16,
        borderRadius: 16,
        // Removed border, using subtle background
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    label: {
        fontSize: 11,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    value: {
        fontSize: 15,
        lineHeight: 22,
        color: '#1F2937',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        fontStyle: 'italic',
    }
});
