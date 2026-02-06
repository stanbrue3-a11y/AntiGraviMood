
import { arrondissement_1Places } from '../src/data/registry/districts/arrondissement_1';
import { arrondissement_2Places } from '../src/data/registry/districts/arrondissement_2';
import { arrondissement_3Places } from '../src/data/registry/districts/arrondissement_3';
import { arrondissement_4Places } from '../src/data/registry/districts/arrondissement_4';
import { arrondissement_10Places } from '../src/data/registry/districts/arrondissement_10';
import { arrondissement_11Places } from '../src/data/registry/districts/arrondissement_11';
import { arrondissement_12Places } from '../src/data/registry/districts/arrondissement_12';
import { arrondissement_13Places } from '../src/data/registry/districts/arrondissement_13';
import { arrondissement_16Places } from '../src/data/registry/districts/arrondissement_16';
import { arrondissement_18Places } from '../src/data/registry/districts/arrondissement_18';
import { arrondissement_19Places } from '../src/data/registry/districts/arrondissement_19';
import { arrondissement_20Places } from '../src/data/registry/districts/arrondissement_20';
import { arrondissement_5Places } from '../src/data/registry/districts/arrondissement_5';
import { arrondissement_6Places } from '../src/data/registry/districts/arrondissement_6';
import { arrondissement_7Places } from '../src/data/registry/districts/arrondissement_7';
import { arrondissement_8Places } from '../src/data/registry/districts/arrondissement_8';
import { arrondissement_9Places } from '../src/data/registry/districts/arrondissement_9';
import { arrondissement_14Places } from '../src/data/registry/districts/arrondissement_14';
import { arrondissement_15Places } from '../src/data/registry/districts/arrondissement_15';
import { arrondissement_17Places } from '../src/data/registry/districts/arrondissement_17';
import { SurgicalPlace } from '../src/data/registry/type-definition';

const allDistricts = {
    1: arrondissement_1Places,
    2: arrondissement_2Places,
    3: arrondissement_3Places,
    4: arrondissement_4Places,
    10: arrondissement_10Places,
    11: arrondissement_11Places,
    12: arrondissement_12Places,
    13: arrondissement_13Places,
    16: arrondissement_16Places,
    18: arrondissement_18Places,
    19: arrondissement_19Places,
    20: arrondissement_20Places,
    5: arrondissement_5Places,
    6: arrondissement_6Places,
    7: arrondissement_7Places,
    8: arrondissement_8Places,
    9: arrondissement_9Places,
    14: arrondissement_14Places,
    15: arrondissement_15Places,
    17: arrondissement_17Places,
};

// Rough Bounding Boxes (ignoring strict polygons for now, just catching outliers)
// Paris Lat: ~48.8 to 48.9, Lng: ~2.2 to 2.4
const PARIS_BOUNDS = {
    minLat: 48.81, maxLat: 48.91,
    minLng: 2.22, maxLng: 2.42
};

function verify() {
    console.log("🕵️‍♂️ Starting Surgical Audit...");
    let issues = 0;
    let totalPlaces = 0;

    for (const [distKey, places] of Object.entries(allDistricts)) {
        const districtNum = parseInt(distKey);
        console.log(`\nChecking District ${districtNum} (${places.length} places)...`);

        places.forEach(p => {
            totalPlaces++;
            let placeIssues: string[] = [];

            // 1. Check Real Talk
            if (!p.real_talk.text || p.real_talk.text.length < 10) {
                placeIssues.push("❌ Missing or too short Real Talk text");
            }

            // 2. Check Coordinates
            if (p.location.lat === 0 || p.location.lng === 0) {
                placeIssues.push("❌ Zero Coordinates (0,0)");
            } else if (
                p.location.lat < PARIS_BOUNDS.minLat || p.location.lat > PARIS_BOUNDS.maxLat ||
                p.location.lng < PARIS_BOUNDS.minLng || p.location.lng > PARIS_BOUNDS.maxLng
            ) {
                placeIssues.push(`❌ Out of Paris Bounds: [${p.location.lat}, ${p.location.lng}]`);
            }

            // 3. District Mismatch (Basic Check)
            if (p.location.arrondissement !== districtNum) {
                placeIssues.push(`⚠️ Declared Arrondissement ${p.location.arrondissement} !== File District ${districtNum}`);
            }

            if (placeIssues.length > 0) {
                issues++;
                console.log(`  🚩 [${p.id}] ${p.name}:`);
                placeIssues.forEach(i => console.log(`      ${i}`));
            }
        });
    }

    console.log(`\n\n📊 Audit Complete.`);
    console.log(`Total Places Scanned: ${totalPlaces}`);
    console.log(`Issues Found: ${issues}`);
}

verify();
