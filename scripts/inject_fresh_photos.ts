import fs from 'fs';
import path from 'path';

const TREE_16 = path.join(__dirname, '../src/data/registry/tree/16');
const freshRefs = JSON.parse(fs.readFileSync('/tmp/fresh_gallery_16.json', 'utf-8'));

// Map slug to file path
function findFile(slug: string): string | null {
  const search = (dir: string): string | null => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const found = search(path.join(dir, entry.name));
        if (found) return found;
      } else if (entry.name === `${slug}.ts`) {
        return path.join(dir, entry.name);
      }
    }
    return null;
  };
  return search(TREE_16);
}

for (const [slug, refs] of Object.entries(freshRefs) as any) {
  const filePath = findFile(slug);
  if (!filePath) {
    console.log(`❌ ${slug}: file not found`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if images block exists
  if (content.includes('images:')) {
    // Replace the hero value
    const heroRegex = /hero:\s*['"`]([^'"`]+)['"`]/;
    const galleryRegex = /gallery:\s*\[([\s\S]*?)\]/;
    
    if (heroRegex.test(content)) {
      content = content.replace(heroRegex, `hero: "${refs.hero}"`);
    }
    
    if (galleryRegex.test(content) && refs.gallery.length >= 2) {
      content = content.replace(galleryRegex, `gallery: [\n      "${refs.gallery[0]}",\n      "${refs.gallery[1]}"\n    ]`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ ${slug}: Updated hero + ${refs.gallery.length} gallery photos`);
  } else {
    console.log(`⚠️  ${slug}: No images block found — needs manual add`);
  }
}

console.log('\n✨ Photo references updated! Run migrate_media.ts to upload to Supabase.');
