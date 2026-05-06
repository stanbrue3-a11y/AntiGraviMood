import os
import re

# We will use the subagent to get the PRECISE cuisine type for a list of places
# No hardcoded maps this time.

def extract_for_ai(content):
    name_match = re.search(r'name:\s*"([^"]+)"', content)
    name = name_match.group(1) if name_match else ""
    subcats = re.search(r'subcategory:\s*\[([^\]]+)\]', content)
    subcategory = subcats.group(1) if subcats else ""
    desc = re.search(r'description:\s*["`]([^"`]+)["`]', content)
    description = desc.group(1) if desc else ""
    return name, subcategory, description

# Sample of places to fix in the 11th
places_to_fix = [
    "src/data/registry/tree/11/parmentier/kahora.ts",
    "src/data/registry/tree/11/roquette/sababa.ts", # etc.
]

# FOR NOW: Let's find all files in the 11th and extract info for the AI
def get_11th_batch():
    batch = []
    for root, dirs, files in os.walk('src/data/registry/tree/11'):
        for file in files:
            if file.endswith('.ts'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                name, sub, desc = extract_for_ai(content)
                batch.append({"path": path, "name": name, "sub": sub, "desc": desc})
    return batch

# I will give this list to the subagent to get the REAL labels
batch_11 = get_11th_batch()
with open('scratch/11th_batch_data.json', 'w') as f:
    import json
    json.dump(batch_11, f)
