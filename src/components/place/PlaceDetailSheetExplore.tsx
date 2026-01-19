import React, { useMemo, useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, ActionSheetIOS, ScrollView, Platform } from 'react-native';
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';

import { useTheme, moodColors } from '../../design';
import { PriceGauge } from '../common/PriceGauge'; // Keep this if PriceGauge is still used elsewhere or remove if InteractivePriceGauge replaces it entirely.
import { usePlacesStore, type Place } from '../../stores'; // Original import, will be modified
import { getDominantMood } from '../../lib/moodUtils';

// Unified Components
import { PlaceHero } from './PlaceHero';
import { PlaceSocialFeed } from './PlaceSocialFeed';
import { PlaceDescription } from './PlaceDescription';
import { InteractivePriceGauge } from '../common/InteractivePriceGauge';
import { MagneticPriceSelector } from '../common/MagneticPriceSelector';
import { ModernPracticalInfo } from './ModernPracticalInfo';
import { PlaceHours } from './PlaceHours';
import { PlaceFaune } from './PlaceFaune';
import { HappyHourBadge } from './HappyHourBadge';

export const PlaceDetailSheetExplore = ({ triggerMode = 'explore' }: { triggerMode?: string }) => {
    const { theme, isDark } = useTheme(); // Added isDark here
    const snapPoints = useMemo(() => ['87%'], []);
    const isFocused = useIsFocused();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const insets = useSafeAreaInsets();
    const {
        selectedPlaceId,
        sheetMode,
        selectPlace,
        getPlaceById, // This will be removed as per the new logic
        toggleLike,
        likedPlaceIds,
        places // Added to get all places for useMemo
    } = usePlacesStore();

    // New logic for 'place' derivation
    const place = useMemo(() => {
        if (selectedPlaceId && sheetMode === triggerMode) {
            return places.find(p => p.id === selectedPlaceId);
        }
        return null;
    }, [selectedPlaceId, sheetMode, triggerMode, places]);

    const isVisible = !!place;

    useEffect(() => {
        if (isVisible && place) {
            setTimeout(() => {
                bottomSheetRef.current?.snapToIndex(0);
            }, 50);
        } else {
            bottomSheetRef.current?.close();
        }
    }, [isVisible, place]);

    const isLiked = place ? likedPlaceIds?.includes(place.id) : false;

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

    const router = useRouter();

    const handleNavigate = () => {
        if (!place) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        bottomSheetRef.current?.close();

        // Immediate transition for "Feather Touch" feel
        setTimeout(() => {
            selectPlace(null);
            router.push({
                pathname: '/(tabs)/map',
                params: { placeId: place.id, mode: 'highlight' }
            });
        }, 50);
    };

    const dominantMood = place ? getDominantMood(place) : 'chill';
    const primaryColor = moodColors[dominantMood]?.primary || '#444';

    // If not focused, we don't render the sheet at all to avoid blocking other tabs
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
            <View style={[styles.container, !isVisible && { backgroundColor: 'transparent' }]}>
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

                            {/* 1. Grande Photo Immersive (Unified Component) */}
                            <PlaceHero place={place} />

                            {/* 2. Infos & Vibes */}
                            <View style={styles.detailsContainer}>
                                <Text style={{ fontSize: 24, fontWeight: '800', fontFamily: 'Inter_900Black', color: isDark ? '#FFF' : '#111', lineHeight: 28, marginBottom: 8 }}>
                                    {place.name}
                                </Text>

                                {/* Row: Mood + Category only */}
                                <View style={styles.metaRow}>
                                    <View style={[styles.moodBadge, { backgroundColor: primaryColor + '15' }]}>
                                        <Text style={[styles.moodText, { color: primaryColor }]}>{dominantMood === 'chill' ? 'CHILL' : dominantMood === 'festif' ? 'FESTIF' : 'CULTUREL'}</Text>
                                    </View>
                                    <Text
                                        style={[styles.metaText, { color: primaryColor, fontWeight: '900', fontSize: 13, letterSpacing: 0.8, marginLeft: 12, flexShrink: 1 }]}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {(() => {
                                            const cats = place.categories || [place.category];
                                            const hasBar = cats.includes('bar');
                                            const hasResto = cats.includes('restaurant');
                                            const hasCafe = cats.includes('café');

                                            let label = '';
                                            if (hasBar && hasResto && hasCafe) {
                                                label = 'BRASSERIE → BAR, CAFÉ ET RESTO';
                                            } else {
                                                label = cats.map(c => c === 'restaurant' ? 'RESTO' : c === 'museum' ? 'MUSÉE' : c.toUpperCase()).join(' • ');
                                            }

                                            return label + `  •  ${place.location.arrondissement}E`;
                                        })()}
                                    </Text>
                                    <HappyHourBadge place={place} color={primaryColor} />
                                </View>

                                {/* PRICE GAUGE - Full width row */}
                                {place.practical_info?.price_info && (
                                    <View style={{ marginTop: 4, marginBottom: 16 }}>
                                        <InteractivePriceGauge
                                            arrondissement={place.location.arrondissement}
                                            placeType={(() => {
                                                const cat = (place.category || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                                                if (cat.includes('bouillon')) return 'bouillon';
                                                if (cat.includes('bar-a-vin')) return 'bar-a-vin';
                                                if (cat.includes('cocktail-bar')) return 'cocktail-bar';
                                                if (cat.includes('techno-club')) return 'techno-club';
                                                if (['coffee-shop', 'cafe', 'tea-room', 'bakery'].includes(cat)) return 'cafe';
                                                if (['bar', 'pub', 'biergarten'].includes(cat)) return 'bar';
                                                if (['club'].includes(cat)) return 'club';
                                                if (['hotel'].includes(cat)) return 'hotel';
                                                if (['museum', 'art-gallery', 'cultural-center', 'theatre', 'monument', 'espace-culturel'].includes(cat)) return 'culture';
                                                if (['park', 'garden', 'walk'].includes(cat)) return 'park';
                                                return 'restaurant';
                                            })()}
                                            pricing={place.pricing}
                                            smartTip={place.practical_info?.price_info?.smart_tip}
                                            categories={place.practical_info?.price_info?.items ? place.practical_info.price_info.items.map(cat => ({
                                                icon: cat.category.includes('BOISSON') ? 'wine-outline' :
                                                    cat.category.includes('ENTRÉE') ? 'restaurant-outline' :
                                                        cat.category.includes('PLAT') ? 'flame-outline' :
                                                            cat.category.includes('DESSERT') ? 'ice-cream-outline' : 'star-outline',
                                                title: cat.category,
                                                items: cat.items.map(item => ({
                                                    name: item.name,
                                                    price: item.price
                                                }))
                                            })) : []}
                                            activeColor={primaryColor}
                                        />
                                    </View>
                                )}

                                {/* 🕒 HORAIRES */}
                                {/* Inserted between Header Info and La Faune as requested */}
                                <PlaceHours place={place} primaryColor={primaryColor} />

                                {/* 🦊 LA FAUNE */}
                                <PlaceFaune place={place} primaryColor={primaryColor} />

                                {/* 📖 HISTOIRE & LIEU (Collapsible) */}
                                <PlaceDescription place={place} primaryColor={primaryColor} />
                            </View>

                            {/* Infos Pratiques Modernes */}
                            {place.practical_info && <ModernPracticalInfo info={place.practical_info} primaryColor={primaryColor} />}

                            {/* 4. Social Feed (Moments) */}
                            <PlaceSocialFeed place={place} />

                        </BottomSheetScrollView>

                        {/* 4. Bouton Y ALLER (Floating) */}
                        <View style={[styles.floatingCtaContainer, { paddingBottom: insets.bottom + 10 }]} pointerEvents="box-none">
                            <Pressable
                                style={[styles.ctaBubble, { backgroundColor: primaryColor, shadowColor: primaryColor }]}
                                onPress={handleNavigate}
                            >
                                <Ionicons name="map" size={20} color="#fff" style={{ marginRight: 8 }} />
                                <Text style={[styles.ctaBubbleText, { color: '#fff' }]}>VOIR SUR LA CARTE</Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </View>
        </BottomSheet >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    // Transparent Floating Header
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
    // Details Component Styles
    detailsContainer: { padding: 24, paddingTop: 4, marginTop: -20 },
    metaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 8 },
    dividerVertical: { width: 1, height: 14, backgroundColor: '#E5E7EB', marginHorizontal: 8 },

    moodBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
    moodText: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
    metaText: { color: '#6B7280', fontFamily: 'Georgia', fontSize: 14, textTransform: 'capitalize' },

    // Floating CTA
    floatingCtaContainer: {
        position: 'absolute', bottom: 60, left: 0, right: 0,
        alignItems: 'center',
        zIndex: 50,
    },
    ctaBubble: {
        flexDirection: 'row', alignItems: 'center',
        paddingVertical: 14, paddingHorizontal: 28,
        borderRadius: 100,
        shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 6,
    },
    ctaBubbleText: { fontSize: 15, fontWeight: '700', fontFamily: 'Georgia', letterSpacing: 0.5 },
});

export default PlaceDetailSheetExplore;
