import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def camel_to_snake(name):
    # Avoid changing already snake_case or very short names
    if "_" in name: return name
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

def unify_naming(dirpath):
    for f in os.listdir(dirpath):
        if f.endswith(".ts") and f != "index.ts":
            path = os.path.join(dirpath, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # 1. Normalize export const
            match = re.search(r'export const ([a-zA-Z0-9_]+)\s*:\s*SurgicalPlace', content)
            if match:
                old_name = match.group(1)
                new_name = camel_to_snake(old_name)
                if old_name != new_name:
                    print(f"Renaming export {old_name} -> {new_name} in {f}")
                    content = content.replace(f"export const {old_name}", f"export const {new_name}")
                    content = content.replace(f"export default {old_name}", f"export default {new_name}")
                    with open(path, 'w', encoding='utf-8') as file:
                        file.write(content)

    # 2. Normalize index.ts
    index_path = os.path.join(dirpath, "index.ts")
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Match all imports and their names
        # import { name } from "./path"
        def replace_import(m):
            old_name = m.group(1)
            new_name = camel_to_snake(old_name)
            # Replace name in the whole index content (both import and usage)
            # Use word boundaries to avoid partial matches
            nonlocal content
            content = re.sub(r'\b' + old_name + r'\b', new_name, content)
            return m.group(0) # We don't use the return of sub here, we modified 'content' globally

        # Find all imports to trigger replacements
        re.sub(r'import\s+\{\s*([a-zA-Z0-9_]+)\s*\}\s+from', replace_import, content)
        
        with open(index_path, 'w', encoding='utf-8') as file:
            file.write(content)

for dirpath, dirnames, filenames in os.walk(root):
    unify_naming(dirpath)
