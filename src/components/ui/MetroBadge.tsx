import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const METRO_COLORS: Record<string, string> = {
    // Métro Lines
    '1': '#FFBE00',
    '2': '#0055C8',
    '3': '#6E6E30',
    '3b': '#75AADB',
    '4': '#A0006E',
    '5': '#FF5A00',
    '6': '#82C46C',
    '7': '#FF73A0',
    '7b': '#82C46C',
    '8': '#E3B0FF',
    '9': '#D2D200',
    '10': '#CB9100',
    '11': '#6E491E',
    '12': '#00643C',
    '13': '#007DC1',
    '14': '#62259D',
    // RER Lines
    'A': '#E2231A',
    'B': '#5291CE',
    'C': '#FFCC00',
    'D': '#00A44D',
    'E': '#C04191',
    // Tramways
    'T1': '#00643C',
    'T2': '#C04191',
    'T3a': '#FF5A00',
    'T3b': '#FF5A00',
};

interface MetroBadgeProps {
    line: string | number;
    size?: number;
}

export const MetroBadge = ({ line, size = 18 }: MetroBadgeProps) => {
    const lineKey = line.toString().toUpperCase();
    const color = METRO_COLORS[lineKey] || '#9CA3AF'; // Fallback to Gray
    const isRER = ['A', 'B', 'C', 'D', 'E'].includes(lineKey);

    return (
        <View style={[
            styles.badge,
            {
                backgroundColor: color,
                width: size,
                height: size,
                borderRadius: isRER ? 4 : size / 2
            }
        ]}>
            <Text style={[
                styles.text,
                { fontSize: size > 20 ? 12 : 10 }
            ]}>
                {lineKey}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '900',
        textAlign: 'center',
    }
});
