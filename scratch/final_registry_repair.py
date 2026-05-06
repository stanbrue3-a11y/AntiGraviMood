import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

standard_expert_catchline = "L'excellence du produit, la justesse des saveurs et l'âme du quartier."

for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if not f.endswith(".ts") or f == "index.ts":
            continue
        
        path = os.path.join(dirpath, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        changed = False
        
        # 1. Fix expert_catchline object to string
        # Match expert_catchline: { ... }
        if "expert_catchline: {" in content:
            content = re.sub(r'expert_catchline:\s*\{[^}]+\},?', f'expert_catchline: "{standard_expert_catchline}",', content)
            changed = True
            
        # 2. Fix missing google_id in location
        # Find location object and check if google_id is inside
        location_match = re.search(r'location:\s*\{([^}]+)\}', content)
        if location_match:
            location_body = location_match.group(1)
            if "google_id" not in location_body:
                # Add it before the closing brace of location
                new_location_body = location_body.rstrip()
                if not new_location_body.endswith(','):
                    new_location_body += ','
                new_location_body += '\n        google_id: "TODO"\n    '
                content = content.replace(location_body, new_location_body)
                changed = True
        
        if changed:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Fixed {f}")

# 3. Manual naming fixes found
# boot_caf -> boot_cafe in index
index_03_prox = os.path.join(root, "03/proximite/index.ts")
if os.path.exists(index_03_prox):
    with open(index_03_prox, 'r') as f: c = f.read()
    c = c.replace("boot_caf", "boot_cafe")
    with open(index_03_prox, 'w') as f: f.write(c)
    print("Fixed boot_caf in index.ts")

# triplettaGaite -> tripletta in file
tripletta_file = os.path.join(root, "14/gaite/tripletta.ts")
if os.path.exists(tripletta_file):
    with open(tripletta_file, 'r') as f: c = f.read()
    c = c.replace("triplettaGaite", "tripletta")
    with open(tripletta_file, 'w') as f: f.write(c)
    print("Fixed triplettaGaite in tripletta.ts")
