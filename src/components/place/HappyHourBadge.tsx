import React, { useMemo, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, Easing } from 'react-native-reanimated';
import { Place } from '../../stores';
import { isHappyHourActive } from '../../lib/timeUtils';

interface HappyHourBadgeProps {
    place: Place;
    color: string;
    compact?: boolean;
}

export const HappyHourBadge = ({ place, color, compact = false }: HappyHourBadgeProps) => {
    // 1. Extract Happy Hour Data safely
    const hhRaw = useMemo(() => {
        if (typeof place.practical_info?.happy_hour === 'string') {
            return place.practical_info.happy_hour;
        }
        return null;
    }, [place]);

    const [isActive, setIsActive] = useState(false);
    const scale = useSharedValue(1);

    // 2. Check Time Status & Animation
    useEffect(() => {
        if (!hhRaw) return;
        const active = isHappyHourActive(hhRaw);
        setIsActive(active);

        if (active) {
            scale.value = withRepeat(
                withSequence(
                    withTiming(1.05, { duration: 800, easing: Easing.inOut(Easing.ease) }),
                    withTiming(1, { duration: 800, easing: Easing.inOut(Easing.ease) })
                ),
                -1,
                true
            );
        } else {
            scale.value = 1;
        }
    }, [hhRaw]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    if (!hhRaw) return null;

    // Formatting display - Extract just the time part for display if it's too long
    const formatDisplay = (raw: string) => {
        // If it's a long string like "Jeu-Sam 18h-22h", maybe just show "18h-22h" in compact mode
        // or keep currently logic
        const timeMatch = raw.match(/(\d{1,2}[h:]?\d{0,2})\s?[-–]\s?(\d{1,2}[h:]?\d{0,2})/);
        if (timeMatch) {
            return `${timeMatch[1].replace(':00', 'h')}-${timeMatch[2].replace(':00', 'h')}`;
        }
        return raw.replace(/:00/g, 'h').replace(/[-–]/, '-');
    };

    const displayText = formatDisplay(hhRaw);

    if (isActive) {
        return (
            <Animated.View style={[
                styles.badgeBase,
                animatedStyle,
                { borderColor: color, backgroundColor: color + '15' },
                compact && styles.badgeCompact
            ]}>
                <Ionicons name="flame" size={compact ? 10 : 12} color={color} style={{ marginRight: 4 }} />
                <Text style={[styles.textBase, { color: color, fontSize: compact ? 10 : 11 }]}>Happy Hour {displayText}</Text>
            </Animated.View>
        );
    }

    // Inactive state - simpler, grey
    return (
        <View style={[
            styles.badgeBase,
            { borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' },
            compact && styles.badgeCompact
        ]}>
            <Ionicons name="time-outline" size={compact ? 10 : 12} color="#9CA3AF" style={{ marginRight: 4 }} />
            <Text style={[styles.textBase, { color: '#6B7280', fontSize: compact ? 10 : 11 }]}>HH {displayText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badgeBase: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 100, // Pill shape
        borderWidth: 1,
        alignSelf: 'flex-start', // Prevent taking full width
    },
    badgeCompact: {
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    textBase: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});
