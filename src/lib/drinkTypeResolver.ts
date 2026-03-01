/**
 * ⚠️ DEPRECATED - DO NOT USE DIRECTLY
 * All logic has been migrated to PriceEngine.ts (Industrial 2026 Standard).
 * This file is kept as an alias layer during the transition.
 */

import { PriceEngine, DrinkType as DET_DrinkType, BENCHMARKS as DET_BENCHMARKS } from './pricing/PriceEngine';
import { Pricing } from '../data/registry/type-definition';

export type DrinkType = DET_DrinkType;
export const BENCHMARKS = DET_BENCHMARKS;

export const resolveDrinkType = (cat: any, sub: any) => PriceEngine.resolveDrinkType(cat, sub);
export const getReferencePrice = (pricing: any, type: DrinkType) => PriceEngine.getReferencePrice(pricing, type);
export const resolveReferencePrice = (pricing: any, type: DrinkType) => PriceEngine.resolveReferencePrice(pricing, type);
export const getDrinkTypeInfo = (type: DrinkType) => PriceEngine.getInfo(type);
export const getHHDuration = (hh: string | null | undefined) => PriceEngine.getHHDuration(hh);
