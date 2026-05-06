import os
import re
import urllib.request
import json
import time

API_KEY = "AIzaSyA1j0Ebdao_4hGkmhtGPZBAwxnGeWEeLf8"

def get_stable_photo_gallery(place_id):
    if not place_id: return None, []
    try:
        url = f"https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=photos&key={API_KEY}"
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode())
            if 'result' in data and 'photos' in data['result']:
                photos = data['result']['photos']
                hero = photos[0]['photo_reference']
                gallery = [p['photo_reference'] for p in photos[1:4]] # Get up to 3 more photos
                return hero, gallery
    except Exception as e:
        pass
    return None, []

def enrich_gallery(file_path):
    if not os.path.exists(file_path): return False
    
    with open(file_path, 'r') as f:
        content = f.read()

    # Extract google_id
    google_id = None
    gid_patterns = [r'google_id:\s*"([^"]+)"', r'"google_id":\s*"([^"]+)"', r'googleId:\s*"([^"]+)"']
    for pattern in gid_patterns:
        match = re.search(pattern, content)
        if match:
            google_id = match.group(1)
            break
    
    if not google_id or len(google_id) < 5: return False

    hero, gallery = get_stable_photo_gallery(google_id)
    if hero:
        # Replace hero
        new_content = re.sub(r'hero:\s*["`][^"`]*["`]', f'hero: "{hero}"', content)
        new_content = re.sub(r'"hero":\s*["`][^"`]*["`]', f'"hero": "{hero}"', new_content)
        
        # Replace gallery
        gallery_str = json.dumps(gallery)
        new_content = re.sub(r'gallery:\s*\[[^\]]*\]', f'gallery: {gallery_str}', new_content)
        new_content = re.sub(r'"gallery":\s*\[[^\]]*\]', f'"gallery": {gallery_str}', new_content)

        if new_content != content:
            with open(file_path, 'w') as f:
                f.write(new_content)
            print(f"📸 ENRICHED: {os.path.basename(file_path)} (+{len(gallery)} photos)")
            return True
    
    return False

fixed_count = 0
total_checked = 0
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            total_checked += 1
            # We target specific areas first for speed, or everything
            if enrich_gallery(os.path.join(root, file)):
                fixed_count += 1
                time.sleep(0.1)

print(f"\nENRICHMENT FINISHED: Updated {fixed_count} places.")
