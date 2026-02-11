/**
 * PlaceDetailSheet — Production v4 🏛️
 * 
 * FINAL PERFORMANCE FIX: Immediate Full Render + Deferred Fetch
 * 
 * User request: "Affiche tout dès le début" but maintain fluidity.
 * 
 * Strategy:
 * 1. Render ALL sections immediately (Hero, Map, Social, etc.) at t=0.
 *    - This removes the "pop-in" effect.
 * 2. Defer DATA FETCHING (`hydratePlace`) until after animation (t=300ms).
 *    - This prevents React State updates during the native spring animation.
 *    - The sheet opens with "cached" data (from the map pin), then updates silently 300ms later.
 * 
 * This treats the animation performance as a "No State Update" zone, rather than a "No Render" zone.
 */
import React, { useMemo, useCallback, useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, UIManager, Linking, Share, LayoutAnimation, InteractionManager } from 'react-native';
import { BottomSheetScrollView, BottomSheetFooter, useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../../design';
import { useUIStore } from '../../stores/uiStore';
import { usePlacesStore } from '../../stores/placesStore';
import { PlaceSection, SectionType } from './PlaceDetailSections';
import { moodColors, type MoodType } from '../../design';

const DEFAULT_LAYOUT: SectionType[] = [
    'hero',
    'meta',
    'price_gauge',
    'hours',
    'description',
    'actions',
    'metro',
    'magazine',
    'social'
];

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const PlaceDetailSheet = () => {
    const insets = useSafeAreaInsets();
    const { theme, isDark } = useTheme();

    // Direct store subscriptions
    const selectedPlaceId = useUIStore(state => state.selectedPlaceId);
    const selectPlace = useUIStore(state => state.selectPlace);
    const places = usePlacesStore(state => state.places);
    const likedPlaceIds = usePlacesStore(state => state.likedPlaceIds);
    const toggleLike = usePlacesStore(state => state.toggleLike);
    const hydratePlace = usePlacesStore(state => state.hydratePlace);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const isSnappingRef = useRef(false);
    const hydrationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isMountedRef = useRef(true);
    const snapPoints = useMemo(() => ['88%'], []);

    // 🚀 FULL THROTTLE: Start at level 2 immediately. 
    // We render everything at t=0. 
    // The protection for animation smoothness is deferring the *fetch*, not the *render*.
    const [hydrationLevel, setHydrationLevel] = useState(2);
    const [isHoursExpanded, setIsHoursExpanded] = useState(false);

    // Derived
    const place = useMemo(
        () => selectedPlaceId ? places.find(p => p.id === selectedPlaceId) ?? null : null,
        [selectedPlaceId, places]
    );
    const isLiked = place ? likedPlaceIds.includes(place.id) : false;
    const dominantMood: MoodType = (place?.dominant_mood || 'chill') as MoodType;
    const primaryColor = moodColors[dominantMood]?.primary || theme.text.primary;

    const animationConfigs = useBottomSheetSpringConfigs({
        damping: 35,
        stiffness: 90,
        mass: 1.2,
        overshootClamping: true,
    });

    // ============================================================
    // CORE EFFECT: Snap open IMMEDIATELY with full content
    // ============================================================
    useEffect(() => {
        if (!selectedPlaceId) {
            bottomSheetRef.current?.close();
            setIsHoursExpanded(false);
            return;
        }

        // Guard: prevent handleSheetChanges from clearing during snap
        isSnappingRef.current = true;

        // Ensure full content capability immediately
        setHydrationLevel(2);

        // Snap open
        const snapTimer = setTimeout(() => {
            if (bottomSheetRef.current) {
                bottomSheetRef.current.snapToIndex(0);
            }
        }, 50);

        return () => {
            clearTimeout(snapTimer);
            if (hydrationTimeoutRef.current) clearTimeout(hydrationTimeoutRef.current);
            isSnappingRef.current = false;
            // Note: We don't set isMountedRef here because this effect runs on ID change, not unmount. 
            // We need a separate mount effect for isMountedRef strictly speaking, or just use the component cleanup.
        };
    }, [selectedPlaceId]);

    // MOUNT TRACKING
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
            if (hydrationTimeoutRef.current) clearTimeout(hydrationTimeoutRef.current);
        };
    }, []);

    // ============================================================
    // onChange: Only trigger data fetch AFTER animation
    // ============================================================
    const handleSheetChanges = useCallback((index: number) => {
        if (index >= 0) {
            // Animation completed
            isSnappingRef.current = false;

            // 💤 LAZY FETCH: Only request new data from DB/Network/Cache AFTER the spring settles.
            // This ensures NO STATE UPDATES happen during the 400ms transition.
            // 💤 LAZY FETCH: Only request new data from DB/Network/Cache AFTER the spring settles.
            // This ensures NO STATE UPDATES happen during the 400ms transition.
            const currentId = useUIStore.getState().selectedPlaceId;
            if (currentId) {
                // CANCELABLE TIMEOUT: Prevent race condition if user closes sheet quickly
                if (hydrationTimeoutRef.current) clearTimeout(hydrationTimeoutRef.current);

                hydrationTimeoutRef.current = setTimeout(() => {
                    // Double check if we are still on the same place
                    const activeId = useUIStore.getState().selectedPlaceId;
                    if (activeId === currentId && isMountedRef.current) {
                        hydratePlace(currentId);
                    }
                }, 400);
            }
        }
        if (index === -1 && !isSnappingRef.current) {
            // User manually closed
            selectPlace(null, 'map');
        }
    }, [selectPlace, hydratePlace]);

    // ============================================================
    // HANDLERS
    // ============================================================
    const handleClose = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        bottomSheetRef.current?.close();
    }, []);

    const handleLike = useCallback(() => {
        if (!place) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        toggleLike(place.id);
    }, [place, toggleLike]);

    const handleShare = useCallback(async () => {
        if (!place) return;
        try {
            await Haptics.selectionAsync();
            const message = `✨ Découvre ${place.name} sur AntiGraviMood !`;
            await Share.share({ message });
        } catch (error) {
            console.error('Share Error:', error);
        }
    }, [place]);

    const handleVibeCheck = useCallback(() => {
        if (!place || !place.media.instagram_handle) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        const handle = place.media.instagram_handle.replace('@', '');
        const url = `instagram://user?username=${handle}`;
        const webUrl = `https://instagram.com/${handle}`;
        Linking.canOpenURL(url).then(supported => {
            if (supported) Linking.openURL(url);
            else Linking.openURL(webUrl);
        });
    }, [place]);

    const handleBooking = useCallback(() => {
        if (!place) return;
        const url = place.practical_info?.main_action?.url;
        if (!url) return;
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Linking.openURL(url);
    }, [place]);

    const handleNavigate = useCallback(() => {
        if (!place) return;
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        const { lat, lng } = place.location.coordinates;
        const label = encodeURIComponent(place.name);
        const url = Platform.select({
            ios: `maps:0,0?q=${label}@${lat},${lng}`,
            android: `geo:0,0?q=${lat},${lng}(${label})`
        });
        if (url) Linking.openURL(url);
    }, [place]);

    const toggleHours = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsHoursExpanded(prev => !prev);
    }, []);

    const handlers = useMemo(() => ({
        handleClose,
        handleSheetChanges,
        handleLike,
        handleShare,
        handleVibeCheck,
        handleBooking,
        handleNavigate,
        toggleHours
    }), [handleClose, handleSheetChanges, handleLike, handleShare, handleVibeCheck, handleBooking, handleNavigate, toggleHours]);

    // Footer CTA
    const renderFooter = useCallback(
        (props: any) => (
            <BottomSheetFooter {...props} bottomInset={insets.bottom + 65}>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={[styles.ctaBubble, { backgroundColor: primaryColor }]}
                        onPress={handleNavigate}
                        activeOpacity={0.8}
                    >
                        <Ionicons name="map-outline" size={22} color="#FFF" style={{ marginRight: 10 }} />
                        <Text style={styles.ctaText}>Y ALLER</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetFooter>
        ),
        [primaryColor, insets.bottom, handleNavigate]
    );

    // ============================================================
    // RENDER
    // ============================================================
    // Simple check: do we have a place? If yes, show everything. 
    const showContent = !!place;

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            backgroundStyle={{
                backgroundColor: theme.background,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
            }}
            handleComponent={() => (
                <View style={styles.handleWrapper}>
                    <View style={[styles.handleIndicator, { backgroundColor: primaryColor }]} />
                </View>
            )}
            footerComponent={showContent ? renderFooter : undefined}
            animationConfigs={animationConfigs}
        >
            {showContent ? (
                <BottomSheetScrollView
                    contentContainerStyle={{ paddingBottom: insets.bottom + 120 }}
                    showsVerticalScrollIndicator={false}
                >
                    {DEFAULT_LAYOUT.map((sectionType) => (
                        <PlaceSection
                            key={sectionType}
                            type={sectionType}
                            place={place}
                            primaryColor={primaryColor}
                            dominantMood={dominantMood}
                            isLiked={isLiked}
                            isHoursExpanded={isHoursExpanded}
                            hydrationLevel={hydrationLevel} // Always 2 now
                            isReady={true}
                            handlers={handlers}
                        />
                    ))}
                </BottomSheetScrollView>
            ) : (
                <View style={{ flex: 1 }} />
            )}
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    handleWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        backgroundColor: 'transparent',
    },
    handleIndicator: {
        width: 36,
        height: 4,
        borderRadius: 2,
    },
    footerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ctaBubble: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 30,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        minWidth: 160,
    },
    ctaText: {
        color: '#FFF',
        fontFamily: 'Inter_900Black',
        fontSize: 14,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});
