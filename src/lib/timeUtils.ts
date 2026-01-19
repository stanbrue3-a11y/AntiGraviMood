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
    const [h, m] = timeStr.toLowerCase().split(/[:h]/).map(Number);
    return h + (m || 0) / 60;
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
