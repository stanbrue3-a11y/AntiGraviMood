import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../design';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Place } from '../../types/model';
import { SurgicalBadge } from '../common/SurgicalBadge';
import { ScrollView } from 'react-native-gesture-handler';

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
    const { theme } = useTheme();
    return (
        <View>
            <View style={styles.secondaryActionsRow}>
                <TouchableOpacity
                    style={[styles.secondaryActionBtn, { borderColor: theme.border, backgroundColor: theme.surface }]}
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
                        name={
                            place.practical_info.main_action?.type === 'shotgun' ? 'flash' :
                                place.practical_info.main_action?.type === 'book' ? 'calendar' : 'globe'
                        }
                        size={20}
                        color="#FFF"
                    />
                    <Text style={styles.primaryActionText}>
                        {place.practical_info.main_action?.label?.toUpperCase() || 'SITE WEB'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* 🏷️ SURGICAL BADGES ROW */}
            <View style={styles.badgesContainer}>
                {getPlaceBadges(place).map((badge, index) => (
                    <SurgicalBadge key={index} {...badge} />
                ))}
            </View>
        </View>
    );
});

/**
 * 🧠 Surgical Logic: Deriving badges from data
 */
function getPlaceBadges(place: Place) {
    const badges: any[] = [];
    const info = place.practical_info;

    // 1. Primary Status (Resa)
    const statusMap: Record<string, { label: string; icon: string; color: string }> = {
        resa_conseillee: { label: 'Résa conseillée', icon: 'calendar-outline', color: '#ffab60' },
        resa_obligatoire: { label: 'Résa obligatoire', icon: 'calendar-outline', color: '#ffab60' },
    };

    if (info.primary_status && statusMap[info.primary_status]) {
        badges.push(statusMap[info.primary_status]);
    }

    // 2. Secondary Tags
    const tagMap: Record<string, { label: string; icon: string; color: string }> = {
        terrasse: { label: 'Terrasse', icon: 'sunny-outline', color: '#8ccaf7' },
        pelouse_autorisee: { label: 'Pelouse autorisée', icon: 'leaf-outline', color: '#8ccaf7' },
        pelouse_interdite: { label: 'Pelouse interdite', icon: 'leaf-outline', color: '#c499ff' },
        vins_nature: { label: 'Vins Nature', icon: 'wine-outline', color: '#ffab60' },
        laptop_friendly: { label: 'Laptop Friendly', icon: 'laptop-outline', color: '#8ccaf7' },
        gratuit_moins_26: { label: 'Gratuit < 26 ans', icon: 'gift-outline', color: '#c499ff' },
        jeux: { label: 'Jeux', icon: 'extension-puzzle-outline', color: '#ffab60' },
    };

    info.tags?.forEach(tag => {
        if (tagMap[tag]) {
            badges.push(tagMap[tag]);
        }
    });

    // 3. Happy Hour (Special case as it's often a string)
    if (info.happy_hour) {
        const hhLabel = typeof info.happy_hour === 'string' ? info.happy_hour : `${info.happy_hour.start}-${info.happy_hour.end}`;
        badges.push({
            icon: 'time-outline',
            label: `HH: ${hhLabel}`,
            color: '#ffab60', // Festif
        });
    }

    return badges;
}

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
    badgesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 28,
        marginTop: 12, // Plus d'espace avec les boutons
        gap: 10, // Espacement général entre badges
    },
});
