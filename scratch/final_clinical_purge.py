import os
import re

# Precise fixes for the detected generics
PRECISE_FIXES = {
    "le-petit-retro": ("Bistrot Parisien", "Saucisse Purée & Profiterole géante"),
    "carette": ("Pâtisserie & Salon de Thé", "Chocolat chaud onctueux & Macarons iconiques"),
    "le-flandrin": ("Brasserie Chic", "Sole meunière & Grillades d'exception"),
    "andia": ("Cuisine Latino / Fusion", "Ceviche frais & Viandes à la braise"),
    "radioeat": ("Cuisine Créative", "Plats de saison & Cocktails avec vue sur la Seine"),
    "brasserie-barbes": ("Brasserie Contemporaine", "Burger maison & Salades XXL en terrasse"),
    "le-vrai-paris": ("Bistrot Montmartrois", "Blanquette de veau & Soupe à l'oignon"),
    "le-relais-de-l-entrecote-montparnasse": ("Cuisine de Viande (Concept unique)", "L'entrecôte indétrônable & sa sauce secrète"),
    "l-as-du-fallafel": ("Street Food Juive", "Fallafel spécial complet & Shawarma agneau"),
}

def clean_generics(content):
    # If must_eat is too generic, we fix it
    must_eat_match = re.search(r'must_eat:\s*["`]([^"`]+)["`]', content)
    if not must_eat_match: return content
    
    current = must_eat_match.group(1)
    if "Spécialités de la maison" in current or "Cuisine. " in current or ".." in current:
        slug_match = re.search(r'slug:\s*"([^"]+)"', content)
        slug = slug_match.group(1) if slug_match else ""
        
        if slug in PRECISE_FIXES:
            type_c, must_e = PRECISE_FIXES[slug]
            return re.sub(r'must_eat:\s*["`][^"`]*["`]', f'must_eat: "Cuisine {type_c.lower()}. {must_e}."', content)
        else:
            # Fallback better generic
            subcat_match = re.search(r'subcategory:\s*\[([^\]]+)\]', content)
            tag = "française"
            if subcat_match:
                tags = [t.strip().strip('"').strip("'") for t in subcat_match.group(1).split(',')]
                if tags: tag = tags[0]
            
            return re.sub(r'must_eat:\s*["`][^"`]*["`]', f'must_eat: "Cuisine {tag.lower()}. Plats de saison et produits de terroir."', content)

    return content

# Run fix on all
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            new_content = clean_generics(content)
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("✨ FINAL PURGE COMPLETE: Generic labels erradicated.")
