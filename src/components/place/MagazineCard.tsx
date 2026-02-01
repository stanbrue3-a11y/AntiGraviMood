import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Place } from '../../types/model';

interface MagazineCardProps {
    place: Place;
    primaryColor: string;
}

/**
 * MagazineCard - "L'Aparté de l'Initié" 📸🏛️
 * Implements the exact mockup with the orange left-border curve and premium typography.
 */
export const MagazineCard = React.memo(({ place, primaryColor }: MagazineCardProps) => {
    // Determine the secondary accent (mockup uses a specific peach/orange)
    const accentColor = '#FFAB60';

    const realTalk = place.real_talk;
    if (!realTalk) return null;

    // Focus strictly on 'habitué' level info
    const items = [
        realTalk.le_secret,
        realTalk.le_son,
    ].filter(Boolean);

    if (items.length === 0) return null;

    return (
        <View style={styles.container}>
            {/* Orange Left Indicator Curve */}
            <View style={[styles.borderIndicator, { backgroundColor: accentColor }]} />

            <View style={styles.innerContent}>
                {/* L'Aparté de l'Initié Section - Focus on Habitué Tips */}
                <Text style={[styles.overline, { color: accentColor }]}>L'APARTÉ DE L'INITIÉ</Text>

                <View style={styles.listContainer}>
                    {items.map((item, index) => (
                        <View key={index} style={styles.listItem}>
                            <View style={[styles.bullet, { backgroundColor: accentColor }]} />
                            <Text style={styles.listText}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.03)', // DARK MODE: DISCRETE
        borderRadius: 20,
        paddingLeft: 0,
        overflow: 'hidden',
        marginVertical: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    borderIndicator: {
        position: 'absolute',
        top: 24,
        bottom: 24,
        left: 0,
        width: 3, // SLEEKER
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    innerContent: {
        padding: 24,
    },
    overline: {
        fontFamily: 'Inter_900Black',
        fontSize: 10, // DISCRETE
        letterSpacing: 1.2,
        marginBottom: 8,
        fontWeight: '900',
        opacity: 0.8,
    },
    mainTitle: {
        fontFamily: 'PlayfairDisplay-Italic',
        fontSize: 22, // SLEEKER
        color: '#FFF', // DARK MODE
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.05)',
        marginBottom: 20,
    },
    listContainer: {
        marginTop: 8,
        gap: 12,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
    },
    bullet: {
        width: 4, // DISCRETE
        height: 4,
        borderRadius: 2,
        marginTop: 8,
    },
    listText: {
        flex: 1,
        fontFamily: 'Inter_500Medium',
        fontSize: 14, // DISCRETE
        color: 'rgba(255,255,255,0.7)', // DARK MODE
        lineHeight: 20,
    },
});
