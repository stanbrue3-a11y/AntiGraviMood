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
    const cat = contextualCat === place.category ? (place.subcategories?.[0] || place.category) : contextualCat;
    const displayCategory = cat.charAt(0).toUpperCase() + cat.slice(1).replace('_', ' ');

    return {
      mood_label: mood,
      mood_color: color,
      subtitle: `${displayCategory} • ${place.location.arrondissement}e`,
      tags: place.practical_info?.tags || [],
      category_raw: displayCategory,
      arrondissement_raw: place.location.arrondissement,
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
      const typeCast =
        mainAction.type === 'shotgun' || mainAction.type === 'book' ? mainAction.type : 'site';
      actions.primary = {
        type: typeCast,
        url: mainAction.url,
        label: mainAction.label?.toUpperCase() || 'SITE WEB',
        icon: typeCast === 'shotgun' ? 'flash' : typeCast === 'book' ? 'calendar' : 'globe',
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
