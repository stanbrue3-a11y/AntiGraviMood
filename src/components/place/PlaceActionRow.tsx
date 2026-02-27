import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useTheme } from '../../design';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { SurgicalBadge } from '../common/SurgicalBadge';

import { usePlaceDetail } from '../../contexts/PlaceDetailContext';

// Reusable scale press hook
const useScalePress = (scale = 0.95) => {
  const sv = useSharedValue(1);
  const style = useAnimatedStyle(() => ({
    transform: [{ scale: sv.value }],
  }));
  return {
    style,
    onPressIn: () => {
      sv.value = withSpring(scale, { damping: 15, stiffness: 200 });
    },
    onPressOut: () => {
      sv.value = withSpring(1, { damping: 12, stiffness: 150 });
    },
  };
};

/**
 * PlaceActionRow - Premium Action Buttons 📸🎫
 * Reusable component for Vibe Check and Booking actions.
 */
export const PlaceActionRow = React.memo(() => {
  const { theme } = useTheme();
  const { viewModel, primaryColor, onVibeCheck, onBooking } = usePlaceDetail();

  const vibePress = useScalePress(0.95);
  const bookPress = useScalePress(0.95);
  if (!viewModel) return null;

  // Lobotomy: Consume pre-computed view model 🧠
  const { actions } = viewModel;

  const primaryAction = actions.primary;
  const hasInstagram = actions.hasInstagram;

  return (
    <View>
      <View style={styles.secondaryActionsRow}>
        {hasInstagram && (
          <Pressable
            onPressIn={vibePress.onPressIn}
            onPressOut={vibePress.onPressOut}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              onVibeCheck();
            }}
            style={{ flex: 1 }}
          >
            <Animated.View
              style={[
                styles.secondaryActionBtn,
                {
                  backgroundColor: '#c499ff', // Culturel Primary (Violet)
                  borderWidth: 0,
                },
                vibePress.style,
              ]}
            >
              <Ionicons name="logo-instagram" size={20} color="#FFF" />
              <Text style={[styles.secondaryActionText, { color: '#FFF' }]}>VIBE CHECK</Text>
            </Animated.View>
          </Pressable>
        )}

        {primaryAction && (
          <Pressable
            onPressIn={bookPress.onPressIn}
            onPressOut={bookPress.onPressOut}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              onBooking();
            }}
            style={{ flex: 1.2 }}
          >
            <Animated.View
              style={[styles.primaryActionBtn, { backgroundColor: primaryColor }, bookPress.style]}
            >
              <Ionicons
                name={primaryAction.icon as React.ComponentProps<typeof Ionicons>['name']}
                size={20}
                color="#FFF"
              />
              <Text style={styles.primaryActionText}>{primaryAction.label}</Text>
            </Animated.View>
          </Pressable>
        )}
      </View>

      {/* 🏷️ SURGICAL BADGES ROW (Now below buttons) */}
      <View style={styles.badgesContainer}>
        {actions.badges.map(
          (badge: { label: string; icon: string; color?: string }, index: number) => (
            <SurgicalBadge
              key={index}
              label={badge.label}
              icon={badge.icon as React.ComponentProps<typeof Ionicons>['name']}
              color={badge.color || '#FFF'}
            />
          ),
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  secondaryActionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
    marginBottom: 16,
  },
  secondaryActionBtn: {
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
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 28,
    marginTop: 12,
    gap: 10,
  },
});
