import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Platform, LayoutAnimation, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../stores';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface PlaceDescriptionProps {
    place: Place;
    primaryColor: string;
}

export const PlaceDescription = ({ place, primaryColor }: PlaceDescriptionProps) => {
    const [expanded, setExpanded] = useState(false);

    // Get description safely
    const description = (place.practical_info as any)?.description || place.description;

    if (!description) return null;

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    // Auto-collapse when opening a new place
    React.useEffect(() => {
        setExpanded(false);
    }, [place.id]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={toggleExpand}
                style={styles.header}
                activeOpacity={0.7}
            >
                <View style={styles.titleRow}>
                    <Ionicons name="book-outline" size={18} color={primaryColor} style={{ marginRight: 8 }} />
                    <Text style={[styles.label, { color: primaryColor }]}>
                        L'HISTOIRE & LE LIEU
                    </Text>
                </View>
                {/* Optional: Chevon could still be nice to indicate interactivity, keeping it */}
                <Ionicons
                    name={expanded ? "chevron-up" : "chevron-down"}
                    size={20}
                    color={primaryColor + '80'}
                />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text
                    style={styles.text}
                    numberOfLines={expanded ? undefined : 3}
                    ellipsizeMode="tail"
                >
                    {description}
                </Text>
            </View>

            {!expanded && (
                <TouchableOpacity onPress={toggleExpand} style={styles.readMoreContainer} activeOpacity={0.7}>
                    <Text style={[styles.readMoreText, { color: primaryColor }]}>
                        Voir plus
                    </Text>
                    <Ionicons name="chevron-down" size={14} color={primaryColor} style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        // Soft Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 13,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
    content: {
        marginTop: 16,
    },
    text: {
        fontSize: 15,
        lineHeight: 24,
        color: '#2C2C2C',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    readMoreContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    readMoreText: {
        fontSize: 14,
        fontWeight: '600',
        textDecorationLine: 'underline',
    }
});
