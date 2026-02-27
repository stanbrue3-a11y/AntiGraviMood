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
const rawDistricts = [
    { name: 'District 1', data: arrondissement_1Places },
    { name: 'District 2', data: arrondissement_2Places },
    { name: 'District 3', data: arrondissement_3Places },
    { name: 'District 4', data: arrondissement_4Places },
    { name: 'District 5', data: arrondissement_5Places },
    { name: 'District 6', data: arrondissement_6Places },
    { name: 'District 7', data: arrondissement_7Places },
    { name: 'District 8', data: arrondissement_8Places },
    { name: 'District 9', data: arrondissement_9Places },
    { name: 'District 10', data: arrondissement_10Places },
    { name: 'District 11', data: arrondissement_11Places },
    { name: 'District 12', data: arrondissement_12Places },
    { name: 'District 13', data: arrondissement_13Places },
    { name: 'District 14', data: arrondissement_14Places },
    { name: 'District 15', data: arrondissement_15Places },
    { name: 'District 16', data: arrondissement_16Places },
    { name: 'District 17', data: arrondissement_17Places },
    { name: 'District 18', data: arrondissement_18Places },
    { name: 'District 19', data: arrondissement_19Places },
    { name: 'District 20', data: arrondissement_20Places }
];

rawDistricts.forEach(dist => {
    if (dist.data.some(p => !p)) {
        console.error(`🚨 DETECTED undefined in ${dist.name}!`);
        dist.data.forEach((p, i) => {
            if (!p) console.error(`   -> Index ${i} is undefined`);
        });
    }
});

const rawPlaces: (SurgicalPlace | undefined)[] = rawDistricts.flatMap(d => d.data);

const allPlaces = rawPlaces.filter((p): p is SurgicalPlace => {
    if (!p) {
        console.warn('⚠️ Found undefined place in registry!');
        return false;
    }
    return true;
});

if (allPlaces.length !== rawPlaces.length) {
    console.error(`🚨 CRITICAL: Skipped ${rawPlaces.length - allPlaces.length} undefined places!`);
}

// VALIDATION LAYER (Runtime)
const seenIds = new Set<string>();
allPlaces.forEach(p => {
    if (seenIds.has(p.id)) {
        console.warn(`Duplicate ID found -> ${p.id}`);
    }
    seenIds.add(p.id);
});

export default allPlaces;
