import fs from 'fs';
import path from 'path';
import axios from 'axios';

// CRITICAL: Load registry data
import { SurgicalPlace } from '../src/data/registry/type-definition';
const allPlaces: SurgicalPlace[] = require('../src/data/registry/index').default;

console.log(`🔍 [Link Validator] Starting audit of ${allPlaces.length} places...`);

interface ValidationResult {
    id: string;
    name: string;
    field: string;
    url: string;
    status: number | string;
    error?: string;
}

async function checkUrl(url: string): Promise<{ status: number | string; error?: string }> {
    try {
        const response = await axios.get(url, {
            timeout: 5000,
            headers: { 'User-Agent': 'MoodMap-Validator/1.0 (Industrial 2026)' }
        });
        return { status: response.status };
    } catch (error: any) {
        return {
            status: error.response?.status || 'ERROR',
            error: error.message
        };
    }
}

async function runAudit() {
    const results: ValidationResult[] = [];
    const queue: Promise<void>[] = [];

    for (const p of allPlaces) {
        // Check Main Action
        if (p.practical.main_action?.url) {
            queue.push((async () => {
                const res = await checkUrl(p.practical.main_action!.url);
                if (res.status !== 200) {
                    results.push({ id: p.id, name: p.name, field: 'main_action', url: p.practical.main_action!.url, ...res });
                }
            })());
        }

        // Check Instagram
        if (p.instagram_handle) {
            const instaUrl = `https://www.instagram.com/${p.instagram_handle.replace('@', '')}/`;
            queue.push((async () => {
                const res = await checkUrl(instaUrl);
                // Instagram often blocks scrapers with 401/403/429. We only flag hard 404s.
                if (res.status === 404) {
                    results.push({ id: p.id, name: p.name, field: 'instagram', url: instaUrl, ...res });
                }
            })());
        }
    }

    await Promise.all(queue);

    if (results.length === 0) {
        console.log('✅ [Link Validator] All links are healthy!');
    } else {
        console.error(`❌ [Link Validator] Found ${results.length} issues:`);
        console.table(results);
        process.exit(1);
    }
}

runAudit();
