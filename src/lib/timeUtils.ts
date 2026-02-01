/**
 * Time Utilities for MoodMap Paris 🕒
 * Handles "after midnight" ranges (e.g. 18h-02h) and standardized time comparisons.
 */

import { Place } from "../types/model";

/**
 * Normalizes an hour (0-23) to a "linear" time scale where 0-6 are treated as 24-30
 * for easy comparison with evening/night ranges.
 */
export const normalizeHour = (h: number): number => {
    return h < 6 ? h + 24 : h;
};

/**
 * Parses a time string into a float hours value.
 * Supports: "17:30", "17h30", "17h", "17"
 */
export const parseTimeToFloat = (timeStr: string): number => {
    if (!timeStr) return 0;
    const cleaned = timeStr.toLowerCase().replace(/[^0-9:h]/g, '');

    // Split by ':' or 'h'
    const parts = cleaned.split(/[:h]/);
    const h = parseInt(parts[0], 10) || 0;
    const m = parseInt(parts[1], 10) || 0;

    return h + (m / 60);
};

/**
 * Robust OpeningHours Engine 🧠
 */
export class OpeningHours {
    readonly start: number;
    readonly end: number;
    readonly crossesMidnight: boolean;

    constructor(rangeStr: string) {
        const parts = rangeStr.split(/[-–]| à /);
        if (parts.length !== 2) {
            this.start = 0;
            this.end = 0;
            this.crossesMidnight = false;
        } else {
            let s = parseTimeToFloat(parts[0].trim());
            let e = parseTimeToFloat(parts[1].trim());

            // Handle midnight/next day (e.g. 17:00 - 02:00)
            if (e <= s) {
                e += 24;
                this.crossesMidnight = true;
            } else {
                this.crossesMidnight = false;
            }

            this.start = s;
            this.end = e;
        }
    }

    /**
     * Checks if a target hour (normalized or not) is within this range.
     */
    isOpen(targetHour: number): boolean {
        if (this.start === 0 && this.end === 0) return true; // Permissive default

        let h = targetHour;
        // If the target is a "early morning" hour (e.g. 1am), and the range crosses midnight,
        // we should treat the target as 25.
        if (this.crossesMidnight && h < 6) {
            h += 24;
        }

        return h >= this.start && h < this.end;
    }

    /**
     * Checks if this range overlaps with another range.
     * Used for the "Créneau" filter.
     */
    overlaps(otherStart: number, otherEnd: number): boolean {
        if (this.start === 0 && this.end === 0) return true;

        let uStart = otherStart;
        let uEnd = otherEnd;

        // Normalize user range if it crosses midnight
        if (uEnd <= uStart) uEnd += 24;

        // Check intersection of [this.start, this.end] and [uStart, uEnd]
        return Math.max(this.start, uStart) < Math.min(this.end, uEnd);
    }
}

/**
 * Checks if the current time falls within a given range.
 */
export const isTimeInRange = (range: string, targetHour?: number): boolean => {
    const oh = new OpeningHours(range);
    const now = new Date();
    const currentHour = targetHour !== undefined ? targetHour : now.getHours() + (now.getMinutes() / 60);
    return oh.isOpen(currentHour);
};

// Day mapping for French abbreviations
const DAY_MAP: Record<string, number> = {
    'dim': 0, 'lun': 1, 'mar': 2, 'mer': 3, 'jeu': 4, 'ven': 5, 'sam': 6,
    'dimanche': 0, 'lundi': 1, 'mardi': 2, 'mercredi': 3, 'jeudi': 4, 'vendredi': 5, 'samedi': 6
};

/**
 * Enhanced Happy Hour Check that respects Days of the Week.
 */
export const isHappyHourActive = (rawString: string): boolean => {
    if (!rawString || rawString === 'Non' || rawString === 'Faux' || rawString === 'Non renseigné') return false;

    const lower = rawString.toLowerCase();
    const now = new Date();
    const currentDay = now.getDay();

    let isDayActive = false;

    // 1. Check for "Every day" markers
    if (lower.includes('tlj') || lower.includes('7j/7') || lower.includes('tous les jours')) {
        isDayActive = true;
    }
    // 2. Check for day ranges (e.g. "lun-ven")
    else if (/([a-z]{3,})\s?[-–]\s?([a-z]{3,})/.test(lower)) {
        const match = lower.match(/([a-z]{3,})\s?[-–]\s?([a-z]{3,})/);
        if (match) {
            const startDay = DAY_MAP[match[1].substring(0, 3)];
            const endDay = DAY_MAP[match[2].substring(0, 3)];

            if (startDay !== undefined && endDay !== undefined) {
                if (startDay <= endDay) {
                    isDayActive = currentDay >= startDay && currentDay <= endDay;
                } else {
                    isDayActive = currentDay >= startDay || currentDay <= endDay;
                }
            }
        }
    }
    // 3. Check for single day
    else {
        const words = lower.split(/[\s,]+/);
        for (const word of words) {
            const dayNum = DAY_MAP[word.substring(0, 3)];
            if (dayNum === currentDay) {
                isDayActive = true;
                break;
            }
        }
        // If no day mentioned, assume it's a time-only string (implicit TLJ)
        if (!isDayActive && !Object.keys(DAY_MAP).some(d => lower.includes(d.substring(0, 3)))) {
            isDayActive = true;
        }
    }

    if (!isDayActive) return false;

    // 4. Extract and check Time Range
    const timeMatch = lower.match(/(\d{1,2}[h:]?\d{0,2})\s?[-–|à]\s?(\d{1,2}[h:]?\d{0,2})/);
    if (timeMatch) {
        const timeRange = `${timeMatch[1]}-${timeMatch[2]}`;
        return isTimeInRange(timeRange);
    }

    return false;
};

/**
 * Checks if a place is open during a specific user-defined time range.
 */
export const isOpenDuring = (place: Place, range: { start: number; end: number }): boolean => {
    const raw = place.opening_hours?.standard;
    if (!raw || raw === 'Non renseigné') return true;

    const oh = new OpeningHours(raw);
    return oh.overlaps(range.start, range.end);
};
