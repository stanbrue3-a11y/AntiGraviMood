import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"
base_supabase_url = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/"

def robust_repair(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    changed = False
    
    # 1. Image Migration (handles quotes)
    slug_match = re.search(r'[\'\"]?slug[\'\"]?:\s*[\'\"](.+?)[\'\"]', content)
    if slug_match:
        slug = slug_match.group(1)
        new_images = f"""  images: {{
    hero: "{base_supabase_url}{slug}/hero.jpg",
    gallery: [
      "{base_supabase_url}{slug}/1.jpg",
      "{base_supabase_url}{slug}/2.jpg",
      "{base_supabase_url}{slug}/3.jpg",
      "{base_supabase_url}{slug}/4.jpg"
    ]
  }},"""
        # Match "images": { or images: {
        pattern = r'[\'\"]?images[\'\"]?:\s*\{.+?\},'
        if re.search(pattern, content, flags=re.DOTALL):
            content = re.sub(pattern, new_images, content, flags=re.DOTALL)
            changed = True

    # 2. Editorial Sync (with fallback)
    placeholder = "Cuisine de Saison. Plats de Tradition."
    if placeholder in content:
        # Try to find specials.must_eat
        must_eat = None
        specials_match = re.search(r'specials:\s*\{[^}]+must_eat:\s*[\'\"](.+?)[\'\"]', content, re.DOTALL)
        if specials_match:
            must_eat = specials_match.group(1)
        else:
            # Fallback: Use subcategory and name
            cat_match = re.search(r'[\'\"]?subcategory[\'\"]?:\s*\[\s*[\'\"](.+?)[\'\"]', content)
            name_match = re.search(r'[\'\"]?name[\'\"]?:\s*[\'\"](.+?)[\'\"]', content)
            if cat_match and name_match:
                cat = cat_match.group(1).capitalize()
                name = name_match.group(1)
                must_eat = f"{cat}. {name}."
        
        if must_eat:
            print(f"Repairing editorial for {path} -> {must_eat}")
            content = content.replace(placeholder, must_eat)
            changed = True

    if changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if robust_repair(os.path.join(dirpath, f)):
                count += 1

print(f"Robustly repaired {count} files.")
