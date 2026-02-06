import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useTheme } from '../../design';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface PlaceDescriptionProps {
    place: Place;
    primaryColor: string;
}

export const PlaceDescription = React.memo(({ place, primaryColor }: PlaceDescriptionProps) => {
    const { theme } = useTheme();
    const [expanded, setExpanded] = useState(false);

    // Get description safely (history/story)
    const description = place.description || "";
    const primarySubcategory = place.subcategories?.[0] || "";

    if (!description) return null;

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <TouchableOpacity
                onPress={toggleExpand}
                style={styles.header}
                activeOpacity={0.7}
            >
                <View style={styles.titleRow}>
                    <Ionicons name="book-outline" size={18} color={primaryColor} />
                    <Text style={[styles.label, { color: primaryColor }]}>
                        L'HISTOIRE & LE LIEU
                    </Text>
                </View>
                <Ionicons
                    name={expanded ? "chevron-up" : "chevron-down"}
                    size={20}
                    color={primaryColor + '40'}
                />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text
                    style={[styles.text, { color: theme.text.secondary }]}
                    numberOfLines={expanded ? undefined : 3}
                >
                    {description}
                </Text>
            </View>

            {!expanded && (
                <TouchableOpacity onPress={toggleExpand} style={styles.readMoreContainer} activeOpacity={0.7}>
                    <Text style={[styles.readMoreText, { color: primaryColor }]}>
                        Lire la suite
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 24,
        paddingBottom: 28,
        marginBottom: 24,
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    label: {
        fontSize: 13,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    content: {
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Inter_400Regular',
    },
    readMoreContainer: {
        marginTop: 16,
    },
    readMoreText: {
        fontSize: 14,
        fontWeight: '700',
        textDecorationLine: 'none',
    }
});
