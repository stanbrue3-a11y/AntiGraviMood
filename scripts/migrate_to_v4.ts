import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Chargement des variables d'environnement
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Clés API Supabase manquantes dans le .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const REGISTRY_PATH = path.join(__dirname, '../src/data/registry/tree');

// Fonction pour extraire une valeur avec une Regex
function extractMatch(
  content: string,
  regex: RegExp,
  defaultValue: string | null = null,
): string | null {
  const match = content.match(regex);
  return match ? match[1].trim() : defaultValue;
}

// Fonction pour extraire un booléen
function extractBool(content: string, regex: RegExp, defaultValue: boolean): boolean {
  const match = content.match(regex);
  if (!match) return defaultValue;
  return match[1].trim() === 'true';
}

// Fonction pour extraire le mood dominant (celui qui a le plus gros score)
function extractDominantMood(content: string): 'chill' | 'festif' | 'culturel' {
  const moodMatch = content.match(/moods:\s*({[^}]+})/);
  if (!moodMatch) return 'chill'; // Défaut
  try {
    // Nettoyage rapide pour parser le faux JSON du TS
    const cleanJson = moodMatch[1].replace(/([a-zA-Z0-9_]+):/g, '"$1":').replace(/'/g, '"');
    const moods = JSON.parse(cleanJson);
    let max = -1;
    let dominant: 'chill' | 'festif' | 'culturel' = 'chill';
    for (const [key, value] of Object.entries(moods)) {
      if (typeof value === 'number' && value > max) {
        max = value;
        dominant = key as 'chill' | 'festif' | 'culturel';
      }
    }
    return dominant;
  } catch (e) {
    return 'chill';
  }
}

// Chercher tous les fichiers TS
function getAllFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function main() {
  console.log(`\n🚀 [MIGRATION V4] Lancement de l'aspiration massive des fiches TS...`);

  const files = getAllFiles(REGISTRY_PATH);
  console.log(`📂 ${files.length} fichiers trouvés dans le registre.`);

  let successCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');

    try {
      // Extraction Brutale via Regex (pour ignorer les erreurs de syntaxe TS)
      const slug = extractMatch(content, /slug:\s*["']([^"']+)["']/);
      const name = extractMatch(content, /name:\s*["']([^"']+)["']/);
      if (!slug || !name) continue;

      const category = 'restaurant'; // Fixe pour le moment

      // Subcategories (Array)
      const subMatch = content.match(/subcategory:\s*(\[[^\]]+\])/);
      let subcategories = [];
      if (subMatch) {
        try {
          subcategories = JSON.parse(subMatch[1].replace(/'/g, '"'));
        } catch (e) {}
      }

      const dominant_mood = extractDominantMood(content);
      const address = extractMatch(content, /address:\s*["']([^"']+)["']/);
      const arrondissement = parseInt(extractMatch(content, /arrondissement:\s*(\d+)/, '0')!);
      const lat = parseFloat(extractMatch(content, /lat:\s*([0-9.]+)/, '0')!);
      const lng = parseFloat(extractMatch(content, /lng:\s*([0-9.]+)/, '0')!);
      const nearest_metro = extractMatch(content, /nearest_metro:\s*["']([^"']+)["']/);

      // Metro lines (Array)
      const metroMatch = content.match(/metro_lines:\s*(\[[^\]]+\])/);
      let metro_lines = [];
      if (metroMatch) {
        try {
          metro_lines = JSON.parse(metroMatch[1].replace(/'/g, '"'));
        } catch (e) {}
      }

      const google_id = extractMatch(content, /google_id:\s*["']([^"']+)["']/);
      const google_rating = parseFloat(extractMatch(content, /google_rating:\s*([0-9.]+)/, '0')!);
      const google_reviews_count = parseInt(
        extractMatch(content, /google_reviews_count:\s*(\d+)/, '0')!,
      );

      // Editorial (Attention aux backticks)
      const descriptionMatch = content.match(/description:\s*`([^`]+)`/);
      const description = descriptionMatch ? descriptionMatch[1].trim() : null;

      const tipMatch = content.match(/insider_tip:\s*`([^`]+)`/);
      const insider_tip = tipMatch ? tipMatch[1].trim() : null;

      // Horaires et Badges
      const opening_hours_raw = extractMatch(content, /opening_hours_raw:\s*["']([^"']+)["']/);
      const reservation_policy = extractMatch(
        content,
        /reservation_policy:\s*["']([^"']+)["']/,
        'sans_resa',
      );
      const has_terrace = extractBool(content, /terrace:\s*(true|false)/, false);
      const closes_late = extractBool(content, /ferme_tard:\s*(true|false)/, false);

      // Images (Extraction des URLs Supabase Storage)
      const heroMatch = content.match(/hero:\s*["']([^"']+)["']/);
      const hero_image = heroMatch ? heroMatch[1] : null;

      const galleryMatch = content.match(/gallery:\s*(\[[^\]]+\])/);
      let google_photos = [];
      if (galleryMatch) {
        try {
          google_photos = JSON.parse(galleryMatch[1].replace(/'/g, '"'));
        } catch (e) {}
      }

      // --- PRÉPARATION DU PAYLOAD SQL ---
      const payload = {
        slug,
        name,
        category,
        subcategories,
        dominant_mood,
        address,
        arrondissement,
        lat,
        lng,
        nearest_metro,
        metro_lines,
        google_id: google_id || null, // Null si vide pour éviter le conflit UNIQUE
        google_rating,
        google_reviews_count,
        description,
        insider_tip,
        opening_hours_raw,
        closes_late,
        has_terrace,
        reservation_policy,
        hero_image,
        google_photos,
        // ON LAISSE LES MENUS VIDES ! (Anti-Stupidity respecté)
        on_mange_quoi_ici: null,
        plat_median_cents: null,
        status: 'SCAFFOLDED',
      };

      // UPSERT : Insère ou met à jour si le slug existe déjà
      const { error } = await supabase.from('places').upsert(payload, { onConflict: 'slug' });

      if (error) {
        console.error(`❌ Échec pour ${slug}: ${error.message}`);
        errorCount++;
      } else {
        process.stdout.write('.'); // Point de progression visuel
        successCount++;
      }
    } catch (e: any) {
      console.error(`\n❌ Crash Regex sur le fichier ${file} : ${e.message}`);
      errorCount++;
    }
  }

  console.log(`\n\n✅ MIGRATION TERMINÉE !`);
  console.log(`📊 Succès : ${successCount}`);
  console.log(`⚠️ Échecs  : ${errorCount}`);
  console.log(`Tu peux vérifier ta table Supabase !`);
}

main().catch(console.error);
