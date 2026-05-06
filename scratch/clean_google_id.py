import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if not f.endswith(".ts") or f == "index.ts":
            continue
        
        path = os.path.join(dirpath, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Cleanup the mess from previous sed
        content = content.replace('google_id: "TODO",        ', 'google_id: "TODO",\n        ')
        
        # 1. Fix missing google_id in location (Correctly this time)
        # Find location object
        location_regex = r'(location:\s*\{)'
        if "google_id" not in content:
            content = re.sub(location_regex, r'\1\n        google_id: "TODO",', content)
            
        with open(path, 'w', encoding='utf-8') as file:
            file.write(content)
