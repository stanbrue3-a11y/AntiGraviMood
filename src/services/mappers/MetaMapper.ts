import { Place } from '../../types/model';
import { IconService } from '../IconService';
import { ContextualEngine } from '../ContextualEngine';

const MOOD_PALETTE: Record<string, string> = {
  chill: '#8ccaf7',
  festif: '#ffab60',
  culturel: '#c499ff',
};

export class MetaMapper {
  static mapMetaView(place: Place, activeCategories: string[] = []): {
    mood_label: string;
    mood_color: string;
    subtitle: string;
    tags: string[];
    category_raw: string;
    arrondissement_raw: number;
  } {
    const mood = ContextualEngine.resolveMood(place, activeCategories);
    const color = MOOD_PALETTE[mood] || MOOD_PALETTE.chill;

    const contextualCat = ContextualEngine.resolveContextualCategory(place, activeCategories);

    // SMARTER CATEGORY: If primary is generic (restaurant/bar) but we have a more specific subcategory (Brasserie, Bistro, Cocktail Bar)
    let displayCat = contextualCat;
    if (contextualCat === place.category && (place.subcategories || []).length > 0) {
      const topSub = place.subcategories![0];
      // Only override if the subcategory is more "evocative" than the primary
      if (!['restaurant', 'bar', 'café', 'club'].includes(topSub.toLowerCase())) {
        displayCat = topSub;
      }
    }
    const formattedCat = displayCat.charAt(0).toUpperCase() + displayCat.slice(1).replace('_', ' ');

    // ROBUST ARRONDISSEMENT
    let arr = 'Paris';
    const rawArr = place.location.arrondissement;
    if (rawArr) {
      const arrNum = typeof rawArr === 'string' ? parseInt((rawArr as string).slice(-2)) : rawArr;
      if (!isNaN(arrNum)) {
        arr = arrNum === 1 ? '1er' : `${arrNum}e`;
      }
    }

    return {
      mood_label: mood,
      mood_color: color,
      subtitle: `${formattedCat} • ${arr}`,
      tags: place.practical_info?.tags || [],
      category_raw: formattedCat,
      arrondissement_raw: typeof rawArr === 'number' ? rawArr : 75,
    };
  }

  static mapMapView(place: Place): { markerColor: string; icon: string } {
    const mood = (place.dominant_mood || 'chill') as keyof typeof MOOD_PALETTE;
    const iconCategory = IconService.getIconCategory(place);
    return {
      markerColor: MOOD_PALETTE[mood] || MOOD_PALETTE.chill,
      icon: `icon-${iconCategory}-${mood}`,
    };
  }

  static mapActionsView(place: Place): {
    primary?: { type: string; url: string; label: string; icon: string };
    instagram?: { handle: string; url: string };
  } {
    const actions: {
      primary?: { type: string; url: string; label: string; icon: string };
      instagram?: { handle: string; url: string };
    } = {};

    const mainAction = place.practical_info?.main_action;
    if (mainAction) {
      actions.primary = {
        type: mainAction.type,
        url: mainAction.url,
        label: mainAction.label?.toUpperCase() || (mainAction.type === 'book' ? 'RÉSERVER' : mainAction.type === 'shotgun' ? 'SHOTGUN' : 'SITE WEB'),
        icon: mainAction.type === 'shotgun' ? 'flash' : mainAction.type === 'book' ? 'calendar' : 'globe',
      };
    }

    const handle = place.media?.instagram_handle || (place as any).media?.insta_handle;
    if (handle) {
      const cleanHandle = handle.replace('@', '');
      actions.instagram = { handle: cleanHandle, url: `https://instagram.com/${cleanHandle}` };
    }
    return actions;
  }
}
