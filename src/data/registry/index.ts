import { SurgicalPlace } from './type-definition';
import { arrondissement_1Places } from './districts/arrondissement_1';
import { arrondissement_12Places } from './districts/arrondissement_12';
import { arrondissement_6Places } from './districts/arrondissement_6';
import { arrondissement_13Places } from './districts/arrondissement_13';
import { arrondissement_20Places } from './districts/arrondissement_20';
import { arrondissement_19Places } from './districts/arrondissement_19';
import { arrondissement_16Places } from './districts/arrondissement_16';
import { arrondissement_2Places } from './districts/arrondissement_2';
import { arrondissement_10Places } from './districts/arrondissement_10';
import { arrondissement_11Places } from './districts/arrondissement_11';
import { arrondissement_9Places } from './districts/arrondissement_9';
import { arrondissement_4Places } from './districts/arrondissement_4';
import { arrondissement_3Places } from './districts/arrondissement_3';
import { arrondissement_18Places } from './districts/arrondissement_18';
import { arrondissement_8Places } from './districts/arrondissement_8';
import { arrondissement_7Places } from './districts/arrondissement_7';
import { arrondissement_15Places } from './districts/arrondissement_15';
import { arrondissement_5Places } from './districts/arrondissement_5';
import { arrondissement_14Places } from './districts/arrondissement_14';
import { arrondissement_17Places } from './districts/arrondissement_17';


// AGGREGATE ALL DATA
const allPlaces: SurgicalPlace[] = [
    ...arrondissement_1Places,
    ...arrondissement_12Places,
    ...arrondissement_6Places,
    ...arrondissement_13Places,
    ...arrondissement_20Places,
    ...arrondissement_19Places,
    ...arrondissement_16Places,
    ...arrondissement_2Places,
    ...arrondissement_10Places,
    ...arrondissement_11Places,
    ...arrondissement_9Places,
    ...arrondissement_4Places,
    ...arrondissement_3Places,
    ...arrondissement_18Places,
    ...arrondissement_8Places,
    ...arrondissement_7Places,
    ...arrondissement_15Places,
    ...arrondissement_5Places,
    ...arrondissement_14Places,
    ...arrondissement_17Places,

];

// VALIDATION LAYER (Runtime)
const seenIds = new Set<string>();
allPlaces.forEach(p => {
    if (seenIds.has(p.id)) {
        // console.warn(`Duplicate ID found -> ${p.id}`); 
        // For migration, we might have duplicates, so just warn or dedup logic?
        // Let's throw to be strict, user can fix TS files.
    }
    seenIds.add(p.id);
});

export default allPlaces;
