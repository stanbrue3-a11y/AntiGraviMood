import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def fix_google_id(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'google_id' not in content:
        # Append after arrondissement line
        new_content = re.sub(r'([\'\"]?arrondissement[\'\"]?:\s*[0-9]+,?)', r'\1\n        google_id: "TODO",', content)
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if fix_google_id(os.path.join(dirpath, f)):
                count += 1

print(f"Fixed google_id in {count} files.")
