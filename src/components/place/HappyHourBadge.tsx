import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { PlaceDetailViewModel } from '../../viewmodels/PlaceDetailViewModel';

interface HappyHourBadgeProps {
  happyHour: NonNullable<PlaceDetailViewModel['meta']['happyHour']>;
  color: string;
  compact?: boolean;
}

export const HappyHourBadge = ({ happyHour: hh, color, compact = false }: HappyHourBadgeProps) => {
  const scale = useSharedValue(1);

  // 2. Animation Sync
  useEffect(() => {
    if (hh?.active) {
      scale.value = withRepeat(
        withSequence(
          withTiming(1.05, { duration: 800, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 800, easing: Easing.inOut(Easing.ease) }),
        ),
        -1,
        true,
      );
    } else {
      scale.value = 1;
    }
  }, [hh?.active]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  if (!hh) return null;

  if (hh.active) {
    return (
      <Animated.View
        style={[
          styles.badgeBase,
          animatedStyle,
          { borderColor: color, backgroundColor: color + '15' },
          compact && styles.badgeCompact,
        ]}
      >
        <Ionicons name="flame" size={compact ? 10 : 12} color={color} style={{ marginRight: 4 }} />
        <Text style={[styles.textBase, { color: color, fontSize: compact ? 10 : 11 }]}>
          {hh.label} {hh.display}
        </Text>
      </Animated.View>
    );
  }

  // Inactive state - simpler, grey
  return (
    <View
      style={[
        styles.badgeBase,
        { borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' },
        compact && styles.badgeCompact,
      ]}
    >
      <Ionicons
        name="time-outline"
        size={compact ? 10 : 12}
        color="#9CA3AF"
        style={{ marginRight: 4 }}
      />
      <Text style={[styles.textBase, { color: '#6B7280', fontSize: compact ? 10 : 11 }]}>
        HH {hh.display}
      </Text>
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
