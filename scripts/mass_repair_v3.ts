import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { execSync } from 'child_process';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
const REGISTRY_ROOT = path.join(__dirname, '../src/data/registry/tree');

async function repairFile(filePath: string, current: number, total: number) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const gidMatch = content.match(/google_id:\s*[`"](.*?)[`"]/);
    const slugMatch = content.match(/slug:\s*[`"](.*?)[`"]/);
    
    if (!gidMatch || !slugMatch) return;
    
    const gid = gidMatch[1];
    const slug = slugMatch[1];
    
    console.log(`\n🔧 [${current}/${total}] Repairing ${slug}...`);
    
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${gid}&fields=geometry,photos,opening_hours&key=${GOOGLE_KEY}&language=fr`;
        const res = await axios.get(url);
        const data = res.data.result;
        
        if (!data) {
            console.error(`   ❌ Google data not found for ${slug}`);
            return false;
        }

        // 1. Normalize String Delimiters (Single to Double) - Safely targeting property values
        let updated = content.replace(/:\s*'([^'\n]+?)'/g, ': "$1"');
        
        // 2. Update Coordinates
        const lat = data.geometry.location.lat;
        const lng = data.geometry.location.lng;
        updated = updated.replace(/lat:\s*[0-9.]+/, `lat: ${lat}`);
        updated = updated.replace(/lng:\s*[0-9.]+/, `lng: ${lng}`);
        
        // 3. Update Hours
        const hours = data.opening_hours?.weekday_text?.join(' | ');
        if (hours) {
            updated = updated.replace(/opening_hours_raw:\s*[`"].*?[`"]/, `opening_hours_raw: \`${hours}\``);
        }
        
        // 4. Update Photos (inject refs first - Standard 5-Photos)
        const photos = data.photos?.slice(0, 5).map((p: any) => p.photo_reference) || [];
        if (photos.length > 0) {
            // Replace hero (handles single line)
            updated = updated.replace(/hero:\s*[`"].*?[`"]/, `hero: "${photos[0]}"`);
            
            // Replace gallery (handles multi-line with [s] flag equivalent or [\s\S])
            const galleryRegex = /gallery:\s*\[[\s\S]*?\]/;
            const newGallery = `gallery: ${JSON.stringify(photos.slice(1), null, 4).replace(/"/g, '`')}`; // Use backticks for stability
            updated = updated.replace(galleryRegex, newGallery);
        }
        
        // 5. Global Apostrophe Fix (Letter-aware)
        // Replaces ' with ’ ONLY if it's followed by a letter (prevents matching closing quotes)
        updated = updated.replace(/([a-zA-ZÀ-ÿ])'([a-zA-ZÀ-ÿ])/g, '$1’$2');
        updated = updated.replace(/([a-zA-ZÀ-ÿ])'(?=\s)/g, '$1’'); // Final safety for words followed by space

        // --- SURGICAL DATA ENTRY PROTOCOL (Standard 2026) ---
        
        // 6. Extraction du Type de Cuisine (Whitelist Strict)
        const whitelist = [
            'français', 'italien', 'japonais', 'coréen', 'chinois', 'thaï', 'vietnamien', 
            'indien', 'libanais', 'mexicain', 'péruvien', 'brésilien', 'éthiopien', 
            'méditerranéen', 'grec', 'turc', 'marocain', 'américain', 'africain', 
            'caribéen', 'pakistanais', 'fusion', 'fruits de mer', 'bistronomie', 
            'gastronomique', 'street-food', 'végétarien', 'bistrot', 'brasserie', 
            'pizzeria', 'bar à vin', 'tapas', 'bouillon'
        ];

        const subMatch = content.match(/subcategory:\s*\[\s*(.*?)\s*\]/);
        let detectedType = "Maison";
        if (subMatch) {
            const tags = subMatch[1].split(',').map(t => t.replace(/["`]/g, '').trim());
            const firstValidTag = tags.find(t => whitelist.includes(t.toLowerCase()));
            if (firstValidTag) detectedType = firstValidTag;
        }
        const surgicalPrefix = `Cuisine ${detectedType.charAt(0).toUpperCase() + detectedType.slice(1)}. `;

        // 7. Reparation Editorial (must_eat + Anonymat)
        const textFields = ['must_eat', 'description', 'text'];
        for (const field of textFields) {
            const regex = new RegExp(`(${field}:\\s*)([\`"])([\\s\\S]*?)\\2`, 'g');
            updated = updated.replace(regex, (match, prefix, quote, text) => {
                let fixed = text;
                
                // A. Purge des anciens préfixes ratés
                fixed = fixed.replace(/^\s*Cuisine Gastronomique\. \s*/g, '');
                fixed = fixed.replace(/^\s*Cuisine Maison\. \s*/g, '');

                // B. Injection du préfixe chirurgical (pour must_eat uniquement)
                if (field === 'must_eat' && !fixed.trim().startsWith('Cuisine ')) {
                    fixed = `${surgicalPrefix}${fixed.trim()}`;
                }

                // C. Règle d'Anonymat (Purge des noms propres de chefs cités dans le workflow)
                const forbiddenNames = ["Nicolas", "Camdeborde", "Yves", "Jean-Pierre", "Pierre", "Paul"]; 
                forbiddenNames.forEach(name => {
                    const nameRegex = new RegExp(`\\b${name}\\b`, 'gi');
                    fixed = fixed.replace(nameRegex, "le chef");
                });

                return `${prefix}${quote}${fixed}${quote}`;
            });
        }

        fs.writeFileSync(filePath, updated);
        
        // 4. Migrate Media
        console.log(`   📸 Migrating media...`);
        execSync(`npx tsx scripts/migrate_registry_media.ts ${slug}`, { stdio: 'inherit' });
        
        // 5. Audit
        console.log(`   🔍 Auditing...`);
        execSync(`npx tsx scripts/audit_lot.ts ${filePath}`, { stdio: 'inherit' });
        
        return true;
    } catch (e: any) {
        console.error(`   ❌ Error repairing ${slug}: ${e.message}`);
        return false;
    }
}

function getAllFiles(dir: string): string[] {
    const results: string[] = [];
    const list = fs.readdirSync(dir);
    for (const item of list) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) {
            results.push(...getAllFiles(full));
        } else if (item.endsWith('.ts') && !item.includes('index.ts')) {
            results.push(full);
        }
    }
    return results;
}

async function main() {
    const targetFilter = process.argv[2];
    const allFiles = getAllFiles(REGISTRY_ROOT);
    const files = allFiles.filter(f => !targetFilter || f.includes(targetFilter));
    
    console.log(`🚀 Starting Mass Repair V3 for ${files.length} files...`);
    
    let successCount = 0;
    for (let i = 0; i < files.length; i++) {
        const success = await repairFile(files[i], i + 1, files.length);
        if (success) successCount++;
    }
    
    console.log(`\n✨ Mass Repair Complete.`);
    console.log(`📊 Summary: ${successCount}/${files.length} places processed.`);
}

main();
