import fs from "fs";
import path from "path";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

require("dotenv").config({ path: path.join(__dirname, "../.env") });

// ════════════════════════════════════════════════════════════
// 🏭 MASS REPAIR V4 — Standard Moelle 2026
// Intelligent · Idempotent · Non-Destructif
// ════════════════════════════════════════════════════════════

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const GEMINI_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
const REGISTRY_ROOT = path.join(__dirname, "../src/data/registry/tree");
const BUCKET = "place-media";
const SUPABASE_HOST = "sfirkmmgkorhblpejrnw.supabase.co";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

// ── Whitelist Fermée (Standard Moelle 2026 §3) ──
const WHITELIST = new Set([
    "français", "italien", "japonais", "coréen", "chinois", "thaï", "vietnamien",
    "indien", "libanais", "mexicain", "péruvien", "brésilien", "éthiopien",
    "méditerranéen", "grec", "turc", "marocain", "américain", "africain",
    "caribéen", "pakistanais", "fusion", "fruits de mer", "bistronomie",
    "gastronomique", "street-food", "végétarien", "bistrot", "brasserie",
    "pizzeria", "bar à vin", "tapas", "bouillon", "asiatique"
]);

// ── CLI ──
interface Opts {
    dryRun: boolean;
    photosOnly: boolean;
    subcatOnly: boolean;
    skipAi: boolean;
    batch: number;
    target: string | null;
}

function parseArgs(): Opts {
    const a = process.argv.slice(2);
    return {
        dryRun: a.includes("--dry-run"),
        photosOnly: a.includes("--photos-only"),
        subcatOnly: a.includes("--subcategory-only"),
        skipAi: a.includes("--skip-ai"),
        batch: parseInt(a.find(x => x.startsWith("--batch="))?.split("=")[1] || "0") || 0,
        target: a.find(x => !x.startsWith("--")) || null,
    };
}

// ── Report ──
interface Report {
    slug: string;
    photosMigrated: number;
    photosAlreadyOk: number;
    subcatStatus: "ok" | "fixed" | "generic" | "skipped";
    apostrophes: number;
    hours: boolean;
    gps: boolean;
    errors: string[];
    warnings: string[];
}

function newReport(slug: string): Report {
    return { slug, photosMigrated: 0, photosAlreadyOk: 0, subcatStatus: "skipped", apostrophes: 0, hours: false, gps: false, errors: [], warnings: [] };
}

// ════════════════════════════════════════════════════════════
// PHASE 1 — Google Data
// ════════════════════════════════════════════════════════════

async function fetchGoogle(gid: string) {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${gid}&fields=geometry,photos,opening_hours,reviews,name&key=${GOOGLE_KEY}&language=fr`;
        const res = await axios.get(url);
        return res.data.status === "OK" ? res.data.result : null;
    } catch { return null; }
}

// ════════════════════════════════════════════════════════════
// PHASE 2 — Smart Subcategory
// ════════════════════════════════════════════════════════════

function extractSubcats(content: string): string[] {
    const m = content.match(/subcategory:\s*\[([\s\S]*?)\]/);
    if (!m) return [];
    return m[1].split(",").map(s => s.replace(/[`"'\[\]\s]/g, "").trim()).filter(Boolean);
}

function isSubcatValid(tags: string[]): boolean {
    if (tags.length === 0) return false;
    // "restaurant" alone is generic placeholder
    if (tags.length === 1 && tags[0].toLowerCase() === "restaurant") return false;
    // "français" alone is SUSPECT — V3 corrupted 160+ files with this value.
    // Only ["français"] alone triggers re-check. ["français", "bistronomie"] is fine.
    if (tags.length === 1 && tags[0].toLowerCase() === "français") return false;
    return tags.some(t => WHITELIST.has(t.toLowerCase()));
}

