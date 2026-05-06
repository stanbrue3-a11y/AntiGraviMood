import os
import re
import urllib.request
import json
import time

API_KEY = "AIzaSyA1j0Ebdao_4hGkmhtGPZBAwxnGeWEeLf8"

def get_stable_photo_id(place_id):
    if not place_id: return None
    try:
        url = f"https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=photos&key={API_KEY}"
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode())
            if 'result' in data and 'photos' in data['result']:
                return data['result']['photos'][0]['photo_reference']
    except Exception as e:
        pass
    return None

def force_redress(file_path):
    if not os.path.exists(file_path): return False
    
    with open(file_path, 'r') as f:
        content = f.read()

    # Need redress! Extract google_id
    google_id = None
    gid_patterns = [r'google_id:\s*"([^"]+)"', r'"google_id":\s*"([^"]+)"', r'googleId:\s*"([^"]+)"']
    for pattern in gid_patterns:
        match = re.search(pattern, content)
        if match:
            google_id = match.group(1)
            break
    
    if not google_id or len(google_id) < 5: return False

    # Check if we SHOULD force (if current hero is suspiciously long or contains placeholders)
    hero_match = re.search(r'hero:\s*["`]([^"`]+)["`]', content)
    should_force = True
    if hero_match:
        current = hero_match.group(1)
        # Only skip if it's a known short stable ID and not an URL
        if len(current) < 300 and not current.startswith('http') and current.startswith('AU_ZVE'):
            should_force = False
        if "Y_Y_Y" in current: # Explicit placeholder
            should_force = True

    if not should_force: return False

    stable_id = get_stable_photo_id(google_id)
    if stable_id:
        # Replace the hero field
        new_content = re.sub(r'hero:\s*["`][^"`]*["`]', f'hero: "{stable_id}"', content)
        new_content = re.sub(r'"hero":\s*["`][^"`]*["`]', f'"hero": "{stable_id}"', new_content)
        
        if new_content != content:
            with open(file_path, 'w') as f:
                f.write(new_content)
            print(f"🔥 FORCED: {os.path.basename(file_path)}")
            return True
    
    return False

fixed_count = 0
total_checked = 0
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            total_checked += 1
            if force_redress(os.path.join(root, file)):
                fixed_count += 1
                time.sleep(0.05)

print(f"\nFORCE FINISHED: Redressed {fixed_count} places.")
