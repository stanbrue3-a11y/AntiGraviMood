import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def get_official_name(filename):
    # e.g. "sot-ly-laisse.ts" -> "sot_ly_laisse"
    name = filename.replace(".ts", "").replace("-", "_")
    # Handle some special cases if needed, but let's stick to this first
    return name

def fix_all_naming_conflicts():
    # 1. First, normalize all file exports to match their filenames
    for dirpath, dirnames, filenames in os.walk(root):
        for f in filenames:
            if f.endswith(".ts") and f != "index.ts":
                path = os.path.join(dirpath, f)
                official_name = get_official_name(f)
                
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                match = re.search(r'export const ([a-zA-Z0-9_]+)\s*:\s*SurgicalPlace', content)
                if match:
                    current_name = match.group(1)
                    if current_name != official_name:
                        print(f"Normalizing file export: {f} ({current_name} -> {official_name})")
                        content = content.replace(f"export const {current_name}", f"export const {official_name}")
                        content = content.replace(f"export default {current_name}", f"export default {official_name}")
                        with open(path, 'w', encoding='utf-8') as file:
                            file.write(content)

    # 2. Second, normalize all indices to use the official names for their imports
    for dirpath, dirnames, filenames in os.walk(root):
        if "index.ts" in filenames:
            path = os.path.join(dirpath, "index.ts")
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Find imports: import { name } from "./path/to/file"
            # We match the relative path to find the actual filename
            def replace_import_usage(m):
                old_import_name = m.group(1)
                rel_path = m.group(2) # e.g. "./alexandre-dumas/sot-ly-laisse"
                
                filename = os.path.basename(rel_path) + ".ts"
                official_name = get_official_name(filename)
                
                if old_import_name != official_name:
                    print(f"Normalizing index import: {path} ({old_import_name} -> {official_name})")
                    # Replace usage in the whole content
                    nonlocal content
                    content = re.sub(r'\b' + old_import_name + r'\b', official_name, content)
                
                return m.group(0) # Not actually replacing via this return

            re.sub(r'import\s+\{\s*([a-zA-Z0-9_]+)\s*\}\s+from\s+[\'\"](\./[a-zA-Z0-9_/.-]+)[\'\"]', replace_import_usage, content)
            
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)

fix_all_naming_conflicts()
