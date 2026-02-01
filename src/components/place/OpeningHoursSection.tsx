import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';

interface OpeningHoursSectionProps {
    place: Place;
    primaryColor: string;
    isExpanded: boolean;
    onToggle: () => void;
}

export const OpeningHoursSection = React.memo(({ place, primaryColor, isExpanded, onToggle }: OpeningHoursSectionProps) => {
    return (
        <View style={{ marginBottom: 24 }}>
            <TouchableOpacity
                style={[styles.hoursRow, { marginBottom: 0 }]}
                activeOpacity={0.7}
                onPress={onToggle}
            >
                <Ionicons name="time-outline" size={18} color={primaryColor} />
                <Text style={[styles.hoursStatus, { color: primaryColor }]}>
                    {place.opening_hours?.is_open_now ? 'OUVERT' : 'FERMÉ'}
                </Text>
                <Text
                    style={styles.hoursValue}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.8}
                >
                    • {place.opening_hours?.display?.replace('Tlj: ', '') || '12h-23h'}
                </Text>
                <Ionicons
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={16}
                    color="rgba(255,255,255,0.3)"
                    style={{ marginLeft: 'auto' }}
                />
            </TouchableOpacity>

            {isExpanded && place.opening_hours?.detailed && (
                <View style={styles.hoursDetails}>
                    {place.opening_hours.detailed.split('\n').map((line, idx) => (
                        <View key={idx} style={styles.hoursDetailRow}>
                            <Text style={styles.hoursDetailText}>{line}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    hoursRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.04)',
        padding: 14,
        borderRadius: 12,
        marginBottom: 24,
        gap: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    hoursStatus: {
        fontSize: 13,
        fontWeight: '900',
    },
    hoursValue: {
        flex: 1,
        fontSize: 13,
        fontWeight: '600',
        color: '#FFF',
        opacity: 0.8,
    },
    hoursDetails: {
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderRadius: 12,
        gap: 6,
    },
    hoursDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hoursDetailText: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.6)',
        fontFamily: 'Inter_400Regular',
    },
});
