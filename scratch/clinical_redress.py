import os
import re

# CORRECT EXPERT DATA
REAL_GASTRO_DATA = {
    "lepoque": ("Bistrot Parisien Traditionnel", "Souris d'agneau confite & Crumble de boudin noir"),
    "val-royal": ("Brasserie Parisienne", "Croque-Monsieur extra-beurré & Menu étudiant"),
    "dilia": ("Cuisine Italienne / Toscane", "Pâtes fraîches maison & Sélection de vins nature"),
    "sugo": ("Cuisine Italienne", "Pasta al pomodoro & Tiramisu iconique"),
    "zhao-opera": ("Cuisine Chinoise (Xi'an)", "Nouilles Biang Biang & Mo Rou Jia (Pain fourré)"),
    "aux-folies": ("Bar de Quartier / Tapas", "Pinte de bière & Planches de charcuterie"),
    "la-bellevilloise": ("Cuisine de Terroir / Brunch", "Buffet Brunch géant & Plats saisonniers"),
    "la-marmite": ("Bistrot Français", "Entrecôte frites & Soupe à l'oignon"),
    "le-relais-gascon": ("Cuisine du Sud-Ouest", "Salade Landaise XXL & Confit de canard"),
    "sacree-fleur-montmartre": ("Cuisine de Viande / Steakhouse", "Côté de Boeuf & Frites maison"),
    "bouillon-pigalle": ("Bouillon Parisien", "Oeuf Mayonnaise & Saucisse Purée"),
    "le-moulin-de-la-galette": ("Bistronomie Française", "Foie gras de canard & Sole meunière"),
    "le-centenaire": ("Cuisine de Terroir", "Cuisine de marché & Vins d'auteurs"),
    "centre-broca-fcps-irest-universite-paris-1-pantheon-sorbonne": ("Cantine / Restauration Rapide", "Formules déjeuner & Café sur le pouce"),
    "rim-cafe": ("Café Italien / Sandwicherie", "Espresso & Panini à la focaccia"),
    "le-royal": ("Brasserie Classique", "Steak Tartare & Café Gourmand"),
    "pizza-del-mondo": ("Pizzeria Italienne", "Pizza Margherita & Calzone traditionnel")
}

def fix_with_truth(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    slug_match = re.search(r'slug:\s*"([^"]+)"', content)
    if not slug_match: return False
    slug = slug_match.group(1)

    if slug in REAL_GASTRO_DATA:
        cuisine, must_eat = REAL_GASTRO_DATA[slug]
        full_must_eat = f"{cuisine}. {must_eat}."
        
        # Replace must_eat
        new_content = re.sub(r'must_eat:\s*["`][^"`]*["`]', f'must_eat: "{full_must_eat}"', content)
        
        # Also fix expert_catchline to match
        new_catchline = f"{cuisine} authentique et de qualité."
        new_content = re.sub(r'expert_catchline:\s*["`][^"`]*["`]', f'expert_catchline: "{new_catchline}"', new_content)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    return False

# Run fix
count = 0
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            if fix_with_truth(os.path.join(root, file)):
                count += 1

print(f"✅ CLINICALLY REDRESSED: {count} places with fixed truth.")
