import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def get_official_name(filename):
    name = filename.replace(".ts", "").replace("-", "_")
    # If name is JUST digits, prefix it (for folders)
    if name.isdigit():
        return "arrondissement_" + name
    # If name STARTS with digit but has letters (like 21g-dumpling), prefix with 'n_' if needed for JS validity
    if name[0].isdigit():
        return "n_" + name
    return name

def fix_all_naming_conflicts():
    # 1. Normalize files
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

    # 2. Normalize indices
    for dirpath, dirnames, filenames in os.walk(root):
        if "index.ts" in filenames:
            path = os.path.join(dirpath, "index.ts")
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Special case for the root index.ts
            if path.endswith("tree/index.ts"):
                def replace_root_import(m):
                    old_name = m.group(1)
                    rel_path = m.group(2)
                    folder_name = os.path.basename(rel_path)
                    new_name = "arrondissement_" + folder_name
                    if old_name != new_name:
                        print(f"Normalizing root index import: {old_name} -> {new_name}")
                        nonlocal content
                        content = re.sub(r'\b' + old_name + r'\b', new_name, content)
                    return m.group(0)
                re.sub(r'import\s+\{\s*([a-zA-Z0-9_]+)\s*\}\s+from\s+[\'\"](\./[0-9]+)[\'\"]', replace_root_import, content)
            else:
                def replace_import_usage(m):
                    old_import_name = m.group(1)
                    rel_path = m.group(2)
                    filename = os.path.basename(rel_path) + ".ts"
                    official_name = get_official_name(filename)
                    if old_import_name != official_name:
                        print(f"Normalizing index import: {path} ({old_import_name} -> {official_name})")
                        nonlocal content
                        content = re.sub(r'\b' + old_import_name + r'\b', official_name, content)
                    return m.group(0)
                re.sub(r'import\s+\{\s*([a-zA-Z0-9_]+)\s*\}\s+from\s+[\'\"](\./[a-zA-Z0-9_/.-]+)[\'\"]', replace_import_usage, content)
            
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)

fix_all_naming_conflicts()
