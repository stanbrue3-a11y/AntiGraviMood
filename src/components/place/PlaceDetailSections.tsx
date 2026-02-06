import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../design';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';
import { PlaceHero } from './PlaceHero';
import { PlaceMetaHeader } from './PlaceMetaHeader';
import { InteractivePriceGauge } from '../common/InteractivePriceGauge';
import { CrabIcon } from '../common/PriceIcons';
import { PlaceDescription } from './PlaceDescription';
import { PlaceActionRow } from './PlaceActionRow';
import { PlaceMetroBlock } from './PlaceMetroBlock';
import { MagazineCard } from './MagazineCard';
import { PlaceSocialFeed } from './PlaceSocialFeed';
import { OpeningHoursSection } from './OpeningHoursSection';
import { Skeleton } from '../common/Skeleton';
import { CrabCalculator } from '../../lib/CrabCalculator';


export type SectionType =
    | 'hero'
    | 'meta'
    | 'magazine' // Promoted to top!
    | 'price_gauge'
    | 'hours'
    | 'description'
    | 'actions'
    | 'metro'
    | 'social';

interface PlaceSectionProps {
    type: SectionType;
    place: Place;
    primaryColor: string;
    dominantMood?: string;
    isLiked: boolean;
    isHoursExpanded: boolean;
    hydrationLevel: number;
    isReady: boolean;
    handlers: {
        handleClose: () => void;
        handleShare: () => void;
        handleLike: () => void;
        handleVibeCheck: () => void;
        handleBooking: () => void;
        handleNavigate: () => void;
        toggleHours: () => void;
        [key: string]: any;
    };
}

/**
 * PlaceSection - The Registry Component 📑
 * Binding components to Forensic Hydration Levels.
 */
export const PlaceSection = React.memo(({
    type,
    place,
    primaryColor,
    dominantMood,
    isLiked,
    isHoursExpanded,
    hydrationLevel,
    isReady,
    handlers
}: PlaceSectionProps) => {
    const { theme, isDark } = useTheme();

    // ⚡ FORENSIC HYDRATION MAPPING
    const isReadyForSection = React.useMemo(() => {
        // Hero is always present
        if (type === 'hero') return true;

        // Stage 1: Core Content (Mounts Level 1)
        if (hydrationLevel >= 1 && (type === 'meta' || type === 'magazine' || type === 'actions' || type === 'price_gauge' || type === 'description' || type === 'hours' || type === 'metro')) return true;

        // Stage 2: Heavy Content (Mounts Level 2)
        if (hydrationLevel >= 2 && (type === 'social')) return true;

        return false;
    }, [type, hydrationLevel]);

    if (!isReadyForSection) {
        // 👻 GHOST FLIGHT: In phase 0 (the actual flight), we render NOTHING below the hero.
        // This keeps the JS thread dead silent and ensures 60 FPS.
        if (hydrationLevel === 0) return null;

        return (
            <View style={sectionStyles.scrollPadding}>
                {/* 🦕 SQUELETTES ÉLANCÉS : Alignés sur la taille réelle des composants pour éviter le Layout Shift */}
                <Skeleton
                    height={type === 'meta' ? 50 : type === 'magazine' ? 140 : type === 'price_gauge' ? 60 : 40}
                    borderRadius={16}
                    style={{ marginVertical: 12, opacity: 0.6 }}
                />
            </View>
        );
    }

    switch (type) {
        case 'hero':
            return (
                <PlaceHero
                    key="hero"
                    place={place}
                    onClose={handlers.handleClose}
                    onShare={handlers.handleShare}
                    onLike={handlers.handleLike}
                    isLiked={isLiked}
                    primaryColor={primaryColor}
                    isReady={isReady} // Driven by Settled milestone
                />
            );
        case 'meta':
            return (
                <View key="meta" style={sectionStyles.scrollPadding}>
                    <PlaceMetaHeader
                        place={place}
                        primaryColor={primaryColor}
                        dominantMood={dominantMood as any}
                    />
                </View>
            );
        case 'price_gauge':
            // 🔍 DEBUG: Check menu_items presence
            console.log(`🍽️ [PlaceSection] ${place.name} pricing:`, JSON.stringify(place.pricing?.menu_items?.length || 0), 'menu items');

            // 🧠 NUANCE: Detect Cocktail Bar via subcategory if main category is generic 'bar'
            // This triggers the specific Price Logic (Cocktail Priority)
            const effectiveCategory = (place.subcategories || []).includes('bar-cocktail')
                ? 'cocktail-bar'
                : place.category;

            return (
                <View key="price_gauge" style={sectionStyles.scrollPadding}>
                    <InteractivePriceGauge
                        placeType={effectiveCategory as any}
                        pricing={place.pricing}
                        activeColor={primaryColor}
                        minimal={true}
                        triggerComponent={
                            <View style={[sectionStyles.gaugePill, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                                <CrabIcon size={18} color={primaryColor} />
                                <Text style={[sectionStyles.gaugeLabel, { color: primaryColor }]}>
                                    {place.pricing ? CrabCalculator.getMetrics(place.pricing, effectiveCategory).label.toUpperCase() : "CHARGEMENT..."}
                                </Text>
                                <View style={[sectionStyles.gaugeBarContainer, { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }]}>
                                    <View style={[sectionStyles.miniBarFill, {
                                        width: `${place.pricing ? CrabCalculator.getMetrics(place.pricing, effectiveCategory).percent : 50}%`,
                                        backgroundColor: place.pricing ? CrabCalculator.getMetrics(place.pricing, effectiveCategory).color : primaryColor
                                    }]} />
                                </View>
                                <Ionicons name="chevron-forward" size={16} color={primaryColor} style={{ opacity: 0.4 }} />
                            </View>
                        }
                    />
                </View>
            );
        case 'hours':
            return (
                <View key="hours" style={sectionStyles.scrollPadding}>
                    <OpeningHoursSection
                        place={place}
                        primaryColor={primaryColor}
                        isExpanded={isHoursExpanded}
                        onToggle={handlers.toggleHours}
                    />
                </View>
            );
        case 'description':
            return (
                <View key="description" style={sectionStyles.scrollPadding}>
                    <PlaceDescription
                        place={place}
                        primaryColor={primaryColor}
                    />
                </View>
            );
        case 'actions':
            return (
                <View key="actions" style={sectionStyles.scrollPadding}>
                    <PlaceActionRow
                        place={place}
                        primaryColor={primaryColor}
                        onVibeCheck={handlers.handleVibeCheck}
                        onBooking={handlers.handleBooking}
                    />
                </View>
            );
        case 'metro':
            return (
                <View key="metro" style={sectionStyles.scrollPadding}>
                    <PlaceMetroBlock place={place} primaryColor={primaryColor} />
                </View>
            );
        case 'magazine':
            return (
                <View key="magazine" style={sectionStyles.scrollPadding}>
                    <MagazineCard key="magazine" place={place} primaryColor={primaryColor} />
                </View>
            );
        case 'social':
            return (
                <View key="social" style={[sectionStyles.socialSection, sectionStyles.scrollPadding]}>
                    <Text style={[sectionStyles.socialTitle, { color: theme.text.primary }]}>Moments Partagés</Text>
                    <PlaceSocialFeed place={place} />
                </View>
            );
        default:
            return null;
    }
});

const sectionStyles = StyleSheet.create({
    scrollPadding: {
        paddingHorizontal: 20,
        paddingTop: 8,
    },
    gaugePill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 16,
        marginBottom: 16,
        gap: 12,
        borderWidth: 1,
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
        borderRadius: 2,
        overflow: 'hidden',
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
        marginBottom: 20,
    },
});
