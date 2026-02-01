import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';

interface StatusBadgesProps {
    place: Place;
}

export const StatusBadges: React.FC<StatusBadgesProps> = ({ place }) => {
    const { practical_info } = place;
    const hasTerrace = practical_info?.terrasse || practical_info?.outdoor_seating;
    const isResaRequired = practical_info?.reservation_required;
    const isAccessible = practical_info?.accessibility;

    return (
        <View style={styles.container}>
            {hasTerrace && (
                <View style={[styles.badge, styles.grayBadge]}>
                    <Ionicons name="close-circle" size={14} color="#9CA3AF" />
                    <Text style={styles.badgeText}>Terrasse</Text>
                </View>
            )}

            {isResaRequired && (
                <View style={[styles.badge, styles.redBadge]}>
                    <Ionicons name="time" size={14} color="#991B1B" />
                    <Text style={[styles.badgeText, styles.redText]}>Résa. Requise</Text>
                </View>
            )}

            {isAccessible && (
                <View style={[styles.badge, styles.orangeBadge]}>
                    <Ionicons name="body" size={14} color="#EA580C" />
                    <Text style={[styles.badgeText, styles.orangeText]}>PMR</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 24,
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
        gap: 6,
    },
    grayBadge: {
        backgroundColor: '#F3F4F6',
    },
    redBadge: {
        backgroundColor: '#FEE2E2',
    },
    orangeBadge: {
        backgroundColor: '#FFEDD5',
    },
    badgeText: {
        fontSize: 13,
        fontWeight: '800',
        color: '#6B7280',
    },
    redText: {
        color: '#991B1B',
    },
    orangeText: {
        color: '#EA580C',
    },
});
