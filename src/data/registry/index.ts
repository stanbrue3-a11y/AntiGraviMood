import { SurgicalPlace } from './type-definition';
import { arrondissement_1Places } from './tree/01';
import { arrondissement_2Places } from './tree/02';
import { arrondissement_3Places } from './tree/03';
import { arrondissement_4Places } from './tree/04';
import { arrondissement_5Places } from './tree/05';
import { arrondissement_6Places } from './tree/06';
import { arrondissement_7Places } from './tree/07';
import { arrondissement_8Places } from './tree/08';
import { arrondissement_9Places } from './tree/09';
import { arrondissement_10Places } from './tree/10';
import { arrondissement_11Places } from './tree/11';
import { arrondissement_12Places } from './tree/12';
import { arrondissement_13Places } from './tree/13';
import { arrondissement_14Places } from './tree/14';
import { arrondissement_15Places } from './tree/15';
import { arrondissement_16Places } from './tree/16';
import { arrondissement_17Places } from './tree/17';
import { arrondissement_18Places } from './tree/18';
import { arrondissement_19Places } from './tree/19';
import { arrondissement_20Places } from './tree/20';

// AGGREGATE ALL DATA FROM REGISTRY TREE 🌳
const allPlaces: SurgicalPlace[] = [
    // ...arrondissement_1Places,
    // ...arrondissement_2Places,
    // ...arrondissement_3Places,
    // ...arrondissement_4Places,
    // ...arrondissement_5Places,
    // ...arrondissement_6Places,
    // ...arrondissement_7Places,
    // ...arrondissement_8Places,
    // ...arrondissement_9Places,
    ...arrondissement_10Places,
    // ...arrondissement_11Places,
    // ...arrondissement_12Places,
    // ...arrondissement_13Places,
    // ...arrondissement_14Places,
    // ...arrondissement_15Places,
    // ...arrondissement_16Places,
    ...arrondissement_17Places,
    // ...arrondissement_18Places,
    // ...arrondissement_19Places,
    // ...arrondissement_20Places
];

// VALIDATION LAYER (Runtime)
const seenIds = new Set<string>();
allPlaces.forEach(p => {
    if (!p) return;
    if (seenIds.has(p.id)) {
        console.warn(`Duplicate ID found -> ${p.id}`);
    }
    seenIds.add(p.id);
});

export default allPlaces;
