import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { Linking, Platform, Share, LayoutAnimation, InteractionManager } from 'react-native';
import * as Haptics from 'expo-haptics';
import BottomSheet from '@gorhom/bottom-sheet';
import { usePlacesStore } from '../stores/placesStore';
import { useUIStore } from '../stores/uiStore';
import { Place } from '../types/model';
import { moodColors, useTheme, type MoodType } from '../design';

/**
 * usePlaceDetails - Forensic Edition 🔬🏛️
 * Staggered hydration driven by BottomSheet animation milestones.
 */
export const usePlaceDetails = (selectedPlaceId: string | null) => {
    const { theme } = useTheme();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [isHoursExpanded, setIsHoursExpanded] = useState(false);

    // 🚦 STAGE MACHINE: 
    // 0: Flight (Only Backdrop)
    // 1: Settled (Carousel + Meta)
    // 2: Hydrated (Heavy Content)
    const [hydrationLevel, setHydrationLevel] = useState(0);
    const [isReady, setIsReady] = useState(false);

    const selectPlace = useUIStore(state => state.selectPlace);
    const places = usePlacesStore(state => state.places);
    const likedPlaceIds = usePlacesStore(state => state.likedPlaceIds);
    const toggleLike = usePlacesStore(state => state.toggleLike);
    const hydratePlace = usePlacesStore(state => state.hydratePlace);
    const detailStorage = usePlacesStore(state => state.detailStorage);

    const place = useMemo(() => {
        const basePlace = selectedPlaceId ? places.find(p => p.id === selectedPlaceId) : null;
        if (!basePlace) return null;
        const details = detailStorage[basePlace.id];
        return details ? { ...basePlace, ...details } : basePlace;
    }, [selectedPlaceId, places, detailStorage]);

    const activeIdRef = useRef<string | null>(null);

    useEffect(() => {
        if (selectedPlaceId && place) {
            // Stage 0: START FLIGHT
            // Important: We DON'T reset hydrationLevel here if it's already > 0 for the SAME place
            // to prevent the "disappearing" glitch.
            if (activeIdRef.current !== selectedPlaceId) {
                setHydrationLevel(0);
                setIsReady(false);
                activeIdRef.current = selectedPlaceId;
            }

            // Trigger animation with surgical precision
            const snapId = requestAnimationFrame(() => {
                bottomSheetRef.current?.snapToIndex(0);
            });

            // POST-ANIMATION SEQUENCE
            const interactionHandle = InteractionManager.runAfterInteractions(() => {
                // Animation finished - we are settled.
                setIsReady(true);

                // Hydrate details in background
                hydratePlace(selectedPlaceId);

                // Stage 1: Meta & Core (增加到 200ms 为了让处理器降温)
                const t1 = setTimeout(() => {
                    setHydrationLevel(1);
                }, 200);

                // Stage 2: Heavy Content (增加到 800ms)
                const t2 = setTimeout(() => {
                    setHydrationLevel(2);
                }, 800);

                return () => { clearTimeout(t1); clearTimeout(t2); };
            });

            return () => {
                cancelAnimationFrame(snapId);
                interactionHandle.cancel();
            };
        } else if (!selectedPlaceId) {
            activeIdRef.current = null;
            bottomSheetRef.current?.close();
            setIsHoursExpanded(false);
            setHydrationLevel(0);
            setIsReady(false);
        }
    }, [selectedPlaceId, place, hydratePlace]);

    const isLiked = useMemo(() =>
        place ? likedPlaceIds.includes(place.id) : false
        , [place, likedPlaceIds]);

    const handleClose = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        bottomSheetRef.current?.close();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) selectPlace(null, 'map');
    }, [selectPlace]);

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
        const url = place.practical_info?.shotgun_url || place.practical_info?.booking_url;
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

    const dominantMood = (place?.dominant_mood || 'chill') as MoodType;
    const primaryColor = moodColors[dominantMood]?.primary || theme.text.primary;

    const handlers = useMemo(() => ({
        handleClose,
        handleSheetChanges,
        handleLike,
        handleShare,
        handleVibeCheck,
        handleBooking,
        handleNavigate,
        toggleHours
    }), [
        handleClose,
        handleSheetChanges,
        handleLike,
        handleShare,
        handleVibeCheck,
        handleBooking,
        handleNavigate,
        toggleHours
    ]);

    return {
        place,
        isLiked,
        isHoursExpanded,
        isReady,
        hydrationLevel,
        primaryColor,
        dominantMood,
        bottomSheetRef,
        handlers
    };
};
