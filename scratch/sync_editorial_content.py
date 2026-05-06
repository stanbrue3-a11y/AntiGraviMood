import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def sync_editorial(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract real must_eat from specials if it exists
    specials_must_eat_match = re.search(r'specials:\s*\{[^}]+must_eat:\s*[\'\"](.+?)[\'\"]', content, re.DOTALL)
    
    if specials_must_eat_match:
        real_must_eat = specials_must_eat_match.group(1)
        # Replace the generic placeholder in real_talk
        placeholder = "Cuisine de Saison. Plats de Tradition."
        if placeholder in content:
            print(f"Syncing must_eat for {path}")
            new_content = content.replace(placeholder, real_must_eat)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if sync_editorial(os.path.join(dirpath, f)):
                count += 1

print(f"Synchronized editorial for {count} files.")
