import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';
import { useTheme, typography as typo } from '../../design';

interface PlaceInsightsProps {
    place: Place;
    primaryColor: string;
}

export const PlaceInsights: React.FC<PlaceInsightsProps> = ({ place, primaryColor }) => {
    const { isDark } = useTheme();
    const { real_talk, ai_insights } = place;

    if (!real_talk && !ai_insights) return null;

    const renderInsight = (icon: keyof typeof Ionicons.glyphMap, label: string, content?: string) => {
        if (!content) return null;
        return (
            <View style={styles.insightCard}>
                <View style={[styles.iconCircle, { backgroundColor: primaryColor + '15' }]}>
                    <Ionicons name={icon} size={18} color={primaryColor} />
                </View>
                <View style={styles.insightContent}>
                    <Text style={[styles.insightLabel, { color: primaryColor }]}>{label}</Text>
                    <Text style={styles.insightText}>{content}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>L'AVIS RÉEL</Text>

            {renderInsight("key-outline", "LE SECRET", real_talk?.le_secret)}
            {renderInsight("flame-outline", "LE MUST", real_talk?.le_must || real_talk?.must_eat)}
            {renderInsight("musical-notes-outline", "LE SON", real_talk?.le_son)}
            {renderInsight("people-outline", "LA FAUNE", real_talk?.la_faune)}

            {ai_insights?.best_moment && renderInsight("time-outline", "MEILLEUR MOMENT", ai_insights.best_moment.text)}
            {ai_insights?.culture_snack && renderInsight("book-outline", "CULTURE SNACK", ai_insights.culture_snack.text)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        paddingHorizontal: 0,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '900',
        color: '#9CA3AF',
        letterSpacing: 1.5,
        marginBottom: 16,
        textTransform: 'uppercase',
    },
    insightCard: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 16,
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    insightContent: {
        flex: 1,
    },
    insightLabel: {
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 0.5,
        marginBottom: 4,
    },
    insightText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#1F2937',
        fontFamily: 'Inter_400Regular',
    },
});
