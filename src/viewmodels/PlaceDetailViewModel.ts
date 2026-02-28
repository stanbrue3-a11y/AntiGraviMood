import { ImageSourcePropType } from 'react-native';
import { Place, PricingView } from '../types/model';
import { getPlaceImages } from '../lib/placeUtils';
import { SectionType } from '../components/place/PlaceDetailSections';
import { MetaMapper } from '../services/mappers/MetaMapper';
import { TimeMapper } from '../services/mappers/TimeMapper';
import { PricingMapper } from '../services/mappers/PricingMapper';
import { BadgeMapper } from '../services/mappers/BadgeMapper';
import { ContextualEngine } from '../services/ContextualEngine';

/**
 * Moteur de Décision des Sections
 * Détermine dynamiquement quelles sections afficher (Ordre de priorité)
 */
const buildLayout = (
  place: Place,
  hasPricing: boolean,
  hasOpening: boolean,
  hasActions: boolean,
): SectionType[] => {
  const layout: SectionType[] = ['hero', 'meta'];

  if (hasPricing) layout.push('price_gauge');
  if (hasOpening) layout.push('hours');

  // On mange quoi ici ? — Unified source: specials OR real_talk
  if (place.specials?.must_eat || place.real_talk?.must_eat) {
    layout.push('must_eat');
  }

  // Expert Talk — before actions so it's high in the decision tunnel
  if (place.real_talk || place.insider_tip) {
    layout.push('expert_talk');
  }

  if (hasActions) layout.push('actions');

  // Social feed - Proof of life
  if (place.media?.instagram_handle || (place.social_preview?.moment_count ?? 0) > 0)
    layout.push('social');

  // Deep content at the bottom
  if (place.description) {
    layout.push('description');
  }

  if (place.location.nearest_metro || (place.location.metro_lines?.length ?? 0) > 0)
    layout.push('metro');

  return layout;
};

/**
 * 🧠 PlaceDetailViewModel
 *
 * L'INTERFACE ABSOLUE DE LA FICHE LIEU
 */
export interface PlaceDetailViewModel {
  id: string;
  sections: SectionType[];
  primaryColor: string;
  isDark: boolean;

  hero: {
    title: string;
    images: (string | ImageSourcePropType)[];
  };

  meta: {
    moodLabel: string;
    rating: number;
    ratingCount: number;
    primaryCategory: string;
    subtitle: string;
    arrondissement: number;
    hasTerrasse: boolean;
    happyHour: { active: boolean; label: string; display: string } | null;
  };

  pricing: PricingView | null;
  opening: any | null;

  expertise: {
    type: 'food' | 'drink';
    headline: string;
    insiderTip?: string;
    leSecret?: string;
    leSon?: string;
    cuisineLabel?: string;
  } | null;

  description: string | null;

  actions: {
    primary?: { label: string; url: string; icon: string };
    hasInstagram: boolean;
    badges: Array<{ label: string; icon: string; color?: string }>;
  };

  metro: {
    nearest?: string;
    lines: Array<string | number>;
    addressShort: string;
  } | null;

  social: {
    momentCount: number;
  } | null;
}

/**
 * MAPPER PUR: Place -> PlaceDetailViewModel
 */
export const mapPlaceToDetailViewModel = (place: Place, activeCategories: string[] = []): PlaceDetailViewModel => {
  const metaView = MetaMapper.mapMetaView(place, activeCategories);
  const actionsView = MetaMapper.mapActionsView(place);
  const happyHourView = TimeMapper.mapHappyHourView(place.practical_info?.happy_hour);
  const openingView = TimeMapper.mapOpeningView(
    place.opening_hours ? JSON.stringify(place.opening_hours) : null,
    place,
  );
  const pricingView = place.pricing ? PricingMapper.mapPricingView(place.pricing, place, undefined, activeCategories) : null;
  const badgesView = BadgeMapper.mapBadgesView(place, metaView.mood_color);

  const hasActions = !!actionsView.primary || !!actionsView.instagram || badgesView.length > 0;
  const sections = buildLayout(place, !!pricingView, !!openingView, hasActions);

  const primaryColor = metaView.mood_color;
  const isDark = metaView.mood_color === 'dark';

  const contextualCat = ContextualEngine.resolveContextualCategory(place, activeCategories);
  const isBarContext = contextualCat === 'bar' || contextualCat === 'club';

  return {
    id: place.id,
    sections,
    primaryColor,
    isDark,
    hero: { title: place.name, images: getPlaceImages(place) },
    meta: {
      moodLabel: metaView.mood_label,
      rating: place.google_rating || 0,
      ratingCount: place.google_user_ratings_total || 0,
      primaryCategory: metaView.category_raw,
      subtitle: metaView.subtitle,
      arrondissement: metaView.arrondissement_raw,
      hasTerrasse: metaView.tags.includes('terrasse'),
      happyHour: happyHourView || null,
    },
    pricing: pricingView,
    opening: openingView,
    expertise: (place.real_talk || place.insider_tip)
      ? {
        type: isBarContext ? 'drink' : 'food',
        headline: place.specials?.expert_catchline || place.specials?.must_eat || 'Expertise & Sélection.',
        insiderTip: place.insider_tip,
        leSecret: place.real_talk?.insider_tip,
        leSon: place.real_talk?.must_eat,
        cuisineLabel: place.practical_info?.cuisine_type || (place.specials?.cuisine || []).join(' • ') || undefined,
      }
      : null,
    description: place.description || null,
    actions: {
      primary: actionsView.primary as any,
      hasInstagram: !!actionsView.instagram,
      badges: badgesView as any,
    },
    metro: place.location.nearest_metro ? {
      nearest: place.location.nearest_metro,
      lines: place.location.metro_lines || [],
      addressShort: place.location.address ? place.location.address.split(',')[0] : 'Adresse',
    } : null,
    social: { momentCount: place.social_preview?.moment_count || 120 },
  };
};