async function resolveSubcatAI(name: string, reviews: any[]): Promise<string[] | null> {
    if (!GEMINI_KEY) return null;
    const revText = (reviews || []).slice(0, 5).map((r: any) => r.text).join(" | ");
    const wl = Array.from(WHITELIST).join(", ");
    const prompt = `Tu es un expert en classification gastronomique pour MoodMap Paris.
Lieu : "${name}"
Avis : ${revText || "Aucun."}
WHITELIST STRICTE : ${wl}
Choisis 1 à 3 tags de la whitelist. Un restaurant cambodgien N'EST PAS "français". Privilégie le pays précis.
Réponds UNIQUEMENT avec un tableau JSON. Ex: ["japonais", "fusion"]`;

    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            if (attempt > 0) {
                const delay = 2000 * Math.pow(2, attempt);
                console.log(`   ⏳ Retry ${attempt}/3 (attente ${delay / 1000}s)...`);
                await sleep(delay);
            }
            const res = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
                { contents: [{ parts: [{ text: prompt }] }] }
            );
            let text = res.data.candidates[0].content.parts[0].text;
            text = text.replace(/```json/g, "").replace(/```/g, "").trim();
            const jsonMatch = text.match(/\[[\s\S]*?\]/);
            if (!jsonMatch) {
                console.log(`   🔍 DEBUG IA raw: ${text.slice(0, 200)}`);
                return null;
            }
            const tags: string[] = JSON.parse(jsonMatch[0]);
            const normalized = tags.map(t => t.toLowerCase().trim());
            const valid = normalized.filter(t => WHITELIST.has(t));
            if (valid.length > 0) return valid;
            console.log(`   🔍 DEBUG IA tags rejected: ${JSON.stringify(normalized)}`);
            return null;
        } catch (e: any) {
            if (e.response?.status === 429 && attempt < 2) continue;
            console.log(`   🔍 DEBUG IA error: ${e.message}`);
            return null;
        }
    }
    return null;
}

function applySubcat(content: string, tags: string[]): string {
    const arr = tags.map(t => `"${t}"`).join(", ");
    return content.replace(/subcategory:\s*\[[\s\S]*?\]/, `subcategory: [${arr}]`);
}

// ════════════════════════════════════════════════════════════
// PHASE 3 — Photos (Fetch + Migrate to Supabase in ONE pass)
// ════════════════════════════════════════════════════════════

function isSupabaseUrl(v: string) { return v.includes(SUPABASE_HOST); }
function isRawRef(v: string) { return v.length > 50 && !v.includes("://"); }

async function uploadPhoto(ref: string, slug: string, name: string): Promise<string | null> {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${ref}&key=${GOOGLE_KEY}`;
        const res = await axios.get(url, { responseType: "arraybuffer", timeout: 30000 });
        const buf = Buffer.from(res.data, "binary");
        const sp = `${slug}/${name}`;
        const { error } = await supabase.storage.from(BUCKET).upload(sp, buf, { contentType: "image/jpeg", upsert: true });
        if (error) throw error;
        return supabase.storage.from(BUCKET).getPublicUrl(sp).data.publicUrl;
    } catch (e: any) { return null; }
}

function extractHero(c: string): string {
    const m = c.match(/hero:\s*[`"]([\s\S]*?)[`"]/);
    return m?.[1]?.trim() || "";
}

