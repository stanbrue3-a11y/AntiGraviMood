import React, { useMemo, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Linking, Platform, Share, Dimensions, LayoutAnimation, UIManager, InteractionManager } from 'react-native';
import { BottomSheetScrollView, BottomSheetBackdrop, BottomSheetFooter, useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

import { ThemeProvider, useTheme } from '../../design';
import { useUIStore } from '../../stores/uiStore';
import { InteractivePriceGauge } from '../common/InteractivePriceGauge';
import { CrabIcon } from '../common/PriceIcons';
import { logger } from '../../lib/logger';
import { usePlaceDetails } from '../../hooks/usePlaceDetails';
import { PlaceSection, SectionType } from './PlaceDetailSections';

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

const { width } = Dimensions.get('window');

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * PremiumHandle - THE "CAPOT" 🏛️💎
 * A high-end, blurred handle with a sleek indicator.
 */
const PremiumHandle = () => (
    <View style={styles.handleWrapper}>
        <View style={styles.handleIndicator} />
    </View>
);

/**
 * PlaceDetailSheet - "HAUSSMANNIAN REFACTOR" 🏛️💎
 * Modular, clean architecture with ZERO visual change.
 */
export const PlaceDetailSheet = () => {
    const insets = useSafeAreaInsets();
    const { theme, isDark } = useTheme();
    const selectedPlaceId = useUIStore(state => state.selectedPlaceId);

    const {
        place,
        isLiked,
        isHoursExpanded,
        isReady,
        hydrationLevel,
        primaryColor,
        dominantMood,
        bottomSheetRef,
        handlers
    } = usePlaceDetails(selectedPlaceId);

    const snapPoints = useMemo(() => ['88%'], []);

    // 🏎️ PREMIUM DAMPED SPRING CONFIG
    // Achieves that "Majestic" movement: fast entry, extreme damping at the end.
    const animationConfigs = useBottomSheetSpringConfigs({
        damping: 35,
        stiffness: 90,
        mass: 1.2,
        overshootClamping: true,
    });

    // 📡 TELEMETRY: Track when a place is viewed
    React.useEffect(() => {
        if (selectedPlaceId) {
            logger.trackEvent('place_details_viewed', { placeId: selectedPlaceId });
        }
    }, [selectedPlaceId]);

    const renderFooter = useCallback(
        (props: any) => (
            <BottomSheetFooter {...props} bottomInset={insets.bottom + 65}>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={[styles.ctaBubble, { backgroundColor: primaryColor }]}
                        onPress={() => {
                            if (place) {
                                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                                logger.trackEvent('cta_navigate_clicked', { placeId: place.id });
                                handlers.handleNavigate();
                            }
                        }}
                        activeOpacity={0.8}
                    >
                        <Ionicons name="map-outline" size={22} color="#FFF" style={{ marginRight: 10 }} />
                        <Text style={styles.ctaText}>Y ALLER</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetFooter>
        ),
        [primaryColor, insets.bottom, handlers.handleNavigate]
    );

    if (!place) return null;

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handlers.handleSheetChanges}
            enablePanDownToClose={true}
            handleComponent={() => (
                <View style={styles.handleWrapper}>
                    <View style={[styles.handleIndicator, { backgroundColor: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)' }]} />
                </View>
            )}
            backdropComponent={(props) => (
                <BottomSheetBackdrop
                    {...props}
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                    opacity={0.6}
                    pressBehavior="close"
                />
            )}
            backgroundStyle={[styles.sheetBackground, { backgroundColor: theme.background }]}
            footerComponent={renderFooter}
            enableOverDrag={false}
            activeOffsetY={[-10, 10]}
            animationConfigs={animationConfigs}
        >
            <BottomSheetScrollView
                contentContainerStyle={{ paddingBottom: 160 }}
                showsVerticalScrollIndicator={false}
            >
                {DEFAULT_LAYOUT.map(sectionType => (
                    <PlaceSection
                        key={sectionType}
                        type={sectionType}
                        place={place}
                        primaryColor={primaryColor}
                        dominantMood={dominantMood}
                        isLiked={isLiked}
                        isHoursExpanded={isHoursExpanded}
                        hydrationLevel={hydrationLevel}
                        isReady={isReady}
                        handlers={handlers}
                    />
                ))}
            </BottomSheetScrollView>
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
    sheetBackground: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    footerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    },
    ctaBubble: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 28,
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
});

export default PlaceDetailSheet;
