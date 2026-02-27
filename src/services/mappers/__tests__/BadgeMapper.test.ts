import { BadgeMapper } from '../BadgeMapper';
import { Place } from '../../../types/model';

describe('BadgeMapper', () => {
  describe('isTrue', () => {
    it('should return true for boolean true', () => {
      expect(BadgeMapper.isTrue(true)).toBe(true);
    });
    it('should return true for number 1', () => {
      expect(BadgeMapper.isTrue(1)).toBe(true);
    });
    it('should return true for string "true"', () => {
      expect(BadgeMapper.isTrue('true')).toBe(true);
    });
    it('should return false for others', () => {
      expect(BadgeMapper.isTrue(false)).toBe(false);
      expect(BadgeMapper.isTrue(0)).toBe(false);
      expect(BadgeMapper.isTrue('false')).toBe(false);
      expect(BadgeMapper.isTrue(null)).toBe(false);
      expect(BadgeMapper.isTrue(undefined)).toBe(false);
    });
  });

  describe('extractTags', () => {
    it('should extract terrace from various keys', () => {
      expect(BadgeMapper.extractTags({ terrace: 1 })).toContain('terrasse');
      expect(BadgeMapper.extractTags({ terrasse: true })).toContain('terrasse');
    });

    it('should extract laptop_friendly from wifi', () => {
      expect(BadgeMapper.extractTags({ wifi: 1 })).toContain('laptop_friendly');
      expect(BadgeMapper.extractTags({ laptop_friendly: 1 })).toContain('laptop_friendly');
    });

    it('should extract missing tags (shotgun, gratuit<26, pelouse)', () => {
      const result = BadgeMapper.extractTags({
        shotgun: 1,
        gratuit_moins_26: 'true',
        pelouse_autorisee: 1,
      });
      expect(result).toContain('shotgun');
      expect(result).toContain('gratuit_moins_26');
      expect(result).toContain('pelouse_autorisee');
    });

    it('should ignore false values', () => {
      const result = BadgeMapper.extractTags({ shotgun: 0, terrace: false });
      expect(result).toEqual([]);
    });
  });

  describe('mapBadgesView', () => {
    const TEST_MOOD_COLOR = '#8ccaf7'; // chill primary
    const mockPlace = {
      practical_info: {
        primary_status: null,
        tags: [],
        happy_hour: null,
      },
    } as unknown as Place;

    it('should map primary status', () => {
      const place = {
        ...mockPlace,
        practical_info: { ...mockPlace.practical_info, primary_status: 'resa_conseillee' },
      } as Place;
      const badges = BadgeMapper.mapBadgesView(place, TEST_MOOD_COLOR);
      expect(badges[0].label).toBe('Résa conseillée');
    });

    it('should map tags to badges', () => {
      const place = {
        ...mockPlace,
        practical_info: { ...mockPlace.practical_info, tags: ['terrasse', 'shotgun'] },
      } as Place;
      const badges = BadgeMapper.mapBadgesView(place, TEST_MOOD_COLOR);
      const labels = badges.map((b) => b.label);
      expect(labels).toContain('Terrasse');
      expect(labels).toContain('Shotgun');
    });

    it('should map Active Happy Hour', () => {
      const place = {
        ...mockPlace,
        practical_info: { ...mockPlace.practical_info, happy_hour: '18h-20h' },
      } as Place;
      // Test at 19h (Active)
      const activeDate = new Date('2023-01-01T19:00:00');
      const badges = BadgeMapper.mapBadgesView(place, TEST_MOOD_COLOR, activeDate);

      const hhBadge = badges.find((b) => b.label.includes('18h-20h'));
      expect(hhBadge).toBeDefined();
      expect(hhBadge?.icon).toBe('flame');
      expect(hhBadge?.color).toBe('#ffab60'); // Active color
    });

    it('should map Inactive Happy Hour', () => {
      const place = {
        ...mockPlace,
        practical_info: { ...mockPlace.practical_info, happy_hour: '18h-20h' },
      } as Place;
      // Test at 16h (Inactive)
      const inactiveDate = new Date('2023-01-01T16:00:00');
      const badges = BadgeMapper.mapBadgesView(place, TEST_MOOD_COLOR, inactiveDate);

      const hhBadge = badges.find((b) => b.label.includes('18h-20h'));
      expect(hhBadge).toBeDefined();
      expect(hhBadge?.icon).toBe('time-outline');
      expect(hhBadge?.color).toBe('#9CA3AF'); // Inactive color
    });
  });
});
