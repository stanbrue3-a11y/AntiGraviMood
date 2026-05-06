import os
import re

zhao_files = [
    "src/data/registry/tree/02/auto/zhao-opera.ts",
    "src/data/registry/tree/02/auto/zhao-grands-boulevards.ts",
    "src/data/registry/tree/20/auto/zhao-menilmontant.ts",
    "src/data/registry/tree/11/auto/zhao-bastille.ts",
    "src/data/registry/tree/17/auto/zhao-batignolles.ts",
    "src/data/registry/tree/10/auto/zhao-canal.ts",
    "src/data/registry/tree/01/auto/zhao-louvre.ts",
    "src/data/registry/tree/06/auto/zhao-st-germain.ts",
    "src/data/registry/tree/14/montparnasse/la-taverne-de-zhao.ts"
]

base_supabase_url = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/"

def fix_zhao(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract slug
    slug_match = re.search(r'slug:\s*[\'\"](.+?)[\'\"]', content)
    if not slug_match:
        print(f"No slug in {path}")
        return
    
    slug = slug_match.group(1)
    
    new_images = f"""  images: {{
    hero: "{base_supabase_url}{slug}/hero.jpg",
    gallery: [
      "{base_supabase_url}{slug}/1.jpg",
      "{base_supabase_url}{slug}/2.jpg",
      "{base_supabase_url}{slug}/3.jpg",
      "{base_supabase_url}{slug}/4.jpg"
    ]
  }},"""

    # Real Talk for Zhao (consistent across branch)
    new_real_talk = """  real_talk: {
    text: "Une taverne vibrante dédiée aux saveurs de Xi'an, où l'authenticité se goûte dans chaque bol de nouilles tirées à la main.",
    must_eat: "Cuisine chinoise. Biang Biang & Mo (Pain traditionnel).",
    le_secret: "La pâte est pétrie et étirée sous vos yeux, une technique ancestrale qui donne aux nouilles cette mâche unique.",
    le_son: "Le bruit sourd des pâtes que l'on claque sur le plan de travail et l'animation joyeuse des convives.",
    le_must: "Le Mo au porc mijoté, un réconfort absolu."
  }"""

    # Replace Images
    content = re.sub(r'[\'\"]?images[\'\"]?:\s*\{.+?\},', new_images, content, flags=re.DOTALL)
    
    # Replace Real Talk
    content = re.sub(r'[\'\"]?real_talk[\'\"]?:\s*\{.+?\}', new_real_talk, content, flags=re.DOTALL)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {path} (Slug: {slug})")

for f in zhao_files:
    fix_zhao(f)
