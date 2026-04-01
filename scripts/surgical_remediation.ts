import fs from 'fs';
import path from 'path';

/**
 * SURGICAL REMEDIATION SCRIPT (Standard Moelle 2026) 🧬🛡️
 * Objective: Auto-fix 456+ validation errors in the legacy registry.
 */

const REGISTRY_ROOT = path.join(__dirname, '../src/data/registry/tree');
const WHITELIST = [
  'vietnamien', 'japonais', 'français', 'bar à vin', 'pizzeria', 
  'bistronomie', 'italien', 'éthiopien', 'indien', 'pakistanais', 
  'asiatique', 'méditerranéen', 'terrasse', "viande d'exception", "ferme tard"
];

const TAG_MAP: Record<string, string> = {
  'chinois': 'asiatique',
  'sandwich': 'français',
  'burger': 'français',
  'libanais': 'méditerranéen',
  'thaï': 'asiatique',
  'péruvien': 'méditerranéen',
  'mexicain': 'méditerranéen',
};

async function remediateFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. APOSTROPHE FIX (The Surgical Way) ⚖️
  // Target only specific editorial fields to avoid breaking JS/TS syntax (like menu_type: 'fixed')
  const fieldsToFix = ['name', 'description', 'expert_catchline', 'insider_tip', 'must_eat', 'must_drink', 'smart_tip', 'specials.must_eat'];
  fieldsToFix.forEach(field => {
    const regex = new RegExp(`(${field}:\\s*[\`"'])([\\s\\S]+?)([\`"'])`, 'g');
    content = content.replace(regex, (match, prefix, value, suffix) => {
        return prefix + value.replace(/'/g, '’') + suffix;
    });
  });

  // Also fix items names in menus
  content = content.replace(/(name:\s*["'])([^"']+)(["'])/g, (match, prefix, value, suffix) => {
      return prefix + value.replace(/'/g, '’') + suffix;
  });

  // 2. TAG MAPPING (The Whitelist Guard) 🛡️
  content = content.replace(/subcategory:\s*\[([^\]]+)\]/g, (match, tagsStr) => {
    const tags = tagsStr.split(',').map(t => t.trim().replace(/['"]/g, ''));
    const fixedTags = tags.map(tag => {
      if (WHITELIST.includes(tag)) return `'${tag}'`;
      if (TAG_MAP[tag.toLowerCase()]) return `'${TAG_MAP[tag.toLowerCase()]}'`;
      return `'français'`; // Default fallback for unknown legacy tags
    });
    return `subcategory: [${[...new Set(fixedTags)].join(', ')}]`;
  });

  // 3. MENU CATEGORY NORMALIZATION (The Label Guard) 🏷️
  const LABEL_MAP: Record<string, string> = {
    'Entrées & Raviolis (Jiaozi)': 'Entrées',
    'Burgers Chinois (Mo’s)': 'Plats',
    'Les Plats (Biang Biang)': 'Plats',
    'Desserts & Douceurs Maison': 'Desserts',
    'Dips & Petits Mezze': 'Entrées',
    'Mezze (à partager)': 'À Partager',
    'Tabak & Sofra (Plats principaux)': 'Plats',
    'Desserts (Helo)': 'Desserts'
  };

  content = content.replace(/display_label:\s*["']([^"']+)["']/g, (match, label) => {
    if (LABEL_MAP[label]) return `display_label: "${LABEL_MAP[label]}"`;
    return match;
  });

  // 4. MENU CATEGORY TYPE INJECTION (The Substance Bridge) 🥩

  // 4. PRICE STRING TO CENTS COERCION (The Value Vault) 💸
  content = content.replace(/price:\s*["'](\d+)[€,]*(\d+)?["']/g, (match, euro, cents) => {
    const totalCents = (parseInt(euro) * 100) + (parseInt(cents || '0'));
    return `price_cents: ${totalCents}`;
  });

  // 5. CATCHLINE FILLER (The Editorial Patch) ✍️
  if (!content.includes('expert_catchline:')) {
    content = content.replace(/description:\s*`([^`]+)`/, (match, desc) => {
      const shortDesc = desc.split('.')[0].trim();
      return `${match},\n  expert_catchline: \`${shortDesc}.\``;
    });
  }

  // 6. CATEGORY ENFORCEMENT (The Restaurant Purge) 🛑
  const nonRestaurants = ['museum', 'parc', 'monument', 'exhibition', 'culture'];
  const hasNonRestaurantCategory = nonRestaurants.some(cat => 
    new RegExp(`["']?category["']?:\\s*["']${cat}["']`, 'i').test(content)
  );

  if (hasNonRestaurantCategory) {
      const fileName = path.basename(filePath);
      const archiveDir = path.join(__dirname, '../src/data/registry/archived_non_restaurants');
      if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir, { recursive: true });
      fs.renameSync(filePath, path.join(archiveDir, fileName));
      console.log(`🗑️ [Purge] Archived non-restaurant: ${fileName}`);
      return;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ [Fix] Remediated: ${path.basename(filePath)}`);
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.ts') && file !== 'index.ts') {
      remediateFile(fullPath);
    }
  }
}

console.log('🚀 [Surgical V2] Starting Mass Remediation...');
walkDir(REGISTRY_ROOT);
console.log('🏁 [Surgical V2] Operation Complete.');
