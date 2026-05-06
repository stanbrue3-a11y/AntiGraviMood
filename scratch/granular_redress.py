import os
import re

# This time, we don't use a map, we use the existing data to craft a precise label
def get_precise_cuisine(content):
    # Extract name and subcategories
    name_match = re.search(r'name:\s*"([^"]+)"', content)
    subcat_match = re.search(r'subcategory:\s*\[([^\]]+)\]', content)
    
    name = name_match.group(1) if name_match else ""
    tags = [t.strip().strip('"').strip("'").lower() for t in subcat_match.group(1).split(',')] if subcat_match else []

    # LOGIC: Instead of a fixed map, we build a granular label from tags
    # We prioritize specific tags like 'lyonnais', 'taïwanais', 'fusion', etc.
    
    # Let's try to detect the main region + style
    region = next((t for t in tags if t in ['italien', 'chinois', 'japonais', 'israélien', 'taïwanais', 'lyonnais', 'français', 'levantin']), "française")
    style = next((t for t in tags if t in ['bistronomie', 'street-food', 'brasserie', 'cantine', 'bistrot', 'gastronomie']), "traditionnelle")
    
    # Special cases for better granularity
    if 'fusion' in tags: style = "fusion"
    if 'couscous' in tags: return "Cuisine maghrébine traditionnelle"
    if 'gua bao' in tags: return "Cuisine de rue taïwanaise"
    if 'izakaya' in tags: return "Cuisine de comptoir japonaise (Izakaya)"
    if 'bouillon' in name.lower() or 'bouillon' in tags: return "Cuisine de bouillon parisien"

    # Map adjectives
    adj_map = {
        "italien": "italienne",
        "chinois": "chinoise",
        "japonais": "japonaise",
        "israélien": "israélienne",
        "français": "française",
        "lyonnais": "lyonnaise",
        "taïwanais": "taïwanaise"
    }
    
    return f"Cuisine {adj_map.get(region, region)} {style}"

def redress_granular(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Get the precise label
    cuisine_label = get_precise_cuisine(content)
    
    # Fix must_eat structure: ensure it starts with "Cuisine [X]."
    must_eat_match = re.search(r'must_eat:\s*["`]([^"`]+)["`]', content)
    if not must_eat_match: return False
    
    current_must_eat = must_eat_match.group(1)
    
    # Strip previous attempts at "Cuisine X." or "Category. "
    clean_must_eat = re.sub(r'^(?:Cuisine|Brasserie|Bistrot|Street-Food|Cantine)[^.]+\.\s*', '', current_must_eat)
    
    new_must_eat = f"{cuisine_label.capitalize()}. {clean_must_eat}"
    if not new_must_eat.endswith('.'): new_must_eat += '.'

    new_content = content.replace(f'must_eat: "{current_must_eat}"', f'must_eat: "{new_must_eat}"')
    new_content = new_content.replace(f'must_eat: `{current_must_eat}`', f'must_eat: "{new_must_eat}"')
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# TARGETING 05 AND 13 FIRST
count = 0
for arr in ['05', '13']:
    path = f'src/data/registry/tree/{arr}'
    if os.path.exists(path):
        for root, dirs, files in os.walk(path):
            for file in files:
                if file.endswith('.ts'):
                    if redress_granular(os.path.join(root, file)):
                        count += 1

print(f"💎 GRANULAR REDRESS: {count} places in 05 & 13 fixed.")
