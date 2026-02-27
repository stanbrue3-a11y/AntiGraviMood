import { MetaMapper } from '../MetaMapper';
import { MOCK_PLACE } from '../../testFixtures';

describe('MetaMapper', () => {
  describe('mapMetaView', () => {
    it('should map mood color correctly', () => {
      const meta = MetaMapper.mapMetaView(MOCK_PLACE);
      expect(meta.mood_color).toBe('#8ccaf7'); // chill color
      expect(meta.mood_label).toBe('chill');
    });

    it('should use first subcategory as subtitle', () => {
      const meta = MetaMapper.mapMetaView(MOCK_PLACE);
      expect(meta.subtitle).toBe('Cocktail • 75011e');
    });

    it('should fallback to category if no subcategory', () => {
      const noSub = { ...MOCK_PLACE, subcategories: [] };
      const meta = MetaMapper.mapMetaView(noSub);
      expect(meta.subtitle).toBe('Bar • 75011e');
    });
  });

  describe('mapMapView', () => {
    it('should return correct icon name', () => {
      const map = MetaMapper.mapMapView(MOCK_PLACE);
      expect(map.icon).toBe('icon-cocktail-chill');
    });
  });
});
