import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { Linking, Platform, Share, LayoutAnimation, InteractionManager } from 'react-native';
import * as Haptics from 'expo-haptics';
import BottomSheet from '@gorhom/bottom-sheet';
import { usePlacesStore } from '../stores/placesStore';
import { useUIStore } from '../stores/uiStore';
import { Place } from '../types/model';
import { moodColors, useTheme, type MoodType } from '../design';

/**
 * usePlaceDetails — Post-Audit Edition 🔬
 * 
 * KEY FIX (C1): The useEffect ONLY depends on `selectedPlaceId`, NOT `place`.
 */
export const usePlaceDetails = (selectedPlaceId: string | null) => {
    const { theme } = useTheme();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [isHoursExpanded, setIsHoursExpanded] = useState(false);

    const [hydrationLevel, setHydrationLevel] = useState(0);
    const [isReady, setIsReady] = useState(false);

    const selectPlace = useUIStore(state => state.selectPlace);
    const places = usePlacesStore(state => state.places);
    const likedPlaceIds = usePlacesStore(state => state.likedPlaceIds);
    const toggleLike = usePlacesStore(state => state.toggleLike);
    const hydratePlace = usePlacesStore(state => state.hydratePlace);

    // Derived place — reactive to store changes for UI rendering
    const place = useMemo(() => {
        return selectedPlaceId ? places.find(p => p.id === selectedPlaceId) : null;
    }, [selectedPlaceId, places]);

    const activeIdRef = useRef<string | null>(null);

    // ============================================================
    // CORE EFFECT: Only fires when selectedPlaceId changes.
    // ============================================================
    useEffect(() => {
        console.log(`🔵 [usePlaceDetails] Effect fired. selectedPlaceId=${selectedPlaceId}`);

        if (!selectedPlaceId) {
            activeIdRef.current = null;
            bottomSheetRef.current?.close();
            setIsHoursExpanded(false);
            setHydrationLevel(0);
            setIsReady(false);
            return;
        }

        // Read place imperatively
        const currentPlace = usePlacesStore.getState().places.find(p => p.id === selectedPlaceId);
        console.log(`🔵 [usePlaceDetails] Place found: ${currentPlace?.name || 'NULL'}`);

        if (!currentPlace) {
            console.warn(`❌ [usePlaceDetails] No place found for ID: ${selectedPlaceId}`);
            return;
        }

        // Reset state for new place
        if (activeIdRef.current !== selectedPlaceId) {
            setHydrationLevel(0);
            setIsReady(false);
            activeIdRef.current = selectedPlaceId;
        }

        // SNAP: Use setTimeout to ensure the BottomSheet ref is ready
        const snapTimeout = setTimeout(() => {
            const hasRef = !!bottomSheetRef.current;
            console.log(`🎯 [usePlaceDetails] SNAP attempt. Ref present: ${hasRef}`);
            if (hasRef) {
                bottomSheetRef.current!.snapToIndex(0);
                console.log(`✅ [usePlaceDetails] snapToIndex(0) called`);
            } else {
                console.error(`❌ [usePlaceDetails] SNAP FAILED — ref is null!`);
            }
        }, 50);

        // Post-animation hydration
        const interactionHandle = InteractionManager.runAfterInteractions(() => {
            setIsReady(true);
            hydratePlace(selectedPlaceId);

            if (currentPlace.description && currentPlace.description.length > 50) {
                setHydrationLevel(2);
                return;
            }

            const t1 = setTimeout(() => setHydrationLevel(1), 150);
            const t2 = setTimeout(() => setHydrationLevel(2), 500);

            return () => { clearTimeout(t1); clearTimeout(t2); };
        });

        return () => {
            clearTimeout(snapTimeout);
            interactionHandle.cancel();
        };
    }, [selectedPlaceId]);

    const isLiked = useMemo(() =>
        place ? likedPlaceIds.includes(place.id) : false
        , [place, likedPlaceIds]);

    const handleClose = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        bottomSheetRef.current?.close();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log(`📊 [usePlaceDetails] Sheet index changed: ${index}`);
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
