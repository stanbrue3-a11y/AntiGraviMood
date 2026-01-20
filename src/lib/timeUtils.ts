/**
 * Time Utilities for MoodMap Paris
 * Handles "after midnight" ranges and standardized time comparisons.
 */

/**
 * Normalizes an hour (0-23) to a "linear" time scale where 0-4 are treated as 24-28
 * for easy comparison with evening ranges.
 */
export const normalizeHour = (h: number): number => {
    return h < 6 ? h + 24 : h;
};

/**
 * Parses a time string "HH:MM" into a float representing hours.
 * e.g. "17:30" => 17.5
 */
export const parseTimeToFloat = (timeStr: string): number => {
    if (!timeStr) return 0;
    // Remove non-time characters (like 'h')
    const cleaned = timeStr.toLowerCase().replace(/[^\d:h]/g, '');
    const [h, m] = cleaned.split(/[:h]/).map(Number);
    return (h || 0) + (m || 0) / 60;
};

/**
 * Checks if the current time (or a specific time) falls within a given range.
 * Handles ranges crossing midnight (e.g. "18:00-02:00").
 */
export const isTimeInRange = (range: string, targetHour?: number): boolean => {
    if (!range) return false;

    // Normalize target hour
    const now = new Date();
    const currentHour = targetHour !== undefined ? targetHour : now.getHours() + now.getMinutes() / 60;
    const h = normalizeHour(currentHour);

    const parts = range.split(/[-–]/);
    if (parts.length !== 2) return false;

    let start = parseTimeToFloat(parts[0].trim());
    let end = parseTimeToFloat(parts[1].trim());

    // Normalize start/end
    start = normalizeHour(start);
    end = normalizeHour(end);

    if (end < start) {
        end += 24; // Handle case where second normalization didn't catch it
    }

    return h >= start && h < end;
};

// Day mapping for French abbreviations
const DAY_MAP: Record<string, number> = {
    'dim': 0, 'lun': 1, 'mar': 2, 'mer': 3, 'jeu': 4, 'ven': 5, 'sam': 6
};

/**
 * Enhanced Happy Hour Check that respects Days of the Week.
 * Parsing patterns like:
 * - "Tlj 17h-20h"
 * - "Jeu-Sam 18h-22h"
 * - "Lun-Ven 16h-20h"
 */
export const isHappyHourActive = (rawString: string): boolean => {
    if (!rawString) return false;
    const lower = rawString.toLowerCase();
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday

    // 1. Check Day Constraints
    let isDayActive = false;

    if (lower.includes('tlj') || lower.includes('7j/7') || /^\d{1,2}h/.test(lower)) {
        // If "Tlj" or starts directly with time (implicit Tlj)
        isDayActive = true;
    } else {
        // Parse day ranges like "jeu-sam"
        // Look for day names at start
        const dayRangeMatch = lower.match(/([a-z]{3})\s?[-–]\s?([a-z]{3})/);
        if (dayRangeMatch) {
            const startDay = DAY_MAP[dayRangeMatch[1]];
            const endDay = DAY_MAP[dayRangeMatch[2]];

            if (startDay !== undefined && endDay !== undefined) {
                if (startDay <= endDay) {
                    isDayActive = currentDay >= startDay && currentDay <= endDay;
                } else {
                    // Crossing week boundary (e.g. Ven-Mar)
                    isDayActive = currentDay >= startDay || currentDay <= endDay;
                }
            }
        }
        // Single day check could be added here if needed, but ranges are most common
    }

    if (!isDayActive) return false;

    // 2. Extract Time Range
    // Extract "17h-20h" or "17:00-20:00"
    const timeMatch = lower.match(/(\d{1,2}[h:]?\d{0,2})\s?[-–]\s?(\d{1,2}[h:]?\d{0,2})/);
    if (timeMatch) {
        const timeRange = `${timeMatch[1]}-${timeMatch[2]}`;
        return isTimeInRange(timeRange);
    }

    return false;
};
