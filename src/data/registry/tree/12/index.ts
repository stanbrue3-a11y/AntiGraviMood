import { SurgicalPlace } from '../../../type-definition';
import { ground_control } from './--proximit-/ground-control';
import { le_viaduc } from './--proximit-/le-viaduc';
import { supersonic } from './bastille/supersonic';
import { les_associes } from './bastille/les-associes';
import { le_mazette } from './gare-de-lyon/le-mazette';
import { baron_rouge } from './ledru-rollin/baron-rouge';
import { lac_daumesnil } from './porte-dor-e/lac-daumesnil';

export const arrondissement_12Places: SurgicalPlace[] = [
    ground_control,
    le_viaduc,
    supersonic,
    les_associes,
    le_mazette,
    baron_rouge,
    lac_daumesnil
];
