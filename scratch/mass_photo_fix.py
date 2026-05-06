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
        print(f"  Error fetching photo for {place_id}: {e}")
    return None

def fix_file(file_path):
    print(f"Processing {file_path}...")
    if not os.path.exists(file_path):
        print(f"  File not found: {file_path}")
        return False

    with open(file_path, 'r') as f:
        content = f.read()

    # IMPROVED: Search for google_id or google_id field in any structure
    google_id = None
    gid_patterns = [
        r'google_id:\s*"([^"]+)"',
        r'"google_id":\s*"([^"]+)"',
        r'googleId:\s*"([^"]+)"',
        r'"googleId":\s*"([^"]+)"'
    ]
    for pattern in gid_patterns:
        match = re.search(pattern, content)
        if match:
            google_id = match.group(1)
            break
            
    if not google_id:
        print(f"  No google_id found in {file_path}")
        return False

    stable_id = get_stable_photo_id(google_id)

    if stable_id:
        # Replace hero image IDs starting with ATCDNf
        patterns_to_replace = [
            (r'hero:\s*"ATCDNf[^"]*"', f'hero: "{stable_id}"'),
            (r'"hero":\s*"ATCDNf[^"]*"', f'"hero": "{stable_id}"'),
            (r'hero:\s*`ATCDNf[^`]*`', f'hero: "{stable_id}"'),
            (r'"hero":\s*`ATCDNf[^`]*`', f'"hero": "{stable_id}"')
        ]
        
        new_content = content
        for p, r in patterns_to_replace:
            new_content = re.sub(p, r, new_content)

        if new_content != content:
            with open(file_path, 'w') as f:
                f.write(new_content)
            print(f"  Fixed! (G-ID: {google_id[:8]}... -> Photo: {stable_id[:10]}...)")
            return True
        else:
            print("  No ATCDNf pattern found to replace in hero field.")
    else:
        print(f"  Could not find stable ID for {google_id}")
    return False

# Read the full list
with open('scratch/places_to_fix.txt', 'r') as f:
    files = [line.strip() for line in f.readlines()]

fixed_count = 0
for file_path in files:
    if fix_file(file_path):
        fixed_count += 1
    # Very small sleep
    time.sleep(0.1)

print(f"\nFINISHED: Fixed {fixed_count} out of {len(files)} places.")
