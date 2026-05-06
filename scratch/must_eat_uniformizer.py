import os
import re

def fix_structure(content):
    # Match the specials object
    specials_match = re.search(r'specials:\s*{([^}]+)}', content, re.DOTALL)
    if not specials_match: return content
    
    specials_body = specials_match.group(1)
    
    # Extract must_eat and cuisine
    must_eat_match = re.search(r'must_eat:\s*["`]([^"`]+)["`]', specials_body)
    cuisine_match = re.search(r'cuisine:\s*\[([^\]]+)\]', specials_body)
    
    if not must_eat_match: return content
    
    current_must_eat = must_eat_match.group(1)
    
    # Get first cuisine tag if available
    first_cuisine = ""
    if cuisine_match:
        tags = [t.strip().strip('"').strip("'") for t in cuisine_match.group(1).split(',')]
        if tags: first_cuisine = tags[0]

    # CHECK: Does it follow "CuisineType. Signature dishes"?
    # If it's a "TODO" or "Cuisine [Type]", we'll flag for AI fix.
    if "TODO" in current_must_eat or "Cuisine [Type]" in current_must_eat:
        return content # Skip for AI batch

    # If it doesn't have a point in the first 20 chars, it's missing the type
    if "." not in current_must_eat[:25] and first_cuisine:
        new_must_eat = f"{first_cuisine}. {current_must_eat}"
        # Ensure it starts with uppercase and ends with point
        new_must_eat = new_must_eat[0].upper() + new_must_eat[1:]
        if not new_must_eat.endswith('.'): new_must_eat += '.'
        
        # Replace only in the specials object
        new_content = content.replace(f'must_eat: "{current_must_eat}"', f'must_eat: "{new_must_eat}"')
        new_content = new_content.replace(f'must_eat: `{current_must_eat}`', f'must_eat: "{new_must_eat}"')
        return new_content

    return content

fixed_count = 0
for root, dirs, files in os.walk('src/data/registry/tree'):
    for file in files:
        if file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            new_content = fix_structure(content)
            
            if new_content != content:
                with open(path, 'w') as f:
                    f.write(new_content)
                fixed_count += 1

print(f"✅ UNIFORMIZED: {fixed_count} places followed the pattern.")
