import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Place } from '../../types/model';

interface PlaceActionRowProps {
    place: Place;
    primaryColor: string;
    onVibeCheck: () => void;
    onBooking: () => void;
}

/**
 * PlaceActionRow - Premium Action Buttons 📸🎫
 * Reusable component for Vibe Check and Booking actions.
 */
export const PlaceActionRow = React.memo(({ place, primaryColor, onVibeCheck, onBooking }: PlaceActionRowProps) => {
    return (
        <View style={styles.secondaryActionsRow}>
            <TouchableOpacity
                style={[styles.secondaryActionBtn, { borderColor: primaryColor + '40' }]}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    onVibeCheck();
                }}
            >
                <Ionicons name="logo-instagram" size={20} color={primaryColor} />
                <Text style={[styles.secondaryActionText, { color: primaryColor }]}>VIBE CHECK</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.primaryActionBtn, { backgroundColor: primaryColor }]}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    onBooking();
                }}
            >
                <Ionicons
                    name={place.category === 'club' ? 'flash' : place.category === 'museum' || place.category === 'exhibition' ? 'ticket' : 'calendar'}
                    size={20}
                    color="#FFF"
                />
                <Text style={styles.primaryActionText}>
                    {place.category === 'club' ? 'SHOTGUN' : place.category === 'museum' || place.category === 'exhibition' ? 'BILLETTERIE' : 'RÉSERVER'}
                </Text>
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    secondaryActionsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
        marginBottom: 16,
    },
    secondaryActionBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        gap: 8,
    },
    secondaryActionText: {
        fontSize: 13,
        fontWeight: '900',
        letterSpacing: 1,
    },
    primaryActionBtn: {
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        gap: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    primaryActionText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '900',
        letterSpacing: 1,
    },
});
