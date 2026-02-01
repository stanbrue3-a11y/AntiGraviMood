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


export type SectionType =
    | 'hero'
    | 'meta'
    | 'price_gauge'
    | 'hours'
    | 'description'
    | 'actions'
    | 'metro'
    | 'magazine'
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
        // Hero is always present (has internal handoff)
        if (type === 'hero') return true;

        // Stage 1: Meta Headers (Mounts Level 1)
        if (hydrationLevel >= 1 && (type === 'meta' || type === 'actions' || type === 'price_gauge' || type === 'description' || type === 'hours' || type === 'metro')) return true;

        // Stage 2: Heavy Content (Mounts Level 2)
        if (hydrationLevel >= 2 && (type === 'social' || type === 'magazine')) return true;

        return false;
    }, [type, hydrationLevel]);

    if (!isReadyForSection) {
        // 👻 GHOST FLIGHT: In phase 0 (the actual flight), we render NOTHING below the hero.
        // This keeps the JS thread dead silent and ensures 60 FPS.
        if (hydrationLevel === 0) return null;

        return (
            <View style={sectionStyles.scrollPadding}>
                <Skeleton height={type === 'meta' ? 80 : 40} borderRadius={12} style={{ marginVertical: 8 }} />
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
            return (
                <View key="price_gauge" style={sectionStyles.scrollPadding}>
                    <InteractivePriceGauge
                        pricing={place.pricing}
                        activeColor={primaryColor}
                        minimal={true}
                        triggerComponent={
                            <View style={[sectionStyles.gaugePill, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                                <CrabIcon size={18} color={primaryColor} />
                                <Text style={[sectionStyles.gaugeLabel, { color: primaryColor }]}>
                                    {place.pricing?.budget_avg !== undefined
                                        ? (place.pricing.budget_avg <= 7 ? 'C\'est les Pinces' : 'Un peu de Pince')
                                        : 'Barre des Pinces'}
                                </Text>
                                <View style={[sectionStyles.gaugeBarContainer, { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }]}>
                                    <View style={[sectionStyles.miniBarFill, {
                                        width: `${100 - (place.pricing ? (place.pricing.budget_avg / 50 * 100) : 50)}%`,
                                        backgroundColor: primaryColor
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
