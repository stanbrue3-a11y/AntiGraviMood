import { Pricing } from '../types/model';

export interface PriceMetrics {
    percent: number;      // 0-100 (50 = Standard)
    label: string;        // "STANDARD", "PINCE", etc.
    color: string;        // Hex color
    currentPrice: number;
    benchmarkPrice: number;
    deviationPercent: number;
}

const BENCHMARKS = {
    pint: 7,
    dish: 18,
    coffee: 2.5,
    cocktail: 12,
    default: 15
};

export class CrabCalculator {
    static getMetrics(pricing: Pricing): PriceMetrics {
        if (pricing.is_free) {
            return {
                percent: 5,
                label: "GRATUIT",
                color: '#22C55E',
                currentPrice: 0,
                benchmarkPrice: 0,
                deviationPercent: 0
            };
        }

        let current = pricing.budget_avg ?? 0;
        let fair = pricing.fair_price || BENCHMARKS.default;

        // Context-aware priority
        if (pricing.pint_price !== undefined) {
            current = pricing.pint_price;
            fair = 7;
        } else if (pricing.main_dish_price !== undefined) {
            current = pricing.main_dish_price;
            fair = 18;
        } else if (pricing.coffee_price !== undefined) {
            current = pricing.coffee_price;
            fair = 2.5;
        } else if (pricing.cocktail_price !== undefined) {
            current = pricing.cocktail_price;
            fair = 12;
        }

        const deviation = fair > 0 ? (current - fair) / fair : 0;
        const percent = Math.max(5, Math.min(95, 50 + (deviation * 100)));
        const deviationPercent = Math.round(deviation * 100);

        return {
            percent,
            label: this.getLabel(percent),
            color: this.getColor(percent),
            currentPrice: current,
            benchmarkPrice: fair,
            deviationPercent
        };
    }

    private static getLabel(percent: number): string {
        if (percent >= 85) return "PINCE-M'EN UNE !";
        if (percent >= 65) return "SUPER PINCE";
        if (percent >= 35) return "STANDARD";
        if (percent >= 15) return "AÏE, ÇA PINCE !";
        return "ÇA PINCE SÉVÈRE !";
    }

    private static getColor(percent: number): string {
        if (percent <= 50) return '#22C55E'; // Green
        if (percent <= 75) return '#F59E0B'; // Orange
        return '#EF4444'; // Red
    }

    static getConfidenceMetrics(lastUpdated?: string): { score: number; label: string; color: string } {
        if (!lastUpdated) return { score: 0, label: "Non vérifié", color: '#9CA3AF' };

        const date = new Date(lastUpdated);
        const now = new Date();
        const diffMonths = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());

        if (diffMonths <= 3) return { score: 100, label: "VÉRIFIÉ RÉCEMMENT", color: '#22C55E' };
        if (diffMonths <= 6) return { score: 70, label: "VÉRIFIÉ IL Y A 6 MOIS", color: '#F59E0B' };

        return { score: 40, label: "VÉRIFICATION ANCIENNE", color: '#EF4444' };
    }
}
