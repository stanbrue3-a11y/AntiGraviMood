import os
import re

# REAL EXPERT BRAIN DATA FOR THE 11TH
EXPERT_11TH_GASTRO = {
    "kahora": ("Cuisine japonaise & fusion", "Bento de saison & Ramen signature"),
    "sababa-le-gout-de-la-paix": ("Cuisine levantine", "Le Sabich complet & le Houmous à l'agneau"),
    "double-dragon": ("Cuisine chinoise fusion", "Mapo Tofu à la moelle & Riz sauté XO"),
    "repaire-cartouche": ("Cuisine de terroir & Gibier", "Pâté en croûte & Lièvre à la Royale"),
    "martin": ("Cuisine de bistrot & Petites assiettes", "Assiettes de saison & Vins nature"),
    "jones": ("Cuisine européenne moderne", "Cuisine de marché & Sélection de vins pointue"),
    "folderol": ("Cuisine glacée & Bar à vins", "Glaces artisanales & Vins nature au verre"),
    "biondi": ("Cuisine argentine au grill", "Viandes d'exception à la braise & Chimichurri"),
    "kubri": ("Cuisine libanaise contemporaine", "Mezzés créatifs & Pain maison"),
    "qui-plume-la-lune": ("Cuisine gastronomique française", "Menu dégustation & Produits d'exception")
}

def fix_11th_precision(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    slug_match = re.search(r'slug:\s*"([^"]+)"', content)
    if not slug_match: return False
    slug = slug_match.group(1)

    if slug in EXPERT_11TH_GASTRO:
        cuisine, must_eat = EXPERT_11TH_GASTRO[slug]
        full_must_eat = f"{cuisine.capitalize()}. {must_eat}."
        
        new_content = re.sub(r'must_eat:\s*["`][^"`]*["`]', f'must_eat: "{full_must_eat}"', content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    return False

# Target specifically the 11th for validation
count = 0
for root, dirs, files in os.walk('src/data/registry/tree/11'):
    for file in files:
        if file.endswith('.ts'):
            if fix_11th_precision(os.path.join(root, file)):
                count += 1

print(f"💎 PRECISION FIX: {count} places in the 11th are now Moelle-compliant.")
