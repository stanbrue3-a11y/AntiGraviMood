import { Place } from '../../types/model';
import { OpeningHours, isHappyHourActive } from '../../lib/timeUtils';
import { PlaceMapper } from '../PlaceMapper';
import { palette } from '../../design';
// It receives parsed data or raw strings?
// PlaceMapper validates. TimeMapper maps.

export class TimeMapper {
  static mapOpeningView(
    hoursJson: string | null,
    place: Place,
    testDate?: Date,
  ): {
    state: 'open' | 'closed' | 'closing_soon';
    label: string;
    color: string;
    time_display: string;
    details?: string[];
  } {
    let parsedHours: { display?: string; standard?: string; detailed?: string } = {};
    try {
      parsedHours = hoursJson ? JSON.parse(hoursJson) : {};
    } catch (e) { }

    const display =
      parsedHours?.display?.replace('Tlj: ', 'TOUS LES JOURS : ') || 'Horaires non confirmés';
    const standard = parsedHours?.standard;

    let state: 'open' | 'closed' | 'closing_soon' = 'closed';
    let label = 'Fermé';
    let color: string = palette.dark[500];
    let timeDisplay = '';

    if (standard && standard !== 'Non renseigné') {
      // Split by comma OR newline to handle multi-line blocks correctly
      const lines = standard.split(/[,\n]/).map((s) => s.trim()).filter(Boolean);

      // Extract time ranges, removing potential day prefixes (e.g. "Lundi: ")
      const rawRanges = lines.map(line => {
        // If the line has words followed by a colon (like "Lundi: 12:00-15:00"), extract the time part
        const match = line.match(/(?:[A-Za-zÀ-ÿ]+\s*:\s*)(.*)/);
        return match ? match[1].trim() : line;
      });

      const ranges = rawRanges.map((r) => new OpeningHours(r));
      const now = testDate || new Date();
      const currentHour = now.getHours() + now.getMinutes() / 60;

      // Find current or next range
      let currentRange: OpeningHours | undefined = ranges.find((r) => r.isOpen(currentHour));

      const formatTime = (f: number) => {
        const hours = Math.floor(f) % 24;
        const mins = Math.round((f - Math.floor(f)) * 60);
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
      };

      if (currentRange) {
        state = 'open';
        label = 'Ouvert';
        color = palette.success;
        timeDisplay = `Ferme à ${formatTime(currentRange.end)}`;

        if (currentRange.isOpen(currentHour + 0.5) === false) {
          state = 'closing_soon';
          label = 'Ferme bientôt';
          color = palette.warning;
        }
      } else {
        // Find next range today
        const nextRange = ranges.find((r) => r.start > currentHour);
        if (nextRange) {
          timeDisplay = `Ouvre à ${formatTime(nextRange.start)}`;
        } else {
          timeDisplay = "Fermé pour aujourd'hui";
        }
      }
    }

    const rawDetails = parsedHours?.detailed?.split('\n') || [];
    const details = rawDetails.map((l) =>
      l.replace(/Tlj\s*:\s*/gi, 'Tous les jours : ').replace(/Tlj\b/gi, 'Tous les jours'),
    );

    return {
      state,
      label,
      color,
      time_display:
        timeDisplay || parsedHours?.display?.replace('Tlj: ', '') || 'Horaires non confirmés',
      details,
    };
  }

  static mapHappyHourView(
    hhRaw: string | boolean | { start: string; end: string } | null | undefined,
    testDate?: Date,
  ): { active: boolean; display: string; label: string } | undefined {
    if (!hhRaw || hhRaw === 'Non' || hhRaw === 'Faux' || hhRaw === 'Non renseigné')
      return undefined;
    const hhString =
      typeof hhRaw === 'string'
        ? hhRaw
        : typeof hhRaw === 'object' && hhRaw !== null && 'start' in hhRaw
          ? `${hhRaw.start}-${hhRaw.end}`
          : String(hhRaw);
    const active = isHappyHourActive(hhRaw, testDate);
    return {
      active,
      display: hhString,
      label: active ? 'En ce moment' : 'Happy Hour',
    };
  }
}
