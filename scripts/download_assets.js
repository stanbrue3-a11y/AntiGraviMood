const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

// 1. Load Data
const dataPath = path.join(__dirname, '../src/data/pois_flattened.json');
const data = JSON.parse(fs.readFileSync(dataPath));

// Key found in existing data
const GOOGLE_KEY = 'AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM';
const TARGET_DIR = path.join(__dirname, '../assets/places');

if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// 2. Download Function
const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const proto = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(filepath);

        const request = proto.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // Handling redirects (Google often redirects)
                downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                fs.unlink(filepath, () => { });
                reject(new Error(`Status ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(filepath));
            });
        });

        request.on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function run() {
    console.log(`🚀 Starting Download for ${data.length} places...`);
    let details = [];
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < data.length; i++) {
        const place = data[i];
        const slug = place.slug;
        const googlePhotos = place.media?.google_photos || [];

        // We want up to 3 photos
        const photosToDownload = googlePhotos.slice(0, 3);

        for (let j = 0; j < Math.max(1, photosToDownload.length); j++) {
            const filename = j === 0 ? `${slug}.jpg` : `${slug}-${j}.jpg`;
            const filepath = path.join(TARGET_DIR, filename);

            let urlToFetch = null;
            if (photosToDownload[j]) {
                urlToFetch = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photosToDownload[j]}&key=${GOOGLE_KEY}`;
            } else if (j === 0) {
                // Fallback for the first image only
                if (place.media?.hero_image && !place.media.hero_image.includes('maps.googleapis.com')) {
                    urlToFetch = place.media.hero_image;
                } else {
                    urlToFetch = place.media?.hero_image;
                }
            }

            if (!urlToFetch) continue;

            if (fs.existsSync(filepath)) {
                // console.log(`⏩ Skipping ${filename} (Already exists)`);
                successCount++;
                continue;
            }

            try {
                process.stdout.write(`[${i + 1}/${data.length}] Downloading ${place.name.substring(0, 15)} (photo ${j})... `);
                await downloadImage(urlToFetch, filepath);
                process.stdout.write("✅\n");
                successCount++;
            } catch (err) {
                process.stdout.write(`❌ (${err.message})\n`);
                failCount++;
            }
            await delay(50);
        }
    }

    console.log("\n=== DOWNLOAD REPORT ===");
    console.log(`Processed: ${data.length}`);
    console.log(`Success (New + Existing): ${successCount}`);
    console.log(`Errors: ${failCount}`);

    // Generate Index File by scanning the directory
    console.log("Generating src/data/imagesMap.ts...");
    const allFiles = fs.readdirSync(TARGET_DIR).filter(f => f.endsWith('.jpg'));

    // Group files by slug
    const groups = {};
    allFiles.forEach(file => {
        // slug.jpg or slug-1.jpg or slug-2.jpg
        let slugKey = file.replace('.jpg', '');
        if (slugKey.includes('-')) {
            const parts = slugKey.split('-');
            const lastPart = parts[parts.length - 1];
            if (['1', '2'].includes(lastPart)) {
                slugKey = parts.slice(0, -1).join('-');
            }
        }

        if (!groups[slugKey]) groups[slugKey] = [];
        groups[slugKey].push(file);
    });

    // Sort files within groups to ensure slug.jpg is first, then slug-1.jpg, etc.
    Object.keys(groups).forEach(slug => {
        groups[slug].sort((a, b) => {
            if (a === `${slug}.jpg`) return -1;
            if (b === `${slug}.jpg`) return 1;
            return a.localeCompare(b);
        });
    });

    const mapEntries = Object.keys(groups).map(slug => {
        const entryFiles = groups[slug].map(f => `require("../../assets/places/${f}")`);
        return `    "${slug}": [${entryFiles.join(', ')}],`;
    });

    const mapContent = `// Auto-generated by scripts/download_assets.js
export const localImages: Record<string, any[]> = {
${mapEntries.join('\n')}
};

export const getPlaceImage = (slug: string) => {
    return localImages[slug] ? localImages[slug][0] : null;
};

export const getPlaceImagesArray = (slug: string) => {
    return localImages[slug] || [];
};
`;
    fs.writeFileSync(path.join(__dirname, '../src/data/imagesMap.ts'), mapContent);
    console.log("Done.");
}

run();
