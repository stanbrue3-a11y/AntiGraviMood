import os
import re

def to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

for dirpath, dirnames, filenames in os.walk(root):
    if "index.ts" not in filenames:
        continue
    
    index_path = os.path.join(dirpath, "index.ts")
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
    
    # Find all imports: import { name } from "./filename"
    imports = re.findall(r'import\s+\{\s*([a-zA-Z0-9_]+)\s*\}\s+from\s+"(\./[a-zA-Z0-9\.-]+)"', index_content)
    
    for import_name, rel_path in imports:
        # Construct actual file path
        ts_file = rel_path.lstrip('./') + ".ts"
        full_ts_path = os.path.join(dirpath, ts_file)
        
        if not os.path.exists(full_ts_path):
            continue
        
        with open(full_ts_path, 'r', encoding='utf-8') as f:
            ts_content = f.read()
        
        # Check if the import_name is exported in the file
        if f"export const {import_name}" not in ts_content:
            # Try to find what IS exported
            match = re.search(r'export const ([a-zA-Z0-9_]+)\s*:\s*SurgicalPlace', ts_content)
            if match:
                actual_export = match.group(1)
                print(f"Mismatch in {ts_file}: index expects '{import_name}', file exports '{actual_export}'")
                
                # Fix the file export to match the index
                new_ts_content = ts_content.replace(f"export const {actual_export}", f"export const {import_name}")
                with open(full_ts_path, 'w', encoding='utf-8') as f:
                    f.write(new_ts_content)
                print(f"  Fixed export in {ts_file}")
            else:
                print(f"Could not find SurgicalPlace export in {ts_file}")
