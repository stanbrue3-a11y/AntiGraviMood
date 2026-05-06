import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def fix_cuisine_type(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract subcategory
    subcat_match = re.search(r'[\'\"]?subcategory[\'\"]?:\s*\[\s*[\'\"](.+?)[\'\"]', content)
    if not subcat_match:
        return False
    
    main_subcat = subcat_match.group(1)
    # Capitalize for specials.cuisine
    cuisine_val = main_subcat.capitalize()
    
    # Replace empty cuisine: [] or missing cuisine
    # Match cuisine: [] or cuisine: ["..."] (to normalize)
    new_content = re.sub(r'cuisine:\s*\[.*?\]', f'cuisine: ["{cuisine_val}"]', content)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if fix_cuisine_type(os.path.join(dirpath, f)):
                count += 1

print(f"Fixed cuisine type in {count} files.")
