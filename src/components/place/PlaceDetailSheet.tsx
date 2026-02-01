import React, { useMemo, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Linking, Platform, Share, Dimensions, LayoutAnimation, UIManager, InteractionManager } from 'react-native';
import { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

import { useTheme, moodColors, typography as typo, type MoodType } from '../../design';
import { usePlacesStore } from '../../stores/placesStore';
import { useUIStore } from '../../stores/uiStore';
import { InteractivePriceGauge } from '../common/InteractivePriceGauge';
import { MetroBadge } from '../ui/MetroBadge';

// New Magazinesque Components
import { PlaceHero } from './PlaceHero';
import { PlaceSocialFeed } from './PlaceSocialFeed';
import { StarRating } from '../common/StarRating';
import { PlaceHours } from './PlaceHours';
import { CrabIcon } from '../common/PriceIcons';
import { PlaceDescription } from './PlaceDescription';

const { width } = Dimensions.get('window');

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * PlaceDetailSheet - "SILICON VALLEY REDESIGN" 🏛️
 * A premium, magazinesque dark layout matching the user's vision.
 */
export const PlaceDetailSheet = () => {
    const { theme, isDark } = useTheme();
    const snapPoints = useMemo(() => ['88%'], []);
    const isFocused = useIsFocused();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const insets = useSafeAreaInsets();
    const [isHoursExpanded, setIsHoursExpanded] = React.useState(false);

    const selectedPlaceId = useUIStore(state => state.selectedPlaceId);
    const selectPlace = useUIStore(state => state.selectPlace);
    const places = usePlacesStore(state => state.places);
    const likedPlaceIds = usePlacesStore(state => state.likedPlaceIds);
    const toggleLike = usePlacesStore(state => state.toggleLike);
    const hydratePlace = usePlacesStore(state => state.hydratePlace);

    const place = useMemo(() =>
        selectedPlaceId ? places.find(p => p.id === selectedPlaceId) : null
        , [selectedPlaceId, places]);

    const socialSection = useMemo(() => {
        if (!place) return null;
        return (
            <View style={styles.socialSection}>
                <Text style={styles.socialTitle}>Moments Partagés</Text>
                <PlaceSocialFeed place={place} />
            </View>
        );
    }, [place?.id]);

    const isVisible = !!place;

    React.useEffect(() => {
        if (isVisible && place) {
            // Non-blocking hydration to keep the opening animation smooth
            InteractionManager.runAfterInteractions(() => {
                hydratePlace(place.id);
            });
            bottomSheetRef.current?.snapToIndex(0);
        } else {
            bottomSheetRef.current?.close();
            setIsHoursExpanded(false); // Reset expansion on close
        }
    }, [isVisible, place]);

    const isLiked = place ? likedPlaceIds.includes(place.id) : false;

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) selectPlace(null, 'map');
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
            const message = `✨ Découvre ${place.name} sur AntiGraviMood !`;
            await Share.share({ message });
        } catch (error) {
            console.error('Share Error:', error);
        }
    };

    const handleVibeCheck = () => {
        if (!place || !place.media.instagram_handle) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        const handle = place.media.instagram_handle.replace('@', '');
        const url = `instagram://user?username=${handle}`;
        const webUrl = `https://instagram.com/${handle}`;

        Linking.canOpenURL(url).then(supported => {
            if (supported) Linking.openURL(url);
            else Linking.openURL(webUrl);
        });
    };

    const handleBooking = () => {
        if (!place) return;
        const url = place.practical_info?.shotgun_url || place.practical_info?.booking_url;
        if (!url) return;
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Linking.openURL(url);
    };

    const handleCall = () => {
        if (!place?.practical_info?.phone) return;
        Linking.openURL(`tel:${place.practical_info.phone}`);
    };

    const handleNavigate = () => {
        if (!place) return;
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        const { lat, lng } = place.location.coordinates;
        const label = encodeURIComponent(place.name);
        const url = Platform.select({
            ios: `maps:0,0?q=${label}@${lat},${lng}`,
            android: `geo:0,0?q=${lat},${lng}(${label})`
        });
        if (url) Linking.openURL(url);
    };

    const dominantMood = (place?.dominant_mood || 'chill') as MoodType;
    const primaryColor = moodColors[dominantMood]?.primary || theme.text.primary;

    if (!isFocused && !isVisible) return null;

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            handleComponent={null}
            backdropComponent={(props) => (
                <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.6} pressBehavior="close" />
            )}
            backgroundStyle={{
                backgroundColor: '#121212', // DEEP GRAY HAUSSMANNIAN
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32
            }}
        >
            <View style={styles.container}>
                {place && (
                    <>
                        <BottomSheetScrollView
                            contentContainerStyle={{ paddingBottom: 160 }}
                            showsVerticalScrollIndicator={false}
                        >
                            <PlaceHero
                                place={place}
                                onClose={handleClose}
                                onShare={handleShare}
                                onLike={handleLike}
                                isLiked={isLiked}
                                primaryColor={primaryColor}
                            />

                            <View style={styles.scrollPadding}>
                                {/* 1. Meta Row: MOOD | Category, Arr | Rating */}
                                <View style={styles.metaRow}>
                                    <View style={styles.moodBadge}>
                                        <Text style={[styles.moodText, { color: primaryColor }]}>{dominantMood.toUpperCase()}</Text>
                                    </View>

                                    <Text
                                        style={[styles.categoryPath, { color: primaryColor }]}
                                        numberOfLines={1}
                                        adjustsFontSizeToFit
                                        minimumFontScale={0.8}
                                    >
                                        {place.category} • {place.location.arrondissement}e
                                    </Text>

                                    <View style={styles.ratingBox}>
                                        <StarRating
                                            rating={place.google_rating || 0}
                                            size={15}
                                            color={primaryColor}
                                            ratingsCount={place.google_user_ratings_total}
                                        />
                                    </View>
                                </View>

                                {/* 2. Barre des Pinces Pill (Interactive) */}
                                <InteractivePriceGauge
                                    pricing={place.pricing}
                                    activeColor={primaryColor}
                                    minimal={true}
                                    triggerComponent={
                                        <View style={styles.gaugePill}>
                                            <CrabIcon size={18} color={primaryColor} />
                                            <Text style={[styles.gaugeLabel, { color: primaryColor }]}>Barre des Pinces</Text>
                                            <View style={styles.gaugeBarContainer}>
                                                <View style={[styles.miniBarFill, {
                                                    width: `${100 - (place.pricing ? (place.pricing.budget_avg / 50 * 100) : 50)}%`,
                                                    backgroundColor: primaryColor
                                                }]} />
                                            </View>
                                            <Ionicons name="chevron-forward" size={16} color={primaryColor} style={{ opacity: 0.4 }} />
                                        </View>
                                    }
                                />

                                {/* 3. Hours Line (Interactive) */}
                                <View style={{ marginBottom: 24 }}>
                                    <TouchableOpacity
                                        style={[styles.hoursRow, { marginBottom: 0 }]}
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                                            setIsHoursExpanded(!isHoursExpanded);
                                        }}
                                    >
                                        <Ionicons name="time-outline" size={18} color={primaryColor} />
                                        <Text style={[styles.hoursStatus, { color: primaryColor }]}>
                                            {place.opening_hours?.is_open_now ? 'OUVERT' : 'FERMÉ'}
                                        </Text>
                                        <Text
                                            style={styles.hoursValue}
                                            numberOfLines={1}
                                            adjustsFontSizeToFit
                                            minimumFontScale={0.8}
                                        >
                                            • {place.opening_hours?.display?.replace('Tlj: ', '') || '12h-23h'}
                                        </Text>
                                        <Ionicons
                                            name={isHoursExpanded ? "chevron-up" : "chevron-down"}
                                            size={16}
                                            color="rgba(255,255,255,0.3)"
                                            style={{ marginLeft: 'auto' }}
                                        />
                                    </TouchableOpacity>

                                    {isHoursExpanded && place.opening_hours?.detailed && (
                                        <View style={styles.hoursDetails}>
                                            {place.opening_hours.detailed.split('\n').map((line, idx) => (
                                                <View key={idx} style={styles.hoursDetailRow}>
                                                    <Text style={styles.hoursDetailText}>{line}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    )}
                                </View>

                                {/* 4. L'Histoire & Le Lieu */}
                                <PlaceDescription place={place} primaryColor={primaryColor} />

                                {/* 5. Secondary Actions Row (Adaptive) */}
                                <View style={styles.secondaryActionsRow}>
                                    <TouchableOpacity
                                        style={[styles.secondaryActionBtn, { borderColor: primaryColor + '40' }]}
                                        onPress={handleVibeCheck}
                                    >
                                        <Ionicons name="logo-instagram" size={20} color={primaryColor} />
                                        <Text style={[styles.secondaryActionText, { color: primaryColor }]}>VIBE CHECK</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.primaryActionBtn, { backgroundColor: primaryColor }]}
                                        onPress={handleBooking}
                                    >
                                        <Ionicons
                                            name={place.category === 'club' ? 'flash' : place.category === 'museum' || place.category === 'exhibition' ? 'ticket' : 'calendar'}
                                            size={20}
                                            color="#FFF"
                                        />
                                        <Text style={styles.primaryActionText}>
                                            {place.category === 'club' ? 'SHOTGUN' : place.category === 'museum' || place.category === 'exhibition' ? 'BILLETTERIE' : 'RÉSERVER'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* 6. Metro Access Section (Beau Design) */}
                                <View style={styles.metroPremiumBlock}>
                                    <View style={[styles.metroPremiumIconBox, { backgroundColor: primaryColor + '15' }]}>
                                        <Ionicons name="train" size={24} color={primaryColor} />
                                    </View>
                                    <View style={styles.metroPremiumContent}>
                                        <Text style={styles.metroPremiumStation}>{place.location.nearest_metro}</Text>
                                        <View style={styles.metroPremiumMeta}>
                                            <View style={[styles.lineBadge, { backgroundColor: '#FFAB60' }]}>
                                                <Text style={styles.lineText}>{place.location.metro_lines?.[0] || '?'}</Text>
                                            </View>
                                            <Text style={styles.metroPremiumAddress}>{place.location.address.split(',')[0]}</Text>
                                        </View>
                                    </View>
                                </View>

                                {/* 7. SHARED MOMENTS */}
                                {socialSection}
                            </View>
                        </BottomSheetScrollView>

                        {/* 7. FLOATING CTA */}
                        <View style={[styles.floatingCta, { paddingBottom: insets.bottom + 40 }]}>
                            <TouchableOpacity style={[styles.ctaBubble, { backgroundColor: primaryColor }]} onPress={handleNavigate}>
                                <Ionicons name="map-outline" size={22} color="#FFF" style={{ marginRight: 10 }} />
                                <Text style={styles.ctaText}>Y ALLER</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#121212',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        overflow: 'hidden'
    },
    scrollPadding: {
        paddingHorizontal: 20,
        paddingTop: 8,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        gap: 6,
    },
    moodBadge: {
        flexShrink: 0,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.06)',
    },
    moodText: {
        fontSize: 12,
        fontWeight: '900',
        letterSpacing: 1.2,
    },
    categoryPath: {
        flexShrink: 1,
        fontSize: 17,
        color: '#FFF',
        opacity: 0.9,
        fontWeight: '700',
        fontFamily: 'Inter_700Bold',
        marginRight: 6,
    },
    ratingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        flexShrink: 0,
    },
    gaugePill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.04)',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 16,
        marginBottom: 16,
        gap: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    gaugeLabel: {
        fontSize: 14,
        fontWeight: '900',
        color: '#FF9F0A',
        letterSpacing: 0.5,
    },
    gaugeBarContainer: {
        flex: 1,
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 2,
        overflow: 'hidden',
    },
    verifiedRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 8,
    },
    verifiedText: {
        fontSize: 11,
        fontWeight: '900',
        color: '#10B981',
        letterSpacing: 1,
    },
    hoursRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.04)',
        padding: 14,
        borderRadius: 12,
        marginBottom: 24,
        gap: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    hoursStatus: {
        fontSize: 13,
        fontWeight: '900',
    },
    hoursValue: {
        flex: 1,
        fontSize: 13,
        fontWeight: '600',
        color: '#FFF',
        opacity: 0.8,
    },
    hoursDetails: {
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderRadius: 12,
        gap: 6,
    },
    hoursDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hoursDetailText: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.6)',
        fontFamily: 'Inter_400Regular',
    },
    miniBarFill: {
        height: '100%',
        borderRadius: 2,
    },
    socialSection: {
        marginTop: 32,
    },
    socialTitle: {
        fontFamily: 'PlayfairDisplay-Bold',
        fontSize: 24,
        color: '#FFF',
        marginBottom: 20,
    },
    floatingCta: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    ctaBubble: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 32,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 10,
    },
    ctaText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '900',
        letterSpacing: 1.5,
    },
    // New Sections
    secondaryActionsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
        marginBottom: 16,
    },
    secondaryActionBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        gap: 8,
    },
    secondaryActionText: {
        fontSize: 13,
        fontWeight: '900',
        letterSpacing: 1,
    },
    primaryActionBtn: {
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        gap: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    primaryActionText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '900',
        letterSpacing: 1,
    },
    metroPremiumBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 24,
        gap: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
        marginBottom: 8,
    },
    metroPremiumIconBox: {
        width: 52,
        height: 52,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    metroPremiumContent: {
        flex: 1,
        gap: 4,
    },
    metroPremiumStation: {
        fontSize: 22,
        fontWeight: '900',
        color: '#FFF',
        fontFamily: 'Inter_700Bold',
    },
    metroPremiumMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    lineBadge: {
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '900',
    },
    metroPremiumAddress: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.4)',
        fontWeight: '600',
    }
});

export default PlaceDetailSheet;
