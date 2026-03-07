import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { useTheme } from '../../design';
import { Ionicons } from '@expo/vector-icons';
import { Place, PricingView } from '../../types/model';
import { PlaceHero } from './PlaceHero';
import { PlaceMetaHeader } from './PlaceMetaHeader';
import { InteractivePriceGauge } from '../common/InteractivePriceGauge';
import { CrabIcon } from '../common/PriceIcons';
import { PlaceDescription } from './PlaceDescription';
import { PlaceActionRow } from './PlaceActionRow';
import { PlaceMetroBlock } from './PlaceMetroBlock';
import { PlaceSocialFeed } from './PlaceSocialFeed';
import { OpeningHoursSection } from './OpeningHoursSection';
import { HappyHourBadge } from './HappyHourBadge';
import { usePlaceDetail } from '../../contexts/PlaceDetailContext';

export const DEFAULT_LAYOUT: SectionType[] = [
  'hero',
  'meta',
  'price_gauge',
  'hours',
  'must_eat',
  'expert_talk',
  'actions',
  'social',
  'description',
  'metro',
];

export type SectionType =
  | 'hero'
  | 'meta'
  | 'price_gauge'
  | 'hours'
  | 'must_eat'
  | 'expert_talk'
  | 'description'
  | 'actions'
  | 'metro'
  | 'social';

interface PlaceSectionProps {
  type: SectionType;
}

// ============================================================
// SUB-COMPONENTS (To respect Rules of Hooks)
// ============================================================

const MetaSection = React.memo(() => {
  const { viewModel, primaryColor } = usePlaceDetail();
  if (!viewModel) return null;

  const meta = viewModel.meta;
  const hasTerrasse = meta.hasTerrasse;
  const hh = meta.happyHour;

  const subtitle = meta.subtitle;

  return (
    <View style={sectionStyles.scrollPadding}>
      <PlaceMetaHeader
        subtitle={subtitle}
        moodLabel={meta.moodLabel}
        moodColor={primaryColor}
        rating={meta.rating}
        ratingCount={meta.ratingCount}
      />
    </View>
  );
});

