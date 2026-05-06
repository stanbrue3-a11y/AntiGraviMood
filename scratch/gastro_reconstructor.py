import os
import re

def reconstruct_gastro_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Extraction du nom et des infos existantes
    name_match = re.search(r'name:\s*"(.*?)"', content)
    name = name_match.group(1) if name_match else "Inconnu"
    
    # 2. Détection du type de cuisine
    # On regarde dans subcategory ou specials.cuisine
    cuisine_type = "Brasserie" # Default
    subcat_match = re.search(r'subcategory:\s*\[(.*?)\]', content)
    if subcat_match:
        subcats = subcat_match.group(1).replace('"', '').replace("'", "").split(',')
        # Priorité à certains tags
        whitelist = ['italien', 'japonais', 'français', 'vietnamien', 'indien']
        for cat in subcats:
            cat = cat.strip()
            if cat in whitelist:
                cuisine_type = cat.capitalize()
                break

    # 3. Extraction des plats (si menu_items n'est pas vide)
    # Sinon on cherche dans insider_tip
    plats = []
    items_matches = re.findall(r'name:\s*[`"](.*?)`"', content)
    if items_matches:
        # On évite les boissons et on prend les 2 premiers qui ressemblent à des plats
        plats = [p for p in items_matches if len(p) > 5 and "Pinte" not in p and "Café" not in p][:2]
    
    if not plats:
        # Fallback sur insider_tip
        tip_match = re.search(r'insider_tip:\s*[`"](.*?)[`"]', content, re.DOTALL)
        if tip_match:
            tip_content = tip_match.group(1)
            # On cherche des noms de plats cités
            if "couscous" in tip_content.lower(): plats.append("Couscous maison")
            if "croque" in tip_content.lower(): plats.append("Croque-monsieur")
            if "burger" in tip_content.lower(): plats.append("Burger signature")

    plats_str = " & ".join(plats) if plats else "Plats de saison"
    new_must_eat = f"Cuisine {cuisine_type.lower()}. {plats_str}."

    # 4. Sécurisation Backticks & Reconstruction
    # On remplace les champs texte par des versions avec backticks
    def to_backtick(match):
        field = match.group(1)
        text = match.group(2).replace('"', "'") # On évite les doubles quotes internes
        return f'{field}: `{text}`'

    content = re.sub(r'(description|expert_catchline|insider_tip|must_eat):\s*"(.*?)"', to_backtick, content)
    
    # Injection du dogme must_eat corrigé
    content = re.sub(r'must_eat:\s*`.*?`', f'must_eat: `{new_must_eat}`', content)

    return content

# Test sur le Val Royal
file_to_fix = 'src/data/registry/tree/13/port-royal/le-val-royal.ts'
# (La logique de modification réelle serait ici)
print("Script prêt pour exécution industrielle.")
