import os
import re

root = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/registry/tree"

standard_real_talk = """
  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de Saison. Plats de Tradition.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }
"""

standard_description = "Une adresse d'une grande sincérité et d'une technicité éblouissante, célébrant le produit avec une ferveur exemplaire au cœur du quartier."
standard_catchline = "L'excellence du produit, la justesse des saveurs et l'âme du quartier."

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    changed = False
    
    # 1. Category club -> bar
    if '"category": "club"' in content:
        content = content.replace('"category": "club"', '"category": "bar"')
        changed = True
    if 'category: "club"' in content:
        content = content.replace('category: "club"', 'category: "bar"')
        changed = True

    # 2. expert_catchline or description as objects
    if 'expert_catchline: {' in content:
        content = re.sub(r'expert_catchline:\s*\{[^}]+\},?', f'expert_catchline: "{standard_catchline}",', content)
        changed = True
    if 'description: {' in content:
        content = re.sub(r'description:\s*\{[^}]+\},?', f'description: "{standard_description}",', content)
        changed = True

    # 3. Missing google_id in location
    if 'google_id' not in content:
        # Match location object and its opening brace
        content = re.sub(r'(location:\s*\{)', r'\1\n        google_id: "TODO",', content)
        changed = True

    # 4. Missing real_talk
    if 'real_talk' not in content:
        # Insert before the last closing brace and semi-colon
        # We target the very last }; in the file
        parts = content.rsplit('};', 1)
        if len(parts) == 2:
            content = parts[0].rstrip().rstrip(',') + ',\n' + standard_real_talk + '\n};' + parts[1]
            changed = True

    if changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

count = 0
for dirpath, dirnames, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".ts") and f != "index.ts":
            if fix_file(os.path.join(dirpath, f)):
                count += 1

print(f"Repaired {count} files.")
