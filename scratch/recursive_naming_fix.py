import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def fix_naming_mismatch(index_path):
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
    
    # Improved regex for imports from same or sub-directories
    # import { name } from "./path/to/file" or "./file"
    imports = re.findall(r'import\s+\{\s*([a-zA-Z0-9_]+)\s*\}\s+from\s+"(\./[a-zA-Z0-9_/.-]+)"', index_content)
    
    dirpath = os.path.dirname(index_path)
    
    for import_name, rel_path in imports:
        # Construct actual file path
        ts_file = rel_path.lstrip('./') + ".ts"
        full_ts_path = os.path.abspath(os.path.join(dirpath, ts_file))
        
        if not os.path.exists(full_ts_path):
            continue
        
        with open(full_ts_path, 'r', encoding='utf-8') as f:
            ts_content = f.read()
        
        # Check if the import_name is exported in the file
        if f"export const {import_name}" not in ts_content:
            # Try to find what IS exported (usually a SurgicalPlace)
            match = re.search(r'export const ([a-zA-Z0-9_]+)\s*:\s*SurgicalPlace', ts_content)
            if match:
                actual_export = match.group(1)
                print(f"Mismatch in {ts_file}: {index_path} expects '{import_name}', file exports '{actual_export}'")
                
                # Fix the file export to match the index
                new_ts_content = ts_content.replace(f"export const {actual_export}", f"export const {import_name}")
                # Also fix export default if present
                new_ts_content = re.sub(f"export default {actual_export}", f"export default {import_name}", new_ts_content)
                
                with open(full_ts_path, 'w', encoding='utf-8') as f:
                    f.write(new_ts_content)
                print(f"  Fixed export in {ts_file}")

for dirpath, dirnames, filenames in os.walk(root):
    if "index.ts" in filenames:
        fix_naming_mismatch(os.path.join(dirpath, "index.ts"))
