import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Linking, Platform } from 'react-native';
import { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme, moodColors } from '../../design';
import { PriceGauge } from '../common/PriceGauge';
import { usePlacesStore, type Place } from '../../stores';
import { getDominantMood } from '../../lib/moodUtils';

// New Components
import { PlaceHero } from './PlaceHero';
import { PracticalInfoList } from './PracticalInfoList';
import { PlaceSocialFeed } from './PlaceSocialFeed';
import { PlaceRealTalk } from './PlaceRealTalk';
import { PlaceDescription } from './PlaceDescription';

export const PlaceDetailSheetMap = () => {
    const theme = useTheme();
    const snapPoints = useMemo(() => ['85%'], []);
    const isFocused = useIsFocused();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const insets = useSafeAreaInsets();
    const {
        selectedPlaceId,
        sheetMode,
        selectPlace,
        getPlaceById,
        toggleLike,
        likedPlaceIds
    } = usePlacesStore();


    // Derive state from store
    const place = (selectedPlaceId && sheetMode === 'map') ? getPlaceById(selectedPlaceId) : null;

    const isVisible = !!place;

    // Gestion de l'ouverture/fermeture via isVisible
    const [contentReady, setContentReady] = useState(false);

    useEffect(() => {
        if (isVisible && place) {
            // Choreography: Let camera start moving first
            setTimeout(() => {
                bottomSheetRef.current?.snapToIndex(0);
                // Delay heavy feed slightly
                setTimeout(() => setContentReady(true), 300);
            }, 100);
        } else {
            bottomSheetRef.current?.close();
            setContentReady(false);
        }
    }, [isVisible, place]);

    const isLiked = place ? likedPlaceIds?.includes(place.id) : false;

    // Callbacks
    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            selectPlace(null);
        }
    }, [selectPlace]);

    const handleClose = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        bottomSheetRef.current?.close();
    }, []);

    const handleLike = () => {
        if (!place) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        toggleLike(place.id);
    };

    const handleShare = async () => {
        if (!place) return;
        try {
            await Haptics.selectionAsync();
            console.log('Sharing', place.name);
        } catch (error) {
            console.error(error);
        }
    };

    const handleNavigate = () => {
        if (!place) return;
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        const lat = place.location.coordinates.lat;
        const lng = place.location.coordinates.lng;
        const label = encodeURIComponent(place.name);

        const url = Platform.select({
            ios: `maps:0,0?q=${label}@${lat},${lng}`,
            android: `geo:0,0?q=${lat},${lng}(${label})`
        });

        if (url) {
            Linking.openURL(url).catch(err => console.error('An error occurred', err));
        }
    };

    const dominantMood = place ? getDominantMood(place) : 'chill';
    const primaryColor = moodColors[dominantMood]?.primary || '#444';

    if (!isFocused && !isVisible) return null;

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            enableDynamicSizing={false}
            backdropComponent={(props) => (
                <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.5} pressBehavior="close" />
            )}
            backgroundStyle={{ backgroundColor: 'transparent' }}
            handleIndicatorStyle={{ display: 'none' }}
            handleComponent={null}
            style={{ zIndex: 9999, pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <View style={[styles.container, !place && { backgroundColor: 'transparent' }]}>
                {place && (
                    <>
                        {/* 0. Barre d'actions */}
                        <View style={styles.actionHeader} pointerEvents="box-none">
                            <TouchableOpacity
                                style={[styles.headerBtn, styles.glassBtn]}
                                onPress={handleClose}
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            >
                                <Ionicons name="chevron-down" size={24} color="#1F2937" />
                            </TouchableOpacity>
                            <View style={{ flex: 1 }} />
                            <TouchableOpacity style={[styles.headerBtn, styles.glassBtn]} onPress={handleShare}>
                                <Ionicons name="share-outline" size={22} color="#1F2937" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.headerBtn, { marginLeft: 8 }, styles.glassBtn]} onPress={handleLike}>
                                <Ionicons name={isLiked ? "heart" : "heart-outline"} size={22} color={isLiked ? primaryColor : "#1F2937"} />
                            </TouchableOpacity>
                        </View>

                        {/* Contenu Scrollable */}
                        <BottomSheetScrollView
                            contentContainerStyle={{ paddingBottom: 160 }}
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                        >
                            {/* 1. Grande Photo Immersive (Immediate Render) */}
                            <PlaceHero place={place} />

                            {/* 2. Infos & Vibes (Immediate Render for text/icons) */}
                            <View style={styles.detailsContainer}>

                                {/* Row: Mood + Price + Category */}
                                <View style={styles.metaRow}>
                                    <View style={[styles.moodBadge, { backgroundColor: primaryColor + '15' }]}>
                                        <Text style={[styles.moodText, { color: primaryColor }]}>{dominantMood.toUpperCase()}</Text>
                                    </View>
                                    <View style={styles.dividerVertical} />
                                    <PriceGauge level={place.practical_info?.price_range as any || 2} size="md" activeColor={primaryColor} />
                                    <View style={styles.dividerVertical} />
                                    <Text style={[styles.metaText, { color: primaryColor, fontWeight: '700', fontSize: 16 }]}>{place.category}</Text>
                                </View>

                                {/* ✨ REAL TALK (La Faune) */}
                                <PlaceRealTalk place={place} primaryColor={primaryColor} />

                                {/* 📖 HISTOIRE & LIEU (Collapsible) */}
                                <PlaceDescription place={place} primaryColor={primaryColor} />

                                {/* Infos Pratiques */}
                                <PracticalInfoList
                                    place={place}
                                    primaryColor={primaryColor}
                                />

                                {/* 3. Moments Partagés (Delayed to prevent freeze) */}
                                {contentReady ? (
                                    <PlaceSocialFeed place={place} />
                                ) : (
                                    <View style={{ height: 200 }} />
                                )}

                            </View>

                        </BottomSheetScrollView>

                        {/* Floating CTA Button */}
                        <View style={[styles.floatingCtaContainer, { paddingBottom: insets.bottom + 10 }]}>
                            <Pressable
                                style={[styles.ctaBubble, { backgroundColor: primaryColor, shadowColor: primaryColor }]}
                                onPress={handleNavigate}
                            >
                                <Ionicons name="map" size={20} color="#fff" style={{ marginRight: 8 }} />
                                <Text style={[styles.ctaBubbleText, { color: '#fff' }]}>Y ALLER</Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    detailsContainer: {
        padding: 24,
        paddingBottom: 40,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    moodBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    moodText: {
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    dividerVertical: {
        width: 1,
        height: 20,
        backgroundColor: '#eee',
        marginHorizontal: 16,
    },
    actionHeader: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        zIndex: 9999,
        elevation: 10,
    },
    headerBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    glassBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    metaText: {
        color: '#6B7280',
        fontFamily: 'Georgia',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    floatingCtaContainer: {
        position: 'absolute',
        bottom: 90,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 50,
    },
    ctaBubble: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6
    },
    ctaBubbleText: {
        fontSize: 15,
        fontFamily: 'Inter_600SemiBold',
        letterSpacing: 0.5,
        textTransform: 'uppercase'
    },
});

export default PlaceDetailSheetMap;
