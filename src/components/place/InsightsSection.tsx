import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../design';
import { spacing } from '../../design/tokens/spacing';

interface Insight {
    text: string;
    icon?: string;
    tag?: string;
}

interface VivantInsightsProps {
    insights: {
        best_moment?: Insight;
        social_vibe?: Insight;
        culture_snack?: Insight;
        vivant_tip?: Insight;
    };
}

const InsightCard = ({ title, data, iconName, color, isDark }: { title: string, data: Insight, iconName: keyof typeof Ionicons.glyphMap, color: string, isDark: boolean }) => {
    const { theme } = useTheme();
    if (!data) return null;

    // Adaptive styles
    const bgStyle = { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' };
    const borderStyle = { borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' };

    return (
        <View style={[styles.cardContainer, bgStyle, borderStyle]}>
            <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
                <Ionicons name={iconName} size={20} color={color} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.cardTitle, { color: theme.text.secondary }]}>{title}</Text>
                <Text style={[styles.cardText, { color: theme.text.primary }]}>{data.text}</Text>
            </View>
        </View>
    );
};

export const InsightsSection: React.FC<VivantInsightsProps> = ({ insights }) => {
    const { theme, isDark } = useTheme();
    if (!insights) return null;

    return (
        <View style={styles.container}>
            <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>L'Oeil du Vibe</Text>

            <View style={styles.grid}>
                {insights.best_moment && (
                    <InsightCard
                        title="Le Moment"
                        data={insights.best_moment}
                        iconName="time"
                        color="#FF9500"
                        isDark={isDark}
                    />
                )}
                {insights.social_vibe && (
                    <InsightCard
                        title="Vibe Check"
                        data={insights.social_vibe}
                        iconName="flash"
                        color="#FF2D55"
                        isDark={isDark}
                    />
                )}
                {insights.culture_snack && (
                    <InsightCard
                        title="Culture Snack"
                        data={insights.culture_snack}
                        iconName="book"
                        color="#5856D6"
                        isDark={isDark}
                    />
                )}
                {insights.vivant_tip && (
                    <InsightCard
                        title="Conseil Vivant"
                        data={insights.vivant_tip}
                        iconName="star"
                        color="#34C759"
                        isDark={isDark}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: spacing[6],
        paddingHorizontal: spacing[2],
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: spacing[4],
        marginLeft: 4,
    },
    grid: {
        gap: spacing[2],
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Center vertically
        borderRadius: 16,
        padding: spacing[4],
        borderWidth: 1,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing[4],
    },
    textContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    cardText: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20,
    }
});
