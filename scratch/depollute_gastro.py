import os
import re

def depollute(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Targets for deletion (the generic ones I injected earlier)
    pollution_patterns = [
        r'Cuisine française traditionnelle\.\s*',
        r'Cuisine française de saison\.\s*',
        r'Cuisine française\.\s*',
        r'Cuisine\.\s*'
    ]
    
    new_content = content
    for pattern in pollution_patterns:
        # We only remove it if it's followed by some content (signature dishes)
        new_content = re.sub(f'must_eat:\\s*["`](?:{pattern})', 'must_eat: "', new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Run on all files
count = 0
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            if depollute(os.path.join(root, file)):
                count += 1

print(f"🧹 DEPOLLUTED: {count} places are now clean of generic prefixes.")
