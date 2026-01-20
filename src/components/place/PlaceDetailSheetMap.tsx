import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Linking, Platform } from 'react-native';
import { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import * as Sharing from 'expo-sharing';
import { Share } from 'react-native';

// Lazy-loaded dependencies
let captureRef: any = null;
let Sharing: any = null;

import { useTheme, moodColors } from '../../design';
import { usePlacesStore, type Place } from '../../stores';
import { getDominantMood } from '../../lib/moodUtils';
import { InteractivePriceGauge } from '../common/InteractivePriceGauge';

// New Components
import { PlaceHero } from './PlaceHero';
import { PlaceSocialFeed } from './PlaceSocialFeed';
import { PlaceDescription } from './PlaceDescription';
import { PlaceFaune } from './PlaceFaune';
import { ModernPracticalInfo } from './ModernPracticalInfo';
import { PlaceHours } from './PlaceHours';
import { HappyHourBadge } from './HappyHourBadge';
import { StarRating } from '../common/StarRating';
import { ShareCard } from './ShareCard';

export const PlaceDetailSheetMap = () => {
    const theme = useTheme();
    const snapPoints = useMemo(() => ['85%'], []);
    const isFocused = useIsFocused();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const viewShotRef = useRef<any>(null);
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

            // NATIVE SHARING DISABLED TO PREVENT CRASHES ON OLD BUILDS
            const uri = null;

            // 3. Share the file or fallback
            if (uri && await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(uri, {
                    mimeType: 'image/jpeg',
                    dialogTitle: `Partager ${place.name}`,
                    UTI: 'public.jpeg',
                });
            } else {
                // Fallback to text share
                const message = `✨ Découvre ${place.name} sur AntiGraviMood !\n📍 ${place.location.arrondissement}e Arrondissement\n🦀 Mood : ${dominantMood.toUpperCase()}\n\n"Le Secret : ${place.real_talk?.le_secret || 'Une pépite à découvrir'}"`;
                await Share.share({ message });
            }
        } catch (error) {
            console.error('Share Error:', error);
            const message = `✨ Découvre ${place.name} sur AntiGraviMood !\n📍 ${place.location.arrondissement}e Arrondissement\n🦀 Mood : ${dominantMood.toUpperCase()}`;
            await Share.share({ message });
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

                                {/* Row: Mood + Category + Stars */}
                                <View style={styles.metaRow}>
                                    <View style={[styles.moodBadge, { backgroundColor: primaryColor + '15' }]}>
                                        <Text style={[styles.moodText, { color: primaryColor }]}>{dominantMood === 'chill' ? 'CHILL' : dominantMood === 'festif' ? 'FESTIF' : 'CULTUREL'}</Text>
                                    </View>
                                    <Text
                                        style={[styles.metaText, { color: primaryColor, fontWeight: '900', fontSize: 13, letterSpacing: 0.8, marginLeft: 12 }]}
                                        numberOfLines={1}
                                    >
                                        {(() => {
                                            const cats = place.categories || [place.category];
                                            const hasBar = cats.includes('bar');
                                            const hasResto = cats.includes('restaurant');
                                            const hasCafe = cats.includes('café');

                                            let label = '';
                                            if (hasBar && hasResto && hasCafe) {
                                                label = 'BRASSERIE';
                                            } else {
                                                label = cats.slice(0, 1).map(c => c === 'restaurant' ? 'RESTO' : c === 'museum' ? 'MUSÉE' : c.toUpperCase()).join('');
                                            }

                                            return label + `, ${place.location.arrondissement}E`;
                                        })()}
                                    </Text>
                                    {/* Star Rating */}
                                    {place.google_rating && (
                                        <View style={{ marginLeft: 'auto' }}>
                                            <StarRating rating={place.google_rating} color={primaryColor} size={16} ratingsCount={(place as any).google_ratings_count || place.google_user_ratings_total} />
                                        </View>
                                    )}
                                </View>

                                {/* Row: Happy Hour Badge (separate row) */}
                                {place.practical_info?.happy_hour && (
                                    <View style={{ marginBottom: 16 }}>
                                        <HappyHourBadge place={place} color={primaryColor} />
                                    </View>
                                )}

                                {/* PRICE GAUGE - Full width row */}
                                {place.pricing && (
                                    <View style={{ marginBottom: 16 }}>
                                        <InteractivePriceGauge
                                            pricing={place.pricing}
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
                                            categories={place.practical_info.price_info?.items ? place.practical_info.price_info.items.map(cat => ({
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
                                            smartTip={place.practical_info.price_info?.smart_tip}
                                        />
                                        {(place.pricing?.confidence_score ?? 0) >= 90 && (
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, opacity: 0.8 }}>
                                                <Ionicons name="checkmark-circle" size={14} color="#10B981" />
                                                <Text style={{ fontSize: 11, fontWeight: '800', color: '#10B981', marginLeft: 4, letterSpacing: 0.5 }}>
                                                    VÉRIFIÉ • JANV. 2024
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                )}

                                {/* 🕒 HORAIRES */}
                                {/* Inserted between Header and Faune */}
                                <PlaceHours place={place} primaryColor={primaryColor} />

                                {/* 🦊 LA FAUNE */}
                                <PlaceFaune place={place} primaryColor={primaryColor} />

                                {/* 📖 HISTOIRE & LIEU (Collapsible) */}
                                <PlaceDescription place={place} primaryColor={primaryColor} />

                                {/* Infos Pratiques Modernes */}
                                {place.practical_info && <ModernPracticalInfo info={place.practical_info} primaryColor={primaryColor} />}

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

                        {/* Hidden Share Card for Capture */}
                        <View style={styles.hiddenCard} pointerEvents="none">
                            <View ref={viewShotRef}>
                                <ShareCard place={place} />
                            </View>
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
    hiddenCard: {
        position: 'absolute',
        top: -9999,
        left: -9999,
        padding: 20,
        backgroundColor: '#000',
    },
});

export default PlaceDetailSheetMap;
