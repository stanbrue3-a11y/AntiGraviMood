/** @jest-environment node */
/**
 * TimeUtils Test Suite — Industrial Coverage
 * Tests the time parsing, opening hours, and happy hour logic.
 */
import {
  normalizeHour,
  parseTimeToFloat,
  OpeningHours,
  isTimeInRange,
  isHappyHourActive,
} from '../timeUtils';

// ============================================================
// normalizeHour
// ============================================================
describe('normalizeHour', () => {
  it('should return hour as-is for 6-23', () => {
    expect(normalizeHour(6)).toBe(6);
    expect(normalizeHour(12)).toBe(12);
    expect(normalizeHour(23)).toBe(23);
  });

  it('should add 24 for early morning hours (0-5)', () => {
    expect(normalizeHour(0)).toBe(24);
    expect(normalizeHour(1)).toBe(25);
    expect(normalizeHour(2)).toBe(26);
    expect(normalizeHour(5)).toBe(29);
  });
});

// ============================================================
// parseTimeToFloat
// ============================================================
describe('parseTimeToFloat', () => {
  it('should parse "17:30" as 17.5', () => {
    expect(parseTimeToFloat('17:30')).toBe(17.5);
  });

  it('should parse "17h30" as 17.5', () => {
    expect(parseTimeToFloat('17h30')).toBe(17.5);
  });

  it('should parse "17h" as 17', () => {
    expect(parseTimeToFloat('17h')).toBe(17);
  });

  it('should parse "17" as 17', () => {
    expect(parseTimeToFloat('17')).toBe(17);
  });

  it('should handle "02:00" correctly', () => {
    expect(parseTimeToFloat('02:00')).toBe(2);
  });

  it('should return 0 for empty string', () => {
    expect(parseTimeToFloat('')).toBe(0);
  });
});

// ============================================================
// OpeningHours
// ============================================================
describe('OpeningHours', () => {
  describe('standard ranges', () => {
    it('should parse "18h-02h" correctly (crosses midnight)', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.start).toBe(18);
      expect(oh.end).toBe(26); // 2 + 24
      expect(oh.crossesMidnight).toBe(true);
    });

    it('should parse "10h-18h" correctly (same day)', () => {
      const oh = new OpeningHours('10h-18h');
      expect(oh.start).toBe(10);
      expect(oh.end).toBe(18);
      expect(oh.crossesMidnight).toBe(false);
    });
  });

  describe('isOpen', () => {
    it('should return true at 20h for "18h-02h"', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.isOpen(20)).toBe(true);
    });

    it('should return true at 1am for "18h-02h" (after midnight)', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.isOpen(1)).toBe(true);
    });

    it('should return false at 15h for "18h-02h"', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.isOpen(15)).toBe(false);
    });

    it('should return false at 3am for "18h-02h"', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.isOpen(3)).toBe(false);
    });

    it('should return true at boundary (18h exactly)', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.isOpen(18)).toBe(true);
    });
  });

  describe('overlaps', () => {
    it('should detect overlap between "18h-02h" and user range 20-23', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.overlaps(20, 23)).toBe(true);
    });

    it('should not detect overlap between "18h-02h" and user range 8-12', () => {
      const oh = new OpeningHours('18h-02h');
      expect(oh.overlaps(8, 12)).toBe(false);
    });
  });
});

// ============================================================
// isTimeInRange
// ============================================================
describe('isTimeInRange', () => {
  it('should return true at 19h for "18h-20h"', () => {
    expect(isTimeInRange('18h-20h', 19)).toBe(true);
  });

  it('should return false at 16h for "18h-20h"', () => {
    expect(isTimeInRange('18h-20h', 16)).toBe(false);
  });

  it('should return true at 1am for "22h-04h"', () => {
    expect(isTimeInRange('22h-04h', 1)).toBe(true);
  });
});

// ============================================================
// isHappyHourActive
// ============================================================
describe('isHappyHourActive', () => {
  it('should return false for null/undefined input', () => {
    expect(isHappyHourActive(null)).toBe(false);
    expect(isHappyHourActive(undefined)).toBe(false);
    expect(isHappyHourActive('')).toBe(false);
  });

  it('should return false for "Non" and "Faux"', () => {
    expect(isHappyHourActive('Non')).toBe(false);
    expect(isHappyHourActive('Faux')).toBe(false);
  });

  it('should return true for boolean true', () => {
    expect(isHappyHourActive(true)).toBe(true);
  });

  it('should detect active happy hour with time range at testDate', () => {
    // Thursday 19h → should be active for "18h-20h"
    const thursday19h = new Date('2023-01-05T19:00:00');
    expect(isHappyHourActive('18h-20h', thursday19h)).toBe(true);
  });

  it('should detect inactive happy hour outside time range', () => {
    // Thursday 16h → should be inactive for "18h-20h"
    const thursday16h = new Date('2023-01-05T16:00:00');
    expect(isHappyHourActive('18h-20h', thursday16h)).toBe(false);
  });

  it('should handle object format { start, end }', () => {
    const activeDate = new Date('2023-01-05T19:00:00');
    expect(isHappyHourActive({ start: '18h', end: '20h' }, activeDate)).toBe(true);
  });

  it('should handle "tlj 18h-20h" (tous les jours)', () => {
    const activeDate = new Date('2023-01-05T19:00:00');
    expect(isHappyHourActive('tlj 18h-20h', activeDate)).toBe(true);
  });

  it('should handle day-specific ranges (lun-ven)', () => {
    // Thursday = 4, which is in lun(1)-ven(5) range
    const thursday19h = new Date('2023-01-05T19:00:00');
    expect(isHappyHourActive('lun-ven 18h-20h', thursday19h)).toBe(true);

    // Sunday = 0, which is NOT in lun-ven range
    const sunday19h = new Date('2023-01-08T19:00:00');
    expect(isHappyHourActive('lun-ven 18h-20h', sunday19h)).toBe(false);
  });
});
