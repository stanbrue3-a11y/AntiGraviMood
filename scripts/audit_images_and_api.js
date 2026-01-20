const fs = require('fs');
const https = require('https');
const http = require('http');

const data = JSON.parse(fs.readFileSync('src/data/pois_flattened.json'));

let stats = {
    total: data.length,
    google_api_links: 0,
    unsplash: 0,
    wikimedia: 0,
    other: 0,
    broken_links: []
};

// Function to check URL status (head request)
const checkUrl = (url) => {
    return new Promise((resolve) => {
        const proto = url.startsWith('https') ? https : http;
        const req = proto.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
            resolve(res.statusCode);
        });
        req.on('error', () => resolve(0));
        req.on('timeout', () => { req.destroy(); resolve(408); });
        req.end();
    });
};

async function audit() {
    console.log("Analyzing Image Sources...");

    for (const p of data) {
        const url = p.media?.hero_image;
        if (!url) {
            stats.broken_links.push({ name: p.name, reason: "Missing URL" });
            continue;
        }

        // Cost Analysis
        if (url.includes('maps.googleapis.com')) {
            stats.google_api_links++;
        } else if (url.includes('unsplash.com')) {
            stats.unsplash++;
        } else if (url.includes('wikimedia.org')) {
            stats.wikimedia++;
        } else {
            stats.other++;
        }

        // Integrity Check (limit to non-google for speed, or sample?)
        // Let's check ALL, but limit concurrency if needed. For 228 it's fine to do sequential for safety.
        // Skipping Google API links check to avoid burning quota during audit if possible, 
        // BUT user wants to know if they work. 
        // NOTE: Google Links without key or with restriction might fail.

        // Only checking non-google links to be fast and safe? 
        // Actually, checking if they are 404 is important.
        // Let's check a sample or all? All.

        try {
            const status = await checkUrl(url);
            if (status >= 400) {
                stats.broken_links.push({ name: p.name, url: url, status: status });
            }
        } catch (e) {
            stats.broken_links.push({ name: p.name, url: url, status: "Error" });
        }
    }

    console.log("\n=== API & COST REPORT ===");
    console.log(`Total Places: ${stats.total}`);
    console.log(`💰 Google API Calls (PAYANT): ${stats.google_api_links} (${Math.round(stats.google_api_links / stats.total * 100)}%)`);
    console.log(`✅ Unsplash (Gratuit): ${stats.unsplash}`);
    console.log(`✅ Wikimedia (Gratuit): ${stats.wikimedia}`);
    console.log(`❓ Autres (Gratuit): ${stats.other}`);

    console.log("\n=== BROKEN LINKS REPORT ===");
    if (stats.broken_links.length > 0) {
        console.log(`❌ ${stats.broken_links.length} Broken Images found:`);
        stats.broken_links.forEach(b => console.log(`- ${b.name}: ${b.status}`));
    } else {
        console.log("✅ All images are reachable.");
    }
}

audit();
