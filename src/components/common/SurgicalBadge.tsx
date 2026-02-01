import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SurgicalBadgeProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    color: string;
}

/**
 * SurgicalBadge - High-precision info pill 🏛️🏷️
 * "Haussmannian" style: Rounded corners, border, pictogram.
 */
export const SurgicalBadge = React.memo(({ icon, label, color }: SurgicalBadgeProps) => {
    return (
        <View style={[styles.container, { borderColor: color + '40', backgroundColor: color + '08' }]}>
            <Ionicons name={icon} size={16} color={color} />
            <Text style={[styles.label, { color: color }]}>{label}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 12, // Match button radius
        borderWidth: 1.5, // slightly thicker for premium feel
        gap: 8,
    },
    label: {
        fontSize: 13,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
});
