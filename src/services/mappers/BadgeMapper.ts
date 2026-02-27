import { Place } from '../../types/model';
import { TimeMapper } from './TimeMapper'; // Reuse HH logic

export class BadgeMapper {
  static isTrue(value: unknown): boolean {
    return (
      value === true ||
      value === 1 ||
      value === 'true' ||
      (typeof value === 'string' && value.trim().length > 0 && value.toLowerCase() !== 'false')
    );
  }

  static extractTags(editorial: Record<string, unknown>): string[] {
    const tags: string[] = [];
    if (this.isTrue(editorial.terrace) || this.isTrue(editorial.terrasse)) tags.push('terrasse');
    if (this.isTrue(editorial.wifi) || this.isTrue(editorial.laptop_friendly))
      tags.push('laptop_friendly');
    if (this.isTrue(editorial.vins_nature)) tags.push('vins_nature');
    if (this.isTrue(editorial.shotgun)) tags.push('shotgun');
    if (this.isTrue(editorial.gratuit_moins_26)) tags.push('gratuit_moins_26');
    if (this.isTrue(editorial.pelouse_autorisee) || this.isTrue(editorial.pelouse))
      tags.push('pelouse_autorisee');
    return tags;
  }

  static mapBadgesView(
    place: Place,
    moodColor: string,
    testDate?: Date,
  ): Array<{ label: string; icon: string; color: string; badge?: string }> {
    const info = place.practical_info;
    if (!info) return [];

    // Dictionary to absolutely guarantee unique badges by label
    const badgeDict = new Map<string, { label: string; icon: string; color: string }>();

    const addBadge = (label: string, icon: string, color: string) => {
      if (!badgeDict.has(label)) {
        badgeDict.set(label, { label, icon, color });
      }
    };

    const statusMap: Record<string, { label: string; icon: string }> = {
      resa_conseillee: { label: 'Résa conseillée', icon: 'calendar-outline' },
      resa_obligatoire: { label: 'Résa obligatoire', icon: 'calendar-outline' },
    };
    if (info.primary_status && statusMap[info.primary_status]) {
      addBadge(
        statusMap[info.primary_status].label,
        statusMap[info.primary_status].icon,
        moodColor,
      );
    }

    const tagMap: Record<string, { label: string; icon: string }> = {
      terrasse: { label: 'Terrasse', icon: 'sunny-outline' },
      pelouse_autorisee: { label: 'Pelouse autorisée', icon: 'leaf-outline' },
      vins_nature: { label: 'Vins Nature', icon: 'wine-outline' },
      laptop_friendly: { label: 'Laptop Friendly', icon: 'laptop-outline' },
      gratuit_moins_26: { label: 'Gratuit < 26 ans', icon: 'gift-outline' },
      shotgun: { label: 'Shotgun', icon: 'flash-outline' },
    };

    info.tags?.forEach((tag) => {
      if (tagMap[tag]) {
        addBadge(tagMap[tag].label, tagMap[tag].icon, moodColor);
      }
    });

    // TimeMapper Happy Hour logic
    const hh = TimeMapper.mapHappyHourView(info.happy_hour, testDate);
    if (hh) {
      addBadge(
        `HH: ${hh.display}`,
        hh.active ? 'flame' : 'time-outline',
        hh.active ? '#ffab60' : '#9CA3AF',
      );
    }

    return Array.from(badgeDict.values());
  }
}
