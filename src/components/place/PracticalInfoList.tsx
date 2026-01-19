import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Linking, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../stores';

import { useParisParks } from '../../hooks/useParisData';

interface PracticalInfoListProps {
    place: Place;
    primaryColor: string;
}

export const PracticalInfoList = ({ place, primaryColor }: PracticalInfoListProps) => {
    // Data Fetching via TanStack Query
    const { data: openDataStatus } = useParisParks(place.name);

    // Animation for Happy Hour Badge
    const fadeAnim = useRef(new Animated.Value(0.6)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0.6,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [fadeAnim]);



    // Helper to format hours (expand abbreviations)
    const getFormattedHours = (openingHours: any) => {
        if (!openingHours) return null;
        let selected = openingHours.display;
        if (!selected || selected.includes('Non renseigné')) {
            selected = openingHours.standard;
        }
        if (!selected || selected.includes('Non renseigné')) {
            if (openingHours.detailed && !openingHours.detailed.includes('Non renseigné')) {
                return "Horaires variables";
            }
            return "Non renseigné";
        }
        return selected.replace(/Tlj/g, 'Tous les jours').replace(/tlj/g, 'Tous les jours');
    };

    // Capitalize first letter
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    // HAPPY HOUR LOGIC
    const getHappyHourInfo = (info: any) => {
        if (!info) return null;
        const hhValue = info['happy_hour'] || info['Happy_hour'] || info['happyHour'];

        if (!hhValue || typeof hhValue !== 'string') return null;

        // Capture optional days "Tlj", "Lun-Ven" etc before the time
        // Regex: (Days part)? (Time range)
        const regex = /(?:(Tlj|Tous les jours|Lun|Mar|Mer|Jeu|Ven|Sam|Dim|Semaine|Week-end)[^0-9]*)?(\d{1,2}(?:h|:)?(?:\d{2})?\s*[-à]\s*\d{1,2}(?:h|:)?(?:\d{2})?)/i;
        const match = hhValue.match(regex);

        if (match) {
            let days = match[1] ? match[1].trim().replace(/[-:]$/, '') : null;
            const time = match[2];

            // Expand abbreviation
            if (days && days.toLowerCase() === 'tlj') {
                days = 'Tous les jours';
            }

            // Clean display: "Tlj • 17h-19h" -> "Tous les jours • 17h-19h"
            const finalDisplay = days ? `${days} • ${time}` : time;

            return { timeRange: finalDisplay, fullText: hhValue };
        }
        return null;
    };

    const happyHourInfo = getHappyHourInfo(place.practical_info);

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Infos pratiques</Text>
            {/* Dynamic Background Color - Opacity 14 for better visibility */}
            <View style={[styles.card, { backgroundColor: primaryColor + '14' }]}>



                {/* Happy Hour Badge - Top Left (Static Visual Version) */}
                {happyHourInfo && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                        <View style={{
                            backgroundColor: 'rgba(245, 158, 11, 0.15)', // Amber-500 @ 15%
                            borderColor: 'rgba(245, 158, 11, 0.3)',
                            borderWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                            borderRadius: 12,
                        }}>
                            <Ionicons name="beer" size={12} color="#D97706" style={{ marginRight: 6 }} />
                            <Text style={{ color: '#D97706', fontSize: 11, fontWeight: '700', letterSpacing: 0.5 }}>
                                HAPPY HOUR
                            </Text>
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#1a1a1a', marginLeft: 8 }}>
                            {happyHourInfo.timeRange}
                        </Text>
                    </View>
                )}

                {/* Open Data Badge */}
                {openDataStatus?.found && (
                    <View style={styles.openDataBadge}>
                        <Ionicons name="checkmark-circle" size={16} color="#00897B" style={{ marginRight: 6 }} />
                        <Text style={styles.openDataText}>
                            {openDataStatus.statusText} • Paris Open Data
                        </Text>
                    </View>
                )}

                {/* Opening Hours */}
                {place.opening_hours && (
                    <View style={styles.infoRow}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="time-outline" size={20} color={primaryColor} />
                        </View>
                        <View style={styles.textContainer}>
                            <View>
                                <Text style={styles.baseText}>
                                    <Text style={styles.boldLabel}>Horaires : </Text>
                                    <Text style={styles.regularValue}>
                                        {getFormattedHours(place.opening_hours)}
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                )}

                {/* Dynamic Editorial Map */}
                {place.practical_info && (() => {
                    const ignoredKeys = [
                        'price_range', 'lat', 'lng', 'phone', 'website', 'google_maps_url', 'url',
                        'source_url', 'email', 'menu_url', 'booking_url', 'social_media', 'id',
                        'category', 'distance', 'bearing', 'image', 'photos', 'description', 'maps_url',
                        'horaires', 'opening_hours', 'la faune', 'crowd'
                    ];

                    const cats = place.categories || [place.category];
                    const isCultural = cats.some(c => ['museum', 'espace-culturel', 'monument', 'gallery', 'patrimoine'].includes(c));
                    const isNightlife = cats.some(c => ['bar', 'club', 'speakeasy', 'pub'].includes(c));
                    const practicalInfo = place.practical_info as any;

                    const websiteUrl = (practicalInfo['website'] || practicalInfo['url'] || practicalInfo['booking_url'] || practicalInfo['source_url']) as string;
                    const menuUrl = (practicalInfo['menu_url'] || practicalInfo['website']) as string;

                    let items = Object.entries(practicalInfo)
                        .map(([key, value]) => {
                            const lowerKey = key.toLowerCase();
                            if (ignoredKeys.some(k => lowerKey.includes(k))) return null;
                            if (isNightlife) {
                                if (lowerKey.includes('wifi') || lowerKey.includes('work') || lowerKey.includes('calme') || lowerKey.includes('quiet')) return null;
                            }
                            if (typeof value === 'boolean') {
                                if (!value) return null;
                                if (lowerKey.includes('outdoor') || lowerKey.includes('terrasse')) {
                                    return { key, label: 'Extérieur', value: 'Terrasse', icon: 'leaf-outline' };
                                }
                                if (lowerKey.includes('reservation')) return null;
                                if (lowerKey.includes('access')) {
                                    if (isCultural) return null;
                                    return { key, label: 'Accès', value: 'Mobilité réduite', icon: 'body-outline' };
                                }
                                return null;
                            }
                            if (typeof value === 'string') {
                                if (value.length < 3) return null;
                                let iconName: any = 'star-outline';
                                const cleanLabel = capitalize(key.replace(/_/g, ' '));
                                let smartLink = null;
                                let isButton = false;

                                if (lowerKey.includes('menu')) { smartLink = menuUrl; isButton = true; }

                                else if (lowerKey.includes('vibe') || lowerKey.includes('ambiance')) iconName = 'sparkles-outline';
                                else if (lowerKey.includes('musique') || lowerKey.includes('son') || lowerKey.includes('playlist')) iconName = 'musical-notes-outline';
                                else if (lowerKey.includes('entrée') || lowerKey.includes('accès') || lowerKey.includes('facade') || lowerKey.includes('entry')) iconName = 'key-outline';
                                else if (lowerKey.includes('secret') || lowerKey.includes('caché')) iconName = 'eye-off-outline';
                                else if (lowerKey.includes('photo') || lowerKey.includes('instagram')) iconName = 'camera-outline';
                                else if (lowerKey.includes('drink') || lowerKey.includes('cocktail') || lowerKey.includes('verre') || lowerKey.includes('happy hour')) iconName = 'wine-outline';
                                else if (lowerKey.includes('food') || lowerKey.includes('eat') || lowerKey.includes('cuisine') || lowerKey.includes('plat') || lowerKey.includes('brunch')) iconName = 'restaurant-outline';
                                else if (lowerKey.includes('time') || lowerKey.includes('heure') || lowerKey.includes('créneau') || lowerKey.includes('affluence') || lowerKey.includes('hour')) iconName = 'time-outline';
                                else if (lowerKey.includes('tip') || lowerKey.includes('conseil') || lowerKey.includes('astuce') || lowerKey.includes('concept')) iconName = 'bulb-outline';
                                else if (lowerKey.includes('prix') || lowerKey.includes('budget')) iconName = 'wallet-outline';
                                else if (lowerKey.includes('crowd')) iconName = 'people-outline';
                                else if (lowerKey.includes('dress')) iconName = 'shirt-outline';
                                else if (lowerKey.includes('running') || lowerKey.includes('jogging')) iconName = 'walk-outline';
                                else if (lowerKey.includes('sun') || lowerKey.includes('picnic') || lowerKey.includes('parc') || lowerKey.includes('terrasse')) iconName = 'sunny-outline';
                                else if (lowerKey.includes('best')) iconName = 'star-outline';
                                else if (lowerKey.includes('type') || lowerKey.includes('vue') || lowerKey.includes('view') || lowerKey.includes('spot')) iconName = 'eye-outline';

                                return { key, label: cleanLabel, value, icon: iconName, link: smartLink, isButton };
                            }
                            return null;
                        })
                        .filter(item => item !== null);

                    if (isCultural && place.min_stay_time_minutes) {
                        const hours = Math.floor(place.min_stay_time_minutes / 60);
                        const mins = place.min_stay_time_minutes % 60;
                        items.unshift({
                            key: 'duration', label: 'Durée', value: `Environ ${hours > 0 ? `${hours}h${mins > 0 ? mins : ''}` : `${mins} min`}`, icon: 'hourglass-outline'
                        });
                    }

                    if (websiteUrl) {
                        items.unshift({
                            key: 'website_link', label: 'Site du lieu', value: 'Voir le site', icon: 'globe-outline', link: websiteUrl, isButton: true
                        });
                    }

                    const finalItems = items.slice(0, 8);

                    return finalItems.map((item: any) => {
                        // Special Handling for "Button" type items (like Website) to keep the pill look but align cleanly
                        if (item.isButton && item.link) {
                            return (
                                <TouchableOpacity
                                    key={item.key}
                                    style={styles.infoRow}
                                    onPress={() => Linking.openURL(item.link)}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.iconContainer}>
                                        <Ionicons name={item.icon} size={20} color={primaryColor} />
                                    </View>
                                    <View style={[styles.flexRow, { flex: 1 }]}>
                                        <Text style={styles.infoLabelSimple}>{item.label} :</Text>
                                        <View style={styles.buttonPill}>
                                            <Text style={[styles.buttonText, { color: primaryColor }]}>{item.value}</Text>
                                            <Ionicons name="arrow-forward" size={14} color={primaryColor} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }

                        // Standard Text Items - Nested Flow
                        return (
                            <View key={item.key} style={styles.infoRow}>
                                <View style={styles.iconContainer}>
                                    <Ionicons name={item.icon} size={20} color={primaryColor} />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.baseText}>
                                        <Text style={styles.boldLabel}>{item.label} : </Text>
                                        <Text style={styles.regularValue}>{item.value}</Text>
                                    </Text>
                                </View>
                            </View>
                        );
                    });
                })()}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
        paddingHorizontal: 16,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        color: '#1a1a1a',
    },
    card: {
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 16,
    },
    openDataBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0F2F1',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 16,
        alignSelf: 'flex-start'
    },
    openDataText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#00897B',
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'flex-start',
    },
    iconContainer: {
        width: 24,
        marginRight: 10,
        alignItems: 'center',
        paddingTop: 2,
    },
    textContainer: {
        flex: 1,
    },
    baseText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#2C2C2C',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        textAlign: 'left',
    },
    boldLabel: {
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    regularValue: {
        fontWeight: '400',
        color: '#2C2C2C',
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLabelSimple: {
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        fontWeight: 'bold',
        color: '#2C2C2C',
    },

    buttonPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.05)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        marginRight: 4,
    },

    // Happy Hour Badge Styles
    hhBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        marginLeft: 8,
        bottom: 2,
    },
    hhText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }
});
