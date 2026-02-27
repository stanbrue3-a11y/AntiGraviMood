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

  const getDrinkProfile = () => {
    const subcats = place.subcategories || [];
    const category = place.category;
    const pricing = place.pricing;

    const hhTime = place.practical_info?.happy_hour || pricing?.hh_time;
    const hhContext = hhTime ? ` en Happy Hour (${hhTime})` : ' en Happy Hour';

    const formatPrice = (hhPrice?: number | null, stdPrice?: number | null) => {
      if (hhPrice) return `${hhPrice}€${hhContext}`;
      if (stdPrice) return `${stdPrice}€`;
      return null;
    };

    if (subcats.includes('bar-cocktail') || subcats.includes('speakeasy') || subcats.includes('cocktail-bar')) {
      const priceStr = formatPrice(pricing?.hh_cocktail, pricing?.cocktail_price);
      return {
        icon: 'wine',
        emoji: '🍸',
        text: priceStr ? `Spécialité cocktails. Comptez ${priceStr} le verre.` : `Spécialité cocktails.`,
      };
    }
    if (subcats.includes('bar-a-vin') || subcats.includes('wine-bar')) {
      const priceStr = formatPrice(pricing?.hh_wine, pricing?.wine_glass);
      return {
        icon: 'wine',
        emoji: '🍷',
        text: priceStr ? `Bar à vin. Comptez ${priceStr} le verre.` : `Bar à vin. Belle sélection.`,
      };
    }
    if (category === 'bar' && (pricing?.hh_pint || pricing?.pint_price)) {
      const priceStr = formatPrice(pricing?.hh_pint, pricing?.pint_price);
      return {
        icon: 'beer',
        emoji: '🍺',
        text: `Ici ça se boit à la pinte. Comptez ${priceStr}.`,
      };
    }
    if (category === 'café' || subcats.includes('coffee-shop')) {
      const priceStr = formatPrice(null, pricing?.coffee_price);
      return {
        icon: 'cafe',
        emoji: '☕',
        text: priceStr ? `Café de qualité (${priceStr}).` : `Spot café et travail.`,
      };
    }
    if (category === 'club' || subcats.includes('techno-club')) {
      return {
        icon: 'sparkles',
        emoji: '🥂',
        text: `Clubbing et DJ sets.`,
      };
    }
    if (category === 'restaurant' && (pricing?.hh_pint || pricing?.pint_price)) {
      const priceStr = formatPrice(pricing?.hh_pint, pricing?.pint_price);
      return {
        icon: 'restaurant',
        emoji: '🍷',
        text: `Bonne carte des vins et pinte à ${priceStr}.`,
      };
    }
    return undefined;
  };

  const getEmbellishedCuisine = () => {
    if (place.practical_info?.cuisine_type) return place.practical_info.cuisine_type;
    const types = place.specials?.cuisine || [];
    const subs = place.subcategories || [];
    const mapping: Record<string, string> = {
      Italien: 'Trattoria authentique & produits sourcés',
      Français: 'Cuisine de terroir & Mémoire de quartier',
      Bistro: 'Bistronomie vibrante & assiettes signatures',
      Asiatique: "Saveurs d'Asie & fusion créative",
      Japonais: 'Pépites nipponnes & art du produit',
      'Street Food': 'Street food de haut vol & saveurs brutes',
      Méditerranéen: 'Solaire & saveurs de la Méditerranée',
    };
    const primary = types[0];
    if (primary && mapping[primary]) return mapping[primary];
    if (subs.includes('bouillon')) return 'Bouillon classique & Cuisine de saison';
    if (types.length === 0) return 'Cuisine de quartier & pépites de saison';
    return types.join(' • ');
  };

  const primaryColor = metaView.mood_color;
  const isDark = metaView.mood_color === 'dark';

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
      arrondissement: metaView.arrondissement_raw,
      hasTerrasse: metaView.tags.includes('terrasse'),
      happyHour: happyHourView || null,
    },
    pricing: pricingView,
    opening: openingView,
    expertise: (place.real_talk || place.insider_tip) ? (() => {
      const specials = place.specials;
      const expertCatchline = specials?.expert_catchline;
      const mustEat = specials?.must_eat || place.real_talk?.must_eat;
      const contextualCat = ContextualEngine.resolveContextualCategory(place, activeCategories);
      const isBarContext = contextualCat === 'bar' || contextualCat === 'club';
      const drinkProfile = getDrinkProfile();
      const enrichedCuisine = getEmbellishedCuisine();

      let headline = '';
      if (isBarContext) {
        headline = drinkProfile?.text || expertCatchline || 'Une sélection pointue et un esprit de niche.';
      } else {
        if (expertCatchline && expertCatchline.length > 5) {
          headline = expertCatchline;
        } else if (mustEat && mustEat.length > 5) {
          headline = mustEat;
        } else {
          const cuisineLine = (specials?.cuisine || []).join(' & ');
          headline = cuisineLine.length > 3 ? `${cuisineLine} & Passion du produit.` : (enrichedCuisine || "Cuisine de terroir & Table d'exception.");
        }
      }

      const showCuisineLabel = !isBarContext && !headline.includes(enrichedCuisine);

      return {
        type: isBarContext ? 'drink' : 'food' as 'food' | 'drink',
        headline,
        insiderTip: place.insider_tip,
        leSecret: place.real_talk?.insider_tip,
        leSon: place.real_talk?.must_eat,
        cuisineLabel: showCuisineLabel ? enrichedCuisine : undefined,
      };
    })() : null,
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
