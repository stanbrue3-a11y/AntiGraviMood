import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

def fix_chez_maman_indices():
    # 1. Remove from 19 index
    index_19 = os.path.join(root, "19", "index.ts")
    if os.path.exists(index_19):
        with open(index_19, 'r') as f: content = f.read()
        content = re.sub(r'import\s+\{\s*chez_maman\s*\}\s+from\s+[\'\"]\./laumi-re/chez-maman[\'\"];?\n?', '', content)
        content = re.sub(r'\bchez_maman\b,?\n?', '', content)
        with open(index_19, 'w') as f: f.write(content)
        print("Removed chez_maman from index 19")

    # 2. Add to 11 index
    index_11 = os.path.join(root, "11", "index.ts")
    if os.path.exists(index_11):
        with open(index_11, 'r') as f: content = f.read()
        # Insert import
        import_line = "import { chez_maman } from './folie-mericourt/chez-maman';\n"
        if import_line not in content:
            content = import_line + content
        # Add to array
        if "chez_maman" not in content:
            content = content.replace("arrondissement_11Places = [", "arrondissement_11Places = [\n    chez_maman,")
        with open(index_11, 'w') as f: f.write(content)
        print("Added chez_maman to index 11")

fix_chez_maman_indices()