const PricingSection = React.memo(() => {
  const { theme, isDark } = useTheme();
  const { viewModel, primaryColor } = usePlaceDetail();
  if (!viewModel || !viewModel.pricing) return null;

  const pricingView = viewModel.pricing;

  const pillColor = pricingView.color;
  const pillPercent = pricingView.fill_percent;

  return (
    <View style={sectionStyles.scrollPadding}>
      <InteractivePriceGauge
        pricingView={pricingView}
        activeColor={primaryColor}
        smartTip={pricingView.smart_tip}
        triggerComponent={
          <View
            style={[
              sectionStyles.gaugePill,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <CrabIcon size={18} color={primaryColor} />
            <Text style={[sectionStyles.gaugeLabel, { color: primaryColor }]}>
              {pricingView.card_display.label}
            </Text>
            <View
              style={[
                sectionStyles.gaugeBarContainer,
                { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' },
              ]}
            >
              <View
                style={[
                  sectionStyles.miniBarFill,
                  {
                    width: `${pillPercent}%`,
                    backgroundColor: pillColor,
                  },
                ]}
              />
            </View>
            <Ionicons
              name="chevron-forward"
              size={16}
              color={primaryColor}
              style={{ opacity: 0.4 }}
            />
          </View>
        }
      />
    </View>
  );
});

const HoursSection = React.memo(() => {
  const { theme } = useTheme();
  const { viewModel, isHoursExpanded, toggleHours, primaryColor } = usePlaceDetail();
  if (!viewModel) return null;

  return (
    <View style={sectionStyles.scrollPadding}>
      <OpeningHoursSection
        openingView={viewModel.opening}
        isExpanded={isHoursExpanded}
        onToggle={toggleHours}
        primaryColor={primaryColor}
      />
    </View>
  );
});

const MustEatSection = React.memo(() => null); // Merged into ExpertTalk for industrial clean-up

const ExpertTalkSection = React.memo(() => {
  const { theme, isDark } = useTheme();
  const { viewModel, primaryColor } = usePlaceDetail();
  const [expanded, setExpanded] = useState(false);

  if (!viewModel || !viewModel.expertise) return null;

  const { type, headline, insiderTip, cuisineLabel } = viewModel.expertise;

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  // Split insiderTip into bullet points
  const bullets = insiderTip
    ? insiderTip
      .split(/\n?\u2022\s*/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
    : [];

  const sectionLabel = type === 'drink' ? 'ON BOIT QUOI ICI ?' : 'ON MANGE QUOI ICI ?';
  const cardBg = isDark ? theme.surface : '#FFFFFF';
  const cardBorder = isDark ? theme.border : '#EEEEEE';

  // Preview logic: Show first 1 bullet OR first ~120 chars if single block
  const previewBullets = bullets.slice(0, 1);
  const hiddenBullets = bullets.slice(1);
  const isSingleLongBlock = bullets.length === 1 && bullets[0].length > 150;
  const hasMore = hiddenBullets.length > 0 || isSingleLongBlock;

  return (
    <View style={sectionStyles.scrollPadding}>
      <View
        style={[sectionStyles.expertCard, { backgroundColor: cardBg, borderColor: cardBorder }]}
      >
        {/* Visual Bracket Accent */}
        <View style={[sectionStyles.bracketContainer, { borderColor: primaryColor }]}>
          <View style={sectionStyles.bracketContent}>
            <TouchableOpacity onPress={hasMore ? toggleExpand : undefined} activeOpacity={0.8}>
              {/* HEADER: LABEL + CUISINE + CHEVRON */}
              <View style={sectionStyles.expertHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={[sectionStyles.mockupLabel, { color: primaryColor, opacity: 0.8 }]}>
                    {sectionLabel}
                  </Text>
                  {cuisineLabel && (
                    <Text
                      style={[
                        sectionStyles.cuisineLabel,
                        { color: isDark ? theme.text.muted : '#555', opacity: 0.8 },
                      ]}
                    >
                      {cuisineLabel}
                    </Text>
                  )}
                </View>
                {hasMore && (
                  <Ionicons
                    name={expanded ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={primaryColor}
                    style={{ opacity: 0.6 }}
                  />
                )}
              </View>

              <Text
                style={[
                  sectionStyles.expertHeadline,
                  { color: isDark ? theme.text.primary : '#1A1A1A', marginTop: 4 },
                ]}
              >
                {headline}
              </Text>
            </TouchableOpacity>

            {/* APARTÉ SECTION (Partial or Full) */}
            {bullets.length > 0 && (
              <View>
                <View
                  style={[
                    sectionStyles.expertDivider,
                    { backgroundColor: isDark ? theme.border : '#F0F0F0' },
                  ]}
                />
                <View style={sectionStyles.expertTipsBlock}>
                  <Text
                    style={[
                      sectionStyles.mockupLabel,
                      { color: primaryColor, marginBottom: 8, opacity: 0.8 },
                    ]}
                  >
                    L'APARTÉ DE L'INITIÉ
                  </Text>

                  {/* PREVIEW BULLETS (Always shown) */}
                  <View style={sectionStyles.bulletList}>
                    {previewBullets.map((tip, idx) => (
                      <View key={idx} style={sectionStyles.bulletRow}>
                        {bullets.length > 1 && (
                          <View
                            style={[
                              sectionStyles.bulletDot,
                              { backgroundColor: primaryColor, opacity: 0.8 },
                            ]}
                          />
                        )}
                        <Text
                          style={[
                            sectionStyles.bulletText,
                            { color: isDark ? theme.text.primary : '#222' },
                          ]}
                          numberOfLines={!expanded && isSingleLongBlock ? 3 : undefined}
                        >
                          {tip}
                        </Text>
                      </View>
                    ))}

                    {/* EXPANDED BULLETS */}
                    {expanded &&
                      hiddenBullets.map((tip, idx) => (
                        <View key={idx} style={sectionStyles.bulletRow}>
                          <View
                            style={[
                              sectionStyles.bulletDot,
                              { backgroundColor: primaryColor, opacity: 0.8 },
                            ]}
                          />
                          <Text
                            style={[
                              sectionStyles.bulletText,
                              { color: isDark ? theme.text.primary : '#222' },
                            ]}
                          >
                            {tip}
                          </Text>
                        </View>
                      ))}
                  </View>
                </View>
              </View>
            )}

            {/* READ MORE TOGGLE (Shown when more bullets exist and not expanded) */}
            {!expanded && hasMore && (
              <TouchableOpacity
                onPress={toggleExpand}
                style={sectionStyles.readMoreContainer}
                activeOpacity={0.7}
              >
                <Text style={[sectionStyles.readMoreText, { color: primaryColor }]}>
                  Lire la suite
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
});

// ============================================================
// MAIN DISPATCHER
// ============================================================

export const PlaceSection = React.memo(({ type }: PlaceSectionProps) => {
  const { theme } = useTheme();
  const { viewModel, primaryColor, dominantMood, isLiked, isHoursExpanded, ...handlers } =
    usePlaceDetail();

  if (!viewModel) return null;

  // Zero-Latency: effectively hydrationLevel=2 always.
  // Logic: content is ready if place data exists.
  // REMOVED: enterDelay and FadeInDown (Anti-Twingo Protocol) 🛡️

  // Hero renders instantly and statically
  if (type === 'hero') {
    return <PlaceHero />;
  }

  const renderContent = () => {
    switch (type) {
      case 'meta':
        return <MetaSection />;
      case 'price_gauge':
        return <PricingSection />;
      case 'hours':
        return <HoursSection />;
      case 'must_eat':
        return <MustEatSection />;
      case 'description':
        return (
          <View style={sectionStyles.scrollPadding}>
            <PlaceDescription />
          </View>
        );
      case 'actions':
        return (
          <View style={sectionStyles.scrollPadding}>
            <PlaceActionRow />
          </View>
        );
      case 'metro':
        return (
          <View style={sectionStyles.scrollPadding}>
            <PlaceMetroBlock />
          </View>
        );
      case 'expert_talk':
        return <ExpertTalkSection />;
      case 'social':
        return (
          <View style={[sectionStyles.socialSection, sectionStyles.scrollPadding]}>
            <PlaceSocialFeed />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View>
      {renderContent()}
      {/* 🏎️ FERRARI BOTTOM SPACER: prevent FAB (Y ALLER) from blocking content */}
      {type === 'metro' || (type === 'description' && !viewModel.sections.includes('metro')) ? (
        <View style={{ height: 120 }} />
      ) : null}
    </View>
  );
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
  // --- EXPERT CARD: BRACKET DESIGN ---
  expertCard: {
    borderRadius: 24,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 16,
  },
  bracketContainer: {
    borderLeftWidth: 3,
    paddingLeft: 2, // Slight offset for the bracket look
  },
  bracketContent: {
    padding: 24,
    paddingLeft: 20,
  },
  expertHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  mockupLabel: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    opacity: 0.8, // Intensified following user feedback
  },
  cuisineLabel: {
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'italic',
    marginTop: 2,
  },
  expertHeadline: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    fontStyle: 'italic',
    fontFamily: 'PlayfairDisplay-MediumItalic',
  },
  expertDivider: {
    height: 1,
    marginVertical: 20,
    opacity: 0.5,
  },
  expertTipsBlock: {
    gap: 8,
  },
  bulletList: {
    gap: 12,
    marginTop: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400', // No bold, cleaner look
  },
  socialSection: {
    marginTop: 32,
  },
  socialTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  readMoreContainer: {
    marginTop: 16,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
