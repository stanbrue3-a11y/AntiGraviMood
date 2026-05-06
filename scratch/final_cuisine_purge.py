import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

PLACEHOLDERS = [
    "Cuisine de saison",
    "Plat de tradition",
    "Cuisine de saison, plat de tradition",
    "Cuisine traditionnelle",
    "Spécialités de saison",
    "Cuisine française" # Often used as placeholder when unknown
]

def clean_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Purge cuisine_type from practical object
    # Matches: cuisine_type: "...", or "cuisine_type": "...",
    new_content = re.sub(r'[\'\"]?cuisine_type[\'\"]?:\s*[\'\"](.*?)[\'\"]\s*,?', '', content)
    
    # 2. Extract first subcategory to set as default cuisine if specials.cuisine is empty
    subcat_match = re.search(r'[\'\"]?subcategory[\'\"]?:\s*\[\s*[\'\"](.+?)[\'\"]', content)
    if subcat_match:
        main_subcat = subcat_match.group(1).capitalize()
        # Ensure specials.cuisine is not empty or placeholder
        cuisine_match = re.search(r'cuisine:\s*\[(.*?)\]', content)
        if cuisine_match:
            current_cuisine = cuisine_match.group(1).strip()
            if not current_cuisine or any(p in current_cuisine for p in PLACEHOLDERS):
                new_content = re.sub(r'cuisine:\s*\[.*?\]', f'cuisine: ["{main_subcat}"]', new_content)
        
        # 3. Clean must_eat if it contains placeholders
        must_eat_match = re.search(r'must_eat:\s*[\'\"](.+?)[\'\"]', content)
        if must_eat_match:
            current_must_eat = must_eat_match.group(1)
            if any(p in current_must_eat for p in PLACEHOLDERS):
                # If we have a subcategory, we can at least say "Cuisine [Cat]"
                new_content = re.sub(r'must_eat:\s*[\'\"](.+?)[\'\"]', f'must_eat: "Cuisine {main_subcat}."', new_content)

    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if clean_file(os.path.join(dirpath, f)):
                count += 1

print(f"Purged placeholders and synced cuisine in {count} files.")
