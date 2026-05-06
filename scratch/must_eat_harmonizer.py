import os
import re
import json

def harmonise_must_eat(file_path):
    if not os.path.exists(file_path): return False
    
    with open(file_path, 'r') as f:
        content = f.read()

    # Extract CUISINE TYPE
    cuisine_match = re.search(r'cuisine_type:\s*"([^"]+)"', content)
    cuisine = cuisine_match.group(1) if cuisine_match else None
    
    # Extract MUST EAT current value
    must_eat_match = re.search(r'must_eat:\s*["`]([^"`]+)["`]', content)
    current_must_eat = must_eat_match.group(1) if must_eat_match else None

    # Logic: If we already have a long, detailed must_eat, we don't overwrite it unless it's messy.
    # But we want to ensure it STARTS with the cuisine type if not present.
    
    new_must_eat = current_must_eat
    if cuisine and current_must_eat:
        if cuisine.lower() not in current_must_eat.lower():
            new_must_eat = f"{cuisine}. {current_must_eat}"
    elif cuisine and not current_must_eat:
        new_must_eat = f"{cuisine}."

    if new_must_eat and new_must_eat != current_must_eat:
        # Update both specials.must_eat AND real_talk.must_eat (for consistency)
        new_content = content
        new_content = re.sub(r'must_eat:\s*["`][^"`]*["`]', f'must_eat: "{new_must_eat}"', new_content)
        
        if new_content != content:
            with open(file_path, 'w') as f:
                f.write(new_content)
            print(f"🍽️ HARMONISED: {os.path.basename(file_path)} -> '{new_must_eat[:40]}...'")
            return True
    
    return False

# Scan registry
fixed_count = 0
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            if harmonise_must_eat(os.path.join(root, file)):
                fixed_count += 1

print(f"\nGASTRO AUDIT FINISHED: Harmonised {fixed_count} places.")
