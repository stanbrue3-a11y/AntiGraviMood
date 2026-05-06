import os
import re

# Mapping for automatic conversion into "Cuisine X" format
CUISINE_MAP = {
    "brasserie": "française traditionnelle",
    "bistrot": "française de saison",
    "italien": "italienne",
    "chinois": "chinoise",
    "levantin": "levantine",
    "israélien": "israélienne",
    "japonais": "japonaise",
    "taïwanais": "taïwanaise",
    "mexicain": "mexicaine",
    "burger": "américaine",
}

def gastro_prefixer(file_path):
    if not os.path.exists(file_path): return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match must_eat
    must_eat_match = re.search(r'must_eat:\s*["`]([^"`]+)["`]', content)
    if not must_eat_match: return False
    current_must_eat = must_eat_match.group(1)

    # Already starts with "Cuisine" ?
    if current_must_eat.lower().startswith("cuisine"): return False

    # Extract subcategories to determine the cuisine type
    subcat_match = re.search(r'subcategory:\s*\[([^\]]+)\]', content)
    cuisine_label = "française" # Default fallback
    if subcat_match:
        tags = [t.strip().strip('"').strip("'").lower() for t in subcat_match.group(1).split(',')]
        for tag in tags:
            if tag in CUISINE_MAP:
                cuisine_label = CUISINE_MAP[tag]
                break

    # NEW FORMAT: "Cuisine [label]. [Original content without previous prefix if any]"
    # Clean up any existing prefix like "Brasserie. " or "Street-Food. "
    clean_must_eat = re.sub(r'^[A-Z][^.]+\.\s*', '', current_must_eat)
    new_must_eat = f"Cuisine {cuisine_label}. {clean_must_eat}"
    
    if not new_must_eat.endswith('.'): new_must_eat += '.'

    new_content = content.replace(f'must_eat: "{current_must_eat}"', f'must_eat: "{new_must_eat}"')
    new_content = new_content.replace(f'must_eat: `{current_must_eat}`', f'must_eat: "{new_must_eat}"')
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Run Mass Prefixer
count = 0
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            if gastro_prefixer(os.path.join(root, file)):
                count += 1

print(f"👨‍🍳 GASTRO-PREFIXED: {count} places now start with 'Cuisine X'.")