function extractGallery(c: string): string[] {
    const m = c.match(/gallery:\s*\[([\s\S]*?)\]/);
    if (!m) return [];
    const items: string[] = [];
    const re = /[`"]([\s\S]*?)[`"]/g;
    let match;
    while ((match = re.exec(m[1])) !== null) {
        if (match[1].trim().length > 5) items.push(match[1].trim());
    }
    return items;
}

async function resolvePhotos(content: string, google: any, slug: string, report: Report): Promise<string> {
    let updated = content;
    const hero = extractHero(content);
    const gallery = extractGallery(content);
    const googleRefs = google?.photos?.slice(0, 5).map((p: any) => p.photo_reference) || [];

    // ── Hero ──
    let finalHero = hero;
    if (isSupabaseUrl(hero)) {
        report.photosAlreadyOk++;
    } else if (isRawRef(hero)) {
        console.log(`   📸 Migrating hero...`);
        const url = await uploadPhoto(hero, slug, "hero.jpg");
        if (url) { finalHero = url; report.photosMigrated++; }
    } else if (googleRefs.length > 0) {
        console.log(`   📸 Fetching hero from Google...`);
        const url = await uploadPhoto(googleRefs[0], slug, "hero.jpg");
        if (url) { finalHero = url; report.photosMigrated++; }
    }

    // ── Gallery ──
    const finalGallery: string[] = [];

    // Migrate existing items
    for (let i = 0; i < gallery.length; i++) {
        if (isSupabaseUrl(gallery[i])) {
            finalGallery.push(gallery[i]);
            report.photosAlreadyOk++;
        } else if (isRawRef(gallery[i])) {
            console.log(`   📸 Migrating gallery_${i + 1}...`);
            const url = await uploadPhoto(gallery[i], slug, `gallery_${i + 1}.jpg`);
            if (url) { finalGallery.push(url); report.photosMigrated++; }
            await sleep(300);
        }
    }

    // Fill from Google if gallery < 4
    if (finalGallery.length < 4 && googleRefs.length > 1) {
        const used = new Set([hero, ...gallery]);
        const fresh = googleRefs.filter((r: string) => !used.has(r));
        for (const ref of fresh) {
            if (finalGallery.length >= 4) break;
            const idx = finalGallery.length + 1;
            console.log(`   📸 Fetching gallery_${idx} from Google...`);
            const url = await uploadPhoto(ref, slug, `gallery_${idx}.jpg`);
            if (url) { finalGallery.push(url); report.photosMigrated++; }
            await sleep(300);
        }
    }

    // Write back
    updated = updated.replace(/hero:\s*[`"][\s\S]*?[`"]/, `hero: "${finalHero}"`);
    const gStr = finalGallery.length > 0
        ? `gallery: [\n${finalGallery.map(u => `            "${u}"`).join(",\n")}\n        ]`
        : "gallery: []";
    updated = updated.replace(/gallery:\s*\[[\s\S]*?\]/, gStr);

    return updated;
}

// ════════════════════════════════════════════════════════════
// PHASE 4 — Editorial Cleanup
// ════════════════════════════════════════════════════════════

function fixEditorial(content: string, google: any, report: Report): string {
    let u = content;

    // A. Apostrophes: replace all straight ' with context-appropriate substitute
    // Step 1: imports from '...' → from "..."
    u = u.replace(/from\s+'([^']+)'/g, `from "$1"`);
    // Step 2: array items ['a','b'] → ["a","b"]
    u = u.replace(/\[\s*'([^']*?)'(?:\s*,\s*'([^']*?)')*\s*\]/g, m => m.replace(/'/g, `"`));
    // Step 3: property values key: 'val' → key: "val"
    u = u.replace(/:\s*'([^'\n]+?)'/g, `: "$1"`);
    // Step 4: remaining ' between letters → typographic '
    const before = (u.match(/'/g) || []).length;
    u = u.replace(/([a-zA-ZÀ-ÿ])'([a-zA-ZÀ-ÿ])/g, "$1\u2019$2");
    // Step 5: any remaining lone ' after a letter (e.g. end of word before space)
    u = u.replace(/([a-zA-ZÀ-ÿ])'(?=[\s,.\)])/g, "$1\u2019");
    const after = (u.match(/'/g) || []).length;
    report.apostrophes = before - after;

    // B. Hours (7-day format)
    const hrs = google?.opening_hours?.weekday_text?.join(" | ");
    if (hrs) {
        u = u.replace(/opening_hours_raw:\s*[`"][\s\S]*?[`"]/, `opening_hours_raw: "${hrs}"`);
        report.hours = true;
    }

    // C. GPS
    if (google?.geometry?.location) {
        const { lat, lng } = google.geometry.location;
        u = u.replace(/lat:\s*[0-9.]+/, `lat: ${lat}`);
        u = u.replace(/lng:\s*[0-9.]+/, `lng: ${lng}`);
        report.gps = true;
    }

    return u;
}

// ════════════════════════════════════════════════════════════
// MAIN REPAIR LOOP
// ════════════════════════════════════════════════════════════

async function repairFile(fp: string, idx: number, total: number, opts: Opts): Promise<Report | null> {
    const content = fs.readFileSync(fp, "utf-8");
    const slugM = content.match(/slug:\s*[`"](.*?)[`"]/);
    const gidM = content.match(/google_id:\s*[`"](.*?)[`"]/);
    const nameM = content.match(/name:\s*[`"](.*?)[`"]/);
    if (!slugM || !gidM) return null;

    const slug = slugM[1];
    const gid = gidM[1];
    const name = nameM?.[1] || slug;
    const report = newReport(slug);

    console.log(`\n🔧 [${idx}/${total}] ${name} (${slug})`);
    if (opts.dryRun) console.log(`   🧪 DRY RUN — aucune écriture`);

    // Phase 1: Fetch Google
    const google = await fetchGoogle(gid);
    if (!google) {
        report.errors.push("Google ID invalide ou expiré");
        console.log(`   ❌ Google data not found`);
        return report;
    }

    let updated = content;

    // Phase 2: Subcategory
    if (!opts.photosOnly) {
        const tags = extractSubcats(updated);
        if (isSubcatValid(tags)) {
            report.subcatStatus = "ok";
            console.log(`   ✅ Subcategory OK: [${tags.join(", ")}]`);
        } else if (!opts.skipAi) {
            console.log(`   🧠 Subcategory générique [${tags.join(", ")}] → Appel IA...`);
            const aiTags = await resolveSubcatAI(name, google.reviews);
            if (aiTags) {
                updated = applySubcat(updated, aiTags);
                report.subcatStatus = "fixed";
                console.log(`   ✅ Subcategory corrigée → [${aiTags.join(", ")}]`);
            } else {
                report.subcatStatus = "generic";
                report.warnings.push("IA n\u2019a pas pu résoudre la subcategory");
                console.log(`   ⚠️  IA n\u2019a pas pu résoudre — laissé tel quel`);
            }
        } else {
            report.subcatStatus = "skipped";
        }
    }

    // Phase 3: Photos
    if (!opts.subcatOnly) {
        updated = await resolvePhotos(updated, google, slug, report);
    }

    // Phase 4: Editorial
    if (!opts.photosOnly && !opts.subcatOnly) {
        updated = fixEditorial(updated, google, report);
    }

    // Write
    if (!opts.dryRun && updated !== content) {
        fs.writeFileSync(fp, updated);
        console.log(`   💾 Fichier sauvegardé`);
    }

    // Summary line
    const parts: string[] = [];
    if (report.photosMigrated > 0) parts.push(`📸 ${report.photosMigrated} photos migrées`);
    if (report.photosAlreadyOk > 0) parts.push(`✅ ${report.photosAlreadyOk} photos OK`);
    if (report.subcatStatus === "fixed") parts.push(`🏷️ subcat corrigée`);
    if (report.apostrophes > 0) parts.push(`✏️ ${report.apostrophes} apostrophes`);
    if (report.hours) parts.push(`🕐 horaires`);
    if (parts.length > 0) console.log(`   ${parts.join(" · ")}`);

    return report;
}

function getAllFiles(dir: string): string[] {
    const res: string[] = [];
    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) res.push(...getAllFiles(full));
        else if (item.endsWith(".ts") && !item.includes("index")) res.push(full);
    }
    return res;
}

async function main() {
    const opts = parseArgs();
    let files = getAllFiles(REGISTRY_ROOT);
    if (opts.target) files = files.filter(f => f.includes(opts.target!));
    if (opts.batch > 0) files = files.slice(0, opts.batch);

    console.log("═".repeat(60));
    console.log("🏭 MASS REPAIR V4 — Standard Moelle 2026");
    console.log("═".repeat(60));
    console.log(`📂 ${files.length} fichiers ciblés`);
    if (opts.dryRun) console.log("🧪 MODE DRY-RUN ACTIVÉ");
    if (opts.photosOnly) console.log("📸 MODE PHOTOS-ONLY");
    if (opts.subcatOnly) console.log("🏷️ MODE SUBCATEGORY-ONLY");
    if (opts.skipAi) console.log("🚫 IA DÉSACTIVÉE");

    // Ensure bucket exists
    const { error } = await supabase.storage.getBucket(BUCKET);
    if (error?.message?.includes("not found")) {
        await supabase.storage.createBucket(BUCKET, { public: true });
    }

    const reports: Report[] = [];
    for (let i = 0; i < files.length; i++) {
        const r = await repairFile(files[i], i + 1, files.length, opts);
        if (r) reports.push(r);
        await sleep(200); // Google API rate limiting
    }

    // ── Final Summary ──
    console.log("\n" + "═".repeat(60));
    console.log("📊 RAPPORT FINAL");
    console.log("═".repeat(60));
    const totalPhotos = reports.reduce((s, r) => s + r.photosMigrated, 0);
    const totalOk = reports.reduce((s, r) => s + r.photosAlreadyOk, 0);
    const subcatFixed = reports.filter(r => r.subcatStatus === "fixed").length;
    const subcatGeneric = reports.filter(r => r.subcatStatus === "generic").length;
    const apostrophes = reports.reduce((s, r) => s + r.apostrophes, 0);
    const errs = reports.filter(r => r.errors.length > 0);

    console.log(`📸 Photos migrées    : ${totalPhotos}`);
    console.log(`✅ Photos déjà OK    : ${totalOk}`);
    console.log(`🏷️  Subcat corrigées  : ${subcatFixed}`);
    console.log(`⚠️  Subcat génériques : ${subcatGeneric}`);
    console.log(`✏️  Apostrophes fixées: ${apostrophes}`);

    if (errs.length > 0) {
        console.log(`\n❌ ERREURS (${errs.length}):`);
        errs.forEach(r => console.log(`   • ${r.slug}: ${r.errors.join(", ")}`));
    }
    if (subcatGeneric > 0) {
        console.log(`\n⚠️  SUBCATEGORIES GÉNÉRIQUES (action manuelle requise):`);
        reports.filter(r => r.subcatStatus === "generic").forEach(r => console.log(`   • ${r.slug}`));
    }
}

main().catch(e => { console.error("💀 FATAL:", e.message); process.exit(1); });
