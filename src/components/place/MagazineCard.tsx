import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../design';
import { Place } from '../../types/model';
import { Ionicons } from '@expo/vector-icons';
import { spacing } from '../../design/tokens/spacing';

interface MagazineCardProps {
    place: Place;
    primaryColor: string;
}

/**
 * Détecte le type de boisson principal du lieu
 */
const getDrinkProfile = (place: Place): { icon: keyof typeof Ionicons.glyphMap; text: string; emoji: string } | null => {
    const subcats = place.subcategories || [];
    const category = place.category;
    const pricing = place.pricing;

    // 🍸 COCKTAIL BARS / SPEAKEASY
    if (subcats.includes('bar-cocktail') || subcats.includes('speakeasy') || subcats.includes('cocktail-bar')) {
        const price = pricing?.cocktail_price;
        return {
            icon: 'wine',
            emoji: '🍸',
            text: price
                ? `Ici on boit des cocktails. Comptez ${price}€ le verre. Les classiques sont impeccables.`
                : `Ici c'est cocktails. Les classiques sont maîtrisés, les signatures valent le détour.`
        };
    }

    // 🍷 BARS À VIN
    if (subcats.includes('bar-a-vin') || subcats.includes('wine-bar')) {
        const price = pricing?.wine_glass;
        return {
            icon: 'wine',
            emoji: '🍷',
            text: price
                ? `On vient pour le vin. Comptez ${price}€ le verre, avec une belle sélection nature.`
                : `C'est un bar à vin. Belle sélection, souvent des pépites nature.`
        };
    }

    // 🍺 BARS CLASSIQUES / PUBS
    if (category === 'bar' && pricing?.pint_price) {
        return {
            icon: 'beer',
            emoji: '🍺',
            text: `Ici ça se boit à la pinte (${pricing.pint_price}€). Ambiance bistrot, on refait le monde.`
        };
    }

    // ☕ CAFÉS
    if (category === 'café' || subcats.includes('coffee-shop')) {
        const price = pricing?.coffee_price;
        return {
            icon: 'cafe',
            emoji: '☕',
            text: price
                ? `Café de qualité (${price.toFixed(1)}€). Parfait pour une pause ou du travail au calme.`
                : `Bon café. L'endroit idéal pour poser son laptop ou prendre un moment.`
        };
    }

    // 🥂 CLUBS
    if (category === 'club' || subcats.includes('techno-club')) {
        return {
            icon: 'sparkles',
            emoji: '🥂',
            text: `On vient danser. À boire : vodka citron, bouteilles pour les tables, eau gratuite au bar.`
        };
    }

    // 🍽️ RESTAURANTS with bar
    if (category === 'restaurant' && pricing?.pint_price) {
        return {
            icon: 'restaurant',
            emoji: '🍷',
            text: `D'abord on mange, mais le bar est sérieux. Pinte à ${pricing.pint_price}€, bonne carte des vins.`
        };
    }

    return null;
};

/**
 * MagazineCard - "L'Aparté de l'Initié" 📸🏛️
 * UPGRADED: With "On boit quoi ici" section
 */
export const MagazineCard = React.memo(({ place, primaryColor }: MagazineCardProps) => {
    const { theme } = useTheme();
    const accentColor = '#FFAB60'; // The iconic orange
    const drinkColor = '#8CCAF7'; // Blue for drinks section

    const realTalk = place.real_talk;
    const insiderTip = place.insider_tip;
    const drinkProfile = getDrinkProfile(place);

    console.log(`🛰️ [MagazineCard] Rendering ${place.name}. Tip exists: ${!!insiderTip}. Drink profile: ${!!drinkProfile}`);

    // Build items with new Surgical priority
    const items: { label: string; text: string; icon: keyof typeof Ionicons.glyphMap }[] = [];

    if (insiderTip) {
        items.push({ label: 'L\'APARTÉ', text: insiderTip, icon: 'key' });
    }

    if (realTalk) {
        if (!insiderTip && realTalk.le_secret) items.push({ label: 'LE SECRET', text: realTalk.le_secret, icon: 'key' });
        if (realTalk.le_son) items.push({ label: 'LE SON', text: realTalk.le_son, icon: 'musical-notes' });
        if (realTalk.le_must) items.push({ label: 'LE MUST', text: realTalk.le_must, icon: 'flame' });
        if (realTalk.must_eat) items.push({ label: 'MUST EAT', text: realTalk.must_eat, icon: 'restaurant' });
    }

    if (items.length === 0 && !drinkProfile) return null;

    return (
        <View style={[styles.container, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={[styles.borderIndicator, { backgroundColor: accentColor }]} />

            <View style={styles.innerContent}>
                {/* L'APARTÉ DE L'INITIÉ */}
                {items.length > 0 && (
                    <>
                        <View style={styles.headerRow}>
                            <Ionicons name="sparkles" size={14} color={accentColor} />
                            <Text style={[styles.overline, { color: accentColor }]}>L'APARTÉ DE L'INITIÉ</Text>
                        </View>

                        {items.map((item, index) => (
                            <View key={index} style={styles.listItem}>
                                <View style={styles.iconBox}>
                                    <Ionicons name={item.icon} size={16} color={accentColor} style={{ opacity: 0.8 }} />
                                </View>
                                <Text style={[styles.listText, { color: theme.text.primary }]}>
                                    {item.text}
                                </Text>
                            </View>
                        ))}
                    </>
                )}

                {/* 🍸 ON BOIT QUOI ICI */}
                {drinkProfile && (
                    <View style={[styles.drinkSection, items.length > 0 && styles.drinkSectionWithMargin]}>
                        <View style={styles.headerRow}>
                            <Text style={styles.drinkEmoji}>{drinkProfile.emoji}</Text>
                            <Text style={[styles.overline, { color: drinkColor }]}>ON BOIT QUOI ICI</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.iconBox}>
                                <Ionicons name={drinkProfile.icon} size={16} color={drinkColor} style={{ opacity: 0.8 }} />
                            </View>
                            <Text style={[styles.listText, { color: theme.text.primary }]}>
                                {drinkProfile.text}
                            </Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        overflow: 'hidden',
        marginVertical: 24,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 2,
    },
    borderIndicator: {
        position: 'absolute',
        top: 24,
        bottom: 24,
        left: 0,
        width: 3,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    innerContent: {
        padding: 24,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 20,
    },
    overline: {
        fontFamily: 'Inter_900Black',
        fontSize: 11,
        letterSpacing: 2,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 14,
        marginBottom: 18,
    },
    iconBox: {
        width: 24,
        alignItems: 'center',
        paddingTop: 2,
    },
    listText: {
        flex: 1,
        fontFamily: 'PlayfairDisplay-Italic', // THE FERRARI TOUCH 🏎️
        fontSize: 16,
        lineHeight: 24,
        fontStyle: 'italic',
    },
    drinkSection: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(140, 202, 247, 0.2)',
        paddingTop: 20,
    },
    drinkSectionWithMargin: {
        marginTop: 8,
    },
    drinkEmoji: {
        fontSize: 14,
    },
});
