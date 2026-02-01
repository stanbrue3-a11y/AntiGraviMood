import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Place } from '../../types/model';
import { useTheme, typography as typo } from '../../design';

interface MagazineCardProps {
    place: Place;
    primaryColor: string;
}

export const MagazineCard: React.FC<MagazineCardProps> = ({ place, primaryColor }) => {
    const { isDark } = useTheme();
    const { real_talk, category, subcategory } = place;

    const isBar = category?.toLowerCase().includes('bar') || category?.toLowerCase().includes('club');
    const headerTitle = isBar ? "ON BOIT QUOI ICI ?" : "TYPE DE CUISINE";
    const detailValue = subcategory || (isBar ? "Cocktails & Vibes" : "Cuisine de Saison");

    // L'Aparté de l'Initié Bullets
    const bullets = [
        real_talk?.le_secret,
        real_talk?.le_must || real_talk?.must_eat,
        real_talk?.le_son,
        real_talk?.la_faune
    ].filter(Boolean) as string[];

    return (
        <View style={[styles.container, isDark && styles.containerDark]}>
            <View style={[styles.accentLine, { backgroundColor: primaryColor }]} />

            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: primaryColor }]}>{headerTitle}</Text>
                <Text style={styles.detailValue}>“{detailValue}”</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: primaryColor }]}>L'APARTÉ DE L'INITIÉ</Text>
                <View style={styles.bulletList}>
                    {bullets.length > 0 ? bullets.map((bullet, idx) => (
                        <View key={idx} style={styles.bulletRow}>
                            <View style={[styles.bulletDot, { backgroundColor: primaryColor + '40' }]} />
                            <Text style={styles.bulletText}>{bullet}</Text>
                        </View>
                    )) : (
                        <View style={styles.bulletRow}>
                            <View style={[styles.bulletDot, { backgroundColor: primaryColor + '40' }]} />
                            <Text style={styles.bulletText}>Une pépite parisienne authentique, à découvrir sans plus tarder.</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 24,
        paddingLeft: 28,
        marginVertical: 16,
        position: 'relative',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    containerDark: {
        backgroundColor: '#1C1C1E', // Very deep gray
        shadowOpacity: 0.2,
    },
    accentLine: {
        position: 'absolute',
        left: 0,
        top: 24,
        bottom: 24,
        width: 3,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    section: {
        marginVertical: 4,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: '900',
        letterSpacing: 1.5,
        marginBottom: 8,
        textTransform: 'uppercase',
    },
    detailValue: {
        fontFamily: 'PlayfairDisplay-Italic',
        fontSize: 22,
        color: '#1F2937',
        lineHeight: 28,
        marginBottom: 4,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginVertical: 16,
    },
    bulletList: {
        gap: 12,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    bulletDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginTop: 8,
    },
    bulletText: {
        flex: 1,
        fontSize: 15,
        lineHeight: 22,
        color: '#374151',
        fontWeight: '600',
        fontFamily: 'Inter_600SemiBold',
    },
});
