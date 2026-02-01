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
            <View style={[styles.metroPremiumIconBox, { backgroundColor: primaryColor + '15' }]}>
                <Ionicons name="train" size={24} color={primaryColor} />
            </View>
            <View style={styles.metroPremiumContent}>
                <Text style={[styles.metroPremiumStation, { color: theme.text.primary }]}>{place.location.nearest_metro}</Text>
                <View style={styles.metroPremiumMeta}>
                    <View style={[styles.lineBadge, { backgroundColor: '#FFAB60' }]}>
                        <Text style={styles.lineText}>{place.location.metro_lines?.[0] || '?'}</Text>
                    </View>
                    <Text style={styles.metroPremiumAddress}>{place.location.address.split(',')[0]}</Text>
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    metroPremiumBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 24,
        gap: 16,
        marginBottom: 8,
    },
    metroPremiumIconBox: {
        width: 52,
        height: 52,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    metroPremiumContent: {
        flex: 1,
        gap: 4,
    },
    metroPremiumStation: {
        fontSize: 22,
        fontWeight: '900',
        fontFamily: 'Inter_700Bold',
    },
    metroPremiumMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    lineBadge: {
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '900',
    },
    metroPremiumAddress: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.4)',
        fontWeight: '600',
    }
});
