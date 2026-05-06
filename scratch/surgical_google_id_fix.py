import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def fix_google_id(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if google_id is missing inside the location block
    # We find the location block and check its content
    location_match = re.search(r'location:\s*\{([^}]+)\}', content)
    if location_match:
        location_body = location_match.group(1)
        if 'google_id' not in location_body:
            print(f"Adding google_id to {path}")
            # Insert google_id before the first property in location
            new_location_body = "\n        google_id: \"TODO\"," + location_body
            new_content = content.replace(location_body, new_location_body)
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
