import React, { useMemo, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, Easing } from 'react-native-reanimated';
import { Place } from '../../stores';
import { isTimeInRange } from '../../lib/timeUtils';

interface HappyHourBadgeProps {
    place: Place;
    color: string;
}

export const HappyHourBadge = ({ place, color }: HappyHourBadgeProps) => {
    // 1. Extract Happy Hour Data safely
    const hhData = useMemo(() => {
        // Option B: Practical Info (Legacy/Fallback)
        if (place.practical_info?.happy_hour) {
            const hh = place.practical_info.happy_hour;
            if (typeof hh === 'string') {
                // Try to clean it: "Tlj 17h-20h" -> "17:00-20:00" or keep "17h-20h" for parser
                // Regex to find "XXh-YYh" or "XX:XX-YY:YY"
                const match = hh.match(/(\d{1,2}[h:]\d{0,2})\s?[-–]\s?(\d{1,2}[h:]\d{0,2})/);
                if (match) {
                    return { raw: `${match[1]}-${match[2]}` };
                }
                return { raw: hh };
            }
            // @ts-ignore
            const { start, end } = hh;
            return { start, end, raw: `${start}-${end}` };
        }
        return null;
    }, [place]);

    const [isActive, setIsActive] = useState(false);
    const scale = useSharedValue(1);

    // 2. Check Time Status & Animation
    useEffect(() => {
        if (!hhData?.raw) return;
        const active = isTimeInRange(hhData.raw);
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
        }
    }, [hhData]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    if (!hhData) return null;

    // Formatting display
    const formatTime = (raw: string) => {
        return raw.replace(/:00/g, 'h').replace(/[-–]/, ' - ');
    };

    if (isActive) {
        return (
            <Animated.View style={[styles.badgeBase, animatedStyle, { borderColor: color, backgroundColor: color + '15' }]}>
                <Ionicons name="flame" size={12} color={color} style={{ marginRight: 4 }} />
                <Text style={[styles.textBase, { color: color }]}>HH {formatTime(hhData.raw)}</Text>
            </Animated.View>
        );
    }

    return (
        <View style={[styles.badgeBase, { borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }]}>
            <Ionicons name="time-outline" size={12} color="#9CA3AF" style={{ marginRight: 4 }} />
            <Text style={[styles.textBase, { color: '#6B7280' }]}>HH {formatTime(hhData.raw)}</Text>
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
    },
    textBase: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});
