import { TimeMapper } from '../TimeMapper';
import { Place } from '../../../types/model';
import { palette } from '../../../design';

describe('TimeMapper', () => {
  const mockPlace = {} as Place;

  describe('mapOpeningView', () => {
    const standardHours = JSON.stringify({
      standard: '12:00-15:00, 19:00-23:00',
      display: 'Tlj: 12h-15h, 19h-23h',
    });

    it('should return OPEN when time is within range', () => {
      const date = new Date('2023-01-01T20:00:00'); // 20:00 is inside 19-23
      const result = TimeMapper.mapOpeningView(standardHours, mockPlace, date);
      expect(result.state).toBe('open');
      expect(result.label).toBe('Ouvert');
      expect(result.color).toBe(palette.success);
    });

    it('should return CLOSED when time is outside range', () => {
      const date = new Date('2023-01-01T16:00:00'); // 16:00 is between 15 and 19
      const result = TimeMapper.mapOpeningView(standardHours, mockPlace, date);
      expect(result.state).toBe('closed');
      expect(result.label).toBe('Fermé');
      expect(result.color).toBe(palette.dark[500]); // Matches text.muted in dark theme
    });

    it('should return CLOSING SOON when within 30 mins of closing', () => {
      const date = new Date('2023-01-01T22:45:00'); // 22:45 is 15 mins before 23:00
      const result = TimeMapper.mapOpeningView(standardHours, mockPlace, date);
      expect(result.state).toBe('closing_soon');
      expect(result.label).toBe('Ferme bientôt');
      expect(result.color).toBe(palette.warning);
    });

    it('should handle midnight crossing ranges (18h-02h)', () => {
      const midnightHours = JSON.stringify({ standard: '18:00-02:00' });

      // 01:00 AM (Next day conceptually, but requires careful date handling or mock consistency)
      // OpeningHours logic: if range crosses midnight (end <= start), end += 24.
      // isOpen checks if targetHour (e.g. 1) < 6 ? h+24 : h.
      // 1am becomes 25. 18 <= 25 < 26. Should be open.

      const date = new Date('2023-01-01T01:00:00');
      const result = TimeMapper.mapOpeningView(midnightHours, mockPlace, date);
      expect(result.state).toBe('open');
    });

    it('should handle invalid JSON gracefully', () => {
      const result = TimeMapper.mapOpeningView('invalid-json', mockPlace);
      expect(result.state).toBe('closed');
      expect(result.time_display).toBe('Horaires non confirmés');
    });

    it('should handle null input', () => {
      const result = TimeMapper.mapOpeningView(null, mockPlace);
      expect(result.state).toBe('closed');
    });
  });

  describe('mapHappyHourView', () => {
    // Thursday 2023-01-05
    const thursdayDate = new Date('2023-01-05T19:00:00');

    it('should detect active HH', () => {
      const result = TimeMapper.mapHappyHourView('18h-20h', thursdayDate);
      expect(result?.active).toBe(true);
      expect(result?.label).toBe('En ce moment');
    });

    it('should detect inactive HH (time)', () => {
      const result = TimeMapper.mapHappyHourView('18h-18h30', thursdayDate); // 19h is past 18h30
      expect(result?.active).toBe(false);
      expect(result?.label).toBe('Happy Hour');
    });

    it('should handle complex string inputs', () => {
      const result = TimeMapper.mapHappyHourView('Tlj: 18h-20h', thursdayDate);
      expect(result?.active).toBe(true);
    });

    it('should handle object inputs', () => {
      const result = TimeMapper.mapHappyHourView({ start: '18h', end: '20h' }, thursdayDate);
      expect(result?.active).toBe(true);
      expect(result?.display).toBe('18h-20h');
    });

    it('should return undefined for "Non" or null', () => {
      expect(TimeMapper.mapHappyHourView('Non')).toBeUndefined();
      expect(TimeMapper.mapHappyHourView(null)).toBeUndefined();
    });
  });
});
