import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useTheme } from '../../design';
import { Ionicons } from '@expo/vector-icons';
import { PlaceDetailViewModel } from '../../viewmodels/PlaceDetailViewModel';

interface OpeningHoursSectionProps {
  openingView: PlaceDetailViewModel['opening'];
  isExpanded: boolean;
  onToggle: () => void;
  primaryColor: string;
}

export const OpeningHoursSection = React.memo(
  ({ openingView, isExpanded, onToggle, primaryColor }: OpeningHoursSectionProps) => {
    const { theme, isDark } = useTheme();

    const chevronRotation = useSharedValue(isExpanded ? 1 : 0);

    React.useEffect(() => {
      chevronRotation.value = withTiming(isExpanded ? 1 : 0, {
        duration: 200,
        easing: Easing.out(Easing.quad),
      });
    }, [isExpanded]);

    const chevronStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${chevronRotation.value * 90}deg` }],
    }));

    // Safety fallback
    const view = openingView || {
      state: 'closed',
      label: 'Fermé',
      color: theme.text.muted,
      time_display: 'Horaires non confirmés',
      details: [],
    };

    const hasDetails = view.details && view.details.length > 0;

    return (
      <View style={styles.container}>
        <View
          style={[
            styles.cardWrapper,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.headerRow}
            activeOpacity={0.7}
            onPress={hasDetails ? onToggle : undefined}
          >
            {/* Clock Icon */}
            <Ionicons name="time-outline" size={18} color={primaryColor} />

            {/* Main Status Text */}
            <View style={styles.textBlock}>
              <Text style={[styles.mainStatus, { color: theme.text.primary }]}>
                <Text style={{ color: view.color, fontWeight: '500' }}>{view.label}</Text>
                <Text style={{ color: theme.text.muted }}> ⋅ </Text>
                <Text style={{ color: theme.text.secondary }}>{view.time_display}</Text>
              </Text>
            </View>

            {/* Chevron */}
            {hasDetails && (
              <Animated.View style={chevronStyle}>
                <Ionicons name="chevron-forward" size={16} color={primaryColor} />
              </Animated.View>
            )}
          </TouchableOpacity>

          {/* Expanded details — Cohesive with the card */}
          {isExpanded && hasDetails && (
            <View style={[styles.detailsPanel, { borderTopColor: theme.border }]}>
              {view.details
                .filter((d: any) => d.text.trim().length > 0)
                .map((detail: any, idx: number) => {
                  const line = detail.text;
                  const colonIdx = line.indexOf(':');
                  const day = colonIdx > -1 ? line.slice(0, colonIdx).trim() : line;
                  const hours = colonIdx > -1 ? line.slice(colonIdx + 1).trim() : '';

                  return (
                    <View key={idx} style={styles.detailRow}>
                      <Text 
                        style={[
                          styles.detailDay, 
                          { color: detail.isToday ? theme.text.primary : theme.text.secondary }
                        ]}
                      >
                        {day}
                      </Text>
                      <Text 
                        style={[
                          styles.detailHours, 
                          { color: detail.isToday ? theme.text.primary : theme.text.secondary }
                        ]}
                      >
                        {hours || '-'}
                      </Text>
                    </View>
                  );
                })}
            </View>
          )}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  cardWrapper: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  textBlock: {
    flex: 1,
  },
  mainStatus: {
    fontSize: 13,
    letterSpacing: -0.1,
  },
  detailsPanel: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 12,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  detailDay: {
    fontSize: 14,
    fontWeight: '400',
    width: 110,
    textTransform: 'capitalize',
  },
  detailHours: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
    flex: 1,
    lineHeight: 20,
  },
});
