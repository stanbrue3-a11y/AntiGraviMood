import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../design';
import { Place } from '../../stores';

interface PlaceFauneProps {
    place: Place;
    primaryColor: string;
}

export const PlaceFaune: React.FC<PlaceFauneProps> = ({ place, primaryColor }) => {
    const { theme } = useTheme();

    // Only render if social_vibe exists
    if (!place.ai_insights?.social_vibe) return null;

    return (
        <View style={styles.container}>
            <View style={[styles.card, { backgroundColor: primaryColor + '12' }]}>
                <View style={styles.headerRow}>
                    <Ionicons name="people" size={16} color={primaryColor} style={{ marginRight: 8 }} />
                    <Text style={[styles.headerText, { color: primaryColor }]}>LA FAUNE</Text>
                </View>
                <Text style={styles.content}>
                    {place.ai_insights.social_vibe.text}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginBottom: 16,
    },
    card: {
        // backgroundColor handled dynamically
        width: '100%',
        padding: 16,
        borderRadius: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    headerText: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    content: {
        fontSize: 16,
        lineHeight: 25,
        color: '#111827',
        fontFamily: 'PlayfairDisplay_400Regular_Italic',
        fontStyle: 'italic',
    },
});
