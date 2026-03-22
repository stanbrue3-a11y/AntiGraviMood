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
    details?: { text: string; isToday: boolean }[];
  } {
    let parsedHours: { display?: string; standard?: string; detailed?: string } = {};
    let rawDisplayFallback = '';

    try {
      if (hoursJson) {
        if (hoursJson.trim().startsWith('{')) {
          parsedHours = JSON.parse(hoursJson);
        } else {
          // It's a raw string from Registry/Supabase PracticalInfo
          rawDisplayFallback = hoursJson;
        }
      }
    } catch (e) { 
      rawDisplayFallback = hoursJson || '';
    }

    const display =
      parsedHours?.display?.replace('Tlj: ', 'TOUS LES JOURS : ') || 
      rawDisplayFallback?.replace('Tlj: ', 'TOUS LES JOURS : ') ||
      'Horaires non confirmés';
    
    // Use raw string as standard if we don't have a JSON object
    const standard = parsedHours?.standard || rawDisplayFallback;

    let state: 'open' | 'closed' | 'closing_soon' = 'closed';
    let label = 'Fermé';
    let color: string = palette.dark[500];
    let timeDisplay = '';

    const now = testDate || new Date();
    const currentDayIndex = now.getDay();
    const daysFr = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const todayFr = daysFr[currentDayIndex];
    const todayFrShort = todayFr.substring(0, 3);
    const currentHour = now.getHours() + now.getMinutes() / 60;

    if (standard && standard !== 'Non renseigné') {

      // Split by comma, pipe, or newline
      const allLines = standard.split(/[|,\n]/).map((s) => s.trim()).filter(Boolean);

      // Filter lines: Keep if they mention today OR if the whole string is just a time range (implicit TLJ)
      const todayLines = allLines.filter(line => {
        const lowerLine = line.toLowerCase();
        // If it explicitly mentions another day, skip it
        const otherDays = daysFr.filter(d => d !== todayFr);
        const mentionsOtherDay = otherDays.some(d => lowerLine.includes(d) || lowerLine.includes(d.substring(0,3)));
        
        // It's for today if: explicit mention OR doesn't mention any other day and has times
        return lowerLine.includes(todayFr) || lowerLine.includes(todayFrShort) || !mentionsOtherDay;
      });

      // Extract time ranges from filtered lines
      const rawRanges = todayLines.map(line => {
        const match = line.match(/(?:[A-Za-zÀ-ÿ]+\s*[:]\s*)(.*)/);
        return match ? match[1].trim() : line;
      });

      const ranges = rawRanges.map((r) => new OpeningHours(r));

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

    // DETAILS POPULATION: Handle both JSON-detailed and Raw Fallback split
    let rawDetails: string[] = [];
    if (parsedHours?.detailed) {
      rawDetails = parsedHours.detailed.split('\n');
    } else if (rawDisplayFallback) {
      // Split by pipe (registry standard) or newline
      rawDetails = rawDisplayFallback.split(/[|\n]/).map(s => s.trim()).filter(Boolean);
      // Remove the first line if it's already the 'display' summary (heuristic)
      if (rawDetails.length > 1 && rawDetails[0].toLowerCase().includes('tous les jours')) {
        // keep it anyway for the list
      }
    }

    const details = rawDetails.map((l) => {
      const cleanLine = l.replace(/Tlj\s*:\s*/gi, 'Tous les jours : ').replace(/Tlj\b/gi, 'Tous les jours');
      const lowerLine = cleanLine.toLowerCase();
      const isToday = lowerLine.includes(todayFr) || lowerLine.includes(todayFrShort);
      return { text: cleanLine, isToday };
    });

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
