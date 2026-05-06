import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"
base_supabase_url = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/"

def full_gallery_sync(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    slug_match = re.search(r'[\'\"]?slug[\'\"]?:\s*[\'\"](.+?)[\'\"]', content)
    if not slug_match:
        return False
    
    slug = slug_match.group(1)
    
    # New Standard: Hero + 4 gallery items = 5 total in the gallery array
    new_images = f"""  images: {{
    hero: "{base_supabase_url}{slug}/hero.jpg",
    gallery: [
      "{base_supabase_url}{slug}/hero.jpg",
      "{base_supabase_url}{slug}/1.jpg",
      "{base_supabase_url}{slug}/2.jpg",
      "{base_supabase_url}{slug}/3.jpg",
      "{base_supabase_url}{slug}/4.jpg"
    ]
  }},"""

    pattern = r'[\'\"]?images[\'\"]?:\s*\{.+?\},'
    new_content = re.sub(pattern, new_images, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if full_gallery_sync(os.path.join(dirpath, f)):
                count += 1

print(f"Updated gallery to 5 items in {count} files.")
