import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"
api_key = "${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}"
base_url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference="

def fix_images(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match raw photo references that are not yet URLs
    # They usually start with AU_ZVEF... and are inside quotes
    # and don't contain 'http'
    raw_ref_pattern = r'\"(AU_ZVEF[a-zA-Z0-9_-]{50,})\"'
    
    def replace_with_url(match):
        ref = match.group(1)
        return f'`{base_url}{ref}&key={api_key}`'

    new_content = re.sub(raw_ref_pattern, replace_with_url, content)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if fix_images(os.path.join(dirpath, f)):
                count += 1

print(f"Repaired images in {count} files.")
