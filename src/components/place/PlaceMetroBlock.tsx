import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../design';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';

interface PlaceMetroBlockProps {
    place: Place;
    primaryColor: string;
}

/**
 * PlaceMetroBlock - Premium Metro Access 🚇🏛️
 * Implements the "Beau Design" with bold station name and line badges.
 */
export const PlaceMetroBlock = React.memo(({ place, primaryColor }: PlaceMetroBlockProps) => {
    const { theme } = useTheme();
    return (
        <View style={styles.metroPremiumBlock}>
            <View style={styles.headerRow}>
                <Ionicons name="train" size={20} color={primaryColor} style={{ marginRight: 8, marginTop: 2 }} />
                <Text style={[styles.metroPremiumStation, { color: theme.text.primary }]}>
                    {place.location.nearest_metro}
                </Text>
            </View>

            <View style={styles.metroPremiumMeta}>
                <View style={[styles.lineBadge, { backgroundColor: '#FFAB60' }]}>
                    <Text style={styles.lineText}>{String(place.location.metro_lines?.[0] || '?')}</Text>
                </View>
                <Text style={styles.metroPremiumAddress}>{place.location.address.split(',')[0]}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    metroPremiumBlock: {
        paddingVertical: 0,
        gap: 8,
        marginBottom: 8,
        marginTop: 8,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    metroPremiumStation: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Inter_700Bold',
        flex: 1,
    },
    metroPremiumMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingLeft: 28, // Align with text start (icon width + margin)
    },
    lineBadge: {
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: '900',
    },
    metroPremiumAddress: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.4)',
        fontWeight: '500',
    }
});
