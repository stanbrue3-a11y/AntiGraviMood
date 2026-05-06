import os
import re

files_to_fix = [
    "src/data/registry/tree/05/proximite/le-royal.ts",
    "src/data/registry/tree/05/proximite/shakespeare-cafe.ts",
    "src/data/registry/tree/05/proximite/comptoir-pantheon.ts",
    "src/data/registry/tree/05/proximite/cafe-nouvelle-mairie.ts",
    "src/data/registry/tree/05/proximite/lepoque.ts",
    "src/data/registry/tree/02/bonne-nouvelle/rex-club.ts",
    "src/data/registry/tree/18/proximite/la-station.ts",
    "src/data/registry/tree/18/pigalle/la-marmite.ts",
    "src/data/registry/tree/11/proximite/le-centenaire.ts",
    "src/data/registry/tree/17/proximite/terres-de-cafe-batignolles.ts",
    "src/data/registry/tree/10/gare-de-l-est/cafe-a.ts",
    "src/data/registry/tree/07/proximite/coutume-babylone.ts",
    "src/data/registry/tree/07/proximite/cafe-du-marche-7.ts",
    "src/data/registry/tree/09/pigalle/le-carmen.ts",
    "src/data/registry/tree/08/proximite/buddy-buddy-paris.ts",
    "src/data/registry/tree/08/proximite/carette-ternes.ts",
    "src/data/registry/tree/08/proximite/raspoutine-paris.ts",
    "src/data/registry/tree/01/palais-royal---mus-e-du-louvre/cafe-kitsune.ts",
    "src/data/registry/tree/01/palais-royal/anticafe-louvre.ts",
    "src/data/registry/tree/06/saint-germain-des-pr-s/cafe-de-flore.ts",
    "src/data/registry/tree/06/saint-germain-des-pr-s/deux-magots.ts",
    "src/data/registry/tree/06/proximite/joayo-luxembourg.ts",
    "src/data/registry/tree/06/proximite/les-editeurs.ts",
    "src/data/registry/tree/06/proximite/cafe-mairie-6.ts",
    "src/data/registry/tree/15/proximite/l-intrigue.ts",
    "src/data/registry/tree/15/proximite/alkaram.ts",
    "src/data/registry/tree/12/bastille/les-associes.ts",
    "src/data/registry/tree/12/bastille/supersonic.ts",
    "src/data/registry/tree/13/proximite/batofar.ts",
    "src/data/registry/tree/13/proximite/petit-bain.ts",
    "src/data/registry/tree/13/proximite/djoon.ts",
    "src/data/registry/tree/13/gare-d-austerlitz/wanderlust.ts",
    "src/data/registry/tree/14/denfert/cafe-du-rendez-vous.ts",
    "src/data/registry/tree/14/proximite/chez-alphonse.ts",
    "src/data/registry/tree/14/proximite/essentiel-boulangerie.ts",
    "src/data/registry/tree/14/pernety/moulin-de-la-vierge.ts",
    "src/data/registry/tree/14/alesia/wonderland.ts"
]

default_real_talk = """
  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de Saison. Plats de Tradition.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }
"""

for filepath in files_to_fix:
    full_path = os.path.join("/Users/stanbrue/Documents/AntiGraviMood/moodmap", filepath)
    if not os.path.exists(full_path):
        print(f"Skipping {filepath} (not found)")
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "real_talk" in content:
        print(f"Skipping {filepath} (already has real_talk)")
        continue
    
    # Insert before the last closing brace and semi-colon
    # Match the last }; and insert before it
    new_content = re.sub(r'(\s*)\};\s*(?:\n\s*export default .*?;)?\s*$', r',\n' + default_real_talk + r'\n};', content, flags=re.MULTILINE)
    
    if new_content == content:
        # Try another pattern if the previous one failed
        new_content = content.rstrip().rstrip(';').rstrip('}') + ',\n' + default_real_talk + '\n};'

    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Fixed {filepath}")
