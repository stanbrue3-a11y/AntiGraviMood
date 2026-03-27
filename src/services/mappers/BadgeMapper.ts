import { Place } from '../../types/model';
import { TimeMapper } from './TimeMapper'; // Reuse HH logic
import { OpeningHours } from '../../lib/timeUtils';

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
      gratuit_moins_26: { label: 'Gratuit < 26 ans', icon: 'gift-outline' },
      shotgun: { label: 'Shotgun', icon: 'flash-outline' },
    };

    info.tags?.forEach((tag) => {
      if (tagMap[tag]) {
        addBadge(tagMap[tag].label, tagMap[tag].icon, moodColor);
      }
    });

    // 🏎️ AUTO-BADGE LOGIC (Standard Industriel 2026)
    const rawInfo = info as any;
    // 1. Feature Detection
    if (this.isTrue(rawInfo.terrace) && !badgeDict.has('Terrasse')) {
      addBadge('Terrasse', 'sunny-outline', moodColor);
    }

    // 2. Late Opening Detection (Critical for Aubrac/Nightlife)
    const hours = rawInfo.opening_hours_raw || (place as any).opening_hours?.standard;
    if (hours && hours !== 'Non renseigné') {
      const ranges = hours.split(/[,\n]/).map((l: string) => {
        const trimmed = l.trim();
        // Smarter extraction: only strip prefix if it's letters + colon (like "Lundi: ")
        const prefixMatch = trimmed.match(/(?:[A-Za-zÀ-ÿ]+\s*:\s*)(.*)/);
        const timePart = prefixMatch ? prefixMatch[1].trim() : trimmed;
        return new OpeningHours(timePart);
      });
      const maxEnd = Math.max(...ranges.map((r: any) => r.end));
      if (maxEnd > 26) { // Strictly after 2:00 AM normalized
        addBadge('Ouvert Tard', 'moon-outline', '#c499ff');
      }
    }

    // 🏆 MICHELIN STARS 2026 (Priority)
    if (place.michelin_stars && place.michelin_stars > 0) {
      addBadge(
        `${place.michelin_stars}★ Michelin`,
        'star',
        moodColor
      );
    }

    // 3. Relevant Subcategories to Badges
    const subMap: Record<string, { label: string; icon: string }> = {
      pepite: { label: 'Pépite', icon: 'star-outline' },
      viande: { label: 'Viande d\'exception', icon: 'restaurant-outline' },
      étoilé: { label: '1★ Michelin', icon: 'star' },
      michelin: { label: '1★ Michelin', icon: 'star' },
    };
    place.subcategories?.forEach(sub => {
      const key = sub.toLowerCase();
      if (subMap[key]) {
        addBadge(subMap[key].label, subMap[key].icon, moodColor);
      }
    });

    // 4. SMART FILTER: [LAPTOP FRIENDLY REMOVED AS PER USER REQUEST]

    // TimeMapper Happy Hour logic (Neutral icon)
    const hh = TimeMapper.mapHappyHourView(info.happy_hour as any, testDate);
    if (hh) {
      addBadge(
        `HH: ${hh.display}`,
        'time-outline', // Dégage la flamme 
        hh.active ? '#ffab60' : '#9CA3AF',
      );
    }

    return Array.from(badgeDict.values());
  }
}
