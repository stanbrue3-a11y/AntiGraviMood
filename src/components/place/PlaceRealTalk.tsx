import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../stores';

interface PlaceRealTalkProps {
    place: Place;
    primaryColor: string;
}

export const PlaceRealTalk = ({ place, primaryColor }: PlaceRealTalkProps) => {
    // Helper to safely get data
    const getInfo = (key: string): string | null => {
        const info = (place.practical_info as any)?.[key];
        if (info) return info;


        return null;
    };

    const crowd = getInfo("La faune");

    if (!crowd) return null;

    return (
        <View style={styles.container}>
            <View style={[styles.card, { backgroundColor: primaryColor + '08' }]}>
                <View style={styles.headerRow}>
                    <Ionicons name="people" size={18} color={primaryColor} style={{ marginRight: 8 }} />
                    <Text style={[styles.label, { color: primaryColor }]}>LA FAUNE</Text>
                </View>
                <Text style={styles.value}>{crowd}</Text>
            </View>
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
        marginBottom: 4,
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
