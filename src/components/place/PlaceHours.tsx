import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';
import { spacing } from '../../design/tokens/spacing';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

interface PlaceHoursProps {
    place: Place;
    primaryColor: string;
}

export const PlaceHours: React.FC<PlaceHoursProps> = ({ place, primaryColor }) => {
    const [expanded, setExpanded] = useState(false);
    const { opening_hours } = place;

    if (!opening_hours) return null;

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    const isOpen = opening_hours.is_open_now;
    // Simple logic to parse display text if needed, but we trust 'display' or 'standard'
    const statusText = isOpen ? "OUVERT" : "FERMÉ";
    const statusColor = isOpen ? '#22C55E' : '#EF4444'; // Green or Red standard

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} onPress={toggleExpand} style={[styles.headerCard, { backgroundColor: primaryColor + '12' }]}>
                <View style={styles.headerRow}>
                    <View style={styles.statusRow}>
                        <Ionicons name="time-outline" size={16} color={primaryColor} style={{ marginRight: 6 }} />
                        <Text style={[styles.statusText, { color: statusColor }]}>{statusText}</Text>
                        <Text style={styles.timeInfo}>
                            • {opening_hours.display ? opening_hours.display.replace('Tlj: ', '') : 'Horaires'}
                        </Text>
                    </View>
                    <Ionicons
                        name={expanded ? "chevron-up" : "chevron-down"}
                        size={16}
                        color={primaryColor}
                        style={{ opacity: 0.6 }}
                    />
                </View>

                {expanded && opening_hours.detailed && (
                    <View style={styles.detailsContainer}>
                        {opening_hours.detailed.split('\n').map((line, index) => {
                            const isToday = false; // TODO: Calculate if line matches today? For now just list.
                            return (
                                <View key={index} style={styles.detailRow}>
                                    <Text style={styles.detailText}>{line}</Text>
                                </View>
                            );
                        })}
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 0, // Parent handles padding usually, or correct here
        marginBottom: spacing[4],
    },
    headerCard: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        // backgroundColor set inline
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    timeInfo: {
        fontSize: 13,
        color: '#4B5563',
        fontWeight: '500',
        marginLeft: 4,
    },
    detailsContainer: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
        gap: 6,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailText: {
        fontSize: 13,
        color: '#374151',
        fontFamily: 'Inter_400Regular', // Use App Font if available, or system
        lineHeight: 20,
    },
});
