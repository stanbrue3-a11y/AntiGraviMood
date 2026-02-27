import { PricingMapper } from '../PricingMapper';
import { Place, Pricing } from '../../../types/model';

describe('PricingMapper', () => {
  const mockPricing = {
    type: 'bar',
    pint_price: 5,
    wine_glass: 6,
    cocktail_price: 10,
    coffee_price: 2.5,
    dish_price: 15,
    hh_pint: 3.5,
    menu_items: [],
  } as unknown as Pricing;

  const createPlace = (category: string): Place =>
    ({
      category: category.includes('-') ? 'bar' : category,
      subcategories: [category],
      practical_info: { happy_hour: '18h-20h' },
      pricing: { ...mockPricing },
    }) as unknown as Place;

  describe('getSmartAnchor', () => {
    it('should highlight Pinte for generic bar/pub', () => {
      const anchor = PricingMapper.getSmartAnchor(mockPricing, createPlace('bar'));
      expect(anchor.label).toBe('Pinte');
      expect(anchor.price).toBe('5€');
    });

    it('should highlight Cocktail for cocktail bar', () => {
      const anchor = PricingMapper.getSmartAnchor(mockPricing, createPlace('cocktail-bar'));
      expect(anchor.label).toBe('Cocktail');
      expect(anchor.price).toBe('10€');
    });

    it('should highlight Verre (Wine) for wine bar', () => {
      const anchor = PricingMapper.getSmartAnchor(mockPricing, createPlace('cave_a_manger'));
      expect(anchor.label).toBe('Verre');
      expect(anchor.price).toBe('6€');
    });

    it('should highlight Café for coffee shop', () => {
      const anchor = PricingMapper.getSmartAnchor(mockPricing, createPlace('coffee_shop'));
      expect(anchor.label).toBe('Café');
      expect(anchor.price).toBe('2.5€');
    });

    it('should highlight Plat for restaurant', () => {
      const anchor = PricingMapper.getSmartAnchor(mockPricing, createPlace('restaurant'));
      expect(anchor.label).toBe('Plat');
      expect(anchor.price).toBe('15€');
    });
  });

  describe('mapPricingView', () => {
    it('should calculate correct level based on deviation from benchmark', () => {
      expect(
        PricingMapper.mapPricingView(
          { ...mockPricing, pint_price: 5 } as Pricing,
          createPlace('bar'),
        ).level,
      ).toBe(1);
      expect(
        PricingMapper.mapPricingView(
          { ...mockPricing, pint_price: 7.5 } as Pricing,
          createPlace('bar'),
        ).level,
      ).toBe(2);
      expect(
        PricingMapper.mapPricingView(
          { ...mockPricing, pint_price: 9 } as Pricing,
          createPlace('bar'),
        ).level,
      ).toBe(3);
      expect(
        PricingMapper.mapPricingView(
          { ...mockPricing, pint_price: 11 } as Pricing,
          createPlace('bar'),
        ).level,
      ).toBe(4);
    });

    it('should display "Pinte (Happy Hour)" when HH is active and hh_pint exists', () => {
      const activeDate = new Date('2023-01-05T19:00:00');
      const view = PricingMapper.mapPricingView(mockPricing, createPlace('bar'), activeDate);
      expect(view.card_display.description).toBe('Pinte (Happy Hour)');
    });

    it('should display "Pinte (50cl)" when HH is inactive', () => {
      const inactiveDate = new Date('2023-01-05T16:00:00');
      const view = PricingMapper.mapPricingView(mockPricing, createPlace('bar'), inactiveDate);
      expect(view.card_display.description).toBe('Pinte (50cl)');
    });
  });
});
