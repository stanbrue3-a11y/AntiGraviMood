import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"
base_supabase_url = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/"

def migrate_to_supabase(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract slug
    slug_match = re.search(r'slug:\s*[\'\"](.+?)[\'\"]', content)
    if not slug_match:
        return False
    
    slug = slug_match.group(1)
    
    # Construct new images object
    new_images = f"""  images: {{
    hero: "{base_supabase_url}{slug}/hero.jpg",
    gallery: [
      "{base_supabase_url}{slug}/1.jpg",
      "{base_supabase_url}{slug}/2.jpg",
      "{base_supabase_url}{slug}/3.jpg",
      "{base_supabase_url}{slug}/4.jpg"
    ]
  }},"""

    # Replace old images object
    # We match from images: { up to the closing },
    new_content = re.sub(r'images:\s*\{.+?\},', new_images, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if migrate_to_supabase(os.path.join(dirpath, f)):
                count += 1

print(f"Migrated {count} files to Supabase images.")
