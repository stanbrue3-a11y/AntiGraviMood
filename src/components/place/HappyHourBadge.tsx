import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../design';

interface HappyHourBadgeProps {
    active: boolean;
    display: string;
    label: string;
}

/**
 * HappyHourBadge - Industrial 2026 Premium Hook 🕒🍻
 * Higher visual priority than standard badges in the MetaHeader.
 */
export const HappyHourBadge: React.FC<HappyHourBadgeProps> = ({ active, display, label }) => {
    const { theme, isDark } = useTheme();

    // High-visibility orange for active, muted for upcoming
    const tint = active ? '#ffab60' : isDark ? 'rgba(255,255,255,0.4)' : '#9CA3AF';
    const bg = active ? 'rgba(255,171,96,0.1)' : 'transparent';
    const border = active ? 'rgba(255,171,96,0.2)' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';

    return (
        <View style={[styles.container, { backgroundColor: bg, borderColor: border }]}>
            <Ionicons name="time-outline" size={14} color={tint} />
            <Text style={[styles.text, { color: tint }]}>
                {active ? display : `HH: ${display}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        gap: 4,
        marginRight: 4,
    },
    text: {
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 0.2,
        textTransform: 'uppercase',
    },
});
